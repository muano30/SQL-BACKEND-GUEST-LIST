const express = require('express');
const app = express();
const port = 4001;
const { guestRoutes } = require("./routes/guestRoutes");

app.use(express.json());

guestRoutes(app);

app.listen(port, console.log(`Example app listening on port ${port}!`));