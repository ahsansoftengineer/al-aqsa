import {H as He$1,i as ie,l as li$1,q as qe,D,a as ai$1,g as g$1,n as ne}from'./chunk-Cx810mrW.js';import {d as de,a as ae,n as md,O as Os,C as Cc,u as us,o as Gs,p as Dn$1,S,H,r as N,s as gm,t as rm,w as p,z as bn,B as Tu,F as go,J as SN,Y as Y$1,k as ki$1,L as ue,P as z,U as j,X as tm,_ as Xt,a0 as ml,a1 as X$1,a2 as Ge,a3 as wn,a4 as Zb,a5 as Yu,a6 as bt$1,a7 as Qt,a8 as Cf,a9 as Fn$1,aa as si$1,ab as y,ac as Wt,ad as Vo,ae as Cb,af as Z,ag as um,ah as to,ai as Ji$1,aj as We,ak as Rt,al as oo,am as ki$2,an as mm,ao as _o,ap as Va,aq as xe$1,ar as ye,q,as as ui$1,at as CP,au as MP,av as hm,aw as Ue,ax as Si$1,ay as ui$2,az as ut$1,aA as lm,aB as ye$1,aC as QS,aD as wu,M,aE as G,aF as Ct,aG as nt,aH as nr,aI as Vn,aJ as m,aK as _f,aL as Jn,aM as Le,aN as _E,aO as $0,aP as DE,G as Gc,v as vp,aQ as hl,aR as z0,j as gD,l as fE,aS as nr$1,aT as gE,aU as Br,aV as Fi,aW as Cp,aX as wp,aY as bp,aZ as $k,a_ as gy,h as aE,m as lR,a$ as Dt,b0 as Ep,g as Ki$1,N as NR,b1 as my,I as Ip,b2 as pl,b3 as gl,b4 as DR,b5 as zN,b6 as ob,R as Rs,e as ee,D as De,E as Ec,b7 as Ta,i as qR,b8 as xE,b9 as zR,Z as ZR,ba as kR,bb as ZN,bc as YN,bd as td,be as id,bf as sd,bg as ad,bh as nd,bi as ld,bj as rd,bk as od,bl as cd,bm as dd,bn as ud,bo as tg,bp as ms,bq as ls,br as oR,bs as eR,bt as _p,bu as Dp,bv as q0,bw as G0,bx as HR,by as Y0,bz as W0,bA as dE,bB as ty,bC as ny,bD as GR,bE as XR,bF as pE,bG as Sp,bH as yp,bI as Di$1,bJ as oi$1,K as Kg,bK as De$1,bL as _r,V as Vs,bM as Ys,c as Ks,bN as Hg,bO as qe$1}from'./main-WG7PTEGP.js';import {n as nt$1,j as j$1}from'./chunk-CWY2h_gH.js';var qn=["text"],Un=[[["mat-icon"]],"*"],$n=["mat-icon","*"];function Wn(i,o){if(i&1&&hl(0,"mat-pseudo-checkbox",1),i&2){let e=oR();fE("disabled",e.disabled)("state",e.selected?"checked":"unchecked");}}function Kn(i,o){if(i&1&&hl(0,"mat-pseudo-checkbox",3),i&2){let e=oR();fE("disabled",e.disabled);}}function Qn(i,o){if(i&1&&(Gc(0,"span",4),NR(1),vp()),i&2){let e=oR();gD(),Ip("(",e.group.label,")");}}var at=new y("MAT_OPTION_PARENT_COMPONENT"),ot=new y("MatOptgroup");var it=class{source;isUserInput;constructor(o,e=false){this.source=o,this.isUserInput=e;}},he=(()=>{class i{_element=p(ue);_changeDetectorRef=p(bn);_parent=p(at,{optional:true});group=p(ot,{optional:true});_signalDisableRipple=false;_selected=false;_active=false;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=p(Tu).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e);}_disabled=X$1(false);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return !!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Y$1;_text;_stateChanges=new H;constructor(){let e=p(tm);e.load(Xt),e.load(Wt),this._signalDisableRipple=!!this._parent&&Vo(this._parent.disableRipple);}get active(){return this._active}get viewValue(){return (this._text?.nativeElement.textContent||"").trim()}select(e=true){this._selected||(this._selected=true,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent());}deselect(e=true){this._selected&&(this._selected=false,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent());}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t);}setActiveStyles(){this._active||(this._active=true,this._changeDetectorRef.markForCheck());}setInactiveStyles(){this._active&&(this._active=false,this._changeDetectorRef.markForCheck());}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Cb(e)&&(this._selectViaInteraction(),e.preventDefault());}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:true,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(true));}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e);}}ngOnDestroy(){this._stateChanges.complete();}_emitSelectionChangeEvent(e=false){this.onSelectionChange.emit(new it(this,e));}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=ki$1({type:i,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&Cp(qn,7),t&2){let r;wp(r=bp())&&(n._text=r.first);}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&nr$1("click",function(){return n._selectViaInteraction()})("keydown",function(p){return n._handleKeydown(p)}),t&2&&(gE("id",n.id),Br("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),Fi("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled));},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",Le]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:$n,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(_E(Un),$0(0,Wn,1,2,"mat-pseudo-checkbox",1),DE(1),Gc(2,"span",2,0),DE(4,1),vp(),$0(5,Kn,1,1,"mat-pseudo-checkbox",3),$0(6,Qn,2,1,"span",4),hl(7,"div",5)),t&2&&(z0(n.multiple?0:-1),gD(5),z0(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),gD(),z0(n.group&&n.group._inert?6:-1),gD(),fE("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple));},dependencies:[_f,Jn],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return i})();function Dn(i,o,e){if(e.length){let t=o.toArray(),n=e.toArray(),r=0;for(let p=0;p<i+1;p++)t[p].group&&t[p].group===n[r]&&r++;return r}return 0}function On(i,o,e,t){return i<e?i:i+o>e+t?Math.max(0,i-t+o):e}var En=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=de({type:i});static \u0275inj=ae({imports:[Fn$1,si$1,Gs]})}return i})();var rt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=de({type:i});static \u0275inj=ae({imports:[Qt,Cf,he,Gs]})}return i})();var ei=["trigger"],ti=["panel"],ni=[[["mat-select-trigger"]],"*"],ii=["mat-select-trigger","*"];function ai(i,o){if(i&1&&(Gc(0,"span",4),NR(1),vp()),i&2){let e=oR();gD(),xE(e.placeholder);}}function oi(i,o){i&1&&DE(0);}function ri(i,o){if(i&1&&(Gc(0,"span",11),NR(1),vp()),i&2){let e=oR(2);gD(),xE(e.triggerValue);}}function ci(i,o){if(i&1&&(Gc(0,"span",5),$0(1,oi,1,0)(2,ri,2,1,"span",11),vp()),i&2){let e=oR();gD(),z0(e.customTrigger?1:2);}}function li(i,o){if(i&1){let e=eR();Gc(0,"div",12,1),nr$1("keydown",function(n){ty(e);let r=oR();return ny(r._handleKeydown(n))}),DE(2,1),vp();}if(i&2){let e=oR();DR(e.panelClass),Fi("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),Br("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby());}}var si=new y("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=p(Z);return ()=>um(i)}}),di=new y("MAT_SELECT_CONFIG"),mi=new y("MatSelectTrigger"),ct=class{source;value;constructor(o,e){this.source=o,this.value=e;}},Rn=(()=>{class i{_viewportRuler=p(to);_changeDetectorRef=p(bn);_elementRef=p(ue);_dir=p(Ji$1,{optional:true});_idGenerator=p(Tu);_renderer=p(We);_parentFormField=p(Rt,{optional:true});ngControl=p(oo,{self:true,optional:true});_liveAnnouncer=p(ki$2);_defaultOptions=p(di,{optional:true});_animationsDisabled=j();_popoverLocation;_initialized=new H;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,r=Dn(e,this.options,this.optionGroups),p=t._getHostElement();e===0&&r===1?n.scrollTop=0:n.scrollTop=On(p.offsetTop,p.offsetHeight,n.scrollTop,n.offsetHeight);}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0);}_getChangeEvent(e){return new ct(this,e)}_scrollStrategyFactory=p(si);_panelOpen=false;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new H;_errorStateTracker;stateChanges=new H;disableAutomaticLabeling=true;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=false;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=false;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e);}_disableRipple=X$1(false);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??false;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next();}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(mm.required)??false}set required(e){this._required=e,this.stateChanges.next();}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e;}_multiple=false;disableOptionCentering=this._defaultOptions?.disableOptionCentering??false;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection();}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e);}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next();}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e;}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??false;optionSelectionChanges=_o(()=>{let e=this.options;return e?e.changes.pipe(Va(e),xe$1(()=>QS(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(xe$1(()=>this.optionSelectionChanges))});openedChange=new Y$1;_openedStream=this.openedChange.pipe(ye(e=>e),q(()=>{}));_closedStream=this.openedChange.pipe(ye(e=>!e),q(()=>{}));selectionChange=new Y$1;valueChange=new Y$1;constructor(){let e=p(ui$1),t=p(CP,{optional:true}),n=p(MP,{optional:true}),r=p(new ml("tabindex"),{optional:true}),p$1=p(hm,{optional:true});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ue(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=p$1?.usePopover===false?null:"inline",this.id=this.id;}ngOnInit(){this._selectionModel=new Si$1(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ui$2(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges());});}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ui$2(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect());}),this.options.changes.pipe(Va(null),ui$2(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection();});}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby");}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState());}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass));}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete();}toggle(){this.panelOpen?this.close():this.open();}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=true,this._overlayDir.positionChange.pipe(ut$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled();}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(true)));}close(){this._panelOpen&&(this._panelOpen=false,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(false)));}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0;};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay());}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay();},200);e.classList.add("mat-select-panel-exit");}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck();}writeValue(e){this._assignValue(e);}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next();}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return "";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState();}_isRtl(){return this._dir?this._dir.value==="rtl":false}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e));}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,r=t===13||t===32,p=this._keyManager;if(!p.isTyping()&&r&&!Cb(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let Q=this.selected;p.onKeydown(e);let N=this.selected;N&&Q!==N&&this._liveAnnouncer.announce(N.viewValue,1e4);}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,r=n===40||n===38,p=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!p&&(n===13||n===32)&&t.activeItem&&!Cb(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!p&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let Q=this.options.some(N=>!N.disabled&&!N.selected);this.options.forEach(N=>{N.disabled||(Q?N.select():N.deselect());});}else {let Q=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==Q&&t.activeItem._selectViaInteraction();}}_handleOverlayKeydown(e){e.keyCode===27&&!Cb(e)&&(e.preventDefault(),this.close());}_onFocus(){this.disabled||(this._focused=true,this.stateChanges.next());}_onBlur(){this._focused=false,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next());}get empty(){return !this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next();});}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else {let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1);}this._changeDetectorRef.markForCheck();}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return  false;try{return (n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch(r){return  false}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,true):false}_skipPredicate=e=>this.panelOpen?false:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof lm?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}_initKeyManager(){this._keyManager=new ye$1(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close());}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction();});}_resetOptions(){let e=QS(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ui$2(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus());}),QS(...this.options.map(t=>t._stateChanges)).pipe(ui$2(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next();});}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next();}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next();}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck();}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e);}else this._keyManager.setActiveItem(this._selectionModel.selected[0]);}_canOpen(){return !this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e);}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby");}onContainerClick(e){let t=wu(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open());}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=ki$1({type:i,selectors:[["mat-select"]],contentQueries:function(t,n,r){if(t&1&&Ep(r,mi,5)(r,he,5)(r,ot,5),t&2){let p;wp(p=bp())&&(n.customTrigger=p.first),wp(p=bp())&&(n.options=p),wp(p=bp())&&(n.optionGroups=p);}},viewQuery:function(t,n){if(t&1&&Cp(ei,5)(ti,5)($k,5),t&2){let r;wp(r=bp())&&(n.trigger=r.first),wp(r=bp())&&(n.panel=r.first),wp(r=bp())&&(n._overlayDir=r.first);}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&nr$1("keydown",function(p){return n._handleKeydown(p)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(Br("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),Fi("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen));},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",Le],disableRipple:[2,"disableRipple","disableRipple",Le],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:SN(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",Le],placeholder:"placeholder",required:[2,"required","required",Le],multiple:[2,"multiple","multiple",Le],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",Le],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",SN],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",Le]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[wn([{provide:Dt,useExisting:i},{provide:at,useExisting:i}]),Ge],ngContentSelectors:ii,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(_E(ni),Gc(0,"div",2,0),nr$1("click",function(){return n.open()}),Gc(3,"div",3),$0(4,ai,2,1,"span",4)(5,ci,3,1,"span",5),vp(),Gc(6,"div",6)(7,"div",7),gy(),Gc(8,"svg",8),hl(9,"path",9),vp()()()(),aE(10,li,3,16,"ng-template",10),nr$1("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(p){return n._handleOverlayKeydown(p)})),t&2){let r=lR(1);gD(3),Br("id",n._valueId),gD(),z0(n.empty?4:5),gD(6),fE("cdkConnectedOverlayDisableClose",true)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",true)("cdkConnectedOverlayUsePopover",n._popoverLocation);}},dependencies:[lm,$k],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return i})();var zn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=de({type:i});static \u0275inj=ae({imports:[gm,rt,Gs,rm,En,rt]})}return i})();function pi(i,o){if(i&1&&(Gc(0,"mat-option",17),NR(1),vp()),i&2){let e=o.$implicit;fE("value",e),gD(),Ip(" ",e," ");}}function hi(i,o){if(i&1){let e=eR();Gc(0,"mat-form-field",14)(1,"mat-select",16,0),nr$1("selectionChange",function(n){ty(e);let r=oR(2);return ny(r._changePageSize(n.value))}),q0(3,pi,2,2,"mat-option",17,W0),vp(),Gc(5,"div",18),nr$1("click",function(){ty(e);let n=lR(2);return ny(n.open())}),vp()();}if(i&2){let e=oR(2);fE("appearance",e._formFieldAppearance)("color",e.color),gD(),fE("value",e.pageSize)("disabled",e.disabled),dE("aria-labelledby",e._pageSizeLabelId),fE("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),gD(2),Y0(e._displayedPageSizeOptions);}}function ui(i,o){if(i&1&&(Gc(0,"div",15),NR(1),vp()),i&2){let e=oR(2);gD(),xE(e.pageSize);}}function bi(i,o){if(i&1&&(Gc(0,"div",3)(1,"div",13),NR(2),vp(),$0(3,hi,6,7,"mat-form-field",14),$0(4,ui,2,1,"div",15),vp()),i&2){let e=oR();gD(),Br("id",e._pageSizeLabelId),gD(),Ip(" ",e._intl.itemsPerPageLabel," "),gD(),z0(e._displayedPageSizeOptions.length>1?3:-1),gD(),z0(e._displayedPageSizeOptions.length<=1?4:-1);}}function _i(i,o){if(i&1){let e=eR();Gc(0,"button",19),nr$1("click",function(){ty(e);let n=oR();return ny(n._buttonClicked(0,n._previousButtonsDisabled()))}),gy(),Gc(1,"svg",8),hl(2,"path",20),vp()();}if(i&2){let e=oR();fE("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),Br("aria-label",e._intl.firstPageLabel);}}function gi(i,o){if(i&1){let e=eR();Gc(0,"button",21),nr$1("click",function(){ty(e);let n=oR();return ny(n._buttonClicked(n.getNumberOfPages()-1,n._nextButtonsDisabled()))}),gy(),Gc(1,"svg",8),hl(2,"path",22),vp()();}if(i&2){let e=oR();fE("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),Br("aria-label",e._intl.lastPageLabel);}}var xe=(()=>{class i{changes=new H;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,n)=>{if(n==0||t==0)return `0 of ${n}`;n=Math.max(n,0);let r=e*t,p=r<n?Math.min(r+t,n):r+t;return `${r+1} \u2013 ${p} of ${n}`};static \u0275fac=function(t){return new(t||i)};static \u0275prov=N({token:i,factory:i.\u0275fac})}return i})(),fi=50;var ki=new y("MAT_PAGINATOR_DEFAULT_OPTIONS"),lt=(()=>{class i{_intl=p(xe);_changeDetectorRef=p(bn);_formFieldAppearance;_pageSizeLabelId=p(Tu).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=false;_initializedStream=new go(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck();}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck();}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions();}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>SN(t,0)),this._updateDisplayedPageSizeOptions();}_pageSizeOptions=[];hidePageSize=false;showFirstLastButtons=false;selectConfig={};disabled=false;page=new Y$1;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=p(ki,{optional:true});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:n,pageSizeOptions:r,hidePageSize:p,showFirstLastButtons:Q}=t;n!=null&&(this._pageSize=n),r!=null&&(this._pageSizeOptions=r),p!=null&&(this.hidePageSize=p),Q!=null&&(this.showFirstLastButtons=Q);}this._formFieldAppearance=t?.formFieldAppearance||"outline";}ngOnInit(){this._isInitialized=true,this._updateDisplayedPageSizeOptions(),this._initializedStream.next();}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe();}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1);}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1);}firstPage(){this.hasPreviousPage()&&this._navigate(0);}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1);}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,n=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(n);}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:fi),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck());}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length});}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t));}_buttonClicked(e,t){t||this._navigate(e);}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=ki$1({type:i,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",SN],length:[2,"length","length",SN],pageSize:[2,"pageSize","pageSize",SN],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",Le],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",Le],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",Le]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,n){t&1&&(Gc(0,"div",1)(1,"div",2),$0(2,bi,5,4,"div",3),Gc(3,"div",4)(4,"div",5),NR(5),vp(),$0(6,_i,3,5,"button",6),Gc(7,"button",7),nr$1("click",function(){return n._buttonClicked(n.pageIndex-1,n._previousButtonsDisabled())}),gy(),Gc(8,"svg",8),hl(9,"path",9),vp()(),my(),Gc(10,"button",10),nr$1("click",function(){return n._buttonClicked(n.pageIndex+1,n._nextButtonsDisabled())}),gy(),Gc(11,"svg",8),hl(12,"path",11),vp()(),$0(13,gi,3,5,"button",12),vp()()()),t&2&&(gD(2),z0(n.hidePageSize?-1:2),gD(3),Ip(" ",n._intl.getRangeLabel(n.pageIndex,n.pageSize,n.length)," "),gD(),z0(n.showFirstLastButtons?6:-1),gD(),fE("matTooltip",n._intl.previousPageLabel)("matTooltipDisabled",n._previousButtonsDisabled())("disabled",n._previousButtonsDisabled())("tabindex",n._previousButtonsDisabled()?-1:null),Br("aria-label",n._intl.previousPageLabel),gD(3),fE("matTooltip",n._intl.nextPageLabel)("matTooltipDisabled",n._nextButtonsDisabled())("disabled",n._nextButtonsDisabled())("tabindex",n._nextButtonsDisabled()?-1:null),Br("aria-label",n._intl.nextPageLabel),gD(3),z0(n.showFirstLastButtons?13:-1));},dependencies:[si$1,Rn,he,Ki$1,qe],styles:[`.mat-mdc-paginator {
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
`],encapsulation:2})}return i})(),st=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=de({type:i});static \u0275inj=ae({imports:[us,zn,ie,lt]})}return i})();var xi=["*",[["","matSortHeaderIcon",""]]],vi=["*","[matSortHeaderIcon]"];function Ci(i,o){i&1&&(gy(),pl(0,"svg",3),yp(1,"path",4),gl());}function Si(i,o){i&1&&(pl(0,"div",2),DE(1,1,null,Ci,2,0),gl());}var Fn=new y("MAT_SORT_DEFAULT_OPTIONS"),dt=(()=>{class i{_defaultOptions;_initializedStream=new go(1);sortables=new Map;_stateChanges=new H;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e;}_direction="";disableClear;disabled=false;sortChange=new Y$1;initialized=this._initializedStream;constructor(e){this._defaultOptions=e;}register(e){this.sortables.set(e.id,e);}deregister(e){this.sortables.delete(e.id);}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction});}getNextSortDirection(e){if(!e)return "";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,n=wi(e.start||this.start,t),r=n.indexOf(this.direction)+1;return r>=n.length&&(r=0),n[r]}ngOnInit(){this._initializedStream.next();}ngOnChanges(){this._stateChanges.next();}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete();}static \u0275fac=function(t){return new(t||i)(M(Fn,8))};static \u0275dir=G({type:i,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",Le],disabled:[2,"matSortDisabled","disabled",Le]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[Ge]})}return i})();function wi(i,o){let e=["asc","desc"];return i=="desc"&&e.reverse(),o||e.push(""),e}var Ln=(()=>{class i{_sort=p(dt,{optional:true});_columnDef=p(Ct,{optional:true});_changeDetectorRef=p(bn);_focusMonitor=p(nt);_elementRef=p(ue);_ariaDescriber=p(nr,{optional:true});_renderChanges;_animationsDisabled=j();_recentlyCleared=X$1(null);_sortButton;id;arrowPosition="after";start;disabled=false;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e);}_sortActionDescription="Sort";disableClear;constructor(){p(tm).load(Xt);let e=p(Fn,{optional:true});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition);}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=QS(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription);}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null));});}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription);}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null);}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction());}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return !this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e;}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=ki$1({type:i,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,n){t&1&&nr$1("click",function(){return n._toggleOnInteraction()})("keydown",function(p){return n._handleKeydown(p)})("mouseleave",function(){return n._recentlyCleared.set(null)}),t&2&&(Br("aria-sort",n._getAriaSortAttribute()),Fi("mat-sort-header-disabled",n._isDisabled()));},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",Le],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",Le]},exportAs:["matSortHeader"],ngContentSelectors:vi,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(t,n){t&1&&(_E(xi),pl(0,"div",0)(1,"div",1),DE(2),gl(),$0(3,Si,3,0,"div",2),gl()),t&2&&(Fi("mat-sort-header-sorted",n._isSorted())("mat-sort-header-position-before",n.arrowPosition==="before")("mat-sort-header-descending",n._sort.direction==="desc")("mat-sort-header-ascending",n._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",n._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",n._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",n._animationsDisabled),Br("tabindex",n._isDisabled()?null:0)("role",n._isDisabled()?null:"button"),gD(3),z0(n._renderArrow()?3:-1));},styles:[`.mat-sort-header {
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
`],encapsulation:2})}return i})(),mt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=de({type:i});static \u0275inj=ae({imports:[Gs]})}return i})();var Mi=()=>[10,20,25,50,100,200,250,500,1e3];function Ii(i,o){if(i&1){let e=eR();Gc(0,"mat-paginator",0),nr$1("page",function(n){ty(e);let r=oR();return ny(r.lb?.paginate(n))}),vp(),Gc(1,"mat-paginator",1),nr$1("page",function(n){ty(e);let r=oR();return ny(r.lb?.paginate(n))}),vp();}if(i&2){let e=oR();fE("length",e.lb?.httpResPaginate?.count)("pageIndex",e.lb.httpReqPaginate?.body?.pageNo-1)("pageSize",e.lb?.httpReqPaginate?.body?.pageSize)("pageSizeOptions",HR(7,Mi)),gD(),fE("length",e.lb?.httpResPaginate?.count)("pageIndex",e.lb.httpReqPaginate?.body?.pageNo-1)("pageSize",e.lb?.httpReqPaginate?.body?.pageSize);}}var pt=class i{constructor(o){this._template=o;}_template;lb;static \u0275fac=function(e){return new(e||i)(M(Vn))};static \u0275cmp=ki$1({type:i,selectors:[["tbl-paginator"]],inputs:{lb:"lb"},standalone:false,decls:1,vars:1,consts:[["showFirstLastButtons","",1,"d-none","d-md-block",3,"page","length","pageIndex","pageSize","pageSizeOptions"],["showFirstLastButtons","",1,"d-sm-block","d-md-none",3,"page","length","pageIndex","pageSize"]],template:function(e,t){e&1&&$0(0,Ii,2,8),e&2&&z0(t.lb?.httpReqPaginate?.body?.pageNo?0:-1);},dependencies:[lt],styles:[`.mat-mdc-paginator-container{padding:0!important}.mat-mdc-paginator-range-label{margin:0 5px!important}.mat-mdc-paginator{background:transparent!important}.mat-mdc-paginator-page-size mat-form-field{margin:0!important}
`],encapsulation:2})};var Di=["*"],Bn=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=ki$1({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&Fi("mdc-form-field--align-end",n.labelPosition==="before");},inputs:{labelPosition:"labelPosition"},ngContentSelectors:Di,decls:1,vars:0,template:function(t,n){t&1&&(_E(),DE(0));},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return i})();var Oi=["input"],Ei=["label"],Pi=["*"],ut={color:"accent",clickAction:"check-indeterminate",disabledInteractive:false},Ai=new y("mat-checkbox-default-options",{providedIn:"root",factory:()=>ut}),T=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(T||{}),bt=class{source;checked},_t=(()=>{class i{_elementRef=p(ue);_changeDetectorRef=p(bn);_ngZone=p(z);_animationsDisabled=j();_options=p(Ai,{optional:true});focus(){this._inputElement.nativeElement.focus();}_createChangeEvent(e){let t=new bt;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return `${this.id||this._uniqueId}-input`}required=false;labelPosition="after";name=null;change=new Y$1;indeterminateChange=new Y$1;value;disableRipple=false;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=T.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){p(tm).load(Xt);let e=p(new ml("tabindex"),{optional:true});this._options=this._options||ut,this.color=this._options.color||ut.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=p(Tu).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??false;}ngOnChanges(e){e.required&&this._validatorChangeFn();}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate);}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck());}_checked=false;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck());}_disabled=false;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(T.Indeterminate):this._transitionCheckState(this.checked?T.Checked:T.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e);}_indeterminate=X$1(false);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges();}writeValue(e){this.checked=!!e;}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorChangeFn=e;}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(r);},1e3);});}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked);}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked);}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(false),this.indeterminateChange.emit(false);}),this._checked=!this._checked,this._transitionCheckState(this._checked?T.Checked:T.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate);}_onInteractionEvent(e){e.stopPropagation();}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck();});}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return "";switch(e){case T.Init:if(t===T.Checked)return this._animationClasses.uncheckedToChecked;if(t==T.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case T.Unchecked:return t===T.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case T.Checked:return t===T.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case T.Indeterminate:return t===T.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return ""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e);}_onInputClick(){this._handleInputClick();}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus();}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation();}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=ki$1({type:i,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&Cp(Oi,5)(Ei,5),t&2){let r;wp(r=bp())&&(n._inputElement=r.first),wp(r=bp())&&(n._labelElement=r.first);}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(gE("id",n.id),Br("tabindex",null)("aria-label",null)("aria-labelledby",null),DR(n.color?"mat-"+n.color:"mat-accent"),Fi("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",Le],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",Le],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",Le],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:SN(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Le],checked:[2,"checked","checked",Le],disabled:[2,"disabled","disabled",Le],indeterminate:[2,"indeterminate","indeterminate",Le]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[wn([{provide:Zb,useExisting:bt$1(()=>i),multi:true},{provide:Yu,useExisting:i,multi:true}]),Ge],ngContentSelectors:Pi,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(_E(),Gc(0,"div",3),nr$1("click",function(p){return n._preventBubblingFromLabel(p)}),Gc(1,"div",4,0)(3,"div",5),nr$1("click",function(){return n._onTouchTargetClick()}),vp(),Gc(4,"input",6,1),nr$1("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(p){return n._onInteractionEvent(p)}),vp(),hl(6,"div",7),Gc(7,"div",8),gy(),Gc(8,"svg",9),hl(9,"path",10),vp(),my(),hl(10,"div",11),vp(),hl(11,"div",12),vp(),Gc(12,"label",13,2),DE(14),vp()()),t&2){let r=lR(2);fE("labelPosition",n.labelPosition),gD(4),Fi("mdc-checkbox--selected",n.checked),fE("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),Br("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?true:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),gD(7),fE("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",true),gD(),fE("for",n.inputId);}},dependencies:[Jn,Bn],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return i})(),gt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=de({type:i});static \u0275inj=ae({imports:[_t,Gs]})}return i})();var Bi=(i,o)=>[i,o],ve=class i{constructor(o){this._template=o;}_template;record;ngOnInit(){}static \u0275fac=function(e){return new(e||i)(M(Vn))};static \u0275cmp=ki$1({type:i,selectors:[["tbl-actions-row"]],inputs:{record:"record"},standalone:false,decls:41,vars:16,consts:[["menu","matMenu"],["mat-icon-button","","type","button",2,"height","35px","overflow","visible",3,"matMenuTriggerFor"],[1,"text-primary"],["type","button"],["mat-menu-item","","type","button",3,"click"],[1,"me-2"],["mat-menu-item","","color","primary",1,"me-1",3,"routerLink"],[1,"me-2",3,"ngClass"],[3,"ngClass"],[1,"me-2","text-danger"],[1,"text-danger"]],template:function(e,t){if(e&1&&(Gc(0,"button",1)(1,"mat-icon",2),NR(2,"more_vert"),vp()(),Gc(3,"mat-menu",3,0)(5,"button",4),nr$1("click",function(){return t.record.isShow=!t.record.isShow}),Gc(6,"mat-icon",5),NR(7),vp(),Gc(8,"span"),NR(9),vp()(),Gc(10,"a",6)(11,"mat-icon",5),NR(12,"edit"),vp(),Gc(13,"span"),NR(14),qR(15,"translate"),vp()(),Gc(16,"button",4),nr$1("click",function(){return t._template.lb.copyItemJSON(t.record)}),Gc(17,"mat-icon",5),NR(18,"content_copy"),vp(),Gc(19,"span"),NR(20,"Copy JSON"),vp()(),Gc(21,"button",4),nr$1("click",function(){return t._template.lb.exportItemToCSV(t.record)}),Gc(22,"mat-icon",5),NR(23,"download"),vp(),Gc(24,"span"),NR(25,"Export to CSV"),vp()(),Gc(26,"button",4),nr$1("click",function(){return t._template.lb.updateStatus(t.record)}),Gc(27,"mat-icon",7),NR(28),vp(),Gc(29,"span",8),NR(30),vp()(),Gc(31,"button",4),nr$1("click",function(){return t._template.lb.updateDelete(t.record)}),Gc(32,"mat-icon",9),NR(33,"delete"),vp(),Gc(34,"span",10),NR(35,"Delete Soft"),vp()(),Gc(36,"button",4),nr$1("click",function(){return t._template.lb.Delete(t.record)}),Gc(37,"mat-icon",9),NR(38,"delete"),vp(),Gc(39,"span",10),NR(40,"Delete"),vp()()()),e&2){let n=lR(4);fE("matMenuTriggerFor",n),gD(7),xE(t.record?.isShow?"visibility_off":"visibility"),gD(2),xE(t.record?.isShow?"Hide":"Show"),gD(),fE("routerLink",zR(13,Bi,t._template.linkUpdate,t.record?.id)),gD(4),xE(ZR(15,11,"Edit")),gD(13),fE("ngClass",kR(t.record.status==="Active"?"text-success":"text-warning")),gD(),Ip(" ",t.record.status==="Active"?"toggle_on":"toggle_off"," "),gD(),fE("ngClass",kR(t.record.status==="Active"?"text-success":"text-warning")),gD(),xE(t.record.status);}},dependencies:[zN,ob,Ki$1,Rs,ee,De,Ec,Ta],encapsulation:2})};var Hi=()=>({height:"100%"}),ji=()=>["secondary"],jn=(i,o)=>[i,o],Gi=(i,o,e)=>({"text-success":i,"text-danger":o,"text-secondary":e}),qi=(i,o)=>({$implicit:i,row:o});function Ui(i,o){i&1&&(Gc(0,"th",27),NR(1),qR(2,"translate"),vp()),i&2&&(gD(),Ip(" ",ZR(2,1,"S. No")," "));}function $i(i,o){if(i&1&&(Gc(0,"td",28)(1,"a",29),NR(2),vp()()),i&2){let e=o.$implicit,t=o.dataIndex,n=oR(2);gD(),fE("routerLink",zR(2,jn,n.lb._bcs._template.linkUpdate,e.id)),gD(),Ip(" ",n.pageStart+t||"No"," ");}}function Wi(i,o){i&1&&(Gc(0,"th",27),NR(1),qR(2,"translate"),vp()),i&2&&(gD(),Ip(" ",ZR(2,1,"ID")," "));}function Ki(i,o){if(i&1&&(Gc(0,"td",28)(1,"a",29),NR(2),vp()()),i&2){let e=o.$implicit,t=oR(2);gD(),fE("routerLink",zR(2,jn,t.lb._bcs._template.linkUpdate,e.id)),gD(),Ip(" ",e.id||"-"," ");}}function Qi(i,o){if(i&1){let e=eR();Gc(0,"th",30)(1,"mat-checkbox",31),nr$1("change",function(n){ty(e);let r=oR(2);return ny(n?r.toggleAllRows():null)}),vp()();}if(i&2){let e=oR(2);gD(),fE("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected());}}function Xi(i,o){if(i&1){let e=eR();Gc(0,"td",32)(1,"mat-checkbox",33),nr$1("click",function(n){return n.stopPropagation()})("change",function(n){let r=ty(e).$implicit,p=oR(2);return ny(n?p.selection.toggle(r):null)}),vp()();}if(i&2){let e=o.$implicit,t=oR(2);gD(),fE("checked",t.selection.isSelected(e));}}function Yi(i,o){i&1&&(Gc(0,"th",34),NR(1),qR(2,"translate"),vp()),i&2&&(gD(),Ip(" ",ZR(2,1,"Name")," "));}function Zi(i,o){if(i&1){let e=eR();Gc(0,"td",35),nr$1("click",function(n){let r=ty(e).$implicit;return oR(2).lb.copyValue(r.name),ny(n.stopPropagation())}),NR(1),vp();}if(i&2){let e=o.$implicit;gD(),Ip(" ",e?.name||"-"," ");}}function Ji(i,o){i&1&&(Gc(0,"th",36),NR(1),qR(2,"translate"),vp()),i&2&&(gD(),Ip(" ",ZR(2,1,"Status")," "));}function ea(i,o){if(i&1){let e=eR();Gc(0,"td",37),nr$1("dblclick",function(n){let r=ty(e).$implicit;return oR(2).lb._bcs._template.lb.updateStatus(r),ny(n.stopPropagation())}),NR(1),vp();}if(i&2){let e=o.$implicit;fE("ngClass",GR(2,Gi,e?.status=="Active",e?.status=="DeActive",e.status=="None")),gD(),Ip(" ",e?.status||"-"," ");}}function ta(i,o){i&1&&(Gc(0,"th",36),NR(1),qR(2,"translate"),vp()),i&2&&(gD(),Ip(" ",ZR(2,1,"Updated At")," "));}function na(i,o){if(i&1&&(Gc(0,"td",38)(1,"div",39),qR(2,"date"),qR(3,"date"),NR(4),qR(5,"date"),vp()()),i&2){let e=o.$implicit;gD(),fE("matTooltip","CreatedAt : "+XR(2,2,e.createdAt,"dd-MM-yy HH:mm:ss")+" UpdatedAt : "+XR(3,5,e.updatedAt,"dd-MM-yy HH:mm:ss")),gD(3),Ip(" ",XR(5,8,e.updatedAt,"dd-MM-yy")," ");}}function ia(i,o){i&1&&(Gc(0,"th",40),NR(1),qR(2,"translate"),vp()),i&2&&(gD(),Ip(" ",ZR(2,1,"Actions")," "));}function aa(i,o){if(i&1&&(Gc(0,"td",41),hl(1,"tbl-actions-row",42),vp()),i&2){let e=o.$implicit;gD(),fE("record",e);}}function oa(i,o){if(i&1&&(Gc(0,"th",34),NR(1),qR(2,"translate"),vp()),i&2){let e=oR().$implicit;gD(),Ip(" ",ZR(2,1,e.name)," ");}}function ra(i,o){if(i&1){let e=eR();Gc(0,"td",35),nr$1("click",function(n){let r=ty(e).$implicit,p=oR().$implicit;return oR(2).lb.copyValue(r[p.key]),ny(n.stopPropagation())}),NR(1),vp();}if(i&2){let e=o.$implicit,t=oR().$implicit;gD(),Ip(" ",e[t.key]||"-"," ");}}function ca(i,o){if(i&1&&(_p(0,20),aE(1,oa,3,3,"th",10)(2,ra,2,1,"td",11),Dp()),i&2){let e=o.$implicit;fE("matColumnDef",kR(e.key));}}function la(i,o){if(i&1&&(Gc(0,"div",44),NR(1),vp()),i&2){let e=oR().$implicit;gD(),Ip(" ",e?.desc||"--"," ");}}function sa(i,o){if(i&1&&(Gc(0,"td",43),$0(1,la,2,1,"div",44),pE(2,45),vp()),i&2){let e=o.$implicit,t=oR(2);Br("colspan",t.lb?.cols?.length||1),gD(),z0(t.show?.Desc?1:-1),gD(),fE("ngTemplateOutlet",t.secondaryTemplate)("ngTemplateOutletContext",zR(4,qi,e,e));}}function da(i,o){i&1&&hl(0,"tr",46);}function ma(i,o){if(i&1){let e=eR();Gc(0,"tr",47),nr$1("dblclick",function(){let n=ty(e).$implicit;return ny(n.isShow=!n.isShow)}),vp();}if(i&2){let e=o.dataIndex;Fi("alt-row",e%2===1);}}function pa(i,o){if(i&1&&hl(0,"tr",48),i&2){let e=o.$implicit,t=o.dataIndex;Sp("display",e.isShow?"":"none"),Fi("alt-row",t%2===1);}}function ha(i,o){i&1&&(hl(0,"mat-spinner",50),Gc(1,"div",51),NR(2,"Loading..."),vp(),Gc(3,"div",52),NR(4," Please wait while we fetch your data. "),vp());}function ua(i,o){if(i&1){let e=eR();Gc(0,"mat-icon",53),NR(1,"inbox"),vp(),Gc(2,"div",51),NR(3," No records found "),vp(),Gc(4,"div",52),NR(5," There are no records available to display. "),vp(),Gc(6,"btn",54),nr$1("clickz",function(){ty(e);let n=oR(3);return ny(n.lb.refresh())}),vp();}}function ba(i,o){if(i&1&&(Gc(0,"tr")(1,"td")(2,"div",49),$0(3,ha,5,0)(4,ua,7,0),vp()()()),i&2){let e=oR(2);gD(),Br("colspan",e.lb?.cols?.length||1),gD(2),z0(e.lb.isLoading()?3:4);}}function _a(i,o){if(i&1){let e=eR();Gc(0,"table",1),nr$1("matSortChange",function(n){ty(e);let r=oR();return ny(r.lb.sort(n))}),_p(1,2),aE(2,Ui,3,3,"th",3)(3,$i,3,5,"td",4),Dp(),_p(4,5),aE(5,Wi,3,3,"th",3)(6,Ki,3,5,"td",4),Dp(),_p(7,6),aE(8,Qi,2,2,"th",7)(9,Xi,2,1,"td",8),Dp(),_p(10,9),aE(11,Yi,3,3,"th",10)(12,Zi,2,1,"td",11),Dp(),_p(13,12),aE(14,Ji,3,3,"th",13)(15,ea,2,6,"td",14),Dp(),_p(16,15),aE(17,ta,3,3,"th",13)(18,na,6,11,"td",16),Dp(),_p(19,17),aE(20,ia,3,3,"th",18)(21,aa,2,1,"td",19),Dp(),q0(22,ca,3,2,"ng-container",20,G0),_p(24,21),aE(25,sa,3,7,"td",22),Dp(),aE(26,da,1,0,"tr",23)(27,ma,1,2,"tr",24)(28,pa,1,4,"tr",25)(29,ba,5,2,"tr",26),vp();}if(i&2){let e=oR();fE("dataSource",e.lb.ds)("ngStyle",e.lb?.ds?.data?.length?null:HR(11,Hi)),gD(),fE("sticky",true),gD(3),fE("sticky",true),gD(3),fE("sticky",true),gD(3),fE("sticky",true),gD(9),fE("stickyEnd",true),gD(3),Y0(e.lb.colsExtra),gD(4),fE("matHeaderRowDef",e.lb.cols)("matHeaderRowDefSticky",true),gD(),fE("matRowDefColumns",e.lb.cols),gD(),fE("matRowDefColumns",HR(12,ji));}}var ft=class i{lb;secondaryTemplate;show={};ngOnInit(){this.handleColsDisplay();}handleColsDisplay(){this.show=m({Id:false,SNo:true,Select:false,Status:true,Desc:true},this.show),this.show.Status&&this.lb.showStatus(),this.show.Id&&this.lb.showID(),this.show.Select&&this.lb.showCheckBox(),this.show.SNo&&this.lb.showSNo();}get pageStart(){let o=this.lb?.httpResPaginate?.pageNo||1,e=this.lb?.httpResPaginate?.pageSize||10;return (o-1)*e+1}selection=new Si$1(true,[]);isAllSelected(){let o=this.selection.selected.length,e=this.lb.ds.data.length;return o===e}toggleAllRows(){if(this.isAllSelected()){this.selection.clear();return}this.selection.select(...this.lb.ds.data);}checkboxLabel(o){return o?`${this.selection.isSelected(o)?"deselect":"select"} row ${o.position+1}`:`${this.isAllSelected()?"deselect":"select"} all`}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=ki$1({type:i,selectors:[["tbl-col-template"]],hostAttrs:[1,"col"],inputs:{lb:"lb",secondaryTemplate:"secondaryTemplate",show:"show"},standalone:false,decls:1,vars:1,consts:[["id","print-area","mat-table","","matSort","","multiTemplateDataRows","",2,"box-shadow","none",3,"dataSource","ngStyle"],["id","print-area","mat-table","","matSort","","multiTemplateDataRows","",2,"box-shadow","none",3,"matSortChange","dataSource","ngStyle"],["matColumnDef","sno",3,"sticky"],["class","text-nowrap","mat-header-cell","","style","width: 50px;",4,"matHeaderCellDef"],["class","text-nowrap text-center","mat-cell","","style","width: 50px;",4,"matCellDef"],["matColumnDef","id",3,"sticky"],["matColumnDef","select",3,"sticky"],["mat-header-cell","","style","width: 50px;",4,"matHeaderCellDef"],["mat-cell","","style","width: 50px;",4,"matCellDef"],["matColumnDef","name",3,"sticky"],["class","text-nowrap text-start","mat-header-cell","","mat-sort-header","","arrowPosition","after",4,"matHeaderCellDef"],["class","text-nowrap text-start","mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","status"],["class","text-nowrap","mat-header-cell","","mat-sort-header","","arrowPosition","after",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass","dblclick",4,"matCellDef"],["matColumnDef","updatedAt"],["class","text-nowrap","mat-cell","",4,"matCellDef"],["matColumnDef","actions",3,"stickyEnd"],["class","text-nowrap no-print text-center","mat-header-cell","",4,"matHeaderCellDef"],["class","text-nowrap no-print text-center","mat-cell","","matTooltip","View More Options","matTooltipPosition","above",4,"matCellDef"],[3,"matColumnDef"],["matColumnDef","secondary"],["mat-cell","","style","height: 60px !important;",4,"matCellDef"],["mat-header-row","","class","bg-dark text-light",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","matTooltip","Click Cell To Copy","matTooltipPosition","above","class","theme-row",3,"alt-row","dblclick",4,"matRowDef","matRowDefColumns"],["mat-row","",3,"alt-row","display",4,"matRowDef","matRowDefColumns"],[4,"matNoDataRow"],["mat-header-cell","",1,"text-nowrap",2,"width","50px"],["mat-cell","",1,"text-nowrap","text-center",2,"width","50px"],[1,"link-reset",2,"width","100%","height","100%","display","block","text-align","center",3,"routerLink"],["mat-header-cell","",2,"width","50px"],[1,"tbl-head-checkbox",3,"change","checked","indeterminate"],["mat-cell","",2,"width","50px"],[3,"click","change","checked"],["mat-header-cell","","mat-sort-header","","arrowPosition","after",1,"text-nowrap","text-start"],["mat-cell","",1,"text-nowrap","text-start",3,"click"],["mat-header-cell","","mat-sort-header","","arrowPosition","after",1,"text-nowrap"],["mat-cell","",3,"dblclick","ngClass"],["mat-cell","",1,"text-nowrap"],["matBadge","4","matBadgeOverlap","false","role","button","matTooltipPosition","above",3,"matTooltip"],["mat-header-cell","",1,"text-nowrap","no-print","text-center"],["mat-cell","","matTooltip","View More Options","matTooltipPosition","above",1,"text-nowrap","no-print","text-center"],[3,"record"],["mat-cell","",2,"height","60px !important"],[1,"col-12","p-2","ps-5"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["mat-header-row","",1,"bg-dark","text-light"],["mat-row","","matTooltip","Click Cell To Copy","matTooltipPosition","above",1,"theme-row",3,"dblclick"],["mat-row",""],[1,"table-empty-state"],["diameter","48",1,"mb-2"],[1,"mat-headline-small"],[1,"mat-body-medium"],["color","primary",2,"font-size","25px"],["lbl","Refresh","icon","refresh",1,"mt-3",3,"clickz"]],template:function(e,t){e&1&&$0(0,_a,30,13,"table",0),e&2&&z0(t.lb?0:-1);},dependencies:[D,zN,ZN,YN,ob,Rs,qe,td,id,sd,ad,nd,ld,rd,od,cd,dd,ud,dt,Ln,ai$1,_t,ve,tg,Ta],styles:[".cols-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;align-items:center;gap:8px}.theme-row[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#d9d9d9}  .mat-sort-header-arrow>svg{fill:#fff!important}.table-empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}.table-empty-state[_ngcontent-%COMP%]   .mat-headline-small[_ngcontent-%COMP%]{margin:0}.table-empty-state[_ngcontent-%COMP%]   .mat-body-medium[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant);max-width:320px}.table-empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:8px}  .mat-mdc-menu-item{min-height:40px}.alt-row[_ngcontent-%COMP%]{background-color:#c3c3c3fe}.theme-row[_ngcontent-%COMP%]:hover{background-color:#777}.tbl-head-checkbox[_ngcontent-%COMP%]     .mdc-checkbox__background{border-color:#fff!important}.link-reset[_ngcontent-%COMP%]{all:unset;cursor:pointer;display:inline-block;color:inherit}"]})};var kt=class i{constructor(o){this._template=o;}_template;ngOnInit(){}static \u0275fac=function(e){return new(e||i)(M(Vn))};static \u0275cmp=ki$1({type:i,selectors:[["tbl-actions"]],standalone:false,decls:31,vars:5,consts:[["menu","matMenu"],["mat-raised-button","","color","primary","type","button","type","button",1,"me-2","d-none","d-lg-inline-flex",3,"matMenuTriggerFor"],["mat-mini-fab","","type","button",1,"me-2","d-inline-flex","d-lg-none",3,"matMenuTriggerFor"],["type","button"],["mat-menu-item","","type","button",3,"click"],[1,"me-2"]],template:function(e,t){if(e&1&&(Gc(0,"button",1)(1,"mat-icon"),NR(2,"more_vert"),vp(),Gc(3,"span"),NR(4),qR(5,"translate"),vp()(),Gc(6,"button",2)(7,"mat-icon"),NR(8,"more_vert"),vp()(),Gc(9,"mat-menu",3,0)(11,"button",4),nr$1("click",function(){return t._template.lb.exportListToCSV(t._template?.title)}),Gc(12,"mat-icon",5),NR(13,"download"),vp(),Gc(14,"span"),NR(15,"Download CSV"),vp()(),Gc(16,"button",4),nr$1("click",function(){return t._template.lb.exportListToJSON(t._template?.title)}),Gc(17,"mat-icon",5),NR(18,"download"),vp(),Gc(19,"span"),NR(20,"Download JSON"),vp()(),Gc(21,"button",4),nr$1("click",function(){return t._template.lb.copyListJSON()}),Gc(22,"mat-icon",5),NR(23,"content_copy"),vp(),Gc(24,"span"),NR(25,"Copy JSON"),vp()(),Gc(26,"button",4),nr$1("click",function(){return t._template.lb.printList()}),Gc(27,"mat-icon",5),NR(28,"print"),vp(),Gc(29,"span"),NR(30,"Print"),vp()()()),e&2){let n=lR(10);fE("matMenuTriggerFor",n),gD(4),xE(ZR(5,3,"More")),gD(2),fE("matMenuTriggerFor",n);}},dependencies:[ms,ls,Rs,ee,De,Ec,Ta],encapsulation:2})};var He=class i extends xe{itemsPerPageLabel="Size:";getRangeLabel=(o,e,t)=>{if(t===0||e===0)return `0 of ${t}`;let n=o*e+1,r=Math.min((o+1)*e,t);return `${n} - ${r} of ${t}`};static \u0275fac=(()=>{let o;return function(t){return (o||(o=Dn$1(i)))(t||i)}})();static \u0275prov=S({token:i,factory:i.\u0275fac})};var ga=[He$1,md,st,mt,Os,ie,Cc,li$1,gt],Gn=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=de({type:i});static \u0275inj=ae({providers:[{provide:xe,useClass:He}],imports:[ga,He$1,md,st,mt,Os,ie,Cc,li$1,gt]})};function J(t,i){if(t&1&&(Gc(0,"h1",4),NR(1),qR(2,"translate"),vp()),t&2){let e=oR();gD(),Ip(" ",ZR(2,1,e._template?.title)," ");}}function K(t,i){if(t&1){let e=eR();Gc(0,"mat-grid-tile",5),hl(1,"btn-link",13),Gc(2,"btn",14),nr$1("clickz",function(){ty(e);let m=oR();return ny(m._template.lb.refresh())}),vp(),Gc(3,"btn",15),nr$1("clickz",function(){ty(e);let m=oR();return ny(m._template.lb.filterShow())}),vp(),hl(4,"tbl-actions"),vp();}if(t&2){let e=oR();fE("colspan",6),gD(),fE("link",e._template.linkAdd),gD(2),fE("icon",e._template?.lb?.filterDefaultShow?"filter_alt":"filter_alt_off");}}function W(t,i){if(t&1){let e=eR();Gc(0,"btn",16),nr$1("clickz",function(){ty(e);let m=oR();return ny(m._template.tmSubmit.resetForm())}),vp(),Gc(1,"btn",17),nr$1("clickz",function(){ty(e);let m=oR();return ny(m._template.tmSubmit.submit())}),vp(),hl(2,"btn-link",18);}if(t&2){let e=oR();gD(2),fE("link",e._template?.linkPaginate);}}function X(t,i){if(t&1&&hl(0,"tbl-paginator",12),t&2){let e=oR();fE("lb",e._template.lb);}}var _=class t extends _r{constructor(){super(),this._template.DATA.subscribe({next:i=>{console.log({DATA:this.DATA=i}),setTimeout(()=>{this._template._cdr.detectChanges();},100);}});}ngOnInit(){}step=X$1(0);setStep(i){this.step.set(i);}nextStep(){this.step.update(i=>i+1);}prevStep(){this.step.update(i=>i-1);}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=ki$1({type:t,selectors:[["aam-feature"]],standalone:false,features:[qe$1],decls:16,vars:5,consts:[[1,"dashboard-card","p-0","m-1"],[1,"dashboard-card-content","p-1"],["cols","12","rowHeight","55px",1,"mb-2"],[1,"flex--start",3,"colspan"],[1,"m-0","mt-1","fs-5"],[1,"flex--end",2,"overflow","visible",3,"colspan"],["cols","1",3,"rowHeight"],["colspan","1"],[1,"m-1","mx-0",2,"width","100%","height","100%","overflow-x","auto"],["cols","1","rowHeight","60px",1,"mt-2"],["colspan","1",1,"flex--end"],["align","end",1,"px-0"],[3,"lb"],["lbl","Add","icon","local_hospital",3,"link"],["lbl","Refresh","icon","autorenew",3,"clickz"],["lbl","Filter",3,"clickz","icon"],["lbl","Reset","icon","cached",3,"clickz"],["lbl","Save","icon","save",3,"clickz"],["lbl","Cancel","icon","cancel",3,"link"]],template:function(e,n){e&1&&(Gc(0,"mat-card",0)(1,"mat-card-content",1)(2,"mat-grid-list",2)(3,"mat-grid-tile",3)(4,"section"),$0(5,J,3,3,"h1",4),vp()(),$0(6,K,5,3,"mat-grid-tile",5),vp(),Gc(7,"mat-grid-list",6)(8,"mat-grid-tile",7)(9,"div",8),hl(10,"router-outlet"),vp()()(),Gc(11,"mat-grid-list",9)(12,"mat-grid-tile",10)(13,"mat-card-actions",11),$0(14,W,3,1)(15,X,1,1,"tbl-paginator",12),vp()()()()()),e&2&&(gD(3),fE("colspan",6),gD(2),z0(n._template?.title?5:-1),gD(),z0(n._template?.linkAdd&&n._template?.lb?6:-1),gD(),fE("rowHeight",n._template?.LG?"76.5vh":"73vh"),gD(7),z0(n._template?.linkPaginate&&n._template.tmSubmit?14:n._template.linkAdd&&n._template.lb?15:-1));},dependencies:[Vs,Ys,Ks,nt$1,j$1,kt,pt,D,ne,Hg,Ta],styles:[`@charset "UTF-8";.flex--start{display:flex;justify-content:flex-start}.flex--end{display:flex;justify-content:flex-end}.flex--start--top{display:flex;align-items:flex-start;justify-content:flex-start}.flex--start .mat-grid-tile-content{justify-content:flex-start}.flex--end .mat-grid-tile-content{justify-content:flex-end}.flex--start--top .mat-grid-tile-content{align-items:flex-start;justify-content:flex-start}[dir=rtl] .flex--start{justify-content:flex-end}[dir=rtl] .flex--end{justify-content:flex-start}[dir=rtl] .mat-sort-header-container{justify-content:flex-end}.parent-active{background-color:#b9b9b9}.child-active{background-color:#cccbcb}.form-action-buttons{margin-right:5px}[dir=rtl] input,[dir=rtl] textarea,[dir=rtl] .mat-input-element{text-align:right}.mat-sort-header-container{justify-content:flex-start}tbl-cntrl-txt input[type=text]{border:0;border-bottom:1px solid #673ab7;height:40px;font-size:16px;font-weight:400}::-webkit-scrollbar{width:4px;height:4px}::-webkit-scrollbar-track{background:#0a0a0a41;border-radius:10px}::-webkit-scrollbar-thumb{background:#673ab7;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#5a2ea6}.form-header{background-color:#00bfbf94}.form-body{background-color:#f2ff0051}.form-footer{background-color:#00ffbf51}.header{display:flex;justify-content:space-between;flex-wrap:wrap}.left,.right{flex:1 1 100%}@media(min-width:768px){.left{flex:0 0 60%}.right{flex:0 0 40%}}.mat-mdc-card-actions{width:100%}
`],encapsulation:2})};var Y=[{path:"",component:_,children:[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:De$1,data:{title:"Feature Module",linkPaginate:"",linkAdd:"",linkUpdate:"",permission:["gets"],layer:["Module","Feature"]}},{path:"user",loadChildren:()=>import('./chunk-BFN7PAZ0.js').then(t=>t.UserzModule)},{path:"edu",loadChildren:()=>import('./chunk-DAg_hdQb.js').then(t=>t.EduModule)},{path:"syllabus",loadChildren:()=>import('./chunk-WVcGoMdV.js').then(t=>t.EduSyllabusModule)},{path:"attendance",loadChildren:()=>import('./chunk-CTLpcZqA.js').then(t=>t.AttendanceModule)},{path:"question-bank",loadChildren:()=>import('./chunk-C-87WBG4.js').then(t=>t.EduQuestionModule)},{path:"exam",loadChildren:()=>import('./chunk-BG8B92si.js').then(t=>t.EduExamModule)},{path:"library",loadChildren:()=>import('./chunk-CyeNxagx.js').then(t=>t.EduLibraryModule)},{path:"account-in",loadChildren:()=>import('./chunk-CnUtZiDl.js').then(t=>t.AccountInModule)},{path:"account-out",loadChildren:()=>import('./chunk-0GrWk2fo.js').then(t=>t.AccountOutModule)},{path:"transport",loadChildren:()=>import('./chunk-QLEQxbyU.js').then(t=>t.TransportModule)},{path:"hostle",loadChildren:()=>import('./chunk-CsuLmLSI.js').then(t=>t.HostleModule)},{path:"notice",loadChildren:()=>import('./chunk-qbIIU4yz.js').then(t=>t.NotificationModule)},{path:"file",loadChildren:()=>import('./chunk-ClADHF7C.js').then(t=>t.FileUploadModule)}]}],g=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=de({type:t});static \u0275inj=ae({imports:[Kg.forChild(Y),Kg]})};var Q=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=de({type:t});static \u0275inj=ae({imports:[Di$1,g$1,Gn,oi$1,g]})};var chunkMICQTJPF=/*#__PURE__*/Object.freeze({__proto__:null,FeatureModule:Q});export{Bn as B,En as E,Gn as G,Rn as R,_t as _,at as a,chunkMICQTJPF as c,ft as f,gt as g,he as h,mt as m,rt as r,st as s,zn as z};