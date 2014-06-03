// ==UserScript==
// @name       Geekzone User Hide
// @namespace  http://running-config.co.nz/GZUserHide
// @version    0.2
// @description  Alpha version, enter users into the array at the top to hide posts from them
// @match      http://www.geekzone.co.nz/*
// @copyright  2014 Dan
// @require https://code.jquery.com/jquery-latest.js
// @updateURL      http://running-config.co.nz/GZUserHide/release/gz-user-hide.meta.js
// @downloadURL    http://running-config.co.nz/GZUserHide/release/gz-user-hide.user.js
// ==/UserScript==

//Must all be in lower case
var arr = [ "danielfaulknor" ];

$(document).ready(function() {
    $('a').each(function(i, obj) {
       if ($(this).context.className == "subHeading _f_username")
            {
                if ($.inArray(obj.text.toLowerCase(), arr) > -1) {
                    $(this).closest('tr').replaceWith( '<b>Hidden user removed</b><br />' );
                }
            }
	});
    
    $('blockquote').each(function(i, obj) {
        $.each(arr, function(index, item) {
        	if (obj.innerText.toLowerCase().indexOf(item) >= 0) {
            		obj.innerHTML = "<b>Quote containg post from hidden user removed</b>";
        	}
  	});
    });
});
