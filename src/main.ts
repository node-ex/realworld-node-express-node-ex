// import { experiment as fun, } from './experiments';
import { runServer as fun, } from './express/server';

if (typeof require !== 'undefined' && require.main === module) {
  fun();
}
