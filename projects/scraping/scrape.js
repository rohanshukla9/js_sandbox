var request = require('request');
var cheerio = require('cheerio');

request('https://www.medicaldaily.com/', function(error, response, html) {
  if (!error && response.statusCode === 200) {
    //console.log(html);

    var $ = cheerio.load(html);

    $('featured-items').each(function(i, element) {
      var a = $(this).prev();
      console.log(a.text());
    });

    //console.log($);

    //const g = document.getElementById('featured-items');

    //console.log(g);

    /*     $.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
 */
  }
});
