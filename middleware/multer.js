const multer = require('multer')

/*
//csv filefilter
const csvfilter=(req,file,cb)=>{
    if(file.mimetype.includes('csv'||'xlsx'))
    {
        cb(null,true)
    }
    else
    {
        cb("Kindly Upload CSV file",false)
        return console.log("please upload csv file");
    }
} */



const storage1= multer.diskStorage(
    {
        destination:(req,file,cb)=>
        {
            cb(null,'./files/')
        },
        filename:(req,file,cb)=>
        {
            console.log(file.originalname)
            cb(null,`${8100}-${file.originalname}`)
        }
    }
)

const upload = multer({storage:storage1})

module.exports=
upload