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
function c(e){s.issue("error",e instanceof Error?e.toString():e)}function l(e){s.issue("group",e)}function h(){s.issue("endgroup")}!function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"}(u=t.ExitCode||(t.ExitCode={})),t.exportVariable=function(e,t){const n=s.toCommandValue(t)
process.env[e]=n,s.issueCommand("set-env",{name:e},n)},t.setSecret=function(e){s.issueCommand("add-mask",{},e)},t.addPath=function(e){s.issueCommand("add-path",{},e),process.env.PATH=`${e}${a.delimiter}${process.env.PATH}`},t.getInput=function(e,t){const n=process.env["INPUT_"+e.replace(/ /g,"_").toUpperCase()]||""
if(t&&t.required&&!n)throw new Error("Input required and not supplied: "+e)
return n.trim()},t.setOutput=function(e,t){s.issueCommand("set-output",{name:e},t)},t.setCommandEcho=function(e){s.issue("echo",e?"on":"off")},t.setFailed=function(e){process.exitCode=u.Failure,c(e)},t.isDebug=function(){return"1"===process.env.RUNNER_DEBUG},t.debug=function(e){s.issueCommand("debug",{},e)},t.error=c,t.warning=function(e){s.issue("warning",e instanceof Error?e.toString():e)},t.info=function(e){process.stdout.write(e+o.EOL)},t.startGroup=l,t.endGroup=h,t.group=function(e,t){return r(this,void 0,void 0,(function*(){let n
l(e)
try{n=yield t()}finally{h()}return n}))},t.saveState=function(e,t){s.issueCommand("save-state",{name:e},t)},t.getState=function(e){return process.env["STATE_"+e]||""}},4816:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(5747)
t.FILE_SYSTEM_ADAPTER={lstat:r.lstat,stat:r.stat,lstatSync:r.lstatSync,statSync:r.statSync,readdir:r.readdir,readdirSync:r.readdirSync},t.createFileSystemAdapter=function(e){return void 0===e?t.FILE_SYSTEM_ADAPTER:Object.assign(Object.assign({},t.FILE_SYSTEM_ADAPTER),e)}},1510:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const n=process.versions.node.split("."),r=parseInt(n[0],10),i=parseInt(n[1],10),s=r>10,o=10===r&&i>=10
t.IS_SUPPORT_READDIR_WITH_FILE_TYPES=s||o},1537:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(7971),i=n(8430),s=n(3478)
function o(e={}){return e instanceof s.default?e:new s.default(e)}t.Settings=s.default,t.scandir=function(e,t,n){if("function"==typeof t)return r.read(e,o(),t)
r.read(e,o(t),n)},t.scandirSync=function(e,t){const n=o(t)
return i.read(e,n)}},7971:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(4675),i=n(1918),s=n(1510),o=n(1402)
function a(e,t,n){t.fs.readdir(e,{withFileTypes:!0},(r,s)=>{if(null!==r)return c(n,r)
const a=s.map(n=>({dirent:n,name:n.name,path:`${e}${t.pathSegmentSeparator}${n.name}`}))
if(!t.followSymbolicLinks)return l(n,a)
const u=a.map(e=>function(e,t){return n=>{if(!e.dirent.isSymbolicLink())return n(null,e)
t.fs.stat(e.path,(r,i)=>null!==r?t.throwErrorOnBrokenSymbolicLink?n(r):n(null,e):(e.dirent=o.fs.createDirentFromStats(e.name,i),n(null,e)))}}(e,t))
i(u,(e,t)=>{if(null!==e)return c(n,e)
l(n,t)})})}function u(e,t,n){t.fs.readdir(e,(s,a)=>{if(null!==s)return c(n,s)
const u=a.map(n=>`${e}${t.pathSegmentSeparator}${n}`),h=u.map(e=>n=>r.stat(e,t.fsStatSettings,n))
i(h,(e,r)=>{if(null!==e)return c(n,e)
const i=[]
a.forEach((e,n)=>{const s=r[n],a={name:e,path:u[n],dirent:o.fs.createDirentFromStats(e,s)}
t.stats&&(a.stats=s),i.push(a)}),l(n,i)})})}function c(e,t){e(t)}function l(e,t){e(null,t)}t.read=function(e,t,n){return!t.stats&&s.IS_SUPPORT_READDIR_WITH_FILE_TYPES?a(e,t,n):u(e,t,n)},t.readdirWithFileTypes=a,t.readdir=u},8430:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(4675),i=n(1510),s=n(1402)
function o(e,t){return t.fs.readdirSync(e,{withFileTypes:!0}).map(n=>{const r={dirent:n,name:n.name,path:`${e}${t.pathSegmentSeparator}${n.name}`}
if(r.dirent.isSymbolicLink()&&t.followSymbolicLinks)try{const e=t.fs.statSync(r.path)
r.dirent=s.fs.createDirentFromStats(r.name,e)}catch(e){if(t.throwErrorOnBrokenSymbolicLink)throw e}return r})}function a(e,t){return t.fs.readdirSync(e).map(n=>{const i=`${e}${t.pathSegmentSeparator}${n}`,o=r.statSync(i,t.fsStatSettings),a={name:n,path:i,dirent:s.fs.createDirentFromStats(n,o)}
return t.stats&&(a.stats=o),a})}t.read=function(e,t){return!t.stats&&i.IS_SUPPORT_READDIR_WITH_FILE_TYPES?o(e,t):a(e,t)},t.readdirWithFileTypes=o,t.readdir=a},3478:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(5622),i=n(4675),s=n(4816)
t.default=class{constructor(e={}){this._options=e,this.followSymbolicLinks=this._getValue(this._options.followSymbolicLinks,!1),this.fs=s.createFileSystemAdapter(this._options.fs),this.pathSegmentSeparator=this._getValue(this._options.pathSegmentSeparator,r.sep),this.stats=this._getValue(this._options.stats,!1),this.throwErrorOnBrokenSymbolicLink=this._getValue(this._options.throwErrorOnBrokenSymbolicLink,!0),this.fsStatSettings=new i.Settings({followSymbolicLink:this.followSymbolicLinks,fs:this.fs,throwErrorOnBrokenSymbolicLink:this.throwErrorOnBrokenSymbolicLink})}_getValue(e,t){return void 0===e?t:e}}},2828:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
class n{constructor(e,t){this.name=e,this.isBlockDevice=t.isBlockDevice.bind(t),this.isCharacterDevice=t.isCharacterDevice.bind(t),this.isDirectory=t.isDirectory.bind(t),this.isFIFO=t.isFIFO.bind(t),this.isFile=t.isFile.bind(t),this.isSocket=t.isSocket.bind(t),this.isSymbolicLink=t.isSymbolicLink.bind(t)}}t.createDirentFromStats=function(e,t){return new n(e,t)}},1402:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(2828)
t.fs=r},2209:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(5747)
t.FILE_SYSTEM_ADAPTER={lstat:r.lstat,stat:r.stat,lstatSync:r.lstatSync,statSync:r.statSync},t.createFileSystemAdapter=function(e){return void 0===e?t.FILE_SYSTEM_ADAPTER:Object.assign(Object.assign({},t.FILE_SYSTEM_ADAPTER),e)}},4675:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(6399),i=n(1666),s=n(5143)
function o(e={}){return e instanceof s.default?e:new s.default(e)}t.Settings=s.default,t.stat=function(e,t,n){if("function"==typeof t)return r.read(e,o(),t)
r.read(e,o(t),n)},t.statSync=function(e,t){const n=o(t)
return i.read(e,n)}},6399:(e,t)=>{"use strict"
function n(e,t){e(t)}function r(e,t){e(null,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.read=function(e,t,i){t.fs.lstat(e,(s,o)=>null!==s?n(i,s):o.isSymbolicLink()&&t.followSymbolicLink?void t.fs.stat(e,(e,s)=>{if(null!==e)return t.throwErrorOnBrokenSymbolicLink?n(i,e):r(i,o)
t.markSymbolicLink&&(s.isSymbolicLink=()=>!0),r(i,s)}):r(i,o))}},1666:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.read=function(e,t){const n=t.fs.lstatSync(e)
if(!n.isSymbolicLink()||!t.followSymbolicLink)return n
try{const n=t.fs.statSync(e)
return t.markSymbolicLink&&(n.isSymbolicLink=()=>!0),n}catch(e){if(!t.throwErrorOnBrokenSymbolicLink)return n
throw e}}},5143:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(2209)
t.default=class{constructor(e={}){this._options=e,this.followSymbolicLink=this._getValue(this._options.followSymbolicLink,!0),this.fs=r.createFileSystemAdapter(this._options.fs),this.markSymbolicLink=this._getValue(this._options.markSymbolicLink,!1),this.throwErrorOnBrokenSymbolicLink=this._getValue(this._options.throwErrorOnBrokenSymbolicLink,!0)}_getValue(e,t){return void 0===e?t:e}}},8987:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(2640),i=n(5939),s=n(5189),o=n(9794)
function a(e={}){return e instanceof o.default?e:new o.default(e)}t.Settings=o.default,t.walk=function(e,t,n){if("function"==typeof t)return new r.default(e,a()).read(t)
new r.default(e,a(t)).read(n)},t.walkSync=function(e,t){const n=a(t)
return new s.default(e,n).read()},t.walkStream=function(e,t){const n=a(t)
return new i.default(e,n).read()}},2640:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(4900)
t.default=class{constructor(e,t){this._root=e,this._settings=t,this._reader=new r.default(this._root,this._settings),this._storage=new Set}read(e){this._reader.onError(t=>{!function(e,t){e(t)}(e,t)}),this._reader.onEntry(e=>{this._storage.add(e)}),this._reader.onEnd(()=>{!function(e,t){e(null,t)}(e,[...this._storage])}),this._reader.read()}}},5939:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(2413),i=n(4900)
t.default=class{constructor(e,t){this._root=e,this._settings=t,this._reader=new i.default(this._root,this._settings),this._stream=new r.Readable({objectMode:!0,read:()=>{},destroy:this._reader.destroy.bind(this._reader)})}read(){return this._reader.onError(e=>{this._stream.emit("error",e)}),this._reader.onEntry(e=>{this._stream.push(e)}),this._reader.onEnd(()=>{this._stream.push(null)}),this._reader.read(),this._stream}}},5189:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(1696)
t.default=class{constructor(e,t){this._root=e,this._settings=t,this._reader=new r.default(this._root,this._settings)}read(){return this._reader.read()}}},4900:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(8614),i=n(1537),s=n(1672),o=n(1602),a=n(3022)
class u extends a.default{constructor(e,t){super(e,t),this._settings=t,this._scandir=i.scandir,this._emitter=new r.EventEmitter,this._queue=s(this._worker.bind(this),this._settings.concurrency),this._isFatalError=!1,this._isDestroyed=!1,this._queue.drain=()=>{this._isFatalError||this._emitter.emit("end")}}read(){return this._isFatalError=!1,this._isDestroyed=!1,setImmediate(()=>{this._pushToQueue(this._root,this._settings.basePath)}),this._emitter}destroy(){if(this._isDestroyed)throw new Error("The reader is already destroyed")
this._isDestroyed=!0,this._queue.killAndDrain()}onEntry(e){this._emitter.on("entry",e)}onError(e){this._emitter.once("error",e)}onEnd(e){this._emitter.once("end",e)}_pushToQueue(e,t){const n={directory:e,base:t}
this._queue.push(n,e=>{null!==e&&this._handleError(e)})}_worker(e,t){this._scandir(e.directory,this._settings.fsScandirSettings,(n,r)=>{if(null!==n)return t(n,void 0)
for(const t of r)this._handleEntry(t,e.base)
t(null,void 0)})}_handleError(e){o.isFatalError(this._settings,e)&&(this._isFatalError=!0,this._isDestroyed=!0,this._emitter.emit("error",e))}_handleEntry(e,t){if(this._isDestroyed||this._isFatalError)return
const n=e.path
void 0!==t&&(e.path=o.joinPathSegments(t,e.name,this._settings.pathSegmentSeparator)),o.isAppliedFilter(this._settings.entryFilter,e)&&this._emitEntry(e),e.dirent.isDirectory()&&o.isAppliedFilter(this._settings.deepFilter,e)&&this._pushToQueue(n,e.path)}_emitEntry(e){this._emitter.emit("entry",e)}}t.default=u},1602:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.isFatalError=function(e,t){return null===e.errorFilter||!e.errorFilter(t)},t.isAppliedFilter=function(e,t){return null===e||e(t)},t.replacePathSegmentSeparator=function(e,t){return e.split(/[\\/]/).join(t)},t.joinPathSegments=function(e,t,n){return""===e?t:e+n+t}},3022:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(1602)
t.default=class{constructor(e,t){this._root=e,this._settings=t,this._root=r.replacePathSegmentSeparator(e,t.pathSegmentSeparator)}}},1696:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(1537),i=n(1602),s=n(3022)
class o extends s.default{constructor(){super(...arguments),this._scandir=r.scandirSync,this._storage=new Set,this._queue=new Set}read(){return this._pushToQueue(this._root,this._settings.basePath),this._handleQueue(),[...this._storage]}_pushToQueue(e,t){this._queue.add({directory:e,base:t})}_handleQueue(){for(const e of this._queue.values())this._handleDirectory(e.directory,e.base)}_handleDirectory(e,t){try{const n=this._scandir(e,this._settings.fsScandirSettings)
for(const e of n)this._handleEntry(e,t)}catch(e){this._handleError(e)}}_handleError(e){if(i.isFatalError(this._settings,e))throw e}_handleEntry(e,t){const n=e.path
void 0!==t&&(e.path=i.joinPathSegments(t,e.name,this._settings.pathSegmentSeparator)),i.isAppliedFilter(this._settings.entryFilter,e)&&this._pushToStorage(e),e.dirent.isDirectory()&&i.isAppliedFilter(this._settings.deepFilter,e)&&this._pushToQueue(n,e.path)}_pushToStorage(e){this._storage.add(e)}}t.default=o},9794:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(5622),i=n(1537)
t.default=class{constructor(e={}){this._options=e,this.basePath=this._getValue(this._options.basePath,void 0),this.concurrency=this._getValue(this._options.concurrency,1/0),this.deepFilter=this._getValue(this._options.deepFilter,null),this.entryFilter=this._getValue(this._options.entryFilter,null),this.errorFilter=this._getValue(this._options.errorFilter,null),this.pathSegmentSeparator=this._getValue(this._options.pathSegmentSeparator,r.sep),this.fsScandirSettings=new i.Settings({followSymbolicLinks:this._options.followSymbolicLinks,fs:this._options.fs,pathSegmentSeparator:this._options.pathSegmentSeparator,stats:this._options.stats,throwErrorOnBrokenSymbolicLink:this._options.throwErrorOnBrokenSymbolicLink})}_getValue(e,t){return void 0===e?t:e}}},8166:(e,t,n)=>{"use strict"
var r,i,s
s=n(8034),i=n(4788),r=function(){class e{constructor(e={}){this.options=e,s.load(this.options,this.defaults,this),this.Events=new i(this),this._arr=[],this._resetPromise(),this._lastFlush=Date.now()}_resetPromise(){return this._promise=new this.Promise((e,t)=>this._resolve=e)}_flush(){return clearTimeout(this._timeout),this._lastFlush=Date.now(),this._resolve(),this.Events.trigger("batch",this._arr),this._arr=[],this._resetPromise()}add(e){var t
return this._arr.push(e),t=this._promise,this._arr.length===this.maxSize?this._flush():null!=this.maxTime&&1===this._arr.length&&(this._timeout=setTimeout(()=>this._flush(),this.maxTime)),t}}return e.prototype.defaults={maxTime:null,maxSize:null,Promise},e}.call(void 0),e.exports=r},7097:(e,t,n)=>{"use strict"
function r(e,t){return o(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0
try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||s()}function i(e){return o(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e){if(Array.isArray(e))return e}function a(e,t,n,r,i,s,o){try{var a=e[s](o),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,i)}function u(e){return function(){var t=this,n=arguments
return new Promise((function(r,i){var s=e.apply(t,n)
function o(e){a(s,r,i,o,u,"next",e)}function u(e){a(s,r,i,o,u,"throw",e)}o(void 0)}))}}var c,l,h,p,d,f,m,y,g,v=[].splice
g=n(8034),d=n(7206),h=n(9358),p=n(3565),f=n(7531),l=n(4788),m=n(9348),y=n(8254),c=function(){class e{constructor(t={},...n){var r,i
this._addToQueue=this._addToQueue.bind(this),this._validateOptions(t,n),g.load(t,this.instanceDefaults,this),this._queues=new d(10),this._scheduled={},this._states=new m(["RECEIVED","QUEUED","RUNNING","EXECUTING"].concat(this.trackDoneStatus?["DONE"]:[])),this._limiter=null,this.Events=new l(this),this._submitLock=new y("submit",this.Promise),this._registerLock=new y("register",this.Promise),i=g.load(t,this.storeDefaults,{}),this._store=function(){if("redis"===this.datastore||"ioredis"===this.datastore||null!=this.connection)return r=g.load(t,this.redisStoreDefaults,{}),new f(this,i,r)
if("local"===this.datastore)return r=g.load(t,this.localStoreDefaults,{}),new p(this,i,r)
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
return t=g.load(t,this.stopDefaults),r=e=>{var t
return t=()=>{var t
return(t=this._states.counts)[0]+t[1]+t[2]+t[3]===e},new this.Promise((e,n)=>t()?e():this.on("done",()=>{if(t())return this.removeAllListeners("done"),e()}))},n=t.dropWaitingJobs?(this._run=function(e,n){return n.doDrop({message:t.dropErrorMessage})},this._drainOne=()=>this.Promise.resolve(null),this._registerLock.schedule(()=>this._submitLock.schedule(()=>{var e,n,i
for(e in n=this._scheduled)i=n[e],"RUNNING"===this.jobStatus(i.job.options.id)&&(clearTimeout(i.timeout),clearTimeout(i.expiration),i.job.doDrop({message:t.dropErrorMessage}))
return this._dropAllQueued(t.dropErrorMessage),r(0)}))):this.schedule({priority:9,weight:0},()=>r(1)),this._receive=function(n){return n._reject(new e.prototype.BottleneckError(t.enqueueErrorMessage))},this.stop=()=>this.Promise.reject(new e.prototype.BottleneckError("stop() has already been called")),n}_addToQueue(t){var n=this
return u((function*(){var r,i,s,o,a,u,c
r=t.args,o=t.options
try{var l=yield n._store.__submit__(n.queued(),o.weight)
a=l.reachedHWM,i=l.blocked,c=l.strategy}catch(e){return s=e,n.Events.trigger("debug","Could not queue "+o.id,{args:r,options:o,error:s}),t.doDrop({error:s}),!1}return i?(t.doDrop(),!0):a&&(null!=(u=c===e.prototype.strategy.LEAK?n._queues.shiftLastFrom(o.priority):c===e.prototype.strategy.OVERFLOW_PRIORITY?n._queues.shiftLastFrom(o.priority+1):c===e.prototype.strategy.OVERFLOW?t:void 0)&&u.doDrop(),null==u||c===e.prototype.strategy.OVERFLOW)?(null==u&&t.doDrop(),a):(t.doQueue(a,i),n._queues.push(t),yield n._drainAll(),a)}))()}_receive(t){return null!=this._states.jobStatus(t.options.id)?(t._reject(new e.prototype.BottleneckError(`A job with the same id already exists (id=${t.options.id})`)),!1):(t.doReceive(),this._submitLock.schedule(this._addToQueue,t))}submit(...e){var t,n,s,o,a,u,c,l
"function"==typeof e[0]?(a=i(e),n=a[0],e=a.slice(1),u=r(v.call(e,-1),1),t=u[0],o=g.load({},this.jobDefaults)):(o=(c=i(e))[0],n=c[1],e=c.slice(2),l=r(v.call(e,-1),1),t=l[0],o=g.load(o,this.jobDefaults))
return(s=new h((...e)=>new this.Promise((function(t,r){return n(...e,(function(...e){return(null!=e[0]?r:t)(e)}))})),e,o,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise)).promise.then((function(e){return"function"==typeof t?t(...e):void 0})).catch((function(e){return Array.isArray(e)?"function"==typeof t?t(...e):void 0:"function"==typeof t?t(e):void 0})),this._receive(s)}schedule(...e){var t,n,r
if("function"==typeof e[0]){var s=i(e)
r=s[0],e=s.slice(1),n={}}else{var o=i(e)
n=o[0],r=o[1],e=o.slice(2)}return t=new h(r,e,n,this.jobDefaults,this.rejectOnDrop,this.Events,this._states,this.Promise),this._receive(t),t.promise}wrap(e){var t,n
return t=this.schedule.bind(this),(n=function(...n){return t(e.bind(this),...n)}).withOptions=function(n,...r){return t(n,e,...r)},n}updateSettings(e={}){var t=this
return u((function*(){return yield t._store.__updateSettings__(g.overwrite(e,t.storeDefaults)),g.overwrite(e,t.instanceDefaults,t),t}))()}currentReservoir(){return this._store.__currentReservoir__()}incrementReservoir(e=0){return this._store.__incrementReservoir__(e)}}return e.default=e,e.Events=l,e.version=e.prototype.version=n(5607).i,e.strategy=e.prototype.strategy={LEAK:1,OVERFLOW:2,OVERFLOW_PRIORITY:4,BLOCK:3},e.BottleneckError=e.prototype.BottleneckError=n(7692),e.Group=e.prototype.Group=n(4248),e.RedisConnection=e.prototype.RedisConnection=n(7655),e.IORedisConnection=e.prototype.IORedisConnection=n(6612),e.Batcher=e.prototype.Batcher=n(8166),e.prototype.jobDefaults={priority:5,weight:1,expiration:null,id:"<no-id>"},e.prototype.storeDefaults={maxConcurrent:null,minTime:0,highWater:null,strategy:e.prototype.strategy.LEAK,penalty:null,reservoir:null,reservoirRefreshInterval:null,reservoirRefreshAmount:null,reservoirIncreaseInterval:null,reservoirIncreaseAmount:null,reservoirIncreaseMaximum:null},e.prototype.localStoreDefaults={Promise,timeout:null,heartbeatInterval:250},e.prototype.redisStoreDefaults={Promise,timeout:null,heartbeatInterval:5e3,clientTimeout:1e4,Redis:null,clientOptions:{},clusterNodes:null,clearDatastore:!1,connection:null},e.prototype.instanceDefaults={datastore:"local",connection:null,id:"<no-id>",rejectOnDrop:!0,trackDoneStatus:!1,Promise},e.prototype.stopDefaults={enqueueErrorMessage:"This limiter has been stopped and cannot accept new jobs.",dropWaitingJobs:!0,dropErrorMessage:"This limiter has been stopped."},e}.call(void 0),e.exports=c},7692:e=>{"use strict"
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
function a(e){i(o,r,s,a,u,"next",e)}function u(e){i(o,r,s,a,u,"throw",e)}a(void 0)}))}}var o,a,u,c,l,h
h=n(8034),o=n(4788),c=n(7655),u=n(6612),l=n(7339),a=function(){class e{constructor(e={}){this.deleteKey=this.deleteKey.bind(this),this.limiterOptions=e,h.load(this.limiterOptions,this.defaults,this),this.Events=new o(this),this.instances={},this.Bottleneck=n(7097),this._startAutoCleanup(),this.sharedConnection=null!=this.connection,null==this.connection&&("redis"===this.limiterOptions.datastore?this.connection=new c(Object.assign({},this.limiterOptions,{Events:this.Events})):"ioredis"===this.limiterOptions.datastore&&(this.connection=new u(Object.assign({},this.limiterOptions,{Events:this.Events}))))}key(e=""){var t
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
try{(yield o._store.__groupCheck__(s))?i.push(t.deleteKey(n)):i.push(void 0)}catch(t){e=t,i.push(o.Events.trigger("error",e))}}return i})),this.timeout/2)).unref?e.unref():void 0}updateSettings(e={}){if(h.overwrite(e,this.defaults,this),h.overwrite(e,e,this.limiterOptions),null!=e.timeout)return this._startAutoCleanup()}disconnect(e=!0){var t
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
return s((function*(){var e,i,o,a,u,c,l,h,p,d
try{l=t.indexOf(":")
var f=[t.slice(0,l),t.slice(l+1)]
if(o=f[1],"capacity"===(d=f[0]))return yield n.instance._drainAll(o.length>0?~~o:void 0)
if("capacity-priority"===d){var m=r(o.split(":"),3)
return p=m[0],h=m[1],i=m[2],e=p.length>0?~~p:void 0,h===n.clientId?(a=yield n.instance._drainAll(e),c=null!=e?e-(a||0):"",yield n.clients.client.publish(n.instance.channel(),`capacity-priority:${c}::${i}`)):""===h?(clearTimeout(n.capacityPriorityCounters[i]),delete n.capacityPriorityCounters[i],n.instance._drainAll(e)):n.capacityPriorityCounters[i]=setTimeout(s((function*(){var t
try{return delete n.capacityPriorityCounters[i],yield n.runScript("blacklist_client",[h]),yield n.instance._drainAll(e)}catch(e){return t=e,n.instance.Events.trigger("error",t)}})),1e3)}if("message"===d)return n.instance.Events.trigger("message",o)
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
return u=l[0],i=l[1],c=l[2],{reachedHWM:n.convertBool(u),blocked:n.convertBool(i),strategy:c}}catch(e){if(0===(s=e).message.indexOf("OVERWEIGHT")){var h=r(s.message.split(":"),3)
throw h[0],t=h[1],a=h[2],new o(`Impossible to add a job having a weight of ${t} to a limiter having a maxConcurrent setting of ${a}`)}throw s}}))()}__free__(e,t){var n=this
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
return 0===u.length&&(u=i(e,t)),l.push(o(l.pop(),u)),void(e.nodes=[])}let h=s.encloseBrace(e),p=e.queue,d=e
for(;"brace"!==d.type&&"root"!==d.type&&d.parent;)d=d.parent,p=d.queue
for(let t=0;t<e.nodes.length;t++){let n=e.nodes[t]
"comma"!==n.type||"brace"!==e.type?"close"!==n.type?n.value&&"open"!==n.type?p.push(o(p.pop(),n.value)):n.nodes&&a(n,e):l.push(o(l.pop(),p,h)):(1===t&&p.push(""),p.push(""))}return p}
return s.flatten(a(e))}},4833:(e,t,n)=>{"use strict"
const r=n(6339),{MAX_LENGTH:i,CHAR_BACKSLASH:s,CHAR_BACKTICK:o,CHAR_COMMA:a,CHAR_DOT:u,CHAR_LEFT_PARENTHESES:c,CHAR_RIGHT_PARENTHESES:l,CHAR_LEFT_CURLY_BRACE:h,CHAR_RIGHT_CURLY_BRACE:p,CHAR_LEFT_SQUARE_BRACKET:d,CHAR_RIGHT_SQUARE_BRACKET:f,CHAR_DOUBLE_QUOTE:m,CHAR_SINGLE_QUOTE:y,CHAR_NO_BREAK_SPACE:g,CHAR_ZERO_WIDTH_NOBREAK_SPACE:v}=n(8552)
e.exports=(e,t={})=>{if("string"!=typeof e)throw new TypeError("Expected a string")
let n=t||{},x="number"==typeof n.maxLength?Math.min(i,n.maxLength):i
if(e.length>x)throw new SyntaxError(`Input length (${e.length}), exceeds max characters (${x})`)
let _,b={type:"root",input:e,nodes:[]},E=[b],D=b,A=b,S=0,C=e.length,w=0,k=0
const F=()=>e[w++],T=e=>{if("text"===e.type&&"dot"===A.type&&(A.type="text"),!A||"text"!==A.type||"text"!==e.type)return D.nodes.push(e),e.parent=D,e.prev=A,A=e,e
A.value+=e.value}
for(T({type:"bos"});w<C;)if(D=E[E.length-1],_=F(),_!==v&&_!==g)if(_!==s)if(_!==f)if(_!==d)if(_!==c)if(_!==l)if(_!==m&&_!==y&&_!==o)if(_!==h)if(_!==p)if(_===a&&k>0){if(D.ranges>0){D.ranges=0
let e=D.nodes.shift()
D.nodes=[e,{type:"text",value:r(D)}]}T({type:"comma",value:_}),D.commas++}else if(_===u&&k>0&&0===D.commas){let e=D.nodes
if(0===k||0===e.length){T({type:"text",value:_})
continue}if("dot"===A.type){if(D.range=[],A.value+=_,A.type="range",3!==D.nodes.length&&5!==D.nodes.length){D.invalid=!0,D.ranges=0,A.type="text"
continue}D.ranges++,D.args=[]
continue}if("range"===A.type){e.pop()
let t=e[e.length-1]
t.value+=A.value+_,A=t,D.ranges--
continue}T({type:"dot",value:_})}else T({type:"text",value:_})
else{if("brace"!==D.type){T({type:"text",value:_})
continue}let e="close"
D=E.pop(),D.close=!0,T({type:e,value:_}),k--,D=E[E.length-1]}else{k++
let e=A.value&&"$"===A.value.slice(-1)||!0===D.dollar
D=T({type:"brace",open:!0,close:!1,dollar:e,depth:k,commas:0,ranges:0,nodes:[]}),E.push(D),T({type:"open",value:_})}else{let e,n=_
for(!0!==t.keepQuotes&&(_="");w<C&&(e=F());)if(e!==s){if(e===n){!0===t.keepQuotes&&(_+=e)
break}_+=e}else _+=e+F()
T({type:"text",value:_})}else{if("paren"!==D.type){T({type:"text",value:_})
continue}D=E.pop(),T({type:"text",value:_}),D=E[E.length-1]}else D=T({type:"paren",nodes:[]}),E.push(D),T({type:"text",value:_})
else{S++
let e
for(;w<C&&(e=F());)if(_+=e,e!==d)if(e!==s){if(e===f&&(S--,0===S))break}else _+=F()
else S++
T({type:"text",value:_})}else T({type:"text",value:"\\"+_})
else T({type:"text",value:(t.keepEscaping?_:"")+F()})
do{if(D=E.pop(),"root"!==D.type){D.nodes.forEach(e=>{e.nodes||("open"===e.type&&(e.isOpen=!0),"close"===e.type&&(e.isClose=!0),e.nodes||(e.type="text"),e.invalid=!0)})
let e=E[E.length-1],t=e.nodes.indexOf(D)
e.nodes.splice(t,1,...D.nodes)}}while(E.length>0)
return T({type:"eos"}),b}},6339:(e,t,n)=>{"use strict"
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
return n(e),t}},2888:function(e){var t
t=function(){return function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={exports:{},id:r,loaded:!1}
return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(1),i=n(3),s=n(8),o=n(15)
function a(e,t,n){var o=null,a=function(e,t){n&&n(e,t),o&&o.visit(e,t)},u="function"==typeof n?a:null,c=!1
if(t){c="boolean"==typeof t.comment&&t.comment
var l="boolean"==typeof t.attachComment&&t.attachComment;(c||l)&&((o=new r.CommentHandler).attach=l,t.comment=!0,u=a)}var h,p=!1
t&&"string"==typeof t.sourceType&&(p="module"===t.sourceType),h=t&&"boolean"==typeof t.jsx&&t.jsx?new i.JSXParser(e,t,u):new s.Parser(e,t,u)
var d=p?h.parseModule():h.parseScript()
return c&&o&&(d.comments=o.comments),h.config.tokens&&(d.tokens=h.tokens),h.config.tolerant&&(d.errors=h.errorHandler.errors),d}t.parse=a,t.parseModule=function(e,t,n){var r=t||{}
return r.sourceType="module",a(e,r,n)},t.parseScript=function(e,t,n){var r=t||{}
return r.sourceType="script",a(e,r,n)},t.tokenize=function(e,t,n){var r,i=new o.Tokenizer(e,t)
r=[]
try{for(;;){var s=i.getNextToken()
if(!s)break
n&&(s=n(s)),r.push(s)}}catch(e){i.errorHandler.tolerate(e)}return i.errorHandler.tolerant&&(r.errors=i.errors()),r}
var u=n(2)
t.Syntax=u.Syntax,t.version="4.0.1"},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(2),i=function(){function e(){this.attach=!1,this.comments=[],this.stack=[],this.leading=[],this.trailing=[]}return e.prototype.insertInnerComments=function(e,t){if(e.type===r.Syntax.BlockStatement&&0===e.body.length){for(var n=[],i=this.leading.length-1;i>=0;--i){var s=this.leading[i]
t.end.offset>=s.start&&(n.unshift(s.comment),this.leading.splice(i,1),this.trailing.splice(i,1))}n.length&&(e.innerComments=n)}},e.prototype.findTrailingComments=function(e){var t=[]
if(this.trailing.length>0){for(var n=this.trailing.length-1;n>=0;--n){var r=this.trailing[n]
r.start>=e.end.offset&&t.unshift(r.comment)}return this.trailing.length=0,t}var i=this.stack[this.stack.length-1]
if(i&&i.node.trailingComments){var s=i.node.trailingComments[0]
s&&s.range[0]>=e.end.offset&&(t=i.node.trailingComments,delete i.node.trailingComments)}return t},e.prototype.findLeadingComments=function(e){for(var t,n=[];this.stack.length>0&&((s=this.stack[this.stack.length-1])&&s.start>=e.start.offset);)t=s.node,this.stack.pop()
if(t){for(var r=(t.leadingComments?t.leadingComments.length:0)-1;r>=0;--r){var i=t.leadingComments[r]
i.range[1]<=e.start.offset&&(n.unshift(i),t.leadingComments.splice(r,1))}return t.leadingComments&&0===t.leadingComments.length&&delete t.leadingComments,n}for(r=this.leading.length-1;r>=0;--r){var s;(s=this.leading[r]).start<=e.start.offset&&(n.unshift(s.comment),this.leading.splice(r,1))}return n},e.prototype.visitNode=function(e,t){if(!(e.type===r.Syntax.Program&&e.body.length>0)){this.insertInnerComments(e,t)
var n=this.findTrailingComments(t),i=this.findLeadingComments(t)
i.length>0&&(e.leadingComments=i),n.length>0&&(e.trailingComments=n),this.stack.push({node:e,start:t.start.offset})}},e.prototype.visitComment=function(e,t){var n="L"===e.type[0]?"Line":"Block",r={type:n,value:e.value}
if(e.range&&(r.range=e.range),e.loc&&(r.loc=e.loc),this.comments.push(r),this.attach){var i={comment:{type:n,value:e.value,range:[t.start.offset,t.end.offset]},start:t.start.offset}
e.loc&&(i.comment.loc=e.loc),e.type=n,this.leading.push(i),this.trailing.push(i)}},e.prototype.visit=function(e,t){"LineComment"===e.type||"BlockComment"===e.type?this.visitComment(e,t):this.attach&&this.visitNode(e,t)},e}()
t.CommentHandler=i},function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Syntax={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForOfStatement:"ForOfStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchCase:"SwitchCase",SwitchStatement:"SwitchStatement",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"}},function(e,t,n){"use strict"
var r,i=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})
Object.defineProperty(t,"__esModule",{value:!0})
var s=n(4),o=n(5),a=n(6),u=n(7),c=n(8),l=n(13),h=n(14)
function p(e){var t
switch(e.type){case a.JSXSyntax.JSXIdentifier:t=e.name
break
case a.JSXSyntax.JSXNamespacedName:var n=e
t=p(n.namespace)+":"+p(n.name)
break
case a.JSXSyntax.JSXMemberExpression:var r=e
t=p(r.object)+"."+p(r.property)}return t}l.TokenName[100]="JSXIdentifier",l.TokenName[101]="JSXText"
var d=function(e){function t(t,n,r){return e.call(this,t,n,r)||this}return i(t,e),t.prototype.parsePrimaryExpression=function(){return this.match("<")?this.parseJSXRoot():e.prototype.parsePrimaryExpression.call(this)},t.prototype.startJSX=function(){this.scanner.index=this.startMarker.index,this.scanner.lineNumber=this.startMarker.line,this.scanner.lineStart=this.startMarker.index-this.startMarker.column},t.prototype.finishJSX=function(){this.nextToken()},t.prototype.reenterJSX=function(){this.startJSX(),this.expectJSX("}"),this.config.tokens&&this.tokens.pop()},t.prototype.createJSXNode=function(){return this.collectComments(),{index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}},t.prototype.createJSXChildNode=function(){return{index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}},t.prototype.scanXHTMLEntity=function(e){for(var t="&",n=!0,r=!1,i=!1,o=!1;!this.scanner.eof()&&n&&!r;){var a=this.scanner.source[this.scanner.index]
if(a===e)break
if(r=";"===a,t+=a,++this.scanner.index,!r)switch(t.length){case 2:i="#"===a
break
case 3:i&&(n=(o="x"===a)||s.Character.isDecimalDigit(a.charCodeAt(0)),i=i&&!o)
break
default:n=(n=n&&!(i&&!s.Character.isDecimalDigit(a.charCodeAt(0))))&&!(o&&!s.Character.isHexDigit(a.charCodeAt(0)))}}if(n&&r&&t.length>2){var u=t.substr(1,t.length-2)
i&&u.length>1?t=String.fromCharCode(parseInt(u.substr(1),10)):o&&u.length>2?t=String.fromCharCode(parseInt("0"+u.substr(1),16)):i||o||!h.XHTMLEntities[u]||(t=h.XHTMLEntities[u])}return t},t.prototype.lexJSX=function(){var e=this.scanner.source.charCodeAt(this.scanner.index)
if(60===e||62===e||47===e||58===e||61===e||123===e||125===e)return{type:7,value:a=this.scanner.source[this.scanner.index++],lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:this.scanner.index-1,end:this.scanner.index}
if(34===e||39===e){for(var t=this.scanner.index,n=this.scanner.source[this.scanner.index++],r="";!this.scanner.eof()&&(u=this.scanner.source[this.scanner.index++])!==n;)r+="&"===u?this.scanXHTMLEntity(n):u
return{type:8,value:r,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:t,end:this.scanner.index}}if(46===e){var i=this.scanner.source.charCodeAt(this.scanner.index+1),o=this.scanner.source.charCodeAt(this.scanner.index+2),a=46===i&&46===o?"...":"."
return t=this.scanner.index,this.scanner.index+=a.length,{type:7,value:a,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:t,end:this.scanner.index}}if(96===e)return{type:10,value:"",lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:this.scanner.index,end:this.scanner.index}
if(s.Character.isIdentifierStart(e)&&92!==e){for(t=this.scanner.index,++this.scanner.index;!this.scanner.eof();){var u=this.scanner.source.charCodeAt(this.scanner.index)
if(s.Character.isIdentifierPart(u)&&92!==u)++this.scanner.index
else{if(45!==u)break;++this.scanner.index}}return{type:100,value:this.scanner.source.slice(t,this.scanner.index),lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:t,end:this.scanner.index}}return this.scanner.lex()},t.prototype.nextJSXToken=function(){this.collectComments(),this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart
var e=this.lexJSX()
return this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.config.tokens&&this.tokens.push(this.convertToken(e)),e},t.prototype.nextJSXText=function(){this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart
for(var e=this.scanner.index,t="";!this.scanner.eof();){var n=this.scanner.source[this.scanner.index]
if("{"===n||"<"===n)break;++this.scanner.index,t+=n,s.Character.isLineTerminator(n.charCodeAt(0))&&(++this.scanner.lineNumber,"\r"===n&&"\n"===this.scanner.source[this.scanner.index]&&++this.scanner.index,this.scanner.lineStart=this.scanner.index)}this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart
var r={type:101,value:t,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:e,end:this.scanner.index}
return t.length>0&&this.config.tokens&&this.tokens.push(this.convertToken(r)),r},t.prototype.peekJSXToken=function(){var e=this.scanner.saveState()
this.scanner.scanComments()
var t=this.lexJSX()
return this.scanner.restoreState(e),t},t.prototype.expectJSX=function(e){var t=this.nextJSXToken()
7===t.type&&t.value===e||this.throwUnexpectedToken(t)},t.prototype.matchJSX=function(e){var t=this.peekJSXToken()
return 7===t.type&&t.value===e},t.prototype.parseJSXIdentifier=function(){var e=this.createJSXNode(),t=this.nextJSXToken()
return 100!==t.type&&this.throwUnexpectedToken(t),this.finalize(e,new o.JSXIdentifier(t.value))},t.prototype.parseJSXElementName=function(){var e=this.createJSXNode(),t=this.parseJSXIdentifier()
if(this.matchJSX(":")){var n=t
this.expectJSX(":")
var r=this.parseJSXIdentifier()
t=this.finalize(e,new o.JSXNamespacedName(n,r))}else if(this.matchJSX("."))for(;this.matchJSX(".");){var i=t
this.expectJSX(".")
var s=this.parseJSXIdentifier()
t=this.finalize(e,new o.JSXMemberExpression(i,s))}return t},t.prototype.parseJSXAttributeName=function(){var e,t=this.createJSXNode(),n=this.parseJSXIdentifier()
if(this.matchJSX(":")){var r=n
this.expectJSX(":")
var i=this.parseJSXIdentifier()
e=this.finalize(t,new o.JSXNamespacedName(r,i))}else e=n
return e},t.prototype.parseJSXStringLiteralAttribute=function(){var e=this.createJSXNode(),t=this.nextJSXToken()
8!==t.type&&this.throwUnexpectedToken(t)
var n=this.getTokenRaw(t)
return this.finalize(e,new u.Literal(t.value,n))},t.prototype.parseJSXExpressionAttribute=function(){var e=this.createJSXNode()
this.expectJSX("{"),this.finishJSX(),this.match("}")&&this.tolerateError("JSX attributes must only be assigned a non-empty expression")
var t=this.parseAssignmentExpression()
return this.reenterJSX(),this.finalize(e,new o.JSXExpressionContainer(t))},t.prototype.parseJSXAttributeValue=function(){return this.matchJSX("{")?this.parseJSXExpressionAttribute():this.matchJSX("<")?this.parseJSXElement():this.parseJSXStringLiteralAttribute()},t.prototype.parseJSXNameValueAttribute=function(){var e=this.createJSXNode(),t=this.parseJSXAttributeName(),n=null
return this.matchJSX("=")&&(this.expectJSX("="),n=this.parseJSXAttributeValue()),this.finalize(e,new o.JSXAttribute(t,n))},t.prototype.parseJSXSpreadAttribute=function(){var e=this.createJSXNode()
this.expectJSX("{"),this.expectJSX("..."),this.finishJSX()
var t=this.parseAssignmentExpression()
return this.reenterJSX(),this.finalize(e,new o.JSXSpreadAttribute(t))},t.prototype.parseJSXAttributes=function(){for(var e=[];!this.matchJSX("/")&&!this.matchJSX(">");){var t=this.matchJSX("{")?this.parseJSXSpreadAttribute():this.parseJSXNameValueAttribute()
e.push(t)}return e},t.prototype.parseJSXOpeningElement=function(){var e=this.createJSXNode()
this.expectJSX("<")
var t=this.parseJSXElementName(),n=this.parseJSXAttributes(),r=this.matchJSX("/")
return r&&this.expectJSX("/"),this.expectJSX(">"),this.finalize(e,new o.JSXOpeningElement(t,r,n))},t.prototype.parseJSXBoundaryElement=function(){var e=this.createJSXNode()
if(this.expectJSX("<"),this.matchJSX("/")){this.expectJSX("/")
var t=this.parseJSXElementName()
return this.expectJSX(">"),this.finalize(e,new o.JSXClosingElement(t))}var n=this.parseJSXElementName(),r=this.parseJSXAttributes(),i=this.matchJSX("/")
return i&&this.expectJSX("/"),this.expectJSX(">"),this.finalize(e,new o.JSXOpeningElement(n,i,r))},t.prototype.parseJSXEmptyExpression=function(){var e=this.createJSXChildNode()
return this.collectComments(),this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.finalize(e,new o.JSXEmptyExpression)},t.prototype.parseJSXExpressionContainer=function(){var e,t=this.createJSXNode()
return this.expectJSX("{"),this.matchJSX("}")?(e=this.parseJSXEmptyExpression(),this.expectJSX("}")):(this.finishJSX(),e=this.parseAssignmentExpression(),this.reenterJSX()),this.finalize(t,new o.JSXExpressionContainer(e))},t.prototype.parseJSXChildren=function(){for(var e=[];!this.scanner.eof();){var t=this.createJSXChildNode(),n=this.nextJSXText()
if(n.start<n.end){var r=this.getTokenRaw(n),i=this.finalize(t,new o.JSXText(n.value,r))
e.push(i)}if("{"!==this.scanner.source[this.scanner.index])break
var s=this.parseJSXExpressionContainer()
e.push(s)}return e},t.prototype.parseComplexJSXElement=function(e){for(var t=[];!this.scanner.eof();){e.children=e.children.concat(this.parseJSXChildren())
var n=this.createJSXChildNode(),r=this.parseJSXBoundaryElement()
if(r.type===a.JSXSyntax.JSXOpeningElement){var i=r
if(i.selfClosing){var s=this.finalize(n,new o.JSXElement(i,[],null))
e.children.push(s)}else t.push(e),e={node:n,opening:i,closing:null,children:[]}}if(r.type===a.JSXSyntax.JSXClosingElement){e.closing=r
var u=p(e.opening.name)
if(u!==p(e.closing.name)&&this.tolerateError("Expected corresponding JSX closing tag for %0",u),!(t.length>0))break
s=this.finalize(e.node,new o.JSXElement(e.opening,e.children,e.closing)),(e=t[t.length-1]).children.push(s),t.pop()}}return e},t.prototype.parseJSXElement=function(){var e=this.createJSXNode(),t=this.parseJSXOpeningElement(),n=[],r=null
if(!t.selfClosing){var i=this.parseComplexJSXElement({node:e,opening:t,closing:r,children:n})
n=i.children,r=i.closing}return this.finalize(e,new o.JSXElement(t,n,r))},t.prototype.parseJSXRoot=function(){this.config.tokens&&this.tokens.pop(),this.startJSX()
var e=this.parseJSXElement()
return this.finishJSX(),e},t.prototype.isStartOfExpression=function(){return e.prototype.isStartOfExpression.call(this)||this.match("<")},t}(c.Parser)
t.JSXParser=d},function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/}
t.Character={fromCodePoint:function(e){return e<65536?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10))+String.fromCharCode(56320+(e-65536&1023))},isWhiteSpace:function(e){return 32===e||9===e||11===e||12===e||160===e||e>=5760&&[5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(e)>=0},isLineTerminator:function(e){return 10===e||13===e||8232===e||8233===e},isIdentifierStart:function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||92===e||e>=128&&n.NonAsciiIdentifierStart.test(t.Character.fromCodePoint(e))},isIdentifierPart:function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||92===e||e>=128&&n.NonAsciiIdentifierPart.test(t.Character.fromCodePoint(e))},isDecimalDigit:function(e){return e>=48&&e<=57},isHexDigit:function(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102},isOctalDigit:function(e){return e>=48&&e<=55}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(6),i=function(e){this.type=r.JSXSyntax.JSXClosingElement,this.name=e}
t.JSXClosingElement=i
var s=function(e,t,n){this.type=r.JSXSyntax.JSXElement,this.openingElement=e,this.children=t,this.closingElement=n}
t.JSXElement=s
var o=function(){this.type=r.JSXSyntax.JSXEmptyExpression}
t.JSXEmptyExpression=o
var a=function(e){this.type=r.JSXSyntax.JSXExpressionContainer,this.expression=e}
t.JSXExpressionContainer=a
var u=function(e){this.type=r.JSXSyntax.JSXIdentifier,this.name=e}
t.JSXIdentifier=u
var c=function(e,t){this.type=r.JSXSyntax.JSXMemberExpression,this.object=e,this.property=t}
t.JSXMemberExpression=c
var l=function(e,t){this.type=r.JSXSyntax.JSXAttribute,this.name=e,this.value=t}
t.JSXAttribute=l
var h=function(e,t){this.type=r.JSXSyntax.JSXNamespacedName,this.namespace=e,this.name=t}
t.JSXNamespacedName=h
var p=function(e,t,n){this.type=r.JSXSyntax.JSXOpeningElement,this.name=e,this.selfClosing=t,this.attributes=n}
t.JSXOpeningElement=p
var d=function(e){this.type=r.JSXSyntax.JSXSpreadAttribute,this.argument=e}
t.JSXSpreadAttribute=d
var f=function(e,t){this.type=r.JSXSyntax.JSXText,this.value=e,this.raw=t}
t.JSXText=f},function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.JSXSyntax={JSXAttribute:"JSXAttribute",JSXClosingElement:"JSXClosingElement",JSXElement:"JSXElement",JSXEmptyExpression:"JSXEmptyExpression",JSXExpressionContainer:"JSXExpressionContainer",JSXIdentifier:"JSXIdentifier",JSXMemberExpression:"JSXMemberExpression",JSXNamespacedName:"JSXNamespacedName",JSXOpeningElement:"JSXOpeningElement",JSXSpreadAttribute:"JSXSpreadAttribute",JSXText:"JSXText"}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(2),i=function(e){this.type=r.Syntax.ArrayExpression,this.elements=e}
t.ArrayExpression=i
var s=function(e){this.type=r.Syntax.ArrayPattern,this.elements=e}
t.ArrayPattern=s
var o=function(e,t,n){this.type=r.Syntax.ArrowFunctionExpression,this.id=null,this.params=e,this.body=t,this.generator=!1,this.expression=n,this.async=!1}
t.ArrowFunctionExpression=o
var a=function(e,t,n){this.type=r.Syntax.AssignmentExpression,this.operator=e,this.left=t,this.right=n}
t.AssignmentExpression=a
var u=function(e,t){this.type=r.Syntax.AssignmentPattern,this.left=e,this.right=t}
t.AssignmentPattern=u
var c=function(e,t,n){this.type=r.Syntax.ArrowFunctionExpression,this.id=null,this.params=e,this.body=t,this.generator=!1,this.expression=n,this.async=!0}
t.AsyncArrowFunctionExpression=c
var l=function(e,t,n){this.type=r.Syntax.FunctionDeclaration,this.id=e,this.params=t,this.body=n,this.generator=!1,this.expression=!1,this.async=!0}
t.AsyncFunctionDeclaration=l
var h=function(e,t,n){this.type=r.Syntax.FunctionExpression,this.id=e,this.params=t,this.body=n,this.generator=!1,this.expression=!1,this.async=!0}
t.AsyncFunctionExpression=h
var p=function(e){this.type=r.Syntax.AwaitExpression,this.argument=e}
t.AwaitExpression=p
var d=function(e,t,n){var i="||"===e||"&&"===e
this.type=i?r.Syntax.LogicalExpression:r.Syntax.BinaryExpression,this.operator=e,this.left=t,this.right=n}
t.BinaryExpression=d
var f=function(e){this.type=r.Syntax.BlockStatement,this.body=e}
t.BlockStatement=f
var m=function(e){this.type=r.Syntax.BreakStatement,this.label=e}
t.BreakStatement=m
var y=function(e,t){this.type=r.Syntax.CallExpression,this.callee=e,this.arguments=t}
t.CallExpression=y
var g=function(e,t){this.type=r.Syntax.CatchClause,this.param=e,this.body=t}
t.CatchClause=g
var v=function(e){this.type=r.Syntax.ClassBody,this.body=e}
t.ClassBody=v
var x=function(e,t,n){this.type=r.Syntax.ClassDeclaration,this.id=e,this.superClass=t,this.body=n}
t.ClassDeclaration=x
var _=function(e,t,n){this.type=r.Syntax.ClassExpression,this.id=e,this.superClass=t,this.body=n}
t.ClassExpression=_
var b=function(e,t){this.type=r.Syntax.MemberExpression,this.computed=!0,this.object=e,this.property=t}
t.ComputedMemberExpression=b
var E=function(e,t,n){this.type=r.Syntax.ConditionalExpression,this.test=e,this.consequent=t,this.alternate=n}
t.ConditionalExpression=E
var D=function(e){this.type=r.Syntax.ContinueStatement,this.label=e}
t.ContinueStatement=D
var A=function(){this.type=r.Syntax.DebuggerStatement}
t.DebuggerStatement=A
var S=function(e,t){this.type=r.Syntax.ExpressionStatement,this.expression=e,this.directive=t}
t.Directive=S
var C=function(e,t){this.type=r.Syntax.DoWhileStatement,this.body=e,this.test=t}
t.DoWhileStatement=C
var w=function(){this.type=r.Syntax.EmptyStatement}
t.EmptyStatement=w
var k=function(e){this.type=r.Syntax.ExportAllDeclaration,this.source=e}
t.ExportAllDeclaration=k
var F=function(e){this.type=r.Syntax.ExportDefaultDeclaration,this.declaration=e}
t.ExportDefaultDeclaration=F
var T=function(e,t,n){this.type=r.Syntax.ExportNamedDeclaration,this.declaration=e,this.specifiers=t,this.source=n}
t.ExportNamedDeclaration=T
var P=function(e,t){this.type=r.Syntax.ExportSpecifier,this.exported=t,this.local=e}
t.ExportSpecifier=P
var R=function(e){this.type=r.Syntax.ExpressionStatement,this.expression=e}
t.ExpressionStatement=R
var B=function(e,t,n){this.type=r.Syntax.ForInStatement,this.left=e,this.right=t,this.body=n,this.each=!1}
t.ForInStatement=B
var O=function(e,t,n){this.type=r.Syntax.ForOfStatement,this.left=e,this.right=t,this.body=n}
t.ForOfStatement=O
var I=function(e,t,n,i){this.type=r.Syntax.ForStatement,this.init=e,this.test=t,this.update=n,this.body=i}
t.ForStatement=I
var N=function(e,t,n,i){this.type=r.Syntax.FunctionDeclaration,this.id=e,this.params=t,this.body=n,this.generator=i,this.expression=!1,this.async=!1}
t.FunctionDeclaration=N
var L=function(e,t,n,i){this.type=r.Syntax.FunctionExpression,this.id=e,this.params=t,this.body=n,this.generator=i,this.expression=!1,this.async=!1}
t.FunctionExpression=L
var M=function(e){this.type=r.Syntax.Identifier,this.name=e}
t.Identifier=M
var j=function(e,t,n){this.type=r.Syntax.IfStatement,this.test=e,this.consequent=t,this.alternate=n}
t.IfStatement=j
var U=function(e,t){this.type=r.Syntax.ImportDeclaration,this.specifiers=e,this.source=t}
t.ImportDeclaration=U
var H=function(e){this.type=r.Syntax.ImportDefaultSpecifier,this.local=e}
t.ImportDefaultSpecifier=H
var z=function(e){this.type=r.Syntax.ImportNamespaceSpecifier,this.local=e}
t.ImportNamespaceSpecifier=z
var X=function(e,t){this.type=r.Syntax.ImportSpecifier,this.local=e,this.imported=t}
t.ImportSpecifier=X
var q=function(e,t){this.type=r.Syntax.LabeledStatement,this.label=e,this.body=t}
t.LabeledStatement=q
var $=function(e,t){this.type=r.Syntax.Literal,this.value=e,this.raw=t}
t.Literal=$
var J=function(e,t){this.type=r.Syntax.MetaProperty,this.meta=e,this.property=t}
t.MetaProperty=J
var K=function(e,t,n,i,s){this.type=r.Syntax.MethodDefinition,this.key=e,this.computed=t,this.value=n,this.kind=i,this.static=s}
t.MethodDefinition=K
var G=function(e){this.type=r.Syntax.Program,this.body=e,this.sourceType="module"}
t.Module=G
var W=function(e,t){this.type=r.Syntax.NewExpression,this.callee=e,this.arguments=t}
t.NewExpression=W
var V=function(e){this.type=r.Syntax.ObjectExpression,this.properties=e}
t.ObjectExpression=V
var Y=function(e){this.type=r.Syntax.ObjectPattern,this.properties=e}
t.ObjectPattern=Y
var Q=function(e,t,n,i,s,o){this.type=r.Syntax.Property,this.key=t,this.computed=n,this.value=i,this.kind=e,this.method=s,this.shorthand=o}
t.Property=Q
var Z=function(e,t,n,i){this.type=r.Syntax.Literal,this.value=e,this.raw=t,this.regex={pattern:n,flags:i}}
t.RegexLiteral=Z
var ee=function(e){this.type=r.Syntax.RestElement,this.argument=e}
t.RestElement=ee
var te=function(e){this.type=r.Syntax.ReturnStatement,this.argument=e}
t.ReturnStatement=te
var ne=function(e){this.type=r.Syntax.Program,this.body=e,this.sourceType="script"}
t.Script=ne
var re=function(e){this.type=r.Syntax.SequenceExpression,this.expressions=e}
t.SequenceExpression=re
var ie=function(e){this.type=r.Syntax.SpreadElement,this.argument=e}
t.SpreadElement=ie
var se=function(e,t){this.type=r.Syntax.MemberExpression,this.computed=!1,this.object=e,this.property=t}
t.StaticMemberExpression=se
var oe=function(){this.type=r.Syntax.Super}
t.Super=oe
var ae=function(e,t){this.type=r.Syntax.SwitchCase,this.test=e,this.consequent=t}
t.SwitchCase=ae
var ue=function(e,t){this.type=r.Syntax.SwitchStatement,this.discriminant=e,this.cases=t}
t.SwitchStatement=ue
var ce=function(e,t){this.type=r.Syntax.TaggedTemplateExpression,this.tag=e,this.quasi=t}
t.TaggedTemplateExpression=ce
var le=function(e,t){this.type=r.Syntax.TemplateElement,this.value=e,this.tail=t}
t.TemplateElement=le
var he=function(e,t){this.type=r.Syntax.TemplateLiteral,this.quasis=e,this.expressions=t}
t.TemplateLiteral=he
var pe=function(){this.type=r.Syntax.ThisExpression}
t.ThisExpression=pe
var de=function(e){this.type=r.Syntax.ThrowStatement,this.argument=e}
t.ThrowStatement=de
var fe=function(e,t,n){this.type=r.Syntax.TryStatement,this.block=e,this.handler=t,this.finalizer=n}
t.TryStatement=fe
var me=function(e,t){this.type=r.Syntax.UnaryExpression,this.operator=e,this.argument=t,this.prefix=!0}
t.UnaryExpression=me
var ye=function(e,t,n){this.type=r.Syntax.UpdateExpression,this.operator=e,this.argument=t,this.prefix=n}
t.UpdateExpression=ye
var ge=function(e,t){this.type=r.Syntax.VariableDeclaration,this.declarations=e,this.kind=t}
t.VariableDeclaration=ge
var ve=function(e,t){this.type=r.Syntax.VariableDeclarator,this.id=e,this.init=t}
t.VariableDeclarator=ve
var xe=function(e,t){this.type=r.Syntax.WhileStatement,this.test=e,this.body=t}
t.WhileStatement=xe
var _e=function(e,t){this.type=r.Syntax.WithStatement,this.object=e,this.body=t}
t.WithStatement=_e
var be=function(e,t){this.type=r.Syntax.YieldExpression,this.argument=e,this.delegate=t}
t.YieldExpression=be},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(9),i=n(10),s=n(11),o=n(7),a=n(12),u=n(2),c=n(13),l=function(){function e(e,t,n){void 0===t&&(t={}),this.config={range:"boolean"==typeof t.range&&t.range,loc:"boolean"==typeof t.loc&&t.loc,source:null,tokens:"boolean"==typeof t.tokens&&t.tokens,comment:"boolean"==typeof t.comment&&t.comment,tolerant:"boolean"==typeof t.tolerant&&t.tolerant},this.config.loc&&t.source&&null!==t.source&&(this.config.source=String(t.source)),this.delegate=n,this.errorHandler=new i.ErrorHandler,this.errorHandler.tolerant=this.config.tolerant,this.scanner=new a.Scanner(e,this.errorHandler),this.scanner.trackComment=this.config.comment,this.operatorPrecedence={")":0,";":0,",":0,"=":0,"]":0,"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":11,"/":11,"%":11},this.lookahead={type:2,value:"",lineNumber:this.scanner.lineNumber,lineStart:0,start:0,end:0},this.hasLineTerminator=!1,this.context={isModule:!1,await:!1,allowIn:!0,allowStrictDirective:!0,allowYield:!0,firstCoverInitializedNameError:null,isAssignmentTarget:!1,isBindingElement:!1,inFunctionBody:!1,inIteration:!1,inSwitch:!1,labelSet:{},strict:!1},this.tokens=[],this.startMarker={index:0,line:this.scanner.lineNumber,column:0},this.lastMarker={index:0,line:this.scanner.lineNumber,column:0},this.nextToken(),this.lastMarker={index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}return e.prototype.throwError=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var i=Array.prototype.slice.call(arguments,1),s=e.replace(/%(\d)/g,(function(e,t){return r.assert(t<i.length,"Message reference must be in range"),i[t]})),o=this.lastMarker.index,a=this.lastMarker.line,u=this.lastMarker.column+1
throw this.errorHandler.createError(o,a,u,s)},e.prototype.tolerateError=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var i=Array.prototype.slice.call(arguments,1),s=e.replace(/%(\d)/g,(function(e,t){return r.assert(t<i.length,"Message reference must be in range"),i[t]})),o=this.lastMarker.index,a=this.scanner.lineNumber,u=this.lastMarker.column+1
this.errorHandler.tolerateError(o,a,u,s)},e.prototype.unexpectedTokenError=function(e,t){var n,r=t||s.Messages.UnexpectedToken
if(e?(t||(r=2===e.type?s.Messages.UnexpectedEOS:3===e.type?s.Messages.UnexpectedIdentifier:6===e.type?s.Messages.UnexpectedNumber:8===e.type?s.Messages.UnexpectedString:10===e.type?s.Messages.UnexpectedTemplate:s.Messages.UnexpectedToken,4===e.type&&(this.scanner.isFutureReservedWord(e.value)?r=s.Messages.UnexpectedReserved:this.context.strict&&this.scanner.isStrictModeReservedWord(e.value)&&(r=s.Messages.StrictReservedWord))),n=e.value):n="ILLEGAL",r=r.replace("%0",n),e&&"number"==typeof e.lineNumber){var i=e.start,o=e.lineNumber,a=this.lastMarker.index-this.lastMarker.column,u=e.start-a+1
return this.errorHandler.createError(i,o,u,r)}return i=this.lastMarker.index,o=this.lastMarker.line,u=this.lastMarker.column+1,this.errorHandler.createError(i,o,u,r)},e.prototype.throwUnexpectedToken=function(e,t){throw this.unexpectedTokenError(e,t)},e.prototype.tolerateUnexpectedToken=function(e,t){this.errorHandler.tolerate(this.unexpectedTokenError(e,t))},e.prototype.collectComments=function(){if(this.config.comment){var e=this.scanner.scanComments()
if(e.length>0&&this.delegate)for(var t=0;t<e.length;++t){var n=e[t],r=void 0
r={type:n.multiLine?"BlockComment":"LineComment",value:this.scanner.source.slice(n.slice[0],n.slice[1])},this.config.range&&(r.range=n.range),this.config.loc&&(r.loc=n.loc)
var i={start:{line:n.loc.start.line,column:n.loc.start.column,offset:n.range[0]},end:{line:n.loc.end.line,column:n.loc.end.column,offset:n.range[1]}}
this.delegate(r,i)}}else this.scanner.scanComments()},e.prototype.getTokenRaw=function(e){return this.scanner.source.slice(e.start,e.end)},e.prototype.convertToken=function(e){var t={type:c.TokenName[e.type],value:this.getTokenRaw(e)}
if(this.config.range&&(t.range=[e.start,e.end]),this.config.loc&&(t.loc={start:{line:this.startMarker.line,column:this.startMarker.column},end:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}),9===e.type){var n=e.pattern,r=e.flags
t.regex={pattern:n,flags:r}}return t},e.prototype.nextToken=function(){var e=this.lookahead
this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.collectComments(),this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart)
var t=this.scanner.lex()
return this.hasLineTerminator=e.lineNumber!==t.lineNumber,t&&this.context.strict&&3===t.type&&this.scanner.isStrictModeReservedWord(t.value)&&(t.type=4),this.lookahead=t,this.config.tokens&&2!==t.type&&this.tokens.push(this.convertToken(t)),e},e.prototype.nextRegexToken=function(){this.collectComments()
var e=this.scanner.scanRegExp()
return this.config.tokens&&(this.tokens.pop(),this.tokens.push(this.convertToken(e))),this.lookahead=e,this.nextToken(),e},e.prototype.createNode=function(){return{index:this.startMarker.index,line:this.startMarker.line,column:this.startMarker.column}},e.prototype.startNode=function(e,t){void 0===t&&(t=0)
var n=e.start-e.lineStart,r=e.lineNumber
return n<0&&(n+=t,r--),{index:e.start,line:r,column:n}},e.prototype.finalize=function(e,t){if(this.config.range&&(t.range=[e.index,this.lastMarker.index]),this.config.loc&&(t.loc={start:{line:e.line,column:e.column},end:{line:this.lastMarker.line,column:this.lastMarker.column}},this.config.source&&(t.loc.source=this.config.source)),this.delegate){var n={start:{line:e.line,column:e.column,offset:e.index},end:{line:this.lastMarker.line,column:this.lastMarker.column,offset:this.lastMarker.index}}
this.delegate(t,n)}return t},e.prototype.expect=function(e){var t=this.nextToken()
7===t.type&&t.value===e||this.throwUnexpectedToken(t)},e.prototype.expectCommaSeparator=function(){if(this.config.tolerant){var e=this.lookahead
7===e.type&&","===e.value?this.nextToken():7===e.type&&";"===e.value?(this.nextToken(),this.tolerateUnexpectedToken(e)):this.tolerateUnexpectedToken(e,s.Messages.UnexpectedToken)}else this.expect(",")},e.prototype.expectKeyword=function(e){var t=this.nextToken()
4===t.type&&t.value===e||this.throwUnexpectedToken(t)},e.prototype.match=function(e){return 7===this.lookahead.type&&this.lookahead.value===e},e.prototype.matchKeyword=function(e){return 4===this.lookahead.type&&this.lookahead.value===e},e.prototype.matchContextualKeyword=function(e){return 3===this.lookahead.type&&this.lookahead.value===e},e.prototype.matchAssign=function(){if(7!==this.lookahead.type)return!1
var e=this.lookahead.value
return"="===e||"*="===e||"**="===e||"/="===e||"%="===e||"+="===e||"-="===e||"<<="===e||">>="===e||">>>="===e||"&="===e||"^="===e||"|="===e},e.prototype.isolateCoverGrammar=function(e){var t=this.context.isBindingElement,n=this.context.isAssignmentTarget,r=this.context.firstCoverInitializedNameError
this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null
var i=e.call(this)
return null!==this.context.firstCoverInitializedNameError&&this.throwUnexpectedToken(this.context.firstCoverInitializedNameError),this.context.isBindingElement=t,this.context.isAssignmentTarget=n,this.context.firstCoverInitializedNameError=r,i},e.prototype.inheritCoverGrammar=function(e){var t=this.context.isBindingElement,n=this.context.isAssignmentTarget,r=this.context.firstCoverInitializedNameError
this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null
var i=e.call(this)
return this.context.isBindingElement=this.context.isBindingElement&&t,this.context.isAssignmentTarget=this.context.isAssignmentTarget&&n,this.context.firstCoverInitializedNameError=r||this.context.firstCoverInitializedNameError,i},e.prototype.consumeSemicolon=function(){this.match(";")?this.nextToken():this.hasLineTerminator||(2===this.lookahead.type||this.match("}")||this.throwUnexpectedToken(this.lookahead),this.lastMarker.index=this.startMarker.index,this.lastMarker.line=this.startMarker.line,this.lastMarker.column=this.startMarker.column)},e.prototype.parsePrimaryExpression=function(){var e,t,n,r=this.createNode()
switch(this.lookahead.type){case 3:(this.context.isModule||this.context.await)&&"await"===this.lookahead.value&&this.tolerateUnexpectedToken(this.lookahead),e=this.matchAsyncFunction()?this.parseFunctionExpression():this.finalize(r,new o.Identifier(this.nextToken().value))
break
case 6:case 8:this.context.strict&&this.lookahead.octal&&this.tolerateUnexpectedToken(this.lookahead,s.Messages.StrictOctalLiteral),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,t=this.nextToken(),n=this.getTokenRaw(t),e=this.finalize(r,new o.Literal(t.value,n))
break
case 1:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,t=this.nextToken(),n=this.getTokenRaw(t),e=this.finalize(r,new o.Literal("true"===t.value,n))
break
case 5:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,t=this.nextToken(),n=this.getTokenRaw(t),e=this.finalize(r,new o.Literal(null,n))
break
case 10:e=this.parseTemplateLiteral()
break
case 7:switch(this.lookahead.value){case"(":this.context.isBindingElement=!1,e=this.inheritCoverGrammar(this.parseGroupExpression)
break
case"[":e=this.inheritCoverGrammar(this.parseArrayInitializer)
break
case"{":e=this.inheritCoverGrammar(this.parseObjectInitializer)
break
case"/":case"/=":this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.scanner.index=this.startMarker.index,t=this.nextRegexToken(),n=this.getTokenRaw(t),e=this.finalize(r,new o.RegexLiteral(t.regex,n,t.pattern,t.flags))
break
default:e=this.throwUnexpectedToken(this.nextToken())}break
case 4:!this.context.strict&&this.context.allowYield&&this.matchKeyword("yield")?e=this.parseIdentifierName():!this.context.strict&&this.matchKeyword("let")?e=this.finalize(r,new o.Identifier(this.nextToken().value)):(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.matchKeyword("function")?e=this.parseFunctionExpression():this.matchKeyword("this")?(this.nextToken(),e=this.finalize(r,new o.ThisExpression)):e=this.matchKeyword("class")?this.parseClassExpression():this.throwUnexpectedToken(this.nextToken()))
break
default:e=this.throwUnexpectedToken(this.nextToken())}return e},e.prototype.parseSpreadElement=function(){var e=this.createNode()
this.expect("...")
var t=this.inheritCoverGrammar(this.parseAssignmentExpression)
return this.finalize(e,new o.SpreadElement(t))},e.prototype.parseArrayInitializer=function(){var e=this.createNode(),t=[]
for(this.expect("[");!this.match("]");)if(this.match(","))this.nextToken(),t.push(null)
else if(this.match("...")){var n=this.parseSpreadElement()
this.match("]")||(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.expect(",")),t.push(n)}else t.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),this.match("]")||this.expect(",")
return this.expect("]"),this.finalize(e,new o.ArrayExpression(t))},e.prototype.parsePropertyMethod=function(e){this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1
var t=this.context.strict,n=this.context.allowStrictDirective
this.context.allowStrictDirective=e.simple
var r=this.isolateCoverGrammar(this.parseFunctionSourceElements)
return this.context.strict&&e.firstRestricted&&this.tolerateUnexpectedToken(e.firstRestricted,e.message),this.context.strict&&e.stricted&&this.tolerateUnexpectedToken(e.stricted,e.message),this.context.strict=t,this.context.allowStrictDirective=n,r},e.prototype.parsePropertyMethodFunction=function(){var e=this.createNode(),t=this.context.allowYield
this.context.allowYield=!0
var n=this.parseFormalParameters(),r=this.parsePropertyMethod(n)
return this.context.allowYield=t,this.finalize(e,new o.FunctionExpression(null,n.params,r,!1))},e.prototype.parsePropertyMethodAsyncFunction=function(){var e=this.createNode(),t=this.context.allowYield,n=this.context.await
this.context.allowYield=!1,this.context.await=!0
var r=this.parseFormalParameters(),i=this.parsePropertyMethod(r)
return this.context.allowYield=t,this.context.await=n,this.finalize(e,new o.AsyncFunctionExpression(null,r.params,i))},e.prototype.parseObjectPropertyKey=function(){var e,t=this.createNode(),n=this.nextToken()
switch(n.type){case 8:case 6:this.context.strict&&n.octal&&this.tolerateUnexpectedToken(n,s.Messages.StrictOctalLiteral)
var r=this.getTokenRaw(n)
e=this.finalize(t,new o.Literal(n.value,r))
break
case 3:case 1:case 5:case 4:e=this.finalize(t,new o.Identifier(n.value))
break
case 7:"["===n.value?(e=this.isolateCoverGrammar(this.parseAssignmentExpression),this.expect("]")):e=this.throwUnexpectedToken(n)
break
default:e=this.throwUnexpectedToken(n)}return e},e.prototype.isPropertyKey=function(e,t){return e.type===u.Syntax.Identifier&&e.name===t||e.type===u.Syntax.Literal&&e.value===t},e.prototype.parseObjectProperty=function(e){var t,n=this.createNode(),r=this.lookahead,i=null,a=null,u=!1,c=!1,l=!1,h=!1
if(3===r.type){var p=r.value
this.nextToken(),u=this.match("["),i=(h=!(this.hasLineTerminator||"async"!==p||this.match(":")||this.match("(")||this.match("*")||this.match(",")))?this.parseObjectPropertyKey():this.finalize(n,new o.Identifier(p))}else this.match("*")?this.nextToken():(u=this.match("["),i=this.parseObjectPropertyKey())
var d=this.qualifiedPropertyName(this.lookahead)
if(3===r.type&&!h&&"get"===r.value&&d)t="get",u=this.match("["),i=this.parseObjectPropertyKey(),this.context.allowYield=!1,a=this.parseGetterMethod()
else if(3===r.type&&!h&&"set"===r.value&&d)t="set",u=this.match("["),i=this.parseObjectPropertyKey(),a=this.parseSetterMethod()
else if(7===r.type&&"*"===r.value&&d)t="init",u=this.match("["),i=this.parseObjectPropertyKey(),a=this.parseGeneratorMethod(),c=!0
else if(i||this.throwUnexpectedToken(this.lookahead),t="init",this.match(":")&&!h)!u&&this.isPropertyKey(i,"__proto__")&&(e.value&&this.tolerateError(s.Messages.DuplicateProtoProperty),e.value=!0),this.nextToken(),a=this.inheritCoverGrammar(this.parseAssignmentExpression)
else if(this.match("("))a=h?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),c=!0
else if(3===r.type)if(p=this.finalize(n,new o.Identifier(r.value)),this.match("=")){this.context.firstCoverInitializedNameError=this.lookahead,this.nextToken(),l=!0
var f=this.isolateCoverGrammar(this.parseAssignmentExpression)
a=this.finalize(n,new o.AssignmentPattern(p,f))}else l=!0,a=p
else this.throwUnexpectedToken(this.nextToken())
return this.finalize(n,new o.Property(t,i,u,a,c,l))},e.prototype.parseObjectInitializer=function(){var e=this.createNode()
this.expect("{")
for(var t=[],n={value:!1};!this.match("}");)t.push(this.parseObjectProperty(n)),this.match("}")||this.expectCommaSeparator()
return this.expect("}"),this.finalize(e,new o.ObjectExpression(t))},e.prototype.parseTemplateHead=function(){r.assert(this.lookahead.head,"Template literal must start with a template head")
var e=this.createNode(),t=this.nextToken(),n=t.value,i=t.cooked
return this.finalize(e,new o.TemplateElement({raw:n,cooked:i},t.tail))},e.prototype.parseTemplateElement=function(){10!==this.lookahead.type&&this.throwUnexpectedToken()
var e=this.createNode(),t=this.nextToken(),n=t.value,r=t.cooked
return this.finalize(e,new o.TemplateElement({raw:n,cooked:r},t.tail))},e.prototype.parseTemplateLiteral=function(){var e=this.createNode(),t=[],n=[],r=this.parseTemplateHead()
for(n.push(r);!r.tail;)t.push(this.parseExpression()),r=this.parseTemplateElement(),n.push(r)
return this.finalize(e,new o.TemplateLiteral(n,t))},e.prototype.reinterpretExpressionAsPattern=function(e){switch(e.type){case u.Syntax.Identifier:case u.Syntax.MemberExpression:case u.Syntax.RestElement:case u.Syntax.AssignmentPattern:break
case u.Syntax.SpreadElement:e.type=u.Syntax.RestElement,this.reinterpretExpressionAsPattern(e.argument)
break
case u.Syntax.ArrayExpression:e.type=u.Syntax.ArrayPattern
for(var t=0;t<e.elements.length;t++)null!==e.elements[t]&&this.reinterpretExpressionAsPattern(e.elements[t])
break
case u.Syntax.ObjectExpression:for(e.type=u.Syntax.ObjectPattern,t=0;t<e.properties.length;t++)this.reinterpretExpressionAsPattern(e.properties[t].value)
break
case u.Syntax.AssignmentExpression:e.type=u.Syntax.AssignmentPattern,delete e.operator,this.reinterpretExpressionAsPattern(e.left)}},e.prototype.parseGroupExpression=function(){var e
if(this.expect("("),this.match(")"))this.nextToken(),this.match("=>")||this.expect("=>"),e={type:"ArrowParameterPlaceHolder",params:[],async:!1}
else{var t=this.lookahead,n=[]
if(this.match("..."))e=this.parseRestElement(n),this.expect(")"),this.match("=>")||this.expect("=>"),e={type:"ArrowParameterPlaceHolder",params:[e],async:!1}
else{var r=!1
if(this.context.isBindingElement=!0,e=this.inheritCoverGrammar(this.parseAssignmentExpression),this.match(",")){var i=[]
for(this.context.isAssignmentTarget=!1,i.push(e);2!==this.lookahead.type&&this.match(",");){if(this.nextToken(),this.match(")")){this.nextToken()
for(var s=0;s<i.length;s++)this.reinterpretExpressionAsPattern(i[s])
r=!0,e={type:"ArrowParameterPlaceHolder",params:i,async:!1}}else if(this.match("...")){for(this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),i.push(this.parseRestElement(n)),this.expect(")"),this.match("=>")||this.expect("=>"),this.context.isBindingElement=!1,s=0;s<i.length;s++)this.reinterpretExpressionAsPattern(i[s])
r=!0,e={type:"ArrowParameterPlaceHolder",params:i,async:!1}}else i.push(this.inheritCoverGrammar(this.parseAssignmentExpression))
if(r)break}r||(e=this.finalize(this.startNode(t),new o.SequenceExpression(i)))}if(!r){if(this.expect(")"),this.match("=>")&&(e.type===u.Syntax.Identifier&&"yield"===e.name&&(r=!0,e={type:"ArrowParameterPlaceHolder",params:[e],async:!1}),!r)){if(this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),e.type===u.Syntax.SequenceExpression)for(s=0;s<e.expressions.length;s++)this.reinterpretExpressionAsPattern(e.expressions[s])
else this.reinterpretExpressionAsPattern(e)
e={type:"ArrowParameterPlaceHolder",params:e.type===u.Syntax.SequenceExpression?e.expressions:[e],async:!1}}this.context.isBindingElement=!1}}}return e},e.prototype.parseArguments=function(){this.expect("(")
var e=[]
if(!this.match(")"))for(;;){var t=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAssignmentExpression)
if(e.push(t),this.match(")"))break
if(this.expectCommaSeparator(),this.match(")"))break}return this.expect(")"),e},e.prototype.isIdentifierName=function(e){return 3===e.type||4===e.type||1===e.type||5===e.type},e.prototype.parseIdentifierName=function(){var e=this.createNode(),t=this.nextToken()
return this.isIdentifierName(t)||this.throwUnexpectedToken(t),this.finalize(e,new o.Identifier(t.value))},e.prototype.parseNewExpression=function(){var e,t=this.createNode(),n=this.parseIdentifierName()
if(r.assert("new"===n.name,"New expression must start with `new`"),this.match("."))if(this.nextToken(),3===this.lookahead.type&&this.context.inFunctionBody&&"target"===this.lookahead.value){var i=this.parseIdentifierName()
e=new o.MetaProperty(n,i)}else this.throwUnexpectedToken(this.lookahead)
else{var s=this.isolateCoverGrammar(this.parseLeftHandSideExpression),a=this.match("(")?this.parseArguments():[]
e=new o.NewExpression(s,a),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}return this.finalize(t,e)},e.prototype.parseAsyncArgument=function(){var e=this.parseAssignmentExpression()
return this.context.firstCoverInitializedNameError=null,e},e.prototype.parseAsyncArguments=function(){this.expect("(")
var e=[]
if(!this.match(")"))for(;;){var t=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAsyncArgument)
if(e.push(t),this.match(")"))break
if(this.expectCommaSeparator(),this.match(")"))break}return this.expect(")"),e},e.prototype.parseLeftHandSideExpressionAllowCall=function(){var e,t=this.lookahead,n=this.matchContextualKeyword("async"),r=this.context.allowIn
for(this.context.allowIn=!0,this.matchKeyword("super")&&this.context.inFunctionBody?(e=this.createNode(),this.nextToken(),e=this.finalize(e,new o.Super),this.match("(")||this.match(".")||this.match("[")||this.throwUnexpectedToken(this.lookahead)):e=this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match(".")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect(".")
var i=this.parseIdentifierName()
e=this.finalize(this.startNode(t),new o.StaticMemberExpression(e,i))}else if(this.match("(")){var s=n&&t.lineNumber===this.lookahead.lineNumber
this.context.isBindingElement=!1,this.context.isAssignmentTarget=!1
var a=s?this.parseAsyncArguments():this.parseArguments()
if(e=this.finalize(this.startNode(t),new o.CallExpression(e,a)),s&&this.match("=>")){for(var u=0;u<a.length;++u)this.reinterpretExpressionAsPattern(a[u])
e={type:"ArrowParameterPlaceHolder",params:a,async:!0}}}else if(this.match("["))this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("["),i=this.isolateCoverGrammar(this.parseExpression),this.expect("]"),e=this.finalize(this.startNode(t),new o.ComputedMemberExpression(e,i))
else{if(10!==this.lookahead.type||!this.lookahead.head)break
var c=this.parseTemplateLiteral()
e=this.finalize(this.startNode(t),new o.TaggedTemplateExpression(e,c))}return this.context.allowIn=r,e},e.prototype.parseSuper=function(){var e=this.createNode()
return this.expectKeyword("super"),this.match("[")||this.match(".")||this.throwUnexpectedToken(this.lookahead),this.finalize(e,new o.Super)},e.prototype.parseLeftHandSideExpression=function(){r.assert(this.context.allowIn,"callee of new expression always allow in keyword.")
for(var e=this.startNode(this.lookahead),t=this.matchKeyword("super")&&this.context.inFunctionBody?this.parseSuper():this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match("[")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("[")
var n=this.isolateCoverGrammar(this.parseExpression)
this.expect("]"),t=this.finalize(e,new o.ComputedMemberExpression(t,n))}else if(this.match("."))this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("."),n=this.parseIdentifierName(),t=this.finalize(e,new o.StaticMemberExpression(t,n))
else{if(10!==this.lookahead.type||!this.lookahead.head)break
var i=this.parseTemplateLiteral()
t=this.finalize(e,new o.TaggedTemplateExpression(t,i))}return t},e.prototype.parseUpdateExpression=function(){var e,t=this.lookahead
if(this.match("++")||this.match("--")){var n=this.startNode(t),r=this.nextToken()
e=this.inheritCoverGrammar(this.parseUnaryExpression),this.context.strict&&e.type===u.Syntax.Identifier&&this.scanner.isRestrictedWord(e.name)&&this.tolerateError(s.Messages.StrictLHSPrefix),this.context.isAssignmentTarget||this.tolerateError(s.Messages.InvalidLHSInAssignment)
var i=!0
e=this.finalize(n,new o.UpdateExpression(r.value,e,i)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}else if(e=this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall),!this.hasLineTerminator&&7===this.lookahead.type&&(this.match("++")||this.match("--"))){this.context.strict&&e.type===u.Syntax.Identifier&&this.scanner.isRestrictedWord(e.name)&&this.tolerateError(s.Messages.StrictLHSPostfix),this.context.isAssignmentTarget||this.tolerateError(s.Messages.InvalidLHSInAssignment),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1
var a=this.nextToken().value
i=!1,e=this.finalize(this.startNode(t),new o.UpdateExpression(a,e,i))}return e},e.prototype.parseAwaitExpression=function(){var e=this.createNode()
this.nextToken()
var t=this.parseUnaryExpression()
return this.finalize(e,new o.AwaitExpression(t))},e.prototype.parseUnaryExpression=function(){var e
if(this.match("+")||this.match("-")||this.match("~")||this.match("!")||this.matchKeyword("delete")||this.matchKeyword("void")||this.matchKeyword("typeof")){var t=this.startNode(this.lookahead),n=this.nextToken()
e=this.inheritCoverGrammar(this.parseUnaryExpression),e=this.finalize(t,new o.UnaryExpression(n.value,e)),this.context.strict&&"delete"===e.operator&&e.argument.type===u.Syntax.Identifier&&this.tolerateError(s.Messages.StrictDelete),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}else e=this.context.await&&this.matchContextualKeyword("await")?this.parseAwaitExpression():this.parseUpdateExpression()
return e},e.prototype.parseExponentiationExpression=function(){var e=this.lookahead,t=this.inheritCoverGrammar(this.parseUnaryExpression)
if(t.type!==u.Syntax.UnaryExpression&&this.match("**")){this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1
var n=t,r=this.isolateCoverGrammar(this.parseExponentiationExpression)
t=this.finalize(this.startNode(e),new o.BinaryExpression("**",n,r))}return t},e.prototype.binaryPrecedence=function(e){var t=e.value
return 7===e.type?this.operatorPrecedence[t]||0:4===e.type&&("instanceof"===t||this.context.allowIn&&"in"===t)?7:0},e.prototype.parseBinaryExpression=function(){var e=this.lookahead,t=this.inheritCoverGrammar(this.parseExponentiationExpression),n=this.lookahead,r=this.binaryPrecedence(n)
if(r>0){this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1
for(var i=[e,this.lookahead],s=t,a=this.isolateCoverGrammar(this.parseExponentiationExpression),u=[s,n.value,a],c=[r];!((r=this.binaryPrecedence(this.lookahead))<=0);){for(;u.length>2&&r<=c[c.length-1];){a=u.pop()
var l=u.pop()
c.pop(),s=u.pop(),i.pop()
var h=this.startNode(i[i.length-1])
u.push(this.finalize(h,new o.BinaryExpression(l,s,a)))}u.push(this.nextToken().value),c.push(r),i.push(this.lookahead),u.push(this.isolateCoverGrammar(this.parseExponentiationExpression))}var p=u.length-1
t=u[p]
for(var d=i.pop();p>1;){var f=i.pop(),m=d&&d.lineStart
h=this.startNode(f,m),l=u[p-1],t=this.finalize(h,new o.BinaryExpression(l,u[p-2],t)),p-=2,d=f}}return t},e.prototype.parseConditionalExpression=function(){var e=this.lookahead,t=this.inheritCoverGrammar(this.parseBinaryExpression)
if(this.match("?")){this.nextToken()
var n=this.context.allowIn
this.context.allowIn=!0
var r=this.isolateCoverGrammar(this.parseAssignmentExpression)
this.context.allowIn=n,this.expect(":")
var i=this.isolateCoverGrammar(this.parseAssignmentExpression)
t=this.finalize(this.startNode(e),new o.ConditionalExpression(t,r,i)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}return t},e.prototype.checkPatternParam=function(e,t){switch(t.type){case u.Syntax.Identifier:this.validateParam(e,t,t.name)
break
case u.Syntax.RestElement:this.checkPatternParam(e,t.argument)
break
case u.Syntax.AssignmentPattern:this.checkPatternParam(e,t.left)
break
case u.Syntax.ArrayPattern:for(var n=0;n<t.elements.length;n++)null!==t.elements[n]&&this.checkPatternParam(e,t.elements[n])
break
case u.Syntax.ObjectPattern:for(n=0;n<t.properties.length;n++)this.checkPatternParam(e,t.properties[n].value)}e.simple=e.simple&&t instanceof o.Identifier},e.prototype.reinterpretAsCoverFormalsList=function(e){var t,n=[e],r=!1
switch(e.type){case u.Syntax.Identifier:break
case"ArrowParameterPlaceHolder":n=e.params,r=e.async
break
default:return null}t={simple:!0,paramSet:{}}
for(var i=0;i<n.length;++i)(o=n[i]).type===u.Syntax.AssignmentPattern?o.right.type===u.Syntax.YieldExpression&&(o.right.argument&&this.throwUnexpectedToken(this.lookahead),o.right.type=u.Syntax.Identifier,o.right.name="yield",delete o.right.argument,delete o.right.delegate):r&&o.type===u.Syntax.Identifier&&"await"===o.name&&this.throwUnexpectedToken(this.lookahead),this.checkPatternParam(t,o),n[i]=o
if(this.context.strict||!this.context.allowYield)for(i=0;i<n.length;++i){var o;(o=n[i]).type===u.Syntax.YieldExpression&&this.throwUnexpectedToken(this.lookahead)}if(t.message===s.Messages.StrictParamDupe){var a=this.context.strict?t.stricted:t.firstRestricted
this.throwUnexpectedToken(a,t.message)}return{simple:t.simple,params:n,stricted:t.stricted,firstRestricted:t.firstRestricted,message:t.message}},e.prototype.parseAssignmentExpression=function(){var e
if(!this.context.allowYield&&this.matchKeyword("yield"))e=this.parseYieldExpression()
else{var t=this.lookahead,n=t
if(e=this.parseConditionalExpression(),3===n.type&&n.lineNumber===this.lookahead.lineNumber&&"async"===n.value&&(3===this.lookahead.type||this.matchKeyword("yield"))){var r=this.parsePrimaryExpression()
this.reinterpretExpressionAsPattern(r),e={type:"ArrowParameterPlaceHolder",params:[r],async:!0}}if("ArrowParameterPlaceHolder"===e.type||this.match("=>")){this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1
var i=e.async,a=this.reinterpretAsCoverFormalsList(e)
if(a){this.hasLineTerminator&&this.tolerateUnexpectedToken(this.lookahead),this.context.firstCoverInitializedNameError=null
var c=this.context.strict,l=this.context.allowStrictDirective
this.context.allowStrictDirective=a.simple
var h=this.context.allowYield,p=this.context.await
this.context.allowYield=!0,this.context.await=i
var d=this.startNode(t)
this.expect("=>")
var f=void 0
if(this.match("{")){var m=this.context.allowIn
this.context.allowIn=!0,f=this.parseFunctionSourceElements(),this.context.allowIn=m}else f=this.isolateCoverGrammar(this.parseAssignmentExpression)
var y=f.type!==u.Syntax.BlockStatement
this.context.strict&&a.firstRestricted&&this.throwUnexpectedToken(a.firstRestricted,a.message),this.context.strict&&a.stricted&&this.tolerateUnexpectedToken(a.stricted,a.message),e=i?this.finalize(d,new o.AsyncArrowFunctionExpression(a.params,f,y)):this.finalize(d,new o.ArrowFunctionExpression(a.params,f,y)),this.context.strict=c,this.context.allowStrictDirective=l,this.context.allowYield=h,this.context.await=p}}else if(this.matchAssign()){if(this.context.isAssignmentTarget||this.tolerateError(s.Messages.InvalidLHSInAssignment),this.context.strict&&e.type===u.Syntax.Identifier){var g=e
this.scanner.isRestrictedWord(g.name)&&this.tolerateUnexpectedToken(n,s.Messages.StrictLHSAssignment),this.scanner.isStrictModeReservedWord(g.name)&&this.tolerateUnexpectedToken(n,s.Messages.StrictReservedWord)}this.match("=")?this.reinterpretExpressionAsPattern(e):(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1)
var v=(n=this.nextToken()).value,x=this.isolateCoverGrammar(this.parseAssignmentExpression)
e=this.finalize(this.startNode(t),new o.AssignmentExpression(v,e,x)),this.context.firstCoverInitializedNameError=null}}return e},e.prototype.parseExpression=function(){var e=this.lookahead,t=this.isolateCoverGrammar(this.parseAssignmentExpression)
if(this.match(",")){var n=[]
for(n.push(t);2!==this.lookahead.type&&this.match(",");)this.nextToken(),n.push(this.isolateCoverGrammar(this.parseAssignmentExpression))
t=this.finalize(this.startNode(e),new o.SequenceExpression(n))}return t},e.prototype.parseStatementListItem=function(){var e
if(this.context.isAssignmentTarget=!0,this.context.isBindingElement=!0,4===this.lookahead.type)switch(this.lookahead.value){case"export":this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,s.Messages.IllegalExportDeclaration),e=this.parseExportDeclaration()
break
case"import":this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,s.Messages.IllegalImportDeclaration),e=this.parseImportDeclaration()
break
case"const":e=this.parseLexicalDeclaration({inFor:!1})
break
case"function":e=this.parseFunctionDeclaration()
break
case"class":e=this.parseClassDeclaration()
break
case"let":e=this.isLexicalDeclaration()?this.parseLexicalDeclaration({inFor:!1}):this.parseStatement()
break
default:e=this.parseStatement()}else e=this.parseStatement()
return e},e.prototype.parseBlock=function(){var e=this.createNode()
this.expect("{")
for(var t=[];!this.match("}");)t.push(this.parseStatementListItem())
return this.expect("}"),this.finalize(e,new o.BlockStatement(t))},e.prototype.parseLexicalBinding=function(e,t){var n=this.createNode(),r=this.parsePattern([],e)
this.context.strict&&r.type===u.Syntax.Identifier&&this.scanner.isRestrictedWord(r.name)&&this.tolerateError(s.Messages.StrictVarName)
var i=null
return"const"===e?this.matchKeyword("in")||this.matchContextualKeyword("of")||(this.match("=")?(this.nextToken(),i=this.isolateCoverGrammar(this.parseAssignmentExpression)):this.throwError(s.Messages.DeclarationMissingInitializer,"const")):(!t.inFor&&r.type!==u.Syntax.Identifier||this.match("="))&&(this.expect("="),i=this.isolateCoverGrammar(this.parseAssignmentExpression)),this.finalize(n,new o.VariableDeclarator(r,i))},e.prototype.parseBindingList=function(e,t){for(var n=[this.parseLexicalBinding(e,t)];this.match(",");)this.nextToken(),n.push(this.parseLexicalBinding(e,t))
return n},e.prototype.isLexicalDeclaration=function(){var e=this.scanner.saveState()
this.scanner.scanComments()
var t=this.scanner.lex()
return this.scanner.restoreState(e),3===t.type||7===t.type&&"["===t.value||7===t.type&&"{"===t.value||4===t.type&&"let"===t.value||4===t.type&&"yield"===t.value},e.prototype.parseLexicalDeclaration=function(e){var t=this.createNode(),n=this.nextToken().value
r.assert("let"===n||"const"===n,"Lexical declaration must be either let or const")
var i=this.parseBindingList(n,e)
return this.consumeSemicolon(),this.finalize(t,new o.VariableDeclaration(i,n))},e.prototype.parseBindingRestElement=function(e,t){var n=this.createNode()
this.expect("...")
var r=this.parsePattern(e,t)
return this.finalize(n,new o.RestElement(r))},e.prototype.parseArrayPattern=function(e,t){var n=this.createNode()
this.expect("[")
for(var r=[];!this.match("]");)if(this.match(","))this.nextToken(),r.push(null)
else{if(this.match("...")){r.push(this.parseBindingRestElement(e,t))
break}r.push(this.parsePatternWithDefault(e,t)),this.match("]")||this.expect(",")}return this.expect("]"),this.finalize(n,new o.ArrayPattern(r))},e.prototype.parsePropertyPattern=function(e,t){var n,r,i=this.createNode(),s=!1,a=!1
if(3===this.lookahead.type){var u=this.lookahead
n=this.parseVariableIdentifier()
var c=this.finalize(i,new o.Identifier(u.value))
if(this.match("=")){e.push(u),a=!0,this.nextToken()
var l=this.parseAssignmentExpression()
r=this.finalize(this.startNode(u),new o.AssignmentPattern(c,l))}else this.match(":")?(this.expect(":"),r=this.parsePatternWithDefault(e,t)):(e.push(u),a=!0,r=c)}else s=this.match("["),n=this.parseObjectPropertyKey(),this.expect(":"),r=this.parsePatternWithDefault(e,t)
return this.finalize(i,new o.Property("init",n,s,r,!1,a))},e.prototype.parseObjectPattern=function(e,t){var n=this.createNode(),r=[]
for(this.expect("{");!this.match("}");)r.push(this.parsePropertyPattern(e,t)),this.match("}")||this.expect(",")
return this.expect("}"),this.finalize(n,new o.ObjectPattern(r))},e.prototype.parsePattern=function(e,t){var n
return this.match("[")?n=this.parseArrayPattern(e,t):this.match("{")?n=this.parseObjectPattern(e,t):(!this.matchKeyword("let")||"const"!==t&&"let"!==t||this.tolerateUnexpectedToken(this.lookahead,s.Messages.LetInLexicalBinding),e.push(this.lookahead),n=this.parseVariableIdentifier(t)),n},e.prototype.parsePatternWithDefault=function(e,t){var n=this.lookahead,r=this.parsePattern(e,t)
if(this.match("=")){this.nextToken()
var i=this.context.allowYield
this.context.allowYield=!0
var s=this.isolateCoverGrammar(this.parseAssignmentExpression)
this.context.allowYield=i,r=this.finalize(this.startNode(n),new o.AssignmentPattern(r,s))}return r},e.prototype.parseVariableIdentifier=function(e){var t=this.createNode(),n=this.nextToken()
return 4===n.type&&"yield"===n.value?this.context.strict?this.tolerateUnexpectedToken(n,s.Messages.StrictReservedWord):this.context.allowYield||this.throwUnexpectedToken(n):3!==n.type?this.context.strict&&4===n.type&&this.scanner.isStrictModeReservedWord(n.value)?this.tolerateUnexpectedToken(n,s.Messages.StrictReservedWord):(this.context.strict||"let"!==n.value||"var"!==e)&&this.throwUnexpectedToken(n):(this.context.isModule||this.context.await)&&3===n.type&&"await"===n.value&&this.tolerateUnexpectedToken(n),this.finalize(t,new o.Identifier(n.value))},e.prototype.parseVariableDeclaration=function(e){var t=this.createNode(),n=this.parsePattern([],"var")
this.context.strict&&n.type===u.Syntax.Identifier&&this.scanner.isRestrictedWord(n.name)&&this.tolerateError(s.Messages.StrictVarName)
var r=null
return this.match("=")?(this.nextToken(),r=this.isolateCoverGrammar(this.parseAssignmentExpression)):n.type===u.Syntax.Identifier||e.inFor||this.expect("="),this.finalize(t,new o.VariableDeclarator(n,r))},e.prototype.parseVariableDeclarationList=function(e){var t={inFor:e.inFor},n=[]
for(n.push(this.parseVariableDeclaration(t));this.match(",");)this.nextToken(),n.push(this.parseVariableDeclaration(t))
return n},e.prototype.parseVariableStatement=function(){var e=this.createNode()
this.expectKeyword("var")
var t=this.parseVariableDeclarationList({inFor:!1})
return this.consumeSemicolon(),this.finalize(e,new o.VariableDeclaration(t,"var"))},e.prototype.parseEmptyStatement=function(){var e=this.createNode()
return this.expect(";"),this.finalize(e,new o.EmptyStatement)},e.prototype.parseExpressionStatement=function(){var e=this.createNode(),t=this.parseExpression()
return this.consumeSemicolon(),this.finalize(e,new o.ExpressionStatement(t))},e.prototype.parseIfClause=function(){return this.context.strict&&this.matchKeyword("function")&&this.tolerateError(s.Messages.StrictFunction),this.parseStatement()},e.prototype.parseIfStatement=function(){var e,t=this.createNode(),n=null
this.expectKeyword("if"),this.expect("(")
var r=this.parseExpression()
return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),e=this.finalize(this.createNode(),new o.EmptyStatement)):(this.expect(")"),e=this.parseIfClause(),this.matchKeyword("else")&&(this.nextToken(),n=this.parseIfClause())),this.finalize(t,new o.IfStatement(r,e,n))},e.prototype.parseDoWhileStatement=function(){var e=this.createNode()
this.expectKeyword("do")
var t=this.context.inIteration
this.context.inIteration=!0
var n=this.parseStatement()
this.context.inIteration=t,this.expectKeyword("while"),this.expect("(")
var r=this.parseExpression()
return!this.match(")")&&this.config.tolerant?this.tolerateUnexpectedToken(this.nextToken()):(this.expect(")"),this.match(";")&&this.nextToken()),this.finalize(e,new o.DoWhileStatement(n,r))},e.prototype.parseWhileStatement=function(){var e,t=this.createNode()
this.expectKeyword("while"),this.expect("(")
var n=this.parseExpression()
if(!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),e=this.finalize(this.createNode(),new o.EmptyStatement)
else{this.expect(")")
var r=this.context.inIteration
this.context.inIteration=!0,e=this.parseStatement(),this.context.inIteration=r}return this.finalize(t,new o.WhileStatement(n,e))},e.prototype.parseForStatement=function(){var e,t,n,r=null,i=null,a=null,c=!0,l=this.createNode()
if(this.expectKeyword("for"),this.expect("("),this.match(";"))this.nextToken()
else if(this.matchKeyword("var")){r=this.createNode(),this.nextToken()
var h=this.context.allowIn
this.context.allowIn=!1
var p=this.parseVariableDeclarationList({inFor:!0})
if(this.context.allowIn=h,1===p.length&&this.matchKeyword("in")){var d=p[0]
d.init&&(d.id.type===u.Syntax.ArrayPattern||d.id.type===u.Syntax.ObjectPattern||this.context.strict)&&this.tolerateError(s.Messages.ForInOfLoopInitializer,"for-in"),r=this.finalize(r,new o.VariableDeclaration(p,"var")),this.nextToken(),e=r,t=this.parseExpression(),r=null}else 1===p.length&&null===p[0].init&&this.matchContextualKeyword("of")?(r=this.finalize(r,new o.VariableDeclaration(p,"var")),this.nextToken(),e=r,t=this.parseAssignmentExpression(),r=null,c=!1):(r=this.finalize(r,new o.VariableDeclaration(p,"var")),this.expect(";"))}else if(this.matchKeyword("const")||this.matchKeyword("let")){r=this.createNode()
var f=this.nextToken().value
this.context.strict||"in"!==this.lookahead.value?(h=this.context.allowIn,this.context.allowIn=!1,p=this.parseBindingList(f,{inFor:!0}),this.context.allowIn=h,1===p.length&&null===p[0].init&&this.matchKeyword("in")?(r=this.finalize(r,new o.VariableDeclaration(p,f)),this.nextToken(),e=r,t=this.parseExpression(),r=null):1===p.length&&null===p[0].init&&this.matchContextualKeyword("of")?(r=this.finalize(r,new o.VariableDeclaration(p,f)),this.nextToken(),e=r,t=this.parseAssignmentExpression(),r=null,c=!1):(this.consumeSemicolon(),r=this.finalize(r,new o.VariableDeclaration(p,f)))):(r=this.finalize(r,new o.Identifier(f)),this.nextToken(),e=r,t=this.parseExpression(),r=null)}else{var m=this.lookahead
if(h=this.context.allowIn,this.context.allowIn=!1,r=this.inheritCoverGrammar(this.parseAssignmentExpression),this.context.allowIn=h,this.matchKeyword("in"))this.context.isAssignmentTarget&&r.type!==u.Syntax.AssignmentExpression||this.tolerateError(s.Messages.InvalidLHSInForIn),this.nextToken(),this.reinterpretExpressionAsPattern(r),e=r,t=this.parseExpression(),r=null
else if(this.matchContextualKeyword("of"))this.context.isAssignmentTarget&&r.type!==u.Syntax.AssignmentExpression||this.tolerateError(s.Messages.InvalidLHSInForLoop),this.nextToken(),this.reinterpretExpressionAsPattern(r),e=r,t=this.parseAssignmentExpression(),r=null,c=!1
else{if(this.match(",")){for(var y=[r];this.match(",");)this.nextToken(),y.push(this.isolateCoverGrammar(this.parseAssignmentExpression))
r=this.finalize(this.startNode(m),new o.SequenceExpression(y))}this.expect(";")}}if(void 0===e&&(this.match(";")||(i=this.parseExpression()),this.expect(";"),this.match(")")||(a=this.parseExpression())),!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),n=this.finalize(this.createNode(),new o.EmptyStatement)
else{this.expect(")")
var g=this.context.inIteration
this.context.inIteration=!0,n=this.isolateCoverGrammar(this.parseStatement),this.context.inIteration=g}return void 0===e?this.finalize(l,new o.ForStatement(r,i,a,n)):c?this.finalize(l,new o.ForInStatement(e,t,n)):this.finalize(l,new o.ForOfStatement(e,t,n))},e.prototype.parseContinueStatement=function(){var e=this.createNode()
this.expectKeyword("continue")
var t=null
if(3===this.lookahead.type&&!this.hasLineTerminator){var n=this.parseVariableIdentifier()
t=n
var r="$"+n.name
Object.prototype.hasOwnProperty.call(this.context.labelSet,r)||this.throwError(s.Messages.UnknownLabel,n.name)}return this.consumeSemicolon(),null!==t||this.context.inIteration||this.throwError(s.Messages.IllegalContinue),this.finalize(e,new o.ContinueStatement(t))},e.prototype.parseBreakStatement=function(){var e=this.createNode()
this.expectKeyword("break")
var t=null
if(3===this.lookahead.type&&!this.hasLineTerminator){var n=this.parseVariableIdentifier(),r="$"+n.name
Object.prototype.hasOwnProperty.call(this.context.labelSet,r)||this.throwError(s.Messages.UnknownLabel,n.name),t=n}return this.consumeSemicolon(),null!==t||this.context.inIteration||this.context.inSwitch||this.throwError(s.Messages.IllegalBreak),this.finalize(e,new o.BreakStatement(t))},e.prototype.parseReturnStatement=function(){this.context.inFunctionBody||this.tolerateError(s.Messages.IllegalReturn)
var e=this.createNode()
this.expectKeyword("return")
var t=(this.match(";")||this.match("}")||this.hasLineTerminator||2===this.lookahead.type)&&8!==this.lookahead.type&&10!==this.lookahead.type?null:this.parseExpression()
return this.consumeSemicolon(),this.finalize(e,new o.ReturnStatement(t))},e.prototype.parseWithStatement=function(){this.context.strict&&this.tolerateError(s.Messages.StrictModeWith)
var e,t=this.createNode()
this.expectKeyword("with"),this.expect("(")
var n=this.parseExpression()
return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),e=this.finalize(this.createNode(),new o.EmptyStatement)):(this.expect(")"),e=this.parseStatement()),this.finalize(t,new o.WithStatement(n,e))},e.prototype.parseSwitchCase=function(){var e,t=this.createNode()
this.matchKeyword("default")?(this.nextToken(),e=null):(this.expectKeyword("case"),e=this.parseExpression()),this.expect(":")
for(var n=[];!(this.match("}")||this.matchKeyword("default")||this.matchKeyword("case"));)n.push(this.parseStatementListItem())
return this.finalize(t,new o.SwitchCase(e,n))},e.prototype.parseSwitchStatement=function(){var e=this.createNode()
this.expectKeyword("switch"),this.expect("(")
var t=this.parseExpression()
this.expect(")")
var n=this.context.inSwitch
this.context.inSwitch=!0
var r=[],i=!1
for(this.expect("{");!this.match("}");){var a=this.parseSwitchCase()
null===a.test&&(i&&this.throwError(s.Messages.MultipleDefaultsInSwitch),i=!0),r.push(a)}return this.expect("}"),this.context.inSwitch=n,this.finalize(e,new o.SwitchStatement(t,r))},e.prototype.parseLabelledStatement=function(){var e,t=this.createNode(),n=this.parseExpression()
if(n.type===u.Syntax.Identifier&&this.match(":")){this.nextToken()
var r=n,i="$"+r.name
Object.prototype.hasOwnProperty.call(this.context.labelSet,i)&&this.throwError(s.Messages.Redeclaration,"Label",r.name),this.context.labelSet[i]=!0
var a=void 0
if(this.matchKeyword("class"))this.tolerateUnexpectedToken(this.lookahead),a=this.parseClassDeclaration()
else if(this.matchKeyword("function")){var c=this.lookahead,l=this.parseFunctionDeclaration()
this.context.strict?this.tolerateUnexpectedToken(c,s.Messages.StrictFunction):l.generator&&this.tolerateUnexpectedToken(c,s.Messages.GeneratorInLegacyContext),a=l}else a=this.parseStatement()
delete this.context.labelSet[i],e=new o.LabeledStatement(r,a)}else this.consumeSemicolon(),e=new o.ExpressionStatement(n)
return this.finalize(t,e)},e.prototype.parseThrowStatement=function(){var e=this.createNode()
this.expectKeyword("throw"),this.hasLineTerminator&&this.throwError(s.Messages.NewlineAfterThrow)
var t=this.parseExpression()
return this.consumeSemicolon(),this.finalize(e,new o.ThrowStatement(t))},e.prototype.parseCatchClause=function(){var e=this.createNode()
this.expectKeyword("catch"),this.expect("("),this.match(")")&&this.throwUnexpectedToken(this.lookahead)
for(var t=[],n=this.parsePattern(t),r={},i=0;i<t.length;i++){var a="$"+t[i].value
Object.prototype.hasOwnProperty.call(r,a)&&this.tolerateError(s.Messages.DuplicateBinding,t[i].value),r[a]=!0}this.context.strict&&n.type===u.Syntax.Identifier&&this.scanner.isRestrictedWord(n.name)&&this.tolerateError(s.Messages.StrictCatchVariable),this.expect(")")
var c=this.parseBlock()
return this.finalize(e,new o.CatchClause(n,c))},e.prototype.parseFinallyClause=function(){return this.expectKeyword("finally"),this.parseBlock()},e.prototype.parseTryStatement=function(){var e=this.createNode()
this.expectKeyword("try")
var t=this.parseBlock(),n=this.matchKeyword("catch")?this.parseCatchClause():null,r=this.matchKeyword("finally")?this.parseFinallyClause():null
return n||r||this.throwError(s.Messages.NoCatchOrFinally),this.finalize(e,new o.TryStatement(t,n,r))},e.prototype.parseDebuggerStatement=function(){var e=this.createNode()
return this.expectKeyword("debugger"),this.consumeSemicolon(),this.finalize(e,new o.DebuggerStatement)},e.prototype.parseStatement=function(){var e
switch(this.lookahead.type){case 1:case 5:case 6:case 8:case 10:case 9:e=this.parseExpressionStatement()
break
case 7:var t=this.lookahead.value
e="{"===t?this.parseBlock():"("===t?this.parseExpressionStatement():";"===t?this.parseEmptyStatement():this.parseExpressionStatement()
break
case 3:e=this.matchAsyncFunction()?this.parseFunctionDeclaration():this.parseLabelledStatement()
break
case 4:switch(this.lookahead.value){case"break":e=this.parseBreakStatement()
break
case"continue":e=this.parseContinueStatement()
break
case"debugger":e=this.parseDebuggerStatement()
break
case"do":e=this.parseDoWhileStatement()
break
case"for":e=this.parseForStatement()
break
case"function":e=this.parseFunctionDeclaration()
break
case"if":e=this.parseIfStatement()
break
case"return":e=this.parseReturnStatement()
break
case"switch":e=this.parseSwitchStatement()
break
case"throw":e=this.parseThrowStatement()
break
case"try":e=this.parseTryStatement()
break
case"var":e=this.parseVariableStatement()
break
case"while":e=this.parseWhileStatement()
break
case"with":e=this.parseWithStatement()
break
default:e=this.parseExpressionStatement()}break
default:e=this.throwUnexpectedToken(this.lookahead)}return e},e.prototype.parseFunctionSourceElements=function(){var e=this.createNode()
this.expect("{")
var t=this.parseDirectivePrologues(),n=this.context.labelSet,r=this.context.inIteration,i=this.context.inSwitch,s=this.context.inFunctionBody
for(this.context.labelSet={},this.context.inIteration=!1,this.context.inSwitch=!1,this.context.inFunctionBody=!0;2!==this.lookahead.type&&!this.match("}");)t.push(this.parseStatementListItem())
return this.expect("}"),this.context.labelSet=n,this.context.inIteration=r,this.context.inSwitch=i,this.context.inFunctionBody=s,this.finalize(e,new o.BlockStatement(t))},e.prototype.validateParam=function(e,t,n){var r="$"+n
this.context.strict?(this.scanner.isRestrictedWord(n)&&(e.stricted=t,e.message=s.Messages.StrictParamName),Object.prototype.hasOwnProperty.call(e.paramSet,r)&&(e.stricted=t,e.message=s.Messages.StrictParamDupe)):e.firstRestricted||(this.scanner.isRestrictedWord(n)?(e.firstRestricted=t,e.message=s.Messages.StrictParamName):this.scanner.isStrictModeReservedWord(n)?(e.firstRestricted=t,e.message=s.Messages.StrictReservedWord):Object.prototype.hasOwnProperty.call(e.paramSet,r)&&(e.stricted=t,e.message=s.Messages.StrictParamDupe)),"function"==typeof Object.defineProperty?Object.defineProperty(e.paramSet,r,{value:!0,enumerable:!0,writable:!0,configurable:!0}):e.paramSet[r]=!0},e.prototype.parseRestElement=function(e){var t=this.createNode()
this.expect("...")
var n=this.parsePattern(e)
return this.match("=")&&this.throwError(s.Messages.DefaultRestParameter),this.match(")")||this.throwError(s.Messages.ParameterAfterRestParameter),this.finalize(t,new o.RestElement(n))},e.prototype.parseFormalParameter=function(e){for(var t=[],n=this.match("...")?this.parseRestElement(t):this.parsePatternWithDefault(t),r=0;r<t.length;r++)this.validateParam(e,t[r],t[r].value)
e.simple=e.simple&&n instanceof o.Identifier,e.params.push(n)},e.prototype.parseFormalParameters=function(e){var t
if(t={simple:!0,params:[],firstRestricted:e},this.expect("("),!this.match(")"))for(t.paramSet={};2!==this.lookahead.type&&(this.parseFormalParameter(t),!this.match(")"))&&(this.expect(","),!this.match(")")););return this.expect(")"),{simple:t.simple,params:t.params,stricted:t.stricted,firstRestricted:t.firstRestricted,message:t.message}},e.prototype.matchAsyncFunction=function(){var e=this.matchContextualKeyword("async")
if(e){var t=this.scanner.saveState()
this.scanner.scanComments()
var n=this.scanner.lex()
this.scanner.restoreState(t),e=t.lineNumber===n.lineNumber&&4===n.type&&"function"===n.value}return e},e.prototype.parseFunctionDeclaration=function(e){var t=this.createNode(),n=this.matchContextualKeyword("async")
n&&this.nextToken(),this.expectKeyword("function")
var r,i=!n&&this.match("*")
i&&this.nextToken()
var a=null,u=null
if(!e||!this.match("(")){var c=this.lookahead
a=this.parseVariableIdentifier(),this.context.strict?this.scanner.isRestrictedWord(c.value)&&this.tolerateUnexpectedToken(c,s.Messages.StrictFunctionName):this.scanner.isRestrictedWord(c.value)?(u=c,r=s.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(c.value)&&(u=c,r=s.Messages.StrictReservedWord)}var l=this.context.await,h=this.context.allowYield
this.context.await=n,this.context.allowYield=!i
var p=this.parseFormalParameters(u),d=p.params,f=p.stricted
u=p.firstRestricted,p.message&&(r=p.message)
var m=this.context.strict,y=this.context.allowStrictDirective
this.context.allowStrictDirective=p.simple
var g=this.parseFunctionSourceElements()
return this.context.strict&&u&&this.throwUnexpectedToken(u,r),this.context.strict&&f&&this.tolerateUnexpectedToken(f,r),this.context.strict=m,this.context.allowStrictDirective=y,this.context.await=l,this.context.allowYield=h,n?this.finalize(t,new o.AsyncFunctionDeclaration(a,d,g)):this.finalize(t,new o.FunctionDeclaration(a,d,g,i))},e.prototype.parseFunctionExpression=function(){var e=this.createNode(),t=this.matchContextualKeyword("async")
t&&this.nextToken(),this.expectKeyword("function")
var n,r=!t&&this.match("*")
r&&this.nextToken()
var i,a=null,u=this.context.await,c=this.context.allowYield
if(this.context.await=t,this.context.allowYield=!r,!this.match("(")){var l=this.lookahead
a=this.context.strict||r||!this.matchKeyword("yield")?this.parseVariableIdentifier():this.parseIdentifierName(),this.context.strict?this.scanner.isRestrictedWord(l.value)&&this.tolerateUnexpectedToken(l,s.Messages.StrictFunctionName):this.scanner.isRestrictedWord(l.value)?(i=l,n=s.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(l.value)&&(i=l,n=s.Messages.StrictReservedWord)}var h=this.parseFormalParameters(i),p=h.params,d=h.stricted
i=h.firstRestricted,h.message&&(n=h.message)
var f=this.context.strict,m=this.context.allowStrictDirective
this.context.allowStrictDirective=h.simple
var y=this.parseFunctionSourceElements()
return this.context.strict&&i&&this.throwUnexpectedToken(i,n),this.context.strict&&d&&this.tolerateUnexpectedToken(d,n),this.context.strict=f,this.context.allowStrictDirective=m,this.context.await=u,this.context.allowYield=c,t?this.finalize(e,new o.AsyncFunctionExpression(a,p,y)):this.finalize(e,new o.FunctionExpression(a,p,y,r))},e.prototype.parseDirective=function(){var e=this.lookahead,t=this.createNode(),n=this.parseExpression(),r=n.type===u.Syntax.Literal?this.getTokenRaw(e).slice(1,-1):null
return this.consumeSemicolon(),this.finalize(t,r?new o.Directive(n,r):new o.ExpressionStatement(n))},e.prototype.parseDirectivePrologues=function(){for(var e=null,t=[];;){var n=this.lookahead
if(8!==n.type)break
var r=this.parseDirective()
t.push(r)
var i=r.directive
if("string"!=typeof i)break
"use strict"===i?(this.context.strict=!0,e&&this.tolerateUnexpectedToken(e,s.Messages.StrictOctalLiteral),this.context.allowStrictDirective||this.tolerateUnexpectedToken(n,s.Messages.IllegalLanguageModeDirective)):!e&&n.octal&&(e=n)}return t},e.prototype.qualifiedPropertyName=function(e){switch(e.type){case 3:case 8:case 1:case 5:case 6:case 4:return!0
case 7:return"["===e.value}return!1},e.prototype.parseGetterMethod=function(){var e=this.createNode(),t=this.context.allowYield
this.context.allowYield=!0
var n=this.parseFormalParameters()
n.params.length>0&&this.tolerateError(s.Messages.BadGetterArity)
var r=this.parsePropertyMethod(n)
return this.context.allowYield=t,this.finalize(e,new o.FunctionExpression(null,n.params,r,!1))},e.prototype.parseSetterMethod=function(){var e=this.createNode(),t=this.context.allowYield
this.context.allowYield=!0
var n=this.parseFormalParameters()
1!==n.params.length?this.tolerateError(s.Messages.BadSetterArity):n.params[0]instanceof o.RestElement&&this.tolerateError(s.Messages.BadSetterRestParameter)
var r=this.parsePropertyMethod(n)
return this.context.allowYield=t,this.finalize(e,new o.FunctionExpression(null,n.params,r,!1))},e.prototype.parseGeneratorMethod=function(){var e=this.createNode(),t=this.context.allowYield
this.context.allowYield=!0
var n=this.parseFormalParameters()
this.context.allowYield=!1
var r=this.parsePropertyMethod(n)
return this.context.allowYield=t,this.finalize(e,new o.FunctionExpression(null,n.params,r,!0))},e.prototype.isStartOfExpression=function(){var e=!0,t=this.lookahead.value
switch(this.lookahead.type){case 7:e="["===t||"("===t||"{"===t||"+"===t||"-"===t||"!"===t||"~"===t||"++"===t||"--"===t||"/"===t||"/="===t
break
case 4:e="class"===t||"delete"===t||"function"===t||"let"===t||"new"===t||"super"===t||"this"===t||"typeof"===t||"void"===t||"yield"===t}return e},e.prototype.parseYieldExpression=function(){var e=this.createNode()
this.expectKeyword("yield")
var t=null,n=!1
if(!this.hasLineTerminator){var r=this.context.allowYield
this.context.allowYield=!1,(n=this.match("*"))?(this.nextToken(),t=this.parseAssignmentExpression()):this.isStartOfExpression()&&(t=this.parseAssignmentExpression()),this.context.allowYield=r}return this.finalize(e,new o.YieldExpression(t,n))},e.prototype.parseClassElement=function(e){var t=this.lookahead,n=this.createNode(),r="",i=null,a=null,u=!1,c=!1,l=!1,h=!1
if(this.match("*"))this.nextToken()
else if(u=this.match("["),"static"===(i=this.parseObjectPropertyKey()).name&&(this.qualifiedPropertyName(this.lookahead)||this.match("*"))&&(t=this.lookahead,l=!0,u=this.match("["),this.match("*")?this.nextToken():i=this.parseObjectPropertyKey()),3===t.type&&!this.hasLineTerminator&&"async"===t.value){var p=this.lookahead.value
":"!==p&&"("!==p&&"*"!==p&&(h=!0,t=this.lookahead,i=this.parseObjectPropertyKey(),3===t.type&&"constructor"===t.value&&this.tolerateUnexpectedToken(t,s.Messages.ConstructorIsAsync))}var d=this.qualifiedPropertyName(this.lookahead)
return 3===t.type?"get"===t.value&&d?(r="get",u=this.match("["),i=this.parseObjectPropertyKey(),this.context.allowYield=!1,a=this.parseGetterMethod()):"set"===t.value&&d&&(r="set",u=this.match("["),i=this.parseObjectPropertyKey(),a=this.parseSetterMethod()):7===t.type&&"*"===t.value&&d&&(r="init",u=this.match("["),i=this.parseObjectPropertyKey(),a=this.parseGeneratorMethod(),c=!0),!r&&i&&this.match("(")&&(r="init",a=h?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),c=!0),r||this.throwUnexpectedToken(this.lookahead),"init"===r&&(r="method"),u||(l&&this.isPropertyKey(i,"prototype")&&this.throwUnexpectedToken(t,s.Messages.StaticPrototype),!l&&this.isPropertyKey(i,"constructor")&&(("method"!==r||!c||a&&a.generator)&&this.throwUnexpectedToken(t,s.Messages.ConstructorSpecialMethod),e.value?this.throwUnexpectedToken(t,s.Messages.DuplicateConstructor):e.value=!0,r="constructor")),this.finalize(n,new o.MethodDefinition(i,u,a,r,l))},e.prototype.parseClassElementList=function(){var e=[],t={value:!1}
for(this.expect("{");!this.match("}");)this.match(";")?this.nextToken():e.push(this.parseClassElement(t))
return this.expect("}"),e},e.prototype.parseClassBody=function(){var e=this.createNode(),t=this.parseClassElementList()
return this.finalize(e,new o.ClassBody(t))},e.prototype.parseClassDeclaration=function(e){var t=this.createNode(),n=this.context.strict
this.context.strict=!0,this.expectKeyword("class")
var r=e&&3!==this.lookahead.type?null:this.parseVariableIdentifier(),i=null
this.matchKeyword("extends")&&(this.nextToken(),i=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall))
var s=this.parseClassBody()
return this.context.strict=n,this.finalize(t,new o.ClassDeclaration(r,i,s))},e.prototype.parseClassExpression=function(){var e=this.createNode(),t=this.context.strict
this.context.strict=!0,this.expectKeyword("class")
var n=3===this.lookahead.type?this.parseVariableIdentifier():null,r=null
this.matchKeyword("extends")&&(this.nextToken(),r=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall))
var i=this.parseClassBody()
return this.context.strict=t,this.finalize(e,new o.ClassExpression(n,r,i))},e.prototype.parseModule=function(){this.context.strict=!0,this.context.isModule=!0,this.scanner.isModule=!0
for(var e=this.createNode(),t=this.parseDirectivePrologues();2!==this.lookahead.type;)t.push(this.parseStatementListItem())
return this.finalize(e,new o.Module(t))},e.prototype.parseScript=function(){for(var e=this.createNode(),t=this.parseDirectivePrologues();2!==this.lookahead.type;)t.push(this.parseStatementListItem())
return this.finalize(e,new o.Script(t))},e.prototype.parseModuleSpecifier=function(){var e=this.createNode()
8!==this.lookahead.type&&this.throwError(s.Messages.InvalidModuleSpecifier)
var t=this.nextToken(),n=this.getTokenRaw(t)
return this.finalize(e,new o.Literal(t.value,n))},e.prototype.parseImportSpecifier=function(){var e,t,n=this.createNode()
return 3===this.lookahead.type?(t=e=this.parseVariableIdentifier(),this.matchContextualKeyword("as")&&(this.nextToken(),t=this.parseVariableIdentifier())):(t=e=this.parseIdentifierName(),this.matchContextualKeyword("as")?(this.nextToken(),t=this.parseVariableIdentifier()):this.throwUnexpectedToken(this.nextToken())),this.finalize(n,new o.ImportSpecifier(t,e))},e.prototype.parseNamedImports=function(){this.expect("{")
for(var e=[];!this.match("}");)e.push(this.parseImportSpecifier()),this.match("}")||this.expect(",")
return this.expect("}"),e},e.prototype.parseImportDefaultSpecifier=function(){var e=this.createNode(),t=this.parseIdentifierName()
return this.finalize(e,new o.ImportDefaultSpecifier(t))},e.prototype.parseImportNamespaceSpecifier=function(){var e=this.createNode()
this.expect("*"),this.matchContextualKeyword("as")||this.throwError(s.Messages.NoAsAfterImportNamespace),this.nextToken()
var t=this.parseIdentifierName()
return this.finalize(e,new o.ImportNamespaceSpecifier(t))},e.prototype.parseImportDeclaration=function(){this.context.inFunctionBody&&this.throwError(s.Messages.IllegalImportDeclaration)
var e,t=this.createNode()
this.expectKeyword("import")
var n=[]
if(8===this.lookahead.type)e=this.parseModuleSpecifier()
else{if(this.match("{")?n=n.concat(this.parseNamedImports()):this.match("*")?n.push(this.parseImportNamespaceSpecifier()):this.isIdentifierName(this.lookahead)&&!this.matchKeyword("default")?(n.push(this.parseImportDefaultSpecifier()),this.match(",")&&(this.nextToken(),this.match("*")?n.push(this.parseImportNamespaceSpecifier()):this.match("{")?n=n.concat(this.parseNamedImports()):this.throwUnexpectedToken(this.lookahead))):this.throwUnexpectedToken(this.nextToken()),!this.matchContextualKeyword("from")){var r=this.lookahead.value?s.Messages.UnexpectedToken:s.Messages.MissingFromClause
this.throwError(r,this.lookahead.value)}this.nextToken(),e=this.parseModuleSpecifier()}return this.consumeSemicolon(),this.finalize(t,new o.ImportDeclaration(n,e))},e.prototype.parseExportSpecifier=function(){var e=this.createNode(),t=this.parseIdentifierName(),n=t
return this.matchContextualKeyword("as")&&(this.nextToken(),n=this.parseIdentifierName()),this.finalize(e,new o.ExportSpecifier(t,n))},e.prototype.parseExportDeclaration=function(){this.context.inFunctionBody&&this.throwError(s.Messages.IllegalExportDeclaration)
var e,t=this.createNode()
if(this.expectKeyword("export"),this.matchKeyword("default"))if(this.nextToken(),this.matchKeyword("function")){var n=this.parseFunctionDeclaration(!0)
e=this.finalize(t,new o.ExportDefaultDeclaration(n))}else this.matchKeyword("class")?(n=this.parseClassDeclaration(!0),e=this.finalize(t,new o.ExportDefaultDeclaration(n))):this.matchContextualKeyword("async")?(n=this.matchAsyncFunction()?this.parseFunctionDeclaration(!0):this.parseAssignmentExpression(),e=this.finalize(t,new o.ExportDefaultDeclaration(n))):(this.matchContextualKeyword("from")&&this.throwError(s.Messages.UnexpectedToken,this.lookahead.value),n=this.match("{")?this.parseObjectInitializer():this.match("[")?this.parseArrayInitializer():this.parseAssignmentExpression(),this.consumeSemicolon(),e=this.finalize(t,new o.ExportDefaultDeclaration(n)))
else if(this.match("*")){if(this.nextToken(),!this.matchContextualKeyword("from")){var r=this.lookahead.value?s.Messages.UnexpectedToken:s.Messages.MissingFromClause
this.throwError(r,this.lookahead.value)}this.nextToken()
var i=this.parseModuleSpecifier()
this.consumeSemicolon(),e=this.finalize(t,new o.ExportAllDeclaration(i))}else if(4===this.lookahead.type){switch(n=void 0,this.lookahead.value){case"let":case"const":n=this.parseLexicalDeclaration({inFor:!1})
break
case"var":case"class":case"function":n=this.parseStatementListItem()
break
default:this.throwUnexpectedToken(this.lookahead)}e=this.finalize(t,new o.ExportNamedDeclaration(n,[],null))}else if(this.matchAsyncFunction())n=this.parseFunctionDeclaration(),e=this.finalize(t,new o.ExportNamedDeclaration(n,[],null))
else{var a=[],u=null,c=!1
for(this.expect("{");!this.match("}");)c=c||this.matchKeyword("default"),a.push(this.parseExportSpecifier()),this.match("}")||this.expect(",")
this.expect("}"),this.matchContextualKeyword("from")?(this.nextToken(),u=this.parseModuleSpecifier(),this.consumeSemicolon()):c?(r=this.lookahead.value?s.Messages.UnexpectedToken:s.Messages.MissingFromClause,this.throwError(r,this.lookahead.value)):this.consumeSemicolon(),e=this.finalize(t,new o.ExportNamedDeclaration(null,a,u))}return e},e}()
t.Parser=l},function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.assert=function(e,t){if(!e)throw new Error("ASSERT: "+t)}},function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=function(){function e(){this.errors=[],this.tolerant=!1}return e.prototype.recordError=function(e){this.errors.push(e)},e.prototype.tolerate=function(e){if(!this.tolerant)throw e
this.recordError(e)},e.prototype.constructError=function(e,t){var n=new Error(e)
try{throw n}catch(e){Object.create&&Object.defineProperty&&(n=Object.create(e),Object.defineProperty(n,"column",{value:t}))}return n},e.prototype.createError=function(e,t,n,r){var i="Line "+t+": "+r,s=this.constructError(i,n)
return s.index=e,s.lineNumber=t,s.description=r,s},e.prototype.throwError=function(e,t,n,r){throw this.createError(e,t,n,r)},e.prototype.tolerateError=function(e,t,n,r){var i=this.createError(e,t,n,r)
if(!this.tolerant)throw i
this.recordError(i)},e}()
t.ErrorHandler=n},function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Messages={BadGetterArity:"Getter must not have any formal parameters",BadSetterArity:"Setter must have exactly one formal parameter",BadSetterRestParameter:"Setter function argument must not be a rest parameter",ConstructorIsAsync:"Class constructor may not be an async method",ConstructorSpecialMethod:"Class constructor may not be an accessor",DeclarationMissingInitializer:"Missing initializer in %0 declaration",DefaultRestParameter:"Unexpected token =",DuplicateBinding:"Duplicate binding %0",DuplicateConstructor:"A class may only have one constructor",DuplicateProtoProperty:"Duplicate __proto__ fields are not allowed in object literals",ForInOfLoopInitializer:"%0 loop variable declaration may not have an initializer",GeneratorInLegacyContext:"Generator declarations are not allowed in legacy contexts",IllegalBreak:"Illegal break statement",IllegalContinue:"Illegal continue statement",IllegalExportDeclaration:"Unexpected token",IllegalImportDeclaration:"Unexpected token",IllegalLanguageModeDirective:"Illegal 'use strict' directive in function with non-simple parameter list",IllegalReturn:"Illegal return statement",InvalidEscapedReservedWord:"Keyword must not contain escaped characters",InvalidHexEscapeSequence:"Invalid hexadecimal escape sequence",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",InvalidLHSInForLoop:"Invalid left-hand side in for-loop",InvalidModuleSpecifier:"Unexpected token",InvalidRegExp:"Invalid regular expression",LetInLexicalBinding:"let is disallowed as a lexically bound name",MissingFromClause:"Unexpected token",MultipleDefaultsInSwitch:"More than one default clause in switch statement",NewlineAfterThrow:"Illegal newline after throw",NoAsAfterImportNamespace:"Unexpected token",NoCatchOrFinally:"Missing catch or finally after try",ParameterAfterRestParameter:"Rest parameter must be last formal parameter",Redeclaration:"%0 '%1' has already been declared",StaticPrototype:"Classes may not have static property named prototype",StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",StrictDelete:"Delete of an unqualified identifier in strict mode.",StrictFunction:"In strict mode code, functions can only be declared at top level or inside a block",StrictFunctionName:"Function name may not be eval or arguments in strict mode",StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",StrictModeWith:"Strict mode code may not include a with statement",StrictOctalLiteral:"Octal literals are not allowed in strict mode.",StrictParamDupe:"Strict mode function may not have duplicate parameter names",StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",StrictReservedWord:"Use of future reserved word in strict mode",StrictVarName:"Variable name may not be eval or arguments in strict mode",TemplateOctalLiteral:"Octal literals are not allowed in template strings.",UnexpectedEOS:"Unexpected end of input",UnexpectedIdentifier:"Unexpected identifier",UnexpectedNumber:"Unexpected number",UnexpectedReserved:"Unexpected reserved word",UnexpectedString:"Unexpected string",UnexpectedTemplate:"Unexpected quasi %0",UnexpectedToken:"Unexpected token %0",UnexpectedTokenIllegal:"Unexpected token ILLEGAL",UnknownLabel:"Undefined label '%0'",UnterminatedRegExp:"Invalid regular expression: missing /"}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(9),i=n(4),s=n(11)
function o(e){return"0123456789abcdef".indexOf(e.toLowerCase())}function a(e){return"01234567".indexOf(e)}var u=function(){function e(e,t){this.source=e,this.errorHandler=t,this.trackComment=!1,this.isModule=!1,this.length=e.length,this.index=0,this.lineNumber=e.length>0?1:0,this.lineStart=0,this.curlyStack=[]}return e.prototype.saveState=function(){return{index:this.index,lineNumber:this.lineNumber,lineStart:this.lineStart}},e.prototype.restoreState=function(e){this.index=e.index,this.lineNumber=e.lineNumber,this.lineStart=e.lineStart},e.prototype.eof=function(){return this.index>=this.length},e.prototype.throwUnexpectedToken=function(e){return void 0===e&&(e=s.Messages.UnexpectedTokenIllegal),this.errorHandler.throwError(this.index,this.lineNumber,this.index-this.lineStart+1,e)},e.prototype.tolerateUnexpectedToken=function(e){void 0===e&&(e=s.Messages.UnexpectedTokenIllegal),this.errorHandler.tolerateError(this.index,this.lineNumber,this.index-this.lineStart+1,e)},e.prototype.skipSingleLineComment=function(e){var t,n,r=[]
for(this.trackComment&&(r=[],t=this.index-e,n={start:{line:this.lineNumber,column:this.index-this.lineStart-e},end:{}});!this.eof();){var s=this.source.charCodeAt(this.index)
if(++this.index,i.Character.isLineTerminator(s)){if(this.trackComment){n.end={line:this.lineNumber,column:this.index-this.lineStart-1}
var o={multiLine:!1,slice:[t+e,this.index-1],range:[t,this.index-1],loc:n}
r.push(o)}return 13===s&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,r}}return this.trackComment&&(n.end={line:this.lineNumber,column:this.index-this.lineStart},o={multiLine:!1,slice:[t+e,this.index],range:[t,this.index],loc:n},r.push(o)),r},e.prototype.skipMultiLineComment=function(){var e,t,n=[]
for(this.trackComment&&(n=[],e=this.index-2,t={start:{line:this.lineNumber,column:this.index-this.lineStart-2},end:{}});!this.eof();){var r=this.source.charCodeAt(this.index)
if(i.Character.isLineTerminator(r))13===r&&10===this.source.charCodeAt(this.index+1)&&++this.index,++this.lineNumber,++this.index,this.lineStart=this.index
else if(42===r){if(47===this.source.charCodeAt(this.index+1)){if(this.index+=2,this.trackComment){t.end={line:this.lineNumber,column:this.index-this.lineStart}
var s={multiLine:!0,slice:[e+2,this.index-2],range:[e,this.index],loc:t}
n.push(s)}return n}++this.index}else++this.index}return this.trackComment&&(t.end={line:this.lineNumber,column:this.index-this.lineStart},s={multiLine:!0,slice:[e+2,this.index],range:[e,this.index],loc:t},n.push(s)),this.tolerateUnexpectedToken(),n},e.prototype.scanComments=function(){var e
this.trackComment&&(e=[])
for(var t=0===this.index;!this.eof();){var n=this.source.charCodeAt(this.index)
if(i.Character.isWhiteSpace(n))++this.index
else if(i.Character.isLineTerminator(n))++this.index,13===n&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,t=!0
else if(47===n)if(47===(n=this.source.charCodeAt(this.index+1))){this.index+=2
var r=this.skipSingleLineComment(2)
this.trackComment&&(e=e.concat(r)),t=!0}else{if(42!==n)break
this.index+=2,r=this.skipMultiLineComment(),this.trackComment&&(e=e.concat(r))}else if(t&&45===n){if(45!==this.source.charCodeAt(this.index+1)||62!==this.source.charCodeAt(this.index+2))break
this.index+=3,r=this.skipSingleLineComment(3),this.trackComment&&(e=e.concat(r))}else{if(60!==n||this.isModule)break
if("!--"!==this.source.slice(this.index+1,this.index+4))break
this.index+=4,r=this.skipSingleLineComment(4),this.trackComment&&(e=e.concat(r))}}return e},e.prototype.isFutureReservedWord=function(e){switch(e){case"enum":case"export":case"import":case"super":return!0
default:return!1}},e.prototype.isStrictModeReservedWord=function(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"yield":case"let":return!0
default:return!1}},e.prototype.isRestrictedWord=function(e){return"eval"===e||"arguments"===e},e.prototype.isKeyword=function(e){switch(e.length){case 2:return"if"===e||"in"===e||"do"===e
case 3:return"var"===e||"for"===e||"new"===e||"try"===e||"let"===e
case 4:return"this"===e||"else"===e||"case"===e||"void"===e||"with"===e||"enum"===e
case 5:return"while"===e||"break"===e||"catch"===e||"throw"===e||"const"===e||"yield"===e||"class"===e||"super"===e
case 6:return"return"===e||"typeof"===e||"delete"===e||"switch"===e||"export"===e||"import"===e
case 7:return"default"===e||"finally"===e||"extends"===e
case 8:return"function"===e||"continue"===e||"debugger"===e
case 10:return"instanceof"===e
default:return!1}},e.prototype.codePointAt=function(e){var t=this.source.charCodeAt(e)
if(t>=55296&&t<=56319){var n=this.source.charCodeAt(e+1)
n>=56320&&n<=57343&&(t=1024*(t-55296)+n-56320+65536)}return t},e.prototype.scanHexEscape=function(e){for(var t="u"===e?4:2,n=0,r=0;r<t;++r){if(this.eof()||!i.Character.isHexDigit(this.source.charCodeAt(this.index)))return null
n=16*n+o(this.source[this.index++])}return String.fromCharCode(n)},e.prototype.scanUnicodeCodePointEscape=function(){var e=this.source[this.index],t=0
for("}"===e&&this.throwUnexpectedToken();!this.eof()&&(e=this.source[this.index++],i.Character.isHexDigit(e.charCodeAt(0)));)t=16*t+o(e)
return(t>1114111||"}"!==e)&&this.throwUnexpectedToken(),i.Character.fromCodePoint(t)},e.prototype.getIdentifier=function(){for(var e=this.index++;!this.eof();){var t=this.source.charCodeAt(this.index)
if(92===t)return this.index=e,this.getComplexIdentifier()
if(t>=55296&&t<57343)return this.index=e,this.getComplexIdentifier()
if(!i.Character.isIdentifierPart(t))break;++this.index}return this.source.slice(e,this.index)},e.prototype.getComplexIdentifier=function(){var e,t=this.codePointAt(this.index),n=i.Character.fromCodePoint(t)
for(this.index+=n.length,92===t&&(117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):null!==(e=this.scanHexEscape("u"))&&"\\"!==e&&i.Character.isIdentifierStart(e.charCodeAt(0))||this.throwUnexpectedToken(),n=e);!this.eof()&&(t=this.codePointAt(this.index),i.Character.isIdentifierPart(t));)n+=e=i.Character.fromCodePoint(t),this.index+=e.length,92===t&&(n=n.substr(0,n.length-1),117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):null!==(e=this.scanHexEscape("u"))&&"\\"!==e&&i.Character.isIdentifierPart(e.charCodeAt(0))||this.throwUnexpectedToken(),n+=e)
return n},e.prototype.octalToDecimal=function(e){var t="0"!==e,n=a(e)
return!this.eof()&&i.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(t=!0,n=8*n+a(this.source[this.index++]),"0123".indexOf(e)>=0&&!this.eof()&&i.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(n=8*n+a(this.source[this.index++]))),{code:n,octal:t}},e.prototype.scanIdentifier=function(){var e,t=this.index,n=92===this.source.charCodeAt(t)?this.getComplexIdentifier():this.getIdentifier()
if(3!=(e=1===n.length?3:this.isKeyword(n)?4:"null"===n?5:"true"===n||"false"===n?1:3)&&t+n.length!==this.index){var r=this.index
this.index=t,this.tolerateUnexpectedToken(s.Messages.InvalidEscapedReservedWord),this.index=r}return{type:e,value:n,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}},e.prototype.scanPunctuator=function(){var e=this.index,t=this.source[this.index]
switch(t){case"(":case"{":"{"===t&&this.curlyStack.push("{"),++this.index
break
case".":++this.index,"."===this.source[this.index]&&"."===this.source[this.index+1]&&(this.index+=2,t="...")
break
case"}":++this.index,this.curlyStack.pop()
break
case")":case";":case",":case"[":case"]":case":":case"?":case"~":++this.index
break
default:">>>="===(t=this.source.substr(this.index,4))?this.index+=4:"==="===(t=t.substr(0,3))||"!=="===t||">>>"===t||"<<="===t||">>="===t||"**="===t?this.index+=3:"&&"===(t=t.substr(0,2))||"||"===t||"=="===t||"!="===t||"+="===t||"-="===t||"*="===t||"/="===t||"++"===t||"--"===t||"<<"===t||">>"===t||"&="===t||"|="===t||"^="===t||"%="===t||"<="===t||">="===t||"=>"===t||"**"===t?this.index+=2:(t=this.source[this.index],"<>=!+-*%&|^/".indexOf(t)>=0&&++this.index)}return this.index===e&&this.throwUnexpectedToken(),{type:7,value:t,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanHexLiteral=function(e){for(var t="";!this.eof()&&i.Character.isHexDigit(this.source.charCodeAt(this.index));)t+=this.source[this.index++]
return 0===t.length&&this.throwUnexpectedToken(),i.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseInt("0x"+t,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanBinaryLiteral=function(e){for(var t,n="";!this.eof()&&("0"===(t=this.source[this.index])||"1"===t);)n+=this.source[this.index++]
return 0===n.length&&this.throwUnexpectedToken(),this.eof()||(t=this.source.charCodeAt(this.index),(i.Character.isIdentifierStart(t)||i.Character.isDecimalDigit(t))&&this.throwUnexpectedToken()),{type:6,value:parseInt(n,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanOctalLiteral=function(e,t){var n="",r=!1
for(i.Character.isOctalDigit(e.charCodeAt(0))?(r=!0,n="0"+this.source[this.index++]):++this.index;!this.eof()&&i.Character.isOctalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++]
return r||0!==n.length||this.throwUnexpectedToken(),(i.Character.isIdentifierStart(this.source.charCodeAt(this.index))||i.Character.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken(),{type:6,value:parseInt(n,8),octal:r,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}},e.prototype.isImplicitOctalLiteral=function(){for(var e=this.index+1;e<this.length;++e){var t=this.source[e]
if("8"===t||"9"===t)return!1
if(!i.Character.isOctalDigit(t.charCodeAt(0)))return!0}return!0},e.prototype.scanNumericLiteral=function(){var e=this.index,t=this.source[e]
r.assert(i.Character.isDecimalDigit(t.charCodeAt(0))||"."===t,"Numeric literal must start with a decimal digit or a decimal point")
var n=""
if("."!==t){if(n=this.source[this.index++],t=this.source[this.index],"0"===n){if("x"===t||"X"===t)return++this.index,this.scanHexLiteral(e)
if("b"===t||"B"===t)return++this.index,this.scanBinaryLiteral(e)
if("o"===t||"O"===t)return this.scanOctalLiteral(t,e)
if(t&&i.Character.isOctalDigit(t.charCodeAt(0))&&this.isImplicitOctalLiteral())return this.scanOctalLiteral(t,e)}for(;i.Character.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++]
t=this.source[this.index]}if("."===t){for(n+=this.source[this.index++];i.Character.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++]
t=this.source[this.index]}if("e"===t||"E"===t)if(n+=this.source[this.index++],"+"!==(t=this.source[this.index])&&"-"!==t||(n+=this.source[this.index++]),i.Character.isDecimalDigit(this.source.charCodeAt(this.index)))for(;i.Character.isDecimalDigit(this.source.charCodeAt(this.index));)n+=this.source[this.index++]
else this.throwUnexpectedToken()
return i.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseFloat(n),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanStringLiteral=function(){var e=this.index,t=this.source[e]
r.assert("'"===t||'"'===t,"String literal must starts with a quote"),++this.index
for(var n=!1,o="";!this.eof();){var a=this.source[this.index++]
if(a===t){t=""
break}if("\\"===a)if((a=this.source[this.index++])&&i.Character.isLineTerminator(a.charCodeAt(0)))++this.lineNumber,"\r"===a&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index
else switch(a){case"u":if("{"===this.source[this.index])++this.index,o+=this.scanUnicodeCodePointEscape()
else{var u=this.scanHexEscape(a)
null===u&&this.throwUnexpectedToken(),o+=u}break
case"x":var c=this.scanHexEscape(a)
null===c&&this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence),o+=c
break
case"n":o+="\n"
break
case"r":o+="\r"
break
case"t":o+="\t"
break
case"b":o+="\b"
break
case"f":o+="\f"
break
case"v":o+="\v"
break
case"8":case"9":o+=a,this.tolerateUnexpectedToken()
break
default:if(a&&i.Character.isOctalDigit(a.charCodeAt(0))){var l=this.octalToDecimal(a)
n=l.octal||n,o+=String.fromCharCode(l.code)}else o+=a}else{if(i.Character.isLineTerminator(a.charCodeAt(0)))break
o+=a}}return""!==t&&(this.index=e,this.throwUnexpectedToken()),{type:8,value:o,octal:n,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanTemplate=function(){var e="",t=!1,n=this.index,r="`"===this.source[n],o=!1,a=2
for(++this.index;!this.eof();){var u=this.source[this.index++]
if("`"===u){a=1,o=!0,t=!0
break}if("$"===u){if("{"===this.source[this.index]){this.curlyStack.push("${"),++this.index,t=!0
break}e+=u}else if("\\"===u)if(u=this.source[this.index++],i.Character.isLineTerminator(u.charCodeAt(0)))++this.lineNumber,"\r"===u&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index
else switch(u){case"n":e+="\n"
break
case"r":e+="\r"
break
case"t":e+="\t"
break
case"u":if("{"===this.source[this.index])++this.index,e+=this.scanUnicodeCodePointEscape()
else{var c=this.index,l=this.scanHexEscape(u)
null!==l?e+=l:(this.index=c,e+=u)}break
case"x":var h=this.scanHexEscape(u)
null===h&&this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence),e+=h
break
case"b":e+="\b"
break
case"f":e+="\f"
break
case"v":e+="\v"
break
default:"0"===u?(i.Character.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral),e+="\0"):i.Character.isOctalDigit(u.charCodeAt(0))?this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral):e+=u}else i.Character.isLineTerminator(u.charCodeAt(0))?(++this.lineNumber,"\r"===u&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index,e+="\n"):e+=u}return t||this.throwUnexpectedToken(),r||this.curlyStack.pop(),{type:10,value:this.source.slice(n+1,this.index-a),cooked:e,head:r,tail:o,lineNumber:this.lineNumber,lineStart:this.lineStart,start:n,end:this.index}},e.prototype.testRegExp=function(e,t){var n=e,r=this
t.indexOf("u")>=0&&(n=n.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,(function(e,t,n){var i=parseInt(t||n,16)
return i>1114111&&r.throwUnexpectedToken(s.Messages.InvalidRegExp),i<=65535?String.fromCharCode(i):"￿"})).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"￿"))
try{RegExp(n)}catch(e){this.throwUnexpectedToken(s.Messages.InvalidRegExp)}try{return new RegExp(e,t)}catch(e){return null}},e.prototype.scanRegExpBody=function(){var e=this.source[this.index]
r.assert("/"===e,"Regular expression literal must start with a slash")
for(var t=this.source[this.index++],n=!1,o=!1;!this.eof();)if(t+=e=this.source[this.index++],"\\"===e)e=this.source[this.index++],i.Character.isLineTerminator(e.charCodeAt(0))&&this.throwUnexpectedToken(s.Messages.UnterminatedRegExp),t+=e
else if(i.Character.isLineTerminator(e.charCodeAt(0)))this.throwUnexpectedToken(s.Messages.UnterminatedRegExp)
else if(n)"]"===e&&(n=!1)
else{if("/"===e){o=!0
break}"["===e&&(n=!0)}return o||this.throwUnexpectedToken(s.Messages.UnterminatedRegExp),t.substr(1,t.length-2)},e.prototype.scanRegExpFlags=function(){for(var e="";!this.eof();){var t=this.source[this.index]
if(!i.Character.isIdentifierPart(t.charCodeAt(0)))break
if(++this.index,"\\"!==t||this.eof())e+=t
else if("u"===(t=this.source[this.index])){++this.index
var n=this.index,r=this.scanHexEscape("u")
if(null!==r)for(e+=r;n<this.index;++n)this.source[n]
else this.index=n,e+="u"
this.tolerateUnexpectedToken()}else this.tolerateUnexpectedToken()}return e},e.prototype.scanRegExp=function(){var e=this.index,t=this.scanRegExpBody(),n=this.scanRegExpFlags()
return{type:9,value:"",pattern:t,flags:n,regex:this.testRegExp(t,n),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.lex=function(){if(this.eof())return{type:2,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,start:this.index,end:this.index}
var e=this.source.charCodeAt(this.index)
return i.Character.isIdentifierStart(e)?this.scanIdentifier():40===e||41===e||59===e?this.scanPunctuator():39===e||34===e?this.scanStringLiteral():46===e?i.Character.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():i.Character.isDecimalDigit(e)?this.scanNumericLiteral():96===e||125===e&&"${"===this.curlyStack[this.curlyStack.length-1]?this.scanTemplate():e>=55296&&e<57343&&i.Character.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()},e}()
t.Scanner=u},function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.TokenName={},t.TokenName[1]="Boolean",t.TokenName[2]="<end>",t.TokenName[3]="Identifier",t.TokenName[4]="Keyword",t.TokenName[5]="Null",t.TokenName[6]="Numeric",t.TokenName[7]="Punctuator",t.TokenName[8]="String",t.TokenName[9]="RegularExpression",t.TokenName[10]="Template"},function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.XHTMLEntities={quot:'"',amp:"&",apos:"'",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",lang:"⟨",rang:"⟩"}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(10),i=n(12),s=n(13),o=function(){function e(){this.values=[],this.curly=this.paren=-1}return e.prototype.beforeFunctionExpression=function(e){return["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","**","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="].indexOf(e)>=0},e.prototype.isRegexStart=function(){var e=this.values[this.values.length-1],t=null!==e
switch(e){case"this":case"]":t=!1
break
case")":var n=this.values[this.paren-1]
t="if"===n||"while"===n||"for"===n||"with"===n
break
case"}":if(t=!1,"function"===this.values[this.curly-3])t=!!(r=this.values[this.curly-4])&&!this.beforeFunctionExpression(r)
else if("function"===this.values[this.curly-4]){var r
t=!(r=this.values[this.curly-5])||!this.beforeFunctionExpression(r)}}return t},e.prototype.push=function(e){7===e.type||4===e.type?("{"===e.value?this.curly=this.values.length:"("===e.value&&(this.paren=this.values.length),this.values.push(e.value)):this.values.push(null)},e}(),a=function(){function e(e,t){this.errorHandler=new r.ErrorHandler,this.errorHandler.tolerant=!!t&&"boolean"==typeof t.tolerant&&t.tolerant,this.scanner=new i.Scanner(e,this.errorHandler),this.scanner.trackComment=!!t&&"boolean"==typeof t.comment&&t.comment,this.trackRange=!!t&&"boolean"==typeof t.range&&t.range,this.trackLoc=!!t&&"boolean"==typeof t.loc&&t.loc,this.buffer=[],this.reader=new o}return e.prototype.errors=function(){return this.errorHandler.errors},e.prototype.getNextToken=function(){if(0===this.buffer.length){var e=this.scanner.scanComments()
if(this.scanner.trackComment)for(var t=0;t<e.length;++t){var n=e[t],r=this.scanner.source.slice(n.slice[0],n.slice[1]),i={type:n.multiLine?"BlockComment":"LineComment",value:r}
this.trackRange&&(i.range=n.range),this.trackLoc&&(i.loc=n.loc),this.buffer.push(i)}if(!this.scanner.eof()){var o=void 0
this.trackLoc&&(o={start:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},end:{}})
var a="/"===this.scanner.source[this.scanner.index]&&this.reader.isRegexStart()?this.scanner.scanRegExp():this.scanner.lex()
this.reader.push(a)
var u={type:s.TokenName[a.type],value:this.scanner.source.slice(a.start,a.end)}
if(this.trackRange&&(u.range=[a.start,a.end]),this.trackLoc&&(o.end={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},u.loc=o),9===a.type){var c=a.pattern,l=a.flags
u.regex={pattern:c,flags:l}}this.buffer.push(u)}}return this.buffer.shift()},e}()
t.Tokenizer=a}])},e.exports=t()},812:(e,t,n)=>{"use strict"
const r=n(3990),i=n(1832),s=n(6717),o=n(8869),a=n(4883),u=n(5681)
async function c(e,t){h(e)
const n=l(e,i.default,t),r=await Promise.all(n)
return u.array.flatten(r)}function l(e,t,n){const i=[].concat(e),s=new a.default(n),o=r.generate(i,s),u=new t(s)
return o.map(u.read,u)}function h(e){if(![].concat(e).every(e=>u.string.isString(e)&&!u.string.isEmpty(e)))throw new TypeError("Patterns must be a string (non empty) or an array of strings")}!function(e){e.sync=function(e,t){h(e)
const n=l(e,o.default,t)
return u.array.flatten(n)},e.stream=function(e,t){h(e)
const n=l(e,s.default,t)
return u.stream.merge(n)},e.generateTasks=function(e,t){h(e)
const n=[].concat(e),i=new a.default(t)
return r.generate(n,i)},e.isDynamicPattern=function(e,t){h(e)
const n=new a.default(t)
return u.pattern.isDynamicPattern(e,n)},e.escapePath=function(e){return h(e),u.path.escape(e)}}(c||(c={})),e.exports=c},3990:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.convertPatternGroupToTask=t.convertPatternGroupsToTasks=t.groupPatternsByBaseDirectory=t.getNegativePatternsAsPositive=t.getPositivePatterns=t.convertPatternsToTasks=t.generate=void 0
const r=n(5681)
function i(e,t,n){const r=a(e)
if("."in r){return[c(".",e,t,n)]}return u(r,t,n)}function s(e){return r.pattern.getPositivePatterns(e)}function o(e,t){return r.pattern.getNegativePatterns(e).concat(t).map(r.pattern.convertToPositivePattern)}function a(e){return e.reduce((e,t)=>{const n=r.pattern.getBaseDirectory(t)
return n in e?e[n].push(t):e[n]=[t],e},{})}function u(e,t,n){return Object.keys(e).map(r=>c(r,e[r],t,n))}function c(e,t,n,i){return{dynamic:i,positive:t,negative:n,base:e,patterns:[].concat(t,n.map(r.pattern.convertToNegativePattern))}}t.generate=function(e,t){const n=s(e),a=o(e,t.ignore),u=n.filter(e=>r.pattern.isStaticPattern(e,t)),c=n.filter(e=>r.pattern.isDynamicPattern(e,t)),l=i(u,a,!1),h=i(c,a,!0)
return l.concat(h)},t.convertPatternsToTasks=i,t.getPositivePatterns=s,t.getNegativePatternsAsPositive=o,t.groupPatternsByBaseDirectory=a,t.convertPatternGroupsToTasks=u,t.convertPatternGroupToTask=c},1832:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(8579),i=n(4990)
class s extends i.default{constructor(){super(...arguments),this._reader=new r.default(this._settings)}read(e){const t=this._getRootDirectory(e),n=this._getReaderOptions(e),r=[]
return new Promise((i,s)=>{const o=this.api(t,e,n)
o.once("error",s),o.on("data",e=>r.push(n.transform(e))),o.once("end",()=>i(r))})}api(e,t,n){return t.dynamic?this._reader.dynamic(e,n):this._reader.static(t.patterns,n)}}t.default=s},3991:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(5681),i=n(1509)
t.default=class{constructor(e,t){this._settings=e,this._micromatchOptions=t}getFilter(e,t,n){const r=this._getMatcher(t),i=this._getNegativePatternsRe(n)
return t=>this._filter(e,t,r,i)}_getMatcher(e){return new i.default(e,this._settings,this._micromatchOptions)}_getNegativePatternsRe(e){const t=e.filter(r.pattern.isAffectDepthOfReadingPattern)
return r.pattern.convertPatternsToRe(t,this._micromatchOptions)}_filter(e,t,n,i){if(this._isSkippedByDeep(e,t.path))return!1
if(this._isSkippedSymbolicLink(t))return!1
const s=r.path.removeLeadingDotSegment(t.path)
return!this._isSkippedByPositivePatterns(s,n)&&this._isSkippedByNegativePatterns(s,i)}_isSkippedByDeep(e,t){return this._settings.deep!==1/0&&this._getEntryLevel(e,t)>=this._settings.deep}_getEntryLevel(e,t){const n=t.split("/").length
if(""===e)return n
return n-e.split("/").length}_isSkippedSymbolicLink(e){return!this._settings.followSymbolicLinks&&e.dirent.isSymbolicLink()}_isSkippedByPositivePatterns(e,t){return!this._settings.baseNameMatch&&!t.match(e)}_isSkippedByNegativePatterns(e,t){return!r.pattern.matchAny(e,t)}}},2486:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(5681)
t.default=class{constructor(e,t){this._settings=e,this._micromatchOptions=t,this.index=new Map}getFilter(e,t){const n=r.pattern.convertPatternsToRe(e,this._micromatchOptions),i=r.pattern.convertPatternsToRe(t,this._micromatchOptions)
return e=>this._filter(e,n,i)}_filter(e,t,n){if(this._settings.unique&&this._isDuplicateEntry(e))return!1
if(this._onlyFileFilter(e)||this._onlyDirectoryFilter(e))return!1
if(this._isSkippedByAbsoluteNegativePatterns(e.path,n))return!1
const r=this._settings.baseNameMatch?e.name:e.path,i=this._isMatchToPatterns(r,t)&&!this._isMatchToPatterns(e.path,n)
return this._settings.unique&&i&&this._createIndexRecord(e),i}_isDuplicateEntry(e){return this.index.has(e.path)}_createIndexRecord(e){this.index.set(e.path,void 0)}_onlyFileFilter(e){return this._settings.onlyFiles&&!e.dirent.isFile()}_onlyDirectoryFilter(e){return this._settings.onlyDirectories&&!e.dirent.isDirectory()}_isSkippedByAbsoluteNegativePatterns(e,t){if(!this._settings.absolute)return!1
const n=r.path.makeAbsolute(this._settings.cwd,e)
return r.pattern.matchAny(n,t)}_isMatchToPatterns(e,t){const n=r.path.removeLeadingDotSegment(e)
return r.pattern.matchAny(n,t)}}},4542:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(5681)
t.default=class{constructor(e){this._settings=e}getFilter(){return e=>this._isNonFatalError(e)}_isNonFatalError(e){return r.errno.isEnoentCodeError(e)||this._settings.suppressErrors}}},405:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(5681)
t.default=class{constructor(e,t,n){this._patterns=e,this._settings=t,this._micromatchOptions=n,this._storage=[],this._fillStorage()}_fillStorage(){const e=r.pattern.expandPatternsWithBraceExpansion(this._patterns)
for(const t of e){const e=this._getPatternSegments(t),n=this._splitSegmentsIntoSections(e)
this._storage.push({complete:n.length<=1,pattern:t,segments:e,sections:n})}}_getPatternSegments(e){return r.pattern.getPatternParts(e,this._micromatchOptions).map(e=>r.pattern.isDynamicPattern(e,this._settings)?{dynamic:!0,pattern:e,patternRe:r.pattern.makeRe(e,this._micromatchOptions)}:{dynamic:!1,pattern:e})}_splitSegmentsIntoSections(e){return r.array.splitWhen(e,e=>e.dynamic&&r.pattern.hasGlobStar(e.pattern))}}},1509:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(405)
class i extends r.default{match(e){const t=e.split("/"),n=t.length,r=this._storage.filter(e=>!e.complete||e.segments.length>n)
for(const e of r){const r=e.sections[0]
if(!e.complete&&n>r.length)return!0
if(t.every((t,n)=>{const r=e.segments[n]
return!(!r.dynamic||!r.patternRe.test(t))||!r.dynamic&&r.pattern===t}))return!0}return!1}}t.default=i},4990:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(5622),i=n(3991),s=n(2486),o=n(4542),a=n(6427)
t.default=class{constructor(e){this._settings=e,this.errorFilter=new o.default(this._settings),this.entryFilter=new s.default(this._settings,this._getMicromatchOptions()),this.deepFilter=new i.default(this._settings,this._getMicromatchOptions()),this.entryTransformer=new a.default(this._settings)}_getRootDirectory(e){return r.resolve(this._settings.cwd,e.base)}_getReaderOptions(e){const t="."===e.base?"":e.base
return{basePath:t,pathSegmentSeparator:"/",concurrency:this._settings.concurrency,deepFilter:this.deepFilter.getFilter(t,e.positive,e.negative),entryFilter:this.entryFilter.getFilter(e.positive,e.negative),errorFilter:this.errorFilter.getFilter(),followSymbolicLinks:this._settings.followSymbolicLinks,fs:this._settings.fs,stats:this._settings.stats,throwErrorOnBrokenSymbolicLink:this._settings.throwErrorOnBrokenSymbolicLink,transform:this.entryTransformer.getTransformer()}}_getMicromatchOptions(){return{dot:this._settings.dot,matchBase:this._settings.baseNameMatch,nobrace:!this._settings.braceExpansion,nocase:!this._settings.caseSensitiveMatch,noext:!this._settings.extglob,noglobstar:!this._settings.globstar,posix:!0,strictSlashes:!1}}}},6717:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(2413),i=n(8579),s=n(4990)
class o extends s.default{constructor(){super(...arguments),this._reader=new i.default(this._settings)}read(e){const t=this._getRootDirectory(e),n=this._getReaderOptions(e),i=this.api(t,e,n),s=new r.Readable({objectMode:!0,read:()=>{}})
return i.once("error",e=>s.emit("error",e)).on("data",e=>s.emit("data",n.transform(e))).once("end",()=>s.emit("end")),s.once("close",()=>i.destroy()),s}api(e,t,n){return t.dynamic?this._reader.dynamic(e,n):this._reader.static(t.patterns,n)}}t.default=o},8869:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(8326),i=n(4990)
class s extends i.default{constructor(){super(...arguments),this._reader=new r.default(this._settings)}read(e){const t=this._getRootDirectory(e),n=this._getReaderOptions(e)
return this.api(t,e,n).map(n.transform)}api(e,t,n){return t.dynamic?this._reader.dynamic(e,n):this._reader.static(t.patterns,n)}}t.default=s},6427:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(5681)
t.default=class{constructor(e){this._settings=e}getTransformer(){return e=>this._transform(e)}_transform(e){let t=e.path
return this._settings.absolute&&(t=r.path.makeAbsolute(this._settings.cwd,t),t=r.path.unixify(t)),this._settings.markDirectories&&e.dirent.isDirectory()&&(t+="/"),this._settings.objectMode?Object.assign(Object.assign({},e),{path:t}):t}}},5497:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(5622),i=n(4675),s=n(5681)
t.default=class{constructor(e){this._settings=e,this._fsStatSettings=new i.Settings({followSymbolicLink:this._settings.followSymbolicLinks,fs:this._settings.fs,throwErrorOnBrokenSymbolicLink:this._settings.followSymbolicLinks})}_getFullEntryPath(e){return r.resolve(this._settings.cwd,e)}_makeEntry(e,t){const n={name:t,path:t,dirent:s.fs.createDirentFromStats(t,e)}
return this._settings.stats&&(n.stats=e),n}_isFatalError(e){return!s.errno.isEnoentCodeError(e)&&!this._settings.suppressErrors}}},8579:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(2413),i=n(4675),s=n(8987),o=n(5497)
class a extends o.default{constructor(){super(...arguments),this._walkStream=s.walkStream,this._stat=i.stat}dynamic(e,t){return this._walkStream(e,t)}static(e,t){const n=e.map(this._getFullEntryPath,this),i=new r.PassThrough({objectMode:!0})
i._write=(r,s,o)=>this._getEntry(n[r],e[r],t).then(e=>{null!==e&&t.entryFilter(e)&&i.push(e),r===n.length-1&&i.end(),o()}).catch(o)
for(let e=0;e<n.length;e++)i.write(e)
return i}_getEntry(e,t,n){return this._getStat(e).then(e=>this._makeEntry(e,t)).catch(e=>{if(n.errorFilter(e))return null
throw e})}_getStat(e){return new Promise((t,n)=>{this._stat(e,this._fsStatSettings,(e,r)=>null===e?t(r):n(e))})}}t.default=a},8326:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(4675),i=n(8987),s=n(5497)
class o extends s.default{constructor(){super(...arguments),this._walkSync=i.walkSync,this._statSync=r.statSync}dynamic(e,t){return this._walkSync(e,t)}static(e,t){const n=[]
for(const r of e){const e=this._getFullEntryPath(r),i=this._getEntry(e,r,t)
null!==i&&t.entryFilter(i)&&n.push(i)}return n}_getEntry(e,t,n){try{const n=this._getStat(e)
return this._makeEntry(n,t)}catch(e){if(n.errorFilter(e))return null
throw e}}_getStat(e){return this._statSync(e,this._fsStatSettings)}}t.default=o},4883:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_FILE_SYSTEM_ADAPTER=void 0
const r=n(5747),i=n(2087).cpus().length
t.DEFAULT_FILE_SYSTEM_ADAPTER={lstat:r.lstat,lstatSync:r.lstatSync,stat:r.stat,statSync:r.statSync,readdir:r.readdir,readdirSync:r.readdirSync}
t.default=class{constructor(e={}){this._options=e,this.absolute=this._getValue(this._options.absolute,!1),this.baseNameMatch=this._getValue(this._options.baseNameMatch,!1),this.braceExpansion=this._getValue(this._options.braceExpansion,!0),this.caseSensitiveMatch=this._getValue(this._options.caseSensitiveMatch,!0),this.concurrency=this._getValue(this._options.concurrency,i),this.cwd=this._getValue(this._options.cwd,process.cwd()),this.deep=this._getValue(this._options.deep,1/0),this.dot=this._getValue(this._options.dot,!1),this.extglob=this._getValue(this._options.extglob,!0),this.followSymbolicLinks=this._getValue(this._options.followSymbolicLinks,!0),this.fs=this._getFileSystemMethods(this._options.fs),this.globstar=this._getValue(this._options.globstar,!0),this.ignore=this._getValue(this._options.ignore,[]),this.markDirectories=this._getValue(this._options.markDirectories,!1),this.objectMode=this._getValue(this._options.objectMode,!1),this.onlyDirectories=this._getValue(this._options.onlyDirectories,!1),this.onlyFiles=this._getValue(this._options.onlyFiles,!0),this.stats=this._getValue(this._options.stats,!1),this.suppressErrors=this._getValue(this._options.suppressErrors,!1),this.throwErrorOnBrokenSymbolicLink=this._getValue(this._options.throwErrorOnBrokenSymbolicLink,!1),this.unique=this._getValue(this._options.unique,!0),this.onlyDirectories&&(this.onlyFiles=!1),this.stats&&(this.objectMode=!0)}_getValue(e,t){return void 0===e?t:e}_getFileSystemMethods(e={}){return Object.assign(Object.assign({},t.DEFAULT_FILE_SYSTEM_ADAPTER),e)}}},4810:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.splitWhen=t.flatten=void 0,t.flatten=function(e){return e.reduce((e,t)=>[].concat(e,t),[])},t.splitWhen=function(e,t){const n=[[]]
let r=0
for(const i of e)t(i)?(r++,n[r]=[]):n[r].push(i)
return n}},372:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.isEnoentCodeError=void 0,t.isEnoentCodeError=function(e){return"ENOENT"===e.code}},4626:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.createDirentFromStats=void 0
class n{constructor(e,t){this.name=e,this.isBlockDevice=t.isBlockDevice.bind(t),this.isCharacterDevice=t.isCharacterDevice.bind(t),this.isDirectory=t.isDirectory.bind(t),this.isFIFO=t.isFIFO.bind(t),this.isFile=t.isFile.bind(t),this.isSocket=t.isSocket.bind(t),this.isSymbolicLink=t.isSymbolicLink.bind(t)}}t.createDirentFromStats=function(e,t){return new n(e,t)}},5681:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.string=t.stream=t.pattern=t.path=t.fs=t.errno=t.array=void 0
const r=n(4810)
t.array=r
const i=n(372)
t.errno=i
const s=n(4626)
t.fs=s
const o=n(7159)
t.path=o
const a=n(2786)
t.pattern=a
const u=n(9929)
t.stream=u
const c=n(3016)
t.string=c},7159:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.removeLeadingDotSegment=t.escape=t.makeAbsolute=t.unixify=void 0
const r=n(5622),i=/(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g
t.unixify=function(e){return e.replace(/\\/g,"/")},t.makeAbsolute=function(e,t){return r.resolve(e,t)},t.escape=function(e){return e.replace(i,"\\$2")},t.removeLeadingDotSegment=function(e){if("."===e.charAt(0)){const t=e.charAt(1)
if("/"===t||"\\"===t)return e.slice(2)}return e}},2786:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.matchAny=t.convertPatternsToRe=t.makeRe=t.getPatternParts=t.expandBraceExpansion=t.expandPatternsWithBraceExpansion=t.isAffectDepthOfReadingPattern=t.endsWithSlashGlobStar=t.hasGlobStar=t.getBaseDirectory=t.getPositivePatterns=t.getNegativePatterns=t.isPositivePattern=t.isNegativePattern=t.convertToNegativePattern=t.convertToPositivePattern=t.isDynamicPattern=t.isStaticPattern=void 0
const r=n(5622),i=n(3194),s=n(8751),o=n(9264),a=/[*?]|^!/,u=/\[.*]/,c=/(?:^|[^!*+?@])\(.*\|.*\)/,l=/[!*+?@]\(.*\)/,h=/{.*(?:,|\.\.).*}/
function p(e,t={}){return!d(e,t)}function d(e,t={}){return""!==e&&(!(!1!==t.caseSensitiveMatch&&!e.includes("\\"))||(!!(a.test(e)||u.test(e)||c.test(e))||(!(!1===t.extglob||!l.test(e))||!(!1===t.braceExpansion||!h.test(e)))))}function f(e){return e.startsWith("!")&&"("!==e[1]}function m(e){return!f(e)}function y(e){return e.endsWith("/**")}function g(e){return s.braces(e,{expand:!0,nodupes:!0})}function v(e,t){return s.makeRe(e,t)}t.isStaticPattern=p,t.isDynamicPattern=d,t.convertToPositivePattern=function(e){return f(e)?e.slice(1):e},t.convertToNegativePattern=function(e){return"!"+e},t.isNegativePattern=f,t.isPositivePattern=m,t.getNegativePatterns=function(e){return e.filter(f)},t.getPositivePatterns=function(e){return e.filter(m)},t.getBaseDirectory=function(e){return i(e,{flipBackslashes:!1})},t.hasGlobStar=function(e){return e.includes("**")},t.endsWithSlashGlobStar=y,t.isAffectDepthOfReadingPattern=function(e){const t=r.basename(e)
return y(e)||p(t)},t.expandPatternsWithBraceExpansion=function(e){return e.reduce((e,t)=>e.concat(g(t)),[])},t.expandBraceExpansion=g,t.getPatternParts=function(e,t){let{parts:n}=o.scan(e,Object.assign(Object.assign({},t),{parts:!0}))
return 0===n.length&&(n=[e]),n[0].startsWith("/")&&(n[0]=n[0].slice(1),n.unshift("")),n},t.makeRe=v,t.convertPatternsToRe=function(e,t){return e.map(e=>v(e,t))},t.matchAny=function(e,t){return t.some(t=>t.test(e))}},9929:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.merge=void 0
const r=n(3428)
function i(e){e.forEach(e=>e.emit("close"))}t.merge=function(e){const t=r(e)
return e.forEach(e=>{e.once("error",e=>t.emit("error",e))}),t.once("close",()=>i(e)),t.once("end",()=>i(e)),t}},3016:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.isEmpty=t.isString=void 0,t.isString=function(e){return"string"==typeof e},t.isEmpty=function(e){return""===e}},1672:(e,t,n)=>{"use strict"
var r=n(1046)
function i(){}function s(){this.value=null,this.callback=i,this.next=null,this.release=i,this.context=null
var e=this
this.worked=function(t,n){var r=e.callback
e.value=null,e.callback=i,r.call(e.context,t,n),e.release(e)}}e.exports=function(e,t,n){"function"==typeof e&&(n=t,t=e,e=null)
var o=r(s),a=null,u=null,c=0,l={push:function(n,r){var s=o.get()
s.context=e,s.release=h,s.value=n,s.callback=r||i,c===l.concurrency||l.paused?u?(u.next=s,u=s):(a=s,u=s,l.saturated()):(c++,t.call(e,s.value,s.worked))},drain:i,saturated:i,pause:function(){l.paused=!0},paused:!1,concurrency:n,running:function(){return c},resume:function(){if(!l.paused)return
l.paused=!1
for(var e=0;e<l.concurrency;e++)c++,h()},idle:function(){return 0===c&&0===l.length()},length:function(){var e=a,t=0
for(;e;)e=e.next,t++
return t},getQueue:function(){var e=a,t=[]
for(;e;)t.push(e.value),e=e.next
return t},unshift:function(n,r){var s=o.get()
s.context=e,s.release=h,s.value=n,s.callback=r||i,c===l.concurrency||l.paused?a?(s.next=a,a=s):(a=s,u=s,l.saturated()):(c++,t.call(e,s.value,s.worked))},empty:i,kill:function(){a=null,u=null,l.drain=i},killAndDrain:function(){a=null,u=null,l.drain(),l.drain=i}}
return l
function h(n){n&&o.release(n)
var r=a
r?l.paused?c--:(u===a&&(u=null),a=r.next,r.next=null,t.call(e,r.value,r.worked),null===u&&l.empty()):0==--c&&l.drain()}}},824:(e,t,n)=>{"use strict"
const r=n(1669),i=n(9466),s=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),o=e=>"number"==typeof e||"string"==typeof e&&""!==e,a=e=>Number.isInteger(+e),u=e=>{let t=""+e,n=-1
if("-"===t[0]&&(t=t.slice(1)),"0"===t)return!1
for(;"0"===t[++n];);return n>0},c=(e,t,n)=>{if(t>0){let n="-"===e[0]?"-":""
n&&(e=e.slice(1)),e=n+e.padStart(n?t-1:t,"0")}return!1===n?String(e):e},l=(e,t)=>{let n="-"===e[0]?"-":""
for(n&&(e=e.slice(1),t--);e.length<t;)e="0"+e
return n?"-"+e:e},h=(e,t,n,r)=>{if(n)return i(e,t,{wrap:!1,...r})
let s=String.fromCharCode(e)
return e===t?s:`[${s}-${String.fromCharCode(t)}]`},p=(e,t,n)=>{if(Array.isArray(e)){let t=!0===n.wrap,r=n.capture?"":"?:"
return t?`(${r}${e.join("|")})`:e.join("|")}return i(e,t,n)},d=(...e)=>new RangeError("Invalid range arguments: "+r.inspect(...e)),f=(e,t,n)=>{if(!0===n.strictRanges)throw d([e,t])
return[]},m=(e,t,n=1,r={})=>{let i=Number(e),s=Number(t)
if(!Number.isInteger(i)||!Number.isInteger(s)){if(!0===r.strictRanges)throw d([e,t])
return[]}0===i&&(i=0),0===s&&(s=0)
let o=i>s,a=String(e),f=String(t),m=String(n)
n=Math.max(Math.abs(n),1)
let y=u(a)||u(f)||u(m),g=y?Math.max(a.length,f.length,m.length):0,v=!1===y&&!1===((e,t,n)=>"string"==typeof e||"string"==typeof t||!0===n.stringify)(e,t,r),x=r.transform||(e=>t=>!0===e?Number(t):String(t))(v)
if(r.toRegex&&1===n)return h(l(e,g),l(t,g),!0,r)
let _={negatives:[],positives:[]},b=[],E=0
for(;o?i>=s:i<=s;)!0===r.toRegex&&n>1?_[(D=i)<0?"negatives":"positives"].push(Math.abs(D)):b.push(c(x(i,E),g,v)),i=o?i-n:i+n,E++
var D
return!0===r.toRegex?n>1?((e,t)=>{e.negatives.sort((e,t)=>e<t?-1:e>t?1:0),e.positives.sort((e,t)=>e<t?-1:e>t?1:0)
let n,r=t.capture?"":"?:",i="",s=""
return e.positives.length&&(i=e.positives.join("|")),e.negatives.length&&(s=`-(${r}${e.negatives.join("|")})`),n=i&&s?`${i}|${s}`:i||s,t.wrap?`(${r}${n})`:n})(_,r):p(b,null,{wrap:!1,...r}):b},y=(e,t,n,r={})=>{if(null==t&&o(e))return[e]
if(!o(e)||!o(t))return f(e,t,r)
if("function"==typeof n)return y(e,t,1,{transform:n})
if(s(n))return y(e,t,0,n)
let i={...r}
return!0===i.capture&&(i.wrap=!0),n=n||i.step||1,a(n)?a(e)&&a(t)?m(e,t,n,i):((e,t,n=1,r={})=>{if(!a(e)&&e.length>1||!a(t)&&t.length>1)return f(e,t,r)
let i=r.transform||(e=>String.fromCharCode(e)),s=(""+e).charCodeAt(0),o=(""+t).charCodeAt(0),u=s>o,c=Math.min(s,o),l=Math.max(s,o)
if(r.toRegex&&1===n)return h(c,l,!1,r)
let d=[],m=0
for(;u?s>=o:s<=o;)d.push(i(s,m)),s=u?s-n:s+n,m++
return!0===r.toRegex?p(d,null,{wrap:!1,options:r}):d})(e,t,Math.max(Math.abs(n),1),i):null==n||s(n)?y(e,t,1,n):((e,t)=>{if(!0===t.strictRanges)throw new TypeError(`Expected step "${e}" to be a number`)
return[]})(n,i)}
e.exports=y},3194:(e,t,n)=>{"use strict"
var r=n(9388),i=n(5622).posix.dirname,s="win32"===n(2087).platform(),o=/\\/g,a=/[\{\[].*[\/]*.*[\}\]]$/,u=/(^|[^\\])([\{\[]|\([^\)]+$)/,c=/\\([\!\*\?\|\[\]\(\)\{\}])/g
e.exports=function(e,t){Object.assign({flipBackslashes:!0},t).flipBackslashes&&s&&e.indexOf("/")<0&&(e=e.replace(o,"/")),a.test(e)&&(e+="/"),e+="a"
do{e=i(e)}while(r(e)||u.test(e))
return e.replace(c,"$1")}},3113:e=>{e.exports=function(e){if("string"!=typeof e||""===e)return!1
for(var t;t=/(\\).|([@?!+*]\(.*\))/g.exec(e);){if(t[2])return!0
e=e.slice(t.index+t[0].length)}return!1}},9388:(e,t,n)=>{var r=n(3113),i={"{":"}","(":")","[":"]"},s=/\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/,o=/\\(.)|(^!|[*?{}()[\]]|\(\?)/
e.exports=function(e,t){if("string"!=typeof e||""===e)return!1
if(r(e))return!0
var n,a=s
for(t&&!1===t.strict&&(a=o);n=a.exec(e);){if(n[2])return!0
var u=n.index+n[0].length,c=n[1],l=c?i[c]:null
if(c&&l){var h=e.indexOf(l,u);-1!==h&&(u=h+1)}e=e.slice(u)}return!1}},3329:(e,t,n)=>{"use strict"
var r=n(8564)
e.exports=r},8564:(e,t,n)=>{"use strict"
var r=n(1561),i=n(8737)
function s(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}e.exports.Type=n(8356),e.exports.Schema=n(5407),e.exports.FAILSAFE_SCHEMA=n(4137),e.exports.JSON_SCHEMA=n(2917),e.exports.CORE_SCHEMA=n(8934),e.exports.DEFAULT_SAFE_SCHEMA=n(3852),e.exports.DEFAULT_FULL_SCHEMA=n(7621),e.exports.load=r.load,e.exports.loadAll=r.loadAll,e.exports.safeLoad=r.safeLoad,e.exports.safeLoadAll=r.safeLoadAll,e.exports.dump=i.dump,e.exports.safeDump=i.safeDump,e.exports.YAMLException=n(7862),e.exports.MINIMAL_SCHEMA=n(4137),e.exports.SAFE_SCHEMA=n(3852),e.exports.DEFAULT_SCHEMA=n(7621),e.exports.scan=s("scan"),e.exports.parse=s("parse"),e.exports.compose=s("compose"),e.exports.addConstructor=s("addConstructor")},6139:e=>{"use strict"
function t(e){return null==e}e.exports.isNothing=t,e.exports.isObject=function(e){return"object"==typeof e&&null!==e},e.exports.toArray=function(e){return Array.isArray(e)?e:t(e)?[]:[e]},e.exports.repeat=function(e,t){var n,r=""
for(n=0;n<t;n+=1)r+=e
return r},e.exports.isNegativeZero=function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},e.exports.extend=function(e,t){var n,r,i,s
if(t)for(n=0,r=(s=Object.keys(t)).length;n<r;n+=1)e[i=s[n]]=t[i]
return e}},8737:(e,t,n)=>{"use strict"
var r=n(6139),i=n(7862),s=n(7621),o=n(3852),a=Object.prototype.toString,u=Object.prototype.hasOwnProperty,c={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},l=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"]
function h(e){var t,n,s
if(t=e.toString(16).toUpperCase(),e<=255)n="x",s=2
else if(e<=65535)n="u",s=4
else{if(!(e<=4294967295))throw new i("code point within a string may not be greater than 0xFFFFFFFF")
n="U",s=8}return"\\"+n+r.repeat("0",s-t.length)+t}function p(e){this.schema=e.schema||s,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=r.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var n,r,i,s,o,a,c
if(null===t)return{}
for(n={},i=0,s=(r=Object.keys(t)).length;i<s;i+=1)o=r[i],a=String(t[o]),"!!"===o.slice(0,2)&&(o="tag:yaml.org,2002:"+o.slice(2)),(c=e.compiledTypeMap.fallback[o])&&u.call(c.styleAliases,a)&&(a=c.styleAliases[a]),n[o]=a
return n}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function d(e,t){for(var n,i=r.repeat(" ",t),s=0,o=-1,a="",u=e.length;s<u;)-1===(o=e.indexOf("\n",s))?(n=e.slice(s),s=u):(n=e.slice(s,o+1),s=o+1),n.length&&"\n"!==n&&(a+=i),a+=n
return a}function f(e,t){return"\n"+r.repeat(" ",e.indent*t)}function m(e){return 32===e||9===e}function y(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function g(e,t){return y(e)&&65279!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&58!==e&&(35!==e||t&&function(e){return y(e)&&!m(e)&&65279!==e&&13!==e&&10!==e}(t))}function v(e){return/^\n* /.test(e)}function x(e,t,n,r,i){var s,o,a,u,c=!1,l=!1,h=-1!==r,p=-1,d=y(u=e.charCodeAt(0))&&65279!==u&&!m(u)&&45!==u&&63!==u&&58!==u&&44!==u&&91!==u&&93!==u&&123!==u&&125!==u&&35!==u&&38!==u&&42!==u&&33!==u&&124!==u&&61!==u&&62!==u&&39!==u&&34!==u&&37!==u&&64!==u&&96!==u&&!m(e.charCodeAt(e.length-1))
if(t)for(s=0;s<e.length;s++){if(!y(o=e.charCodeAt(s)))return 5
a=s>0?e.charCodeAt(s-1):null,d=d&&g(o,a)}else{for(s=0;s<e.length;s++){if(10===(o=e.charCodeAt(s)))c=!0,h&&(l=l||s-p-1>r&&" "!==e[p+1],p=s)
else if(!y(o))return 5
a=s>0?e.charCodeAt(s-1):null,d=d&&g(o,a)}l=l||h&&s-p-1>r&&" "!==e[p+1]}return c||l?n>9&&v(e)?5:l?4:3:d&&!i(e)?1:2}function _(e,t,n,r){e.dump=function(){if(0===t.length)return"''"
if(!e.noCompatMode&&-1!==l.indexOf(t))return"'"+t+"'"
var s=e.indent*Math.max(1,n),o=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-s),a=r||e.flowLevel>-1&&n>=e.flowLevel
switch(x(t,a,e.indent,o,(function(t){return function(e,t){var n,r
for(n=0,r=e.implicitTypes.length;n<r;n+=1)if(e.implicitTypes[n].resolve(t))return!0
return!1}(e,t)}))){case 1:return t
case 2:return"'"+t.replace(/'/g,"''")+"'"
case 3:return"|"+b(t,e.indent)+E(d(t,s))
case 4:return">"+b(t,e.indent)+E(d(function(e,t){var n,r,i=/(\n+)([^\n]*)/g,s=(a=e.indexOf("\n"),a=-1!==a?a:e.length,i.lastIndex=a,D(e.slice(0,a),t)),o="\n"===e[0]||" "===e[0]
var a
for(;r=i.exec(e);){var u=r[1],c=r[2]
n=" "===c[0],s+=u+(o||n||""===c?"":"\n")+D(c,t),o=n}return s}(t,o),s))
case 5:return'"'+function(e){for(var t,n,r,i="",s=0;s<e.length;s++)(t=e.charCodeAt(s))>=55296&&t<=56319&&(n=e.charCodeAt(s+1))>=56320&&n<=57343?(i+=h(1024*(t-55296)+n-56320+65536),s++):i+=!(r=c[t])&&y(t)?e[s]:r||h(t)
return i}(t)+'"'
default:throw new i("impossible error: invalid scalar style")}}()}function b(e,t){var n=v(e)?String(t):"",r="\n"===e[e.length-1]
return n+(r&&("\n"===e[e.length-2]||"\n"===e)?"+":r?"":"-")+"\n"}function E(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function D(e,t){if(""===e||" "===e[0])return e
for(var n,r,i=/ [^ ]/g,s=0,o=0,a=0,u="";n=i.exec(e);)(a=n.index)-s>t&&(r=o>s?o:a,u+="\n"+e.slice(s,r),s=r+1),o=a
return u+="\n",e.length-s>t&&o>s?u+=e.slice(s,o)+"\n"+e.slice(o+1):u+=e.slice(s),u.slice(1)}function A(e,t,n){var r,s,o,c,l,h
for(o=0,c=(s=n?e.explicitTypes:e.implicitTypes).length;o<c;o+=1)if(((l=s[o]).instanceOf||l.predicate)&&(!l.instanceOf||"object"==typeof t&&t instanceof l.instanceOf)&&(!l.predicate||l.predicate(t))){if(e.tag=n?l.tag:"?",l.represent){if(h=e.styleMap[l.tag]||l.defaultStyle,"[object Function]"===a.call(l.represent))r=l.represent(t,h)
else{if(!u.call(l.represent,h))throw new i("!<"+l.tag+'> tag resolver accepts not "'+h+'" style')
r=l.represent[h](t,h)}e.dump=r}return!0}return!1}function S(e,t,n,r,s,o){e.tag=null,e.dump=n,A(e,n,!1)||A(e,n,!0)
var u=a.call(e.dump)
r&&(r=e.flowLevel<0||e.flowLevel>t)
var c,l,h="[object Object]"===u||"[object Array]"===u
if(h&&(l=-1!==(c=e.duplicates.indexOf(n))),(null!==e.tag&&"?"!==e.tag||l||2!==e.indent&&t>0)&&(s=!1),l&&e.usedDuplicates[c])e.dump="*ref_"+c
else{if(h&&l&&!e.usedDuplicates[c]&&(e.usedDuplicates[c]=!0),"[object Object]"===u)r&&0!==Object.keys(e.dump).length?(!function(e,t,n,r){var s,o,a,u,c,l,h="",p=e.tag,d=Object.keys(n)
if(!0===e.sortKeys)d.sort()
else if("function"==typeof e.sortKeys)d.sort(e.sortKeys)
else if(e.sortKeys)throw new i("sortKeys must be a boolean or a function")
for(s=0,o=d.length;s<o;s+=1)l="",r&&0===s||(l+=f(e,t)),u=n[a=d[s]],S(e,t+1,a,!0,!0,!0)&&((c=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?l+="?":l+="? "),l+=e.dump,c&&(l+=f(e,t)),S(e,t+1,u,!0,c)&&(e.dump&&10===e.dump.charCodeAt(0)?l+=":":l+=": ",h+=l+=e.dump))
e.tag=p,e.dump=h||"{}"}(e,t,e.dump,s),l&&(e.dump="&ref_"+c+e.dump)):(!function(e,t,n){var r,i,s,o,a,u="",c=e.tag,l=Object.keys(n)
for(r=0,i=l.length;r<i;r+=1)a="",0!==r&&(a+=", "),e.condenseFlow&&(a+='"'),o=n[s=l[r]],S(e,t,s,!1,!1)&&(e.dump.length>1024&&(a+="? "),a+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),S(e,t,o,!1,!1)&&(u+=a+=e.dump))
e.tag=c,e.dump="{"+u+"}"}(e,t,e.dump),l&&(e.dump="&ref_"+c+" "+e.dump))
else if("[object Array]"===u){var p=e.noArrayIndent&&t>0?t-1:t
r&&0!==e.dump.length?(!function(e,t,n,r){var i,s,o="",a=e.tag
for(i=0,s=n.length;i<s;i+=1)S(e,t+1,n[i],!0,!0)&&(r&&0===i||(o+=f(e,t)),e.dump&&10===e.dump.charCodeAt(0)?o+="-":o+="- ",o+=e.dump)
e.tag=a,e.dump=o||"[]"}(e,p,e.dump,s),l&&(e.dump="&ref_"+c+e.dump)):(!function(e,t,n){var r,i,s="",o=e.tag
for(r=0,i=n.length;r<i;r+=1)S(e,t,n[r],!1,!1)&&(0!==r&&(s+=","+(e.condenseFlow?"":" ")),s+=e.dump)
e.tag=o,e.dump="["+s+"]"}(e,p,e.dump),l&&(e.dump="&ref_"+c+" "+e.dump))}else{if("[object String]"!==u){if(e.skipInvalid)return!1
throw new i("unacceptable kind of an object to dump "+u)}"?"!==e.tag&&_(e,e.dump,t,o)}null!==e.tag&&"?"!==e.tag&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function C(e,t){var n,r,i=[],s=[]
for(function e(t,n,r){var i,s,o
if(null!==t&&"object"==typeof t)if(-1!==(s=n.indexOf(t)))-1===r.indexOf(s)&&r.push(s)
else if(n.push(t),Array.isArray(t))for(s=0,o=t.length;s<o;s+=1)e(t[s],n,r)
else for(s=0,o=(i=Object.keys(t)).length;s<o;s+=1)e(t[i[s]],n,r)}(e,i,s),n=0,r=s.length;n<r;n+=1)t.duplicates.push(i[s[n]])
t.usedDuplicates=new Array(r)}function w(e,t){var n=new p(t=t||{})
return n.noRefs||C(e,n),S(n,0,e,!0,!0)?n.dump+"\n":""}e.exports.dump=w,e.exports.safeDump=function(e,t){return w(e,r.extend({schema:o},t))}},7862:e=>{"use strict"
function t(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t.prototype.toString=function(e){var t=this.name+": "
return t+=this.reason||"(unknown reason)",!e&&this.mark&&(t+=" "+this.mark.toString()),t},e.exports=t},1561:(e,t,n)=>{"use strict"
var r=n(6139),i=n(7862),s=n(8152),o=n(3852),a=n(7621),u=Object.prototype.hasOwnProperty,c=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,l=/[\x85\u2028\u2029]/,h=/[,\[\]\{\}]/,p=/^(?:!|!!|![a-z\-]+!)$/i,d=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i
function f(e){return Object.prototype.toString.call(e)}function m(e){return 10===e||13===e}function y(e){return 9===e||32===e}function g(e){return 9===e||32===e||10===e||13===e}function v(e){return 44===e||91===e||93===e||123===e||125===e}function x(e){var t
return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function _(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function b(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var E=new Array(256),D=new Array(256),A=0;A<256;A++)E[A]=_(A)?1:0,D[A]=_(A)
function S(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||a,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function C(e,t){return new i(t,new s(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function w(e,t){throw C(e,t)}function k(e,t){e.onWarning&&e.onWarning.call(null,C(e,t))}var F={YAML:function(e,t,n){var r,i,s
null!==e.version&&w(e,"duplication of %YAML directive"),1!==n.length&&w(e,"YAML directive accepts exactly one argument"),null===(r=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&w(e,"ill-formed argument of the YAML directive"),i=parseInt(r[1],10),s=parseInt(r[2],10),1!==i&&w(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=s<2,1!==s&&2!==s&&k(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var r,i
2!==n.length&&w(e,"TAG directive accepts exactly two arguments"),r=n[0],i=n[1],p.test(r)||w(e,"ill-formed tag handle (first argument) of the TAG directive"),u.call(e.tagMap,r)&&w(e,'there is a previously declared suffix for "'+r+'" tag handle'),d.test(i)||w(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagMap[r]=i}}
function T(e,t,n,r){var i,s,o,a
if(t<n){if(a=e.input.slice(t,n),r)for(i=0,s=a.length;i<s;i+=1)9===(o=a.charCodeAt(i))||32<=o&&o<=1114111||w(e,"expected valid JSON character")
else c.test(a)&&w(e,"the stream contains non-printable characters")
e.result+=a}}function P(e,t,n,i){var s,o,a,c
for(r.isObject(n)||w(e,"cannot merge mappings; the provided source object is unacceptable"),a=0,c=(s=Object.keys(n)).length;a<c;a+=1)o=s[a],u.call(t,o)||(t[o]=n[o],i[o]=!0)}function R(e,t,n,r,i,s,o,a){var c,l
if(Array.isArray(i))for(c=0,l=(i=Array.prototype.slice.call(i)).length;c<l;c+=1)Array.isArray(i[c])&&w(e,"nested arrays are not supported inside keys"),"object"==typeof i&&"[object Object]"===f(i[c])&&(i[c]="[object Object]")
if("object"==typeof i&&"[object Object]"===f(i)&&(i="[object Object]"),i=String(i),null===t&&(t={}),"tag:yaml.org,2002:merge"===r)if(Array.isArray(s))for(c=0,l=s.length;c<l;c+=1)P(e,t,s[c],n)
else P(e,t,s,n)
else e.json||u.call(n,i)||!u.call(t,i)||(e.line=o||e.line,e.position=a||e.position,w(e,"duplicated mapping key")),t[i]=s,delete n[i]
return t}function B(e){var t
10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):w(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function O(e,t,n){for(var r=0,i=e.input.charCodeAt(e.position);0!==i;){for(;y(i);)i=e.input.charCodeAt(++e.position)
if(t&&35===i)do{i=e.input.charCodeAt(++e.position)}while(10!==i&&13!==i&&0!==i)
if(!m(i))break
for(B(e),i=e.input.charCodeAt(e.position),r++,e.lineIndent=0;32===i;)e.lineIndent++,i=e.input.charCodeAt(++e.position)}return-1!==n&&0!==r&&e.lineIndent<n&&k(e,"deficient indentation"),r}function I(e){var t,n=e.position
return!(45!==(t=e.input.charCodeAt(n))&&46!==t||t!==e.input.charCodeAt(n+1)||t!==e.input.charCodeAt(n+2)||(n+=3,0!==(t=e.input.charCodeAt(n))&&!g(t)))}function N(e,t){1===t?e.result+=" ":t>1&&(e.result+=r.repeat("\n",t-1))}function L(e,t){var n,r,i=e.tag,s=e.anchor,o=[],a=!1
for(null!==e.anchor&&(e.anchorMap[e.anchor]=o),r=e.input.charCodeAt(e.position);0!==r&&45===r&&g(e.input.charCodeAt(e.position+1));)if(a=!0,e.position++,O(e,!0,-1)&&e.lineIndent<=t)o.push(null),r=e.input.charCodeAt(e.position)
else if(n=e.line,U(e,t,3,!1,!0),o.push(e.result),O(e,!0,-1),r=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==r)w(e,"bad indentation of a sequence entry")
else if(e.lineIndent<t)break
return!!a&&(e.tag=i,e.anchor=s,e.kind="sequence",e.result=o,!0)}function M(e){var t,n,r,i,s=!1,o=!1
if(33!==(i=e.input.charCodeAt(e.position)))return!1
if(null!==e.tag&&w(e,"duplication of a tag property"),60===(i=e.input.charCodeAt(++e.position))?(s=!0,i=e.input.charCodeAt(++e.position)):33===i?(o=!0,n="!!",i=e.input.charCodeAt(++e.position)):n="!",t=e.position,s){do{i=e.input.charCodeAt(++e.position)}while(0!==i&&62!==i)
e.position<e.length?(r=e.input.slice(t,e.position),i=e.input.charCodeAt(++e.position)):w(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==i&&!g(i);)33===i&&(o?w(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),p.test(n)||w(e,"named tag handle cannot contain such characters"),o=!0,t=e.position+1)),i=e.input.charCodeAt(++e.position)
r=e.input.slice(t,e.position),h.test(r)&&w(e,"tag suffix cannot contain flow indicator characters")}return r&&!d.test(r)&&w(e,"tag name cannot contain such characters: "+r),s?e.tag=r:u.call(e.tagMap,n)?e.tag=e.tagMap[n]+r:"!"===n?e.tag="!"+r:"!!"===n?e.tag="tag:yaml.org,2002:"+r:w(e,'undeclared tag handle "'+n+'"'),!0}function j(e){var t,n
if(38!==(n=e.input.charCodeAt(e.position)))return!1
for(null!==e.anchor&&w(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!g(n)&&!v(n);)n=e.input.charCodeAt(++e.position)
return e.position===t&&w(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function U(e,t,n,i,s){var o,a,c,l,h,p,d,f,_=1,A=!1,S=!1
if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=a=c=4===n||3===n,i&&O(e,!0,-1)&&(A=!0,e.lineIndent>t?_=1:e.lineIndent===t?_=0:e.lineIndent<t&&(_=-1)),1===_)for(;M(e)||j(e);)O(e,!0,-1)?(A=!0,c=o,e.lineIndent>t?_=1:e.lineIndent===t?_=0:e.lineIndent<t&&(_=-1)):c=!1
if(c&&(c=A||s),1!==_&&4!==n||(d=1===n||2===n?t:t+1,f=e.position-e.lineStart,1===_?c&&(L(e,f)||function(e,t,n){var r,i,s,o,a,u=e.tag,c=e.anchor,l={},h={},p=null,d=null,f=null,m=!1,v=!1
for(null!==e.anchor&&(e.anchorMap[e.anchor]=l),a=e.input.charCodeAt(e.position);0!==a;){if(r=e.input.charCodeAt(e.position+1),s=e.line,o=e.position,63!==a&&58!==a||!g(r)){if(!U(e,n,2,!1,!0))break
if(e.line===s){for(a=e.input.charCodeAt(e.position);y(a);)a=e.input.charCodeAt(++e.position)
if(58===a)g(a=e.input.charCodeAt(++e.position))||w(e,"a whitespace character is expected after the key-value separator within a block mapping"),m&&(R(e,l,h,p,d,null),p=d=f=null),v=!0,m=!1,i=!1,p=e.tag,d=e.result
else{if(!v)return e.tag=u,e.anchor=c,!0
w(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return e.tag=u,e.anchor=c,!0
w(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===a?(m&&(R(e,l,h,p,d,null),p=d=f=null),v=!0,m=!0,i=!0):m?(m=!1,i=!0):w(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,a=r
if((e.line===s||e.lineIndent>t)&&(U(e,t,4,!0,i)&&(m?d=e.result:f=e.result),m||(R(e,l,h,p,d,f,s,o),p=d=f=null),O(e,!0,-1),a=e.input.charCodeAt(e.position)),e.lineIndent>t&&0!==a)w(e,"bad indentation of a mapping entry")
else if(e.lineIndent<t)break}return m&&R(e,l,h,p,d,null),v&&(e.tag=u,e.anchor=c,e.kind="mapping",e.result=l),v}(e,f,d))||function(e,t){var n,r,i,s,o,a,u,c,l,h,p=!0,d=e.tag,f=e.anchor,m={}
if(91===(h=e.input.charCodeAt(e.position)))i=93,a=!1,r=[]
else{if(123!==h)return!1
i=125,a=!0,r={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=r),h=e.input.charCodeAt(++e.position);0!==h;){if(O(e,!0,t),(h=e.input.charCodeAt(e.position))===i)return e.position++,e.tag=d,e.anchor=f,e.kind=a?"mapping":"sequence",e.result=r,!0
p||w(e,"missed comma between flow collection entries"),l=null,s=o=!1,63===h&&g(e.input.charCodeAt(e.position+1))&&(s=o=!0,e.position++,O(e,!0,t)),n=e.line,U(e,t,1,!1,!0),c=e.tag,u=e.result,O(e,!0,t),h=e.input.charCodeAt(e.position),!o&&e.line!==n||58!==h||(s=!0,h=e.input.charCodeAt(++e.position),O(e,!0,t),U(e,t,1,!1,!0),l=e.result),a?R(e,r,m,c,u,l):s?r.push(R(e,null,m,c,u,l)):r.push(u),O(e,!0,t),44===(h=e.input.charCodeAt(e.position))?(p=!0,h=e.input.charCodeAt(++e.position)):p=!1}w(e,"unexpected end of the stream within a flow collection")}(e,d)?S=!0:(a&&function(e,t){var n,i,s,o,a,u=1,c=!1,l=!1,h=t,p=0,d=!1
if(124===(o=e.input.charCodeAt(e.position)))i=!1
else{if(62!==o)return!1
i=!0}for(e.kind="scalar",e.result="";0!==o;)if(43===(o=e.input.charCodeAt(++e.position))||45===o)1===u?u=43===o?3:2:w(e,"repeat of a chomping mode identifier")
else{if(!((s=48<=(a=o)&&a<=57?a-48:-1)>=0))break
0===s?w(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?w(e,"repeat of an indentation width identifier"):(h=t+s-1,l=!0)}if(y(o)){do{o=e.input.charCodeAt(++e.position)}while(y(o))
if(35===o)do{o=e.input.charCodeAt(++e.position)}while(!m(o)&&0!==o)}for(;0!==o;){for(B(e),e.lineIndent=0,o=e.input.charCodeAt(e.position);(!l||e.lineIndent<h)&&32===o;)e.lineIndent++,o=e.input.charCodeAt(++e.position)
if(!l&&e.lineIndent>h&&(h=e.lineIndent),m(o))p++
else{if(e.lineIndent<h){3===u?e.result+=r.repeat("\n",c?1+p:p):1===u&&c&&(e.result+="\n")
break}for(i?y(o)?(d=!0,e.result+=r.repeat("\n",c?1+p:p)):d?(d=!1,e.result+=r.repeat("\n",p+1)):0===p?c&&(e.result+=" "):e.result+=r.repeat("\n",p):e.result+=r.repeat("\n",c?1+p:p),c=!0,l=!0,p=0,n=e.position;!m(o)&&0!==o;)o=e.input.charCodeAt(++e.position)
T(e,n,e.position,!1)}}return!0}(e,d)||function(e,t){var n,r,i
if(39!==(n=e.input.charCodeAt(e.position)))return!1
for(e.kind="scalar",e.result="",e.position++,r=i=e.position;0!==(n=e.input.charCodeAt(e.position));)if(39===n){if(T(e,r,e.position,!0),39!==(n=e.input.charCodeAt(++e.position)))return!0
r=e.position,e.position++,i=e.position}else m(n)?(T(e,r,i,!0),N(e,O(e,!1,t)),r=i=e.position):e.position===e.lineStart&&I(e)?w(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position)
w(e,"unexpected end of the stream within a single quoted scalar")}(e,d)||function(e,t){var n,r,i,s,o,a,u
if(34!==(a=e.input.charCodeAt(e.position)))return!1
for(e.kind="scalar",e.result="",e.position++,n=r=e.position;0!==(a=e.input.charCodeAt(e.position));){if(34===a)return T(e,n,e.position,!0),e.position++,!0
if(92===a){if(T(e,n,e.position,!0),m(a=e.input.charCodeAt(++e.position)))O(e,!1,t)
else if(a<256&&E[a])e.result+=D[a],e.position++
else if((o=120===(u=a)?2:117===u?4:85===u?8:0)>0){for(i=o,s=0;i>0;i--)(o=x(a=e.input.charCodeAt(++e.position)))>=0?s=(s<<4)+o:w(e,"expected hexadecimal character")
e.result+=b(s),e.position++}else w(e,"unknown escape sequence")
n=r=e.position}else m(a)?(T(e,n,r,!0),N(e,O(e,!1,t)),n=r=e.position):e.position===e.lineStart&&I(e)?w(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}w(e,"unexpected end of the stream within a double quoted scalar")}(e,d)?S=!0:!function(e){var t,n,r
if(42!==(r=e.input.charCodeAt(e.position)))return!1
for(r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!g(r)&&!v(r);)r=e.input.charCodeAt(++e.position)
return e.position===t&&w(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),e.anchorMap.hasOwnProperty(n)||w(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],O(e,!0,-1),!0}(e)?function(e,t,n){var r,i,s,o,a,u,c,l,h=e.kind,p=e.result
if(g(l=e.input.charCodeAt(e.position))||v(l)||35===l||38===l||42===l||33===l||124===l||62===l||39===l||34===l||37===l||64===l||96===l)return!1
if((63===l||45===l)&&(g(r=e.input.charCodeAt(e.position+1))||n&&v(r)))return!1
for(e.kind="scalar",e.result="",i=s=e.position,o=!1;0!==l;){if(58===l){if(g(r=e.input.charCodeAt(e.position+1))||n&&v(r))break}else if(35===l){if(g(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&I(e)||n&&v(l))break
if(m(l)){if(a=e.line,u=e.lineStart,c=e.lineIndent,O(e,!1,-1),e.lineIndent>=t){o=!0,l=e.input.charCodeAt(e.position)
continue}e.position=s,e.line=a,e.lineStart=u,e.lineIndent=c
break}}o&&(T(e,i,s,!1),N(e,e.line-a),i=s=e.position,o=!1),y(l)||(s=e.position+1),l=e.input.charCodeAt(++e.position)}return T(e,i,s,!1),!!e.result||(e.kind=h,e.result=p,!1)}(e,d,1===n)&&(S=!0,null===e.tag&&(e.tag="?")):(S=!0,null===e.tag&&null===e.anchor||w(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===_&&(S=c&&L(e,f))),null!==e.tag&&"!"!==e.tag)if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&w(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,h=e.implicitTypes.length;l<h;l+=1)if((p=e.implicitTypes[l]).resolve(e.result)){e.result=p.construct(e.result),e.tag=p.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)
break}}else u.call(e.typeMap[e.kind||"fallback"],e.tag)?(p=e.typeMap[e.kind||"fallback"][e.tag],null!==e.result&&p.kind!==e.kind&&w(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+p.kind+'", not "'+e.kind+'"'),p.resolve(e.result)?(e.result=p.construct(e.result),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):w(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):w(e,"unknown tag !<"+e.tag+">")
return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||S}function H(e){var t,n,r,i,s=e.position,o=!1
for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};0!==(i=e.input.charCodeAt(e.position))&&(O(e,!0,-1),i=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==i));){for(o=!0,i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!g(i);)i=e.input.charCodeAt(++e.position)
for(r=[],(n=e.input.slice(t,e.position)).length<1&&w(e,"directive name must not be less than one character in length");0!==i;){for(;y(i);)i=e.input.charCodeAt(++e.position)
if(35===i){do{i=e.input.charCodeAt(++e.position)}while(0!==i&&!m(i))
break}if(m(i))break
for(t=e.position;0!==i&&!g(i);)i=e.input.charCodeAt(++e.position)
r.push(e.input.slice(t,e.position))}0!==i&&B(e),u.call(F,n)?F[n](e,n,r):k(e,'unknown document directive "'+n+'"')}O(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,O(e,!0,-1)):o&&w(e,"directives end mark is expected"),U(e,e.lineIndent-1,4,!1,!0),O(e,!0,-1),e.checkLineBreaks&&l.test(e.input.slice(s,e.position))&&k(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&I(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,O(e,!0,-1)):e.position<e.length-1&&w(e,"end of the stream or a document separator is expected")}function z(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)))
var n=new S(e,t),r=e.indexOf("\0")
for(-1!==r&&(n.position=r,w(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1
for(;n.position<n.length-1;)H(n)
return n.documents}function X(e,t,n){null!==t&&"object"==typeof t&&void 0===n&&(n=t,t=null)
var r=z(e,n)
if("function"!=typeof t)return r
for(var i=0,s=r.length;i<s;i+=1)t(r[i])}function q(e,t){var n=z(e,t)
if(0!==n.length){if(1===n.length)return n[0]
throw new i("expected a single document in the stream, but found more")}}e.exports.loadAll=X,e.exports.load=q,e.exports.safeLoadAll=function(e,t,n){return"object"==typeof t&&null!==t&&void 0===n&&(n=t,t=null),X(e,t,r.extend({schema:o},n))},e.exports.safeLoad=function(e,t){return q(e,r.extend({schema:o},t))}},8152:(e,t,n)=>{"use strict"
var r=n(6139)
function i(e,t,n,r,i){this.name=e,this.buffer=t,this.position=n,this.line=r,this.column=i}i.prototype.getSnippet=function(e,t){var n,i,s,o,a
if(!this.buffer)return null
for(e=e||4,t=t||75,n="",i=this.position;i>0&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i-1));)if(i-=1,this.position-i>t/2-1){n=" ... ",i+=5
break}for(s="",o=this.position;o<this.buffer.length&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(o));)if((o+=1)-this.position>t/2-1){s=" ... ",o-=5
break}return a=this.buffer.slice(i,o),r.repeat(" ",e)+n+a+s+"\n"+r.repeat(" ",e+this.position-i+n.length)+"^"},i.prototype.toString=function(e){var t,n=""
return this.name&&(n+='in "'+this.name+'" '),n+="at line "+(this.line+1)+", column "+(this.column+1),e||(t=this.getSnippet())&&(n+=":\n"+t),n},e.exports=i},5407:(e,t,n)=>{"use strict"
var r=n(6139),i=n(7862),s=n(8356)
function o(e,t,n){var r=[]
return e.include.forEach((function(e){n=o(e,t,n)})),e[t].forEach((function(e){n.forEach((function(t,n){t.tag===e.tag&&t.kind===e.kind&&r.push(n)})),n.push(e)})),n.filter((function(e,t){return-1===r.indexOf(t)}))}function a(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach((function(e){if(e.loadKind&&"scalar"!==e.loadKind)throw new i("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")})),this.compiledImplicit=o(this,"implicit",[]),this.compiledExplicit=o(this,"explicit",[]),this.compiledTypeMap=function(){var e,t,n={scalar:{},sequence:{},mapping:{},fallback:{}}
function r(e){n[e.kind][e.tag]=n.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(r)
return n}(this.compiledImplicit,this.compiledExplicit)}a.DEFAULT=null,a.create=function(){var e,t
switch(arguments.length){case 1:e=a.DEFAULT,t=arguments[0]
break
case 2:e=arguments[0],t=arguments[1]
break
default:throw new i("Wrong number of arguments for Schema.create function")}if(e=r.toArray(e),t=r.toArray(t),!e.every((function(e){return e instanceof a})))throw new i("Specified list of super schemas (or a single Schema object) contains a non-Schema object.")
if(!t.every((function(e){return e instanceof s})))throw new i("Specified list of YAML types (or a single Type object) contains a non-Type object.")
return new a({include:e,explicit:t})},e.exports=a},8934:(e,t,n)=>{"use strict"
var r=n(5407)
e.exports=new r({include:[n(2917)]})},7621:(e,t,n)=>{"use strict"
var r=n(5407)
e.exports=r.DEFAULT=new r({include:[n(3852)],explicit:[n(7963),n(8156),n(3627)]})},3852:(e,t,n)=>{"use strict"
var r=n(5407)
e.exports=new r({include:[n(8934)],implicit:[n(90),n(1660)],explicit:[n(6333),n(4164),n(3453),n(9060)]})},4137:(e,t,n)=>{"use strict"
var r=n(5407)
e.exports=new r({explicit:[n(9313),n(8178),n(7764)]})},2917:(e,t,n)=>{"use strict"
var r=n(5407)
e.exports=new r({include:[n(4137)],implicit:[n(5409),n(2772),n(4944),n(2114)]})},8356:(e,t,n)=>{"use strict"
var r=n(7862),i=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],s=["scalar","sequence","mapping"]
e.exports=function(e,t){var n,o
if(t=t||{},Object.keys(t).forEach((function(t){if(-1===i.indexOf(t))throw new r('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.defaultStyle=t.defaultStyle||null,this.styleAliases=(n=t.styleAliases||null,o={},null!==n&&Object.keys(n).forEach((function(e){n[e].forEach((function(t){o[String(t)]=e}))})),o),-1===s.indexOf(this.kind))throw new r('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}},6333:(e,t,n)=>{"use strict"
var r
try{r=n(4293).Buffer}catch(e){}var i=n(8356),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"
e.exports=new i("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1
var t,n,r=0,i=e.length,o=s
for(n=0;n<i;n++)if(!((t=o.indexOf(e.charAt(n)))>64)){if(t<0)return!1
r+=6}return r%8==0},construct:function(e){var t,n,i=e.replace(/[\r\n=]/g,""),o=i.length,a=s,u=0,c=[]
for(t=0;t<o;t++)t%4==0&&t&&(c.push(u>>16&255),c.push(u>>8&255),c.push(255&u)),u=u<<6|a.indexOf(i.charAt(t))
return 0===(n=o%4*6)?(c.push(u>>16&255),c.push(u>>8&255),c.push(255&u)):18===n?(c.push(u>>10&255),c.push(u>>2&255)):12===n&&c.push(u>>4&255),r?r.from?r.from(c):new r(c):c},predicate:function(e){return r&&r.isBuffer(e)},represent:function(e){var t,n,r="",i=0,o=e.length,a=s
for(t=0;t<o;t++)t%3==0&&t&&(r+=a[i>>18&63],r+=a[i>>12&63],r+=a[i>>6&63],r+=a[63&i]),i=(i<<8)+e[t]
return 0===(n=o%3)?(r+=a[i>>18&63],r+=a[i>>12&63],r+=a[i>>6&63],r+=a[63&i]):2===n?(r+=a[i>>10&63],r+=a[i>>4&63],r+=a[i<<2&63],r+=a[64]):1===n&&(r+=a[i>>2&63],r+=a[i<<4&63],r+=a[64],r+=a[64]),r}})},2772:(e,t,n)=>{"use strict"
var r=n(8356)
e.exports=new r("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1
var t=e.length
return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"})},2114:(e,t,n)=>{"use strict"
var r=n(6139),i=n(8356),s=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$")
var o=/^[-+]?[0-9]+e/
e.exports=new i("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!s.test(e)||"_"===e[e.length-1])},construct:function(e){var t,n,r,i
return n="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,i=[],"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:t.indexOf(":")>=0?(t.split(":").forEach((function(e){i.unshift(parseFloat(e,10))})),t=0,r=1,i.forEach((function(e){t+=e*r,r*=60})),n*t):n*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||r.isNegativeZero(e))},represent:function(e,t){var n
if(isNaN(e))switch(t){case"lowercase":return".nan"
case"uppercase":return".NAN"
case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf"
case"uppercase":return".INF"
case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf"
case"uppercase":return"-.INF"
case"camelcase":return"-.Inf"}else if(r.isNegativeZero(e))return"-0.0"
return n=e.toString(10),o.test(n)?n.replace("e",".e"):n},defaultStyle:"lowercase"})},4944:(e,t,n)=>{"use strict"
var r=n(6139),i=n(8356)
function s(e){return 48<=e&&e<=55}function o(e){return 48<=e&&e<=57}e.exports=new i("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1
var t,n,r=e.length,i=0,a=!1
if(!r)return!1
if("-"!==(t=e[i])&&"+"!==t||(t=e[++i]),"0"===t){if(i+1===r)return!0
if("b"===(t=e[++i])){for(i++;i<r;i++)if("_"!==(t=e[i])){if("0"!==t&&"1"!==t)return!1
a=!0}return a&&"_"!==t}if("x"===t){for(i++;i<r;i++)if("_"!==(t=e[i])){if(!(48<=(n=e.charCodeAt(i))&&n<=57||65<=n&&n<=70||97<=n&&n<=102))return!1
a=!0}return a&&"_"!==t}for(;i<r;i++)if("_"!==(t=e[i])){if(!s(e.charCodeAt(i)))return!1
a=!0}return a&&"_"!==t}if("_"===t)return!1
for(;i<r;i++)if("_"!==(t=e[i])){if(":"===t)break
if(!o(e.charCodeAt(i)))return!1
a=!0}return!(!a||"_"===t)&&(":"!==t||/^(:[0-5]?[0-9])+$/.test(e.slice(i)))},construct:function(e){var t,n,r=e,i=1,s=[]
return-1!==r.indexOf("_")&&(r=r.replace(/_/g,"")),"-"!==(t=r[0])&&"+"!==t||("-"===t&&(i=-1),t=(r=r.slice(1))[0]),"0"===r?0:"0"===t?"b"===r[1]?i*parseInt(r.slice(2),2):"x"===r[1]?i*parseInt(r,16):i*parseInt(r,8):-1!==r.indexOf(":")?(r.split(":").forEach((function(e){s.unshift(parseInt(e,10))})),r=0,n=1,s.forEach((function(e){r+=e*n,n*=60})),i*r):i*parseInt(r,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!r.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})},3627:(e,t,n)=>{"use strict"
var r
try{r=n(2888)}catch(e){"undefined"!=typeof window&&(r=window.esprima)}var i=n(8356)
e.exports=new i("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:function(e){if(null===e)return!1
try{var t="("+e+")",n=r.parse(t,{range:!0})
return"Program"===n.type&&1===n.body.length&&"ExpressionStatement"===n.body[0].type&&("ArrowFunctionExpression"===n.body[0].expression.type||"FunctionExpression"===n.body[0].expression.type)}catch(e){return!1}},construct:function(e){var t,n="("+e+")",i=r.parse(n,{range:!0}),s=[]
if("Program"!==i.type||1!==i.body.length||"ExpressionStatement"!==i.body[0].type||"ArrowFunctionExpression"!==i.body[0].expression.type&&"FunctionExpression"!==i.body[0].expression.type)throw new Error("Failed to resolve function")
return i.body[0].expression.params.forEach((function(e){s.push(e.name)})),t=i.body[0].expression.body.range,"BlockStatement"===i.body[0].expression.body.type?new Function(s,n.slice(t[0]+1,t[1]-1)):new Function(s,"return "+n.slice(t[0],t[1]))},predicate:function(e){return"[object Function]"===Object.prototype.toString.call(e)},represent:function(e){return e.toString()}})},8156:(e,t,n)=>{"use strict"
var r=n(8356)
e.exports=new r("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:function(e){if(null===e)return!1
if(0===e.length)return!1
var t=e,n=/\/([gim]*)$/.exec(e),r=""
if("/"===t[0]){if(n&&(r=n[1]),r.length>3)return!1
if("/"!==t[t.length-r.length-1])return!1}return!0},construct:function(e){var t=e,n=/\/([gim]*)$/.exec(e),r=""
return"/"===t[0]&&(n&&(r=n[1]),t=t.slice(1,t.length-r.length-1)),new RegExp(t,r)},predicate:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},represent:function(e){var t="/"+e.source+"/"
return e.global&&(t+="g"),e.multiline&&(t+="m"),e.ignoreCase&&(t+="i"),t}})},7963:(e,t,n)=>{"use strict"
var r=n(8356)
e.exports=new r("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:function(){return!0},construct:function(){},predicate:function(e){return void 0===e},represent:function(){return""}})},7764:(e,t,n)=>{"use strict"
var r=n(8356)
e.exports=new r("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})},1660:(e,t,n)=>{"use strict"
var r=n(8356)
e.exports=new r("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}})},5409:(e,t,n)=>{"use strict"
var r=n(8356)
e.exports=new r("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0
var t=e.length
return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"})},4164:(e,t,n)=>{"use strict"
var r=n(8356),i=Object.prototype.hasOwnProperty,s=Object.prototype.toString
e.exports=new r("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0
var t,n,r,o,a,u=[],c=e
for(t=0,n=c.length;t<n;t+=1){if(r=c[t],a=!1,"[object Object]"!==s.call(r))return!1
for(o in r)if(i.call(r,o)){if(a)return!1
a=!0}if(!a)return!1
if(-1!==u.indexOf(o))return!1
u.push(o)}return!0},construct:function(e){return null!==e?e:[]}})},3453:(e,t,n)=>{"use strict"
var r=n(8356),i=Object.prototype.toString
e.exports=new r("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0
var t,n,r,s,o,a=e
for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(r=a[t],"[object Object]"!==i.call(r))return!1
if(1!==(s=Object.keys(r)).length)return!1
o[t]=[s[0],r[s[0]]]}return!0},construct:function(e){if(null===e)return[]
var t,n,r,i,s,o=e
for(s=new Array(o.length),t=0,n=o.length;t<n;t+=1)r=o[t],i=Object.keys(r),s[t]=[i[0],r[i[0]]]
return s}})},8178:(e,t,n)=>{"use strict"
var r=n(8356)
e.exports=new r("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}})},9060:(e,t,n)=>{"use strict"
var r=n(8356),i=Object.prototype.hasOwnProperty
e.exports=new r("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0
var t,n=e
for(t in n)if(i.call(n,t)&&null!==n[t])return!1
return!0},construct:function(e){return null!==e?e:{}}})},9313:(e,t,n)=>{"use strict"
var r=n(8356)
e.exports=new r("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}})},90:(e,t,n)=>{"use strict"
var r=n(8356),i=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),s=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$")
e.exports=new r("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==i.exec(e)||null!==s.exec(e))},construct:function(e){var t,n,r,o,a,u,c,l,h=0,p=null
if(null===(t=i.exec(e))&&(t=s.exec(e)),null===t)throw new Error("Date resolve error")
if(n=+t[1],r=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(n,r,o))
if(a=+t[4],u=+t[5],c=+t[6],t[7]){for(h=t[7].slice(0,3);h.length<3;)h+="0"
h=+h}return t[9]&&(p=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(p=-p)),l=new Date(Date.UTC(n,r,o,a,u,c,h)),p&&l.setTime(l.getTime()-p),l},instanceOf:Date,represent:function(e){return e.toISOString()}})},6539:(e,t,n)=>{var r=n(7400).Symbol
e.exports=r},9349:e=>{e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t)
case 1:return e.call(t,n[0])
case 2:return e.call(t,n[0],n[1])
case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},8213:(e,t,n)=>{var r=n(4701),i=n(2900),s=n(9785),o=n(3854),a=n(2383),u=n(8519),c=Object.prototype.hasOwnProperty
e.exports=function(e,t){var n=s(e),l=!n&&i(e),h=!n&&!l&&o(e),p=!n&&!l&&!h&&u(e),d=n||l||h||p,f=d?r(e.length,String):[],m=f.length
for(var y in e)!t&&!c.call(e,y)||d&&("length"==y||h&&("offset"==y||"parent"==y)||p&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||a(y,m))||f.push(y)
return f}},9736:(e,t,n)=>{var r=n(6539),i=n(4840),s=n(1258),o=r?r.toStringTag:void 0
e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?i(e):s(e)}},5829:(e,t,n)=>{var r=n(9736),i=n(2360)
e.exports=function(e){return i(e)&&"[object Arguments]"==r(e)}},6729:(e,t,n)=>{var r=n(8338),i=n(9678),s=n(1611),o=n(6532),a=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,l=u.toString,h=c.hasOwnProperty,p=RegExp("^"+l.call(h).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
e.exports=function(e){return!(!s(e)||i(e))&&(r(e)?p:a).test(o(e))}},6972:(e,t,n)=>{var r=n(9736),i=n(4194),s=n(2360),o={}
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
for(c&&s(t[0],t[1],c)&&(r=1);++n<r;)for(var l=t[n],h=o(l),p=-1,d=h.length;++p<d;){var f=h[p],m=e[f];(void 0===m||i(m,a[f])&&!u.call(e,f))&&(e[f]=l[f])}return e}))
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
e.exports=function(e){return s(e)?r(e,!0):i(e)}},7714:e=>{e.exports=function(){return!1}},3428:(e,t,n)=>{"use strict"
const r=n(2413).PassThrough,i=Array.prototype.slice
function s(e,t){if(Array.isArray(e))for(let n=0,r=e.length;n<r;n++)e[n]=s(e[n],t)
else{if(!e._readableState&&e.pipe&&(e=e.pipe(r(t))),!e._readableState||!e.pause||!e.pipe)throw new Error("Only readable stream can be merged.")
e.pause()}return e}e.exports=function(){const e=[],t=i.call(arguments)
let n=!1,o=t[t.length-1]
o&&!Array.isArray(o)&&null==o.pipe?t.pop():o={}
const a=!1!==o.end,u=!0===o.pipeError
null==o.objectMode&&(o.objectMode=!0)
null==o.highWaterMark&&(o.highWaterMark=65536)
const c=r(o)
function l(){for(let t=0,n=arguments.length;t<n;t++)e.push(s(arguments[t],o))
return h(),this}function h(){if(n)return
n=!0
let t=e.shift()
if(!t)return void process.nextTick(p)
Array.isArray(t)||(t=[t])
let r=t.length+1
function i(){--r>0||(n=!1,h())}function s(e){function t(){e.removeListener("merge2UnpipeEnd",t),e.removeListener("end",t),u&&e.removeListener("error",n),i()}function n(e){c.emit("error",e)}if(e._readableState.endEmitted)return i()
e.on("merge2UnpipeEnd",t),e.on("end",t),u&&e.on("error",n),e.pipe(c,{end:!1}),e.resume()}for(let e=0;e<t.length;e++)s(t[e])
i()}function p(){n=!1,c.emit("queueDrain"),a&&c.end()}c.setMaxListeners(0),c.add=l,c.on("unpipe",(function(e){e.emit("merge2UnpipeEnd")})),t.length&&l.apply(null,t)
return c}},8751:(e,t,n)=>{"use strict"
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
try{new RegExp(n)}catch(t){return e.map(e=>i.escapeRegex(e)).join("..")}return n},h=(e,t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,p=(e,t)=>{if("string"!=typeof e)throw new TypeError("Expected a string")
e=c[e]||e
const n={...t},p="number"==typeof n.maxLength?Math.min(s,n.maxLength):s
let d=e.length
if(d>p)throw new SyntaxError(`Input length: ${d}, exceeds maximum allowed length: ${p}`)
const f={type:"bos",value:"",output:n.prepend||""},m=[f],y=n.capture?"":"?:",g=i.isWindows(t),v=r.globChars(g),x=r.extglobChars(v),{DOT_LITERAL:_,PLUS_LITERAL:b,SLASH_LITERAL:E,ONE_CHAR:D,DOTS_SLASH:A,NO_DOT:S,NO_DOT_SLASH:C,NO_DOTS_SLASH:w,QMARK:k,QMARK_NO_DOT:F,STAR:T,START_ANCHOR:P}=v,R=e=>`(${y}(?:(?!${P}${e.dot?A:_}).)*?)`,B=n.dot?"":S,O=n.dot?k:F
let I=!0===n.bash?R(n):T
n.capture&&(I=`(${I})`),"boolean"==typeof n.noext&&(n.noextglob=n.noext)
const N={input:e,index:-1,start:0,dot:!0===n.dot,consumed:"",output:"",prefix:"",backtrack:!1,negated:!1,brackets:0,braces:0,parens:0,quotes:0,globstar:!1,tokens:m}
e=i.removePrefix(e,N),d=e.length
const L=[],M=[],j=[]
let U,H=f
const z=()=>N.index===d-1,X=N.peek=(t=1)=>e[N.index+t],q=N.advance=()=>e[++N.index],$=()=>e.slice(N.index+1),J=(e="",t=0)=>{N.consumed+=e,N.index+=t},K=e=>{N.output+=null!=e.output?e.output:e.value,J(e.value)},G=()=>{let e=1
for(;"!"===X()&&("("!==X(2)||"?"===X(3));)q(),N.start++,e++
return e%2!=0&&(N.negated=!0,N.start++,!0)},W=e=>{N[e]++,j.push(e)},V=e=>{N[e]--,j.pop()},Y=e=>{if("globstar"===H.type){const t=N.braces>0&&("comma"===e.type||"brace"===e.type),n=!0===e.extglob||L.length&&("pipe"===e.type||"paren"===e.type)
"slash"===e.type||"paren"===e.type||t||n||(N.output=N.output.slice(0,-H.output.length),H.type="star",H.value="*",H.output=I,N.output+=H.output)}if(L.length&&"paren"!==e.type&&!x[e.value]&&(L[L.length-1].inner+=e.value),(e.value||e.output)&&K(e),H&&"text"===H.type&&"text"===e.type)return H.value+=e.value,void(H.output=(H.output||"")+e.value)
e.prev=H,m.push(e),H=e},Q=(e,t)=>{const r={...x[t],conditions:1,inner:""}
r.prev=H,r.parens=N.parens,r.output=N.output
const i=(n.capture?"(":"")+r.open
W("parens"),Y({type:e,value:t,output:N.output?"":D}),Y({type:"paren",extglob:!0,value:q(),output:i}),L.push(r)},Z=e=>{let t=e.close+(n.capture?")":"")
if("negate"===e.type){let r=I
e.inner&&e.inner.length>1&&e.inner.includes("/")&&(r=R(n)),(r!==I||z()||/^\)+$/.test($()))&&(t=e.close=")$))"+r),"bos"===e.prev.type&&z()&&(N.negatedExtglob=!0)}Y({type:"paren",extglob:!0,value:U,output:t}),V("parens")}
if(!1!==n.fastpaths&&!/(^[*!]|[/()[\]{}"])/.test(e)){let r=!1,s=e.replace(u,(e,t,n,i,s,o)=>"\\"===i?(r=!0,e):"?"===i?t?t+i+(s?k.repeat(s.length):""):0===o?O+(s?k.repeat(s.length):""):k.repeat(n.length):"."===i?_.repeat(n.length):"*"===i?t?t+i+(s?I:""):I:t?e:"\\"+e)
return!0===r&&(s=!0===n.unescape?s.replace(/\\/g,""):s.replace(/\\+/g,e=>e.length%2==0?"\\\\":e?"\\":"")),s===e&&!0===n.contains?(N.output=e,N):(N.output=i.wrapOutput(s,N,t),N)}for(;!z();){if(U=q(),"\0"===U)continue
if("\\"===U){const e=X()
if("/"===e&&!0!==n.bash)continue
if("."===e||";"===e)continue
if(!e){U+="\\",Y({type:"text",value:U})
continue}const t=/^\\+/.exec($())
let r=0
if(t&&t[0].length>2&&(r=t[0].length,N.index+=r,r%2!=0&&(U+="\\")),!0===n.unescape?U=q()||"":U+=q()||"",0===N.brackets){Y({type:"text",value:U})
continue}}if(N.brackets>0&&("]"!==U||"["===H.value||"[^"===H.value)){if(!1!==n.posix&&":"===U){const e=H.value.slice(1)
if(e.includes("[")&&(H.posix=!0,e.includes(":"))){const e=H.value.lastIndexOf("["),t=H.value.slice(0,e),n=H.value.slice(e+2),r=o[n]
if(r){H.value=t+r,N.backtrack=!0,q(),f.output||1!==m.indexOf(H)||(f.output=D)
continue}}}("["===U&&":"!==X()||"-"===U&&"]"===X())&&(U="\\"+U),"]"!==U||"["!==H.value&&"[^"!==H.value||(U="\\"+U),!0===n.posix&&"!"===U&&"["===H.value&&(U="^"),H.value+=U,K({value:U})
continue}if(1===N.quotes&&'"'!==U){U=i.escapeRegex(U),H.value+=U,K({value:U})
continue}if('"'===U){N.quotes=1===N.quotes?0:1,!0===n.keepQuotes&&Y({type:"text",value:U})
continue}if("("===U){W("parens"),Y({type:"paren",value:U})
continue}if(")"===U){if(0===N.parens&&!0===n.strictBrackets)throw new SyntaxError(h("opening","("))
const e=L[L.length-1]
if(e&&N.parens===e.parens+1){Z(L.pop())
continue}Y({type:"paren",value:U,output:N.parens?")":"\\)"}),V("parens")
continue}if("["===U){if(!0!==n.nobracket&&$().includes("]"))W("brackets")
else{if(!0!==n.nobracket&&!0===n.strictBrackets)throw new SyntaxError(h("closing","]"))
U="\\"+U}Y({type:"bracket",value:U})
continue}if("]"===U){if(!0===n.nobracket||H&&"bracket"===H.type&&1===H.value.length){Y({type:"text",value:U,output:"\\"+U})
continue}if(0===N.brackets){if(!0===n.strictBrackets)throw new SyntaxError(h("opening","["))
Y({type:"text",value:U,output:"\\"+U})
continue}V("brackets")
const e=H.value.slice(1)
if(!0===H.posix||"^"!==e[0]||e.includes("/")||(U="/"+U),H.value+=U,K({value:U}),!1===n.literalBrackets||i.hasRegexChars(e))continue
const t=i.escapeRegex(H.value)
if(N.output=N.output.slice(0,-H.value.length),!0===n.literalBrackets){N.output+=t,H.value=t
continue}H.value=`(${y}${t}|${H.value})`,N.output+=H.value
continue}if("{"===U&&!0!==n.nobrace){W("braces")
const e={type:"brace",value:U,output:"(",outputIndex:N.output.length,tokensIndex:N.tokens.length}
M.push(e),Y(e)
continue}if("}"===U){const e=M[M.length-1]
if(!0===n.nobrace||!e){Y({type:"text",value:U,output:U})
continue}let t=")"
if(!0===e.dots){const e=m.slice(),r=[]
for(let t=e.length-1;t>=0&&(m.pop(),"brace"!==e[t].type);t--)"dots"!==e[t].type&&r.unshift(e[t].value)
t=l(r,n),N.backtrack=!0}if(!0!==e.comma&&!0!==e.dots){const n=N.output.slice(0,e.outputIndex),r=N.tokens.slice(e.tokensIndex)
e.value=e.output="\\{",U=t="\\}",N.output=n
for(const e of r)N.output+=e.output||e.value}Y({type:"brace",value:U,output:t}),V("braces"),M.pop()
continue}if("|"===U){L.length>0&&L[L.length-1].conditions++,Y({type:"text",value:U})
continue}if(","===U){let e=U
const t=M[M.length-1]
t&&"braces"===j[j.length-1]&&(t.comma=!0,e="|"),Y({type:"comma",value:U,output:e})
continue}if("/"===U){if("dot"===H.type&&N.index===N.start+1){N.start=N.index+1,N.consumed="",N.output="",m.pop(),H=f
continue}Y({type:"slash",value:U,output:E})
continue}if("."===U){if(N.braces>0&&"dot"===H.type){"."===H.value&&(H.output=_)
const e=M[M.length-1]
H.type="dots",H.output+=U,H.value+=U,e.dots=!0
continue}if(N.braces+N.parens===0&&"bos"!==H.type&&"slash"!==H.type){Y({type:"text",value:U,output:_})
continue}Y({type:"dot",value:U,output:_})
continue}if("?"===U){if(!(H&&"("===H.value)&&!0!==n.noextglob&&"("===X()&&"?"!==X(2)){Q("qmark",U)
continue}if(H&&"paren"===H.type){const e=X()
let t=U
if("<"===e&&!i.supportsLookbehinds())throw new Error("Node.js v10 or higher is required for regex lookbehinds");("("===H.value&&!/[!=<:]/.test(e)||"<"===e&&!/<([!=]|\w+>)/.test($()))&&(t="\\"+U),Y({type:"text",value:U,output:t})
continue}if(!0!==n.dot&&("slash"===H.type||"bos"===H.type)){Y({type:"qmark",value:U,output:F})
continue}Y({type:"qmark",value:U,output:k})
continue}if("!"===U){if(!0!==n.noextglob&&"("===X()&&("?"!==X(2)||!/[!=<:]/.test(X(3)))){Q("negate",U)
continue}if(!0!==n.nonegate&&0===N.index){G()
continue}}if("+"===U){if(!0!==n.noextglob&&"("===X()&&"?"!==X(2)){Q("plus",U)
continue}if(H&&"("===H.value||!1===n.regex){Y({type:"plus",value:U,output:b})
continue}if(H&&("bracket"===H.type||"paren"===H.type||"brace"===H.type)||N.parens>0){Y({type:"plus",value:U})
continue}Y({type:"plus",value:b})
continue}if("@"===U){if(!0!==n.noextglob&&"("===X()&&"?"!==X(2)){Y({type:"at",extglob:!0,value:U,output:""})
continue}Y({type:"text",value:U})
continue}if("*"!==U){"$"!==U&&"^"!==U||(U="\\"+U)
const e=a.exec($())
e&&(U+=e[0],N.index+=e[0].length),Y({type:"text",value:U})
continue}if(H&&("globstar"===H.type||!0===H.star)){H.type="star",H.star=!0,H.value+=U,H.output=I,N.backtrack=!0,N.globstar=!0,J(U)
continue}let t=$()
if(!0!==n.noextglob&&/^\([^?]/.test(t)){Q("star",U)
continue}if("star"===H.type){if(!0===n.noglobstar){J(U)
continue}const r=H.prev,i=r.prev,s="slash"===r.type||"bos"===r.type,o=i&&("star"===i.type||"globstar"===i.type)
if(!0===n.bash&&(!s||t[0]&&"/"!==t[0])){Y({type:"star",value:U,output:""})
continue}const a=N.braces>0&&("comma"===r.type||"brace"===r.type),u=L.length&&("pipe"===r.type||"paren"===r.type)
if(!s&&"paren"!==r.type&&!a&&!u){Y({type:"star",value:U,output:""})
continue}for(;"/**"===t.slice(0,3);){const n=e[N.index+4]
if(n&&"/"!==n)break
t=t.slice(3),J("/**",3)}if("bos"===r.type&&z()){H.type="globstar",H.value+=U,H.output=R(n),N.output=H.output,N.globstar=!0,J(U)
continue}if("slash"===r.type&&"bos"!==r.prev.type&&!o&&z()){N.output=N.output.slice(0,-(r.output+H.output).length),r.output="(?:"+r.output,H.type="globstar",H.output=R(n)+(n.strictSlashes?")":"|$)"),H.value+=U,N.globstar=!0,N.output+=r.output+H.output,J(U)
continue}if("slash"===r.type&&"bos"!==r.prev.type&&"/"===t[0]){const e=void 0!==t[1]?"|$":""
N.output=N.output.slice(0,-(r.output+H.output).length),r.output="(?:"+r.output,H.type="globstar",H.output=`${R(n)}${E}|${E}${e})`,H.value+=U,N.output+=r.output+H.output,N.globstar=!0,J(U+q()),Y({type:"slash",value:"/",output:""})
continue}if("bos"===r.type&&"/"===t[0]){H.type="globstar",H.value+=U,H.output=`(?:^|${E}|${R(n)}${E})`,N.output=H.output,N.globstar=!0,J(U+q()),Y({type:"slash",value:"/",output:""})
continue}N.output=N.output.slice(0,-H.output.length),H.type="globstar",H.output=R(n),H.value+=U,N.output+=H.output,N.globstar=!0,J(U)
continue}const r={type:"star",value:U,output:I}
!0!==n.bash?!H||"bracket"!==H.type&&"paren"!==H.type||!0!==n.regex?(N.index!==N.start&&"slash"!==H.type&&"dot"!==H.type||("dot"===H.type?(N.output+=C,H.output+=C):!0===n.dot?(N.output+=w,H.output+=w):(N.output+=B,H.output+=B),"*"!==X()&&(N.output+=D,H.output+=D)),Y(r)):(r.output=U,Y(r)):(r.output=".*?","bos"!==H.type&&"slash"!==H.type||(r.output=B+r.output),Y(r))}for(;N.brackets>0;){if(!0===n.strictBrackets)throw new SyntaxError(h("closing","]"))
N.output=i.escapeLast(N.output,"["),V("brackets")}for(;N.parens>0;){if(!0===n.strictBrackets)throw new SyntaxError(h("closing",")"))
N.output=i.escapeLast(N.output,"("),V("parens")}for(;N.braces>0;){if(!0===n.strictBrackets)throw new SyntaxError(h("closing","}"))
N.output=i.escapeLast(N.output,"{"),V("braces")}if(!0===n.strictSlashes||"star"!==H.type&&"bracket"!==H.type||Y({type:"maybe_slash",value:"",output:E+"?"}),!0===N.backtrack){N.output=""
for(const e of N.tokens)N.output+=null!=e.output?e.output:e.value,e.suffix&&(N.output+=e.suffix)}return N}
p.fastpaths=(e,t)=>{const n={...t},o="number"==typeof n.maxLength?Math.min(s,n.maxLength):s,a=e.length
if(a>o)throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${o}`)
e=c[e]||e
const u=i.isWindows(t),{DOT_LITERAL:l,SLASH_LITERAL:h,ONE_CHAR:p,DOTS_SLASH:d,NO_DOT:f,NO_DOTS:m,NO_DOTS_SLASH:y,STAR:g,START_ANCHOR:v}=r.globChars(u),x=n.dot?m:f,_=n.dot?y:f,b=n.capture?"":"?:"
let E=!0===n.bash?".*?":g
n.capture&&(E=`(${E})`)
const D=e=>!0===e.noglobstar?E:`(${b}(?:(?!${v}${e.dot?d:l}).)*?)`,A=e=>{switch(e){case"*":return`${x}${p}${E}`
case".*":return`${l}${p}${E}`
case"*.*":return`${x}${E}${l}${p}${E}`
case"*/*":return`${x}${E}${h}${p}${_}${E}`
case"**":return x+D(n)
case"**/*":return`(?:${x}${D(n)}${h})?${_}${p}${E}`
case"**/*.*":return`(?:${x}${D(n)}${h})?${_}${E}${l}${p}${E}`
case"**/.*":return`(?:${x}${D(n)}${h})?${l}${p}${E}`
default:{const t=/^(.*?)\.(\w+)$/.exec(e)
if(!t)return
const n=A(t[1])
if(!n)return
return n+l+t[2]}}},S=i.removePrefix(e,{negated:!1,prefix:""})
let C=A(S)
return C&&!0!==n.strictSlashes&&(C+=h+"?"),C},e.exports=p},9307:(e,t,n)=>{"use strict"
const r=n(5622),i=n(5142),s=n(1711),o=n(3337),a=n(5448),u=(e,t,n=!1)=>{if(Array.isArray(e)){const r=e.map(e=>u(e,t,n))
return e=>{for(const t of r){const n=t(e)
if(n)return n}return!1}}const r=(i=e)&&"object"==typeof i&&!Array.isArray(i)&&e.tokens&&e.input
var i
if(""===e||"string"!=typeof e&&!r)throw new TypeError("Expected pattern to be a non-empty string")
const s=t||{},a=o.isWindows(t),c=r?u.compileRe(e,t):u.makeRe(e,t,!1,!0),l=c.state
delete c.state
let h=()=>!1
if(s.ignore){const e={...t,ignore:null,onMatch:null,onResult:null}
h=u(s.ignore,e,n)}const p=(n,r=!1)=>{const{isMatch:i,match:o,output:p}=u.test(n,c,t,{glob:e,posix:a}),d={glob:e,state:l,regex:c,posix:a,input:n,output:p,match:o,isMatch:i}
return"function"==typeof s.onResult&&s.onResult(d),!1===i?(d.isMatch=!1,!!r&&d):h(n)?("function"==typeof s.onIgnore&&s.onIgnore(d),d.isMatch=!1,!!r&&d):("function"==typeof s.onMatch&&s.onMatch(d),!r||d)}
return n&&(p.state=l),p}
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
const r=n(3337),{CHAR_ASTERISK:i,CHAR_AT:s,CHAR_BACKWARD_SLASH:o,CHAR_COMMA:a,CHAR_DOT:u,CHAR_EXCLAMATION_MARK:c,CHAR_FORWARD_SLASH:l,CHAR_LEFT_CURLY_BRACE:h,CHAR_LEFT_PARENTHESES:p,CHAR_LEFT_SQUARE_BRACKET:d,CHAR_PLUS:f,CHAR_QUESTION_MARK:m,CHAR_RIGHT_CURLY_BRACE:y,CHAR_RIGHT_PARENTHESES:g,CHAR_RIGHT_SQUARE_BRACKET:v}=n(5448),x=e=>e===l||e===o,_=e=>{!0!==e.isPrefix&&(e.depth=e.isGlobstar?1/0:1)}
e.exports=(e,t)=>{const n=t||{},b=e.length-1,E=!0===n.parts||!0===n.scanToEnd,D=[],A=[],S=[]
let C,w,k=e,F=-1,T=0,P=0,R=!1,B=!1,O=!1,I=!1,N=!1,L=!1,M=!1,j=!1,U=!1,H=0,z={value:"",depth:0,isGlob:!1}
const X=()=>F>=b,q=()=>(C=w,k.charCodeAt(++F))
for(;F<b;){let e
if(w=q(),w!==o){if(!0===L||w===h){for(H++;!0!==X()&&(w=q());)if(w!==o)if(w!==h){if(!0!==L&&w===u&&(w=q())===u){if(R=z.isBrace=!0,O=z.isGlob=!0,U=!0,!0===E)continue
break}if(!0!==L&&w===a){if(R=z.isBrace=!0,O=z.isGlob=!0,U=!0,!0===E)continue
break}if(w===y&&(H--,0===H)){L=!1,R=z.isBrace=!0,U=!0
break}}else H++
else M=z.backslashes=!0,q()
if(!0===E)continue
break}if(w!==l){if(!0!==n.noext){if(!0===(w===f||w===s||w===i||w===m||w===c)&&k.charCodeAt(F+1)===p){if(O=z.isGlob=!0,I=z.isExtglob=!0,U=!0,!0===E){for(;!0!==X()&&(w=q());)if(w!==o){if(w===g){O=z.isGlob=!0,U=!0
break}}else M=z.backslashes=!0,w=q()
continue}break}}if(w===i){if(C===i&&(N=z.isGlobstar=!0),O=z.isGlob=!0,U=!0,!0===E)continue
break}if(w===m){if(O=z.isGlob=!0,U=!0,!0===E)continue
break}if(w===d)for(;!0!==X()&&(e=q());)if(e!==o){if(e===v){if(B=z.isBracket=!0,O=z.isGlob=!0,U=!0,!0===E)continue
break}}else M=z.backslashes=!0,q()
if(!0===n.nonegate||w!==c||F!==T){if(!0!==n.noparen&&w===p){if(O=z.isGlob=!0,!0===E){for(;!0!==X()&&(w=q());)if(w!==p){if(w===g){U=!0
break}}else M=z.backslashes=!0,w=q()
continue}break}if(!0===O){if(U=!0,!0===E)continue
break}}else j=z.negated=!0,T++}else{if(D.push(F),A.push(z),z={value:"",depth:0,isGlob:!1},!0===U)continue
if(C===u&&F===T+1){T+=2
continue}P=F+1}}else M=z.backslashes=!0,w=q(),w===h&&(L=!0)}!0===n.noext&&(I=!1,O=!1)
let $=k,J="",K=""
T>0&&(J=k.slice(0,T),k=k.slice(T),P-=T),$&&!0===O&&P>0?($=k.slice(0,P),K=k.slice(P)):!0===O?($="",K=k):$=k,$&&""!==$&&"/"!==$&&$!==k&&x($.charCodeAt($.length-1))&&($=$.slice(0,-1)),!0===n.unescape&&(K&&(K=r.removeBackslashes(K)),$&&!0===M&&($=r.removeBackslashes($)))
const G={prefix:J,input:e,start:T,base:$,glob:K,isBrace:R,isBracket:B,isGlob:O,isExtglob:I,isGlobstar:N,negated:j}
if(!0===n.tokens&&(G.maxDepth=0,x(w)||A.push(z),G.tokens=A),!0===n.parts||!0===n.tokens){let t
for(let r=0;r<D.length;r++){const i=t?t+1:T,s=D[r],o=e.slice(i,s)
n.tokens&&(0===r&&0!==T?(A[r].isPrefix=!0,A[r].value=J):A[r].value=o,_(A[r]),G.maxDepth+=A[r].depth),0===r&&""===o||S.push(o),t=s}if(t&&t+1<e.length){const r=e.slice(t+1)
S.push(r),n.tokens&&(A[A.length-1].value=r,_(A[A.length-1]),G.maxDepth+=A[A.length-1].depth)}G.slashes=D,G.parts=S}return G}},3337:(e,t,n)=>{"use strict"
const r=n(5622),i="win32"===process.platform,{REGEX_BACKSLASH:s,REGEX_REMOVE_BACKSLASH:o,REGEX_SPECIAL_CHARS:a,REGEX_SPECIAL_CHARS_GLOBAL:u}=n(5448)
t.isObject=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),t.hasRegexChars=e=>a.test(e),t.isRegexChar=e=>1===e.length&&t.hasRegexChars(e),t.escapeRegex=e=>e.replace(u,"\\$1"),t.toPosixSlashes=e=>e.replace(s,"/"),t.removeBackslashes=e=>e.replace(o,e=>"\\"===e?"":e),t.supportsLookbehinds=()=>{const e=process.version.slice(1).split(".").map(Number)
return 3===e.length&&e[0]>=9||8===e[0]&&e[1]>=10},t.isWindows=e=>e&&"boolean"==typeof e.windows?e.windows:!0===i||"\\"===r.sep,t.escapeLast=(e,n,r)=>{const i=e.lastIndexOf(n,r)
return-1===i?e:"\\"===e[i-1]?t.escapeLast(e,n,i-1):`${e.slice(0,i)}\\${e.slice(i)}`},t.removePrefix=(e,t={})=>{let n=e
return n.startsWith("./")&&(n=n.slice(2),t.prefix="./"),n},t.wrapOutput=(e,t={},n={})=>{let r=`${n.contains?"":"^"}(?:${e})${n.contains?"":"$"}`
return!0===t.negated&&(r=`(?:^(?!${r}).*$)`),r}},1046:e=>{"use strict"
e.exports=function(e){var t=new e,n=t
return{get:function(){var r=t
return r.next?t=r.next:(t=new e,n=t),r.next=null,r},release:function(e){n.next=e,n=e}}}},1918:e=>{e.exports=function(e,t){var n,r,i,s=!0
Array.isArray(e)?(n=[],r=e.length):(i=Object.keys(e),n={},r=i.length)
function o(e){function r(){t&&t(e,n),t=null}s?process.nextTick(r):r()}function a(e,t,i){n[e]=i,(0==--r||t)&&o(t)}r?i?i.forEach((function(t){e[t]((function(e,n){a(t,e,n)}))})):e.forEach((function(e,t){e((function(e,n){a(t,e,n)}))})):o(null)
s=!1}},9466:(e,t,n)=>{"use strict"
const r=n(1193),i=(e,t,n)=>{if(!1===r(e))throw new TypeError("toRegexRange: expected the first argument to be a number")
if(void 0===t||e===t)return String(e)
if(!1===r(t))throw new TypeError("toRegexRange: expected the second argument to be a number.")
let s={relaxZeros:!0,...n}
"boolean"==typeof s.strictZeros&&(s.relaxZeros=!1===s.strictZeros)
let u=e+":"+t+"="+String(s.relaxZeros)+String(s.shorthand)+String(s.capture)+String(s.wrap)
if(i.cache.hasOwnProperty(u))return i.cache[u].result
let c=Math.min(e,t),l=Math.max(e,t)
if(1===Math.abs(c-l)){let n=e+"|"+t
return s.capture?`(${n})`:!1===s.wrap?n:`(?:${n})`}let h=f(e)||f(t),p={min:e,max:t,a:c,b:l},d=[],m=[]
if(h&&(p.isPadded=h,p.maxLen=String(p.max).length),c<0){m=o(l<0?Math.abs(l):1,Math.abs(c),p,s),c=p.a=0}return l>=0&&(d=o(c,l,p,s)),p.negatives=m,p.positives=d,p.result=function(e,t,n){let r=a(e,t,"-",!1,n)||[],i=a(t,e,"",!1,n)||[],s=a(e,t,"-?",!0,n)||[]
return r.concat(s).concat(i).join("|")}(m,d,s),!0===s.capture?p.result=`(${p.result})`:!1!==s.wrap&&d.length+m.length>1&&(p.result=`(?:${p.result})`),i.cache[u]=p,p.result}
function s(e,t,n){if(e===t)return{pattern:e,count:[],digits:0}
let r=function(e,t){let n=[]
for(let r=0;r<e.length;r++)n.push([e[r],t[r]])
return n}(e,t),i=r.length,s="",o=0
for(let e=0;e<i;e++){let[t,i]=r[e]
t===i?s+=t:"0"!==t||"9"!==i?s+=d(t,i,n):o++}return o&&(s+=!0===n.shorthand?"\\d":"[0-9]"),{pattern:s,count:[o],digits:i}}function o(e,t,n,r){let i,o=function(e,t){let n=1,r=1,i=l(e,n),s=new Set([t])
for(;e<=i&&i<=t;)s.add(i),n+=1,i=l(e,n)
for(i=h(t+1,r)-1;e<i&&i<=t;)s.add(i),r+=1,i=h(t+1,r)-1
return s=[...s],s.sort(u),s}(e,t),a=[],c=e
for(let e=0;e<o.length;e++){let t=o[e],u=s(String(c),String(t),r),l=""
n.isPadded||!i||i.pattern!==u.pattern?(n.isPadded&&(l=m(t,n,r)),u.string=l+u.pattern+p(u.count),a.push(u),c=t+1,i=u):(i.count.length>1&&i.count.pop(),i.count.push(u.count[0]),i.string=i.pattern+p(i.count),c=t+1)}return a}function a(e,t,n,r,i){let s=[]
for(let i of e){let{string:e}=i
r||c(t,"string",e)||s.push(n+e),r&&c(t,"string",e)&&s.push(n+e)}return s}function u(e,t){return e>t?1:t>e?-1:0}function c(e,t,n){return e.some(e=>e[t]===n)}function l(e,t){return Number(String(e).slice(0,-t)+"9".repeat(t))}function h(e,t){return e-e%Math.pow(10,t)}function p(e){let[t=0,n=""]=e
return n||t>1?`{${t+(n?","+n:"")}}`:""}function d(e,t,n){return`[${e}${t-e==1?"":"-"}${t}]`}function f(e){return/^-?(0+)\d/.test(e)}function m(e,t,n){if(!t.isPadded)return e
let r=Math.abs(t.maxLen-String(e).length),i=!1!==n.relaxZeros
switch(r){case 0:return""
case 1:return i?"0?":"0"
case 2:return i?"0{0,2}":"00"
default:return i?`0{0,${r}}`:`0{${r}}`}}i.cache={},i.clearCache=()=>i.cache={},e.exports=i},1193:e=>{"use strict"
e.exports=function(e){return"number"==typeof e?e-e==0:"string"==typeof e&&""!==e.trim()&&(Number.isFinite?Number.isFinite(+e):isFinite(+e))}},4293:e=>{"use strict"
e.exports=require("buffer")},3129:e=>{"use strict"
e.exports=require("child_process")},8614:e=>{"use strict"
e.exports=require("events")},5747:e=>{"use strict"
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
var e=__webpack_require__(516),t=__webpack_require__(236),n=__webpack_require__.n(t),r=__webpack_require__(3129),i=__webpack_require__(812),s=__webpack_require__.n(i),o=__webpack_require__(5622),a=__webpack_require__.n(o),u=__webpack_require__(5747),c=__webpack_require__.n(u),l=__webpack_require__(2413),h=__webpack_require__.n(l),p=__webpack_require__(8751),d=__webpack_require__.n(p),f=__webpack_require__(8605),m=__webpack_require__.n(f),y=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},g=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
const v=function(e){var t=e.fileIncludePatterns,n=e.fileExcludePatterns
return y(void 0,void 0,void 0,(function(){var e,i,s,o,a
return g(this,(function(u){switch(u.label){case 0:return[4,y(void 0,void 0,void 0,(function(){return g(this,(function(e){return[2,new Promise((function(e,t){(0,r.exec)("git diff -U0 --minimal origin/master",(function(n,r){return n?t(n):e(r)}))}))]}))}))]
case 1:for(e=u.sent().split(/^diff --git.* b\/(.*)\n(?:.*\n){4}/gm),i=[],s=1;s<e.length;s+=2)o=e[s],d().isMatch(o,t,{ignore:n})&&(a=e[s+1].split("\n").filter((function(e){return e.startsWith("+")}))).length>0&&i.push({filePath:o,content:a})
return[2,i]}}))}))}
var x=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
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
const b=function(e){var t=e.fileIncludePatterns,n=e.fileExcludePatterns
return x(this,void 0,void 0,(function(){var e=this
return _(this,(function(r){switch(r.label){case 0:return[4,s()(t,{ignore:n})]
case 1:return[2,r.sent().map((function(t){return{filePath:t,content:function(t){return x(e,void 0,void 0,(function(){return _(this,(function(e){return[2,new Promise((function(e,n){return c().readFile(t,(function(t,r){return t?n(t):e(String(r))}))}))]}))}))}}}))]}}))}))}
var E=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},D=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
const A=function(e){return E(this,void 0,void 0,(function(){var t
return D(this,(function(n){switch(t=e.source){case void 0:case"git-diff":return[2,v(e)]
case"filesystem":return[2,b(e)]
default:throw new Error('link-check was provided unexpected source "'+t+'"!')}return[2]}))}))}
var S=__webpack_require__(3329),C=__webpack_require__.n(S),w=__webpack_require__(5406),k=__webpack_require__.n(w),F=__webpack_require__(8835),T=__webpack_require__.n(F),P=__webpack_require__(7211),R=__webpack_require__.n(P),B=__webpack_require__(8761),O=__webpack_require__.n(B)
const I=h().Readable,N=Symbol("buffer"),L=Symbol("type")
class M{constructor(){this[L]=""
const e=arguments[0],t=arguments[1],n=[]
let r=0
if(e){const t=e,i=Number(t.length)
for(let e=0;e<i;e++){const i=t[e]
let s
s=i instanceof Buffer?i:ArrayBuffer.isView(i)?Buffer.from(i.buffer,i.byteOffset,i.byteLength):i instanceof ArrayBuffer?Buffer.from(i):i instanceof M?i[N]:Buffer.from("string"==typeof i?i:String(i)),r+=s.length,n.push(s)}}this[N]=Buffer.concat(n)
let i=t&&void 0!==t.type&&String(t.type).toLowerCase()
i&&!/[^\u0020-\u007E]/.test(i)&&(this[L]=i)}get size(){return this[N].length}get type(){return this[L]}text(){return Promise.resolve(this[N].toString())}arrayBuffer(){const e=this[N],t=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)
return Promise.resolve(t)}stream(){const e=new I
return e._read=function(){},e.push(this[N]),e.push(null),e}toString(){return"[object Blob]"}slice(){const e=this.size,t=arguments[0],n=arguments[1]
let r,i
r=void 0===t?0:t<0?Math.max(e+t,0):Math.min(t,e),i=void 0===n?e:n<0?Math.max(e+n,0):Math.min(n,e)
const s=Math.max(i-r,0),o=this[N].slice(r,r+s),a=new M([],{type:arguments[2]})
return a[N]=o,a}}function j(e,t,n){Error.call(this,e),this.message=e,this.type=t,n&&(this.code=this.errno=n.code),Error.captureStackTrace(this,this.constructor)}let U
Object.defineProperties(M.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}}),Object.defineProperty(M.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0}),j.prototype=Object.create(Error.prototype),j.prototype.constructor=j,j.prototype.name="FetchError"
try{U=Object(function(){var e=new Error("Cannot find module 'encoding'")
throw e.code="MODULE_NOT_FOUND",e}()).convert}catch(e){}const H=Symbol("Body internals"),z=h().PassThrough
function X(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.size
let i=void 0===r?0:r
var s=n.timeout
let o=void 0===s?0:s
null==e?e=null:$(e)?e=Buffer.from(e.toString()):J(e)||Buffer.isBuffer(e)||("[object ArrayBuffer]"===Object.prototype.toString.call(e)?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof h()||(e=Buffer.from(String(e)))),this[H]={body:e,disturbed:!1,error:null},this.size=i,this.timeout=o,e instanceof h()&&e.on("error",(function(e){const n="AbortError"===e.name?e:new j(`Invalid response body while trying to fetch ${t.url}: ${e.message}`,"system",e)
t[H].error=n}))}function q(){var e=this
if(this[H].disturbed)return X.Promise.reject(new TypeError("body used already for: "+this.url))
if(this[H].disturbed=!0,this[H].error)return X.Promise.reject(this[H].error)
let t=this.body
if(null===t)return X.Promise.resolve(Buffer.alloc(0))
if(J(t)&&(t=t.stream()),Buffer.isBuffer(t))return X.Promise.resolve(t)
if(!(t instanceof h()))return X.Promise.resolve(Buffer.alloc(0))
let n=[],r=0,i=!1
return new X.Promise((function(s,o){let a
e.timeout&&(a=setTimeout((function(){i=!0,o(new j(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))}),e.timeout)),t.on("error",(function(t){"AbortError"===t.name?(i=!0,o(t)):o(new j(`Invalid response body while trying to fetch ${e.url}: ${t.message}`,"system",t))})),t.on("data",(function(t){if(!i&&null!==t){if(e.size&&r+t.length>e.size)return i=!0,void o(new j(`content size at ${e.url} over limit: ${e.size}`,"max-size"))
r+=t.length,n.push(t)}})),t.on("end",(function(){if(!i){clearTimeout(a)
try{s(Buffer.concat(n,r))}catch(t){o(new j(`Could not create Buffer from response body for ${e.url}: ${t.message}`,"system",t))}}}))}))}function $(e){return"object"==typeof e&&"function"==typeof e.append&&"function"==typeof e.delete&&"function"==typeof e.get&&"function"==typeof e.getAll&&"function"==typeof e.has&&"function"==typeof e.set&&("URLSearchParams"===e.constructor.name||"[object URLSearchParams]"===Object.prototype.toString.call(e)||"function"==typeof e.sort)}function J(e){return"object"==typeof e&&"function"==typeof e.arrayBuffer&&"string"==typeof e.type&&"function"==typeof e.stream&&"function"==typeof e.constructor&&"string"==typeof e.constructor.name&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function K(e){let t,n,r=e.body
if(e.bodyUsed)throw new Error("cannot clone body after it is used")
return r instanceof h()&&"function"!=typeof r.getBoundary&&(t=new z,n=new z,r.pipe(t),r.pipe(n),e[H].body=t,r=n),r}function G(e){return null===e?null:"string"==typeof e?"text/plain;charset=UTF-8":$(e)?"application/x-www-form-urlencoded;charset=UTF-8":J(e)?e.type||null:Buffer.isBuffer(e)||"[object ArrayBuffer]"===Object.prototype.toString.call(e)||ArrayBuffer.isView(e)?null:"function"==typeof e.getBoundary?"multipart/form-data;boundary="+e.getBoundary():e instanceof h()?null:"text/plain;charset=UTF-8"}function W(e){const t=e.body
return null===t?0:J(t)?t.size:Buffer.isBuffer(t)?t.length:t&&"function"==typeof t.getLengthSync&&(t._lengthRetrievers&&0==t._lengthRetrievers.length||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}X.prototype={get body(){return this[H].body},get bodyUsed(){return this[H].disturbed},arrayBuffer(){return q.call(this).then((function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}))},blob(){let e=this.headers&&this.headers.get("content-type")||""
return q.call(this).then((function(t){return Object.assign(new M([],{type:e.toLowerCase()}),{[N]:t})}))},json(){var e=this
return q.call(this).then((function(t){try{return JSON.parse(t.toString())}catch(t){return X.Promise.reject(new j(`invalid json response body at ${e.url} reason: ${t.message}`,"invalid-json"))}}))},text(){return q.call(this).then((function(e){return e.toString()}))},buffer(){return q.call(this)},textConverted(){var e=this
return q.call(this).then((function(t){return function(e,t){if("function"!=typeof U)throw new Error("The package `encoding` must be installed to use the textConverted() function")
const n=t.get("content-type")
let r,i,s="utf-8"
n&&(r=/charset=([^;]*)/i.exec(n))
i=e.slice(0,1024).toString(),!r&&i&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(i))
!r&&i&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(i),r&&(r=/charset=(.*)/i.exec(r.pop())))
!r&&i&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(i))
r&&(s=r.pop(),"gb2312"!==s&&"gbk"!==s||(s="gb18030"))
return U(e,"UTF-8",s).toString()}(t,e.headers)}))}},Object.defineProperties(X.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}}),X.mixIn=function(e){for(const t of Object.getOwnPropertyNames(X.prototype))if(!(t in e)){const n=Object.getOwnPropertyDescriptor(X.prototype,t)
Object.defineProperty(e,t,n)}},X.Promise=global.Promise
const V=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,Y=/[^\t\x20-\x7e\x80-\xff]/
function Q(e){if(e=""+e,V.test(e)||""===e)throw new TypeError(e+" is not a legal HTTP header name")}function Z(e){if(e=""+e,Y.test(e))throw new TypeError(e+" is not a legal HTTP header value")}function ee(e,t){t=t.toLowerCase()
for(const n in e)if(n.toLowerCase()===t)return n}const te=Symbol("map")
class ne{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0
if(this[te]=Object.create(null),e instanceof ne){const t=e.raw(),n=Object.keys(t)
for(const e of n)for(const n of t[e])this.append(e,n)}else if(null==e);else{if("object"!=typeof e)throw new TypeError("Provided initializer must be an object")
{const t=e[Symbol.iterator]
if(null!=t){if("function"!=typeof t)throw new TypeError("Header pairs must be iterable")
const n=[]
for(const t of e){if("object"!=typeof t||"function"!=typeof t[Symbol.iterator])throw new TypeError("Each header pair must be iterable")
n.push(Array.from(t))}for(const e of n){if(2!==e.length)throw new TypeError("Each header pair must be a name/value tuple")
this.append(e[0],e[1])}}else for(const t of Object.keys(e)){const n=e[t]
this.append(t,n)}}}}get(e){Q(e=""+e)
const t=ee(this[te],e)
return void 0===t?null:this[te][t].join(", ")}forEach(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=re(this),r=0
for(;r<n.length;){var i=n[r]
const s=i[0],o=i[1]
e.call(t,o,s,this),n=re(this),r++}}set(e,t){t=""+t,Q(e=""+e),Z(t)
const n=ee(this[te],e)
this[te][void 0!==n?n:e]=[t]}append(e,t){t=""+t,Q(e=""+e),Z(t)
const n=ee(this[te],e)
void 0!==n?this[te][n].push(t):this[te][e]=[t]}has(e){return Q(e=""+e),void 0!==ee(this[te],e)}delete(e){Q(e=""+e)
const t=ee(this[te],e)
void 0!==t&&delete this[te][t]}raw(){return this[te]}keys(){return se(this,"key")}values(){return se(this,"value")}[Symbol.iterator](){return se(this,"key+value")}}function re(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key+value"
const n=Object.keys(e[te]).sort()
return n.map("key"===t?function(e){return e.toLowerCase()}:"value"===t?function(t){return e[te][t].join(", ")}:function(t){return[t.toLowerCase(),e[te][t].join(", ")]})}ne.prototype.entries=ne.prototype[Symbol.iterator],Object.defineProperty(ne.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(ne.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}})
const ie=Symbol("internal")
function se(e,t){const n=Object.create(oe)
return n[ie]={target:e,kind:t,index:0},n}const oe=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==oe)throw new TypeError("Value of `this` is not a HeadersIterator")
var e=this[ie]
const t=e.target,n=e.kind,r=e.index,i=re(t,n)
return r>=i.length?{value:void 0,done:!0}:(this[ie].index=r+1,{value:i[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())))
function ae(e){const t=Object.assign({__proto__:null},e[te]),n=ee(e[te],"Host")
return void 0!==n&&(t[n]=t[n][0]),t}Object.defineProperty(oe,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0})
const ue=Symbol("Response internals"),ce=m().STATUS_CODES
class le{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
X.call(this,e,t)
const n=t.status||200,r=new ne(t.headers)
if(null!=e&&!r.has("Content-Type")){const t=G(e)
t&&r.append("Content-Type",t)}this[ue]={url:t.url,status:n,statusText:t.statusText||ce[n],headers:r,counter:t.counter}}get url(){return this[ue].url||""}get status(){return this[ue].status}get ok(){return this[ue].status>=200&&this[ue].status<300}get redirected(){return this[ue].counter>0}get statusText(){return this[ue].statusText}get headers(){return this[ue].headers}clone(){return new le(K(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}}X.mixIn(le.prototype),Object.defineProperties(le.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}}),Object.defineProperty(le.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0})
const he=Symbol("Request internals"),pe=T().parse,de=T().format,fe="destroy"in h().Readable.prototype
function me(e){return"object"==typeof e&&"object"==typeof e[he]}class ye{constructor(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
me(e)?t=pe(e.url):(t=e&&e.href?pe(e.href):pe(""+e),e={})
let r=n.method||e.method||"GET"
if(r=r.toUpperCase(),(null!=n.body||me(e)&&null!==e.body)&&("GET"===r||"HEAD"===r))throw new TypeError("Request with GET/HEAD method cannot have body")
let i=null!=n.body?n.body:me(e)&&null!==e.body?K(e):null
X.call(this,i,{timeout:n.timeout||e.timeout||0,size:n.size||e.size||0})
const s=new ne(n.headers||e.headers||{})
if(null!=i&&!s.has("Content-Type")){const e=G(i)
e&&s.append("Content-Type",e)}let o=me(e)?e.signal:null
if("signal"in n&&(o=n.signal),null!=o&&!function(e){const t=e&&"object"==typeof e&&Object.getPrototypeOf(e)
return!(!t||"AbortSignal"!==t.constructor.name)}(o))throw new TypeError("Expected signal to be an instanceof AbortSignal")
this[he]={method:r,redirect:n.redirect||e.redirect||"follow",headers:s,parsedURL:t,signal:o},this.follow=void 0!==n.follow?n.follow:void 0!==e.follow?e.follow:20,this.compress=void 0!==n.compress?n.compress:void 0===e.compress||e.compress,this.counter=n.counter||e.counter||0,this.agent=n.agent||e.agent}get method(){return this[he].method}get url(){return de(this[he].parsedURL)}get headers(){return this[he].headers}get redirect(){return this[he].redirect}get signal(){return this[he].signal}clone(){return new ye(this)}}function ge(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}X.mixIn(ye.prototype),Object.defineProperty(ye.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(ye.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}}),ge.prototype=Object.create(Error.prototype),ge.prototype.constructor=ge,ge.prototype.name="AbortError"
const ve=h().PassThrough,xe=T().resolve
function _e(e,t){if(!_e.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative")
return X.Promise=_e.Promise,new _e.Promise((function(n,r){const i=new ye(e,t),s=function(e){const t=e[he].parsedURL,n=new ne(e[he].headers)
if(n.has("Accept")||n.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported")
if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported")
if(e.signal&&e.body instanceof h().Readable&&!fe)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8")
let r=null
if(null==e.body&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),null!=e.body){const t=W(e)
"number"==typeof t&&(r=String(t))}r&&n.set("Content-Length",r),n.has("User-Agent")||n.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!n.has("Accept-Encoding")&&n.set("Accept-Encoding","gzip,deflate")
let i=e.agent
return"function"==typeof i&&(i=i(t)),n.has("Connection")||i||n.set("Connection","close"),Object.assign({},t,{method:e.method,headers:ae(n),agent:i})}(i),o=("https:"===s.protocol?R():m()).request,a=i.signal
let u=null
const c=function(){let e=new ge("The user aborted a request.")
r(e),i.body&&i.body instanceof h().Readable&&i.body.destroy(e),u&&u.body&&u.body.emit("error",e)}
if(a&&a.aborted)return void c()
const l=function(){c(),f()},p=o(s)
let d
function f(){p.abort(),a&&a.removeEventListener("abort",l),clearTimeout(d)}a&&a.addEventListener("abort",l),i.timeout&&p.once("socket",(function(e){d=setTimeout((function(){r(new j("network timeout at: "+i.url,"request-timeout")),f()}),i.timeout)})),p.on("error",(function(e){r(new j(`request to ${i.url} failed, reason: ${e.message}`,"system",e)),f()})),p.on("response",(function(e){clearTimeout(d)
const t=function(e){const t=new ne
for(const n of Object.keys(e))if(!V.test(n))if(Array.isArray(e[n]))for(const r of e[n])Y.test(r)||(void 0===t[te][n]?t[te][n]=[r]:t[te][n].push(r))
else Y.test(e[n])||(t[te][n]=[e[n]])
return t}(e.headers)
if(_e.isRedirect(e.statusCode)){const s=t.get("Location"),o=null===s?null:xe(i.url,s)
switch(i.redirect){case"error":return r(new j("redirect mode is set to error: "+i.url,"no-redirect")),void f()
case"manual":if(null!==o)try{t.set("Location",o)}catch(e){r(e)}break
case"follow":if(null===o)break
if(i.counter>=i.follow)return r(new j("maximum redirect reached at: "+i.url,"max-redirect")),void f()
const s={headers:new ne(i.headers),follow:i.follow,counter:i.counter+1,agent:i.agent,compress:i.compress,method:i.method,body:i.body,signal:i.signal,timeout:i.timeout}
return 303!==e.statusCode&&i.body&&null===W(i)?(r(new j("Cannot follow redirect with body being a readable stream","unsupported-redirect")),void f()):(303!==e.statusCode&&(301!==e.statusCode&&302!==e.statusCode||"POST"!==i.method)||(s.method="GET",s.body=void 0,s.headers.delete("content-length")),n(_e(new ye(o,s))),void f())}}e.once("end",(function(){a&&a.removeEventListener("abort",l)}))
let s=e.pipe(new ve)
const o={url:i.url,status:e.statusCode,statusText:e.statusMessage,headers:t,size:i.size,timeout:i.timeout,counter:i.counter},c=t.get("Content-Encoding")
if(!i.compress||"HEAD"===i.method||null===c||204===e.statusCode||304===e.statusCode)return u=new le(s,o),void n(u)
const h={flush:O().Z_SYNC_FLUSH,finishFlush:O().Z_SYNC_FLUSH}
if("gzip"==c||"x-gzip"==c)return s=s.pipe(O().createGunzip(h)),u=new le(s,o),void n(u)
if("deflate"!=c&&"x-deflate"!=c){if("br"==c&&"function"==typeof O().createBrotliDecompress)return s=s.pipe(O().createBrotliDecompress()),u=new le(s,o),void n(u)
u=new le(s,o),n(u)}else{e.pipe(new ve).once("data",(function(e){s=8==(15&e[0])?s.pipe(O().createInflate()):s.pipe(O().createInflateRaw()),u=new le(s,o),n(u)}))}})),function(e,t){const n=t.body
null===n?e.end():J(n)?n.stream().pipe(e):Buffer.isBuffer(n)?(e.write(n),e.end()):n.pipe(e)}(p,i)}))}_e.isRedirect=function(e){return 301===e||302===e||303===e||307===e||308===e},_e.Promise=global.Promise
const be=_e
var Ee=function(){return(Ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)},De=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},Ae=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},Se=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},Ce={},we=function(e,t){if(!Ce[e]){var n=Object.entries(t.bottlenecks).find((function(t){var n=t[0]
return d().isMatch(e,n)})),r=n?n[1]:{},i=r.minTime,s=void 0===i?400:i,o=r.maxConcurrent,a=void 0===o?1:o
Ce[e]=new(k())({minTime:s,maxConcurrent:a})}return Ce[e]},ke=function(e,t,n){return De(void 0,void 0,void 0,(function(){return Ae(this,(function(r){return[2,we(e.hostname,n).schedule((function(){return be(e.href,t)}))]}))}))},Fe=function(e,t,n){return void 0===t&&(t={}),De(void 0,void 0,void 0,(function(){var r,i,s
return Ae(this,(function(o){switch(o.label){case 0:return[4,ke(e,Ee(Ee({},t),{method:"HEAD"}),n)]
case 1:return 405===(r=o.sent()).status?[2,ke(e,Ee(Ee({},t),{method:"GET"}),n)]:429===r.status&&(i=r.headers.get("retry-after"))?(s=1e3*Number(i),[2,new Promise((function(r){setTimeout((function(){return De(void 0,void 0,void 0,(function(){var i
return Ae(this,(function(s){switch(s.label){case 0:return i=r,[4,Fe(e,t,n)]
case 1:return i.apply(void 0,[s.sent()]),[2]}}))}))}),s)}))]):[2,r]}}))}))},Te={},Pe=function(e,t){return De(void 0,void 0,void 0,(function(){var n,r
return Ae(this,(function(i){return n=e.href,(r=Te[n])?[2,r]:(Te[n]=Fe(e,{},t),[2,Te[n]])}))}))},Re=new Set
const Be=function(e,t){var n=e.link,r=e.url
return De(void 0,void 0,void 0,(function(){var e,i,s,o,a,u,c,l,h
return Ae(this,(function(p){switch(p.label){case 0:if(e=t.linkIncludePatterns,i=t.linkExcludePatterns,s=t.dryRun,!function(e,t,n){var r=n.ignore,i=Se(n,["ignore"])
if(d().isMatch(e,t,i)){if(r)if(Array.isArray(r)){var s=r.find((function(t){return d().isMatch(e,t,i)}))
if(s)return Re.add(s),!1}else if(d().isMatch(e,r,i))return Re.add(r),!1
return!0}return!1}(n,e,{ignore:i,bash:!0}))return[3,5]
if(o=r.href,s)return[2,{link:n,href:n===o?null:o,description:"Skipped because of dry-run",pass:!0}]
p.label=1
case 1:return p.trys.push([1,3,,4]),[4,Pe(r,t)]
case 2:return a=p.sent(),u=a.status,c=a.ok,[2,{link:n,href:n===o?null:o,description:u,pass:c}]
case 3:switch(l=p.sent(),h={link:n,href:o,pass:!1},l.code){case"ENOTFOUND":h.description="Site not found"
break
default:h.description=[l.code||"Fetch Error",l.message&&": "+l.message].filter(Boolean).join("")}return[2,h]
case 4:return[3,6]
case 5:return[2,{link:n,description:"Excluded",pass:!0}]
case 6:return[2]}}))}))}
var Oe=function(e,t,n){void 0===n&&(n=function(e){return e[1]})
for(var r=[],i=t.exec(e);null!==i;){var s=n(i)
s&&r.push(s),i=t.exec(e)}return r},Ie=function(e,t){switch(a().extname(e)){case".md":case".mdx":var n=Oe(t,/\[.*?\]\((?:<((?:\(.*?\)|.)*?)>|((?:\(.*?\)|.)*?))(?: ["'].*?["'])?\)/gm,(function(e){return e[2]||e[1]})),r=Oe(t,/href="(.*?)"/gm),i=n.concat(r)
return i?i.filter(Boolean).map((function(e){return e.startsWith("/static")?e.slice(7):e})):null
case".html":return Oe(t,/href="(.*?)"/gm)
case".json":return Oe(t,/"(?:(?:https?:)?\/\/)?(?:)"/gm)
default:return Oe(t,/(((https?:\/\/)[A-Za-z0-9.-]+|(?:www\.)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/gm,(function(e){return e[0]}))}}
const Ne=function(e){var t=e.filePath,n=e.content
return(Array.isArray(n)?[].concat.apply([],n.map((function(e){return Ie(t,e)}))):Ie(t,n)).filter((function(e){return e&&!e.startsWith("#")}))}
var Le=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},Me=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},je=function(e,t){return Le(void 0,void 0,void 0,(function(){return Me(this,(function(n){return[2,new Promise((function(n,r){c().readFile(e,"utf-8",(function(e,i){e&&r(e),n(t(i))}))}))]}))}))}
function Ue(e,t){return Le(this,void 0,void 0,(function(){return Me(this,(function(n){return[2,Promise.all(e.map(t))]}))}))}var He=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},ze=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},Xe=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o]
return r},qe=function(e,t){var n=e.filePath,r=e.content
return He(void 0,void 0,void 0,(function(){var e,i,s
return ze(this,(function(o){switch(o.label){case 0:return e=t.rootURL,s={filePath:n},[4,"function"==typeof r?r(n):r]
case 1:return s.content=o.sent(),[4,Ue(Ne(s),(function(n){return He(void 0,void 0,void 0,(function(){var r
return ze(this,(function(i){switch(i.label){case 0:return(r=function(e,t){try{return new URL(/^(https?:\/)?\//.test(e)?e:"https://"+e,t)}catch(e){return null}}(n,e))?[4,Be({link:n,url:r},t)]:[2,null]
case 1:return[2,i.sent()]}}))}))}))]
case 2:return i=o.sent().filter(Boolean),[2,{filePath:n,checks:i}]}}))}))}
function $e(e,t){return He(this,void 0,void 0,(function(){var n,r,i,s,o
return ze(this,(function(a){switch(a.label){case 0:return[4,Ue(e,(function(e){return qe(e,t)}))]
case 1:return n=a.sent(),r=n.reduce((function(e,t){var n=e[0],r=e[1],i=e[2],s=t.filePath,o=t.checks,a=o.filter((function(e){return!e.pass}))
return[n+o.length,r+a.length,a.length>0?Xe(i,[{filePath:s,checks:a}]):i]}),[0,0,[]]),i=r[0],s=r[1],o=r[2],[2,{entries:n,failedEntries:o,totalChecksCount:i,failedChecksCount:s,unusedPatterns:(u=t.linkExcludePatterns,u?u.filter((function(e){return!Re.has(e)})):[])}]}var u}))}))}const Je=function(e,t,n){var r=t.output,i=Array.isArray(r)?r:[r]
e.forEach((function(e){var r=e.name,s=e.reporter
i.includes(r)&&s(n,t)}))}
var Ke=function(){return(Ke=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)},Ge=function(e){return"* "+e.filePath+"\n"},We=function(e){var t=e.link,n=e.href,r=e.description
return"  - "+(e.pass?"PASS":"FAIL")+": "+t+(n?" = "+n:"")+" ("+r+")"},Ve=function(e,t){var n=e.filePath,r=e.checks,i=t.fileFormat,s=void 0===i?Ge:i,o=t.linkFormat,a=void 0===o?We:o,u=t.linkSeparator,c=void 0===u?"\n":u
return r.length>0?s({filePath:n,checks:r})+r.map(a).join(c):null},Ye=function(e,t){return Ve(e,Ke({linkFormat:function(e){var t=e.link,n=e.href
return"  - "+t+(n?" = "+n:"")+" ("+e.description+")"},fileFormat:function(e){return"* "+e.filePath+"\n"}},t))}
const Qe=function(e,t){void 0===t&&(t={})
var n=t.entryFormat,r=void 0===n?t.failsOnly?Ye:Ve:n,i=t.entrySeparator,s=void 0===i?"\n\n":i
return e.map((function(e,n){return r(e,t,n)})).filter(Boolean).join(s)}
function Ze(e,t){return void 0===t&&(t="\n\n"),e&&e.length>0?e.filter(Boolean).join(t):void 0}function et(e){console.log(Ze(e))}function tt(t){var n=t.success,r=t.conclusion,i=void 0===r?n?"success":"failure":r,s=t.summarySegments,o=t.descriptionSegments,a=t.summary,u=void 0===a?Ze(s,", "):a,c=t.description,l=void 0===c?Ze(o,"\n\n"):c
e.setOutput("conclusion",i)
var h={summary:u}
l&&(h.text_description=l),e.setOutput("output",JSON.stringify(h))}var nt=function(e){return"* "+e.filePath+"\n"},rt=function(e){var t=e.link,n=e.href,r=e.description
return"  - "+(e.pass?":heavy_check_mark:":":x:")+" "+t+(n&&n!==t?" = "+n:"")+" ("+r+")"},it=function(e){var t=e.link,n=e.href
return"  - "+t+(n&&n!==t?" = "+n:"")+" ("+e.description+")"}
var st=function(){return(st=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)},ot=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},at=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},ut=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},ct=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o]
return r},lt=function(e){if(e){if(!Array.isArray(e))return e
if(e.length>0)return e}return"**"}
function ht(e){return ot(this,void 0,void 0,(function(){var t
return at(this,(function(n){if(!e)return[2,{}]
switch(t=a().extname(e)){case".yml":case".yaml":return[2,je(e,C().safeLoad)]
case".json":return[2,je(e,(function(e){return JSON.parse(String(e))}))]
default:throw new Error('Options file "'+e+'" has unrecognized extension "'+t+'"')}return[2]}))}))}function pt(e){return ot(this,void 0,void 0,(function(){var t
return at(this,(function(n){switch(n.label){case 0:return[4,ht(e)]
case 1:if(t=n.sent(),!Array.isArray(t))throw new Error('File "'+e+'" is expected to be an Array, but was a '+typeof t+"!")
return[2,t]}}))}))}function dt(e){return ot(this,void 0,void 0,(function(){var t,n,r,i,s
return at(this,(function(o){switch(o.label){case 0:return e?Array.isArray(e)?(r=(n=(s=[]).concat).apply,i=[s],[4,Ue(e,pt)]):[3,2]:[2,[]]
case 1:return t=r.apply(n,i.concat([o.sent()])),[3,3]
case 2:t=pt(e),o.label=3
case 3:return[2,t]}}))}))}function ft(e){return ot(this,void 0,void 0,(function(){var t=this
return at(this,(function(n){return[2,Ue(e,(function(e){var n=e[0],r=e[1]
return ot(t,void 0,void 0,(function(){var e
return at(this,(function(t){switch(t.label){case 0:return[4,dt(n)]
case 1:return e=t.sent(),[2,(r?e.concat(r):e).filter(Boolean)]}}))}))}))]}))}))}function mt(e){return ot(this,void 0,void 0,(function(){var t,r,i,s,o,a,u,c,l,h,p,d,f,m,y,g,v,x,_,b,E,D,A
return at(this,(function(S){switch(S.label){case 0:return t=n().apply(void 0,ct([{}],e.filter(Boolean))),r=t.fileIncludePatterns,i=t.fileExcludePatterns,s=t.fileIncludePatternFiles,o=t.fileExcludePatternFiles,a=t.linkIncludePatterns,u=t.linkExcludePatterns,c=t.linkIncludePatternFiles,l=t.linkExcludePatternFiles,h=t.reportUnusedPatterns,p=t.dryRun,d=void 0===p?"only"===h:p,f=t.failOnUnusedPatterns,m=void 0===f?"only"===h:f,y=t.bottlenecks,g=void 0===y?{}:y,v=t.output,x=ut(t,["fileIncludePatterns","fileExcludePatterns","fileIncludePatternFiles","fileExcludePatternFiles","linkIncludePatterns","linkExcludePatterns","linkIncludePatternFiles","linkExcludePatternFiles","reportUnusedPatterns","dryRun","failOnUnusedPatterns","bottlenecks","output"]),[4,ft([[c,a],[l,u],[s,r],[o,i]])]
case 1:return _=S.sent(),b=_[0],E=_[1],D=_[2],A=_[3],[2,st(st({},x),{bottlenecks:g,reportUnusedPatterns:h,dryRun:d,output:v&&(Array.isArray(v)?v:[v]),failOnUnusedPatterns:m,linkIncludePatterns:lt(b),linkExcludePatterns:E,fileIncludePatterns:lt(D),fileExcludePatterns:A})]}}))}))}var yt=function(){return(yt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)},gt=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},vt=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},xt=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},_t=[{name:"checksAction",reporter:function(e,t){var n=e.totalChecksCount,r=e.failedChecksCount,i=e.entries,s=e.failedEntries,o=e.unusedPatterns,a=t.reportUnusedPatterns,u=t.failsOnly,c=[],l=[],h=u?s:i,p={fileFormat:nt,linkFormat:u?it:rt}
if(0===n)return tt({summary:"There were no files to check links in.",success:!0})
if(0===r)return tt({summary:"All links passed the check!",success:!0})
if(a&&o.length>0){var d=o.map((function(e){return"  - "+e})).join("\n\n")
if(c.push("Some link patterns were unused"),l.push("# Unused link exclusion patterns",d),"only"===a)return tt({summarySegments:c,descriptionSegments:l,success:!1})}var f=r>0,m=u?"# Failed Link Checks":"# Link Checks"
return f?(c.push("Some new links failed the check."),l.push(m,Qe(h,p))):(c.push("All new links passed the check!"),u||l.push(m,Qe(h,p))),tt({summarySegments:c,descriptionSegments:l,success:!f})}},{name:"consoleLog",reporter:function(e,t){var n=t.reportUnusedPatterns,r=t.failsOnly,i=e.totalChecksCount,s=e.failedChecksCount,o=e.entries,a=e.failedEntries,u=e.unusedPatterns,c=[],l=r?a:o
if(0===i)c.push("There were no links to check!")
else{var h=Qe(l,{failsOnly:r})
if(n&&(u.length>0?c.push("Some link ignore patterns were unused!\n\n"+u.join("\n")):c.push("All link patterns were used."),"only"===n))return et(c)
c.push(h),s>0?c.push(s+"/"+i+" links failed."):c.push("All "+i+" links passed!")}return et(c)}},{name:"exitCode",reporter:function(e,t){var n=t.failOnUnusedPatterns,r=e.unusedPatterns,i=e.failedChecksCount
n&&r.length>0&&process.exit(2),i>0&&process.exit(2),process.exit(0)}}]
function bt(){return gt(this,void 0,void 0,(function(){var t,n,r,i,s,o,a,u,c,l,h
return vt(this,(function(p){switch(p.label){case 0:return t=["source","configFile","rootURL","dryRun","reportUnusedPatterns","linkIncludePatternFiles","linkIncludePatterns","linkExcludePatternFiles","linkExcludePatterns","fileIncludePatternFiles","fileIncludePatterns","fileExcludePatternFiles","fileExcludePatterns","output","failsOnly","verbose"].reduce((function(t,n){var r,i=function(e){switch(e){case"":return
case"false":return!1
default:return e}}(function(t){var n=e.getInput(t)
try{return JSON.parse(n)}catch(e){if(e instanceof SyntaxError)return n
throw e}}(n))
return void 0===i?t:yt(yt({},t),((r={})[n]=i,r))}),{}),n=t.configFile,r=t.output,i=void 0===r?["consoleLog","exitCode"]:r,s=t.failsOnly,o=void 0===s||s,a=t.verbose,u=void 0!==a&&a,c=xt(t,["configFile","output","failsOnly","verbose"]),l=mt,h=[yt(yt({},c),{output:i,failsOnly:o,verbose:u})],[4,ht(n)]
case 1:return[2,l.apply(void 0,[h.concat([p.sent()])])]}}))}))}!function(){gt(this,void 0,void 0,(function(){var e,t,n
return vt(this,(function(i){switch(i.label){case 0:return e=new Promise((function(e,t){(0,r.exec)("git fetch origin master",(function(n){return n?t(n):e()}))})),[4,bt()]
case 1:return(t=i.sent()).verbose&&console.log("Options:",t),[4,e]
case 2:return i.sent(),[4,A(t)]
case 3:return[4,$e(i.sent(),t)]
case 4:return n=i.sent(),Je(_t,t,n),[2]}}))}))}()})()})()
