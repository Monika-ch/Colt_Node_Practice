const express = require("express");
const app = express();
console.dir(app);

// app.use(() => console.log("WE GOT A NEW REQUEST"));

// // In the above line of code of "app.use", Express creates 2 objects for us- (incoming) "request" and (outgoing) "response".
// // Express parses the incoming HTTP request information and then passes it in the first argument as "request" to this callback
// // So, we have access to 2 different params (made by Express). in this function that is automatically passed in the callback

// // ****SENDING REQUEST/RESPONSE****

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST");
//   // console.dir(req);
//   // res.send("HELLO, WE GO YOUR REQUEST! THIS IS THE RESPONSE!") // // sending string in response
//   // res.send({ color: "red" }); // // sending object in response
//   res.send("<h1>This is my webpage!</h1>"); // // sending html in response
// });

// // ****ROUTING****

app.get("/", (req, res) => {
  //.get takes 2 params- path and a callback function
  res.send("<h1>This is the home page!</h1>");
});

app.get("/cats", (req, res) => {
  res.send("MEOWW!!");
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOFF!!");
});

app.get("*", (req, res) => {
  // "*" is supposed to be at very end! It means to match everything else!
  res.send("I don't know that path!!");
});

// // Ports: 8080, 3000
const port = 8080;

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
