class EmailAddressRegex
{

    //property
    

    //constructor 
    constructor(email)
    {
        this.email = email;
    }

    get email()
    {
    return this._email;
    }

    set email(email)
    {
        let emailRegex = RegExp('^([0-9a-zA-Z]{1,})([+-._][a-z0-9A-Z]{1,})*@([0-9a-zA-Z]{1,})(.[a-zA-Z]{2,4})?.([a-zA-Z]{2,3})$');

        if(emailRegex.test(email) == true)
         this._email = email;
        else throw "Email Format is Invalid !!";
    }
    
    toString()
    {
        return "Email : "+this.email;
    }
}

//UC1 ,Uc2,Uc3  "valid email"

let email = new EmailAddressRegex("abc.xyz@bridgelabz.co");
console.log(email.toString());


//UC 4 , UC 5
//sad case  "Invalid mail"
try{
let email = new EmailAddressRegex("abc()*@gmail.com");
console.log(email.toString());
}
catch(e)
{
    console.error(e);
}

//happy case
try{
    let email = new EmailAddressRegex("abc+100@gmail.com");
    console.log(email.toString());
    }
    catch(e)
    {
        console.error(e);
    }



