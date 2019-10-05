import config from '../utils/constants';

function ApiService(baseUrl, queryString){
    this.baseUrl = baseUrl;
    this.queryString = queryString;
    ///?fq=type:adres&start=0&rows=20&q=akkr&fq=*:*"
}
ApiService.prototype.fetchData = function(searchKey){
    let queryUrl = `${this.baseUrl}${this.queryString}`;
    queryUrl = queryUrl.replace("{0}",searchKey);
    return fetch(queryUrl,{
        method : "GET"
    })
    .then(res => res.json())
    .then(result => result.data)
    .catch(err => console.log(err.message));
}
ApiService.prototype.fetchPaginatedData = function(searchKey, start, limit){
    let queryUrl = `${this.baseUrl}${this.queryString}`;
    queryUrl = queryUrl.replace("{0}",start).replace("{1}",limit).replace("{2}",searchKey);
    return fetch(queryUrl, {
        method : "GET"
    })
    .then(res => res.json())
    .then(result => result.data)
    .catch(err => console.log(err.message))
}
// ApiService.prototype.consume = function (reader) {
//         let total = 0
//         return new Promise((resolve, reject) => {
//           function pump() {
//             reader.read().then(({done, value}) => {
//               if (done) {
//                 resolve()
//                 return
//               }
//               total += value.byteLength
//               log(`received ${value.byteLength} bytes (${total} bytes in total)`)
//               pump()
//             }).catch(reject)
//           }
//           pump()
//         })
// }
    

export default new ApiService(config.baseUrl)