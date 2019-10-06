import config from '../utils/config';

class ApiService {
    constructor(baseUrl, queryString, paginatedQueryString) {
        this.baseUrl = baseUrl;
        this.queryString = queryString;
        this.paginatedQueryString = paginatedQueryString;
        ///?fq=type:adres&start=0&rows=20&q=akkr&fq=*:*"
    }
    
    fetchData(searchKey) {
        let queryUrl = `${this.baseUrl}${this.queryString}`;
        queryUrl = queryUrl.replace("{0}", searchKey);
        return fetch(queryUrl, {
            method: "GET"
        })
            .then(res => res.json())
            .then(result => this.getResult(result))
            .catch(err => console.log(err.message));
    }

    fetchPaginatedData(searchKey, start, limit) {
        let queryUrl = `${this.baseUrl}${this.paginatedQueryString}`;
        queryUrl = queryUrl.replace("{0}", start).replace("{1}", limit).replace("{2}", searchKey);
        return fetch(queryUrl, {
            method: "GET"
        })
            .then(res => res.json())
            .then(result => this.getResult(result))
            .catch(err => console.log(err.message));
    }
    
    getResult(data) {
        let { response, spellcheck } = data;
        return {
            total_pages: response.numFound,
            docs: response.docs.map(val => val.weergavenaam),
            suggestions: (spellcheck.suggestions.length > 0 && spellcheck.suggestions[1].suggestion) || []
        };
    }
}

export default new ApiService(config.baseUrl,config.defaultQueryString, config.paginatedQueryString);