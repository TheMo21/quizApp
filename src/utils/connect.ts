import mongoose, { mongo } from "mongoose";

export default async function connect() {
  const mongoURI =
    "mongodb+srv://admin:BsXxf47WKrJXjg3T@pairs.cghvrbe.mongodb.net/?retryWrites=true&w=majority";
  await mongoose.connect(mongoURI);
}
