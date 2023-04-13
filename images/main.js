function validate() {
  let fname = document.forms["form"]["fname"].value;
  let lname = document.forms["form"]["lname"].value;
  let email = document.forms["form"]["email"].value;
  if (fname == "" || lname == "" || email == "") {
    alert("Hey! All field must be filled out");
    return false;
  }else if(!/^([a-zA-Z0-9\_.]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(email)){
    alert("Please enter correct mail")
    return false
 }
  else {
    window.location.href = "index.html";
    return true;
  }
}
function welcomescreen(){
  alert( "WELCOME to MINI WORLD")
}





