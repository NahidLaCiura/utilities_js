// const constantMock = window.fetch;
//  window.fetch = function() {
//   console.log(arguments);

//     return new Promise((resolve, reject) => {
//         constantMock.apply(this, arguments)
//             .then((response) => {
//               console.log(response.status);
//                if(response.status >= 200 && response.status <= 299 ){
//                  console.log('200 <= response.status <= 299');
//                }else  if(response.status >= 500 && response.status <= 599){
//                 console.log('500 <= response.status <= 599');
//               }else if(response.status >= 400 && response.status <= 499) {
//                 console.log('400 <= response.status <= 499');
//               }
//                 resolve(response);
//             })
//             .catch((response) => {
//               console.log(response,"dddd");
//                 reject(error);
//             })
//     });
//  }
//  const  getTodo = ()=>{
//   fetch('https://jsonplaceholder.typicode.com/todos/2')
//   .then(response => response.json())
//   .then(json => console.log(json))
//  }
//  getTodo()


function request(url, onResponse, onError) {

  fetch(url).then(response => response.json())
    .then(json => {
      onResponse(json
        )})
    

    .catch(error => onError(error));
}

function get(url, onResponse) {
  request(url, onResponse);
}


get('https://jsonplaceholder.typicode.com/todos/', (data) => { console.log(data); })
