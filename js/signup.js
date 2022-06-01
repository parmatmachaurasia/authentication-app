
//signup function
function signup(){
event.preventDefault();
let fName=document.getElementById("first_name");
//console.log(fName.value);
let lname=document.getElementById("last_name");
let email=document.getElementById("email");
let password=document.getElementById("password");
//console.log(lname.value);
//console.log(email.value);
//console.log(password.value);
let data={
    fname :fName.value,
    lname:lname.value,
    email:email.value,
    password:password.value,
}
//console.log(data)
//convert object into the string using json api
//let dataStr =JSON.stringify(data);
//store into the local storage
//localStorage.setItem("user", dataStr);
//location.href="/login.html";

let users = localStorage.getItem("users");
users=JSON.parse(users)
console.log(users)
if(users){
users.push(data)
}
else{
    users=[];
    users.push(data)
}

let usersStr =JSON.stringify(users);
//store into the local storage
localStorage.setItem("users", usersStr);
location.href="/login.html";
}