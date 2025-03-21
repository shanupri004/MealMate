function openFeedback(){
    document.getElementById('feedback').style.display='block';
    document.getElementById('overlay').style.display='block';
}

function closeFeedback(){
    document.getElementById('feedback').style.display='none';
    document.getElementById('overlay').style.display='none';
}

function alertF(){
    alert('Thank you for your Feedback!');
}

function Wh(){
    document.getElementById('whish').style.display='block';
    document.getElementById('overlay').style.display='block';
    document.getElementById('order').style.display='none';
}
function Od(){
    document.getElementById('order').style.display='block';
    document.getElementById('overlay').style.display='block';
    document.getElementById('whish').style.display='none';
}
function exit(){
    document.getElementById('whish').style.display='none';
    document.getElementById('overlay').style.display='none';
    document.getElementById('order').style.display='none';
}

function Tiff(){
    document.getElementById('expo').style.top = '100px';
    document.getElementById('cat').style.height= '660vh';
    document.getElementById('tiffin').style.display = 'block';
    document.getElementById('cake').style.display = 'none';
    document.getElementById('dessert').style.display = 'none';
    document.getElementById('drink').style.display = 'none';
    document.getElementById('mainCourse').style.display = 'none';
}
function Cak(){
    document.getElementById('expo').style.top = '100px';
    document.getElementById('cat').style.height= '1025vh';
    document.getElementById('tiffin').style.display = 'none';
    document.getElementById('cake').style.display = 'block';
    document.getElementById('dessert').style.display = 'none';
    document.getElementById('drink').style.display = 'none';
    document.getElementById('mainCourse').style.display = 'none';
}
function Des(){
    document.getElementById('expo').style.top = '100px';
    document.getElementById('cat').style.height= '1100vh';
    document.getElementById('tiffin').style.display = 'none';
    document.getElementById('cake').style.display = 'none';
    document.getElementById('dessert').style.display = 'block';
    document.getElementById('drink').style.display = 'none';
    document.getElementById('mainCourse').style.display = 'none';
}
function Drk(){
    document.getElementById('expo').style.top = '100px';
    document.getElementById('cat').style.height= '800vh';
    document.getElementById('tiffin').style.display = 'none';
    document.getElementById('cake').style.display = 'none';
    document.getElementById('dessert').style.display = 'none';
    document.getElementById('drink').style.display = 'block';
    document.getElementById('mainCourse').style.display = 'none';
}
function Mc(){
    document.getElementById('expo').style.top = '100px';
    document.getElementById('cat').style.height= '900vh';
    document.getElementById('tiffin').style.display = 'none';
    document.getElementById('cake').style.display = 'none';
    document.getElementById('dessert').style.display = 'none';
    document.getElementById('drink').style.display = 'none';
    document.getElementById('mainCourse').style.display = 'block';
}
function srch(){
    let searchWord = document.getElementById('search').value;
    let searchValue = searchWord.toLowerCase();

    if(searchValue == 'tiffin'){
        Tiff();
    }
    else if(searchValue == 'cake'){
        Cak();
    }
    else if(searchValue == 'dessert'){
        Des();
    }
    else if(searchValue == 'drink'){
        Drk();
    }
    else if(searchValue == 'main course'){
        Mc();
    }
    else {
        document.write ('404 Not Found');
    }
}