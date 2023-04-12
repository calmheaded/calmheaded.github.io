"use strict";(self.webpackChunkthree_model_viewer=self.webpackChunkthree_model_viewer||[]).push([[24],{7024:function(e,t,a){a.r(t),a.d(t,{LDrawLoader:function(){return v}});var r=a(216);const n="16",i="24",o=new r.Pa4,s=new r.Pa4;class l extends r.jyz{constructor(e){super({uniforms:r.rDY.merge([r.rBU.fog,{diffuse:{value:new r.Ilk},opacity:{value:1}}]),vertexShader:"\n\t\t\t\tattribute vec3 control0;\n\t\t\t\tattribute vec3 control1;\n\t\t\t\tattribute vec3 direction;\n\t\t\t\tvarying float discardFlag;\n\n\t\t\t\t#include <common>\n\t\t\t\t#include <color_pars_vertex>\n\t\t\t\t#include <fog_pars_vertex>\n\t\t\t\t#include <logdepthbuf_pars_vertex>\n\t\t\t\t#include <clipping_planes_pars_vertex>\n\t\t\t\tvoid main() {\n\t\t\t\t\t#include <color_vertex>\n\n\t\t\t\t\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t\tgl_Position = projectionMatrix * mvPosition;\n\n\t\t\t\t\t// Transform the line segment ends and control points into camera clip space\n\t\t\t\t\tvec4 c0 = projectionMatrix * modelViewMatrix * vec4( control0, 1.0 );\n\t\t\t\t\tvec4 c1 = projectionMatrix * modelViewMatrix * vec4( control1, 1.0 );\n\t\t\t\t\tvec4 p0 = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t\tvec4 p1 = projectionMatrix * modelViewMatrix * vec4( position + direction, 1.0 );\n\n\t\t\t\t\tc0.xy /= c0.w;\n\t\t\t\t\tc1.xy /= c1.w;\n\t\t\t\t\tp0.xy /= p0.w;\n\t\t\t\t\tp1.xy /= p1.w;\n\n\t\t\t\t\t// Get the direction of the segment and an orthogonal vector\n\t\t\t\t\tvec2 dir = p1.xy - p0.xy;\n\t\t\t\t\tvec2 norm = vec2( -dir.y, dir.x );\n\n\t\t\t\t\t// Get control point directions from the line\n\t\t\t\t\tvec2 c0dir = c0.xy - p1.xy;\n\t\t\t\t\tvec2 c1dir = c1.xy - p1.xy;\n\n\t\t\t\t\t// If the vectors to the controls points are pointed in different directions away\n\t\t\t\t\t// from the line segment then the line should not be drawn.\n\t\t\t\t\tfloat d0 = dot( normalize( norm ), normalize( c0dir ) );\n\t\t\t\t\tfloat d1 = dot( normalize( norm ), normalize( c1dir ) );\n\t\t\t\t\tdiscardFlag = float( sign( d0 ) != sign( d1 ) );\n\n\t\t\t\t\t#include <logdepthbuf_vertex>\n\t\t\t\t\t#include <clipping_planes_vertex>\n\t\t\t\t\t#include <fog_vertex>\n\t\t\t\t}\n\t\t\t",fragmentShader:"\n\t\t\tuniform vec3 diffuse;\n\t\t\tuniform float opacity;\n\t\t\tvarying float discardFlag;\n\n\t\t\t#include <common>\n\t\t\t#include <color_pars_fragment>\n\t\t\t#include <fog_pars_fragment>\n\t\t\t#include <logdepthbuf_pars_fragment>\n\t\t\t#include <clipping_planes_pars_fragment>\n\t\t\tvoid main() {\n\n\t\t\t\tif ( discardFlag > 0.5 ) discard;\n\n\t\t\t\t#include <clipping_planes_fragment>\n\t\t\t\tvec3 outgoingLight = vec3( 0.0 );\n\t\t\t\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t\t\t\t#include <logdepthbuf_fragment>\n\t\t\t\t#include <color_fragment>\n\t\t\t\toutgoingLight = diffuseColor.rgb; // simple shader\n\t\t\t\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t\t\t\t#include <tonemapping_fragment>\n\t\t\t\t#include <encodings_fragment>\n\t\t\t\t#include <fog_fragment>\n\t\t\t\t#include <premultiplied_alpha_fragment>\n\t\t\t}\n\t\t\t"}),Object.defineProperties(this,{opacity:{get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},color:{get:function(){return this.uniforms.diffuse.value}}}),this.setValues(e),this.isLDrawConditionalLineMaterial=!0}}class c extends r.ejS{constructor(e,t){super(e,t),this.isConditionalLine=!0}}const h=new r.zHn;function d(e){return"Part"===e||"Unofficial_Part"===e}class u{constructor(e,t){this.line=e,this.lineLength=e.length,this.currentCharIndex=0,this.currentChar=" ",this.lineNumber=t}seekNonSpace(){for(;this.currentCharIndex<this.lineLength;){if(this.currentChar=this.line.charAt(this.currentCharIndex)," "!==this.currentChar&&"\t"!==this.currentChar)return;this.currentCharIndex++}}getToken(){for(var e=this.currentCharIndex++;this.currentCharIndex<this.lineLength&&(this.currentChar=this.line.charAt(this.currentCharIndex)," "!==this.currentChar)&&"\t"!==this.currentChar;)this.currentCharIndex++;var t=this.currentCharIndex;return this.seekNonSpace(),this.line.substring(e,t)}getVector(){return new r.Pa4(parseFloat(this.getToken()),parseFloat(this.getToken()),parseFloat(this.getToken()))}getRemainingString(){return this.line.substring(this.currentCharIndex,this.lineLength)}isAtTheEnd(){return this.currentCharIndex>=this.lineLength}setToEnd(){this.currentCharIndex=this.lineLength}getLineNumberString(){return 0<=this.lineNumber?" at line "+this.lineNumber:""}}class g{constructor(e){this.loader=e,this._cache={}}cloneResult(e){var t={};return t.faces=e.faces.map((e=>({colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((e=>e.clone())),normals:e.normals.map((()=>null)),faceNormal:null}))),t.conditionalSegments=e.conditionalSegments.map((e=>({colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((e=>e.clone())),controlPoints:e.controlPoints.map((e=>e.clone()))}))),t.lineSegments=e.lineSegments.map((e=>({colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((e=>e.clone()))}))),t.type=e.type,t.category=e.category,t.keywords=e.keywords,t.author=e.author,t.subobjects=e.subobjects,t.fileName=e.fileName,t.totalFaces=e.totalFaces,t.startingBuildingStep=e.startingBuildingStep,t.materials=e.materials,t.group=null,t}async fetchData(e){let t=!1,a=0;for(;6!==a;){let o=e;switch(a){case 3:a+=1;break;case 0:o="parts/"+o,a+=1;break;case 1:o="p/"+o,a+=1;break;case 2:o="models/"+o,a+=1;break;case 4:o=e.substring(0,e.lastIndexOf("/")+1)+o,a+=1;break;case 5:a=t?6:(e=e.toLowerCase(),o=e,t=!0,0)}var n=this.loader,i=new r.hH6(n.manager);i.setPath(n.partsLibraryPath),i.setRequestHeader(n.requestHeader),i.setWithCredentials(n.withCredentials);try{return await i.loadAsync(o)}catch{continue}}throw new Error('LDrawLoader: Subobject "'+e+'" could not be loaded.')}parse(e,t=null){var a=this.loader,n=[],i=[],o=[],s=[];const l={};var c=e=>l[e]||null;let h="Model",d=null,g=null,m=null,p=0;var f=(e=-1!==e.indexOf("\r\n")?e.replace(/\r\n/g,"\n"):e).split("\n"),C=f.length;let v=!1,w=null,M=null,b=!1,y=!0,k=!1,L=!0,x=!1;for(let G=0;G<C;G++){var E=f[G];if(0!==E.length)if(v)E.startsWith("0 FILE ")?(this.setData(w,M),w=E.substring(7),M=""):M+=E+"\n";else{var D=new u(E,G+1);if(D.seekNonSpace(),!D.isAtTheEnd()){var T=D.getToken();let e,t,u,f,C,E,U,H,q,Y,K;switch(T){case"0":var S=D.getToken();if(S)switch(S){case"!LDRAW_ORG":h=D.getToken();break;case"!COLOUR":(e=a.parseColorMetaDirective(D))&&(l[e.userData.code]=e);break;case"!CATEGORY":d=D.getToken();break;case"!KEYWORDS":var N=D.getRemainingString().split(",");0<N.length&&(g=g||[],N.forEach((function(e){g.push(e.trim())})));break;case"FILE":0<G&&(v=!0,w=D.getRemainingString(),M="",b=!1,y=!0);break;case"BFC":for(;!D.isAtTheEnd();){var _=D.getToken();switch(_){case"CERTIFY":case"NOCERTIFY":b="CERTIFY"===_,y=!0;break;case"CW":case"CCW":y="CCW"===_;break;case"INVERTNEXT":k=!0;break;case"CLIP":case"NOCLIP":L="CLIP"===_}}break;case"STEP":x=!0;break;case"Author:":m=D.getToken()}break;case"1":t=D.getToken(),e=c(t);S=parseFloat(D.getToken());var A=parseFloat(D.getToken()),F=parseFloat(D.getToken()),V=parseFloat(D.getToken()),I=parseFloat(D.getToken()),P=parseFloat(D.getToken()),R=parseFloat(D.getToken()),W=parseFloat(D.getToken()),z=parseFloat(D.getToken()),O=parseFloat(D.getToken()),B=parseFloat(D.getToken()),j=parseFloat(D.getToken());V=(new r.yGw).set(V,I,P,S,R,W,z,A,O,B,j,F,0,0,0,1);let X=D.getRemainingString().trim().replace(/\\/g,"/");a.fileMap[X]?X=a.fileMap[X]:X.startsWith("s/")?X="parts/"+X:X.startsWith("48/")&&(X="p/"+X),s.push({material:e,colorCode:t,matrix:V,fileName:X,inverted:k,startingBuildingStep:x}),x=!1,k=!1;break;case"2":t=D.getToken(),e=c(t),E=D.getVector(),U=D.getVector(),u={material:e,colorCode:t,vertices:[E,U]},i.push(u);break;case"5":t=D.getToken(),e=c(t),E=D.getVector(),U=D.getVector(),Y=D.getVector(),K=D.getVector(),u={material:e,colorCode:t,vertices:[E,U],controlPoints:[Y,K]},o.push(u);break;case"3":t=D.getToken(),e=c(t),f=y,C=!b||!L,!0===f?(E=D.getVector(),U=D.getVector(),H=D.getVector()):(H=D.getVector(),U=D.getVector(),E=D.getVector()),n.push({material:e,colorCode:t,faceNormal:null,vertices:[E,U,H],normals:[null,null,null]}),p++,!0===C&&(n.push({material:e,colorCode:t,faceNormal:null,vertices:[H,U,E],normals:[null,null,null]}),p++);break;case"4":t=D.getToken(),e=c(t),f=y,C=!b||!L,!0===f?(E=D.getVector(),U=D.getVector(),H=D.getVector(),q=D.getVector()):(q=D.getVector(),H=D.getVector(),U=D.getVector(),E=D.getVector()),n.push({material:e,colorCode:t,faceNormal:null,vertices:[E,U,H,q],normals:[null,null,null,null]}),p+=2,!0===C&&(n.push({material:e,colorCode:t,faceNormal:null,vertices:[q,H,U,E],normals:[null,null,null,null]}),p+=2);break;default:throw new Error('LDrawLoader: Unknown line type "'+T+'"'+D.getLineNumberString()+".")}}}}return v&&this.setData(w,M),{faces:n,conditionalSegments:o,lineSegments:i,type:h,category:d,keywords:g,author:m,subobjects:s,totalFaces:p,startingBuildingStep:x,materials:l,fileName:t,group:null}}getData(e,t=!0){return e=e.toLowerCase(),e=this._cache[e],null===e||e instanceof Promise?null:t?this.cloneResult(e):e}async ensureDataLoaded(e){const t=e.toLowerCase();t in this._cache||(this._cache[t]=this.fetchData(e).then((a=>(a=this.parse(a,e),this._cache[t]=a)))),await this._cache[t]}setData(e,t){var a=e.toLowerCase();this._cache[a]=this.parse(t,e)}}function m(e,t,a,r){return a[e=!r&&e===n||r&&e===i?t:e]||null}class p{constructor(e){this.loader=e,this.parseCache=new g(e),this._cache={}}async processIntoMesh(e){const t=this.loader,a=this.parseCache,l=new Set,c=async(e,o=null)=>{var s=e.subobjects,h=[];for(let t=0,r=s.length;t<r;t++){const e=s[t];var d=a.ensureDataLoaded(e.fileName).then((()=>{var t=a.getData(e.fileName,!1);return t=t.type,/primitive/i.test(t)||"Subpart"===t?c(a.getData(e.fileName),e):this.loadModel(e.fileName).catch((e=>null))}));h.push(d)}var u=new r.ZAu,g=(u.userData.category=e.category,u.userData.keywords=e.keywords,u.userData.author=e.author,u.userData.type=e.type,u.userData.fileName=e.fileName,e.group=u,await Promise.all(h));for(let a=0,r=g.length;a<r;a++){const r=e.subobjects[a];var p=g[a];if(null!==p)if(p.isGroup){var f=p;r.matrix.decompose(f.position,f.quaternion,f.scale),f.userData.startingBuildingStep=r.startingBuildingStep,f.name=r.fileName,t.applyMaterialsToMesh(f,r.colorCode,e.materials),f.userData.colorCode=r.colorCode,u.add(f)}else{p.group.children.length&&u.add(p.group);var C=e.lineSegments,v=e.conditionalSegments,w=e.faces,M=p.lineSegments,b=p.conditionalSegments,y=p.faces,k=r.matrix,L=r.inverted,x=k.determinant()<0,E=r.colorCode,D=E===n?i:E;for(let t=0,a=M.length;t<a;t++){var T=M[t],S=T.vertices;S[0].applyMatrix4(k),S[1].applyMatrix4(k),T.colorCode=T.colorCode===i?D:T.colorCode,T.material=T.material||m(T.colorCode,T.colorCode,e.materials,!0),C.push(T)}for(let t=0,a=b.length;t<a;t++){var N=b[t],_=N.vertices,A=N.controlPoints;_[0].applyMatrix4(k),_[1].applyMatrix4(k),A[0].applyMatrix4(k),A[1].applyMatrix4(k),N.colorCode=N.colorCode===i?D:N.colorCode,N.material=N.material||m(N.colorCode,N.colorCode,e.materials,!0),v.push(N)}for(let t=0,a=y.length;t<a;t++){var F=y[t],V=F.vertices;for(let e=0,t=V.length;e<t;e++)V[e].applyMatrix4(k);F.colorCode=F.colorCode===n?E:F.colorCode,F.material=F.material||m(F.colorCode,E,e.materials,!1),l.add(F.colorCode),x!==L&&V.reverse(),w.push(F)}e.totalFaces+=p.totalFaces}}return o&&(t.applyMaterialsToMesh(u,o.colorCode,e.materials),u.userData.colorCode=o.colorCode),e};for(let te=0,ae=e.faces;te<ae;te++)l.add(e.faces[te].colorCode);if(await c(e),t.smoothNormals){var d=1<l.size,u=e.faces;for(let re=0,ne=u.length;re<ne;re++){var g=u[re],p=g.vertices,f=p[0],v=p[1];p=p[2];o.subVectors(v,f),s.subVectors(p,v),g.faceNormal=(new r.Pa4).crossVectors(o,s).normalize()}{var w=e.faces,M=e.lineSegments,b=d;const ie=100*(1+1e-10);function oe(e){return~~(e.x*ie)+`,${~~(e.y*ie)},`+~~(e.z*ie)}function se(e,t){return oe(e)+"_"+oe(t)}function le(e,t,a){return a.direction.subVectors(t,e).normalize(),t=e.dot(a.direction),a.origin.copy(e).addScaledVector(a.direction,-t),a}function ce(e){return se(e.origin,e.direction)}var y=new Set,k=new Map,L={},x=[];for(let he=0,de=M.length;he<de;he++){var E=M[he].vertices,D=E[0];E=E[1];if(y.add(se(D,E)),y.add(se(E,D)),b){var T=le(D,E,new r.zHn),S=ce(T),N=(k.has(S)||(le(E,D,T),N=ce(T),k.set(S,T={ray:T,distances:[]}),k.set(N,T)),k.get(S));let ue=N.ray.direction.dot(D),ge=N.ray.direction.dot(E);ue>ge&&([ue,ge]=[ge,ue]),N.distances.push(ue,ge)}}for(let me=0,pe=w.length;me<pe;me++){var _=w[me],A=_.vertices,F=A.length;for(let fe=0;fe<F;fe++){var V=fe,I=(fe+1)%F,P=A[V],R=(I=A[I],se(P,I));if(!y.has(R)){if(b){le(P,I,h);var W=ce(h);if(k.has(W)){var{ray:W,distances:z}=k.get(W);let Ce=W.direction.dot(P),ve=W.direction.dot(I),we=(Ce>ve&&([Ce,ve]=[ve,Ce]),!1);for(let Me=0,be=z.length;Me<be;Me+=2)if(Ce>=z[Me]&&ve<=z[Me+1]){we=!0;break}if(we)continue}}L[R]={index:V,tri:_}}}}for(;;){let ye=null;for(const ke in L){ye=L[ke];break}if(null===ye)break;for(var O=[ye];0<O.length;){var B=O.pop().tri,j=B.vertices,G=B.normals,U=B.faceNormal,H=j.length;for(let Le=0;Le<H;Le++){var q=Le,Y=(Le+1)%H,K=j[q],X=j[Y];X=(delete L[se(K,X)],se(X,K)),K=L[X];if(K){var Z=K.tri,$=K.index,J=Z.normals,Q=J.length,ee=Z.faceNormal;if(!(Math.abs(Z.faceNormal.dot(B.faceNormal))<.25)){X in L&&(O.push(K),delete L[X]),Z=($+1)%Q,G[q]&&J[Z]&&G[q]!==J[Z]&&(J[Z].norm.add(G[q].norm),G[q].norm=J[Z].norm);let xe=G[q]||J[Z],Ee=(null===xe&&(xe={norm:new r.Pa4},x.push(xe.norm)),null===G[q]&&(G[q]=xe).norm.add(U),null===J[Z]&&(J[Z]=xe).norm.add(ee),G[Y]&&J[$]&&G[Y]!==J[$]&&(J[$].norm.add(G[Y].norm),G[Y].norm=J[$].norm),G[Y]||J[$]);null===Ee&&(Ee={norm:new r.Pa4},x.push(Ee.norm)),null===G[Y]&&(G[Y]=Ee).norm.add(U),null===J[$]&&(J[$]=Ee).norm.add(ee)}}}}}for(let De=0,Te=x.length;De<Te;De++)x[De].normalize()}}return d=e.group,0<e.faces.length&&d.add(C(e.faces,3,!1,e.totalFaces)),0<e.lineSegments.length&&d.add(C(e.lineSegments,2)),0<e.conditionalSegments.length&&d.add(C(e.conditionalSegments,2,!0)),d}hasCachedModel(e){return null!==e&&e.toLowerCase()in this._cache}async getCachedModel(e){return null!==e&&this.hasCachedModel(e)?(e=e.toLowerCase(),(await this._cache[e]).clone()):null}async loadModel(e){var t,a=this.parseCache,r=e.toLowerCase();return this.hasCachedModel(e)||(await a.ensureDataLoaded(e),a=a.getData(e),t=this.processIntoMesh(a),this.hasCachedModel(e))?this.getCachedModel(e):(d(a.type)&&(this._cache[r]=t),(await t).clone())}async parseModel(e){return e=this.parseCache.parse(e),d(e.type)&&this.hasCachedModel(e.fileName)?this.getCachedModel(e.fileName):this.processIntoMesh(e)}}function f(e,t){return e.colorCode===t.colorCode?0:e.colorCode<t.colorCode?-1:1}function C(e,t,a=!1,n=null){e.sort(f),null===n&&(n=e.length);var i=new Float32Array(t*n*3),l=3===t?new Float32Array(t*n*3):null,h=[],d=new Array(6),u=new r.u9r;let g=null,m=0,p=0,C=0;for(let c=0,f=e.length;c<f;c++){var v,w,M,b=e[c];let n=b.vertices;4===n.length&&(d[0]=n[0],d[1]=n[1],d[2]=n[2],d[3]=n[0],d[4]=n[2],d[5]=n[3],n=d);for(let e=0,t=n.length;e<t;e++){var y=n[e],k=C+3*e;i[k+0]=y.x,i[k+1]=y.y,i[k+2]=y.z}if(3===t){b.faceNormal||(M=n[0],v=n[1],w=n[2],o.subVectors(v,M),s.subVectors(w,v),b.faceNormal=(new r.Pa4).crossVectors(o,s).normalize());let e=b.normals;4===e.length&&(d[0]=e[0],d[1]=e[1],d[2]=e[2],d[3]=e[0],d[4]=e[2],d[5]=e[3],e=d);for(let t=0,a=e.length;t<a;t++){let a=b.faceNormal;e[t]&&(a=e[t].norm);var L=C+3*t;l[L+0]=a.x,l[L+1]=a.y,l[L+2]=a.z}}g!==b.colorCode?(null!==g&&u.addGroup(m,p,h.length-1),null!==(M=b.material)?3===t?h.push(M):2===t&&h.push(a?M.userData.edgeMaterial.userData.conditionalEdgeMaterial:M.userData.edgeMaterial):h.push(b.colorCode),g=b.colorCode,m=C/3,p=n.length):p+=n.length,C+=3*n.length}0<p&&u.addGroup(m,1/0,h.length-1),u.setAttribute("position",new r.TlE(i,3)),null!==l&&u.setAttribute("normal",new r.TlE(l,3));let x=null;if(2===t?x=new(a?c:r.ejS)(u,1===h.length?h[0]:h):3===t&&(x=new r.Kj0(u,1===h.length?h[0]:h)),a){x.isConditionalLine=!0;var E=new Float32Array(3*e.length*2),D=new Float32Array(3*e.length*2),T=new Float32Array(3*e.length*2);for(let t=0,a=e.length;t<a;t++){var S=e[t],N=S.vertices,_=(S=S.controlPoints,S[0]),A=(S=S[1],N[0]),F=(N=N[1],3*t*2);E[0+F]=_.x,E[1+F]=_.y,E[2+F]=_.z,E[3+F]=_.x,E[4+F]=_.y,E[5+F]=_.z,D[0+F]=S.x,D[1+F]=S.y,D[2+F]=S.z,D[3+F]=S.x,D[4+F]=S.y,D[5+F]=S.z,T[0+F]=N.x-A.x,T[1+F]=N.y-A.y,T[2+F]=N.z-A.z,T[3+F]=N.x-A.x,T[4+F]=N.y-A.y,T[5+F]=N.z-A.z}u.setAttribute("control0",new r.TlE(E,3,!1)),u.setAttribute("control1",new r.TlE(D,3,!1)),u.setAttribute("direction",new r.TlE(T,3,!1))}return x}class v extends r.aNw{constructor(e){super(e),this.materials=[],this.materialLibrary={},this.partsCache=new p(this),this.fileMap={},this.setMaterials([]),this.smoothNormals=!0,this.partsLibraryPath="",this.missingColorMaterial=new r.Wid({color:16711935,roughness:.3,metalness:0}),this.missingColorMaterial.name="Missing material",this.missingEdgeColorMaterial=new r.nls({color:16711935}),this.missingEdgeColorMaterial.name="Missing material - Edge",this.missingConditionalEdgeColorMaterial=new l({fog:!0,color:16711935}),this.missingConditionalEdgeColorMaterial.name="Missing material - Conditional Edge",this.missingColorMaterial.userData.edgeMaterial=this.missingEdgeColorMaterial,this.missingEdgeColorMaterial.userData.conditionalEdgeMaterial=this.missingConditionalEdgeColorMaterial}setPartsLibraryPath(e){return this.partsLibraryPath=e,this}async preloadMaterials(e){var t=new r.hH6(this.manager);t.setPath(this.path),t.setRequestHeader(this.requestHeader),t.setWithCredentials(this.withCredentials);var a=/^0 !COLOUR/,n=(await t.loadAsync(e)).split(/[\n\r]/g),i=[];for(let r=0,s=n.length;r<s;r++){var o=n[r];a.test(o)&&(o=o.replace(a,""),o=this.parseColorMetaDirective(new u(o)),i.push(o))}this.setMaterials(i)}load(e,t,a,i){var o=new r.hH6(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,(a=>{this.partsCache.parseModel(a,this.materialLibrary).then((a=>{this.applyMaterialsToMesh(a,n,this.materialLibrary,!0),this.computeBuildingSteps(a),a.userData.fileName=e,t(a)})).catch(i)}),a,i)}parse(e,t){this.partsCache.parseModel(e,this.materialLibrary).then((e=>{this.applyMaterialsToMesh(e,n,this.materialLibrary,!0),this.computeBuildingSteps(e),e.userData.fileName="",t(e)}))}setMaterials(e){this.materialLibrary={},this.materials=[];for(let t=0,a=e.length;t<a;t++)this.addMaterial(e[t]);return this.addMaterial(this.parseColorMetaDirective(new u("Main_Colour CODE 16 VALUE #FF8080 EDGE #333333"))),this.addMaterial(this.parseColorMetaDirective(new u("Edge_Colour CODE 24 VALUE #A0A0A0 EDGE #333333"))),this}setFileMap(e){return this.fileMap=e,this}addMaterial(e){var t=this.materialLibrary;return t[e.userData.code]||(this.materials.push(e),t[e.userData.code]=e),this}getMaterial(e){var t;return e.startsWith("0x2")?(t=e.substring(3),this.parseColorMetaDirective(new u("Direct_Color_"+t+" CODE -1 VALUE #"+t+" EDGE #"+t))):this.materialLibrary[e]||null}applyMaterialsToMesh(e,t,a,r=!1){const o=this,s=t===n;function l(e,l){if(s&&!(l in a)&&!r)return l;var c=e.isLineSegments||e.isConditionalLine;let h=null;if((l=!c&&l===n||c&&l===i?t:l)in a)h=a[l];else{if(!r)return l;null===(h=o.getMaterial(l))&&(h=o.missingColorMaterial)}return e.isLineSegments&&(h=h.userData.edgeMaterial,e.isConditionalLine)?h.userData.conditionalEdgeMaterial:h}e.traverse((e=>{if(e.isMesh||e.isLineSegments)if(Array.isArray(e.material))for(let t=0,a=e.material.length;t<a;t++)e.material[t].isMaterial||(e.material[t]=l(e,e.material[t]));else e.material.isMaterial||(e.material=l(e,e.material))}))}getMainMaterial(){return this.getMaterial(n)}getMainEdgeMaterial(){var e=this.getMaterial(i);return e?e.userData.edgeMaterial:null}parseColorMetaDirective(e){let t=null,a=16711935,n=16711935,i=1,o=!1,s=0,c=0,h=null;var d=e.getToken();if(!d)throw new Error('LDrawLoader: Material name was expected after "!COLOUR tag'+e.getLineNumberString()+".");for(var g=null;g=e.getToken();)if(!p(g))switch(g.toUpperCase()){case"CODE":t=e.getToken();break;case"VALUE":if((a=e.getToken()).startsWith("0x"))a="#"+a.substring(2);else if(!a.startsWith("#"))throw new Error("LDrawLoader: Invalid color while parsing material"+e.getLineNumberString()+".");break;case"EDGE":if((n=e.getToken()).startsWith("0x"))n="#"+n.substring(2);else if(!n.startsWith("#")){if(!(h=this.getMaterial(n)))throw new Error("LDrawLoader: Invalid edge color while parsing material"+e.getLineNumberString()+".");h=h.userData.edgeMaterial}break;case"ALPHA":if(i=parseInt(e.getToken()),isNaN(i))throw new Error("LDrawLoader: Invalid alpha value in material definition"+e.getLineNumberString()+".");(i=Math.max(0,Math.min(1,i/255)))<1&&(o=!0);break;case"LUMINANCE":if(p(e.getToken()))break;throw new Error("LDrawLoader: Invalid luminance value in material definition"+u.getLineNumberString()+".");case"CHROME":c=1;break;case"PEARLESCENT":c=2;break;case"RUBBER":c=3;break;case"MATTE_METALLIC":c=4;break;case"METAL":c=5;break;case"MATERIAL":e.setToEnd();break;default:throw new Error('LDrawLoader: Unknown token "'+g+'" while parsing material'+e.getLineNumberString()+".")}let m=null;switch(c){case 0:m=new r.Wid({color:a,roughness:.3,metalness:0});break;case 2:m=new r.Wid({color:a,roughness:.3,metalness:.25});break;case 1:m=new r.Wid({color:a,roughness:0,metalness:1});break;case 3:m=new r.Wid({color:a,roughness:.9,metalness:0});break;case 4:m=new r.Wid({color:a,roughness:.8,metalness:.4});break;case 5:m=new r.Wid({color:a,roughness:.2,metalness:.85})}return m.transparent=o,m.premultipliedAlpha=!0,m.opacity=i,m.depthWrite=!o,m.color.convertSRGBToLinear(),m.polygonOffset=!0,m.polygonOffsetFactor=1,0!==s&&m.emissive.set(m.color).multiplyScalar(s),h||((h=new r.nls({color:n,transparent:o,opacity:i,depthWrite:!o})).userData.code=t,h.name=d+" - Edge",h.color.convertSRGBToLinear(),h.userData.conditionalEdgeMaterial=new l({fog:!0,transparent:o,depthWrite:!o,color:n,opacity:i}),h.userData.conditionalEdgeMaterial.color.convertSRGBToLinear(),h.userData.conditionalEdgeMaterial.userData.code=t,h.userData.conditionalEdgeMaterial.name=d+" - Conditional Edge"),m.userData.code=t,m.name=d,m.userData.edgeMaterial=h,this.addMaterial(m),m;function p(e){let t;return t=e.startsWith("LUMINANCE")?parseInt(e.substring(9)):parseInt(e),!isNaN(t)&&(s=Math.max(0,Math.min(1,t/255)),1)}}computeBuildingSteps(e){let t=0;e.traverse((e=>{e.isGroup&&(e.userData.startingBuildingStep&&t++,e.userData.buildingStep=t)})),e.userData.numBuildingSteps=t+1}}}}]);