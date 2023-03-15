import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middleware (a single function or a series of functions in Express that can modify the request and response objects, as well as call the next middleware function in the stack):
      console.log(`Request from: ${req.originalUrl}`); // Request from: /contact
      console.log(`Request type: ${req.method}`); // Request type: GET
      next();
    }, getContacts)

    // .post((req, res) => res.send("POST request successful!"));
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .get(getContactWithID)
    // .put((req, res) => res.send("PUT request successful!"))
    .put(updateContact)
    // .delete((req, res) => res.send("DELETE request successful!"));
    .delete(deleteContact);
};

// exports the routes object by default:
export default routes;
