(this["webpackJsonpreact-is-fun"]=this["webpackJsonpreact-is-fun"]||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a(4),i=a(5),s=a(7),u=a(6),c=a(8),h=a(1),p=a.n(h),m=function(e){var t=e.title,a=void 0===t?"No title provided":t,n=e.author,o=void 0===n?"No author":n,l=e.pages,i=void 0===l?0:l,s=e.freeBookmark;return r.a.createElement("section",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,"by: ",o),r.a.createElement("p",null,"pages: ",i),r.a.createElement("p",null,"Free Bookmark Today: ",s?"yes":"no "))},d=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"The library is hiring. Go to www.library.com/jobs for more."))},g=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"The library is not hiring. Check back later for more info."))},f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,freeBookmark:!0,hiring:!0,data:[],loading:!1},a.toggleOpenClosed=function(){a.setState((function(e){return{open:!e.open}}))},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://hplussport.com/api/products/price/sort/asc/qty/1").then((function(e){return e.json()})).then((function(t){return e.setState({data:t.slice(4,5),loading:!1})}))}},{key:"componentDidUpdate",value:function(){console.log("The component just updated")}},{key:"render",value:function(){var e=this,t=this.props.books;return r.a.createElement("div",null,this.state.hiring?r.a.createElement(d,null):r.a.createElement(g,null),this.state.loading?"Loading...":r.a.createElement("div",null,this.state.data.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h3",null,"Library Product of the Week"),r.a.createElement("h4",null,e.name),r.a.createElement("img",{alt:e.name,src:e.image}))}))),r.a.createElement("h1",null,"The library is ",this.state.open?"open":"closed"," "),r.a.createElement("button",{onClick:this.toggleOpenClosed},"Change"),t.map((function(t,a){return r.a.createElement(m,{key:a,title:t.title,author:t.author,pages:t.pages,freeBookmark:e.state.freeBookmark})})))}}]),t}(n.Component);f.defaultProps={books:[{title:"Tahoe Tales",author:"Chet Whitley",pages:1e3}]},m.propTypes={title:p.a.string,author:p.a.string,pages:p.a.number,freeBookmark:p.a.bool};var k=f;Object(o.render)(r.a.createElement(k,{books:[{title:"The Sun Also Rises",author:"Ernest Hemingway",pages:260},{title:"White Teeth",author:"Zadie Smith",pages:480},{title:"Cat's Cradle",author:"Kurt Vonnegut",pages:304},{title:"Harry Potter and the Half-Blood Prince",author:"J.K. Rowling",pages:607}]}),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.1c572fec.chunk.js.map