(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{fwcY:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),i=u("pMnS"),e=function(){function l(){this.testEnemy={id:0,color:"orange",x:Math.floor(-10*Math.random()+5),y:1.3,z:Math.floor(-10*Math.random()+5)},this.gamepads={}}return l.prototype.ngOnInit=function(){window.addEventListener("gamepadconnected",function(l){console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",l.gamepad.index,l.gamepad.id,l.gamepad.buttons.length,l.gamepad.axes.length),this.controller=l.gamepad}),document.querySelector("#start-1").addEventListener("mouseenter",function(){this.setAttribute("material","color","blue")}),document.querySelector("#start-1").addEventListener("mouseleave",function(){this.setAttribute("material","color","green")})},l}(),r=t.kb({encapsulation:0,styles:[[".title-text[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function a(l){return t.xb(0,[(l()(),t.mb(0,0,null,null,1,"h1",[["class","title-text"]],null,null,null,null,null)),(l()(),t.wb(-1,null,["VR Shooter"])),(l()(),t.mb(2,0,null,null,24,"div",[["class","vr-shooter-wrapper"]],null,null,null,null,null)),(l()(),t.mb(3,0,null,null,23,"a-scene",[["id","Scene"]],null,null,null,null,null)),(l()(),t.mb(4,0,null,null,7,"a-assets",[],null,null,null,null,null)),(l()(),t.mb(5,0,null,null,0,"img",[["crossorigin","anonymous"],["id","box"],["src","https://s3-us-west-2.amazonaws.com/s.cdpn.io/233187/crate-texture.jpg"]],null,null,null,null,null)),(l()(),t.mb(6,0,null,null,0,"img",[["crossorigin","anonymous"],["id","walls"],["src","https://s3-us-west-2.amazonaws.com/s.cdpn.io/233187/brick-texture.jpg"]],null,null,null,null,null)),(l()(),t.mb(7,0,null,null,0,"img",[["crossorigin","anonymous"],["id","ceiling"],["src","https://s3-us-west-2.amazonaws.com/s.cdpn.io/233187/wood-texture.jpg"]],null,null,null,null,null)),(l()(),t.mb(8,0,null,null,0,"img",[["crossorigin","true"],["id","floor"],["src","https://s3-us-west-2.amazonaws.com/s.cdpn.io/233187/tile-texture.jpg"]],null,null,null,null,null)),(l()(),t.mb(9,0,null,null,0,"a-mixin",[["geometry","primitive: box; height: 0.30; width: 0.30; depth: 0.30"],["id","cube"],["material","color: #EF2D5E;"]],null,null,null,null,null)),(l()(),t.mb(10,0,null,null,0,"a-mixin",[["id","cube-collided"],["material","color: #F2E646;"]],null,null,null,null,null)),(l()(),t.mb(11,0,null,null,0,"a-mixin",[["id","cube-grabbed"],["material","color: #F2E646;"]],null,null,null,null,null)),(l()(),t.mb(12,0,null,null,0,"a-entity",[["hand-controls","right"],["id","rightHand"]],null,null,null,null,null)),(l()(),t.mb(13,0,null,null,3,"a-entity",[["camera",""],["id","player"],["look-controls",""],["position","0 1 0"],["wasd-controls",""]],null,null,null,null,null)),(l()(),t.mb(14,0,null,null,2,"a-entity",[["gearvr-controls","model: false;"],["id","GearVrController"],["position","0 0 0"]],null,null,null,null,null)),(l()(),t.mb(15,0,null,null,0,"a-entity",[["class","cursor"],["cursor","fuse: false; fuseTimeout: 15"],["geometry","primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"],["material","color: purple; shader: flat"],["position","0 0 -2.5"]],null,null,null,null,null)),(l()(),t.mb(16,0,null,null,0,"a-entity",[["geometry","primitive: box; height: 0.1; width: 0.1"],["id","Wand"],["material","color: #49311c; opacity: 1"],["position",".1 -1.3 -.7"],["rotation","45 0 0"]],null,null,null,null,null)),(l()(),t.mb(17,0,null,null,0,"a-box",[["depth",".7"],["height",".7"],["id","start-1"],["material","color: green"],["position","2 1.3 2"],["width",".7"]],null,null,null,null,null)),(l()(),t.mb(18,0,null,null,0,"a-box",[["color","#FFF"],["depth","1.5"],["height","1.5"],["position","5 .2 -4"],["rotation","0 -45 0"],["src","#box"],["width","1.5"]],null,null,null,null,null)),(l()(),t.mb(19,0,null,null,0,"a-box",[["color","#FFF"],["depth","1.5"],["height","1.5"],["position","5 1.7 -4"],["rotation","0 25 0"],["src","#box"],["width","1.5"]],null,null,null,null,null)),(l()(),t.mb(20,0,null,null,0,"a-box",[["color","#FFF"],["height","20"],["position","-10 0 0"],["rotation","0 90 0"],["src","#walls"],["width","20"]],null,null,null,null,null)),(l()(),t.mb(21,0,null,null,0,"a-box",[["color","#FFF"],["height","20"],["position","0 0 -10"],["src","#walls"],["width","20"]],null,null,null,null,null)),(l()(),t.mb(22,0,null,null,0,"a-box",[["color","#FFF"],["height","20"],["position","10 0 0"],["rotation","0 90 0"],["src","#walls"],["width","20"]],null,null,null,null,null)),(l()(),t.mb(23,0,null,null,0,"a-box",[["color","#FFF"],["height","20"],["position","0 0 10"],["src","#walls"],["width","20"]],null,null,null,null,null)),(l()(),t.mb(24,0,null,null,0,"a-box",[["color","#FFF"],["height","20"],["position","0 10 0"],["rotation","90 0 0"],["src","#ceiling"],["width","20"]],null,null,null,null,null)),(l()(),t.mb(25,0,null,null,0,"a-sky",[["color","#000"]],null,null,null,null,null)),(l()(),t.mb(26,0,null,null,0,"a-plane",[["color","#aaa"],["depth","2"],["height","50"],["position","2 -1 -2"],["rotation","-90 0 0"],["src","#floor"],["width","60"]],null,null,null,null,null))],null,null)}function s(l){return t.xb(0,[(l()(),t.mb(0,0,null,null,1,"app-vr-shooter",[],null,null,null,a,r)),t.lb(1,114688,null,0,e,[],null,null)],function(l,n){l(n,1,0)},null)}var c=t.ib("app-vr-shooter",e,s,{},{},[]),m=u("Ip0R"),d=u("ZYCi"),b=function(){return function(){}}();u.d(n,"VRShooterModuleNgFactory",function(){return h});var h=t.jb(o,[],function(l){return t.sb([t.tb(512,t.j,t.Z,[[8,[i.a,c]],[3,t.j],t.x]),t.tb(4608,m.i,m.h,[t.u,[2,m.o]]),t.tb(1073742336,d.m,d.m,[[2,d.s],[2,d.k]]),t.tb(1073742336,b,b,[]),t.tb(1073742336,m.b,m.b,[]),t.tb(1073742336,o,o,[]),t.tb(1024,d.i,function(){return[[{path:"",component:e}]]},[])])})}}]);