(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var c=s(7),n=s.n(c),a=s(2),i=s(1),l=(s(13),s(14),s(15),s(3)),o=s.n(l),r=s(8),d="https://mate.academy/students-api";function j(e){return new Promise((function(t){setTimeout(t,e)}))}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),j(300).then((function(){return fetch(d+e,c)})).then((function(e){return e.json()}))}var b=function(e){return m(e)},u=function(e,t){return m(e,"POST",t)},h=function(e){return m(e,"DELETE")},O=s(0),x=function(e){var t=e.selectedPost,s=e.setPostComments,c=e.postComments,n=Object(i.useState)(""),l=Object(a.a)(n,2),d=l[0],j=l[1],m=Object(i.useState)(""),b=Object(a.a)(m,2),h=b[0],x=b[1],f=Object(i.useState)(""),p=Object(a.a)(f,2),N=p[0],v=p[1],y=Object(i.useState)(!1),g=Object(a.a)(y,2),S=g[0],w=g[1],C=Object(i.useState)(!1),P=Object(a.a)(C,2),k=P[0],E=P[1],I=Object(i.useState)(!1),F=Object(a.a)(I,2),B=F[0],T=F[1],D=Object(i.useState)(!1),L=Object(a.a)(D,2),A=L[0],M=L[1];return Object(O.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault();var n,a=!1,i={postId:t.id,name:d,email:h,body:N};d.trim().length||(w(!0),a=!0),h.trim().length||(E(!0),a=!0),N.trim().length||(T(!0),a=!0),a||(M(!0),(n=i,u("/comments",n)).then((function(e){s([].concat(Object(r.a)(c),[e])),M(!1)}))),v("")},children:[Object(O.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(O.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(O.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(O.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:o()("input",{"is-danger":S}),value:d,onChange:function(e){j(e.target.value),w(!1)}}),Object(O.jsx)("span",{className:"icon is-small is-left",children:Object(O.jsx)("i",{className:"fas fa-user"})}),S&&Object(O.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(O.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(O.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(O.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(O.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(O.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(O.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:o()("input",{"is-danger":k}),value:h,onChange:function(e){x(e.target.value),E(!1)}}),Object(O.jsx)("span",{className:"icon is-small is-left",children:Object(O.jsx)("i",{className:"fas fa-envelope"})}),k&&Object(O.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(O.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),k&&Object(O.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(O.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(O.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(O.jsx)("div",{className:"control",children:Object(O.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:o()("textarea",{"is-danger":B}),value:N,onChange:function(e){v(e.target.value),T(!1)}})}),B&&Object(O.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(O.jsxs)("div",{className:"field is-grouped",children:[Object(O.jsx)("div",{className:"control",children:Object(O.jsx)("button",{type:"submit",className:o()("button is-link",{"is-loading":A}),children:"Add"})}),Object(O.jsx)("div",{className:"control",children:Object(O.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){T(!1),w(!1),E(!1),j(""),x(""),v("")},children:"Clear"})})]})]})},f=(s(17),function(){return Object(O.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(O.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.postComments,s=e.deleteComment;return Object(O.jsx)(O.Fragment,{children:0===(null===t||void 0===t?void 0:t.length)?Object(O.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"title is-4",children:"Comments:"}),null===t||void 0===t?void 0:t.map((function(e){return Object(O.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(O.jsxs)("div",{className:"message-header",children:[Object(O.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(O.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){s(e)},children:"delete button"})]}),Object(O.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]})})},N=function(e){var t=e.postSelectedId,s=e.selectedPost,c=e.isShowForm,n=e.setIsShowForm,l=e.showSideBar,o=Object(i.useState)([]),r=Object(a.a)(o,2),d=r[0],j=r[1],m=Object(i.useState)(!1),u=Object(a.a)(m,2),N=u[0],v=u[1],y=s.id,g=s.title,S=s.body;Object(i.useEffect)((function(){var e;v(!0),(e=t,b("/comments?postId=".concat(e))).then((function(e){j(e),v(!1)}))}),[t]);return Object(O.jsx)(O.Fragment,{children:l&&s&&Object(O.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(O.jsxs)("div",{className:"block",children:[Object(O.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(y,": ").concat(g)}),Object(O.jsx)("p",{"data-cy":"PostBody",children:S})]}),Object(O.jsxs)("div",{className:"block",children:[N?Object(O.jsx)(f,{}):Object(O.jsx)(p,{postComments:d,deleteComment:function(e){var t;e.id&&(t=e.id,h("/comments/".concat(t)),j((function(t){return t.filter((function(t){return t.id!==e.id}))})))}}),!c&&!N&&Object(O.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){n(!0)},children:"Write a comment"})]}),c&&Object(O.jsx)(x,{selectedPost:s,setPostComments:j,postComments:d})]})})},v=function(e){var t=e.users,s=e.setDropDownOpen,c=e.dropDownOpen,n=e.setUserSelectedId,l=e.userSelectedId,r=e.setPostSelectedId,d=Object(i.useState)(),j=Object(a.a)(d,2),m=j[0],b=j[1],u=Object(i.useRef)(null),h=Object(i.useCallback)((function(e){u.current&&!u.current.contains(e.target)&&s(!1)}),[]);Object(i.useEffect)((function(){return window.addEventListener("click",h),function(){window.removeEventListener("click",h)}}),[h]);return Object(O.jsxs)("div",{ref:u,"data-cy":"UserSelector",id:"dropdown-menu",className:o()("dropdown",{"is-active":c}),children:[Object(O.jsx)("div",{className:"dropdown-trigger",children:Object(O.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){s((function(e){return!e}))},children:[m?Object(O.jsx)("span",{children:m.name}):Object(O.jsx)("span",{children:"Choose a user"}),Object(O.jsx)("span",{className:"icon is-small",children:Object(O.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(O.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(O.jsx)("div",{className:"dropdown-content",children:t&&t.map((function(e){return Object(O.jsx)("a",{href:"#user-".concat(e.id),className:o()("dropdown-item",{"is-active":l===e.id}),onClick:function(){!function(e){b(e),n(e.id),r(0),s(!1)}(e)},children:e.name},e.id)}))})})]})},y=function(e){var t=e.userSelectedId,s=e.setShowSideBar,c=e.postSelectedId,n=e.setPostSelectedId,l=e.setSelectedPost,o=Object(i.useState)(null),r=Object(a.a)(o,2),d=r[0],j=r[1],m=Object(i.useState)(!1),u=Object(a.a)(m,2),h=u[0],x=u[1],p=Object(i.useState)(!1),N=Object(a.a)(p,2),v=N[0],y=N[1];Object(i.useEffect)((function(){var e;x(!0),(e=t,b("/posts?userId=".concat(e))).then((function(e){if(!Array.isArray(e))throw new Error("load error");x(!1),j(e),y(!1)})).catch((function(){j([]),y(!0),x(!1)})),s(!1),y(!1),l(void 0)}),[t]);var g=function(){s(!1),n(0)};return Object(O.jsxs)(O.Fragment,{children:[v&&Object(O.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),h?Object(O.jsx)(f,{}):Object(O.jsxs)("div",{"data-cy":"PostsList",children:[!v&&Object(O.jsx)(O.Fragment,{children:0===(null===d||void 0===d?void 0:d.length)&&Object(O.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"})}),0!==(null===d||void 0===d?void 0:d.length)&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"title",children:"Posts:"}),Object(O.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{className:"has-background-link-light",children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:"\xa0"})]})}),Object(O.jsx)("tbody",{children:null===d||void 0===d?void 0:d.map((function(e){return Object(O.jsxs)("tr",{"data-cy":"Post",children:[Object(O.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(O.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(O.jsx)("td",{className:"has-text-right is-vcentered",children:c===e.id?Object(O.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:g,children:"Close"}):Object(O.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){return function(e){s(!0),n(e.id),l(e)}(e)},children:"Open"})})]},e.id)}))})]})]})]})]})},g=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)(null),l=Object(a.a)(n,2),r=l[0],d=l[1],j=Object(i.useState)(!1),m=Object(a.a)(j,2),u=m[0],h=m[1],x=Object(i.useState)(0),f=Object(a.a)(x,2),p=f[0],g=f[1],S=Object(i.useState)(0),w=Object(a.a)(S,2),C=w[0],P=w[1],k=Object(i.useState)(),E=Object(a.a)(k,2),I=E[0],F=E[1],B=Object(i.useState)(!1),T=Object(a.a)(B,2),D=T[0],L=T[1];return Object(i.useEffect)((function(){b("/users").then((function(e){d(e)}))}),[]),Object(i.useEffect)((function(){L(!1)}),[C,p]),Object(O.jsx)("main",{className:"section",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"tile is-ancestor",children:[Object(O.jsx)("div",{className:"tile is-parent",children:Object(O.jsxs)("div",{className:"tile is-child box is-success",children:[Object(O.jsx)("div",{className:"block",children:Object(O.jsx)(v,{users:r,setDropDownOpen:h,dropDownOpen:u,setUserSelectedId:g,userSelectedId:p,setPostSelectedId:P})}),Object(O.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!p&&Object(O.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),0!==p&&Object(O.jsx)(y,{userSelectedId:p,setShowSideBar:c,postSelectedId:C,setPostSelectedId:P,setSelectedPost:F})]})]})}),Object(O.jsx)("div",{"data-cy":"Sidebar",className:o()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":s}),children:Object(O.jsx)("div",{className:"tile is-child box is-success ",children:I&&Object(O.jsx)(N,{showSideBar:s,isShowForm:D,postSelectedId:C,selectedPost:I,setIsShowForm:L})})})]})})})};n.a.render(Object(O.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.881b8189.chunk.js.map