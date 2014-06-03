// ==UserScript==
// @name       Geekzone User Hide
// @namespace  http://github.com/danielfaulknor/GZUserHide
// @version    0.2
// @description  Alpha version, enter users into the array at the top to hide posts from them
// @match      http://www.geekzone.co.nz/*
// @copyright  2014 Dan
// @require https://code.jquery.com/jquery-latest.js
// @updateURL      http://running-config.co.nz/GZUserHide/release/gz-user-hide.meta.js
// @downloadURL    http://running-config.co.nz/GZUserHide/release/gz-user-hide.user.js
// ==/UserScript==

var arr = [ "danielfaulknor" ];

$(document).ready(function() {
    $('a').each(function(i, obj) {
        	if ($(this).context.className == "subHeading _f_username")
            {
                if ($.inArray(obj.text, arr) > -1) {
                    $(this).closest('tr').replaceWith( '<b>Hidden user removed</b><br />' );
                }
            }
	});
});
