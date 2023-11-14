const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const fs = require('fs');
const data = require('./hospital_data.json');

router.get('/', (req,res)=>{
    res.send(data);
})

router.post('/add',(req,res)=>{
    data.push(req.body);
    fs.writeFile("./routes/hospital_data.json",JSON.stringify(data),err=>{
        if (err) throw err;  
   
        console.log("Done writing");
    });
    res.send(data);
})

router.put('/update',(req,res)=>{
    data.splice(1,1,req.body);
    fs.writeFile("./routes/hospital_data.json",JSON.stringify(data),err=>{
        if (err) throw err;  

    });
    res.send(data);
})

router.delete('/remove',(req,res)=>{
    // data.pop();
    data.splice(3,1);
    fs.writeFile("./routes/hospital_data.json",JSON.stringify(data),err=>{
        if (err) throw err;  

    });
    res.send(data);
})
module.exports=router;