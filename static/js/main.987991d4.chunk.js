(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(4),i=s.n(n),c=s(3),o=s(5),r=s(6),a=s(8),l=s(7),u=s(1),h=s.n(u),d=(s(13),s(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=[1,2,3,4,5,6,7,8,9,10],j=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={goods:[].concat(b),isStarted:!1,isReversed:!1,sortBy:"none",selection:1},t.start=function(){t.setState({isStarted:!0})},t.hide=function(){return t.setState((function(t){return{isStarted:!t.isStarted,isReversed:!1,sortBy:"none",selection:1}}))},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlpha=function(){t.setState({sortBy:"name"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.reset=function(){t.setState({isReversed:!1,sortBy:"none",selection:1})},t}return Object(r.a)(s,[{key:"render",value:function(){var t=this,e=this.state,s=e.goods,n=e.isStarted,i=e.isReversed,o=e.sortBy,r=e.selection,a=Object(c.a)(s);switch(o){case"name":a.sort((function(t,e){return t.localeCompare(e)}));break;case"length":a.sort((function(t,e){return t.length-e.length}));break;default:a=Object(c.a)(s)}return i&&a.reverse(),Object(d.jsx)("div",{className:"App columns",children:Object(d.jsxs)("div",{className:" column is-half is-offset-one-quarter",children:[Object(d.jsx)("h1",{className:"title is-1",children:"Goods"}),Object(d.jsx)("div",{className:"App__start",children:!n&&Object(d.jsx)("button",{type:"button",className:"button is-success column is-offset-one-fifth is-one-fifth",onClick:this.start,children:"Start"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"select-field",children:"Select minimum length: "}),Object(d.jsx)("select",{name:"select-field",value:r,onChange:function(e){t.setState({selection:Number(e.currentTarget.value)})},children:f.map((function(t){return Object(d.jsx)("option",{value:t,children:t},t)}))})]}),Object(d.jsx)("button",{type:"button",className:"button is-info",onClick:this.reverse,children:"Reverse"}),Object(d.jsx)("button",{type:"button",className:"button is-info",onClick:this.sortByAlpha,children:"Sort Alphabetically"}),Object(d.jsx)("button",{type:"button",className:"button is-info",onClick:this.reset,children:"Reset"}),Object(d.jsx)("button",{type:"button",className:"button is-info",onClick:this.sortByLength,children:"Sort by Length"}),n&&Object(d.jsxs)("ul",{className:" App__list column is-offset-one-fifth is-one-fifth",children:[Object(d.jsx)("h2",{className:"title is-3",children:"Goods List:"}),a.filter((function(t){return t.length>=r})).map((function(t){return Object(d.jsx)("li",{children:t},t)}))]}),Object(d.jsx)("div",{className:"App__start",children:n&&Object(d.jsx)("button",{type:"button",className:"button is-danger column is-offset-one-fifth is-one-fifth",onClick:this.hide,children:"Hide"})})]})})}}]),s}(h.a.Component),m=j;i.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.987991d4.chunk.js.map