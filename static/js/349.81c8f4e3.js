"use strict";(self.webpackChunkthree_model_viewer=self.webpackChunkthree_model_viewer||[]).push([[349],{349:function(e,t,n){n.r(t),n.d(t,{PLYLoader:function(){return a}});var r=n(216);const s=new r.Ilk;class a extends r.aNw{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,n,s){const a=this;var o=new r.hH6(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,(function(n){try{t(a.parse(n))}catch(n){s&&s(n),a.manager.itemError(e)}}),n,s)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(e){let t="",n=0;e=/^ply([\s\S]*)end_header(\r\n|\r|\n)/.exec(e);var r,s,a,o=(null!==e&&(t=e[1],n=new Blob([e[0]]).size),{comments:[],elements:[],headerLength:n,objInfo:""}),i=t.split(/\r\n|\r|\n/);let u;for(let f=0;f<i.length;f++){let e=i[f];if(""!==(e=e.trim())){var l=e.split(/\s+/),c=l.shift();switch(e=l.join(" "),c){case"format":o.format=l[0],o.version=l[1];break;case"comment":o.comments.push(e);break;case"element":void 0!==u&&o.elements.push(u),(u={}).name=l[0],u.count=parseInt(l[1]),u.properties=[];break;case"property":u.properties.push((r=l,s=p.propertyNameMapping,a=void 0,"list"===(a={type:r[0]}).type?(a.name=r[3],a.countType=r[1],a.itemType=r[2]):a.name=r[1],a.name in s&&(a.name=s[a.name]),a));break;case"obj_info":o.objInfo=e}}}return void 0!==u&&o.elements.push(u),o}function n(e,t){switch(t){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(e);case"float":case"double":case"float32":case"float64":return parseFloat(e)}}function a(){var e={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]};for(const t of Object.keys(p.customPropertyMapping))e[t]=[];return e}function o(e,t){var r=a();let s="";var o,l=(s=null!==(e=/end_header\s([\s\S]*)$/.exec(e))?e[1]:s).split(/\r\n|\r|\n/);let c=0,p=0;for(let a=0;a<l.length;a++){let e=l[a];""!==(e=e.trim())&&(p>=t.elements[c].count&&(c++,p=0),o=function(e,t){var r=t.split(/\s+/),s={};for(let i=0;i<e.length;i++)if("list"===e[i].type){var a=[],o=n(r.shift(),e[i].countType);for(let t=0;t<o;t++)a.push(n(r.shift(),e[i].itemType));s[e[i].name]=a}else s[e[i].name]=n(r.shift(),e[i].type);return s}(t.elements[c].properties,e),u(r,t.elements[c].name,o),p++)}return i(r)}function i(e){let t=new r.u9r;0<e.indices.length&&t.setIndex(e.indices),t.setAttribute("position",new r.a$l(e.vertices,3)),0<e.normals.length&&t.setAttribute("normal",new r.a$l(e.normals,3)),0<e.uvs.length&&t.setAttribute("uv",new r.a$l(e.uvs,2)),0<e.colors.length&&t.setAttribute("color",new r.a$l(e.colors,3)),0<e.faceVertexUvs.length&&(t=t.toNonIndexed()).setAttribute("uv",new r.a$l(e.faceVertexUvs,2));for(const n of Object.keys(p.customPropertyMapping))0<e[n].length&&t.setAttribute(n,new r.a$l(e[n],p.customPropertyMapping[n].length));return t.computeBoundingSphere(),t}function u(e,t,n){function r(e){for(let r=0,s=e.length;r<s;r++){var t=e[r];if(t in n)return t}return null}var a=r(["x","px","posx"])||"x",o=r(["y","py","posy"])||"y",i=r(["z","pz","posz"])||"z",u=r(["nx","normalx"]),l=r(["ny","normaly"]),c=r(["nz","normalz"]),f=r(["s","u","texture_u","tx"]),h=r(["t","v","texture_v","ty"]),m=r(["red","diffuse_red","r","diffuse_r"]),d=r(["green","diffuse_green","g","diffuse_g"]),g=r(["blue","diffuse_blue","b","diffuse_b"]);if("vertex"===t){e.vertices.push(n[a],n[o],n[i]),null!==u&&null!==l&&null!==c&&e.normals.push(n[u],n[l],n[c]),null!==f&&null!==h&&e.uvs.push(n[f],n[h]),null!==m&&null!==d&&null!==g&&(s.setRGB(n[m]/255,n[d]/255,n[g]/255).convertSRGBToLinear(),e.colors.push(s.r,s.g,s.b));for(const t of Object.keys(p.customPropertyMapping))for(const r of p.customPropertyMapping[t])e[t].push(n[r])}else"face"===t&&(a=n.vertex_indices||n.vertex_index,o=n.texcoord,3===a.length?(e.indices.push(a[0],a[1],a[2]),o&&6===o.length&&(e.faceVertexUvs.push(o[0],o[1]),e.faceVertexUvs.push(o[2],o[3]),e.faceVertexUvs.push(o[4],o[5]))):4===a.length&&(e.indices.push(a[0],a[1],a[3]),e.indices.push(a[1],a[2],a[3])))}function l(e,t,n,r){switch(n){case"int8":case"char":return[e.getInt8(t),1];case"uint8":case"uchar":return[e.getUint8(t),1];case"int16":case"short":return[e.getInt16(t,r),2];case"uint16":case"ushort":return[e.getUint16(t,r),2];case"int32":case"int":return[e.getInt32(t,r),4];case"uint32":case"uint":return[e.getUint32(t,r),4];case"float32":case"float":return[e.getFloat32(t,r),4];case"float64":case"double":return[e.getFloat64(t,r),8]}}function c(e,t){var n=a(),r="binary_little_endian"===t.format,s=new DataView(e,t.headerLength);let o,c=0;for(let a=0;a<t.elements.length;a++)for(let e=0;e<t.elements[a].count;e++){o=function(e,t,n,r){var s={};let a,o=0;for(let c=0;c<n.length;c++)if("list"===n[c].type){var i=[],u=(a=l(e,t+o,n[c].countType,r))[0];o+=a[1];for(let s=0;s<u;s++)a=l(e,t+o,n[c].itemType,r),i.push(a[0]),o+=a[1];s[n[c].name]=i}else a=l(e,t+o,n[c].type,r),s[n[c].name]=a[0],o+=a[1];return[s,o]}(s,c,t.elements[a].properties,r),c+=o[1];var p=o[0];u(n,t.elements[a].name,p)}return i(n)}const p=this;var f,h;return e instanceof ArrayBuffer?"ascii"===(h=t(f=r.Zp0.decodeText(new Uint8Array(e)))).format?o(f,h):c(e,h):o(e,t(e))}}}}]);