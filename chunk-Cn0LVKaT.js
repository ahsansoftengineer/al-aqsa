import {k,bd as mi,q as qi,O as Oi,be as Je,bf as Se,bg as $e,bh as ge,a1 as hE,z as zc,a3 as pE,h as hp,bi as RE,aj as sE,a8 as lD,bj as AE,bk as CR,f as fe,u as ue,X as Xs,I as y$1,p,l as le,bl as Sa,aE as LN,L as gN,aX as tE,ag as ly,e as fl,ah as uy,b7 as cE,al as Q0,a7 as Br,b8 as Ep,an as lR,a6 as Pi,ao as yp,ap as _p,aq as Dp,aU as Y0,bm as BR,bn as Xi,bo as Ue,bp as Ge,C as Cn,bq as vp,br as xb,$ as $t,bs as ug,bt as Ga,bu as kr,bv as Uh,bw as sr,bx as ut,by as lP,bz as ro,a2 as hl,a4 as pl,B as wn,bA as vp$1,bB as wi,bC as ki,bD as Di,bE as Vg,ax as zo,G as Ge$1,a5 as x0,a9 as O0,D as DR,ay as FR,ai as Cp,aB as VR}from'./main-4EQBRASZ.js';var b=[[["","Content",""]],[["","SideNavRight",""]]],N$1=["[Content]","[SideNavRight]"],_$1=class s{constructor(m,t){this.sideNav=m;this._template=t;}sideNav;_template;ngOnInit(){}static \u0275fac=function(t){return new(t||s)(k(mi),k(qi))};static \u0275cmp=Oi({type:s,selectors:[["template-wrapper"]],ngContentSelectors:N$1,decls:5,vars:6,consts:[[2,"position","relative","height","100%",3,"hasBackdrop"],[1,"p-0"],[1,"theme-sidenav-right","p-0",2,"position","absolute","border-radius","0px",3,"openedChange","disableClose","mode","opened","position","fixedInViewport"]],template:function(t,e){t&1&&(hE(b),zc(0,"mat-sidenav-container",0)(1,"mat-sidenav-content",1),pE(2),hp(),zc(3,"mat-sidenav",2),RE("openedChange",function(n){return CR(e._template.lb.filterShows,n)||(e._template.lb.filterShows=n),n}),pE(4,1),hp()()),t&2&&(sE("hasBackdrop",e.sideNav?.Left?.mode=="over"),lD(3),sE("disableClose",false)("mode",e.sideNav?.Left?.mode),AE("opened",e._template.lb.filterShows),sE("position",e.sideNav?.Right?.position)("fixedInViewport",true));},dependencies:[Je,Se,$e,ge],encapsulation:2,changeDetection:1})};var I=["determinateSpinner"];function L$1(i,$){if(i&1&&(ly(),zc(0,"svg",11),fl(1,"circle",12),hp()),i&2){let e=Y0();Br("viewBox",e._viewBox()),lD(),Ep("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),Br("r",e._circleRadius());}}var N=new y$1("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:B})}),B=100,z=10,Z=(()=>{class i{_elementRef=p(le);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=p(N),t=Sa(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth));}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0));}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0;}_diameter=B;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0;}_strokeWidth;_circleRadius(){return (this.diameter-z)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return `0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Oi({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&yp(I,5),t&2){let s;_p(s=Dp())&&(r._determinateCircle=s.first);}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(Br("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),lR("mat-"+r.color),Ep("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),Pi("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"));},inputs:{color:"color",mode:"mode",value:[2,"value","value",gN],diameter:[2,"diameter","diameter",gN],strokeWidth:[2,"strokeWidth","strokeWidth",gN]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(tE(0,L$1,2,8,"ng-template",null,0,BR),zc(2,"div",2,1),ly(),zc(4,"svg",3),fl(5,"circle",4),hp()(),uy(),zc(6,"div",5)(7,"div",6)(8,"div",7),cE(9,8),hp(),zc(10,"div",9),cE(11,8),hp(),zc(12,"div",10),cE(13,8),hp()()()),t&2){let s=Q0(1);lD(4),Br("viewBox",r._viewBox()),lD(),Ep("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),Br("r",r._circleRadius()),lD(4),sE("ngTemplateOutlet",s),lD(2),sE("ngTemplateOutlet",s),lD(2),sE("ngTemplateOutlet",s);}},dependencies:[LN],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return i})();var J=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[Xs]})}return i})();var re=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[Xs]})}return i})();var M=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}positions;update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(i=>this._trackTile(i));}_trackTile(e){let t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new G(this.rowIndex,t)}_findMatchingGap(e){if(e>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${e} is wider than grid with cols="${this.tracker.length}".`);let t=-1,i=-1;do{if(this.columnIndex+e>this.tracker.length){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}if(t=this.tracker.indexOf(0,this.columnIndex),t==-1){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}i=this._findGapEndIndex(t),this.columnIndex=t+1;}while(i-t<e||i==0);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1);}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(this.tracker[t]!=0)return t;return this.tracker.length}_markTilePosition(e,t){for(let i=0;i<t.colspan;i++)this.tracker[e+i]=t.rowspan;}},G=class{row;col;constructor(e,t){this.row=e,this.col=t;}};var _t=["*"];var St=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`,wt=new y$1("MAT_GRID_LIST"),L=(()=>{class n{_element=p(le);_gridList=p(wt,{optional:true});_rowspan=1;_colspan=1;get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(lP(t));}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(lP(t));}_setStyle(t,i){this._element.nativeElement.style[t]=i;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Oi({type:n,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(i,r){i&2&&Br("rowspan",r.rowspan)("colspan",r.colspan);},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:_t,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(i,r){i&1&&(hE(),hl(0,"div",0),pE(1),pl());},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2})}return n})();var Tt=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,y=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(e,t,i,r){this._gutterSize=vt(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=i,this._direction=r;}getBaseTileSize(e,t){return `(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return t===0?"0":s(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return `(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,i){let r=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(e,i,r,o),this.setRowStyles(e,t,r,o);}setColStyles(e,t,i,r){let o=this.getBaseTileSize(i,r),l=this._direction==="rtl"?"right":"left";e._setStyle(l,this.getTilePosition(o,t)),e._setStyle("width",s(this.getTileSize(o,e.colspan)));}getGutterSpan(){return `${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return `${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}},j=class extends y{fixedRowHeight;constructor(e){super(),this.fixedRowHeight=e;}init(e,t,i,r){super.init(e,t,i,r),this.fixedRowHeight=vt(this.fixedRowHeight),Tt.test(this.fixedRowHeight);}setRowStyles(e,t){e._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),e._setStyle("height",s(this.getTileSize(this.fixedRowHeight,e.rowspan)));}getComputedHeight(){return ["height",s(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["height",null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null);});}},R=class extends y{rowHeightRatio;baseTileHeight;constructor(e){super(),this._parseRatio(e);}setRowStyles(e,t,i,r){let o=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,r),e._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),e._setStyle("paddingTop",s(this.getTileSize(this.baseTileHeight,e.rowspan)));}getComputedHeight(){return ["paddingBottom",s(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["paddingBottom",null]),e._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null);});}_parseRatio(e){let t=e.split(":");t.length,this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1]);}},$=class extends y{setRowStyles(e,t){let i=100/this._rowspan,r=(this._rows-1)/this._rows,o=this.getBaseTileSize(i,r);e._setStyle("top",this.getTilePosition(o,t)),e._setStyle("height",s(this.getTileSize(o,e.rowspan)));}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null);});}};function s(n){return `calc(${n})`}function vt(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var Ct="fit",bt=(()=>{class n{_element=p(le);_dir=p(ro,{optional:true});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(lP(t)));}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`;}get rowHeight(){return this._rowHeight}set rowHeight(t){let i=`${t??""}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight));}ngOnInit(){this._checkCols(),this._checkRowHeight();}ngAfterContentChecked(){this._layoutTiles();}_checkCols(){this.cols;}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1");}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===Ct?this._tileStyler=new $:t&&t.indexOf(":")>-1?this._tileStyler=new R(t):this._tileStyler=new j(t);}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new M);let t=this._tileCoordinator,i=this._tiles.filter(o=>!o._gridList||o._gridList===this),r=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,r),i.forEach((o,l)=>{let F=t.positions[l];this._tileStyler.setStyle(o,F.row,F.col);}),this._setListStyle(this._tileStyler.getComputedHeight());}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1]);}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Oi({type:n,selectors:[["mat-grid-list"]],contentQueries:function(i,r,o){if(i&1&&vp$1(o,L,5),i&2){let l;_p(l=Dp())&&(r._tiles=l);}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(i,r){i&2&&Br("cols",r.cols);},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[wn([{provide:wt,useExisting:n}])],ngContentSelectors:_t,decls:2,vars:0,template:function(i,r){i&1&&(hE(),hl(0,"div"),pE(1),pl());},styles:[St],encapsulation:2})}return n})(),S=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[re,Xs,re]})}return n})();var _=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[Cn,vp,xb,S,$t,ug,J,Je,Ga,kr,Uh,sr]})};var kt=[[["","HeaderActions",""]],[["","FooterActions",""]]],Ht=["[HeaderActions]","[FooterActions]"];function It(n,e){if(n&1&&(zc(0,"h1",4),DR(1),FR(2,"translate"),hp()),n&2){let t=Y0();lD(),Cp(" ",VR(2,1,t._template?.title)," ");}}var T=class n extends ut{settings={cols:1};constructor(){super(),this._template.DATA.subscribe({next:e=>{setTimeout(()=>{this._template._cdr.detectChanges();},100);}});}ngOnInit(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Oi({type:n,selectors:[["template-simple"]],inputs:{settings:"settings"},features:[Ge$1],ngContentSelectors:Ht,decls:16,vars:5,consts:[[1,"dashboard-card","p-0","m-1"],[1,"dashboard-card-content","p-1"],["rowHeight","55px",1,"mb-2",3,"cols"],[1,"flex--start",3,"colspan"],[1,"m-0","mt-1","fs-5"],[1,"flex--end",3,"colspan"],["cols","1",3,"rowHeight"],["colspan","1"],[1,"m-1","mx-0",2,"width","100%","height","100%","overflow-x","auto"],["cols","1","rowHeight","60px",1,"mt-2"],["colspan","1",1,"flex--end"],["align","end",1,"px-0"]],template:function(t,i){t&1&&(hE(kt),zc(0,"mat-card",0)(1,"mat-card-content",1)(2,"mat-grid-list",2)(3,"mat-grid-tile",3)(4,"section"),x0(5,It,3,3,"h1",4),hp()(),zc(6,"mat-grid-tile",5),pE(7),hp()(),zc(8,"mat-grid-list",6)(9,"mat-grid-tile",7)(10,"div",8),fl(11,"router-outlet"),hp()()(),zc(12,"mat-grid-list",9)(13,"mat-grid-tile",10)(14,"mat-card-actions",11),pE(15,1),hp()()()()()),t&2&&(lD(2),sE("cols",12),lD(),sE("colspan",5),lD(2),O0(i._template?.title?5:-1),lD(),sE("colspan",7),lD(2),sE("rowHeight",i._template?.LG?"76.5vh":"73vh"));},dependencies:[xb,wi,ki,Di,S,bt,L,Cn,Vg,zo],styles:[`@charset "UTF-8";.flex--start{display:flex;justify-content:flex-start}.flex--end{display:flex;justify-content:flex-end}.flex--start--top{display:flex;align-items:flex-start;justify-content:flex-start}.flex--start .mat-grid-tile-content{justify-content:flex-start}.flex--end .mat-grid-tile-content{justify-content:flex-end}.flex--start--top .mat-grid-tile-content{align-items:flex-start;justify-content:flex-start}[dir=rtl] .flex--start{justify-content:flex-end}[dir=rtl] .flex--end{justify-content:flex-start}[dir=rtl] .mat-sort-header-container{justify-content:flex-end}.parent-active{background-color:#b9b9b9}.child-active{background-color:#cccbcb}.form-action-buttons{margin-right:5px}[dir=rtl] input,[dir=rtl] textarea,[dir=rtl] .mat-input-element{text-align:right}.mat-sort-header-container{justify-content:flex-start}tbl-cntrl-txt input[type=text]{border:0;border-bottom:1px solid #673ab7;height:40px;font-size:16px;font-weight:400}::-webkit-scrollbar{width:4px;height:4px}::-webkit-scrollbar-track{background:#0a0a0a41;border-radius:10px}::-webkit-scrollbar-thumb{background:#673ab7;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#5a2ea6}a{color:inherit;text-decoration:none}a:visited,a:hover,a:active,a:focus{color:inherit;text-decoration:none}a[href]{cursor:pointer}.form-header{background-color:#00bfbf94}.form-body{background-color:#f2ff0051}.form-footer{background-color:#00ffbf51}.header{display:flex;justify-content:space-between;flex-wrap:wrap}.left,.right{flex:1 1 100%}@media(min-width:768px){.left{flex:0 0 60%}.right{flex:0 0 40%}}.mat-mdc-card-actions{width:100%}
`],encapsulation:2})};var Dt=[_,Xi,Ue,_$1,T,Ge];var Mt=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[Dt,_,Xi,Ue]})};export{J,Mt as M,T,Z,_$1 as _};