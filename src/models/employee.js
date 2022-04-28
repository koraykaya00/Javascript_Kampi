import User from "./user.js"

export default class Employee extends User{
    constructor(id, firstName, lastName, city, age, salary) { //başka bir yerde new'ledigimizde constructor'ı çalışır.
        super(id, firstName, lastName, city, age) //super demek User demek "extends User"
        this.salary = salary
    }
}