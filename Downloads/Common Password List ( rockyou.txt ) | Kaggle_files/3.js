(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1568:function(e,t){},1823:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(1),l=n.n(a),r=n(0),i=n(1767);const o=l.a.div`
  position: relative;
`,c=l.a.div`
  position: absolute;
  bottom: 100px;
  width: 1px;
  height: 1px;
`;class s extends r.Component{constructor(){super(...arguments),this.ref=r.createRef(),this.observer=Object(i.a)(([e])=>{window.clearInterval(this.intervalId),e.intersectionRatio&&(this.intervalId=window.setInterval(()=>{this.props.isDisabled||this.props.onVisible()},200))})}componentDidMount(){this.ref.current&&this.observer.observe(this.ref.current)}componentWillUnmount(){window.clearInterval(this.intervalId),this.observer.disconnect()}render(){return r.createElement(o,null,this.props.children,r.createElement(c,{ref:this.ref}))}}},1829:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(1);const l=n.n(a).a.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: ${e=>e.bold?500:400};
  color: ${e=>"black"===e.color?e.theme.material.color.text[70]:"grey"===e.color?e.theme.material.color.text[40]:"#008abc"};

  &:hover {
    color: ${e=>"black"===e.color?e.theme.material.color.text[40]:"grey"===e.color?e.theme.material.color.text[40]:"#20beff"};
  }
`},1863:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),l=n.n(a),r=n(0);const i=l.a.a`
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  cursor: pointer;
  display: inline-block;
  outline: none;
  text-decoration: none;
  transition: background 170ms linear;

  &:hover,
  &:focus {
    background: ${e=>e.theme.material.color.brand.grey[50]};
  }

  &:active {
    background: ${e=>e.theme.material.color.brand.grey[100]};
  }
`,o=({onClick:e,href:t,children:n,title:a,className:l})=>r.createElement(i,{onClick:e,title:a,className:l,href:t},n)},1873:function(e,t,n){"use strict";var a=n(3),l=n(1752),r=n(9),i=n(1),o=n.n(i),c=n(0),s=n(1964),m=n(546),d=n(1829),u=n(2006),p=n(2023);const h=o.a.div`
  display: flex;
  flex-grow: 1;
`,g=o.a.div`
  background: ${e=>e.theme.material.color.white};
  border: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,f=o.a.div`
  background: ${e=>e.theme.material.color.white};
  border-right: 0;
  border-top: 0;
  border-left: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  border-bottom: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  height: ${e=>e.theme.material.spacing(2)};
  left: -6px;
  position: absolute;
  top: ${e=>e.theme.material.spacing(3)};
  transform: rotate(45deg);
  width: ${e=>e.theme.material.spacing(2)};
`,v=o.a.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: ${e=>e.theme.material.spacing(4)};
`,b=o.a.div`
  margin-top: ${e=>e.theme.material.spacing(3)};
`,E=({avatarModel:e,medal:t,children:n,useDefaultAvatar:a})=>c.createElement(h,null,e&&c.createElement(v,null,c.createElement(u.a,{model:e,useDefaultAvatar:a}),c.createElement(b,null,c.createElement(p.a,{medal:t||null}))),c.createElement(g,null,c.createElement(f,null),n));var x=n(2010),y=n(1895),$=n(2094),w=n(2098),k=n(2095),C=n(2097),I=n(2096),S=n(2099),_=n(2024);const O=o.a.div`
  display: flex;
`,j=o.a.div`
  padding: ${e=>{const t=e.theme.material.spacing;return`${t(3)} ${t(6)} ${t(3)}`}};
`,z=o.a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${e=>e.theme.material.spacing(4)};
`,T=o.a.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-right: ${e=>e.theme.material.spacing(2)};
`,U=o()(l.c)`
  && {
    color: ${e=>e.theme.material.color.text[50]};
  }
`,F=o.a.div`
  margin-top: ${e=>e.theme.material.spacing(7)};
`,D=o.a.div`
  margin: ${e=>e.theme.material.spacing(3)} 0;
  position: relative;
`,N=o.a.div`
  border: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  bottom: -${e=>e.theme.material.spacing(3)};
  box-sizing: border-box;
  height: ${e=>e.theme.material.spacing(3)};
  left: ${e=>e.theme.material.spacing(20)};
  position: absolute;
  width: 1px;
`,M=o()(N)`
  top: -${e=>e.theme.material.spacing(2)};
  bottom: auto;
`,A=o.a.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${e=>e.theme.material.spacing(4)};
`,R=o.a.div`
  margin-top: ${e=>e.theme.material.spacing(3)};
`,L=o()(l.b)`
  color: ${e=>e.theme.material.color.text[40]};
  font-style: italic;
`,V=c.memo(({user:e,initialModel:t,isReadOnly:n,isNestedComment:a,onReplyClick:l,onReplyAdded:i,allowAttachments:o})=>{var u,p,h,g,f,v,b,B,W,P,H,q;const[Q,J]=c.useState(t),[K,Y]=c.useState(!1),[X,G]=c.useState(!1),[Z,ee]=c.useState(!1),[te,ne]=c.useState(""),[ae,le]=c.useState(!1),re=e&&e.isAdmin;return c.useEffect(()=>{J(t)},[t]),c.createElement(O,null,c.createElement(E,{avatarModel:Q.author,useDefaultAvatar:Q.isDeleted,medal:Q.medal},c.createElement(j,null,c.createElement(z,null,c.createElement(T,null,c.createElement(U,null,(null===(u=Q.author)||void 0===u?void 0:u.displayName)&&c.createElement(c.Fragment,null,c.createElement(d.a,{color:"black",bold:!0,href:null!==(p=Q.author.userUrl)&&void 0!==p?p:""},Object(s.e)(null!==(h=Q.author.displayName)&&void 0!==h?h:"")),"  •  "),c.createElement(m.a,{time:Q.postDate}),!Q.isDeleted&&c.createElement(c.Fragment,null,"  •  ",c.createElement(d.a,{color:K?"blue":"grey",onClick:()=>Y(!K)},"Options")),Object(s.i)(e,null===(g=null==Q?void 0:Q.author)||void 0===g?void 0:g.id)&&c.createElement(c.Fragment,null,"  •  ",c.createElement(d.a,{color:ae?"blue":"grey",onClick:()=>{le(!0)}},"Edit")),!n&&!Q.isDeleted&&c.createElement(c.Fragment,null,"  •  ",c.createElement(d.a,{color:Z?"blue":"grey",onClick:()=>{a?l&&l():(ne(""),ee(!Z))}},"Reply")))),c.createElement("div",null,c.createElement(_.a,{canUpvote:null!==(v=null===(f=Q.votes)||void 0===f?void 0:f.canUpvote)&&void 0!==v&&v,canDownvote:null!==(B=null===(b=Q.votes)||void 0===b?void 0:b.canDownvote)&&void 0!==B&&B,messageId:Q.id,userVote:Object(s.f)(Q.votes),onVoteChange:(e,t)=>{J(Object.assign(Object.assign({},Q),{votes:Object(s.g)(Q.votes,t,e)}))},isCondensed:!0,numVotes:(null===(W=Q.votes)||void 0===W?void 0:W.totalVotes)||0}))),(()=>{var e,t;return Q.isDeleted?c.createElement(L,null,"This comment was deleted."):c.createElement(x.a,{allowAttachments:o,attachments:Q.attachments,markdown:null!==(e=Q.rawMarkdown)&&void 0!==e?e:"",html:null!==(t=Q.content)&&void 0!==t?t:"",isEditing:ae,confirmButtonText:"Update Comment",onSave:e=>{r.discussionsClient.discussionsService.updateMessage({messageId:Q.id,message:{markdown:e.markdown,html:e.html,blobFileTokens:Object(s.b)(e.attachments)}}).then(()=>{J(Object.assign(Object.assign({},Q),{content:e.html,rawMarkdown:e.markdown})),le(!1)})},onCancel:()=>{le(!1)}})})(),K&&c.createElement(A,null,!n&&c.createElement(y.a,{text:"Quote",onClick:()=>{ne(Object(s.a)(te,Q.rawMarkdown||"")),ee(!0)}}),c.createElement(y.a,{text:"Permalink",href:`/tc/${Q.id}`}),c.createElement(k.a,{isFlagged:Q.isFlagged,messageId:Q.id,onFlag:()=>{J(Object.assign(Object.assign({},Q),{isFlagged:!0}))}}),c.createElement(I.a,{numVotes:(null===(H=null===(P=Q.votes)||void 0===P?void 0:P.voters)||void 0===H?void 0:H.length)||0,onClick:()=>G(!X)}),Object(s.h)(e,null===(q=Q.author)||void 0===q?void 0:q.id)&&c.createElement($.a,{messageId:Q.id,onDelete:()=>{window.location.reload()}}),re&&c.createElement(C.a,{messageId:Q.id,isSpammed:Q.isSpammed,onToggle:e=>{J(Object.assign(Object.assign({},Q),{isSpammed:e}))}}),re&&c.createElement(w.a,{messageId:Q.id,initialModel:Q.feedbackTrackingData})),X&&c.createElement(R,null,c.createElement(S.a,{currentUser:e,currentUserVote:Object(s.f)(Q.votes),users:Q.votes&&Q.votes.voters||[]})),(Boolean(Q.replies.length)||Z)&&c.createElement(F,null,Boolean(Q.replies.length)&&c.createElement(c.Fragment,null,Q.replies.map((t,a)=>c.createElement(D,{key:t.id},c.createElement(V,{allowAttachments:o,user:e,isReadOnly:n,isNestedComment:!0,onReplyClick:()=>{ee(!0)},onReplyAdded:()=>{i()},initialModel:t}),a<Q.replies.length-1&&c.createElement(N,null)))),Z&&e&&c.createElement(D,null,Boolean(Q.replies.length)&&c.createElement(M,null),c.createElement(E,{avatarModel:e},c.createElement(j,null,c.createElement(x.a,{allowAttachments:o,attachments:[],markdown:te,html:"",isEditing:!0,confirmButtonText:"Post Comment",onSave:e=>{r.discussionsClient.discussionsService.createReply({messageId:Q.id,message:{markdown:e.markdown,html:e.html,blobFileTokens:Object(s.b)(e.attachments)}}).then(()=>{i(),ne(""),ee(!1)})},onCancel:()=>ee(!1)}))))))))});var B=n(2100);n.d(t,"a",(function(){return ee}));const W=["Hotness","Most Votes","Newest","Oldest","Chronological"],P={Hotness:"hot","Most Votes":"top",Newest:"new",Oldest:"old",Chronological:"chronological"},H=o.a.div``,q=o.a.div`
  display: flex;
  justify-content: space-between;
`,Q=o.a.div``,J=o.a.div`
  color: ${e=>e.theme.material.color.text[50]};
`,K=o.a.div`
  display: flex;
  align-items: center;
`,Y=o()(l.c)`
  margin-right: ${e=>e.theme.material.spacing(1)};
`,X=o.a.div`
  margin: ${e=>e.theme.material.spacing(4)} 0;
`,G=o.a.div`
  display: flex;
  margin-top: ${e=>e.theme.material.spacing(7)};
`,Z=o.a.div`
  padding: ${e=>{const t=e.theme.material.spacing;return`${t(3)} ${t(5)} ${t(4)}`}};
`;function ee({user:e,allowAttachments:t,isReadOnly:n,topicId:i,kernelId:o,topicFirstMessageId:m,initialModel:d,quotedComment:u,clearQuotedComment:p}){const[h,g]=c.useState(d),[f,v]=c.useState(W[0]),[b,y]=c.useState(""),[$,w]=c.useState(Math.random().toString());c.useEffect(()=>{g(d)},[d]),c.useEffect(()=>{u&&(y(Object(s.a)(b,u)),p&&p())},[u]);const k=()=>{const e=f;r.discussionsClient.getForumMessagesInTopic({topicId:i,newUserSort:P[f],page:null,pageSize:null,selection:null,filter:"all",includeFirstForumMessage:!1}).then(t=>{f===e&&g(t.items)})};return c.useEffect(()=>{k()},[f]),!h||n&&!h.length?null:c.createElement(H,null,c.createElement(q,null,c.createElement(Q,null,c.createElement(l.a,null,"Comments ",c.createElement(J,null,"(",Object(s.c)(h),")"))),c.createElement(K,null,c.createElement(Y,null,"Sort by "),c.createElement(B.a,{selectedOption:f,options:W,onChange:e=>v(e)}))),e&&!n&&c.createElement(G,null,c.createElement(E,{avatarModel:e},c.createElement(Z,null,c.createElement(x.a,{allowAttachments:t,key:$,markdown:b,html:"",isEditing:!0,confirmButtonText:"Post Comment",onSave:e=>Object(a.__awaiter)(this,void 0,void 0,(function*(){if(!m&&!o)throw new Error("DiscussionsCommentList must specify oneof: kernelId, topicFirstMessageId");const t={markdown:e.markdown,html:e.html,blobFileTokens:Object(s.b)(e.attachments)};o?yield r.discussionsClient.discussionsService.createKernelMessage({kernelId:o,message:t}):m&&(yield r.discussionsClient.discussionsService.createReply({messageId:m,message:t})),w(Math.random().toString()),y(""),k()})),attachments:[]})))),h.map(a=>c.createElement(X,{key:a.id},c.createElement(V,{allowAttachments:t,user:e,isReadOnly:n,initialModel:a,onReplyAdded:()=>k()}))))}},1895:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(1),l=n.n(a),r=n(0),i=n(1829);const o=l.a.div`
  align-items: center;
  border-right: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  display: inline-flex;
  margin: ${e=>{const t=e.theme.material.spacing;return`${t(1)} ${t(3)} ${t(1)} 0`}};
  padding-right: ${e=>e.theme.material.spacing(3)};

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: 0;
  }
`,c=l()(i.a)`
  && {
    font-size: ${e=>e.theme.material.typography.body3.fontSize};
  }
`;function s({text:e,color:t,onClick:n,href:a}){return r.createElement(o,null,r.createElement(c,{color:t,bold:!0,href:a,onClick:n},e))}},1964:function(e,t,n){"use strict";function a(e){return`/static/images/avatier/avatier-${e}@2x.png`}function l(e){return n=50,(t=e=e||"").length>n?t.slice(0,n-3)+"...":t;var t,n}function r(e){let t=0;for(const n of e)t++,t+=n.replies.length;return t}function i(e,t){for(e=e||"",t=t||"";e&&!e.endsWith("\n\n");)e+="\n";return e+function(e){return e?"> "+e.trim().replace(/(?:\r\n|\r|\n)/g,"\n> "):""}(t)+"\n\n"}function o(e){return e?e.hasAlreadyVotedDown?-1:e.hasAlreadyVotedUp?1:0:0}function c(e,t,n){var a,l,r,i;return{totalVotes:n,hasAlreadyVotedUp:1===t,hasAlreadyVotedDown:-1===t,canUpvote:null!==(a=null==e?void 0:e.canUpvote)&&void 0!==a&&a,canDownvote:null!==(l=null==e?void 0:e.canDownvote)&&void 0!==l&&l,voters:null!==(r=null==e?void 0:e.voters)&&void 0!==r?r:[],upvoters:null!==(i=null==e?void 0:e.upvoters)&&void 0!==i?i:[]}}function s(e){return e.map(e=>e.blobToken).filter(e=>Boolean(e))}function m(e,t){return!(!e||!t)&&(e.isAdmin||e.id===t)}function d(e,t){return!(!e||!t)&&e.id===t}n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return d}))},2006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(9),l=n(1),r=n.n(l),i=n(0),o=n(1964),c=n(1865),s=n(2088);const m=r.a.div`
  display: inline-flex;
  flex-direction: column;
`,d=r.a.img`
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  ${e=>{const t=e.theme.material.spacing(e.isLarge?19:10);return`\n      height: ${t};\n      width: ${t};\n    `}};
  margin-bottom: ${e=>e.theme.material.spacing(e.isLarge?2:1)};
`,u=r.a.img`
  width: ${e=>e.theme.material.spacing(e.isLarge?19:10)};
`;function p({model:e,className:t,useDefaultAvatar:n,isLarge:l=!1}){var r,p;if(n=n||!e,!e)return null;const h=i.createElement(m,{className:t},i.createElement(d,{isLarge:l,src:n?"/static/images/default-thumb.png":null!==(r=e.thumbnailUrl)&&void 0!==r?r:""}),i.createElement(u,{isLarge:l,src:null!==(p=Object(o.d)(e.tier))&&void 0!==p?p:""}));return a.featureFlags.avatarProfilePreview?i.createElement(s.a,{menu:i.createElement(c.a,{userId:e.id})},h):h}},2010:function(e,t,n){"use strict";var a=n(3),l=n(1752),r=n(1747),i=n(1685),o=n(9),c=n(1),s=n.n(c),m=n(0),d=n(1544);const u=new(n(1543).Converter)({disableForced4SpacesIndentedSublists:!0,emoji:!0,excludeTrailingPunctuationFromURLs:!0,ghCompatibleHeaderId:!0,ghMentions:!0,ghMentionsLink:"https://www.kaggle.com/{u}",openLinksInNewWindow:!0,prefixHeaderId:!0,parseImgDimensions:!0,simpleLineBreaks:!0,simplifiedAutoLink:!0,smartIndentationFix:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,tasklists:!0});function p(e){return e=e.replace(/&gt;/g,">").replace(/&lt;/g,"<"),d(u.makeHtml(e),{allowedTags:d.defaults.allowedTags.concat(["h1","h2","img"]),allowedAttributes:{a:["href","name","target"],div:["class"],img:["src","alt","width","height","style"]},transformTags:{a:(e,t)=>{if(t.href&&t.href.startsWith("emoji::")){const e=t.href.split("::");return{tagName:"span",attribs:{title:e[e.length-1]}}}if(t.href&&t.href.startsWith("user::")){const n=t.href.split("::"),a=n[n.length-1];return{tagName:e,attribs:Object.assign(Object.assign({},t),{href:a})}}return{tagName:e,attribs:t}}}})}var h=n(1727),g=n(1729),f=n(1730),v=n(101);const b=5e6;function E(e){return Object(a.__awaiter)(this,void 0,void 0,(function*(){const{blobCreationInfo:t}=yield o.discussionsClient.discussionsService.createAttachment({blobFileInfo:{name:e.name,contentType:e.type,contentLength:e.size,lastModifiedDate:{seconds:0,nanos:0}}}),{token:n,createUrl:a}=t,l=yield window.fetch(a,{method:"PUT",body:e});return{name:e.name,gcsInfo:yield l.json(),token:n}}))}function x(){return Object(a.__awaiter)(this,void 0,void 0,(function*(){return new Promise((e,t)=>{const n=document.createElement("input");n.type="file",n.style.display="none",n.addEventListener("change",a=>{Array.from(a.currentTarget.files||[]).some(e=>e.size>b)?t():e(),n.remove()}),document.body.appendChild(n),n.click()})}))}var y=n(1863);const $=["👍","👎","👊","✊","🤛","🤜","✋","🤝","🤘","💪","👌","👐","👇","👈","👉","☝️","🙏","🙌","✌️","🖖","👋","💯","✔️","❌","🎉","💥","🔥","✨","👀","🎶","☀️","💕","💔","❤️","🖤","💙","💚","💜","💛","😄","😃","😏","😧","😲","😊","😑","🤕","🤒","😨","😳","😦","☹️","😬","😁","😀","😍","😯","😂","😆","🤥","😷","🤓","😐","😮","😔","😣","😌","🙄","😴","😪","🙁","🙂","😈","😭","😛","😜","😎","😓","😅","🤔","😫","😤","😒","😩","😉","😟","😋","🤐","🤠","🐱","😿","😻","😹","😾","🙀","😸","😼","🙉","🙈","🙊"],w=16,k=160,C=s.a.div`
  display: inline-flex;
`,I=s.a.div`
  display: flex;
  overflow: hidden;
  width: ${k}px;
  margin: ${e=>e.theme.material.spacing(0,2)};
`,S=s.a.div`
  display: flex;
  flex-shrink: 0;
  will-change: transform;
  transition: transform 120ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${e=>`translateX(-${e.offset}px)`};
`,_=s.a.div`
  height: ${128}px;
  width: ${k}px;
  margin-right: ${w}px;
  flex-shrink: 0;

  & > span {
    cursor: pointer;
    font-size: 24px;
    height: ${32}px;
    width: ${32}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`,O=s()(y.a)`
  && {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
  }
`,j=s.a.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin-bottom: ${e=>e.theme.material.spacing(1)};
`,z=s.a.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  cursor: pointer;
  width: 24px;
  color: ${e=>e.theme.material.color.text[40]};
  font-size: 24px;

  ${e=>e.isSelected&&`color: ${e.theme.material.color.brand.blue[500]}`};
`,T=s.a.div`
  flex-direction: column;
  display: flex;
`;function U({onSelect:e}){const[t,n]=m.useState(0),a=Math.ceil($.length/20)-1;return m.createElement(C,null,m.createElement(O,{onClick:()=>{n(0===t?a:t-1)}},m.createElement(r.a,{color:c.defaultTheme.material.color.text[50],icon:"navigate_before"})),m.createElement(T,null,m.createElement(j,null,(()=>{const e=[];for(let l=0;l<=a;l++)e.push(m.createElement(z,{key:l,isSelected:t===l,onClick:()=>n(l)},"•"));return e})()),m.createElement(I,null,m.createElement(S,{offset:t*(w+k)},(()=>{let t=0;const n=[];for(;20*t<$.length;){const a=20*t,l=20*(t+1),r=$.slice(a,l);n.push(m.createElement(_,null,r.map(t=>m.createElement("span",{role:"button",onClick:()=>e(t)},t)))),t+=1}return n})()))),m.createElement(O,{onClick:()=>{n(t===a?0:t+1)}},m.createElement(r.a,{color:c.defaultTheme.material.color.text[50],icon:"navigate_next"})))}var F=n(83);const D=s.a.div`
  font-family: ${e=>e.theme.material.typography.body2.fontFamily};
  font-size: ${e=>e.theme.material.typography.body2.fontSize};
  line-height: 22px;
  color: ${e=>e.theme.material.color.text[70]};
  word-break: break-word;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  p,
  hr,
  pre,
  blockquote,
  img {
    margin: ${e=>e.theme.material.spacing(5)} 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${e=>e.theme.material.color.text[100]};
    font-weight: 500;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 16px;
  }

  h6 {
    font-size: 14px;
  }

  hr {
    border: 0;
    border-top: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  }

  strong,
  b {
    font-weight: 800;
  }

  i,
  cite,
  em,
  var,
  address,
  dfn {
    font-style: italic;
  }

  a {
    color: ${e=>e.theme.material.color.brand.blue[800]};
    text-decoration: none;

    &:hover {
      color: ${e=>e.theme.material.color.brand.blue[600]};
    }
  }

  img {
    max-width: 100%;
  }

  ol {
    list-style-type: decimal;
    padding-left: ${e=>e.theme.material.spacing(4)};
  }

  ul {
    list-style-type: disc;
    padding-left: ${e=>e.theme.material.spacing(4)};
  }

  ul ol,
  ol ol {
    margin: 0;
    list-style-type: lower-latin;
  }

  ol ul,
  ul ul {
    margin: 0;
    list-style-type: circle;
  }

  li {
    margin: ${e=>e.theme.material.spacing(2)} 0;
  }

  p {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  pre,
  code {
    font-family: ${e=>e.theme.material.typography.code.fontFamily};
  }

  code {
    padding: 0 ${e=>e.theme.material.spacing(1)};
  }

  blockquote,
  code,
  pre {
    overflow-x: auto;
    background: ${e=>e.theme.material.color.brand.grey[50]};
    border: 1px solid ${e=>e.theme.material.color.brand.grey[100]};
    border-radius: ${e=>e.theme.material.borderRadius.normal};
  }

  pre code {
    border: none;
  }

  blockquote,
  pre {
    padding: ${e=>e.theme.material.spacing(4)};
  }

  table {
    border: 1px solid ${e=>e.theme.material.color.brand.grey[100]};
    border-collapse: collapse;
    border-radius: ${e=>e.theme.material.borderRadius.normal};
    padding: 0;
    table-layout: fixed;
  }

  th,
  td {
    border: 1px solid ${e=>e.theme.material.color.brand.grey[100]};
    padding: ${e=>e.theme.material.spacing(2)};
  }

  th {
    background: ${e=>e.theme.material.color.brand.grey[50]};
  }

  td {
    background: ${e=>e.theme.material.color.white};
  }

  iframe {
    max-width: 100%;
  }
`;function N({html:e,markdown:t}){return e?Object(F.g)(m.createElement(D,null),e):t?Object(F.g)(m.createElement(D,null),p(t)):null}const M="Comment here. Be patient, be friendly, and focus on ideas. We're all here to learn and improve!",A=s.a.div``,R=s.a.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,L=s.a.div`
  display: flex;
  align-items: center;
`,V=s.a.div`
  display: flex;
  align-items: center;
  margin-right: ${e=>e.theme.material.spacing(1)};
`,B=s.a.div`
  align-items: center;
  border-right: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  display: flex;
  margin-bottom: ${e=>e.theme.material.spacing(2)};
  padding: ${e=>e.theme.material.spacing(1)};

  &:last-child {
    border: 0;
  }
`,W=s.a.textarea`
  ${e=>e.isHidden&&"display: none"};
  border: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  box-shadow: none;
  box-sizing: border-box;
  font-size: ${e=>e.theme.material.typography.body2.fontSize};
  font-weight: 400;
  ${e=>e.theme.font.main.family};
  line-height: ${e=>e.theme.material.typography.body2.lineHeight};
  outline: none;
  overflow: hidden;
  resize: none;
  padding: ${e=>e.theme.material.spacing(5)};
  width: 100%;
`,P=s()(r.a)`
  cursor: pointer;
  padding: ${e=>e.theme.material.spacing(1)};

  && {
    color: ${e=>e.theme.material.color.text[50]};
  }
`,H=s()(h.a)`
  && {
    background: ${e=>e.theme.material.color.white};
  }
`,q=s()(g.a)`
  && {
    width: ${e=>e.theme.material.spacing(50)};
  }
`,Q=s.a.div`
  padding: ${e=>e.theme.material.spacing(5)};
`;function J({value:e,onChange:t,onBlur:n,focusOnInitialRender:a,focusOnChange:l}){const[r,o]=m.useState(!1),[c,s]=m.useState(!1),[d,u]=m.useState(!1),[h]=m.useState([]),[b]=m.useState([]),[$,w]=m.useState(!1),[k,C]=m.useState(""),[{pushInputToUndoStack:I}]=m.useState({pushInputToUndoStack:Object(v.a)(500,e=>{for(h.push(e),h.length>100&&h.shift();b.length;)b.pop()})}),[S]=m.useState({previousValue:e}),_=m.useRef(document.createElement("textarea")),O=t=>{t.focus(),t.value="",t.value=e};m.useLayoutEffect(()=>{const t=_.current;l&&t&&document.activeElement!==t&&e!==S.previousValue&&O(t),S.previousValue=e},[e]),m.useLayoutEffect(()=>{const e=_.current;a&&e&&O(e)},[]);const j=()=>{const e=_.current;""===e.value&&(e.value=M),e.style.height="auto";const t=e.scrollHeight+2;e.style.height=t+"px",e.value===M&&(e.value="")},z=e=>{I(e),t(e)},T=(e,t)=>{const n=_.current,a=n.selectionStart,l=n.selectionEnd,r=n.value;n.value=[r.slice(0,a),e,r.slice(a,l),t,r.slice(l)].join(""),j(),n.focus(),n.setSelectionRange(a+e.length,l+e.length),z(n.value)};return m.useEffect(()=>{const e=_.current,t=()=>{z(e.value),j()};return e.addEventListener("input",t),window.addEventListener("resize",j),j(),()=>{e.removeEventListener("input",t),window.removeEventListener("resize",j)}},[e]),m.createElement(A,null,m.createElement(R,null,m.createElement(L,null,m.createElement(B,null,m.createElement(y.a,{title:"Undo"},m.createElement(P,{icon:"undo",onClick:()=>{const e=h.pop();void 0!==e&&(b.push(e),t(h[h.length-1]||""))}})),m.createElement(y.a,{title:"Redo"},m.createElement(P,{icon:"redo",onClick:()=>{const e=b.pop();void 0!==e&&(h.push(e),t(e))}}))),m.createElement(B,null,m.createElement(f.a,null,m.createElement(H,{dense:!0,anchorCorner:"bottomLeft",open:r,onClose:()=>o(!1),onSelect:e=>{const{index:t}=e.detail;T(Array(t+1).fill("#").join("")+" ","")}},m.createElement(g.a,null,"Heading 1"),m.createElement(g.a,null,"Heading 2"),m.createElement(g.a,null,"Heading 3"),m.createElement(g.a,null,"Heading 4"),m.createElement(g.a,null,"Heading 5"),m.createElement(g.a,null,"Heading 6")),m.createElement(y.a,{onClick:()=>o(!0),title:"Insert Heading"},m.createElement(P,{icon:"format_size"}))),m.createElement(y.a,{onClick:()=>T("**","**"),title:"Bold"},m.createElement(P,{icon:"format_bold"})),m.createElement(y.a,{onClick:()=>T("*","*"),title:"Italicize"},m.createElement(P,{icon:"format_italic"}))),m.createElement(B,null,m.createElement(y.a,{onClick:()=>T("[","](url)"),title:"Insert Link"},m.createElement(P,{icon:"insert_link"})),m.createElement(y.a,{onClick:()=>T("> ",""),title:"Insert Quote"},m.createElement(P,{icon:"format_quote"})),m.createElement(y.a,{onClick:()=>{-1===(()=>{const e=_.current;return e.value.slice(e.selectionStart,e.selectionEnd)})().indexOf("\n")?T("`","`"):T("```\n","\n```")},title:"Insert Code Block"},m.createElement(P,{icon:"code"}))),m.createElement(B,null,m.createElement(y.a,{onClick:()=>T("1. ",""),title:"Insert Numbered List"},m.createElement(P,{icon:"format_list_numbered"})),m.createElement(y.a,{onClick:()=>T("- ",""),title:"Insert Bulleted List"},m.createElement(P,{icon:"format_list_bulleted"}))),m.createElement(B,null,m.createElement(y.a,{onClick:()=>{T("| "," |  |\n| --- | --- |\n|  |  |\n")},title:"Insert Table"},m.createElement(P,{icon:"table_chart"})),m.createElement(f.a,null,m.createElement(H,{dense:!0,anchorCorner:"bottomLeft",open:c,onClose:()=>s(!1),onSelect:e=>{const{index:t}=e.detail;0===t?x().then(e=>{const t=e[0];t&&t.name.match(/.+\.(png|jpg|jpeg)$/)&&E(t).then(({gcsInfo:e})=>{T("![",`](${e.selfLink})`)})}):1===t&&T("![","](url to embed)")}},m.createElement(q,null,"Upload image from computer"),m.createElement(q,null,"Embed image from url")),m.createElement(y.a,{title:"Insert Image",onClick:()=>s(!0)},m.createElement(P,{icon:"insert_photo"}))),m.createElement(f.a,null,m.createElement(H,{open:d,onClose:()=>u(!1)},m.createElement(U,{onSelect:e=>T(e,"")})),m.createElement(y.a,{title:"Insert Emoticon",onClick:()=>u(!0)},m.createElement(P,{icon:"insert_emoticon"}))))),m.createElement(V,null,e&&m.createElement(i.a,{variant:"text",onClick:()=>{$?w(!1):(C(p(e)),w(!0))}},$?"Edit":"Preview"))),$&&m.createElement(Q,null,m.createElement(N,{html:k})),m.createElement(W,{isHidden:$,rows:1,placeholder:M,ref:_,onBlur:n,value:e}))}var K=n(1829);n.d(t,"a",(function(){return ce}));const Y="Your message must have at least 10 characters.",X=s.a.div``,G=s.a.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`,Z=s.a.div`
  display: flex;
`,ee=s.a.div`
  margin-right: ${e=>e.theme.material.spacing(1)};
`,te=s.a.div`
  margin-left: 20px;
`,ne=s()(l.b)`
  && {
    font-weight: 500;
  }
`,ae=s()(l.e)`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.material.spacing(1,0)};
`,le=s.a.div`
  margin-top: ${e=>e.theme.material.spacing(5)};
`,re=s.a.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: ${e=>e.theme.material.spacing(1)};
`,ie=s.a.div`
  display: flex;
  flex-direction: column;
  padding: ${e=>e.theme.material.spacing(2,2,4,2)};
`,oe=s()(l.r)`
  && {
    /* No official KM error color yet, using this temporarily */
    color: #e23e3e;
  }
`,ce=({markdown:e,html:t,isEditing:n,confirmButtonText:c,allowAttachments:s,onSave:d,onCancel:u,attachments:h})=>{const[g,f]=m.useState([]),[v,b]=m.useState(e),[y,$]=m.useState(h);if(m.useEffect(()=>{b(e)},[e]),m.useEffect(()=>{$(h)},[h]),!n)return m.createElement(X,null,m.createElement(N,{html:t}),m.createElement(le,null,h.map(e=>m.createElement(ae,{key:e.id},m.createElement(K.a,{color:"black",href:e.url||""},e.name)))));const w=({isSubmit:e})=>{v.length<10&&e?-1===g.indexOf(Y)&&f([...g,Y]):f([])};return m.createElement(X,null,Boolean(g.length)&&m.createElement(ie,null,g.map(e=>m.createElement(oe,{key:e},e))),m.createElement(J,{value:v,onChange:e=>b(e),onBlur:()=>{w({isSubmit:!1})}}),m.createElement(G,null,m.createElement(te,null,Boolean(y.length)&&m.createElement(m.Fragment,null,m.createElement(ne,null,"Attachments:"),y.map((e,t)=>m.createElement(ae,{key:e.id},e.name,m.createElement(re,null,m.createElement(r.a,{onClick:()=>{o.discussionsClient.discussionsService.deleteAttachment({attachmentId:e.id}),$(y.filter((e,n)=>n!==t))},icon:"remove_circle_outline",size:"xsmall"}))))),s&&m.createElement(l.e,null,m.createElement(K.a,{color:"grey",onClick:()=>Object(a.__awaiter)(void 0,void 0,void 0,(function*(){f(g.filter(e=>"Attachments must be under 5MB."!==e));let e=[];try{e=yield x()}catch(e){f([...g,"Attachments must be under 5MB."])}if(!e.length)return;const t=yield Promise.all(e.map(E));$((h||[]).concat(t.map(e=>({id:Number(e.gcsInfo.id),name:e.name,url:e.gcsInfo.mediaLink,blobToken:e.token,totalBytes:Number(e.gcsInfo.size)}))))}))},"Upload Attachment"))),m.createElement(Z,null,u&&m.createElement(ee,null,m.createElement(i.a,{variant:"text",onClick:()=>u()},"Cancel")),m.createElement(i.a,{onClick:()=>{w({isSubmit:!0}),g.length||d({html:p(v),markdown:v,attachments:y})}},c))))}},2023:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),l=n.n(a),r=n(0);const i=l.a.img`
  height: ${e=>e.theme.material.spacing(7)};
  width: ${e=>e.theme.material.spacing(7)};
`;function o({medal:e}){return e?r.createElement(i,{src:`/static/images/medals/discussion/${e}l@1x.png`}):null}},2024:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(1752),l=n(1747),r=n(9),i=n(1),o=n.n(i),c=n(0);const s={Wrapper:o.a.div`
    & * {
      color: ${e=>{switch(e.userVote){case-1:return"#b34834";case 0:return e.theme.material.color.brand.grey[500];case 1:return e.theme.material.color.brand.blue[600]}}};
    }
  `,UpvoteWrapper:o.a.div`
    ${e=>e.canUpvote&&`\n      cursor: pointer;\n      &:hover * {\n        color: ${e.theme.material.color.brand.blue[400]};\n      }\n    `};
  `,DownvoteWrapper:o.a.div`
    cursor: pointer;

    &:hover * {
      color: #b34834;
    }
  `},m={Wrapper:o()(s.Wrapper)`
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    height: ${e=>e.theme.material.spacing(19)};
    width: ${e=>e.theme.material.spacing(9)};
  `,Section:o.a.div`
    height: ${e=>e.theme.material.spacing(9)};
    width: ${e=>e.theme.material.spacing(9)};
  `,UpvoteWrapper:o()(s.UpvoteWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ${e=>e.theme.material.spacing(12)};
    z-index: 1;
  `,DownvoteWrapper:o()(s.DownvoteWrapper)`
    cursor: pointer;
    position: relative;
    top: -${e=>e.theme.material.spacing(3)};
  `,NumVotes:o.a.div`
    position: relative;
    top: ${e=>e.canUpvote||e.canDownvote?"-12px":"24px"};
  `,Number:a.a,upvoteIcon:c.createElement(l.a,{icon:"arrow_drop_up",size:"large"}),downvoteIcon:c.createElement(l.a,{icon:"arrow_drop_down",size:"large"})},d={Wrapper:o()(s.Wrapper)`
    background: ${e=>e.theme.material.color.white};
    border-radius: ${e=>e.theme.material.borderRadius.normal};
    border: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
    display: inline-flex;
    overflow: hidden;
  `,Section:o.a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${e=>e.theme.material.spacing(1)};
  `,UpvoteWrapper:o()(s.UpvoteWrapper)`
    display: flex;
    align-items: center;
  `,DownvoteWrapper:o()(s.DownvoteWrapper)`
    cursor: pointer;
  `,NumVotes:o.a.div`
    box-sizing: border-box;
    align-items: center;
    border-left: ${e=>e.canUpvote&&`1px solid ${e.theme.material.color.brand.grey[200]}`};
    border-right: ${e=>e.canDownvote&&`1px solid ${e.theme.material.color.brand.grey[200]}`};
    display: flex;
    height: ${e=>e.theme.material.spacing(7)};
    padding: 0 ${e=>e.theme.material.spacing(3)};
  `,Number:a.c,upvoteIcon:c.createElement(l.a,{icon:"keyboard_arrow_up",size:"small"}),downvoteIcon:c.createElement(l.a,{icon:"keyboard_arrow_down",size:"small"})};function u({canUpvote:e,canDownvote:t,messageId:n,numVotes:a,userVote:l,onVoteChange:i,isCondensed:o,className:s}){const u=o?d:m;function p(e){return l===e?0:e}function h(e){return a+e-l}function g(e){r.discussionsClient.voteOnForumMessage({forumMessageId:n,score:e})}return t=e&&t,c.createElement(u.Wrapper,{className:s,userVote:l},c.createElement(u.UpvoteWrapper,{canUpvote:e,onClick:t=>{if(!e)return;t.stopPropagation(),t.preventDefault();const n=p(1);g(n),i(h(n),n)}},e&&c.createElement(u.Section,null,u.upvoteIcon),c.createElement(u.NumVotes,{canUpvote:e,canDownvote:t},c.createElement(u.Number,null,a))),t&&c.createElement(u.DownvoteWrapper,{onClick:e=>{e.stopPropagation(),e.preventDefault();const t=p(-1);g(t),i(h(t),t)}},c.createElement(u.Section,null,u.downvoteIcon)))}},2094:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(3),l=n(2129),r=n(1685),i=n(2179),o=n(1752),c=n(9),s=n(1),m=n.n(s),d=n(0),u=n(1895);const p=m()(l.a)`
  &&& .mdc-dialog__surface {
    width: auto;
  }
`,h=m.a.div`
  margin-bottom: ${e=>e.theme.material.spacing(3)};
`,g=m.a.div`
  margin-bottom: ${e=>e.theme.material.spacing(3)};
`,f=m.a.div`
  display: flex;
  justify-content: flex-end;
`,v=m.a.div`
  margin-left: ${e=>e.theme.material.spacing(2)};
`,b=m()(r.a)`
  && {
    background: #b34834;
  }
`;function E({topicId:e,messageId:t,onDelete:n}){const[l,s]=d.useState(!1),m=e?"Topic":"Comment",E=()=>Object(a.__awaiter)(this,void 0,void 0,(function*(){e?yield c.discussionsClient.deleteTopic({topicId:e}):t&&(yield c.discussionsClient.deleteMessage({messageId:t})),n(),s(!1)}));return d.createElement(d.Fragment,null,d.createElement(p,{open:l,onClose:()=>s(!1)},d.createElement(i.a,null,d.createElement(h,null,d.createElement(o.o,null,"Delete ",m,"?")),d.createElement(g,null,d.createElement(o.b,null,"You're about to delete this ",m.toLowerCase(),".")),d.createElement(f,null,d.createElement(v,null,d.createElement(r.a,{variant:"text",onClick:()=>s(!1)},"Cancel")),d.createElement(v,null,d.createElement(b,{onClick:()=>E()},"Delete"))))),d.createElement(u.a,{onClick:()=>s(!0),text:"Delete"}))}},2095:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n(3),l=n(2129),r=n(1752),i=n(1734),o=n(1685),c=n(2179),s=n(9),m=n(1),d=n.n(m),u=n(0),p=n(1895);const h=d()(l.a)`
  &&& .mdc-dialog__surface {
    background: ${e=>e.theme.material.color.white};
    width: ${e=>e.theme.material.spacing(100)};
  }
`,g=d.a.div`
  display: flex;
  flex-direction: column;
`,f=d.a.div`
  margin-bottom: ${e=>e.theme.material.spacing(3)};
`,v=d.a.div`
  margin-bottom: ${e=>e.theme.material.spacing(3)};
`,b=d.a.div`
  display: flex;
  justify-content: flex-end;
`,E=d.a.div`
  margin-left: ${e=>e.theme.material.spacing(2)};
`,x=d.a.textarea`
  border: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  box-sizing: border-box;
  padding: ${e=>e.theme.material.spacing(5)};
  height: ${e=>e.theme.material.spacing(25)};
  outline: 0;
  resize: none;
  width: 100%;
  margin-top: ${e=>e.theme.material.spacing(5)};
`,y=d()(r.e)`
  color: ${e=>e.theme.material.color.text[50]};
`,$=[{value:"spam",reasonText:"Spammy message",promptText:u.createElement("div",null,"Anything else to add? (optional)")},{value:"abusive",reasonText:"Abusive language",promptText:u.createElement("div",null,"Anything else to add? (optional)")},{value:"votemanipulation",reasonText:"Votes for this post are being manipulated",promptText:u.createElement("div",null,"Please describe the vote manipulation")},{value:"other",reasonText:"Other",promptText:u.createElement("div",null,"What are your concerns?")}];function w({messageId:e,isFlagged:t,onFlag:n}){const[l,m]=u.useState(!1),[d,w]=u.useState("none"),[k,C]=u.useState(""),[I,S]=u.useState("initial");return u.useEffect(()=>{l&&(w("none"),C(""),S("initial"))},[l]),t?u.createElement(y,null,"Reported"):u.createElement(u.Fragment,null,u.createElement(h,{open:l,onClose:()=>m(!1)},u.createElement(c.a,null,u.createElement(f,null,u.createElement(r.o,null,"Report Message")),"initial"===I&&u.createElement(u.Fragment,null,u.createElement(v,null,u.createElement(r.b,null,u.createElement(g,null,$.map(e=>u.createElement(i.a,{key:e.value,value:e.value,checked:d===e.value,onChange:()=>w(e.value)},e.reasonText))))),u.createElement(b,null,u.createElement(E,null,u.createElement(o.a,{variant:"text",onClick:()=>m(!1)},"Cancel")),u.createElement(E,null,u.createElement(o.a,{disabled:"none"===d,onClick:()=>S("explanation")},"Next")))),"explanation"===I&&function(){var t;return u.createElement(u.Fragment,null,u.createElement(v,null,u.createElement(r.b,null,null===(t=$.find(e=>e.value===d))||void 0===t?void 0:t.promptText),u.createElement(x,{onChange:e=>C(e.target.value)})),u.createElement(b,null,u.createElement(E,null,u.createElement(o.a,{variant:"text",onClick:()=>m(!1)},"Cancel")),u.createElement(E,null,u.createElement(o.a,{onClick:()=>Object(a.__awaiter)(this,void 0,void 0,(function*(){yield s.discussionsClient.toggleFlagMessage({messageId:e,scriptVersionId:null,datasetVersionId:null,reasonType:d,explanation:k}),n(),m(!1)}))},"Report"))))}())),u.createElement(p.a,{onClick:()=>m(!0),text:"Report"}))}},2096:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),l=n(1895);function r({numVotes:e,onClick:t}){return a.createElement(l.a,{onClick:t,text:1===e?"1 Upvoter":`${e} Upvoters`})}},2097:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(3),l=n(9),r=n(0),i=n(1895);function o({isSpammed:e,onToggle:t,messageId:n}){const[o,c]=r.useState(!1);return r.createElement(i.a,{text:e?"Unspam":"Spam",onClick:()=>Object(a.__awaiter)(this,void 0,void 0,(function*(){o||(c(!0),n&&(yield l.discussionsClient.toggleSpamMessage({messageId:n})),c(!1),t(!e))}))})}},2098:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(2129),l=n(2179),r=n(1752),i=n(1734),o=n(2180),c=n(1685),s=n(9),m=n(1),d=n.n(m),u=n(0),p=n(1895);const h=d()(a.a)`
  &&& .mdc-dialog__surface {
    width: auto;
  }
`,g=d.a.div`
  margin-bottom: ${e=>e.theme.material.spacing(3)};
`,f=d.a.div`
  margin-bottom: ${e=>e.theme.material.spacing(3)};
`,v=d.a.div`
  display: flex;
  justify-content: flex-end;
`,b=d.a.div`
  margin-left: ${e=>e.theme.material.spacing(2)};
`,E=d.a.div`
  display: flex;
  flex-direction: column;
`;function x({messageId:e,initialModel:t}){const[n,a]=u.useState(t||{buganizerId:null,followUpStatus:"none"}),[m,d]=u.useState(!1),[x,y]=u.useState(n.buganizerId),[$,w]=u.useState(n.followUpStatus);return u.useEffect(()=>{var e,t;y(null!==(e=null==n?void 0:n.buganizerId)&&void 0!==e?e:null),w(null!==(t=null==n?void 0:n.followUpStatus)&&void 0!==t?t:"none")},[n]),u.createElement(u.Fragment,null,u.createElement(h,{open:m,onClose:()=>d(!1)},u.createElement(l.a,null,u.createElement(g,null,u.createElement(r.o,null,"Forum Feedback Tracking")),u.createElement(f,null,u.createElement(r.b,null,u.createElement("div",null,"Follow up status:"),u.createElement(E,null,u.createElement(i.a,{value:"none",checked:"none"===$,onChange:()=>w("none")},"None"),u.createElement(i.a,{value:"inProgress",checked:"inProgress"===$,onChange:()=>w("inProgress")},"In Progress"),u.createElement(i.a,{value:"done",checked:"done"===$,onChange:()=>w("done")},"Done")),u.createElement("div",null,"Bug Number:"," ",u.createElement(o.a,{value:x&&x.toString()||"",onChange:e=>{const t=(e.target.value||"").trim();y(t?Number(t):null)}})))),u.createElement(v,null,u.createElement(b,null,u.createElement(c.a,{onClick:()=>{s.discussionsClient.updateFeedbackTrackingData({messageId:e,feedbackTrackingData:{buganizerId:x,followUpStatus:$}}).then(()=>{a({buganizerId:x,followUpStatus:$}),d(!1)})}},"Save"))))),u.createElement(p.a,{onClick:()=>d(!0),text:n.buganizerId?`Bug ${n.buganizerId}`:"No Bug"}))}},2099:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(1),l=n.n(a),r=n(0),i=n(2006);const o=l.a.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  padding: ${e=>{const t=e.theme.material.spacing;return`${t(4)} ${t(4)} ${t(1)}`}};
`,c=l.a.div`
  margin-right: ${e=>e.theme.material.spacing(4)};
  margin-bottom: ${e=>e.theme.material.spacing(3)};
`;function s({currentUser:e,users:t,currentUserVote:n}){return t=t.slice(),e&&(t=t.filter(t=>t.id!==e.id),1===n&&t.unshift(e)),r.createElement(o,null,t.map(e=>r.createElement(c,{key:e.id},r.createElement(i.a,{model:e}))))}},2100:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(1752),l=n(1747),r=n(1),i=n.n(r),o=n(0),c=n(1863);const s=i.a.div`
  display: inline-flex;
  cursor: pointer;
  flex-direction: column;
  min-width: ${e=>e.theme.material.spacing(40)};
  position: relative;
`,m=i.a.div`
  background: ${e=>e.theme.material.color.white};
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 ${e=>e.theme.material.spacing(2)};
  height: ${e=>e.theme.material.spacing(7)};
  border: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  border-radius: ${e=>{const t=e.theme.material.borderRadius.normal;return e.isOpen?`${t} ${t} 0 0`:t}};
`,d=i.a.div`
  background: ${e=>e.theme.material.color.white};
  box-sizing: border-box;
  display: ${e=>e.isOpen?"flex":"none"};
  flex-direction: column;
  position: absolute;
  top: ${e=>e.theme.material.spacing(7)};
  width: 100%;
  border: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  border-top: 0;
  border-radius: ${e=>{const t=e.theme.material.borderRadius.normal;return`0 0 ${t} ${t}`}};
  z-index: 1;
`,u=i.a.div`
  padding: ${e=>e.theme.material.spacing(2)};
`,p=i()(a.b)`
  && {
    color: ${e=>e.theme.material.color.text[70]};
  }
`;function h({options:e,selectedOption:t,onChange:n,className:a}){const[i,h]=o.useState(!1),g=o.useRef(document.createElement("div"));return o.useEffect(()=>{const e=e=>{let t=e.target;const n=g.current;for(;t;){if(t===n)return;t=t.parentElement}h(!1)};return window.addEventListener("click",e),()=>window.removeEventListener("click",e)}),o.createElement(s,{className:a,ref:g},o.createElement(m,{isOpen:i,onClick:()=>h(!i)},o.createElement(p,null,t),o.createElement(l.a,{color:r.defaultTheme.material.color.text[50],size:"small",icon:i?"arrow_drop_up":"arrow_drop_down"})),o.createElement(d,{isOpen:i},[...e].map(e=>o.createElement(c.a,{key:e},o.createElement(u,{onClick:()=>{n(e),h(!1)}},o.createElement(p,null,e))))))}},2129:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),l=n.n(a),r=n(1746),i=n(0);n(545),n(1536);const o=l()(r.a)`
  &&.mdc-dialog {
    z-index: 1000;
  }

  && .mdc-dialog__container {
    max-width: 100%;
    padding: 0 10px;
  }

  && .mdc-dialog__surface {
    /* When additional widths are added update this value */
    width: 720px;
    max-width: 100%;
  }
`,c=e=>{const{className:t,open:n,onOpen:l,onClose:r,width:c}=e;return i.createElement(a.ThemeProvider,{theme:Object.assign(Object.assign({},a.defaultTheme),{session:Object.assign(Object.assign({},a.defaultTheme.session),{themeName:"light"})})},i.createElement(o,{className:t,open:n,onOpen:l,onClose:r,width:c},e.children))}},2179:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(1746),l=n(0);n(545),n(1536);const r=e=>{const{children:t,className:n}=e;return l.createElement(a.d,{className:n},t)}},2180:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),l=n.n(a),r=n(1586),i=n(0);n(1550),n(1551),n(1552),n(1580);const o=l()(r.a)`
  &:not(.mdc-text-field--focused):hover {
    .mdc-notched-outline__leading,
    .mdc-notched-outline__notch,
    .mdc-notched-outline__trailing {
      border-color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.hover} !important;
    }
  }

  &&& {
    min-width: ${e=>e.theme.material.spacing(32)};
    transition: all 0.3s ease;

    .mdc-text-field__input {
      font-family: "Inter", sans-serif;
      color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.focused};

      caret-color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.focused};
    }

    .mdc-floating-label,
    .mdc-text-field__icon {
      color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.focused};
    }

    .mdc-notched-outline__leading,
    .mdc-notched-outline__notch,
    .mdc-notched-outline__trailing {
      border-color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.default};
    }
  }

  &&&.mdc-text-field--focused {
    .mdc-notched-outline__leading,
    .mdc-notched-outline__notch,
    .mdc-notched-outline__trailing {
      border-color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.focused};
    }
  }

  &&&.mdc-text-field--invalid {
    .mdc-notched-outline__leading,
    .mdc-notched-outline__notch,
    .mdc-notched-outline__trailing {
      border-color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.error};
    }

    .mdc-floating-label,
    .mdc-text-field__icon {
      color: ${e=>e.theme.material.color.mode[e.theme.name].textinput.error};
    }
  }

  &&&.mdc-text-field--disabled {
    opacity: 0.38;
  }
`,c=e=>{const{onChange:t,disabled:n,label:a,leadingIcon:l,pattern:r,required:c,status:s,trailingIcon:m,trailingIconAction:d,type:u,value:p,name:h,className:g,onBlur:f,onFocus:v,autoFocus:b}=e;return i.createElement(o,{autoFocus:b,onChange:t,disabled:n,icon:l,invalid:"invalid"===s||e.invalid,label:a,pattern:r,required:c,trailingIcon:m&&{icon:m,tabIndex:0,onClick:d},type:u,value:p,outlined:!0,name:h,className:g,onBlur:f,onFocus:v})}}}]);