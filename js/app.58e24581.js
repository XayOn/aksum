(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/aksum/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",rel:"stylesheet"}}),r("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",rel:"stylesheet"}}),r("v-app-bar",{attrs:{"collapse-on-scroll":!0,absolute:"",color:"deep-purple accent-4",dark:""}},[r("v-toolbar-title",[r("b",{staticClass:"display-1"},[t._v("aksum")]),r("v-divider",{staticClass:"mx-12",attrs:{inset:"",vertical:""}}),r("span",[t._v("Torrent-based open library")])],1),r("v-spacer"),r("v-bottom-sheet",{attrs:{persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{color:"green",dark:""}},n),[r("v-icon",[t._v("mdi-cog")])],1)]}}]),model:{value:t.showSettings,callback:function(e){t.showSettings=e},expression:"showSettings"}},[r("v-sheet",{staticClass:"text-center"},[r("v-btn",{staticClass:"mt-6",attrs:{text:"",color:"error"},on:{click:function(e){t.showSettings=!t.showSettings}}},[t._v("close")]),t.showSettings?r("Settings",{attrs:{client:t.client},on:{torrentDeleted:t.torrentDeleted,torrentAdded:t.torrentAdded}}):t._e()],1)],1)],1),r("v-content",{staticClass:"body"},[r("v-row",[r("p",{staticClass:"text-center col-md-6 offset-md-3 display-3"},[t._v("Search and download books from torrents, directly from your browser")])]),r("v-row",[t.showSettings?t._e():r("SearchBox",{attrs:{books:t.books}})],1),r("v-divider",{staticClass:"mt-12 mb-12"}),r("v-row",[r("v-alert",{staticClass:"mt-12 col-md-4 offset-md-4",attrs:{outlined:"",type:"info"}},[t._v(" Tip: ¿Can't find a book? "),r("br"),t._v("Try the settings ( "),r("v-icon",[t._v("mdi-cog")]),t._v(") button to add custom torrent book sources. ")],1)],1)],1)],1)},a=[],s=(r("99af"),r("4de4"),r("ac1f"),r("1276"),r("b85c")),i=r("2909"),c=(r("96cf"),r("1da1")),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-autocomplete",{attrs:{items:t.books,"item-key":"label_name",color:"white","item-text":"label_name","return-object":!0,loading:t.loading,label:"Book"},on:{change:t.selectedItem},scopedSlots:t._u([{key:"append-outer",fn:function(){return[t.blobUrl?r("v-btn",{attrs:{download:t.blobName,href:t.blobUrl,icon:"",color:"green"}},[r("v-icon",[t._v("mdi-download")])],1):t._e()]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},u=[],d={name:"SearchBox",props:["books"],data:function(){return{value:"",loading:!1,blobName:"",blobUrl:!1}},methods:{selectedItem:function(){var t=this;this.loading=!0,this.blobUrl=!1,this.blobName=this.value.file.path,this.value.file.getBlobURL((function(e,r){t.blobUrl=r,t.loading=!1}))}}},f=d,p=r("2877"),h=r("6544"),b=r.n(h),v=r("c6a6"),m=r("8336"),g=r("a523"),y=r("132d"),_=Object(p["a"])(f,l,u,!1,null,null,null),w=_.exports;b()(_,{VAutocomplete:v["a"],VBtn:m["a"],VContainer:g["a"],VIcon:y["a"]});var k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("h2",{staticClass:"text-center"},[t._v("Edit book sources (Torrent links)")]),r("v-text-field",{attrs:{"append-outer-icon":"mdi-plus",loading:t.loading,"single-line":""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.AddSource(e)},"click:append-outer":t.AddSource},model:{value:t.torrent_uri,callback:function(e){t.torrent_uri=e},expression:"torrent_uri"}}),r("v-data-table",{attrs:{headers:t.headers,items:t.torrent_list,"item-key":"torrent","show-select":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),r("v-btn",{attrs:{disabled:0==this.selected.length,color:"red lighten-2",dark:""},on:{click:t.deleteSources}},[t._v("Delete selected torrents")])],1)},x=[],S=(r("45fc"),r("c975"),r("d3b7"),r("83cc")),O=r.n(S),j=["epub","mobi","pdf","lrf","cbr","cbz","cb7","cbt ","cba ","chm","djvu","doc","docx","pdb","fb2","ceb","xeb","html","htm","ibooks","azw","azw3","kf8","kfx","lit","prc","opf","pdg ","ps","xps","lrx"],V={methods:{getTorrentFiles:function(t,e){var r=null,n=new Promise((function(t){r=t})),o=[],a=O.a.encode(e.decoded);return t.add(a,(function(t){var n,a=Object(s["a"])(t.files);try{for(a.s();!(n=a.n()).done;){var i=n.value,c=i.path.split(".").pop().toLowerCase();-1!=j.indexOf(c)&&o.push({torrent:e.decoded.infoHash,file:i,label_name:i.path})}}catch(l){a.e(l)}finally{a.f()}r(o)})),n},addTorrent:function(t,e){if(!t.some((function(t){return t.torrent==e}))){var r=O.a.decode(e);r["tr"].push("wss://tracker.openwebtorrent.com");var n={decoded:r,torrent:e};return localStorage.torrent_list=JSON.stringify([].concat(Object(i["a"])(t),[n])),n}}}},T={name:"Settings",mixins:[V],data:function(){return{display:!1,torrent_uri:"",torrent_list:JSON.parse(localStorage.torrent_list),headers:[{text:"Name",align:"start",value:"decoded.name"},{text:"Hash",align:"start",value:"decoded.infoHash"}],selected:[],loading:!1}},methods:{AddSource:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.loading=!0,e=this.addTorrent(this.torrent_list,this.torrent_uri),this.torrent_list=[].concat(Object(i["a"])(this.torrent_list),[e]),this.$emit("torrentAdded",e),this.torrent_uri="",this.loading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteSources:function(){var t,e=this,r=Object(s["a"])(this.selected);try{for(r.s();!(t=r.n()).done;){var n=t.value;this.$emit("torrentDeleted",n),this.torrent_list=this.torrent_list.filter((function(t){return!e.selected.some((function(e){return e.torrent==t.torrent}))})),localStorage.torrent_list=JSON.stringify(this.torrent_list)}}catch(o){r.e(o)}finally{r.f()}}}},C=T,R=r("8fea"),A=r("8654"),B=Object(p["a"])(C,k,x,!1,null,null,null),U=B.exports;b()(B,{VBtn:m["a"],VContainer:g["a"],VDataTable:R["a"],VTextField:A["a"]});var P=r("9e56"),N=r.n(P),D=r("bc3a"),$=r.n(D),J={methods:{getFromGist:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="https://yacdn.org/proxy/https://gist.githubusercontent.com/".concat(e[0],"/").concat(e[1],"/raw/").concat(e[2]),console.log(r),t.next=4,$.a.get(r);case 4:return n=t.sent,t.abrupt("return",n.data.split(";"));case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}},E=(r("13d5"),r("3ca3"),r("ddb0"),r("2b3d"),r("ade3")),F=r("3835"),H=r("0b16"),I=r.n(H),M={data:function(){var t=Object(i["a"])(new URLSearchParams(I.a.parse(location.href).query).entries()).reduce((function(t,e){var r=Object(F["a"])(e,2),n=r[0],o=r[1];return Object.assign(t,Object(E["a"])({},n,o))}),{});return{query_string:t}}},q={name:"App",mixins:[J,M,V],components:{SearchBox:w,Settings:U},methods:{torrentUrls:function(){return localStorage.torrent_list?JSON.parse(localStorage.torrent_list):[]},torrentDeleted:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.books=this.books.filter((function(t){return t.infoHash==e.decoded.infoHash}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),torrentAdded:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=[],t.t1=Object(i["a"])(this.books),t.t2=i["a"],t.next=5,this.getTorrentFiles(this.client,e);case 5:t.t3=t.sent,t.t4=(0,t.t2)(t.t3),this.books=t.t0.concat.call(t.t0,t.t1,t.t4);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},data:function(){return{books:[],showSettings:!1,client:new N.a}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n,o,a,i,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$vuetify.theme.dark=!0,r=t.query_string["gist"],!r){e.next=9;break}return e.t0=s["a"],e.next=6,t.getFromGist(r.split("_"));case 6:e.t1=e.sent,n=(0,e.t0)(e.t1);try{for(n.s();!(o=n.n()).done;)a=o.value,t.addTorrent(t.torrentUrls(),a)}catch(u){n.e(u)}finally{n.f()}case 9:i=Object(s["a"])(t.torrentUrls());try{for(i.s();!(c=i.n()).done;)l=c.value,t.torrentAdded(l)}catch(u){i.e(u)}finally{i.f()}case 11:case"end":return e.stop()}}),e)})))()}},z=q,L=(r("bbff"),r("0798")),G=r("7496"),K=r("40dc"),Q=r("288c"),W=r("a75b"),X=r("ce7e"),Y=r("0fd9"),Z=r("8dd9"),tt=r("2fa4"),et=r("2a7f"),rt=Object(p["a"])(z,o,a,!1,null,"1adfa48b",null),nt=rt.exports;b()(rt,{VAlert:L["a"],VApp:G["a"],VAppBar:K["a"],VBottomSheet:Q["a"],VBtn:m["a"],VContent:W["a"],VDivider:X["a"],VIcon:y["a"],VRow:Y["a"],VSheet:Z["a"],VSpacer:tt["a"],VToolbarTitle:et["a"]});var ot=r("f309");n["a"].use(ot["a"]);var at=new ot["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:at,render:function(t){return t(nt)}}).$mount("#app")},bbff:function(t,e,r){"use strict";var n=r("ee13"),o=r.n(n);o.a},ee13:function(t,e,r){}});
//# sourceMappingURL=app.58e24581.js.map