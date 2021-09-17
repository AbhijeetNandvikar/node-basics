### Globals

- globals are bunch of variable that one can access directly to do various stuff with node.js
- Following are the important globals avaliable
  - global, \_\_dirname, processes, exports, module, require

### Module systems

- By default node.js uses commonjs module system.
- ES module system is a newer way of writing js and is also used in frontend frameworks so we should adopt to it.
- In order to use ES module syntax we have to create a js file with ".mjs" extension or explicitly mention about it in package.json file
- Be aware!! while using ES module version we can't use some of globals in this case. eg: "\_\_dirname" etc. still there are workarounds avaliable for this.

### Some important internal modules that are exported with node:

- path, fs, child_process, http.
- all these internal modules can be imported with a promises wraped around it.
- eg. if we want to import readFile from fs module we can import it in two ways
  - import {readFile} from "fs"
  - import {readFile} from "fs/promise". This will allow us to make use of async function directly.
- If we are using the ES module syntax \_\_dirname is undefined. Therefore to get the base path we can use (import.meta.url).

### Error Handling

- There are multiple ways to handle errors in node, it all depends on which way we are writing async code.
- All callbacks usually have 1st arg as err object.
- we can also use catch block while dealing with promises.
- try catch blocks are used if we are using async-await syntax.

### Important points

- We can directly use the await keyword without async if we are waiting for async task in any node module.
  When we see package version eg: lodash@4.17.21 this usually indicates major

### Creating a CLI application in node.

- "#! /usr/bin/env node". Add this line at the top of the script this tells the os that current script needs to be executed against node interpreter. It is also called a hashbang. /usr/bin/env is the path where node is installed.
- In order to use our app directly from terminal edit bin property in package.json

  - A lot of packages have one or more executable files that they'd like to install into the PATH. npm makes this pretty easy (in fact, it uses this feature to install the "npm" executable.)
    To use this, supply a bin field in your package.json which is a map of command name to local file name. When this package is installed globally, that file will be linked where global bins go so it is available to run by name. When this package is installed as a dependency in another package, the file will be linked where it will be available to that package either directly by npm exec or by name in other scripts when invoking them via npm run-script.
    So Add a bin field in package.json.

- Lastly, we must install our own package locally so we can test out the CLI. npm install -g
- Once installed, this package will have it's bin command installed into your machine's bin folder allowing us to use the reddit command.
- Next, npm install open node-fetch yargs --save

  - open - will open our browser with a URL
  - node-fetch - is a fetch client that we can use to hit the reddit API
  - yargs - will allow us to process any flags or arguments passed to the CLI

- To capture the arguments passed while running a node program we can use process.argv api. This will return a array of string as result.
  - 1st element would contain the the path where node is installed in current system.
  - 2nd argument tells about the location of current script.
  - Other elements will contain rest of the args passed.
