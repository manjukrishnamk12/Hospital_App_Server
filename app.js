const express = require('express');
const app = new express();
require('dotenv').config();

const routerFile = require('./routes/hosptl');
app.use('/api',routerFile);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running in PORT ${PORT}`);
})

