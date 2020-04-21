(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/aksum/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-row",[r("v-col",{attrs:{cols:"1",offset:"11"}},[r("v-bottom-sheet",{attrs:{persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:"",dark:""}},n),[r("v-icon",[t._v("mdi-cog")])],1)]}}]),model:{value:t.showSettings,callback:function(e){t.showSettings=e},expression:"showSettings"}},[r("v-sheet",{staticClass:"text-center"},[r("v-btn",{staticClass:"mt-6",attrs:{text:"",color:"error"},on:{click:function(e){t.showSettings=!t.showSettings}}},[t._v("close")]),t.showSettings?r("Settings",{attrs:{client:t.client},on:{torrentDeleted:t.torrentDeleted,torrentAdded:t.torrentAdded}}):t._e()],1)],1)],1)],1),r("v-content",{staticClass:"body"},[r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("h2",{staticClass:"maintitle display-3 text-center mb-12"},[r("v-icon",{staticClass:"middle_icon",attrs:{size:"xxx-large"}},[t._v("mdi-book-open-variant")]),r("span",[t._v("aksum")])],1)])],1),r("v-row",[r("p",{staticClass:"text-center col-md-6 offset-md-3 display-3"},[t._v("Search and download books from torrents, directly from your browser")])]),r("v-row",[t.showSettings?t._e():r("SearchBox",{attrs:{client:t.client,torrents:t.torrents,books:t.books}})],1),r("v-row",[r("v-alert",{staticClass:"mt-12 col-md-4 offset-md-4",attrs:{outlined:"",type:"info"}},[t._v(" Tip: ¿Can't find a book? "),r("br"),t._v("Try the settings ( "),r("v-icon",[t._v("mdi-cog")]),t._v(") button to add custom torrent book sources. ")],1)],1),r("v-divider",{staticClass:"mt-12 mb-12"}),r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("v-row",[r("v-col",{attrs:{cols:"2"}},[t._v("Share")]),r("v-col",{attrs:{cols:"9"}},[r("p",{staticClass:"link-overflow text-centered"},[r("a",{attrs:{href:t.link}},[t._v(t._s(t.link))])])]),r("v-col",{attrs:{cols:"1"}},[r("v-btn",{attrs:{icon:""}},[r("v-icon",{staticClass:"middle_icon",attrs:{size:"large"}},[t._v("mdi-clipboard-text")])],1)],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("p",{staticClass:"justify-content"},[t._v(" Made with "),r("v-icon",{staticClass:"large-love"},[t._v("mdi-heart")]),t._v(" by "),r("a",{attrs:{href:"https://davidfrancos.net"}},[t._v("David Francos")]),t._v(" to the world ")],1)])],1)],1),r("v-col",{staticClass:"text-center mt-4",attrs:{cols:"2",offset:"2"}},[r("a",{attrs:{href:"https://github.com/XayOn/aksum"}},[r("i",{staticClass:"large-gh fab fa-github"}),r("br"),r("p",{},[t._v("Fork me on github")])])]),r("v-col",{staticClass:"text-center mt-4",attrs:{cols:"3",offset:"2"}},[r("p",[t._v(" This site is hosted on "),r("a",{attrs:{href:"https://pages.github.com/"}},[t._v("github pages")]),t._v(". It does not host or endorse any illegal content. "),r("br"),t._v("Examples provided on the official documentation provide a torrent of free, legal books wich hold "),r("b",[t._v("no copyright")])])])],1)],1)],1)],1)},a=[],s=(r("4de4"),r("ac1f"),r("1276"),r("b85c")),i=(r("96cf"),r("1da1")),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-autocomplete",{attrs:{items:t.books,"item-key":"label_name",color:"white","item-text":"label_name","return-object":!0,loading:t.loading,label:t.searchLabel},on:{change:t.selectedItem},scopedSlots:t._u([{key:"append-outer",fn:function(){return[t.blobUrl?r("v-btn",{attrs:{download:t.blobName,href:t.blobUrl,icon:"",color:"green"},on:{click:t.destroyTorrent}},[r("v-icon",[t._v("mdi-download")])],1):t._e()]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},l=[],d=(r("99af"),r("c975"),r("45fc"),r("b0c0"),r("d3b7"),r("2909")),u=r("83cc"),f=r.n(u),h=r("26a5"),v=r.n(h),b=["epub","mobi","pdf","lrf","cbr","cbz","cb7","cbt ","cba ","chm","djvu","doc","docx","pdb","fb2","ceb","xeb","html","htm","ibooks","azw","azw3","kf8","kfx","lit","prc","opf","pdg ","ps","xps","lrx"],p={methods:{torrentUrls:function(){return localStorage.torrent_list?JSON.parse(localStorage.torrent_list):[]},getTorrentFile:function(t,e,r){var n,o=null,a=new Promise((function(t){o=t})),i=f.a.parse(e),c=Object(s["a"])(t.torrents);try{for(c.s();!(n=c.n()).done;){var l=n.value;l.xt==i.xt&&l.remove()}}catch(d){c.e(d)}finally{c.f()}return t.add(e,(function(t){var e,n=Object(s["a"])(t.files);try{for(n.s();!(e=n.n()).done;){var a=e.value;a.path==r&&a.getBlobURL((function(t,e){return console.log(t),o(e)}))}}catch(d){n.e(d)}finally{n.f()}})),a},getTorrentFiles:function(t,e,r){var n=f.a.encode(e.decoded);t.add(n,(function(t){var n,o=Object(s["a"])(t.files);try{for(o.s();!(n=o.n()).done;){var a=n.value,i=v()(a.path),c=i.ext.substring(1);-1!=b.indexOf(c)&&r.push({filePath:a.path,downloadName:"".concat(i.name).concat(i.ext),torrent:e.decoded.infoHash,label_name:"[".concat(c,"] ").concat(i.name),fullTorrent:e.torrent})}}catch(l){o.e(l)}finally{o.f()}t.destroy()}))},addTorrent:function(t,e){var r=f.a.decode(e).xt;if(console.log(t),!t.some((function(t){var e;return(null===t||void 0===t||null===(e=t.decoded)||void 0===e?void 0:e.xt)==r}))){var n=f.a.decode(e);n["tr"].push("wss://tracker.openwebtorrent.com");var o={decoded:n,torrent:e};return localStorage.torrent_list=JSON.stringify([].concat(Object(d["a"])(t),[o])),o}}}},m={name:"SearchBox",props:["books","torrents","client"],mixins:[p],computed:{searchLabel:function(){var t="Search ".concat(this.books.length," books");return 0==this.books.length&&0!=this.torrents.length?t="Loading...":0==this.books.length&&0==this.torrents.length&&(t="No data sources available"),t},loading:function(){return!!this.downloading||0==this.books.length&&0!=this.torrents.length}},data:function(){return{downloading:!1,value:"",blobName:"",fullTorrent:!1,blobUrl:!1}},methods:{destroyTorrent:function(){this.client.get(this.fullTorrent).destroy()},selectedItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.blobUrl=!1,this.downloading=!0,this.fullTorrent=this.value.fullTorrent,t.next=5,this.getTorrentFile(this.client,this.value.fullTorrent,this.value.filePath);case 5:this.blobUrl=t.sent,this.blobName=this.value.downloadName,this.downloading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},g=m,w=r("2877"),_=r("6544"),y=r.n(_),x=r("c6a6"),k=r("8336"),S=r("a523"),O=r("132d"),j=Object(w["a"])(g,c,l,!1,null,null,null),T=j.exports;y()(j,{VAutocomplete:x["a"],VBtn:k["a"],VContainer:S["a"],VIcon:O["a"]});var C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("h2",{staticClass:"text-center"},[t._v("Edit book sources (Torrent links)")]),r("v-text-field",{attrs:{"append-outer-icon":"mdi-plus",placeholder:"Magnet link",loading:t.loading,"single-line":""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.AddSource(e)},"click:append-outer":t.AddSource},model:{value:t.torrent_uri,callback:function(e){t.torrent_uri=e},expression:"torrent_uri"}}),r("v-data-table",{attrs:{headers:t.headers,items:t.torrent_list,"item-key":"torrent","show-select":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),r("v-btn",{attrs:{disabled:0==this.selected.length,color:"red lighten-2",dark:""},on:{click:t.deleteSources}},[t._v("Delete selected torrents")]),r("v-divider")],1)},V=[],D={name:"Settings",mixins:[p],data:function(){return{display:!1,torrent_uri:"",torrent_list:JSON.parse(localStorage.torrent_list?localStorage.torrent_list:"[]"),headers:[{text:"Name",align:"start",value:"decoded.name"},{text:"Hash",align:"start",value:"decoded.infoHash"}],selected:[],loading:!1}},methods:{AddSource:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.loading=!0,e=this.addTorrent(this.torrent_list,this.torrent_uri),e&&(this.torrent_list=[].concat(Object(d["a"])(this.torrent_list),[e]),this.$emit("torrentAdded",e)),this.torrent_uri="",this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteSources:function(){var t,e=this,r=Object(s["a"])(this.selected);try{for(r.s();!(t=r.n()).done;){var n=t.value;this.$emit("torrentDeleted",n),this.torrent_list=this.torrent_list.filter((function(t){return!e.selected.some((function(e){return e.torrent==t.torrent}))})),localStorage.torrent_list=JSON.stringify(this.torrent_list)}}catch(o){r.e(o)}finally{r.f()}}}},R=D,U=r("8fea"),A=r("ce7e"),B=r("8654"),N=Object(w["a"])(R,C,V,!1,null,null,null),P=N.exports;y()(N,{VBtn:k["a"],VContainer:S["a"],VDataTable:U["a"],VDivider:A["a"],VTextField:B["a"]});var F=r("9e56"),$=r.n(F),z=regeneratorRuntime.mark(E);function E(t){var e,r,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t){a.next=2;break}return a.abrupt("return",[]);case 2:e=t.split(";"),r=Object(s["a"])(e),a.prev=4,r.s();case 6:if((n=r.n()).done){a.next=13;break}return o=n.value,o=o.split(":"),a.next=11,f.a.encode({xt:["urn:btih:".concat(o[0])],dn:atob(o[1]),tr:["wss://tracker.openwebtorrent.com","wss://tracker.btorrent.xyz"]});case 11:a.next=6;break;case 13:a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](4),r.e(a.t0);case 18:return a.prev=18,r.f(),a.finish(18);case 21:case"end":return a.stop()}}),z,null,[[4,15,18,21]])}function J(t){var e,r="",n=Object(s["a"])(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;r+="".concat(o.decoded["xt"].split(":")[2],":").concat(btoa(o.decoded["dn"]))}}catch(a){n.e(a)}finally{n.f()}return r}var M={methods:{exportToBTData:J,getFromBTData:E}},H=(r("13d5"),r("3ca3"),r("ddb0"),r("2b3d"),r("ade3")),I=r("3835"),L=r("0b16"),q=r.n(L),X={data:function(){var t=Object(d["a"])(new URLSearchParams(q.a.parse(location.href).query).entries()).reduce((function(t,e){var r=Object(I["a"])(e,2),n=r[0],o=r[1];return Object.assign(t,Object(H["a"])({},n,o))}),{});return{query_string:t}}},G={name:"App",mixins:[M,X,p],components:{SearchBox:T,Settings:P},computed:{link:function(){var t=this.exportToBTData(this.torrents);return t?window.location.href.split("?")[0]+"?btdata="+t:""}},methods:{torrentDeleted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.torrents=this.torrentUrls(),this.books=this.books.filter((function(t){return t.infoHash==e.decoded.infoHash}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),torrentAdded:function(t){this.getTorrentFiles(this.client,t,this.books),this.torrents=this.torrentUrls()}},data:function(){return{torrents:[],books:[],showSettings:!1,client:new $.a}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n,o,a,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.client=t.client,t.$vuetify.theme.dark=!0,r=Object(s["a"])(t.getFromBTData(t.query_string["btdata"]));try{for(r.s();!(n=r.n()).done;)o=n.value,t.addTorrent(t.torrentUrls(),o)}catch(l){r.e(l)}finally{r.f()}t.torrents=t.torrentUrls(),a=Object(s["a"])(t.torrentUrls());try{for(a.s();!(i=a.n()).done;)c=i.value,t.torrentAdded(c)}catch(l){a.e(l)}finally{a.f()}case 7:case"end":return e.stop()}}),e)})))()}},K=G,Q=(r("9d8c"),r("0798")),W=r("7496"),Y=r("288c"),Z=r("62ad"),tt=r("a75b"),et=r("0fd9"),rt=r("8dd9"),nt=Object(w["a"])(K,o,a,!1,null,"00c52dbc",null),ot=nt.exports;y()(nt,{VAlert:Q["a"],VApp:W["a"],VBottomSheet:Y["a"],VBtn:k["a"],VCol:Z["a"],VContainer:S["a"],VContent:tt["a"],VDivider:A["a"],VIcon:O["a"],VRow:et["a"],VSheet:rt["a"]});var at=r("f309");n["a"].use(at["a"]);var st=new at["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:st,render:function(t){return t(ot)}}).$mount("#app")},"621f":function(t,e,r){},"9d8c":function(t,e,r){"use strict";var n=r("621f"),o=r.n(n);o.a}});
//# sourceMappingURL=app.68cbcd30.js.map