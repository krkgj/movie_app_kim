(this.webpackJsonpmovie_app_kim=this.webpackJsonpmovie_app_kim||[]).push([[0],{43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(2),a=s.n(i),o=s(13),c=s.n(o),r=s(4),l=s.n(r),m=s(14),d=s(15),u=s(16),j=s(19),v=s(18),p=s(17),g=s.n(p);s(43);var h=function(e){e.id;var t=e.year,s=e.title,i=e.summary,a=e.poster,o=e.genres;return Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:a,alt:s,title:s}),Object(n.jsxs)("div",{className:"movie_data",children:[Object(n.jsx)("h3",{className:"movie_title",children:s}),Object(n.jsx)("h5",{className:"movie_year",children:t}),Object(n.jsx)("ul",{className:"movie_genres",children:o.map((function(e,t){return Object(n.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(n.jsxs)("p",{className:"movie_summary",children:[i.slice(0,140),"..."]})]})]})},b=(s(44),function(e){Object(j.a)(s,e);var t=Object(v.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).state={isLoading:!0,movies:[]},n.getMovies=Object(m.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getMovies"),e.next=3,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 3:t=e.sent,s=t.data.data.movies,n.setState({movies:s,isLoading:!1}),console.log("done-getMovies");case 7:case"end":return e.stop()}}),e)}))),n}return Object(u.a)(s,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.getMovies(),console.log("done-componentDidMount")}},{key:"render",value:function(){console.log("im render");var e=this.state,t=e.isLoading,s=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:s.map((function(e){return Object(n.jsx)(h,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));c.a.render(Object(n.jsx)(b,{}),document.getElementById("potato"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e66eecaa.chunk.js.map