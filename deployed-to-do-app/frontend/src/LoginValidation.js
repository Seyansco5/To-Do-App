function validation(values) {
 let error = {} 
 const email_pattern = /^[^\s@]+[^\s@]+\.+$/
 const password_pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{15,}/
 
 if (values.email=== ""){
    error.email= "email cannot be empty"
 }
else if(email_pattern.test(values.email)) {
    error.email= "email not matched"
}else {
    error.email= ""
}

if (values.password=== ""){
    error.password= "password cannot be empty"
}
else if(password_pattern.test(values.password)){
    error.password= "password not matched"
}else {
    error.password= ""
}
 return error;
} 

export default validation;