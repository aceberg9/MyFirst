
function getImagesOld(q) {
    const promise = $.ajax('http://jsonplaceholder.typicode.com/users', {})
        return promise
};
function getImages(q) {
    const promise = axios.get('http://jsonplaceholder.typicode.com/users', {})
    return promise.then((data)=>{
        return data.data
    })

};
function getTasks() {
    const promise = axios.get('http://jsonplaceholder.typicode.com/users', {})
    return promise.then((data) => {
        return data.data
    })
}
/*

function getImages(param, successCallBack) {
    for (let i=1; i<=param; i++) makeRequest(successCallBack)
}
*/
