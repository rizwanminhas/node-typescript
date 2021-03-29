# About

A starter project to setup typescript with node and express.

## Typescript setup with Nodejs

1. Install typescript globally 
  `npm i -g typescript`
2. Create the typescript config `tsc --init`
3. Set the following values in `tsconfig.json`:
    ```json
    "target":"es6",
    "module":"commonjs",
    "rootDir":"./src",
    "outDir":"./dist",
    "moduleResolution":"node" 
    ``` 
4. All `*.tsc` files will go to  `./src`, typing `tsc` in the terminal will generate the `*.js` files in the `./dist`.

## Typescript with expressjs

1. Install express `npm i express`.
2. Add dev dependencies `npm i -D typescript ts-node nodemon @types/express @types/node`
3. Update the `scripts` in `package.json` to
    ```json
    "scripts": {
        "start": "node dist/app.js",
        "dev": "nodemon src/app.ts",
        "build": "tsc -p ."
    }
    ```
4. To run in dev mode type `npm run dev` and go to the `localhost:9000` to see the output.