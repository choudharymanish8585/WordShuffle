!function(s){s.fn.aofsr=function(n){function e(s,n,e,o){e>n&&(fs=(n*o/e).toFixed(2),s.css("font-size",fs+"px"))}return this.each(function(){var o,t,i,r,c=s(this),a=s.extend({phraseMode:!1},n),d=!1;s(window).on("load resize",function(){t=c.innerWidth(),d?o!=t&&(c.css("font-size",""),r=parseInt(c.css("font-size")),i=c[0].scrollWidth,e(c,t,i,r),o=t):(a.phraseMode&&c.css("white-space","nowrap"),c.css({"word-break":"normal","word-wrap":"normal"}),i=c[0].scrollWidth,r=parseInt(c.css("font-size")),e(c,t,i,r),o=t,d=!0)})}),this}}(jQuery);