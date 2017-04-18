// make a sitemap for all blog posts.

var sm = require('sitemap'),
//fs = require('fs'),
dir = require('node-dir'),
basePath = 'https://dustinpfister.github.io',
postPat = /\\\d{4}\\\d{2}\\\d{2}\\.+/,
modDatePat = /<time.+itemprop="dateModified">/g,
urls = [];

dir.readFiles('..\\public',

    function (err, content, filename, next) {

    var url;

    if (filename.match(postPat)) {

        url = basePath + filename.match(postPat)[0].replace(/\\/g, '\/');

        urls.push(url);

        console.log(content.match(modDatePat)[0].split(' '));

    }

    next();

},

    function (err, files) {

    console.log(urls);

});

/*
fs.readdir('../source/_posts', function (err, data) {

var markPat = /\.md$/;

data.forEach(function (fileName) {

var postName,
postPath;

if (fileName.match(markPat)) {

postName = fileName.replace(markPat, '');
postPath = basePath + '/' + postName + '/index.html';

console.log(postName);

}

});

});

 */

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
