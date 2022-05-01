const mongoose = require("mongoose");

module.exports = () => {
    //mongoose.connect('mongodb://localhost:27017/MindX');
    mongoose.connect(
        "mongodb+srv://thang:abc123456@cluster0.q0xp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function() {
        console.log("Connected successfully");
    });
};