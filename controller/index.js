const service = require('./service')
const csv = require('csvtojson')

//saving data --> from csv file
const savecsvfile = async(req,res)=>
{
    try
    {
        if((req.file==undefined)||(req.file==null))
        {
            res.send({code:404,message:'please upload csv file'})
            return console.log('kindly select and upload csv file')
        }
        
        let path = './files/'+req.file.filename
        let details = await csv().fromFile(path)

        for(let items of details)
        {
            await service.savedata(items)
        }
        res.send({code:200,success:true,message:'upload successfully'})


    }catch(error)
    {
        res.send({status:error,message:'not uploaded'})
    }
}

//alldata
const dataall = async(req,res)=>
{
    const display = await service.alldata()
    res.send(display)
}

//onedocumentdata
const dataone = async(req,res)=>
{
    const display = await service.onedata(req.body)
    res.send(display)
}

//onedocdata by more i/p
const docdata = async(req,res)=>
{
    const display = await service.onedocdata(req.body)
    res.send(display)
}

//updataeone
const onedataupdate = async(req,res)=>
{
    const display = await service.updateone(req.body)
    res.send(display)
}

//updateall
const alldataupdate = async(req,res)=>
{
    const display = await service.updateall(req.body)
    res.send(display)
}

//updateall-m2
const alldataupdate2 = async(req,res)=>
{
    const display = await service.updatell2(req.body)
    res.send(display)
}

//updateall-m3
const alldataupdate3 = async(req,res)=>
{
    const display = await service.updateall3(req.body)
    res.send(display)
}

//countdoc-m1
const countdata = async(req,res)=>
{
    try
    {
        const count = await service.count1(req.body);
        res.send({ success: true, count });
    }catch (error)
    {
        res.send({ success: false, message: 'Internal server error.' });
    }
}

const countdata2 = async(req,res)=>
{
    const display = await service.count2(req.body)
    res.send(display)
}

module.exports=
{
    savecsvfile,
    dataall,
    dataone,
    docdata,
    onedataupdate,
    alldataupdate,
    alldataupdate2,
    alldataupdate3,
    countdata,
    countdata2
}