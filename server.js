import { app } from "./app.js";
import connect from "./config/mongoose.js";


// here we are first listen port 
app.listen(8000, () => {
    console.log(`Server is listen on port no 3000`);
});

// after listening the port we are connected with database
connect();