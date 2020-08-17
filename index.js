(()=>{"use strict"
var e={592:function(e,t,n){var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}
Object.defineProperty(t,"__esModule",{value:!0})
const o=r(n(87))
function s(e,t,n){const r=new i(e,t,n)
process.stdout.write(r.toString()+o.EOL)}t.issueCommand=s,t.issue=function(e,t=""){s(e,{},t)}
class i{constructor(e,t,n){e||(e="missing.command"),this.command=e,this.properties=t,this.message=n}toString(){let e="::"+this.command
if(this.properties&&Object.keys(this.properties).length>0){e+=" "
let n=!0
for(const r in this.properties)if(this.properties.hasOwnProperty(r)){const o=this.properties[r]
o&&(n?n=!1:e+=",",e+=`${r}=${t=o,u(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}`)}}var t
return e+="::"+function(e){return u(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}(this.message),e}}function u(e){return null==e?"":"string"==typeof e||e instanceof String?e:JSON.stringify(e)}t.toCommandValue=u},516:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function u(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}a((r=r.apply(e,t||[])).next())}))},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}
Object.defineProperty(t,"__esModule",{value:!0})
const s=n(592),i=o(n(87)),u=o(n(622))
var a
function c(e){s.issue("error",e instanceof Error?e.toString():e)}function l(e){s.issue("group",e)}function p(){s.issue("endgroup")}!function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"}(a=t.ExitCode||(t.ExitCode={})),t.exportVariable=function(e,t){const n=s.toCommandValue(t)
process.env[e]=n,s.issueCommand("set-env",{name:e},n)},t.setSecret=function(e){s.issueCommand("add-mask",{},e)},t.addPath=function(e){s.issueCommand("add-path",{},e),process.env.PATH=`${e}${u.delimiter}${process.env.PATH}`},t.getInput=function(e,t){const n=process.env["INPUT_"+e.replace(/ /g,"_").toUpperCase()]||""
if(t&&t.required&&!n)throw new Error("Input required and not supplied: "+e)
return n.trim()},t.setOutput=function(e,t){s.issueCommand("set-output",{name:e},t)},t.setCommandEcho=function(e){s.issue("echo",e?"on":"off")},t.setFailed=function(e){process.exitCode=a.Failure,c(e)},t.isDebug=function(){return"1"===process.env.RUNNER_DEBUG},t.debug=function(e){s.issueCommand("debug",{},e)},t.error=c,t.warning=function(e){s.issue("warning",e instanceof Error?e.toString():e)},t.info=function(e){process.stdout.write(e+i.EOL)},t.startGroup=l,t.endGroup=p,t.group=function(e,t){return r(this,void 0,void 0,(function*(){let n
l(e)
try{n=yield t()}finally{p()}return n}))},t.saveState=function(e,t){s.issueCommand("save-state",{name:e},t)},t.getState=function(e){return process.env["STATE_"+e]||""}},706:(e,t,n)=>{const r=n(339),o=n(555),s=n(741),i=n(833),u=(e,t={})=>{let n=[]
if(Array.isArray(e))for(let r of e){let e=u.create(r,t)
Array.isArray(e)?n.push(...e):n.push(e)}else n=[].concat(u.create(e,t))
return t&&!0===t.expand&&!0===t.nodupes&&(n=[...new Set(n)]),n}
u.parse=(e,t={})=>i(e,t),u.stringify=(e,t={})=>r("string"==typeof e?u.parse(e,t):e,t),u.compile=(e,t={})=>("string"==typeof e&&(e=u.parse(e,t)),o(e,t)),u.expand=(e,t={})=>{"string"==typeof e&&(e=u.parse(e,t))
let n=s(e,t)
return!0===t.noempty&&(n=n.filter(Boolean)),!0===t.nodupes&&(n=[...new Set(n)]),n},u.create=(e,t={})=>""===e||e.length<3?[e]:!0!==t.expand?u.compile(e,t):u.expand(e,t),e.exports=u},555:(e,t,n)=>{const r=n(824),o=n(117)
e.exports=(e,t={})=>{let n=(e,s={})=>{let i=o.isInvalidBrace(s),u=!0===e.invalid&&!0===t.escapeInvalid,a=!0===i||!0===u,c=!0===t.escapeInvalid?"\\":"",l=""
if(!0===e.isOpen)return c+e.value
if(!0===e.isClose)return c+e.value
if("open"===e.type)return a?c+e.value:"("
if("close"===e.type)return a?c+e.value:")"
if("comma"===e.type)return"comma"===e.prev.type?"":a?e.value:"|"
if(e.value)return e.value
if(e.nodes&&e.ranges>0){let n=o.reduce(e.nodes),s=r(...n,{...t,wrap:!1,toRegex:!0})
if(0!==s.length)return n.length>1&&s.length>1?`(${s})`:s}if(e.nodes)for(let t of e.nodes)l+=n(t,e)
return l}
return n(e)}},552:e=>{e.exports={MAX_LENGTH:65536,CHAR_0:"0",CHAR_9:"9",CHAR_UPPERCASE_A:"A",CHAR_LOWERCASE_A:"a",CHAR_UPPERCASE_Z:"Z",CHAR_LOWERCASE_Z:"z",CHAR_LEFT_PARENTHESES:"(",CHAR_RIGHT_PARENTHESES:")",CHAR_ASTERISK:"*",CHAR_AMPERSAND:"&",CHAR_AT:"@",CHAR_BACKSLASH:"\\",CHAR_BACKTICK:"`",CHAR_CARRIAGE_RETURN:"\r",CHAR_CIRCUMFLEX_ACCENT:"^",CHAR_COLON:":",CHAR_COMMA:",",CHAR_DOLLAR:"$",CHAR_DOT:".",CHAR_DOUBLE_QUOTE:'"',CHAR_EQUAL:"=",CHAR_EXCLAMATION_MARK:"!",CHAR_FORM_FEED:"\f",CHAR_FORWARD_SLASH:"/",CHAR_HASH:"#",CHAR_HYPHEN_MINUS:"-",CHAR_LEFT_ANGLE_BRACKET:"<",CHAR_LEFT_CURLY_BRACE:"{",CHAR_LEFT_SQUARE_BRACKET:"[",CHAR_LINE_FEED:"\n",CHAR_NO_BREAK_SPACE:" ",CHAR_PERCENT:"%",CHAR_PLUS:"+",CHAR_QUESTION_MARK:"?",CHAR_RIGHT_ANGLE_BRACKET:">",CHAR_RIGHT_CURLY_BRACE:"}",CHAR_RIGHT_SQUARE_BRACKET:"]",CHAR_SEMICOLON:";",CHAR_SINGLE_QUOTE:"'",CHAR_SPACE:" ",CHAR_TAB:"\t",CHAR_UNDERSCORE:"_",CHAR_VERTICAL_LINE:"|",CHAR_ZERO_WIDTH_NOBREAK_SPACE:"\ufeff"}},741:(e,t,n)=>{const r=n(824),o=n(339),s=n(117),i=(e="",t="",n=!1)=>{let r=[]
if(e=[].concat(e),!(t=[].concat(t)).length)return e
if(!e.length)return n?s.flatten(t).map(e=>`{${e}}`):t
for(let o of e)if(Array.isArray(o))for(let e of o)r.push(i(e,t,n))
else for(let e of t)!0===n&&"string"==typeof e&&(e=`{${e}}`),r.push(Array.isArray(e)?i(o,e,n):o+e)
return s.flatten(r)}
e.exports=(e,t={})=>{let n=void 0===t.rangeLimit?1e3:t.rangeLimit,u=(e,a={})=>{e.queue=[]
let c=a,l=a.queue
for(;"brace"!==c.type&&"root"!==c.type&&c.parent;)c=c.parent,l=c.queue
if(e.invalid||e.dollar)return void l.push(i(l.pop(),o(e,t)))
if("brace"===e.type&&!0!==e.invalid&&2===e.nodes.length)return void l.push(i(l.pop(),["{}"]))
if(e.nodes&&e.ranges>0){let u=s.reduce(e.nodes)
if(s.exceedsLimit(...u,t.step,n))throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.")
let a=r(...u,t)
return 0===a.length&&(a=o(e,t)),l.push(i(l.pop(),a)),void(e.nodes=[])}let p=s.encloseBrace(e),f=e.queue,h=e
for(;"brace"!==h.type&&"root"!==h.type&&h.parent;)h=h.parent,f=h.queue
for(let t=0;t<e.nodes.length;t++){let n=e.nodes[t]
"comma"!==n.type||"brace"!==e.type?"close"!==n.type?n.value&&"open"!==n.type?f.push(i(f.pop(),n.value)):n.nodes&&u(n,e):l.push(i(l.pop(),f,p)):(1===t&&f.push(""),f.push(""))}return f}
return s.flatten(u(e))}},833:(e,t,n)=>{const r=n(339),{MAX_LENGTH:o,CHAR_BACKSLASH:s,CHAR_BACKTICK:i,CHAR_COMMA:u,CHAR_DOT:a,CHAR_LEFT_PARENTHESES:c,CHAR_RIGHT_PARENTHESES:l,CHAR_LEFT_CURLY_BRACE:p,CHAR_RIGHT_CURLY_BRACE:f,CHAR_LEFT_SQUARE_BRACKET:h,CHAR_RIGHT_SQUARE_BRACKET:d,CHAR_DOUBLE_QUOTE:y,CHAR_SINGLE_QUOTE:g,CHAR_NO_BREAK_SPACE:b,CHAR_ZERO_WIDTH_NOBREAK_SPACE:m}=n(552)
e.exports=(e,t={})=>{if("string"!=typeof e)throw new TypeError("Expected a string")
let n=t||{},v="number"==typeof n.maxLength?Math.min(o,n.maxLength):o
if(e.length>v)throw new SyntaxError(`Input length (${e.length}), exceeds max characters (${v})`)
let A,R={type:"root",input:e,nodes:[]},E=[R],_=R,x=R,S=0,C=e.length,w=0,T=0
const H=()=>e[w++],O=e=>{if("text"===e.type&&"dot"===x.type&&(x.type="text"),!x||"text"!==x.type||"text"!==e.type)return _.nodes.push(e),e.parent=_,e.prev=x,x=e,e
x.value+=e.value}
for(O({type:"bos"});w<C;)if(_=E[E.length-1],A=H(),A!==m&&A!==b)if(A!==s)if(A!==d)if(A!==h)if(A!==c)if(A!==l)if(A!==y&&A!==g&&A!==i)if(A!==p)if(A!==f)if(A===u&&T>0){if(_.ranges>0){_.ranges=0
let e=_.nodes.shift()
_.nodes=[e,{type:"text",value:r(_)}]}O({type:"comma",value:A}),_.commas++}else if(A===a&&T>0&&0===_.commas){let e=_.nodes
if(0===T||0===e.length){O({type:"text",value:A})
continue}if("dot"===x.type){if(_.range=[],x.value+=A,x.type="range",3!==_.nodes.length&&5!==_.nodes.length){_.invalid=!0,_.ranges=0,x.type="text"
continue}_.ranges++,_.args=[]
continue}if("range"===x.type){e.pop()
let t=e[e.length-1]
t.value+=x.value+A,x=t,_.ranges--
continue}O({type:"dot",value:A})}else O({type:"text",value:A})
else{if("brace"!==_.type){O({type:"text",value:A})
continue}let e="close"
_=E.pop(),_.close=!0,O({type:e,value:A}),T--,_=E[E.length-1]}else{T++
let e=x.value&&"$"===x.value.slice(-1)||!0===_.dollar
_=O({type:"brace",open:!0,close:!1,dollar:e,depth:T,commas:0,ranges:0,nodes:[]}),E.push(_),O({type:"open",value:A})}else{let e,n=A
for(!0!==t.keepQuotes&&(A="");w<C&&(e=H());)if(e!==s){if(e===n){!0===t.keepQuotes&&(A+=e)
break}A+=e}else A+=e+H()
O({type:"text",value:A})}else{if("paren"!==_.type){O({type:"text",value:A})
continue}_=E.pop(),O({type:"text",value:A}),_=E[E.length-1]}else _=O({type:"paren",nodes:[]}),E.push(_),O({type:"text",value:A})
else{S++
let e
for(;w<C&&(e=H());)if(A+=e,e!==h)if(e!==s){if(e===d&&(S--,0===S))break}else A+=H()
else S++
O({type:"text",value:A})}else O({type:"text",value:"\\"+A})
else O({type:"text",value:(t.keepEscaping?A:"")+H()})
do{if(_=E.pop(),"root"!==_.type){_.nodes.forEach(e=>{e.nodes||("open"===e.type&&(e.isOpen=!0),"close"===e.type&&(e.isClose=!0),e.nodes||(e.type="text"),e.invalid=!0)})
let e=E[E.length-1],t=e.nodes.indexOf(_)
e.nodes.splice(t,1,..._.nodes)}}while(E.length>0)
return O({type:"eos"}),R}},339:(e,t,n)=>{const r=n(117)
e.exports=(e,t={})=>{let n=(e,o={})=>{let s=t.escapeInvalid&&r.isInvalidBrace(o),i=!0===e.invalid&&!0===t.escapeInvalid,u=""
if(e.value)return(s||i)&&r.isOpenOrClose(e)?"\\"+e.value:e.value
if(e.value)return e.value
if(e.nodes)for(let t of e.nodes)u+=n(t)
return u}
return n(e)}},117:(e,t)=>{t.isInteger=e=>"number"==typeof e?Number.isInteger(e):"string"==typeof e&&""!==e.trim()&&Number.isInteger(Number(e)),t.find=(e,t)=>e.nodes.find(e=>e.type===t),t.exceedsLimit=(e,n,r=1,o)=>!1!==o&&(!(!t.isInteger(e)||!t.isInteger(n))&&(Number(n)-Number(e))/Number(r)>=o),t.escapeNode=(e,t=0,n)=>{let r=e.nodes[t]
r&&(n&&r.type===n||"open"===r.type||"close"===r.type)&&!0!==r.escaped&&(r.value="\\"+r.value,r.escaped=!0)},t.encloseBrace=e=>"brace"===e.type&&(e.commas>>0+e.ranges>>0==0&&(e.invalid=!0,!0)),t.isInvalidBrace=e=>"brace"===e.type&&(!(!0!==e.invalid&&!e.dollar)||(e.commas>>0+e.ranges>>0==0||!0!==e.open||!0!==e.close)&&(e.invalid=!0,!0)),t.isOpenOrClose=e=>"open"===e.type||"close"===e.type||(!0===e.open||!0===e.close),t.reduce=e=>e.reduce((e,t)=>("text"===t.type&&e.push(t.value),"range"===t.type&&(t.type="text"),e),[]),t.flatten=(...e)=>{const t=[],n=e=>{for(let r=0;r<e.length;r++){let o=e[r]
Array.isArray(o)?n(o,t):void 0!==o&&t.push(o)}return t}
return n(e),t}},824:(e,t,n)=>{const r=n(669),o=n(466),s=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),i=e=>"number"==typeof e||"string"==typeof e&&""!==e,u=e=>Number.isInteger(+e),a=e=>{let t=""+e,n=-1
if("-"===t[0]&&(t=t.slice(1)),"0"===t)return!1
for(;"0"===t[++n];);return n>0},c=(e,t,n)=>{if(t>0){let n="-"===e[0]?"-":""
n&&(e=e.slice(1)),e=n+e.padStart(n?t-1:t,"0")}return!1===n?String(e):e},l=(e,t)=>{let n="-"===e[0]?"-":""
for(n&&(e=e.slice(1),t--);e.length<t;)e="0"+e
return n?"-"+e:e},p=(e,t,n,r)=>{if(n)return o(e,t,{wrap:!1,...r})
let s=String.fromCharCode(e)
return e===t?s:`[${s}-${String.fromCharCode(t)}]`},f=(e,t,n)=>{if(Array.isArray(e)){let t=!0===n.wrap,r=n.capture?"":"?:"
return t?`(${r}${e.join("|")})`:e.join("|")}return o(e,t,n)},h=(...e)=>new RangeError("Invalid range arguments: "+r.inspect(...e)),d=(e,t,n)=>{if(!0===n.strictRanges)throw h([e,t])
return[]},y=(e,t,n=1,r={})=>{let o=Number(e),s=Number(t)
if(!Number.isInteger(o)||!Number.isInteger(s)){if(!0===r.strictRanges)throw h([e,t])
return[]}0===o&&(o=0),0===s&&(s=0)
let i=o>s,u=String(e),d=String(t),y=String(n)
n=Math.max(Math.abs(n),1)
let g=a(u)||a(d)||a(y),b=g?Math.max(u.length,d.length,y.length):0,m=!1===g&&!1===((e,t,n)=>"string"==typeof e||"string"==typeof t||!0===n.stringify)(e,t,r),v=r.transform||(e=>t=>!0===e?Number(t):String(t))(m)
if(r.toRegex&&1===n)return p(l(e,b),l(t,b),!0,r)
let A={negatives:[],positives:[]},R=[],E=0
for(;i?o>=s:o<=s;)!0===r.toRegex&&n>1?A[(_=o)<0?"negatives":"positives"].push(Math.abs(_)):R.push(c(v(o,E),b,m)),o=i?o-n:o+n,E++
var _
return!0===r.toRegex?n>1?((e,t)=>{e.negatives.sort((e,t)=>e<t?-1:e>t?1:0),e.positives.sort((e,t)=>e<t?-1:e>t?1:0)
let n,r=t.capture?"":"?:",o="",s=""
return e.positives.length&&(o=e.positives.join("|")),e.negatives.length&&(s=`-(${r}${e.negatives.join("|")})`),n=o&&s?`${o}|${s}`:o||s,t.wrap?`(${r}${n})`:n})(A,r):f(R,null,{wrap:!1,...r}):R},g=(e,t,n,r={})=>{if(null==t&&i(e))return[e]
if(!i(e)||!i(t))return d(e,t,r)
if("function"==typeof n)return g(e,t,1,{transform:n})
if(s(n))return g(e,t,0,n)
let o={...r}
return!0===o.capture&&(o.wrap=!0),n=n||o.step||1,u(n)?u(e)&&u(t)?y(e,t,n,o):((e,t,n=1,r={})=>{if(!u(e)&&e.length>1||!u(t)&&t.length>1)return d(e,t,r)
let o=r.transform||(e=>String.fromCharCode(e)),s=(""+e).charCodeAt(0),i=(""+t).charCodeAt(0),a=s>i,c=Math.min(s,i),l=Math.max(s,i)
if(r.toRegex&&1===n)return p(c,l,!1,r)
let h=[],y=0
for(;a?s>=i:s<=i;)h.push(o(s,y)),s=a?s-n:s+n,y++
return!0===r.toRegex?f(h,null,{wrap:!1,options:r}):h})(e,t,Math.max(Math.abs(n),1),o):null==n||s(n)?g(e,t,1,n):((e,t)=>{if(!0===t.strictRanges)throw new TypeError(`Expected step "${e}" to be a number`)
return[]})(n,o)}
e.exports=g},751:(e,t,n)=>{const r=n(669),o=n(706),s=n(264),i=n(337),u=e=>"string"==typeof e&&(""===e||"./"===e),a=(e,t,n)=>{t=[].concat(t),e=[].concat(e)
let r=new Set,o=new Set,i=new Set,u=0,a=e=>{i.add(e.output),n&&n.onResult&&n.onResult(e)}
for(let i=0;i<t.length;i++){let c=s(String(t[i]),{...n,onResult:a},!0),l=c.state.negated||c.state.negatedExtglob
l&&u++
for(let t of e){let e=c(t,!0);(l?!e.isMatch:e.isMatch)&&(l?r.add(e.output):(r.delete(e.output),o.add(e.output)))}}let c=(u===t.length?[...i]:[...o]).filter(e=>!r.has(e))
if(n&&0===c.length){if(!0===n.failglob)throw new Error(`No matches found for "${t.join(", ")}"`)
if(!0===n.nonull||!0===n.nullglob)return n.unescape?t.map(e=>e.replace(/\\/g,"")):t}return c}
a.match=a,a.matcher=(e,t)=>s(e,t),a.any=a.isMatch=(e,t,n)=>s(t,n)(e),a.not=(e,t,n={})=>{t=[].concat(t).map(String)
let r=new Set,o=[],s=a(e,t,{...n,onResult:e=>{n.onResult&&n.onResult(e),o.push(e.output)}})
for(let e of o)s.includes(e)||r.add(e)
return[...r]},a.contains=(e,t,n)=>{if("string"!=typeof e)throw new TypeError(`Expected a string: "${r.inspect(e)}"`)
if(Array.isArray(t))return t.some(t=>a.contains(e,t,n))
if("string"==typeof t){if(u(e)||u(t))return!1
if(e.includes(t)||e.startsWith("./")&&e.slice(2).includes(t))return!0}return a.isMatch(e,t,{...n,contains:!0})},a.matchKeys=(e,t,n)=>{if(!i.isObject(e))throw new TypeError("Expected the first argument to be an object")
let r=a(Object.keys(e),t,n),o={}
for(let t of r)o[t]=e[t]
return o},a.some=(e,t,n)=>{let r=[].concat(e)
for(let e of[].concat(t)){let t=s(String(e),n)
if(r.some(e=>t(e)))return!0}return!1},a.every=(e,t,n)=>{let r=[].concat(e)
for(let e of[].concat(t)){let t=s(String(e),n)
if(!r.every(e=>t(e)))return!1}return!0},a.all=(e,t,n)=>{if("string"!=typeof e)throw new TypeError(`Expected a string: "${r.inspect(e)}"`)
return[].concat(t).every(t=>s(t,n)(e))},a.capture=(e,t,n)=>{let r=i.isWindows(n),o=s.makeRe(String(e),{...n,capture:!0}).exec(r?i.toPosixSlashes(t):t)
if(o)return o.slice(1).map(e=>void 0===e?"":e)},a.makeRe=(...e)=>s.makeRe(...e),a.scan=(...e)=>s.scan(...e),a.parse=(e,t)=>{let n=[]
for(let r of[].concat(e||[]))for(let e of o(String(r),t))n.push(s.parse(e,t))
return n},a.braces=(e,t)=>{if("string"!=typeof e)throw new TypeError("Expected a string")
return t&&!0===t.nobrace||!/\{.*\}/.test(e)?[e]:o(e,t)},a.braceExpand=(e,t)=>{if("string"!=typeof e)throw new TypeError("Expected a string")
return a.braces(e,{...t,expand:!0})},e.exports=a},264:(e,t,n)=>{e.exports=n(307)},448:(e,t,n)=>{const r=n(622),o={DOT_LITERAL:"\\.",PLUS_LITERAL:"\\+",QMARK_LITERAL:"\\?",SLASH_LITERAL:"\\/",ONE_CHAR:"(?=.)",QMARK:"[^/]",END_ANCHOR:"(?:\\/|$)",DOTS_SLASH:"\\.{1,2}(?:\\/|$)",NO_DOT:"(?!\\.)",NO_DOTS:"(?!(?:^|\\/)\\.{1,2}(?:\\/|$))",NO_DOT_SLASH:"(?!\\.{0,1}(?:\\/|$))",NO_DOTS_SLASH:"(?!\\.{1,2}(?:\\/|$))",QMARK_NO_DOT:"[^.\\/]",STAR:"[^/]*?",START_ANCHOR:"(?:^|\\/)"},s={...o,SLASH_LITERAL:"[\\\\/]",QMARK:"[^\\\\/]",STAR:"[^\\\\/]*?",DOTS_SLASH:"\\.{1,2}(?:[\\\\/]|$)",NO_DOT:"(?!\\.)",NO_DOTS:"(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",NO_DOT_SLASH:"(?!\\.{0,1}(?:[\\\\/]|$))",NO_DOTS_SLASH:"(?!\\.{1,2}(?:[\\\\/]|$))",QMARK_NO_DOT:"[^.\\\\/]",START_ANCHOR:"(?:^|[\\\\/])",END_ANCHOR:"(?:[\\\\/]|$)"}
e.exports={MAX_LENGTH:65536,POSIX_REGEX_SOURCE:{alnum:"a-zA-Z0-9",alpha:"a-zA-Z",ascii:"\\x00-\\x7F",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E ",punct:"\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"},REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,REPLACEMENTS:{"***":"*","**/**":"**","**/**/**":"**"},CHAR_0:48,CHAR_9:57,CHAR_UPPERCASE_A:65,CHAR_LOWERCASE_A:97,CHAR_UPPERCASE_Z:90,CHAR_LOWERCASE_Z:122,CHAR_LEFT_PARENTHESES:40,CHAR_RIGHT_PARENTHESES:41,CHAR_ASTERISK:42,CHAR_AMPERSAND:38,CHAR_AT:64,CHAR_BACKWARD_SLASH:92,CHAR_CARRIAGE_RETURN:13,CHAR_CIRCUMFLEX_ACCENT:94,CHAR_COLON:58,CHAR_COMMA:44,CHAR_DOT:46,CHAR_DOUBLE_QUOTE:34,CHAR_EQUAL:61,CHAR_EXCLAMATION_MARK:33,CHAR_FORM_FEED:12,CHAR_FORWARD_SLASH:47,CHAR_GRAVE_ACCENT:96,CHAR_HASH:35,CHAR_HYPHEN_MINUS:45,CHAR_LEFT_ANGLE_BRACKET:60,CHAR_LEFT_CURLY_BRACE:123,CHAR_LEFT_SQUARE_BRACKET:91,CHAR_LINE_FEED:10,CHAR_NO_BREAK_SPACE:160,CHAR_PERCENT:37,CHAR_PLUS:43,CHAR_QUESTION_MARK:63,CHAR_RIGHT_ANGLE_BRACKET:62,CHAR_RIGHT_CURLY_BRACE:125,CHAR_RIGHT_SQUARE_BRACKET:93,CHAR_SEMICOLON:59,CHAR_SINGLE_QUOTE:39,CHAR_SPACE:32,CHAR_TAB:9,CHAR_UNDERSCORE:95,CHAR_VERTICAL_LINE:124,CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,SEP:r.sep,extglobChars:e=>({"!":{type:"negate",open:"(?:(?!(?:",close:`))${e.STAR})`},"?":{type:"qmark",open:"(?:",close:")?"},"+":{type:"plus",open:"(?:",close:")+"},"*":{type:"star",open:"(?:",close:")*"},"@":{type:"at",open:"(?:",close:")"}}),globChars:e=>!0===e?s:o}},711:(e,t,n)=>{const r=n(448),o=n(337),{MAX_LENGTH:s,POSIX_REGEX_SOURCE:i,REGEX_NON_SPECIAL_CHARS:u,REGEX_SPECIAL_CHARS_BACKREF:a,REPLACEMENTS:c}=r,l=(e,t)=>{if("function"==typeof t.expandRange)return t.expandRange(...e,t)
e.sort()
const n=`[${e.join("-")}]`
try{new RegExp(n)}catch(t){return e.map(e=>o.escapeRegex(e)).join("..")}return n},p=(e,t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,f=(e,t)=>{if("string"!=typeof e)throw new TypeError("Expected a string")
e=c[e]||e
const n={...t},f="number"==typeof n.maxLength?Math.min(s,n.maxLength):s
let h=e.length
if(h>f)throw new SyntaxError(`Input length: ${h}, exceeds maximum allowed length: ${f}`)
const d={type:"bos",value:"",output:n.prepend||""},y=[d],g=n.capture?"":"?:",b=o.isWindows(t),m=r.globChars(b),v=r.extglobChars(m),{DOT_LITERAL:A,PLUS_LITERAL:R,SLASH_LITERAL:E,ONE_CHAR:_,DOTS_SLASH:x,NO_DOT:S,NO_DOT_SLASH:C,NO_DOTS_SLASH:w,QMARK:T,QMARK_NO_DOT:H,STAR:O,START_ANCHOR:L}=m,k=e=>`(${g}(?:(?!${L}${e.dot?x:A}).)*?)`,P=n.dot?"":S,$=n.dot?T:H
let B=!0===n.bash?k(n):O
n.capture&&(B=`(${B})`),"boolean"==typeof n.noext&&(n.noextglob=n.noext)
const N={input:e,index:-1,start:0,dot:!0===n.dot,consumed:"",output:"",prefix:"",backtrack:!1,negated:!1,brackets:0,braces:0,parens:0,quotes:0,globstar:!1,tokens:y}
e=o.removePrefix(e,N),h=e.length
const I=[],M=[],j=[]
let U,G=d
const D=()=>N.index===h-1,F=N.peek=(t=1)=>e[N.index+t],K=N.advance=()=>e[++N.index],q=()=>e.slice(N.index+1),Q=(e="",t=0)=>{N.consumed+=e,N.index+=t},z=e=>{N.output+=null!=e.output?e.output:e.value,Q(e.value)},X=()=>{let e=1
for(;"!"===F()&&("("!==F(2)||"?"===F(3));)K(),N.start++,e++
return e%2!=0&&(N.negated=!0,N.start++,!0)},W=e=>{N[e]++,j.push(e)},Z=e=>{N[e]--,j.pop()},V=e=>{if("globstar"===G.type){const t=N.braces>0&&("comma"===e.type||"brace"===e.type),n=!0===e.extglob||I.length&&("pipe"===e.type||"paren"===e.type)
"slash"===e.type||"paren"===e.type||t||n||(N.output=N.output.slice(0,-G.output.length),G.type="star",G.value="*",G.output=B,N.output+=G.output)}if(I.length&&"paren"!==e.type&&!v[e.value]&&(I[I.length-1].inner+=e.value),(e.value||e.output)&&z(e),G&&"text"===G.type&&"text"===e.type)return G.value+=e.value,void(G.output=(G.output||"")+e.value)
e.prev=G,y.push(e),G=e},Y=(e,t)=>{const r={...v[t],conditions:1,inner:""}
r.prev=G,r.parens=N.parens,r.output=N.output
const o=(n.capture?"(":"")+r.open
W("parens"),V({type:e,value:t,output:N.output?"":_}),V({type:"paren",extglob:!0,value:K(),output:o}),I.push(r)},J=e=>{let t=e.close+(n.capture?")":"")
if("negate"===e.type){let r=B
e.inner&&e.inner.length>1&&e.inner.includes("/")&&(r=k(n)),(r!==B||D()||/^\)+$/.test(q()))&&(t=e.close=")$))"+r),"bos"===e.prev.type&&D()&&(N.negatedExtglob=!0)}V({type:"paren",extglob:!0,value:U,output:t}),Z("parens")}
if(!1!==n.fastpaths&&!/(^[*!]|[/()[\]{}"])/.test(e)){let r=!1,s=e.replace(a,(e,t,n,o,s,i)=>"\\"===o?(r=!0,e):"?"===o?t?t+o+(s?T.repeat(s.length):""):0===i?$+(s?T.repeat(s.length):""):T.repeat(n.length):"."===o?A.repeat(n.length):"*"===o?t?t+o+(s?B:""):B:t?e:"\\"+e)
return!0===r&&(s=!0===n.unescape?s.replace(/\\/g,""):s.replace(/\\+/g,e=>e.length%2==0?"\\\\":e?"\\":"")),s===e&&!0===n.contains?(N.output=e,N):(N.output=o.wrapOutput(s,N,t),N)}for(;!D();){if(U=K(),"\0"===U)continue
if("\\"===U){const e=F()
if("/"===e&&!0!==n.bash)continue
if("."===e||";"===e)continue
if(!e){U+="\\",V({type:"text",value:U})
continue}const t=/^\\+/.exec(q())
let r=0
if(t&&t[0].length>2&&(r=t[0].length,N.index+=r,r%2!=0&&(U+="\\")),!0===n.unescape?U=K()||"":U+=K()||"",0===N.brackets){V({type:"text",value:U})
continue}}if(N.brackets>0&&("]"!==U||"["===G.value||"[^"===G.value)){if(!1!==n.posix&&":"===U){const e=G.value.slice(1)
if(e.includes("[")&&(G.posix=!0,e.includes(":"))){const e=G.value.lastIndexOf("["),t=G.value.slice(0,e),n=G.value.slice(e+2),r=i[n]
if(r){G.value=t+r,N.backtrack=!0,K(),d.output||1!==y.indexOf(G)||(d.output=_)
continue}}}("["===U&&":"!==F()||"-"===U&&"]"===F())&&(U="\\"+U),"]"!==U||"["!==G.value&&"[^"!==G.value||(U="\\"+U),!0===n.posix&&"!"===U&&"["===G.value&&(U="^"),G.value+=U,z({value:U})
continue}if(1===N.quotes&&'"'!==U){U=o.escapeRegex(U),G.value+=U,z({value:U})
continue}if('"'===U){N.quotes=1===N.quotes?0:1,!0===n.keepQuotes&&V({type:"text",value:U})
continue}if("("===U){W("parens"),V({type:"paren",value:U})
continue}if(")"===U){if(0===N.parens&&!0===n.strictBrackets)throw new SyntaxError(p("opening","("))
const e=I[I.length-1]
if(e&&N.parens===e.parens+1){J(I.pop())
continue}V({type:"paren",value:U,output:N.parens?")":"\\)"}),Z("parens")
continue}if("["===U){if(!0!==n.nobracket&&q().includes("]"))W("brackets")
else{if(!0!==n.nobracket&&!0===n.strictBrackets)throw new SyntaxError(p("closing","]"))
U="\\"+U}V({type:"bracket",value:U})
continue}if("]"===U){if(!0===n.nobracket||G&&"bracket"===G.type&&1===G.value.length){V({type:"text",value:U,output:"\\"+U})
continue}if(0===N.brackets){if(!0===n.strictBrackets)throw new SyntaxError(p("opening","["))
V({type:"text",value:U,output:"\\"+U})
continue}Z("brackets")
const e=G.value.slice(1)
if(!0===G.posix||"^"!==e[0]||e.includes("/")||(U="/"+U),G.value+=U,z({value:U}),!1===n.literalBrackets||o.hasRegexChars(e))continue
const t=o.escapeRegex(G.value)
if(N.output=N.output.slice(0,-G.value.length),!0===n.literalBrackets){N.output+=t,G.value=t
continue}G.value=`(${g}${t}|${G.value})`,N.output+=G.value
continue}if("{"===U&&!0!==n.nobrace){W("braces")
const e={type:"brace",value:U,output:"(",outputIndex:N.output.length,tokensIndex:N.tokens.length}
M.push(e),V(e)
continue}if("}"===U){const e=M[M.length-1]
if(!0===n.nobrace||!e){V({type:"text",value:U,output:U})
continue}let t=")"
if(!0===e.dots){const e=y.slice(),r=[]
for(let t=e.length-1;t>=0&&(y.pop(),"brace"!==e[t].type);t--)"dots"!==e[t].type&&r.unshift(e[t].value)
t=l(r,n),N.backtrack=!0}if(!0!==e.comma&&!0!==e.dots){const n=N.output.slice(0,e.outputIndex),r=N.tokens.slice(e.tokensIndex)
e.value=e.output="\\{",U=t="\\}",N.output=n
for(const e of r)N.output+=e.output||e.value}V({type:"brace",value:U,output:t}),Z("braces"),M.pop()
continue}if("|"===U){I.length>0&&I[I.length-1].conditions++,V({type:"text",value:U})
continue}if(","===U){let e=U
const t=M[M.length-1]
t&&"braces"===j[j.length-1]&&(t.comma=!0,e="|"),V({type:"comma",value:U,output:e})
continue}if("/"===U){if("dot"===G.type&&N.index===N.start+1){N.start=N.index+1,N.consumed="",N.output="",y.pop(),G=d
continue}V({type:"slash",value:U,output:E})
continue}if("."===U){if(N.braces>0&&"dot"===G.type){"."===G.value&&(G.output=A)
const e=M[M.length-1]
G.type="dots",G.output+=U,G.value+=U,e.dots=!0
continue}if(N.braces+N.parens===0&&"bos"!==G.type&&"slash"!==G.type){V({type:"text",value:U,output:A})
continue}V({type:"dot",value:U,output:A})
continue}if("?"===U){if(!(G&&"("===G.value)&&!0!==n.noextglob&&"("===F()&&"?"!==F(2)){Y("qmark",U)
continue}if(G&&"paren"===G.type){const e=F()
let t=U
if("<"===e&&!o.supportsLookbehinds())throw new Error("Node.js v10 or higher is required for regex lookbehinds");("("===G.value&&!/[!=<:]/.test(e)||"<"===e&&!/<([!=]|\w+>)/.test(q()))&&(t="\\"+U),V({type:"text",value:U,output:t})
continue}if(!0!==n.dot&&("slash"===G.type||"bos"===G.type)){V({type:"qmark",value:U,output:H})
continue}V({type:"qmark",value:U,output:T})
continue}if("!"===U){if(!0!==n.noextglob&&"("===F()&&("?"!==F(2)||!/[!=<:]/.test(F(3)))){Y("negate",U)
continue}if(!0!==n.nonegate&&0===N.index){X()
continue}}if("+"===U){if(!0!==n.noextglob&&"("===F()&&"?"!==F(2)){Y("plus",U)
continue}if(G&&"("===G.value||!1===n.regex){V({type:"plus",value:U,output:R})
continue}if(G&&("bracket"===G.type||"paren"===G.type||"brace"===G.type)||N.parens>0){V({type:"plus",value:U})
continue}V({type:"plus",value:R})
continue}if("@"===U){if(!0!==n.noextglob&&"("===F()&&"?"!==F(2)){V({type:"at",extglob:!0,value:U,output:""})
continue}V({type:"text",value:U})
continue}if("*"!==U){"$"!==U&&"^"!==U||(U="\\"+U)
const e=u.exec(q())
e&&(U+=e[0],N.index+=e[0].length),V({type:"text",value:U})
continue}if(G&&("globstar"===G.type||!0===G.star)){G.type="star",G.star=!0,G.value+=U,G.output=B,N.backtrack=!0,N.globstar=!0,Q(U)
continue}let t=q()
if(!0!==n.noextglob&&/^\([^?]/.test(t)){Y("star",U)
continue}if("star"===G.type){if(!0===n.noglobstar){Q(U)
continue}const r=G.prev,o=r.prev,s="slash"===r.type||"bos"===r.type,i=o&&("star"===o.type||"globstar"===o.type)
if(!0===n.bash&&(!s||t[0]&&"/"!==t[0])){V({type:"star",value:U,output:""})
continue}const u=N.braces>0&&("comma"===r.type||"brace"===r.type),a=I.length&&("pipe"===r.type||"paren"===r.type)
if(!s&&"paren"!==r.type&&!u&&!a){V({type:"star",value:U,output:""})
continue}for(;"/**"===t.slice(0,3);){const n=e[N.index+4]
if(n&&"/"!==n)break
t=t.slice(3),Q("/**",3)}if("bos"===r.type&&D()){G.type="globstar",G.value+=U,G.output=k(n),N.output=G.output,N.globstar=!0,Q(U)
continue}if("slash"===r.type&&"bos"!==r.prev.type&&!i&&D()){N.output=N.output.slice(0,-(r.output+G.output).length),r.output="(?:"+r.output,G.type="globstar",G.output=k(n)+(n.strictSlashes?")":"|$)"),G.value+=U,N.globstar=!0,N.output+=r.output+G.output,Q(U)
continue}if("slash"===r.type&&"bos"!==r.prev.type&&"/"===t[0]){const e=void 0!==t[1]?"|$":""
N.output=N.output.slice(0,-(r.output+G.output).length),r.output="(?:"+r.output,G.type="globstar",G.output=`${k(n)}${E}|${E}${e})`,G.value+=U,N.output+=r.output+G.output,N.globstar=!0,Q(U+K()),V({type:"slash",value:"/",output:""})
continue}if("bos"===r.type&&"/"===t[0]){G.type="globstar",G.value+=U,G.output=`(?:^|${E}|${k(n)}${E})`,N.output=G.output,N.globstar=!0,Q(U+K()),V({type:"slash",value:"/",output:""})
continue}N.output=N.output.slice(0,-G.output.length),G.type="globstar",G.output=k(n),G.value+=U,N.output+=G.output,N.globstar=!0,Q(U)
continue}const r={type:"star",value:U,output:B}
!0!==n.bash?!G||"bracket"!==G.type&&"paren"!==G.type||!0!==n.regex?(N.index!==N.start&&"slash"!==G.type&&"dot"!==G.type||("dot"===G.type?(N.output+=C,G.output+=C):!0===n.dot?(N.output+=w,G.output+=w):(N.output+=P,G.output+=P),"*"!==F()&&(N.output+=_,G.output+=_)),V(r)):(r.output=U,V(r)):(r.output=".*?","bos"!==G.type&&"slash"!==G.type||(r.output=P+r.output),V(r))}for(;N.brackets>0;){if(!0===n.strictBrackets)throw new SyntaxError(p("closing","]"))
N.output=o.escapeLast(N.output,"["),Z("brackets")}for(;N.parens>0;){if(!0===n.strictBrackets)throw new SyntaxError(p("closing",")"))
N.output=o.escapeLast(N.output,"("),Z("parens")}for(;N.braces>0;){if(!0===n.strictBrackets)throw new SyntaxError(p("closing","}"))
N.output=o.escapeLast(N.output,"{"),Z("braces")}if(!0===n.strictSlashes||"star"!==G.type&&"bracket"!==G.type||V({type:"maybe_slash",value:"",output:E+"?"}),!0===N.backtrack){N.output=""
for(const e of N.tokens)N.output+=null!=e.output?e.output:e.value,e.suffix&&(N.output+=e.suffix)}return N}
f.fastpaths=(e,t)=>{const n={...t},i="number"==typeof n.maxLength?Math.min(s,n.maxLength):s,u=e.length
if(u>i)throw new SyntaxError(`Input length: ${u}, exceeds maximum allowed length: ${i}`)
e=c[e]||e
const a=o.isWindows(t),{DOT_LITERAL:l,SLASH_LITERAL:p,ONE_CHAR:f,DOTS_SLASH:h,NO_DOT:d,NO_DOTS:y,NO_DOTS_SLASH:g,STAR:b,START_ANCHOR:m}=r.globChars(a),v=n.dot?y:d,A=n.dot?g:d,R=n.capture?"":"?:"
let E=!0===n.bash?".*?":b
n.capture&&(E=`(${E})`)
const _=e=>!0===e.noglobstar?E:`(${R}(?:(?!${m}${e.dot?h:l}).)*?)`,x=e=>{switch(e){case"*":return`${v}${f}${E}`
case".*":return`${l}${f}${E}`
case"*.*":return`${v}${E}${l}${f}${E}`
case"*/*":return`${v}${E}${p}${f}${A}${E}`
case"**":return v+_(n)
case"**/*":return`(?:${v}${_(n)}${p})?${A}${f}${E}`
case"**/*.*":return`(?:${v}${_(n)}${p})?${A}${E}${l}${f}${E}`
case"**/.*":return`(?:${v}${_(n)}${p})?${l}${f}${E}`
default:{const t=/^(.*?)\.(\w+)$/.exec(e)
if(!t)return
const n=x(t[1])
if(!n)return
return n+l+t[2]}}},S=o.removePrefix(e,{negated:!1,prefix:""})
let C=x(S)
return C&&!0!==n.strictSlashes&&(C+=p+"?"),C},e.exports=f},307:(e,t,n)=>{const r=n(622),o=n(142),s=n(711),i=n(337),u=n(448),a=(e,t,n=!1)=>{if(Array.isArray(e)){const r=e.map(e=>a(e,t,n))
return e=>{for(const t of r){const n=t(e)
if(n)return n}return!1}}const r=(o=e)&&"object"==typeof o&&!Array.isArray(o)&&e.tokens&&e.input
var o
if(""===e||"string"!=typeof e&&!r)throw new TypeError("Expected pattern to be a non-empty string")
const s=t||{},u=i.isWindows(t),c=r?a.compileRe(e,t):a.makeRe(e,t,!1,!0),l=c.state
delete c.state
let p=()=>!1
if(s.ignore){const e={...t,ignore:null,onMatch:null,onResult:null}
p=a(s.ignore,e,n)}const f=(n,r=!1)=>{const{isMatch:o,match:i,output:f}=a.test(n,c,t,{glob:e,posix:u}),h={glob:e,state:l,regex:c,posix:u,input:n,output:f,match:i,isMatch:o}
return"function"==typeof s.onResult&&s.onResult(h),!1===o?(h.isMatch=!1,!!r&&h):p(n)?("function"==typeof s.onIgnore&&s.onIgnore(h),h.isMatch=!1,!!r&&h):("function"==typeof s.onMatch&&s.onMatch(h),!r||h)}
return n&&(f.state=l),f}
a.test=(e,t,n,{glob:r,posix:o}={})=>{if("string"!=typeof e)throw new TypeError("Expected input to be a string")
if(""===e)return{isMatch:!1,output:""}
const s=n||{},u=s.format||(o?i.toPosixSlashes:null)
let c=e===r,l=c&&u?u(e):e
return!1===c&&(l=u?u(e):e,c=l===r),!1!==c&&!0!==s.capture||(c=!0===s.matchBase||!0===s.basename?a.matchBase(e,t,n,o):t.exec(l)),{isMatch:Boolean(c),match:c,output:l}},a.matchBase=(e,t,n,o=i.isWindows(n))=>(t instanceof RegExp?t:a.makeRe(t,n)).test(r.basename(e)),a.isMatch=(e,t,n)=>a(t,n)(e),a.parse=(e,t)=>Array.isArray(e)?e.map(e=>a.parse(e,t)):s(e,{...t,fastpaths:!1}),a.scan=(e,t)=>o(e,t),a.compileRe=(e,t,n=!1,r=!1)=>{if(!0===n)return e.output
const o=t||{},s=o.contains?"":"^",i=o.contains?"":"$"
let u=`${s}(?:${e.output})${i}`
e&&!0===e.negated&&(u=`^(?!${u}).*$`)
const c=a.toRegex(u,t)
return!0===r&&(c.state=e),c},a.makeRe=(e,t,n=!1,r=!1)=>{if(!e||"string"!=typeof e)throw new TypeError("Expected a non-empty string")
const o=t||{}
let i,u={negated:!1,fastpaths:!0},c=""
return e.startsWith("./")&&(e=e.slice(2),c=u.prefix="./"),!1===o.fastpaths||"."!==e[0]&&"*"!==e[0]||(i=s.fastpaths(e,t)),void 0===i?(u=s(e,t),u.prefix=c+(u.prefix||"")):u.output=i,a.compileRe(u,t,n,r)},a.toRegex=(e,t)=>{try{const n=t||{}
return new RegExp(e,n.flags||(n.nocase?"i":""))}catch(e){if(t&&!0===t.debug)throw e
return/$^/}},a.constants=u,e.exports=a},142:(e,t,n)=>{const r=n(337),{CHAR_ASTERISK:o,CHAR_AT:s,CHAR_BACKWARD_SLASH:i,CHAR_COMMA:u,CHAR_DOT:a,CHAR_EXCLAMATION_MARK:c,CHAR_FORWARD_SLASH:l,CHAR_LEFT_CURLY_BRACE:p,CHAR_LEFT_PARENTHESES:f,CHAR_LEFT_SQUARE_BRACKET:h,CHAR_PLUS:d,CHAR_QUESTION_MARK:y,CHAR_RIGHT_CURLY_BRACE:g,CHAR_RIGHT_PARENTHESES:b,CHAR_RIGHT_SQUARE_BRACKET:m}=n(448),v=e=>e===l||e===i,A=e=>{!0!==e.isPrefix&&(e.depth=e.isGlobstar?1/0:1)}
e.exports=(e,t)=>{const n=t||{},R=e.length-1,E=!0===n.parts||!0===n.scanToEnd,_=[],x=[],S=[]
let C,w,T=e,H=-1,O=0,L=0,k=!1,P=!1,$=!1,B=!1,N=!1,I=!1,M=!1,j=!1,U=!1,G=0,D={value:"",depth:0,isGlob:!1}
const F=()=>H>=R,K=()=>(C=w,T.charCodeAt(++H))
for(;H<R;){let e
if(w=K(),w!==i){if(!0===I||w===p){for(G++;!0!==F()&&(w=K());)if(w!==i)if(w!==p){if(!0!==I&&w===a&&(w=K())===a){if(k=D.isBrace=!0,$=D.isGlob=!0,U=!0,!0===E)continue
break}if(!0!==I&&w===u){if(k=D.isBrace=!0,$=D.isGlob=!0,U=!0,!0===E)continue
break}if(w===g&&(G--,0===G)){I=!1,k=D.isBrace=!0,U=!0
break}}else G++
else M=D.backslashes=!0,K()
if(!0===E)continue
break}if(w!==l){if(!0!==n.noext){if(!0===(w===d||w===s||w===o||w===y||w===c)&&T.charCodeAt(H+1)===f){if($=D.isGlob=!0,B=D.isExtglob=!0,U=!0,!0===E){for(;!0!==F()&&(w=K());)if(w!==i){if(w===b){$=D.isGlob=!0,U=!0
break}}else M=D.backslashes=!0,w=K()
continue}break}}if(w===o){if(C===o&&(N=D.isGlobstar=!0),$=D.isGlob=!0,U=!0,!0===E)continue
break}if(w===y){if($=D.isGlob=!0,U=!0,!0===E)continue
break}if(w===h)for(;!0!==F()&&(e=K());)if(e!==i){if(e===m){if(P=D.isBracket=!0,$=D.isGlob=!0,U=!0,!0===E)continue
break}}else M=D.backslashes=!0,K()
if(!0===n.nonegate||w!==c||H!==O){if(!0!==n.noparen&&w===f){if($=D.isGlob=!0,!0===E){for(;!0!==F()&&(w=K());)if(w!==f){if(w===b){U=!0
break}}else M=D.backslashes=!0,w=K()
continue}break}if(!0===$){if(U=!0,!0===E)continue
break}}else j=D.negated=!0,O++}else{if(_.push(H),x.push(D),D={value:"",depth:0,isGlob:!1},!0===U)continue
if(C===a&&H===O+1){O+=2
continue}L=H+1}}else M=D.backslashes=!0,w=K(),w===p&&(I=!0)}!0===n.noext&&(B=!1,$=!1)
let q=T,Q="",z=""
O>0&&(Q=T.slice(0,O),T=T.slice(O),L-=O),q&&!0===$&&L>0?(q=T.slice(0,L),z=T.slice(L)):!0===$?(q="",z=T):q=T,q&&""!==q&&"/"!==q&&q!==T&&v(q.charCodeAt(q.length-1))&&(q=q.slice(0,-1)),!0===n.unescape&&(z&&(z=r.removeBackslashes(z)),q&&!0===M&&(q=r.removeBackslashes(q)))
const X={prefix:Q,input:e,start:O,base:q,glob:z,isBrace:k,isBracket:P,isGlob:$,isExtglob:B,isGlobstar:N,negated:j}
if(!0===n.tokens&&(X.maxDepth=0,v(w)||x.push(D),X.tokens=x),!0===n.parts||!0===n.tokens){let t
for(let r=0;r<_.length;r++){const o=t?t+1:O,s=_[r],i=e.slice(o,s)
n.tokens&&(0===r&&0!==O?(x[r].isPrefix=!0,x[r].value=Q):x[r].value=i,A(x[r]),X.maxDepth+=x[r].depth),0===r&&""===i||S.push(i),t=s}if(t&&t+1<e.length){const r=e.slice(t+1)
S.push(r),n.tokens&&(x[x.length-1].value=r,A(x[x.length-1]),X.maxDepth+=x[x.length-1].depth)}X.slashes=_,X.parts=S}return X}},337:(e,t,n)=>{const r=n(622),o="win32"===process.platform,{REGEX_BACKSLASH:s,REGEX_REMOVE_BACKSLASH:i,REGEX_SPECIAL_CHARS:u,REGEX_SPECIAL_CHARS_GLOBAL:a}=n(448)
t.isObject=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),t.hasRegexChars=e=>u.test(e),t.isRegexChar=e=>1===e.length&&t.hasRegexChars(e),t.escapeRegex=e=>e.replace(a,"\\$1"),t.toPosixSlashes=e=>e.replace(s,"/"),t.removeBackslashes=e=>e.replace(i,e=>"\\"===e?"":e),t.supportsLookbehinds=()=>{const e=process.version.slice(1).split(".").map(Number)
return 3===e.length&&e[0]>=9||8===e[0]&&e[1]>=10},t.isWindows=e=>e&&"boolean"==typeof e.windows?e.windows:!0===o||"\\"===r.sep,t.escapeLast=(e,n,r)=>{const o=e.lastIndexOf(n,r)
return-1===o?e:"\\"===e[o-1]?t.escapeLast(e,n,o-1):`${e.slice(0,o)}\\${e.slice(o)}`},t.removePrefix=(e,t={})=>{let n=e
return n.startsWith("./")&&(n=n.slice(2),t.prefix="./"),n},t.wrapOutput=(e,t={},n={})=>{let r=`${n.contains?"":"^"}(?:${e})${n.contains?"":"$"}`
return!0===t.negated&&(r=`(?:^(?!${r}).*$)`),r}},466:(e,t,n)=>{const r=n(193),o=(e,t,n)=>{if(!1===r(e))throw new TypeError("toRegexRange: expected the first argument to be a number")
if(void 0===t||e===t)return String(e)
if(!1===r(t))throw new TypeError("toRegexRange: expected the second argument to be a number.")
let s={relaxZeros:!0,...n}
"boolean"==typeof s.strictZeros&&(s.relaxZeros=!1===s.strictZeros)
let a=e+":"+t+"="+String(s.relaxZeros)+String(s.shorthand)+String(s.capture)+String(s.wrap)
if(o.cache.hasOwnProperty(a))return o.cache[a].result
let c=Math.min(e,t),l=Math.max(e,t)
if(1===Math.abs(c-l)){let n=e+"|"+t
return s.capture?`(${n})`:!1===s.wrap?n:`(?:${n})`}let p=d(e)||d(t),f={min:e,max:t,a:c,b:l},h=[],y=[]
if(p&&(f.isPadded=p,f.maxLen=String(f.max).length),c<0){y=i(l<0?Math.abs(l):1,Math.abs(c),f,s),c=f.a=0}return l>=0&&(h=i(c,l,f,s)),f.negatives=y,f.positives=h,f.result=function(e,t,n){let r=u(e,t,"-",!1,n)||[],o=u(t,e,"",!1,n)||[],s=u(e,t,"-?",!0,n)||[]
return r.concat(s).concat(o).join("|")}(y,h,s),!0===s.capture?f.result=`(${f.result})`:!1!==s.wrap&&h.length+y.length>1&&(f.result=`(?:${f.result})`),o.cache[a]=f,f.result}
function s(e,t,n){if(e===t)return{pattern:e,count:[],digits:0}
let r=function(e,t){let n=[]
for(let r=0;r<e.length;r++)n.push([e[r],t[r]])
return n}(e,t),o=r.length,s="",i=0
for(let e=0;e<o;e++){let[t,o]=r[e]
t===o?s+=t:"0"!==t||"9"!==o?s+=h(t,o,n):i++}return i&&(s+=!0===n.shorthand?"\\d":"[0-9]"),{pattern:s,count:[i],digits:o}}function i(e,t,n,r){let o,i=function(e,t){let n=1,r=1,o=l(e,n),s=new Set([t])
for(;e<=o&&o<=t;)s.add(o),n+=1,o=l(e,n)
for(o=p(t+1,r)-1;e<o&&o<=t;)s.add(o),r+=1,o=p(t+1,r)-1
return s=[...s],s.sort(a),s}(e,t),u=[],c=e
for(let e=0;e<i.length;e++){let t=i[e],a=s(String(c),String(t),r),l=""
n.isPadded||!o||o.pattern!==a.pattern?(n.isPadded&&(l=y(t,n,r)),a.string=l+a.pattern+f(a.count),u.push(a),c=t+1,o=a):(o.count.length>1&&o.count.pop(),o.count.push(a.count[0]),o.string=o.pattern+f(o.count),c=t+1)}return u}function u(e,t,n,r,o){let s=[]
for(let o of e){let{string:e}=o
r||c(t,"string",e)||s.push(n+e),r&&c(t,"string",e)&&s.push(n+e)}return s}function a(e,t){return e>t?1:t>e?-1:0}function c(e,t,n){return e.some(e=>e[t]===n)}function l(e,t){return Number(String(e).slice(0,-t)+"9".repeat(t))}function p(e,t){return e-e%Math.pow(10,t)}function f(e){let[t=0,n=""]=e
return n||t>1?`{${t+(n?","+n:"")}}`:""}function h(e,t,n){return`[${e}${t-e==1?"":"-"}${t}]`}function d(e){return/^-?(0+)\d/.test(e)}function y(e,t,n){if(!t.isPadded)return e
let r=Math.abs(t.maxLen-String(e).length),o=!1!==n.relaxZeros
switch(r){case 0:return""
case 1:return o?"0?":"0"
case 2:return o?"0{0,2}":"00"
default:return o?`0{0,${r}}`:`0{${r}}`}}o.cache={},o.clearCache=()=>o.cache={},e.exports=o},193:e=>{e.exports=function(e){return"number"==typeof e?e-e==0:"string"==typeof e&&""!==e.trim()&&(Number.isFinite?Number.isFinite(+e):isFinite(+e))}},129:e=>{e.exports=require("child_process")},747:e=>{e.exports=require("fs")},605:e=>{e.exports=require("http")},211:e=>{e.exports=require("https")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},413:e=>{e.exports=require("stream")},835:e=>{e.exports=require("url")},669:e=>{e.exports=require("util")},761:e=>{e.exports=require("zlib")}},t={}
function n(r){if(t[r])return t[r].exports
var o=t[r]={exports:{}}
return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(129),t=n(747),r=n.n(t),o=n(622),s=n.n(o),i=n(413),u=n.n(i),a=n(516),c=n(751),l=n.n(c),p=n(605),f=n.n(p),h=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function u(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}a((r=r.apply(e,t||[])).next())}))},d=function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o
switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s
break
case 4:return i.label++,{value:s[1],done:!1}
case 5:i.label++,r=s[1],s=[0]
continue
case 7:s=i.ops.pop(),i.trys.pop()
continue
default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0
continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1]
break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s
break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s)
break}o[2]&&i.ops.pop(),i.trys.pop()
continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}
const y=function(){return h(void 0,void 0,void 0,(function(){var t,n,r,o
return d(this,(function(s){switch(s.label){case 0:return[4,h(void 0,void 0,void 0,(function(){return d(this,(function(t){return[2,new Promise((function(t,n){(0,e.exec)("git diff -U0 --minimal origin/master",(function(e,r){return e?n(e):t(r)}))}))]}))}))]
case 1:for(t=s.sent().split(/^diff --git.* b\/(.*)\n(?:.*\n){4}/gm),n=[],r=1;r<t.length;r+=2)(o=t[r+1].split("\n").filter((function(e){return e.startsWith("+")}))).length>0&&n.push({filePath:t[r],content:o})
return[2,n]}}))}))}
var g=n(835),b=n.n(g),m=n(211),v=n.n(m),A=n(761),R=n.n(A)
const E=u().Readable,_=Symbol("buffer"),x=Symbol("type")
class S{constructor(){this[x]=""
const e=arguments[0],t=arguments[1],n=[]
let r=0
if(e){const t=e,o=Number(t.length)
for(let e=0;e<o;e++){const o=t[e]
let s
s=o instanceof Buffer?o:ArrayBuffer.isView(o)?Buffer.from(o.buffer,o.byteOffset,o.byteLength):o instanceof ArrayBuffer?Buffer.from(o):o instanceof S?o[_]:Buffer.from("string"==typeof o?o:String(o)),r+=s.length,n.push(s)}}this[_]=Buffer.concat(n)
let o=t&&void 0!==t.type&&String(t.type).toLowerCase()
o&&!/[^\u0020-\u007E]/.test(o)&&(this[x]=o)}get size(){return this[_].length}get type(){return this[x]}text(){return Promise.resolve(this[_].toString())}arrayBuffer(){const e=this[_],t=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)
return Promise.resolve(t)}stream(){const e=new E
return e._read=function(){},e.push(this[_]),e.push(null),e}toString(){return"[object Blob]"}slice(){const e=this.size,t=arguments[0],n=arguments[1]
let r,o
r=void 0===t?0:t<0?Math.max(e+t,0):Math.min(t,e),o=void 0===n?e:n<0?Math.max(e+n,0):Math.min(n,e)
const s=Math.max(o-r,0),i=this[_].slice(r,r+s),u=new S([],{type:arguments[2]})
return u[_]=i,u}}function C(e,t,n){Error.call(this,e),this.message=e,this.type=t,n&&(this.code=this.errno=n.code),Error.captureStackTrace(this,this.constructor)}let w
Object.defineProperties(S.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}}),Object.defineProperty(S.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0}),C.prototype=Object.create(Error.prototype),C.prototype.constructor=C,C.prototype.name="FetchError"
try{w=Object(function(){var e=new Error("Cannot find module 'encoding'")
throw e.code="MODULE_NOT_FOUND",e}())}catch(e){}const T=Symbol("Body internals"),H=u().PassThrough
function O(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.size
let o=void 0===r?0:r
var s=n.timeout
let i=void 0===s?0:s
null==e?e=null:k(e)?e=Buffer.from(e.toString()):P(e)||Buffer.isBuffer(e)||("[object ArrayBuffer]"===Object.prototype.toString.call(e)?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof u()||(e=Buffer.from(String(e)))),this[T]={body:e,disturbed:!1,error:null},this.size=o,this.timeout=i,e instanceof u()&&e.on("error",(function(e){const n="AbortError"===e.name?e:new C(`Invalid response body while trying to fetch ${t.url}: ${e.message}`,"system",e)
t[T].error=n}))}function L(){var e=this
if(this[T].disturbed)return O.Promise.reject(new TypeError("body used already for: "+this.url))
if(this[T].disturbed=!0,this[T].error)return O.Promise.reject(this[T].error)
let t=this.body
if(null===t)return O.Promise.resolve(Buffer.alloc(0))
if(P(t)&&(t=t.stream()),Buffer.isBuffer(t))return O.Promise.resolve(t)
if(!(t instanceof u()))return O.Promise.resolve(Buffer.alloc(0))
let n=[],r=0,o=!1
return new O.Promise((function(s,i){let u
e.timeout&&(u=setTimeout((function(){o=!0,i(new C(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))}),e.timeout)),t.on("error",(function(t){"AbortError"===t.name?(o=!0,i(t)):i(new C(`Invalid response body while trying to fetch ${e.url}: ${t.message}`,"system",t))})),t.on("data",(function(t){if(!o&&null!==t){if(e.size&&r+t.length>e.size)return o=!0,void i(new C(`content size at ${e.url} over limit: ${e.size}`,"max-size"))
r+=t.length,n.push(t)}})),t.on("end",(function(){if(!o){clearTimeout(u)
try{s(Buffer.concat(n,r))}catch(t){i(new C(`Could not create Buffer from response body for ${e.url}: ${t.message}`,"system",t))}}}))}))}function k(e){return"object"==typeof e&&"function"==typeof e.append&&"function"==typeof e.delete&&"function"==typeof e.get&&"function"==typeof e.getAll&&"function"==typeof e.has&&"function"==typeof e.set&&("URLSearchParams"===e.constructor.name||"[object URLSearchParams]"===Object.prototype.toString.call(e)||"function"==typeof e.sort)}function P(e){return"object"==typeof e&&"function"==typeof e.arrayBuffer&&"string"==typeof e.type&&"function"==typeof e.stream&&"function"==typeof e.constructor&&"string"==typeof e.constructor.name&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function $(e){let t,n,r=e.body
if(e.bodyUsed)throw new Error("cannot clone body after it is used")
return r instanceof u()&&"function"!=typeof r.getBoundary&&(t=new H,n=new H,r.pipe(t),r.pipe(n),e[T].body=t,r=n),r}function B(e){return null===e?null:"string"==typeof e?"text/plain;charset=UTF-8":k(e)?"application/x-www-form-urlencoded;charset=UTF-8":P(e)?e.type||null:Buffer.isBuffer(e)||"[object ArrayBuffer]"===Object.prototype.toString.call(e)||ArrayBuffer.isView(e)?null:"function"==typeof e.getBoundary?"multipart/form-data;boundary="+e.getBoundary():e instanceof u()?null:"text/plain;charset=UTF-8"}function N(e){const t=e.body
return null===t?0:P(t)?t.size:Buffer.isBuffer(t)?t.length:t&&"function"==typeof t.getLengthSync&&(t._lengthRetrievers&&0==t._lengthRetrievers.length||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}O.prototype={get body(){return this[T].body},get bodyUsed(){return this[T].disturbed},arrayBuffer(){return L.call(this).then((function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}))},blob(){let e=this.headers&&this.headers.get("content-type")||""
return L.call(this).then((function(t){return Object.assign(new S([],{type:e.toLowerCase()}),{[_]:t})}))},json(){var e=this
return L.call(this).then((function(t){try{return JSON.parse(t.toString())}catch(t){return O.Promise.reject(new C(`invalid json response body at ${e.url} reason: ${t.message}`,"invalid-json"))}}))},text(){return L.call(this).then((function(e){return e.toString()}))},buffer(){return L.call(this)},textConverted(){var e=this
return L.call(this).then((function(t){return function(e,t){if("function"!=typeof w)throw new Error("The package `encoding` must be installed to use the textConverted() function")
const n=t.get("content-type")
let r,o,s="utf-8"
n&&(r=/charset=([^;]*)/i.exec(n))
o=e.slice(0,1024).toString(),!r&&o&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(o))
!r&&o&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),r&&(r=/charset=(.*)/i.exec(r.pop())))
!r&&o&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o))
r&&(s=r.pop(),"gb2312"!==s&&"gbk"!==s||(s="gb18030"))
return w(e,"UTF-8",s).toString()}(t,e.headers)}))}},Object.defineProperties(O.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}}),O.mixIn=function(e){for(const t of Object.getOwnPropertyNames(O.prototype))if(!(t in e)){const n=Object.getOwnPropertyDescriptor(O.prototype,t)
Object.defineProperty(e,t,n)}},O.Promise=global.Promise
const I=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,M=/[^\t\x20-\x7e\x80-\xff]/
function j(e){if(e=""+e,I.test(e)||""===e)throw new TypeError(e+" is not a legal HTTP header name")}function U(e){if(e=""+e,M.test(e))throw new TypeError(e+" is not a legal HTTP header value")}function G(e,t){t=t.toLowerCase()
for(const n in e)if(n.toLowerCase()===t)return n}const D=Symbol("map")
class F{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0
if(this[D]=Object.create(null),e instanceof F){const t=e.raw(),n=Object.keys(t)
for(const e of n)for(const n of t[e])this.append(e,n)}else if(null==e);else{if("object"!=typeof e)throw new TypeError("Provided initializer must be an object")
{const t=e[Symbol.iterator]
if(null!=t){if("function"!=typeof t)throw new TypeError("Header pairs must be iterable")
const n=[]
for(const t of e){if("object"!=typeof t||"function"!=typeof t[Symbol.iterator])throw new TypeError("Each header pair must be iterable")
n.push(Array.from(t))}for(const e of n){if(2!==e.length)throw new TypeError("Each header pair must be a name/value tuple")
this.append(e[0],e[1])}}else for(const t of Object.keys(e)){const n=e[t]
this.append(t,n)}}}}get(e){j(e=""+e)
const t=G(this[D],e)
return void 0===t?null:this[D][t].join(", ")}forEach(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=K(this),r=0
for(;r<n.length;){var o=n[r]
const s=o[0],i=o[1]
e.call(t,i,s,this),n=K(this),r++}}set(e,t){t=""+t,j(e=""+e),U(t)
const n=G(this[D],e)
this[D][void 0!==n?n:e]=[t]}append(e,t){t=""+t,j(e=""+e),U(t)
const n=G(this[D],e)
void 0!==n?this[D][n].push(t):this[D][e]=[t]}has(e){return j(e=""+e),void 0!==G(this[D],e)}delete(e){j(e=""+e)
const t=G(this[D],e)
void 0!==t&&delete this[D][t]}raw(){return this[D]}keys(){return Q(this,"key")}values(){return Q(this,"value")}[Symbol.iterator](){return Q(this,"key+value")}}function K(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key+value"
const n=Object.keys(e[D]).sort()
return n.map("key"===t?function(e){return e.toLowerCase()}:"value"===t?function(t){return e[D][t].join(", ")}:function(t){return[t.toLowerCase(),e[D][t].join(", ")]})}F.prototype.entries=F.prototype[Symbol.iterator],Object.defineProperty(F.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(F.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}})
const q=Symbol("internal")
function Q(e,t){const n=Object.create(z)
return n[q]={target:e,kind:t,index:0},n}const z=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==z)throw new TypeError("Value of `this` is not a HeadersIterator")
var e=this[q]
const t=e.target,n=e.kind,r=e.index,o=K(t,n)
return r>=o.length?{value:void 0,done:!0}:(this[q].index=r+1,{value:o[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())))
function X(e){const t=Object.assign({__proto__:null},e[D]),n=G(e[D],"Host")
return void 0!==n&&(t[n]=t[n][0]),t}Object.defineProperty(z,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0})
const W=Symbol("Response internals"),Z=f().STATUS_CODES
class V{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
O.call(this,e,t)
const n=t.status||200,r=new F(t.headers)
if(null!=e&&!r.has("Content-Type")){const t=B(e)
t&&r.append("Content-Type",t)}this[W]={url:t.url,status:n,statusText:t.statusText||Z[n],headers:r,counter:t.counter}}get url(){return this[W].url||""}get status(){return this[W].status}get ok(){return this[W].status>=200&&this[W].status<300}get redirected(){return this[W].counter>0}get statusText(){return this[W].statusText}get headers(){return this[W].headers}clone(){return new V($(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}}O.mixIn(V.prototype),Object.defineProperties(V.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}}),Object.defineProperty(V.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0})
const Y=Symbol("Request internals"),J=b().parse,ee=b().format,te="destroy"in u().Readable.prototype
function ne(e){return"object"==typeof e&&"object"==typeof e[Y]}class re{constructor(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
ne(e)?t=J(e.url):(t=e&&e.href?J(e.href):J(""+e),e={})
let r=n.method||e.method||"GET"
if(r=r.toUpperCase(),(null!=n.body||ne(e)&&null!==e.body)&&("GET"===r||"HEAD"===r))throw new TypeError("Request with GET/HEAD method cannot have body")
let o=null!=n.body?n.body:ne(e)&&null!==e.body?$(e):null
O.call(this,o,{timeout:n.timeout||e.timeout||0,size:n.size||e.size||0})
const s=new F(n.headers||e.headers||{})
if(null!=o&&!s.has("Content-Type")){const e=B(o)
e&&s.append("Content-Type",e)}let i=ne(e)?e.signal:null
if("signal"in n&&(i=n.signal),null!=i&&!function(e){const t=e&&"object"==typeof e&&Object.getPrototypeOf(e)
return!(!t||"AbortSignal"!==t.constructor.name)}(i))throw new TypeError("Expected signal to be an instanceof AbortSignal")
this[Y]={method:r,redirect:n.redirect||e.redirect||"follow",headers:s,parsedURL:t,signal:i},this.follow=void 0!==n.follow?n.follow:void 0!==e.follow?e.follow:20,this.compress=void 0!==n.compress?n.compress:void 0===e.compress||e.compress,this.counter=n.counter||e.counter||0,this.agent=n.agent||e.agent}get method(){return this[Y].method}get url(){return ee(this[Y].parsedURL)}get headers(){return this[Y].headers}get redirect(){return this[Y].redirect}get signal(){return this[Y].signal}clone(){return new re(this)}}function oe(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}O.mixIn(re.prototype),Object.defineProperty(re.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(re.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}}),oe.prototype=Object.create(Error.prototype),oe.prototype.constructor=oe,oe.prototype.name="AbortError"
const se=u().PassThrough,ie=b().resolve
function ue(e,t){if(!ue.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative")
return O.Promise=ue.Promise,new ue.Promise((function(n,r){const o=new re(e,t),s=function(e){const t=e[Y].parsedURL,n=new F(e[Y].headers)
if(n.has("Accept")||n.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported")
if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported")
if(e.signal&&e.body instanceof u().Readable&&!te)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8")
let r=null
if(null==e.body&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),null!=e.body){const t=N(e)
"number"==typeof t&&(r=String(t))}r&&n.set("Content-Length",r),n.has("User-Agent")||n.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!n.has("Accept-Encoding")&&n.set("Accept-Encoding","gzip,deflate")
let o=e.agent
return"function"==typeof o&&(o=o(t)),n.has("Connection")||o||n.set("Connection","close"),Object.assign({},t,{method:e.method,headers:X(n),agent:o})}(o),i=("https:"===s.protocol?v():f()).request,a=o.signal
let c=null
const l=function(){let e=new oe("The user aborted a request.")
r(e),o.body&&o.body instanceof u().Readable&&o.body.destroy(e),c&&c.body&&c.body.emit("error",e)}
if(a&&a.aborted)return void l()
const p=function(){l(),y()},h=i(s)
let d
function y(){h.abort(),a&&a.removeEventListener("abort",p),clearTimeout(d)}a&&a.addEventListener("abort",p),o.timeout&&h.once("socket",(function(e){d=setTimeout((function(){r(new C("network timeout at: "+o.url,"request-timeout")),y()}),o.timeout)})),h.on("error",(function(e){r(new C(`request to ${o.url} failed, reason: ${e.message}`,"system",e)),y()})),h.on("response",(function(e){clearTimeout(d)
const t=function(e){const t=new F
for(const n of Object.keys(e))if(!I.test(n))if(Array.isArray(e[n]))for(const r of e[n])M.test(r)||(void 0===t[D][n]?t[D][n]=[r]:t[D][n].push(r))
else M.test(e[n])||(t[D][n]=[e[n]])
return t}(e.headers)
if(ue.isRedirect(e.statusCode)){const s=t.get("Location"),i=null===s?null:ie(o.url,s)
switch(o.redirect){case"error":return r(new C("redirect mode is set to error: "+o.url,"no-redirect")),void y()
case"manual":if(null!==i)try{t.set("Location",i)}catch(e){r(e)}break
case"follow":if(null===i)break
if(o.counter>=o.follow)return r(new C("maximum redirect reached at: "+o.url,"max-redirect")),void y()
const s={headers:new F(o.headers),follow:o.follow,counter:o.counter+1,agent:o.agent,compress:o.compress,method:o.method,body:o.body,signal:o.signal,timeout:o.timeout}
return 303!==e.statusCode&&o.body&&null===N(o)?(r(new C("Cannot follow redirect with body being a readable stream","unsupported-redirect")),void y()):(303!==e.statusCode&&(301!==e.statusCode&&302!==e.statusCode||"POST"!==o.method)||(s.method="GET",s.body=void 0,s.headers.delete("content-length")),n(ue(new re(i,s))),void y())}}e.once("end",(function(){a&&a.removeEventListener("abort",p)}))
let s=e.pipe(new se)
const i={url:o.url,status:e.statusCode,statusText:e.statusMessage,headers:t,size:o.size,timeout:o.timeout,counter:o.counter},u=t.get("Content-Encoding")
if(!o.compress||"HEAD"===o.method||null===u||204===e.statusCode||304===e.statusCode)return c=new V(s,i),void n(c)
const l={flush:R().Z_SYNC_FLUSH,finishFlush:R().Z_SYNC_FLUSH}
if("gzip"==u||"x-gzip"==u)return s=s.pipe(R().createGunzip(l)),c=new V(s,i),void n(c)
if("deflate"!=u&&"x-deflate"!=u){if("br"==u&&"function"==typeof R().createBrotliDecompress)return s=s.pipe(R().createBrotliDecompress()),c=new V(s,i),void n(c)
c=new V(s,i),n(c)}else{e.pipe(new se).once("data",(function(e){s=8==(15&e[0])?s.pipe(R().createInflate()):s.pipe(R().createInflateRaw()),c=new V(s,i),n(c)}))}})),function(e,t){const n=t.body
null===n?e.end():P(n)?n.stream().pipe(e):Buffer.isBuffer(n)?(e.write(n),e.end()):n.pipe(e)}(h,o)}))}ue.isRedirect=function(e){return 301===e||302===e||303===e||307===e||308===e},ue.Promise=global.Promise
const ae=ue
var ce=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function u(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}a((r=r.apply(e,t||[])).next())}))},le=function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o
switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s
break
case 4:return i.label++,{value:s[1],done:!1}
case 5:i.label++,r=s[1],s=[0]
continue
case 7:s=i.ops.pop(),i.trys.pop()
continue
default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0
continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1]
break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s
break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s)
break}o[2]&&i.ops.pop(),i.trys.pop()
continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},pe={},fe=function(e){return ce(void 0,void 0,void 0,(function(){var t
return le(this,(function(n){return(t=pe[e])?[2,t]:(pe[e]=function(e){return ce(void 0,void 0,void 0,(function(){var t
return le(this,(function(n){switch(n.label){case 0:return[4,ae(e,{method:"HEAD"})]
case 1:return[2,405===(t=n.sent()).status?ae(e):t]}}))}))}(e),[2,pe[e]])}))}))}
const he=function(e){var t=e.link,n=e.url,r=e.linkIncludePatterns,o=e.linkExcludePatterns
return ce(void 0,void 0,void 0,(function(){var e,s,i,u,a
return le(this,(function(c){switch(c.label){case 0:if(!l().isMatch(t,r,{ignore:o,bash:!0}))return[3,5]
e=n.href,c.label=1
case 1:return c.trys.push([1,3,,4]),[4,fe(e)]
case 2:return s=c.sent(),i=s.status,u=s.ok,[2,{link:t,href:t===e?null:e,description:i,pass:u}]
case 3:return a=c.sent(),[2,{link:t,href:e,description:["Error",a.code&&" "+a.code,a.message&&": "+a.message].filter(Boolean).join(""),pass:!1}]
case 4:return[3,6]
case 5:return[2,{link:t,description:"Excluded",pass:!0}]
case 6:return[2]}}))}))}
var de=function(e,t,n){return void 0===n&&(n=function(e){return e[1]}),Array.from(e.matchAll(t),n)},ye=function(e,t){switch(s().extname(e)){case".md":case".mdx":return de(t,/\[.*?\]\((?:<((?:\(.*?\)|.)*?)>|((?:\(.*?\)|.)*?))(?: ["'].*?["'])?\)/gm,(function(e){return e[2]||e[1]}))
case".html":return de(t,/href="(.*?)"/gm)
case".json":return de(t,/"(?:(?:https?:)?\/\/)?(?:)"/gm)
default:return[]}}
const ge=function(e){var t=e.filePath,n=e.content
return(Array.isArray(n)?[].concat.apply([],n.map((function(e){return ye(t,e)}))):ye(t,n)).filter((function(e){return e&&!e.startsWith("#")}))}
var be=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function u(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}a((r=r.apply(e,t||[])).next())}))},me=function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o
switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s
break
case 4:return i.label++,{value:s[1],done:!1}
case 5:i.label++,r=s[1],s=[0]
continue
case 7:s=i.ops.pop(),i.trys.pop()
continue
default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0
continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1]
break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s
break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s)
break}o[2]&&i.ops.pop(),i.trys.pop()
continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}
function ve(e,t){return be(this,void 0,void 0,(function(){return me(this,(function(n){return[2,Promise.all(e.map(t))]}))}))}var Ae=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function u(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}a((r=r.apply(e,t||[])).next())}))},Re=function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o
switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s
break
case 4:return i.label++,{value:s[1],done:!1}
case 5:i.label++,r=s[1],s=[0]
continue
case 7:s=i.ops.pop(),i.trys.pop()
continue
default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0
continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1]
break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s
break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s)
break}o[2]&&i.ops.pop(),i.trys.pop()
continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},Ee=function(e,t){var n=e.filePath,r=e.content,o=t.rootURL,s=t.linkIncludePatterns,i=t.linkExcludePatterns
return Ae(void 0,void 0,void 0,(function(){var e,t
return Re(this,(function(u){switch(u.label){case 0:return e={filePath:n},[4,"function"==typeof r?r(n):r]
case 1:return e.content=u.sent(),[4,ve(ge(e),(function(e){return Ae(void 0,void 0,void 0,(function(){var t
return Re(this,(function(n){switch(n.label){case 0:return t=function(e,t){return new URL(/^(https?:\/)?\//.test(e)?e:"https://"+e,t)}(e,o),[4,he({link:e,url:t,linkIncludePatterns:s,linkExcludePatterns:i})]
case 1:return[2,n.sent()]}}))}))}))]
case 2:return t=u.sent().filter(Boolean),[2,{filePath:n,checks:t}]}}))}))},_e=function(e,t){return Ae(void 0,void 0,void 0,(function(){return Re(this,(function(n){switch(n.label){case 0:return[4,ve(e,(function(e){return Ee(e,t)}))]
case 1:return[2,n.sent().filter(Boolean)]}}))}))},xe=function(e){var t=e.checks,n=e.filePath
return"* "+(t.some((function(e){return!e.pass}))?"FAIL":"PASS")+": "+n+"\n"},Se=function(e){var t=e.link,n=e.href,r=e.description
return"  - "+(e.pass?"PASS":"FAIL")+": "+t+(n?" = "+n:"")+" ("+r+")"},Ce=function(e,t){var n=e.filePath,r=e.checks,o=t.fileFormat,s=void 0===o?xe:o,i=t.linkFormat,u=void 0===i?Se:i,a=t.linkSeparator,c=void 0===a?"\n":a
return r.length>0?s({filePath:n,checks:r})+r.sort((function(e,t){return e.pass===t.pass?0:e.pass?1:-1})).map(u).join(c):null}
const we=function(e,t){void 0===t&&(t={})
var n=t.entryFormat,r=void 0===n?Ce:n,o=t.entrySeparator,s=void 0===o?"\n\n":o
return e.map((function(e,n){return r(e,t,n)})).filter(Boolean).join(s)}
var Te=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function u(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}a((r=r.apply(e,t||[])).next())}))},He=function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o
switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s
break
case 4:return i.label++,{value:s[1],done:!1}
case 5:i.label++,r=s[1],s=[0]
continue
case 7:s=i.ops.pop(),i.trys.pop()
continue
default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0
continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1]
break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s
break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s)
break}o[2]&&i.ops.pop(),i.trys.pop()
continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},Oe=function(e){if(e){if(!Array.isArray(e))return e
if(e.length>0)return e}return"**"}
function Le(e){return Te(this,void 0,void 0,(function(){return He(this,(function(t){return[2,new Promise((function(t,n){return r().readFile(e,(function(e,r){return e?n(e):t(String(r).split(/\n+/))}))}))]}))}))}function ke(e){return Te(this,void 0,void 0,(function(){var t,n,r,o,s
return He(this,(function(i){switch(i.label){case 0:return e?Array.isArray(e)?(r=(n=(s=[]).concat).apply,o=[s],[4,ve(e,Le)]):[3,2]:[2,[]]
case 1:return t=r.apply(n,o.concat([i.sent()])),[3,3]
case 2:t=Le(e),i.label=3
case 3:return[2,t]}}))}))}function Pe(e){return Te(this,void 0,void 0,(function(){var t=this
return He(this,(function(n){return[2,ve(e,(function(e){var n=e[0],r=e[1]
return Te(t,void 0,void 0,(function(){var e
return He(this,(function(t){switch(t.label){case 0:return[4,ke(n)]
case 1:return e=t.sent(),[2,(r?e.concat(r):e).filter(Boolean)]}}))}))}))]}))}))}var $e=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function u(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}a((r=r.apply(e,t||[])).next())}))},Be=function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o
switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s
break
case 4:return i.label++,{value:s[1],done:!1}
case 5:i.label++,r=s[1],s=[0]
continue
case 7:s=i.ops.pop(),i.trys.pop()
continue
default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0
continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1]
break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s
break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s)
break}o[2]&&i.ops.pop(),i.trys.pop()
continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}
function Ne(e){return $e(this,void 0,void 0,(function(){var t
return Be(this,(function(n){switch(n.label){case 0:return[4,a.getInput(e)]
case 1:t=n.sent()
try{return[2,JSON.parse(t)]}catch(e){if(e instanceof SyntaxError)return[2,t]
throw e}return[2]}}))}))}!function(){$e(this,void 0,void 0,(function(){var t,n,r,o,s,i,u,c,l,p,f,h,d,g,b,m,v,A,R,E,_
return Be(this,(function(x){switch(x.label){case 0:return t=new Promise((function(t,n){(0,e.exec)("git fetch origin master",(function(e){return e?n(e):t()}))})),[4,ve(["rootURL","linkIncludePatternFiles","linkIncludePatterns","linkExcludePatternFiles","linkExcludePatterns","fileIncludePatternFiles","fileIncludePatterns","fileExcludePatternFiles","fileExcludePatterns"],Ne)]
case 1:return n=x.sent(),r=n[0],o=n[1],s=n[2],i=n[3],u=n[4],c=n[5],l=n[6],p=n[7],f=n[8],[4,Pe([[o,s],[i,u],[c,l],[p,f]])]
case 2:return h=x.sent(),d=h[0],g=h[1],b=h[2],m=h[3],v={source:"git-diff",rootURL:r,linkIncludePatterns:Oe(d),linkExcludePatterns:g,fileIncludePatterns:Oe(b),fileExcludePatterns:m},[4,t]
case 3:return x.sent(),[4,y()]
case 4:return A=x.sent(),[4,_e(A,v)]
case 5:return 0===(R=x.sent()).length?(a.setOutput("output",JSON.stringify({summary:"There were no files to check links in."})),a.setOutput("conclusion","success")):(E="# Link check report\n\n"+we(R,{linkFormat:function(e){var t=e.link,n=e.href,r=e.description
return"  - "+(e.pass?":heavy_check_mark:":":x:")+" "+t+(n&&n!==t?" = "+n:"")+" ("+r+")"}}),_=R.some((function(e){return e.checks.some((function(e){return!e.pass}))})),a.setOutput("output",JSON.stringify({summary:_?"Some new links failed the check.":"All new links passed the check!",text_description:E})),a.setOutput("conclusion",_?"failure":"success")),process.exit(0),[2]}}))}))}()})()})()
