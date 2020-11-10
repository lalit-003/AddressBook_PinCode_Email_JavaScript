class PinCodeRegex
{

    //property
    

    //constructor 
    constructor(pinCode)
    {
        this.pinCode = pinCode;
    }

    get pinCode()
    {
    return this._pinCode;
    }

    set pinCode(pinCode)
    {
        let pinCodeRegex = RegExp('^[0-9]{3}[; ;]{0,1}[0-9]{3}$');
        if(pinCodeRegex.test(pinCode) == true)
         this._pinCode = pinCode;
        else throw "PinCode Format is Invalid !!";
    }
    
    toString()
    {
        return "Pincode : "+this.pinCode;
    }
}

//UC1 "valid pincode"

let pincode1 = new PinCodeRegex(400088);
console.log(pincode1.toString());



//Uc -2 "Invalid pincode"

try{
    let pincode2 = new PinCodeRegex('A400088');
    console.log(pincode2.toString());
    }
    catch(e)
    {
        console.error(e);
    }

    // UC 3
    try{
        let pincode3 = new PinCodeRegex('400088B');
        console.log(pincode3.toString());
        }
        catch(e)
        {
            console.error(e);
        }

 //UC4

 try{
    let pincode3 = new PinCodeRegex('400 088');
    console.log(pincode3.toString());
    }
    catch(e)
    {
        console.error(e);
    }