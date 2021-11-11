const express = require("express")
const cors = require("cors")
const db = require("./models")

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

db.sequelize.sync().then(() => {
    console.log("re-sync database")
})


const phoneRouter = require('./routes/phone');
app.use('/api/phones', phoneRouter)


app.listen(8080, () => console.log("Server Started.."))