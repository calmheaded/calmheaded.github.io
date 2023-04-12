"use strict";(self.webpackChunkthree_model_viewer=self.webpackChunkthree_model_viewer||[]).push([[539],{539:function(e,t,r){r.r(t),r.d(t,{DRACOLoader:function(){return i}});var s=r(216);const o=new WeakMap;class i extends s.aNw{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,r,o){var i=new s.hH6(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,(e=>{this.decodeDracoFile(e,t).catch(o)}),r,o)}decodeDracoFile(e,t,r,s){return s={attributeIDs:r||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!r},this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){var r=JSON.stringify(t);if(o.has(e)){var s=o.get(e);if(s.key===r)return s.promise;if(0===e.byteLength)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const a=this.workerNextTaskID++;return s=e.byteLength,s=this._getWorker(a,s).then((r=>(i=r,new Promise(((r,s)=>{i._callbacks[a]={resolve:r,reject:s},i.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))))).then((e=>this._createGeometry(e.geometry))),s.catch((()=>!0)).then((()=>{i&&a&&this._releaseTask(i,a)})),o.set(e,{key:r,promise:s}),s}_createGeometry(e){var t=new s.u9r;e.index&&t.setIndex(new s.TlE(e.index.array,1));for(let a=0;a<e.attributes.length;a++){var r=e.attributes[a],o=r.name,i=r.array;r=r.itemSize;t.setAttribute(o,new s.TlE(i,r))}return t}_loadLibrary(e,t){const r=new s.hH6(this.manager);return r.setPath(this.decoderPath),r.setResponseType(t),r.setWithCredentials(this.withCredentials),new Promise(((t,s)=>{r.load(e,t,void 0,s)}))}preload(){return this._initDecoder(),this}_initDecoder(){if(!this.decoderPending){const t="object"!=typeof WebAssembly||"js"===this.decoderConfig.type;var e=[];t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then((e=>{var r=e[0];t||(this.decoderConfig.wasmBinary=e[1]),e=function(){let e,t;function r(e,t,r,s){var o=s.attributeIDs,i=s.attributeTypes;let a,n;var d=t.GetEncodedGeometryType(r);if(d===e.TRIANGULAR_MESH)a=new e.Mesh,n=t.DecodeBufferToMesh(r,a);else{if(d!==e.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");a=new e.PointCloud,n=t.DecodeBufferToPointCloud(r,a)}if(!n.ok()||0===a.ptr)throw new Error("THREE.DRACOLoader: Decoding failed: "+n.error_msg());var c,h,u,l,f,y,w,_,b,k,p,g,m,T,A={index:null,attributes:[]};for(const L in o){var D=self[i[L]];let r,n;if(s.useUniqueIDs)n=o[L],r=t.GetAttributeByUniqueId(a,n);else{if(-1===(n=t.GetAttributeId(a,e[o[L]])))continue;r=t.GetAttribute(a,n)}A.attributes.push((c=e,h=t,u=a,l=L,f=r,k=b=_=w=y=void 0,y=f.num_components(),w=u.num_points(),_=(w*=y)*D.BYTES_PER_ELEMENT,b=function(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}(c,D),k=c._malloc(_),h.GetAttributeDataArrayForAllPoints(u,f,b,_,k),h=new D(c.HEAPF32.buffer,k,w).slice(),c._free(k),{name:l,array:h,itemSize:y}))}return d===e.TRIANGULAR_MESH&&(A.index=(r=e,d=t,p=a,g=p.num_faces(),m=4*(g*=3),T=r._malloc(m),d.GetTrianglesUInt32Array(p,m,T),d=new Uint32Array(r.HEAPF32.buffer,T,g).slice(),r._free(T),{array:d,itemSize:1})),e.destroy(a),A}onmessage=function(s){const o=s.data;switch(o.type){case"init":e=o.decoderConfig,t=new Promise((function(t){e.onModuleLoaded=function(e){t({draco:e})},DracoDecoderModule(e)}));break;case"decode":const s=o.buffer,i=o.taskConfig;t.then((e=>{e=e.draco;var t=new e.Decoder,a=new e.DecoderBuffer;a.Init(new Int8Array(s),s.byteLength);try{var n=r(e,t,a,i),d=n.attributes.map((e=>e.array.buffer));n.index&&d.push(n.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:n},d)}catch(e){self.postMessage({type:"error",id:o.id,error:e.message})}finally{e.destroy(a),e.destroy(t)}}))}}}.toString(),r=["/* draco decoder */",r,"","/* worker */",e.substring(e.indexOf("{")+1,e.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([r]))}))}return this.decoderPending}_getWorker(e,t){return this._initDecoder().then((()=>{if(this.workerPool.length<this.workerLimit){const e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:"init",decoderConfig:this.decoderConfig}),e.onmessage=function(t){var r=t.data;switch(r.type){case"decode":e._callbacks[r.id].resolve(r);break;case"error":e._callbacks[r.id].reject(r)}},this.workerPool.push(e)}else this.workerPool.sort((function(e,t){return e._taskLoad>t._taskLoad?-1:1}));const r=this.workerPool[this.workerPool.length-1];return r._taskCosts[e]=t,r._taskLoad+=t,r}))}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}}}]);