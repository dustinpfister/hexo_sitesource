---
title: JSON API for foreign exchange rates via Fixer.io
date: 2017-02-09 13:11:00
tags: [js,JSON]
layout: post
categories: Hexo
---


Augmentation of a static page.

<!-- more -->


<div id="fixer_table"></div>
<script>

// default data
var data = {

    rates : {

        INR : 67.36

    },

    date : '2-8-17'

},

base = 'USD',
compare = 'INR',

// what to do on readystate 4 (status 200 or 0)
update = function (req) {

    var html = '<table>',
	
amounts = [1, 5, 10, 20, 50, 100, 500, 1000];


    if (req.status === 200) {

        console.log('looking good.');
        console.log(req.response);

		html += '<tr><th>'+base+'<\/th><th>'+compare+'<\/th><\/tr>';
		amounts.forEach(function(amount){
		
		html += '<tr>';
		html += '<td>'+amount+'<\/td>';
		html += '<td>'+Number(amount * data.rates.INR)+'<\/td>';
		html += '<\/tr>';
		});
		html+='<\/table>';
		
        document.getElementById('fixer_table').innerHTML = html;

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
