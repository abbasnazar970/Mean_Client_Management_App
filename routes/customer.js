const express=require('express');
const router=express.Router();

Customer=require('../models/customers');
Invoices=require('../models/invoices');


//Get all customers
router.get('/',(req,res)=>
{
    Customer.getCustomers((err,customers)=>
    {
        if(err)
            {
                res.send(err);
            }
            res.json(customers);
    });
});

//get customer By Id
router.get('/:id',(req,res)=>
{
    Customer.getCustomerbyId(req.params.id,(err,customer)=>
    {
        if(err)
            {
                res.send(err);
            }
            res.json(customer);
    });
});

//add customer
router.post('/',(req,res)=>
{
    var customer=req.body;
    Customer.addCustomer(customer,(error,customer)=>
{
        if(error)
            {
                req.send(error);
            }
            res.json(customer);
});
});

//update customers
router.put('/:id',(req,res)=>
{
    var id=req.params.id;
    var customer=req.body;
    Customer.updateCustomer(id,customer,(error,customer)=>
{
    if(error)
        {
            res.send(error);
        }
        res.json(customer);
});
});

//remove customer
router.delete('/:id',(req,res)=>
{
    var id=req.params.id;
    Customer.removeCustomer(id,(err,customer)=>
{
    if(err)
        {
            res.send(err);
        }
        res.json(customer);
});
});

module.exports=router;