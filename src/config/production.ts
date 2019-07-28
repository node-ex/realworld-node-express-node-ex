import config from './development';

if (process.env.NODE_ENV === 'production') {
  config.serverHostname = process.env.SERVER_HOSTNAME || '127.0.0.1';
}

export default config;
