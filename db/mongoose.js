const mongoose = require("mongoose");

const DB ='mongodb+srv://Akhil:mongo4node@db.xfsfd.mongodb.net/users?retryWrites=true&w=majority'
mongoose.connect(DB, {
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
    
}).then((con) => {
    console.log('connection successful');
}).catch((err) => {
    console.log("the error is "+err);
});
