const mongoose=require('mongoose');

//customer schema

const customerScheema = mongoose.Schema(
    {
        firstname:
        {
            type: String,
            required : true
        },
        lasttname:
        {
            type: String,
            required : true
        },
        Company:
        {
            type: String,
        },
        logo_url:
        {
            type: String,
        },
        email:
        {
            type: String,
        },
        phone:
        {
            type: String,
        },
        adress:
        {
            street : String,
            city: String,
            state : String,
            zip: String
        },
        createdAt:
        {
            type: Date,
            default : Date.now
        },


    }
);

const Customer=module.exports=mongoose.model('Customer',customerScheema);


//get customers
module.exports.getCustomers=(callback,limit)=>
{
    Customer.find(callback).limit(limit);
}

//get customer
module.exports.getCustomerbyId=(id,callback)=>
{
    Customer.findById(id,callback);
}

//add customer
module.exports.addCustomer=(customer,callback)=>
{
    var add=
    {
        firstname:customer.firstname,
        lasttname:customer.lasttname,
        Company:customer.Company,
        logo_url:customer.logo_url,
        email:customer.email,
        phone:customer.phone,
        adress:
        {
            street:customer.adress.street,
            city:customer.adress.city,
            state:customer.adress.state,
            zip:customer.adress.zip
        }
    }
    Customer.create(add,callback);
}


//update customer
module.exports.updateCustomer=(id,customer,callback)=>
{
    var query={_id:id};
    var update=
    {
        firstname:customer.firstname,
        lasttname:customer.lasttname,
        Company:customer.Company,
        logo_url:customer.logo_url,
        email:customer.email,
        phone:customer.phone,
        adress:
        {
            street:customer.adress.street,
            city:customer.adress.city,
            state:customer.adress.state,
            zip:customer.adress.zip
        }
    }
    Customer.findByIdAndUpdate(query,update,{},callback);
}

//remove Customer
module.exports.removeCustomer=function(id,callback)
{
    var query={_id:id};
    Customer.remove(query,callback);
}