//defines functions which have server side code, cuz api routes will run on the server never on the client
//the code in them will never get exposed to client so we can add credentials in api routes and these functions are triggered
//whenever a request is sent to these routes

import { MongoClient } from "mongodb";

// POST /api/new-meetup

//handles all the post requests ie creation of new meetup
const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
      client.close();
      res.status(201).json({ message: "Meetup inserted!" });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
