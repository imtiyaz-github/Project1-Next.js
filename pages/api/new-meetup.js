import { MongoClient } from "mongodb";

//api/new-meetup
//post request



async function handler(req, res) {
    


  if (req.method == "POST") {
    const data = req.body;

    // const client = await MongoClient.connect(
    //   "mongodb+srv://imtiyazkhan:imtiyaz@123@cluster0.cf3aw0m.mongodb.net/meetups?=true&w=majority"
    // );

    
    const client = await MongoClient.connect(
      "mongodb+srv://Imtiyazshirasangi:imtiyaz123@cluster0.cf3aw0m.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
export default handler;
