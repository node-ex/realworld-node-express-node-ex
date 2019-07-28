import express from 'express';
import bodyParser from 'body-parser';

import config from '@/config';
import routes from '@/express/routes';
import { registerNunjucks, } from '@/express/routes/htmls';

const expressApp = express();

expressApp.use(bodyParser.urlencoded({ extended: true, }));
registerNunjucks(expressApp);

expressApp.use((_request, _response, next) => {
  console.log('This is my custom Application-level middleware');
  next();
});

expressApp.use('/', routes.rootRouter);

expressApp.use('/htmls/', routes.htmlsRouter);

expressApp.use(routes.error404Router);

export function runServer() {
  const { serverPort, serverHostname, } = config;
  expressApp.listen(
    serverPort,
    serverHostname,
    () => {
      console.log(`Server running at http://${serverHostname}:${serverPort}/`);
    }
  );
}
