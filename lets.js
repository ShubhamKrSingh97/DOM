var btn = document.querySelector('button');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var numInput = document.querySelector('#number');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    var obj = {
        name: nameInput.value, email: emailInput.value, number: numInput.value
    }
    display(obj);
    axios.post("https://crudcrud.com/api/5cb2b7e480c5413cb54e47d54f44a8ee/appointmentData", obj);

});

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/5cb2b7e480c5413cb54e47d54f44a8ee/appointmentData").then((response) => {
        for (var i = 0; i < response.data.length; i++) {
             display(response.data[i]);
        }
    }).catch(err=>{console.log(err)})
})

function display(res) {
    var user = document.querySelector('.user');
    var n = document.createElement('li');
    n.textContent = res.name + "-" + res.email + "-" + res.number;
    user.appendChild(n);
    var edit = document.createElement('button');
    edit.textContent = 'Edit';
    var delbtn = document.createElement('button');
    delbtn.innerText = 'Delete';
    n.appendChild(delbtn);
    n.appendChild(edit);
    delbtn.addEventListener('click', (e) => {
        e.preventDefault;
        user.removeChild(n);
    });
    edit.addEventListener('click', (e) => {
        e.preventDefault();
        nameInput.value = res.name;
        emailInput.value = res.email;
        numInput.value = res.number;
        user.removeChild(n);
    })
}







