import { app } from "./app.js";
import connect from "./config/mongoose.js";


app.listen(8000, () => {
    console.log(`Server is listen on port no 3000`);
})
connect();