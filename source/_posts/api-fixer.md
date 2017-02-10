---
title: JSON API for foreign exchange rates via Fixer.io
date: 2017-02-09 13:11:00
tags: [js,JSON]
layout: post
categories: Hexo
---


Augmentation of a static page.

<!-- more -->

* A tag that writes a static html backup when I generate my site

So even if I view the page with javascript disabled I can see the latest values from the last time I built the page.

* If javascript is enambled an up to date exchange rate will be fetched from the API.

<div id="fixer_table"></div>
<script>

// default data
var data = {

    rates : {

        INR : 67.36

    },

    date : '2-8-17'

},

// what to do on readystate 4 (status 200 or 0)
update = function (req) {

    if (req.status === 200) {

        console.log('looking good.');
        console.log(req.response);

        document.getElementById('fixer_table').innerHTML = req.response;

    } else {

        // else assume status 0

        console.log('failed to get up to date data');

    }

},

// make a request
req = new XMLHttpRequest();

// I want JSON from fixer.io with the given base currency
req.open('get', 'https://api.fixer.io/latest?base=USD;symbols=INR');

req.onreadystatechange = function () {

    if (req.readyState === 4) {

        update(req);

    }

};

req.onerror = function (e) {}

req.send();

</script>

{% endofpost %}
