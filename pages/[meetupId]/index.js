import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";

const MeetupDetail = (props) => {
  return (
    <MeetUpDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://wasim:wasim123@cluster0.cf3aw0m.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  console.log(db);

  const meetupsCollection = db.collection("meetups");
  console.log(meetupsCollection);

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  console.log(meetups);

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://wasim:wasim123@cluster0.cf3aw0m.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  console.log(db);

  const meetupsCollection = db.collection("meetups");
  console.log(meetupsCollection);

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}

export default MeetupDetail;
