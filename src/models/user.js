export default class User {
    constructor(id, firstName, lastName, city, age) { //başka bir yerde new'ledigimizde constructor'ı çalışır.
        this.id = id                 
        this.firstName = firstName    //prototyping yapiyoruz.
        this.lastName = lastName
        this.city = city
        this.age = age
    }
}