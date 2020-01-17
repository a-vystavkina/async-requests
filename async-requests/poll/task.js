const pollTitle = document.getElementById('poll__title');
const pollAnswer = document.getElementById('poll__answers');
const xhRequest = new XMLHttpRequest();
xhRequest.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhRequest.send();
xhRequest.addEventListener('readystatechange', () => {

    if (xhRequest.readyState === 4 && xhRequest.status === 200) {

        const data = JSON.parse(xhRequest.responseText).data;
        pollTitle.innerText = data.title;

        for (const answer of data.answers) {

            const button = `<button class="poll__answer">${answer}</button>`;

            pollAnswer.insertAdjacentHTML('beforeend', button);
        }

        const answers = document.querySelectorAll('.poll__answer');
        
        for (const answer of answers) {
            answer.addEventListener('click', () => {
                alert('Спасибо, ваш вопрос засчитан!')
            });
        }
    }
});
