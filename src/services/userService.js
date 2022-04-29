import { users } from "../data/users.js"
import DataError from "../models/dataError.js";
export default class UserService{   // export dışardan import edilmesini ifade eder.
    // dosya bazlı olduğu için default olarak UserServiceyi göster.
        constructor(loggerService){     
            this.employees = [];
            this.customers = [];
            this.errors = [];
            this.loggerService = loggerService;     //UserService constructorunda bana loggerService ver.
        }
    
        load(){     //gelen datayı employee ve customere ayırsın
            for (const user of users) { 
                switch (user.type) {      // ilgili verinin herhangi bir özelligine göre
                    case "customer":    // her bir useri dolaş ve type'ı customer
                        if(!this.checkCustomervalidityForErrors(user)){
                            this.customers.push(user);
                        }      
                        break;
                    case "employee":
                        if(this.checkEmployeeValidtyForErrors(user)){
                        this.employees.push(user);
                        }
                        break;
                    default:
                        this.errors.push(new DataError("Wrong user type !", user));
                        break;
                }
            }
        }
        


        checkCustomerValidtyForErrors(user){    
            let requiredFields = "id firstName lastName age city" .split("");    // boşluğun dışında kalanı array içine eleman olarak atar.
            let hasErrors = false;  // Hata yoksa false, hata varsa true döner.
            for (const field of requiredFields) {
                if (user(field)) {
                    hasErrors = true;   // hasError if'in içine girerse trueya çevir.
                    this.errors.push(new DataError(`Validation problem ! ${field} is required`, user)); // şu alanda doğrulama problemi var
                }
            }    

            if (Number.isNaN(Number.parseInt(user.age))) {  // kullanıcı yaşını sayıya çevirmek istediğimde bu bir sayı değilse hata ver.
                hasErrors = true;
                this.errors.push(new DataError(`Validation problem ! ${user.age} is not a number`, user));
            }

            return hasErrors;
        }

        checkEmployeeValidtyForErrors(user){    
            let requiredFields = "id firstName lastName age city salary" .split("");    // boşluğun dışında kalanı array içine eleman olarak atar.
            let hasErrors = false;  // Hata yoksa false, hata varsa true döner.
            for (const field of requiredFields) {
                if (user(field)) {
                    hasErrors = true;   // hasError if'in içine girerse trueya çevir.
                    this.errors.push(new DataError(`Validation problem on ! ${field} is required`, user)); // şu alanda doğrulama problemi var
                }
            }    

            if (Number.isNaN(Number.parseInt(+user.age))) {  // kullanıcı yaşını sayıya çevirmek istediğimde bu bir sayı değilse hata ver.
                hasErrors = true;
                this.errors.push(new DataError(`Validation problem ! ${user.age} is not a number`, user));
            }

            return hasErrors;
        }

        add(user){      
            switch (user.type) {
                case "customer":
                    if(this.checkCustomerValidtyForErrors(user)){   // doğrulamadan geçir.
                        this.customers.push(user);
                    }
                    break;
                case "employees":
                    if(this.checkCustomerValidtyForErrors(user)){ 
                        this.employees.push(user);
                    }    
                default:
                    this.errors.push(new DataError ("This user can not be added. Wrong user type !", user));   // eğer user dışında bir şey gönderirse---
                    break;                                                                                     // wrong user type diyelim.
            }
            this.loggerService.log(user);
        }
    
        listCustomers () { 
            return this.customers  
        }
    
        getCustomerById (id){
            return this.customers.find(u => u.id === id);   //find verdiğin şarta göre bir data döndür.
        }

        getCustomersSorted(){   // Elimizdeki datayı sıralayalım
            return this.customers.sort ((customer1, customer2) => {     // elimizde obje olduğu için sort kullanmalıyız.  // Array içindeki objeleri karşılaştırıcam.
                if(customer1.firstName > customer2.firstName){
                    return 1;   // Alfabede önce gelen kazanır.
                }    
                else if (customer1.firstName === customer2.firstName){
                    return 0;
                }
                else{
                    return -1;
                }
                
            });
        }    
}