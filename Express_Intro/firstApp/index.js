const express = require("express");
const app = express();
console.dir(app);

app.use(() => console.log("WE GOT A NEW REQUEST"));

// // Ports: 8080, 3000
const port = 8080;

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
