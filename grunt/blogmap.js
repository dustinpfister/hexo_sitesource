// make a sitemap for all blog posts.

var sm = require('sitemap'),
fs = require('fs');


fs.readdir('../source/_posts', function (err, data) {

    console.log('yes this is dog.');

    var markPat = /\.md$/;

    data.forEach(function (fileName) {

        if (fileName.match(markPat)) {

            console.log(fileName.replace(markPat,''));

        }

    });

});

/*
// Creates a sitemap object given the input configuration with URLs
var sitemap = sm.createSitemap({
hostname : 'http://dustinpfister.github.io',
cacheTime : 600000, // 600 sec - cache purge period
urls : [
]
});
// Generates XML with a callback function
sitemap.toXML(function (err, xml) {

if (!err) {

fs.writeFile('../public/blogmap.xml', xml, 'utf8', function (err) {

if (err) {

console.log('error writing sitemap.');
console.log(err);

} else {

console.log('sitemap updated');

}
});

} else {

console.log(err);

}

});

// Gives you a string containing the XML data
var xml = sitemap.toString();

*/
