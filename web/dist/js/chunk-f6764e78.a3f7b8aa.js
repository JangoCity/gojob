(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6764e78"],{"02f4":function(t,e,s){var i=s("4588"),r=s("be13");t.exports=function(t){return function(e,s){var n,a,o=String(r(e)),l=i(s),c=o.length;return l<0||l>=c?t?"":void 0:(n=o.charCodeAt(l),n<55296||n>56319||l+1===c||(a=o.charCodeAt(l+1))<56320||a>57343?t?o.charAt(l):n:t?o.slice(l,l+2):a-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,s){"use strict";var i=s("02f4")(!0);t.exports=function(t,e,s){return e+(s?i(t,e).length:1)}},"0bfb":function(t,e,s){"use strict";var i=s("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,s){"use strict";s("b0c5");var i=s("2aba"),r=s("32e9"),n=s("79e5"),a=s("be13"),o=s("2b4c"),l=s("520a"),c=o("species"),u=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();t.exports=function(t,e,s){var f=o(t),p=!n((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),h=p?!n((function(){var e=!1,s=/a/;return s.exec=function(){return e=!0,null},"split"===t&&(s.constructor={},s.constructor[c]=function(){return s}),s[f](""),!e})):void 0;if(!p||!h||"replace"===t&&!u||"split"===t&&!d){var m=/./[f],v=s(a,f,""[t],(function(t,e,s,i,r){return e.exec===l?p&&!r?{done:!0,value:m.call(e,s,i)}:{done:!0,value:t.call(s,e,i)}:{done:!1}})),g=v[0],b=v[1];i(String.prototype,t,g),r(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"35a9":function(t,e,s){"use strict";var i=s("8922"),r=s.n(i);r.a},"4d9b":function(t,e,s){},"520a":function(t,e,s){"use strict";var i=s("0bfb"),r=RegExp.prototype.exec,n=String.prototype.replace,a=r,o="lastIndex",l=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[o]||0!==e[o]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(a=function(t){var e,s,a,u,d=this;return c&&(s=new RegExp("^"+d.source+"$(?!\\s)",i.call(d))),l&&(e=d[o]),a=r.call(d,t),l&&a&&(d[o]=d.global?a.index+a[0].length:e),c&&a&&a.length>1&&n.call(a[0],s,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)})),a}),t.exports=a},"5f1b":function(t,e,s){"use strict";var i=s("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var n=s.call(t,e);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"7d48":function(t,e,s){},"7f7f":function(t,e,s){var i=s("86cc").f,r=Function.prototype,n=/^\s*function ([^ (]*)/,a="name";a in r||s("9e1e")&&i(r,a,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},8922:function(t,e,s){},"90ea":function(t,e,s){"use strict";var i=s("7d48"),r=s.n(i);r.a},a01b:function(t,e,s){"use strict";var i=s("4d9b"),r=s.n(i);r.a},a481:function(t,e,s){"use strict";var i=s("cb7c"),r=s("4bf8"),n=s("9def"),a=s("4588"),o=s("0390"),l=s("5f1b"),c=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};s("214f")("replace",2,(function(t,e,s,m){return[function(i,r){var n=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,n,r):s.call(String(n),i,r)},function(t,e){var r=m(s,t,this,e);if(r.done)return r.value;var d=i(t),f=String(this),p="function"===typeof e;p||(e=String(e));var g=d.global;if(g){var b=d.unicode;d.lastIndex=0}var w=[];while(1){var _=l(d,f);if(null===_)break;if(w.push(_),!g)break;var x=String(_[0]);""===x&&(d.lastIndex=o(f,n(d.lastIndex),b))}for(var $="",k=0,C=0;C<w.length;C++){_=w[C];for(var P=String(_[0]),A=c(u(a(_.index),f.length),0),y=[],E=1;E<_.length;E++)y.push(h(_[E]));var j=_.groups;if(p){var S=[P].concat(y,A,f);void 0!==j&&S.push(j);var L=String(e.apply(void 0,S))}else L=v(P,f,A,y,j,e);A>=k&&($+=f.slice(k,A)+L,k=A+P.length)}return $+f.slice(k)}];function v(t,e,i,n,a,o){var l=i+t.length,c=n.length,u=p;return void 0!==a&&(a=r(a),u=f),s.call(o,u,(function(s,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(l);case"<":o=a[r.slice(1,-1)];break;default:var u=+r;if(0===u)return s;if(u>c){var f=d(u/10);return 0===f?s:f<=c?void 0===n[f-1]?r.charAt(1):n[f-1]+r.charAt(1):s}o=n[u-1]}return void 0===o?"":o}))}}))},b0c5:function(t,e,s){"use strict";var i=s("520a");s("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},b605:function(t,e,s){"use strict";var i=s("b775"),r={getRuntime:function(){return Object(i["a"])({url:"/runtimes",method:"get"})},getRunmode:function(){return Object(i["a"])({url:"/runtimes/runmode",method:"get"})}};e["a"]=r},dfef:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("v-head"),s("v-sidebar"),s("div",{staticClass:"content-box",class:{"content-collapse":t.isCollapse}},[s("v-tags"),s("div",{staticClass:"content"},[s("transition",{attrs:{name:"move",mode:"out-in",appear:""}},[s("keep-alive",{attrs:{include:t.keepAlives}},[s("router-view")],1)],1)],1)],1)],1)},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"logo"},[t._v("Go-Job分布式任务调度")]),s("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[t.collapsed?s("span",[s("i",{staticClass:"el-icon-s-unfold"})]):s("span",[s("i",{staticClass:"el-icon-s-fold"})])]),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n          "+t._s(t.username)+"\n          "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{divided:"",command:"updatePassword"}},[t._v("安全设置")]),s("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[t._v("退出登录")])],1)],1)],1)]),s("user-password-edit",{ref:"user_password_edit"})],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{title:t.edit_dig_title,"close-on-click-modal":!1,visible:t.edit_dig_visible},on:{"update:visible":function(e){t.edit_dig_visible=e},close:t.handleEditDigClose}},[s("el-form",{ref:"user_password_edit_form",attrs:{model:t.form,rules:t.rules,"label-width":"100px",size:"mini"}},[s("el-form-item",{attrs:{label:"新密码",prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"请输入新密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),s("el-form-item",{attrs:{label:"确认新密码",prop:"affirmPassword"}},[s("el-input",{attrs:{type:"password",placeholder:"请确认新密码"},model:{value:t.form.affirmPassword,callback:function(e){t.$set(t.form,"affirmPassword",e)},expression:"form.affirmPassword"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.edit_dig_visible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("提 交")])],1)],1)},l=[],c=s("2d80"),u={name:"UserPasswordEdit",data:function(){return{edit_dig_visible:!1,edit_dig_title:"",form:{name:"",password:"",affirmPassword:""},rules:this.validRules()}},methods:{initPage:function(){this.edit_dig_title="修改密码",this.edit_dig_visible=!0},validRules:function(){return{password:[{required:!0,message:"请输入新密码",trigger:"blur"}],affirmPassword:[{required:!0,message:"请确认新密码",trigger:"blur"}]}},saveEdit:function(){var t=this;this.$refs.user_password_edit_form.validate((function(e){e?t.form.password==t.form.affirmPassword?(t.form.name=t.$store.getters.getUserName,c["a"].putUser(t.form).then((function(e){t.edit_dig_visible=!1,t.$message.success("修改成功")}))):t.$message.error("两次密码输入不一致，请更正"):console.log("error submit!!")}))},handleEditDigClose:function(){this.form={name:"",password:"",affirmPassword:""},this.$refs.user_password_edit_form.resetFields()}}},d=u,f=s("2877"),p=Object(f["a"])(d,o,l,!1,null,null,null),h=p.exports,m=s("d4d3"),v={data:function(){return{fullscreen:!1,collapsed:!1}},components:{userPasswordEdit:h},computed:{username:function(){return this.$store.getters.getUserName}},methods:{handleCommand:function(t){var e=this;"logout"==t&&c["a"].logout().then((function(){Object(m["a"])(),e.$router.push("/login")})),"updatePassword"==t&&this.$refs.user_password_edit.initPage()},collapseChage:function(){this.$store.dispatch("toggleScollapse"),this.$store.getters.getScollapse?this.collapsed=!0:this.collapsed=!1}},mounted:function(){document.body.clientWidth<1500&&this.$store.dispatch("closeScollapse")}},g=v,b=(s("a01b"),Object(f["a"])(g,n,a,!1,null,"17ac170f",null)),w=b.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.isCollapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,(function(e){return[e.children?[s("el-submenu",{key:e.name,attrs:{index:e.name}},[s("template",{slot:"title"},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._l(e.children,(function(e,i){return s("el-menu-item",{key:i,attrs:{index:e.name}},[t._v(t._s(e.title))])}))],2)]:[s("el-menu-item",{key:e.name,attrs:{index:e.name}},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]}))],2)],1)},x=[],$=(s("a481"),s("b605")),k=[{title:"运行分析",name:"dashboard",routePath:"/dashboard",icon:"el-icon-s-data",keepAlive:!1},{title:"任务管理",name:"job",routePath:"/job",icon:"el-icon-news",keepAlive:!0},{title:"调度日志",name:"trace",routePath:"/trace",icon:"el-icon-date",keepAlive:!0},{title:"用户管理",name:"user",routePath:"/user",icon:"el-icon-user",keepAlive:!0},{title:"告警设置",name:"alarm",routePath:"/alarm",icon:"el-icon-s-tools",keepAlive:!0},{title:"关于系统",name:"about",routePath:"/about",icon:"el-icon-help",keepAlive:!0}],C=[{title:"运行分析",name:"dashboard",routePath:"/dashboard",icon:"el-icon-s-data",keepAlive:!1},{title:"任务管理",name:"job",routePath:"/job",icon:"el-icon-news",keepAlive:!0},{title:"调度日志",name:"trace",routePath:"/trace",icon:"el-icon-date",keepAlive:!0},{title:"集群管理",name:"cluster",routePath:"/cluster",icon:"el-icon-s-platform",keepAlive:!0},{title:"用户管理",name:"user",routePath:"/user",icon:"el-icon-user",keepAlive:!0},{title:"告警设置",name:"alarm",routePath:"/alarm",icon:"el-icon-s-tools",keepAlive:!0},{title:"关于系统",name:"job6",routePath:"/job",icon:"el-icon-help",keepAlive:!0}],P={data:function(){return{items:[]}},mounted:function(){var t=this;$["a"].getRunmode().then((function(e){"standalone"===e.data?t.items=k:t.items=C}))},computed:{onRoutes:function(){return this.$route.path.replace("/","")},isCollapse:function(){return this.$store.getters.getScollapse}}},A=P,y=(s("90ea"),Object(f["a"])(A,_,x,!1,null,"6f686e9f",null)),E=y.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,(function(e,i){return s("li",{key:i,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),e.closeAble?s("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(i)}}},[s("i",{staticClass:"el-icon-close"})]):t._e()],1)})),0),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},S=[],L=(s("7f7f"),{data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){var t=this.tagsList.filter((function(t){return!t.closeAble}));if(this.tagsList=t,0===this.tagsList.length)this.$router.push("/");else{var e=this.tagsList[0];this.$router.push(e.path)}},closeOther:function(){var t=this,e=this.tagsList.filter((function(e){return e.path===t.$route.fullPath||!e.closeAble}));this.tagsList=e},setTags:function(t){var e=this.tagsList.some((function(e){return e.path===t.fullPath}));!e&&this.tagsList.push({title:t.meta.title,closeAble:t.meta.closeAble,path:t.fullPath,name:t.matched[1].components.default.name})},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){this.setTags(this.$route)}}),R=L,T=(s("35a9"),Object(f["a"])(R,j,S,!1,null,null,null)),O=T.exports,I={components:{vHead:w,vSidebar:E,vTags:O},computed:{isCollapse:function(){return this.$store.getters.getScollapse},keepAlives:function(){return this.$store.getters.getKeepAlives}}},U=I,q=Object(f["a"])(U,i,r,!1,null,null,null);e["default"]=q.exports}}]);
//# sourceMappingURL=chunk-f6764e78.a3f7b8aa.js.map