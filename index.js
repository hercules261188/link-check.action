(()=>{"use strict"
var e={592:function(e,t,n){var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}
Object.defineProperty(t,"__esModule",{value:!0})
const o=r(n(Object(function(){var e=new Error("Cannot find module 'os'")
throw e.code="MODULE_NOT_FOUND",e}())))
function u(e,t,n){const r=new a(e,t,n)
process.stdout.write(r.toString()+o.EOL)}t.issueCommand=u,t.issue=function(e,t=""){u(e,{},t)}
class a{constructor(e,t,n){e||(e="missing.command"),this.command=e,this.properties=t,this.message=n}toString(){let e="::"+this.command
if(this.properties&&Object.keys(this.properties).length>0){e+=" "
let n=!0
for(const r in this.properties)if(this.properties.hasOwnProperty(r)){const o=this.properties[r]
o&&(n?n=!1:e+=",",e+=`${r}=${t=o,i(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}`)}}var t
return e+="::"+function(e){return i(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}(this.message),e}}function i(e){return null==e?"":"string"==typeof e||e instanceof String?e:JSON.stringify(e)}t.toCommandValue=i},516:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function a(e){try{s(r.next(e))}catch(e){u(e)}}function i(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}
Object.defineProperty(t,"__esModule",{value:!0})
const u=n(592),a=o(n(Object(function(){var e=new Error("Cannot find module 'os'")
throw e.code="MODULE_NOT_FOUND",e}()))),i=o(n(Object(function(){var e=new Error("Cannot find module 'path'")
throw e.code="MODULE_NOT_FOUND",e}())))
var s
function c(e){u.issue("error",e instanceof Error?e.toString():e)}function l(e){u.issue("group",e)}function p(){u.issue("endgroup")}!function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"}(s=t.ExitCode||(t.ExitCode={})),t.exportVariable=function(e,t){const n=u.toCommandValue(t)
process.env[e]=n,u.issueCommand("set-env",{name:e},n)},t.setSecret=function(e){u.issueCommand("add-mask",{},e)},t.addPath=function(e){u.issueCommand("add-path",{},e),process.env.PATH=`${e}${i.delimiter}${process.env.PATH}`},t.getInput=function(e,t){const n=process.env["INPUT_"+e.replace(/ /g,"_").toUpperCase()]||""
if(t&&t.required&&!n)throw new Error("Input required and not supplied: "+e)
return n.trim()},t.setOutput=function(e,t){u.issueCommand("set-output",{name:e},t)},t.setCommandEcho=function(e){u.issue("echo",e?"on":"off")},t.setFailed=function(e){process.exitCode=s.Failure,c(e)},t.isDebug=function(){return"1"===process.env.RUNNER_DEBUG},t.debug=function(e){u.issueCommand("debug",{},e)},t.error=c,t.warning=function(e){u.issue("warning",e instanceof Error?e.toString():e)},t.info=function(e){process.stdout.write(e+a.EOL)},t.startGroup=l,t.endGroup=p,t.group=function(e,t){return r(this,void 0,void 0,(function*(){let n
l(e)
try{n=yield t()}finally{p()}return n}))},t.saveState=function(e,t){u.issueCommand("save-state",{name:e},t)},t.getState=function(e){return process.env["STATE_"+e]||""}},706:(e,t,n)=>{const r=n(339),o=n(555),u=n(741),a=n(833),i=(e,t={})=>{let n=[]
if(Array.isArray(e))for(let r of e){let e=i.create(r,t)
Array.isArray(e)?n.push(...e):n.push(e)}else n=[].concat(i.create(e,t))
return t&&!0===t.expand&&!0===t.nodupes&&(n=[...new Set(n)]),n}
i.parse=(e,t={})=>a(e,t),i.stringify=(e,t={})=>r("string"==typeof e?i.parse(e,t):e,t),i.compile=(e,t={})=>("string"==typeof e&&(e=i.parse(e,t)),o(e,t)),i.expand=(e,t={})=>{"string"==typeof e&&(e=i.parse(e,t))
let n=u(e,t)
return!0===t.noempty&&(n=n.filter(Boolean)),!0===t.nodupes&&(n=[...new Set(n)]),n},i.create=(e,t={})=>""===e||e.length<3?[e]:!0!==t.expand?i.compile(e,t):i.expand(e,t),e.exports=i},555:(e,t,n)=>{const r=n(824),o=n(117)
e.exports=(e,t={})=>{let n=(e,u={})=>{let a=o.isInvalidBrace(u),i=!0===e.invalid&&!0===t.escapeInvalid,s=!0===a||!0===i,c=!0===t.escapeInvalid?"\\":"",l=""
if(!0===e.isOpen)return c+e.value
if(!0===e.isClose)return c+e.value
if("open"===e.type)return s?c+e.value:"("
if("close"===e.type)return s?c+e.value:")"
if("comma"===e.type)return"comma"===e.prev.type?"":s?e.value:"|"
if(e.value)return e.value
if(e.nodes&&e.ranges>0){let n=o.reduce(e.nodes),u=r(...n,{...t,wrap:!1,toRegex:!0})
if(0!==u.length)return n.length>1&&u.length>1?`(${u})`:u}if(e.nodes)for(let t of e.nodes)l+=n(t,e)
return l}
return n(e)}},552:e=>{e.exports={MAX_LENGTH:65536,CHAR_0:"0",CHAR_9:"9",CHAR_UPPERCASE_A:"A",CHAR_LOWERCASE_A:"a",CHAR_UPPERCASE_Z:"Z",CHAR_LOWERCASE_Z:"z",CHAR_LEFT_PARENTHESES:"(",CHAR_RIGHT_PARENTHESES:")",CHAR_ASTERISK:"*",CHAR_AMPERSAND:"&",CHAR_AT:"@",CHAR_BACKSLASH:"\\",CHAR_BACKTICK:"`",CHAR_CARRIAGE_RETURN:"\r",CHAR_CIRCUMFLEX_ACCENT:"^",CHAR_COLON:":",CHAR_COMMA:",",CHAR_DOLLAR:"$",CHAR_DOT:".",CHAR_DOUBLE_QUOTE:'"',CHAR_EQUAL:"=",CHAR_EXCLAMATION_MARK:"!",CHAR_FORM_FEED:"\f",CHAR_FORWARD_SLASH:"/",CHAR_HASH:"#",CHAR_HYPHEN_MINUS:"-",CHAR_LEFT_ANGLE_BRACKET:"<",CHAR_LEFT_CURLY_BRACE:"{",CHAR_LEFT_SQUARE_BRACKET:"[",CHAR_LINE_FEED:"\n",CHAR_NO_BREAK_SPACE:" ",CHAR_PERCENT:"%",CHAR_PLUS:"+",CHAR_QUESTION_MARK:"?",CHAR_RIGHT_ANGLE_BRACKET:">",CHAR_RIGHT_CURLY_BRACE:"}",CHAR_RIGHT_SQUARE_BRACKET:"]",CHAR_SEMICOLON:";",CHAR_SINGLE_QUOTE:"'",CHAR_SPACE:" ",CHAR_TAB:"\t",CHAR_UNDERSCORE:"_",CHAR_VERTICAL_LINE:"|",CHAR_ZERO_WIDTH_NOBREAK_SPACE:"\ufeff"}},741:(e,t,n)=>{const r=n(824),o=n(339),u=n(117),a=(e="",t="",n=!1)=>{let r=[]
if(e=[].concat(e),!(t=[].concat(t)).length)return e
if(!e.length)return n?u.flatten(t).map(e=>`{${e}}`):t
for(let o of e)if(Array.isArray(o))for(let e of o)r.push(a(e,t,n))
else for(let e of t)!0===n&&"string"==typeof e&&(e=`{${e}}`),r.push(Array.isArray(e)?a(o,e,n):o+e)
return u.flatten(r)}
e.exports=(e,t={})=>{let n=void 0===t.rangeLimit?1e3:t.rangeLimit,i=(e,s={})=>{e.queue=[]
let c=s,l=s.queue
for(;"brace"!==c.type&&"root"!==c.type&&c.parent;)c=c.parent,l=c.queue
if(e.invalid||e.dollar)return void l.push(a(l.pop(),o(e,t)))
if("brace"===e.type&&!0!==e.invalid&&2===e.nodes.length)return void l.push(a(l.pop(),["{}"]))
if(e.nodes&&e.ranges>0){let i=u.reduce(e.nodes)
if(u.exceedsLimit(...i,t.step,n))throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.")
let s=r(...i,t)
return 0===s.length&&(s=o(e,t)),l.push(a(l.pop(),s)),void(e.nodes=[])}let p=u.encloseBrace(e),f=e.queue,h=e
for(;"brace"!==h.type&&"root"!==h.type&&h.parent;)h=h.parent,f=h.queue
for(let t=0;t<e.nodes.length;t++){let n=e.nodes[t]
"comma"!==n.type||"brace"!==e.type?"close"!==n.type?n.value&&"open"!==n.type?f.push(a(f.pop(),n.value)):n.nodes&&i(n,e):l.push(a(l.pop(),f,p)):(1===t&&f.push(""),f.push(""))}return f}
return u.flatten(i(e))}},833:(e,t,n)=>{const r=n(339),{MAX_LENGTH:o,CHAR_BACKSLASH:u,CHAR_BACKTICK:a,CHAR_COMMA:i,CHAR_DOT:s,CHAR_LEFT_PARENTHESES:c,CHAR_RIGHT_PARENTHESES:l,CHAR_LEFT_CURLY_BRACE:p,CHAR_RIGHT_CURLY_BRACE:f,CHAR_LEFT_SQUARE_BRACKET:h,CHAR_RIGHT_SQUARE_BRACKET:d,CHAR_DOUBLE_QUOTE:g,CHAR_SINGLE_QUOTE:A,CHAR_NO_BREAK_SPACE:y,CHAR_ZERO_WIDTH_NOBREAK_SPACE:_}=n(552)
e.exports=(e,t={})=>{if("string"!=typeof e)throw new TypeError("Expected a string")
let n=t||{},v="number"==typeof n.maxLength?Math.min(o,n.maxLength):o
if(e.length>v)throw new SyntaxError(`Input length (${e.length}), exceeds max characters (${v})`)
let R,E={type:"root",input:e,nodes:[]},b=[E],C=E,x=E,m=0,S=e.length,w=0,O=0
const H=()=>e[w++],T=e=>{if("text"===e.type&&"dot"===x.type&&(x.type="text"),!x||"text"!==x.type||"text"!==e.type)return C.nodes.push(e),e.parent=C,e.prev=x,x=e,e
x.value+=e.value}
for(T({type:"bos"});w<S;)if(C=b[b.length-1],R=H(),R!==_&&R!==y)if(R!==u)if(R!==d)if(R!==h)if(R!==c)if(R!==l)if(R!==g&&R!==A&&R!==a)if(R!==p)if(R!==f)if(R===i&&O>0){if(C.ranges>0){C.ranges=0
let e=C.nodes.shift()
C.nodes=[e,{type:"text",value:r(C)}]}T({type:"comma",value:R}),C.commas++}else if(R===s&&O>0&&0===C.commas){let e=C.nodes
if(0===O||0===e.length){T({type:"text",value:R})
continue}if("dot"===x.type){if(C.range=[],x.value+=R,x.type="range",3!==C.nodes.length&&5!==C.nodes.length){C.invalid=!0,C.ranges=0,x.type="text"
continue}C.ranges++,C.args=[]
continue}if("range"===x.type){e.pop()
let t=e[e.length-1]
t.value+=x.value+R,x=t,C.ranges--
continue}T({type:"dot",value:R})}else T({type:"text",value:R})
else{if("brace"!==C.type){T({type:"text",value:R})
continue}let e="close"
C=b.pop(),C.close=!0,T({type:e,value:R}),O--,C=b[b.length-1]}else{O++
let e=x.value&&"$"===x.value.slice(-1)||!0===C.dollar
C=T({type:"brace",open:!0,close:!1,dollar:e,depth:O,commas:0,ranges:0,nodes:[]}),b.push(C),T({type:"open",value:R})}else{let e,n=R
for(!0!==t.keepQuotes&&(R="");w<S&&(e=H());)if(e!==u){if(e===n){!0===t.keepQuotes&&(R+=e)
break}R+=e}else R+=e+H()
T({type:"text",value:R})}else{if("paren"!==C.type){T({type:"text",value:R})
continue}C=b.pop(),T({type:"text",value:R}),C=b[b.length-1]}else C=T({type:"paren",nodes:[]}),b.push(C),T({type:"text",value:R})
else{m++
let e
for(;w<S&&(e=H());)if(R+=e,e!==h)if(e!==u){if(e===d&&(m--,0===m))break}else R+=H()
else m++
T({type:"text",value:R})}else T({type:"text",value:"\\"+R})
else T({type:"text",value:(t.keepEscaping?R:"")+H()})
do{if(C=b.pop(),"root"!==C.type){C.nodes.forEach(e=>{e.nodes||("open"===e.type&&(e.isOpen=!0),"close"===e.type&&(e.isClose=!0),e.nodes||(e.type="text"),e.invalid=!0)})
let e=b[b.length-1],t=e.nodes.indexOf(C)
e.nodes.splice(t,1,...C.nodes)}}while(b.length>0)
return T({type:"eos"}),E}},339:(e,t,n)=>{const r=n(117)
e.exports=(e,t={})=>{let n=(e,o={})=>{let u=t.escapeInvalid&&r.isInvalidBrace(o),a=!0===e.invalid&&!0===t.escapeInvalid,i=""
if(e.value)return(u||a)&&r.isOpenOrClose(e)?"\\"+e.value:e.value
if(e.value)return e.value
if(e.nodes)for(let t of e.nodes)i+=n(t)
return i}
return n(e)}},117:(e,t)=>{t.isInteger=e=>"number"==typeof e?Number.isInteger(e):"string"==typeof e&&""!==e.trim()&&Number.isInteger(Number(e)),t.find=(e,t)=>e.nodes.find(e=>e.type===t),t.exceedsLimit=(e,n,r=1,o)=>!1!==o&&(!(!t.isInteger(e)||!t.isInteger(n))&&(Number(n)-Number(e))/Number(r)>=o),t.escapeNode=(e,t=0,n)=>{let r=e.nodes[t]
r&&(n&&r.type===n||"open"===r.type||"close"===r.type)&&!0!==r.escaped&&(r.value="\\"+r.value,r.escaped=!0)},t.encloseBrace=e=>"brace"===e.type&&(e.commas>>0+e.ranges>>0==0&&(e.invalid=!0,!0)),t.isInvalidBrace=e=>"brace"===e.type&&(!(!0!==e.invalid&&!e.dollar)||(e.commas>>0+e.ranges>>0==0||!0!==e.open||!0!==e.close)&&(e.invalid=!0,!0)),t.isOpenOrClose=e=>"open"===e.type||"close"===e.type||(!0===e.open||!0===e.close),t.reduce=e=>e.reduce((e,t)=>("text"===t.type&&e.push(t.value),"range"===t.type&&(t.type="text"),e),[]),t.flatten=(...e)=>{const t=[],n=e=>{for(let r=0;r<e.length;r++){let o=e[r]
Array.isArray(o)?n(o,t):void 0!==o&&t.push(o)}return t}
return n(e),t}},824:(e,t,n)=>{const r=n(Object(function(){var e=new Error("Cannot find module 'util'")
throw e.code="MODULE_NOT_FOUND",e}())),o=n(466),u=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),a=e=>"number"==typeof e||"string"==typeof e&&""!==e,i=e=>Number.isInteger(+e),s=e=>{let t=""+e,n=-1
if("-"===t[0]&&(t=t.slice(1)),"0"===t)return!1
for(;"0"===t[++n];);return n>0},c=(e,t,n)=>{if(t>0){let n="-"===e[0]?"-":""
n&&(e=e.slice(1)),e=n+e.padStart(n?t-1:t,"0")}return!1===n?String(e):e},l=(e,t)=>{let n="-"===e[0]?"-":""
for(n&&(e=e.slice(1),t--);e.length<t;)e="0"+e
return n?"-"+e:e},p=(e,t,n,r)=>{if(n)return o(e,t,{wrap:!1,...r})
let u=String.fromCharCode(e)
return e===t?u:`[${u}-${String.fromCharCode(t)}]`},f=(e,t,n)=>{if(Array.isArray(e)){let t=!0===n.wrap,r=n.capture?"":"?:"
return t?`(${r}${e.join("|")})`:e.join("|")}return o(e,t,n)},h=(...e)=>new RangeError("Invalid range arguments: "+r.inspect(...e)),d=(e,t,n)=>{if(!0===n.strictRanges)throw h([e,t])
return[]},g=(e,t,n=1,r={})=>{let o=Number(e),u=Number(t)
if(!Number.isInteger(o)||!Number.isInteger(u)){if(!0===r.strictRanges)throw h([e,t])
return[]}0===o&&(o=0),0===u&&(u=0)
let a=o>u,i=String(e),d=String(t),g=String(n)
n=Math.max(Math.abs(n),1)
let A=s(i)||s(d)||s(g),y=A?Math.max(i.length,d.length,g.length):0,_=!1===A&&!1===((e,t,n)=>"string"==typeof e||"string"==typeof t||!0===n.stringify)(e,t,r),v=r.transform||(e=>t=>!0===e?Number(t):String(t))(_)
if(r.toRegex&&1===n)return p(l(e,y),l(t,y),!0,r)
let R={negatives:[],positives:[]},E=[],b=0
for(;a?o>=u:o<=u;)!0===r.toRegex&&n>1?R[(C=o)<0?"negatives":"positives"].push(Math.abs(C)):E.push(c(v(o,b),y,_)),o=a?o-n:o+n,b++
var C
return!0===r.toRegex?n>1?((e,t)=>{e.negatives.sort((e,t)=>e<t?-1:e>t?1:0),e.positives.sort((e,t)=>e<t?-1:e>t?1:0)
let n,r=t.capture?"":"?:",o="",u=""
return e.positives.length&&(o=e.positives.join("|")),e.negatives.length&&(u=`-(${r}${e.negatives.join("|")})`),n=o&&u?`${o}|${u}`:o||u,t.wrap?`(${r}${n})`:n})(R,r):f(E,null,{wrap:!1,...r}):E},A=(e,t,n,r={})=>{if(null==t&&a(e))return[e]
if(!a(e)||!a(t))return d(e,t,r)
if("function"==typeof n)return A(e,t,1,{transform:n})
if(u(n))return A(e,t,0,n)
let o={...r}
return!0===o.capture&&(o.wrap=!0),n=n||o.step||1,i(n)?i(e)&&i(t)?g(e,t,n,o):((e,t,n=1,r={})=>{if(!i(e)&&e.length>1||!i(t)&&t.length>1)return d(e,t,r)
let o=r.transform||(e=>String.fromCharCode(e)),u=(""+e).charCodeAt(0),a=(""+t).charCodeAt(0),s=u>a,c=Math.min(u,a),l=Math.max(u,a)
if(r.toRegex&&1===n)return p(c,l,!1,r)
let h=[],g=0
for(;s?u>=a:u<=a;)h.push(o(u,g)),u=s?u-n:u+n,g++
return!0===r.toRegex?f(h,null,{wrap:!1,options:r}):h})(e,t,Math.max(Math.abs(n),1),o):null==n||u(n)?A(e,t,1,n):((e,t)=>{if(!0===t.strictRanges)throw new TypeError(`Expected step "${e}" to be a number`)
return[]})(n,o)}
e.exports=A},751:(e,t,n)=>{const r=n(Object(function(){var e=new Error("Cannot find module 'util'")
throw e.code="MODULE_NOT_FOUND",e}())),o=n(706),u=n(264),a=n(337),i=e=>"string"==typeof e&&(""===e||"./"===e),s=(e,t,n)=>{t=[].concat(t),e=[].concat(e)
let r=new Set,o=new Set,a=new Set,i=0,s=e=>{a.add(e.output),n&&n.onResult&&n.onResult(e)}
for(let a=0;a<t.length;a++){let c=u(String(t[a]),{...n,onResult:s},!0),l=c.state.negated||c.state.negatedExtglob
l&&i++
for(let t of e){let e=c(t,!0);(l?!e.isMatch:e.isMatch)&&(l?r.add(e.output):(r.delete(e.output),o.add(e.output)))}}let c=(i===t.length?[...a]:[...o]).filter(e=>!r.has(e))
if(n&&0===c.length){if(!0===n.failglob)throw new Error(`No matches found for "${t.join(", ")}"`)
if(!0===n.nonull||!0===n.nullglob)return n.unescape?t.map(e=>e.replace(/\\/g,"")):t}return c}
s.match=s,s.matcher=(e,t)=>u(e,t),s.any=s.isMatch=(e,t,n)=>u(t,n)(e),s.not=(e,t,n={})=>{t=[].concat(t).map(String)
let r=new Set,o=[],u=s(e,t,{...n,onResult:e=>{n.onResult&&n.onResult(e),o.push(e.output)}})
for(let e of o)u.includes(e)||r.add(e)
return[...r]},s.contains=(e,t,n)=>{if("string"!=typeof e)throw new TypeError(`Expected a string: "${r.inspect(e)}"`)
if(Array.isArray(t))return t.some(t=>s.contains(e,t,n))
if("string"==typeof t){if(i(e)||i(t))return!1
if(e.includes(t)||e.startsWith("./")&&e.slice(2).includes(t))return!0}return s.isMatch(e,t,{...n,contains:!0})},s.matchKeys=(e,t,n)=>{if(!a.isObject(e))throw new TypeError("Expected the first argument to be an object")
let r=s(Object.keys(e),t,n),o={}
for(let t of r)o[t]=e[t]
return o},s.some=(e,t,n)=>{let r=[].concat(e)
for(let e of[].concat(t)){let t=u(String(e),n)
if(r.some(e=>t(e)))return!0}return!1},s.every=(e,t,n)=>{let r=[].concat(e)
for(let e of[].concat(t)){let t=u(String(e),n)
if(!r.every(e=>t(e)))return!1}return!0},s.all=(e,t,n)=>{if("string"!=typeof e)throw new TypeError(`Expected a string: "${r.inspect(e)}"`)
return[].concat(t).every(t=>u(t,n)(e))},s.capture=(e,t,n)=>{let r=a.isWindows(n),o=u.makeRe(String(e),{...n,capture:!0}).exec(r?a.toPosixSlashes(t):t)
if(o)return o.slice(1).map(e=>void 0===e?"":e)},s.makeRe=(...e)=>u.makeRe(...e),s.scan=(...e)=>u.scan(...e),s.parse=(e,t)=>{let n=[]
for(let r of[].concat(e||[]))for(let e of o(String(r),t))n.push(u.parse(e,t))
return n},s.braces=(e,t)=>{if("string"!=typeof e)throw new TypeError("Expected a string")
return t&&!0===t.nobrace||!/\{.*\}/.test(e)?[e]:o(e,t)},s.braceExpand=(e,t)=>{if("string"!=typeof e)throw new TypeError("Expected a string")
return s.braces(e,{...t,expand:!0})},e.exports=s},759:(e,t)=>{var n=function(){if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==n)return n
throw new Error("unable to locate global object")}()
e.exports=t=n.fetch,t.default=n.fetch.bind(n),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},264:(e,t,n)=>{e.exports=n(307)},448:(e,t,n)=>{const r=n(Object(function(){var e=new Error("Cannot find module 'path'")
throw e.code="MODULE_NOT_FOUND",e}())),o={DOT_LITERAL:"\\.",PLUS_LITERAL:"\\+",QMARK_LITERAL:"\\?",SLASH_LITERAL:"\\/",ONE_CHAR:"(?=.)",QMARK:"[^/]",END_ANCHOR:"(?:\\/|$)",DOTS_SLASH:"\\.{1,2}(?:\\/|$)",NO_DOT:"(?!\\.)",NO_DOTS:"(?!(?:^|\\/)\\.{1,2}(?:\\/|$))",NO_DOT_SLASH:"(?!\\.{0,1}(?:\\/|$))",NO_DOTS_SLASH:"(?!\\.{1,2}(?:\\/|$))",QMARK_NO_DOT:"[^.\\/]",STAR:"[^/]*?",START_ANCHOR:"(?:^|\\/)"},u={...o,SLASH_LITERAL:"[\\\\/]",QMARK:"[^\\\\/]",STAR:"[^\\\\/]*?",DOTS_SLASH:"\\.{1,2}(?:[\\\\/]|$)",NO_DOT:"(?!\\.)",NO_DOTS:"(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",NO_DOT_SLASH:"(?!\\.{0,1}(?:[\\\\/]|$))",NO_DOTS_SLASH:"(?!\\.{1,2}(?:[\\\\/]|$))",QMARK_NO_DOT:"[^.\\\\/]",START_ANCHOR:"(?:^|[\\\\/])",END_ANCHOR:"(?:[\\\\/]|$)"}
e.exports={MAX_LENGTH:65536,POSIX_REGEX_SOURCE:{alnum:"a-zA-Z0-9",alpha:"a-zA-Z",ascii:"\\x00-\\x7F",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E ",punct:"\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"},REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,REPLACEMENTS:{"***":"*","**/**":"**","**/**/**":"**"},CHAR_0:48,CHAR_9:57,CHAR_UPPERCASE_A:65,CHAR_LOWERCASE_A:97,CHAR_UPPERCASE_Z:90,CHAR_LOWERCASE_Z:122,CHAR_LEFT_PARENTHESES:40,CHAR_RIGHT_PARENTHESES:41,CHAR_ASTERISK:42,CHAR_AMPERSAND:38,CHAR_AT:64,CHAR_BACKWARD_SLASH:92,CHAR_CARRIAGE_RETURN:13,CHAR_CIRCUMFLEX_ACCENT:94,CHAR_COLON:58,CHAR_COMMA:44,CHAR_DOT:46,CHAR_DOUBLE_QUOTE:34,CHAR_EQUAL:61,CHAR_EXCLAMATION_MARK:33,CHAR_FORM_FEED:12,CHAR_FORWARD_SLASH:47,CHAR_GRAVE_ACCENT:96,CHAR_HASH:35,CHAR_HYPHEN_MINUS:45,CHAR_LEFT_ANGLE_BRACKET:60,CHAR_LEFT_CURLY_BRACE:123,CHAR_LEFT_SQUARE_BRACKET:91,CHAR_LINE_FEED:10,CHAR_NO_BREAK_SPACE:160,CHAR_PERCENT:37,CHAR_PLUS:43,CHAR_QUESTION_MARK:63,CHAR_RIGHT_ANGLE_BRACKET:62,CHAR_RIGHT_CURLY_BRACE:125,CHAR_RIGHT_SQUARE_BRACKET:93,CHAR_SEMICOLON:59,CHAR_SINGLE_QUOTE:39,CHAR_SPACE:32,CHAR_TAB:9,CHAR_UNDERSCORE:95,CHAR_VERTICAL_LINE:124,CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,SEP:r.sep,extglobChars:e=>({"!":{type:"negate",open:"(?:(?!(?:",close:`))${e.STAR})`},"?":{type:"qmark",open:"(?:",close:")?"},"+":{type:"plus",open:"(?:",close:")+"},"*":{type:"star",open:"(?:",close:")*"},"@":{type:"at",open:"(?:",close:")"}}),globChars:e=>!0===e?u:o}},711:(e,t,n)=>{const r=n(448),o=n(337),{MAX_LENGTH:u,POSIX_REGEX_SOURCE:a,REGEX_NON_SPECIAL_CHARS:i,REGEX_SPECIAL_CHARS_BACKREF:s,REPLACEMENTS:c}=r,l=(e,t)=>{if("function"==typeof t.expandRange)return t.expandRange(...e,t)
e.sort()
const n=`[${e.join("-")}]`
try{new RegExp(n)}catch(t){return e.map(e=>o.escapeRegex(e)).join("..")}return n},p=(e,t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,f=(e,t)=>{if("string"!=typeof e)throw new TypeError("Expected a string")
e=c[e]||e
const n={...t},f="number"==typeof n.maxLength?Math.min(u,n.maxLength):u
let h=e.length
if(h>f)throw new SyntaxError(`Input length: ${h}, exceeds maximum allowed length: ${f}`)
const d={type:"bos",value:"",output:n.prepend||""},g=[d],A=n.capture?"":"?:",y=o.isWindows(t),_=r.globChars(y),v=r.extglobChars(_),{DOT_LITERAL:R,PLUS_LITERAL:E,SLASH_LITERAL:b,ONE_CHAR:C,DOTS_SLASH:x,NO_DOT:m,NO_DOT_SLASH:S,NO_DOTS_SLASH:w,QMARK:O,QMARK_NO_DOT:H,STAR:T,START_ANCHOR:L}=_,k=e=>`(${A}(?:(?!${L}${e.dot?x:R}).)*?)`,N=n.dot?"":m,$=n.dot?O:H
let P=!0===n.bash?k(n):T
n.capture&&(P=`(${P})`),"boolean"==typeof n.noext&&(n.noextglob=n.noext)
const I={input:e,index:-1,start:0,dot:!0===n.dot,consumed:"",output:"",prefix:"",backtrack:!1,negated:!1,brackets:0,braces:0,parens:0,quotes:0,globstar:!1,tokens:g}
e=o.removePrefix(e,I),h=e.length
const M=[],U=[],D=[]
let B,G=d
const F=()=>I.index===h-1,K=I.peek=(t=1)=>e[I.index+t],j=I.advance=()=>e[++I.index],Q=()=>e.slice(I.index+1),X=(e="",t=0)=>{I.consumed+=e,I.index+=t},W=e=>{I.output+=null!=e.output?e.output:e.value,X(e.value)},q=()=>{let e=1
for(;"!"===K()&&("("!==K(2)||"?"===K(3));)j(),I.start++,e++
return e%2!=0&&(I.negated=!0,I.start++,!0)},Z=e=>{I[e]++,D.push(e)},Y=e=>{I[e]--,D.pop()},V=e=>{if("globstar"===G.type){const t=I.braces>0&&("comma"===e.type||"brace"===e.type),n=!0===e.extglob||M.length&&("pipe"===e.type||"paren"===e.type)
"slash"===e.type||"paren"===e.type||t||n||(I.output=I.output.slice(0,-G.output.length),G.type="star",G.value="*",G.output=P,I.output+=G.output)}if(M.length&&"paren"!==e.type&&!v[e.value]&&(M[M.length-1].inner+=e.value),(e.value||e.output)&&W(e),G&&"text"===G.type&&"text"===e.type)return G.value+=e.value,void(G.output=(G.output||"")+e.value)
e.prev=G,g.push(e),G=e},z=(e,t)=>{const r={...v[t],conditions:1,inner:""}
r.prev=G,r.parens=I.parens,r.output=I.output
const o=(n.capture?"(":"")+r.open
Z("parens"),V({type:e,value:t,output:I.output?"":C}),V({type:"paren",extglob:!0,value:j(),output:o}),M.push(r)},J=e=>{let t=e.close+(n.capture?")":"")
if("negate"===e.type){let r=P
e.inner&&e.inner.length>1&&e.inner.includes("/")&&(r=k(n)),(r!==P||F()||/^\)+$/.test(Q()))&&(t=e.close=")$))"+r),"bos"===e.prev.type&&F()&&(I.negatedExtglob=!0)}V({type:"paren",extglob:!0,value:B,output:t}),Y("parens")}
if(!1!==n.fastpaths&&!/(^[*!]|[/()[\]{}"])/.test(e)){let r=!1,u=e.replace(s,(e,t,n,o,u,a)=>"\\"===o?(r=!0,e):"?"===o?t?t+o+(u?O.repeat(u.length):""):0===a?$+(u?O.repeat(u.length):""):O.repeat(n.length):"."===o?R.repeat(n.length):"*"===o?t?t+o+(u?P:""):P:t?e:"\\"+e)
return!0===r&&(u=!0===n.unescape?u.replace(/\\/g,""):u.replace(/\\+/g,e=>e.length%2==0?"\\\\":e?"\\":"")),u===e&&!0===n.contains?(I.output=e,I):(I.output=o.wrapOutput(u,I,t),I)}for(;!F();){if(B=j(),"\0"===B)continue
if("\\"===B){const e=K()
if("/"===e&&!0!==n.bash)continue
if("."===e||";"===e)continue
if(!e){B+="\\",V({type:"text",value:B})
continue}const t=/^\\+/.exec(Q())
let r=0
if(t&&t[0].length>2&&(r=t[0].length,I.index+=r,r%2!=0&&(B+="\\")),!0===n.unescape?B=j()||"":B+=j()||"",0===I.brackets){V({type:"text",value:B})
continue}}if(I.brackets>0&&("]"!==B||"["===G.value||"[^"===G.value)){if(!1!==n.posix&&":"===B){const e=G.value.slice(1)
if(e.includes("[")&&(G.posix=!0,e.includes(":"))){const e=G.value.lastIndexOf("["),t=G.value.slice(0,e),n=G.value.slice(e+2),r=a[n]
if(r){G.value=t+r,I.backtrack=!0,j(),d.output||1!==g.indexOf(G)||(d.output=C)
continue}}}("["===B&&":"!==K()||"-"===B&&"]"===K())&&(B="\\"+B),"]"!==B||"["!==G.value&&"[^"!==G.value||(B="\\"+B),!0===n.posix&&"!"===B&&"["===G.value&&(B="^"),G.value+=B,W({value:B})
continue}if(1===I.quotes&&'"'!==B){B=o.escapeRegex(B),G.value+=B,W({value:B})
continue}if('"'===B){I.quotes=1===I.quotes?0:1,!0===n.keepQuotes&&V({type:"text",value:B})
continue}if("("===B){Z("parens"),V({type:"paren",value:B})
continue}if(")"===B){if(0===I.parens&&!0===n.strictBrackets)throw new SyntaxError(p("opening","("))
const e=M[M.length-1]
if(e&&I.parens===e.parens+1){J(M.pop())
continue}V({type:"paren",value:B,output:I.parens?")":"\\)"}),Y("parens")
continue}if("["===B){if(!0!==n.nobracket&&Q().includes("]"))Z("brackets")
else{if(!0!==n.nobracket&&!0===n.strictBrackets)throw new SyntaxError(p("closing","]"))
B="\\"+B}V({type:"bracket",value:B})
continue}if("]"===B){if(!0===n.nobracket||G&&"bracket"===G.type&&1===G.value.length){V({type:"text",value:B,output:"\\"+B})
continue}if(0===I.brackets){if(!0===n.strictBrackets)throw new SyntaxError(p("opening","["))
V({type:"text",value:B,output:"\\"+B})
continue}Y("brackets")
const e=G.value.slice(1)
if(!0===G.posix||"^"!==e[0]||e.includes("/")||(B="/"+B),G.value+=B,W({value:B}),!1===n.literalBrackets||o.hasRegexChars(e))continue
const t=o.escapeRegex(G.value)
if(I.output=I.output.slice(0,-G.value.length),!0===n.literalBrackets){I.output+=t,G.value=t
continue}G.value=`(${A}${t}|${G.value})`,I.output+=G.value
continue}if("{"===B&&!0!==n.nobrace){Z("braces")
const e={type:"brace",value:B,output:"(",outputIndex:I.output.length,tokensIndex:I.tokens.length}
U.push(e),V(e)
continue}if("}"===B){const e=U[U.length-1]
if(!0===n.nobrace||!e){V({type:"text",value:B,output:B})
continue}let t=")"
if(!0===e.dots){const e=g.slice(),r=[]
for(let t=e.length-1;t>=0&&(g.pop(),"brace"!==e[t].type);t--)"dots"!==e[t].type&&r.unshift(e[t].value)
t=l(r,n),I.backtrack=!0}if(!0!==e.comma&&!0!==e.dots){const n=I.output.slice(0,e.outputIndex),r=I.tokens.slice(e.tokensIndex)
e.value=e.output="\\{",B=t="\\}",I.output=n
for(const e of r)I.output+=e.output||e.value}V({type:"brace",value:B,output:t}),Y("braces"),U.pop()
continue}if("|"===B){M.length>0&&M[M.length-1].conditions++,V({type:"text",value:B})
continue}if(","===B){let e=B
const t=U[U.length-1]
t&&"braces"===D[D.length-1]&&(t.comma=!0,e="|"),V({type:"comma",value:B,output:e})
continue}if("/"===B){if("dot"===G.type&&I.index===I.start+1){I.start=I.index+1,I.consumed="",I.output="",g.pop(),G=d
continue}V({type:"slash",value:B,output:b})
continue}if("."===B){if(I.braces>0&&"dot"===G.type){"."===G.value&&(G.output=R)
const e=U[U.length-1]
G.type="dots",G.output+=B,G.value+=B,e.dots=!0
continue}if(I.braces+I.parens===0&&"bos"!==G.type&&"slash"!==G.type){V({type:"text",value:B,output:R})
continue}V({type:"dot",value:B,output:R})
continue}if("?"===B){if(!(G&&"("===G.value)&&!0!==n.noextglob&&"("===K()&&"?"!==K(2)){z("qmark",B)
continue}if(G&&"paren"===G.type){const e=K()
let t=B
if("<"===e&&!o.supportsLookbehinds())throw new Error("Node.js v10 or higher is required for regex lookbehinds");("("===G.value&&!/[!=<:]/.test(e)||"<"===e&&!/<([!=]|\w+>)/.test(Q()))&&(t="\\"+B),V({type:"text",value:B,output:t})
continue}if(!0!==n.dot&&("slash"===G.type||"bos"===G.type)){V({type:"qmark",value:B,output:H})
continue}V({type:"qmark",value:B,output:O})
continue}if("!"===B){if(!0!==n.noextglob&&"("===K()&&("?"!==K(2)||!/[!=<:]/.test(K(3)))){z("negate",B)
continue}if(!0!==n.nonegate&&0===I.index){q()
continue}}if("+"===B){if(!0!==n.noextglob&&"("===K()&&"?"!==K(2)){z("plus",B)
continue}if(G&&"("===G.value||!1===n.regex){V({type:"plus",value:B,output:E})
continue}if(G&&("bracket"===G.type||"paren"===G.type||"brace"===G.type)||I.parens>0){V({type:"plus",value:B})
continue}V({type:"plus",value:E})
continue}if("@"===B){if(!0!==n.noextglob&&"("===K()&&"?"!==K(2)){V({type:"at",extglob:!0,value:B,output:""})
continue}V({type:"text",value:B})
continue}if("*"!==B){"$"!==B&&"^"!==B||(B="\\"+B)
const e=i.exec(Q())
e&&(B+=e[0],I.index+=e[0].length),V({type:"text",value:B})
continue}if(G&&("globstar"===G.type||!0===G.star)){G.type="star",G.star=!0,G.value+=B,G.output=P,I.backtrack=!0,I.globstar=!0,X(B)
continue}let t=Q()
if(!0!==n.noextglob&&/^\([^?]/.test(t)){z("star",B)
continue}if("star"===G.type){if(!0===n.noglobstar){X(B)
continue}const r=G.prev,o=r.prev,u="slash"===r.type||"bos"===r.type,a=o&&("star"===o.type||"globstar"===o.type)
if(!0===n.bash&&(!u||t[0]&&"/"!==t[0])){V({type:"star",value:B,output:""})
continue}const i=I.braces>0&&("comma"===r.type||"brace"===r.type),s=M.length&&("pipe"===r.type||"paren"===r.type)
if(!u&&"paren"!==r.type&&!i&&!s){V({type:"star",value:B,output:""})
continue}for(;"/**"===t.slice(0,3);){const n=e[I.index+4]
if(n&&"/"!==n)break
t=t.slice(3),X("/**",3)}if("bos"===r.type&&F()){G.type="globstar",G.value+=B,G.output=k(n),I.output=G.output,I.globstar=!0,X(B)
continue}if("slash"===r.type&&"bos"!==r.prev.type&&!a&&F()){I.output=I.output.slice(0,-(r.output+G.output).length),r.output="(?:"+r.output,G.type="globstar",G.output=k(n)+(n.strictSlashes?")":"|$)"),G.value+=B,I.globstar=!0,I.output+=r.output+G.output,X(B)
continue}if("slash"===r.type&&"bos"!==r.prev.type&&"/"===t[0]){const e=void 0!==t[1]?"|$":""
I.output=I.output.slice(0,-(r.output+G.output).length),r.output="(?:"+r.output,G.type="globstar",G.output=`${k(n)}${b}|${b}${e})`,G.value+=B,I.output+=r.output+G.output,I.globstar=!0,X(B+j()),V({type:"slash",value:"/",output:""})
continue}if("bos"===r.type&&"/"===t[0]){G.type="globstar",G.value+=B,G.output=`(?:^|${b}|${k(n)}${b})`,I.output=G.output,I.globstar=!0,X(B+j()),V({type:"slash",value:"/",output:""})
continue}I.output=I.output.slice(0,-G.output.length),G.type="globstar",G.output=k(n),G.value+=B,I.output+=G.output,I.globstar=!0,X(B)
continue}const r={type:"star",value:B,output:P}
!0!==n.bash?!G||"bracket"!==G.type&&"paren"!==G.type||!0!==n.regex?(I.index!==I.start&&"slash"!==G.type&&"dot"!==G.type||("dot"===G.type?(I.output+=S,G.output+=S):!0===n.dot?(I.output+=w,G.output+=w):(I.output+=N,G.output+=N),"*"!==K()&&(I.output+=C,G.output+=C)),V(r)):(r.output=B,V(r)):(r.output=".*?","bos"!==G.type&&"slash"!==G.type||(r.output=N+r.output),V(r))}for(;I.brackets>0;){if(!0===n.strictBrackets)throw new SyntaxError(p("closing","]"))
I.output=o.escapeLast(I.output,"["),Y("brackets")}for(;I.parens>0;){if(!0===n.strictBrackets)throw new SyntaxError(p("closing",")"))
I.output=o.escapeLast(I.output,"("),Y("parens")}for(;I.braces>0;){if(!0===n.strictBrackets)throw new SyntaxError(p("closing","}"))
I.output=o.escapeLast(I.output,"{"),Y("braces")}if(!0===n.strictSlashes||"star"!==G.type&&"bracket"!==G.type||V({type:"maybe_slash",value:"",output:b+"?"}),!0===I.backtrack){I.output=""
for(const e of I.tokens)I.output+=null!=e.output?e.output:e.value,e.suffix&&(I.output+=e.suffix)}return I}
f.fastpaths=(e,t)=>{const n={...t},a="number"==typeof n.maxLength?Math.min(u,n.maxLength):u,i=e.length
if(i>a)throw new SyntaxError(`Input length: ${i}, exceeds maximum allowed length: ${a}`)
e=c[e]||e
const s=o.isWindows(t),{DOT_LITERAL:l,SLASH_LITERAL:p,ONE_CHAR:f,DOTS_SLASH:h,NO_DOT:d,NO_DOTS:g,NO_DOTS_SLASH:A,STAR:y,START_ANCHOR:_}=r.globChars(s),v=n.dot?g:d,R=n.dot?A:d,E=n.capture?"":"?:"
let b=!0===n.bash?".*?":y
n.capture&&(b=`(${b})`)
const C=e=>!0===e.noglobstar?b:`(${E}(?:(?!${_}${e.dot?h:l}).)*?)`,x=e=>{switch(e){case"*":return`${v}${f}${b}`
case".*":return`${l}${f}${b}`
case"*.*":return`${v}${b}${l}${f}${b}`
case"*/*":return`${v}${b}${p}${f}${R}${b}`
case"**":return v+C(n)
case"**/*":return`(?:${v}${C(n)}${p})?${R}${f}${b}`
case"**/*.*":return`(?:${v}${C(n)}${p})?${R}${b}${l}${f}${b}`
case"**/.*":return`(?:${v}${C(n)}${p})?${l}${f}${b}`
default:{const t=/^(.*?)\.(\w+)$/.exec(e)
if(!t)return
const n=x(t[1])
if(!n)return
return n+l+t[2]}}},m=o.removePrefix(e,{negated:!1,prefix:""})
let S=x(m)
return S&&!0!==n.strictSlashes&&(S+=p+"?"),S},e.exports=f},307:(e,t,n)=>{const r=n(Object(function(){var e=new Error("Cannot find module 'path'")
throw e.code="MODULE_NOT_FOUND",e}())),o=n(142),u=n(711),a=n(337),i=n(448),s=(e,t,n=!1)=>{if(Array.isArray(e)){const r=e.map(e=>s(e,t,n))
return e=>{for(const t of r){const n=t(e)
if(n)return n}return!1}}const r=(o=e)&&"object"==typeof o&&!Array.isArray(o)&&e.tokens&&e.input
var o
if(""===e||"string"!=typeof e&&!r)throw new TypeError("Expected pattern to be a non-empty string")
const u=t||{},i=a.isWindows(t),c=r?s.compileRe(e,t):s.makeRe(e,t,!1,!0),l=c.state
delete c.state
let p=()=>!1
if(u.ignore){const e={...t,ignore:null,onMatch:null,onResult:null}
p=s(u.ignore,e,n)}const f=(n,r=!1)=>{const{isMatch:o,match:a,output:f}=s.test(n,c,t,{glob:e,posix:i}),h={glob:e,state:l,regex:c,posix:i,input:n,output:f,match:a,isMatch:o}
return"function"==typeof u.onResult&&u.onResult(h),!1===o?(h.isMatch=!1,!!r&&h):p(n)?("function"==typeof u.onIgnore&&u.onIgnore(h),h.isMatch=!1,!!r&&h):("function"==typeof u.onMatch&&u.onMatch(h),!r||h)}
return n&&(f.state=l),f}
s.test=(e,t,n,{glob:r,posix:o}={})=>{if("string"!=typeof e)throw new TypeError("Expected input to be a string")
if(""===e)return{isMatch:!1,output:""}
const u=n||{},i=u.format||(o?a.toPosixSlashes:null)
let c=e===r,l=c&&i?i(e):e
return!1===c&&(l=i?i(e):e,c=l===r),!1!==c&&!0!==u.capture||(c=!0===u.matchBase||!0===u.basename?s.matchBase(e,t,n,o):t.exec(l)),{isMatch:Boolean(c),match:c,output:l}},s.matchBase=(e,t,n,o=a.isWindows(n))=>(t instanceof RegExp?t:s.makeRe(t,n)).test(r.basename(e)),s.isMatch=(e,t,n)=>s(t,n)(e),s.parse=(e,t)=>Array.isArray(e)?e.map(e=>s.parse(e,t)):u(e,{...t,fastpaths:!1}),s.scan=(e,t)=>o(e,t),s.compileRe=(e,t,n=!1,r=!1)=>{if(!0===n)return e.output
const o=t||{},u=o.contains?"":"^",a=o.contains?"":"$"
let i=`${u}(?:${e.output})${a}`
e&&!0===e.negated&&(i=`^(?!${i}).*$`)
const c=s.toRegex(i,t)
return!0===r&&(c.state=e),c},s.makeRe=(e,t,n=!1,r=!1)=>{if(!e||"string"!=typeof e)throw new TypeError("Expected a non-empty string")
const o=t||{}
let a,i={negated:!1,fastpaths:!0},c=""
return e.startsWith("./")&&(e=e.slice(2),c=i.prefix="./"),!1===o.fastpaths||"."!==e[0]&&"*"!==e[0]||(a=u.fastpaths(e,t)),void 0===a?(i=u(e,t),i.prefix=c+(i.prefix||"")):i.output=a,s.compileRe(i,t,n,r)},s.toRegex=(e,t)=>{try{const n=t||{}
return new RegExp(e,n.flags||(n.nocase?"i":""))}catch(e){if(t&&!0===t.debug)throw e
return/$^/}},s.constants=i,e.exports=s},142:(e,t,n)=>{const r=n(337),{CHAR_ASTERISK:o,CHAR_AT:u,CHAR_BACKWARD_SLASH:a,CHAR_COMMA:i,CHAR_DOT:s,CHAR_EXCLAMATION_MARK:c,CHAR_FORWARD_SLASH:l,CHAR_LEFT_CURLY_BRACE:p,CHAR_LEFT_PARENTHESES:f,CHAR_LEFT_SQUARE_BRACKET:h,CHAR_PLUS:d,CHAR_QUESTION_MARK:g,CHAR_RIGHT_CURLY_BRACE:A,CHAR_RIGHT_PARENTHESES:y,CHAR_RIGHT_SQUARE_BRACKET:_}=n(448),v=e=>e===l||e===a,R=e=>{!0!==e.isPrefix&&(e.depth=e.isGlobstar?1/0:1)}
e.exports=(e,t)=>{const n=t||{},E=e.length-1,b=!0===n.parts||!0===n.scanToEnd,C=[],x=[],m=[]
let S,w,O=e,H=-1,T=0,L=0,k=!1,N=!1,$=!1,P=!1,I=!1,M=!1,U=!1,D=!1,B=!1,G=0,F={value:"",depth:0,isGlob:!1}
const K=()=>H>=E,j=()=>(S=w,O.charCodeAt(++H))
for(;H<E;){let e
if(w=j(),w!==a){if(!0===M||w===p){for(G++;!0!==K()&&(w=j());)if(w!==a)if(w!==p){if(!0!==M&&w===s&&(w=j())===s){if(k=F.isBrace=!0,$=F.isGlob=!0,B=!0,!0===b)continue
break}if(!0!==M&&w===i){if(k=F.isBrace=!0,$=F.isGlob=!0,B=!0,!0===b)continue
break}if(w===A&&(G--,0===G)){M=!1,k=F.isBrace=!0,B=!0
break}}else G++
else U=F.backslashes=!0,j()
if(!0===b)continue
break}if(w!==l){if(!0!==n.noext){if(!0===(w===d||w===u||w===o||w===g||w===c)&&O.charCodeAt(H+1)===f){if($=F.isGlob=!0,P=F.isExtglob=!0,B=!0,!0===b){for(;!0!==K()&&(w=j());)if(w!==a){if(w===y){$=F.isGlob=!0,B=!0
break}}else U=F.backslashes=!0,w=j()
continue}break}}if(w===o){if(S===o&&(I=F.isGlobstar=!0),$=F.isGlob=!0,B=!0,!0===b)continue
break}if(w===g){if($=F.isGlob=!0,B=!0,!0===b)continue
break}if(w===h)for(;!0!==K()&&(e=j());)if(e!==a){if(e===_){if(N=F.isBracket=!0,$=F.isGlob=!0,B=!0,!0===b)continue
break}}else U=F.backslashes=!0,j()
if(!0===n.nonegate||w!==c||H!==T){if(!0!==n.noparen&&w===f){if($=F.isGlob=!0,!0===b){for(;!0!==K()&&(w=j());)if(w!==f){if(w===y){B=!0
break}}else U=F.backslashes=!0,w=j()
continue}break}if(!0===$){if(B=!0,!0===b)continue
break}}else D=F.negated=!0,T++}else{if(C.push(H),x.push(F),F={value:"",depth:0,isGlob:!1},!0===B)continue
if(S===s&&H===T+1){T+=2
continue}L=H+1}}else U=F.backslashes=!0,w=j(),w===p&&(M=!0)}!0===n.noext&&(P=!1,$=!1)
let Q=O,X="",W=""
T>0&&(X=O.slice(0,T),O=O.slice(T),L-=T),Q&&!0===$&&L>0?(Q=O.slice(0,L),W=O.slice(L)):!0===$?(Q="",W=O):Q=O,Q&&""!==Q&&"/"!==Q&&Q!==O&&v(Q.charCodeAt(Q.length-1))&&(Q=Q.slice(0,-1)),!0===n.unescape&&(W&&(W=r.removeBackslashes(W)),Q&&!0===U&&(Q=r.removeBackslashes(Q)))
const q={prefix:X,input:e,start:T,base:Q,glob:W,isBrace:k,isBracket:N,isGlob:$,isExtglob:P,isGlobstar:I,negated:D}
if(!0===n.tokens&&(q.maxDepth=0,v(w)||x.push(F),q.tokens=x),!0===n.parts||!0===n.tokens){let t
for(let r=0;r<C.length;r++){const o=t?t+1:T,u=C[r],a=e.slice(o,u)
n.tokens&&(0===r&&0!==T?(x[r].isPrefix=!0,x[r].value=X):x[r].value=a,R(x[r]),q.maxDepth+=x[r].depth),0===r&&""===a||m.push(a),t=u}if(t&&t+1<e.length){const r=e.slice(t+1)
m.push(r),n.tokens&&(x[x.length-1].value=r,R(x[x.length-1]),q.maxDepth+=x[x.length-1].depth)}q.slashes=C,q.parts=m}return q}},337:(e,t,n)=>{const r=n(Object(function(){var e=new Error("Cannot find module 'path'")
throw e.code="MODULE_NOT_FOUND",e}())),o="win32"===process.platform,{REGEX_BACKSLASH:u,REGEX_REMOVE_BACKSLASH:a,REGEX_SPECIAL_CHARS:i,REGEX_SPECIAL_CHARS_GLOBAL:s}=n(448)
t.isObject=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),t.hasRegexChars=e=>i.test(e),t.isRegexChar=e=>1===e.length&&t.hasRegexChars(e),t.escapeRegex=e=>e.replace(s,"\\$1"),t.toPosixSlashes=e=>e.replace(u,"/"),t.removeBackslashes=e=>e.replace(a,e=>"\\"===e?"":e),t.supportsLookbehinds=()=>{const e=process.version.slice(1).split(".").map(Number)
return 3===e.length&&e[0]>=9||8===e[0]&&e[1]>=10},t.isWindows=e=>e&&"boolean"==typeof e.windows?e.windows:!0===o||"\\"===r.sep,t.escapeLast=(e,n,r)=>{const o=e.lastIndexOf(n,r)
return-1===o?e:"\\"===e[o-1]?t.escapeLast(e,n,o-1):`${e.slice(0,o)}\\${e.slice(o)}`},t.removePrefix=(e,t={})=>{let n=e
return n.startsWith("./")&&(n=n.slice(2),t.prefix="./"),n},t.wrapOutput=(e,t={},n={})=>{let r=`${n.contains?"":"^"}(?:${e})${n.contains?"":"$"}`
return!0===t.negated&&(r=`(?:^(?!${r}).*$)`),r}},466:(e,t,n)=>{const r=n(193),o=(e,t,n)=>{if(!1===r(e))throw new TypeError("toRegexRange: expected the first argument to be a number")
if(void 0===t||e===t)return String(e)
if(!1===r(t))throw new TypeError("toRegexRange: expected the second argument to be a number.")
let u={relaxZeros:!0,...n}
"boolean"==typeof u.strictZeros&&(u.relaxZeros=!1===u.strictZeros)
let s=e+":"+t+"="+String(u.relaxZeros)+String(u.shorthand)+String(u.capture)+String(u.wrap)
if(o.cache.hasOwnProperty(s))return o.cache[s].result
let c=Math.min(e,t),l=Math.max(e,t)
if(1===Math.abs(c-l)){let n=e+"|"+t
return u.capture?`(${n})`:!1===u.wrap?n:`(?:${n})`}let p=d(e)||d(t),f={min:e,max:t,a:c,b:l},h=[],g=[]
if(p&&(f.isPadded=p,f.maxLen=String(f.max).length),c<0){g=a(l<0?Math.abs(l):1,Math.abs(c),f,u),c=f.a=0}return l>=0&&(h=a(c,l,f,u)),f.negatives=g,f.positives=h,f.result=function(e,t,n){let r=i(e,t,"-",!1,n)||[],o=i(t,e,"",!1,n)||[],u=i(e,t,"-?",!0,n)||[]
return r.concat(u).concat(o).join("|")}(g,h,u),!0===u.capture?f.result=`(${f.result})`:!1!==u.wrap&&h.length+g.length>1&&(f.result=`(?:${f.result})`),o.cache[s]=f,f.result}
function u(e,t,n){if(e===t)return{pattern:e,count:[],digits:0}
let r=function(e,t){let n=[]
for(let r=0;r<e.length;r++)n.push([e[r],t[r]])
return n}(e,t),o=r.length,u="",a=0
for(let e=0;e<o;e++){let[t,o]=r[e]
t===o?u+=t:"0"!==t||"9"!==o?u+=h(t,o,n):a++}return a&&(u+=!0===n.shorthand?"\\d":"[0-9]"),{pattern:u,count:[a],digits:o}}function a(e,t,n,r){let o,a=function(e,t){let n=1,r=1,o=l(e,n),u=new Set([t])
for(;e<=o&&o<=t;)u.add(o),n+=1,o=l(e,n)
for(o=p(t+1,r)-1;e<o&&o<=t;)u.add(o),r+=1,o=p(t+1,r)-1
return u=[...u],u.sort(s),u}(e,t),i=[],c=e
for(let e=0;e<a.length;e++){let t=a[e],s=u(String(c),String(t),r),l=""
n.isPadded||!o||o.pattern!==s.pattern?(n.isPadded&&(l=g(t,n,r)),s.string=l+s.pattern+f(s.count),i.push(s),c=t+1,o=s):(o.count.length>1&&o.count.pop(),o.count.push(s.count[0]),o.string=o.pattern+f(o.count),c=t+1)}return i}function i(e,t,n,r,o){let u=[]
for(let o of e){let{string:e}=o
r||c(t,"string",e)||u.push(n+e),r&&c(t,"string",e)&&u.push(n+e)}return u}function s(e,t){return e>t?1:t>e?-1:0}function c(e,t,n){return e.some(e=>e[t]===n)}function l(e,t){return Number(String(e).slice(0,-t)+"9".repeat(t))}function p(e,t){return e-e%Math.pow(10,t)}function f(e){let[t=0,n=""]=e
return n||t>1?`{${t+(n?","+n:"")}}`:""}function h(e,t,n){return`[${e}${t-e==1?"":"-"}${t}]`}function d(e){return/^-?(0+)\d/.test(e)}function g(e,t,n){if(!t.isPadded)return e
let r=Math.abs(t.maxLen-String(e).length),o=!1!==n.relaxZeros
switch(r){case 0:return""
case 1:return o?"0?":"0"
case 2:return o?"0{0,2}":"00"
default:return o?`0{0,${r}}`:`0{${r}}`}}o.cache={},o.clearCache=()=>o.cache={},e.exports=o},193:e=>{e.exports=function(e){return"number"==typeof e?e-e==0:"string"==typeof e&&""!==e.trim()&&(Number.isFinite?Number.isFinite(+e):isFinite(+e))}}},t={}
function n(r){if(t[r])return t[r].exports
var o=t[r]={exports:{}}
return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(759),t=n.n(e),r=n(516),o=n(751),u=n.n(o)
Object(function(){var e=new Error("Cannot find module 'child_process'")
throw e.code="MODULE_NOT_FOUND",e}())
var a=function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function a(e){try{s(r.next(e))}catch(e){u(e)}}function i(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))},i=function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u
function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o
switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u
break
case 4:return a.label++,{value:u[1],done:!1}
case 5:a.label++,r=u[1],u=[0]
continue
case 7:u=a.ops.pop(),a.trys.pop()
continue
default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0
continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1]
break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u
break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u)
break}o[2]&&a.ops.pop(),a.trys.pop()
continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1]
return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}
const s=function(){return a(void 0,void 0,void 0,(function(){var e,t,n,r
return i(this,(function(o){switch(o.label){case 0:return[4,a(void 0,void 0,void 0,(function(){return i(this,(function(e){return[2,new Promise((function(e,t){Object(function(){var e=new Error("Cannot find module 'child_process'")
throw e.code="MODULE_NOT_FOUND",e}())("git diff -U0 --minimal origin/master",(function(n,r){return n?t(n):e(r)}))}))]}))}))]
case 1:for(e=o.sent().split(/^diff --git.* b\/(.*)\n(?:.*\n){4}/gm),t=[],n=1;n<e.length;n+=2)(r=e[n+1].split("\n").filter((function(e){return e.startsWith("+")}))).length>0&&t.push({filePath:e[n],content:r})
return[2,t]}}))}))}
var c=function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function a(e){try{s(r.next(e))}catch(e){u(e)}}function i(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u
function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o
switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u
break
case 4:return a.label++,{value:u[1],done:!1}
case 5:a.label++,r=u[1],u=[0]
continue
case 7:u=a.ops.pop(),a.trys.pop()
continue
default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0
continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1]
break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u
break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u)
break}o[2]&&a.ops.pop(),a.trys.pop()
continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1]
return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},p={},f=function(e){return c(void 0,void 0,void 0,(function(){var n
return l(this,(function(r){return(n=p[e])?[2,n]:(p[e]=function(e){return c(void 0,void 0,void 0,(function(){var n
return l(this,(function(r){switch(r.label){case 0:return[4,t()(e,{method:"HEAD"})]
case 1:return[2,405===(n=r.sent()).status?t()(e):n]}}))}))}(e),[2,p[e]])}))}))}
const h=function(e){var t=e.link,n=e.url,r=e.linkIncludePatterns,o=e.linkExcludePatterns
return c(void 0,void 0,void 0,(function(){var e,a,i,s,c
return l(this,(function(l){switch(l.label){case 0:if(!u().isMatch(t,r,{exclude:o,bash:!0}))return[3,5]
e=n.href,l.label=1
case 1:return l.trys.push([1,3,,4]),[4,f(e)]
case 2:return a=l.sent(),i=a.status,s=a.ok,[2,{link:t,href:t===e?null:e,description:i,pass:s}]
case 3:return c=l.sent(),[2,{link:t,href:e,description:["Error",c.code&&" "+c.code,c.message&&": "+c.message].filter(Boolean).join(""),pass:!1}]
case 4:return[3,6]
case 5:return[2,{link:t,description:"Excluded",pass:!0}]
case 6:return[2]}}))}))}
Object(function(){var e=new Error("Cannot find module 'path'")
throw e.code="MODULE_NOT_FOUND",e}())
var d=function(e,t,n){return void 0===n&&(n=function(e){return e[1]}),Array.from(e.matchAll(t),n)},g=function(e,t){switch(Object(function(){var e=new Error("Cannot find module 'path'")
throw e.code="MODULE_NOT_FOUND",e}())(e)){case".md":case".mdx":return d(t,/\[.*?\]\((?:<((?:\(.*?\)|.)*?)>|((?:\(.*?\)|.)*?))(?: ["'].*?["'])?\)/gm,(function(e){return e[2]||e[1]}))
case".html":return d(t,/href="(.*?)"/gm)
case".json":return d(t,/"(?:(?:https?:)?\/\/)?(?:)"/gm)
default:return[]}}
const A=function(e){var t=e.filePath,n=e.content
return(Array.isArray(n)?[].concat.apply([],n.map((function(e){return g(t,e)}))):g(t,n)).filter((function(e){return e&&!e.startsWith("#")}))}
var y=function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function a(e){try{s(r.next(e))}catch(e){u(e)}}function i(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))},_=function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u
function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o
switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u
break
case 4:return a.label++,{value:u[1],done:!1}
case 5:a.label++,r=u[1],u=[0]
continue
case 7:u=a.ops.pop(),a.trys.pop()
continue
default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0
continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1]
break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u
break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u)
break}o[2]&&a.ops.pop(),a.trys.pop()
continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1]
return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}
function v(e,t){return y(this,void 0,void 0,(function(){return _(this,(function(n){return[2,Promise.all(e.map(t))]}))}))}var R=function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function a(e){try{s(r.next(e))}catch(e){u(e)}}function i(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))},E=function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u
function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o
switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u
break
case 4:return a.label++,{value:u[1],done:!1}
case 5:a.label++,r=u[1],u=[0]
continue
case 7:u=a.ops.pop(),a.trys.pop()
continue
default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0
continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1]
break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u
break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u)
break}o[2]&&a.ops.pop(),a.trys.pop()
continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1]
return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},b=function(e,t){var n=e.filePath,r=e.content,o=t.rootURL,u=t.linkIncludePatterns,a=t.linkExcludePatterns
return R(void 0,void 0,void 0,(function(){var e,t
return E(this,(function(i){switch(i.label){case 0:return e={filePath:n},[4,"function"==typeof r?r(n):r]
case 1:return e.content=i.sent(),[4,v(A(e),(function(e){return R(void 0,void 0,void 0,(function(){var t
return E(this,(function(n){switch(n.label){case 0:return t=function(e,t){return new URL(/^(https?:\/)?\//.test(e)?e:"https://"+e,t)}(e,o),[4,h({link:e,url:t,linkIncludePatterns:u,linkExcludePatterns:a})]
case 1:return[2,n.sent()]}}))}))}))]
case 2:return t=i.sent().filter(Boolean),[2,{filePath:n,checks:t}]}}))}))},C=function(e,t){return R(void 0,void 0,void 0,(function(){return E(this,(function(n){switch(n.label){case 0:return[4,v(e,(function(e){return b(e,t)}))]
case 1:return[2,n.sent().filter(Boolean)]}}))}))},x=function(e){var t=e.checks,n=e.filePath
return"* "+(t.some((function(e){return!e.pass}))?"FAIL":"PASS")+": "+n+"\n"},m=function(e){var t=e.link,n=e.href,r=e.description
return"  - "+(e.pass?"PASS":"FAIL")+": "+t+(n?" = "+n:"")+" ("+r+")"},S=function(e,t){var n=e.filePath,r=e.checks,o=t.fileFormat,u=void 0===o?x:o,a=t.linkFormat,i=void 0===a?m:a,s=t.linkSeparator,c=void 0===s?"\n":s
return r.length>0?u({filePath:n,checks:r})+r.sort((function(e,t){return e.pass===t.pass?0:e.pass?1:-1})).map(i).join(c):null}
const w=function(e,t){void 0===t&&(t={})
var n=t.entryFormat,r=void 0===n?S:n,o=t.entrySeparator,u=void 0===o?"\n\n":o
return e.map((function(e,n){return r(e,t,n)})).filter(Boolean).join(u)}
Object(function(){var e=new Error("Cannot find module 'fs'")
throw e.code="MODULE_NOT_FOUND",e}())
var O=function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function a(e){try{s(r.next(e))}catch(e){u(e)}}function i(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))},H=function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u
function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o
switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u
break
case 4:return a.label++,{value:u[1],done:!1}
case 5:a.label++,r=u[1],u=[0]
continue
case 7:u=a.ops.pop(),a.trys.pop()
continue
default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0
continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1]
break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u
break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u)
break}o[2]&&a.ops.pop(),a.trys.pop()
continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1]
return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},T=function(e){if(e){if(!Array.isArray(e))return e
if(e.length>0)return e}return"**"}
function L(e){return O(this,void 0,void 0,(function(){return H(this,(function(t){return[2,new Promise((function(t,n){return Object(function(){var e=new Error("Cannot find module 'fs'")
throw e.code="MODULE_NOT_FOUND",e}())(e,(function(e,r){return e?n(e):t(String(r).split(/\n+/))}))}))]}))}))}function k(e){return O(this,void 0,void 0,(function(){var t,n,r,o,u
return H(this,(function(a){switch(a.label){case 0:return e?Array.isArray(e)?(r=(n=(u=[]).concat).apply,o=[u],[4,v(e,L)]):[3,2]:[2,[]]
case 1:return t=r.apply(n,o.concat([a.sent()])),[3,3]
case 2:t=L(e),a.label=3
case 3:return[2,t]}}))}))}function N(e){return O(this,void 0,void 0,(function(){var t=this
return H(this,(function(n){return[2,v(e,(function(e){var n=e[0],r=e[1]
return O(t,void 0,void 0,(function(){var e
return H(this,(function(t){switch(t.label){case 0:return[4,k(n)]
case 1:return e=t.sent(),[2,(r?e.concat(r):e).filter(Boolean)]}}))}))}))]}))}))}Object(function(){var e=new Error("Cannot find module 'child_process'")
throw e.code="MODULE_NOT_FOUND",e}())
var $=function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function a(e){try{s(r.next(e))}catch(e){u(e)}}function i(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}s((r=r.apply(e,t||[])).next())}))},P=function(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u
function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o
switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u
break
case 4:return a.label++,{value:u[1],done:!1}
case 5:a.label++,r=u[1],u=[0]
continue
case 7:u=a.ops.pop(),a.trys.pop()
continue
default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0
continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1]
break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u
break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u)
break}o[2]&&a.ops.pop(),a.trys.pop()
continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1]
return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}
function I(e){return $(this,void 0,void 0,(function(){var t
return P(this,(function(n){switch(n.label){case 0:return[4,r.getInput(e)]
case 1:t=n.sent()
try{return[2,JSON.parse(t)]}catch(e){if(e instanceof SyntaxError)return[2,t]
throw e}return[2]}}))}))}!function(){$(this,void 0,void 0,(function(){var e,t,n,o,u,a,i,c,l,p,f,h,d,g,A,y,_,R,E,b,x
return P(this,(function(m){switch(m.label){case 0:return e=new Promise((function(e,t){Object(function(){var e=new Error("Cannot find module 'child_process'")
throw e.code="MODULE_NOT_FOUND",e}())("git fetch origin master",(function(n){return n?t(n):e()}))})),[4,v(["rootURL","linkIncludePatternFiles","linkIncludePatterns","linkExcludePatternFiles","linkExcludePatterns","fileIncludePatternFiles","fileIncludePatterns","fileExcludePatternFiles","fileExcludePatterns"],I)]
case 1:return t=m.sent(),n=t[0],o=t[1],u=t[2],a=t[3],i=t[4],c=t[5],l=t[6],p=t[7],f=t[8],[4,N([[o,u],[a,i],[c,l],[p,f]])]
case 2:return h=m.sent(),d=h[0],g=h[1],A=h[2],y=h[3],_={source:"git-diff",rootURL:n,linkIncludePatterns:T(d),linkExcludePatterns:g,fileIncludePatterns:T(A),fileExcludePatterns:y},[4,e]
case 3:return m.sent(),[4,s()]
case 4:return R=m.sent(),[4,C(R,_)]
case 5:return 0===(E=m.sent()).length?(r.setOutput("output",JSON.stringify({summary:"There were no files to check links in."})),r.setOutput("conclusion","success")):(b="# Link check report\n\n"+w(E,{linkFormat:function(e){var t=e.link,n=e.href,r=e.description
return"  - "+(e.pass?":heavy_check_mark:":":x:")+" "+t+(n&&n!==t?" = "+n:"")+" ("+r+")"}}),x=E.some((function(e){return e.checks.some((function(e){return!e.pass}))})),r.setOutput("output",JSON.stringify({summary:x?"Some new links failed the check.":"All new links passed the check!",text_description:b})),r.setOutput("conclusion",x?"failure":"success")),process.exit(0),[2]}}))}))}()})()})()
