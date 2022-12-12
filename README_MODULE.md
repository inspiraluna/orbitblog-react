# Intallation ipfs and orbitdb to a standard react project
1. Create new react project ```npx create-react-app my-app```
2. Install ipfs ```yarn add ipfs```
3. Call create(options) from ```import {create} from 'ipfs'``` 
4. Run react project ```yarn start``` --> results in warnings "cannot generate source map"
    - Fix: adding GENERATE_SOURCEMAP=false to your .env https://stackoverflow.com/questions/70599784/failed-to-parse-source-map
5. Add orbit-db by ```yarn add orbit-db```
6. Add ```await OrbitDB.createInstance(ipfs, {directory: "./odb"});``` to an async function inside App.js --> results in polyfill errors
    - Fix: webpack.common.js 
    - Run ```npm run eject```
    - https://namespaceit.com/blog/how-fix-breaking-change-webpack-5-used-to-include-polyfills-for-nodejs-core-modules-by-default-error
    - results into "Module not found: Error: You attempted to import console-browserify"
    - Fix: https://stackoverflow.com/questions/72732859/create-react-app-module-not-found-you-attempted-to-import-node-modules-conso
    - add 
7. Run yarn add multiformat@9.9.0

# Making a npm library 
1. cp config/webpack.common.js config/webpack.lib-config.js
2. add variables to config/paths.js
    - moduleBuild: resolveApp('dist')
    - appModulueJs: resolveModule(resolveApp, 'src/lib') 
3. in config/webpack.lib-config.js change output.pathto paths.moduleBuild
4. change in config/webpack.lib-config.js ```entry: isEnvProduction ? paths.appModulueJs : paths.appIndexJs,```
5. add to output in config/webpack.lib-config.js       
```
      globalObject: 'this',
      libraryTarget: 'umd',
```
6. add to package.json of npm module 
    "main": "dist/index.js",
    "module": "dist/index.js",
7. In scripts/build.js change 
```const configFactory = require('../config/webpack.lib-config');``` 
    and replace:
-        paths.appBuild,
+        paths.moduleBuild,

9. run ```yarn build```


Remark: Check: 
Bug: Cannot read property 'useState' of null 
- https://github.com/facebook/react/issues/24928
- https://github.com/facebook/react/issues/24658
- https://github.com/facebook/react/issues/24774

Related information 
- How to Publish ES6 React Modules to NPM https://www.pluralsight.com/guides/publish-es6-react-modules-to-npm
- How to Build and Publish NPM packages with Webpack https://itnext.io/how-to-build-and-publish-npm-packages-with-webpack-dea19bb14627
- Publish React components as an npm package https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f
- Creating a Reusable Component Library with React, Storybook, and Webpack https://levelup.gitconnected.com/creating-a-reusable-component-library-with-react-storybook-and-webpack-c0a30076aa54
- Modern npm package 
    - https://snyk.io/blog/best-practices-create-modern-npm-package/
    - https://github.com/snyk-labs/modern-npm-package
- Atomic design https://bradfrost.com/blog/post/atomic-web-design/