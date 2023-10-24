import { client } from "./client.js";
import { config } from "./config.js";

const boxStart = document.querySelector('.start');
const btnStart = boxStart.querySelector('.btn-start');
const question  = document.querySelector('.question');
const boxStatus  = document.querySelector('.box-status');
const boxEnd = document.querySelector('.box-end');
const boxScore = boxEnd.querySelector('.score .number');
const boxCorrect = boxEnd.querySelector('.correct .number');
const animation = document.querySelector('.animation');
const boxInCorrect = boxEnd.querySelector('.incorrect .number');
const btnPlayAgain = boxEnd.querySelector('.play-btn');
btnPlayAgain.addEventListener('click', () => {
    location.reload();
})

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

        listAnsItem.querySelectorAll('.item-ans').forEach((item) => {
            item.addEventListener('click', (e) => {
                const value = e.target.dataset.index
                
                boxStatus.classList.remove('hidden');

                if(questions.answer[value].status) {
                    item.style.backgroundColor = '#62C370';
                    boxStatus.innerText = 'CORRECT'
                    boxStatus.style.backgroundColor = '#62C370';

                    // handle score
                    this.score += 500;
                    this.boxScore.innerText = this.score;

                    this.counterCorrect++;
                } else {
                    item.style.backgroundColor = '#EF3C69';
                    boxStatus.style.backgroundColor = '#EF3C69';
                    boxStatus.innerText = 'INCORRECT';

                    Array.from(listAnsItem.querySelectorAll('.item-ans')).find((item) => {
                        return questions.answer[item.dataset.index].status;
                    }).style.backgroundColor = '#62C370';

                    this.inCounterCorrect++;
                }

                setTimeout(() => {
                    Array.from(listAnsItem.querySelectorAll('.item-ans')).forEach((item) => {
                        item.style.backgroundColor = '';
                    })
                    boxStatus.classList.add('hidden');
                }, 3000)
            })
        })

    },

    getQuestions : async function (id) {
        const { data:questions, response } = await client.get(`/questions/${id}`);

        if(response.ok) {
            animation.classList.add('hidden')
            document.querySelector('.counter-ans span').innerText = `${id}`;
            document.querySelector('.wrapper-question').style.left = '0';
            this.render(questions);

        }
    },

    run : function () {
        let count = 1;
        const timeNext = 5000;
        this.getQuestions(count);

        const myInterval = setInterval(() => {
            count++;
            this.getQuestions(count);
        }, timeNext)  

        setTimeout(() => {
            this.handleBoxEnd();
            clearInterval(myInterval);
        },8*timeNext)

    },

    handleBoxEnd: function () {
        question.classList.add('hidden');
        boxEnd.classList.remove('hidden');

        boxScore.innerText = document.querySelector('.counter-score span').innerText;

        boxCorrect.innerText = this.counterCorrect;
        boxInCorrect.innerText = this.inCounterCorrect;

        const value = Math.floor((this.counterCorrect)/(this.counterCorrect + this.inCounterCorrect) * 100);
        console.log(document.querySelector('.progress-bar'));
        document.querySelector('.progress-bar').style.width = `${value}%`;
        document.querySelector('.progress-bar').innerText = `${value}%`;
    },

    start: function () {
        this.run();
        animation.classList.remove('hidden')
    }
    
}

