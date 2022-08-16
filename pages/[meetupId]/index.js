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

//used in pages only where you want to use getStaticProps
//this should return all the dynamic segments for pregeneration
//fallback: false, when all dynamic paths are listed, true, when some
//paths are listed for pregeneration and the others will pregenerate dynamically
export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

//this pregenerates the page during the build process
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
