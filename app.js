const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const customer=require('./routes/customer');
const invoices=require('./routes/invoices');

//mongooser Connect
mongoose.connect('mongodb://abc:12345@ds149743.mlab.com:49743/invoicr');
if(mongoose.connection)
    {
        console.log("Database Connected");
    }
else
{
        console.log('Database not connected');
}

app.use(express.static(__dirname+'/client'));
app.use(bodyparser.json());

app.get('/',(req,res)=>
{
    res.send("Hello world");
});

app.use('/api/customers',customer);
app.use('/api/invoices',invoices);

app.listen(3000);
console.log('server started at 3000');