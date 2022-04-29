import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import { users } from "../data/users.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";  // servisler klasöründeki userService'yi kullanıcam.

console.log("User component loaded...");

// let logger1 = new BaseLogger();
// let logger1 = new ElasticLogger();
let logger1 = new MongoLogger();

let userService = new UserService(logger1); 


let user1 = new User(1,"Koray","Kaya","Çanakkale");
let user2 = new User(2,"Şeyda","Sağlam","Kastamonu");
let user3 = new User(3, "Ayşe","Çetinkaya","Antalya");

userService.add(user1); // userService içindeki add fonksiyonuna user1'i geç.
userService.add(user2);
userService.add(user3);

// console.log(userService.list());
// console.log(userService.getById(2));    // 2 numaralı müşteriyi getir.

userService.add();   // parametre istemez.

userService.getById(1);

userService.list();


let customer = {id:1, firstName: "Engin"};

customer.lastName = "Demiroğ";  // sonradan değer ekleyebiliriz.


console.log("-----------------");

userService.load();

let customerToAdd = new Customer (1, "Nuri", "Polat", "İzmir","fdsfw");    // new customer olarak göndermemiz hatalı.
customerToAdd.type = "customer";    //customer type'ne başka bir alan ekleyerek hareket ettirebiliriz.



console.log(userService.customers);
userService.add();
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted());