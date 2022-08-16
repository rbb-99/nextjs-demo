import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://photo980x880.mnstatic.com/4c2c3b111048fe85121a41c18cbbc343/almacenes-macys-482393.jpg",
    address: "Macy's Store, Broadway-24, NY, NY, USA",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://media.cntraveler.com/photos/6053b191f490bda87b43dfc7/16:9/w_2560%2Cc_limit/01-velo-header-newyork-the-edge.jpg",
    address: "Conde Nast, Licoln-4, NY, NY, USA",
    description: "This is the second meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
