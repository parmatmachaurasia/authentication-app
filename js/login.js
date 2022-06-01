
function login(){
    event.preventDefault();
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    //console.log(email.value);
    //console.log(password.value);
    
    //get data from local storage
    let users = localStorage.getItem("users");
    
    let data = JSON.parse(users)
    console.log(data)
    //validate the condenctial
    let authenticated=false;
  
    for(let i=0;i< data.length;i++){
      //  console.log(data[i])
      let user = data[i];

      if(email.value == user.email && password.value ==user.password){
         // location.href="/home.html";
         authenticated=true;
          break;
      }
    }

if(authenticated){
      location.href="/home.html";
}else{
    alert("user email and password doesnot match")   
}

   
}