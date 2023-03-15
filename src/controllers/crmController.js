import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

// export const addNewContact = (req, res) => {
//   let newContact = new Contact(req.body);

//   newContact.save((err, contact) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(contact);
//   });
// };

export const addNewContact = async (req, res) => {
  try {
    let newContact = new Contact(req.body);
    let savedContact = await newContact.save();
    res.json(savedContact);
  } catch (err) {
    res.send(err);
  }
};
