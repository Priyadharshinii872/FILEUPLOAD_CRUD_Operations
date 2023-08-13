const app = require('express')()
const body=require('body-parser')
app.use(body.urlencoded({extended:true}))
app.use(body.json())

require('dotenv').config()
require('./config/db')
require('./routes/routes')(app)

const port=7000;

app.listen(port,()=>
{
    console.log(`the server is listening on the port:${port}`)
})