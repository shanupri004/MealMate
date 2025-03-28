function signup(){
    document.getElementById("sign-in").style.display="block";
    document.getElementById("Login").style.display="none";
}
function closeSignup(){
    document.getElementById("sign-in").style.display="none";
    document.getElementById("Login").style.display="none";
}
function login(){
    document.getElementById("sign-in").style.display="none";
    document.getElementById("Login").style.display="block";
}
function booking(){
    var name = document.getElementById("floatingPassword").value;
    var person = document.getElementById("floatingInput").value;
    if(name == false && person == false){
        alert("please Enter the Fields")
    } else{
        alert("Booking Sucessfull")
    }
}