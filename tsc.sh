rm -rf exports/cjs &&
rm -rf exports/es6 &&
tsc -m es2015 -t es6 --outDir build_tmp/es6 &&
tsc &&
mv build_tmp/es6 exports &&
rm -rf build_tmp
