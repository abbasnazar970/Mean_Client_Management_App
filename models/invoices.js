const mongoose=require('mongoose');

//invoice schema

const invoiceScheema = mongoose.Schema(
    {
        customer:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer"
        },
        service:
        {
            type: String,
            required : true
        },
        price:
        {
            type: String,
        },
        due:
        {
            type: String,
        },
        status:
        {
            type: String,
        },
        createdAt:
        {
            type: Date,
            default : Date.now
        },


    }
);

const Invoice=module.exports=mongoose.model('Invoice',invoiceScheema);


//get invoices
module.exports.getInvoices=(callback,limit)=>
{
    Invoice.find(callback).limit(limit).sort([['createdAt','descending']]);
}

//get invoice
module.exports.getInvoicebyId=(id,callback)=>
{
    Invoice.findById(id,callback);
}

//add invoice
module.exports.addInvoice=(invoice,callback)=>
{
    var add=
    { 
        customer:invoice.customer,
        service:invoice.service,
        price:invoice.price,
        due:invoice.due,
        status:invoice.status
    }
    Invoice.create(add,callback);
}

//update invoice

module.exports.updateInvoice=(id,invoice,callback)=>
{
    var query={_id:id};
    var update=
    {
        service:invoice.service ,
        price:invoice.price,
        due:invoice.due,
        status:invoice.status,
    }
    Invoice.findByIdAndUpdate(query,update,{},callback);
}

//remove Invoice
module.exports.removeInvoice=function(id,callback)
{
    var query={_id:id};
    Invoice.remove(query,callback);
}