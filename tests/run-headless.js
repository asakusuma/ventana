const spawn = require('child_process').spawn;
const server = spawn('node', ['tests/app/server']);

var test = null;

server.stdout.on('data', (data) => {
  // Wait for signal that test app has booted
  if (data.indexOf('Serving Ventana Test App') > -1 && !test) {
    var env = Object.create( process.env );

    // Uncomment to debug headless tests
    // env.DEBUG = 'nightmare';

    test = spawn('./node_modules/mocha/bin/mocha', ['tests/headless/'], { env: env });

    test.stderr.on('data', (data) => {
      console.log(`Test Error: ${data}`);
    });

    test.stdout.on('data', (data) => {
      console.log(`${data}`);
    });

    test.on('close', (code) => {
      server.kill();
      process.exit(code);
    });
  }
});

server.stderr.on('data', (data) => {
  console.log(`Error: ${data}`);
});
