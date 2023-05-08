var btn = document.querySelector('button');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var numInput = document.querySelector('#number');
btn.addEventListener('click', (e) => {
    e.preventDefault()
    var obj = {
        name: nameInput.value, email: emailInput.value, number: numInput.value
    }
    console.log(obj)

    axios.post("http://localhost:4000/add-user", obj)
        .then(res => {
            display(res.data);
        })
        .catch(err => {
            console.log(err)
        })

});

window.addEventListener('DOMContentLoaded', async () => {
    const response = await axios.get("http://localhost:4000/allData")
    try {
        for (var i = 0; i < response.data.length; i++) {
            display(response.data[i]);
        }
    }
    catch (error) {
        console.log(error);
    }
})

function display(res) {
    var user = document.querySelector('.user');
    var n = document.createElement('li');
    n.textContent = res.name + "-" + res.email + "-" + res.phoneNo;
    user.appendChild(n);
    var edit = document.createElement('button');
    edit.setAttribute('class','button');
    edit.textContent = 'Edit';
    var delbtn = document.createElement('button');
    delbtn.setAttribute('class','button');
    delbtn.innerText = 'Delete';
    n.appendChild(delbtn);
    n.appendChild(edit);

    delbtn.addEventListener('click', (e) => {
        e.preventDefault;
        user.removeChild(n);
        axios.delete(`http://localhost:4000/delete/${res.id}`)
    });

    edit.addEventListener('click', (e) => {
        e.preventDefault();
        nameInput.value = res.name;
        emailInput.value = res.email;
        numInput.value = res.phoneNo;
        user.removeChild(n);
        axios.delete(`http://localhost:4000/delete/${res.id}`)
            .catch(err => { console.log(err) })

    })
}







