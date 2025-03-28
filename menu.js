document.querySelector('.menu-toggle').addEventListener('click', function(){
    document.querySelector('.sidebar').classList.toggle('active');
});
document.querySelector('.close-sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('active');
});

function tif(){
    document.getElementById('tiffin').style.display='block';
    document.getElementById('cake').style.display='none';
    document.getElementById('sd').style.display='none';
    document.getElementById('drink').style.display='none';
    document.getElementById('lunch').style.display='none';
}
function cake(){
    document.getElementById('tiffin').style.display='none';
    document.getElementById('cake').style.display='block';
    document.getElementById('sd').style.display='none';
    document.getElementById('drink').style.display='none';
    document.getElementById('lunch').style.display='none';
}
function snack(){
    document.getElementById('tiffin').style.display='none';
    document.getElementById('cake').style.display='none';
    document.getElementById('sd').style.display='block';
    document.getElementById('drink').style.display='none';
    document.getElementById('lunch').style.display='none';
}
function drnk(){
    document.getElementById('tiffin').style.display='none';
    document.getElementById('cake').style.display='none';
    document.getElementById('sd').style.display='none';
    document.getElementById('drink').style.display='block';
    document.getElementById('lunch').style.display='none';
}
function mc(){
    document.getElementById('tiffin').style.display='none';
    document.getElementById('cake').style.display='none';
    document.getElementById('sd').style.display='none';
    document.getElementById('drink').style.display='none';
    document.getElementById('lunch').style.display='block';
}