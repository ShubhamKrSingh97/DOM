var btn=document.querySelector('button');
var nameInput=document.querySelector('#name');
var emailInput=document.querySelector('#email');
var numInput=document.querySelector('#number');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    var user=document.querySelector('.user');
    var n=document.createElement('li');
    n.textContent=nameInput.value;
    user.appendChild(n);
    var e=document.createElement('li');
    e.textContent=emailInput.value;
    user.appendChild(e);
    var nu=document.createElement('li');
    nu.textContent=numInput.value;
    user.appendChild(nu);
    
    var obj={
        name:nameInput.value, email: emailInput.value, number: numInput

    }
    localStorage.setItem(`${numInput.value}`,JSON.stringify(obj));

    
});

const form=document.querySelector('.info');

const empty=document.querySelector('.empty');








