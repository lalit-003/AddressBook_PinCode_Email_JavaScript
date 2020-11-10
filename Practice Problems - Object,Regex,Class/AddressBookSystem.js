class AddressBookSystem
{

    //constructor
    constructor(...parms)
    {
        this.firstName = parms[0];
        this.lastName = parms[1];
        this.address = parms[2];
        this.city = parms[3];
        this.state = parms[4];
        this.zip = parms[5];
        this.phoneNumber = parms[6];
        this.email = parms[7];
    }


//getter and setter 
get firstName() {
    return this._firstName;
}

set firstName(firstName) {
    this._firstName = firstName;
}

get lastName()
{
    return this._lastName;
}
set lastName(lastName)
{
    this._lastName = lastName;
}

get address()
{
    return this._address ;
}
set address(address)
{
   this._address = address;
}

get city()
{
return this._city;
}
set city(city)
{
    this._city = city;
} 

get state()
{
return this._state;
}
set state(state)
{
    this._state = state;
} 

get zip()
{
return this._zip;
}
set zip(zip)
{
    this._zip = zip;
} 

get phoneNumber()
{
return this._phoneNumber;
}
set phoneNumber(phoneNumber)
{
    this._phoneNumber = phoneNumber;
} 

get email()
{
return this._email;
}
set email(email)
{
    this._email = email;
} 

}
