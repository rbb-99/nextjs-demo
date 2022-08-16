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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// //can perform operations that use crederntials and it won't get rendered on client
// //no need to revalidate =, cuz it runs for every incoming request
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

// NOTE changed: context available for both getStaticProps and getServerSideProps but for staticprops it wont have req and res on it
// caching available for getStaticProps but not for getServerSideProps

// not executed on client side but during server build run, gets data for server side
// render unlike with useEffect which updates data on client not server (this may affect seo)
export const getStaticProps = async () => {
  //fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // update server every 1 hour if your site changes wrt data/else in 1 hour
    revalidate: 3600,
  };
};

export default HomePage;
