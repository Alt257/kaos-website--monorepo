const { createServer } = require('node:http');

import('./dist/kaos-website--monorepo/server/server.mjs')
  .then(({ reqHandler }) => {
    const port = Number(process.env.PORT || 4000);
    createServer(reqHandler).listen(port, () => {
      console.log(`Node SSR server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to start the SSR server', error);
    process.exitCode = 1;
  });
