//Global Variables

var searchTerm = "trump";

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
 'api-key': "6ea908990aa6408c900d8f4867a3b02a",
 'q': searchTerm,
 'fq': "president",
 'begin_date': "19920901",
 'end_date': "19940901"
});
$.ajax({
 url: url,
 method: 'GET',
}).done(function(result) {

 console.log(result);
}).fail(function(err) {
 throw err;
});