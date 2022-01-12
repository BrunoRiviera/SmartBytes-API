require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");


connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", require('./routes/noteRoute'));

app.get('/', function (req, res) {
    res.send("ESTA ES LA API");
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
