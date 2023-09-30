"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[529],{13529:function(t,e,s){s.r(e),s.d(e,{default:function(){return N}});var a=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1}},["1"==t.template?e("template1",{attrs:{userInfo:t.userInfo,userList:t.userList}}):t._e(),"2"==t.template?e("template2",{attrs:{userInfo:t.userInfo,userList:t.userList}}):t._e(),"3"==t.template?e("template3",{attrs:{userInfo:t.userInfo,userList:t.userList}}):t._e(),"4"==t.template?e("template4",{attrs:{userInfo:t.userInfo,userList:t.userList}}):t._e()],1)},r=[],i=(s(41539),s(5259)),n=(s(82526),s(41817),function(){var t=this,e=t._self._c;return e("div",{staticClass:"template"},[e("a-row",{staticClass:"header"},[e("img",{staticClass:"bg",attrs:{src:t.userInfo.backgroundImage,alt:""}}),e("a-row",[e("h2",{staticStyle:{"padding-left":"100px"}},[t._v(t._s(t.userInfo.firstName)+" "+t._s(t.userInfo.lastName))])]),e("a-row",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{height:160,src:t.userInfo.avatar}})]),e("a-row",{staticStyle:{"font-size":"20px"}},[e("a-row",[e("b",[t._v("Jobs:")]),t._v(" "+t._s(t.userInfo.faculty))]),e("a-row",[e("b",[t._v("Tel:")]),t._v(" "+t._s(t.userInfo.phone))]),e("a-row",[e("b",[t._v("Email:")]),t._v(" "+t._s(t.userInfo.email))]),e("a-row",[e("b",[t._v("Office:")]),t._v(" "+t._s(t.userInfo.office))]),e("a-row",[e("a-col",{attrs:{span:12}},[e("b",[t._v("Contribution:")]),t._v(" "+t._s(t.userInfo.contribution)+" ")])],1)],1)],1),e("a-divider"),e("a-row",[e("a-tabs",{attrs:{"default-active-key":"2",type:"card"}},[e("a-tab-pane",{key:"1",attrs:{tab:"Teaching"}},t._l(t.userInfo.teaching,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),t._v(" "+t._s(s.description)+" "+t._s(s.time)+" ")])],1)})),1),e("a-tab-pane",{key:"2",attrs:{tab:"About","force-render":""}},[e("a-timeline",{attrs:{mode:"alternate"}},[e("a-timeline-item",[e("div",[e("b",[t._v("BIO")]),e("div",[t._v(t._s(t.userInfo.bio))])])]),e("a-timeline-item",[e("div",[e("b",[t._v("ACADEMIC POSITIONS")]),t._l(t.userInfo.aacdimicPosition,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),t._v(" "+t._s(s.description)+" "+t._s(s.time)+" ")])],1)}))],2)]),e("a-timeline-item",[e("div",[e("b",[t._v("DEGREES")]),t._l(t.userInfo.degrees,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),t._v(" "+t._s(s.description)+" "+t._s(s.time)+" ")])],1)}))],2)]),e("a-timeline-item",[e("div",[e("b",[t._v("AVAILABILITY")]),e("div",[t._v(t._s(t.userInfo.avibilitiy))])])]),e("a-timeline-item",[e("div",[e("b",[t._v("FIELDS OF RESEARCH")]),e("div",[t._v(t._s(t.userInfo.researchAreas))])])])],1)],1),e("a-tab-pane",{key:"3",attrs:{tab:"Publication"}},t._l(t.userInfo.publications,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),e("img",{attrs:{src:s.img,alt:"",width:"100px"}}),t._v(" "+t._s(s.time)+" "+t._s(s.description)+" "),e("a",{attrs:{href:s.pdf,download:s.pdf}},[t._v("pdf")]),t._v(" "+t._s(s.description)+" ")])],1)})),1),e("a-tab-pane",{key:"4",attrs:{tab:"Highlights"}},t._l(t.userInfo.highlights,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),t._v(" "+t._s(s.description)+" "+t._s(s.time)+" ")])],1)})),1)],1)],1)],1)}),o=[],u={data:function(){return{}},components:{},props:{userInfo:{type:Object,default:function(){return{}}},userList:{type:Array,default:function(){return[]}}}},c=u,l=s(1001),_=(0,l.Z)(c,n,o,!1,null,"c8960354",null),f=_.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"template"},[e("a-row",{attrs:{gutter:1}},[e("a-col",{attrs:{span:6}},[e("img",{attrs:{height:160,src:t.userInfo.avatar}})]),e("a-col",{attrs:{span:18}},[e("div",{staticClass:"desc",staticStyle:{"background-color":"#a33131d9",padding:"10px","min-height":"160px"}},[t._v(" "+t._s(t.userInfo.contribution)+" ")])])],1),e("a-divider"),e("a-row",{attrs:{gutter:10}},[e("a-col",{attrs:{span:16}},[e("a-row",[e("a-collapse",{attrs:{accordion:""}},[e("a-collapse-panel",{key:"1",attrs:{header:"Teaching"}},t._l(t.userInfo.teaching,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),t._v(" "+t._s(s.description)+" "+t._s(s.time)+" ")])],1)})),1),e("a-collapse-panel",{key:"2",attrs:{header:"About"}},[e("a-timeline",{attrs:{mode:"alternate"}},[e("a-timeline-item",[e("div",[e("b",[t._v("BIO")]),e("div",[t._v(t._s(t.userInfo.bio))])])]),e("a-timeline-item",[e("div",[e("b",[t._v("ACADEMIC POSITIONS")]),t._l(t.userInfo.aacdimicPosition,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),t._v(" "+t._s(s.description)+" "+t._s(s.time)+" ")])],1)}))],2)]),e("a-timeline-item",[e("div",[e("b",[t._v("DEGREES")]),t._l(t.userInfo.degrees,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),t._v(" "+t._s(s.description)+" "+t._s(s.time)+" ")])],1)}))],2)]),e("a-timeline-item",[e("div",[e("b",[t._v("AVAILABILITY")]),e("div",[t._v(t._s(t.userInfo.avibilitiy))])])]),e("a-timeline-item",[e("div",[e("b",[t._v("FIELDS OF RESEARCH")]),e("div",[t._v(t._s(t.userInfo.researchAreas))])])])],1)],1),e("a-collapse-panel",{key:"3",attrs:{header:"Publications"}},t._l(t.userInfo.publications,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),e("img",{attrs:{src:s.img,alt:"",width:"100px"}}),t._v(" "+t._s(s.time)+" "+t._s(s.description)+" "),e("a",{attrs:{href:s.pdf,download:s.pdf}},[t._v("pdf")]),t._v(" "+t._s(s.description)+" ")])],1)})),1),e("a-collapse-panel",{key:"4",attrs:{header:"Research"}},[e("p",[t._v(t._s(t.userInfo.researchAreas))])])],1)],1),e("a-row",{staticStyle:{background:"#608ba3b8",padding:"10px"}},[e("a-col",{attrs:{span:11}},[e("b",[t._v("Location: "+t._s(t.userInfo.location))])]),e("a-col",{attrs:{span:2}},[e("a-divider",{staticStyle:{height:"60px","border-color":"black"},attrs:{type:"vertical"}})],1),e("a-col",{attrs:{span:11}},[e("b",[t._v("Contact:")]),e("a-row",{attrs:{span:12}},[t._v("Phone: "+t._s(t.userInfo.phone))]),e("a-row",{attrs:{span:12}},[t._v("Email: "+t._s(t.userInfo.email))])],1)],1)],1),e("a-col",{attrs:{span:8}},[e("h2",[t._v("Recent Highlights")]),e("div",{staticClass:"list"},t._l(t.userInfo.highlights,(function(s){return e("div",{key:s.time,staticClass:"item"},[e("a-card",{staticStyle:{"margin-bottom":"10px"}},[e("h3",[t._v(t._s(s.time))]),e("b",[t._v(t._s(s.description))])])],1)})),0)])],1)],1)},d=[],v={data:function(){return{text:"sdfsdfsd"}},components:{},props:{userInfo:{type:Object,default:function(){return{}}},userList:{type:Array,default:function(){return[]}}}},m=v,h=(0,l.Z)(m,p,d,!1,null,"28849440",null),b=h.exports,I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"template"},[e("h2",{staticStyle:{"text-align":"center","font-size":"30px"}},[t._v("Academic Staff webpage")]),e("a-row",{attrs:{gutter:2}},[e("a-col",{attrs:{span:8}},[e("img",{attrs:{width:200,src:t.userInfo.avatar}}),e("h1",[e("b",{staticStyle:{"font-size":"30px"}},[t._v(t._s(t.userInfo.firstName)+" "+t._s(t.userInfo.lastName))])]),e("div",{staticClass:"Departments"},[t._v(" "+t._s(t.userInfo.department)+" ")]),e("a-row",{staticStyle:{"margin-top":"10px"}},[e("b",[t._v("Bio: ")]),e("br"),t._v(" "+t._s(t.userInfo.bio)+" ")]),e("a-row",{staticStyle:{"margin-top":"30px","font-weight":"600"}},[e("a-row",[t._v(t._s(t.userInfo.phone))]),e("a-row",[t._v(t._s(t.userInfo.email))])],1),e("a-row",[e("p",[t._v("Teaching")]),e("ul",t._l(t.userInfo.teaching,(function(s,a){return e("li",{key:s.time,staticStyle:{}},[t._v(" "+t._s(a+1)+". "+t._s(s.description)+" ")])})),0)]),e("a-row",[e("a-col",{attrs:{span:12}},[t._v("Degtees: "+t._s(t.userInfo.degtees))])],1)],1),e("a-col",{staticStyle:{"background-color":"white",padding:"20px"},attrs:{span:8}},[e("div",{staticClass:"list"},[e("h2",[t._v("Degrees")]),t._l(t.userInfo.degrees,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),t._v(" "+t._s(s.description)+" "+t._s(s.time)+" ")])],1)})),e("h2",{staticStyle:{"margin-top":"100px"}},[t._v("Academic Position")]),t._l(t.userInfo.aacdimicPosition,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),t._v(" "+t._s(s.description)+" "+t._s(s.time)+" ")])],1)})),e("h2",{staticStyle:{"margin-top":"100px"}},[t._v("Publications")]),t._l(t.userInfo.publications,(function(s,a){return e("a-row",{key:s.time},[e("b",[t._v(t._s(a+1))]),e("img",{attrs:{src:s.img,alt:"",width:"100px"}}),t._v(" "+t._s(s.time)+" "+t._s(s.description)+" "),e("a",{attrs:{href:s.pdf,download:s.pdf}},[t._v("pdf")]),t._v(" "+t._s(s.description)+" ")])}))],2)]),e("a-col",{staticStyle:{padding:"0 20px"},attrs:{span:8}},[e("h2",[t._v("Recent Highlights")]),e("div",{staticClass:"list"},t._l(t.userInfo.highlights,(function(s){return e("div",{key:s.time,staticClass:"item",staticStyle:{"margin-bottom":"30px"}},[e("h2",[t._v(t._s(s.time))]),e("b",[t._v(t._s(s.description))])])})),0),e("h2",[t._v("Fields of research")]),e("div",[t._v(t._s(t.userInfo.researchAreas))]),e("h2",[t._v("Availability")]),e("div",[t._v(t._s(t.userInfo.avibilitiy))])])],1)],1)},g=[],y={props:{userInfo:{type:Object,default:function(){return{}}},userList:{type:Array,default:function(){return[]}}}},w=y,k=(0,l.Z)(w,I,g,!1,null,"043ff01e",null),S=k.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"template"},[e("a-row",{attrs:{gutter:2}},[e("a-col",{attrs:{span:12}},[e("h1",[e("b",{staticStyle:{"font-size":"30px"}},[t._v(t._s(t.userInfo.firstName)+" "+t._s(t.userInfo.lastName))])]),e("a-row",[e("a-col",{attrs:{span:12}},[e("img",{attrs:{width:200,src:t.userInfo.avatar}}),e("a-row",[e("div",{staticClass:"date"},[t._v(t._s(t.userInfo.date))])])],1),e("a-col",{attrs:{span:12}},[e("a-row",[e("a-col",{attrs:{span:12}},[t._v("Phone: "+t._s(t.userInfo.phone))]),e("a-col",{attrs:{span:12}},[t._v("Email: "+t._s(t.userInfo.email))])],1),e("br"),e("a-row",[e("p",[t._v("Availability:"+t._s(t.userInfo.avibilitiy))])]),e("a-row",[e("p",[t._v("Office:"+t._s(t.userInfo.office))])])],1)],1),e("a-row",[e("h2",[t._v("Recent Highlights")]),e("div",{staticClass:"list"},t._l(t.userInfo.highlights,(function(s){return e("div",{key:s.time,staticClass:"item"},[e("div",{staticStyle:{"margin-bottom":"10px"}},[e("h3",[t._v(t._s(s.time))]),e("b",[t._v(t._s(s.description))])])])})),0)]),e("a-row",[e("a-col",{attrs:{span:12}},[t._v("Degtees: "+t._s(t.userInfo.degtees))]),e("a-col",{attrs:{span:12}},[t._v("Bio: "+t._s(t.userInfo.bio))])],1),e("br"),e("a-row",[e("h2",[t._v("Fields of research")]),e("div",[t._v(t._s(t.userInfo.researchAreas))])]),e("br"),e("a-row",[e("h2",[t._v("Teaching")]),e("ul",t._l(t.userInfo.teaching,(function(s,a){return e("li",{key:s.time,staticStyle:{}},[t._v(" "+t._s(a+1)+". "+t._s(s.description)+" ")])})),0)])],1),e("a-col",{attrs:{span:11,offset:1}},[e("h2",[t._v("Publication")]),t._l(t.userInfo.publications,(function(s,a){return e("a-row",{key:s.time},[e("a-row",[e("b",[t._v(t._s(a+1))]),e("img",{attrs:{src:s.img,alt:"",width:"100px"}}),t._v(" "+t._s(s.time)+" "+t._s(s.description)+" "),e("a",{attrs:{href:s.pdf,download:s.pdf}},[t._v("pdf")]),t._v(" "+t._s(s.description)+" ")])],1)}))],2)],1)],1)},C=[],A={props:{userInfo:{type:Object,default:function(){return{}}},userList:{type:Array,default:function(){return[]}}},methods:{toDetail:function(t){this.$router.push({path:"/profile/basic",query:{id:t}}),setTimeout((function(){location.reload()}),20)}}},L=A,E=(0,l.Z)(L,x,C,!1,null,"094acb4d",null),D=E.exports,O=s(77681),P=(s(58971),s(24145),{components:{STable:i.m7,template1:f,template2:b,template3:S,template4:D},data:function(){return{template:"1",userInfo:{title:"title"},userList:[],loadScheduleData:function(){return new Promise((function(t){t({data:[{key:"1",time:"2017-10-01 14:10",rate:"联系客户",status:"processing",operator:"取货员 ID1234",cost:"5mins"},{key:"2",time:"2017-10-01 14:05",rate:"取货员出发",status:"success",operator:"取货员 ID1234",cost:"1h"},{key:"3",time:"2017-10-01 13:05",rate:"取货员接单",status:"success",operator:"取货员 ID1234",cost:"5mins"},{key:"4",time:"2017-10-01 13:00",rate:"申请审批通过",status:"success",operator:"系统",cost:"1h"},{key:"5",time:"2017-10-01 12:00",rate:"发起退货申请",status:"success",operator:"用户",cost:"5mins"}],pageSize:10,pageNo:1,totalPage:1,totalCount:10})})).then((function(t){return t}))}}},filters:{statusFilter:function(t){var e={processing:"进行中",success:"完成",failed:"失败"};return e[t]}},computed:{title:function(){return"首页"}},mounted:function(){var t=this,e=this.$route.query;(0,O.C5)(e.id).then((function(e){t.userInfo=e.userInfo,t.template=e.userInfo.template})),this.getUserList()},methods:{getUserList:function(){var t=this;this.$http.get("/api/users/list",{}).then((function(e){t.userList=e.list||[]}))}}}),T=P,R=(0,l.Z)(T,a,r,!1,null,"1da72466",null),N=R.exports}}]);