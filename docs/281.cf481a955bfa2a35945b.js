"use strict";(self.webpackChunkmercadona=self.webpackChunkmercadona||[]).push([[281],{281:(j,m,a)=>{a.r(m),a.d(m,{GridModule:()=>k});var l=a(8583),f=a(4655),A=a(5917),d=a(3461),e=a(7716);let h=(()=>{class o{constructor(){this.modulos=[[{id:"estanteria-1 Modulo1",logistica:1,agujeros:5,productlist:[{code:63556,name:"PIZZA PEPPERONI",description:"410 GR HACENDADO",image:"https://d2ohdpvxj0yo9f.cloudfront.net/products/pi/pizza-fresca-con-pepperonni-mas-picante-de-mercadona-1588726599_m.jpg"},{code:63631,name:"PIZZA R\xdaSTICA POLLO",description:"420 GR HACENDADO",image:"https://a0.soysuper.com/943cd5627089a0e57b29f2cc7e0e2b93.1500.0.0.0.wmark.978c3f0e.jpg"}]},{id:"estanteria-2 Modulo1",logistica:1,agujeros:8,productlist:[{code:63581,name:"PIZZA JAM\xd3N Y QUESO",description:"415 GR HACENDADO",image:"https://d2ohdpvxj0yo9f.cloudfront.net/products/pi/pizza-de-jamon-york-queso-con-perlas-de-mozarella-de-mercadona-1603157700_m.jpg"},{code:63580,name:"PIZZA 4 QUESOS",description:"410 GR HACENDADO",image:"https://a1.soysuper.com/868b994e8397f4dfefcb3946822fbf00.1500.0.0.0.wmark.ad7025e6.jpg"}]},{id:"estanteria-3 Modulo1",logistica:1,agujeros:10,productlist:[{code:63613,name:"PIZZA BARBACOA CON BACON",description:"415 GR HACENDADO",image:"https://cdn.deliberry.com/images/449921/resize/600/600/3.jpg"},{code:63627,name:"PIZZA JAM\xd3N QUESO",description:"600 GR HACENDADO",image:"https://a1.soysuper.com/fa566c5eecb2dd8dd83ab22089a291b3.1500.0.0.0.wmark.32aa152e.jpg"}]},{id:"estanteria-4 Modulo1",logistica:1,agujeros:8,productlist:[{code:63632,name:"PIZZA CARBONARA",description:"600 GR HACENDADO",image:"https://a0.soysuper.com/eb3f7d4339dbd6e5f6ebe6a8904d9491.1500.0.0.0.wmark.a51132e0.jpg"},{code:63628,name:"PIZZA 4 QUESOS FAMILIAR",description:"580 GR HACENDADO",image:"https://a0.soysuper.com/eb3f7d4339dbd6e5f6ebe6a8904d9491.1500.0.0.0.wmark.a51132e0.jpg"},{code:63629,name:"PIZZA BARBACOA",description:"600 GR HACENDADO",image:"https://a0.soysuper.com/fdd27c669587f6c29e88b0c4b0d2485b.1500.0.0.0.wmark.5ef5d542.jpg"}]}],[{id:"estanteria-1 Modulo2",agujeros:5,productlist:["item 1","item 2"]},{id:"estanteria-2 Modulo2",agujeros:10,productlist:["item 5"]}]]}getModulo(t){return this.modulos[t]}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),Z=(()=>{class o{constructor(t){this.moduloService=t,this.todo=["itemMario"],this.estanterias=[],this.connectedTo=[],this.numero=0,this.modulos=[1,2,3],this.estanterias=this.moduloService.getModulo(0),this.connectDrag()}getModulo(t){this.estanterias=this.moduloService.getModulo(t),this.connectDrag()}addList(){let t=10*Math.random();this.estanterias.push({id:`estanteria-${t}`,agujeros:7,productlist:[]}),this.connectDrag()}connectDrag(){for(let t of this.estanterias)this.connectedTo.push(t.id)}drop(t){t.previousContainer===t.container?(0,d.bA)(t.container.data,t.previousIndex,t.currentIndex):(0,d.EA)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex),console.log("event: ",t),console.log("this.stat",this.estanterias)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,n){},encapsulation:2}),o})();var g=a(3679),c=a(3738);let C=(()=>{class o{transform(t,n){return n&&t?o.filter(t,n):t}static filter(t,n){const s=n.toLowerCase();function i(p,w){for(let u in p)if(null!==p[u]&&null!=p[u]&&("object"==typeof p[u]&&i(p[u],w)||p[u].toString().toLowerCase().includes(s)))return!0;return!1}return t.filter(function(p){return i(p,n)})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275pipe=e.Yjl({name:"filter",type:o,pure:!1}),o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({}),o})();function O(o,r){if(1&o&&(e.TgZ(0,"div",7),e.TgZ(1,"mat-card",8),e.TgZ(2,"div",9),e._UZ(3,"img",10),e.TgZ(4,"mat-card-header"),e.TgZ(5,"mat-card-title"),e._uU(6),e.qZA(),e.TgZ(7,"mat-card-title"),e._uU(8),e.qZA(),e.TgZ(9,"mat-card-subtitle"),e._uU(10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const t=r.$implicit;e.xp6(3),e.s9C("src",t.image,e.LSH),e.xp6(3),e.Oqu(t.code),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.description)}}let b=(()=>{class o{constructor(){this.connectedTo=[]}ngOnInit(){}drop(t){t.previousContainer===t.container?(0,d.bA)(t.container.data,t.previousIndex,t.currentIndex):(0,d.EA)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex)}onSubmit(){var t,n;this.filterResults(null===(n=null===(t=this.searchForm)||void 0===t?void 0:t.value)||void 0===n?void 0:n.name)}filterResults(t){let n=this.products;this.products=n.filter(s=>this.filtrar_acentos(s.name.toLowerCase()).includes(t)),console.log("this.products: ",this.products),0===this.products.length&&(this.products=n)}filtrar_acentos(t){for(var n="\xc3\xc0\xc1\xc4\xc2\xc8\xc9\xcb\xca\xcc\xcd\xcf\xce\xd2\xd3\xd6\xd4\xd9\xda\xdc\xdb\xe3\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xd1\xf1\xc7\xe7",i=0;i<n.length;i++)t=t.replace(n.charAt(i),"AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc".charAt(i)).toLowerCase();return t}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-buscador"]],inputs:{products:"products"},decls:10,vars:7,consts:[[1,"header-search"],[1,"buscador"],[1,"form-group"],["type","text","placeholder","Search...",1,"form-control",3,"ngModel","ngModelChange"],["cdkDropList","",1,"item-list",3,"cdkDropListData","cdkDropListConnectedTo","cdkDropListDropped"],["productList","cdkDropList"],["class","item-box","cdkDrag","",4,"ngFor","ngForOf"],["cdkDrag","",1,"item-box"],[1,"card"],[1,"card__content"],["mat-card-image","","alt","",1,"card__content_image",3,"src"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Tornillos"),e.qZA(),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"div",2),e.TgZ(5,"input",3),e.NdJ("ngModelChange",function(i){return n.filterTerm=i}),e.qZA(),e.qZA(),e.TgZ(6,"div",4,5),e.NdJ("cdkDropListDropped",function(i){return n.drop(i)}),e.YNc(8,O,11,4,"div",6),e.ALo(9,"filter"),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngModel",n.filterTerm),e.xp6(1),e.Q6J("cdkDropListData",n.products)("cdkDropListConnectedTo",n.connectedTo),e.xp6(2),e.Q6J("ngForOf",e.xi3(9,4,n.products,n.filterTerm)))},directives:[g.Fj,g.JJ,g.On,d.Wj,l.sg,d.Zt,c.a8,c.G2,c.dk,c.n5,c.$j],pipes:[C],styles:[".card[_ngcontent-%COMP%]{border:none;text-align:center}.card__content[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-flow:column;align-items:center}.card__content[_ngcontent-%COMP%]   .mar-card-image[_ngcontent-%COMP%]{margin-top:inherit!important}.card__content[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{margin-bottom:0}.card__content_image[_ngcontent-%COMP%]{margin-top:0;width:60px}.card__content_image[_ngcontent-%COMP%]:first-child{margin-top:0!important}.header-search[_ngcontent-%COMP%]{margin-top:50px}"]}),o})();var _=a(1552);function D(o,r){if(1&o&&(e.ynx(0),e._UZ(1,"app-buscador",6),e.BQk()),2&o){const t=r.ngIf;e.xp6(1),e.Q6J("products",t)}}function M(o,r){if(1&o&&(e.TgZ(0,"div",14),e.TgZ(1,"mat-card",15),e.TgZ(2,"div",16),e._UZ(3,"img",17),e.TgZ(4,"mat-card-header"),e.TgZ(5,"mat-card-title"),e._uU(6),e.qZA(),e.TgZ(7,"mat-card-title"),e._uU(8),e.qZA(),e.TgZ(9,"mat-card-subtitle"),e._uU(10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const t=r.$implicit;e.xp6(3),e.s9C("src",t.image,e.LSH),e.xp6(3),e.Oqu(t.code),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.description)}}function v(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",7),e.TgZ(1,"div",8),e.TgZ(2,"mat-icon",9),e._uU(3,"arrow_upward"),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA(),e.TgZ(6,"mat-icon",9),e._uU(7,"arrow_downward"),e.qZA(),e.qZA(),e.TgZ(8,"div",10),e.TgZ(9,"div",11),e._uU(10),e.qZA(),e.TgZ(11,"div",12),e.NdJ("cdkDropListDropped",function(s){return e.CHM(t),e.oxw().drop(s)}),e.YNc(12,M,11,4,"div",13),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=r.$implicit,n=e.oxw();e.xp6(5),e.Oqu(t.agujeros),e.xp6(5),e.hij("Estanteria ",t.id,""),e.xp6(1),e.s9C("id",t.id),e.Q6J("cdkDropListData",t.productlist)("cdkDropListConnectedTo",n.connectedTo),e.xp6(1),e.Q6J("ngForOf",t.productlist)}}const T=[{path:"",component:(()=>{class o extends Z{constructor(t){super(t),this.moduloService=t,this.todo=["itemMario"],this.estanterias=[],this.connectedTo=[],this.numero=0,this.modulos=[1,2,3],this.estanterias=this.moduloService.getModulo(0),this.connectDrag()}ngOnInit(){this.products$=(0,A.of)([{code:63634,name:"PIZZA MEDITERR\xc1NEA",description:"430 GR HACENDADO",image:"https://a1.soysuper.com/a396b9beeb0e9474bc3bf235cd2fcaa4.1500.0.0.0.wmark.6c88e14c.jpg"},{code:63514,name:"PIZZA JAM\xd3N Y QUESO S/LACT. Y S/GLU.",description:"420 GR HACENDADO",image:"https://a1.soysuper.com/078c326a24e3b6dd2ed3cbfb92b06e4c.1500.0.0.0.wmark.118a8a51.jpg"},{code:63582,name:"PIZZA ATUN BACON",description:"415 GR HACENDADO",image:"https://a0.soysuper.com/2fc68d5819be2f661e4305b089dfe227.1500.0.0.0.wmark.38a21b2d.jpg"}])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-grid"]],features:[e.qOj],decls:7,vars:4,consts:[[1,"container-fluid"],["cdkDropListGroup","",1,"row"],[1,"col-sm-2",2,"background-color","rgb(241 241 241)"],[4,"ngIf"],[1,"col-sm-10"],["class","estanteria",4,"ngFor","ngForOf"],[3,"products"],[1,"estanteria"],[1,"agujeros","vertical","d-flex","d-flex-column"],["aria-hidden","false","aria-label","Example home icon"],[1,"drag-container"],[1,"section-heading"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"example-list",3,"id","cdkDropListData","cdkDropListConnectedTo","cdkDropListDropped"],["class","example-box","cdkDrag","",4,"ngFor","ngForOf"],["cdkDrag","",1,"example-box"],[1,"card"],[1,"card__content"],["mat-card-image","",1,"card__content_image",3,"src"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.YNc(3,D,2,1,"ng-container",3),e.ALo(4,"async"),e.qZA(),e.TgZ(5,"div",4),e.YNc(6,v,13,6,"div",5),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",e.lcZ(4,2,n.products$)),e.xp6(3),e.Q6J("ngForOf",n.estanterias))},directives:[d.Fd,l.O5,l.sg,b,_.Hw,d.Wj,d.Zt,c.a8,c.G2,c.dk,c.n5,c.$j],pipes:[l.Ov],styles:[".example-list[_ngcontent-%COMP%]{width:100%;max-width:100%;border:solid 1px #ccc;min-height:60px;display:flex;flex-direction:row;background:white;border-radius:4px;overflow:hidden}.example-box[_ngcontent-%COMP%]{padding:10px;border-right:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:white;font-size:14px;flex-grow:1;flex-basis:0}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;background-color:#e2e2e2}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.estanteria[_ngcontent-%COMP%]{margin-bottom:30px;margin-top:30px;display:flex}.vertical[_ngcontent-%COMP%]{width:68px;word-wrap:break-word;text-align:center}.d-flex[_ngcontent-%COMP%]{display:flex}.drag-container[_ngcontent-%COMP%]{width:100%}.d-flex-column[_ngcontent-%COMP%]{display:flex!important;flex-direction:column;align-items:center}"]}),o})()}];let y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[f.Bz.forChild(T)],f.Bz]}),o})();var P=a(1212);let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.ez,y,P.q,g.u5,x]]}),o})()}}]);