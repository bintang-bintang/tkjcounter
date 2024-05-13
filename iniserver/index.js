const express = require(`express`)
const app = express()
const cors = require(`cors`)
app.use(cors())

// const {midOne} = require(`./middlewares/simple-middleware`)
// app.use(midOne); //use getAll on CRUD User to check!


const counterControl = require(`./routes/counter.route`)
app.use(`/counter`, counterControl)


/** define port of server */
const PORT = 8000
/** run server based on defined port */
app.listen(PORT, () => {
    console.log(`Server of TeknoHub runs on port ${PORT}`)
})
