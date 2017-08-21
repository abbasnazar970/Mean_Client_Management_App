const express=require('express');
const router=express.Router();

Customer=require('../models/customers');
Invoices=require('../models/invoices');

//Get all invoices
router.get('/',(req,res)=>
{
    Invoices.getInvoices((err,invoices)=>
    {
        if(err)
            {
                res.send(err);
            }
            res.json(invoices);
    });
});

//get invoice By Id
router.get('/:id',(req,res)=>
{
    Invoices.getInvoicebyId(req.params.id,(err,invoice)=>
    {
        if(err)
            {
                res.send(err);
            }
            res.json(invoice);
    });
});

//add invoice
router.post('/',(req,res)=>
{
    Invoices.addInvoice(req.body,(err,invoice)=>
{
        if(err)
            {
                res.send(err);
            }
            res.json(invoice)
});
});

//update invoice
router.put('/:id',(req,res)=>
{
    var id=req.params.id;
    var invoice=req.body;
    Invoices.updateInvoice(id,invoice,(err,invoice)=>
{
        if(err)
            {
                res.send(err);
            }
            res.json(invoice);
});
});

//remove invoicer
router.delete('/:id',(req,res)=>
{
    var id=req.params.id;
    Invoices.removeInvoice(id,(err,invoice)=>
{
    if(err)
        {
            res.send(err);
        }
        res.json(invoice);
});
});


module.exports=router;