var mailer = require("nodemailer");

var smtpTransport = mailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "Rostislav007",
        pass: "007"
    }
});

var mail = {
    from: "Imtacademy@Gmail.com",
    to: "Rostislav007",
    subject: "Node.js",
    text: "Hello World",
    html: "<b>Hello World</b>"
}

smtpTransport.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    smtpTransport.close();
});