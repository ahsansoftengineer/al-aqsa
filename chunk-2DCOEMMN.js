import {
  BaseClassSrvc,
  ErrorStateMatcher,
  MAT_FORM_FIELD,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatHint,
  MatLabel,
  MatPrefix,
  MatPseudoCheckbox,
  MatPseudoCheckboxModule,
  MatSuffix,
  NGX_NGB_Other_Module,
  _ErrorStateTracker
} from "./chunk-H74UE4AP.js";
import {
  CdkColumnDef,
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule,
  SelectionModel,
  TemplateService,
  TranslatePipe
} from "./chunk-KUIYJW6G.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-4IXXCYRN.js";
import {
  A11yModule,
  ActiveDescendantKeyManager,
  AriaDescriber,
  FocusMonitor,
  LiveAnnouncer,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatMiniFabButton,
  MatRipple,
  MatRippleModule,
  MediaMatcher,
  ObserversModule,
  _StructuralStylesLoader,
  _VisuallyHiddenLoader,
  _animationsDisabled,
  _getAnimationsState,
  coerceBooleanProperty
} from "./chunk-VQZP2W2M.js";
import {
  A,
  AngularzModule,
  BidiModule,
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  CdkScrollableModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentPortal,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DOWN_ARROW,
  DatePipe,
  Directionality,
  Directive,
  ENTER,
  ESCAPE,
  ElementRef,
  EventEmitter,
  FormGroupDirective,
  HostAttributeToken,
  HostBinding,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LEFT_ARROW,
  NgClass,
  NgControl,
  NgForm,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  OVERLAY_DEFAULT_CONFIG,
  Optional,
  Output,
  OverlayModule,
  Platform,
  RIGHT_ARROW,
  Renderer2,
  ReplaySubject,
  RouterLink,
  SPACE,
  ScrollDispatcher,
  Service,
  Subject,
  UP_ARROW,
  Validators,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  __spreadValues,
  _getEventTarget,
  afterNextRender,
  booleanAttribute,
  coerceNumberProperty,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  defer,
  filter,
  hasModifierKey,
  inject,
  isSignal,
  map,
  merge,
  numberAttribute,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-IHXJMWXB.js";

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/_tooltip-chunk.mjs
var _c0 = ["tooltip"];
var SCROLL_THROTTLE_MS = 20;
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
var MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector, {
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  }
});
var MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
  providedIn: "root",
  factory: () => ({
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  })
});
var PANEL_CLASS = "tooltip-panel";
var passiveListenerOptions = {
  passive: true
};
var MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
var UNBOUNDED_ANCHOR_GAP = 8;
var MIN_HEIGHT = 24;
var MAX_WIDTH = 200;
var MatTooltip = class _MatTooltip {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _ariaDescriber = inject(AriaDescriber);
  _focusMonitor = inject(FocusMonitor);
  _dir = inject(Directionality);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _mediaMatcher = inject(MediaMatcher);
  _document = inject(DOCUMENT);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _defaultOptions = inject(MAT_TOOLTIP_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef = null;
  _tooltipInstance = null;
  _overlayPanelClass;
  _portal;
  _position = "below";
  _positionAtOrigin = false;
  _disabled = false;
  _tooltipClass;
  _viewInitialized = false;
  _pointerExitEventsInitialized = false;
  _tooltipComponent = TooltipComponent;
  _viewportMargin = 8;
  _currentPosition;
  _cssClassPrefix = "mat-mdc";
  _ariaDescriptionPending = false;
  _dirSubscribed = false;
  get position() {
    return this._position;
  }
  set position(value) {
    if (value !== this._position) {
      this._position = value;
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
        this._tooltipInstance?.show(0);
        this._overlayRef.updatePosition();
      }
    }
  }
  get positionAtOrigin() {
    return this._positionAtOrigin;
  }
  set positionAtOrigin(value) {
    this._positionAtOrigin = coerceBooleanProperty(value);
    this._detach();
    this._overlayRef = null;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    const isDisabled = coerceBooleanProperty(value);
    if (this._disabled !== isDisabled) {
      this._disabled = isDisabled;
      if (isDisabled) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
      }
      this._syncAriaDescription(this.message);
    }
  }
  get showDelay() {
    return this._showDelay;
  }
  set showDelay(value) {
    this._showDelay = coerceNumberProperty(value);
  }
  _showDelay;
  get hideDelay() {
    return this._hideDelay;
  }
  set hideDelay(value) {
    this._hideDelay = coerceNumberProperty(value);
    if (this._tooltipInstance) {
      this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
    }
  }
  _hideDelay;
  touchGestures = "auto";
  get message() {
    return this._message;
  }
  set message(value) {
    const oldMessage = this._message;
    this._message = value != null ? String(value).trim() : "";
    if (!this._message && this._isTooltipVisible()) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
      this._updateTooltipMessage();
    }
    this._syncAriaDescription(oldMessage);
  }
  _message = "";
  get tooltipClass() {
    return this._tooltipClass;
  }
  set tooltipClass(value) {
    this._tooltipClass = value;
    if (this._tooltipInstance) {
      this._setTooltipClass(this._tooltipClass);
    }
  }
  _eventCleanups = [];
  _touchstartTimeout = null;
  _destroyed = new Subject();
  _isDestroyed = false;
  constructor() {
    const defaultOptions = this._defaultOptions;
    if (defaultOptions) {
      this._showDelay = defaultOptions.showDelay;
      this._hideDelay = defaultOptions.hideDelay;
      if (defaultOptions.position) {
        this.position = defaultOptions.position;
      }
      if (defaultOptions.positionAtOrigin) {
        this.positionAtOrigin = defaultOptions.positionAtOrigin;
      }
      if (defaultOptions.touchGestures) {
        this.touchGestures = defaultOptions.touchGestures;
      }
      if (defaultOptions.tooltipClass) {
        this.tooltipClass = defaultOptions.tooltipClass;
      }
    }
    this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
  }
  ngAfterViewInit() {
    this._viewInitialized = true;
    this._setupPointerEnterEventsIfNeeded();
    this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe((origin) => {
      if (!origin) {
        this._ngZone.run(() => this.hide(0));
      } else if (origin === "keyboard") {
        this._ngZone.run(() => this.show());
      }
    });
  }
  ngOnDestroy() {
    const nativeElement = this._elementRef.nativeElement;
    if (this._touchstartTimeout) {
      clearTimeout(this._touchstartTimeout);
    }
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._tooltipInstance = null;
    }
    this._eventCleanups.forEach((cleanup) => cleanup());
    this._eventCleanups.length = 0;
    this._destroyed.next();
    this._destroyed.complete();
    this._isDestroyed = true;
    this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
    this._focusMonitor.stopMonitoring(nativeElement);
  }
  show(delay = this.showDelay, origin) {
    if (this.disabled || !this.message || this._isTooltipVisible()) {
      this._tooltipInstance?._cancelPendingAnimations();
      return;
    }
    const overlayRef = this._createOverlay(origin);
    this._detach();
    this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
    const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
    instance._triggerElement = this._elementRef.nativeElement;
    instance._mouseLeaveHideDelay = this._hideDelay;
    instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._setTooltipClass(this._tooltipClass);
    this._updateTooltipMessage();
    instance.show(delay);
  }
  hide(delay = this.hideDelay) {
    const instance = this._tooltipInstance;
    if (instance) {
      if (instance.isVisible()) {
        instance.hide(delay);
      } else {
        instance._cancelPendingAnimations();
        this._detach();
      }
    }
  }
  toggle(origin) {
    this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
  }
  _isTooltipVisible() {
    return !!this._tooltipInstance && this._tooltipInstance.isVisible();
  }
  _createOverlay(origin) {
    if (this._overlayRef) {
      const existingStrategy = this._overlayRef.getConfig().positionStrategy;
      if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof ElementRef) {
        return this._overlayRef;
      }
      this._detach();
    }
    const scrollableAncestors = this._injector.get(ScrollDispatcher).getAncestorScrollContainers(this._elementRef);
    const panelClass = `${this._cssClassPrefix}-${PANEL_CLASS}`;
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors).withPopoverLocation("global");
    strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe((change) => {
      this._updateCurrentPositionClass(change.connectionPair);
      if (this._tooltipInstance) {
        if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
          this._ngZone.run(() => this.hide(0));
        }
      }
    });
    this._overlayRef = createOverlayRef(this._injector, {
      direction: this._dir,
      positionStrategy: strategy,
      panelClass: this._overlayPanelClass ? [...this._overlayPanelClass, panelClass] : panelClass,
      scrollStrategy: this._injector.get(MAT_TOOLTIP_SCROLL_STRATEGY)(),
      disableAnimations: this._animationsDisabled,
      eventPredicate: this._overlayEventPredicate
    });
    this._updatePosition(this._overlayRef);
    this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
    this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
    this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe((event) => {
      event.preventDefault();
      event.stopPropagation();
      this._ngZone.run(() => this.hide(0));
    });
    if (this._defaultOptions?.disableTooltipInteractivity) {
      this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
    }
    if (!this._dirSubscribed) {
      this._dirSubscribed = true;
      this._dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
        if (this._overlayRef) {
          this._updatePosition(this._overlayRef);
        }
      });
    }
    return this._overlayRef;
  }
  _detach() {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
    this._tooltipInstance = null;
  }
  _updatePosition(overlayRef) {
    const position = overlayRef.getConfig().positionStrategy;
    const origin = this._getOrigin();
    const overlay = this._getOverlayPosition();
    position.withPositions([this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)), this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))]);
  }
  _addOffset(position) {
    const offset = UNBOUNDED_ANCHOR_GAP;
    const isLtr = !this._dir || this._dir.value == "ltr";
    if (position.originY === "top") {
      position.offsetY = -offset;
    } else if (position.originY === "bottom") {
      position.offsetY = offset;
    } else if (position.originX === "start") {
      position.offsetX = isLtr ? -offset : offset;
    } else if (position.originX === "end") {
      position.offsetX = isLtr ? offset : -offset;
    }
    return position;
  }
  _getOrigin() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let originPosition;
    if (position == "above" || position == "below") {
      originPosition = {
        originX: "center",
        originY: position == "above" ? "top" : "bottom"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      originPosition = {
        originX: "start",
        originY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      originPosition = {
        originX: "end",
        originY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(originPosition.originX, originPosition.originY);
    return {
      main: originPosition,
      fallback: {
        originX: x,
        originY: y
      }
    };
  }
  _getOverlayPosition() {
    const isLtr = !this._dir || this._dir.value == "ltr";
    const position = this.position;
    let overlayPosition;
    if (position == "above") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "bottom"
      };
    } else if (position == "below") {
      overlayPosition = {
        overlayX: "center",
        overlayY: "top"
      };
    } else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
      overlayPosition = {
        overlayX: "end",
        overlayY: "center"
      };
    } else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
      overlayPosition = {
        overlayX: "start",
        overlayY: "center"
      };
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }
    const {
      x,
      y
    } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
    return {
      main: overlayPosition,
      fallback: {
        overlayX: x,
        overlayY: y
      }
    };
  }
  _updateTooltipMessage() {
    if (this._tooltipInstance) {
      this._tooltipInstance.message = this.message;
      this._tooltipInstance._markForCheck();
      afterNextRender(() => {
        if (this._tooltipInstance) {
          this._overlayRef.updatePosition();
        }
      }, {
        injector: this._injector
      });
    }
  }
  _setTooltipClass(tooltipClass) {
    if (this._tooltipInstance) {
      this._tooltipInstance.tooltipClass = tooltipClass instanceof Set ? Array.from(tooltipClass) : tooltipClass;
      this._tooltipInstance._markForCheck();
    }
  }
  _invertPosition(x, y) {
    if (this.position === "above" || this.position === "below") {
      if (y === "top") {
        y = "bottom";
      } else if (y === "bottom") {
        y = "top";
      }
    } else {
      if (x === "end") {
        x = "start";
      } else if (x === "start") {
        x = "end";
      }
    }
    return {
      x,
      y
    };
  }
  _updateCurrentPositionClass(connectionPair) {
    const {
      overlayY,
      originX,
      originY
    } = connectionPair;
    let newPosition;
    if (overlayY === "center") {
      if (this._dir && this._dir.value === "rtl") {
        newPosition = originX === "end" ? "left" : "right";
      } else {
        newPosition = originX === "start" ? "left" : "right";
      }
    } else {
      newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
    }
    if (newPosition !== this._currentPosition) {
      const overlayRef = this._overlayRef;
      if (overlayRef) {
        const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
        overlayRef.removePanelClass(classPrefix + this._currentPosition);
        overlayRef.addPanelClass(classPrefix + newPosition);
      }
      this._currentPosition = newPosition;
    }
  }
  _setupPointerEnterEventsIfNeeded() {
    if (this._disabled || !this.message || !this._viewInitialized || this._eventCleanups.length) {
      return;
    }
    if (!this._isTouchPlatform()) {
      this._addListener("mouseenter", (event) => {
        this._setupPointerExitEventsIfNeeded();
        let point = void 0;
        if (event.x !== void 0 && event.y !== void 0) {
          point = event;
        }
        this.show(void 0, point);
      });
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      this._addListener("touchstart", (event) => {
        const touch = event.targetTouches?.[0];
        const origin = touch ? {
          x: touch.clientX,
          y: touch.clientY
        } : void 0;
        this._setupPointerExitEventsIfNeeded();
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        const DEFAULT_LONGPRESS_DELAY = 500;
        this._touchstartTimeout = setTimeout(() => {
          this._touchstartTimeout = null;
          this.show(void 0, origin);
        }, this._defaultOptions?.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
      });
    }
  }
  _setupPointerExitEventsIfNeeded() {
    if (this._pointerExitEventsInitialized) {
      return;
    }
    this._pointerExitEventsInitialized = true;
    if (!this._isTouchPlatform()) {
      this._addListener("mouseleave", (event) => {
        const newTarget = event.relatedTarget;
        if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
          this.hide();
        }
      });
      this._addListener("wheel", (event) => {
        if (this._isTooltipVisible()) {
          const elementUnderPointer = this._document.elementFromPoint(event.clientX, event.clientY);
          const element = this._elementRef.nativeElement;
          if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
            this.hide();
          }
        }
      });
    } else if (this.touchGestures !== "off") {
      this._disableNativeGesturesIfNecessary();
      const touchendListener = () => {
        if (this._touchstartTimeout) {
          clearTimeout(this._touchstartTimeout);
        }
        this.hide(this._defaultOptions?.touchendHideDelay);
      };
      this._addListener("touchend", touchendListener);
      this._addListener("touchcancel", touchendListener);
    }
  }
  _addListener(name, listener) {
    this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement, name, listener, passiveListenerOptions));
  }
  _isTouchPlatform() {
    const detectHoverCapability = this._defaultOptions?.detectHoverCapability;
    if (typeof detectHoverCapability === "function") {
      return !detectHoverCapability();
    }
    if (this._platform.IOS || this._platform.ANDROID) {
      return true;
    } else if (!this._platform.isBrowser) {
      return false;
    }
    return !!detectHoverCapability && this._mediaMatcher.matchMedia("(any-hover: none)").matches;
  }
  _disableNativeGesturesIfNecessary() {
    const gestures = this.touchGestures;
    if (gestures !== "off") {
      const element = this._elementRef.nativeElement;
      const style = element.style;
      if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
        style["userSelect"] = style["msUserSelect"] = style["webkitUserSelect"] = style["MozUserSelect"] = "none";
      }
      if (gestures === "on" || !element.draggable) {
        style["webkitUserDrag"] = "none";
      }
      style["touchAction"] = "none";
      style["webkitTapHighlightColor"] = "transparent";
    }
  }
  _syncAriaDescription(oldMessage) {
    if (this._ariaDescriptionPending) {
      return;
    }
    this._ariaDescriptionPending = true;
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, "tooltip");
    if (!this._isDestroyed) {
      afterNextRender({
        write: () => {
          this._ariaDescriptionPending = false;
          if (this.message && !this.disabled) {
            this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
          }
        }
      }, {
        injector: this._injector
      });
    }
  }
  _overlayEventPredicate = (event) => {
    if (event.type === "keydown") {
      return this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event);
    }
    return true;
  };
  static \u0275fac = function MatTooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTooltip)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTooltip,
    selectors: [["", "matTooltip", ""]],
    hostAttrs: [1, "mat-mdc-tooltip-trigger"],
    hostVars: 2,
    hostBindings: function MatTooltip_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tooltip-disabled", ctx.disabled);
      }
    },
    inputs: {
      position: [0, "matTooltipPosition", "position"],
      positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"],
      disabled: [0, "matTooltipDisabled", "disabled"],
      showDelay: [0, "matTooltipShowDelay", "showDelay"],
      hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
      touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
      message: [0, "matTooltip", "message"],
      tooltipClass: [0, "matTooltipClass", "tooltipClass"]
    },
    exportAs: ["matTooltip"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltip, [{
    type: Directive,
    args: [{
      selector: "[matTooltip]",
      exportAs: "matTooltip",
      host: {
        "class": "mat-mdc-tooltip-trigger",
        "[class.mat-mdc-tooltip-disabled]": "disabled"
      }
    }]
  }], () => [], {
    position: [{
      type: Input,
      args: ["matTooltipPosition"]
    }],
    positionAtOrigin: [{
      type: Input,
      args: ["matTooltipPositionAtOrigin"]
    }],
    disabled: [{
      type: Input,
      args: ["matTooltipDisabled"]
    }],
    showDelay: [{
      type: Input,
      args: ["matTooltipShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["matTooltipHideDelay"]
    }],
    touchGestures: [{
      type: Input,
      args: ["matTooltipTouchGestures"]
    }],
    message: [{
      type: Input,
      args: ["matTooltip"]
    }],
    tooltipClass: [{
      type: Input,
      args: ["matTooltipClass"]
    }]
  });
})();
var TooltipComponent = class _TooltipComponent {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _isMultiline = false;
  message;
  tooltipClass;
  _showTimeoutId;
  _hideTimeoutId;
  _triggerElement;
  _mouseLeaveHideDelay;
  _animationsDisabled = _animationsDisabled();
  _tooltip;
  _closeOnInteraction = false;
  _isVisible = false;
  _onHide = new Subject();
  _showAnimation = "mat-mdc-tooltip-show";
  _hideAnimation = "mat-mdc-tooltip-hide";
  show(delay) {
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = setTimeout(() => {
      this._toggleVisibility(true);
      this._showTimeoutId = void 0;
    }, delay);
  }
  hide(delay) {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    this._hideTimeoutId = setTimeout(() => {
      this._toggleVisibility(false);
      this._hideTimeoutId = void 0;
    }, delay);
  }
  afterHidden() {
    return this._onHide;
  }
  isVisible() {
    return this._isVisible;
  }
  ngOnDestroy() {
    this._cancelPendingAnimations();
    this._onHide.complete();
    this._triggerElement = null;
  }
  _handleBodyInteraction() {
    if (this._closeOnInteraction) {
      this.hide(0);
    }
  }
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _handleMouseLeave({
    relatedTarget
  }) {
    if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
      if (this.isVisible()) {
        this.hide(this._mouseLeaveHideDelay);
      } else {
        this._finalizeAnimation(false);
      }
    }
  }
  _onShow() {
    this._isMultiline = this._isTooltipMultiline();
    this._markForCheck();
  }
  _isTooltipMultiline() {
    const rect = this._elementRef.nativeElement.getBoundingClientRect();
    return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
  }
  _handleAnimationEnd({
    animationName
  }) {
    if (animationName === this._showAnimation || animationName === this._hideAnimation) {
      this._finalizeAnimation(animationName === this._showAnimation);
    }
  }
  _cancelPendingAnimations() {
    if (this._showTimeoutId != null) {
      clearTimeout(this._showTimeoutId);
    }
    if (this._hideTimeoutId != null) {
      clearTimeout(this._hideTimeoutId);
    }
    this._showTimeoutId = this._hideTimeoutId = void 0;
  }
  _finalizeAnimation(toVisible) {
    if (toVisible) {
      this._closeOnInteraction = true;
    } else if (!this.isVisible()) {
      this._onHide.next();
    }
  }
  _toggleVisibility(isVisible) {
    const tooltip = this._tooltip.nativeElement;
    const showClass = this._showAnimation;
    const hideClass = this._hideAnimation;
    tooltip.classList.remove(isVisible ? hideClass : showClass);
    tooltip.classList.add(isVisible ? showClass : hideClass);
    if (this._isVisible !== isVisible) {
      this._isVisible = isVisible;
      this._changeDetectorRef.markForCheck();
    }
    if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
      const styles = getComputedStyle(tooltip);
      if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
        this._animationsDisabled = true;
      }
    }
    if (isVisible) {
      this._onShow();
    }
    if (this._animationsDisabled) {
      tooltip.classList.add("_mat-animation-noopable");
      this._finalizeAnimation(isVisible);
    }
  }
  static \u0275fac = function TooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TooltipComponent,
    selectors: [["mat-tooltip-component"]],
    viewQuery: function TooltipComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tooltip = _t.first);
      }
    },
    hostAttrs: ["aria-hidden", "true"],
    hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
          return ctx._handleMouseLeave($event);
        });
      }
    },
    decls: 4,
    vars: 5,
    consts: [["tooltip", ""], [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend"], [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]],
    template: function TooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 1, 0);
        \u0275\u0275domListener("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
          return ctx._handleAnimationEnd($event);
        });
        \u0275\u0275domElementStart(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.tooltipClass);
        \u0275\u0275classProp("mdc-tooltip--multiline", ctx._isMultiline);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.message);
      }
    },
    styles: ['.mat-mdc-tooltip {\n  position: relative;\n  transform: scale(0);\n  display: inline-flex;\n}\n.mat-mdc-tooltip::before {\n  content: "";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  position: absolute;\n}\n.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {\n  top: -8px;\n}\n.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {\n  bottom: -8px;\n}\n.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {\n  left: -8px;\n}\n.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {\n  right: -8px;\n}\n.mat-mdc-tooltip._mat-animation-noopable {\n  animation: none;\n  transform: scale(1);\n}\n\n.mat-mdc-tooltip-surface {\n  word-break: normal;\n  overflow-wrap: anywhere;\n  padding: 4px 8px;\n  min-width: 40px;\n  max-width: 200px;\n  min-height: 24px;\n  max-height: 40vh;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  will-change: transform, opacity;\n  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));\n  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));\n  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));\n  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));\n  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));\n  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));\n  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));\n  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));\n}\n.mat-mdc-tooltip-surface::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n.mdc-tooltip--multiline .mat-mdc-tooltip-surface {\n  text-align: left;\n}\n[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {\n  text-align: right;\n}\n\n.mat-mdc-tooltip-panel {\n  line-height: normal;\n}\n.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {\n  pointer-events: none;\n}\n\n@keyframes mat-mdc-tooltip-show {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes mat-mdc-tooltip-hide {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n}\n.mat-mdc-tooltip-show {\n  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;\n}\n\n.mat-mdc-tooltip-hide {\n  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "mat-tooltip-component",
      encapsulation: ViewEncapsulation.None,
      host: {
        "(mouseleave)": "_handleMouseLeave($event)",
        "aria-hidden": "true"
      },
      template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [class]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n',
      styles: ['.mat-mdc-tooltip {\n  position: relative;\n  transform: scale(0);\n  display: inline-flex;\n}\n.mat-mdc-tooltip::before {\n  content: "";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  position: absolute;\n}\n.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {\n  top: -8px;\n}\n.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {\n  bottom: -8px;\n}\n.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {\n  left: -8px;\n}\n.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {\n  right: -8px;\n}\n.mat-mdc-tooltip._mat-animation-noopable {\n  animation: none;\n  transform: scale(1);\n}\n\n.mat-mdc-tooltip-surface {\n  word-break: normal;\n  overflow-wrap: anywhere;\n  padding: 4px 8px;\n  min-width: 40px;\n  max-width: 200px;\n  min-height: 24px;\n  max-height: 40vh;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n  will-change: transform, opacity;\n  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));\n  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));\n  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));\n  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));\n  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));\n  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));\n  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));\n  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));\n}\n.mat-mdc-tooltip-surface::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n.mdc-tooltip--multiline .mat-mdc-tooltip-surface {\n  text-align: left;\n}\n[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {\n  text-align: right;\n}\n\n.mat-mdc-tooltip-panel {\n  line-height: normal;\n}\n.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {\n  pointer-events: none;\n}\n\n@keyframes mat-mdc-tooltip-show {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes mat-mdc-tooltip-hide {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n}\n.mat-mdc-tooltip-show {\n  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;\n}\n\n.mat-mdc-tooltip-hide {\n  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n']
    }]
  }], null, {
    _tooltip: [{
      type: ViewChild,
      args: ["tooltip", {
        static: true
      }]
    }]
  });
})();

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/tooltip.mjs
var MatTooltipModule = class _MatTooltipModule {
  static \u0275fac = function MatTooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTooltipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTooltipModule,
    imports: [A11yModule, OverlayModule, MatTooltip, TooltipComponent],
    exports: [MatTooltip, TooltipComponent, BidiModule, CdkScrollableModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [A11yModule, OverlayModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [A11yModule, OverlayModule, MatTooltip, TooltipComponent],
      exports: [MatTooltip, TooltipComponent, BidiModule, CdkScrollableModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/_option-chunk.mjs
var _c02 = ["*", [["mat-option"], ["ng-container"]]];
var _c1 = ["*", "mat-option, ng-container"];
var _c2 = ["text"];
var _c3 = [[["mat-icon"]], "*"];
var _c4 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
  }
}
function MatOption_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled);
  }
}
function MatOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.group.label, ")");
  }
}
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var MatOptgroup = class _MatOptgroup {
  label;
  disabled = false;
  _labelId = inject(_IdGenerator).getId("mat-optgroup-label-");
  _inert;
  constructor() {
    const parent = inject(MAT_OPTION_PARENT_COMPONENT, {
      optional: true
    });
    this._inert = parent?.inertGroups ?? false;
  }
  static \u0275fac = function MatOptgroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatOptgroup)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatOptgroup,
    selectors: [["mat-optgroup"]],
    hostAttrs: [1, "mat-mdc-optgroup"],
    hostVars: 3,
    hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
      }
    },
    inputs: {
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    exportAs: ["matOptgroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_OPTGROUP,
      useExisting: _MatOptgroup
    }])],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 4,
    consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]],
    template: function MatOptgroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275domElementStart(0, "span", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275projection(3);
        \u0275\u0275domElementEnd()();
        \u0275\u0275projection(4, 1);
      }
      if (rf & 2) {
        \u0275\u0275classProp("mdc-list-item--disabled", ctx.disabled);
        \u0275\u0275domProperty("id", ctx._labelId);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.label, " ");
      }
    },
    styles: [".mat-mdc-optgroup {\n  color: var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));\n  font-family: var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));\n  line-height: var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));\n  font-size: var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));\n  letter-spacing: var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));\n  font-weight: var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight));\n}\n\n.mat-mdc-optgroup-label {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  outline: none;\n}\n.mat-mdc-optgroup-label.mdc-list-item--disabled {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup-label .mdc-list-item__primary-text {\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  white-space: normal;\n  color: inherit;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptgroup, [{
    type: Component,
    args: [{
      selector: "mat-optgroup",
      exportAs: "matOptgroup",
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
      styles: [".mat-mdc-optgroup {\n  color: var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));\n  font-family: var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));\n  line-height: var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));\n  font-size: var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));\n  letter-spacing: var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));\n  font-weight: var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight));\n}\n\n.mat-mdc-optgroup-label {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  outline: none;\n}\n.mat-mdc-optgroup-label.mdc-list-item--disabled {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup-label .mdc-list-item__primary-text {\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  white-space: normal;\n  color: inherit;\n}\n"]
    }]
  }], () => [], {
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatOptionSelectionChange = class {
  source;
  isUserInput;
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var MatOption = class _MatOption {
  _element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _parent = inject(MAT_OPTION_PARENT_COMPONENT, {
    optional: true
  });
  group = inject(MAT_OPTGROUP, {
    optional: true
  });
  _signalDisableRipple = false;
  _selected = false;
  _active = false;
  _mostRecentViewValue = "";
  get multiple() {
    return this._parent && this._parent.multiple;
  }
  get selected() {
    return this._selected;
  }
  value;
  id = inject(_IdGenerator).getId("mat-option-");
  get disabled() {
    return this.group && this.group.disabled || this._disabled();
  }
  set disabled(value) {
    this._disabled.set(value);
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  get disableRipple() {
    return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple;
  }
  get hideSingleSelectionIndicator() {
    return !!(this._parent && this._parent.hideSingleSelectionIndicator);
  }
  onSelectionChange = new EventEmitter();
  _text;
  _stateChanges = new Subject();
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_StructuralStylesLoader);
    styleLoader.load(_VisuallyHiddenLoader);
    this._signalDisableRipple = !!this._parent && isSignal(this._parent.disableRipple);
  }
  get active() {
    return this._active;
  }
  get viewValue() {
    return (this._text?.nativeElement.textContent || "").trim();
  }
  select(emitEvent = true) {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  deselect(emitEvent = true) {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  focus(_origin, options) {
    const element = this._getHostElement();
    if (typeof element.focus === "function") {
      element.focus(options);
    }
  }
  setActiveStyles() {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }
  setInactiveStyles() {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  getLabel() {
    return this.viewValue;
  }
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
      this._selectViaInteraction();
      event.preventDefault();
    }
  }
  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent(true);
    }
  }
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  _getHostElement() {
    return this._element.nativeElement;
  }
  ngAfterViewChecked() {
    if (this._selected) {
      const viewValue = this.viewValue;
      if (viewValue !== this._mostRecentViewValue) {
        if (this._mostRecentViewValue) {
          this._stateChanges.next();
        }
        this._mostRecentViewValue = viewValue;
      }
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }
  static \u0275fac = function MatOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatOption)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatOption,
    selectors: [["mat-option"]],
    viewQuery: function MatOption_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._text = _t.first);
      }
    },
    hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
    hostVars: 11,
    hostBindings: function MatOption_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatOption_click_HostBindingHandler() {
          return ctx._selectViaInteraction();
        })("keydown", function MatOption_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
        \u0275\u0275classProp("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
      }
    },
    inputs: {
      value: "value",
      id: "id",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      onSelectionChange: "onSelectionChange"
    },
    exportAs: ["matOption"],
    ngContentSelectors: _c4,
    decls: 8,
    vars: 5,
    consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]],
    template: function MatOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c3);
        \u0275\u0275conditionalCreate(0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
        \u0275\u0275projection(1);
        \u0275\u0275elementStart(2, "span", 2, 0);
        \u0275\u0275projection(4, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3);
        \u0275\u0275conditionalCreate(6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
        \u0275\u0275element(7, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.multiple ? 0 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.group && ctx.group._inert ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
      }
    },
    dependencies: [MatPseudoCheckbox, MatRipple],
    styles: ['.mat-mdc-option {\n  -webkit-user-select: none;\n  user-select: none;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));\n  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));\n  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));\n}\n.mat-mdc-option:hover:not(.mdc-list-item--disabled) {\n  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {\n  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n  outline: 0;\n}\n.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {\n  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {\n  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-option .mat-pseudo-checkbox {\n  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-option.mdc-list-item {\n  align-items: center;\n  background: transparent;\n}\n.mat-mdc-option.mdc-list-item--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 32px;\n}\n[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 16px;\n  padding-right: 32px;\n}\n.mat-mdc-option .mat-icon,\n.mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-icon,\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-left: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-right: 16px;\n  margin-left: 0;\n}\n.mat-mdc-option .mat-mdc-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-option .mdc-list-item__primary-text {\n  white-space: normal;\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-right: auto;\n}\n[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {\n  margin-right: 0;\n  margin-left: auto;\n}\n@media (forced-colors: active) {\n  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-option-multiple {\n  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);\n}\n\n.mat-mdc-option-active .mat-focus-indicator::before {\n  content: "";\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOption, [{
    type: Component,
    args: [{
      selector: "mat-option",
      exportAs: "matOption",
      host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      },
      encapsulation: ViewEncapsulation.None,
      imports: [MatPseudoCheckbox, MatRipple],
      template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
      styles: ['.mat-mdc-option {\n  -webkit-user-select: none;\n  user-select: none;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));\n  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));\n  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));\n}\n.mat-mdc-option:hover:not(.mdc-list-item--disabled) {\n  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {\n  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n  outline: 0;\n}\n.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {\n  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {\n  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-option .mat-pseudo-checkbox {\n  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-option.mdc-list-item {\n  align-items: center;\n  background: transparent;\n}\n.mat-mdc-option.mdc-list-item--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 32px;\n}\n[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 16px;\n  padding-right: 32px;\n}\n.mat-mdc-option .mat-icon,\n.mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-icon,\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-left: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-right: 16px;\n  margin-left: 0;\n}\n.mat-mdc-option .mat-mdc-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-option .mdc-list-item__primary-text {\n  white-space: normal;\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-right: auto;\n}\n[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {\n  margin-right: 0;\n  margin-left: auto;\n}\n@media (forced-colors: active) {\n  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-option-multiple {\n  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);\n}\n\n.mat-mdc-option-active .mat-focus-indicator::before {\n  content: "";\n}\n']
    }]
  }], () => [], {
    value: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onSelectionChange: [{
      type: Output
    }],
    _text: [{
      type: ViewChild,
      args: ["text", {
        static: true
      }]
    }]
  });
})();
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/form-field.mjs
var MatFormFieldModule = class _MatFormFieldModule {
  static \u0275fac = function MatFormFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatFormFieldModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatFormFieldModule,
    imports: [ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
    exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ObserversModule, MatFormField, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
      exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, BidiModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/_option-module-chunk.mjs
var MatOptionModule = class _MatOptionModule {
  static \u0275fac = function MatOptionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatOptionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatOptionModule,
    imports: [MatRippleModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
    exports: [MatOption, MatOptgroup, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, MatPseudoCheckboxModule, MatOption, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptionModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
      exports: [MatOption, MatOptgroup, BidiModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/select.mjs
var _c03 = ["trigger"];
var _c12 = ["panel"];
var _c22 = [[["mat-select-trigger"]], "*"];
var _c32 = ["mat-select-trigger", "*"];
function MatSelect_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.placeholder);
  }
}
function MatSelect_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatSelect_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.triggerValue);
  }
}
function MatSelect_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275conditionalCreate(1, MatSelect_Conditional_5_Conditional_1_Template, 1, 0)(2, MatSelect_Conditional_5_Conditional_2_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.customTrigger ? 1 : 2);
  }
}
function MatSelect_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12, 1);
    \u0275\u0275listener("keydown", function MatSelect_ng_template_10_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._handleKeydown($event));
    });
    \u0275\u0275projection(2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.panelClass);
    \u0275\u0275classProp("mat-select-panel-animations-enabled", !ctx_r0._animationsDisabled)("mat-primary", ctx_r0._parentFormField?.color === "primary")("mat-accent", ctx_r0._parentFormField?.color === "accent")("mat-warn", ctx_r0._parentFormField?.color === "warn")("mat-undefined", !ctx_r0._parentFormField?.color);
    \u0275\u0275attribute("id", ctx_r0.id + "-panel")("aria-multiselectable", ctx_r0.multiple)("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0._getPanelAriaLabelledby());
  }
}
function getMatSelectDynamicMultipleError() {
  return Error("Cannot change `multiple` mode of select after initialization.");
}
function getMatSelectNonArrayValueError() {
  return Error("Value must be an array in multiple-selection mode.");
}
function getMatSelectNonFunctionValueError() {
  return Error("`compareWith` must be a function.");
}
var MAT_SELECT_SCROLL_STRATEGY = new InjectionToken("mat-select-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
var MAT_SELECT_CONFIG = new InjectionToken("MAT_SELECT_CONFIG");
var MAT_SELECT_TRIGGER = new InjectionToken("MatSelectTrigger");
var MatSelectChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatSelect = class _MatSelect {
  _viewportRuler = inject(ViewportRuler);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _idGenerator = inject(_IdGenerator);
  _renderer = inject(Renderer2);
  _parentFormField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  ngControl = inject(NgControl, {
    self: true,
    optional: true
  });
  _liveAnnouncer = inject(LiveAnnouncer);
  _defaultOptions = inject(MAT_SELECT_CONFIG, {
    optional: true
  });
  _animationsDisabled = _animationsDisabled();
  _popoverLocation;
  _initialized = new Subject();
  _cleanupDetach;
  options;
  optionGroups;
  customTrigger;
  _positions = [{
    originX: "start",
    originY: "bottom",
    overlayX: "start",
    overlayY: "top"
  }, {
    originX: "end",
    originY: "bottom",
    overlayX: "end",
    overlayY: "top"
  }, {
    originX: "start",
    originY: "top",
    overlayX: "start",
    overlayY: "bottom",
    panelClass: "mat-mdc-select-panel-above"
  }, {
    originX: "end",
    originY: "top",
    overlayX: "end",
    overlayY: "bottom",
    panelClass: "mat-mdc-select-panel-above"
  }];
  _scrollOptionIntoView(index) {
    const option = this.options.toArray()[index];
    if (option) {
      const panel = this.panel.nativeElement;
      const labelCount = _countGroupLabelsBeforeOption(index, this.options, this.optionGroups);
      const element = option._getHostElement();
      if (index === 0 && labelCount === 1) {
        panel.scrollTop = 0;
      } else {
        panel.scrollTop = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, panel.scrollTop, panel.offsetHeight);
      }
    }
  }
  _positioningSettled() {
    this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
  }
  _getChangeEvent(value) {
    return new MatSelectChange(this, value);
  }
  _scrollStrategyFactory = inject(MAT_SELECT_SCROLL_STRATEGY);
  _panelOpen = false;
  _compareWith = (o1, o2) => o1 === o2;
  _uid = this._idGenerator.getId("mat-select-");
  _triggerAriaLabelledBy = null;
  _previousControl;
  _destroy = new Subject();
  _errorStateTracker;
  stateChanges = new Subject();
  disableAutomaticLabeling = true;
  userAriaDescribedBy;
  _selectionModel;
  _keyManager;
  _preferredOverlayOrigin;
  _overlayWidth;
  _onChange = () => {
  };
  _onTouched = () => {
  };
  _valueId = this._idGenerator.getId("mat-select-value-");
  _scrollStrategy;
  _overlayPanelClass = this._defaultOptions?.overlayPanelClass || "";
  get focused() {
    return this._focused || this._panelOpen;
  }
  _focused = false;
  controlType = "mat-select";
  trigger;
  panel;
  _overlayDir;
  panelClass;
  disabled = false;
  get disableRipple() {
    return this._disableRipple();
  }
  set disableRipple(value) {
    this._disableRipple.set(value);
  }
  _disableRipple = signal(false, ...ngDevMode ? [{
    debugName: "_disableRipple"
  }] : []);
  tabIndex = 0;
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  _placeholder;
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = value;
    this.stateChanges.next();
  }
  _required;
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    if (this._selectionModel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatSelectDynamicMultipleError();
    }
    this._multiple = value;
  }
  _multiple = false;
  disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatSelectNonFunctionValueError();
    }
    this._compareWith = fn;
    if (this._selectionModel) {
      this._initializeSelection();
    }
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    const hasAssigned = this._assignValue(newValue);
    if (hasAssigned) {
      this._onChange(newValue);
    }
  }
  _value;
  ariaLabel = "";
  ariaLabelledby;
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  typeaheadDebounceInterval;
  sortComparator;
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  _id;
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth !== "undefined" ? this._defaultOptions.panelWidth : "auto";
  canSelectNullableOptions = this._defaultOptions?.canSelectNullableOptions ?? false;
  optionSelectionChanges = defer(() => {
    const options = this.options;
    if (options) {
      return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
    }
    return this._initialized.pipe(switchMap(() => this.optionSelectionChanges));
  });
  openedChange = new EventEmitter();
  _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
  }));
  _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
  }));
  selectionChange = new EventEmitter();
  valueChange = new EventEmitter();
  constructor() {
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaultPopoverConfig = inject(OVERLAY_DEFAULT_CONFIG, {
      optional: true
    });
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    if (this._defaultOptions?.typeaheadDebounceInterval != null) {
      this.typeaheadDebounceInterval = this._defaultOptions.typeaheadDebounceInterval;
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._scrollStrategy = this._scrollStrategyFactory();
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this._popoverLocation = defaultPopoverConfig?.usePopover === false ? null : "inline";
    this.id = this.id;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple);
    this.stateChanges.next();
    this._viewportRuler.change().pipe(takeUntil(this._destroy)).subscribe(() => {
      if (this.panelOpen) {
        this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
        this._changeDetectorRef.detectChanges();
      }
    });
  }
  ngAfterContentInit() {
    this._initialized.next();
    this._initialized.complete();
    this._initKeyManager();
    this._selectionModel.changed.pipe(takeUntil(this._destroy)).subscribe((event) => {
      event.added.forEach((option) => option.select());
      event.removed.forEach((option) => option.deselect());
    });
    this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
      this._resetOptions();
      this._initializeSelection();
    });
  }
  ngDoCheck() {
    const newAriaLabelledby = this._getTriggerAriaLabelledby();
    const ngControl = this.ngControl;
    if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
      const element = this._elementRef.nativeElement;
      this._triggerAriaLabelledBy = newAriaLabelledby;
      if (newAriaLabelledby) {
        element.setAttribute("aria-labelledby", newAriaLabelledby);
      } else {
        element.removeAttribute("aria-labelledby");
      }
    }
    if (ngControl) {
      if (this._previousControl !== ngControl.control) {
        if (this._previousControl !== void 0 && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
          this.disabled = ngControl.disabled;
        }
        this._previousControl = ngControl.control;
      }
      this.updateErrorState();
    }
  }
  ngOnChanges(changes) {
    if (changes["disabled"] || changes["userAriaDescribedBy"]) {
      this.stateChanges.next();
    }
    if (changes["typeaheadDebounceInterval"] && this._keyManager) {
      this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
    }
    if (changes["panelClass"] && this.panelClass instanceof Set) {
      this.panelClass = Array.from(this.panelClass);
    }
  }
  ngOnDestroy() {
    this._cleanupDetach?.();
    this._keyManager?.destroy();
    this._destroy.next();
    this._destroy.complete();
    this.stateChanges.complete();
  }
  toggle() {
    this.panelOpen ? this.close() : this.open();
  }
  open() {
    if (!this._canOpen()) {
      return;
    }
    if (this._parentFormField) {
      this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin();
    }
    this._cleanupDetach?.();
    this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
    this._panelOpen = true;
    this._overlayDir.positionChange.pipe(take(1)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
      this._positioningSettled();
    });
    this._overlayDir.attachOverlay();
    this._keyManager.withHorizontalOrientation(null);
    this._highlightCorrectOption();
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
    Promise.resolve().then(() => this.openedChange.emit(true));
  }
  close() {
    if (this._panelOpen) {
      this._panelOpen = false;
      this._exitAndDetach();
      this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr");
      this._changeDetectorRef.markForCheck();
      this._onTouched();
      this.stateChanges.next();
      Promise.resolve().then(() => this.openedChange.emit(false));
    }
  }
  _exitAndDetach() {
    if (this._animationsDisabled || !this.panel) {
      this._detachOverlay();
      return;
    }
    this._cleanupDetach?.();
    this._cleanupDetach = () => {
      cleanupEvent();
      clearTimeout(exitFallbackTimer);
      this._cleanupDetach = void 0;
    };
    const panel = this.panel.nativeElement;
    const cleanupEvent = this._renderer.listen(panel, "animationend", (event) => {
      if (event.animationName === "_mat-select-exit") {
        this._cleanupDetach?.();
        this._detachOverlay();
      }
    });
    const exitFallbackTimer = setTimeout(() => {
      this._cleanupDetach?.();
      this._detachOverlay();
    }, 200);
    panel.classList.add("mat-select-panel-exit");
  }
  _detachOverlay() {
    this._overlayDir.detachOverlay();
    this._changeDetectorRef.markForCheck();
  }
  writeValue(value) {
    this._assignValue(value);
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  get panelOpen() {
    return this._panelOpen;
  }
  get selected() {
    return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
  }
  get triggerValue() {
    if (this.empty) {
      return "";
    }
    if (this._multiple) {
      const selectedOptions = this._selectionModel.selected.map((option) => option.viewValue);
      if (this._isRtl()) {
        selectedOptions.reverse();
      }
      return selectedOptions.join(", ");
    }
    return this._selectionModel.selected[0].viewValue;
  }
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  _isRtl() {
    return this._dir ? this._dir.value === "rtl" : false;
  }
  _handleKeydown(event) {
    if (!this.disabled) {
      this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
    }
  }
  _handleClosedKeydown(event) {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW;
    const isOpenKey = keyCode === ENTER || keyCode === SPACE;
    const manager = this._keyManager;
    if (!manager.isTyping() && isOpenKey && !hasModifierKey(event) || (this.multiple || event.altKey) && isArrowKey) {
      event.preventDefault();
      this.open();
    } else if (!this.multiple) {
      const previouslySelectedOption = this.selected;
      manager.onKeydown(event);
      const selectedOption = this.selected;
      if (selectedOption && previouslySelectedOption !== selectedOption) {
        this._liveAnnouncer.announce(selectedOption.viewValue, 1e4);
      }
    }
  }
  _handleOpenKeydown(event) {
    const manager = this._keyManager;
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW;
    const isTyping = manager.isTyping();
    if (isArrowKey && event.altKey) {
      event.preventDefault();
      this.close();
    } else if (!isTyping && (keyCode === ENTER || keyCode === SPACE) && manager.activeItem && !hasModifierKey(event)) {
      event.preventDefault();
      manager.activeItem._selectViaInteraction();
    } else if (!isTyping && this._multiple && keyCode === A && event.ctrlKey) {
      event.preventDefault();
      const hasDeselectedOptions = this.options.some((opt) => !opt.disabled && !opt.selected);
      this.options.forEach((option) => {
        if (!option.disabled) {
          hasDeselectedOptions ? option.select() : option.deselect();
        }
      });
    } else {
      const previouslyFocusedIndex = manager.activeItemIndex;
      manager.onKeydown(event);
      if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
        manager.activeItem._selectViaInteraction();
      }
    }
  }
  _handleOverlayKeydown(event) {
    if (event.keyCode === ESCAPE && !hasModifierKey(event)) {
      event.preventDefault();
      this.close();
    }
  }
  _onFocus() {
    if (!this.disabled) {
      this._focused = true;
      this.stateChanges.next();
    }
  }
  _onBlur() {
    this._focused = false;
    this._keyManager?.cancelTypeahead();
    if (!this.disabled && !this.panelOpen) {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    }
  }
  get empty() {
    return !this._selectionModel || this._selectionModel.isEmpty();
  }
  _initializeSelection() {
    Promise.resolve().then(() => {
      if (this.ngControl) {
        this._value = this.ngControl.value;
      }
      this._setSelectionByValue(this._value);
      this.stateChanges.next();
    });
  }
  _setSelectionByValue(value) {
    this.options.forEach((option) => option.setInactiveStyles());
    this._selectionModel.clear();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getMatSelectNonArrayValueError();
      }
      value.forEach((currentValue) => this._selectOptionByValue(currentValue));
      this._sortValues();
    } else {
      const correspondingOption = this._selectOptionByValue(value);
      if (correspondingOption) {
        this._keyManager.updateActiveItem(correspondingOption);
      } else if (!this.panelOpen) {
        this._keyManager.updateActiveItem(-1);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  _selectOptionByValue(value) {
    const correspondingOption = this.options.find((option) => {
      if (this._selectionModel.isSelected(option)) {
        return false;
      }
      try {
        return (option.value != null || this.canSelectNullableOptions) && this._compareWith(option.value, value);
      } catch (error) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(error);
        }
        return false;
      }
    });
    if (correspondingOption) {
      this._selectionModel.select(correspondingOption);
    }
    return correspondingOption;
  }
  _assignValue(newValue) {
    if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
      if (this.options) {
        this._setSelectionByValue(newValue);
      }
      this._value = newValue;
      return true;
    }
    return false;
  }
  _skipPredicate = (option) => {
    if (this.panelOpen) {
      return false;
    }
    return option.disabled;
  };
  _getOverlayWidth(preferredOrigin) {
    if (this.panelWidth === "auto") {
      const refToMeasure = preferredOrigin instanceof CdkOverlayOrigin ? preferredOrigin.elementRef : preferredOrigin || this._elementRef;
      return refToMeasure.nativeElement.getBoundingClientRect().width;
    }
    return this.panelWidth === null ? "" : this.panelWidth;
  }
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  _initKeyManager() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate);
    this._keyManager.tabOut.subscribe(() => {
      if (this.panelOpen) {
        if (!this.multiple && this._keyManager.activeItem) {
          this._keyManager.activeItem._selectViaInteraction();
        }
        this.focus();
        this.close();
      }
    });
    this._keyManager.change.subscribe(() => {
      if (this._panelOpen && this.panel) {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
        this._keyManager.activeItem._selectViaInteraction();
      }
    });
  }
  _resetOptions() {
    const changedOrDestroyed = merge(this.options.changes, this._destroy);
    this.optionSelectionChanges.pipe(takeUntil(changedOrDestroyed)).subscribe((event) => {
      this._onSelect(event.source, event.isUserInput);
      if (event.isUserInput && !this.multiple && this._panelOpen) {
        this.close();
        this.focus();
      }
    });
    merge(...this.options.map((option) => option._stateChanges)).pipe(takeUntil(changedOrDestroyed)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
      this.stateChanges.next();
    });
  }
  _onSelect(option, isUserInput) {
    const wasSelected = this._selectionModel.isSelected(option);
    if (!this.canSelectNullableOptions && option.value == null && !this._multiple) {
      option.deselect();
      this._selectionModel.clear();
      if (this.value != null) {
        this._propagateChanges(option.value);
      }
    } else {
      if (wasSelected !== option.selected) {
        option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
      }
      if (isUserInput) {
        this._keyManager.setActiveItem(option);
      }
      if (this.multiple) {
        this._sortValues();
        if (isUserInput) {
          this.focus();
        }
      }
    }
    if (wasSelected !== this._selectionModel.isSelected(option)) {
      this._propagateChanges();
    }
    this.stateChanges.next();
  }
  _sortValues() {
    if (this.multiple) {
      const options = this.options.toArray();
      this._selectionModel.sort((a, b) => {
        return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
      });
      this.stateChanges.next();
    }
  }
  _propagateChanges(fallbackValue) {
    let valueToEmit;
    if (this.multiple) {
      valueToEmit = this.selected.map((option) => option.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }
    this._value = valueToEmit;
    this.valueChange.emit(valueToEmit);
    this._onChange(valueToEmit);
    this.selectionChange.emit(this._getChangeEvent(valueToEmit));
    this._changeDetectorRef.markForCheck();
  }
  _highlightCorrectOption() {
    if (this._keyManager) {
      if (this.empty) {
        let firstEnabledOptionIndex = -1;
        for (let index = 0; index < this.options.length; index++) {
          const option = this.options.get(index);
          if (!option.disabled) {
            firstEnabledOptionIndex = index;
            break;
          }
        }
        this._keyManager.setActiveItem(firstEnabledOptionIndex);
      } else {
        this._keyManager.setActiveItem(this._selectionModel.selected[0]);
      }
    }
  }
  _canOpen() {
    return !this._panelOpen && !this.disabled && this.options?.length > 0 && !!this._overlayDir;
  }
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  _getPanelAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    const labelId = this._parentFormField?.getLabelId() || null;
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  _getAriaActiveDescendant() {
    if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
      return this._keyManager.activeItem.id;
    }
    return null;
  }
  _getTriggerAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    let value = this._parentFormField?.getLabelId() || "";
    if (this.ariaLabelledby) {
      value += " " + this.ariaLabelledby;
    }
    if (!value) {
      value = this._valueId;
    }
    return value;
  }
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  onContainerClick(event) {
    const target = _getEventTarget(event);
    if (target && (target.tagName === "MAT-OPTION" || target.classList.contains("cdk-overlay-backdrop") || target.closest(".mat-mdc-select-panel"))) {
      return;
    }
    this.focus();
    this.open();
  }
  get shouldLabelFloat() {
    return this.panelOpen || !this.empty || this.focused && !!this.placeholder;
  }
  static \u0275fac = function MatSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelect)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSelect,
    selectors: [["mat-select"]],
    contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_SELECT_TRIGGER, 5)(dirIndex, MatOption, 5)(dirIndex, MAT_OPTGROUP, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customTrigger = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.options = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionGroups = _t);
      }
    },
    viewQuery: function MatSelect_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5)(_c12, 5)(CdkConnectedOverlay, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trigger = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._overlayDir = _t.first);
      }
    },
    hostAttrs: ["role", "combobox", "aria-haspopup", "listbox", 1, "mat-mdc-select"],
    hostVars: 21,
    hostBindings: function MatSelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatSelect_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("focus", function MatSelect_focus_HostBindingHandler() {
          return ctx._onFocus();
        })("blur", function MatSelect_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-activedescendant", ctx._getAriaActiveDescendant());
        \u0275\u0275classProp("mat-mdc-select-disabled", ctx.disabled)("mat-mdc-select-invalid", ctx.errorState)("mat-mdc-select-required", ctx.required)("mat-mdc-select-empty", ctx.empty)("mat-mdc-select-multiple", ctx.multiple)("mat-select-open", ctx.panelOpen);
      }
    },
    inputs: {
      userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
      panelClass: "panelClass",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
      placeholder: "placeholder",
      required: [2, "required", "required", booleanAttribute],
      multiple: [2, "multiple", "multiple", booleanAttribute],
      disableOptionCentering: [2, "disableOptionCentering", "disableOptionCentering", booleanAttribute],
      compareWith: "compareWith",
      value: "value",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      errorStateMatcher: "errorStateMatcher",
      typeaheadDebounceInterval: [2, "typeaheadDebounceInterval", "typeaheadDebounceInterval", numberAttribute],
      sortComparator: "sortComparator",
      id: "id",
      panelWidth: "panelWidth",
      canSelectNullableOptions: [2, "canSelectNullableOptions", "canSelectNullableOptions", booleanAttribute]
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      _closedStream: "closed",
      selectionChange: "selectionChange",
      valueChange: "valueChange"
    },
    exportAs: ["matSelect"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatFormFieldControl,
      useExisting: _MatSelect
    }, {
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: _MatSelect
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c32,
    decls: 11,
    vars: 10,
    consts: [["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""], ["panel", ""], ["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"], [1, "mat-mdc-select-value"], [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"], [1, "mat-mdc-select-value-text"], [1, "mat-mdc-select-arrow-wrapper"], [1, "mat-mdc-select-arrow"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "focusable", "false", "aria-hidden", "true"], ["d", "M7 10l5 5 5-5z"], ["cdk-connected-overlay", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "detach", "backdropClick", "overlayKeydown", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayWidth", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayUsePopover"], [1, "mat-mdc-select-min-line"], ["role", "listbox", "tabindex", "-1", 1, "mat-mdc-select-panel", "mdc-menu-surface", "mdc-menu-surface--open", 3, "keydown"]],
    template: function MatSelect_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c22);
        \u0275\u0275elementStart(0, "div", 2, 0);
        \u0275\u0275listener("click", function MatSelect_Template_div_click_0_listener() {
          return ctx.open();
        });
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275conditionalCreate(4, MatSelect_Conditional_4_Template, 2, 1, "span", 4)(5, MatSelect_Conditional_5_Template, 3, 1, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 8);
        \u0275\u0275element(9, "path", 9);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(10, MatSelect_ng_template_10_Template, 3, 16, "ng-template", 10);
        \u0275\u0275listener("detach", function MatSelect_Template_ng_template_detach_10_listener() {
          return ctx.close();
        })("backdropClick", function MatSelect_Template_ng_template_backdropClick_10_listener() {
          return ctx.close();
        })("overlayKeydown", function MatSelect_Template_ng_template_overlayKeydown_10_listener($event) {
          return ctx._handleOverlayKeydown($event);
        });
      }
      if (rf & 2) {
        const fallbackOverlayOrigin_r3 = \u0275\u0275reference(1);
        \u0275\u0275advance(3);
        \u0275\u0275attribute("id", ctx._valueId);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.empty ? 4 : 5);
        \u0275\u0275advance(6);
        \u0275\u0275property("cdkConnectedOverlayDisableClose", true)("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", ctx._preferredOverlayOrigin || fallbackOverlayOrigin_r3)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayWidth", ctx._overlayWidth)("cdkConnectedOverlayFlexibleDimensions", true)("cdkConnectedOverlayUsePopover", ctx._popoverLocation);
      }
    },
    dependencies: [CdkOverlayOrigin, CdkConnectedOverlay],
    styles: ['@keyframes _mat-select-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _mat-select-exit {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mat-mdc-select {\n  display: inline-block;\n  width: 100%;\n  outline: none;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));\n  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));\n  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));\n}\n\ndiv.mat-mdc-select-panel {\n  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n}\n\n.mat-mdc-select-disabled {\n  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-select-disabled .mat-mdc-select-placeholder {\n  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-select-trigger {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n}\n.mat-mdc-select-disabled .mat-mdc-select-trigger {\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n\n.mat-mdc-select-value {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mat-mdc-select-value-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mat-mdc-select-arrow-wrapper {\n  height: 24px;\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n}\n.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {\n  transform: none;\n}\n\n.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,\n.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {\n  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));\n}\n\n.mat-mdc-select-arrow {\n  width: 10px;\n  height: 5px;\n  position: relative;\n  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {\n  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));\n}\n.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {\n  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-select-open .mat-mdc-select-arrow {\n  transform: rotate(180deg);\n}\n.mat-form-field-animations-enabled .mat-mdc-select-arrow {\n  transition: transform 80ms linear;\n}\n.mat-mdc-select-arrow svg {\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@media (forced-colors: active) {\n  .mat-mdc-select-arrow svg {\n    fill: CanvasText;\n  }\n  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {\n    fill: GrayText;\n  }\n}\n\ndiv.mat-mdc-select-panel {\n  width: 100%;\n  max-height: 275px;\n  outline: 0;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  transform-origin: top center;\n  border-radius: 0 0 4px 4px;\n  position: relative;\n  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));\n}\n.mat-mdc-select-panel-above div.mat-mdc-select-panel {\n  border-radius: 4px 4px 0 0;\n  transform-origin: bottom center;\n}\n@media (forced-colors: active) {\n  div.mat-mdc-select-panel {\n    outline: solid 1px;\n  }\n}\n\n.mat-select-panel-animations-enabled {\n  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-select-panel-animations-enabled.mat-select-panel-exit {\n  animation: _mat-select-exit 100ms linear;\n}\n\n.mat-mdc-select-placeholder {\n  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {\n  transition: none;\n}\n.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n  display: block;\n}\n\n.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {\n  cursor: pointer;\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {\n  max-width: calc(100% - 18px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {\n  max-width: calc(100% / 0.75 - 24px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {\n  max-width: calc(100% - 60px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {\n  max-width: calc(100% - 24px);\n}\n\n.mat-mdc-select-min-line:empty::before {\n  content: " ";\n  white-space: pre;\n  width: 1px;\n  display: inline-block;\n  visibility: hidden;\n}\n\n.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {\n  transform: var(--mat-select-arrow-transform, translateY(-8px));\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelect, [{
    type: Component,
    args: [{
      selector: "mat-select",
      exportAs: "matSelect",
      encapsulation: ViewEncapsulation.None,
      host: {
        "role": "combobox",
        "aria-haspopup": "listbox",
        "class": "mat-mdc-select",
        "[attr.id]": "id",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": 'panelOpen ? id + "-panel" : null',
        "[attr.aria-expanded]": "panelOpen",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.aria-required]": "required.toString()",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[attr.aria-activedescendant]": "_getAriaActiveDescendant()",
        "[class.mat-mdc-select-disabled]": "disabled",
        "[class.mat-mdc-select-invalid]": "errorState",
        "[class.mat-mdc-select-required]": "required",
        "[class.mat-mdc-select-empty]": "empty",
        "[class.mat-mdc-select-multiple]": "multiple",
        "[class.mat-select-open]": "panelOpen",
        "(keydown)": "_handleKeydown($event)",
        "(focus)": "_onFocus()",
        "(blur)": "_onBlur()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatSelect
      }, {
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatSelect
      }],
      imports: [CdkOverlayOrigin, CdkConnectedOverlay],
      template: `<div
  cdk-overlay-origin
  class="mat-mdc-select-trigger"
  (click)="open()"
  #fallbackOverlayOrigin="cdkOverlayOrigin"
  #trigger
>
  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayDisableClose]="true"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  [cdkConnectedOverlayFlexibleDimensions]="true"
  [cdkConnectedOverlayUsePopover]="_popoverLocation"
  (detach)="close()"
  (backdropClick)="close()"
  (overlayKeydown)="_handleOverlayKeydown($event)">
  <!-- \`mat-undefined\` is weird, but we were using it internally -->
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open"
    [class]="panelClass"
    [class.mat-select-panel-animations-enabled]="!_animationsDisabled"
    [class.mat-primary]="_parentFormField?.color === 'primary'"
    [class.mat-accent]="_parentFormField?.color === 'accent'"
    [class.mat-warn]="_parentFormField?.color === 'warn'"
    [class.mat-undefined]="!_parentFormField?.color"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`,
      styles: ['@keyframes _mat-select-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _mat-select-exit {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.mat-mdc-select {\n  display: inline-block;\n  width: 100%;\n  outline: none;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));\n  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));\n  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));\n}\n\ndiv.mat-mdc-select-panel {\n  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n}\n\n.mat-mdc-select-disabled {\n  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-mdc-select-disabled .mat-mdc-select-placeholder {\n  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n\n.mat-mdc-select-trigger {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n}\n.mat-mdc-select-disabled .mat-mdc-select-trigger {\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n\n.mat-mdc-select-value {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mat-mdc-select-value-text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mat-mdc-select-arrow-wrapper {\n  height: 24px;\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n}\n.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {\n  transform: none;\n}\n\n.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,\n.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {\n  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));\n}\n\n.mat-mdc-select-arrow {\n  width: 10px;\n  height: 5px;\n  position: relative;\n  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {\n  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));\n}\n.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {\n  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-select-open .mat-mdc-select-arrow {\n  transform: rotate(180deg);\n}\n.mat-form-field-animations-enabled .mat-mdc-select-arrow {\n  transition: transform 80ms linear;\n}\n.mat-mdc-select-arrow svg {\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@media (forced-colors: active) {\n  .mat-mdc-select-arrow svg {\n    fill: CanvasText;\n  }\n  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {\n    fill: GrayText;\n  }\n}\n\ndiv.mat-mdc-select-panel {\n  width: 100%;\n  max-height: 275px;\n  outline: 0;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  transform-origin: top center;\n  border-radius: 0 0 4px 4px;\n  position: relative;\n  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));\n}\n.mat-mdc-select-panel-above div.mat-mdc-select-panel {\n  border-radius: 4px 4px 0 0;\n  transform-origin: bottom center;\n}\n@media (forced-colors: active) {\n  div.mat-mdc-select-panel {\n    outline: solid 1px;\n  }\n}\n\n.mat-select-panel-animations-enabled {\n  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-select-panel-animations-enabled.mat-select-panel-exit {\n  animation: _mat-select-exit 100ms linear;\n}\n\n.mat-mdc-select-placeholder {\n  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {\n  transition: none;\n}\n.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  transition: none;\n  display: block;\n}\n\n.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {\n  cursor: pointer;\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {\n  max-width: calc(100% - 18px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {\n  max-width: calc(100% / 0.75 - 24px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {\n  max-width: calc(100% - 60px);\n}\n.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {\n  max-width: calc(100% - 24px);\n}\n\n.mat-mdc-select-min-line:empty::before {\n  content: " ";\n  white-space: pre;\n  width: 1px;\n  display: inline-block;\n  visibility: hidden;\n}\n\n.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {\n  transform: var(--mat-select-arrow-transform, translateY(-8px));\n}\n']
    }]
  }], () => [], {
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    customTrigger: [{
      type: ContentChild,
      args: [MAT_SELECT_TRIGGER]
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    trigger: [{
      type: ViewChild,
      args: ["trigger"]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    _overlayDir: [{
      type: ViewChild,
      args: [CdkConnectedOverlay]
    }],
    panelClass: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableOptionCentering: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareWith: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    errorStateMatcher: [{
      type: Input
    }],
    typeaheadDebounceInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortComparator: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    panelWidth: [{
      type: Input
    }],
    canSelectNullableOptions: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    openedChange: [{
      type: Output
    }],
    _openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    _closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    selectionChange: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }]
  });
})();
var MatSelectTrigger = class _MatSelectTrigger {
  static \u0275fac = function MatSelectTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSelectTrigger,
    selectors: [["mat-select-trigger"]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SELECT_TRIGGER,
      useExisting: _MatSelectTrigger
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectTrigger, [{
    type: Directive,
    args: [{
      selector: "mat-select-trigger",
      providers: [{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }]
    }]
  }], null, null);
})();
var MatSelectModule = class _MatSelectModule {
  static \u0275fac = function MatSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSelectModule,
    imports: [OverlayModule, MatOptionModule, MatSelect, MatSelectTrigger],
    exports: [BidiModule, CdkScrollableModule, MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [OverlayModule, MatOptionModule, BidiModule, CdkScrollableModule, MatFormFieldModule, MatOptionModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, MatOptionModule, MatSelect, MatSelectTrigger],
      exports: [BidiModule, CdkScrollableModule, MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/paginator.mjs
function MatPaginator_Conditional_2_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageSizeOption_r3 = ctx.$implicit;
    \u0275\u0275property("value", pageSizeOption_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pageSizeOption_r3, " ");
  }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 16, 0);
    \u0275\u0275listener("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1._changePageSize($event.value));
    });
    \u0275\u0275repeaterCreate(3, MatPaginator_Conditional_2_Conditional_3_For_4_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275listener("click", function MatPaginator_Conditional_2_Conditional_3_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const selectRef_r4 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(selectRef_r4.open());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("appearance", ctx_r1._formFieldAppearance)("color", ctx_r1.color);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pageSize)("disabled", ctx_r1.disabled);
    \u0275\u0275ariaProperty("aria-labelledby", ctx_r1._pageSizeLabelId);
    \u0275\u0275property("panelClass", ctx_r1.selectConfig.panelClass || "")("disableOptionCentering", ctx_r1.selectConfig.disableOptionCentering);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1._displayedPageSizeOptions);
  }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pageSize);
  }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, MatPaginator_Conditional_2_Conditional_3_Template, 6, 7, "mat-form-field", 14);
    \u0275\u0275conditionalCreate(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("id", ctx_r1._pageSizeLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1._intl.itemsPerPageLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._buttonClicked(0, ctx_r1._previousButtonsDisabled()));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("disabled", ctx_r1._previousButtonsDisabled())("tabindex", ctx_r1._previousButtonsDisabled() ? -1 : null);
    \u0275\u0275attribute("aria-label", ctx_r1._intl.firstPageLabel);
  }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._buttonClicked(ctx_r1.getNumberOfPages() - 1, ctx_r1._nextButtonsDisabled()));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.lastPageLabel)("matTooltipDisabled", ctx_r1._nextButtonsDisabled())("disabled", ctx_r1._nextButtonsDisabled())("tabindex", ctx_r1._nextButtonsDisabled() ? -1 : null);
    \u0275\u0275attribute("aria-label", ctx_r1._intl.lastPageLabel);
  }
}
var MatPaginatorIntl = class _MatPaginatorIntl {
  changes = new Subject();
  itemsPerPageLabel = "Items per page:";
  nextPageLabel = "Next page";
  previousPageLabel = "Previous page";
  firstPageLabel = "First page";
  lastPageLabel = "Last page";
  getRangeLabel = (page, pageSize, length) => {
    if (length == 0 || pageSize == 0) {
      return `0 of ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} \u2013 ${endIndex} of ${length}`;
  };
  static \u0275fac = function MatPaginatorIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginatorIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _MatPaginatorIntl,
    factory: _MatPaginatorIntl.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorIntl, [{
    type: Service
  }], null, null);
})();
var DEFAULT_PAGE_SIZE = 50;
var MAT_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS");
var MatPaginator = class _MatPaginator {
  _intl = inject(MatPaginatorIntl);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _formFieldAppearance;
  _pageSizeLabelId = inject(_IdGenerator).getId("mat-paginator-page-size-label-");
  _intlChanges;
  _isInitialized = false;
  _initializedStream = new ReplaySubject(1);
  color;
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = Math.max(value || 0, 0);
    this._changeDetectorRef.markForCheck();
  }
  _pageIndex = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value || 0;
    this._changeDetectorRef.markForCheck();
  }
  _length = 0;
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = Math.max(value || 0, 0);
    this._updateDisplayedPageSizeOptions();
  }
  _pageSize;
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }
  set pageSizeOptions(value) {
    this._pageSizeOptions = (value || []).map((p) => numberAttribute(p, 0));
    this._updateDisplayedPageSizeOptions();
  }
  _pageSizeOptions = [];
  hidePageSize = false;
  showFirstLastButtons = false;
  selectConfig = {};
  disabled = false;
  page = new EventEmitter();
  _displayedPageSizeOptions;
  initialized = this._initializedStream;
  constructor() {
    const _intl = this._intl;
    const defaults = inject(MAT_PAGINATOR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
    if (defaults) {
      const {
        pageSize,
        pageSizeOptions,
        hidePageSize,
        showFirstLastButtons
      } = defaults;
      if (pageSize != null) {
        this._pageSize = pageSize;
      }
      if (pageSizeOptions != null) {
        this._pageSizeOptions = pageSizeOptions;
      }
      if (hidePageSize != null) {
        this.hidePageSize = hidePageSize;
      }
      if (showFirstLastButtons != null) {
        this.showFirstLastButtons = showFirstLastButtons;
      }
    }
    this._formFieldAppearance = defaults?.formFieldAppearance || "outline";
  }
  ngOnInit() {
    this._isInitialized = true;
    this._updateDisplayedPageSizeOptions();
    this._initializedStream.next();
  }
  ngOnDestroy() {
    this._initializedStream.complete();
    this._intlChanges.unsubscribe();
  }
  nextPage() {
    if (this.hasNextPage()) {
      this._navigate(this.pageIndex + 1);
    }
  }
  previousPage() {
    if (this.hasPreviousPage()) {
      this._navigate(this.pageIndex - 1);
    }
  }
  firstPage() {
    if (this.hasPreviousPage()) {
      this._navigate(0);
    }
  }
  lastPage() {
    if (this.hasNextPage()) {
      this._navigate(this.getNumberOfPages() - 1);
    }
  }
  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  hasNextPage() {
    const maxPageIndex = this.getNumberOfPages() - 1;
    return this.pageIndex < maxPageIndex && this.pageSize != 0;
  }
  getNumberOfPages() {
    if (!this.pageSize) {
      return 0;
    }
    return Math.ceil(this.length / this.pageSize);
  }
  _changePageSize(pageSize) {
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;
    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this._emitPageEvent(previousPageIndex);
  }
  _nextButtonsDisabled() {
    return this.disabled || !this.hasNextPage();
  }
  _previousButtonsDisabled() {
    return this.disabled || !this.hasPreviousPage();
  }
  _updateDisplayedPageSizeOptions() {
    if (!this._isInitialized) {
      return;
    }
    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
    }
    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    }
    this._displayedPageSizeOptions.sort((a, b) => a - b);
    this._changeDetectorRef.markForCheck();
  }
  _emitPageEvent(previousPageIndex) {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }
  _navigate(index) {
    const previousIndex = this.pageIndex;
    if (index !== previousIndex) {
      this.pageIndex = index;
      this._emitPageEvent(previousIndex);
    }
  }
  _buttonClicked(targetIndex, isDisabled) {
    if (!isDisabled) {
      this._navigate(targetIndex);
    }
  }
  static \u0275fac = function MatPaginator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginator)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatPaginator,
    selectors: [["mat-paginator"]],
    hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
    inputs: {
      color: "color",
      pageIndex: [2, "pageIndex", "pageIndex", numberAttribute],
      length: [2, "length", "length", numberAttribute],
      pageSize: [2, "pageSize", "pageSize", numberAttribute],
      pageSizeOptions: "pageSizeOptions",
      hidePageSize: [2, "hidePageSize", "hidePageSize", booleanAttribute],
      showFirstLastButtons: [2, "showFirstLastButtons", "showFirstLastButtons", booleanAttribute],
      selectConfig: "selectConfig",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      page: "page"
    },
    exportAs: ["matPaginator"],
    decls: 14,
    vars: 14,
    consts: [["selectRef", ""], [1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-atomic", "true", "aria-live", "polite", "role", "status", 1, "mat-mdc-paginator-range-label"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["aria-hidden", "true", 1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], [1, "mat-mdc-paginator-touch-target", 3, "click"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
    template: function MatPaginator_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275conditionalCreate(2, MatPaginator_Conditional_2_Template, 5, 4, "div", 3);
        \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, MatPaginator_Conditional_6_Template, 3, 5, "button", 6);
        \u0275\u0275elementStart(7, "button", 7);
        \u0275\u0275listener("click", function MatPaginator_Template_button_click_7_listener() {
          return ctx._buttonClicked(ctx.pageIndex - 1, ctx._previousButtonsDisabled());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 8);
        \u0275\u0275element(9, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "button", 10);
        \u0275\u0275listener("click", function MatPaginator_Template_button_click_10_listener() {
          return ctx._buttonClicked(ctx.pageIndex + 1, ctx._nextButtonsDisabled());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 8);
        \u0275\u0275element(12, "path", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(13, MatPaginator_Conditional_13_Template, 3, 5, "button", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hidePageSize ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showFirstLastButtons ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("disabled", ctx._previousButtonsDisabled())("tabindex", ctx._previousButtonsDisabled() ? -1 : null);
        \u0275\u0275attribute("aria-label", ctx._intl.previousPageLabel);
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("disabled", ctx._nextButtonsDisabled())("tabindex", ctx._nextButtonsDisabled() ? -1 : null);
        \u0275\u0275attribute("aria-label", ctx._intl.nextPageLabel);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showFirstLastButtons ? 13 : -1);
      }
    },
    dependencies: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
    styles: [".mat-mdc-paginator {\n  display: block;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));\n  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));\n  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));\n  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));\n  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));\n  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));\n  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));\n  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);\n  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);\n}\n.mat-mdc-paginator .mat-mdc-select-value {\n  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));\n}\n.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.mat-mdc-paginator .mat-mdc-select {\n  line-height: 1.5;\n}\n\n.mat-mdc-paginator-outer-container {\n  display: flex;\n}\n\n.mat-mdc-paginator-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 8px;\n  flex-wrap: wrap;\n  width: 100%;\n  min-height: var(--mat-paginator-container-size, 56px);\n}\n\n.mat-mdc-paginator-page-size {\n  display: flex;\n  align-items: baseline;\n  margin-right: 8px;\n}\n[dir=rtl] .mat-mdc-paginator-page-size {\n  margin-right: 0;\n  margin-left: 8px;\n}\n\n.mat-mdc-paginator-page-size-label {\n  margin: 0 4px;\n}\n\n.mat-mdc-paginator-page-size-select {\n  margin: 0 4px;\n  width: var(--mat-paginator-page-size-select-width, 84px);\n}\n\n.mat-mdc-paginator-range-label {\n  margin: 0 32px 0 24px;\n}\n\n.mat-mdc-paginator-range-actions {\n  display: flex;\n  align-items: center;\n}\n\n.mat-mdc-paginator-icon {\n  display: inline-block;\n  width: 28px;\n  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {\n  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n[dir=rtl] .mat-mdc-paginator-icon {\n  transform: rotate(180deg);\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,\n  .mat-mdc-paginator-icon {\n    fill: currentColor;\n  }\n  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {\n    outline: solid 1px;\n  }\n  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {\n    color: GrayText;\n  }\n}\n.mat-mdc-paginator-touch-target {\n  display: var(--mat-paginator-touch-target-display, block);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: var(--mat-paginator-page-size-select-width, 84px);\n  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);\n  background-color: transparent;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginator, [{
    type: Component,
    args: [{
      selector: "mat-paginator",
      exportAs: "matPaginator",
      host: {
        "class": "mat-mdc-paginator",
        "role": "group"
      },
      encapsulation: ViewEncapsulation.None,
      imports: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
      template: '<div class="mat-mdc-paginator-outer-container">\n  <div class="mat-mdc-paginator-container">\n    @if (!hidePageSize) {\n      <div class="mat-mdc-paginator-page-size">\n        <div class="mat-mdc-paginator-page-size-label" [attr.id]="_pageSizeLabelId" aria-hidden="true">\n          {{_intl.itemsPerPageLabel}}\n        </div>\n\n        @if (_displayedPageSizeOptions.length > 1) {\n          <mat-form-field\n            [appearance]="_formFieldAppearance!"\n            [color]="color"\n            class="mat-mdc-paginator-page-size-select">\n            <mat-select\n              #selectRef\n              [value]="pageSize"\n              [disabled]="disabled"\n              [aria-labelledby]="_pageSizeLabelId"\n              [panelClass]="selectConfig.panelClass || \'\'"\n              [disableOptionCentering]="selectConfig.disableOptionCentering"\n              (selectionChange)="_changePageSize($event.value)"\n              hideSingleSelectionIndicator>\n              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {\n                <mat-option [value]="pageSizeOption">\n                  {{pageSizeOption}}\n                </mat-option>\n              }\n            </mat-select>\n          <div class="mat-mdc-paginator-touch-target" (click)="selectRef.open()"></div>\n          </mat-form-field>\n        }\n\n        @if (_displayedPageSizeOptions.length <= 1) {\n          <div class="mat-mdc-paginator-page-size-value">{{pageSize}}</div>\n        }\n      </div>\n    }\n\n    <div class="mat-mdc-paginator-range-actions">\n      <div class="mat-mdc-paginator-range-label" aria-atomic="true" aria-live="polite" role="status">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <!--\n      The buttons use `disabledInteractive` so that they can retain focus if they become disabled,\n      otherwise focus is moved to the document body. However, users should not be able to navigate\n      into these buttons, so `tabindex` is set to -1 when disabled.\n      -->\n\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-first"\n                (click)="_buttonClicked(0, _previousButtonsDisabled())"\n                [attr.aria-label]="_intl.firstPageLabel"\n                [matTooltip]="_intl.firstPageLabel"\n                [matTooltipDisabled]="_previousButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_previousButtonsDisabled()"\n                [tabindex]="_previousButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>\n          </svg>\n        </button>\n      }\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-previous"\n              (click)="_buttonClicked(pageIndex - 1, _previousButtonsDisabled())"\n              [attr.aria-label]="_intl.previousPageLabel"\n              [matTooltip]="_intl.previousPageLabel"\n              [matTooltipDisabled]="_previousButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_previousButtonsDisabled()"\n              [tabindex]="_previousButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n        </svg>\n      </button>\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-next"\n              (click)="_buttonClicked(pageIndex + 1, _nextButtonsDisabled())"\n              [attr.aria-label]="_intl.nextPageLabel"\n              [matTooltip]="_intl.nextPageLabel"\n              [matTooltipDisabled]="_nextButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_nextButtonsDisabled()"\n              [tabindex]="_nextButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n        </svg>\n      </button>\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-last"\n                (click)="_buttonClicked(getNumberOfPages() - 1, _nextButtonsDisabled())"\n                [attr.aria-label]="_intl.lastPageLabel"\n                [matTooltip]="_intl.lastPageLabel"\n                [matTooltipDisabled]="_nextButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_nextButtonsDisabled()"\n                [tabindex]="_nextButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>\n          </svg>\n        </button>\n      }\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-paginator {\n  display: block;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));\n  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));\n  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));\n  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));\n  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));\n  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));\n  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));\n  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);\n  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);\n}\n.mat-mdc-paginator .mat-mdc-select-value {\n  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));\n}\n.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.mat-mdc-paginator .mat-mdc-select {\n  line-height: 1.5;\n}\n\n.mat-mdc-paginator-outer-container {\n  display: flex;\n}\n\n.mat-mdc-paginator-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 8px;\n  flex-wrap: wrap;\n  width: 100%;\n  min-height: var(--mat-paginator-container-size, 56px);\n}\n\n.mat-mdc-paginator-page-size {\n  display: flex;\n  align-items: baseline;\n  margin-right: 8px;\n}\n[dir=rtl] .mat-mdc-paginator-page-size {\n  margin-right: 0;\n  margin-left: 8px;\n}\n\n.mat-mdc-paginator-page-size-label {\n  margin: 0 4px;\n}\n\n.mat-mdc-paginator-page-size-select {\n  margin: 0 4px;\n  width: var(--mat-paginator-page-size-select-width, 84px);\n}\n\n.mat-mdc-paginator-range-label {\n  margin: 0 32px 0 24px;\n}\n\n.mat-mdc-paginator-range-actions {\n  display: flex;\n  align-items: center;\n}\n\n.mat-mdc-paginator-icon {\n  display: inline-block;\n  width: 28px;\n  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {\n  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n[dir=rtl] .mat-mdc-paginator-icon {\n  transform: rotate(180deg);\n}\n\n@media (forced-colors: active) {\n  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,\n  .mat-mdc-paginator-icon {\n    fill: currentColor;\n  }\n  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {\n    outline: solid 1px;\n  }\n  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {\n    color: GrayText;\n  }\n}\n.mat-mdc-paginator-touch-target {\n  display: var(--mat-paginator-touch-target-display, block);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: var(--mat-paginator-page-size-select-width, 84px);\n  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);\n  background-color: transparent;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    pageIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    length: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSizeOptions: [{
      type: Input
    }],
    hidePageSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectConfig: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    page: [{
      type: Output
    }]
  });
})();
var MatPaginatorModule = class _MatPaginatorModule {
  static \u0275fac = function MatPaginatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginatorModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatPaginatorModule,
    imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
    exports: [MatPaginator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
      exports: [MatPaginator]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/sort.mjs
var _c04 = ["*", [["", "matSortHeaderIcon", ""]]];
var _c13 = ["*", "[matSortHeaderIcon]"];
function MatSortHeader_Conditional_3_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 3);
    \u0275\u0275domElement(1, "path", 4);
    \u0275\u0275domElementEnd();
  }
}
function MatSortHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275projection(1, 1, null, MatSortHeader_Conditional_3_ProjectionFallback_1_Template, 2, 0);
    \u0275\u0275domElementEnd();
  }
}
function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}
var MAT_SORT_DEFAULT_OPTIONS = new InjectionToken("MAT_SORT_DEFAULT_OPTIONS");
var MatSort = class _MatSort {
  _defaultOptions;
  _initializedStream = new ReplaySubject(1);
  sortables = /* @__PURE__ */ new Map();
  _stateChanges = new Subject();
  active;
  start = "asc";
  get direction() {
    return this._direction;
  }
  set direction(direction) {
    if (direction && direction !== "asc" && direction !== "desc" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortInvalidDirectionError(direction);
    }
    this._direction = direction;
  }
  _direction = "";
  disableClear;
  disabled = false;
  sortChange = new EventEmitter();
  initialized = this._initializedStream;
  constructor(_defaultOptions) {
    this._defaultOptions = _defaultOptions;
  }
  register(sortable) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }
      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }
    this.sortables.set(sortable.id, sortable);
  }
  deregister(sortable) {
    this.sortables.delete(sortable.id);
  }
  sort(sortable) {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }
    this.sortChange.emit({
      active: this.active,
      direction: this.direction
    });
  }
  getNextSortDirection(sortable) {
    if (!sortable) {
      return "";
    }
    const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }
  ngOnInit() {
    this._initializedStream.next();
  }
  ngOnChanges() {
    this._stateChanges.next();
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._initializedStream.complete();
  }
  static \u0275fac = function MatSort_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSort)(\u0275\u0275directiveInject(MAT_SORT_DEFAULT_OPTIONS, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSort,
    selectors: [["", "matSort", ""]],
    hostAttrs: [1, "mat-sort"],
    inputs: {
      active: [0, "matSortActive", "active"],
      start: [0, "matSortStart", "start"],
      direction: [0, "matSortDirection", "direction"],
      disableClear: [2, "matSortDisableClear", "disableClear", booleanAttribute],
      disabled: [2, "matSortDisabled", "disabled", booleanAttribute]
    },
    outputs: {
      sortChange: "matSortChange"
    },
    exportAs: ["matSort"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSort, [{
    type: Directive,
    args: [{
      selector: "[matSort]",
      exportAs: "matSort",
      host: {
        "class": "mat-sort"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }], {
    active: [{
      type: Input,
      args: ["matSortActive"]
    }],
    start: [{
      type: Input,
      args: ["matSortStart"]
    }],
    direction: [{
      type: Input,
      args: ["matSortDirection"]
    }],
    disableClear: [{
      type: Input,
      args: [{
        alias: "matSortDisableClear",
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matSortDisabled",
        transform: booleanAttribute
      }]
    }],
    sortChange: [{
      type: Output,
      args: ["matSortChange"]
    }]
  });
})();
function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ["asc", "desc"];
  if (start == "desc") {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push("");
  }
  return sortOrder;
}
var MatSortHeader = class _MatSortHeader {
  _sort = inject(MatSort, {
    optional: true
  });
  _columnDef = inject(CdkColumnDef, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _focusMonitor = inject(FocusMonitor);
  _elementRef = inject(ElementRef);
  _ariaDescriber = inject(AriaDescriber, {
    optional: true
  });
  _renderChanges;
  _animationsDisabled = _animationsDisabled();
  _recentlyCleared = signal(null, ...ngDevMode ? [{
    debugName: "_recentlyCleared"
  }] : []);
  _sortButton;
  id;
  arrowPosition = "after";
  start;
  disabled = false;
  get sortActionDescription() {
    return this._sortActionDescription;
  }
  set sortActionDescription(value) {
    this._updateSortActionDescription(value);
  }
  _sortActionDescription = "Sort";
  disableClear;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const defaultOptions = inject(MAT_SORT_DEFAULT_OPTIONS, {
      optional: true
    });
    if (!this._sort && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }
    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }
  }
  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    }
    this._sort.register(this);
    this._renderChanges = merge(this._sort._stateChanges, this._sort.sortChange).subscribe(() => this._changeDetectorRef.markForCheck());
    this._sortButton = this._elementRef.nativeElement.querySelector(".mat-sort-header-container");
    this._updateSortActionDescription(this._sortActionDescription);
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe(() => {
      Promise.resolve().then(() => this._recentlyCleared.set(null));
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._sort.deregister(this);
    this._renderChanges?.unsubscribe();
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
    }
  }
  _toggleOnInteraction() {
    if (!this._isDisabled()) {
      const wasSorted = this._isSorted();
      const prevDirection = this._sort.direction;
      this._sort.sort(this);
      this._recentlyCleared.set(wasSorted && !this._isSorted() ? prevDirection : null);
    }
  }
  _handleKeydown(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      event.preventDefault();
      this._toggleOnInteraction();
    }
  }
  _isSorted() {
    return this._sort.active == this.id && (this._sort.direction === "asc" || this._sort.direction === "desc");
  }
  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }
  _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return "none";
    }
    return this._sort.direction == "asc" ? "ascending" : "descending";
  }
  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }
  _updateSortActionDescription(newDescription) {
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      this._ariaDescriber?.describe(this._sortButton, newDescription);
    }
    this._sortActionDescription = newDescription;
  }
  static \u0275fac = function MatSortHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSortHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSortHeader,
    selectors: [["", "mat-sort-header", ""]],
    hostAttrs: [1, "mat-sort-header"],
    hostVars: 3,
    hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatSortHeader_click_HostBindingHandler() {
          return ctx._toggleOnInteraction();
        })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
          return ctx._recentlyCleared.set(null);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-sort", ctx._getAriaSortAttribute());
        \u0275\u0275classProp("mat-sort-header-disabled", ctx._isDisabled());
      }
    },
    inputs: {
      id: [0, "mat-sort-header", "id"],
      arrowPosition: "arrowPosition",
      start: "start",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      sortActionDescription: "sortActionDescription",
      disableClear: [2, "disableClear", "disableClear", booleanAttribute]
    },
    exportAs: ["matSortHeader"],
    ngContentSelectors: _c13,
    decls: 4,
    vars: 17,
    consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], ["viewBox", "0 -960 960 960", "focusable", "false", "aria-hidden", "true"], ["d", "M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],
    template: function MatSortHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c04);
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(3, MatSortHeader_Conditional_3_Template, 3, 0, "div", 2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before")("mat-sort-header-descending", ctx._sort.direction === "desc")("mat-sort-header-ascending", ctx._sort.direction === "asc")("mat-sort-header-recently-cleared-ascending", ctx._recentlyCleared() === "asc")("mat-sort-header-recently-cleared-descending", ctx._recentlyCleared() === "desc")("mat-sort-header-animations-disabled", ctx._animationsDisabled);
        \u0275\u0275attribute("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx._renderArrow() ? 3 : -1);
      }
    },
    styles: [".mat-sort-header {\n  cursor: pointer;\n}\n\n.mat-sort-header-disabled {\n  cursor: default;\n}\n\n.mat-sort-header-container {\n  display: flex;\n  align-items: center;\n  letter-spacing: normal;\n  outline: 0;\n}\n[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {\n  border-bottom: solid 1px currentColor;\n}\n.mat-sort-header-container::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-sort-header-content {\n  display: flex;\n  align-items: center;\n}\n\n.mat-sort-header-position-before {\n  flex-direction: row-reverse;\n}\n\n@keyframes _mat-sort-header-recently-cleared-ascending {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(-25%);\n    opacity: 0;\n  }\n}\n@keyframes _mat-sort-header-recently-cleared-descending {\n  from {\n    transform: translateY(0) rotate(180deg);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(25%) rotate(180deg);\n    opacity: 0;\n  }\n}\n.mat-sort-header-arrow {\n  height: 12px;\n  width: 12px;\n  position: relative;\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  overflow: visible;\n  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));\n}\n.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {\n  opacity: 0.54;\n}\n.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {\n  opacity: 1;\n}\n.mat-sort-header-descending .mat-sort-header-arrow {\n  transform: rotate(180deg);\n}\n.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {\n  transform: translateY(-25%);\n}\n.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {\n  transition: none;\n  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {\n  transition: none;\n  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.mat-sort-header-animations-disabled .mat-sort-header-arrow {\n  transition-duration: 0ms;\n  animation-duration: 0ms;\n}\n.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {\n  width: 24px;\n  height: 24px;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -12px 0 0 -12px;\n  transform: translateZ(0);\n}\n.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {\n  margin: 0 0 0 6px;\n}\n.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {\n  margin: 0 6px 0 0;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeader, [{
    type: Component,
    args: [{
      selector: "[mat-sort-header]",
      exportAs: "matSortHeader",
      host: {
        "class": "mat-sort-header",
        "(click)": "_toggleOnInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "(mouseleave)": "_recentlyCleared.set(null)",
        "[attr.aria-sort]": "_getAriaSortAttribute()",
        "[class.mat-sort-header-disabled]": "_isDisabled()"
      },
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  We set the \`tabindex\` on an element inside the table header, rather than the header itself,
  because of a bug in NVDA where having a \`tabindex\` on a \`th\` breaks keyboard navigation in the
  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both
  be focusable, and have screen readers read out its \`aria-sort\` state. We prefer this approach
  over having a button with an \`aria-label\` inside the header, because the button's \`aria-label\`
  will be read out as the user is navigating the table's cell (see #13012).

  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid
-->
<div class="mat-sort-header-container mat-focus-indicator"
     [class.mat-sort-header-sorted]="_isSorted()"
     [class.mat-sort-header-position-before]="arrowPosition === 'before'"
     [class.mat-sort-header-descending]="_sort.direction === 'desc'"
     [class.mat-sort-header-ascending]="_sort.direction === 'asc'"
     [class.mat-sort-header-recently-cleared-ascending]="_recentlyCleared() === 'asc'"
     [class.mat-sort-header-recently-cleared-descending]="_recentlyCleared() === 'desc'"
     [class.mat-sort-header-animations-disabled]="_animationsDisabled"
     [attr.tabindex]="_isDisabled() ? null : 0"
     [attr.role]="_isDisabled() ? null : 'button'">

  <!--
    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large
    number of screenshot diff failures. It should be removed eventually. Note that the difference
    isn't visible with a shorter header, but once it breaks up into multiple lines, this element
    causes it to be center-aligned, whereas removing it will keep the text to the left.
  -->
  <div class="mat-sort-header-content">
    <ng-content></ng-content>
  </div>

  <!-- Disable animations while a current animation is running -->
  @if (_renderArrow()) {
    <div class="mat-sort-header-arrow">
      <ng-content select="[matSortHeaderIcon]">
        <svg viewBox="0 -960 960 960" focusable="false" aria-hidden="true">
          <path d="M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"/>
        </svg>
      </ng-content>
    </div>
  }
</div>
`,
      styles: [".mat-sort-header {\n  cursor: pointer;\n}\n\n.mat-sort-header-disabled {\n  cursor: default;\n}\n\n.mat-sort-header-container {\n  display: flex;\n  align-items: center;\n  letter-spacing: normal;\n  outline: 0;\n}\n[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {\n  border-bottom: solid 1px currentColor;\n}\n.mat-sort-header-container::before {\n  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);\n}\n\n.mat-sort-header-content {\n  display: flex;\n  align-items: center;\n}\n\n.mat-sort-header-position-before {\n  flex-direction: row-reverse;\n}\n\n@keyframes _mat-sort-header-recently-cleared-ascending {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(-25%);\n    opacity: 0;\n  }\n}\n@keyframes _mat-sort-header-recently-cleared-descending {\n  from {\n    transform: translateY(0) rotate(180deg);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(25%) rotate(180deg);\n    opacity: 0;\n  }\n}\n.mat-sort-header-arrow {\n  height: 12px;\n  width: 12px;\n  position: relative;\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  overflow: visible;\n  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));\n}\n.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {\n  opacity: 0.54;\n}\n.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {\n  opacity: 1;\n}\n.mat-sort-header-descending .mat-sort-header-arrow {\n  transform: rotate(180deg);\n}\n.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {\n  transform: translateY(-25%);\n}\n.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {\n  transition: none;\n  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {\n  transition: none;\n  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n.mat-sort-header-animations-disabled .mat-sort-header-arrow {\n  transition-duration: 0ms;\n  animation-duration: 0ms;\n}\n.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {\n  width: 24px;\n  height: 24px;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -12px 0 0 -12px;\n  transform: translateZ(0);\n}\n.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {\n  margin: 0 0 0 6px;\n}\n.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {\n  margin: 0 6px 0 0;\n}\n"]
    }]
  }], () => [], {
    id: [{
      type: Input,
      args: ["mat-sort-header"]
    }],
    arrowPosition: [{
      type: Input
    }],
    start: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sortActionDescription: [{
      type: Input
    }],
    disableClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatSortModule = class _MatSortModule {
  static \u0275fac = function MatSortModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSortModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSortModule,
    imports: [MatSort, MatSortHeader],
    exports: [MatSort, MatSortHeader, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortModule, [{
    type: NgModule,
    args: [{
      imports: [MatSort, MatSortHeader],
      exports: [MatSort, MatSortHeader, BidiModule]
    }]
  }], null, null);
})();
var MatSortHeaderIntl = class _MatSortHeaderIntl {
  changes = new Subject();
  static \u0275fac = function MatSortHeaderIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSortHeaderIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _MatSortHeaderIntl,
    factory: _MatSortHeaderIntl.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeaderIntl, [{
    type: Service
  }], null, null);
})();

// src/_shared/table/tbl-paginator/tbl-paginator.ts
var _c05 = () => [10, 20, 25, 50, 100, 200, 250, 500, 1e3];
function TblPaginatorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-paginator", 0);
    \u0275\u0275listener("page", function TblPaginatorComponent_Conditional_0_Template_mat_paginator_page_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.lb?.paginate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "mat-paginator", 1);
    \u0275\u0275listener("page", function TblPaginatorComponent_Conditional_0_Template_mat_paginator_page_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.lb?.paginate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("length", ctx_r1.lb?.httpResPaginate?.count)("pageIndex", ctx_r1.lb.httpReqPaginate?.body?.pageNo - 1)("pageSize", ctx_r1.lb?.httpReqPaginate?.body?.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(7, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r1.lb?.httpResPaginate?.count)("pageIndex", ctx_r1.lb.httpReqPaginate?.body?.pageNo - 1)("pageSize", ctx_r1.lb?.httpReqPaginate?.body?.pageSize);
  }
}
var TblPaginatorComponent = class _TblPaginatorComponent {
  _template;
  lb;
  constructor(_template) {
    this._template = _template;
  }
  static \u0275fac = function TblPaginatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TblPaginatorComponent)(\u0275\u0275directiveInject(TemplateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TblPaginatorComponent, selectors: [["tbl-paginator"]], inputs: { lb: "lb" }, standalone: false, decls: 1, vars: 1, consts: [["showFirstLastButtons", "", 1, "d-none", "d-md-block", 3, "page", "length", "pageIndex", "pageSize", "pageSizeOptions"], ["showFirstLastButtons", "", 1, "d-sm-block", "d-md-none", 3, "page", "length", "pageIndex", "pageSize"]], template: function TblPaginatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TblPaginatorComponent_Conditional_0_Template, 2, 8);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.lb?.httpReqPaginate?.body?.pageNo ? 0 : -1);
    }
  }, dependencies: [MatPaginator], styles: ["/* angular:styles/component:scss;f3b5d938623ce1712d9e3d48b279ef61162690ed9e095868277cb931a5f8bcbe;C:/Codez/edu-fe-admin/src/_shared/table/tbl-paginator/tbl-paginator.ts */\n.mat-mdc-paginator-container {\n  padding: 0px !important;\n}\n.mat-mdc-paginator-range-label {\n  margin: 0px 5px 0px 5px !important;\n}\n.mat-mdc-paginator {\n  background: transparent !important;\n}\n.mat-mdc-paginator-page-size mat-form-field {\n  margin: 0px !important;\n}\n/*# sourceMappingURL=tbl-paginator-LIMCZR3Y.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TblPaginatorComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "tbl-paginator", template: '@if(lb?.httpReqPaginate?.body?.pageNo){\r\n<mat-paginator\r\n  [length]="lb?.httpResPaginate?.count"\r\n  [pageIndex]="lb.httpReqPaginate?.body?.pageNo - 1"\r\n  [pageSize]="lb?.httpReqPaginate?.body?.pageSize"\r\n  (page)="lb?.paginate($event)"\r\n  [pageSizeOptions]="[10, 20, 25, 50, 100, 200, 250, 500, 1000]"\r\n  showFirstLastButtons\r\n  class="d-none d-md-block"\r\n></mat-paginator>\r\n<mat-paginator\r\n  [length]="lb?.httpResPaginate?.count"\r\n  [pageIndex]="lb.httpReqPaginate?.body?.pageNo - 1"\r\n  [pageSize]="lb?.httpReqPaginate?.body?.pageSize"\r\n  (page)="lb?.paginate($event)"\r\n  showFirstLastButtons\r\n  class="d-sm-block d-md-none"\r\n></mat-paginator>\r\n}\r\n\r\n', styles: ["/* angular:styles/component:scss;f3b5d938623ce1712d9e3d48b279ef61162690ed9e095868277cb931a5f8bcbe;C:/Codez/edu-fe-admin/src/_shared/table/tbl-paginator/tbl-paginator.ts */\n.mat-mdc-paginator-container {\n  padding: 0px !important;\n}\n.mat-mdc-paginator-range-label {\n  margin: 0px 5px 0px 5px !important;\n}\n.mat-mdc-paginator {\n  background: transparent !important;\n}\n.mat-mdc-paginator-page-size mat-form-field {\n  margin: 0px !important;\n}\n/*# sourceMappingURL=tbl-paginator-LIMCZR3Y.css.map */\n"] }]
  }], () => [{ type: TemplateService }], { lb: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TblPaginatorComponent, { className: "TblPaginatorComponent", filePath: "_shared/table/tbl-paginator/tbl-paginator.ts", lineNumber: 27 });
})();

// src/_shared/utils/btn/btn.ts
var Btn = class _Btn extends BaseClassSrvc {
  icon = "icon";
  lbl = "Button";
  value = "value";
  clickz = new EventEmitter();
  classz = "";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Btn_BaseFactory;
    return function Btn_Factory(__ngFactoryType__) {
      return (\u0275Btn_BaseFactory || (\u0275Btn_BaseFactory = \u0275\u0275getInheritedFactory(_Btn)))(__ngFactoryType__ || _Btn);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Btn, selectors: [["btn"]], hostVars: 2, hostBindings: function Btn_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap(ctx.classz);
    }
  }, inputs: { icon: "icon", lbl: "lbl", value: "value", classz: [0, "class", "classz"] }, outputs: { clickz: "clickz" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 5, consts: [["mat-raised-button", "", "type", "button", "color", "primary", 1, "me-2", "d-none", "d-lg-inline-flex", 3, "click"], [1, "me-2"], ["mat-mini-fab", "", "color", "primary", "type", "button", 1, "me-2", "d-inline-flex", "d-lg-none", 3, "click"]], template: function Btn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function Btn_Template_button_click_0_listener() {
        return ctx.clickz.emit(ctx.value);
      });
      \u0275\u0275elementStart(1, "mat-icon", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 2);
      \u0275\u0275listener("click", function Btn_Template_button_click_6_listener() {
        return ctx.clickz.emit(ctx.value);
      });
      \u0275\u0275elementStart(7, "mat-icon");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.icon);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, ctx.lbl));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.icon);
    }
  }, dependencies: [MatButton, MatMiniFabButton, MatIcon, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Btn, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "btn", template: '<button mat-raised-button type="button" color="primary" class="me-2 d-none d-lg-inline-flex" (click)="clickz.emit(value)">\r\n  <mat-icon class="me-2">{{ icon }}</mat-icon>\r\n  <span>{{ lbl | translate }}</span>\r\n</button>\r\n<button mat-mini-fab color="primary" class="me-2 d-inline-flex d-lg-none" type="button" (click)="clickz.emit(value)">\r\n  <mat-icon>{{icon}}</mat-icon>\r\n</button>\r\n' }]
  }], null, { icon: [{
    type: Input
  }], lbl: [{
    type: Input
  }], value: [{
    type: Input
  }], clickz: [{
    type: Output
  }], classz: [{
    type: Input,
    args: ["class"]
  }, {
    type: HostBinding,
    args: ["class"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Btn, { className: "Btn", filePath: "_shared/utils/btn/btn.ts", lineNumber: 12 });
})();

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/progress-spinner.mjs
var _c06 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "circle", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("viewBox", ctx_r0._viewBox());
    \u0275\u0275advance();
    \u0275\u0275styleProp("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
    \u0275\u0275attribute("r", ctx_r0._circleRadius());
  }
}
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: () => ({
    diameter: BASE_SIZE
  })
});
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var MatProgressSpinner = class _MatProgressSpinner {
  _elementRef = inject(ElementRef);
  _noopAnimations;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  _determinateCircle;
  constructor() {
    const defaults = inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS);
    const animationsState = _getAnimationsState();
    const element = this._elementRef.nativeElement;
    this._noopAnimations = animationsState === "di-disabled" && !!defaults && !defaults._forceAnimations;
    this.mode = element.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
    if (!this._noopAnimations && animationsState === "reduced-motion") {
      element.classList.add("mat-progress-spinner-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
  }
  mode;
  get value() {
    return this.mode === "determinate" ? this._value : 0;
  }
  set value(v) {
    this._value = Math.max(0, Math.min(100, v || 0));
  }
  _value = 0;
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = size || 0;
  }
  _diameter = BASE_SIZE;
  get strokeWidth() {
    return this._strokeWidth ?? this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = value || 0;
  }
  _strokeWidth;
  _circleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  _viewBox() {
    const viewBox = this._circleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  _strokeCircumference() {
    return 2 * Math.PI * this._circleRadius();
  }
  _strokeDashOffset() {
    if (this.mode === "determinate") {
      return this._strokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  _circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  static \u0275fac = function MatProgressSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressSpinner,
    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
    viewQuery: function MatProgressSpinner_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._determinateCircle = _t.first);
      }
    },
    hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
    hostVars: 18,
    hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275styleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--mat-progress-spinner-size", ctx.diameter + "px")("--mat-progress-spinner-active-indicator-width", ctx.diameter + "px");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
      }
    },
    inputs: {
      color: "color",
      mode: "mode",
      value: [2, "value", "value", numberAttribute],
      diameter: [2, "diameter", "diameter", numberAttribute],
      strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute]
    },
    exportAs: ["matProgressSpinner"],
    decls: 14,
    vars: 11,
    consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
    template: function MatProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 2, 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 3);
        \u0275\u0275element(5, "circle", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275elementContainer(9, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275elementContainer(11, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275elementContainer(13, 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const circle_r2 = \u0275\u0275reference(1);
        \u0275\u0275advance(4);
        \u0275\u0275attribute("viewBox", ctx._viewBox());
        \u0275\u0275advance();
        \u0275\u0275styleProp("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
        \u0275\u0275attribute("r", ctx._circleRadius());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
      }
    },
    dependencies: [NgTemplateOutlet],
    styles: [".mat-mdc-progress-spinner {\n  --mat-progress-spinner-animation-multiplier: 1;\n  display: block;\n  overflow: hidden;\n  line-height: 0;\n  position: relative;\n  direction: ltr;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-progress-spinner circle {\n  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);\n}\n.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {\n  transition: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {\n  animation: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {\n  stroke-dasharray: 0 !important;\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {\n    stroke: currentColor;\n    stroke: CanvasText;\n  }\n}\n\n.mat-progress-spinner-reduced-motion {\n  --mat-progress-spinner-animation-multiplier: 1.25;\n}\n\n.mdc-circular-progress__determinate-container,\n.mdc-circular-progress__indeterminate-circle-graphic,\n.mdc-circular-progress__indeterminate-container,\n.mdc-circular-progress__spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.mdc-circular-progress__determinate-container {\n  transform: rotate(-90deg);\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {\n  opacity: 0;\n}\n\n.mdc-circular-progress__indeterminate-container {\n  font-size: 0;\n  letter-spacing: 0;\n  white-space: nowrap;\n  opacity: 0;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {\n  opacity: 1;\n  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;\n}\n\n.mdc-circular-progress__determinate-circle-graphic,\n.mdc-circular-progress__indeterminate-circle-graphic {\n  fill: transparent;\n}\n\n.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n    stroke: CanvasText;\n  }\n}\n\n.mdc-circular-progress__determinate-circle {\n  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-circular-progress__gap-patch {\n  position: absolute;\n  top: 0;\n  left: 47.5%;\n  box-sizing: border-box;\n  width: 5%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -900%;\n  width: 2000%;\n  transform: rotate(180deg);\n}\n.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {\n  width: 200%;\n}\n.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -100%;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.mdc-circular-progress__circle-clipper {\n  display: inline-flex;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {\n  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@keyframes mdc-circular-progress-container-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes mdc-circular-progress-spinner-layer-rotate {\n  12.5% {\n    transform: rotate(135deg);\n  }\n  25% {\n    transform: rotate(270deg);\n  }\n  37.5% {\n    transform: rotate(405deg);\n  }\n  50% {\n    transform: rotate(540deg);\n  }\n  62.5% {\n    transform: rotate(675deg);\n  }\n  75% {\n    transform: rotate(810deg);\n  }\n  87.5% {\n    transform: rotate(945deg);\n  }\n  100% {\n    transform: rotate(1080deg);\n  }\n}\n@keyframes mdc-circular-progress-left-spin {\n  from {\n    transform: rotate(265deg);\n  }\n  50% {\n    transform: rotate(130deg);\n  }\n  to {\n    transform: rotate(265deg);\n  }\n}\n@keyframes mdc-circular-progress-right-spin {\n  from {\n    transform: rotate(-265deg);\n  }\n  50% {\n    transform: rotate(-130deg);\n  }\n  to {\n    transform: rotate(-265deg);\n  }\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinner, [{
    type: Component,
    args: [{
      selector: "mat-progress-spinner, mat-spinner",
      exportAs: "matProgressSpinner",
      host: {
        "role": "progressbar",
        "class": "mat-mdc-progress-spinner mdc-circular-progress",
        "tabindex": "-1",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[style.--mat-progress-spinner-size]": 'diameter + "px"',
        "[style.--mat-progress-spinner-active-indicator-width]": 'diameter + "px"',
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      },
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet],
      template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-progress-spinner {\n  --mat-progress-spinner-animation-multiplier: 1;\n  display: block;\n  overflow: hidden;\n  line-height: 0;\n  position: relative;\n  direction: ltr;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n.mat-mdc-progress-spinner circle {\n  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);\n}\n.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {\n  transition: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {\n  animation: none !important;\n}\n.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {\n  stroke-dasharray: 0 !important;\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {\n    stroke: currentColor;\n    stroke: CanvasText;\n  }\n}\n\n.mat-progress-spinner-reduced-motion {\n  --mat-progress-spinner-animation-multiplier: 1.25;\n}\n\n.mdc-circular-progress__determinate-container,\n.mdc-circular-progress__indeterminate-circle-graphic,\n.mdc-circular-progress__indeterminate-container,\n.mdc-circular-progress__spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.mdc-circular-progress__determinate-container {\n  transform: rotate(-90deg);\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {\n  opacity: 0;\n}\n\n.mdc-circular-progress__indeterminate-container {\n  font-size: 0;\n  letter-spacing: 0;\n  white-space: nowrap;\n  opacity: 0;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {\n  opacity: 1;\n  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;\n}\n\n.mdc-circular-progress__determinate-circle-graphic,\n.mdc-circular-progress__indeterminate-circle-graphic {\n  fill: transparent;\n}\n\n.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));\n}\n@media (forced-colors: active) {\n  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,\n  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {\n    stroke: CanvasText;\n  }\n}\n\n.mdc-circular-progress__determinate-circle {\n  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdc-circular-progress__gap-patch {\n  position: absolute;\n  top: 0;\n  left: 47.5%;\n  box-sizing: border-box;\n  width: 5%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -900%;\n  width: 2000%;\n  transform: rotate(180deg);\n}\n.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {\n  width: 200%;\n}\n.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  left: -100%;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {\n  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.mdc-circular-progress__circle-clipper {\n  display: inline-flex;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {\n  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@keyframes mdc-circular-progress-container-rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes mdc-circular-progress-spinner-layer-rotate {\n  12.5% {\n    transform: rotate(135deg);\n  }\n  25% {\n    transform: rotate(270deg);\n  }\n  37.5% {\n    transform: rotate(405deg);\n  }\n  50% {\n    transform: rotate(540deg);\n  }\n  62.5% {\n    transform: rotate(675deg);\n  }\n  75% {\n    transform: rotate(810deg);\n  }\n  87.5% {\n    transform: rotate(945deg);\n  }\n  100% {\n    transform: rotate(1080deg);\n  }\n}\n@keyframes mdc-circular-progress-left-spin {\n  from {\n    transform: rotate(265deg);\n  }\n  50% {\n    transform: rotate(130deg);\n  }\n  to {\n    transform: rotate(265deg);\n  }\n}\n@keyframes mdc-circular-progress-right-spin {\n  from {\n    transform: rotate(-265deg);\n  }\n  50% {\n    transform: rotate(-130deg);\n  }\n  to {\n    transform: rotate(-265deg);\n  }\n}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _determinateCircle: [{
      type: ViewChild,
      args: ["determinateSpinner"]
    }],
    mode: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    diameter: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var MatSpinner = MatProgressSpinner;
var MatProgressSpinnerModule = class _MatProgressSpinnerModule {
  static \u0275fac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressSpinnerModule,
    imports: [MatProgressSpinner, MatSpinner],
    exports: [MatProgressSpinner, MatSpinner, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressSpinner, MatSpinner],
      exports: [MatProgressSpinner, MatSpinner, BidiModule]
    }]
  }], null, null);
})();

// src/_shared/table/tbl-actions-row/tbl-actions-row.ts
var _c07 = (a0, a1) => [a0, a1];
var TblActionsRow = class _TblActionsRow {
  _template;
  record;
  constructor(_template) {
    this._template = _template;
  }
  ngOnInit() {
  }
  static \u0275fac = function TblActionsRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TblActionsRow)(\u0275\u0275directiveInject(TemplateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TblActionsRow, selectors: [["tbl-actions-row"]], inputs: { record: "record" }, standalone: false, decls: 41, vars: 16, consts: [["menu", "matMenu"], ["mat-icon-button", "", "type", "button", 2, "height", "35px", "overflow", "visible", 3, "matMenuTriggerFor"], [1, "text-primary"], ["type", "button"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "me-2"], ["mat-menu-item", "", "color", "primary", 1, "me-1", 3, "routerLink"], [1, "me-2", 3, "ngClass"], [3, "ngClass"], [1, "me-2", "text-danger"], [1, "text-danger"]], template: function TblActionsRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 1)(1, "mat-icon", 2);
      \u0275\u0275text(2, "more_vert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "mat-menu", 3, 0)(5, "button", 4);
      \u0275\u0275listener("click", function TblActionsRow_Template_button_click_5_listener() {
        return ctx.record.isShow = !ctx.record.isShow;
      });
      \u0275\u0275elementStart(6, "mat-icon", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "a", 6)(11, "mat-icon", 5);
      \u0275\u0275text(12, "edit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 4);
      \u0275\u0275listener("click", function TblActionsRow_Template_button_click_16_listener() {
        return ctx._template.lb.copyItemJSON(ctx.record);
      });
      \u0275\u0275elementStart(17, "mat-icon", 5);
      \u0275\u0275text(18, "content_copy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Copy JSON");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 4);
      \u0275\u0275listener("click", function TblActionsRow_Template_button_click_21_listener() {
        return ctx._template.lb.exportItemToCSV(ctx.record);
      });
      \u0275\u0275elementStart(22, "mat-icon", 5);
      \u0275\u0275text(23, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Export to CSV");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 4);
      \u0275\u0275listener("click", function TblActionsRow_Template_button_click_26_listener() {
        return ctx._template.lb.updateStatus(ctx.record);
      });
      \u0275\u0275elementStart(27, "mat-icon", 7);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 8);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "button", 4);
      \u0275\u0275listener("click", function TblActionsRow_Template_button_click_31_listener() {
        return ctx._template.lb.updateDelete(ctx.record);
      });
      \u0275\u0275elementStart(32, "mat-icon", 9);
      \u0275\u0275text(33, "delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 10);
      \u0275\u0275text(35, "Delete Soft");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "button", 4);
      \u0275\u0275listener("click", function TblActionsRow_Template_button_click_36_listener() {
        return ctx._template.lb.Delete(ctx.record);
      });
      \u0275\u0275elementStart(37, "mat-icon", 9);
      \u0275\u0275text(38, "delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 10);
      \u0275\u0275text(40, "Delete");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const menu_r1 = \u0275\u0275reference(4);
      \u0275\u0275property("matMenuTriggerFor", menu_r1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(!ctx.record?.isShow ? "visibility" : "visibility_off");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(!ctx.record?.isShow ? "Show" : "Hide");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(13, _c07, ctx._template.linkUpdate, ctx.record?.id));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 11, "Edit"));
      \u0275\u0275advance(13);
      \u0275\u0275property("ngClass", \u0275\u0275interpolate(ctx.record.status === "Active" ? "text-success" : "text-warning"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.record.status === "Active" ? "toggle_on" : "toggle_off", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275interpolate(ctx.record.status === "Active" ? "text-success" : "text-warning"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.record.status);
    }
  }, dependencies: [NgClass, RouterLink, MatIconButton, MatIcon, MatMenu, MatMenuItem, MatMenuTrigger, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TblActionsRow, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "tbl-actions-row", template: `<!--\r
<button mat-mini-fab color="accent" type="button" [matMenuTriggerFor]="menu"  (click)="_template.ActionListPrint()">\r
  <mat-icon>more_vert</mat-icon>\r
</button>\r
-->\r
<button mat-icon-button [matMenuTriggerFor]="menu" type="button" style="height: 35px; overflow: visible;">\r
  <mat-icon class="text-primary">more_vert</mat-icon>\r
</button>\r
<mat-menu #menu="matMenu" type="button">\r
  <button mat-menu-item type="button" (click)="record.isShow = !record.isShow">\r
    <mat-icon class="me-2">{{!record?.isShow ? 'visibility' : 'visibility_off'}}</mat-icon>\r
    <span>{{!record?.isShow ? 'Show' : 'Hide'}}</span>\r
  </button>\r
  <!-- _template.ActionListEdit(record?.id) -->\r
  <a mat-menu-item  color="primary" class="me-1" [routerLink]="[_template.linkUpdate, record?.id]">\r
    <mat-icon class="me-2">edit</mat-icon>\r
    <span>{{'Edit' | translate}}</span>\r
  </a>\r
  <button mat-menu-item type="button" (click)="_template.lb.copyItemJSON(record)">\r
    <mat-icon class="me-2">content_copy</mat-icon>\r
    <span>Copy JSON</span>\r
  </button>\r
  <button mat-menu-item type="button" (click)="_template.lb.exportItemToCSV(record)">\r
    <mat-icon class="me-2">download</mat-icon>\r
    <span>Export to CSV</span>\r
  </button>\r
  <button mat-menu-item type="button" (click)="_template.lb.updateStatus(record)">\r
    <mat-icon class="me-2" ngClass="{{record.status === 'Active' ? 'text-success' : 'text-warning'}}">\r
      {{record.status === 'Active' ? 'toggle_on' : 'toggle_off'}}\r
    </mat-icon>\r
    <span ngClass="{{record.status === 'Active' ? 'text-success' : 'text-warning'}}">{{record.status}}</span>\r
  </button>\r
  <button mat-menu-item type="button" (click)="_template.lb.updateDelete(record)">\r
    <mat-icon class="me-2 text-danger">delete</mat-icon>\r
    <span class="text-danger">Delete Soft</span>\r
  </button>\r
    <button mat-menu-item type="button" (click)="_template.lb.Delete(record)">\r
    <mat-icon class="me-2 text-danger">delete</mat-icon>\r
    <span class="text-danger">Delete</span>\r
  </button>\r
</mat-menu>\r
` }]
  }], () => [{ type: TemplateService }], { record: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TblActionsRow, { className: "TblActionsRow", filePath: "_shared/table/tbl-actions-row/tbl-actions-row.ts", lineNumber: 12 });
})();

// src/_shared/table/tbl-col-template/tbl-col-template.ts
var _c08 = () => ({ height: "100%" });
var _c14 = () => ["secondary"];
var _c23 = (a0, a1, a2) => ({ "text-success": a0, "text-danger": a1, "text-secondary": a2 });
var _c33 = (a0, a1) => ({ $implicit: a0, row: a1 });
function TblColTemplate_Conditional_0_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "S. No"), " ");
  }
}
function TblColTemplate_Conditional_0_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 24)(1, "div", 25);
    \u0275\u0275listener("dblclick", function TblColTemplate_Conditional_0_td_3_Template_div_dblclick_1_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.lb._bcs._router.navigate([ctx_r1.lb._bcs._template.linkUpdate, item_r4?.id]);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const dataIndex_r5 = ctx.dataIndex;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", item_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pageStart + dataIndex_r5 || "No", " ");
  }
}
function TblColTemplate_Conditional_0_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Name"), " ");
  }
}
function TblColTemplate_Conditional_0_td_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275listener("click", function TblColTemplate_Conditional_0_td_6_Template_td_click_0_listener($event) {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.lb.copyValue(item_r7.name);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7?.name || "-", " ");
  }
}
function TblColTemplate_Conditional_0_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Status"), " ");
  }
}
function TblColTemplate_Conditional_0_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 29);
    \u0275\u0275listener("dblclick", function TblColTemplate_Conditional_0_td_9_Template_td_dblclick_0_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.lb._bcs._template.lb.updateStatus(item_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c23, item_r9?.status == "Active", item_r9?.status == "DeActive", item_r9.status == "None"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9?.status || "-", " ");
  }
}
function TblColTemplate_Conditional_0_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Updated At"), " ");
  }
}
function TblColTemplate_Conditional_0_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30)(1, "div", 31);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", "CreatedAt : " + \u0275\u0275pipeBind2(2, 2, item_r10.createdAt, "dd-MM-yy HH:mm:ss") + " UpdatedAt : " + \u0275\u0275pipeBind2(3, 5, item_r10.updatedAt, "dd-MM-yy HH:mm:ss"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 8, item_r10.updatedAt, "dd-MM-yy"), " ");
  }
}
function TblColTemplate_Conditional_0_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Actions"), " ");
  }
}
function TblColTemplate_Conditional_0_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275element(1, "tbl-actions-row", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("record", item_r11);
  }
}
function TblColTemplate_Conditional_0_For_17_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, col_r12.name), " ");
  }
}
function TblColTemplate_Conditional_0_For_17_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275listener("click", function TblColTemplate_Conditional_0_For_17_td_2_Template_td_click_0_listener($event) {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const col_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.lb.copyValue(item_r14[col_r12.key]);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const col_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r14[col_r12.key] || "-", " ");
  }
}
function TblColTemplate_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 16);
    \u0275\u0275template(1, TblColTemplate_Conditional_0_For_17_th_1_Template, 3, 3, "th", 6)(2, TblColTemplate_Conditional_0_For_17_td_2_Template, 2, 1, "td", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    \u0275\u0275property("matColumnDef", \u0275\u0275interpolate(col_r12.key));
  }
}
function TblColTemplate_Conditional_0_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainer(3, 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("colspan", ctx_r1.lb?.cols?.length || 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r15?.desc || "--", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.secondaryTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c33, item_r15, item_r15));
  }
}
function TblColTemplate_Conditional_0_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 38);
  }
}
function TblColTemplate_Conditional_0_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39);
    \u0275\u0275listener("dblclick", function TblColTemplate_Conditional_0_tr_21_Template_tr_dblclick_0_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).$implicit;
      return \u0275\u0275resetView(row_r17.isShow = !row_r17.isShow);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataIndex_r18 = ctx.dataIndex;
    \u0275\u0275classProp("alt-row", dataIndex_r18 % 2 === 1);
  }
}
function TblColTemplate_Conditional_0_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 40);
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const dataIndex_r20 = ctx.dataIndex;
    \u0275\u0275styleProp("display", row_r19.isShow ? "" : "none");
    \u0275\u0275classProp("alt-row", dataIndex_r20 % 2 === 1);
  }
}
function TblColTemplate_Conditional_0_tr_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 42);
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275text(2, "Loading...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275text(4, " Please wait while we fetch your data. ");
    \u0275\u0275elementEnd();
  }
}
function TblColTemplate_Conditional_0_tr_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 45);
    \u0275\u0275text(1, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275text(3, " No records found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44);
    \u0275\u0275text(5, " There are no records available to display. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "btn", 46);
    \u0275\u0275listener("clickz", function TblColTemplate_Conditional_0_tr_23_Conditional_4_Template_btn_clickz_6_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.lb.refresh());
    });
    \u0275\u0275elementEnd();
  }
}
function TblColTemplate_Conditional_0_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 41);
    \u0275\u0275conditionalCreate(3, TblColTemplate_Conditional_0_tr_23_Conditional_3_Template, 5, 0)(4, TblColTemplate_Conditional_0_tr_23_Conditional_4_Template, 7, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.lb?.cols?.length || 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.lb.isLoading() ? 3 : 4);
  }
}
function TblColTemplate_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 1);
    \u0275\u0275listener("matSortChange", function TblColTemplate_Conditional_0_Template_table_matSortChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.lb.sort($event));
    });
    \u0275\u0275elementContainerStart(1, 2);
    \u0275\u0275template(2, TblColTemplate_Conditional_0_th_2_Template, 3, 3, "th", 3)(3, TblColTemplate_Conditional_0_td_3_Template, 3, 2, "td", 4);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 5);
    \u0275\u0275template(5, TblColTemplate_Conditional_0_th_5_Template, 3, 3, "th", 6)(6, TblColTemplate_Conditional_0_td_6_Template, 2, 1, "td", 7);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 8);
    \u0275\u0275template(8, TblColTemplate_Conditional_0_th_8_Template, 3, 3, "th", 9)(9, TblColTemplate_Conditional_0_td_9_Template, 2, 6, "td", 10);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 11);
    \u0275\u0275template(11, TblColTemplate_Conditional_0_th_11_Template, 3, 3, "th", 9)(12, TblColTemplate_Conditional_0_td_12_Template, 6, 11, "td", 12);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 13);
    \u0275\u0275template(14, TblColTemplate_Conditional_0_th_14_Template, 3, 3, "th", 14)(15, TblColTemplate_Conditional_0_td_15_Template, 2, 1, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275repeaterCreate(16, TblColTemplate_Conditional_0_For_17_Template, 3, 2, "ng-container", 16, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementContainerStart(18, 17);
    \u0275\u0275template(19, TblColTemplate_Conditional_0_td_19_Template, 4, 7, "td", 18);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, TblColTemplate_Conditional_0_tr_20_Template, 1, 0, "tr", 19)(21, TblColTemplate_Conditional_0_tr_21_Template, 1, 2, "tr", 20)(22, TblColTemplate_Conditional_0_tr_22_Template, 1, 4, "tr", 21)(23, TblColTemplate_Conditional_0_tr_23_Template, 5, 2, "tr", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r1.lb.ds)("ngStyle", !ctx_r1.lb?.ds?.data?.length ? \u0275\u0275pureFunction0(9, _c08) : null);
    \u0275\u0275advance();
    \u0275\u0275property("sticky", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("sticky", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("stickyEnd", true);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.lb.colsExtra);
    \u0275\u0275advance(4);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.lb.cols)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.lb.cols);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(10, _c14));
  }
}
var TblColTemplate = class _TblColTemplate {
  secondaryTemplate;
  lb;
  get pageStart() {
    const pageNo = this.lb?.httpResPaginate?.pageNo || 1;
    const pageSize = this.lb?.httpResPaginate?.pageSize || 10;
    return (pageNo - 1) * pageSize + 1;
  }
  static \u0275fac = function TblColTemplate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TblColTemplate)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TblColTemplate, selectors: [["tbl-col-template"]], hostAttrs: [1, "col"], inputs: { secondaryTemplate: "secondaryTemplate", lb: "lb" }, standalone: false, decls: 1, vars: 1, consts: [["id", "print-area", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", 2, "box-shadow", "none", 3, "dataSource", "ngStyle"], ["id", "print-area", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", 2, "box-shadow", "none", 3, "matSortChange", "dataSource", "ngStyle"], ["matColumnDef", "id", 3, "sticky"], ["class", "text-nowrap", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "text-nowrap text-center", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name", 3, "sticky"], ["class", "text-nowrap text-start", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 4, "matHeaderCellDef"], ["class", "text-nowrap text-start", "mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "status"], ["class", "text-nowrap", "mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", "dblclick", 4, "matCellDef"], ["matColumnDef", "updatedAt"], ["class", "text-nowrap", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "actions", 3, "stickyEnd"], ["class", "text-nowrap no-print text-center", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "text-nowrap no-print text-center", "mat-cell", "", "matTooltip", "View More Options", "matTooltipPosition", "above", 4, "matCellDef"], [3, "matColumnDef"], ["matColumnDef", "secondary"], ["mat-cell", "", "style", "height: 60px !important;", 4, "matCellDef"], ["mat-header-row", "", "class", "bg-dark text-light", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "matTooltip", "Click Cell To Copy", "matTooltipPosition", "above", "class", "theme-row", 3, "alt-row", "dblclick", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 3, "alt-row", "display", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["mat-header-cell", "", 1, "text-nowrap"], ["mat-cell", "", 1, "text-nowrap", "text-center"], ["matBadge", "4", "matBadgeOverlap", "false", "matTooltipPosition", "above", "role", "button", 3, "dblclick", "matTooltip"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 1, "text-nowrap", "text-start"], ["mat-cell", "", 1, "text-nowrap", "text-start", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", "arrowPosition", "after", 1, "text-nowrap"], ["mat-cell", "", 3, "dblclick", "ngClass"], ["mat-cell", "", 1, "text-nowrap"], ["matBadge", "4", "matBadgeOverlap", "false", "role", "button", "matTooltipPosition", "above", 3, "matTooltip"], ["mat-header-cell", "", 1, "text-nowrap", "no-print", "text-center"], ["mat-cell", "", "matTooltip", "View More Options", "matTooltipPosition", "above", 1, "text-nowrap", "no-print", "text-center"], [3, "record"], ["mat-cell", "", 2, "height", "60px !important"], [1, "col-12", "p-2", "ps-5"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-header-row", "", 1, "bg-dark", "text-light"], ["mat-row", "", "matTooltip", "Click Cell To Copy", "matTooltipPosition", "above", 1, "theme-row", 3, "dblclick"], ["mat-row", ""], [1, "table-empty-state"], ["diameter", "48", 1, "mb-2"], [1, "mat-headline-small"], [1, "mat-body-medium"], ["color", "primary", 2, "font-size", "25px"], ["lbl", "Refresh", "icon", "refresh", 1, "mt-3", 3, "clickz"]], template: function TblColTemplate_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TblColTemplate_Conditional_0_Template, 24, 11, "table", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.lb ? 0 : -1);
    }
  }, dependencies: [Btn, NgClass, NgTemplateOutlet, NgStyle, MatIcon, MatTooltip, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatSort, MatSortHeader, MatProgressSpinner, TblActionsRow, DatePipe, TranslatePipe], styles: ["\n.cols-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 8px;\n}\n.theme-row[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #d9d9d9;\n}\n  .mat-sort-header-arrow > svg {\n  fill: #fff !important;\n}\n.table-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.table-empty-state[_ngcontent-%COMP%]   .mat-headline-small[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.table-empty-state[_ngcontent-%COMP%]   .mat-body-medium[_ngcontent-%COMP%] {\n  color: var(--mat-sys-on-surface-variant);\n  max-width: 320px;\n}\n.table-empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n  .mat-mdc-menu-item {\n  min-height: 40px;\n}\n.alt-row[_ngcontent-%COMP%] {\n  background-color: rgba(195, 195, 195, 0.9960784314);\n}\n.theme-row[_ngcontent-%COMP%]:hover {\n  background-color: #777777;\n}\n/*# sourceMappingURL=tbl-col-template-W5ZDNVGH.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TblColTemplate, [{
    type: Component,
    args: [{ selector: "tbl-col-template", standalone: false, host: { class: "col" }, template: `@if (lb) {\r
<table id="print-area" mat-table matSort [dataSource]="lb.ds" multiTemplateDataRows\r
    style="box-shadow: none;" [ngStyle]="!lb?.ds?.data?.length? { height: '100%' } : null"\r
\r
  (matSortChange)="lb.sort($event)">\r
  <ng-container matColumnDef="id" [sticky]="true">\r
    <th class="text-nowrap" mat-header-cell *matHeaderCellDef>\r
      {{ 'S. No' | translate }}\r
    </th>\r
    <!--(click)="lb.copyValue(item.id); $event.stopPropagation();" -->\r
    <td class="text-nowrap text-center" mat-cell *matCellDef="let item; let dataIndex = dataIndex">\r
      <div matBadge="4" matBadgeOverlap="false" [matTooltip]="item.id" matTooltipPosition="above" role="button"\r
      (dblclick)="lb._bcs._router.navigate([lb._bcs._template.linkUpdate, item?.id]); $event.stopPropagation()">\r
        {{ pageStart + dataIndex || 'No' }}\r
      </div>\r
    </td>\r
  </ng-container>\r
  <ng-container matColumnDef="name" [sticky]="true">\r
    <th class="text-nowrap text-start" mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
      {{'Name' | translate}}\r
    </th>\r
    <td class="text-nowrap text-start" mat-cell *matCellDef="let item"\r
      (click)="lb.copyValue(item.name); $event.stopPropagation();">\r
      {{item?.name || '-'}}\r
    </td>\r
  </ng-container>\r
  <ng-container matColumnDef="status">\r
    <th class="text-nowrap" mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
      {{'Status' | translate}}\r
    </th>\r
    <td mat-cell *matCellDef="let item"\r
      [ngClass]="{'text-success' : item?.status == 'Active', 'text-danger' : item?.status == 'DeActive', 'text-secondary' :  item.status == 'None' }"\r
      (dblclick)="lb._bcs._template.lb.updateStatus(item); $event.stopPropagation();">\r
      {{ item?.status || '-' }}\r
    </td>\r
  </ng-container>\r
  <!-- <ng-container matColumnDef="desc">\r
    <th class="text-nowrap" mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
      {{'Desc' | translate}}\r
    </th>\r
    <td class="text-nowrap text-start" mat-cell *matCellDef="let item"\r
      (click)="lb.copyValue(item.desc); $event.stopPropagation();">\r
      {{ item?.desc?.slice(0,50) }}\r
      @if(item?.desc.length > 50){\r
      <span matBadge="4" matBadgeOverlap="false" [matTooltip]="item?.desc" class="badge bg-dark">\r
        &#8230;\r
      </span>\r
      }\r
\r
    </td>\r
  </ng-container> -->\r
  <ng-container matColumnDef="updatedAt">\r
    <th class="text-nowrap" mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
      {{'Updated At' | translate}}\r
    </th>\r
    <td class="text-nowrap" mat-cell *matCellDef="let item">\r
      <div matBadge="4" matBadgeOverlap="false" role="button" matTooltipPosition="above"\r
        [matTooltip]="'CreatedAt : ' + (item.createdAt | date:'dd-MM-yy HH:mm:ss') + ' UpdatedAt : ' + (item.updatedAt | date:'dd-MM-yy HH:mm:ss') ">\r
        {{ item.updatedAt | date:'dd-MM-yy' }}\r
      </div>\r
    </td>\r
  </ng-container>\r
  <ng-container matColumnDef="actions" [stickyEnd]="true">\r
    <th class="text-nowrap no-print text-center" mat-header-cell *matHeaderCellDef>\r
      {{'Actions' | translate}}\r
    </th>\r
    <td class="text-nowrap no-print text-center" mat-cell *matCellDef="let item" matTooltip="View More Options" matTooltipPosition="above">\r
      <tbl-actions-row [record]="item"></tbl-actions-row>\r
    </td>\r
  </ng-container>\r
  @for (col of lb.colsExtra; track $index) {\r
  <ng-container matColumnDef="{{col.key}}">\r
    <th class="text-nowrap text-start" mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition='after'>\r
      {{col.name | translate}}\r
    </th>\r
    <td class="text-nowrap text-start" mat-cell *matCellDef="let item"\r
      (click)="lb.copyValue(item[col.key]); $event.stopPropagation();">\r
      {{ (item[col.key]) || '-' }}\r
    </td>\r
  </ng-container>\r
  }\r
  <ng-container matColumnDef="secondary">\r
    <td mat-cell [attr.colspan]="lb?.cols?.length || 1" *matCellDef="let item" style="height: 60px !important;">\r
      <div class="col-12 p-2 ps-5">\r
        {{item?.desc || '--'}}\r
      </div>\r
      <ng-container\r
        [ngTemplateOutlet]="secondaryTemplate"\r
        [ngTemplateOutletContext]="{ $implicit: item, row: item }">\r
      </ng-container>\r
    </td>\r
  </ng-container>\r
  <tr mat-header-row *matHeaderRowDef="lb.cols; sticky:true" class="bg-dark text-light"></tr>\r
  <tr mat-row *matRowDef="let row; columns: lb.cols; let dataIndex = dataIndex;"\r
      matTooltip="Click Cell To Copy" matTooltipPosition="above"\r
      (dblclick)="row.isShow = !row.isShow"\r
      [class.alt-row]="dataIndex % 2 === 1" class="theme-row"></tr>\r
  <tr mat-row *matRowDef="let row; columns: ['secondary']; let dataIndex = dataIndex;"\r
      [class.alt-row]="dataIndex % 2 === 1"\r
      [style.display]="row.isShow ? '' : 'none'">\r
  </tr>\r
\r
  <tr *matNoDataRow>\r
    <td [attr.colspan]="lb?.cols?.length || 1">\r
      <div class="table-empty-state">\r
        @if (lb.isLoading()) {\r
        <mat-spinner diameter="48" class="mb-2"></mat-spinner>\r
        <div class="mat-headline-small">Loading...</div>\r
        <div class="mat-body-medium">\r
          Please wait while we fetch your data.\r
        </div>\r
        } @else {\r
        <mat-icon color="primary" style="font-size: 25px">inbox</mat-icon>\r
        <div class="mat-headline-small">\r
          No records found\r
        </div>\r
        <div class="mat-body-medium">\r
          There are no records available to display.\r
        </div>\r
        <btn lbl="Refresh" icon="refresh" (clickz)="lb.refresh()" class="mt-3"></btn>\r
        }\r
      </div>\r
    </td>\r
  </tr>\r
</table>\r
}\r
<!-- <div class="mat_table d-flex flex-nowrap align-items-center" >\r
  <tbl-cols-start [lb]="lb"></tbl-cols-start>\r
  <div class="cols-wrapper">\r
    <ng-content cols></ng-content>\r
  </div>\r
  <tbl-cols-end [lb]="lb"></tbl-cols-end>\r
</div>\r
} -->\r
`, styles: ["/* src/_shared/table/tbl-col-template/tbl-col-template.scss */\n.cols-wrapper {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 8px;\n}\n.theme-row:hover {\n  cursor: pointer;\n  background-color: #d9d9d9;\n}\n::ng-deep .mat-sort-header-arrow > svg {\n  fill: #fff !important;\n}\n.table-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.table-empty-state .mat-headline-small {\n  margin: 0;\n}\n.table-empty-state .mat-body-medium {\n  color: var(--mat-sys-on-surface-variant);\n  max-width: 320px;\n}\n.table-empty-state button {\n  margin-top: 8px;\n}\n::ng-deep .mat-mdc-menu-item {\n  min-height: 40px;\n}\n.alt-row {\n  background-color: rgba(195, 195, 195, 0.9960784314);\n}\n.theme-row:hover {\n  background-color: #777777;\n}\n/*# sourceMappingURL=tbl-col-template-W5ZDNVGH.css.map */\n"] }]
  }], null, { secondaryTemplate: [{
    type: Input
  }], lb: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TblColTemplate, { className: "TblColTemplate", filePath: "_shared/table/tbl-col-template/tbl-col-template.ts", lineNumber: 11 });
})();

// src/_shared/utils/btn-link/btn-link.ts
var BtnLink = class _BtnLink extends Btn {
  link = "link";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BtnLink_BaseFactory;
    return function BtnLink_Factory(__ngFactoryType__) {
      return (\u0275BtnLink_BaseFactory || (\u0275BtnLink_BaseFactory = \u0275\u0275getInheritedFactory(_BtnLink)))(__ngFactoryType__ || _BtnLink);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BtnLink, selectors: [["btn-link"]], inputs: { link: "link" }, standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 7, consts: [["mat-raised-button", "", "color", "primary", 1, "me-2", "d-none", "d-lg-inline-flex", 3, "routerLink"], [1, "me-2"], ["mat-mini-fab", "", "color", "primary", 1, "me-2", "d-inline-flex", "d-lg-none", 3, "routerLink"]], template: function BtnLink_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0)(1, "mat-icon", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "a", 2)(7, "mat-icon");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", ctx.link);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.icon);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, ctx.lbl));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.link);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.icon);
    }
  }, dependencies: [RouterLink, MatButton, MatMiniFabButton, MatIcon, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BtnLink, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "btn-link", template: '<a mat-raised-button color="primary" class="me-2 d-none d-lg-inline-flex" [routerLink]="link">\r\n  <mat-icon class="me-2">{{ icon }}</mat-icon>\r\n  <span>{{ lbl | translate }}</span>\r\n</a>\r\n<a mat-mini-fab color="primary" class="me-2 d-inline-flex d-lg-none" [routerLink]="link">\r\n  <mat-icon>{{ icon }}</mat-icon>\r\n</a>\r\n' }]
  }], null, { link: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BtnLink, { className: "BtnLink", filePath: "_shared/utils/btn-link/btn-link.ts", lineNumber: 12 });
})();

// src/_shared/utils/util.module.ts
var component = [Btn, BtnLink];
var modules = [
  AngularzModule,
  NGX_NGB_Other_Module,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule
];
var UtilModule = class _UtilModule {
  static \u0275fac = function UtilModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UtilModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    modules,
    AngularzModule,
    NGX_NGB_Other_Module,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilModule, [{
    type: NgModule,
    args: [{
      imports: [modules],
      exports: [component, modules],
      declarations: component
    }]
  }], null, null);
})();

// src/_shared/table/tbl-actions/tbl-actions.ts
var TblActions = class _TblActions {
  _template;
  constructor(_template) {
    this._template = _template;
  }
  ngOnInit() {
  }
  static \u0275fac = function TblActions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TblActions)(\u0275\u0275directiveInject(TemplateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TblActions, selectors: [["tbl-actions"]], standalone: false, decls: 31, vars: 5, consts: [["menu", "matMenu"], ["mat-raised-button", "", "color", "primary", "type", "button", "type", "button", 1, "me-2", "d-none", "d-lg-inline-flex", 3, "matMenuTriggerFor"], ["mat-mini-fab", "", "type", "button", 1, "me-2", "d-inline-flex", "d-lg-none", 3, "matMenuTriggerFor"], ["type", "button"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "me-2"]], template: function TblActions_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 1)(1, "mat-icon");
      \u0275\u0275text(2, "more_vert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 2)(7, "mat-icon");
      \u0275\u0275text(8, "more_vert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "mat-menu", 3, 0)(11, "button", 4);
      \u0275\u0275listener("click", function TblActions_Template_button_click_11_listener() {
        return ctx._template.lb.exportListToCSV(ctx._template?.title);
      });
      \u0275\u0275elementStart(12, "mat-icon", 5);
      \u0275\u0275text(13, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "Download CSV");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 4);
      \u0275\u0275listener("click", function TblActions_Template_button_click_16_listener() {
        return ctx._template.lb.exportListToJSON(ctx._template?.title);
      });
      \u0275\u0275elementStart(17, "mat-icon", 5);
      \u0275\u0275text(18, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Download JSON");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 4);
      \u0275\u0275listener("click", function TblActions_Template_button_click_21_listener() {
        return ctx._template.lb.copyListJSON();
      });
      \u0275\u0275elementStart(22, "mat-icon", 5);
      \u0275\u0275text(23, "content_copy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Copy JSON");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "button", 4);
      \u0275\u0275listener("click", function TblActions_Template_button_click_26_listener() {
        return ctx._template.lb.printList();
      });
      \u0275\u0275elementStart(27, "mat-icon", 5);
      \u0275\u0275text(28, "print");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Print");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const menu_r1 = \u0275\u0275reference(10);
      \u0275\u0275property("matMenuTriggerFor", menu_r1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "More"));
      \u0275\u0275advance(2);
      \u0275\u0275property("matMenuTriggerFor", menu_r1);
    }
  }, dependencies: [MatButton, MatMiniFabButton, MatIcon, MatMenu, MatMenuItem, MatMenuTrigger, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TblActions, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "tbl-actions", template: `<button mat-raised-button color="primary" class="me-2  d-none d-lg-inline-flex" type="button" [matMenuTriggerFor]="menu" type="button">\r
  <mat-icon>more_vert</mat-icon>\r
  <span>{{ 'More' | translate }}</span>\r
</button>\r
<button mat-mini-fab [matMenuTriggerFor]="menu" type="button" class="me-2 d-inline-flex d-lg-none">\r
  <mat-icon>more_vert</mat-icon>\r
</button>\r
<mat-menu #menu="matMenu" type="button">\r
<!--\r
  <a mat-menu-item  color="primary" class="me-1 text-primary" [routerLink]="[_template.linkAdd]" [queryParams]="{id: record?.id}">\r
    <mat-icon class="me-2 text-primary">edit</mat-icon>\r
    <span>{{'Edit' | translate}}</span>\r
  </a>\r
-->\r
  <button mat-menu-item type="button" (click)="_template.lb.exportListToCSV(_template?.title)">\r
    <mat-icon class="me-2">download</mat-icon>\r
    <span>Download CSV</span>\r
  </button>\r
  <button mat-menu-item type="button" (click)="_template.lb.exportListToJSON(_template?.title)">\r
    <mat-icon class="me-2">download</mat-icon>\r
    <span>Download JSON</span>\r
  </button>\r
  <button mat-menu-item type="button" (click)="_template.lb.copyListJSON()">\r
    <mat-icon class="me-2">content_copy</mat-icon>\r
    <span>Copy JSON</span>\r
  </button>\r
  <button mat-menu-item type="button" (click)="_template.lb.printList()">\r
    <mat-icon class="me-2">print</mat-icon>\r
    <span>Print</span>\r
  </button>\r
</mat-menu>\r
` }]
  }], () => [{ type: TemplateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TblActions, { className: "TblActions", filePath: "_shared/table/tbl-actions/tbl-actions.ts", lineNumber: 12 });
})();

// src/_shared/table/tbl-paginator/paginator.ts
var CustomPaginatorIntl = class _CustomPaginatorIntl extends MatPaginatorIntl {
  itemsPerPageLabel = "Size:";
  // override nextPageLabel = 'Next';
  // override previousPageLabel = 'Previous';
  // override firstPageLabel = 'First';
  // override lastPageLabel = 'Last';
  getRangeLabel = (page, pageSize, length) => {
    if (length === 0 || pageSize === 0) {
      return `0 of ${length}`;
    }
    const start = page * pageSize + 1;
    const end = Math.min((page + 1) * pageSize, length);
    return `${start} - ${end} of ${length}`;
  };
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CustomPaginatorIntl_BaseFactory;
    return function CustomPaginatorIntl_Factory(__ngFactoryType__) {
      return (\u0275CustomPaginatorIntl_BaseFactory || (\u0275CustomPaginatorIntl_BaseFactory = \u0275\u0275getInheritedFactory(_CustomPaginatorIntl)))(__ngFactoryType__ || _CustomPaginatorIntl);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomPaginatorIntl, factory: _CustomPaginatorIntl.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomPaginatorIntl, [{
    type: Injectable
  }], null, null);
})();

// src/_shared/table/table.module.ts
var control = [
  TblColTemplate,
  TblActions,
  TblActionsRow,
  TblPaginatorComponent
];
var modules2 = [
  UtilModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatTooltipModule,
  MatMenuModule,
  MatProgressSpinnerModule
];
var TableModule = class _TableModule {
  static \u0275fac = function TableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TableModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginatorIntl
    }
  ], imports: [
    modules2,
    UtilModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      declarations: control,
      imports: modules2,
      exports: [control, modules2],
      providers: [
        {
          provide: MatPaginatorIntl,
          useClass: CustomPaginatorIntl
        }
      ]
    }]
  }], null, null);
})();

export {
  MatProgressSpinnerModule,
  MatTooltip,
  MatTooltipModule,
  MAT_OPTION_PARENT_COMPONENT,
  MAT_OPTGROUP,
  MatOptionSelectionChange,
  MatOption,
  _countGroupLabelsBeforeOption,
  _getOptionScrollPosition,
  MatFormFieldModule,
  MatOptionModule,
  MatSelect,
  MatSelectModule,
  MatPaginatorModule,
  MatSortModule,
  TblPaginatorComponent,
  Btn,
  TblColTemplate,
  BtnLink,
  UtilModule,
  TblActions,
  TableModule
};
//# sourceMappingURL=chunk-2DCOEMMN.js.map
