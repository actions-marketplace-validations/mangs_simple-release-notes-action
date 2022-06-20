/* esm.sh - esbuild bundle(marked@4.0.16) es2022 production */
var K=Object.defineProperty;var d=(l,e)=>K(l,"name",{value:e,configurable:!0});function G(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}d(G,"getDefaults");var Z=G();function Y(l){Z=l}d(Y,"changeDefaults");var ee=/[&<>"']/,te=/[&<>"']/g,ne=/[<>"']|&(?!#?\w+;)/,ie=/[<>"']|&(?!#?\w+;)/g,se={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},M=d(l=>se[l],"getEscapeReplacement");function w(l,e){if(e){if(ee.test(l))return l.replace(te,M)}else if(ne.test(l))return l.replace(ie,M);return l}d(w,"escape");var re=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function V(l){return l.replace(re,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}d(V,"unescape");var le=/(^|[^\[])\^/g;function k(l,e){l=typeof l=="string"?l:l.source,e=e||"";let n={replace:(t,i)=>(i=i.source||i,i=i.replace(le,"$1"),l=l.replace(t,i),n),getRegex:()=>new RegExp(l,e)};return n}d(k,"edit");var ae=/[^\w:]/g,oe=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function N(l,e,n){if(l){let t;try{t=decodeURIComponent(V(n)).replace(ae,"").toLowerCase()}catch{return null}if(t.indexOf("javascript:")===0||t.indexOf("vbscript:")===0||t.indexOf("data:")===0)return null}e&&!oe.test(n)&&(n=ue(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}d(N,"cleanUrl");var v={},he=/^[^:]+:\/*[^/]*$/,ce=/^([^:]+:)[\s\S]*$/,pe=/^([^:]+:\/*[^/]*)[\s\S]*$/;function ue(l,e){v[" "+l]||(he.test(l)?v[" "+l]=l+"/":v[" "+l]=j(l,"/",!0)),l=v[" "+l];let n=l.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:l.replace(ce,"$1")+e:e.charAt(0)==="/"?n?e:l.replace(pe,"$1")+e:l+e}d(ue,"resolveUrl");var Q={exec:d(function(){},"noopTest")};function S(l){let e=1,n,t;for(;e<arguments.length;e++){n=arguments[e];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t])}return l}d(S,"merge");function P(l,e){let n=l.replace(/\|/g,(s,r,a)=>{let h=!1,f=r;for(;--f>=0&&a[f]==="\\";)h=!h;return h?"|":" |"}),t=n.split(/ \|/),i=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(/\\\|/g,"|");return t}d(P,"splitCells");function j(l,e,n){let t=l.length;if(t===0)return"";let i=0;for(;i<t;){let s=l.charAt(t-i-1);if(s===e&&!n)i++;else if(s!==e&&n)i++;else break}return l.slice(0,t-i)}d(j,"rtrim");function fe(l,e){if(l.indexOf(e[1])===-1)return-1;let n=l.length,t=0,i=0;for(;i<n;i++)if(l[i]==="\\")i++;else if(l[i]===e[0])t++;else if(l[i]===e[1]&&(t--,t<0))return i;return-1}d(fe,"findClosingBracket");function H(l){l&&l.sanitize&&!l.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}d(H,"checkSanitizeDeprecation");function F(l,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=l),e>>=1,l+=l;return n+l}d(F,"repeatString");function W(l,e,n,t){let i=e.href,s=e.title?w(e.title):null,r=l[1].replace(/\\([\[\]])/g,"$1");if(l[0].charAt(0)!=="!"){t.state.inLink=!0;let a={type:"link",raw:n,href:i,title:s,text:r,tokens:t.inlineTokens(r,[])};return t.state.inLink=!1,a}return{type:"image",raw:n,href:i,title:s,text:w(r)}}d(W,"outputLink");function ge(l,e){let n=l.match(/^(\s+)(?:```)/);if(n===null)return e;let t=n[1];return e.split(`
`).map(i=>{let s=i.match(/^\s+/);if(s===null)return i;let[r]=s;return r.length>=t.length?i.slice(t.length):i}).join(`
`)}d(ge,"indentCodeCompensation");var C=class{constructor(e){this.options=e||Z}space(e){let n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){let n=this.rules.block.code.exec(e);if(n){let t=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?t:j(t,`
`)}}}fences(e){let n=this.rules.block.fences.exec(e);if(n){let t=n[0],i=ge(t,n[3]||"");return{type:"code",raw:t,lang:n[2]?n[2].trim():n[2],text:i}}}heading(e){let n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(/#$/.test(t)){let s=j(t,"#");(this.options.pedantic||!s||/ $/.test(s))&&(t=s.trim())}let i={type:"heading",raw:n[0],depth:n[1].length,text:t,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(e){let n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){let n=this.rules.block.blockquote.exec(e);if(n){let t=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(t,[]),text:t}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t,i,s,r,a,h,f,g,_,m,p,E,z=n[1].trim(),R=z.length>1,x={type:"list",raw:"",ordered:R,start:R?+z.slice(0,-1):"",loose:!1,items:[]};z=R?`\\d{1,9}\\${z.slice(-1)}`:`\\${z}`,this.options.pedantic&&(z=R?z:"[*+-]");let b=new RegExp(`^( {0,3}${z})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(E=!1,!(!(n=b.exec(e))||this.rules.block.hr.test(e)));){if(t=n[0],e=e.substring(t.length),g=n[2].split(`
`,1)[0],_=e.split(`
`,1)[0],this.options.pedantic?(r=2,p=g.trimLeft()):(r=n[2].search(/[^ ]/),r=r>4?1:r,p=g.slice(r),r+=n[1].length),h=!1,!g&&/^ *$/.test(_)&&(t+=_+`
`,e=e.substring(_.length+1),E=!0),!E){let I=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),T=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);for(;e&&(m=e.split(`
`,1)[0],g=m,this.options.pedantic&&(g=g.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(I.test(g)||T.test(e)));){if(g.search(/[^ ]/)>=r||!g.trim())p+=`
`+g.slice(r);else if(!h)p+=`
`+g;else break;!h&&!g.trim()&&(h=!0),t+=m+`
`,e=e.substring(m.length+1)}}x.loose||(f?x.loose=!0:/\n *\n *$/.test(t)&&(f=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(p),i&&(s=i[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),x.items.push({type:"list_item",raw:t,task:!!i,checked:s,loose:!1,text:p}),x.raw+=t}x.items[x.items.length-1].raw=t.trimRight(),x.items[x.items.length-1].text=p.trimRight(),x.raw=x.raw.trimRight();let q=x.items.length;for(a=0;a<q;a++){this.lexer.state.top=!1,x.items[a].tokens=this.lexer.blockTokens(x.items[a].text,[]);let I=x.items[a].tokens.filter(A=>A.type==="space"),T=I.every(A=>{let U=A.raw.split(""),D=0;for(let J of U)if(J===`
`&&(D+=1),D>1)return!0;return!1});!x.loose&&I.length&&T&&(x.loose=!0,x.items[a].loose=!0)}return x}}html(e){let n=this.rules.block.html.exec(e);if(n){let t={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(t.type="paragraph",t.text=this.options.sanitizer?this.options.sanitizer(n[0]):w(n[0]),t.tokens=[],this.lexer.inline(t.text,t.tokens)),t}}def(e){let n=this.rules.block.def.exec(e);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));let t=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:t,raw:n[0],href:n[2],title:n[3]}}}table(e){let n=this.rules.block.table.exec(e);if(n){let t={type:"table",header:P(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){t.raw=n[0];let i=t.align.length,s,r,a,h;for(s=0;s<i;s++)/^ *-+: *$/.test(t.align[s])?t.align[s]="right":/^ *:-+: *$/.test(t.align[s])?t.align[s]="center":/^ *:-+ *$/.test(t.align[s])?t.align[s]="left":t.align[s]=null;for(i=t.rows.length,s=0;s<i;s++)t.rows[s]=P(t.rows[s],t.header.length).map(f=>({text:f}));for(i=t.header.length,r=0;r<i;r++)t.header[r].tokens=[],this.lexer.inline(t.header[r].text,t.header[r].tokens);for(i=t.rows.length,r=0;r<i;r++)for(h=t.rows[r],a=0;a<h.length;a++)h[a].tokens=[],this.lexer.inline(h[a].text,h[a].tokens);return t}}}lheading(e){let n=this.rules.block.lheading.exec(e);if(n){let t={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}paragraph(e){let n=this.rules.block.paragraph.exec(e);if(n){let t={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}text(e){let n=this.rules.block.text.exec(e);if(n){let t={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}escape(e){let n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:w(n[1])}}tag(e){let n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):w(n[0]):n[0]}}link(e){let n=this.rules.inline.link.exec(e);if(n){let t=n[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;let r=j(t.slice(0,-1),"\\");if((t.length-r.length)%2===0)return}else{let r=fe(n[2],"()");if(r>-1){let h=(n[0].indexOf("!")===0?5:4)+n[1].length+r;n[2]=n[2].substring(0,r),n[0]=n[0].substring(0,h).trim(),n[3]=""}}let i=n[2],s="";if(this.options.pedantic){let r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],s=r[3])}else s=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1,-1)),W(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let i=(t[2]||t[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i||!i.href){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return W(t,i,t[0],this.lexer)}}emStrong(e,n,t=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&t.match(/[\p{L}\p{N}]/u))return;let s=i[1]||i[2]||"";if(!s||s&&(t===""||this.rules.inline.punctuation.exec(t))){let r=i[0].length-1,a,h,f=r,g=0,_=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(_.lastIndex=0,n=n.slice(-1*e.length+r);(i=_.exec(n))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(h=a.length,i[3]||i[4]){f+=h;continue}else if((i[5]||i[6])&&r%3&&!((r+h)%3)){g+=h;continue}if(f-=h,f>0)continue;if(h=Math.min(h,h+f+g),Math.min(r,h)%2){let p=e.slice(1,r+i.index+h);return{type:"em",raw:e.slice(0,r+i.index+h+1),text:p,tokens:this.lexer.inlineTokens(p,[])}}let m=e.slice(2,r+i.index+h-1);return{type:"strong",raw:e.slice(0,r+i.index+h+1),text:m,tokens:this.lexer.inlineTokens(m,[])}}}}codespan(e){let n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(/\n/g," "),i=/[^ ]/.test(t),s=/^ /.test(t)&&/ $/.test(t);return i&&s&&(t=t.substring(1,t.length-1)),t=w(t,!0),{type:"codespan",raw:n[0],text:t}}}br(e){let n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){let n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(e,n){let t=this.rules.inline.autolink.exec(e);if(t){let i,s;return t[2]==="@"?(i=w(this.options.mangle?n(t[1]):t[1]),s="mailto:"+i):(i=w(t[1]),s=i),{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e,n){let t;if(t=this.rules.inline.url.exec(e)){let i,s;if(t[2]==="@")i=w(this.options.mangle?n(t[0]):t[0]),s="mailto:"+i;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(r!==t[0]);i=w(t[0]),t[1]==="www."?s="http://"+i:s=i}return{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,n){let t=this.rules.inline.text.exec(e);if(t){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):w(t[0]):t[0]:i=w(this.options.smartypants?n(t[0]):t[0]),{type:"text",raw:t[0],text:i}}}};d(C,"Tokenizer");var c={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Q,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};c._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;c._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;c.def=k(c.def).replace("label",c._label).replace("title",c._title).getRegex();c.bullet=/(?:[*+-]|\d{1,9}[.)])/;c.listItemStart=k(/^( *)(bull) */).replace("bull",c.bullet).getRegex();c.list=k(c.list).replace(/bull/g,c.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+c.def.source+")").getRegex();c._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";c._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;c.html=k(c.html,"i").replace("comment",c._comment).replace("tag",c._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();c.paragraph=k(c._paragraph).replace("hr",c.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",c._tag).getRegex();c.blockquote=k(c.blockquote).replace("paragraph",c.paragraph).getRegex();c.normal=S({},c);c.gfm=S({},c.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});c.gfm.table=k(c.gfm.table).replace("hr",c.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",c._tag).getRegex();c.gfm.paragraph=k(c._paragraph).replace("hr",c.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",c.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",c._tag).getRegex();c.pedantic=S({},c.normal,{html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",c._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Q,paragraph:k(c.normal._paragraph).replace("hr",c.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",c.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var o={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Q,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Q,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};o._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";o.punctuation=k(o.punctuation).replace(/punctuation/g,o._punctuation).getRegex();o.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;o.escapedEmSt=/\\\*|\\_/g;o._comment=k(c._comment).replace("(?:-->|$)","-->").getRegex();o.emStrong.lDelim=k(o.emStrong.lDelim).replace(/punct/g,o._punctuation).getRegex();o.emStrong.rDelimAst=k(o.emStrong.rDelimAst,"g").replace(/punct/g,o._punctuation).getRegex();o.emStrong.rDelimUnd=k(o.emStrong.rDelimUnd,"g").replace(/punct/g,o._punctuation).getRegex();o._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;o._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;o._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;o.autolink=k(o.autolink).replace("scheme",o._scheme).replace("email",o._email).getRegex();o._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;o.tag=k(o.tag).replace("comment",o._comment).replace("attribute",o._attribute).getRegex();o._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;o._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;o._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;o.link=k(o.link).replace("label",o._label).replace("href",o._href).replace("title",o._title).getRegex();o.reflink=k(o.reflink).replace("label",o._label).replace("ref",c._label).getRegex();o.nolink=k(o.nolink).replace("ref",c._label).getRegex();o.reflinkSearch=k(o.reflinkSearch,"g").replace("reflink",o.reflink).replace("nolink",o.nolink).getRegex();o.normal=S({},o);o.pedantic=S({},o.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",o._label).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",o._label).getRegex()});o.gfm=S({},o.normal,{escape:k(o.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});o.gfm.url=k(o.gfm.url,"i").replace("email",o.gfm._extended_email).getRegex();o.breaks=S({},o.gfm,{br:k(o.br).replace("{2,}","*").getRegex(),text:k(o.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function de(l){return l.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}d(de,"smartypants");function X(l){let e="",n,t,i=l.length;for(n=0;n<i;n++)t=l.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}d(X,"mangle");var y=class{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Z,this.options.tokenizer=this.options.tokenizer||new C,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={block:c.normal,inline:o.normal};this.options.pedantic?(n.block=c.pedantic,n.inline=o.pedantic):this.options.gfm&&(n.block=c.gfm,this.options.breaks?n.inline=o.breaks:n.inline=o.gfm),this.tokenizer.rules=n}static get rules(){return{block:c,inline:o}}static lex(e,n){return new y(n).lex(e)}static lexInline(e,n){return new y(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,h,f)=>h+"    ".repeat(f.length));let t,i,s,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(t=a.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length),t.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0,h=e.slice(1),f;this.options.extensions.startBlock.forEach(function(g){f=g.call({lexer:this},h),typeof f=="number"&&f>=0&&(a=Math.min(a,f))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(t=this.tokenizer.paragraph(s))){i=n[n.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t),r=s.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(e){let a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n){this.inlineQueue.push({src:e,tokens:n})}inlineTokens(e,n=[]){let t,i,s,r=e,a,h,f;if(this.tokens.links){let g=Object.keys(this.tokens.links);if(g.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)g.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,a.index)+"["+F("a",a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,a.index)+"["+F("a",a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(r))!=null;)r=r.slice(0,a.index)+"++"+r.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(h||(f=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(t=g.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.escape(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.tag(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.link(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.emStrong(e,r,f)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.codespan(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.br(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.del(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.autolink(e,X)){e=e.substring(t.raw.length),n.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(e,X))){e=e.substring(t.raw.length),n.push(t);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let g=1/0,_=e.slice(1),m;this.options.extensions.startInline.forEach(function(p){m=p.call({lexer:this},_),typeof m=="number"&&m>=0&&(g=Math.min(g,m))}),g<1/0&&g>=0&&(s=e.substring(0,g+1))}if(t=this.tokenizer.inlineText(s,de)){e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(f=t.raw.slice(-1)),h=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(e){let g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}};d(y,"Lexer");var L=class{constructor(e){this.options=e||Z}code(e,n,t){let i=(n||"").match(/\S*/)[0];if(this.options.highlight){let s=this.options.highlight(e,i);s!=null&&s!==e&&(t=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+w(i,!0)+'">'+(t?e:w(e,!0))+`</code></pre>
`:"<pre><code>"+(t?e:w(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,n,t,i){if(this.options.headerIds){let s=this.options.headerPrefix+i.slug(t);return`<h${n} id="${s}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,t){let i=n?"ol":"ul",s=n&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){let t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,t){if(e=N(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let i='<a href="'+w(e)+'"';return n&&(i+=' title="'+n+'"'),i+=">"+t+"</a>",i}image(e,n,t){if(e=N(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let i=`<img src="${e}" alt="${t}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}};d(L,"Renderer");var B=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,t){return""+t}image(e,n,t){return""+t}br(){return""}};d(B,"TextRenderer");var O=class{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let t=e,i=0;if(this.seen.hasOwnProperty(t)){i=this.seen[e];do i++,t=e+"-"+i;while(this.seen.hasOwnProperty(t))}return n||(this.seen[e]=i,this.seen[t]=0),t}slug(e,n={}){let t=this.serialize(e);return this.getNextSafeSlug(t,n.dryrun)}};d(O,"Slugger");var $=class{constructor(e){this.options=e||Z,this.options.renderer=this.options.renderer||new L,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new B,this.slugger=new O}static parse(e,n){return new $(n).parse(e)}static parseInline(e,n){return new $(n).parseInline(e)}parse(e,n=!0){let t="",i,s,r,a,h,f,g,_,m,p,E,z,R,x,b,q,I,T,A,U=e.length;for(i=0;i<U;i++){if(p=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(A=this.options.extensions.renderers[p.type].call({parser:this},p),A!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){t+=A||"";continue}switch(p.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{t+=this.renderer.heading(this.parseInline(p.tokens),p.depth,V(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{t+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(_="",g="",a=p.header.length,s=0;s<a;s++)g+=this.renderer.tablecell(this.parseInline(p.header[s].tokens),{header:!0,align:p.align[s]});for(_+=this.renderer.tablerow(g),m="",a=p.rows.length,s=0;s<a;s++){for(f=p.rows[s],g="",h=f.length,r=0;r<h;r++)g+=this.renderer.tablecell(this.parseInline(f[r].tokens),{header:!1,align:p.align[r]});m+=this.renderer.tablerow(g)}t+=this.renderer.table(_,m);continue}case"blockquote":{m=this.parse(p.tokens),t+=this.renderer.blockquote(m);continue}case"list":{for(E=p.ordered,z=p.start,R=p.loose,a=p.items.length,m="",s=0;s<a;s++)b=p.items[s],q=b.checked,I=b.task,x="",b.task&&(T=this.renderer.checkbox(q),R?b.tokens.length>0&&b.tokens[0].type==="paragraph"?(b.tokens[0].text=T+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&b.tokens[0].tokens[0].type==="text"&&(b.tokens[0].tokens[0].text=T+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:T}):x+=T),x+=this.parse(b.tokens,R),m+=this.renderer.listitem(x,I,q);t+=this.renderer.list(m,E,z);continue}case"html":{t+=this.renderer.html(p.text);continue}case"paragraph":{t+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(m=p.tokens?this.parseInline(p.tokens):p.text;i+1<U&&e[i+1].type==="text";)p=e[++i],m+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);t+=n?this.renderer.paragraph(m):m;continue}default:{let D='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(D);return}else throw new Error(D)}}}return t}parseInline(e,n){n=n||this.renderer;let t="",i,s,r,a=e.length;for(i=0;i<a;i++){if(s=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(r=this.options.extensions.renderers[s.type].call({parser:this},s),r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){t+=r||"";continue}switch(s.type){case"escape":{t+=n.text(s.text);break}case"html":{t+=n.html(s.text);break}case"link":{t+=n.link(s.href,s.title,this.parseInline(s.tokens,n));break}case"image":{t+=n.image(s.href,s.title,s.text);break}case"strong":{t+=n.strong(this.parseInline(s.tokens,n));break}case"em":{t+=n.em(this.parseInline(s.tokens,n));break}case"codespan":{t+=n.codespan(s.text);break}case"br":{t+=n.br();break}case"del":{t+=n.del(this.parseInline(s.tokens,n));break}case"text":{t+=n.text(s.text);break}default:{let h='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(h);return}else throw new Error(h)}}}return t}};d($,"Parser");function u(l,e,n){if(typeof l>"u"||l===null)throw new Error("marked(): input parameter is undefined or null");if(typeof l!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=S({},u.defaults,e||{}),H(e),n){let t=e.highlight,i;try{i=y.lex(l,e)}catch(a){return n(a)}let s=d(function(a){let h;if(!a)try{e.walkTokens&&u.walkTokens(i,e.walkTokens),h=$.parse(i,e)}catch(f){a=f}return e.highlight=t,a?n(a):n(null,h)},"done");if(!t||t.length<3||(delete e.highlight,!i.length))return s();let r=0;u.walkTokens(i,function(a){a.type==="code"&&(r++,setTimeout(()=>{t(a.text,a.lang,function(h,f){if(h)return s(h);f!=null&&f!==a.text&&(a.text=f,a.escaped=!0),r--,r===0&&s()})},0))}),r===0&&s();return}try{let t=y.lex(l,e);return e.walkTokens&&u.walkTokens(t,e.walkTokens),$.parse(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+w(t.message+"",!0)+"</pre>";throw t}}d(u,"marked");u.options=u.setOptions=function(l){return S(u.defaults,l),Y(u.defaults),u};u.getDefaults=G;u.defaults=Z;u.use=function(...l){let e=S({},...l),n=u.defaults.extensions||{renderers:{},childTokens:{}},t;l.forEach(i=>{if(i.extensions&&(t=!0,i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if(s.renderer){let r=n.renderers?n.renderers[s.name]:null;r?n.renderers[s.name]=function(...a){let h=s.renderer.apply(this,a);return h===!1&&(h=r.apply(this,a)),h}:n.renderers[s.name]=s.renderer}if(s.tokenizer){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[s.level]?n[s.level].unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}s.childTokens&&(n.childTokens[s.name]=s.childTokens)})),i.renderer){let s=u.defaults.renderer||new L;for(let r in i.renderer){let a=s[r];s[r]=(...h)=>{let f=i.renderer[r].apply(s,h);return f===!1&&(f=a.apply(s,h)),f}}e.renderer=s}if(i.tokenizer){let s=u.defaults.tokenizer||new C;for(let r in i.tokenizer){let a=s[r];s[r]=(...h)=>{let f=i.tokenizer[r].apply(s,h);return f===!1&&(f=a.apply(s,h)),f}}e.tokenizer=s}if(i.walkTokens){let s=u.defaults.walkTokens;e.walkTokens=function(r){i.walkTokens.call(this,r),s&&s.call(this,r)}}t&&(e.extensions=n),u.setOptions(e)})};u.walkTokens=function(l,e){for(let n of l)switch(e.call(u,n),n.type){case"table":{for(let t of n.header)u.walkTokens(t.tokens,e);for(let t of n.rows)for(let i of t)u.walkTokens(i.tokens,e);break}case"list":{u.walkTokens(n.items,e);break}default:u.defaults.extensions&&u.defaults.extensions.childTokens&&u.defaults.extensions.childTokens[n.type]?u.defaults.extensions.childTokens[n.type].forEach(function(t){u.walkTokens(n[t],e)}):n.tokens&&u.walkTokens(n.tokens,e)}};u.parseInline=function(l,e){if(typeof l>"u"||l===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof l!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected");e=S({},u.defaults,e||{}),H(e);try{let n=y.lexInline(l,e);return e.walkTokens&&u.walkTokens(n,e.walkTokens),$.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+w(n.message+"",!0)+"</pre>";throw n}};u.Parser=$;u.parser=$.parse;u.Renderer=L;u.TextRenderer=B;u.Lexer=y;u.lexer=y.lex;u.Tokenizer=C;u.Slugger=O;u.parse=u;var me=u.options,xe=u.setOptions,we=u.use,be=u.walkTokens,_e=u.parseInline,ye=u,$e=$.parse,ze=y.lex;export{y as Lexer,$ as Parser,L as Renderer,O as Slugger,B as TextRenderer,C as Tokenizer,Z as defaults,G as getDefaults,ze as lexer,u as marked,me as options,ye as parse,_e as parseInline,$e as parser,xe as setOptions,we as use,be as walkTokens};