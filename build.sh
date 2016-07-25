# ./node_modules/typescript/bin/tsc
# ./node_modules/browserify/bin/cmd.js exports/cjs/index.js -s ventana -o exports/ventana.js
rm -rf exports &&
tslint lib/**/*.ts &&
tsc &&
browserify exports/cjs/index.js -s ventana -o exports/ventana.js &&
broccoli build exports/min &&
npm run stats
