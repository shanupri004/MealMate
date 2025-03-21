function openPopup(){
    document.getElementById('videoPopup').style.display='flex';
}
function closePopup(){
    document.getElementById('videoPopup').style.display='none';
}

function openThankyou(){
    document.getElementById('thank').style.display= 'block';
    document.getElementById('overlay').style.display= 'block';
}

function hideThankyou(){
    document.getElementById('thank').style.display= 'none';
    document.getElementById('overlay').style.display= 'none';
}

function opensignup(){
    document.getElementById('signup').style.display='block';
    document.getElementById('blur').style.display='block';
}
function closesignup(){
    document.getElementById('signup').style.display='none';
    document.getElementById('blur').style.display='none';
}
function openlogin(){
    document.getElementById('signup').style.display='none';
    document.getElementById('login').style.display='block';
    document.getElementById('blur').style.display='block';
}
function openLsignup(){
    document.getElementById('login').style.display='none';
    document.getElementById('signup').style.display='block';
    document.getElementById('blur').style.display='block';
}
function closelogin(){
    document.getElementById('signup').style.display='none';
    document.getElementById('login').style.display='none';
    document.getElementById('blur').style.display='none';
}