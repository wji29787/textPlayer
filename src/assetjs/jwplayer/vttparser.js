webpackJsonpjwplayer([9],{35:function(e,t,r){var n,i;n=[r(34)],i=function(e){function t(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}}function r(e){function t(e,t,r,n){return 3600*(0|e)+60*(0|t)+(0|r)+(0|n)/1e3}var r=e.match(s);return r?r[3]?t(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?t(r[1],r[2],0,r[4]):t(0,r[1],r[2],r[4]):null}function n(){this.values=Object.create(null)}function i(e,t,r,n){for(var i=n?e.split(n):[e],a=0;a<=i.length;a+=1)if("string"==typeof i[a]){var s=i[a].split(r);if(2===s.length){var o=s[0],u=s[1];t(o,u)}}}function a(e,t,a){function s(){var t=r(e);if(null===t)throw new Error("Malformed timestamp: "+c);return e=e.replace(f,""),t}function o(e,t){var r=new n;i(e,function(e,t){switch(e){case"region":for(var n=a.length-1;n>=0;n--)if(a[n].id===t){r.set(e,a[n].region);break}break;case"vertical":r.alt(e,t,["rl","lr"]);break;case"line":var i=t.split(","),s=i[0];r.integer(e,s),r.percent(e,s)&&r.set("snapToLines",!1),r.alt(e,s,["auto"]),2===i.length&&r.alt("lineAlign",i[1],["start",T,"end"]);break;case"position":i=t.split(","),r.percent(e,i[0]),2===i.length&&r.alt("positionAlign",i[1],["start",T,"end","line-left","line-right","auto"]);break;case"size":r.percent(e,t);break;case"align":r.alt(e,t,["start",T,"end","left","right"])}},l,h),t.region=r.get("region",null),t.vertical=r.get("vertical","");var s=r.get("line","auto");"auto"===s&&E.line===-1&&(s=-1),t.line=s,t.lineAlign=r.get("lineAlign","start"),t.snapToLines=r.get("snapToLines",!0),t.size=r.get("size",100),t.align=r.get("align",T);var o=r.get("position","auto");"auto"===o&&50===E.position&&(o="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=o}function u(){e=e.replace(g,"")}var c=e;if(u(),t.startTime=s(),u(),"-->"!==e.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+c);e=e.substr(3),u(),t.endTime=s(),u(),o(e,t)}var s=/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/,o=/^-?\d+$/,u=/\r\n|\n/,c=/^NOTE($|[ \t])/,f=/^[^\sa-zA-Z-]+/,l=/:/,h=/\s/,g=/^\s+/,d=/-->/,p=/^WEBVTT([ \t].*)?$/,b=window.requestAnimationFrame||function(e){return window.setTimeout(e,17)},v=function(e,r){this.window=e,this.state="INITIAL",this.buffer="",this.decoder=r||new t,this.regionList=[],this.maxCueBatch=1e3};n.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var n=0;n<r.length;++n)if(t===r[n]){this.set(e,t);break}},integer:function(e,t){o.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return t=parseFloat(t),t>=0&&t<=100&&(this.set(e,t),!0)}};var E=new e(0,0,0),T="middle"===E.align?"middle":"center";return v.prototype={parse:function(t,r){function n(){for(var e=h.buffer,t=0;t<e.length&&"\r"!==e[t]&&"\n"!==e[t];)++t;var r=e.substr(0,t);return"\r"===e[t]&&++t,"\n"===e[t]&&++t,h.buffer=e.substr(t),r}function s(e){i(e,function(e,t){switch(e){case"Region":console.log("parse region",t)}},l)}function o(){"CUETEXT"===h.state&&h.cue&&h.oncue&&h.oncue(h.cue),h.cue=null,h.state="INITIAL"===h.state?"BADWEBVTT":"BADCUE"}function f(){try{for(;h.buffer&&w<=h.maxCueBatch;){if(!u.test(h.buffer))return h.flush(),this;switch(T?T=!1:g=n(),h.state){case"HEADER":l.test(g)?s(g):g||(h.state="ID");break;case"NOTE":g||(h.state="ID");break;case"ID":if(c.test(g)){h.state="NOTE";break}if(!g)break;if(h.cue=new e(0,0,""),h.state="CUE",!d.test(g)){h.cue.id=g;break}case"CUE":try{a(g,h.cue,h.regionList)}catch(t){h.cue=null,h.state="BADCUE";break}h.state="CUETEXT";break;case"CUETEXT":var i=d.test(g);if(!g||i&&(T=!0)){h.oncue&&(w+=1,h.oncue(h.cue)),h.cue=null,h.state="ID";break}h.cue.text&&(h.cue.text+="\n"),h.cue.text+=g;break;case"BADCUE":g||(h.state="ID")}}if(w=0,h.buffer)b(f);else if(!r)return h.flush(),this}catch(t){return o(t),this}}var h=this;t&&(h.buffer+=h.decoder.decode(t,{stream:!0}));try{var g;if("INITIAL"===h.state){if(!u.test(h.buffer))return this;g=n();var v=g.match(p);if(!v||!v[0])throw new Error("Malformed WebVTT signature.");h.state="HEADER"}}catch(E){return o(),this}var T=!1,w=0;f()},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n",e.parse(void 0,!0)),"INITIAL"===e.state)throw new Error("Malformed WebVTT signature.")}catch(t){throw t}return e.onflush&&e.onflush(),this}},v}.apply(t,n),!(void 0!==i&&(e.exports=i))}});
//# sourceMappingURL=vttparser.4ea812c2b5d9c5757d8b.map