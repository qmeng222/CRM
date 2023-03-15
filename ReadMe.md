# CRM

## This repository is dedicated to enhancing proficiency in building RESTful APIs with Node.js and Express for constructing robust, scalable APIs.

---

### Setup:

1. Create a new `package.json` file containing metadata for this project.

   ```
   npm init

   Package name: crm
   Version: 1.0.0
   Description: RESTful APIs built with Node.js and Express
   Entry point: index.js
   Test command:
   Git repository: git+https://github.com/qmeng222/CRM.git
   Keywords: REST API, Node, Express
   ```

2. Installs the Express.js framework locally (installed in the current directory under the `node_modules` folder, available only within the current project or application, and will not be installed globally):
   - [x] use the --save option to keep track of the package used in my project and make sure that other developers working on the project can easily install the same packages by running `npm instal`.
   - [x] use the -dev (devDependencies) option if I am using a package that is only required during development or testing, such as a testing library or build tool.
   ```
   npm install express --save
   ```
3. Install Mongoose (a library that simplifies the process of working with MongoDB by providing a schema-based solution for modeling data):
   ```
   npm install mongoose --save
   ```
4. Install Babel components as devDependencies:
   - [x] @babel/core: the core Babel package that transforms ES6+ code into backward-compatible JavaScript code that can run in older browsers
   - [x] @babel/cli: the command-line interface for Babel that lets you run Babel from the terminal
   - [x] @babel/node: a Babel package that lets you run Node.js scripts with Babel transpilation
   - [x] @babel/preset-env: automatically determines which plugins to use based on your target environment, it allows you to write modern JavaScript code without worrying about compatibility issues
   ```
   npm i --save-dev @babel/core @babel/cli @babel/node @babel/preset-env
   ```
5. Install the Node.js middleware module `body-parser`:
   ```
   npm install body-parser --save
   ```

### References & Libraries:

1. How to Connect to MongoDB Atlas: https://studio3t.com/knowledge-base/articles/connect-to-mongodb-atlas/
2. KoaJS (a minimalist web framework for Node.js): https://koajs.com/
3. Swagger (an open-source framework for designing, building, documenting, and testing RESTful APIs): https://swagger.io/
4. LoopBack (an open-source Node.js framework for building APIs and microservices): https://loopback.io/
5. JWT (security features for APIs): https://jwt.io/
