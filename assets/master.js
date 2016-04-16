(function() {
  'use strict';

  var lint = require('html-minifier-lint').lint;

  function byId(id) {
    return document.getElementById(id);
  }

  function escapeHTML(str) {
    return (str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  byId('lint-btn').onclick = function() {
    try {
      var originalValue = byId('input').value;
      lint(originalValue, byId('report'));
    }
    catch (err) {
      byId('report').innerHTML = '<span class="failure">' + escapeHTML(err) + '</span>';
    }
  };
})();
/* eslint-disable */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1128111-22']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = (document.location.protocol === 'https:' ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  document.getElementsByTagName('head')[0].appendChild(ga);
})();

(function(i){
  var s = document.getElementById(i);
  var f = document.createElement('iframe');
  f.src = (document.location.protocol === 'https:' ? 'https' : 'http') + '://api.flattr.com/button/view/?uid=kangax&button=compact&url=' + encodeURIComponent(document.URL);
  f.title = 'Flattr';
  f.height = 20;
  f.width = 110;
  f.style.borderWidth = 0;
  s.parentNode.insertBefore(f, s);
})('wrapper');
