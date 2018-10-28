# :atom_symbol: React Boilerplate

## :running: Getting started

**You can use this repo one of two ways.**
1. Clone the repo directly.
    * Change package.json to reflect new project you are working on.
    * Change git from pointing to this directory to point at your new project repo.
2. Use [generate-react-boilerplate](https://github.com/skellertor/generate-react-boilerplate) generator to create a new react project that uses a new package.json and is
not linked to this git repo. `generate-react-boilerplate` can be found [here](https://github.com/skellertor/generate-react-boilerplate). Just follow
the directions in the `README.md`.

# :1234: Steps to get up an running

1. If you cloned this repo from the generator tool [generate-react-boilerplate](https://github.com/skellertor/generate-react-boilerplate)
you already have all the dependencies installed. If you cloned this repo directly you will have do an `npm install` in the root of your project.

2. After the dependencies are installed you can run one of twelve different scripts that run tests, lint, create a build, 
or run webpack-dev-server for development.

### Developing
```
npm run [local | dev | stage | prod]:server
```
This runs `webpack-dev-server` and serves the build on port 3000. Any changes to the source code will cause a hot-reload

### Running Tests
```
npm run test
```
This uses mocha to run any files under the `/src` directory that has a name that end with `**.test.js` (example: NewComponent.test.js)

### Linting
*For linting .js files run*
```
npm run lint
```
*To auto-fix most errors run*
```
npm run lint:fix
```
*To lint sass files run*
```
npm run lint:sass
```

### Building for Deploy
```
npm run [local | dev | stage | prod]:build
```
Running for `prod` will minify and uglify the build files. It will also remove the source maps. All needed files will be saved
to the `/dist` directory
