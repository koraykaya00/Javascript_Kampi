import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"
//userService.js içerisinde export ederken "default" olmasaydi,
//bunun içerisinde süslü parantez olarak kullanirdik.
//{import UserService} gibi.

console.log("User component is here")

let logger1 = new BaseLogger() //ElasticLogger, MongoLogger
let userService = new UserService(logger1) //new'leyerek class'ı kullanabiliriz.


let user1 = new User(1, "Ataberk", "Çetinkaya", "Bursa")
let user2 = new User(2, "Yeliz", "Polat", "Bursa")

userService.add(user1)
userService.add(user2)
//userları ekledigimiz yer olarak düsünülebilir.

//console.log(userService.list()) //user'ları veren metot
// userları listeledimiz sayfa olarak düşünülebilir
//console.log(userService.getById(1))
// userların detayini aldıgımız sayfa olarak düsünülebilir.


//prototyping - sonradan değer eklendi
let customer = {id: 1, firstName: "Berk"}
customer.lastName = "linux"

console.log(customer.lastName)

console.log("----------------------------------")
userService.load()

let customerToAdd = (new Customer(1, "Ataberk", "Çetinkaya", "Bursa", "asdds" )) //wrong user type olabilir çünkü usertype yanlış olabilir,
customerToAdd.type = "customer"                                                 //olmasa bile, validation'dan da geçmesi gerekecek

userService.add(customerToAdd)                                                     
                                                                        
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors) //error olanlar buraya
console.log(userService.getCustomersSorted())

