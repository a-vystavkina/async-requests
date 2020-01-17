const progress = document.getElementById('progress');
const form = document.getElementById('form');
const formData = new FormData(form);

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const form = document.getElementById('form');
    const formData = new FormData(form);

    const xhRequest = new XMLHttpRequest();
    xhRequest.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhRequest.onprogress = function (e) {

        progress.value = e.loaded / 1000000;
    }
    xhRequest.send(formData);

});