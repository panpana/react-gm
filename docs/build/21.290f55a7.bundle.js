webpackJsonp([21],{559:function(e,l,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function r(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function c(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}Object.defineProperty(l,"__esModule",{value:!0});var u=function(){function e(e,l){for(var t=0;t<l.length;t++){var a=l[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(l,t,a){return t&&e(l.prototype,t),a&&e(l,a),l}}(),m=t(1),d=a(m),s=t(20),o=t(3),i=a(o),f=function(e){function l(){return n(this,l),r(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return c(l,e),u(l,[{key:"render",value:function(){return d.default.createElement(s.QuickPanel,{title:"运营时间设置"},d.default.createElement("div",{className:"gm-padding-15"},"内容"))}}]),l}(d.default.Component),E=function(e){function l(){return n(this,l),r(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return c(l,e),u(l,[{key:"renderCollapseFilter",value:function(){return d.default.createElement("div",null,d.default.createElement("form",{className:"form-horizontal"},d.default.createElement(s.Flex,{alignCenter:!0,className:"form-group"},d.default.createElement(s.Flex,{alignCenter:!0,className:"col-md-2"},d.default.createElement("div",{className:"gm-inline-block"},d.default.createElement("select",{className:"form-control",style:{border:"none"}},d.default.createElement("option",{value:"1"},"按日期"),d.default.createElement("option",{value:"1"},"按周期")))),d.default.createElement("div",{className:"col-md-10"},d.default.createElement(s.DateRangePicker,{begin:new Date,end:new Date,onChange:i.default.noop,inputClassName:"form-control"}))),d.default.createElement(s.Flex,{alignCenter:!0,className:"form-group"},d.default.createElement(s.Flex,{alignCenter:!0,className:"col-md-2"},"商品筛选："),d.default.createElement("div",{className:"col-md-10"},d.default.createElement("div",{className:"gm-inline-block"},d.default.createElement("input",{type:"text",style:{width:"120px"},placeholder:"全部一级分类",className:"form-control gm-inline-block gm-margin-right-5"})),d.default.createElement("div",{className:"gm-inline-block"},d.default.createElement("input",{type:"text",style:{width:"120px"},placeholder:"全部二级分类",className:"form-control gm-inline-block gm-margin-right-5"})),d.default.createElement("div",{className:"gm-inline-block"},d.default.createElement("input",{type:"text",style:{width:"120px"},placeholder:"全部三级分类",className:"form-control gm-inline-block"})))),d.default.createElement(s.Flex,{alignCenter:!0,className:"form-group"},d.default.createElement(s.Flex,{alignCenter:!0,className:"col-md-2"},"任务筛选："),d.default.createElement("div",{className:"col-md-10"},d.default.createElement("div",{className:"gm-inline-block gm-margin-right-5"},d.default.createElement("select",{className:"form-control"},d.default.createElement("option",{value:"1"},"全部分拣备注"),d.default.createElement("option",{value:"2"},"全部分拣备注"))),d.default.createElement("div",{className:"gm-inline-block gm-margin-right-5"},d.default.createElement("select",{className:"form-control"},d.default.createElement("option",{value:"1"},"全部任务类型"),d.default.createElement("option",{value:"1"},"全部任务类型"))),d.default.createElement("div",{className:"gm-inline-block"},d.default.createElement("select",{className:"form-control"},d.default.createElement("option",{value:"1"},"全部任务状态"),d.default.createElement("option",{value:"1"},"全部任务状态"))))),d.default.createElement("div",{className:"form-group"},d.default.createElement(s.Flex,{alignCenter:!0,className:"col-md-2"},"订单筛选："),d.default.createElement("div",{className:"col-md-10"},d.default.createElement("div",{className:"gm-inline-block"},d.default.createElement("select",{className:"form-control"},d.default.createElement("option",{value:"1"},"选择运营配置"),d.default.createElement("option",{value:"1"},"选择XX配置"))))),d.default.createElement(s.Flex,{alignCenter:!0,className:"form-group"},d.default.createElement(s.Flex,{alignCenter:!0,className:"col-md-2"},"搜索："),d.default.createElement("div",{className:"col-md-10"},d.default.createElement("input",{style:{width:"350px"},className:"form-control",placeholder:"输入订单号、分拣号、商户信息、商品信息搜索等"}))),d.default.createElement(s.Flex,{alignCenter:!0,className:"form-group gm-padding-left-15"},d.default.createElement("button",{type:"submit",className:"btn btn-primary"},"搜索"),d.default.createElement("div",{className:"gm-gap-10"}),d.default.createElement("a",{href:"",className:"btn btn-default"},"导出"))))}},{key:"render",value:function(){return d.default.createElement(s.QuickTab,{tabs:["按订单查看","按商品查看"],className:"gm-padding-15",isStatic:!0},d.default.createElement(s.QuickTab.QuickTabItem,null,d.default.createElement(s.QuickFilter,{className:"gm-border-top-0",collapseRender:this.renderCollapseFilter},d.default.createElement("form",{className:"form-inline"},d.default.createElement("select",{className:"form-control gm-margin-right-10 gm-border-0"},d.default.createElement("option",{value:"1"},"按周期"),d.default.createElement("option",{value:"1"},"按日期")),d.default.createElement("select",{className:"form-control gm-margin-right-10"},d.default.createElement("option",{value:"1"},"选择运营配置"),d.default.createElement("option",{value:"1"},"选择XX配置")),d.default.createElement("div",{className:"input-group gm-margin-right-10"},d.default.createElement("input",{type:"text",className:"form-control",placeholder:"请输入订单号",style:{minWidth:"250px"}})),d.default.createElement("button",{type:"submit",className:"btn btn-primary"},"搜索"),d.default.createElement("div",{className:"gm-gap-10"}),d.default.createElement("a",{href:"",className:"btn btn-default"},"导出")))),d.default.createElement(s.QuickTab.QuickTabItem,null,d.default.createElement(s.QuickFilter,{className:"gm-border-top-0"},d.default.createElement("form",{className:"form-inline"},d.default.createElement("div",{className:"input-group gm-margin-right-10"},d.default.createElement("input",{type:"text",className:"form-control",placeholder:"请输入商户名称",style:{minWidth:"250px"}})),d.default.createElement("button",{type:"submit",className:"btn btn-primary"},"搜索"),d.default.createElement("div",{className:"gm-gap-10"}),d.default.createElement("a",{href:"",className:"btn btn-default"},"导出")))))}}]),l}(d.default.Component),b=function(e){function l(e){n(this,l);var t=r(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={},t}return c(l,e),u(l,[{key:"handleToggleCode",value:function(e){var l={};l["showCode"+e]=!this.state["showCode"+e],this.setState(l)}},{key:"render",value:function(){return d.default.createElement("div",{className:"doc"},d.default.createElement("h2",{id:"quick"},d.default.createElement("a",{className:"header-anchor",href:"#quick","aria-hidden":"true"},"¶")," Quick"),d.default.createElement("p",null,"各种Panel面板"),d.default.createElement("h2",{id:"quickpanel"},d.default.createElement("a",{className:"header-anchor",href:"#quickpanel","aria-hidden":"true"},"¶")," QuickPanel"),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(f,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"QuickPanelDemo")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")),"{",d.default.createElement("br",null),"    render()","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," ",d.default.createElement("span",{className:"xml"},d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"QuickPanel")," ",d.default.createElement("span",{className:"hljs-attr"},"title"),"=",d.default.createElement("span",{className:"hljs-string"},"{"),'"运营时间设置"',"}",">"),d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-tag"},"<",d.default.createElement("span",{className:"hljs-name"},"div")," ",d.default.createElement("span",{className:"hljs-attr"},"className"),"=",d.default.createElement("span",{className:"hljs-string"},'"gm-padding-15"'),">"),"内容",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"div"),">"),d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-tag"},"</",d.default.createElement("span",{className:"hljs-name"},"QuickPanel"),">")),d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"}",d.default.createElement("br",null))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<QuickPanelDemo/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},d.default.createElement("i",null)))),d.default.createElement("h2",{id:"quicktab"},d.default.createElement("a",{className:"header-anchor",href:"#quicktab","aria-hidden":"true"},"¶")," QuickTab"),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode16?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(E,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"Tab")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")),"{",d.default.createElement("br",null),"    renderCollapseFilter()","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," <div>",d.default.createElement("br",null),'                   <form className="form-horizontal">',d.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',d.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">',d.default.createElement("br",null),'                               <div className="gm-inline-block">',d.default.createElement("br",null),'                                   <select className="form-control" style=',"{","{","border: 'none'","}","}",">",d.default.createElement("br",null),'                                       <option value="1">按日期</option>',d.default.createElement("br",null),'                                       <option value="1">按周期</option>',d.default.createElement("br",null),"                                   </select>",d.default.createElement("br",null),"                               </div>",d.default.createElement("br",null),"                           </Flex>",d.default.createElement("br",null),'                           <div className="col-md-10">',d.default.createElement("br",null),"                               <DateRangePicker",d.default.createElement("br",null),"                                   begin=","{","new Date()","}",d.default.createElement("br",null),"                                   end=","{","new Date()","}",d.default.createElement("br",null),"                                   onChange=","{","_.noop","}",d.default.createElement("br",null),'                                   inputClassName="form-control"',d.default.createElement("br",null),"                               />",d.default.createElement("br",null),"                           </div>",d.default.createElement("br",null),"                       </Flex>",d.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',d.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">商品筛选：</Flex>',d.default.createElement("br",null),'                           <div className="col-md-10">',d.default.createElement("br",null),'                               <div className="gm-inline-block">',d.default.createElement("br",null),'                                   <input type="text" style=',"{","{","width: '120px'","}","}",' placeholder="全部一级分类" className="form-control gm-inline-block gm-margin-right-5"/>',d.default.createElement("br",null),"                               </div>",d.default.createElement("br",null),'                               <div className="gm-inline-block">',d.default.createElement("br",null),'                                   <input type="text" style=',"{","{","width: '120px'","}","}",' placeholder="全部二级分类" className="form-control gm-inline-block gm-margin-right-5"/>',d.default.createElement("br",null),"                               </div>",d.default.createElement("br",null),'                               <div className="gm-inline-block">',d.default.createElement("br",null),'                                   <input type="text" style=',"{","{","width: '120px'","}","}",' placeholder="全部三级分类" className="form-control gm-inline-block"/>',d.default.createElement("br",null),"                               </div>",d.default.createElement("br",null),"                           </div>",d.default.createElement("br",null),"                       </Flex>",d.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',d.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">任务筛选：</Flex>',d.default.createElement("br",null),'                           <div className="col-md-10">',d.default.createElement("br",null),'                               <div className="gm-inline-block gm-margin-right-5">',d.default.createElement("br",null),'                                   <select className="form-control">',d.default.createElement("br",null),'                                       <option value="1">全部分拣备注</option>',d.default.createElement("br",null),'                                       <option value="2">全部分拣备注</option>',d.default.createElement("br",null),"                                   </select>",d.default.createElement("br",null),"                               </div>",d.default.createElement("br",null),'                               <div className="gm-inline-block gm-margin-right-5">',d.default.createElement("br",null),'                                   <select className="form-control">',d.default.createElement("br",null),'                                       <option value="1">全部任务类型</option>',d.default.createElement("br",null),'                                       <option value="1">全部任务类型</option>',d.default.createElement("br",null),"                                   </select>",d.default.createElement("br",null),"                               </div>",d.default.createElement("br",null),'                               <div className="gm-inline-block">',d.default.createElement("br",null),'                                   <select className="form-control">',d.default.createElement("br",null),'                                       <option value="1">全部任务状态</option>',d.default.createElement("br",null),'                                       <option value="1">全部任务状态</option>',d.default.createElement("br",null),"                                   </select>",d.default.createElement("br",null),"                               </div>",d.default.createElement("br",null),"                           </div>",d.default.createElement("br",null),"                       </Flex>",d.default.createElement("br",null),'                       <div className="form-group">',d.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">订单筛选：</Flex>',d.default.createElement("br",null),'                           <div className="col-md-10">',d.default.createElement("br",null),'                               <div className="gm-inline-block">',d.default.createElement("br",null),'                                   <select className="form-control">',d.default.createElement("br",null),'                                       <option value="1">选择运营配置</option>',d.default.createElement("br",null),'                                       <option value="1">选择XX配置</option>',d.default.createElement("br",null),"                                   </select>",d.default.createElement("br",null),"                               </div>",d.default.createElement("br",null),"                           </div>",d.default.createElement("br",null),"                       </div>",d.default.createElement("br",null),'                       <Flex alignCenter className="form-group">',d.default.createElement("br",null),'                           <Flex alignCenter className="col-md-2">搜索：</Flex>',d.default.createElement("br",null),'                           <div className="col-md-10">',d.default.createElement("br",null),"                               <input style=","{","{","width: '350px'","}","}",' className="form-control" placeholder="输入订单号、分拣号、商户信息、商品信息搜索等"/>',d.default.createElement("br",null),"                           </div>",d.default.createElement("br",null),"                       </Flex>",d.default.createElement("br",null),'                       <Flex alignCenter className="form-group gm-padding-left-15">',d.default.createElement("br",null),'                           <button type="submit" className="btn btn-primary">搜索</button>',d.default.createElement("br",null),'                           <div className="gm-gap-10"></div>',d.default.createElement("br",null),'                           <a href="" className="btn btn-default">导出</a>',d.default.createElement("br",null),"                       </Flex>",d.default.createElement("br",null),"                   </form>",d.default.createElement("br",null),"               </div>;",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"render() ","{",d.default.createElement("br",null),"        return (",d.default.createElement("br",null),"            <QuickTab tabs=","{","['按订单查看', '按商品查看']","}",' className="gm-padding-15" isStatic=',"{","true","}",">",d.default.createElement("br",null),"                <QuickTab.QuickTabItem>",d.default.createElement("br",null),'                    <QuickFilter className="gm-border-top-0" collapseRender=',"{","this.renderCollapseFilter","}",">",d.default.createElement("br",null),'                        <form className="form-inline">',d.default.createElement("br",null),'                            <select className="form-control gm-margin-right-10 gm-border-0">',d.default.createElement("br",null),'                                <option value="1">按周期</option>',d.default.createElement("br",null),'                                <option value="1">按日期</option>',d.default.createElement("br",null),"                            </select>",d.default.createElement("br",null),'                            <select className="form-control gm-margin-right-10">',d.default.createElement("br",null),'                                <option value="1">选择运营配置</option>',d.default.createElement("br",null),'                                <option value="1">选择XX配置</option>',d.default.createElement("br",null),"                            </select>",d.default.createElement("br",null),'                            <div className="input-group gm-margin-right-10">',d.default.createElement("br",null),"                                <input",d.default.createElement("br",null),'                                    type="text"',d.default.createElement("br",null),'                                    className="form-control"',d.default.createElement("br",null),'                                    placeholder="请输入订单号"',d.default.createElement("br",null),"                                    style=","{","{","minWidth: '250px'","}","}",d.default.createElement("br",null),"                                />",d.default.createElement("br",null),"                            </div>",d.default.createElement("br",null),'                            <button type="submit" className="btn btn-primary">搜索</button>',d.default.createElement("br",null),'                            <div className="gm-gap-10"></div>',d.default.createElement("br",null),'                            <a href="" className="btn btn-default">导出</a>',d.default.createElement("br",null),"                        </form>",d.default.createElement("br",null),"                    </QuickFilter>",d.default.createElement("br",null),"                </QuickTab.QuickTabItem>",d.default.createElement("br",null),"                <QuickTab.QuickTabItem>",d.default.createElement("br",null),'                    <QuickFilter className="gm-border-top-0">',d.default.createElement("br",null),'                        <form className="form-inline">',d.default.createElement("br",null),'                            <div className="input-group gm-margin-right-10">',d.default.createElement("br",null),"                                <input",d.default.createElement("br",null),'                                    type="text"',d.default.createElement("br",null),'                                    className="form-control"',d.default.createElement("br",null),'                                    placeholder="请输入商户名称"',d.default.createElement("br",null),"                                    style=","{","{","minWidth: '250px'","}","}",d.default.createElement("br",null),"                                />",d.default.createElement("br",null),"                            </div>",d.default.createElement("br",null),'                            <button type="submit" className="btn btn-primary">搜索</button>',d.default.createElement("br",null),'                            <div className="gm-gap-10"></div>',d.default.createElement("br",null),'                            <a href="" className="btn btn-default">导出</a>',d.default.createElement("br",null),"                        </form>",d.default.createElement("br",null),"                    </QuickFilter>",d.default.createElement("br",null),"                </QuickTab.QuickTabItem>",d.default.createElement("br",null),"            </QuickTab>",d.default.createElement("br",null),"         )",d.default.createElement("br",null),"    ","}",";",d.default.createElement("br",null)," ","}",d.default.createElement("br",null))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<Tab/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,16)},d.default.createElement("i",null)))),d.default.createElement("h3",{id:"props"},d.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),d.default.createElement("ul",null,d.default.createElement("li",null,d.default.createElement("code",null,"tabs (array)")," tab 名称数组,"),d.default.createElement("li",null,d.default.createElement("code",null,"onChange (func)")),d.default.createElement("li",null,d.default.createElement("code",null,"active (number)")," 当前激活的tab,"),d.default.createElement("li",null,d.default.createElement("code",null,"right (element)")," 头部右边内容,"),d.default.createElement("li",null,d.default.createElement("code",null,"isStatic (bool)")," tab 内容切换的时候是否不被卸载"),d.default.createElement("li",null,d.default.createElement("code",null,"children")," 尽量提供",d.default.createElement("code",null,"QuickTabItem"),"组件数组，这样语义化好点")),d.default.createElement("h3",{id:"component"},d.default.createElement("a",{className:"header-anchor",href:"#component","aria-hidden":"true"},"¶")," Component"),d.default.createElement("ul",null,d.default.createElement("li",null,d.default.createElement("code",null,"QuickTabItem")," 语义化，为children每个实例增加的一个wrap")))}}]),l}(d.default.Component);l.default=b}});