const exp = require('express')
const router = exp.Router()

const functions = require('../controller/index')

const multer = require('../middleware/multer')

let routes=(app)=>
{

    //savadata in the file to db
    router.post('/savefile',multer.single("upload"),functions.savecsvfile)
    //alldata
    router.post('/getalldata',functions.dataall)
    //onedata
    router.post('/getonedata',functions.dataone)
    //onedocdata more i/p fields
    router.post('/docdata',functions.docdata)
    //updateone
    router.post('/updateone',functions.onedataupdate)
    //updateall--(updateMany)=M1
    router.post('/updateall1',functions.alldataupdate)
    //updtaeall--M2
    router.post('/updateall2',functions.alldataupdate2)
    //updtaeall--M3
    router.post('/updateall3',functions.alldataupdate3)
    //countdata--M1
    router.post('/count1',functions.countdata)
    //countdata--M2
    router.post('/count2',functions.countdata2)

    app.use('/api',router)
}

module.exports=
routes