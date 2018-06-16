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
    // set jquery text into the element
     $("#container-3").text(result.response.docs[0].headline.main); 
  
  
    console.log(result.response.docs[0].headline.main);
// console.log(response.docs[0].headline.main);


    // if theres an error
}).fail(function(err) {
    // do stuff bc we made a mistake
    console.log(err)
    console.log('error!')
    throw err;
});