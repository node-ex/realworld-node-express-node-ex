import path from 'path';

import express from 'express';
import { Express, } from 'express-serve-static-core';
import nunjucks from 'nunjucks';

const router = express.Router();

router.route('/static')
  .get((_request, response, _next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'static.html'));
  });

router.route('/dynamic')
  .get((_request, response, _next) => {
    response.render('dynamic.njk', { name: 'Nunjucks', });
  });

export default router;

export function registerNunjucks(expressApp: Express) {
  nunjucks.configure(
    path.join(__dirname, '..', 'views'),
    {
      autoescape: true,
      express: expressApp,
    }
  );
}
