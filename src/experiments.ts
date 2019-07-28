import http from 'http';

import { inspectObject as _io, } from './utils';

export function experiment() {
  _rawHttpServer();
}

// @ts-ignore
function _typescriptCheckTest() {
  const add = (a: number, b: number) => {
    return a + b;
  };

  // Change one number to a string
  console.log(add(1, 2));
}

// @ts-ignore
function _nodeGlobalObjects() {
  const globals = {
    Buffer,
    console,
    global,
    process,
    setImmediate,
    setInterval,
    setTimeout,
    url: new URL('/foo', 'https://example.org/'),
  };
  console.log({ globals, });

  const moduleGlobals = {
    __dirname,
    __filename,
    exports,
    module,
    require,
  };

  console.log({ moduleGlobals, });
}

// @ts-ignore
function _rawHttpServer() {
  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
      const requestParameters = {
        url: request.url,
        method: request.method,
        headers: request.headers,
      };
      console.log({ requestParameters, });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const requestBodyChunks: any[] = [];
      let requestBody: string = '';
      request.on('data', (chunk) => {
        requestBodyChunks.push(chunk);
      });
      request.on('end', () => {
        requestBody = Buffer.concat(requestBodyChunks).toString();
      });
      console.log({ requestBody, });

      // const inspectionSet = _io(request);
      // debugger;

      if (request.url === '/') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write('Hello, World!\n');
        return response.end();
      } else if (request.url === '/' && request.method === 'POST') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write('Your POST body: ...\n');
        return response.end();
      } else {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write(`Your path is ${request.url}\n`);
        return response.end();
      }

      // process.exit(0);
    });

  server.listen(
    port,
    hostname,
    () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    }
  );
}

// @ts-ignore
function _helloWorld() {
  console.log('Hello, World!');
}

if (typeof require !== 'undefined' && require.main === module) {
  console.log('experiments module');
}
