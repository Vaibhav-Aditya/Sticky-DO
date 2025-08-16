const mongoose=require('mongoose');

function connectToDB(){
    const URI=process.env.MONGO_URI;
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db=mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('connected', () => {
        console.log('DB connected');
    });
}
module.exports = connectToDB;