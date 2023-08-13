const mongoose = require('mongoose')

const userschema = mongoose.Schema(
    {   
        Id:
        {
            type:String
        },
        Name:{
            type:String
        },
        Age:{
            type:String
        },
        Gender:{
            type:String
        },
        City:{
            type:String
        },
        Mobile_no:
        {
            type:Number
        },
        Email:
        {
            type:String
        },
        Password:
        {
            type:String
        },
        Blood_Group:
        {
            type:String
        },
        Created_On:{
            type:String
        }

    }
)

const collection = mongoose.model('data',userschema)

//saving data without repeating mobilenumber and generating id(date+id) and createdon
const savedata = async(data)=>
{
    if(data.length!==0)
    {
        const existingdata = await collection.findOne({Mobile_no:data.Mobile_no})
        if(existingdata)
        {
            return false
        }
        else
        {
            const date = new Date();
            const  Id = date.toISOString().slice(0,10).replace('-','').replace('-','')

            data.Created_On = Id;
            const count = await schemamodel.countDocuments({'Created_On':Id})

            data.Id = Id+(count+1)

            const newdata = new schemamodel(data)
            const savedata = await newdata.save()
            return savedata;
        }
    } 
    else
    {
        return false
    }  
}

//FIND()==>getting all data in the collection-->find()
const alldata = async()=>
{
    const data = await collection.find()
    return data
}

//FINDONE({})==>getting one user info based on mobileno-->findOne({with one condition})
const onedata = async(data)=>
{
    const detail = await collection.findOne({Mobile_no:data.Mobile_no})
    return detail
}

//FINDONE({,})==>getting one user info based on mobileno,name,email-->findOne({with many condition})
const onedocdata = async(data)=>
{
    const docdata = await collection.findOne({Mobile_no:data.Mobile_no,Name:data.Name,Email:data.Email})
    return docdata
}

//UPDATEONE({B},{U})==>update onedata in the collection-->updateOne(onefield update)
const updateone = async(data)=>
{
    const updateonedata = await collection.updateOne({Mobile_no:data.Mobile_no},{Email:data.Email})
    return updateonedata
}

//updateMany()==>M1
const updateall = async(data)=>
{
    const dataupdate = await collection.updateMany({Mobile_no:data.Mobile_no},{$set:{Email:data.Email,Password:data.Password,Blood_Group:data.Blood_Group}})
    return dataupdate
}

//updateMany()==>M2
const updatell2 = async(data)=>
{
    const filter= 
    {
        Mobile_no:data.Mobile_no,
        Name:data.Name,
        Email:data.Email,
        Password:data.Password
    };
    const update = 
    {
        $set:{
            Blood_Group:data.Blood_Group,
            Age:data.Age
        }
    };

    const updatedata2 = await collection.updateMany(filter,update)
    return updatedata2
}

//updateall=M3
const updateall3 = async(data)=>
{
    const dataup = await collection.findOneAndUpdate({Mobile_no:data.Mobile_no,Name:data.Name},{$set:{Email:data.Email,Password:data.Password,Blood_Group:data.Blood_Group}})
    return dataup
}

//countdata=M1
const count1 = async(data)=>
{
    const datacount =await collection.countDocuments({City:data.City})
    return datacount
}

//countdata=M2
const count2 = async(data)=>
{
    const datacount = await collection.aggregate([ {$match: {City:data.City} }, {$count:"City Counts="}])
    return datacount
}

module.exports=
{
    savedata,

    alldata,
    onedata,
    onedocdata,

    updateone,
    updateall,
    updatell2,
    updateall3,

    count1,
    count2
}