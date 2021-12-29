const User= require('../model/crudModel')
const mongoose=require('../db/mongoose');
const getusers=(req,res)=>{
    
      const emp=  User.find().then((data)=>{
        res.send(data);
      })
      
      
    //  res.json({data:[]})
}
const getuserbyId=(req,res)=>{
    
      const emp=  User.findById(req.params.id).then((data)=>{
        res.send(data)
      })
      
    
}
const createuser=(req,res)=>{
  const empName = req.body.empName;
  const empEmail = req.body.empEmail;
  const empMobile = req.body.empMobile;
  const emp = new User({
    empName,
    empEmail,
    empMobile
  })
  emp.save().then((data)=>{
    res.send(data)
  })
}
const updateuser=(req,res)=>{
  console.log(req.params.id)
    User.findById(req.params.id)
    .then((emp)=>{
      emp.empName=req.body.empName;
      emp.empEmail=req.body.empEmail;
      emp.empMobile=req.body.empMobile;
      emp.save().then((data)=>{
          res.send(data)
      })
    })
    .catch((e)=>{
      console.log(e)
    })
    // console.log(emp)
   
}
const deleteuser=(req,res)=>{
    let emp=User.findById(req.params.id)
    emp.remove().then((data)=>{
        res.send(data)
    })
}
module.exports = {getusers,createuser,getuserbyId,updateuser,deleteuser}