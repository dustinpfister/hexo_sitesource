---
title: Exchange rates via Fixer.io
date: 2017-02-09 13:11:00
tags: [js,JSON]
layout: post
categories: Hexo
---


Augmentation of a static page.

<!-- more -->

Exchange rate data from [fixer.io](http://fixer.io)
<div id="fixer_table"></div>
<script>

// default data
var defaults = {

    rates : {

        INR : 67.36,
        USD : 0.01494

    },

    date : '2-8-17'

},
data = defaults,
base = 'INR',
compare = 'USD',
id = 'fixer_table',

render = function (reverse) {

    var html = '',

    rate,

    amounts = [.01, .05, .10, .25, .5, .75, 1, 2, 5, 10, 20, 50, 67, 100, 150,200,250,500, 750,1000,2000,5000,10000];

    rate = data.rates[compare];
    if (reverse) {

        rate = 1 / data.rates[compare];

    }

    html += '<p>Date of rate: ' + data.date + '<\/p>';

    html += '<table>';

    if (reverse) {

        html += '<tr><td colspan=\"2\">' + compare + ' to ' + base + ' rate : ' + rate.toFixed(3) + '<\/td><\/tr>';
        html += '<tr><th>' + compare + '<\/th><th>' + base + '<\/th><\/tr>';

    } else {

        html += '<tr><td colspan=\"2\">' + base + ' to ' + compare + ' rate : ' + rate.toFixed(3) + '<\/td><\/tr>';
        html += '<tr><th>' + base + '<\/th><th>' + compare + '<\/th><\/tr>';

    }

    amounts.forEach(function (amount) {

        var convert = Number(amount * rate).toFixed(2);

        html += '<tr>';
        html += '<td>' + amount + '<\/td>';
        html += '<td>' + convert + '<\/td>';
        html += '<\/tr>';

    });
    html += '<\/table>';

    document.getElementById(id).innerHTML += html;

},

// what to do on readystate 4 (status 200 or 0)
update = function (req) {

    if (req.response) {

        try {

            data = JSON.parse(req.response);

        } catch (e) {

            data = defaults;

        }

    } else {

        data = defaults;

    }

    render(false);
    render(true);

},

// make a request
req = new XMLHttpRequest();

// I want JSON from fixer.io with the given base currency
req.open('get', 'https://api.fixer.io/latest?base=' + base + ';symbols=' + compare);

req.onreadystatechange = function () {

    if (req.readyState === 4) {

        update(req);

    }

};

req.onerror = function (e) {}

req.send();



</script>

{% endofpost %}
