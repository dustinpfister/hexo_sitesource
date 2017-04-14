var sm = require('sitemap'),
fs = require('fs');

// Creates a sitemap object given the input configuration with URLs
var sitemap = sm.createSitemap({
        hostname : 'http://dustinpfister.github.io',
        cacheTime : 600000, // 600 sec - cache purge period
        urls : [{
                url : '/',
                changefreq : 'daily',
                priority : 0.8
            }, {
                url : '/archives/',
                changefreq : 'weekly',
                priority : 0.6
            }, {
                url : '/games/',
                changefreq : 'weekly',
                priority : 0.4
            }, {
                url : '/about/',
                changefreq : 'monthly',
                priority : 0.2
            },
        ]
    });
// Generates XML with a callback function
sitemap.toXML(function (err, xml) {

    if (!err) {

        fs.writeFile('../public/sitemap.xml', xml, 'utf8', function (err) {

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
