var btn = document.querySelector('button');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var numInput = document.querySelector('#number');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    var user = document.querySelector('.user');
    var n = document.createElement('li');
    n.textContent = nameInput.value + "-" + emailInput.value + "-" + numInput.value;
    user.appendChild(n);
    var edit=document.createElement('button');
    edit.textContent='Edit';
    var delbtn = document.createElement('button');
    delbtn.innerText = 'Delete';
    n.appendChild(delbtn);
    n.appendChild(edit);

    var obj = {
        name: nameInput.value, email: emailInput.value, number: numInput.value
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    delbtn.addEventListener('click', () => {
        e.preventDefault;
            user.removeChild(n);
            localStorage.removeItem(obj.email);
    });
    edit.addEventListener('click',()=>{
        e.preventDefault();
        nameInput.value=obj.name;
        emailInput.value=obj.email;
        numInput.value=obj.number;
        user.removeChild(n);
        localStorage.removeItem(obj.email);
    })
});








