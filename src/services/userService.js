import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
//export, disaridan import edilebilir demek
//default, UserService import edildiginde bu class'ı import et demek.

    constructor(loggerService) {
        //this.users = [] //buraya db baglanip her islem oradan yapilir. ekle, listele vs.
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    
    }
                //userService'i bir component olarak düşünüp, buradan
                //istediğimiz yerleri alıp (add(),list()...) onları
                //baska yerde new'leyerek kullanabiliriz.

                //component denince sayfa, service denince metot havuzu
    
        load() {
            for (const user of users) {
                switch (user.type) {
                    case "customer":
                        if(!this.checkCustomerValidityForErrors(user)) {
                            this.customers.push(user)
                        }
                        break;
                    case "employee":
                        if(!this.checkEmployeeValidityForErrors(user)) {
                            this.employees.push(user)
                        }
                        break;
                    default: //default kısmı yukaridaki case'lerden hariç bir şey ise
                        this.errors.push(new DataError("Wrong user type", user))
                }
            }
        }

        //React tarafında bu olaylari güzel halleden bir kütüphane > yup / formik ile birlesince de güzel
        checkCustomerValidityForErrors(user) {
            let requiredFields = "id firstName lastName age city".split(" ") //split, bize burada string array döndürür. peki neye göre parçalasın
                                                                            // 'boşluk' karakterine göre ' ' space yani.
            let hasErrors = false //varsayimimiz hata olmadigi,
            //fakat hatada alt kısma girerse (herhangi bir if'e girerse), o zaman hasErrors'i true yapacak.
            for (const field of requiredFields) {
                if(!user[field]) { //user'in required field'ları tek tek dolaşacak / '!' ile 'required değerlerden biri yoksa' diyoruz
                    hasErrors = true
                    this.errors.push(
                        new DataError(`Validation problem. ${field} is required`, user)) //${field} belirttiğimiz yer hangi alanda doğrulama problemi varsa bize onu verecek.
                                                                                        //string'leri ++ ile toplamak bellekte ayri ayri stringleri tutar fakat `${field}` tek basina kendisi
                }
            }

            if(Number.isNaN(Number.parseInt(+user.age))) { //kullanıcının yaşını sayıya çevirmek istedigimde bu bir sayi değilse, o zaman hata ver.
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${user.age} is not an age`, user))
            }

            return hasErrors //en nihayetinde for bitiminde hata var mi yok mu bakilacak
        }

        checkEmployeeValidityForErrors(user) {
            let requiredFields = "id firstName lastName age city salary".split(" ") //split, bize burada string array döndürür. peki neye göre parçalasın
                                                                            // 'boşluk' karakterine göre ' ' space yani.
            let hasErrors = false //varsayimimiz hata olmadigi,
            //fakat hatada alt kısma girerse (herhangi bir if'e girerse), o zaman hasErrors'i true yapacak.
            for (const field of requiredFields) {
                if(!user[field]) { //user'in required field'ları tek tek dolaşacak / '!' ile 'required değerlerden biri yoksa' diyoruz
                    hasErrors = true
                    this.errors.push(
                        new DataError(`Validation problem. ${field} is required`, user)) //${field} belirttiğimiz yer hangi alanda doğrulama problemi varsa bize onu verecek.
                                                                                        //string'leri ++ ile toplamak bellekte ayri ayri stringleri tutar fakat `${field}` tek basina kendisi
                }
            }

            if(Number.isNaN(Number.parseInt(user.age))) { //kullanıcının yaşını sayıya çevirmek istedigimde bu bir sayi değilse, o zaman hata ver.
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${user.age} is not an age`, user))
            }

            return hasErrors //en nihayetinde for bitiminde hata var mi yok mu bakilacak
        }

    add(user) {
        switch (user.type) {
            case "customer":
                if(!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if(!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default: //default kısmı yukaridaki case'lerden hariç bir şey ise
                this.errors.push(new DataError("This user cannot be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers() {
        return this.customers
    }

    getCustomerById(id) {
       return this.customers.find( u => u.id === id) 
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {     //elimizdeki primitive type'lari siralatir  
            if (customer1.firstName > customer2.firstName) { //fakat elimizde obje var. 2 adet bölüm verip karşılaştırmasini saglariz.
                return 1;
            } else if(customer1.firstName === customer2.firstName) {
                return 0;
            } else {
                return -1
            }
        })                                                                    
    }
}
