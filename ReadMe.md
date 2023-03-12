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
