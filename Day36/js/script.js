import { client } from "./client.js";
import { config } from "./config.js";

const boxStart = document.querySelector('.start');
const btnStart = boxStart.querySelector('.btn-start');
const question  = document.querySelector('.question');
const boxEnd = document.querySelector('.box-end');
const boxScore = boxEnd.querySelector('.score .number');
const boxCorrect = boxEnd.querySelector('.correct .number');
const animation = document.querySelector('.animation');
const boxInCorrect = boxEnd.querySelector('.incorrect .number');
const btnPlayAgain = boxEnd.querySelector('.play-btn');
btnPlayAgain.addEventListener('click', () => {
    location.reload();
})

const soundTick = document.querySelector('.sounds-tick');
const soundRight = document.querySelector('.sounds-right');
const soundWrong = document.querySelector('.sounds-wrong');

btnStart.addEventListener('click', function (e) {
    let timeStart = 3;
    const myInterval = setInterval(myTimer, 1000);
    const timer = document.querySelector('.timer');
    timer.innerText = timeStart;
    
    function myTimer() {
        timeStart--;
        timer.innerText = timeStart;
        if(timeStart === 0) {
            //run APP
            app.start();

            timer.innerText = "GO!";
            boxStart.classList.add('hidden');
            question.classList.remove('hidden');
            

            clearInterval(myInterval);
        }
    }

    document.querySelector('.time-start').classList.add('show');

})


const app = {
    boxQuestion : document.querySelector('.content-question'),
    listAns : document.querySelector('.list-ans'),
    boxScore: document.querySelector('.counter-score span'),
    score: 0,
    counterCorrect: 0,
    inCounterCorrect: 0,
    

    render : function (questions) {
        const stripHtml = (html) => html.replace(/(<([^>]+)>)/ig, "");
        const listAnsItem = this.listAns;

        this.boxQuestion.innerText = `${stripHtml(questions.question)}`;

        listAnsItem.innerHTML = `${questions.answer.map(({ content }, index) => {
            return `<div class="item-ans" data-index=${index}>${stripHtml(content)}</div>`;
        }).join('')}`;

        const div = document.createElement('div');
        div.classList.add('box-status', 'hidden');
        document.querySelector('.wrapper-question').appendChild(div);

        listAnsItem.querySelectorAll('.item-ans').forEach((item) => {
            item.addEventListener('click', (e) => {
                const value = e.target.dataset.index
                const listAnsItems = Array.from(listAnsItem.querySelectorAll('.item-ans'));
                
                div.classList.remove('hidden');

                listAnsItems.forEach((item) => {
                    item.style.backgroundColor = 'transparent';
                    item.style.color = 'transparent';
                })


                if(questions.answer[value].status) {
                    item.style.color = 'white';
                    item.style.backgroundColor = '#62C370';
                    div.innerText = 'CORRECT'
                    div.style.backgroundColor = '#62C370';

                    // handle score
                    this.score += 500;
                    this.boxScore.innerText = this.score;

                    
                    this.counterCorrect++;
                    soundRight.play();

                } else {
                    item.style.color = 'white';
                    item.style.backgroundColor = '#EF3C69';
                    div.style.backgroundColor = '#EF3C69';
                    div.innerText = 'INCORRECT';

                    listAnsItems.find((item) => {
                        return questions.answer[item.dataset.index].status;
                    }).style.backgroundColor = '#62C370';
                    listAnsItems.find((item) => {
                        return questions.answer[item.dataset.index].status;
                    }).style.color = 'white';

                    this.inCounterCorrect++;
                    soundWrong.play();
                }

            })
        })

    },

    getQuestions : async function (id) {
        const { data:questions, response } = await client.get(`/questions/${id}`);

        console.log(response);

        if(response.ok) {
            document.querySelector('.wrapper-question .box-status').remove();
            animation.classList.add('hidden')
            document.querySelector('.counter-ans span').innerText = `${id}`;
            document.querySelector('.wrapper-question').style.left = '0';
            this.render(questions);
        }
    },

    run : function () {
        let count = 1;
        const timeNext = 15000;
        this.getQuestions(count);

        const myInterval = setInterval(() => {
            count++;
            this.getQuestions(count);
        }, timeNext)  

        setTimeout(() => {
            this.handleBoxEnd();
            clearInterval(myInterval);
        }, 8*timeNext - 100)

    },

    handleBoxEnd: function () {
        question.classList.add('hidden');
        boxEnd.classList.remove('hidden');

        boxScore.innerText = document.querySelector('.counter-score span').innerText;

        boxCorrect.innerText = this.counterCorrect;
        boxInCorrect.innerText = this.inCounterCorrect;

        const value = Math.floor((+this.counterCorrect)/(+this.counterCorrect + +this.inCounterCorrect) * 100);

        document.querySelector('.progress-bar').style.width = `${value}%`;
        document.querySelector('.progress-bar').innerText = `${value}%`;
    },

    start: function () {
        this.run();
        soundTick.play();

        animation.classList.remove('hidden')
        setTimeout(() => {
            document.querySelector('.animation-time').classList.remove('hidden')
        }, 500);
    }
    
}

