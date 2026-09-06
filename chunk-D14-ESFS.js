import {k as ks,w as ws,f as fe,u as ue,C as Cn$1,c as vp,Z as Zt$1,e as $t,Y as Ys,i as k,j as $i,O as Oi,p,l as le,n as wn$1,z,D as De,q,o as cm,r as hi,s as gl,P as Pu,t as Z,x as Ze,A as Cn$2,B as db,R as Ru,E as wt,F as y,H as Or,I as qn$1,J as po,K as dN,L as H$1,M as R,N as J$2,Q as Zt$2,S as ut,U as Um,T as LS,_ as _n$1,V as S,W as m,X as Aa,a0 as Fe$1,a1 as fE,a2 as fl,a3 as hE,a4 as hl,a5 as M0,a6 as Pi,a7 as Br,a8 as cD,a9 as A0,aa as tr,ab as Xe,ac as jn$1,ad as Re$1,ae as kn,af as ga,$ as $c,m as mR,b as fp,ag as cy,d as dl,ah as ly,ai as Ep,aj as oE,ak as Up,al as Y0,am as cE,an as oR,ao as vp$1,ap as yp,aq as _p,ar as RN,as as qw,at as ki,au as bt,av as Ut,aw as ur,ax as Ho,ay as xR,az as SE,aA as AR,aB as kR,aC as _R,aD as oe,aE as ON,aF as xN,aG as cp,aH as dp,aI as fp$1,aJ as mp,aK as lp,aL as hp,aM as up,aN as pp,aO as bp,aP as gp,aQ as _p$1,aR as UN,aS as Jt$1,aT as Cf,aU as z0,aV as j0,aW as pp$1,aX as eE,aY as gp$1,aZ as x0,a_ as R0,a$ as TR,b0 as O0,b1 as N0,b2 as iE,b3 as Yv,b4 as Zv,b5 as RR,b6 as PR,b7 as aE,b8 as Dp,b9 as hp$1,ba as pa,bb as sd,h as hk,y as ys,bc as Jt$2,G as Ge}from'./main-VMVELCD6.js';import {J as J$1,Z as Z$1,M as Mt,T}from'./chunk-BcWtyt7Q.js';var n=class{routes=[];constructor(){}addIndex(e="Feature Modules"){return this.routes.push({path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:ks,data:{title:e,linkPaginate:"",linkAdd:"",linkUpdate:"",permission:["gets"],layer:["Module","Feature"]}}),this}addModuleAndIndex(e,a){let t=e.toLowerCase().replace(" ","-");return this.routes.push({path:t,redirectTo:`${t}/index`,pathMatch:"full"},{path:`${t}/index`,component:ws,data:{title:`${e} Module`,linkPaginate:"",linkAdd:"",linkUpdate:"",permission:["add","gets-paginate"]}},{path:`${t}`,children:[{path:"",loadChildren:a}]}),this}build(){return this.routes}};var Xt=["*",[["","matSortHeaderIcon",""]]],Zt=["*","[matSortHeaderIcon]"];function Jt(t,o){t&1&&(cy(),fl(0,"svg",3),hp$1(1,"path",4),hl());}function Qt(t,o){t&1&&(fl(0,"div",2),hE(1,1,null,Jt,2,0),hl());}var Bt=new y("MAT_SORT_DEFAULT_OPTIONS"),Re=(()=>{class t{_defaultOptions;_initializedStream=new po(1);sortables=new Map;_stateChanges=new H$1;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e;}_direction="";disableClear;disabled=false;sortChange=new q;initialized=this._initializedStream;constructor(e){this._defaultOptions=e;}register(e){this.sortables.set(e.id,e);}deregister(e){this.sortables.delete(e.id);}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction});}getNextSortDirection(e){if(!e)return "";let i=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,n=Yt(e.start||this.start,i),s=n.indexOf(this.direction)+1;return s>=n.length&&(s=0),n[s]}ngOnInit(){this._initializedStream.next();}ngOnChanges(){this._stateChanges.next();}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete();}static \u0275fac=function(i){return new(i||t)(k(Bt,8))};static \u0275dir=J$2({type:t,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",Fe$1],disabled:[2,"matSortDisabled","disabled",Fe$1]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[Ze]})}return t})();function Yt(t,o){let e=["asc","desc"];return t=="desc"&&e.reverse(),o||e.push(""),e}var Vt=(()=>{class t{_sort=p(Re,{optional:true});_columnDef=p(Zt$2,{optional:true});_changeDetectorRef=p(wn$1);_focusMonitor=p(ut);_elementRef=p(le);_ariaDescriber=p(Um,{optional:true});_renderChanges;_animationsDisabled=De();_recentlyCleared=Z(null);_sortButton;id;arrowPosition="after";start;disabled=false;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e);}_sortActionDescription="Sort";disableClear;constructor(){p(cm).load(hi);let e=p(Bt,{optional:true});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition);}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=LS(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription);}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null));});}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription);}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),i=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?i:null);}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction());}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return !this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e;}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Oi({type:t,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(i,n){i&1&&tr("click",function(){return n._toggleOnInteraction()})("keydown",function(k){return n._handleKeydown(k)})("mouseleave",function(){return n._recentlyCleared.set(null)}),i&2&&(Br("aria-sort",n._getAriaSortAttribute()),Pi("mat-sort-header-disabled",n._isDisabled()));},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",Fe$1],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",Fe$1]},exportAs:["matSortHeader"],ngContentSelectors:Zt,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(i,n){i&1&&(fE(Xt),fl(0,"div",0)(1,"div",1),hE(2),hl(),M0(3,Qt,3,0,"div",2),hl()),i&2&&(Pi("mat-sort-header-sorted",n._isSorted())("mat-sort-header-position-before",n.arrowPosition==="before")("mat-sort-header-descending",n._sort.direction==="desc")("mat-sort-header-ascending",n._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",n._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",n._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",n._animationsDisabled),Br("tabindex",n._isDisabled()?null:0)("role",n._isDisabled()?null:"button"),cD(3),A0(n._renderArrow()?3:-1));},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: solid 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return t})(),Fe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=fe({type:t});static \u0275inj=ue({imports:[Ys]})}return t})();function Wt(t,o){if(t&1&&($c(0,"mat-option",17),mR(1),fp()),t&2){let e=o.$implicit;oE("value",e),cD(),Ep(" ",e," ");}}function en(t,o){if(t&1){let e=j0();$c(0,"mat-form-field",14)(1,"mat-select",16,0),tr("selectionChange",function(n){Yv(e);let s=z0(2);return Zv(s._changePageSize(n.value))}),x0(3,Wt,2,2,"mat-option",17,N0),fp(),$c(5,"div",18),tr("click",function(){Yv(e);let n=Y0(2);return Zv(n.open())}),fp()();}if(t&2){let e=z0(2);oE("appearance",e._formFieldAppearance)("color",e.color),cD(),oE("value",e.pageSize)("disabled",e.disabled),iE("aria-labelledby",e._pageSizeLabelId),oE("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),cD(2),O0(e._displayedPageSizeOptions);}}function tn(t,o){if(t&1&&($c(0,"div",15),mR(1),fp()),t&2){let e=z0(2);cD(),SE(e.pageSize);}}function nn(t,o){if(t&1&&($c(0,"div",3)(1,"div",13),mR(2),fp(),M0(3,en,6,7,"mat-form-field",14),M0(4,tn,2,1,"div",15),fp()),t&2){let e=z0();cD(),Br("id",e._pageSizeLabelId),cD(),Ep(" ",e._intl.itemsPerPageLabel," "),cD(),A0(e._displayedPageSizeOptions.length>1?3:-1),cD(),A0(e._displayedPageSizeOptions.length<=1?4:-1);}}function an(t,o){if(t&1){let e=j0();$c(0,"button",19),tr("click",function(){Yv(e);let n=z0();return Zv(n._buttonClicked(0,n._previousButtonsDisabled()))}),cy(),$c(1,"svg",8),dl(2,"path",20),fp()();}if(t&2){let e=z0();oE("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),Br("aria-label",e._intl.firstPageLabel);}}function on(t,o){if(t&1){let e=j0();$c(0,"button",21),tr("click",function(){Yv(e);let n=z0();return Zv(n._buttonClicked(n.getNumberOfPages()-1,n._nextButtonsDisabled()))}),cy(),$c(1,"svg",8),dl(2,"path",22),fp()();}if(t&2){let e=z0();oE("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),Br("aria-label",e._intl.lastPageLabel);}}var ee=(()=>{class t{changes=new H$1;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,i,n)=>{if(n==0||i==0)return `0 of ${n}`;n=Math.max(n,0);let s=e*i,k=s<n?Math.min(s+i,n):s+i;return `${s+1} \u2013 ${k} of ${n}`};static \u0275fac=function(i){return new(i||t)};static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})(),rn=50;var cn=new y("MAT_PAGINATOR_DEFAULT_OPTIONS"),Le=(()=>{class t{_intl=p(ee);_changeDetectorRef=p(wn$1);_formFieldAppearance;_pageSizeLabelId=p(Pu).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=false;_initializedStream=new po(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck();}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck();}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions();}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(i=>dN(i,0)),this._updateDisplayedPageSizeOptions();}_pageSizeOptions=[];hidePageSize=false;showFirstLastButtons=false;selectConfig={};disabled=false;page=new q;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,i=p(cn,{optional:true});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:n,pageSizeOptions:s,hidePageSize:k,showFirstLastButtons:Me}=i;n!=null&&(this._pageSize=n),s!=null&&(this._pageSizeOptions=s),k!=null&&(this.hidePageSize=k),Me!=null&&(this.showFirstLastButtons=Me);}this._formFieldAppearance=i?.formFieldAppearance||"outline";}ngOnInit(){this._isInitialized=true,this._updateDisplayedPageSizeOptions(),this._initializedStream.next();}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe();}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1);}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1);}firstPage(){this.hasPreviousPage()&&this._navigate(0);}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1);}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let i=this.pageIndex*this.pageSize,n=this.pageIndex;this.pageIndex=Math.floor(i/e)||0,this.pageSize=e,this._emitPageEvent(n);}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:rn),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,i)=>e-i),this._changeDetectorRef.markForCheck());}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length});}_navigate(e){let i=this.pageIndex;e!==i&&(this.pageIndex=e,this._emitPageEvent(i));}_buttonClicked(e,i){i||this._navigate(e);}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Oi({type:t,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",dN],length:[2,"length","length",dN],pageSize:[2,"pageSize","pageSize",dN],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",Fe$1],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",Fe$1],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",Fe$1]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(i,n){i&1&&($c(0,"div",1)(1,"div",2),M0(2,nn,5,4,"div",3),$c(3,"div",4)(4,"div",5),mR(5),fp(),M0(6,an,3,5,"button",6),$c(7,"button",7),tr("click",function(){return n._buttonClicked(n.pageIndex-1,n._previousButtonsDisabled())}),cy(),$c(8,"svg",8),dl(9,"path",9),fp()(),ly(),$c(10,"button",10),tr("click",function(){return n._buttonClicked(n.pageIndex+1,n._nextButtonsDisabled())}),cy(),$c(11,"svg",8),dl(12,"path",11),fp()(),M0(13,on,3,5,"button",12),fp()()()),i&2&&(cD(2),A0(n.hidePageSize?-1:2),cD(3),Ep(" ",n._intl.getRangeLabel(n.pageIndex,n.pageSize,n.length)," "),cD(),A0(n.showFirstLastButtons?6:-1),cD(),oE("matTooltip",n._intl.previousPageLabel)("matTooltipDisabled",n._previousButtonsDisabled())("disabled",n._previousButtonsDisabled())("tabindex",n._previousButtonsDisabled()?-1:null),Br("aria-label",n._intl.previousPageLabel),cD(3),oE("matTooltip",n._intl.nextPageLabel)("matTooltipDisabled",n._nextButtonsDisabled())("disabled",n._nextButtonsDisabled())("tabindex",n._nextButtonsDisabled()?-1:null),Br("aria-label",n._intl.nextPageLabel),cD(3),A0(n.showFirstLastButtons?13:-1));},dependencies:[Xe,jn$1,Re$1,kn,ga],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return t})(),Nt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=fe({type:t});static \u0275inj=ue({imports:[Or,qn$1,Zt$1,Le]})}return t})();var Te=class t extends ee{itemsPerPageLabel="Size:";getRangeLabel=(o,e,i)=>{if(i===0||e===0)return `0 of ${i}`;let n=o*e+1,s=Math.min((o+1)*e,i);return `${n} - ${s} of ${i}`};static \u0275fac=(()=>{let o;return function(i){return (o||(o=_n$1(t)))(i||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac})};var sn=()=>[10,20,25,50,100,200,250,500,1e3];function dn(t,o){if(t&1){let e=j0();$c(0,"mat-paginator",0),tr("page",function(n){Yv(e);let s=z0();return Zv(s.lb?.paginate(n))}),fp(),$c(1,"mat-paginator",1),tr("page",function(n){Yv(e);let s=z0();return Zv(s.lb?.paginate(n))}),fp();}if(t&2){let e=z0();oE("length",e.lb?.httpResPaginate?.count)("pageIndex",e.lb.httpReqPaginate?.body?.pageNo-1)("pageSize",e.lb?.httpReqPaginate?.body?.pageSize)("pageSizeOptions",TR(7,sn)),cD(),oE("length",e.lb?.httpResPaginate?.count)("pageIndex",e.lb.httpReqPaginate?.body?.pageNo-1)("pageSize",e.lb?.httpReqPaginate?.body?.pageSize);}}var we=class t{constructor(o){this._template=o;}_template;lb;static \u0275fac=function(e){return new(e||t)(k($i))};static \u0275cmp=Oi({type:t,selectors:[["tbl-paginator"]],inputs:{lb:"lb"},features:[Cn$2([{provide:ee,useClass:Te}])],decls:1,vars:1,consts:[["showFirstLastButtons","",1,"d-none","d-md-block",3,"page","length","pageIndex","pageSize","pageSizeOptions"],["showFirstLastButtons","",1,"d-sm-block","d-md-none",3,"page","length","pageIndex","pageSize"]],template:function(e,i){e&1&&M0(0,dn,2,8),e&2&&A0(i.lb?.httpReqPaginate?.body?.pageNo?0:-1);},dependencies:[Nt,Le],styles:[`.mat-mdc-paginator-container{padding:0!important}.mat-mdc-paginator-range-label{margin:0 5px!important}.mat-mdc-paginator{background:transparent!important}.mat-mdc-paginator-page-size mat-form-field{margin:0!important}
`],encapsulation:2})};var mn=["*"],jt=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Oi({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,n){i&2&&Pi("mdc-form-field--align-end",n.labelPosition==="before");},inputs:{labelPosition:"labelPosition"},ngContentSelectors:mn,decls:1,vars:0,template:function(i,n){i&1&&(fE(),hE(0));},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return t})();var pn=["input"],hn=["label"],bn=["*"],Ve={color:"accent",clickAction:"check-indeterminate",disabledInteractive:false},_n=new y("mat-checkbox-default-options",{providedIn:"root",factory:()=>Ve}),x=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(x||{}),Ne=class{source;checked},He=(()=>{class t{_elementRef=p(le);_changeDetectorRef=p(wn$1);_ngZone=p(z);_animationsDisabled=De();_options=p(_n,{optional:true});focus(){this._inputElement.nativeElement.focus();}_createChangeEvent(e){let i=new Ne;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return `${this.id||this._uniqueId}-input`}required=false;labelPosition="after";name=null;change=new q;indeterminateChange=new q;value;disableRipple=false;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=x.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){p(cm).load(hi);let e=p(new gl("tabindex"),{optional:true});this._options=this._options||Ve,this.color=this._options.color||Ve.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=p(Pu).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??false;}ngOnChanges(e){e.required&&this._validatorChangeFn();}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate);}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck());}_checked=false;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck());}_disabled=false;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(x.Indeterminate):this._transitionCheckState(this.checked?x.Checked:x.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e);}_indeterminate=Z(false);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges();}writeValue(e){this.checked=!!e;}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorChangeFn=e;}_transitionCheckState(e){let i=this._currentCheckState,n=this._getAnimationTargetElement();if(!(i===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let s=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(s);},1e3);});}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked);}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked);}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(false),this.indeterminateChange.emit(false);}),this._checked=!this._checked,this._transitionCheckState(this._checked?x.Checked:x.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate);}_onInteractionEvent(e){e.stopPropagation();}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck();});}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return "";switch(e){case x.Init:if(i===x.Checked)return this._animationClasses.uncheckedToChecked;if(i==x.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case x.Unchecked:return i===x.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case x.Checked:return i===x.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case x.Indeterminate:return i===x.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return ""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e);}_onInputClick(){this._handleInputClick();}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus();}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation();}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=Oi({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,n){if(i&1&&vp$1(pn,5)(hn,5),i&2){let s;yp(s=_p())&&(n._inputElement=s.first),yp(s=_p())&&(n._labelElement=s.first);}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,n){i&2&&(cE("id",n.id),Br("tabindex",null)("aria-label",null)("aria-labelledby",null),oR(n.color?"mat-"+n.color:"mat-accent"),Pi("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",Fe$1],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",Fe$1],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",Fe$1],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:dN(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Fe$1],checked:[2,"checked","checked",Fe$1],disabled:[2,"disabled","disabled",Fe$1],indeterminate:[2,"indeterminate","indeterminate",Fe$1]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Cn$2([{provide:db,useExisting:wt(()=>t),multi:true},{provide:Ru,useExisting:t,multi:true}]),Ze],ngContentSelectors:bn,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,n){if(i&1&&(fE(),$c(0,"div",3),tr("click",function(k){return n._preventBubblingFromLabel(k)}),$c(1,"div",4,0)(3,"div",5),tr("click",function(){return n._onTouchTargetClick()}),fp(),$c(4,"input",6,1),tr("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(k){return n._onInteractionEvent(k)}),fp(),dl(6,"div",7),$c(7,"div",8),cy(),$c(8,"svg",9),dl(9,"path",10),fp(),ly(),dl(10,"div",11),fp(),dl(11,"div",12),fp(),$c(12,"label",13,2),hE(14),fp()()),i&2){let s=Y0(2);oE("labelPosition",n.labelPosition),cD(4),Pi("mdc-checkbox--selected",n.checked),oE("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),Br("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?true:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),cD(7),oE("matRippleTrigger",s)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",true),cD(),oE("for",n.inputId);}},dependencies:[Up,jt],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})(),je=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=fe({type:t});static \u0275inj=ue({imports:[He,Ys]})}return t})();var yn=(t,o)=>[t,o],te=class t{constructor(o){this._template=o;}_template;record;ngOnInit(){}static \u0275fac=function(e){return new(e||t)(k($i))};static \u0275cmp=Oi({type:t,selectors:[["tbl-actions-row"]],inputs:{record:"record"},standalone:false,decls:41,vars:16,consts:[["menu","matMenu"],["mat-icon-button","","type","button",2,"height","35px","overflow","visible",3,"matMenuTriggerFor"],[1,"text-primary"],["type","button"],["mat-menu-item","","type","button",3,"click"],[1,"me-2"],["mat-menu-item","","color","primary",1,"me-1",3,"routerLink"],[1,"me-2",3,"ngClass"],[3,"ngClass"],[1,"me-2","text-danger"],[1,"text-danger"]],template:function(e,i){if(e&1&&($c(0,"button",1)(1,"mat-icon",2),mR(2,"more_vert"),fp()(),$c(3,"mat-menu",3,0)(5,"button",4),tr("click",function(){return i.record.isShow=!i.record.isShow}),$c(6,"mat-icon",5),mR(7),fp(),$c(8,"span"),mR(9),fp()(),$c(10,"a",6)(11,"mat-icon",5),mR(12,"edit"),fp(),$c(13,"span"),mR(14),xR(15,"translate"),fp()(),$c(16,"button",4),tr("click",function(){return i._template.lb.copyItemJSON(i.record)}),$c(17,"mat-icon",5),mR(18,"content_copy"),fp(),$c(19,"span"),mR(20,"Copy JSON"),fp()(),$c(21,"button",4),tr("click",function(){return i._template.lb.exportItemToCSV(i.record)}),$c(22,"mat-icon",5),mR(23,"download"),fp(),$c(24,"span"),mR(25,"Export to CSV"),fp()(),$c(26,"button",4),tr("click",function(){return i._template.lb.updateStatus(i.record)}),$c(27,"mat-icon",7),mR(28),fp(),$c(29,"span",8),mR(30),fp()(),$c(31,"button",4),tr("click",function(){return i._template.lb.updateDelete(i.record)}),$c(32,"mat-icon",9),mR(33,"delete"),fp(),$c(34,"span",10),mR(35,"Delete Soft"),fp()(),$c(36,"button",4),tr("click",function(){return i._template.lb.Delete(i.record)}),$c(37,"mat-icon",9),mR(38,"delete"),fp(),$c(39,"span",10),mR(40,"Delete"),fp()()()),e&2){let n=Y0(4);oE("matMenuTriggerFor",n),cD(7),SE(i.record?.isShow?"visibility_off":"visibility"),cD(2),SE(i.record?.isShow?"Hide":"Show"),cD(),oE("routerLink",AR(13,yn,i._template.linkUpdate,i.record?.id)),cD(4),SE(kR(15,11,"Edit")),cD(13),oE("ngClass",_R(i.record.status==="Active"?"text-success":"text-warning")),cD(),Ep(" ",i.record.status==="Active"?"toggle_on":"toggle_off"," "),cD(),oE("ngClass",_R(i.record.status==="Active"?"text-success":"text-warning")),cD(),SE(i.record.status);}},dependencies:[RN,qw,kn,ki,bt,Ut,ur,Ho],encapsulation:2})};var Cn=()=>({height:"100%"}),Sn=()=>["secondary"],qt=(t,o)=>[t,o],Tn=(t,o,e)=>({"text-success":t,"text-danger":o,"text-secondary":e}),wn=(t,o)=>({$implicit:t,row:o});function In(t,o){t&1&&($c(0,"th",27),mR(1),xR(2,"translate"),fp()),t&2&&(cD(),Ep(" ",kR(2,1,"S. No")," "));}function Mn(t,o){if(t&1&&($c(0,"td",28)(1,"a",29),mR(2),fp()()),t&2){let e=o.$implicit,i=o.dataIndex,n=z0(2);cD(),oE("routerLink",AR(2,qt,n.lb._bcs._template.linkUpdate,e.id)),cD(),Ep(" ",n.pageStart+i||"No"," ");}}function Dn(t,o){t&1&&($c(0,"th",27),mR(1),xR(2,"translate"),fp()),t&2&&(cD(),Ep(" ",kR(2,1,"ID")," "));}function Pn(t,o){if(t&1&&($c(0,"td",28)(1,"a",29),mR(2),fp()()),t&2){let e=o.$implicit,i=z0(2);cD(),oE("routerLink",AR(2,qt,i.lb._bcs._template.linkUpdate,e.id)),cD(),Ep(" ",e.id||"-"," ");}}function En(t,o){if(t&1){let e=j0();$c(0,"th",30)(1,"mat-checkbox",31),tr("change",function(n){Yv(e);let s=z0(2);return Zv(n?s.toggleAllRows():null)}),fp()();}if(t&2){let e=z0(2);cD(),oE("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected());}}function zn(t,o){if(t&1){let e=j0();$c(0,"td",32)(1,"mat-checkbox",33),tr("click",function(n){return n.stopPropagation()})("change",function(n){let s=Yv(e).$implicit,k=z0(2);return Zv(n?k.selection.toggle(s):null)}),fp()();}if(t&2){let e=o.$implicit,i=z0(2);cD(),oE("checked",i.selection.isSelected(e));}}function An(t,o){t&1&&($c(0,"th",34),mR(1),xR(2,"translate"),fp()),t&2&&(cD(),Ep(" ",kR(2,1,"Name")," "));}function On(t,o){if(t&1){let e=j0();$c(0,"td",35),tr("click",function(n){let s=Yv(e).$implicit;return z0(2).lb.copyValue(s.name),Zv(n.stopPropagation())}),mR(1),fp();}if(t&2){let e=o.$implicit;cD(),Ep(" ",e?.name||"-"," ");}}function Rn(t,o){t&1&&($c(0,"th",36),mR(1),xR(2,"translate"),fp()),t&2&&(cD(),Ep(" ",kR(2,1,"Status")," "));}function Fn(t,o){if(t&1){let e=j0();$c(0,"td",37),tr("dblclick",function(n){let s=Yv(e).$implicit;return z0(2).lb._bcs._template.lb.updateStatus(s),Zv(n.stopPropagation())}),mR(1),fp();}if(t&2){let e=o.$implicit;oE("ngClass",RR(2,Tn,e?.status=="Active",e?.status=="DeActive",e.status=="None")),cD(),Ep(" ",e?.status||"-"," ");}}function Ln(t,o){t&1&&($c(0,"th",36),mR(1),xR(2,"translate"),fp()),t&2&&(cD(),Ep(" ",kR(2,1,"Updated At")," "));}function Bn(t,o){if(t&1&&($c(0,"td",38)(1,"div",39),xR(2,"date"),xR(3,"date"),mR(4),xR(5,"date"),fp()()),t&2){let e=o.$implicit;cD(),oE("matTooltip","CreatedAt : "+PR(2,2,e.createdAt,"dd-MM-yy HH:mm:ss")+" UpdatedAt : "+PR(3,5,e.updatedAt,"dd-MM-yy HH:mm:ss")),cD(3),Ep(" ",PR(5,8,e.updatedAt,"dd-MM-yy")," ");}}function Vn(t,o){t&1&&($c(0,"th",40),mR(1),xR(2,"translate"),fp()),t&2&&(cD(),Ep(" ",kR(2,1,"Actions")," "));}function Nn(t,o){if(t&1&&($c(0,"td",41),dl(1,"tbl-actions-row",42),fp()),t&2){let e=o.$implicit;cD(),oE("record",e);}}function Hn(t,o){if(t&1&&($c(0,"th",34),mR(1),xR(2,"translate"),fp()),t&2){let e=z0().$implicit;cD(),Ep(" ",kR(2,1,e.name)," ");}}function jn(t,o){if(t&1){let e=j0();$c(0,"td",35),tr("click",function(n){let s=Yv(e).$implicit,k=z0().$implicit;return z0(2).lb.copyValue(s[k.key]),Zv(n.stopPropagation())}),mR(1),fp();}if(t&2){let e=o.$implicit,i=z0().$implicit;cD(),Ep(" ",e[i.key]||"-"," ");}}function $n(t,o){if(t&1&&(pp$1(0,20),eE(1,Hn,3,3,"th",10)(2,jn,2,1,"td",11),gp$1()),t&2){let e=o.$implicit;oE("matColumnDef",_R(e.key));}}function Un(t,o){if(t&1&&($c(0,"div",44),mR(1),fp()),t&2){let e=z0().$implicit;cD(),Ep(" ",e?.desc||"--"," ");}}function qn(t,o){if(t&1&&($c(0,"td",43),M0(1,Un,2,1,"div",44),aE(2,45),fp()),t&2){let e=o.$implicit,i=z0(2);Br("colspan",i.lb?.cols?.length||1),cD(),A0(i.show?.Desc?1:-1),cD(),oE("ngTemplateOutlet",i.secondaryTemplate)("ngTemplateOutletContext",AR(4,wn,e,e));}}function Gn(t,o){t&1&&dl(0,"tr",46);}function Xn(t,o){if(t&1){let e=j0();$c(0,"tr",47),tr("dblclick",function(){let n=Yv(e).$implicit;return Zv(n.isShow=!n.isShow)}),fp();}if(t&2){let e=o.dataIndex;Pi("alt-row",e%2===1);}}function Zn(t,o){if(t&1&&dl(0,"tr",48),t&2){let e=o.$implicit,i=o.dataIndex;Dp("display",e.isShow?"":"none"),Pi("alt-row",i%2===1);}}function Jn(t,o){t&1&&(dl(0,"mat-spinner",50),$c(1,"div",51),mR(2,"Loading..."),fp(),$c(3,"div",52),mR(4," Please wait while we fetch your data. "),fp());}function Qn(t,o){if(t&1){let e=j0();$c(0,"mat-icon",53),mR(1,"inbox"),fp(),$c(2,"div",51),mR(3," No records found "),fp(),$c(4,"div",52),mR(5," There are no records available to display. "),fp(),$c(6,"btn",54),tr("clickz",function(){Yv(e);let n=z0(3);return Zv(n.lb.refresh())}),fp();}}function Yn(t,o){if(t&1&&($c(0,"tr")(1,"td")(2,"div",49),M0(3,Jn,5,0)(4,Qn,7,0),fp()()()),t&2){let e=z0(2);cD(),Br("colspan",e.lb?.cols?.length||1),cD(2),A0(e.lb.isLoading()?3:4);}}function Kn(t,o){if(t&1){let e=j0();$c(0,"table",1),tr("matSortChange",function(n){Yv(e);let s=z0();return Zv(s.lb.sort(n))}),pp$1(1,2),eE(2,In,3,3,"th",3)(3,Mn,3,5,"td",4),gp$1(),pp$1(4,5),eE(5,Dn,3,3,"th",3)(6,Pn,3,5,"td",4),gp$1(),pp$1(7,6),eE(8,En,2,2,"th",7)(9,zn,2,1,"td",8),gp$1(),pp$1(10,9),eE(11,An,3,3,"th",10)(12,On,2,1,"td",11),gp$1(),pp$1(13,12),eE(14,Rn,3,3,"th",13)(15,Fn,2,6,"td",14),gp$1(),pp$1(16,15),eE(17,Ln,3,3,"th",13)(18,Bn,6,11,"td",16),gp$1(),pp$1(19,17),eE(20,Vn,3,3,"th",18)(21,Nn,2,1,"td",19),gp$1(),x0(22,$n,3,2,"ng-container",20,R0),pp$1(24,21),eE(25,qn,3,7,"td",22),gp$1(),eE(26,Gn,1,0,"tr",23)(27,Xn,1,2,"tr",24)(28,Zn,1,4,"tr",25)(29,Yn,5,2,"tr",26),fp();}if(t&2){let e=z0();oE("dataSource",e.lb.ds)("ngStyle",e.lb?.ds?.data?.length?null:TR(11,Cn)),cD(),oE("sticky",true),cD(3),oE("sticky",true),cD(3),oE("sticky",true),cD(3),oE("sticky",true),cD(9),oE("stickyEnd",true),cD(3),O0(e.lb.colsExtra),cD(4),oE("matHeaderRowDef",e.lb.cols)("matHeaderRowDefSticky",true),cD(),oE("matRowDefColumns",e.lb.cols),cD(),oE("matRowDefColumns",TR(12,Sn));}}var $e=class t{lb;secondaryTemplate;show={};ngOnInit(){this.handleColsDisplay();}handleColsDisplay(){this.show=m({Id:false,SNo:true,Select:false,Status:true,Desc:true},this.show),this.show?.Status&&this.lb?.showStatus(),this.show?.Id&&this.lb?.showID(),this.show?.Select&&this.lb?.showCheckBox(),this.show?.SNo&&this.lb?.showSNo();}get pageStart(){let o=this.lb?.httpResPaginate?.pageNo||1,e=this.lb?.httpResPaginate?.pageSize||10;return (o-1)*e+1}selection=new Aa(true,[]);isAllSelected(){let o=this.selection.selected.length,e=this.lb.ds.data.length;return o===e}toggleAllRows(){if(this.isAllSelected()){this.selection.clear();return}this.selection.select(...this.lb.ds.data);}checkboxLabel(o){return o?`${this.selection.isSelected(o)?"deselect":"select"} row ${o.position+1}`:`${this.isAllSelected()?"deselect":"select"} all`}lastTap=0;onUpdateStatus(o,e){o.stopPropagation();let i=Date.now();if(i-this.lastTap<=400){this.lb._bcs._template.lb.updateStatus(e),this.lastTap=0;return}this.lastTap=i;}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=Oi({type:t,selectors:[["tbl-col-template"]],hostAttrs:[1,"col"],inputs:{lb:"lb",secondaryTemplate:"secondaryTemplate",show:"show"},standalone:false,decls:1,vars:1,consts:[["id","print-area","mat-table","","matSort","","multiTemplateDataRows","",2,"box-shadow","none",3,"dataSource","ngStyle"],["id","print-area","mat-table","","matSort","","multiTemplateDataRows","",2,"box-shadow","none",3,"matSortChange","dataSource","ngStyle"],["matColumnDef","sno",3,"sticky"],["class","text-nowrap","mat-header-cell","","style","width: 50px;",4,"matHeaderCellDef"],["class","text-nowrap text-center","mat-cell","","style","width: 50px;",4,"matCellDef"],["matColumnDef","id",3,"sticky"],["matColumnDef","select",3,"sticky"],["mat-header-cell","","style","width: 50px;",4,"matHeaderCellDef"],["mat-cell","","style","width: 50px;",4,"matCellDef"],["matColumnDef","name",3,"sticky"],["class","text-nowrap text-start","mat-header-cell","","mat-sort-header","","arrowPosition","after",4,"matHeaderCellDef"],["class","text-nowrap text-start","mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","status"],["class","text-nowrap","mat-header-cell","","mat-sort-header","","arrowPosition","after",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass","dblclick",4,"matCellDef"],["matColumnDef","updatedAt"],["class","text-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","actions",3,"stickyEnd"],["class","text-nowrap no-print text-center","mat-header-cell","",4,"matHeaderCellDef"],["class","text-nowrap no-print text-center","mat-cell","","matTooltip","View More Options","matTooltipPosition","above",4,"matCellDef"],[3,"matColumnDef"],["matColumnDef","secondary"],["mat-cell","","style","height: 60px !important;",4,"matCellDef"],["mat-header-row","","class","bg-dark text-light",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","matTooltip","Click Cell To Copy","matTooltipPosition","above","class","theme-row",3,"alt-row","dblclick",4,"matRowDef","matRowDefColumns"],["mat-row","",3,"alt-row","display",4,"matRowDef","matRowDefColumns"],[4,"matNoDataRow"],["mat-header-cell","",1,"text-nowrap",2,"width","50px"],["mat-cell","",1,"text-nowrap","text-center",2,"width","50px"],[1,"link-reset",2,"width","100%","height","100%","display","block","text-align","center",3,"routerLink"],["mat-header-cell","",2,"width","50px"],[1,"tbl-head-checkbox",3,"change","checked","indeterminate"],["mat-cell","",2,"width","50px"],[3,"click","change","checked"],["mat-header-cell","","mat-sort-header","","arrowPosition","after",1,"text-nowrap","text-start"],["mat-cell","",1,"text-nowrap","text-start",3,"click"],["mat-header-cell","","mat-sort-header","","arrowPosition","after",1,"text-nowrap"],["mat-cell","",3,"dblclick","ngClass"],["mat-cell","",1,"text-nowrap"],["matBadge","4","matBadgeOverlap","false","role","button","matTooltipPosition","above",3,"matTooltip"],["mat-header-cell","",1,"text-nowrap","no-print","text-center"],["mat-cell","","matTooltip","View More Options","matTooltipPosition","above",1,"text-nowrap","no-print","text-center"],[3,"record"],["mat-cell","",2,"height","60px !important"],[1,"col-12","p-2","ps-5"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["mat-header-row","",1,"bg-dark","text-light"],["mat-row","","matTooltip","Click Cell To Copy","matTooltipPosition","above",1,"theme-row",3,"dblclick"],["mat-row",""],[1,"table-empty-state"],["diameter","48",1,"mb-2"],[1,"mat-headline-small"],[1,"mat-body-medium"],["color","primary",2,"font-size","25px"],["lbl","Refresh","icon","refresh",1,"mt-3",3,"clickz"]],template:function(e,i){e&1&&M0(0,Kn,30,13,"table",0),e&2&&A0(i.lb?0:-1);},dependencies:[oe,RN,ON,xN,qw,ki,ga,cp,dp,fp$1,mp,lp,hp,up,pp,bp,gp,_p$1,Re,Vt,Z$1,He,te,UN,Ho],styles:[".cols-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;align-items:center;gap:8px}.theme-row[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#d9d9d9}  .mat-sort-header-arrow>svg{fill:#fff!important}.table-empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}.table-empty-state[_ngcontent-%COMP%]   .mat-headline-small[_ngcontent-%COMP%]{margin:0}.table-empty-state[_ngcontent-%COMP%]   .mat-body-medium[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);max-width:320px}.table-empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:8px}  .mat-mdc-menu-item{min-height:40px}.alt-row[_ngcontent-%COMP%]{background-color:#c3c3c3fe}.theme-row[_ngcontent-%COMP%]:hover{background-color:#777}.tbl-head-checkbox[_ngcontent-%COMP%]     .mdc-checkbox__background{border-color:#fff!important}.link-reset[_ngcontent-%COMP%]{all:unset;cursor:pointer;display:inline-block;color:inherit}"]})};var Ie=class t{constructor(o){this._template=o;}_template;ngOnInit(){}static \u0275fac=function(e){return new(e||t)(k($i))};static \u0275cmp=Oi({type:t,selectors:[["tbl-actions"]],decls:31,vars:5,consts:[["menu","matMenu"],["mat-raised-button","","color","primary","type","button","type","button",1,"me-2","d-none","d-lg-inline-flex",3,"matMenuTriggerFor"],["mat-mini-fab","","type","button",1,"me-2","d-inline-flex","d-lg-none",3,"matMenuTriggerFor"],["type","button"],["mat-menu-item","","type","button",3,"click"],[1,"me-2"]],template:function(e,i){if(e&1&&($c(0,"button",1)(1,"mat-icon"),mR(2,"more_vert"),fp(),$c(3,"span"),mR(4),xR(5,"translate"),fp()(),$c(6,"button",2)(7,"mat-icon"),mR(8,"more_vert"),fp()(),$c(9,"mat-menu",3,0)(11,"button",4),tr("click",function(){return i._template.lb.exportListToCSV(i._template?.title)}),$c(12,"mat-icon",5),mR(13,"download"),fp(),$c(14,"span"),mR(15,"Download CSV"),fp()(),$c(16,"button",4),tr("click",function(){return i._template.lb.exportListToJSON(i._template?.title)}),$c(17,"mat-icon",5),mR(18,"download"),fp(),$c(19,"span"),mR(20,"Download JSON"),fp()(),$c(21,"button",4),tr("click",function(){return i._template.lb.copyListJSON()}),$c(22,"mat-icon",5),mR(23,"content_copy"),fp(),$c(24,"span"),mR(25,"Copy JSON"),fp()(),$c(26,"button",4),tr("click",function(){return i._template.lb.printList()}),$c(27,"mat-icon",5),mR(28,"print"),fp(),$c(29,"span"),mR(30,"Print"),fp()()()),e&2){let n=Y0(10);oE("matMenuTriggerFor",n),cD(4),SE(kR(5,3,"More")),cD(2),oE("matMenuTriggerFor",n);}},dependencies:[Cn$1,Jt$1,Cf,ki,bt,Ut,ur,Ho],encapsulation:2})};var Wn=[Cn$1,vp,Fe,Zt$1,$t,J$1,je,we,Ie],Gt=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=fe({type:t});static \u0275inj=ue({imports:[Wn,Cn$1,vp,Fe,Zt$1,$t,J$1,je]})};var d=class e{template;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=Oi({type:e,selectors:[["template-form"]],inputs:{template:"template"},decls:5,vars:1,consts:[["FooterActions",""],["lbl","Reset","icon","cached",3,"clickz"],["lbl","Save","icon","save",3,"clickz"],["lbl","Cancel","icon","cancel",3,"link"]],template:function(t,n){t&1&&($c(0,"template-simple"),pp$1(1,0),$c(2,"btn",1),tr("clickz",function(){return n.template?.tmSubmit?.resetForm()}),fp(),$c(3,"btn",2),tr("clickz",function(){return n.template?.tmSubmit?.submit()}),fp(),dl(4,"btn-link",3),gp$1(),fp()),t&2&&(cD(4),oE("link",n.template?.linkPaginate));},dependencies:[Cn$1,oe,Jt$2,T],encapsulation:2})};var J=()=>({cols:2}),u=class e{template;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=Oi({type:e,selectors:[["template-paginate"]],inputs:{template:"template"},decls:8,vars:5,consts:[[3,"settings"],["HeaderActions",""],["lbl","Add","icon","local_hospital",3,"link"],["lbl","Refresh","icon","autorenew",3,"clickz"],["lbl","Filter",3,"clickz","icon"],["FooterActions",""],[3,"lb"]],template:function(t,n){t&1&&($c(0,"template-simple",0),pp$1(1,1),dl(2,"btn-link",2),$c(3,"btn",3),tr("clickz",function(){return n.template.lb.refresh()}),fp(),$c(4,"btn",4),tr("clickz",function(){return n.template.lb.filterShow()}),fp(),dl(5,"tbl-actions"),gp$1(),pp$1(6,5),dl(7,"tbl-paginator",6),gp$1(),fp()),t&2&&(oE("settings",TR(4,J)),cD(2),oE("link",n.template.linkAdd),cD(2),oE("icon",n.template?.lb?.filterShows?"filter_alt":"filter_alt_off"),cD(3),oE("lb",n.template.lb));},dependencies:[we,Ie,T,Cn$1,oe,Jt$2],encapsulation:2})};function Q(e,i){if(e&1&&dl(0,"template-form",0),e&2){let t=z0();oE("template",t._template);}}function W(e,i){if(e&1&&dl(0,"template-paginate",0),e&2){let t=z0();oE("template",t._template);}}function X(e,i){e&1&&($c(0,"template-simple"),aE(1,1)(2,2),fp());}var C=class e extends ys{ngOnInit(){}static \u0275fac=(()=>{let i;return function(n){return (i||(i=_n$1(e)))(n||e)}})();static \u0275cmp=Oi({type:e,selectors:[["aam-feature-template"]],standalone:false,features:[Ge],decls:3,vars:1,consts:[[3,"template"],["HeaderActions",""],["FooterActions",""]],template:function(t,n){t&1&&M0(0,Q,1,1,"template-form",0)(1,W,1,1,"template-paginate",0)(2,X,3,0,"template-simple"),t&2&&A0(n._template.linkPaginate?0:n._template.linkAdd?1:2);},dependencies:[T,d,u],encapsulation:2})};var Y=[{path:"",component:C,children:new n().addIndex().addModuleAndIndex("Academic",()=>import('./chunk-BpApjeUc.js').then(e=>e.ItsModule)).addModuleAndIndex("Admin",()=>import('./chunk-ghH8Lf55.js').then(e=>e.ItsModule)).addModuleAndIndex("User",()=>import('./chunk--OU_QueU.js').then(e=>e.ItsModule)).addModuleAndIndex("Finance",()=>import('./chunk-DL7PBHnI.js').then(e=>e.ItsModule)).addModuleAndIndex("Settings",()=>import('./chunk-JJTK5500.js').then(e=>e.ItsModule)).addModuleAndIndex("File",()=>import('./chunk-DFvbZlIr.js').then(e=>e.FileUploadModule)).build()}],h=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=fe({type:e});static \u0275inj=ue({imports:[hk.forChild(Y),hk]})};var H=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=fe({type:e});static \u0275inj=ue({imports:[pa,sd,h,Mt,d,u,Gt]})};var chunkMWUNU2CH=/*#__PURE__*/Object.freeze({__proto__:null,FeatureModule:H});export{$e as $,Fe as F,Gt as G,He as H,Nt as N,jt as a,chunkMWUNU2CH as c,je as j,n};