(()=>{var __webpack_modules__={2592:function(e,t,n){"use strict"
var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}
Object.defineProperty(t,"__esModule",{value:!0})
const i=r(n(2087))
function s(e,t,n){const r=new o(e,t,n)
process.stdout.write(r.toString()+i.EOL)}t.issueCommand=s,t.issue=function(e,t=""){s(e,{},t)}
class o{constructor(e,t,n){e||(e="missing.command"),this.command=e,this.properties=t,this.message=n}toString(){let e="::"+this.command
if(this.properties&&Object.keys(this.properties).length>0){e+=" "
let n=!0
for(const r in this.properties)if(this.properties.hasOwnProperty(r)){const i=this.properties[r]
i&&(n?n=!1:e+=",",e+=`${r}=${t=i,a(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}`)}}var t
return e+="::"+function(e){return a(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}(this.message),e}}function a(e){return null==e?"":"string"==typeof e||e instanceof String?e:JSON.stringify(e)}t.toCommandValue=a},516:function(e,t,n){"use strict"
var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}
Object.defineProperty(t,"__esModule",{value:!0})
const s=n(2592),o=i(n(2087)),a=i(n(5622))
var u
function c(e){s.issue("error",e instanceof Error?e.toString():e)}function l(e){s.issue("group",e)}function p(){s.issue("endgroup")}!function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"}(u=t.ExitCode||(t.ExitCode={})),t.exportVariable=function(e,t){const n=s.toCommandValue(t)
process.env[e]=n,s.issueCommand("set-env",{name:e},n)},t.setSecret=function(e){s.issueCommand("add-mask",{},e)},t.addPath=function(e){s.issueCommand("add-path",{},e),process.env.PATH=`${e}${a.delimiter}${process.env.PATH}`},t.getInput=function(e,t){const n=process.env["INPUT_"+e.replace(/ /g,"_").toUpperCase()]||""
if(t&&t.required&&!n)throw new Error("Input required and not supplied: "+e)
return n.trim()},t.setOutput=function(e,t){s.issueCommand("set-output",{name:e},t)},t.setCommandEcho=function(e){s.issue("echo",e?"on":"off")},t.setFailed=function(e){process.exitCode=u.Failure,c(e)},t.isDebug=function(){return"1"===process.env.RUNNER_DEBUG},t.debug=function(e){s.issueCommand("debug",{},e)},t.error=c,t.warning=function(e){s.issue("warning",e instanceof Error?e.toString():e)},t.info=function(e){process.stdout.write(e+o.EOL)},t.startGroup=l,t.endGroup=p,t.group=function(e,t){return r(this,void 0,void 0,(function*(){let n
l(e)
try{n=yield t()}finally{p()}return n}))},t.saveState=function(e,t){s.issueCommand("save-state",{name:e},t)},t.getState=function(e){return process.env["STATE_"+e]||""}},8166:(e,t,n)=>{"use strict"
var r,i,s
s=n(8034),i=n(4788),r=function(){class e{constructor(e={}){this.options=e,s.load(this.options,this.defaults,this),this.Events=new i(this),this._arr=[],this._resetPromise(),this._lastFlush=Date.now()}_resetPromise(){return this._promise=new this.Promise((e,t)=>this._resolve=e)}_flush(){return clearTimeout(this._timeout),this._lastFlush=Date.now(),this._resolve(),this.Events.trigger("batch",this._arr),this._arr=[],this._resetPromise()}add(e){var t
return this._arr.push(e),t=this._promise,this._arr.length===this.maxSize?this._flush():null!=this.maxTime&&1===this._arr.length&&(this._timeout=setTimeout(()=>this._flush(),this.maxTime)),t}}return e.prototype.defaults={maxTime:null,maxSize:null,Promise},e}.call(void 0),e.exports=r},7097:(e,t,n)=>{"use strict"
function r(e,t){return o(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0
try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||s()}function i(e){return o(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e){if(Array.isArray(e))return e}function a(e,t,n,r,i,s,o){try{var a=e[s](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,i)}function u(e){return function(){var t=this,n=arguments
return new Promise((function(r,i){var s=e.apply(t,n)
function o(e){a(s,r,i,o,u,"next",e)}function u(e){a(s,r,i,o,u,"throw",e)}o(void 0)}))}}var c,l,p,h,d,f,_,y,v,g=[].splice
v=n(8034),d=n(7206),p=n(9358),h=n(3565),f=n(7531),l=n(4788),_=n(9348),y=n(8254),c=function(){class e{constructor(t={},...n){var r,i
this._addToQueue=this._addToQueue.bind(this),this._validateOptions(t,n),v.load(t,this.instanceDefaults,this),this._queues=new d(10),this._scheduled={},this._states=new _(["RECEIVED","QUEUED","RUNNING","EXECUTING"].concat(this.trackDoneStatus?["DONE"]:[])),this._limiter=null,this.Events=new l(this),this._submitLock=new y("submit",this.Promise),this._registerLock=new y("register",this.Promise),i=v.load(t,this.storeDefaults,{}),this._store=function(){if("redis"===this.datastore||"ioredis"===this.datastore||null!=this.connection)return r=v.load(t,this.redisStoreDefaults,{}),new f(this,i,r)
if("local"===this.datastore)return r=v.load(t,this.localStoreDefaults,{}),new h(this,i,r)
throw new e.prototype.BottleneckError("Invalid datastore type: "+this.datastore)}.call(this),this._queues.on("leftzero",()=>{var e
return null!=(e=this._store.heartbeat)&&"function"==typeof e.ref?e.ref():void 0}),this._queues.on("zero",()=>{var e
return null!=(e=this._store.heartbeat)&&"function"==typeof e.unref?e.unref():void 0})}_validateOptions(t,n){if(null==t||"object"!=typeof t||0!==n.length)throw new e.prototype.BottleneckError("Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1.")}ready(){return this._store.ready}clients(){return this._store.clients}channel(){return"b_"+this.id}channel_client(){return`b_${this.id}_${this._store.clientId}`}publish(e){return this._store.__publish__(e)}disconnect(e=!0){return this._store.__disconnect__(e)}chain(e){return this._limiter=e,this}queued(e){return this._queues.queued(e)}clusterQueued(){return this._store.__queued__()}empty(){return 0===this.queued()&&this._submitLock.isEmpty()}running(){return this._store.__running__()}done(){return this._store.__done__()}jobStatus(e){return this._states.jobStatus(e)}jobs(e){return this._states.statusJobs(e)}counts(){return this._states.statusCounts()}_randomIndex(){return Math.random().toString(36).slice(2)}check(e=1){return this._store.__check__(e)}_clearGlobalState(e){return null!=this._scheduled[e]&&(clearTimeout(this._scheduled[e].expiration),delete this._scheduled[e],!0)}_free(e,t,n,r){var i=this
return u((function*(){var t,s
try{if(s=(yield i._store.__free__(e,n.weight)).running,i.Events.trigger("debug","Freed "+n.id,r),0===s&&i.empty())return i.Events.trigger("idle")}catch(e){return t=e,i.Events.trigger("error",t)}}))()}_run(e,t,n){var r,i,s
return t.doRun(),r=this._clearGlobalState.bind(this,e),s=this._run.bind(this,e,t),i=this._free.bind(this,e,t),this._scheduled[e]={timeout:setTimeout(()=>t.doExecute(this._limiter,r,s,i),n),expiration:null!=t.options.expiration?setTimeout((function(){return t.doExpire(r,s,i)}),n+t.options.expiration):void 0,job:t}}_drainOne(e){return this._registerLock.schedule(()=>{var t,n,r,i,s
if(0===this.queued())return this.Promise.resolve(null)
s=this._queues.getFirst()
var o=r=s.first()
return i=o.options,t=o.args,null!=e&&i.weight>e?this.Promise.resolve(null):(this.Events.trigger("debug","Draining "+i.id,{args:t,options:i}),n=this._randomIndex(),this._store.__register__(n,i.weight,i.expiration).then(({success:e,wait:o,reservoir:a})=>{var u
return this.Events.trigger("debug","Drained "+i.id,{success:e,args:t,options:i}),e?(s.shift(),(u=this.empty())&&this.Events.trigger("empty"),0===a&&this.Events.trigger("depleted",u),this._run(n,r,o),this.Promise.resolve(i.weight)):this.Promise.resolve(null)}))})}_drainAll(e,t=0){return this._drainOne(e).then(n=>{var r
return null!=n?(r=null!=e?e-n:e,this._drainAll(r,t+n)):this.Promise.resolve(t)}).catch(e=>this.Events.trigger("error",e))}_dropAllQueued(e){return this._queues.shiftAll((function(t){return t.doDrop({message:e})}))}stop(t={}){var n,r
return t=v.load(t,this.stopDefaults),r=e=>{var t
return t=()=>{var t
return(t=this._states.counts)[0]+t[1]+t[2]+t[3]===e},new this.Promise((e,n)=>t()?e():this.on("done",()=>{if(t())return this.removeAllListeners("done"),e()}))},n=t.dropWaitingJobs?(this._run=function(e,n){return n.doDrop({message:t.dropErrorMessage})},this._drainOne=()=>this.Promise.resolve(null),this._registerLock.schedule(()=>this._submitLock.schedule(()=>{var e,n,i
for(e in n=this._scheduled)i=n[e],"RUNNING"===this.jobStatus(i.job.options.id)&&(clearTimeout(i.timeout),clearTimeout(i.expiration),i.job.doDrop({message:t.dropErrorMessage}))
return this._dropAllQueued(t.dropErrorMessage),r(0)}))):this.schedule({priority:9,weight:0},()=>r(1)),this._receive=function(n){return n._reject(new e.prototype.BottleneckError(t.enqueueErrorMessage))},this.stop=()=>this.Promise.reject(new e.prototype.BottleneckError("stop() has already been called")),n}_addToQueue(t){var n=this
return u((function*(){var r,i,s,o,a,u,c
r=t.args,o=t.options
try{var l=yield n._store.__submit__(n.queued(),o.weight)
a=l.reachedHWM,i=l.blocked,c=l.strategy}catch(e){return s=e,n.Events.trigger("debug","Could not queue "+o.id,{args:r,options:o,error:s}),t.doDrop({error:s}),!1}return i?(t.doDrop(),!0):a&&(null!=(u=c===e.prototype.strategy.LEAK?n._queues.shiftLastFrom(o.priority):c===e.prototype.strategy.OVERFLOW_PRIORITY?n._queues.shiftLastFrom(o.priority+1):c===e.prototype.strategy.OVERFLOW?t:void 0)&&u.doDrop(),null==u||c===e.prototype.strategy.OVERFLOW)?(null==u&&t.doDrop(),a):(t.doQueue(a,i),n._queues.push(t),yield n._drainAll(),a)}))()}_receive(t){return null!=this._states.jobStatus(t.options.id)?(t._reject(new e.prototype.BottleneckError(`A job with the same id already exists (id=${t.options.id})`)),!1):(t.doReceive(),this._submitLock.schedule(this._addToQueue,t))}submit(...e){var t,n,s,o,a,u,c,l
"function"==typeof e[0]?(a=i(e),n=a[0],e=a.slice(1),u=r(g.call(e,-1),1),t=u[0],o=v.load({},this.jobDefaults)):(o=(c=i(e))[0],n=c[1],e=c.slice(2),l=r(g.call(e,-1),1),t=l[0],o=v.load(o,this.jobDefaults))
return(s=new p((...e)=>new this.Promise((function(t,r){return n(...e,(function(...e){return(null!=e[0]?r:t)(e)}))})),e,o,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise)).promise.then((function(e){return"function"==typeof t?t(...e):void 0})).catch((function(e){return Array.isArray(e)?"function"==typeof t?t(...e):void 0:"function"==typeof t?t(e):void 0})),this._receive(s)}schedule(...e){var t,n,r
if("function"==typeof e[0]){var s=i(e)
r=s[0],e=s.slice(1),n={}}else{var o=i(e)
n=o[0],r=o[1],e=o.slice(2)}return t=new p(r,e,n,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),this._receive(t),t.promise}wrap(e){var t,n
return t=this.schedule.bind(this),(n=function(...n){return t(e.bind(this),...n)}).withOptions=function(n,...r){return t(n,e,...r)},n}updateSettings(e={}){var t=this
return u((function*(){return yield t._store.__updateSettings__(v.overwrite(e,t.storeDefaults)),v.overwrite(e,t.instanceDefaults,t),t}))()}currentReservoir(){return this._store.__currentReservoir__()}incrementReservoir(e=0){return this._store.__incrementReservoir__(e)}}return e.default=e,e.Events=l,e.version=e.prototype.version=n(5607).i,e.strategy=e.prototype.strategy={LEAK:1,OVERFLOW:2,OVERFLOW_PRIORITY:4,BLOCK:3},e.BottleneckError=e.prototype.BottleneckError=n(7692),e.Group=e.prototype.Group=n(4248),e.RedisConnection=e.prototype.RedisConnection=n(7655),e.IORedisConnection=e.prototype.IORedisConnection=n(6612),e.Batcher=e.prototype.Batcher=n(8166),e.prototype.jobDefaults={priority:5,weight:1,expiration:null,id:"<no-id>"},e.prototype.storeDefaults={maxConcurrent:null,minTime:0,highWater:null,strategy:e.prototype.strategy.LEAK,penalty:null,reservoir:null,reservoirRefreshInterval:null,reservoirRefreshAmount:null,reservoirIncreaseInterval:null,reservoirIncreaseAmount:null,reservoirIncreaseMaximum:null},e.prototype.localStoreDefaults={Promise,timeout:null,heartbeatInterval:250},e.prototype.redisStoreDefaults={Promise,timeout:null,heartbeatInterval:5e3,clientTimeout:1e4,Redis:null,clientOptions:{},clusterNodes:null,clearDatastore:!1,connection:null},e.prototype.instanceDefaults={datastore:"local",connection:null,id:"<no-id>",rejectOnDrop:!0,trackDoneStatus:!1,Promise},e.prototype.stopDefaults={enqueueErrorMessage:"This limiter has been stopped and cannot accept new jobs.",dropWaitingJobs:!0,dropErrorMessage:"This limiter has been stopped."},e}.call(void 0),e.exports=c},7692:e=>{"use strict"
var t
t=class extends Error{},e.exports=t},1147:e=>{"use strict"
var t
t=class{constructor(e,t){this.incr=e,this.decr=t,this._first=null,this._last=null,this.length=0}push(e){var t
this.length++,"function"==typeof this.incr&&this.incr(),t={value:e,prev:this._last,next:null},null!=this._last?(this._last.next=t,this._last=t):this._first=this._last=t}shift(){var e
if(null!=this._first)return this.length--,"function"==typeof this.decr&&this.decr(),e=this._first.value,null!=(this._first=this._first.next)?this._first.prev=null:this._last=null,e}first(){if(null!=this._first)return this._first.value}getArray(){var e,t,n
for(e=this._first,n=[];null!=e;)n.push((t=e,e=e.next,t.value))
return n}forEachShift(e){var t
for(t=this.shift();null!=t;)e(t),t=this.shift()}debug(){var e,t,n,r,i
for(e=this._first,i=[];null!=e;)i.push((t=e,e=e.next,{value:t.value,prev:null!=(n=t.prev)?n.value:void 0,next:null!=(r=t.next)?r.value:void 0}))
return i}},e.exports=t},4788:e=>{"use strict"
function t(e,t,n,r,i,s,o){try{var a=e[s](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,i)}function n(e){return function(){var n=this,r=arguments
return new Promise((function(i,s){var o=e.apply(n,r)
function a(e){t(o,i,s,a,u,"next",e)}function u(e){t(o,i,s,a,u,"throw",e)}a(void 0)}))}}var r
r=class{constructor(e){if(this.instance=e,this._events={},null!=this.instance.on||null!=this.instance.once||null!=this.instance.removeAllListeners)throw new Error("An Emitter already exists for this object")
this.instance.on=(e,t)=>this._addListener(e,"many",t),this.instance.once=(e,t)=>this._addListener(e,"once",t),this.instance.removeAllListeners=(e=null)=>null!=e?delete this._events[e]:this._events={}}_addListener(e,t,n){var r
return null==(r=this._events)[e]&&(r[e]=[]),this._events[e].push({cb:n,status:t}),this.instance}listenerCount(e){return null!=this._events[e]?this._events[e].length:0}trigger(e,...t){var r=this
return n((function*(){var i,s
try{if("debug"!==e&&r.trigger("debug","Event triggered: "+e,t),null==r._events[e])return
return r._events[e]=r._events[e].filter((function(e){return"none"!==e.status})),s=r._events[e].map(function(){var e=n((function*(e){var n,i
if("none"!==e.status){"once"===e.status&&(e.status="none")
try{return"function"==typeof(null!=(i="function"==typeof e.cb?e.cb(...t):void 0)?i.then:void 0)?yield i:i}catch(e){return n=e,r.trigger("error",n),null}}}))
return function(t){return e.apply(this,arguments)}}()),(yield Promise.all(s)).find((function(e){return null!=e}))}catch(e){return i=e,r.trigger("error",i),null}}))()}},e.exports=r},4248:(e,t,n)=>{"use strict"
function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0
try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e,t,n,r,i,s,o){try{var a=e[s](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,i)}function s(e){return function(){var t=this,n=arguments
return new Promise((function(r,s){var o=e.apply(t,n)
function a(e){i(o,r,s,a,u,"next",e)}function u(e){i(o,r,s,a,u,"throw",e)}a(void 0)}))}}var o,a,u,c,l,p
p=n(8034),o=n(4788),c=n(7655),u=n(6612),l=n(7339),a=function(){class e{constructor(e={}){this.deleteKey=this.deleteKey.bind(this),this.limiterOptions=e,p.load(this.limiterOptions,this.defaults,this),this.Events=new o(this),this.instances={},this.Bottleneck=n(7097),this._startAutoCleanup(),this.sharedConnection=null!=this.connection,null==this.connection&&("redis"===this.limiterOptions.datastore?this.connection=new c(Object.assign({},this.limiterOptions,{Events:this.Events})):"ioredis"===this.limiterOptions.datastore&&(this.connection=new u(Object.assign({},this.limiterOptions,{Events:this.Events}))))}key(e=""){var t
return null!=(t=this.instances[e])?t:(()=>{var t
return t=this.instances[e]=new this.Bottleneck(Object.assign(this.limiterOptions,{id:`${this.id}-${e}`,timeout:this.timeout,connection:this.connection})),this.Events.trigger("created",t,e),t})()}deleteKey(e=""){var t=this
return s((function*(){var n,r
return r=t.instances[e],t.connection&&(n=yield t.connection.__runCommand__(["del",...l.allKeys(`${t.id}-${e}`)])),null!=r&&(delete t.instances[e],yield r.disconnect()),null!=r||n>0}))()}limiters(){var e,t,n,r
for(e in n=[],t=this.instances)r=t[e],n.push({key:e,limiter:r})
return n}keys(){return Object.keys(this.instances)}clusterKeys(){var e=this
return s((function*(){var t,n,i,s,o,a,u,c
if(null==e.connection)return e.Promise.resolve(e.keys())
for(a=[],t=null,c=`b_${e.id}-`.length,n="_settings".length;0!==t;){var l=r(yield e.connection.__runCommand__(["scan",null!=t?t:0,"match",`b_${e.id}-*_settings`,"count",1e4]),2)
for(t=~~l[0],s=0,u=(i=l[1]).length;s<u;s++)o=i[s],a.push(o.slice(c,-n))}return a}))()}_startAutoCleanup(){var e,t=this
return clearInterval(this.interval),"function"==typeof(e=this.interval=setInterval(s((function*(){var e,n,r,i,s,o
for(n in s=Date.now(),i=[],r=t.instances){o=r[n]
try{(yield o._store.__groupCheck__(s))?i.push(t.deleteKey(n)):i.push(void 0)}catch(t){e=t,i.push(o.Events.trigger("error",e))}}return i})),this.timeout/2)).unref?e.unref():void 0}updateSettings(e={}){if(p.overwrite(e,this.defaults,this),p.overwrite(e,e,this.limiterOptions),null!=e.timeout)return this._startAutoCleanup()}disconnect(e=!0){var t
if(!this.sharedConnection)return null!=(t=this.connection)?t.disconnect(e):void 0}}return e.prototype.defaults={timeout:3e5,connection:null,Promise,id:"group-key"},e}.call(void 0),e.exports=a},6612:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict"
function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){var n=[],r=!0,i=!1,s=void 0
try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}function _arrayWithHoles(e){if(Array.isArray(e))return e}function asyncGeneratorStep(e,t,n,r,i,s,o){try{var a=e[s](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,i)}function _asyncToGenerator(e){return function(){var t=this,n=arguments
return new Promise((function(r,i){var s=e.apply(t,n)
function o(e){asyncGeneratorStep(s,r,i,o,a,"next",e)}function a(e){asyncGeneratorStep(s,r,i,o,a,"throw",e)}o(void 0)}))}}var Events,IORedisConnection,Scripts,parser
parser=__webpack_require__(8034),Events=__webpack_require__(4788),Scripts=__webpack_require__(7339),IORedisConnection=function(){class IORedisConnection{constructor(options={}){parser.load(options,this.defaults,this),null==this.Redis&&(this.Redis=eval("require")("ioredis")),null==this.Events&&(this.Events=new Events(this)),this.terminated=!1,null!=this.clusterNodes?(this.client=new this.Redis.Cluster(this.clusterNodes,this.clientOptions),this.subscriber=new this.Redis.Cluster(this.clusterNodes,this.clientOptions)):null!=this.client&&null==this.client.duplicate?this.subscriber=new this.Redis.Cluster(this.client.startupNodes,this.client.options):(null==this.client&&(this.client=new this.Redis(this.clientOptions)),this.subscriber=this.client.duplicate()),this.limiters={},this.ready=this.Promise.all([this._setup(this.client,!1),this._setup(this.subscriber,!0)]).then(()=>(this._loadScripts(),{client:this.client,subscriber:this.subscriber}))}_setup(e,t){return e.setMaxListeners(0),new this.Promise((n,r)=>(e.on("error",e=>this.Events.trigger("error",e)),t&&e.on("message",(e,t)=>{var n
return null!=(n=this.limiters[e])?n._store.onMessage(e,t):void 0}),"ready"===e.status?n():e.once("ready",n)))}_loadScripts(){return Scripts.names.forEach(e=>this.client.defineCommand(e,{lua:Scripts.payload(e)}))}__runCommand__(e){var t=this
return _asyncToGenerator((function*(){yield t.ready
var n=_slicedToArray(yield t.client.pipeline([e]).exec(),1),r=_slicedToArray(n[0],2)
return r[0],r[1]}))()}__addLimiter__(e){return this.Promise.all([e.channel(),e.channel_client()].map(t=>new this.Promise((n,r)=>this.subscriber.subscribe(t,()=>(this.limiters[t]=e,n())))))}__removeLimiter__(e){var t=this
return[e.channel(),e.channel_client()].forEach(function(){var e=_asyncToGenerator((function*(e){return t.terminated||(yield t.subscriber.unsubscribe(e)),delete t.limiters[e]}))
return function(t){return e.apply(this,arguments)}}())}__scriptArgs__(e,t,n,r){var i
return[(i=Scripts.keys(e,t)).length].concat(i,n,r)}__scriptFn__(e){return this.client[e].bind(this.client)}disconnect(e=!0){var t,n,r,i
for(t=0,r=(i=Object.keys(this.limiters)).length;t<r;t++)n=i[t],clearInterval(this.limiters[n]._store.heartbeat)
return this.limiters={},this.terminated=!0,e?this.Promise.all([this.client.quit(),this.subscriber.quit()]):(this.client.disconnect(),this.subscriber.disconnect(),this.Promise.resolve())}}return IORedisConnection.prototype.datastore="ioredis",IORedisConnection.prototype.defaults={Redis:null,clientOptions:{},clusterNodes:null,client:null,Promise,Events:null},IORedisConnection}.call(void 0),module.exports=IORedisConnection},9358:(e,t,n)=>{"use strict"
function r(e,t,n,r,i,s,o){try{var a=e[s](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var t=this,n=arguments
return new Promise((function(i,s){var o=e.apply(t,n)
function a(e){r(o,i,s,a,u,"next",e)}function u(e){r(o,i,s,a,u,"throw",e)}a(void 0)}))}}var s,o,a
a=n(8034),s=n(7692),o=class{constructor(e,t,n,r,i,s,o,u){this.task=e,this.args=t,this.rejectOnDrop=i,this.Events=s,this._states=o,this.Promise=u,this.options=a.load(n,r),this.options.priority=this._sanitizePriority(this.options.priority),this.options.id===r.id&&(this.options.id=`${this.options.id}-${this._randomIndex()}`),this.promise=new this.Promise((e,t)=>{this._resolve=e,this._reject=t}),this.retryCount=0}_sanitizePriority(e){var t
return(t=~~e!==e?5:e)<0?0:t>9?9:t}_randomIndex(){return Math.random().toString(36).slice(2)}doDrop({error:e,message:t="This job has been dropped by Bottleneck"}={}){return!!this._states.remove(this.options.id)&&(this.rejectOnDrop&&this._reject(null!=e?e:new s(t)),this.Events.trigger("dropped",{args:this.args,options:this.options,task:this.task,promise:this.promise}),!0)}_assertStatus(e){var t
if((t=this._states.jobStatus(this.options.id))!==e&&("DONE"!==e||null!==t))throw new s(`Invalid job status ${t}, expected ${e}. Please open an issue at https://github.com/SGrondin/bottleneck/issues`)}doReceive(){return this._states.start(this.options.id),this.Events.trigger("received",{args:this.args,options:this.options})}doQueue(e,t){return this._assertStatus("RECEIVED"),this._states.next(this.options.id),this.Events.trigger("queued",{args:this.args,options:this.options,reachedHWM:e,blocked:t})}doRun(){return 0===this.retryCount?(this._assertStatus("QUEUED"),this._states.next(this.options.id)):this._assertStatus("EXECUTING"),this.Events.trigger("scheduled",{args:this.args,options:this.options})}doExecute(e,t,n,r){var s=this
return i((function*(){var i,o,a
0===s.retryCount?(s._assertStatus("RUNNING"),s._states.next(s.options.id)):s._assertStatus("EXECUTING"),o={args:s.args,options:s.options,retryCount:s.retryCount},s.Events.trigger("executing",o)
try{if(a=yield null!=e?e.schedule(s.options,s.task,...s.args):s.task(...s.args),t())return s.doDone(o),yield r(s.options,o),s._assertStatus("DONE"),s._resolve(a)}catch(e){return i=e,s._onFailure(i,o,t,n,r)}}))()}doExpire(e,t,n){var r,i
return this._states.jobStatus("RUNNING"===this.options.id)&&this._states.next(this.options.id),this._assertStatus("EXECUTING"),i={args:this.args,options:this.options,retryCount:this.retryCount},r=new s(`This job timed out after ${this.options.expiration} ms.`),this._onFailure(r,i,e,t,n)}_onFailure(e,t,n,r,s){var o=this
return i((function*(){var i,a
if(n())return null!=(i=yield o.Events.trigger("failed",e,t))?(a=~~i,o.Events.trigger("retry",`Retrying ${o.options.id} after ${a} ms`,t),o.retryCount++,r(a)):(o.doDone(t),yield s(o.options,t),o._assertStatus("DONE"),o._reject(e))}))()}doDone(e){return this._assertStatus("EXECUTING"),this._states.next(this.options.id),this.Events.trigger("done",e)}},e.exports=o},3565:(e,t,n)=>{"use strict"
function r(e,t,n,r,i,s,o){try{var a=e[s](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var t=this,n=arguments
return new Promise((function(i,s){var o=e.apply(t,n)
function a(e){r(o,i,s,a,u,"next",e)}function u(e){r(o,i,s,a,u,"throw",e)}a(void 0)}))}}var s,o,a
a=n(8034),s=n(7692),o=class{constructor(e,t,n){this.instance=e,this.storeOptions=t,this.clientId=this.instance._randomIndex(),a.load(n,n,this),this._nextRequest=this._lastReservoirRefresh=this._lastReservoirIncrease=Date.now(),this._running=0,this._done=0,this._unblockTime=0,this.ready=this.Promise.resolve(),this.clients={},this._startHeartbeat()}_startHeartbeat(){var e
return null==this.heartbeat&&(null!=this.storeOptions.reservoirRefreshInterval&&null!=this.storeOptions.reservoirRefreshAmount||null!=this.storeOptions.reservoirIncreaseInterval&&null!=this.storeOptions.reservoirIncreaseAmount)?"function"==typeof(e=this.heartbeat=setInterval(()=>{var e,t,n,r,i
if(r=Date.now(),null!=this.storeOptions.reservoirRefreshInterval&&r>=this._lastReservoirRefresh+this.storeOptions.reservoirRefreshInterval&&(this._lastReservoirRefresh=r,this.storeOptions.reservoir=this.storeOptions.reservoirRefreshAmount,this.instance._drainAll(this.computeCapacity())),null!=this.storeOptions.reservoirIncreaseInterval&&r>=this._lastReservoirIncrease+this.storeOptions.reservoirIncreaseInterval){var s=this.storeOptions
if(e=s.reservoirIncreaseAmount,n=s.reservoirIncreaseMaximum,i=s.reservoir,this._lastReservoirIncrease=r,(t=null!=n?Math.min(e,n-i):e)>0)return this.storeOptions.reservoir+=t,this.instance._drainAll(this.computeCapacity())}},this.heartbeatInterval)).unref?e.unref():void 0:clearInterval(this.heartbeat)}__publish__(e){var t=this
return i((function*(){return yield t.yieldLoop(),t.instance.Events.trigger("message",e.toString())}))()}__disconnect__(e){var t=this
return i((function*(){return yield t.yieldLoop(),clearInterval(t.heartbeat),t.Promise.resolve()}))()}yieldLoop(e=0){return new this.Promise((function(t,n){return setTimeout(t,e)}))}computePenalty(){var e
return null!=(e=this.storeOptions.penalty)?e:15*this.storeOptions.minTime||5e3}__updateSettings__(e){var t=this
return i((function*(){return yield t.yieldLoop(),a.overwrite(e,e,t.storeOptions),t._startHeartbeat(),t.instance._drainAll(t.computeCapacity()),!0}))()}__running__(){var e=this
return i((function*(){return yield e.yieldLoop(),e._running}))()}__queued__(){var e=this
return i((function*(){return yield e.yieldLoop(),e.instance.queued()}))()}__done__(){var e=this
return i((function*(){return yield e.yieldLoop(),e._done}))()}__groupCheck__(e){var t=this
return i((function*(){return yield t.yieldLoop(),t._nextRequest+t.timeout<e}))()}computeCapacity(){var e,t,n=this.storeOptions
return e=n.maxConcurrent,t=n.reservoir,null!=e&&null!=t?Math.min(e-this._running,t):null!=e?e-this._running:null!=t?t:null}conditionsCheck(e){var t
return null==(t=this.computeCapacity())||e<=t}__incrementReservoir__(e){var t=this
return i((function*(){var n
return yield t.yieldLoop(),n=t.storeOptions.reservoir+=e,t.instance._drainAll(t.computeCapacity()),n}))()}__currentReservoir__(){var e=this
return i((function*(){return yield e.yieldLoop(),e.storeOptions.reservoir}))()}isBlocked(e){return this._unblockTime>=e}check(e,t){return this.conditionsCheck(e)&&this._nextRequest-t<=0}__check__(e){var t=this
return i((function*(){var n
return yield t.yieldLoop(),n=Date.now(),t.check(e,n)}))()}__register__(e,t,n){var r=this
return i((function*(){var e,n
return yield r.yieldLoop(),e=Date.now(),r.conditionsCheck(t)?(r._running+=t,null!=r.storeOptions.reservoir&&(r.storeOptions.reservoir-=t),n=Math.max(r._nextRequest-e,0),r._nextRequest=e+n+r.storeOptions.minTime,{success:!0,wait:n,reservoir:r.storeOptions.reservoir}):{success:!1}}))()}strategyIsBlock(){return 3===this.storeOptions.strategy}__submit__(e,t){var n=this
return i((function*(){var r,i,o
if(yield n.yieldLoop(),null!=n.storeOptions.maxConcurrent&&t>n.storeOptions.maxConcurrent)throw new s(`Impossible to add a job having a weight of ${t} to a limiter having a maxConcurrent setting of ${n.storeOptions.maxConcurrent}`)
return i=Date.now(),o=null!=n.storeOptions.highWater&&e===n.storeOptions.highWater&&!n.check(t,i),(r=n.strategyIsBlock()&&(o||n.isBlocked(i)))&&(n._unblockTime=i+n.computePenalty(),n._nextRequest=n._unblockTime+n.storeOptions.minTime,n.instance._dropAllQueued()),{reachedHWM:o,blocked:r,strategy:n.storeOptions.strategy}}))()}__free__(e,t){var n=this
return i((function*(){return yield n.yieldLoop(),n._running-=t,n._done+=t,n.instance._drainAll(n.computeCapacity()),{running:n._running}}))()}},e.exports=o},7206:(e,t,n)=>{"use strict"
var r,i,s
r=n(1147),i=n(4788),s=class{constructor(e){this.Events=new i(this),this._length=0,this._lists=function(){var t,n,i
for(i=[],t=1,n=e;1<=n?t<=n:t>=n;1<=n?++t:--t)i.push(new r(()=>this.incr(),()=>this.decr()))
return i}.call(this)}incr(){if(0==this._length++)return this.Events.trigger("leftzero")}decr(){if(0==--this._length)return this.Events.trigger("zero")}push(e){return this._lists[e.options.priority].push(e)}queued(e){return null!=e?this._lists[e].length:this._length}shiftAll(e){return this._lists.forEach((function(t){return t.forEachShift(e)}))}getFirst(e=this._lists){var t,n,r
for(t=0,n=e.length;t<n;t++)if((r=e[t]).length>0)return r
return[]}shiftLastFrom(e){return this.getFirst(this._lists.slice(e).reverse()).shift()}},e.exports=s},7655:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict"
function asyncGeneratorStep(e,t,n,r,i,s,o){try{var a=e[s](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,i)}function _asyncToGenerator(e){return function(){var t=this,n=arguments
return new Promise((function(r,i){var s=e.apply(t,n)
function o(e){asyncGeneratorStep(s,r,i,o,a,"next",e)}function a(e){asyncGeneratorStep(s,r,i,o,a,"throw",e)}o(void 0)}))}}var Events,RedisConnection,Scripts,parser
parser=__webpack_require__(8034),Events=__webpack_require__(4788),Scripts=__webpack_require__(7339),RedisConnection=function(){class RedisConnection{constructor(options={}){parser.load(options,this.defaults,this),null==this.Redis&&(this.Redis=eval("require")("redis")),null==this.Events&&(this.Events=new Events(this)),this.terminated=!1,null==this.client&&(this.client=this.Redis.createClient(this.clientOptions)),this.subscriber=this.client.duplicate(),this.limiters={},this.shas={},this.ready=this.Promise.all([this._setup(this.client,!1),this._setup(this.subscriber,!0)]).then(()=>this._loadScripts()).then(()=>({client:this.client,subscriber:this.subscriber}))}_setup(e,t){return e.setMaxListeners(0),new this.Promise((n,r)=>(e.on("error",e=>this.Events.trigger("error",e)),t&&e.on("message",(e,t)=>{var n
return null!=(n=this.limiters[e])?n._store.onMessage(e,t):void 0}),e.ready?n():e.once("ready",n)))}_loadScript(e){return new this.Promise((t,n)=>{var r
return r=Scripts.payload(e),this.client.multi([["script","load",r]]).exec((r,i)=>null!=r?n(r):(this.shas[e]=i[0],t(i[0])))})}_loadScripts(){return this.Promise.all(Scripts.names.map(e=>this._loadScript(e)))}__runCommand__(e){var t=this
return _asyncToGenerator((function*(){return yield t.ready,new t.Promise((n,r)=>t.client.multi([e]).exec_atomic((function(e,t){return null!=e?r(e):n(t[0])})))}))()}__addLimiter__(e){return this.Promise.all([e.channel(),e.channel_client()].map(t=>new this.Promise((n,r)=>{var i
return i=r=>{if(r===t)return this.subscriber.removeListener("subscribe",i),this.limiters[t]=e,n()},this.subscriber.on("subscribe",i),this.subscriber.subscribe(t)})))}__removeLimiter__(e){var t=this
return this.Promise.all([e.channel(),e.channel_client()].map(function(){var e=_asyncToGenerator((function*(e){return t.terminated||(yield new t.Promise((n,r)=>t.subscriber.unsubscribe(e,(function(t,i){return null!=t?r(t):i===e?n():void 0})))),delete t.limiters[e]}))
return function(t){return e.apply(this,arguments)}}()))}__scriptArgs__(e,t,n,r){var i
return i=Scripts.keys(e,t),[this.shas[e],i.length].concat(i,n,r)}__scriptFn__(e){return this.client.evalsha.bind(this.client)}disconnect(e=!0){var t,n,r,i
for(t=0,r=(i=Object.keys(this.limiters)).length;t<r;t++)n=i[t],clearInterval(this.limiters[n]._store.heartbeat)
return this.limiters={},this.terminated=!0,this.client.end(e),this.subscriber.end(e),this.Promise.resolve()}}return RedisConnection.prototype.datastore="redis",RedisConnection.prototype.defaults={Redis:null,clientOptions:{},client:null,Promise,Events:null},RedisConnection}.call(void 0),module.exports=RedisConnection},7531:(e,t,n)=>{"use strict"
function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0
try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e,t,n,r,i,s,o){try{var a=e[s](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,i)}function s(e){return function(){var t=this,n=arguments
return new Promise((function(r,s){var o=e.apply(t,n)
function a(e){i(o,r,s,a,u,"next",e)}function u(e){i(o,r,s,a,u,"throw",e)}a(void 0)}))}}var o,a,u,c,l
l=n(8034),o=n(7692),u=n(7655),a=n(6612),c=class{constructor(e,t,n){this.instance=e,this.storeOptions=t,this.originalId=this.instance.id,this.clientId=this.instance._randomIndex(),l.load(n,n,this),this.clients={},this.capacityPriorityCounters={},this.sharedConnection=null!=this.connection,null==this.connection&&(this.connection="redis"===this.instance.datastore?new u({Redis:this.Redis,clientOptions:this.clientOptions,Promise:this.Promise,Events:this.instance.Events}):"ioredis"===this.instance.datastore?new a({Redis:this.Redis,clientOptions:this.clientOptions,clusterNodes:this.clusterNodes,Promise:this.Promise,Events:this.instance.Events}):void 0),this.instance.connection=this.connection,this.instance.datastore=this.connection.datastore,this.ready=this.connection.ready.then(e=>(this.clients=e,this.runScript("init",this.prepareInitSettings(this.clearDatastore)))).then(()=>this.connection.__addLimiter__(this.instance)).then(()=>this.runScript("register_client",[this.instance.queued()])).then(()=>{var e
return"function"==typeof(e=this.heartbeat=setInterval(()=>this.runScript("heartbeat",[]).catch(e=>this.instance.Events.trigger("error",e)),this.heartbeatInterval)).unref&&e.unref(),this.clients})}__publish__(e){var t=this
return s((function*(){return(yield t.ready).client.publish(t.instance.channel(),"message:"+e.toString())}))()}onMessage(e,t){var n=this
return s((function*(){var e,i,o,a,u,c,l,p,h,d
try{l=t.indexOf(":")
var f=[t.slice(0,l),t.slice(l+1)]
if(o=f[1],"capacity"===(d=f[0]))return yield n.instance._drainAll(o.length>0?~~o:void 0)
if("capacity-priority"===d){var _=r(o.split(":"),3)
return h=_[0],p=_[1],i=_[2],e=h.length>0?~~h:void 0,p===n.clientId?(a=yield n.instance._drainAll(e),c=null!=e?e-(a||0):"",yield n.clients.client.publish(n.instance.channel(),`capacity-priority:${c}::${i}`)):""===p?(clearTimeout(n.capacityPriorityCounters[i]),delete n.capacityPriorityCounters[i],n.instance._drainAll(e)):n.capacityPriorityCounters[i]=setTimeout(s((function*(){var t
try{return delete n.capacityPriorityCounters[i],yield n.runScript("blacklist_client",[p]),yield n.instance._drainAll(e)}catch(e){return t=e,n.instance.Events.trigger("error",t)}})),1e3)}if("message"===d)return n.instance.Events.trigger("message",o)
if("blocked"===d)return yield n.instance._dropAllQueued()}catch(e){return u=e,n.instance.Events.trigger("error",u)}}))()}__disconnect__(e){return clearInterval(this.heartbeat),this.sharedConnection?this.connection.__removeLimiter__(this.instance):this.connection.disconnect(e)}runScript(e,t){var n=this
return s((function*(){return"init"!==e&&"register_client"!==e&&(yield n.ready),new n.Promise((r,i)=>{var s,o
return s=[Date.now(),n.clientId].concat(t),n.instance.Events.trigger("debug",`Calling Redis script: ${e}.lua`,s),o=n.connection.__scriptArgs__(e,n.originalId,s,(function(e,t){return null!=e?i(e):r(t)})),n.connection.__scriptFn__(e)(...o)}).catch(r=>"SETTINGS_KEY_NOT_FOUND"===r.message?"heartbeat"===e?n.Promise.resolve():n.runScript("init",n.prepareInitSettings(!1)).then(()=>n.runScript(e,t)):"UNKNOWN_CLIENT"===r.message?n.runScript("register_client",[n.instance.queued()]).then(()=>n.runScript(e,t)):n.Promise.reject(r))}))()}prepareArray(e){var t,n,r,i
for(r=[],t=0,n=e.length;t<n;t++)i=e[t],r.push(null!=i?i.toString():"")
return r}prepareObject(e){var t,n,r
for(n in t=[],e)r=e[n],t.push(n,null!=r?r.toString():"")
return t}prepareInitSettings(e){var t
return(t=this.prepareObject(Object.assign({},this.storeOptions,{id:this.originalId,version:this.instance.version,groupTimeout:this.timeout,clientTimeout:this.clientTimeout}))).unshift(e?1:0,this.instance.version),t}convertBool(e){return!!e}__updateSettings__(e){var t=this
return s((function*(){return yield t.runScript("update_settings",t.prepareObject(e)),l.overwrite(e,e,t.storeOptions)}))()}__running__(){return this.runScript("running",[])}__queued__(){return this.runScript("queued",[])}__done__(){return this.runScript("done",[])}__groupCheck__(){var e=this
return s((function*(){return e.convertBool(yield e.runScript("group_check",[]))}))()}__incrementReservoir__(e){return this.runScript("increment_reservoir",[e])}__currentReservoir__(){return this.runScript("current_reservoir",[])}__check__(e){var t=this
return s((function*(){return t.convertBool(yield t.runScript("check",t.prepareArray([e])))}))()}__register__(e,t,n){var i=this
return s((function*(){var s,o,a,u=r(yield i.runScript("register",i.prepareArray([e,t,n])),3)
return o=u[0],a=u[1],s=u[2],{success:i.convertBool(o),wait:a,reservoir:s}}))()}__submit__(e,t){var n=this
return s((function*(){var i,s,a,u,c
try{var l=r(yield n.runScript("submit",n.prepareArray([e,t])),3)
return u=l[0],i=l[1],c=l[2],{reachedHWM:n.convertBool(u),blocked:n.convertBool(i),strategy:c}}catch(e){if(0===(s=e).message.indexOf("OVERWEIGHT")){var p=r(s.message.split(":"),3)
throw p[0],t=p[1],a=p[2],new o(`Impossible to add a job having a weight of ${t} to a limiter having a maxConcurrent setting of ${a}`)}throw s}}))()}__free__(e,t){var n=this
return s((function*(){return{running:yield n.runScript("free",n.prepareArray([e]))}}))()}},e.exports=c},7339:(e,t,n)=>{"use strict"
var r,i,s
i=n(8366),r={refs:i["refs.lua"],validate_keys:i["validate_keys.lua"],validate_client:i["validate_client.lua"],refresh_expiration:i["refresh_expiration.lua"],process_tick:i["process_tick.lua"],conditions_check:i["conditions_check.lua"],get_time:i["get_time.lua"]},t.allKeys=function(e){return[`b_${e}_settings`,`b_${e}_job_weights`,`b_${e}_job_expirations`,`b_${e}_job_clients`,`b_${e}_client_running`,`b_${e}_client_num_queued`,`b_${e}_client_last_registered`,`b_${e}_client_last_seen`]},s={init:{keys:t.allKeys,headers:["process_tick"],refresh_expiration:!0,code:i["init.lua"]},group_check:{keys:t.allKeys,headers:[],refresh_expiration:!1,code:i["group_check.lua"]},register_client:{keys:t.allKeys,headers:["validate_keys"],refresh_expiration:!1,code:i["register_client.lua"]},blacklist_client:{keys:t.allKeys,headers:["validate_keys","validate_client"],refresh_expiration:!1,code:i["blacklist_client.lua"]},heartbeat:{keys:t.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:i["heartbeat.lua"]},update_settings:{keys:t.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!0,code:i["update_settings.lua"]},running:{keys:t.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:i["running.lua"]},queued:{keys:t.allKeys,headers:["validate_keys","validate_client"],refresh_expiration:!1,code:i["queued.lua"]},done:{keys:t.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:i["done.lua"]},check:{keys:t.allKeys,headers:["validate_keys","validate_client","process_tick","conditions_check"],refresh_expiration:!1,code:i["check.lua"]},submit:{keys:t.allKeys,headers:["validate_keys","validate_client","process_tick","conditions_check"],refresh_expiration:!0,code:i["submit.lua"]},register:{keys:t.allKeys,headers:["validate_keys","validate_client","process_tick","conditions_check"],refresh_expiration:!0,code:i["register.lua"]},free:{keys:t.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!0,code:i["free.lua"]},current_reservoir:{keys:t.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!1,code:i["current_reservoir.lua"]},increment_reservoir:{keys:t.allKeys,headers:["validate_keys","validate_client","process_tick"],refresh_expiration:!0,code:i["increment_reservoir.lua"]}},t.names=Object.keys(s),t.keys=function(e,t){return s[e].keys(t)},t.payload=function(e){var t
return t=s[e],Array.prototype.concat(r.refs,t.headers.map((function(e){return r[e]})),t.refresh_expiration?r.refresh_expiration:"",t.code).join("\n")}},9348:(e,t,n)=>{"use strict"
var r,i
r=n(7692),i=class{constructor(e){this.status=e,this._jobs={},this.counts=this.status.map((function(){return 0}))}next(e){var t,n
return n=(t=this._jobs[e])+1,null!=t&&n<this.status.length?(this.counts[t]--,this.counts[n]++,this._jobs[e]++):null!=t?(this.counts[t]--,delete this._jobs[e]):void 0}start(e){return 0,this._jobs[e]=0,this.counts[0]++}remove(e){var t
return null!=(t=this._jobs[e])&&(this.counts[t]--,delete this._jobs[e]),null!=t}jobStatus(e){var t
return null!=(t=this.status[this._jobs[e]])?t:null}statusJobs(e){var t,n,i,s
if(null!=e){if((n=this.status.indexOf(e))<0)throw new r("status must be one of "+this.status.join(", "))
for(t in s=[],i=this._jobs)i[t]===n&&s.push(t)
return s}return Object.keys(this._jobs)}statusCounts(){return this.counts.reduce((e,t,n)=>(e[this.status[n]]=t,e),{})}},e.exports=i},8254:(e,t,n)=>{"use strict"
function r(e,t,n,r,i,s,o){try{var a=e[s](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var t=this,n=arguments
return new Promise((function(i,s){var o=e.apply(t,n)
function a(e){r(o,i,s,a,u,"next",e)}function u(e){r(o,i,s,a,u,"throw",e)}a(void 0)}))}}var s,o
s=n(1147),o=class{constructor(e,t){this.schedule=this.schedule.bind(this),this.name=e,this.Promise=t,this._running=0,this._queue=new s}isEmpty(){return 0===this._queue.length}_tryToRun(){var e=this
return i((function*(){var t,n,r,s,o,a,u
if(e._running<1&&e._queue.length>0){e._running++
var c=e._queue.shift()
return u=c.task,t=c.args,o=c.resolve,s=c.reject,n=yield i((function*(){try{return a=yield u(...t),function(){return o(a)}}catch(e){return r=e,function(){return s(r)}}}))(),e._running--,e._tryToRun(),n()}}))()}schedule(e,...t){var n,r,i
return i=r=null,n=new this.Promise((function(e,t){return i=e,r=t})),this._queue.push({task:e,args:t,resolve:i,reject:r}),this._tryToRun(),n}},e.exports=o},5406:(e,t,n)=>{"use strict"
e.exports=n(7097)},8366:e=>{"use strict"
e.exports=JSON.parse("{\"blacklist_client.lua\":\"local blacklist = ARGV[num_static_argv + 1]\\n\\nif redis.call('zscore', client_last_seen_key, blacklist) then\\n  redis.call('zadd', client_last_seen_key, 0, blacklist)\\nend\\n\\n\\nreturn {}\\n\",\"check.lua\":\"local weight = tonumber(ARGV[num_static_argv + 1])\\n\\nlocal capacity = process_tick(now, false)['capacity']\\nlocal nextRequest = tonumber(redis.call('hget', settings_key, 'nextRequest'))\\n\\nreturn conditions_check(capacity, weight) and nextRequest - now <= 0\\n\",\"conditions_check.lua\":\"local conditions_check = function (capacity, weight)\\n  return capacity == nil or weight <= capacity\\nend\\n\",\"current_reservoir.lua\":\"return process_tick(now, false)['reservoir']\\n\",\"done.lua\":\"process_tick(now, false)\\n\\nreturn tonumber(redis.call('hget', settings_key, 'done'))\\n\",\"free.lua\":\"local index = ARGV[num_static_argv + 1]\\n\\nredis.call('zadd', job_expirations_key, 0, index)\\n\\nreturn process_tick(now, false)['running']\\n\",\"get_time.lua\":\"redis.replicate_commands()\\n\\nlocal get_time = function ()\\n  local time = redis.call('time')\\n\\n  return tonumber(time[1]..string.sub(time[2], 1, 3))\\nend\\n\",\"group_check.lua\":\"return not (redis.call('exists', settings_key) == 1)\\n\",\"heartbeat.lua\":\"process_tick(now, true)\\n\",\"increment_reservoir.lua\":\"local incr = tonumber(ARGV[num_static_argv + 1])\\n\\nredis.call('hincrby', settings_key, 'reservoir', incr)\\n\\nlocal reservoir = process_tick(now, true)['reservoir']\\n\\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\\nrefresh_expiration(0, 0, groupTimeout)\\n\\nreturn reservoir\\n\",\"init.lua\":\"local clear = tonumber(ARGV[num_static_argv + 1])\\nlocal limiter_version = ARGV[num_static_argv + 2]\\nlocal num_local_argv = num_static_argv + 2\\n\\nif clear == 1 then\\n  redis.call('del', unpack(KEYS))\\nend\\n\\nif redis.call('exists', settings_key) == 0 then\\n  -- Create\\n  local args = {'hmset', settings_key}\\n\\n  for i = num_local_argv + 1, #ARGV do\\n    table.insert(args, ARGV[i])\\n  end\\n\\n  redis.call(unpack(args))\\n  redis.call('hmset', settings_key,\\n    'nextRequest', now,\\n    'lastReservoirRefresh', now,\\n    'lastReservoirIncrease', now,\\n    'running', 0,\\n    'done', 0,\\n    'unblockTime', 0,\\n    'capacityPriorityCounter', 0\\n  )\\n\\nelse\\n  -- Apply migrations\\n  local settings = redis.call('hmget', settings_key,\\n    'id',\\n    'version'\\n  )\\n  local id = settings[1]\\n  local current_version = settings[2]\\n\\n  if current_version ~= limiter_version then\\n    local version_digits = {}\\n    for k, v in string.gmatch(current_version, \\\"([^.]+)\\\") do\\n      table.insert(version_digits, tonumber(k))\\n    end\\n\\n    -- 2.10.0\\n    if version_digits[2] < 10 then\\n      redis.call('hsetnx', settings_key, 'reservoirRefreshInterval', '')\\n      redis.call('hsetnx', settings_key, 'reservoirRefreshAmount', '')\\n      redis.call('hsetnx', settings_key, 'lastReservoirRefresh', '')\\n      redis.call('hsetnx', settings_key, 'done', 0)\\n      redis.call('hset', settings_key, 'version', '2.10.0')\\n    end\\n\\n    -- 2.11.1\\n    if version_digits[2] < 11 or (version_digits[2] == 11 and version_digits[3] < 1) then\\n      if redis.call('hstrlen', settings_key, 'lastReservoirRefresh') == 0 then\\n        redis.call('hmset', settings_key,\\n          'lastReservoirRefresh', now,\\n          'version', '2.11.1'\\n        )\\n      end\\n    end\\n\\n    -- 2.14.0\\n    if version_digits[2] < 14 then\\n      local old_running_key = 'b_'..id..'_running'\\n      local old_executing_key = 'b_'..id..'_executing'\\n\\n      if redis.call('exists', old_running_key) == 1 then\\n        redis.call('rename', old_running_key, job_weights_key)\\n      end\\n      if redis.call('exists', old_executing_key) == 1 then\\n        redis.call('rename', old_executing_key, job_expirations_key)\\n      end\\n      redis.call('hset', settings_key, 'version', '2.14.0')\\n    end\\n\\n    -- 2.15.2\\n    if version_digits[2] < 15 or (version_digits[2] == 15 and version_digits[3] < 2) then\\n      redis.call('hsetnx', settings_key, 'capacityPriorityCounter', 0)\\n      redis.call('hset', settings_key, 'version', '2.15.2')\\n    end\\n\\n    -- 2.17.0\\n    if version_digits[2] < 17 then\\n      redis.call('hsetnx', settings_key, 'clientTimeout', 10000)\\n      redis.call('hset', settings_key, 'version', '2.17.0')\\n    end\\n\\n    -- 2.18.0\\n    if version_digits[2] < 18 then\\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseInterval', '')\\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseAmount', '')\\n      redis.call('hsetnx', settings_key, 'reservoirIncreaseMaximum', '')\\n      redis.call('hsetnx', settings_key, 'lastReservoirIncrease', now)\\n      redis.call('hset', settings_key, 'version', '2.18.0')\\n    end\\n\\n  end\\n\\n  process_tick(now, false)\\nend\\n\\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\\nrefresh_expiration(0, 0, groupTimeout)\\n\\nreturn {}\\n\",\"process_tick.lua\":\"local process_tick = function (now, always_publish)\\n\\n  local compute_capacity = function (maxConcurrent, running, reservoir)\\n    if maxConcurrent ~= nil and reservoir ~= nil then\\n      return math.min((maxConcurrent - running), reservoir)\\n    elseif maxConcurrent ~= nil then\\n      return maxConcurrent - running\\n    elseif reservoir ~= nil then\\n      return reservoir\\n    else\\n      return nil\\n    end\\n  end\\n\\n  local settings = redis.call('hmget', settings_key,\\n    'id',\\n    'maxConcurrent',\\n    'running',\\n    'reservoir',\\n    'reservoirRefreshInterval',\\n    'reservoirRefreshAmount',\\n    'lastReservoirRefresh',\\n    'reservoirIncreaseInterval',\\n    'reservoirIncreaseAmount',\\n    'reservoirIncreaseMaximum',\\n    'lastReservoirIncrease',\\n    'capacityPriorityCounter',\\n    'clientTimeout'\\n  )\\n  local id = settings[1]\\n  local maxConcurrent = tonumber(settings[2])\\n  local running = tonumber(settings[3])\\n  local reservoir = tonumber(settings[4])\\n  local reservoirRefreshInterval = tonumber(settings[5])\\n  local reservoirRefreshAmount = tonumber(settings[6])\\n  local lastReservoirRefresh = tonumber(settings[7])\\n  local reservoirIncreaseInterval = tonumber(settings[8])\\n  local reservoirIncreaseAmount = tonumber(settings[9])\\n  local reservoirIncreaseMaximum = tonumber(settings[10])\\n  local lastReservoirIncrease = tonumber(settings[11])\\n  local capacityPriorityCounter = tonumber(settings[12])\\n  local clientTimeout = tonumber(settings[13])\\n\\n  local initial_capacity = compute_capacity(maxConcurrent, running, reservoir)\\n\\n  --\\n  -- Process 'running' changes\\n  --\\n  local expired = redis.call('zrangebyscore', job_expirations_key, '-inf', '('..now)\\n\\n  if #expired > 0 then\\n    redis.call('zremrangebyscore', job_expirations_key, '-inf', '('..now)\\n\\n    local flush_batch = function (batch, acc)\\n      local weights = redis.call('hmget', job_weights_key, unpack(batch))\\n                      redis.call('hdel',  job_weights_key, unpack(batch))\\n      local clients = redis.call('hmget', job_clients_key, unpack(batch))\\n                      redis.call('hdel',  job_clients_key, unpack(batch))\\n\\n      -- Calculate sum of removed weights\\n      for i = 1, #weights do\\n        acc['total'] = acc['total'] + (tonumber(weights[i]) or 0)\\n      end\\n\\n      -- Calculate sum of removed weights by client\\n      local client_weights = {}\\n      for i = 1, #clients do\\n        local removed = tonumber(weights[i]) or 0\\n        if removed > 0 then\\n          acc['client_weights'][clients[i]] = (acc['client_weights'][clients[i]] or 0) + removed\\n        end\\n      end\\n    end\\n\\n    local acc = {\\n      ['total'] = 0,\\n      ['client_weights'] = {}\\n    }\\n    local batch_size = 1000\\n\\n    -- Compute changes to Zsets and apply changes to Hashes\\n    for i = 1, #expired, batch_size do\\n      local batch = {}\\n      for j = i, math.min(i + batch_size - 1, #expired) do\\n        table.insert(batch, expired[j])\\n      end\\n\\n      flush_batch(batch, acc)\\n    end\\n\\n    -- Apply changes to Zsets\\n    if acc['total'] > 0 then\\n      redis.call('hincrby', settings_key, 'done', acc['total'])\\n      running = tonumber(redis.call('hincrby', settings_key, 'running', -acc['total']))\\n    end\\n\\n    for client, weight in pairs(acc['client_weights']) do\\n      redis.call('zincrby', client_running_key, -weight, client)\\n    end\\n  end\\n\\n  --\\n  -- Process 'reservoir' changes\\n  --\\n  local reservoirRefreshActive = reservoirRefreshInterval ~= nil and reservoirRefreshAmount ~= nil\\n  if reservoirRefreshActive and now >= lastReservoirRefresh + reservoirRefreshInterval then\\n    reservoir = reservoirRefreshAmount\\n    redis.call('hmset', settings_key,\\n      'reservoir', reservoir,\\n      'lastReservoirRefresh', now\\n    )\\n  end\\n\\n  local reservoirIncreaseActive = reservoirIncreaseInterval ~= nil and reservoirIncreaseAmount ~= nil\\n  if reservoirIncreaseActive and now >= lastReservoirIncrease + reservoirIncreaseInterval then\\n    local num_intervals = math.floor((now - lastReservoirIncrease) / reservoirIncreaseInterval)\\n    local incr = reservoirIncreaseAmount * num_intervals\\n    if reservoirIncreaseMaximum ~= nil then\\n      incr = math.min(incr, reservoirIncreaseMaximum - (reservoir or 0))\\n    end\\n    if incr > 0 then\\n      reservoir = (reservoir or 0) + incr\\n    end\\n    redis.call('hmset', settings_key,\\n      'reservoir', reservoir,\\n      'lastReservoirIncrease', lastReservoirIncrease + (num_intervals * reservoirIncreaseInterval)\\n    )\\n  end\\n\\n  --\\n  -- Clear unresponsive clients\\n  --\\n  local unresponsive = redis.call('zrangebyscore', client_last_seen_key, '-inf', (now - clientTimeout))\\n  local unresponsive_lookup = {}\\n  local terminated_clients = {}\\n  for i = 1, #unresponsive do\\n    unresponsive_lookup[unresponsive[i]] = true\\n    if tonumber(redis.call('zscore', client_running_key, unresponsive[i])) == 0 then\\n      table.insert(terminated_clients, unresponsive[i])\\n    end\\n  end\\n  if #terminated_clients > 0 then\\n    redis.call('zrem', client_running_key,         unpack(terminated_clients))\\n    redis.call('hdel', client_num_queued_key,      unpack(terminated_clients))\\n    redis.call('zrem', client_last_registered_key, unpack(terminated_clients))\\n    redis.call('zrem', client_last_seen_key,       unpack(terminated_clients))\\n  end\\n\\n  --\\n  -- Broadcast capacity changes\\n  --\\n  local final_capacity = compute_capacity(maxConcurrent, running, reservoir)\\n\\n  if always_publish or (initial_capacity ~= nil and final_capacity == nil) then\\n    -- always_publish or was not unlimited, now unlimited\\n    redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))\\n\\n  elseif initial_capacity ~= nil and final_capacity ~= nil and final_capacity > initial_capacity then\\n    -- capacity was increased\\n    -- send the capacity message to the limiter having the lowest number of running jobs\\n    -- the tiebreaker is the limiter having not registered a job in the longest time\\n\\n    local lowest_concurrency_value = nil\\n    local lowest_concurrency_clients = {}\\n    local lowest_concurrency_last_registered = {}\\n    local client_concurrencies = redis.call('zrange', client_running_key, 0, -1, 'withscores')\\n\\n    for i = 1, #client_concurrencies, 2 do\\n      local client = client_concurrencies[i]\\n      local concurrency = tonumber(client_concurrencies[i+1])\\n\\n      if (\\n        lowest_concurrency_value == nil or lowest_concurrency_value == concurrency\\n      ) and (\\n        not unresponsive_lookup[client]\\n      ) and (\\n        tonumber(redis.call('hget', client_num_queued_key, client)) > 0\\n      ) then\\n        lowest_concurrency_value = concurrency\\n        table.insert(lowest_concurrency_clients, client)\\n        local last_registered = tonumber(redis.call('zscore', client_last_registered_key, client))\\n        table.insert(lowest_concurrency_last_registered, last_registered)\\n      end\\n    end\\n\\n    if #lowest_concurrency_clients > 0 then\\n      local position = 1\\n      local earliest = lowest_concurrency_last_registered[1]\\n\\n      for i,v in ipairs(lowest_concurrency_last_registered) do\\n        if v < earliest then\\n          position = i\\n          earliest = v\\n        end\\n      end\\n\\n      local next_client = lowest_concurrency_clients[position]\\n      redis.call('publish', 'b_'..id,\\n        'capacity-priority:'..(final_capacity or '')..\\n        ':'..next_client..\\n        ':'..capacityPriorityCounter\\n      )\\n      redis.call('hincrby', settings_key, 'capacityPriorityCounter', '1')\\n    else\\n      redis.call('publish', 'b_'..id, 'capacity:'..(final_capacity or ''))\\n    end\\n  end\\n\\n  return {\\n    ['capacity'] = final_capacity,\\n    ['running'] = running,\\n    ['reservoir'] = reservoir\\n  }\\nend\\n\",\"queued.lua\":\"local clientTimeout = tonumber(redis.call('hget', settings_key, 'clientTimeout'))\\nlocal valid_clients = redis.call('zrangebyscore', client_last_seen_key, (now - clientTimeout), 'inf')\\nlocal client_queued = redis.call('hmget', client_num_queued_key, unpack(valid_clients))\\n\\nlocal sum = 0\\nfor i = 1, #client_queued do\\n  sum = sum + tonumber(client_queued[i])\\nend\\n\\nreturn sum\\n\",\"refresh_expiration.lua\":\"local refresh_expiration = function (now, nextRequest, groupTimeout)\\n\\n  if groupTimeout ~= nil then\\n    local ttl = (nextRequest + groupTimeout) - now\\n\\n    for i = 1, #KEYS do\\n      redis.call('pexpire', KEYS[i], ttl)\\n    end\\n  end\\n\\nend\\n\",\"refs.lua\":\"local settings_key = KEYS[1]\\nlocal job_weights_key = KEYS[2]\\nlocal job_expirations_key = KEYS[3]\\nlocal job_clients_key = KEYS[4]\\nlocal client_running_key = KEYS[5]\\nlocal client_num_queued_key = KEYS[6]\\nlocal client_last_registered_key = KEYS[7]\\nlocal client_last_seen_key = KEYS[8]\\n\\nlocal now = tonumber(ARGV[1])\\nlocal client = ARGV[2]\\n\\nlocal num_static_argv = 2\\n\",\"register.lua\":\"local index = ARGV[num_static_argv + 1]\\nlocal weight = tonumber(ARGV[num_static_argv + 2])\\nlocal expiration = tonumber(ARGV[num_static_argv + 3])\\n\\nlocal state = process_tick(now, false)\\nlocal capacity = state['capacity']\\nlocal reservoir = state['reservoir']\\n\\nlocal settings = redis.call('hmget', settings_key,\\n  'nextRequest',\\n  'minTime',\\n  'groupTimeout'\\n)\\nlocal nextRequest = tonumber(settings[1])\\nlocal minTime = tonumber(settings[2])\\nlocal groupTimeout = tonumber(settings[3])\\n\\nif conditions_check(capacity, weight) then\\n\\n  redis.call('hincrby', settings_key, 'running', weight)\\n  redis.call('hset', job_weights_key, index, weight)\\n  if expiration ~= nil then\\n    redis.call('zadd', job_expirations_key, now + expiration, index)\\n  end\\n  redis.call('hset', job_clients_key, index, client)\\n  redis.call('zincrby', client_running_key, weight, client)\\n  redis.call('hincrby', client_num_queued_key, client, -1)\\n  redis.call('zadd', client_last_registered_key, now, client)\\n\\n  local wait = math.max(nextRequest - now, 0)\\n  local newNextRequest = now + wait + minTime\\n\\n  if reservoir == nil then\\n    redis.call('hset', settings_key,\\n      'nextRequest', newNextRequest\\n    )\\n  else\\n    reservoir = reservoir - weight\\n    redis.call('hmset', settings_key,\\n      'reservoir', reservoir,\\n      'nextRequest', newNextRequest\\n    )\\n  end\\n\\n  refresh_expiration(now, newNextRequest, groupTimeout)\\n\\n  return {true, wait, reservoir}\\n\\nelse\\n  return {false}\\nend\\n\",\"register_client.lua\":\"local queued = tonumber(ARGV[num_static_argv + 1])\\n\\n-- Could have been re-registered concurrently\\nif not redis.call('zscore', client_last_seen_key, client) then\\n  redis.call('zadd', client_running_key, 0, client)\\n  redis.call('hset', client_num_queued_key, client, queued)\\n  redis.call('zadd', client_last_registered_key, 0, client)\\nend\\n\\nredis.call('zadd', client_last_seen_key, now, client)\\n\\nreturn {}\\n\",\"running.lua\":\"return process_tick(now, false)['running']\\n\",\"submit.lua\":\"local queueLength = tonumber(ARGV[num_static_argv + 1])\\nlocal weight = tonumber(ARGV[num_static_argv + 2])\\n\\nlocal capacity = process_tick(now, false)['capacity']\\n\\nlocal settings = redis.call('hmget', settings_key,\\n  'id',\\n  'maxConcurrent',\\n  'highWater',\\n  'nextRequest',\\n  'strategy',\\n  'unblockTime',\\n  'penalty',\\n  'minTime',\\n  'groupTimeout'\\n)\\nlocal id = settings[1]\\nlocal maxConcurrent = tonumber(settings[2])\\nlocal highWater = tonumber(settings[3])\\nlocal nextRequest = tonumber(settings[4])\\nlocal strategy = tonumber(settings[5])\\nlocal unblockTime = tonumber(settings[6])\\nlocal penalty = tonumber(settings[7])\\nlocal minTime = tonumber(settings[8])\\nlocal groupTimeout = tonumber(settings[9])\\n\\nif maxConcurrent ~= nil and weight > maxConcurrent then\\n  return redis.error_reply('OVERWEIGHT:'..weight..':'..maxConcurrent)\\nend\\n\\nlocal reachedHWM = (highWater ~= nil and queueLength == highWater\\n  and not (\\n    conditions_check(capacity, weight)\\n    and nextRequest - now <= 0\\n  )\\n)\\n\\nlocal blocked = strategy == 3 and (reachedHWM or unblockTime >= now)\\n\\nif blocked then\\n  local computedPenalty = penalty\\n  if computedPenalty == nil then\\n    if minTime == 0 then\\n      computedPenalty = 5000\\n    else\\n      computedPenalty = 15 * minTime\\n    end\\n  end\\n\\n  local newNextRequest = now + computedPenalty + minTime\\n\\n  redis.call('hmset', settings_key,\\n    'unblockTime', now + computedPenalty,\\n    'nextRequest', newNextRequest\\n  )\\n\\n  local clients_queued_reset = redis.call('hkeys', client_num_queued_key)\\n  local queued_reset = {}\\n  for i = 1, #clients_queued_reset do\\n    table.insert(queued_reset, clients_queued_reset[i])\\n    table.insert(queued_reset, 0)\\n  end\\n  redis.call('hmset', client_num_queued_key, unpack(queued_reset))\\n\\n  redis.call('publish', 'b_'..id, 'blocked:')\\n\\n  refresh_expiration(now, newNextRequest, groupTimeout)\\nend\\n\\nif not blocked and not reachedHWM then\\n  redis.call('hincrby', client_num_queued_key, client, 1)\\nend\\n\\nreturn {reachedHWM, blocked, strategy}\\n\",\"update_settings.lua\":\"local args = {'hmset', settings_key}\\n\\nfor i = num_static_argv + 1, #ARGV do\\n  table.insert(args, ARGV[i])\\nend\\n\\nredis.call(unpack(args))\\n\\nprocess_tick(now, true)\\n\\nlocal groupTimeout = tonumber(redis.call('hget', settings_key, 'groupTimeout'))\\nrefresh_expiration(0, 0, groupTimeout)\\n\\nreturn {}\\n\",\"validate_client.lua\":\"if not redis.call('zscore', client_last_seen_key, client) then\\n  return redis.error_reply('UNKNOWN_CLIENT')\\nend\\n\\nredis.call('zadd', client_last_seen_key, now, client)\\n\",\"validate_keys.lua\":\"if not (redis.call('exists', settings_key) == 1) then\\n  return redis.error_reply('SETTINGS_KEY_NOT_FOUND')\\nend\\n\"}")},8034:(e,t)=>{"use strict"
t.load=function(e,t,n={}){var r,i,s
for(r in t)s=t[r],n[r]=null!=(i=e[r])?i:s
return n},t.overwrite=function(e,t,n={}){var r,i
for(r in e)i=e[r],void 0!==t[r]&&(n[r]=i)
return n}},5607:e=>{"use strict"
e.exports={i:"2.19.5"}},2706:(e,t,n)=>{"use strict"
const r=n(6339),i=n(5555),s=n(4741),o=n(4833),a=(e,t={})=>{let n=[]
if(Array.isArray(e))for(let r of e){let e=a.create(r,t)
Array.isArray(e)?n.push(...e):n.push(e)}else n=[].concat(a.create(e,t))
return t&&!0===t.expand&&!0===t.nodupes&&(n=[...new Set(n)]),n}
a.parse=(e,t={})=>o(e,t),a.stringify=(e,t={})=>r("string"==typeof e?a.parse(e,t):e,t),a.compile=(e,t={})=>("string"==typeof e&&(e=a.parse(e,t)),i(e,t)),a.expand=(e,t={})=>{"string"==typeof e&&(e=a.parse(e,t))
let n=s(e,t)
return!0===t.noempty&&(n=n.filter(Boolean)),!0===t.nodupes&&(n=[...new Set(n)]),n},a.create=(e,t={})=>""===e||e.length<3?[e]:!0!==t.expand?a.compile(e,t):a.expand(e,t),e.exports=a},5555:(e,t,n)=>{"use strict"
const r=n(824),i=n(2117)
e.exports=(e,t={})=>{let n=(e,s={})=>{let o=i.isInvalidBrace(s),a=!0===e.invalid&&!0===t.escapeInvalid,u=!0===o||!0===a,c=!0===t.escapeInvalid?"\\":"",l=""
if(!0===e.isOpen)return c+e.value
if(!0===e.isClose)return c+e.value
if("open"===e.type)return u?c+e.value:"("
if("close"===e.type)return u?c+e.value:")"
if("comma"===e.type)return"comma"===e.prev.type?"":u?e.value:"|"
if(e.value)return e.value
if(e.nodes&&e.ranges>0){let n=i.reduce(e.nodes),s=r(...n,{...t,wrap:!1,toRegex:!0})
if(0!==s.length)return n.length>1&&s.length>1?`(${s})`:s}if(e.nodes)for(let t of e.nodes)l+=n(t,e)
return l}
return n(e)}},8552:e=>{"use strict"
e.exports={MAX_LENGTH:65536,CHAR_0:"0",CHAR_9:"9",CHAR_UPPERCASE_A:"A",CHAR_LOWERCASE_A:"a",CHAR_UPPERCASE_Z:"Z",CHAR_LOWERCASE_Z:"z",CHAR_LEFT_PARENTHESES:"(",CHAR_RIGHT_PARENTHESES:")",CHAR_ASTERISK:"*",CHAR_AMPERSAND:"&",CHAR_AT:"@",CHAR_BACKSLASH:"\\",CHAR_BACKTICK:"`",CHAR_CARRIAGE_RETURN:"\r",CHAR_CIRCUMFLEX_ACCENT:"^",CHAR_COLON:":",CHAR_COMMA:",",CHAR_DOLLAR:"$",CHAR_DOT:".",CHAR_DOUBLE_QUOTE:'"',CHAR_EQUAL:"=",CHAR_EXCLAMATION_MARK:"!",CHAR_FORM_FEED:"\f",CHAR_FORWARD_SLASH:"/",CHAR_HASH:"#",CHAR_HYPHEN_MINUS:"-",CHAR_LEFT_ANGLE_BRACKET:"<",CHAR_LEFT_CURLY_BRACE:"{",CHAR_LEFT_SQUARE_BRACKET:"[",CHAR_LINE_FEED:"\n",CHAR_NO_BREAK_SPACE:" ",CHAR_PERCENT:"%",CHAR_PLUS:"+",CHAR_QUESTION_MARK:"?",CHAR_RIGHT_ANGLE_BRACKET:">",CHAR_RIGHT_CURLY_BRACE:"}",CHAR_RIGHT_SQUARE_BRACKET:"]",CHAR_SEMICOLON:";",CHAR_SINGLE_QUOTE:"'",CHAR_SPACE:" ",CHAR_TAB:"\t",CHAR_UNDERSCORE:"_",CHAR_VERTICAL_LINE:"|",CHAR_ZERO_WIDTH_NOBREAK_SPACE:"\ufeff"}},4741:(e,t,n)=>{"use strict"
const r=n(824),i=n(6339),s=n(2117),o=(e="",t="",n=!1)=>{let r=[]
if(e=[].concat(e),!(t=[].concat(t)).length)return e
if(!e.length)return n?s.flatten(t).map(e=>`{${e}}`):t
for(let i of e)if(Array.isArray(i))for(let e of i)r.push(o(e,t,n))
else for(let e of t)!0===n&&"string"==typeof e&&(e=`{${e}}`),r.push(Array.isArray(e)?o(i,e,n):i+e)
return s.flatten(r)}
e.exports=(e,t={})=>{let n=void 0===t.rangeLimit?1e3:t.rangeLimit,a=(e,u={})=>{e.queue=[]
let c=u,l=u.queue
for(;"brace"!==c.type&&"root"!==c.type&&c.parent;)c=c.parent,l=c.queue
if(e.invalid||e.dollar)return void l.push(o(l.pop(),i(e,t)))
if("brace"===e.type&&!0!==e.invalid&&2===e.nodes.length)return void l.push(o(l.pop(),["{}"]))
if(e.nodes&&e.ranges>0){let a=s.reduce(e.nodes)
if(s.exceedsLimit(...a,t.step,n))throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.")
let u=r(...a,t)
return 0===u.length&&(u=i(e,t)),l.push(o(l.pop(),u)),void(e.nodes=[])}let p=s.encloseBrace(e),h=e.queue,d=e
for(;"brace"!==d.type&&"root"!==d.type&&d.parent;)d=d.parent,h=d.queue
for(let t=0;t<e.nodes.length;t++){let n=e.nodes[t]
"comma"!==n.type||"brace"!==e.type?"close"!==n.type?n.value&&"open"!==n.type?h.push(o(h.pop(),n.value)):n.nodes&&a(n,e):l.push(o(l.pop(),h,p)):(1===t&&h.push(""),h.push(""))}return h}
return s.flatten(a(e))}},4833:(e,t,n)=>{"use strict"
const r=n(6339),{MAX_LENGTH:i,CHAR_BACKSLASH:s,CHAR_BACKTICK:o,CHAR_COMMA:a,CHAR_DOT:u,CHAR_LEFT_PARENTHESES:c,CHAR_RIGHT_PARENTHESES:l,CHAR_LEFT_CURLY_BRACE:p,CHAR_RIGHT_CURLY_BRACE:h,CHAR_LEFT_SQUARE_BRACKET:d,CHAR_RIGHT_SQUARE_BRACKET:f,CHAR_DOUBLE_QUOTE:_,CHAR_SINGLE_QUOTE:y,CHAR_NO_BREAK_SPACE:v,CHAR_ZERO_WIDTH_NOBREAK_SPACE:g}=n(8552)
e.exports=(e,t={})=>{if("string"!=typeof e)throw new TypeError("Expected a string")
let n=t||{},m="number"==typeof n.maxLength?Math.min(i,n.maxLength):i
if(e.length>m)throw new SyntaxError(`Input length (${e.length}), exceeds max characters (${m})`)
let b,w={type:"root",input:e,nodes:[]},x=[w],R=w,A=w,E=0,k=e.length,S=0,C=0
const O=()=>e[S++],T=e=>{if("text"===e.type&&"dot"===A.type&&(A.type="text"),!A||"text"!==A.type||"text"!==e.type)return R.nodes.push(e),e.parent=R,e.prev=A,A=e,e
A.value+=e.value}
for(T({type:"bos"});S<k;)if(R=x[x.length-1],b=O(),b!==g&&b!==v)if(b!==s)if(b!==f)if(b!==d)if(b!==c)if(b!==l)if(b!==_&&b!==y&&b!==o)if(b!==p)if(b!==h)if(b===a&&C>0){if(R.ranges>0){R.ranges=0
let e=R.nodes.shift()
R.nodes=[e,{type:"text",value:r(R)}]}T({type:"comma",value:b}),R.commas++}else if(b===u&&C>0&&0===R.commas){let e=R.nodes
if(0===C||0===e.length){T({type:"text",value:b})
continue}if("dot"===A.type){if(R.range=[],A.value+=b,A.type="range",3!==R.nodes.length&&5!==R.nodes.length){R.invalid=!0,R.ranges=0,A.type="text"
continue}R.ranges++,R.args=[]
continue}if("range"===A.type){e.pop()
let t=e[e.length-1]
t.value+=A.value+b,A=t,R.ranges--
continue}T({type:"dot",value:b})}else T({type:"text",value:b})
else{if("brace"!==R.type){T({type:"text",value:b})
continue}let e="close"
R=x.pop(),R.close=!0,T({type:e,value:b}),C--,R=x[x.length-1]}else{C++
let e=A.value&&"$"===A.value.slice(-1)||!0===R.dollar
R=T({type:"brace",open:!0,close:!1,dollar:e,depth:C,commas:0,ranges:0,nodes:[]}),x.push(R),T({type:"open",value:b})}else{let e,n=b
for(!0!==t.keepQuotes&&(b="");S<k&&(e=O());)if(e!==s){if(e===n){!0===t.keepQuotes&&(b+=e)
break}b+=e}else b+=e+O()
T({type:"text",value:b})}else{if("paren"!==R.type){T({type:"text",value:b})
continue}R=x.pop(),T({type:"text",value:b}),R=x[x.length-1]}else R=T({type:"paren",nodes:[]}),x.push(R),T({type:"text",value:b})
else{E++
let e
for(;S<k&&(e=O());)if(b+=e,e!==d)if(e!==s){if(e===f&&(E--,0===E))break}else b+=O()
else E++
T({type:"text",value:b})}else T({type:"text",value:"\\"+b})
else T({type:"text",value:(t.keepEscaping?b:"")+O()})
do{if(R=x.pop(),"root"!==R.type){R.nodes.forEach(e=>{e.nodes||("open"===e.type&&(e.isOpen=!0),"close"===e.type&&(e.isClose=!0),e.nodes||(e.type="text"),e.invalid=!0)})
let e=x[x.length-1],t=e.nodes.indexOf(R)
e.nodes.splice(t,1,...R.nodes)}}while(x.length>0)
return T({type:"eos"}),w}},6339:(e,t,n)=>{"use strict"
const r=n(2117)
e.exports=(e,t={})=>{let n=(e,i={})=>{let s=t.escapeInvalid&&r.isInvalidBrace(i),o=!0===e.invalid&&!0===t.escapeInvalid,a=""
if(e.value)return(s||o)&&r.isOpenOrClose(e)?"\\"+e.value:e.value
if(e.value)return e.value
if(e.nodes)for(let t of e.nodes)a+=n(t)
return a}
return n(e)}},2117:(e,t)=>{"use strict"
t.isInteger=e=>"number"==typeof e?Number.isInteger(e):"string"==typeof e&&""!==e.trim()&&Number.isInteger(Number(e)),t.find=(e,t)=>e.nodes.find(e=>e.type===t),t.exceedsLimit=(e,n,r=1,i)=>!1!==i&&(!(!t.isInteger(e)||!t.isInteger(n))&&(Number(n)-Number(e))/Number(r)>=i),t.escapeNode=(e,t=0,n)=>{let r=e.nodes[t]
r&&(n&&r.type===n||"open"===r.type||"close"===r.type)&&!0!==r.escaped&&(r.value="\\"+r.value,r.escaped=!0)},t.encloseBrace=e=>"brace"===e.type&&(e.commas>>0+e.ranges>>0==0&&(e.invalid=!0,!0)),t.isInvalidBrace=e=>"brace"===e.type&&(!(!0!==e.invalid&&!e.dollar)||(e.commas>>0+e.ranges>>0==0||!0!==e.open||!0!==e.close)&&(e.invalid=!0,!0)),t.isOpenOrClose=e=>"open"===e.type||"close"===e.type||(!0===e.open||!0===e.close),t.reduce=e=>e.reduce((e,t)=>("text"===t.type&&e.push(t.value),"range"===t.type&&(t.type="text"),e),[]),t.flatten=(...e)=>{const t=[],n=e=>{for(let r=0;r<e.length;r++){let i=e[r]
Array.isArray(i)?n(i,t):void 0!==i&&t.push(i)}return t}
return n(e),t}},824:(e,t,n)=>{"use strict"
const r=n(1669),i=n(9466),s=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),o=e=>"number"==typeof e||"string"==typeof e&&""!==e,a=e=>Number.isInteger(+e),u=e=>{let t=""+e,n=-1
if("-"===t[0]&&(t=t.slice(1)),"0"===t)return!1
for(;"0"===t[++n];);return n>0},c=(e,t,n)=>{if(t>0){let n="-"===e[0]?"-":""
n&&(e=e.slice(1)),e=n+e.padStart(n?t-1:t,"0")}return!1===n?String(e):e},l=(e,t)=>{let n="-"===e[0]?"-":""
for(n&&(e=e.slice(1),t--);e.length<t;)e="0"+e
return n?"-"+e:e},p=(e,t,n,r)=>{if(n)return i(e,t,{wrap:!1,...r})
let s=String.fromCharCode(e)
return e===t?s:`[${s}-${String.fromCharCode(t)}]`},h=(e,t,n)=>{if(Array.isArray(e)){let t=!0===n.wrap,r=n.capture?"":"?:"
return t?`(${r}${e.join("|")})`:e.join("|")}return i(e,t,n)},d=(...e)=>new RangeError("Invalid range arguments: "+r.inspect(...e)),f=(e,t,n)=>{if(!0===n.strictRanges)throw d([e,t])
return[]},_=(e,t,n=1,r={})=>{let i=Number(e),s=Number(t)
if(!Number.isInteger(i)||!Number.isInteger(s)){if(!0===r.strictRanges)throw d([e,t])
return[]}0===i&&(i=0),0===s&&(s=0)
let o=i>s,a=String(e),f=String(t),_=String(n)
n=Math.max(Math.abs(n),1)
let y=u(a)||u(f)||u(_),v=y?Math.max(a.length,f.length,_.length):0,g=!1===y&&!1===((e,t,n)=>"string"==typeof e||"string"==typeof t||!0===n.stringify)(e,t,r),m=r.transform||(e=>t=>!0===e?Number(t):String(t))(g)
if(r.toRegex&&1===n)return p(l(e,v),l(t,v),!0,r)
let b={negatives:[],positives:[]},w=[],x=0
for(;o?i>=s:i<=s;)!0===r.toRegex&&n>1?b[(R=i)<0?"negatives":"positives"].push(Math.abs(R)):w.push(c(m(i,x),v,g)),i=o?i-n:i+n,x++
var R
return!0===r.toRegex?n>1?((e,t)=>{e.negatives.sort((e,t)=>e<t?-1:e>t?1:0),e.positives.sort((e,t)=>e<t?-1:e>t?1:0)
let n,r=t.capture?"":"?:",i="",s=""
return e.positives.length&&(i=e.positives.join("|")),e.negatives.length&&(s=`-(${r}${e.negatives.join("|")})`),n=i&&s?`${i}|${s}`:i||s,t.wrap?`(${r}${n})`:n})(b,r):h(w,null,{wrap:!1,...r}):w},y=(e,t,n,r={})=>{if(null==t&&o(e))return[e]
if(!o(e)||!o(t))return f(e,t,r)
if("function"==typeof n)return y(e,t,1,{transform:n})
if(s(n))return y(e,t,0,n)
let i={...r}
return!0===i.capture&&(i.wrap=!0),n=n||i.step||1,a(n)?a(e)&&a(t)?_(e,t,n,i):((e,t,n=1,r={})=>{if(!a(e)&&e.length>1||!a(t)&&t.length>1)return f(e,t,r)
let i=r.transform||(e=>String.fromCharCode(e)),s=(""+e).charCodeAt(0),o=(""+t).charCodeAt(0),u=s>o,c=Math.min(s,o),l=Math.max(s,o)
if(r.toRegex&&1===n)return p(c,l,!1,r)
let d=[],_=0
for(;u?s>=o:s<=o;)d.push(i(s,_)),s=u?s-n:s+n,_++
return!0===r.toRegex?h(d,null,{wrap:!1,options:r}):d})(e,t,Math.max(Math.abs(n),1),i):null==n||s(n)?y(e,t,1,n):((e,t)=>{if(!0===t.strictRanges)throw new TypeError(`Expected step "${e}" to be a number`)
return[]})(n,i)}
e.exports=y},6539:(e,t,n)=>{var r=n(7400).Symbol
e.exports=r},9349:e=>{e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t)
case 1:return e.call(t,n[0])
case 2:return e.call(t,n[0],n[1])
case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},8213:(e,t,n)=>{var r=n(4701),i=n(2900),s=n(9785),o=n(3854),a=n(2383),u=n(8519),c=Object.prototype.hasOwnProperty
e.exports=function(e,t){var n=s(e),l=!n&&i(e),p=!n&&!l&&o(e),h=!n&&!l&&!p&&u(e),d=n||l||p||h,f=d?r(e.length,String):[],_=f.length
for(var y in e)!t&&!c.call(e,y)||d&&("length"==y||p&&("offset"==y||"parent"==y)||h&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||a(y,_))||f.push(y)
return f}},9736:(e,t,n)=>{var r=n(6539),i=n(4840),s=n(1258),o=r?r.toStringTag:void 0
e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?i(e):s(e)}},5829:(e,t,n)=>{var r=n(9736),i=n(2360)
e.exports=function(e){return i(e)&&"[object Arguments]"==r(e)}},6729:(e,t,n)=>{var r=n(8338),i=n(9678),s=n(1611),o=n(6532),a=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,l=u.toString,p=c.hasOwnProperty,h=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
e.exports=function(e){return!(!s(e)||i(e))&&(r(e)?h:a).test(o(e))}},6972:(e,t,n)=>{var r=n(9736),i=n(4194),s=n(2360),o={}
o["[object Float32Array]"]=o["[object Float64Array]"]=o["[object Int8Array]"]=o["[object Int16Array]"]=o["[object Int32Array]"]=o["[object Uint8Array]"]=o["[object Uint8ClampedArray]"]=o["[object Uint16Array]"]=o["[object Uint32Array]"]=!0,o["[object Arguments]"]=o["[object Array]"]=o["[object ArrayBuffer]"]=o["[object Boolean]"]=o["[object DataView]"]=o["[object Date]"]=o["[object Error]"]=o["[object Function]"]=o["[object Map]"]=o["[object Number]"]=o["[object Object]"]=o["[object RegExp]"]=o["[object Set]"]=o["[object String]"]=o["[object WeakMap]"]=!1,e.exports=function(e){return s(e)&&i(e.length)&&!!o[r(e)]}},9464:(e,t,n)=>{var r=n(1611),i=n(6016),s=n(1586),o=Object.prototype.hasOwnProperty
e.exports=function(e){if(!r(e))return s(e)
var t=i(e),n=[]
for(var a in e)("constructor"!=a||!t&&o.call(e,a))&&n.push(a)
return n}},1197:(e,t,n)=>{var r=n(1137),i=n(1871),s=n(3132)
e.exports=function(e,t){return s(i(e,t,r),e+"")}},4459:(e,t,n)=>{var r=n(551),i=n(2630),s=n(1137),o=i?function(e,t){return i(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:s
e.exports=o},4701:e=>{e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n)
return r}},9334:e=>{e.exports=function(e){return function(t){return e(t)}}},4937:(e,t,n)=>{var r=n(7400)["__core-js_shared__"]
e.exports=r},2630:(e,t,n)=>{var r=n(1822),i=function(){try{var e=r(Object,"defineProperty")
return e({},"",{}),e}catch(e){}}()
e.exports=i},9120:e=>{var t="object"==typeof global&&global&&global.Object===Object&&global
e.exports=t},1822:(e,t,n)=>{var r=n(6729),i=n(5371)
e.exports=function(e,t){var n=i(e,t)
return r(n)?n:void 0}},4840:(e,t,n)=>{var r=n(6539),i=Object.prototype,s=i.hasOwnProperty,o=i.toString,a=r?r.toStringTag:void 0
e.exports=function(e){var t=s.call(e,a),n=e[a]
try{e[a]=void 0
var r=!0}catch(e){}var i=o.call(e)
return r&&(t?e[a]=n:delete e[a]),i}},5371:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},2383:e=>{var t=/^(?:0|[1-9]\d*)$/
e.exports=function(e,n){var r=typeof e
return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&t.test(e))&&e>-1&&e%1==0&&e<n}},7535:(e,t,n)=>{var r=n(5638),i=n(68),s=n(2383),o=n(1611)
e.exports=function(e,t,n){if(!o(n))return!1
var a=typeof t
return!!("number"==a?i(n)&&s(t,n.length):"string"==a&&t in n)&&r(n[t],e)}},9678:(e,t,n)=>{var r,i=n(4937),s=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:""
e.exports=function(e){return!!s&&s in e}},6016:e=>{var t=Object.prototype
e.exports=function(e){var n=e&&e.constructor
return e===("function"==typeof n&&n.prototype||t)}},1586:e=>{e.exports=function(e){var t=[]
if(null!=e)for(var n in Object(e))t.push(n)
return t}},8125:(e,t,n)=>{e=n.nmd(e)
var r=n(9120),i=t&&!t.nodeType&&t,s=i&&e&&!e.nodeType&&e,o=s&&s.exports===i&&r.process,a=function(){try{var e=s&&s.require&&s.require("util").types
return e||o&&o.binding&&o.binding("util")}catch(e){}}()
e.exports=a},1258:e=>{var t=Object.prototype.toString
e.exports=function(e){return t.call(e)}},1871:(e,t,n)=>{var r=n(9349),i=Math.max
e.exports=function(e,t,n){return t=i(void 0===t?e.length-1:t,0),function(){for(var s=arguments,o=-1,a=i(s.length-t,0),u=Array(a);++o<a;)u[o]=s[t+o]
o=-1
for(var c=Array(t+1);++o<t;)c[o]=s[o]
return c[t]=n(u),r(e,this,c)}}},7400:(e,t,n)=>{var r=n(9120),i="object"==typeof self&&self&&self.Object===Object&&self,s=r||i||Function("return this")()
e.exports=s},3132:(e,t,n)=>{var r=n(4459),i=n(9591)(r)
e.exports=i},9591:e=>{var t=Date.now
e.exports=function(e){var n=0,r=0
return function(){var i=t(),s=16-(i-r)
if(r=i,s>0){if(++n>=800)return arguments[0]}else n=0
return e.apply(void 0,arguments)}}},6532:e=>{var t=Function.prototype.toString
e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},551:e=>{e.exports=function(e){return function(){return e}}},236:(e,t,n)=>{var r=n(1197),i=n(5638),s=n(7535),o=n(3893),a=Object.prototype,u=a.hasOwnProperty,c=r((function(e,t){e=Object(e)
var n=-1,r=t.length,c=r>2?t[2]:void 0
for(c&&s(t[0],t[1],c)&&(r=1);++n<r;)for(var l=t[n],p=o(l),h=-1,d=p.length;++h<d;){var f=p[h],_=e[f];(void 0===_||i(_,a[f])&&!u.call(e,f))&&(e[f]=l[f])}return e}))
e.exports=c},5638:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},1137:e=>{e.exports=function(e){return e}},2900:(e,t,n)=>{var r=n(5829),i=n(2360),s=Object.prototype,o=s.hasOwnProperty,a=s.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return i(e)&&o.call(e,"callee")&&!a.call(e,"callee")}
e.exports=u},9785:e=>{var t=Array.isArray
e.exports=t},68:(e,t,n)=>{var r=n(8338),i=n(4194)
e.exports=function(e){return null!=e&&i(e.length)&&!r(e)}},3854:(e,t,n)=>{e=n.nmd(e)
var r=n(7400),i=n(7714),s=t&&!t.nodeType&&t,o=s&&e&&!e.nodeType&&e,a=o&&o.exports===s?r.Buffer:void 0,u=(a?a.isBuffer:void 0)||i
e.exports=u},8338:(e,t,n)=>{var r=n(9736),i=n(1611)
e.exports=function(e){if(!i(e))return!1
var t=r(e)
return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},4194:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},1611:e=>{e.exports=function(e){var t=typeof e
return null!=e&&("object"==t||"function"==t)}},2360:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},8519:(e,t,n)=>{var r=n(6972),i=n(9334),s=n(8125),o=s&&s.isTypedArray,a=o?i(o):r
e.exports=a},3893:(e,t,n)=>{var r=n(8213),i=n(9464),s=n(68)
e.exports=function(e){return s(e)?r(e,!0):i(e)}},7714:e=>{e.exports=function(){return!1}},8751:(e,t,n)=>{"use strict"
const r=n(1669),i=n(2706),s=n(9264),o=n(3337),a=e=>"string"==typeof e&&(""===e||"./"===e),u=(e,t,n)=>{t=[].concat(t),e=[].concat(e)
let r=new Set,i=new Set,o=new Set,a=0,u=e=>{o.add(e.output),n&&n.onResult&&n.onResult(e)}
for(let o=0;o<t.length;o++){let c=s(String(t[o]),{...n,onResult:u},!0),l=c.state.negated||c.state.negatedExtglob
l&&a++
for(let t of e){let e=c(t,!0);(l?!e.isMatch:e.isMatch)&&(l?r.add(e.output):(r.delete(e.output),i.add(e.output)))}}let c=(a===t.length?[...o]:[...i]).filter(e=>!r.has(e))
if(n&&0===c.length){if(!0===n.failglob)throw new Error(`No matches found for "${t.join(", ")}"`)
if(!0===n.nonull||!0===n.nullglob)return n.unescape?t.map(e=>e.replace(/\\/g,"")):t}return c}
u.match=u,u.matcher=(e,t)=>s(e,t),u.any=u.isMatch=(e,t,n)=>s(t,n)(e),u.not=(e,t,n={})=>{t=[].concat(t).map(String)
let r=new Set,i=[],s=u(e,t,{...n,onResult:e=>{n.onResult&&n.onResult(e),i.push(e.output)}})
for(let e of i)s.includes(e)||r.add(e)
return[...r]},u.contains=(e,t,n)=>{if("string"!=typeof e)throw new TypeError(`Expected a string: "${r.inspect(e)}"`)
if(Array.isArray(t))return t.some(t=>u.contains(e,t,n))
if("string"==typeof t){if(a(e)||a(t))return!1
if(e.includes(t)||e.startsWith("./")&&e.slice(2).includes(t))return!0}return u.isMatch(e,t,{...n,contains:!0})},u.matchKeys=(e,t,n)=>{if(!o.isObject(e))throw new TypeError("Expected the first argument to be an object")
let r=u(Object.keys(e),t,n),i={}
for(let t of r)i[t]=e[t]
return i},u.some=(e,t,n)=>{let r=[].concat(e)
for(let e of[].concat(t)){let t=s(String(e),n)
if(r.some(e=>t(e)))return!0}return!1},u.every=(e,t,n)=>{let r=[].concat(e)
for(let e of[].concat(t)){let t=s(String(e),n)
if(!r.every(e=>t(e)))return!1}return!0},u.all=(e,t,n)=>{if("string"!=typeof e)throw new TypeError(`Expected a string: "${r.inspect(e)}"`)
return[].concat(t).every(t=>s(t,n)(e))},u.capture=(e,t,n)=>{let r=o.isWindows(n),i=s.makeRe(String(e),{...n,capture:!0}).exec(r?o.toPosixSlashes(t):t)
if(i)return i.slice(1).map(e=>void 0===e?"":e)},u.makeRe=(...e)=>s.makeRe(...e),u.scan=(...e)=>s.scan(...e),u.parse=(e,t)=>{let n=[]
for(let r of[].concat(e||[]))for(let e of i(String(r),t))n.push(s.parse(e,t))
return n},u.braces=(e,t)=>{if("string"!=typeof e)throw new TypeError("Expected a string")
return t&&!0===t.nobrace||!/\{.*\}/.test(e)?[e]:i(e,t)},u.braceExpand=(e,t)=>{if("string"!=typeof e)throw new TypeError("Expected a string")
return u.braces(e,{...t,expand:!0})},e.exports=u},9264:(e,t,n)=>{"use strict"
e.exports=n(9307)},5448:(e,t,n)=>{"use strict"
const r=n(5622),i={DOT_LITERAL:"\\.",PLUS_LITERAL:"\\+",QMARK_LITERAL:"\\?",SLASH_LITERAL:"\\/",ONE_CHAR:"(?=.)",QMARK:"[^/]",END_ANCHOR:"(?:\\/|$)",DOTS_SLASH:"\\.{1,2}(?:\\/|$)",NO_DOT:"(?!\\.)",NO_DOTS:"(?!(?:^|\\/)\\.{1,2}(?:\\/|$))",NO_DOT_SLASH:"(?!\\.{0,1}(?:\\/|$))",NO_DOTS_SLASH:"(?!\\.{1,2}(?:\\/|$))",QMARK_NO_DOT:"[^.\\/]",STAR:"[^/]*?",START_ANCHOR:"(?:^|\\/)"},s={...i,SLASH_LITERAL:"[\\\\/]",QMARK:"[^\\\\/]",STAR:"[^\\\\/]*?",DOTS_SLASH:"\\.{1,2}(?:[\\\\/]|$)",NO_DOT:"(?!\\.)",NO_DOTS:"(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",NO_DOT_SLASH:"(?!\\.{0,1}(?:[\\\\/]|$))",NO_DOTS_SLASH:"(?!\\.{1,2}(?:[\\\\/]|$))",QMARK_NO_DOT:"[^.\\\\/]",START_ANCHOR:"(?:^|[\\\\/])",END_ANCHOR:"(?:[\\\\/]|$)"}
e.exports={MAX_LENGTH:65536,POSIX_REGEX_SOURCE:{alnum:"a-zA-Z0-9",alpha:"a-zA-Z",ascii:"\\x00-\\x7F",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E ",punct:"\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"},REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,REPLACEMENTS:{"***":"*","**/**":"**","**/**/**":"**"},CHAR_0:48,CHAR_9:57,CHAR_UPPERCASE_A:65,CHAR_LOWERCASE_A:97,CHAR_UPPERCASE_Z:90,CHAR_LOWERCASE_Z:122,CHAR_LEFT_PARENTHESES:40,CHAR_RIGHT_PARENTHESES:41,CHAR_ASTERISK:42,CHAR_AMPERSAND:38,CHAR_AT:64,CHAR_BACKWARD_SLASH:92,CHAR_CARRIAGE_RETURN:13,CHAR_CIRCUMFLEX_ACCENT:94,CHAR_COLON:58,CHAR_COMMA:44,CHAR_DOT:46,CHAR_DOUBLE_QUOTE:34,CHAR_EQUAL:61,CHAR_EXCLAMATION_MARK:33,CHAR_FORM_FEED:12,CHAR_FORWARD_SLASH:47,CHAR_GRAVE_ACCENT:96,CHAR_HASH:35,CHAR_HYPHEN_MINUS:45,CHAR_LEFT_ANGLE_BRACKET:60,CHAR_LEFT_CURLY_BRACE:123,CHAR_LEFT_SQUARE_BRACKET:91,CHAR_LINE_FEED:10,CHAR_NO_BREAK_SPACE:160,CHAR_PERCENT:37,CHAR_PLUS:43,CHAR_QUESTION_MARK:63,CHAR_RIGHT_ANGLE_BRACKET:62,CHAR_RIGHT_CURLY_BRACE:125,CHAR_RIGHT_SQUARE_BRACKET:93,CHAR_SEMICOLON:59,CHAR_SINGLE_QUOTE:39,CHAR_SPACE:32,CHAR_TAB:9,CHAR_UNDERSCORE:95,CHAR_VERTICAL_LINE:124,CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,SEP:r.sep,extglobChars:e=>({"!":{type:"negate",open:"(?:(?!(?:",close:`))${e.STAR})`},"?":{type:"qmark",open:"(?:",close:")?"},"+":{type:"plus",open:"(?:",close:")+"},"*":{type:"star",open:"(?:",close:")*"},"@":{type:"at",open:"(?:",close:")"}}),globChars:e=>!0===e?s:i}},1711:(e,t,n)=>{"use strict"
const r=n(5448),i=n(3337),{MAX_LENGTH:s,POSIX_REGEX_SOURCE:o,REGEX_NON_SPECIAL_CHARS:a,REGEX_SPECIAL_CHARS_BACKREF:u,REPLACEMENTS:c}=r,l=(e,t)=>{if("function"==typeof t.expandRange)return t.expandRange(...e,t)
e.sort()
const n=`[${e.join("-")}]`
try{new RegExp(n)}catch(t){return e.map(e=>i.escapeRegex(e)).join("..")}return n},p=(e,t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,h=(e,t)=>{if("string"!=typeof e)throw new TypeError("Expected a string")
e=c[e]||e
const n={...t},h="number"==typeof n.maxLength?Math.min(s,n.maxLength):s
let d=e.length
if(d>h)throw new SyntaxError(`Input length: ${d}, exceeds maximum allowed length: ${h}`)
const f={type:"bos",value:"",output:n.prepend||""},_=[f],y=n.capture?"":"?:",v=i.isWindows(t),g=r.globChars(v),m=r.extglobChars(g),{DOT_LITERAL:b,PLUS_LITERAL:w,SLASH_LITERAL:x,ONE_CHAR:R,DOTS_SLASH:A,NO_DOT:E,NO_DOT_SLASH:k,NO_DOTS_SLASH:S,QMARK:C,QMARK_NO_DOT:O,STAR:T,START_ANCHOR:P}=g,I=e=>`(${y}(?:(?!${P}${e.dot?A:b}).)*?)`,j=n.dot?"":E,L=n.dot?C:O
let H=!0===n.bash?I(n):T
n.capture&&(H=`(${H})`),"boolean"==typeof n.noext&&(n.noextglob=n.noext)
const $={input:e,index:-1,start:0,dot:!0===n.dot,consumed:"",output:"",prefix:"",backtrack:!1,negated:!1,brackets:0,braces:0,parens:0,quotes:0,globstar:!1,tokens:_}
e=i.removePrefix(e,$),d=e.length
const N=[],q=[],B=[]
let D,M=f
const G=()=>$.index===d-1,U=$.peek=(t=1)=>e[$.index+t],F=$.advance=()=>e[++$.index],K=()=>e.slice($.index+1),z=(e="",t=0)=>{$.consumed+=e,$.index+=t},W=e=>{$.output+=null!=e.output?e.output:e.value,z(e.value)},Q=()=>{let e=1
for(;"!"===U()&&("("!==U(2)||"?"===U(3));)F(),$.start++,e++
return e%2!=0&&($.negated=!0,$.start++,!0)},V=e=>{$[e]++,B.push(e)},X=e=>{$[e]--,B.pop()},Y=e=>{if("globstar"===M.type){const t=$.braces>0&&("comma"===e.type||"brace"===e.type),n=!0===e.extglob||N.length&&("pipe"===e.type||"paren"===e.type)
"slash"===e.type||"paren"===e.type||t||n||($.output=$.output.slice(0,-M.output.length),M.type="star",M.value="*",M.output=H,$.output+=M.output)}if(N.length&&"paren"!==e.type&&!m[e.value]&&(N[N.length-1].inner+=e.value),(e.value||e.output)&&W(e),M&&"text"===M.type&&"text"===e.type)return M.value+=e.value,void(M.output=(M.output||"")+e.value)
e.prev=M,_.push(e),M=e},Z=(e,t)=>{const r={...m[t],conditions:1,inner:""}
r.prev=M,r.parens=$.parens,r.output=$.output
const i=(n.capture?"(":"")+r.open
V("parens"),Y({type:e,value:t,output:$.output?"":R}),Y({type:"paren",extglob:!0,value:F(),output:i}),N.push(r)},J=e=>{let t=e.close+(n.capture?")":"")
if("negate"===e.type){let r=H
e.inner&&e.inner.length>1&&e.inner.includes("/")&&(r=I(n)),(r!==H||G()||/^\)+$/.test(K()))&&(t=e.close=")$))"+r),"bos"===e.prev.type&&G()&&($.negatedExtglob=!0)}Y({type:"paren",extglob:!0,value:D,output:t}),X("parens")}
if(!1!==n.fastpaths&&!/(^[*!]|[/()[\]{}"])/.test(e)){let r=!1,s=e.replace(u,(e,t,n,i,s,o)=>"\\"===i?(r=!0,e):"?"===i?t?t+i+(s?C.repeat(s.length):""):0===o?L+(s?C.repeat(s.length):""):C.repeat(n.length):"."===i?b.repeat(n.length):"*"===i?t?t+i+(s?H:""):H:t?e:"\\"+e)
return!0===r&&(s=!0===n.unescape?s.replace(/\\/g,""):s.replace(/\\+/g,e=>e.length%2==0?"\\\\":e?"\\":"")),s===e&&!0===n.contains?($.output=e,$):($.output=i.wrapOutput(s,$,t),$)}for(;!G();){if(D=F(),"\0"===D)continue
if("\\"===D){const e=U()
if("/"===e&&!0!==n.bash)continue
if("."===e||";"===e)continue
if(!e){D+="\\",Y({type:"text",value:D})
continue}const t=/^\\+/.exec(K())
let r=0
if(t&&t[0].length>2&&(r=t[0].length,$.index+=r,r%2!=0&&(D+="\\")),!0===n.unescape?D=F()||"":D+=F()||"",0===$.brackets){Y({type:"text",value:D})
continue}}if($.brackets>0&&("]"!==D||"["===M.value||"[^"===M.value)){if(!1!==n.posix&&":"===D){const e=M.value.slice(1)
if(e.includes("[")&&(M.posix=!0,e.includes(":"))){const e=M.value.lastIndexOf("["),t=M.value.slice(0,e),n=M.value.slice(e+2),r=o[n]
if(r){M.value=t+r,$.backtrack=!0,F(),f.output||1!==_.indexOf(M)||(f.output=R)
continue}}}("["===D&&":"!==U()||"-"===D&&"]"===U())&&(D="\\"+D),"]"!==D||"["!==M.value&&"[^"!==M.value||(D="\\"+D),!0===n.posix&&"!"===D&&"["===M.value&&(D="^"),M.value+=D,W({value:D})
continue}if(1===$.quotes&&'"'!==D){D=i.escapeRegex(D),M.value+=D,W({value:D})
continue}if('"'===D){$.quotes=1===$.quotes?0:1,!0===n.keepQuotes&&Y({type:"text",value:D})
continue}if("("===D){V("parens"),Y({type:"paren",value:D})
continue}if(")"===D){if(0===$.parens&&!0===n.strictBrackets)throw new SyntaxError(p("opening","("))
const e=N[N.length-1]
if(e&&$.parens===e.parens+1){J(N.pop())
continue}Y({type:"paren",value:D,output:$.parens?")":"\\)"}),X("parens")
continue}if("["===D){if(!0!==n.nobracket&&K().includes("]"))V("brackets")
else{if(!0!==n.nobracket&&!0===n.strictBrackets)throw new SyntaxError(p("closing","]"))
D="\\"+D}Y({type:"bracket",value:D})
continue}if("]"===D){if(!0===n.nobracket||M&&"bracket"===M.type&&1===M.value.length){Y({type:"text",value:D,output:"\\"+D})
continue}if(0===$.brackets){if(!0===n.strictBrackets)throw new SyntaxError(p("opening","["))
Y({type:"text",value:D,output:"\\"+D})
continue}X("brackets")
const e=M.value.slice(1)
if(!0===M.posix||"^"!==e[0]||e.includes("/")||(D="/"+D),M.value+=D,W({value:D}),!1===n.literalBrackets||i.hasRegexChars(e))continue
const t=i.escapeRegex(M.value)
if($.output=$.output.slice(0,-M.value.length),!0===n.literalBrackets){$.output+=t,M.value=t
continue}M.value=`(${y}${t}|${M.value})`,$.output+=M.value
continue}if("{"===D&&!0!==n.nobrace){V("braces")
const e={type:"brace",value:D,output:"(",outputIndex:$.output.length,tokensIndex:$.tokens.length}
q.push(e),Y(e)
continue}if("}"===D){const e=q[q.length-1]
if(!0===n.nobrace||!e){Y({type:"text",value:D,output:D})
continue}let t=")"
if(!0===e.dots){const e=_.slice(),r=[]
for(let t=e.length-1;t>=0&&(_.pop(),"brace"!==e[t].type);t--)"dots"!==e[t].type&&r.unshift(e[t].value)
t=l(r,n),$.backtrack=!0}if(!0!==e.comma&&!0!==e.dots){const n=$.output.slice(0,e.outputIndex),r=$.tokens.slice(e.tokensIndex)
e.value=e.output="\\{",D=t="\\}",$.output=n
for(const e of r)$.output+=e.output||e.value}Y({type:"brace",value:D,output:t}),X("braces"),q.pop()
continue}if("|"===D){N.length>0&&N[N.length-1].conditions++,Y({type:"text",value:D})
continue}if(","===D){let e=D
const t=q[q.length-1]
t&&"braces"===B[B.length-1]&&(t.comma=!0,e="|"),Y({type:"comma",value:D,output:e})
continue}if("/"===D){if("dot"===M.type&&$.index===$.start+1){$.start=$.index+1,$.consumed="",$.output="",_.pop(),M=f
continue}Y({type:"slash",value:D,output:x})
continue}if("."===D){if($.braces>0&&"dot"===M.type){"."===M.value&&(M.output=b)
const e=q[q.length-1]
M.type="dots",M.output+=D,M.value+=D,e.dots=!0
continue}if($.braces+$.parens===0&&"bos"!==M.type&&"slash"!==M.type){Y({type:"text",value:D,output:b})
continue}Y({type:"dot",value:D,output:b})
continue}if("?"===D){if(!(M&&"("===M.value)&&!0!==n.noextglob&&"("===U()&&"?"!==U(2)){Z("qmark",D)
continue}if(M&&"paren"===M.type){const e=U()
let t=D
if("<"===e&&!i.supportsLookbehinds())throw new Error("Node.js v10 or higher is required for regex lookbehinds");("("===M.value&&!/[!=<:]/.test(e)||"<"===e&&!/<([!=]|\w+>)/.test(K()))&&(t="\\"+D),Y({type:"text",value:D,output:t})
continue}if(!0!==n.dot&&("slash"===M.type||"bos"===M.type)){Y({type:"qmark",value:D,output:O})
continue}Y({type:"qmark",value:D,output:C})
continue}if("!"===D){if(!0!==n.noextglob&&"("===U()&&("?"!==U(2)||!/[!=<:]/.test(U(3)))){Z("negate",D)
continue}if(!0!==n.nonegate&&0===$.index){Q()
continue}}if("+"===D){if(!0!==n.noextglob&&"("===U()&&"?"!==U(2)){Z("plus",D)
continue}if(M&&"("===M.value||!1===n.regex){Y({type:"plus",value:D,output:w})
continue}if(M&&("bracket"===M.type||"paren"===M.type||"brace"===M.type)||$.parens>0){Y({type:"plus",value:D})
continue}Y({type:"plus",value:w})
continue}if("@"===D){if(!0!==n.noextglob&&"("===U()&&"?"!==U(2)){Y({type:"at",extglob:!0,value:D,output:""})
continue}Y({type:"text",value:D})
continue}if("*"!==D){"$"!==D&&"^"!==D||(D="\\"+D)
const e=a.exec(K())
e&&(D+=e[0],$.index+=e[0].length),Y({type:"text",value:D})
continue}if(M&&("globstar"===M.type||!0===M.star)){M.type="star",M.star=!0,M.value+=D,M.output=H,$.backtrack=!0,$.globstar=!0,z(D)
continue}let t=K()
if(!0!==n.noextglob&&/^\([^?]/.test(t)){Z("star",D)
continue}if("star"===M.type){if(!0===n.noglobstar){z(D)
continue}const r=M.prev,i=r.prev,s="slash"===r.type||"bos"===r.type,o=i&&("star"===i.type||"globstar"===i.type)
if(!0===n.bash&&(!s||t[0]&&"/"!==t[0])){Y({type:"star",value:D,output:""})
continue}const a=$.braces>0&&("comma"===r.type||"brace"===r.type),u=N.length&&("pipe"===r.type||"paren"===r.type)
if(!s&&"paren"!==r.type&&!a&&!u){Y({type:"star",value:D,output:""})
continue}for(;"/**"===t.slice(0,3);){const n=e[$.index+4]
if(n&&"/"!==n)break
t=t.slice(3),z("/**",3)}if("bos"===r.type&&G()){M.type="globstar",M.value+=D,M.output=I(n),$.output=M.output,$.globstar=!0,z(D)
continue}if("slash"===r.type&&"bos"!==r.prev.type&&!o&&G()){$.output=$.output.slice(0,-(r.output+M.output).length),r.output="(?:"+r.output,M.type="globstar",M.output=I(n)+(n.strictSlashes?")":"|$)"),M.value+=D,$.globstar=!0,$.output+=r.output+M.output,z(D)
continue}if("slash"===r.type&&"bos"!==r.prev.type&&"/"===t[0]){const e=void 0!==t[1]?"|$":""
$.output=$.output.slice(0,-(r.output+M.output).length),r.output="(?:"+r.output,M.type="globstar",M.output=`${I(n)}${x}|${x}${e})`,M.value+=D,$.output+=r.output+M.output,$.globstar=!0,z(D+F()),Y({type:"slash",value:"/",output:""})
continue}if("bos"===r.type&&"/"===t[0]){M.type="globstar",M.value+=D,M.output=`(?:^|${x}|${I(n)}${x})`,$.output=M.output,$.globstar=!0,z(D+F()),Y({type:"slash",value:"/",output:""})
continue}$.output=$.output.slice(0,-M.output.length),M.type="globstar",M.output=I(n),M.value+=D,$.output+=M.output,$.globstar=!0,z(D)
continue}const r={type:"star",value:D,output:H}
!0!==n.bash?!M||"bracket"!==M.type&&"paren"!==M.type||!0!==n.regex?($.index!==$.start&&"slash"!==M.type&&"dot"!==M.type||("dot"===M.type?($.output+=k,M.output+=k):!0===n.dot?($.output+=S,M.output+=S):($.output+=j,M.output+=j),"*"!==U()&&($.output+=R,M.output+=R)),Y(r)):(r.output=D,Y(r)):(r.output=".*?","bos"!==M.type&&"slash"!==M.type||(r.output=j+r.output),Y(r))}for(;$.brackets>0;){if(!0===n.strictBrackets)throw new SyntaxError(p("closing","]"))
$.output=i.escapeLast($.output,"["),X("brackets")}for(;$.parens>0;){if(!0===n.strictBrackets)throw new SyntaxError(p("closing",")"))
$.output=i.escapeLast($.output,"("),X("parens")}for(;$.braces>0;){if(!0===n.strictBrackets)throw new SyntaxError(p("closing","}"))
$.output=i.escapeLast($.output,"{"),X("braces")}if(!0===n.strictSlashes||"star"!==M.type&&"bracket"!==M.type||Y({type:"maybe_slash",value:"",output:x+"?"}),!0===$.backtrack){$.output=""
for(const e of $.tokens)$.output+=null!=e.output?e.output:e.value,e.suffix&&($.output+=e.suffix)}return $}
h.fastpaths=(e,t)=>{const n={...t},o="number"==typeof n.maxLength?Math.min(s,n.maxLength):s,a=e.length
if(a>o)throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${o}`)
e=c[e]||e
const u=i.isWindows(t),{DOT_LITERAL:l,SLASH_LITERAL:p,ONE_CHAR:h,DOTS_SLASH:d,NO_DOT:f,NO_DOTS:_,NO_DOTS_SLASH:y,STAR:v,START_ANCHOR:g}=r.globChars(u),m=n.dot?_:f,b=n.dot?y:f,w=n.capture?"":"?:"
let x=!0===n.bash?".*?":v
n.capture&&(x=`(${x})`)
const R=e=>!0===e.noglobstar?x:`(${w}(?:(?!${g}${e.dot?d:l}).)*?)`,A=e=>{switch(e){case"*":return`${m}${h}${x}`
case".*":return`${l}${h}${x}`
case"*.*":return`${m}${x}${l}${h}${x}`
case"*/*":return`${m}${x}${p}${h}${b}${x}`
case"**":return m+R(n)
case"**/*":return`(?:${m}${R(n)}${p})?${b}${h}${x}`
case"**/*.*":return`(?:${m}${R(n)}${p})?${b}${x}${l}${h}${x}`
case"**/.*":return`(?:${m}${R(n)}${p})?${l}${h}${x}`
default:{const t=/^(.*?)\.(\w+)$/.exec(e)
if(!t)return
const n=A(t[1])
if(!n)return
return n+l+t[2]}}},E=i.removePrefix(e,{negated:!1,prefix:""})
let k=A(E)
return k&&!0!==n.strictSlashes&&(k+=p+"?"),k},e.exports=h},9307:(e,t,n)=>{"use strict"
const r=n(5622),i=n(5142),s=n(1711),o=n(3337),a=n(5448),u=(e,t,n=!1)=>{if(Array.isArray(e)){const r=e.map(e=>u(e,t,n))
return e=>{for(const t of r){const n=t(e)
if(n)return n}return!1}}const r=(i=e)&&"object"==typeof i&&!Array.isArray(i)&&e.tokens&&e.input
var i
if(""===e||"string"!=typeof e&&!r)throw new TypeError("Expected pattern to be a non-empty string")
const s=t||{},a=o.isWindows(t),c=r?u.compileRe(e,t):u.makeRe(e,t,!1,!0),l=c.state
delete c.state
let p=()=>!1
if(s.ignore){const e={...t,ignore:null,onMatch:null,onResult:null}
p=u(s.ignore,e,n)}const h=(n,r=!1)=>{const{isMatch:i,match:o,output:h}=u.test(n,c,t,{glob:e,posix:a}),d={glob:e,state:l,regex:c,posix:a,input:n,output:h,match:o,isMatch:i}
return"function"==typeof s.onResult&&s.onResult(d),!1===i?(d.isMatch=!1,!!r&&d):p(n)?("function"==typeof s.onIgnore&&s.onIgnore(d),d.isMatch=!1,!!r&&d):("function"==typeof s.onMatch&&s.onMatch(d),!r||d)}
return n&&(h.state=l),h}
u.test=(e,t,n,{glob:r,posix:i}={})=>{if("string"!=typeof e)throw new TypeError("Expected input to be a string")
if(""===e)return{isMatch:!1,output:""}
const s=n||{},a=s.format||(i?o.toPosixSlashes:null)
let c=e===r,l=c&&a?a(e):e
return!1===c&&(l=a?a(e):e,c=l===r),!1!==c&&!0!==s.capture||(c=!0===s.matchBase||!0===s.basename?u.matchBase(e,t,n,i):t.exec(l)),{isMatch:Boolean(c),match:c,output:l}},u.matchBase=(e,t,n,i=o.isWindows(n))=>(t instanceof RegExp?t:u.makeRe(t,n)).test(r.basename(e)),u.isMatch=(e,t,n)=>u(t,n)(e),u.parse=(e,t)=>Array.isArray(e)?e.map(e=>u.parse(e,t)):s(e,{...t,fastpaths:!1}),u.scan=(e,t)=>i(e,t),u.compileRe=(e,t,n=!1,r=!1)=>{if(!0===n)return e.output
const i=t||{},s=i.contains?"":"^",o=i.contains?"":"$"
let a=`${s}(?:${e.output})${o}`
e&&!0===e.negated&&(a=`^(?!${a}).*$`)
const c=u.toRegex(a,t)
return!0===r&&(c.state=e),c},u.makeRe=(e,t,n=!1,r=!1)=>{if(!e||"string"!=typeof e)throw new TypeError("Expected a non-empty string")
const i=t||{}
let o,a={negated:!1,fastpaths:!0},c=""
return e.startsWith("./")&&(e=e.slice(2),c=a.prefix="./"),!1===i.fastpaths||"."!==e[0]&&"*"!==e[0]||(o=s.fastpaths(e,t)),void 0===o?(a=s(e,t),a.prefix=c+(a.prefix||"")):a.output=o,u.compileRe(a,t,n,r)},u.toRegex=(e,t)=>{try{const n=t||{}
return new RegExp(e,n.flags||(n.nocase?"i":""))}catch(e){if(t&&!0===t.debug)throw e
return/$^/}},u.constants=a,e.exports=u},5142:(e,t,n)=>{"use strict"
const r=n(3337),{CHAR_ASTERISK:i,CHAR_AT:s,CHAR_BACKWARD_SLASH:o,CHAR_COMMA:a,CHAR_DOT:u,CHAR_EXCLAMATION_MARK:c,CHAR_FORWARD_SLASH:l,CHAR_LEFT_CURLY_BRACE:p,CHAR_LEFT_PARENTHESES:h,CHAR_LEFT_SQUARE_BRACKET:d,CHAR_PLUS:f,CHAR_QUESTION_MARK:_,CHAR_RIGHT_CURLY_BRACE:y,CHAR_RIGHT_PARENTHESES:v,CHAR_RIGHT_SQUARE_BRACKET:g}=n(5448),m=e=>e===l||e===o,b=e=>{!0!==e.isPrefix&&(e.depth=e.isGlobstar?1/0:1)}
e.exports=(e,t)=>{const n=t||{},w=e.length-1,x=!0===n.parts||!0===n.scanToEnd,R=[],A=[],E=[]
let k,S,C=e,O=-1,T=0,P=0,I=!1,j=!1,L=!1,H=!1,$=!1,N=!1,q=!1,B=!1,D=!1,M=0,G={value:"",depth:0,isGlob:!1}
const U=()=>O>=w,F=()=>(k=S,C.charCodeAt(++O))
for(;O<w;){let e
if(S=F(),S!==o){if(!0===N||S===p){for(M++;!0!==U()&&(S=F());)if(S!==o)if(S!==p){if(!0!==N&&S===u&&(S=F())===u){if(I=G.isBrace=!0,L=G.isGlob=!0,D=!0,!0===x)continue
break}if(!0!==N&&S===a){if(I=G.isBrace=!0,L=G.isGlob=!0,D=!0,!0===x)continue
break}if(S===y&&(M--,0===M)){N=!1,I=G.isBrace=!0,D=!0
break}}else M++
else q=G.backslashes=!0,F()
if(!0===x)continue
break}if(S!==l){if(!0!==n.noext){if(!0===(S===f||S===s||S===i||S===_||S===c)&&C.charCodeAt(O+1)===h){if(L=G.isGlob=!0,H=G.isExtglob=!0,D=!0,!0===x){for(;!0!==U()&&(S=F());)if(S!==o){if(S===v){L=G.isGlob=!0,D=!0
break}}else q=G.backslashes=!0,S=F()
continue}break}}if(S===i){if(k===i&&($=G.isGlobstar=!0),L=G.isGlob=!0,D=!0,!0===x)continue
break}if(S===_){if(L=G.isGlob=!0,D=!0,!0===x)continue
break}if(S===d)for(;!0!==U()&&(e=F());)if(e!==o){if(e===g){if(j=G.isBracket=!0,L=G.isGlob=!0,D=!0,!0===x)continue
break}}else q=G.backslashes=!0,F()
if(!0===n.nonegate||S!==c||O!==T){if(!0!==n.noparen&&S===h){if(L=G.isGlob=!0,!0===x){for(;!0!==U()&&(S=F());)if(S!==h){if(S===v){D=!0
break}}else q=G.backslashes=!0,S=F()
continue}break}if(!0===L){if(D=!0,!0===x)continue
break}}else B=G.negated=!0,T++}else{if(R.push(O),A.push(G),G={value:"",depth:0,isGlob:!1},!0===D)continue
if(k===u&&O===T+1){T+=2
continue}P=O+1}}else q=G.backslashes=!0,S=F(),S===p&&(N=!0)}!0===n.noext&&(H=!1,L=!1)
let K=C,z="",W=""
T>0&&(z=C.slice(0,T),C=C.slice(T),P-=T),K&&!0===L&&P>0?(K=C.slice(0,P),W=C.slice(P)):!0===L?(K="",W=C):K=C,K&&""!==K&&"/"!==K&&K!==C&&m(K.charCodeAt(K.length-1))&&(K=K.slice(0,-1)),!0===n.unescape&&(W&&(W=r.removeBackslashes(W)),K&&!0===q&&(K=r.removeBackslashes(K)))
const Q={prefix:z,input:e,start:T,base:K,glob:W,isBrace:I,isBracket:j,isGlob:L,isExtglob:H,isGlobstar:$,negated:B}
if(!0===n.tokens&&(Q.maxDepth=0,m(S)||A.push(G),Q.tokens=A),!0===n.parts||!0===n.tokens){let t
for(let r=0;r<R.length;r++){const i=t?t+1:T,s=R[r],o=e.slice(i,s)
n.tokens&&(0===r&&0!==T?(A[r].isPrefix=!0,A[r].value=z):A[r].value=o,b(A[r]),Q.maxDepth+=A[r].depth),0===r&&""===o||E.push(o),t=s}if(t&&t+1<e.length){const r=e.slice(t+1)
E.push(r),n.tokens&&(A[A.length-1].value=r,b(A[A.length-1]),Q.maxDepth+=A[A.length-1].depth)}Q.slashes=R,Q.parts=E}return Q}},3337:(e,t,n)=>{"use strict"
const r=n(5622),i="win32"===process.platform,{REGEX_BACKSLASH:s,REGEX_REMOVE_BACKSLASH:o,REGEX_SPECIAL_CHARS:a,REGEX_SPECIAL_CHARS_GLOBAL:u}=n(5448)
t.isObject=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),t.hasRegexChars=e=>a.test(e),t.isRegexChar=e=>1===e.length&&t.hasRegexChars(e),t.escapeRegex=e=>e.replace(u,"\\$1"),t.toPosixSlashes=e=>e.replace(s,"/"),t.removeBackslashes=e=>e.replace(o,e=>"\\"===e?"":e),t.supportsLookbehinds=()=>{const e=process.version.slice(1).split(".").map(Number)
return 3===e.length&&e[0]>=9||8===e[0]&&e[1]>=10},t.isWindows=e=>e&&"boolean"==typeof e.windows?e.windows:!0===i||"\\"===r.sep,t.escapeLast=(e,n,r)=>{const i=e.lastIndexOf(n,r)
return-1===i?e:"\\"===e[i-1]?t.escapeLast(e,n,i-1):`${e.slice(0,i)}\\${e.slice(i)}`},t.removePrefix=(e,t={})=>{let n=e
return n.startsWith("./")&&(n=n.slice(2),t.prefix="./"),n},t.wrapOutput=(e,t={},n={})=>{let r=`${n.contains?"":"^"}(?:${e})${n.contains?"":"$"}`
return!0===t.negated&&(r=`(?:^(?!${r}).*$)`),r}},9466:(e,t,n)=>{"use strict"
const r=n(1193),i=(e,t,n)=>{if(!1===r(e))throw new TypeError("toRegexRange: expected the first argument to be a number")
if(void 0===t||e===t)return String(e)
if(!1===r(t))throw new TypeError("toRegexRange: expected the second argument to be a number.")
let s={relaxZeros:!0,...n}
"boolean"==typeof s.strictZeros&&(s.relaxZeros=!1===s.strictZeros)
let u=e+":"+t+"="+String(s.relaxZeros)+String(s.shorthand)+String(s.capture)+String(s.wrap)
if(i.cache.hasOwnProperty(u))return i.cache[u].result
let c=Math.min(e,t),l=Math.max(e,t)
if(1===Math.abs(c-l)){let n=e+"|"+t
return s.capture?`(${n})`:!1===s.wrap?n:`(?:${n})`}let p=f(e)||f(t),h={min:e,max:t,a:c,b:l},d=[],_=[]
if(p&&(h.isPadded=p,h.maxLen=String(h.max).length),c<0){_=o(l<0?Math.abs(l):1,Math.abs(c),h,s),c=h.a=0}return l>=0&&(d=o(c,l,h,s)),h.negatives=_,h.positives=d,h.result=function(e,t,n){let r=a(e,t,"-",!1,n)||[],i=a(t,e,"",!1,n)||[],s=a(e,t,"-?",!0,n)||[]
return r.concat(s).concat(i).join("|")}(_,d,s),!0===s.capture?h.result=`(${h.result})`:!1!==s.wrap&&d.length+_.length>1&&(h.result=`(?:${h.result})`),i.cache[u]=h,h.result}
function s(e,t,n){if(e===t)return{pattern:e,count:[],digits:0}
let r=function(e,t){let n=[]
for(let r=0;r<e.length;r++)n.push([e[r],t[r]])
return n}(e,t),i=r.length,s="",o=0
for(let e=0;e<i;e++){let[t,i]=r[e]
t===i?s+=t:"0"!==t||"9"!==i?s+=d(t,i,n):o++}return o&&(s+=!0===n.shorthand?"\\d":"[0-9]"),{pattern:s,count:[o],digits:i}}function o(e,t,n,r){let i,o=function(e,t){let n=1,r=1,i=l(e,n),s=new Set([t])
for(;e<=i&&i<=t;)s.add(i),n+=1,i=l(e,n)
for(i=p(t+1,r)-1;e<i&&i<=t;)s.add(i),r+=1,i=p(t+1,r)-1
return s=[...s],s.sort(u),s}(e,t),a=[],c=e
for(let e=0;e<o.length;e++){let t=o[e],u=s(String(c),String(t),r),l=""
n.isPadded||!i||i.pattern!==u.pattern?(n.isPadded&&(l=_(t,n,r)),u.string=l+u.pattern+h(u.count),a.push(u),c=t+1,i=u):(i.count.length>1&&i.count.pop(),i.count.push(u.count[0]),i.string=i.pattern+h(i.count),c=t+1)}return a}function a(e,t,n,r,i){let s=[]
for(let i of e){let{string:e}=i
r||c(t,"string",e)||s.push(n+e),r&&c(t,"string",e)&&s.push(n+e)}return s}function u(e,t){return e>t?1:t>e?-1:0}function c(e,t,n){return e.some(e=>e[t]===n)}function l(e,t){return Number(String(e).slice(0,-t)+"9".repeat(t))}function p(e,t){return e-e%Math.pow(10,t)}function h(e){let[t=0,n=""]=e
return n||t>1?`{${t+(n?","+n:"")}}`:""}function d(e,t,n){return`[${e}${t-e==1?"":"-"}${t}]`}function f(e){return/^-?(0+)\d/.test(e)}function _(e,t,n){if(!t.isPadded)return e
let r=Math.abs(t.maxLen-String(e).length),i=!1!==n.relaxZeros
switch(r){case 0:return""
case 1:return i?"0?":"0"
case 2:return i?"0{0,2}":"00"
default:return i?`0{0,${r}}`:`0{${r}}`}}i.cache={},i.clearCache=()=>i.cache={},e.exports=i},1193:e=>{"use strict"
e.exports=function(e){return"number"==typeof e?e-e==0:"string"==typeof e&&""!==e.trim()&&(Number.isFinite?Number.isFinite(+e):isFinite(+e))}},3129:e=>{"use strict"
e.exports=require("child_process")},5747:e=>{"use strict"
e.exports=require("fs")},8605:e=>{"use strict"
e.exports=require("http")},7211:e=>{"use strict"
e.exports=require("https")},2087:e=>{"use strict"
e.exports=require("os")},5622:e=>{"use strict"
e.exports=require("path")},2413:e=>{"use strict"
e.exports=require("stream")},8835:e=>{"use strict"
e.exports=require("url")},1669:e=>{"use strict"
e.exports=require("util")},8761:e=>{"use strict"
e.exports=require("zlib")}},__webpack_module_cache__={}
function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports
var t=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}}
return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.loaded=!0,t.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict"
var e=__webpack_require__(3129),t=__webpack_require__(236),n=__webpack_require__.n(t),r=__webpack_require__(5622),i=__webpack_require__.n(r),s=__webpack_require__(2413),o=__webpack_require__.n(s),a=__webpack_require__(516),u=__webpack_require__(8751),c=__webpack_require__.n(u),l=__webpack_require__(5747),p=__webpack_require__.n(l),h=__webpack_require__(8605),d=__webpack_require__.n(h),f=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},_=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}
const y=function(t){var n=t.fileIncludePatterns,r=t.fileExcludePatterns
return f(void 0,void 0,void 0,(function(){var t,i,s,o,a
return _(this,(function(u){switch(u.label){case 0:return[4,f(void 0,void 0,void 0,(function(){return _(this,(function(t){return[2,new Promise((function(t,n){(0,e.exec)("git diff -U0 --minimal origin/master",(function(e,r){return e?n(e):t(r)}))}))]}))}))]
case 1:for(t=u.sent().split(/^diff --git.* b\/(.*)\n(?:.*\n){4}/gm),i=[],s=1;s<t.length;s+=2)o=t[s],c().isMatch(o,n,{ignore:r})&&(a=t[s+1].split("\n").filter((function(e){return e.startsWith("+")}))).length>0&&i.push({filePath:o,content:a})
return[2,i]}}))}))}
var v=__webpack_require__(5406),g=__webpack_require__.n(v),m=__webpack_require__(8835),b=__webpack_require__.n(m),w=__webpack_require__(7211),x=__webpack_require__.n(w),R=__webpack_require__(8761),A=__webpack_require__.n(R)
const E=o().Readable,k=Symbol("buffer"),S=Symbol("type")
class C{constructor(){this[S]=""
const e=arguments[0],t=arguments[1],n=[]
let r=0
if(e){const t=e,i=Number(t.length)
for(let e=0;e<i;e++){const i=t[e]
let s
s=i instanceof Buffer?i:ArrayBuffer.isView(i)?Buffer.from(i.buffer,i.byteOffset,i.byteLength):i instanceof ArrayBuffer?Buffer.from(i):i instanceof C?i[k]:Buffer.from("string"==typeof i?i:String(i)),r+=s.length,n.push(s)}}this[k]=Buffer.concat(n)
let i=t&&void 0!==t.type&&String(t.type).toLowerCase()
i&&!/[^\u0020-\u007E]/.test(i)&&(this[S]=i)}get size(){return this[k].length}get type(){return this[S]}text(){return Promise.resolve(this[k].toString())}arrayBuffer(){const e=this[k],t=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)
return Promise.resolve(t)}stream(){const e=new E
return e._read=function(){},e.push(this[k]),e.push(null),e}toString(){return"[object Blob]"}slice(){const e=this.size,t=arguments[0],n=arguments[1]
let r,i
r=void 0===t?0:t<0?Math.max(e+t,0):Math.min(t,e),i=void 0===n?e:n<0?Math.max(e+n,0):Math.min(n,e)
const s=Math.max(i-r,0),o=this[k].slice(r,r+s),a=new C([],{type:arguments[2]})
return a[k]=o,a}}function O(e,t,n){Error.call(this,e),this.message=e,this.type=t,n&&(this.code=this.errno=n.code),Error.captureStackTrace(this,this.constructor)}let T
Object.defineProperties(C.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}}),Object.defineProperty(C.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0}),O.prototype=Object.create(Error.prototype),O.prototype.constructor=O,O.prototype.name="FetchError"
try{T=Object(function(){var e=new Error("Cannot find module 'encoding'")
throw e.code="MODULE_NOT_FOUND",e}())}catch(e){}const P=Symbol("Body internals"),I=o().PassThrough
function j(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.size
let i=void 0===r?0:r
var s=n.timeout
let a=void 0===s?0:s
null==e?e=null:H(e)?e=Buffer.from(e.toString()):$(e)||Buffer.isBuffer(e)||("[object ArrayBuffer]"===Object.prototype.toString.call(e)?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof o()||(e=Buffer.from(String(e)))),this[P]={body:e,disturbed:!1,error:null},this.size=i,this.timeout=a,e instanceof o()&&e.on("error",(function(e){const n="AbortError"===e.name?e:new O(`Invalid response body while trying to fetch ${t.url}: ${e.message}`,"system",e)
t[P].error=n}))}function L(){var e=this
if(this[P].disturbed)return j.Promise.reject(new TypeError("body used already for: "+this.url))
if(this[P].disturbed=!0,this[P].error)return j.Promise.reject(this[P].error)
let t=this.body
if(null===t)return j.Promise.resolve(Buffer.alloc(0))
if($(t)&&(t=t.stream()),Buffer.isBuffer(t))return j.Promise.resolve(t)
if(!(t instanceof o()))return j.Promise.resolve(Buffer.alloc(0))
let n=[],r=0,i=!1
return new j.Promise((function(s,o){let a
e.timeout&&(a=setTimeout((function(){i=!0,o(new O(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))}),e.timeout)),t.on("error",(function(t){"AbortError"===t.name?(i=!0,o(t)):o(new O(`Invalid response body while trying to fetch ${e.url}: ${t.message}`,"system",t))})),t.on("data",(function(t){if(!i&&null!==t){if(e.size&&r+t.length>e.size)return i=!0,void o(new O(`content size at ${e.url} over limit: ${e.size}`,"max-size"))
r+=t.length,n.push(t)}})),t.on("end",(function(){if(!i){clearTimeout(a)
try{s(Buffer.concat(n,r))}catch(t){o(new O(`Could not create Buffer from response body for ${e.url}: ${t.message}`,"system",t))}}}))}))}function H(e){return"object"==typeof e&&"function"==typeof e.append&&"function"==typeof e.delete&&"function"==typeof e.get&&"function"==typeof e.getAll&&"function"==typeof e.has&&"function"==typeof e.set&&("URLSearchParams"===e.constructor.name||"[object URLSearchParams]"===Object.prototype.toString.call(e)||"function"==typeof e.sort)}function $(e){return"object"==typeof e&&"function"==typeof e.arrayBuffer&&"string"==typeof e.type&&"function"==typeof e.stream&&"function"==typeof e.constructor&&"string"==typeof e.constructor.name&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function N(e){let t,n,r=e.body
if(e.bodyUsed)throw new Error("cannot clone body after it is used")
return r instanceof o()&&"function"!=typeof r.getBoundary&&(t=new I,n=new I,r.pipe(t),r.pipe(n),e[P].body=t,r=n),r}function q(e){return null===e?null:"string"==typeof e?"text/plain;charset=UTF-8":H(e)?"application/x-www-form-urlencoded;charset=UTF-8":$(e)?e.type||null:Buffer.isBuffer(e)||"[object ArrayBuffer]"===Object.prototype.toString.call(e)||ArrayBuffer.isView(e)?null:"function"==typeof e.getBoundary?"multipart/form-data;boundary="+e.getBoundary():e instanceof o()?null:"text/plain;charset=UTF-8"}function B(e){const t=e.body
return null===t?0:$(t)?t.size:Buffer.isBuffer(t)?t.length:t&&"function"==typeof t.getLengthSync&&(t._lengthRetrievers&&0==t._lengthRetrievers.length||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}j.prototype={get body(){return this[P].body},get bodyUsed(){return this[P].disturbed},arrayBuffer(){return L.call(this).then((function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}))},blob(){let e=this.headers&&this.headers.get("content-type")||""
return L.call(this).then((function(t){return Object.assign(new C([],{type:e.toLowerCase()}),{[k]:t})}))},json(){var e=this
return L.call(this).then((function(t){try{return JSON.parse(t.toString())}catch(t){return j.Promise.reject(new O(`invalid json response body at ${e.url} reason: ${t.message}`,"invalid-json"))}}))},text(){return L.call(this).then((function(e){return e.toString()}))},buffer(){return L.call(this)},textConverted(){var e=this
return L.call(this).then((function(t){return function(e,t){if("function"!=typeof T)throw new Error("The package `encoding` must be installed to use the textConverted() function")
const n=t.get("content-type")
let r,i,s="utf-8"
n&&(r=/charset=([^;]*)/i.exec(n))
i=e.slice(0,1024).toString(),!r&&i&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(i))
!r&&i&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(i),r&&(r=/charset=(.*)/i.exec(r.pop())))
!r&&i&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(i))
r&&(s=r.pop(),"gb2312"!==s&&"gbk"!==s||(s="gb18030"))
return T(e,"UTF-8",s).toString()}(t,e.headers)}))}},Object.defineProperties(j.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}}),j.mixIn=function(e){for(const t of Object.getOwnPropertyNames(j.prototype))if(!(t in e)){const n=Object.getOwnPropertyDescriptor(j.prototype,t)
Object.defineProperty(e,t,n)}},j.Promise=global.Promise
const D=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,M=/[^\t\x20-\x7e\x80-\xff]/
function G(e){if(e=""+e,D.test(e)||""===e)throw new TypeError(e+" is not a legal HTTP header name")}function U(e){if(e=""+e,M.test(e))throw new TypeError(e+" is not a legal HTTP header value")}function F(e,t){t=t.toLowerCase()
for(const n in e)if(n.toLowerCase()===t)return n}const K=Symbol("map")
class z{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0
if(this[K]=Object.create(null),e instanceof z){const t=e.raw(),n=Object.keys(t)
for(const e of n)for(const n of t[e])this.append(e,n)}else if(null==e);else{if("object"!=typeof e)throw new TypeError("Provided initializer must be an object")
{const t=e[Symbol.iterator]
if(null!=t){if("function"!=typeof t)throw new TypeError("Header pairs must be iterable")
const n=[]
for(const t of e){if("object"!=typeof t||"function"!=typeof t[Symbol.iterator])throw new TypeError("Each header pair must be iterable")
n.push(Array.from(t))}for(const e of n){if(2!==e.length)throw new TypeError("Each header pair must be a name/value tuple")
this.append(e[0],e[1])}}else for(const t of Object.keys(e)){const n=e[t]
this.append(t,n)}}}}get(e){G(e=""+e)
const t=F(this[K],e)
return void 0===t?null:this[K][t].join(", ")}forEach(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=W(this),r=0
for(;r<n.length;){var i=n[r]
const s=i[0],o=i[1]
e.call(t,o,s,this),n=W(this),r++}}set(e,t){t=""+t,G(e=""+e),U(t)
const n=F(this[K],e)
this[K][void 0!==n?n:e]=[t]}append(e,t){t=""+t,G(e=""+e),U(t)
const n=F(this[K],e)
void 0!==n?this[K][n].push(t):this[K][e]=[t]}has(e){return G(e=""+e),void 0!==F(this[K],e)}delete(e){G(e=""+e)
const t=F(this[K],e)
void 0!==t&&delete this[K][t]}raw(){return this[K]}keys(){return V(this,"key")}values(){return V(this,"value")}[Symbol.iterator](){return V(this,"key+value")}}function W(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key+value"
const n=Object.keys(e[K]).sort()
return n.map("key"===t?function(e){return e.toLowerCase()}:"value"===t?function(t){return e[K][t].join(", ")}:function(t){return[t.toLowerCase(),e[K][t].join(", ")]})}z.prototype.entries=z.prototype[Symbol.iterator],Object.defineProperty(z.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(z.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}})
const Q=Symbol("internal")
function V(e,t){const n=Object.create(X)
return n[Q]={target:e,kind:t,index:0},n}const X=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==X)throw new TypeError("Value of `this` is not a HeadersIterator")
var e=this[Q]
const t=e.target,n=e.kind,r=e.index,i=W(t,n)
return r>=i.length?{value:void 0,done:!0}:(this[Q].index=r+1,{value:i[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())))
function Y(e){const t=Object.assign({__proto__:null},e[K]),n=F(e[K],"Host")
return void 0!==n&&(t[n]=t[n][0]),t}Object.defineProperty(X,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0})
const Z=Symbol("Response internals"),J=d().STATUS_CODES
class ee{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
j.call(this,e,t)
const n=t.status||200,r=new z(t.headers)
if(null!=e&&!r.has("Content-Type")){const t=q(e)
t&&r.append("Content-Type",t)}this[Z]={url:t.url,status:n,statusText:t.statusText||J[n],headers:r,counter:t.counter}}get url(){return this[Z].url||""}get status(){return this[Z].status}get ok(){return this[Z].status>=200&&this[Z].status<300}get redirected(){return this[Z].counter>0}get statusText(){return this[Z].statusText}get headers(){return this[Z].headers}clone(){return new ee(N(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}}j.mixIn(ee.prototype),Object.defineProperties(ee.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}}),Object.defineProperty(ee.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0})
const te=Symbol("Request internals"),ne=b().parse,re=b().format,ie="destroy"in o().Readable.prototype
function se(e){return"object"==typeof e&&"object"==typeof e[te]}class oe{constructor(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
se(e)?t=ne(e.url):(t=e&&e.href?ne(e.href):ne(""+e),e={})
let r=n.method||e.method||"GET"
if(r=r.toUpperCase(),(null!=n.body||se(e)&&null!==e.body)&&("GET"===r||"HEAD"===r))throw new TypeError("Request with GET/HEAD method cannot have body")
let i=null!=n.body?n.body:se(e)&&null!==e.body?N(e):null
j.call(this,i,{timeout:n.timeout||e.timeout||0,size:n.size||e.size||0})
const s=new z(n.headers||e.headers||{})
if(null!=i&&!s.has("Content-Type")){const e=q(i)
e&&s.append("Content-Type",e)}let o=se(e)?e.signal:null
if("signal"in n&&(o=n.signal),null!=o&&!function(e){const t=e&&"object"==typeof e&&Object.getPrototypeOf(e)
return!(!t||"AbortSignal"!==t.constructor.name)}(o))throw new TypeError("Expected signal to be an instanceof AbortSignal")
this[te]={method:r,redirect:n.redirect||e.redirect||"follow",headers:s,parsedURL:t,signal:o},this.follow=void 0!==n.follow?n.follow:void 0!==e.follow?e.follow:20,this.compress=void 0!==n.compress?n.compress:void 0===e.compress||e.compress,this.counter=n.counter||e.counter||0,this.agent=n.agent||e.agent}get method(){return this[te].method}get url(){return re(this[te].parsedURL)}get headers(){return this[te].headers}get redirect(){return this[te].redirect}get signal(){return this[te].signal}clone(){return new oe(this)}}function ae(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}j.mixIn(oe.prototype),Object.defineProperty(oe.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(oe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}}),ae.prototype=Object.create(Error.prototype),ae.prototype.constructor=ae,ae.prototype.name="AbortError"
const ue=o().PassThrough,ce=b().resolve
function le(e,t){if(!le.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative")
return j.Promise=le.Promise,new le.Promise((function(n,r){const i=new oe(e,t),s=function(e){const t=e[te].parsedURL,n=new z(e[te].headers)
if(n.has("Accept")||n.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported")
if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported")
if(e.signal&&e.body instanceof o().Readable&&!ie)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8")
let r=null
if(null==e.body&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),null!=e.body){const t=B(e)
"number"==typeof t&&(r=String(t))}r&&n.set("Content-Length",r),n.has("User-Agent")||n.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!n.has("Accept-Encoding")&&n.set("Accept-Encoding","gzip,deflate")
let i=e.agent
return"function"==typeof i&&(i=i(t)),n.has("Connection")||i||n.set("Connection","close"),Object.assign({},t,{method:e.method,headers:Y(n),agent:i})}(i),a=("https:"===s.protocol?x():d()).request,u=i.signal
let c=null
const l=function(){let e=new ae("The user aborted a request.")
r(e),i.body&&i.body instanceof o().Readable&&i.body.destroy(e),c&&c.body&&c.body.emit("error",e)}
if(u&&u.aborted)return void l()
const p=function(){l(),_()},h=a(s)
let f
function _(){h.abort(),u&&u.removeEventListener("abort",p),clearTimeout(f)}u&&u.addEventListener("abort",p),i.timeout&&h.once("socket",(function(e){f=setTimeout((function(){r(new O("network timeout at: "+i.url,"request-timeout")),_()}),i.timeout)})),h.on("error",(function(e){r(new O(`request to ${i.url} failed, reason: ${e.message}`,"system",e)),_()})),h.on("response",(function(e){clearTimeout(f)
const t=function(e){const t=new z
for(const n of Object.keys(e))if(!D.test(n))if(Array.isArray(e[n]))for(const r of e[n])M.test(r)||(void 0===t[K][n]?t[K][n]=[r]:t[K][n].push(r))
else M.test(e[n])||(t[K][n]=[e[n]])
return t}(e.headers)
if(le.isRedirect(e.statusCode)){const s=t.get("Location"),o=null===s?null:ce(i.url,s)
switch(i.redirect){case"error":return r(new O("redirect mode is set to error: "+i.url,"no-redirect")),void _()
case"manual":if(null!==o)try{t.set("Location",o)}catch(e){r(e)}break
case"follow":if(null===o)break
if(i.counter>=i.follow)return r(new O("maximum redirect reached at: "+i.url,"max-redirect")),void _()
const s={headers:new z(i.headers),follow:i.follow,counter:i.counter+1,agent:i.agent,compress:i.compress,method:i.method,body:i.body,signal:i.signal,timeout:i.timeout}
return 303!==e.statusCode&&i.body&&null===B(i)?(r(new O("Cannot follow redirect with body being a readable stream","unsupported-redirect")),void _()):(303!==e.statusCode&&(301!==e.statusCode&&302!==e.statusCode||"POST"!==i.method)||(s.method="GET",s.body=void 0,s.headers.delete("content-length")),n(le(new oe(o,s))),void _())}}e.once("end",(function(){u&&u.removeEventListener("abort",p)}))
let s=e.pipe(new ue)
const o={url:i.url,status:e.statusCode,statusText:e.statusMessage,headers:t,size:i.size,timeout:i.timeout,counter:i.counter},a=t.get("Content-Encoding")
if(!i.compress||"HEAD"===i.method||null===a||204===e.statusCode||304===e.statusCode)return c=new ee(s,o),void n(c)
const l={flush:A().Z_SYNC_FLUSH,finishFlush:A().Z_SYNC_FLUSH}
if("gzip"==a||"x-gzip"==a)return s=s.pipe(A().createGunzip(l)),c=new ee(s,o),void n(c)
if("deflate"!=a&&"x-deflate"!=a){if("br"==a&&"function"==typeof A().createBrotliDecompress)return s=s.pipe(A().createBrotliDecompress()),c=new ee(s,o),void n(c)
c=new ee(s,o),n(c)}else{e.pipe(new ue).once("data",(function(e){s=8==(15&e[0])?s.pipe(A().createInflate()):s.pipe(A().createInflateRaw()),c=new ee(s,o),n(c)}))}})),function(e,t){const n=t.body
null===n?e.end():$(n)?n.stream().pipe(e):Buffer.isBuffer(n)?(e.write(n),e.end()):n.pipe(e)}(h,i)}))}le.isRedirect=function(e){return 301===e||302===e||303===e||307===e||308===e},le.Promise=global.Promise
const pe=le
var he=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},de=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},fe=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},_e={},ye=function(e){var t=e.host,n=e.minTime,r=void 0===n?1e3:n,i=e.maxConcurrent,s=void 0===i?1:i
return _e[t]||(_e[t]=new(g())({minTime:r,maxConcurrent:s})),_e[t]},ve=function(e,t){return he(void 0,void 0,void 0,(function(){return de(this,(function(n){return[2,ye({host:e.host}).schedule((function(){return pe(e.href,t)}))]}))}))},ge=function(e){return he(void 0,void 0,void 0,(function(){var t,n,r
return de(this,(function(i){switch(i.label){case 0:return[4,ve(e,{method:"HEAD"})]
case 1:return 405===(t=i.sent()).status?[2,ve(e,{method:"GET"})]:429===t.status&&(n=t.headers.get("retry-after"))?(r=1e3*Number(n),[2,new Promise((function(t){setTimeout((function(){return he(void 0,void 0,void 0,(function(){var n
return de(this,(function(r){switch(r.label){case 0:return n=t,[4,ge(e)]
case 1:return n.apply(void 0,[r.sent()]),[2]}}))}))}),r)}))]):[2,t]}}))}))},me={},be=function(e){return he(void 0,void 0,void 0,(function(){var t,n
return de(this,(function(r){return t=e.href,(n=me[t])?[2,n]:(me[t]=ge(e),[2,me[t]])}))}))},we=new Set
const xe=function(e){var t=e.link,n=e.url,r=e.linkIncludePatterns,i=e.linkExcludePatterns,s=e.dryRun
return he(void 0,void 0,void 0,(function(){var e,o,a,u,l
return de(this,(function(p){switch(p.label){case 0:if(!function(e,t,n){var r=n.ignore,i=fe(n,["ignore"])
if(c().isMatch(e,t,i)){if(r)if(Array.isArray(r)){var s=r.find((function(t){return c().isMatch(e,t,i)}))
if(s)return we.add(s),!1}else if(c().isMatch(e,r,i))return we.add(r),!1
return!0}return!1}(t,r,{ignore:i,bash:!0}))return[3,5]
if(e=n.href,s)return[2,{link:t,href:t===e?null:e,description:"Skipped because of dry-run",pass:!0}]
p.label=1
case 1:return p.trys.push([1,3,,4]),[4,be(n)]
case 2:return o=p.sent(),a=o.status,u=o.ok,[2,{link:t,href:t===e?null:e,description:a,pass:u}]
case 3:return l=p.sent(),[2,{link:t,href:e,description:["Error",l.code&&" "+l.code,l.message&&": "+l.message].filter(Boolean).join(""),pass:!1}]
case 4:return[3,6]
case 5:return[2,{link:t,description:"Excluded",pass:!0}]
case 6:return[2]}}))}))}
var Re=function(e,t,n){return void 0===n&&(n=function(e){return e[1]}),Array.from(e.matchAll(t),n)},Ae=function(e,t){switch(i().extname(e)){case".md":case".mdx":var n=Re(t,/\[.*?\]\((?:<((?:\(.*?\)|.)*?)>|((?:\(.*?\)|.)*?))(?: ["'].*?["'])?\)/gm,(function(e){return e[2]||e[1]}))
return n?n.filter(Boolean).map((function(e){return e.startsWith("/static")?e.slice(7):e})):null
case".html":return Re(t,/href="(.*?)"/gm)
case".json":return Re(t,/"(?:(?:https?:)?\/\/)?(?:)"/gm)
default:return Re(t,/(((https?:\/\/)[A-Za-z0-9.-]+|(?:www\.)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/gm,(function(e){return e[0]}))}}
const Ee=function(e){var t=e.filePath,n=e.content
return(Array.isArray(n)?[].concat.apply([],n.map((function(e){return Ae(t,e)}))):Ae(t,n)).filter((function(e){return e&&!e.startsWith("#")}))}
var ke=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},Se=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}
function Ce(e,t){return ke(this,void 0,void 0,(function(){return Se(this,(function(n){return[2,Promise.all(e.map(t))]}))}))}var Oe=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},Te=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},Pe=function(e,t){var n=e.filePath,r=e.content,i=t.rootURL,s=t.linkIncludePatterns,o=t.linkExcludePatterns,a=t.dryRun
return Oe(void 0,void 0,void 0,(function(){var e,t
return Te(this,(function(u){switch(u.label){case 0:return e={filePath:n},[4,"function"==typeof r?r(n):r]
case 1:return e.content=u.sent(),[4,Ce(Ee(e),(function(e){return Oe(void 0,void 0,void 0,(function(){var t
return Te(this,(function(n){switch(n.label){case 0:return(t=function(e,t){try{return new URL(/^(https?:\/)?\//.test(e)?e:"https://"+e,t)}catch(e){return null}}(e,i))?[4,xe({link:e,url:t,linkIncludePatterns:s,linkExcludePatterns:o,dryRun:a})]:[2,null]
case 1:return[2,n.sent()]}}))}))}))]
case 2:return t=u.sent().filter(Boolean),[2,{filePath:n,checks:t}]}}))}))},Ie=function(e,t){return Oe(void 0,void 0,void 0,(function(){return Te(this,(function(n){switch(n.label){case 0:return[4,Ce(e,(function(e){return Pe(e,t)}))]
case 1:return[2,n.sent().filter(Boolean)]}}))}))},je=function(e){var t=e.checks,n=e.filePath
return"* "+(t.some((function(e){return!e.pass}))?"FAIL":"PASS")+": "+n+"\n"},Le=function(e){var t=e.link,n=e.href,r=e.description
return"  - "+(e.pass?"PASS":"FAIL")+": "+t+(n?" = "+n:"")+" ("+r+")"},He=function(e,t){var n=e.filePath,r=e.checks,i=t.fileFormat,s=void 0===i?je:i,o=t.linkFormat,a=void 0===o?Le:o,u=t.linkSeparator,c=void 0===u?"\n":u
return r.length>0?s({filePath:n,checks:r})+r.sort((function(e,t){return e.pass===t.pass?0:e.pass?1:-1})).map(a).join(c):null}
const $e=function(e,t){void 0===t&&(t={})
var n=t.entryFormat,r=void 0===n?He:n,i=t.entrySeparator,s=void 0===i?"\n\n":i
return e.map((function(e,n){return r(e,t,n)})).filter(Boolean).join(s)}
var Ne=function(){return(Ne=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)},qe=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},Be=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},De=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},Me=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o]
return r},Ge=function(e){if(e){if(!Array.isArray(e))return e
if(e.length>0)return e}return"**"}
function Ue(e){return qe(this,void 0,void 0,(function(){return Be(this,(function(t){return[2,new Promise((function(t,n){return p().readFile(e,(function(e,r){return e?n(e):t(String(r).split(/\n+/))}))}))]}))}))}function Fe(e){return qe(this,void 0,void 0,(function(){var t,n,r,i,s
return Be(this,(function(o){switch(o.label){case 0:return e?Array.isArray(e)?(r=(n=(s=[]).concat).apply,i=[s],[4,Ce(e,Ue)]):[3,2]:[2,[]]
case 1:return t=r.apply(n,i.concat([o.sent()])),[3,3]
case 2:t=Ue(e),o.label=3
case 3:return[2,t]}}))}))}function Ke(e){return qe(this,void 0,void 0,(function(){var t=this
return Be(this,(function(n){return[2,Ce(e,(function(e){var n=e[0],r=e[1]
return qe(t,void 0,void 0,(function(){var e
return Be(this,(function(t){switch(t.label){case 0:return[4,Fe(n)]
case 1:return e=t.sent(),[2,(r?e.concat(r):e).filter(Boolean)]}}))}))}))]}))}))}var ze=function(e){return qe(void 0,void 0,void 0,(function(){var t,r,i,s,o,a,u,c,l,p,h,d,f,_,y,v,g,m
return Be(this,(function(b){switch(b.label){case 0:return t=n().apply(void 0,Me([{}],e.filter(Boolean))),r=t.fileIncludePatterns,i=t.fileExcludePatterns,s=t.fileIncludePatternFiles,o=t.fileExcludePatternFiles,a=t.linkIncludePatterns,u=t.linkExcludePatterns,c=t.linkIncludePatternFiles,l=t.linkExcludePatternFiles,p=t.reportUnusedPatterns,h=t.dryRun,d=void 0===h?"only"===p:h,f=De(t,["fileIncludePatterns","fileExcludePatterns","fileIncludePatternFiles","fileExcludePatternFiles","linkIncludePatterns","linkExcludePatterns","linkIncludePatternFiles","linkExcludePatternFiles","reportUnusedPatterns","dryRun"]),[4,Ke([[c,a],[l,u],[s,r],[o,i]])]
case 1:return _=b.sent(),y=_[0],v=_[1],g=_[2],m=_[3],[2,Ne(Ne({},f),{reportUnusedPatterns:p,dryRun:d,linkIncludePatterns:Ge(y),linkExcludePatterns:v,fileIncludePatterns:Ge(g),fileExcludePatterns:m})]}}))}))},We=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},Qe=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},Ve=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function Xe(e){return We(this,void 0,void 0,(function(){var t
return Qe(this,(function(n){switch(n.label){case 0:return[4,a.getInput(e)]
case 1:t=n.sent()
try{return[2,JSON.parse(t)]}catch(e){if(e instanceof SyntaxError)return[2,t]
throw e}return[2]}}))}))}function Ye(){return We(this,void 0,void 0,(function(){var e,t,n,r,s,o=this
return Qe(this,(function(a){switch(a.label){case 0:return[4,Ce(["configFile","rootURL","dryRun","reportUnusedPatterns","linkIncludePatternFiles","linkIncludePatterns","linkExcludePatternFiles","linkExcludePatterns","fileIncludePatternFiles","fileIncludePatterns","fileExcludePatternFiles","fileExcludePatterns"],(function(e){return We(o,void 0,void 0,(function(){var t
return Qe(this,(function(n){switch(n.label){case 0:return t=[e],[4,Xe(e)]
case 1:return[2,t.concat([n.sent()])]}}))}))}))]
case 1:return e=a.sent().reduce((function(e,t){var n=t[0],r=t[1]
return e[n]=r,e}),{}),t=e.configFile,n=Ve(e,["configFile"]),r=ze,s=[n],[4,(u=t,qe(void 0,void 0,void 0,(function(){return Be(this,(function(e){return u?[2,JSON.parse(String(p().readFileSync(i().join(process.cwd(),u))))]:[2,{}]}))})))]
case 2:return[2,r.apply(void 0,[s.concat([a.sent()])])]}var u}))}))}var Ze=function(e,t){return e&&e.length>0?e.join(t):void 0},Je=function(e){var t=e.success,n=e.conclusion,r=void 0===n?t?"success":"failure":n,i=e.summarySegments,s=e.descriptionSegments,o=e.summary,u=void 0===o?Ze(i,", "):o,c=e.description,l=void 0===c?Ze(s,"\n\n"):c,p=e.exit,h=void 0===p?t?0:2:p
a.setOutput("conclusion",r)
var d=l?{summary:u}:{summary:u,description:l}
a.setOutput("output",JSON.stringify(d)),process.exit(h)}
!function(){We(this,void 0,void 0,(function(){var t,n,r,i,s,o,a,u,c,l,p
return Qe(this,(function(h){switch(h.label){case 0:return t=new Promise((function(t,n){(0,e.exec)("git fetch origin master",(function(e){return e?n(e):t()}))})),[4,Ye()]
case 1:return n=h.sent(),r=[],i=[],s=n.reportUnusedPatterns,o=n.linkExcludePatterns,[4,t]
case 2:return h.sent(),[4,y(n)]
case 3:return a=h.sent(),[4,Ie(a,n)]
case 4:return 0===(u=h.sent()).length?[2,Je({summary:"There were no files to check links in.",success:!0})]:s&&o&&((c=o.filter((function(e){return!we.has(e)}))).length>1&&(l=c.map((function(e){return"  - "+e})).join("\n\n"),r.push("Some link patterns were unused"),i.push("# Unused match patterns\n\n"+l)),"only"===s)?[2,Je({summarySegments:r,descriptionSegments:i,success:!1})]:(p=u.some((function(e){return e.checks.some((function(e){return!e.pass}))})),r.push(p?"Some new links failed the check.":"All new links passed the check!"),i.push("# Link check report\n\n"+$e(u,{fileFormat:function(e){var t=e.checks,n=e.filePath
return"* "+(t.some((function(e){return!e.pass}))?":x:":":heavy_check_mark:")+": "+n+"\n"},linkFormat:function(e){var t=e.link,n=e.href,r=e.description
return"  - "+(e.pass?":heavy_check_mark:":":x:")+" "+t+(n&&n!==t?" = "+n:"")+" ("+r+")"}})),[2,Je({summarySegments:r,descriptionSegments:i,success:!p})])}}))}))}()})()})()
