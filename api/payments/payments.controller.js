const options = {
    apiKey: '441698e89b014710f3fb1e2ccfa13e1d586c1f0db40669f1f24d8b1253f281ff',      
    username: 'sandbox',   
};
const AfricasTalking = require('africastalking')(options);

exports.pay = async (req,res) =>{
 payments = AfricasTalking.PAYMENT;
 
 
 const   productName = req.body.productName;
 const    phoneNumber = req.body.phone;
 const    currencyCode = 'KES';
 const    amount =req.body.amount;


let metadata = { "Name": req.body.username, "id": req.body.id }

let options = {
    productName,
    phoneNumber,
    currencyCode,
    amount: Number(amount),
    metadata
}

payments.mobileCheckout(options)
    .then(response => {
        console.log("response");
        res.json(response);
    })
    .catch(error => {
        console.log(error);
        res.json(error.toString());
    });
}

exports.confirm = (req, res) =>{

    sms = AfricasTalking.SMS;

    const options = {
        to: ['+254711421684'],
        message: "This is a confirmation for the payment made on TrialProduct"
    }
     
     
    sms.send(options)
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        });

}