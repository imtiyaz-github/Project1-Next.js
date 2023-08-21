import { MongoClient } from "mongodb";

//api/new-meetup
//post request

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      // "mongodb+srv://wasim:wasim123@cluster0.cf3aw0m.mongodb.net/?retryWrites=true&w=majority"
    "mongodb+srv://varshamhaske97:fX2Y1KZmbCjubXTX@cluster0.m6hewrz.mongodb.net/MeetUps?retryWrites=true&w=majority"

    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    console.log(meetupsCollection);

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
