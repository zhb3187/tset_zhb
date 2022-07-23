import { MidwayConfig } from '@midwayjs/core';
import * as path from 'path';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1658514349480_2131',
  koa: {
    port: 7001,
  },
  orm: {
    type: 'sqlite',
    database: path.join(__dirname, '../util/testSql.sqlite'),
    synchronize: true,
    logging: true,
  },
  jwt: {
    token: '3571592468',
  },
} as MidwayConfig;
