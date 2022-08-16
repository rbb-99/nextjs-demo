import MeetupDets from "../../components/meetups/MeetupDets";

const MeetupDetails = () => {
  return (
    <MeetupDets
      image="https://photo980x880.mnstatic.com/4c2c3b111048fe85121a41c18cbbc343/almacenes-macys-482393.jpg"
      title="First Meetup"
      address="Macy's Store, Broadway-24, NY, NY, USA"
      description="This is the first meetup"
    />
  );
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://photo980x880.mnstatic.com/4c2c3b111048fe85121a41c18cbbc343/almacenes-macys-482393.jpg",
        title: "First Meetup",
        address: "Macy's Store, Broadway-24, NY, NY, USA",
        description: "This is the first meetup",
      },
    },
  };
};

export default MeetupDetails;
