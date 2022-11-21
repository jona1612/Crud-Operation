const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./Routes/employee")

const app = express()
const PORT = process.env.PORT || 5000
const URL = "mongodb+srv://john:Developer123@cluster0.hsmfp.mongodb.net/CrudOperation?retryWrites=true&w=majority"

mongoose.connect(URL).then((res) => console.log("mongoDB is connected")).catch((err) => console.log(Error))

app.use(express.json())
app.use(cors())
app.use('/api', router)



app.listen(PORT, () => {
    console.log(`Server is running at port-${PORT}`);
})