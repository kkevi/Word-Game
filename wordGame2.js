const form = document.querySelector('form');
const firstWord = document.querySelector('.content_firstWord');
const userInput = document.querySelector('input');
const result = document.querySelector('.content_result');

let todayDate = document.querySelector('.menu_date');

let nowDate = new Date;
let year = nowDate.getFullYear();
let month = nowDate.getMonth() + 1;
let date = nowDate.getDate();

console.log(year);

todayDate.textContent = `${year}-${month < 10? '0' + month : month}-${date < 10? '0' + date : date}`;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(firstWord.textContent[firstWord.textContent.length-1] === userInput.value[0]){
        result.textContent = 'Good!';
        firstWord.textContent = userInput.value;
        userInput.value = ''
    }else{
        result.textContent = 'Try Again';
        userInput.value = '';
    }
})