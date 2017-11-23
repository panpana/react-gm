webpackJsonp([20],{556:function(e,a,t){"use strict";function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function n(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var c=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),r=t(1),m=function(e){return e&&e.__esModule?e:{default:e}}(r),u=t(20),d=function(e){function a(e){l(this,a);var t=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={city:null,city2:null,city3:[],city4:[]},t}return n(a,e),c(a,[{key:"render",value:function(){var e=this;return m.default.createElement("div",null,m.default.createElement(u.RadioGroup,{name:"city",value:this.state.city,onChange:function(a){return e.setState({city:a})}},m.default.createElement(u.Radio,{value:1,disabled:!0},"广州"),m.default.createElement(u.Radio,{value:2},"深圳"),m.default.createElement(u.Radio,{value:3},"成都")),m.default.createElement("hr",null),m.default.createElement(u.RadioGroup,{name:"city2",inline:!0,value:this.state.city2,onChange:function(a){return e.setState({city2:a})}},m.default.createElement(u.Radio,{value:1,disabled:!0},"广州"),m.default.createElement(u.Radio,{value:2},"深圳"),m.default.createElement(u.Radio,{value:3},"成都")),m.default.createElement("hr",null),m.default.createElement(u.CheckboxGroup,{name:"city3",value:this.state.city3,onChange:function(a){return e.setState({city3:a})}},m.default.createElement(u.Checkbox,{value:1,disabled:!0},"广州"),m.default.createElement(u.Checkbox,{value:2},"深圳"),m.default.createElement(u.Checkbox,{value:3},"成都")),m.default.createElement("hr",null),m.default.createElement(u.CheckboxGroup,{name:"city4",inline:!0,value:this.state.city4,onChange:function(a){return e.setState({city4:a})}},m.default.createElement(u.Checkbox,{value:1,disabled:!0},"广州"),m.default.createElement(u.Checkbox,{value:2},"深圳"),m.default.createElement(u.Checkbox,{value:3},"成都")))}}]),a}(m.default.Component),f=function(e){function a(e){l(this,a);var t=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return n(a,e),c(a,[{key:"handleToggleCode",value:function(e){var a={};a["showCode"+e]=!this.state["showCode"+e],this.setState(a)}},{key:"render",value:function(){return m.default.createElement("div",{className:"doc"},m.default.createElement("h2",{id:"radio-checkbox"},m.default.createElement("a",{className:"header-anchor",href:"#radio-checkbox","aria-hidden":"true"},"¶")," Radio & Checkbox"),m.default.createElement("p",null,"配合",m.default.createElement("code",null,"RadioGroup"),"一起用，onChange返回的是原始值，非原始radio组件的字符串值"),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(d,null)),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-class"},m.default.createElement("span",{className:"hljs-keyword"},"class")," ",m.default.createElement("span",{className:"hljs-title"},"RadioWrap")," ",m.default.createElement("span",{className:"hljs-keyword"},"extends")," ",m.default.createElement("span",{className:"hljs-title"},"React"),".",m.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"city"),": ",m.default.createElement("span",{className:"hljs-literal"},"null"),",",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"city2"),": ",m.default.createElement("span",{className:"hljs-literal"},"null"),",",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"city3"),": [],",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"city4"),": []",m.default.createElement("br",null),"        ","}",";",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    render() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"return")," (",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"xml"},m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"div"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"RadioGroup")," ",m.default.createElement("span",{className:"hljs-attr"},"name"),"=",m.default.createElement("span",{className:"hljs-string"},'"city"')," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","this.state.city","}")," ",m.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",m.default.createElement("span",{className:"hljs-string"},"{","v")," =>")," this.setState(","{","city: v","}",")","}",">",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Radio")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","1","}")," ",m.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),"广州",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Radio"),">"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Radio")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","2","}"),">"),"深圳",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Radio"),">"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Radio")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","3","}"),">"),"成都",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Radio"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"RadioGroup"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"hr"),"/>"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"RadioGroup"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"name"),"=",m.default.createElement("span",{className:"hljs-string"},'"city2"'),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"inline"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","this.state.city2","}"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",m.default.createElement("span",{className:"hljs-string"},"{","v")," =>")," this.setState(","{","city2: v","}",")","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Radio")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","1","}")," ",m.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),"广州",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Radio"),">"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Radio")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","2","}"),">"),"深圳",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Radio"),">"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Radio")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","3","}"),">"),"成都",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Radio"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"RadioGroup"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"hr"),"/>"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"CheckboxGroup")," ",m.default.createElement("span",{className:"hljs-attr"},"name"),"=",m.default.createElement("span",{className:"hljs-string"},'"city3"')," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","this.state.city3","}")," ",m.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",m.default.createElement("span",{className:"hljs-string"},"{","v")," =>")," this.setState(","{","city3: v","}",")","}",">",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","1","}")," ",m.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),"广州",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","2","}"),">"),"深圳",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","3","}"),">"),"成都",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"CheckboxGroup"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"hr"),"/>"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"CheckboxGroup"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"name"),"=",m.default.createElement("span",{className:"hljs-string"},'"city4"'),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"inline"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","this.state.city4","}"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",m.default.createElement("span",{className:"hljs-string"},"{","v")," =>")," this.setState(","{","city4: v","}",")","}",m.default.createElement("br",null),"                >",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","1","}")," ",m.default.createElement("span",{className:"hljs-attr"},"disabled"),">"),"广州",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","2","}"),">"),"深圳",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"Checkbox")," ",m.default.createElement("span",{className:"hljs-attr"},"value"),"=",m.default.createElement("span",{className:"hljs-string"},"{","3","}"),">"),"成都",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"Checkbox"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"CheckboxGroup"),">"),m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"div"),">")),m.default.createElement("br",null),"        );",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"}",m.default.createElement("br",null))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<RadioWrap/>    ",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},m.default.createElement("i",null)))),m.default.createElement("h3",{id:"radio-props"},m.default.createElement("a",{className:"header-anchor",href:"#radio-props","aria-hidden":"true"},"¶")," Radio Props"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("code",null,"value (any)")),m.default.createElement("li",null,m.default.createElement("code",null,"onChange (func)"))),m.default.createElement("h3",{id:"radiogroup-props"},m.default.createElement("a",{className:"header-anchor",href:"#radiogroup-props","aria-hidden":"true"},"¶")," RadioGroup Props"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("code",null,"name (string|isRequired)")),m.default.createElement("li",null,m.default.createElement("code",null,"value (any)")),m.default.createElement("li",null,m.default.createElement("code",null,"onChange (func)")),m.default.createElement("li",null,m.default.createElement("code",null,"inline (bool)")," 是否行内排列")),m.default.createElement("h2",{id:"checkbox"},m.default.createElement("a",{className:"header-anchor",href:"#checkbox","aria-hidden":"true"},"¶")," Checkbox"),m.default.createElement("p",null,"基本同Radio，区别在于",m.default.createElement("code",null,"CheckboxGroup"),"的value是个数组，onChange提供参数回来"))}}]),a}(m.default.Component);a.default=f}});