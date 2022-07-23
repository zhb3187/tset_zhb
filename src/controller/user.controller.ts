import { Controller, Inject, Query, Get } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserLoginDTO } from '../dto/user.dto';
import { UserModel } from '../model/user.model';
import { JwtService } from '@midwayjs/jwt';

@Controller('/user')
export class userController {
  @Inject()
  ctx: Context;

  @Inject()
  UserModel: UserModel;

  @Inject()
  jwt: JwtService;

  @Get('/login')
  async getuser(
    @Query('username') username: UserLoginDTO,
    @Query('password') password: UserLoginDTO
  ) {
    const selid = await this.UserModel.getUserByUsernameAndPassword(
      username,
      password
    );

    if (selid.length > 0) {
      return {
        code: 200,
        result: 'success',
        message: '登录成功',
        data: this.jwt,
      };
    } else {
      return {
        code: 400,
        result: 'error',
        message: '账号或密码不正确',
        data: null,
      };
    }
  }
}
