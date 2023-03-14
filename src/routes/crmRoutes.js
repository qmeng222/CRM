const routes = (app) => {
  app
    .route("/contacts")
    .get((req, res) => res.send("GET request successful!"))
    .post((req, res) => res.send("POST request successful!"));

  app
    .route("/contacts/:contactId")
    .put((req, res) => res.send("PUT request successful!"))
    .delete((req, res) => res.send("DELETE request successful!"));
};

// exports the routes object by default:
export default routes;
