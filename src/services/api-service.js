import config from '../utils/constants';

function ApiService(baseUrl, queryString){
    this.baseUrl = baseUrl;
    this.queryString = queryString;
    ///?fq=type:adres&start=0&rows=20&q=akkr&fq=*:*"
}
ApiService.prototype.fetchData = function(searchKey){
    let queryUrl = `${this.baseUrl}${this.queryString}`;
    queryUrl = queryUrl.replace("{0}",searchKey);
}
ApiService.prototype.fetchPaginatedData = function(searchKey, start, limit){
    let queryUrl = `${this.baseUrl}${this.queryString}`;
    queryUrl = queryUrl.replace("{0}",start).replace("{1}",limit).replace("{2}",searchKey);

}
ApiService.prototype.concurrentfetch = async function(...fetch){
    let arrayOfTask = [];
    
    arrayOfTask.push(await Promise.all(fetch));
    return arrayOfTask;
}

export default new ApiService(config.baseUrl)