import User from "./user.js"

export default class Customer extends User{     
    constructor(id, firstName, lastName, city, age, creditCardNumber) { //başka bir yerde new'ledigimizde constructor'ı çalışır.
        super(id, firstName, lastName, city, age) //super demek User demek "extends User"
                                                //yani kalan bilgileri User'dan çeker.
        this.creditCardNumber = creditCardNumber
    }
}

