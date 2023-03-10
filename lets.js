var btn=document.querySelector('button');
var nameInput=document.querySelector('#name');
var emailInput=document.querySelector('#email');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.info').style.background='#ccc'
    onsub();

    
});

const form=document.querySelector('.info');

const empty=document.querySelector('.empty');



function onsub(){
    if(nameInput.value==='' || emailInput.value===''){
        empty.innerHTML='Please enter all field';
        setTimeout(()=> empty.innerHTML='', 3000);
    }
    else {
        var obj={ name: nameInput.value,
             email:emailInput.value}
        localStorage.setItem('user',JSON.stringify(obj));
    }
}




