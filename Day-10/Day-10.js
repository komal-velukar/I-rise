function Login(event){
    event.preventDefault();
    alert("Working..")
    console.log(document.getElementById("email").value)

    const userEmail=document.getElementById("emeil").value;
    const userpassword=document.getElementById("password").value;
    console.log(userEmail, userPassword)
    if(userEmail && userPassword ){
        const userData={email:userEmail,password:userPassword};
        localStorage.setItem("usercredits",JSON.stringify(userdata))
document.getElementById("email").value="";
document.getElementById("password").value=""; 
return alert("Data added sucessfully.") 
  }else{
    return alert("all fields are important")
  }
}