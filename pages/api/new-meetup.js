//defines functions which have server side code, cuz api routes will run on the server never on the client
//the code in them will never get exposed to client so we can add credentials in api routes and these functions are triggered
//whenever a request is sent to these routes

//handles all thepost reuests ie creation of new meetup
export const handler = (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, description, address } = data;
  }
};
