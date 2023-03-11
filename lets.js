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
    var btn = document.createElement('button'); btn.setAttribute('class', 'del');
    btn.innerText = 'Delete';
    n.appendChild(btn);

    var obj = {
        name: nameInput.value, email: emailInput.value, number: numInput
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    user.addEventListener('click', (e) => {
        e.preventDefault;
        if (e.target.classList.contains('del')) {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            var text = e.target.parentNode.textContent;
            console.log(e.target.parentNode.textContent);
            var key = '';
            var count = 0;
            for (var i = 0; i < text.length; i++) {
                if (text[i] == '-') {
                    if (count == 1) {
                        break;
                    }
                    count++;
                    key = '';
                }
                else {
                    key += text[i];
                }

            }
            localStorage.removeItem(key);
        }
    })


});

const form = document.querySelector('.info');

const empty = document.querySelector('.empty');








