const mongoose=require('mongoose');
mongoose.set("strictQuery", true);
// in <password we use %40 at the place of @>
mongoose.connect("mongodb+srv://Vivek20364:Vivek9670%40%40@cluster0.z4wczdo.mongodb.net/TodoDatabase?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

mongoose.connection.on("error", (err) => {
    console.log("Connection failed");
  });
  mongoose.connection.on("connected", (connected) => {
    console.log("Connected with database");
  });