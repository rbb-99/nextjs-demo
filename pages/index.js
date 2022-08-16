import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600,
  };
};

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export default HomePage;
