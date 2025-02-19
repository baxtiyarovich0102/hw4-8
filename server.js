import { app } from "./middlewares/app.middleware.js";
let PORT = 7000 
app.listen(PORT, console.log('This server is running on http://localhost:' + PORT))