export default {
    baseUrl : "http://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest",
    defaultQueryString : "?fq=type:adres&start=0&rows=20&q={0}&fq=*:*",
    paginatedQueryString : "?fq=type:adres&start={0}&rows={1}&q={2}&fq=*:*",
    debounceWaitTime : 250
}