webpackJsonp([1],{0:function(t,e){},"3Roa":function(t,e){},"9b6C":function(t,e){},Ch6C:function(t,e){},CsDA:function(t,e){},DN5h:function(t,e){},FnhZ:function(t,e,a){"use strict";var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact container"},[a("h1",[t._v("联系方式")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("实验室地点：9#305")]),t._v(" "),a("p",[t._v("联系负责老师: 吴老师（9#401）")]),t._v(" "),a("p"),t._v(" "),a("p",[t._v("软件孵化实验室")]),t._v(" "),a("p",[t._v("2019.11.1")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("报名系统问题或网站故障联系：")]),t._v(" "),a("p",[t._v("qq：501966782")])])}]};var s=a("VU/8")({name:"Contact",data:function(){return{msg:"Welcome to Your Vue.js App"}}},n,!1,function(t){a("jbr+")},"data-v-8856a34e",null);e.a=s.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("8+8L"),r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"app"}})},staticRenderFns:[]};var o=a("VU/8")({name:"App"},r,!1,function(t){a("vM1B")},null,null).exports,i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("实验室报名系统")])],1),t._v(" "),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbar"}},[a("ul",{staticClass:"nav navbar-nav"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/about"}},[t._v("关于我们")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/contact"}},[t._v("联系我们")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/new"}},[t._v("立即报名")])],1)]),t._v(" "),a("ul",{staticClass:"nav navbar-nav navbar-right"},[a("li",[a("router-link",{attrs:{to:"/query"}},[t._v("查询结果")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"})])}]};var c=a("VU/8")({name:"Nav",data:function(){return{}},methods:{}},i,!1,function(t){a("9b6C")},"data-v-9e3e52e6",null).exports,u=a("lO7g"),v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"footer container"},[e("hr"),this._v(" "),e("p",[this._v("© 2019 SDUT Software Laboratory Org.")])])}]};var l=a("VU/8")({name:"foot",data:function(){return{}}},v,!1,function(t){a("CsDA")},"data-v-976f977a",null).exports,m=a("YaEn"),p=a("mtWM"),_=a.n(p),d=a("mw3O"),f=a.n(d);n.a.prototype.$axios=_.a,n.a.prototype.qs=f.a,n.a.config.productionTip=!1,_.a.defaults.timeout=1e4,_.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",_.a.defaults.baseURL="api",n.a.use(s.a),new n.a({el:"#app",router:m.a,components:{Nav:c,App:o,Foot:l,Home:u.a},template:'\n    <div id="app">\n      <Nav/>\n      <router-view></router-view>\n      <Foot/>\n    </div>\n  '})},REWY:function(t,e){},YaEn:function(t,e,a){"use strict";(function(t){var n=a("7+uW"),s=a("/ocq"),r=a("lO7g"),o=a("c27y"),i=a("il+h"),c=a("FnhZ"),u=a("dEEB");n.a.use(s.a),e.a=new s.a({mode:"history",base:t,routes:[{path:"*",redirect:"/"},{path:"/",name:"",component:r.a},{path:"/contact",name:"contact",component:c.a},{path:"/about",name:"about",component:o.a},{path:"/new",name:"new",component:i.a},{path:"/query",name:"query",component:u.a}]})}).call(e,"/")},c27y:function(t,e,a){"use strict";var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about container"},[a("h1",[t._v("关于实验室")]),t._v(" "),a("hr"),t._v("计算机学院软件孵化实验室，成立于2014年5月，致力于为学生提供综合素养的成长环境、为学生提供跨学科领域的实训平台、为学生提供技术方向引导的师资力量。\n  "),a("h3",[t._v("一、面向对象")]),t._v("计算机学院大一至大三计科及软件专业的同学。\n  "),a("h3",[t._v("二、基本要求")]),t._v(" "),a("p",[t._v("1. 具备对软件开发领域知识的求知欲；")]),t._v(" "),a("p",[t._v("2. 具备基本的交流与组织能力；")]),t._v(" "),a("p",[t._v("3. 愿意投入时间与精力学习软件开发技术；")]),t._v(" "),a("p",[t._v("4. 愿意遵守实验室各项规章制度。")]),t._v(" "),a("h3",[t._v("三、基本制度")]),t._v(" "),a("p",[t._v("1. 实验室只用于与软件开发相应事务及经实验室主管许可的相关活动，除此未经许可不得在实验内从事无关软件开发主旨的事情；")]),t._v(" "),a("p",[t._v("2. 进驻实验室人员需要遵从学校与学院各项管理规章制度，需要保证基础学业全面发展的前提下，再进行软件开发能力的提升；")]),t._v(" "),a("p",[t._v("3. 进驻实验室人员在培训期间，需要按时并高质量完成指导老师所分派的各项开发任务；")]),t._v(" "),a("p",[t._v("4. 进驻实验室人员需要保证实验室安全；")]),t._v(" "),a("p",[t._v("5. 在日常学习过程中，禁止进行任何可能影响他人的行为；")]),t._v(" "),a("p",[t._v("6. 保持实验室整洁，轮值完成公共环境的清洁工作；")]),t._v(" "),a("p",[t._v("7. 对于违反以上规定的进驻实验室人员，由实验室主管批准，可以取消相关人员的进驻资格。")]),t._v(" "),a("h3",[t._v("四、培训形式")]),t._v(" "),a("p",[t._v("1. 采用“任务驱动”的方式完成项目实战。目前已完成项目包括“计算山理”微信公众号的查询子系统等。")]),t._v(" "),a("p",[t._v("2. 导师跟踪指导完成创新竞赛项目的开发。目前已指导数十名学员参加各类软件开发类竞赛，并在齐鲁大学生软件大赛中，获得了一个一等奖、两个二等奖和一个三等奖的优异成绩。")]),t._v(" "),a("p",[t._v("3. 举办专题讲座拓展专业视野。目前已邀请学院新进博士、优秀学长举办关于“医学图像处理”、“海洋图像数据处理”和“Web前端技术”等多项专题讲座。")])])}]};var s=a("VU/8")({name:"about",data:function(){return{msg:"Welcome to Your Vue.js App"}}},n,!1,function(t){a("DN5h")},"data-v-3c2e11af",null);e.a=s.exports},dEEB:function(t,e,a){"use strict";var n={name:"query",data:function(){return{username:""}},methods:{query:function(t){null!=this.username?this.$axios.get("/query/"+this.username).then(function(t){alert(t.data.message)}).catch(function(t){alert("查询失败或未开放")}):alert("请填写完整的数据"),t.preventDefault()}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add container"},[a("h1",{staticClass:"page-header"},[t._v("查询结果")]),t._v(" "),a("form",{on:{submit:t.query}},[a("div",{staticClass:"well"},[a("div",{staticClass:"form-group"},[a("label",[t._v("学号")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"学号（必填）"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("提交查询")])])])])},staticRenderFns:[]};var r=a("VU/8")(n,s,!1,function(t){a("REWY")},"data-v-16b0dd06",null);e.a=r.exports},"il+h":function(t,e,a){"use strict";a("mw3O");var n={name:"add",data:function(){return{customer:{}}},methods:{addCustomer:function(t){if(null!=this.customer.username&&null!=this.customer.name&&null!=this.customer.phoneNum){this.customer.username,this.customer.name,this.customer.gender,this.customer.phoneNum,this.customer.email,this.customer.profile;alert("报名未开放")}else alert("请填写完整的数据");t.preventDefault()}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add container"},[a("h1",{staticClass:"page-header"},[t._v("填写报名信息")]),t._v(" "),a("form",{on:{submit:t.addCustomer}},[a("div",{staticClass:"well"},[a("div",{staticClass:"form-group"},[a("label",[t._v("学号")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.username,expression:"customer.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"学号（必填）"},domProps:{value:t.customer.username},on:{input:function(e){e.target.composing||t.$set(t.customer,"username",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("姓名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.name,expression:"customer.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"姓名（必填）"},domProps:{value:t.customer.name},on:{input:function(e){e.target.composing||t.$set(t.customer,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("性别")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.customer.gender,expression:"customer.gender"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.customer,"gender",e.target.multiple?a:a[0])}}},[a("option"),t._v(" "),a("option",[t._v("男")]),t._v(" "),a("option",[t._v("女")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("手机号")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.phoneNum,expression:"customer.phoneNum"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"手机号（必填）"},domProps:{value:t.customer.phoneNum},on:{input:function(e){e.target.composing||t.$set(t.customer,"phoneNum",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("邮箱")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.email,expression:"customer.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"邮箱"},domProps:{value:t.customer.email},on:{input:function(e){e.target.composing||t.$set(t.customer,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("个人简历(简述个人技术栈、目标方向、项目经历等。竞赛获奖是加分项)")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.customer.profile,expression:"customer.profile"}],staticClass:"form-control",attrs:{rows:"10"},domProps:{value:t.customer.profile},on:{input:function(e){e.target.composing||t.$set(t.customer,"profile",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("提交信息")])])])])},staticRenderFns:[]};var r=a("VU/8")(n,s,!1,function(t){a("3Roa")},"data-v-6478e216",null);e.a=r.exports},"jbr+":function(t,e){},lO7g:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customers container"},[a("div",[a("div",{staticClass:"jumbotron"},[a("h1",[t._v("软件孵化实验室报名系统")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("或许你曾经痴迷于算法，在ACM集训队叱咤纷纭。或许对你来说写个小爬虫比上手王者荣耀还简单。或许你对大数据人工智能非常感兴趣。或许你对前端开发非常擅长, 能分分钟写个界面.")]),t._v(" "),a("p",[t._v("或许你擅长使用Linux，能写出部分脚本。或许你对Java后端开发以及部分框架有着深入的理解。")]),t._v(" "),a("p",[t._v("那么来加入我们吧，我们一起加油，一起搞项目。")]),t._v(" "),a("br"),t._v(" "),a("router-link",{staticClass:"btn btn-lg btn-primary",attrs:{to:"/about"}},[t._v("\n        了解实验室 »")]),t._v(" "),a("p")],1)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"other",attrs:{id:"req"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("h2",[t._v("要求一")]),t._v(" "),a("p",[t._v("面向全校的大一、大二的学生进行纳新。计算机学院学生优先考虑。其他学院有基础者优先。")])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("h2",[t._v("要求二")]),t._v(" "),a("p",[t._v("性格开朗，善于交流。可承受一定压力，积极主动。有一定技术基础优先，参与过acm集训优先。")])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("h2",[t._v("要求三")]),t._v(" "),a("p",[t._v("对技术有一定热情，三分钟热度误入。有责任心和团队合作精神优先。竞赛获奖是加分项。")])])])])}]};var s=a("VU/8")({name:"customers",components:{},data:function(){return{alertMsg:"",customers:[]}},methods:{},created:function(){},updated:function(){}},n,!1,function(t){a("Ch6C")},"data-v-6a8c2f46",null);e.a=s.exports},vM1B:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e15de4918fcbd724cff5.js.map