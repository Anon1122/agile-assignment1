"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[98],{2098:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(885),r=n(2791),s=n(7689),a=n(4436),c=n(3542),o=n(8928),l=n(5194),d=n(199),u=n(6398),x=n(4565),h=n(340),m=n(5953),p=n(993),f=n(6084),Z=n(1249),j=n(184);function v(e){var t=e.credit;return(0,j.jsxs)(o.Z,{sx:{maxWidth:345,backgroundImage:"url('https://wallpaperboat.com/wp-content/uploads/2019/10/high-resolution-black-background-06.jpg')"},children:[(0,j.jsx)(u.Z,{title:(0,j.jsxs)(x.Z,{sx:{color:"white"},variant:"h6",component:"p",children:[t.name," "]})}),(0,j.jsx)(d.Z,{sx:{height:500},image:t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):p}),(0,j.jsx)(l.Z,{sx:{color:"white"},children:(0,j.jsxs)(m.ZP,{container:!0,children:[(0,j.jsx)(m.ZP,{item:!0,xs:7,children:(0,j.jsxs)(x.Z,{variant:"h6",component:"p",children:[(0,j.jsx)(Z.Z,{fontSize:"small"})," ",t.known_for_department]})}),(0,j.jsx)(m.ZP,{item:!0,xs:6,children:(0,j.jsxs)(x.Z,{variant:"h6",component:"p",children:[(0,j.jsx)(f.Z,{fontSize:"small"}),"  "," ",t.character," "]})}),(0,j.jsx)(m.ZP,{item:!0,xs:6,children:(0,j.jsxs)(x.Z,{variant:"h6",component:"p",children:[(0,j.jsx)(h.Z,{fontSize:"small"}),"  "," ",t.popularity," "]})})]})})]})}var g=function(e){return e.credits.map((function(e){return(0,j.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:(0,j.jsx)(v,{credit:e},e.id)},e.id)}))};var w=function(e){var t=e.title,n=e.creditsCrew,s=e.creditsCast,o=(0,r.useState)(0),l=(0,i.Z)(o,2),d=l[0],u=l[1],x=(0,r.useState)(""),h=(0,i.Z)(x,2),p=h[0],f=h[1],Z=(0,r.useState)("0"),v=(0,i.Z)(Z,2),w=v[0],P=v[1],b=[n,s][d].filter((function(e,t,n){return n.findIndex((function(t){return t.name===e.name}))===t})).sort((function(e,t){return(null===e.profile_path)-(null===t.profile_path)||+(e>t)||-(e<t)})).filter((function(e){return-1!==e.name.toLowerCase().search(p.toLowerCase())}));return(0,j.jsxs)(m.ZP,{container:!0,sx:{padding:"20px",backgroundColor:"rgba(0,0,0,0.1)"},children:[(0,j.jsx)(m.ZP,{item:!0,xs:12,children:(0,j.jsx)(a.Z,{title:t})}),(0,j.jsxs)(m.ZP,{item:!0,container:!0,spacing:5,children:[(0,j.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:(0,j.jsx)(c.Z,{onUserInput:function(e,t){"involved"===e&&u(0===t?0:1),"name"===e?f(t):P(t)},nameFilter:p,involvedPeopleFilter:w,credits:n})},"find"),(0,j.jsx)(g,{credits:b})]})]})},P=n(3030),b=function(e){var t=(0,s.TH)().state.movie,n=(0,r.useState)([]),a=(0,i.Z)(n,2),c=a[0],o=a[1],l=(0,r.useState)([]),d=(0,i.Z)(l,2),u=d[0],x=d[1];return(0,r.useEffect)((function(){(0,P.zv)(t.id).then((function(e){o(e.crew),x(e.cast)}))}),[]),(0,j.jsx)(w,{movieId:t.id,title:t.title,creditsCrew:c,creditsCast:u})}}}]);
//# sourceMappingURL=98.d42e9297.chunk.js.map