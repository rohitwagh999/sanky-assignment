const sankyUser =
{

 mail: "sanky@gmail.com",
pass: "123"
}
// for (i = 0; i < users.length; i++)
// obj = sankyUser[0];
// console.log(obj);


function validate() {
// console.log("in validate")
// let email = document.forms["myform"]["email"].value;
let email = document.getElementById('email').value;
let passwd = document.getElementById('passwd').value;
// let y = document.forms["myform"]["password"].value;
let text;

console.log(email)
console.log(passwd)

if(email === sankyUser.mail && passwd === sankyUser.pass){
   window.location.href="welcome.html";
}
else if(email === "" || email === null) {
   text = "please enter email !";
  document.getElementById("error").innerText = text;
  // window.location.href="./index.html";
}
else if (email != sankyUser.mail || passwd != sankyUser.pass) {
    text = "Email or password is wrong";
    document.getElementById("error").innerText = text;
  
  }
  else if (email == sankyUser.mail  || passwd != sankyUser.pass) 
       {
  text = " invalid password";
  document.getElementById("error").innerText = text;

 }

}