function validation(values) {
 let error = {}

if(values.title=== ""){
    error.title= "title cannot be empty"
} else{
    error.title= ""
}
if(values.description=== ""){
    error.description= "description cannot be empty"
} else {
    error.description= ""
}
if(values.author=== ""){
    error.author= "author cannot be empty"
} else{
    error.author= ""
}
 return error;
}

export default validation;