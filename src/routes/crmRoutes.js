const routes = (app) => {
  app
    .route("/contacts")
    .get(
      (req, res, next) => {
        // middleware (a single function or a series of functions in Express that can modify the request and response objects, as well as call the next middleware function in the stack):
        console.log(`Request from: ${req.originalUrl}`); // Request from: /contacts
        console.log(`Request type: ${req.method}`); // Request type: GET
        next();
      },
      (req, res, next) => {
        res.send("GET request successful!");
      }
    )
    .post((req, res) => res.send("POST request successful!"));

  app
    .route("/contacts/:contactId")
    .put((req, res) => res.send("PUT request successful!"))
    .delete((req, res) => res.send("DELETE request successful!"));
};

// exports the routes object by default:
export default routes;
