import { isNullOrUndefined, } from '@/utils';

class Config {
  public serverPort = isNullOrUndefined(process.env.SERVER_PORT)
    ? 3000
    : parseInt(process.env.SERVER_PORT!);

  public serverHostname = process.env.SERVER_HOSTNAME || '127.0.0.1';
}

const config = new Config();

export default config;
