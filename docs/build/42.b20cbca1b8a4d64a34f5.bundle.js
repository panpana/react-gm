webpackJsonp([42],{488:function(e,a,l){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function r(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var c=function(){function e(e,a){for(var l=0;l<a.length;l++){var t=a[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,l,t){return l&&e(a.prototype,l),t&&e(a,t),a}}(),u=l(1),d=t(u),m=l(242),f=l(4),E=t(f),o=[{value:"0",name:"广东",children:[{value:"01",name:"深圳深圳深圳深圳深圳深圳深圳深圳深圳深圳深圳"},{value:"02",name:"广州"}]},{value:"1",name:"上海",children:[{value:"11",name:"上海1"},{value:"12",name:"上海2",children:[{value:"121",name:"adfadf"}]}]}],h=function(e){function a(e){n(this,a);var l=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return l.state={value:["0","01"],data:o},l}return r(a,e),c(a,[{key:"render",value:function(){return d.default.createElement("div",{style:{width:"200px"}},d.default.createElement(m.Cascader,{data:this.state.data,value:this.state.value,onChange:this.handleChange.bind(this)}))}},{key:"handleChange",value:function(e){console.log(e),this.setState({value:e})}}]),a}(d.default.Component),i=function(e){function a(){return n(this,a),s(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return r(a,e),c(a,[{key:"render",value:function(){return d.default.createElement("div",{style:{width:"200px"}},d.default.createElement(m.Cascader,{data:o}))}}]),a}(d.default.Component),p=function(e){function a(e){n(this,a);var l=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return l.state={value:["0","01"],data:o},l}return r(a,e),c(a,[{key:"render",value:function(){return d.default.createElement("div",{style:{width:"200px"}},d.default.createElement(m.Cascader,{data:this.state.data,value:this.state.value,valueRender:function(e){return e&&e.length>0?e[e.length-1].name:""},onChange:this.handleChange.bind(this)}))}},{key:"handleChange",value:function(e){console.log(e),this.setState({value:e})}}]),a}(d.default.Component),N=function(e){function a(){return n(this,a),s(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return r(a,e),c(a,[{key:"render",value:function(){return d.default.createElement("div",{style:{width:"200px"}},d.default.createElement(m.Cascader,{data:o,inputProps:{className:"input-sm"}}))}}]),a}(d.default.Component),b=function(e){function a(e){n(this,a);var l=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return l.state={value:["0","01"],data:o},l}return r(a,e),c(a,[{key:"render",value:function(){var e=this,a=[];return this.state.value.length>0&&E.default.each(this.state.value,function(l,t){var n=E.default.find(0===t?e.state.data:a[t-1].children,function(e){return l===e.value});a.push(n)}),d.default.createElement("div",{style:{width:"200px"}},d.default.createElement(m.Cascader,{data:this.state.data,onChange:this.handleChange.bind(this)},d.default.createElement("div",null,E.default.map(a,function(e){return e.name}).join(","),d.default.createElement("button",{className:"btn btn-primary btn-xs"},"add +"))))}},{key:"handleChange",value:function(e){console.log(e),this.setState({value:e})}}]),a}(d.default.Component),j=function(e){function a(e){n(this,a);var l=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return l.state={value:[],data:o},l}return r(a,e),c(a,[{key:"render",value:function(){return d.default.createElement("div",{style:{width:"200px"}},d.default.createElement(m.Cascader,{disabled:!0,data:this.state.data,value:this.state.value,onChange:this.handleChange.bind(this)}))}},{key:"handleChange",value:function(e){console.log(e),this.setState({value:e})}}]),a}(d.default.Component),v=function(e){function a(e){n(this,a);var l=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return l.state={},l}return r(a,e),c(a,[{key:"handleToggleCode",value:function(e){var a={};a["showCode"+e]=!this.state["showCode"+e],this.setState(a)}},{key:"render",value:function(){return d.default.createElement("div",{className:"doc"},d.default.createElement("h2",{id:"cascader"},d.default.createElement("a",{className:"header-anchor",href:"#cascader","aria-hidden":"true"},"¶")," Cascader"),d.default.createElement("p",null,"多级选择器 (多选版本",d.default.createElement("a",{href:"#/doc/CascaderSelect"},"CascaderSelect"),")"),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example")),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-description"},d.default.createElement("p",null,"以下example依赖的数据")),d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-keyword"},"const")," cascaderData = [","{",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-attr"},"value"),": ",d.default.createElement("span",{className:"hljs-string"},"'0'"),",",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-attr"},"name"),": ",d.default.createElement("span",{className:"hljs-string"},"'广东'"),",",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-attr"},"value"),": ",d.default.createElement("span",{className:"hljs-string"},"'01'"),",",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-attr"},"name"),": ",d.default.createElement("span",{className:"hljs-string"},"'深圳深圳深圳深圳深圳深圳深圳深圳深圳深圳深圳'"),d.default.createElement("br",null),"    ","}",", ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-attr"},"value"),": ",d.default.createElement("span",{className:"hljs-string"},"'02'"),",",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-attr"},"name"),": ",d.default.createElement("span",{className:"hljs-string"},"'广州'"),d.default.createElement("br",null),"    ","}","]",d.default.createElement("br",null),"}",", ","{",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-attr"},"value"),": ",d.default.createElement("span",{className:"hljs-string"},"'1'"),",",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-attr"},"name"),": ",d.default.createElement("span",{className:"hljs-string"},"'上海'"),",",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-attr"},"value"),": ",d.default.createElement("span",{className:"hljs-string"},"'11'"),",",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-attr"},"name"),": ",d.default.createElement("span",{className:"hljs-string"},"'上海1'"),d.default.createElement("br",null),"    ","}",", ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-attr"},"value"),": ",d.default.createElement("span",{className:"hljs-string"},"'12'"),",",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-attr"},"name"),": ",d.default.createElement("span",{className:"hljs-string"},"'上海2'"),",",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-attr"},"children"),": [","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"value"),": ",d.default.createElement("span",{className:"hljs-string"},"'121'"),",",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"name"),": ",d.default.createElement("span",{className:"hljs-string"},"'adfadf'"),d.default.createElement("br",null),"        ","}","]",d.default.createElement("br",null),"    ","}","]",d.default.createElement("br",null),"}","];",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},d.default.createElement("i",null)))),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(h,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-description"},d.default.createElement("p",null,"普通用法")),d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"Cascader1")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"value"),": [",d.default.createElement("span",{className:"hljs-string"},"'0'"),", ",d.default.createElement("span",{className:"hljs-string"},"'01'"),"],",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"data"),": cascaderData",d.default.createElement("br",null),"        ","}",";",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    render() ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," (",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"xml"},d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"div")," ",d.default.createElement("span",{className:"hljs-attr"},"style"),"=",d.default.createElement("span",{className:"hljs-string"},"{","{","width:")," '",d.default.createElement("span",{className:"hljs-attr"},"200px"),"'","}","}",">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"Cascader"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"data"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.state.data","}"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"value"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.state.value","}"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",d.default.createElement("span",{className:"hljs-string"},"{","::this.handleChange","}"),d.default.createElement("br",null),"                />"),d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"div"),">"),d.default.createElement("br",null),"        );",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleChange(value) ","{",d.default.createElement("br",null),"        console.log(value);",d.default.createElement("br",null),"        this.setState(","{",d.default.createElement("br",null),"            value",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"}",d.default.createElement("br",null)))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<Cascader1/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},d.default.createElement("i",null)))),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode13?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(i,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-description"},d.default.createElement("p",null,"不提供value")),d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"Cascader2")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",d.default.createElement("br",null),"    render() ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," (",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"xml"},d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"div")," ",d.default.createElement("span",{className:"hljs-attr"},"style"),"=",d.default.createElement("span",{className:"hljs-string"},"{","{","width:")," '",d.default.createElement("span",{className:"hljs-attr"},"200px"),"'","}","}",">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"Cascader"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"data"),"=",d.default.createElement("span",{className:"hljs-string"},"{","cascaderData","}"),d.default.createElement("br",null),"                />"),d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"div"),">"),d.default.createElement("br",null),"        );",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"}",d.default.createElement("br",null)))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<Cascader2/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,13)},d.default.createElement("i",null)))),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode17?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(p,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-description"},d.default.createElement("p",null,"自定义value的显示")),d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"Cascader3")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"value"),": [",d.default.createElement("span",{className:"hljs-string"},"'0'"),", ",d.default.createElement("span",{className:"hljs-string"},"'01'"),"],",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"data"),": cascaderData",d.default.createElement("br",null),"        ","}",";",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    render() ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," (",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"xml"},d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"div")," ",d.default.createElement("span",{className:"hljs-attr"},"style"),"=",d.default.createElement("span",{className:"hljs-string"},"{","{","width:")," '",d.default.createElement("span",{className:"hljs-attr"},"200px"),"'","}","}",">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"Cascader"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"data"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.state.data","}"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"value"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.state.value","}"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"valueRender"),"=",d.default.createElement("span",{className:"hljs-string"},"{","(value)")," =>")," (value && value.length > 0 ? value[value.length - 1].name : '')","}",d.default.createElement("br",null),"                    onChange=","{","::this.handleChange","}",d.default.createElement("br",null),"                />",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"div"),">"),d.default.createElement("br",null),"        );",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleChange(value) ","{",d.default.createElement("br",null),"        console.log(value);",d.default.createElement("br",null),"        this.setState(","{",d.default.createElement("br",null),"            value",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"}",d.default.createElement("br",null)))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<Cascader3/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,17)},d.default.createElement("i",null)))),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode21?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(N,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-description"},d.default.createElement("p",null,"更改input样式（sm尺寸）")),d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"Cascader4")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",d.default.createElement("br",null),"    render() ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," (",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"xml"},d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"div")," ",d.default.createElement("span",{className:"hljs-attr"},"style"),"=",d.default.createElement("span",{className:"hljs-string"},"{","{","width:")," '",d.default.createElement("span",{className:"hljs-attr"},"200px"),"'","}","}",">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"Cascader"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"data"),"=",d.default.createElement("span",{className:"hljs-string"},"{","cascaderData","}"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"inputProps"),"=",d.default.createElement("span",{className:"hljs-string"},"{","{","className:")," '",d.default.createElement("span",{className:"hljs-attr"},"input-sm"),"'","}","}",d.default.createElement("br",null),"                />"),d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"div"),">"),d.default.createElement("br",null),"        );",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"}",d.default.createElement("br",null)))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<Cascader4/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,21)},d.default.createElement("i",null)))),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode25?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(b,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-description"},d.default.createElement("p",null,"自定义children")),d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"Cascader5")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"value"),": [",d.default.createElement("span",{className:"hljs-string"},"'0'"),", ",d.default.createElement("span",{className:"hljs-string"},"'01'"),"],",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"data"),": cascaderData",d.default.createElement("br",null),"        ","}",";",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    render() ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"let")," value = [];",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"if")," (",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state.value.length > ",d.default.createElement("span",{className:"hljs-number"},"0"),") ","{",d.default.createElement("br",null),"            _.each(",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state.value, (v, i) => ","{",d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-keyword"},"const")," match = _.find(i === ",d.default.createElement("span",{className:"hljs-number"},"0")," ? ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state.data : value[i - ",d.default.createElement("span",{className:"hljs-number"},"1"),"].children, val => ","{",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-keyword"},"return")," v === val.value;",d.default.createElement("br",null),"                ","}",");",d.default.createElement("br",null),"                value.push(match);",d.default.createElement("br",null),"            ","}",");",d.default.createElement("br",null),"        ","}",d.default.createElement("br",null),"        ",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," (",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"xml"},d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"div")," ",d.default.createElement("span",{className:"hljs-attr"},"style"),"=",d.default.createElement("span",{className:"hljs-string"},"{","{","width:")," '",d.default.createElement("span",{className:"hljs-attr"},"200px"),"'","}","}",">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"Cascader"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"data"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.state.data","}"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",d.default.createElement("span",{className:"hljs-string"},"{","::this.handleChange","}"),d.default.createElement("br",null),"                >"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"div"),">"),d.default.createElement("br",null),"                        ","{","_.map(value, v => v.name).join(',')","}",d.default.createElement("br",null),"                        ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"button")," ",d.default.createElement("span",{className:"hljs-attr"},"className"),"=",d.default.createElement("span",{className:"hljs-string"},'"btn btn-primary btn-xs"'),">"),"add +",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"button"),">"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"div"),">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"Cascader"),">"),d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"div"),">")),d.default.createElement("br",null),"        );",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleChange(value) ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-built_in"},"console"),".log(value);",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",d.default.createElement("br",null),"            value",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"}",d.default.createElement("br",null))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<Cascader5/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,25)},d.default.createElement("i",null)))),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode29?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(j,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-description"},d.default.createElement("p",null,"禁止选择")),d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"Cascader6")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"value"),": [],",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"data"),": cascaderData",d.default.createElement("br",null),"        ","}",";",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    render() ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," (",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"xml"},d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"div")," ",d.default.createElement("span",{className:"hljs-attr"},"style"),"=",d.default.createElement("span",{className:"hljs-string"},"{","{","width:")," '",d.default.createElement("span",{className:"hljs-attr"},"200px"),"'","}","}",">"),d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"Cascader"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"disabled"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"data"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.state.data","}"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"value"),"=",d.default.createElement("span",{className:"hljs-string"},"{","this.state.value","}"),d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",d.default.createElement("span",{className:"hljs-string"},"{","::this.handleChange","}"),d.default.createElement("br",null),"                />"),d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"div"),">"),d.default.createElement("br",null),"        );",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleChange(value) ","{",d.default.createElement("br",null),"        console.log(value);",d.default.createElement("br",null),"        this.setState(","{",d.default.createElement("br",null),"            value",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"}",d.default.createElement("br",null)))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<Cascader6/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,29)},d.default.createElement("i",null)))),d.default.createElement("h3",{id:"props"},d.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),d.default.createElement("ul",null,d.default.createElement("li",null,d.default.createElement("code",null,"data (array|isRequired)")," 格式如上面的data，",d.default.createElement("code",null,"[{value: 1, name: '深圳', children: [{...}]}]")," 。"),d.default.createElement("li",null,d.default.createElement("code",null,"value (array)")," 一个数组或者null，表示选中了那些数据。 ['0']则选择了广东，['0', '01']则选择了广东，深圳"),d.default.createElement("li",null,d.default.createElement("code",null,"defaultValue")," 同上"),d.default.createElement("li",null,d.default.createElement("code",null,"onChange (func)")," 提供和value一样的数组"),d.default.createElement("li",null,d.default.createElement("code",null,"inputProps (object)")," 定义里面input的props"),d.default.createElement("li",null,d.default.createElement("code",null,"valueRender (func)")," 自定义value的展现"),d.default.createElement("li",null,d.default.createElement("code",null,"children")," 自定义children的展现"),d.default.createElement("li",null,d.default.createElement("code",null,"disabled")," 禁止选择")))}}]),a}(d.default.Component);a.default=v}});