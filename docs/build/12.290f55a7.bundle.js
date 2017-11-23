webpackJsonp([12],{539:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),c=l(1),s=function(e){return e&&e.__esModule?e:{default:e}}(c),d=l(20);window.Storage=d.Storage;var o="testValue",f=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={value:d.Storage.get(o)||""},l}return r(t,e),u(t,[{key:"render",value:function(){var e=this;return s.default.createElement("div",null,"刷新后看到存储的数据",s.default.createElement("input",{type:"text",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}),s.default.createElement(d.Storage,{name:o,value:this.state.value}))}}]),t}(s.default.Component),m=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return r(t,e),u(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return s.default.createElement("div",{className:"doc"},s.default.createElement("h2",{id:"storage"},s.default.createElement("a",{className:"header-anchor",href:"#storage","aria-hidden":"true"},"¶")," Storage"),s.default.createElement("p",null,"存储用，基于localStorage。没啥特别，只是简单的封装了下接口。 且添加前缀 ",s.default.createElement("code",null,"_react-gm_"),"避免冲突"),s.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},s.default.createElement("div",{className:"doc-demo-instance"},s.default.createElement("h4",null,"Example"),s.default.createElement(f,null)),s.default.createElement("div",{className:"doc-demo-meta"},s.default.createElement("div",{className:"doc-demo-code"},s.default.createElement("pre",null,s.default.createElement("code",{className:"language-js"},s.default.createElement("span",{className:"hljs-built_in"},"window"),".Storage = Storage;",s.default.createElement("br",null),s.default.createElement("span",{className:"hljs-keyword"},"const")," key = ",s.default.createElement("span",{className:"hljs-string"},"'testValue'"),";",s.default.createElement("br",null),s.default.createElement("span",{className:"hljs-class"},s.default.createElement("span",{className:"hljs-keyword"},"class")," ",s.default.createElement("span",{className:"hljs-title"},"StorageWrap")," ",s.default.createElement("span",{className:"hljs-keyword"},"extends")," ",s.default.createElement("span",{className:"hljs-title"},"React"),".",s.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",s.default.createElement("br",null),"    ",s.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",s.default.createElement("br",null),"        ",s.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",s.default.createElement("br",null),"        ",s.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",s.default.createElement("br",null),"            ",s.default.createElement("span",{className:"hljs-attr"},"value"),": Storage.get(key) || ",s.default.createElement("span",{className:"hljs-string"},"''"),s.default.createElement("br",null),"        ","}",";",s.default.createElement("br",null),"    ","}",s.default.createElement("br",null),"    ",s.default.createElement("br",null),"    render() ","{",s.default.createElement("br",null),"        ",s.default.createElement("span",{className:"hljs-keyword"},"return")," (",s.default.createElement("br",null),"            <div>",s.default.createElement("br",null),"                刷新后看到存储的数据",s.default.createElement("br",null),'                <input type="text" value=',"{","this.state.value","}",s.default.createElement("br",null),"                       onChange=","{","event => this.setState(","{","value: event.target.value","}",")","}","/>",s.default.createElement("br",null),"                <Storage name=","{","key","}"," value=","{","this.state.value","}","/>",s.default.createElement("br",null),"            </div>",s.default.createElement("br",null),"        );",s.default.createElement("br",null),"    ","}",s.default.createElement("br",null),"}",s.default.createElement("br",null))),s.default.createElement("pre",null,s.default.createElement("code",{className:"language-jsx"},"<StorageWrap/>",s.default.createElement("br",null)))),s.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},s.default.createElement("i",null)))),s.default.createElement("h3",{id:"props"},s.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),s.default.createElement("ul",null,s.default.createElement("li",null,s.default.createElement("code",null,"name (string|isRequire)")," 存储的key"),s.default.createElement("li",null,s.default.createElement("code",null,"value (string, object, array)")," 存储的数据，不适合存储非常复杂的东西，实际上存的是",s.default.createElement("code",null,"JSON.stringify(value)"),"，只要符合JSON就可以存储。"),s.default.createElement("li",null,s.default.createElement("code",null,"autoSave (bool)")," 默认",s.default.createElement("code",null,"true"),"，value变化会自动更新保存")),s.default.createElement("h3",{id:"static"},s.default.createElement("a",{className:"header-anchor",href:"#static","aria-hidden":"true"},"¶")," Static"),s.default.createElement("ul",null,s.default.createElement("li",null,s.default.createElement("code",null,"set(key, value)")),s.default.createElement("li",null,s.default.createElement("code",null,"get(key)")),s.default.createElement("li",null,s.default.createElement("code",null,"remove(key)")),s.default.createElement("li",null,s.default.createElement("code",null,"clear")," 慎用，清除本域名全部存储"),s.default.createElement("li",null,s.default.createElement("code",null,"getAll")," 拿到全部存储，以Obj形式返回")))}}]),t}(s.default.Component);t.default=m}});