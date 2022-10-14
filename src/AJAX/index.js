//window.onload=function(){
//https://randomuser.me/api/
//http://jsonplaceholder.typicode.com/users
const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector('#click-me');
const getTasksButton = document.querySelector('#get-tasks');

clickMeButton.addEventListener('click', ()=> {
    const q = document.querySelector("#quant").value
    const promise = getImages(q)
    promise.then(onImagesReceived)
});
getTasksButton.addEventListener('click', ()=> {
    const q = document.querySelector("#quant").value
    const promise = getTasks()
    promise.then(onTasksReceived)
});
//}
function onImagesReceived(data) {
    data.forEach(el => {
        const img = document.createElement('img')
        img.src = el.username;
        document.querySelector('#result').appendChild(img);
    })
    /*const b = [];
        const img = document.createElement('img')

        img.src =
            data.results[0].picture.large;
        b.push(img)
        console.log(2)
        document.querySelector('#result').appendChild(b[0]);*/
}
function onTasksReceived(tasks) {
    tasks.forEach(el => {
        const li = document.createElement('li')
        li.innerHTML = el;
        document.querySelector('#task-result').appendChild();
    })
}