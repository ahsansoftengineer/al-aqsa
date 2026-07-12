import {
  A11yModule,
  BreakpointObserver,
  Breakpoints,
  FocusKeyManager,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  MatButton,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatIcon,
  MatIconButton,
  _StructuralStylesLoader,
  _animationsDisabled,
  _getAnimationsState
} from "./chunk-USXUCR7E.js";
import {
  BasePortalOutlet,
  BehaviorSubject,
  BidiModule,
  CDK_VIRTUAL_SCROLL_VIEWPORT,
  CdkPortalOutlet,
  CdkScrollable,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentPortal,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DataSource,
  DatePipe,
  Directionality,
  Directive,
  DomSanitizer,
  EMPTY,
  ENTER,
  ESCAPE,
  ElementRef,
  EventEmitter,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  HostAttributeToken,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Optional,
  Output,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayRef,
  Pipe,
  Platform,
  PortalModule,
  QueryList,
  Renderer2,
  RendererFactory2,
  ReplaySubject,
  Router,
  SPACE,
  ScrollingModule,
  Service,
  Subject,
  Subscription,
  TemplatePortal,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _RecycleViewRepeaterStrategy,
  _ViewRepeaterOperation,
  __async,
  __spreadProps,
  __spreadValues,
  _getFocusedElementPierceShadowDom,
  _isNumberValue,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  coerceNumberProperty,
  combineLatest,
  concat,
  concatMap,
  createBlockScrollStrategy,
  createGlobalPositionStrategy,
  createOverlayRef,
  defer,
  filter,
  forkJoin,
  hasModifierKey,
  inject,
  isDataSource,
  isObservable,
  map,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵanimateLeave,
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
  ɵɵdefinePipe,
  ɵɵdefineService,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵinterpolate2,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-KLKFXJY4.js";

// node_modules/.pnpm/@ngx-translate+core@17.0.0__c5d7f0eb0a31c0a5711e66bbf085bbcc/node_modules/@ngx-translate/core/fesm2022/ngx-translate-core.mjs
var MissingTranslationHandler = class {
};
var DefaultMissingTranslationHandler = class _DefaultMissingTranslationHandler {
  handle(params) {
    return params.key;
  }
  static \u0275fac = function DefaultMissingTranslationHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultMissingTranslationHandler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultMissingTranslationHandler,
    factory: _DefaultMissingTranslationHandler.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultMissingTranslationHandler, [{
    type: Injectable
  }], null, null);
})();
var TranslateCompiler = class {
};
var TranslateNoOpCompiler = class _TranslateNoOpCompiler extends TranslateCompiler {
  compile(value, lang) {
    void lang;
    return value;
  }
  compileTranslations(translations, lang) {
    void lang;
    return translations;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TranslateNoOpCompiler_BaseFactory;
    return function TranslateNoOpCompiler_Factory(__ngFactoryType__) {
      return (\u0275TranslateNoOpCompiler_BaseFactory || (\u0275TranslateNoOpCompiler_BaseFactory = \u0275\u0275getInheritedFactory(_TranslateNoOpCompiler)))(__ngFactoryType__ || _TranslateNoOpCompiler);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateNoOpCompiler,
    factory: _TranslateNoOpCompiler.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateNoOpCompiler, [{
    type: Injectable
  }], null, null);
})();
var TranslateLoader = class {
};
var TranslateNoOpLoader = class _TranslateNoOpLoader extends TranslateLoader {
  getTranslation(lang) {
    void lang;
    return of({});
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TranslateNoOpLoader_BaseFactory;
    return function TranslateNoOpLoader_Factory(__ngFactoryType__) {
      return (\u0275TranslateNoOpLoader_BaseFactory || (\u0275TranslateNoOpLoader_BaseFactory = \u0275\u0275getInheritedFactory(_TranslateNoOpLoader)))(__ngFactoryType__ || _TranslateNoOpLoader);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateNoOpLoader,
    factory: _TranslateNoOpLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateNoOpLoader, [{
    type: Injectable
  }], null, null);
})();
function equals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (o1 !== o1 && o2 !== o2) return true;
  const t1 = typeof o1, t2 = typeof o2;
  let length;
  if (t1 == t2 && t1 == "object") {
    if (Array.isArray(o1)) {
      if (!Array.isArray(o2)) return false;
      if ((length = o1.length) == o2.length) {
        for (let key = 0; key < length; key++) {
          if (!equals(o1[key], o2[key])) return false;
        }
        return true;
      }
    } else {
      if (Array.isArray(o2)) {
        return false;
      }
      if (isDict(o1) && isDict(o2)) {
        const keySet = /* @__PURE__ */ Object.create(null);
        for (const key in o1) {
          if (!equals(o1[key], o2[key])) {
            return false;
          }
          keySet[key] = true;
        }
        for (const key in o2) {
          if (!(key in keySet) && typeof o2[key] !== "undefined") {
            return false;
          }
        }
        return true;
      }
    }
  }
  return false;
}
function isDefinedAndNotNull(value) {
  return typeof value !== "undefined" && value !== null;
}
function isDefined(value) {
  return value !== void 0;
}
function isDict(value) {
  return isObject(value) && !isArray(value) && value !== null;
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function isArray(value) {
  return Array.isArray(value);
}
function isString(value) {
  return typeof value === "string";
}
function isFunction(value) {
  return typeof value === "function";
}
function cloneDeep(value) {
  if (isArray(value)) {
    return value.map((item) => cloneDeep(item));
  } else if (isDict(value)) {
    const cloned = {};
    Object.keys(value).forEach((key) => {
      cloned[key] = cloneDeep(value[key]);
    });
    return cloned;
  } else {
    return value;
  }
}
function mergeDeep(target, source) {
  if (!isObject(target)) {
    return cloneDeep(source);
  }
  const output = cloneDeep(target);
  if (isObject(output) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isDict(source[key])) {
        if (key in target) {
          output[key] = mergeDeep(target[key], source[key]);
        } else {
          Object.assign(output, {
            [key]: source[key]
          });
        }
      } else {
        Object.assign(output, {
          [key]: source[key]
        });
      }
    });
  }
  return output;
}
function getValue(target, key) {
  const keys = key.split(".");
  key = "";
  do {
    key += keys.shift();
    const isLastKey = !keys.length;
    if (isDefinedAndNotNull(target)) {
      if (isDict(target) && isDefined(target[key]) && (isDict(target[key]) || isArray(target[key]) || isLastKey)) {
        target = target[key];
        key = "";
        continue;
      }
      if (isArray(target)) {
        const index = parseInt(key, 10);
        if (isDefined(target[index]) && (isDict(target[index]) || isArray(target[index]) || isLastKey)) {
          target = target[index];
          key = "";
          continue;
        }
      }
    }
    if (isLastKey) {
      target = void 0;
      continue;
    }
    key += ".";
  } while (keys.length);
  return target;
}
function insertValue(target, key, value) {
  return mergeDeep(target, createNestedObject(key, value));
}
function createNestedObject(dotSeparatedKey, value) {
  return dotSeparatedKey.split(".").reduceRight((acc, key) => ({
    [key]: acc
  }), value);
}
var TranslateParser = class {
};
var TranslateDefaultParser = class _TranslateDefaultParser extends TranslateParser {
  templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
  interpolate(expr, params) {
    if (isString(expr)) {
      return this.interpolateString(expr, params);
    } else if (isFunction(expr)) {
      return this.interpolateFunction(expr, params);
    }
    return void 0;
  }
  interpolateFunction(fn, params) {
    return fn(params);
  }
  interpolateString(expr, params) {
    if (!params) {
      return expr;
    }
    return expr.replace(this.templateMatcher, (substring, key) => {
      const replacement = this.getInterpolationReplacement(params, key);
      return replacement !== void 0 ? replacement : substring;
    });
  }
  /**
   * Returns the replacement for an interpolation parameter
   * @params:
   */
  getInterpolationReplacement(params, key) {
    return this.formatValue(getValue(params, key));
  }
  /**
   * Converts a value into a useful string representation.
   * @param value The value to format.
   * @returns A string representation of the value.
   */
  formatValue(value) {
    if (isString(value)) {
      return value;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return value.toString();
    }
    if (value === null) {
      return "null";
    }
    if (isArray(value)) {
      return value.join(", ");
    }
    if (isObject(value)) {
      if (typeof value.toString === "function" && value.toString !== Object.prototype.toString) {
        return value.toString();
      }
      return JSON.stringify(value);
    }
    return void 0;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TranslateDefaultParser_BaseFactory;
    return function TranslateDefaultParser_Factory(__ngFactoryType__) {
      return (\u0275TranslateDefaultParser_BaseFactory || (\u0275TranslateDefaultParser_BaseFactory = \u0275\u0275getInheritedFactory(_TranslateDefaultParser)))(__ngFactoryType__ || _TranslateDefaultParser);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateDefaultParser,
    factory: _TranslateDefaultParser.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateDefaultParser, [{
    type: Injectable
  }], null, null);
})();
var TranslateStore = class _TranslateStore {
  _onTranslationChange = new Subject();
  _onLangChange = new Subject();
  _onFallbackLangChange = new Subject();
  fallbackLang = null;
  currentLang;
  translations = {};
  languages = [];
  getTranslations(language) {
    return this.translations[language];
  }
  setTranslations(language, translations, extend) {
    this.translations[language] = extend && this.hasTranslationFor(language) ? mergeDeep(this.translations[language], translations) : translations;
    this.addLanguages([language]);
    this._onTranslationChange.next({
      lang: language,
      translations: this.getTranslations(language)
    });
  }
  getLanguages() {
    return this.languages;
  }
  getCurrentLang() {
    return this.currentLang;
  }
  getFallbackLang() {
    return this.fallbackLang;
  }
  /**
   * Changes the fallback lang
   */
  setFallbackLang(lang, emitChange = true) {
    this.fallbackLang = lang;
    if (emitChange) {
      this._onFallbackLangChange.next({
        lang,
        translations: this.translations[lang]
      });
    }
  }
  setCurrentLang(lang, emitChange = true) {
    this.currentLang = lang;
    if (emitChange) {
      this._onLangChange.next({
        lang,
        translations: this.translations[lang]
      });
    }
  }
  /**
   * An Observable to listen to translation change events
   * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
   *     // do something
   * });
   */
  get onTranslationChange() {
    return this._onTranslationChange.asObservable();
  }
  /**
   * An Observable to listen to lang change events
   * onLangChange.subscribe((params: LangChangeEvent) => {
   *     // do something
   * });
   */
  get onLangChange() {
    return this._onLangChange.asObservable();
  }
  /**
   * An Observable to listen to fallback lang change events
   * onFallbackLangChange.subscribe((params: FallbackLangChangeEvent) => {
   *     // do something
   * });
   */
  get onFallbackLangChange() {
    return this._onFallbackLangChange.asObservable();
  }
  addLanguages(languages) {
    this.languages = Array.from(/* @__PURE__ */ new Set([...this.languages, ...languages]));
  }
  hasTranslationFor(lang) {
    return typeof this.translations[lang] !== "undefined";
  }
  deleteTranslations(lang) {
    delete this.translations[lang];
  }
  getTranslation(key) {
    let text = this.getValue(this.currentLang, key);
    if (text === void 0 && this.fallbackLang != null && this.fallbackLang !== this.currentLang) {
      text = this.getValue(this.fallbackLang, key);
    }
    return text;
  }
  getValue(language, key) {
    return getValue(this.getTranslations(language), key);
  }
  static \u0275fac = function TranslateStore_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateStore)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateStore,
    factory: _TranslateStore.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateStore, [{
    type: Injectable
  }], null, null);
})();
var TRANSLATE_SERVICE_CONFIG = new InjectionToken("TRANSLATE_CONFIG");
var makeObservable = (value) => {
  return isObservable(value) ? value : of(value);
};
var TranslateService = class _TranslateService {
  loadingTranslations;
  pending = false;
  _translationRequests = {};
  lastUseLanguage = null;
  currentLoader = inject(TranslateLoader);
  compiler = inject(TranslateCompiler);
  parser = inject(TranslateParser);
  missingTranslationHandler = inject(MissingTranslationHandler);
  store = inject(TranslateStore);
  extend = false;
  /**
   * An Observable to listen to translation change events
   * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
   *     // do something
   * });
   */
  get onTranslationChange() {
    return this.store.onTranslationChange;
  }
  /**
   * An Observable to listen to lang change events
   * onLangChange.subscribe((params: LangChangeEvent) => {
   *     // do something
   * });
   */
  get onLangChange() {
    return this.store.onLangChange;
  }
  /**
   * An Observable to listen to fallback lang change events
   * onFallbackLangChange.subscribe((params: FallbackLangChangeEvent) => {
   *     // do something
   * });
   */
  get onFallbackLangChange() {
    return this.store.onFallbackLangChange;
  }
  /**
   * @deprecated Use onFallbackLangChange() instead
   */
  get onDefaultLangChange() {
    return this.store.onFallbackLangChange;
  }
  constructor() {
    const config = __spreadValues({
      extend: false,
      fallbackLang: null
    }, inject(TRANSLATE_SERVICE_CONFIG, {
      optional: true
    }));
    if (config.lang) {
      this.use(config.lang);
    }
    if (config.fallbackLang) {
      this.setFallbackLang(config.fallbackLang);
    }
    if (config.extend) {
      this.extend = true;
    }
  }
  /**
   * Sets the fallback language to use if a translation is not found in the
   * current language
   */
  setFallbackLang(lang) {
    if (!this.getFallbackLang()) {
      this.store.setFallbackLang(lang, false);
    }
    const pending = this.loadOrExtendLanguage(lang);
    if (isObservable(pending)) {
      pending.pipe(take(1)).subscribe({
        next: () => {
          this.store.setFallbackLang(lang);
        },
        error: () => {
        }
      });
      return pending;
    }
    this.store.setFallbackLang(lang);
    return of(this.store.getTranslations(lang));
  }
  /**
   * Changes the lang currently used
   */
  use(lang) {
    this.lastUseLanguage = lang;
    if (!this.getCurrentLang()) {
      this.store.setCurrentLang(lang, false);
    }
    const pending = this.loadOrExtendLanguage(lang);
    if (isObservable(pending)) {
      pending.pipe(take(1)).subscribe({
        next: () => {
          this.changeLang(lang);
        },
        error: () => {
        }
      });
      return pending;
    }
    this.changeLang(lang);
    return of(this.store.getTranslations(lang));
  }
  /**
   * Retrieves the given translations
   */
  loadOrExtendLanguage(lang) {
    if (!this.store.hasTranslationFor(lang) || this.extend) {
      this._translationRequests[lang] = this._translationRequests[lang] || this.loadAndCompileTranslations(lang);
      return this._translationRequests[lang];
    }
    return void 0;
  }
  /**
   * Changes the current lang
   */
  changeLang(lang) {
    if (lang !== this.lastUseLanguage) {
      return;
    }
    this.store.setCurrentLang(lang);
  }
  getCurrentLang() {
    return this.store.getCurrentLang();
  }
  loadAndCompileTranslations(lang) {
    this.pending = true;
    const loadingTranslations = this.currentLoader.getTranslation(lang).pipe(shareReplay(1), take(1));
    this.loadingTranslations = loadingTranslations.pipe(map((res) => this.compiler.compileTranslations(res, lang)), shareReplay(1), take(1));
    this.loadingTranslations.subscribe({
      next: (res) => {
        this.store.setTranslations(lang, res, this.extend);
        this.pending = false;
      },
      error: (err) => {
        void err;
        this.pending = false;
      }
    });
    return loadingTranslations;
  }
  /**
   * Manually sets an object of translations for a given language
   * after passing it through the compiler
   */
  setTranslation(lang, translations, shouldMerge = false) {
    const interpolatableTranslations = this.compiler.compileTranslations(translations, lang);
    this.store.setTranslations(lang, interpolatableTranslations, shouldMerge || this.extend);
  }
  getLangs() {
    return this.store.getLanguages();
  }
  /**
   * Add available languages
   */
  addLangs(languages) {
    this.store.addLanguages(languages);
  }
  getParsedResultForKey(key, interpolateParams) {
    const textToInterpolate = this.getTextToInterpolate(key);
    if (isDefinedAndNotNull(textToInterpolate)) {
      return this.runInterpolation(textToInterpolate, interpolateParams);
    }
    const res = this.missingTranslationHandler.handle(__spreadValues({
      key,
      translateService: this
    }, interpolateParams !== void 0 && {
      interpolateParams
    }));
    return res !== void 0 ? res : key;
  }
  /**
   * Gets the fallback language. null if none is defined
   */
  getFallbackLang() {
    return this.store.getFallbackLang();
  }
  getTextToInterpolate(key) {
    return this.store.getTranslation(key);
  }
  runInterpolation(translations, interpolateParams) {
    if (!isDefinedAndNotNull(translations)) {
      return;
    }
    if (isArray(translations)) {
      return this.runInterpolationOnArray(translations, interpolateParams);
    }
    if (isDict(translations)) {
      return this.runInterpolationOnDict(translations, interpolateParams);
    }
    return this.parser.interpolate(translations, interpolateParams);
  }
  runInterpolationOnArray(translations, interpolateParams) {
    return translations.map((translation) => this.runInterpolation(translation, interpolateParams));
  }
  runInterpolationOnDict(translations, interpolateParams) {
    const result = {};
    for (const key in translations) {
      const res = this.runInterpolation(translations[key], interpolateParams);
      if (res !== void 0) {
        result[key] = res;
      }
    }
    return result;
  }
  /**
   * Returns the parsed result of the translations
   */
  getParsedResult(key, interpolateParams) {
    return key instanceof Array ? this.getParsedResultForArray(key, interpolateParams) : this.getParsedResultForKey(key, interpolateParams);
  }
  getParsedResultForArray(key, interpolateParams) {
    const result = {};
    let observables = false;
    for (const k of key) {
      result[k] = this.getParsedResultForKey(k, interpolateParams);
      observables = observables || isObservable(result[k]);
    }
    if (!observables) {
      return result;
    }
    const sources = key.map((k) => makeObservable(result[k]));
    return forkJoin(sources).pipe(map((arr) => {
      const obj = {};
      arr.forEach((value, index) => {
        obj[key[index]] = value;
      });
      return obj;
    }));
  }
  /**
   * Gets the translated value of a key (or an array of keys)
   * @returns the translated key, or an object of translated keys
   */
  get(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || !key.length) {
      throw new Error(`Parameter "key" is required and cannot be empty`);
    }
    if (this.pending) {
      return this.loadingTranslations.pipe(concatMap(() => {
        return makeObservable(this.getParsedResult(key, interpolateParams));
      }));
    }
    return makeObservable(this.getParsedResult(key, interpolateParams));
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the translation changes.
   * @returns A stream of the translated key, or an object of translated keys
   */
  getStreamOnTranslationChange(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || !key.length) {
      throw new Error(`Parameter "key" is required and cannot be empty`);
    }
    return concat(defer(() => this.get(key, interpolateParams)), this.onTranslationChange.pipe(switchMap(() => {
      const res = this.getParsedResult(key, interpolateParams);
      return makeObservable(res);
    })));
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the language changes.
   * @returns A stream of the translated key, or an object of translated keys
   */
  stream(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }
    return concat(defer(() => this.get(key, interpolateParams)), this.onLangChange.pipe(switchMap(() => {
      const res = this.getParsedResult(key, interpolateParams);
      return makeObservable(res);
    })));
  }
  /**
   * Returns a translation instantly from the internal state of loaded translation.
   * All rules regarding the current language, the preferred language of even fallback languages
   * will be used except any promise handling.
   */
  instant(key, interpolateParams) {
    if (!isDefinedAndNotNull(key) || key.length === 0) {
      throw new Error('Parameter "key" is required and cannot be empty');
    }
    const result = this.getParsedResult(key, interpolateParams);
    if (isObservable(result)) {
      if (Array.isArray(key)) {
        return key.reduce((acc, currKey) => {
          acc[currKey] = currKey;
          return acc;
        }, {});
      }
      return key;
    }
    return result;
  }
  /**
   * Sets the translated value of a key, after compiling it
   */
  set(key, translation, lang = this.getCurrentLang()) {
    this.store.setTranslations(lang, insertValue(this.store.getTranslations(lang), key, isString(translation) ? this.compiler.compile(translation, lang) : this.compiler.compileTranslations(translation, lang)), false);
  }
  /**
   * Allows reloading the lang file from the file
   */
  reloadLang(lang) {
    this.resetLang(lang);
    return this.loadAndCompileTranslations(lang);
  }
  /**
   * Deletes inner translation
   */
  resetLang(lang) {
    delete this._translationRequests[lang];
    this.store.deleteTranslations(lang);
  }
  /**
   * Returns the language code name from the browser, e.g. "de"
   */
  static getBrowserLang() {
    if (typeof window === "undefined" || !window.navigator) {
      return void 0;
    }
    const browserLang = this.getBrowserCultureLang();
    return browserLang ? browserLang.split(/[-_]/)[0] : void 0;
  }
  /**
   * Returns the culture language code name from the browser, e.g. "de-DE"
   */
  static getBrowserCultureLang() {
    if (typeof window === "undefined" || typeof window.navigator === "undefined") {
      return void 0;
    }
    return window.navigator.languages ? window.navigator.languages[0] : window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
  }
  getBrowserLang() {
    return _TranslateService.getBrowserLang();
  }
  getBrowserCultureLang() {
    return _TranslateService.getBrowserCultureLang();
  }
  /** Deprecations **/
  /**
   * @deprecated use `getFallbackLang()`
   */
  get defaultLang() {
    return this.getFallbackLang();
  }
  /**
   * The lang currently used
   * @deprecated use `getCurrentLang()`
   */
  get currentLang() {
    return this.store.getCurrentLang();
  }
  /**
   * @deprecated use `getLangs()`
   */
  get langs() {
    return this.store.getLanguages();
  }
  /**
   * Sets the  language to use as a fallback
   * @deprecated use setFallbackLanguage()
   */
  setDefaultLang(lang) {
    return this.setFallbackLang(lang);
  }
  /**
   * Gets the fallback language used
   * @deprecated use getFallbackLang()
   */
  getDefaultLang() {
    return this.getFallbackLang();
  }
  static \u0275fac = function TranslateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateService,
    factory: _TranslateService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateService, [{
    type: Injectable
  }], () => [], null);
})();
var TranslateDirective = class _TranslateDirective {
  translateService = inject(TranslateService);
  element = inject(ElementRef);
  _ref = inject(ChangeDetectorRef);
  key;
  lastParams;
  currentParams;
  onLangChangeSub;
  onFallbackLangChangeSub;
  onTranslationChangeSub;
  set translate(key) {
    if (key) {
      this.key = key;
      this.checkNodes();
    }
  }
  set translateParams(params) {
    if (!equals(this.currentParams, params)) {
      this.currentParams = params;
      this.checkNodes(true);
    }
  }
  constructor() {
    if (!this.onTranslationChangeSub) {
      this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe((event) => {
        if (event.lang === this.translateService.currentLang) {
          this.checkNodes(true, event.translations);
        }
      });
    }
    if (!this.onLangChangeSub) {
      this.onLangChangeSub = this.translateService.onLangChange.subscribe((event) => {
        this.checkNodes(true, event.translations);
      });
    }
    if (!this.onFallbackLangChangeSub) {
      this.onFallbackLangChangeSub = this.translateService.onFallbackLangChange.subscribe((event) => {
        void event;
        this.checkNodes(true);
      });
    }
  }
  ngAfterViewChecked() {
    this.checkNodes();
  }
  checkNodes(forceUpdate = false, translations) {
    let nodes = this.element.nativeElement.childNodes;
    if (!nodes.length) {
      this.setContent(this.element.nativeElement, this.key);
      nodes = this.element.nativeElement.childNodes;
    }
    nodes.forEach((n) => {
      const node = n;
      if (node.nodeType === 3) {
        let key;
        if (forceUpdate) {
          node.lastKey = null;
        }
        if (isDefinedAndNotNull(node.lookupKey)) {
          key = node.lookupKey;
        } else if (this.key) {
          key = this.key;
        } else {
          const content = this.getContent(node);
          const trimmedContent = content.trim();
          if (trimmedContent.length) {
            node.lookupKey = trimmedContent;
            if (content !== node.currentValue) {
              key = trimmedContent;
              node.originalContent = content || node.originalContent;
            } else if (node.originalContent) {
              key = node.originalContent.trim();
            }
          }
        }
        this.updateValue(key, node, translations);
      }
    });
  }
  updateValue(key, node, translations) {
    if (key) {
      if (node.lastKey === key && this.lastParams === this.currentParams) {
        return;
      }
      this.lastParams = this.currentParams;
      const onTranslation = (res) => {
        if (res !== key || !node.lastKey) {
          node.lastKey = key;
        }
        if (!node.originalContent) {
          node.originalContent = this.getContent(node);
        }
        if (isString(res)) {
          node.currentValue = res;
        } else if (!isDefinedAndNotNull(res)) {
          node.currentValue = node.originalContent || key;
        } else {
          node.currentValue = JSON.stringify(res);
        }
        this.setContent(node, this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
        this._ref.markForCheck();
      };
      if (isDefinedAndNotNull(translations)) {
        const res = this.translateService.getParsedResult(key, this.currentParams);
        if (isObservable(res)) {
          res.subscribe({
            next: onTranslation
          });
        } else {
          onTranslation(res);
        }
      } else {
        this.translateService.get(key, this.currentParams).subscribe(onTranslation);
      }
    }
  }
  getContent(node) {
    return isDefinedAndNotNull(node.textContent) ? node.textContent : node.data;
  }
  setContent(node, content) {
    if (isDefinedAndNotNull(node.textContent)) {
      node.textContent = content;
    } else {
      node.data = content;
    }
  }
  ngOnDestroy() {
    if (this.onLangChangeSub) {
      this.onLangChangeSub.unsubscribe();
    }
    if (this.onFallbackLangChangeSub) {
      this.onFallbackLangChangeSub.unsubscribe();
    }
    if (this.onTranslationChangeSub) {
      this.onTranslationChangeSub.unsubscribe();
    }
  }
  static \u0275fac = function TranslateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TranslateDirective,
    selectors: [["", "translate", ""], ["", "ngx-translate", ""]],
    inputs: {
      translate: "translate",
      translateParams: "translateParams"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[translate],[ngx-translate]",
      standalone: true
    }]
  }], () => [], {
    translate: [{
      type: Input
    }],
    translateParams: [{
      type: Input
    }]
  });
})();
var TranslatePipe = class _TranslatePipe {
  translate = inject(TranslateService);
  _ref = inject(ChangeDetectorRef);
  value = "";
  lastKey = null;
  lastParams = [];
  onTranslationChange;
  onLangChange;
  onFallbackLangChange;
  updateValue(key, interpolateParams, translations) {
    const onTranslation = (res) => {
      this.value = res !== void 0 ? res : key;
      this.lastKey = key;
      this._ref.markForCheck();
    };
    if (translations) {
      const res = this.translate.getParsedResult(key, interpolateParams);
      if (isObservable(res)) {
        res.subscribe(onTranslation);
      } else {
        onTranslation(res);
      }
    }
    this.translate.get(key, interpolateParams).subscribe(onTranslation);
  }
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  transform(query, ...args) {
    if (!query || !query.length) {
      return query;
    }
    if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
      return this.value;
    }
    let interpolateParams = void 0;
    if (isDefinedAndNotNull(args[0]) && args.length) {
      if (isString(args[0]) && args[0].length) {
        const validArgs = args[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":').replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
        try {
          interpolateParams = JSON.parse(validArgs);
        } catch (e) {
          void e;
          throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`);
        }
      } else if (isDict(args[0])) {
        interpolateParams = args[0];
      }
    }
    this.lastKey = query;
    this.lastParams = args;
    this.updateValue(query, interpolateParams);
    this._dispose();
    if (!this.onTranslationChange) {
      this.onTranslationChange = this.translate.onTranslationChange.subscribe((event) => {
        if (this.lastKey && event.lang === this.translate.getCurrentLang() || event.lang === this.translate.getFallbackLang()) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    }
    if (!this.onLangChange) {
      this.onLangChange = this.translate.onLangChange.subscribe((event) => {
        if (this.lastKey) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    }
    if (!this.onFallbackLangChange) {
      this.onFallbackLangChange = this.translate.onFallbackLangChange.subscribe(() => {
        if (this.lastKey) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams);
        }
      });
    }
    return this.value;
  }
  /**
   * Clean any existing subscription to change events
   */
  _dispose() {
    if (typeof this.onTranslationChange !== "undefined") {
      this.onTranslationChange.unsubscribe();
      this.onTranslationChange = void 0;
    }
    if (typeof this.onLangChange !== "undefined") {
      this.onLangChange.unsubscribe();
      this.onLangChange = void 0;
    }
    if (typeof this.onFallbackLangChange !== "undefined") {
      this.onFallbackLangChange.unsubscribe();
      this.onFallbackLangChange = void 0;
    }
  }
  ngOnDestroy() {
    this._dispose();
  }
  static \u0275fac = function TranslatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "translate",
    type: _TranslatePipe,
    pure: false
  });
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslatePipe,
    factory: _TranslatePipe.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Injectable
  }, {
    type: Pipe,
    args: [{
      name: "translate",
      standalone: true,
      pure: false
      // required to update the value when the promise is resolved
    }]
  }], null, null);
})();
function provideTranslateLoader(loader) {
  return {
    provide: TranslateLoader,
    useClass: loader
  };
}
function provideTranslateCompiler(compiler) {
  return {
    provide: TranslateCompiler,
    useClass: compiler
  };
}
function provideTranslateParser(parser) {
  return {
    provide: TranslateParser,
    useClass: parser
  };
}
function provideMissingTranslationHandler(handler) {
  return {
    provide: MissingTranslationHandler,
    useClass: handler
  };
}
function provideTranslateService(config = {}) {
  return defaultProviders(__spreadValues({
    compiler: provideTranslateCompiler(TranslateNoOpCompiler),
    parser: provideTranslateParser(TranslateDefaultParser),
    loader: provideTranslateLoader(TranslateNoOpLoader),
    missingTranslationHandler: provideMissingTranslationHandler(DefaultMissingTranslationHandler)
  }, config), true);
}
function defaultProviders(config = {}, provideStore) {
  const providers = [];
  if (config.loader) {
    providers.push(config.loader);
  }
  if (config.compiler) {
    providers.push(config.compiler);
  }
  if (config.parser) {
    providers.push(config.parser);
  }
  if (config.missingTranslationHandler) {
    providers.push(config.missingTranslationHandler);
  }
  if (provideStore) {
    providers.push(TranslateStore);
  }
  if (config.useDefaultLang || config.defaultLanguage) {
    console.warn("The `useDefaultLang` and `defaultLanguage` options are deprecated. Please use `fallbackLang` instead.");
    if (config.useDefaultLang === true && config.defaultLanguage) {
      config.fallbackLang = config.defaultLanguage;
    }
  }
  const serviceConfig = {
    fallbackLang: config.fallbackLang ?? null,
    lang: config.lang,
    extend: config.extend ?? false
  };
  providers.push({
    provide: TRANSLATE_SERVICE_CONFIG,
    useValue: serviceConfig
  });
  providers.push({
    provide: TranslateService,
    useClass: TranslateService,
    deps: [TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, TRANSLATE_SERVICE_CONFIG]
  });
  return providers;
}
var TranslateModule = class _TranslateModule {
  /**
   * Use this method in your root module to provide the TranslateService
   */
  static forRoot(config = {}) {
    return {
      ngModule: _TranslateModule,
      providers: [...defaultProviders(__spreadValues({
        compiler: provideTranslateCompiler(TranslateNoOpCompiler),
        parser: provideTranslateParser(TranslateDefaultParser),
        loader: provideTranslateLoader(TranslateNoOpLoader),
        missingTranslationHandler: provideMissingTranslationHandler(DefaultMissingTranslationHandler)
      }, config), true)]
    };
  }
  /**
   * Use this method in your other (non-root) modules to import the directive/pipe
   */
  static forChild(config = {}) {
    return {
      ngModule: _TranslateModule,
      providers: [...defaultProviders(config, config.isolate ?? false)]
    };
  }
  static \u0275fac = function TranslateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TranslateModule,
    imports: [TranslatePipe, TranslateDirective],
    exports: [TranslatePipe, TranslateDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateModule, [{
    type: NgModule,
    args: [{
      imports: [TranslatePipe, TranslateDirective],
      exports: [TranslatePipe, TranslateDirective]
    }]
  }], null, null);
})();

// src/_core/_client/http.0.config.controller.ts
var URL_CONTRL_USERZ;
(function(URL_CONTRL_USERZ2) {
  URL_CONTRL_USERZ2["ProjectzLookup"] = "_projectz-lookup";
  URL_CONTRL_USERZ2["ProjectzLookupBase"] = "_projectz-lookup-base";
  URL_CONTRL_USERZ2["UserzAdmin"] = "userz-admin";
  URL_CONTRL_USERZ2["UserzTeacher"] = "userz-teacher";
  URL_CONTRL_USERZ2["UserzParent"] = "userz-parent";
  URL_CONTRL_USERZ2["UserzStudent"] = "userz-student";
  URL_CONTRL_USERZ2["TypeVideo"] = "type-video";
  URL_CONTRL_USERZ2["TypeUserz"] = "type-userz";
})(URL_CONTRL_USERZ || (URL_CONTRL_USERZ = {}));
var URL_CONTRL_EDU;
(function(URL_CONTRL_EDU2) {
  URL_CONTRL_EDU2["ProjectzLookup"] = "_projectz-lookup";
  URL_CONTRL_EDU2["ProjectzLookupBase"] = "_projectz-lookup-base";
  URL_CONTRL_EDU2["Library"] = "_projectz-lookup-base";
  URL_CONTRL_EDU2["LibraryCabinet"] = "_projectz-lookup-base";
  URL_CONTRL_EDU2["LibraryShelf"] = "_projectz-lookup-base";
  URL_CONTRL_EDU2["LibraryBook"] = "_projectz-lookup-base";
  URL_CONTRL_EDU2["BookIssue"] = "_projectz-lookup-base";
  URL_CONTRL_EDU2["Institute"] = "institute";
  URL_CONTRL_EDU2["Classz"] = "classz";
  URL_CONTRL_EDU2["Section"] = "section";
  URL_CONTRL_EDU2["ClassSection"] = "_projectz-lookup-base";
  URL_CONTRL_EDU2["Subjectz"] = "subjectz";
  URL_CONTRL_EDU2["Book"] = "book";
})(URL_CONTRL_EDU || (URL_CONTRL_EDU = {}));

// src/_core/_client/http.0.config.endpoints.ts
var EP;
(function(EP2) {
  EP2["NotSet"] = "NO_SET";
  EP2["None"] = "NONE";
  EP2["Add"] = "add";
  EP2["Update"] = "update";
  EP2["UpdateStatus"] = "update-status";
  EP2["UpdateDelete"] = "update-delete";
  EP2["Delete"] = "delete";
  EP2["Get"] = "get";
  EP2["Gets"] = "gets";
  EP2["GetsByIds"] = "gets-by-ids";
  EP2["GetsLookup"] = "gets-lookup";
  EP2["GetsByIdsLookup"] = "gets-by-ids-lookup";
  EP2["GetsPaginate"] = "gets-paginate";
  EP2["GetsPaginateOptions"] = "gets-paginate-options";
  EP2["GetsCSV"] = "gets-csv";
  EP2["GetsOption"] = "gets-option";
})(EP || (EP = {}));
var URL_SRVC;
(function(URL_SRVC2) {
  URL_SRVC2["Copyz"] = "Copyz";
  URL_SRVC2["Gateway"] = "Gateway";
  URL_SRVC2["Job"] = "Job";
  URL_SRVC2["Auth"] = "Auth";
  URL_SRVC2["Hierarhcy"] = "Hierarhcy";
  URL_SRVC2["Userz"] = "Userz";
  URL_SRVC2["Edu"] = "Edu";
  URL_SRVC2["Finance"] = "Finance";
  URL_SRVC2["Exam"] = "Exam";
})(URL_SRVC || (URL_SRVC = {}));
var URL_CONTRL = {
  Userz: URL_CONTRL_USERZ,
  Edu: URL_CONTRL_EDU
};

// src/_core/service/srvc.app.injector.ts
var AppInjector = class {
  static _injector;
  static set injector(injector) {
    this._injector = injector;
  }
  static get injector() {
    return this._injector;
  }
  static get(token, notFoundValue) {
    return this._injector.get(token, notFoundValue);
  }
};

// src/environments/environment.ts
var environment = {
  production: false,
  API_URL: "http://localhost:1100/api/",
  API_URL_Gateway: "http://localhost:1100/api"
};

// src/_core/_client/http.1.wrapper.ts
var HttpBaseService = class {
  srvc;
  domain;
  http = inject(HttpClient);
  constructor(srvc, domain = environment.API_URL_Gateway) {
    this.srvc = srvc;
    this.domain = domain;
    this.http = AppInjector.get(HttpClient);
  }
  Get(httpRequest) {
    return this.http.get(this.setURL(httpRequest), this.setOptions(httpRequest));
  }
  Post(httpRequest) {
    return this.http.post(this.setURL(httpRequest), httpRequest?.body || { includes: null }, this.setOptions(httpRequest));
  }
  Put(httpRequest) {
    return this.http.put(this.setURL(httpRequest), httpRequest.body, this.setOptions(httpRequest));
  }
  Patch(httpRequest) {
    return this.http.patch(this.setURL(httpRequest), httpRequest.body, this.setOptions(httpRequest));
  }
  Delete(httpRequest) {
    return this.http.delete(this.setURL(httpRequest), this.setOptions(httpRequest));
  }
  setURL(httpRequest) {
    if (httpRequest.fullUrl)
      return httpRequest.fullUrl;
    let result = `${httpRequest.domain || this.domain}/${httpRequest.srvc || this.srvc}/v1/${httpRequest.cntrl}`;
    if (httpRequest?.ep)
      result += "/" + httpRequest.ep;
    if (httpRequest?.resource)
      result += "/" + httpRequest.resource;
    return result;
  }
  setOptions(httpRequest) {
    return {
      params: httpRequest.query
    };
  }
  get defaultParam() {
    return {
      domain: this.domain,
      srvc: this.srvc,
      cntrl: "",
      ep: EP.NotSet,
      query: void 0
    };
  }
};

// src/_core/_client/http.2.endpoints.ts
var HTTPEnpointsService = class {
  client;
  constructor(srvc, domain = environment.API_URL_Gateway) {
    this.client = new HttpBaseService(srvc, domain);
  }
  Add(httpRequest) {
    httpRequest.ep = EP.Add;
    return this.client.Post(httpRequest);
  }
  Update(httpRequest) {
    httpRequest.ep = EP.Update;
    return this.client.Put(httpRequest);
  }
  UpdateStatus(httpRequest) {
    httpRequest.ep = EP.UpdateStatus;
    return this.client.Patch(httpRequest);
  }
  UpdateDelete(httpRequest) {
    httpRequest.ep = EP.UpdateDelete;
    return this.client.Patch(httpRequest);
  }
  Delete(httpRequest) {
    httpRequest.ep = EP.Delete;
    return this.client.Delete(httpRequest);
  }
  Get(httpRequest) {
    httpRequest.ep = EP.Get;
    return this.client.Post(httpRequest);
  }
  Gets(httpRequest) {
    httpRequest.ep = EP.Gets;
    return this.client.Post(httpRequest);
  }
  GetsOption(httpRequest) {
    httpRequest.ep = EP.GetsOption;
    return this.client.Post(httpRequest);
  }
  GetsByIds(httpRequest) {
    httpRequest.ep = EP.GetsByIds;
    return this.client.Post(httpRequest);
  }
  GetsLookup(httpRequest) {
    httpRequest.ep = EP.GetsLookup;
    return this.client.Get(httpRequest);
  }
  GetsByIdsLookup(httpRequest) {
    httpRequest.ep = EP.GetsByIdsLookup;
    return this.client.Post(httpRequest);
  }
  GetsPaginate(httpRequest) {
    httpRequest.ep = EP.GetsPaginate;
    return this.client.Post(httpRequest);
  }
  GetsPaginateOptions(httpRequest) {
    httpRequest.ep = EP.GetsPaginateOptions;
    return this.client.Post(httpRequest);
  }
  GetsCSV(httpRequest) {
    httpRequest.ep = EP.GetsCSV;
    return this.client.Post(httpRequest);
  }
};

// src/_core/_client/http.3.uow.ts
var HTTP_UOW = class _HTTP_UOW {
  // public readonly client = new HttpBaseService(null);
  Client = new HTTPEnpointsService(URL_SRVC.Gateway);
  Userz = new HTTPEnpointsService(URL_SRVC.Userz);
  Edu = new HTTPEnpointsService(URL_SRVC.Edu);
  constructor() {
  }
  static \u0275fac = function HTTP_UOW_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HTTP_UOW)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HTTP_UOW, factory: _HTTP_UOW.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HTTP_UOW, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/.pnpm/@angular+cdk@22.0.2_@angula_48c8b55feda0d9d20e0646dd7488a25d/node_modules/@angular/cdk/fesm2022/dialog.mjs
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
}
var DialogConfig = class {
  viewContainerRef;
  injector;
  id;
  role = "dialog";
  panelClass = "";
  hasBackdrop = true;
  backdropClass = "";
  disableClose = false;
  closePredicate;
  width = "";
  height = "";
  minWidth;
  minHeight;
  maxWidth;
  maxHeight;
  positionStrategy;
  data = null;
  direction;
  ariaDescribedBy = null;
  ariaLabelledBy = null;
  ariaLabel = null;
  ariaModal = false;
  autoFocus = "first-tabbable";
  restoreFocus = true;
  scrollStrategy;
  closeOnNavigation = true;
  closeOnDestroy = true;
  closeOnOverlayDetachments = true;
  disableAnimations = false;
  providers;
  container;
  templateContext;
  bindings;
};
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _config;
  _interactivityChecker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _focusMonitor = inject(FocusMonitor);
  _renderer = inject(Renderer2);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  _portalOutlet;
  _focusTrapped = new Subject();
  _focusTrap = null;
  _elementFocusedBeforeDialogWasOpened = null;
  _closeInteractionType = null;
  _ariaLabelledByQueue = [];
  _isDestroyed = false;
  constructor() {
    super();
    this._config = inject(DialogConfig, {
      optional: true
    }) || new DialogConfig();
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id2) {
    this._ariaLabelledByQueue.push(id2);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id2) {
    const index = this._ariaLabelledByQueue.indexOf(id2);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._captureInitialFocus();
  }
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._focusTrapped.complete();
    this._isDestroyed = true;
    this._restoreFocus();
  }
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  attachDomPortal = (portal) => {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachDomPortal(portal);
    this._contentAttached();
    return result;
  };
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          deregisterBlur();
          deregisterMousedown();
          element.removeAttribute("tabindex");
        };
        const deregisterBlur = this._renderer.listen(element, "blur", callback);
        const deregisterMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  _trapFocus(options) {
    if (this._isDestroyed) {
      return;
    }
    afterNextRender(() => {
      const element = this._elementRef.nativeElement;
      switch (this._config.autoFocus) {
        case false:
        case "dialog":
          if (!this._containsFocus()) {
            element.focus(options);
          }
          break;
        case true:
        case "first-tabbable":
          const focusedSuccessfully = this._focusTrap?.focusInitialElement(options);
          if (!focusedSuccessfully) {
            this._focusDialogContainer(options);
          }
          break;
        case "first-heading":
          this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', options);
          break;
        default:
          this._focusByCssSelector(this._config.autoFocus, options);
          break;
      }
      this._focusTrapped.next();
    }, {
      injector: this._injector
    });
  }
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === "string") {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === "boolean") {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  _focusDialogContainer(options) {
    this._elementRef.nativeElement.focus?.(options);
  }
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
      }
    }
  }
  static \u0275fac = function CdkDialogContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDialogContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkDialogContainer,
    selectors: [["cdk-dialog-container"]],
    viewQuery: function CdkDialogContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkPortalOutlet, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalOutlet = _t.first);
      }
    },
    hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
    hostVars: 6,
    hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function CdkDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".cdk-dialog-container {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n"],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDialogContainer, [{
    type: Component,
    args: [{
      selector: "cdk-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Eager,
      imports: [CdkPortalOutlet],
      host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n"]
    }]
  }], () => [], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var DialogRef = class {
  overlayRef;
  config;
  componentInstance = null;
  componentRef = null;
  containerInstance;
  disableClose;
  closed = new Subject();
  backdropClick;
  keydownEvents;
  outsidePointerEvents;
  id;
  _detachSubscription;
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose && this._canClose()) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      } else {
        this.containerInstance._recaptureFocus?.();
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  close(result, options) {
    if (this._canClose(result)) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
  _canClose(result) {
    const config = this.config;
    return !!this.containerInstance && (!config.closePredicate || config.closePredicate(result, config, this.componentInstance));
  }
};
var DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createBlockScrollStrategy(injector);
  }
});
var DIALOG_DATA = new InjectionToken("DialogData");
var DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
function getDirectionality(value) {
  const valueSignal = signal(value, ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  const change = new EventEmitter();
  return {
    valueSignal,
    get value() {
      return valueSignal();
    },
    change,
    ngOnDestroy() {
      change.complete();
    }
  };
}
var Dialog = class _Dialog {
  _injector = inject(Injector);
  _defaultOptions = inject(DEFAULT_DIALOG_CONFIG, {
    optional: true
  });
  _parentDialog = inject(_Dialog, {
    optional: true,
    skipSelf: true
  });
  _overlayContainer = inject(OverlayContainer);
  _idGenerator = inject(_IdGenerator);
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  _ariaHiddenElements = /* @__PURE__ */ new Map();
  _scrollStrategy = inject(DIALOG_SCROLL_STRATEGY);
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = __spreadValues(__spreadValues({}, defaults), config);
    config.id = config.id || this._idGenerator.getId("cdk-dialog-");
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = createOverlayRef(this._injector, overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    if (!this.openDialogs.length) {
      const overlayContainer = this._overlayContainer.getContainerElement();
      if (dialogContainer._focusTrapped) {
        dialogContainer._focusTrapped.pipe(take(1)).subscribe(() => {
          this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
        });
      } else {
        this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
      }
    }
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  closeAll() {
    reverseForEach(this.openDialogs, (dialog) => dialog.close());
  }
  getDialogById(id2) {
    return this.openDialogs.find((dialog) => dialog.id === id2);
  }
  ngOnDestroy() {
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  _getOverlayConfig(config) {
    const state = new OverlayConfig({
      positionStrategy: config.positionStrategy || createGlobalPositionStrategy().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation,
      disableAnimations: config.disableAnimations
    });
    if (config.backdropClass) {
      state.backdropClass = config.backdropClass;
    }
    return state;
  }
  _attachContainer(overlay, dialogRef, config) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === "function") {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({
      parent: userInjector || this._injector,
      providers
    }));
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
      }
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector, null, config.bindings));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === "function") {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: Directionality,
        useValue: getDirectionality(config.direction)
      });
    }
    return Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  _hideNonDialogContentFromAssistiveTechnology(overlayContainer) {
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live") && !sibling.hasAttribute("popover")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  static \u0275fac = function Dialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dialog)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _Dialog,
    factory: _Dialog.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Service
  }], null, null);
})();
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var DialogModule = class _DialogModule {
  static \u0275fac = function DialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DialogModule,
    imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
    exports: [PortalModule, CdkDialogContainer]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [Dialog],
    imports: [OverlayModule, PortalModule, A11yModule, PortalModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
      exports: [PortalModule, CdkDialogContainer],
      providers: [Dialog]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/dialog.mjs
function MatDialogContainer_ng_template_2_Template(rf, ctx) {
}
var MatDialogConfig = class {
  viewContainerRef;
  injector;
  id;
  role = "dialog";
  panelClass = "";
  hasBackdrop = true;
  backdropClass = "";
  disableClose = false;
  closePredicate;
  width = "";
  height = "";
  minWidth;
  minHeight;
  maxWidth;
  maxHeight;
  position;
  data = null;
  direction;
  ariaDescribedBy = null;
  ariaLabelledBy = null;
  ariaLabel = null;
  ariaModal = false;
  autoFocus = "first-tabbable";
  restoreFocus = true;
  delayFocusTrap = true;
  scrollStrategy;
  closeOnNavigation = true;
  enterAnimationDuration;
  exitAnimationDuration;
  bindings;
};
var OPEN_CLASS = "mdc-dialog--open";
var OPENING_CLASS = "mdc-dialog--opening";
var CLOSING_CLASS = "mdc-dialog--closing";
var OPEN_ANIMATION_DURATION = 150;
var CLOSE_ANIMATION_DURATION = 75;
var MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
  _animationStateChanged = new EventEmitter();
  _animationsEnabled = !_animationsDisabled();
  _actionSectionCount = 0;
  _hostElement = this._elementRef.nativeElement;
  _enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
  _exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
  _animationTimer = null;
  _contentAttached() {
    super._contentAttached();
    this._startOpenAnimation();
  }
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: "opening",
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: "closing",
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  _finishDialogOpen = () => {
    this._clearAnimationClasses();
    this._openAnimationDone(this._enterAnimationDuration);
  };
  _finishDialogClose = () => {
    this._clearAnimationClasses();
    this._animationStateChanged.emit({
      state: "closed",
      totalTime: this._exitAnimationDuration
    });
  };
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    this._animationTimer = setTimeout(callback, duration);
  }
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: "opened",
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
    return ref;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogContainer_BaseFactory;
    return function MatDialogContainer_Factory(__ngFactoryType__) {
      return (\u0275MatDialogContainer_BaseFactory || (\u0275MatDialogContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogContainer)))(__ngFactoryType__ || _MatDialogContainer);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDialogContainer,
    selectors: [["mat-dialog-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
    hostVars: 10,
    hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx._config.id);
        \u0275\u0275attribute("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        \u0275\u0275classProp("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 0,
    consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
    template: function MatDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ['.mat-mdc-dialog-container {\n  width: 100%;\n  height: 100%;\n  display: block;\n  box-sizing: border-box;\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n  outline: 0;\n}\n\n.cdk-overlay-pane.mat-mdc-dialog-panel {\n  max-width: var(--mat-dialog-container-max-width, 560px);\n  min-width: var(--mat-dialog-container-min-width, 280px);\n}\n@media (max-width: 599px) {\n  .cdk-overlay-pane.mat-mdc-dialog-panel {\n    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));\n  }\n}\n\n.mat-mdc-dialog-inner-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  box-sizing: border-box;\n  height: 100%;\n  opacity: 0;\n  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n}\n.mdc-dialog--closing .mat-mdc-dialog-inner-container {\n  transition: opacity 75ms linear;\n  transform: none;\n}\n.mdc-dialog--open .mat-mdc-dialog-inner-container {\n  opacity: 1;\n}\n._mat-animation-noopable .mat-mdc-dialog-inner-container {\n  transition: none;\n}\n\n.mat-mdc-dialog-surface {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 0;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow-y: auto;\n  outline: 0;\n  transform: scale(0.8);\n  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n  box-shadow: var(--mat-dialog-container-elevation-shadow, none);\n  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));\n  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));\n}\n[dir=rtl] .mat-mdc-dialog-surface {\n  text-align: right;\n}\n.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {\n  transform: none;\n}\n._mat-animation-noopable .mat-mdc-dialog-surface {\n  transition: none;\n}\n.mat-mdc-dialog-surface::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 2px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n\n.mat-mdc-dialog-title {\n  display: block;\n  position: relative;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  margin: 0 0 1px;\n  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);\n}\n.mat-mdc-dialog-title::before {\n  display: inline-block;\n  width: 0;\n  height: 40px;\n  content: "";\n  vertical-align: 0;\n}\n[dir=rtl] .mat-mdc-dialog-title {\n  text-align: right;\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-title {\n  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));\n  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));\n  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));\n  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));\n  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));\n}\n\n.mat-mdc-dialog-content {\n  display: block;\n  flex-grow: 1;\n  box-sizing: border-box;\n  margin: 0;\n  overflow: auto;\n  max-height: 65vh;\n}\n.mat-mdc-dialog-content > :first-child {\n  margin-top: 0;\n}\n.mat-mdc-dialog-content > :last-child {\n  margin-bottom: 0;\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-content {\n  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));\n  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));\n  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));\n  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));\n  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));\n  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-content {\n  padding: var(--mat-dialog-content-padding, 20px 24px);\n}\n.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {\n  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {\n  padding-top: 0;\n}\n\n.mat-mdc-dialog-actions {\n  display: flex;\n  position: relative;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 52px;\n  margin: 0;\n  border-top: 1px solid transparent;\n  padding: var(--mat-dialog-actions-padding, 16px 24px);\n  justify-content: var(--mat-dialog-actions-alignment, flex-end);\n}\n@media (forced-colors: active) {\n  .mat-mdc-dialog-actions {\n    border-top-color: CanvasText;\n  }\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {\n  justify-content: start;\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {\n  justify-content: center;\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {\n  justify-content: flex-end;\n}\n.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,\n.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 8px;\n}\n[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,\n[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mat-mdc-dialog-component-host {\n  display: contents;\n}\n'],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContainer, [{
    type: Component,
    args: [{
      selector: "mat-dialog-container",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Eager,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      },
      template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
      styles: ['.mat-mdc-dialog-container {\n  width: 100%;\n  height: 100%;\n  display: block;\n  box-sizing: border-box;\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n  outline: 0;\n}\n\n.cdk-overlay-pane.mat-mdc-dialog-panel {\n  max-width: var(--mat-dialog-container-max-width, 560px);\n  min-width: var(--mat-dialog-container-min-width, 280px);\n}\n@media (max-width: 599px) {\n  .cdk-overlay-pane.mat-mdc-dialog-panel {\n    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));\n  }\n}\n\n.mat-mdc-dialog-inner-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  box-sizing: border-box;\n  height: 100%;\n  opacity: 0;\n  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n}\n.mdc-dialog--closing .mat-mdc-dialog-inner-container {\n  transition: opacity 75ms linear;\n  transform: none;\n}\n.mdc-dialog--open .mat-mdc-dialog-inner-container {\n  opacity: 1;\n}\n._mat-animation-noopable .mat-mdc-dialog-inner-container {\n  transition: none;\n}\n\n.mat-mdc-dialog-surface {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 0;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow-y: auto;\n  outline: 0;\n  transform: scale(0.8);\n  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);\n  max-height: inherit;\n  min-height: inherit;\n  min-width: inherit;\n  max-width: inherit;\n  box-shadow: var(--mat-dialog-container-elevation-shadow, none);\n  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));\n  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));\n}\n[dir=rtl] .mat-mdc-dialog-surface {\n  text-align: right;\n}\n.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {\n  transform: none;\n}\n._mat-animation-noopable .mat-mdc-dialog-surface {\n  transition: none;\n}\n.mat-mdc-dialog-surface::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 2px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n\n.mat-mdc-dialog-title {\n  display: block;\n  position: relative;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  margin: 0 0 1px;\n  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);\n}\n.mat-mdc-dialog-title::before {\n  display: inline-block;\n  width: 0;\n  height: 40px;\n  content: "";\n  vertical-align: 0;\n}\n[dir=rtl] .mat-mdc-dialog-title {\n  text-align: right;\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-title {\n  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));\n  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));\n  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));\n  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));\n  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));\n}\n\n.mat-mdc-dialog-content {\n  display: block;\n  flex-grow: 1;\n  box-sizing: border-box;\n  margin: 0;\n  overflow: auto;\n  max-height: 65vh;\n}\n.mat-mdc-dialog-content > :first-child {\n  margin-top: 0;\n}\n.mat-mdc-dialog-content > :last-child {\n  margin-bottom: 0;\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-content {\n  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));\n  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));\n  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));\n  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));\n  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));\n  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-content {\n  padding: var(--mat-dialog-content-padding, 20px 24px);\n}\n.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {\n  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);\n}\n.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {\n  padding-top: 0;\n}\n\n.mat-mdc-dialog-actions {\n  display: flex;\n  position: relative;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 52px;\n  margin: 0;\n  border-top: 1px solid transparent;\n  padding: var(--mat-dialog-actions-padding, 16px 24px);\n  justify-content: var(--mat-dialog-actions-alignment, flex-end);\n}\n@media (forced-colors: active) {\n  .mat-mdc-dialog-actions {\n    border-top-color: CanvasText;\n  }\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {\n  justify-content: start;\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {\n  justify-content: center;\n}\n.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {\n  justify-content: flex-end;\n}\n.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,\n.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 8px;\n}\n[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,\n[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.mat-mdc-dialog-component-host {\n  display: contents;\n}\n']
    }]
  }], null, null);
})();
var TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
var MatDialogState;
(function(MatDialogState2) {
  MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
  MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
  MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
var MatDialogRef = class {
  _ref;
  _config;
  _containerInstance;
  componentInstance;
  componentRef = null;
  disableClose;
  id;
  _afterOpened = new ReplaySubject(1);
  _beforeClosed = new ReplaySubject(1);
  _result;
  _closeFallbackTimeout;
  _state = MatDialogState.OPEN;
  _closeInteractionType;
  constructor(_ref, _config, _containerInstance) {
    this._ref = _ref;
    this._config = _config;
    this._containerInstance = _containerInstance;
    this.disableClose = _config.disableClose;
    this.id = _ref.id;
    _ref.addPanelClass("mat-mdc-dialog-panel");
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
      }
    });
  }
  close(dialogResult) {
    const closePredicate = this._config.closePredicate;
    if (closePredicate && !closePredicate(dialogResult, this._config, this.componentInstance)) {
      return;
    }
    this._result = dialogResult;
    this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  afterOpened() {
    return this._afterOpened;
  }
  afterClosed() {
    return this._ref.closed;
  }
  beforeClosed() {
    return this._beforeClosed;
  }
  backdropClick() {
    return this._ref.backdropClick;
  }
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  updateSize(width = "", height = "") {
    this._ref.updateSize(width, height);
    return this;
  }
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  getState() {
    return this._state;
  }
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
};
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createBlockScrollStrategy(injector);
  }
});
var MatDialog = class _MatDialog {
  _defaultOptions = inject(MAT_DIALOG_DEFAULT_OPTIONS, {
    optional: true
  });
  _scrollStrategy = inject(MAT_DIALOG_SCROLL_STRATEGY);
  _parentDialog = inject(_MatDialog, {
    optional: true,
    skipSelf: true
  });
  _idGenerator = inject(_IdGenerator);
  _injector = inject(Injector);
  _dialog = inject(Dialog);
  _animationsDisabled = _animationsDisabled();
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  dialogConfigClass = MatDialogConfig;
  _dialogRefConstructor;
  _dialogContainerType;
  _dialogDataToken;
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  constructor() {
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  open(componentOrTemplateRef, config) {
    let dialogRef;
    config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
    config.id = config.id || this._idGenerator.getId("mat-mdc-dialog-");
    config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
      positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().centerVertically(),
      disableClose: true,
      closePredicate: void 0,
      closeOnDestroy: false,
      closeOnOverlayDetachments: false,
      disableAnimations: this._animationsDisabled || config.enterAnimationDuration?.toLocaleString() === "0" || config.exitAnimationDuration?.toString() === "0",
      container: {
        type: this._dialogContainerType,
        providers: () => [{
          provide: this.dialogConfigClass,
          useValue: config
        }, {
          provide: DialogConfig,
          useValue: config
        }]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
        dialogRef.updatePosition(config?.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];
      }
    }));
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  getDialogById(id2) {
    return this.openDialogs.find((dialog) => dialog.id === id2);
  }
  ngOnDestroy() {
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
  static \u0275fac = function MatDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialog)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _MatDialog,
    factory: _MatDialog.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialog, [{
    type: Service
  }], () => [], null);
})();
var MatDialogClose = class _MatDialogClose {
  dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  ariaLabel;
  type = "button";
  dialogResult;
  _matDialogClose;
  ngOnInit() {
    if (!this.dialogRef) {
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes["_matDialogClose"];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    if (this._elementRef.nativeElement.getAttribute("aria-disabled") === "true") {
      return;
    }
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
  static \u0275fac = function MatDialogClose_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogClose)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogClose,
    selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
    hostVars: 2,
    hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatDialogClose_click_HostBindingHandler($event) {
          return ctx._onButtonClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      type: "type",
      dialogResult: [0, "mat-dialog-close", "dialogResult"],
      _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
    },
    exportAs: ["matDialogClose"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogClose, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-close], [matDialogClose]",
      exportAs: "matDialogClose",
      host: {
        "(click)": "_onButtonClick($event)",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.type]": "type"
      }
    }]
  }], null, {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    type: [{
      type: Input
    }],
    dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }],
    _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }]
  });
})();
var MatDialogLayoutSection = class _MatDialogLayoutSection {
  _dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    const instance = this._dialogRef?._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
  static \u0275fac = function MatDialogLayoutSection_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogLayoutSection)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogLayoutSection
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogLayoutSection, [{
    type: Directive
  }], null, null);
})();
var MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
  id = inject(_IdGenerator).getId("mat-mdc-dialog-title-");
  _onAdd() {
    this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
  }
  _onRemove() {
    this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogTitle_BaseFactory;
    return function MatDialogTitle_Factory(__ngFactoryType__) {
      return (\u0275MatDialogTitle_BaseFactory || (\u0275MatDialogTitle_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogTitle)))(__ngFactoryType__ || _MatDialogTitle);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogTitle,
    selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
    hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
    hostVars: 1,
    hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matDialogTitle"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogTitle, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-title], [matDialogTitle]",
      exportAs: "matDialogTitle",
      host: {
        "class": "mat-mdc-dialog-title mdc-dialog__title",
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatDialogContent = class _MatDialogContent {
  static \u0275fac = function MatDialogContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogContent,
    selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
    hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
    features: [\u0275\u0275HostDirectivesFeature([CdkScrollable])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContent, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        "class": "mat-mdc-dialog-content mdc-dialog__content"
      },
      hostDirectives: [CdkScrollable]
    }]
  }], null, null);
})();
var MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
  align;
  _onAdd() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
  }
  _onRemove() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogActions_BaseFactory;
    return function MatDialogActions_Factory(__ngFactoryType__) {
      return (\u0275MatDialogActions_BaseFactory || (\u0275MatDialogActions_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogActions)))(__ngFactoryType__ || _MatDialogActions);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogActions,
    selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
    hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
    hostVars: 6,
    hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogActions, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      host: {
        "class": "mat-mdc-dialog-actions mdc-dialog__actions",
        "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
        "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
        "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
var MatDialogModule = class _MatDialogModule {
  static \u0275fac = function MatDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatDialogModule,
    imports: [DialogModule, OverlayModule, PortalModule, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
    exports: [BidiModule, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatDialog],
    imports: [DialogModule, OverlayModule, PortalModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, OverlayModule, PortalModule, ...DIRECTIVES],
      exports: [BidiModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();

// src/_core/service/srvc.provider.ts
var ProviderService = class _ProviderService {
  static injector = void 0;
  constructor(injector) {
    _ProviderService.injector = injector;
  }
  static getInstance() {
    if (!_ProviderService.injector) {
      throw new Error("DecoratorService not initialized");
    }
    return _ProviderService.injector;
  }
  static \u0275fac = function ProviderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProviderService)(\u0275\u0275inject(Injector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProviderService, factory: _ProviderService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProviderService, [{
    type: Injectable
  }], () => [{ type: Injector }], null);
})();

// src/_core/service/srvc.util.ts
var UtilService = class _UtilService {
  _datePipe;
  _router;
  date;
  constructor() {
    this._datePipe = AppInjector.get(DatePipe);
    this._router = AppInjector.get(Router);
  }
  _getCurrentdatenadTime() {
    this.date = /* @__PURE__ */ new Date();
    return this._datePipe.transform(/* @__PURE__ */ new Date(), "dd-MMM-yyyy h:mm a");
  }
  // DATE CONVERTER
  _dateConverter(date) {
    return this._datePipe.transform(date, "dd-MMM-yyyy h:mm a");
  }
  // DATE ONLY
  _dateOnly(date = /* @__PURE__ */ new Date()) {
    return this._datePipe.transform(date, "yyyy-MM-dd");
  }
  removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));
  }
  // RELOAD COMPONENT WITHOUT REFRESH
  reloadComponent() {
    const currentUrl = this._router.url;
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = "reload";
    this._router.navigate([currentUrl]);
  }
  reloadCmpNew() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this._router.navigate([currentUrl]);
      console.log(currentUrl);
    });
  }
  static \u0275fac = function UtilService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtilService, factory: _UtilService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/_core/_template/srvc.theme.ts
var ThemeService = class _ThemeService {
  rendererFactory;
  document;
  renderer;
  currentThemeSubject = new BehaviorSubject("light");
  currentTheme$ = this.currentThemeSubject.asObservable();
  constructor(rendererFactory, document2) {
    this.rendererFactory = rendererFactory;
    this.document = document2;
    this.renderer = rendererFactory.createRenderer(null, null);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      this.setTheme(prefersDark ? "dark" : "light");
    }
  }
  setTheme(theme) {
    this.renderer.removeClass(this.document.body, "light-theme");
    this.renderer.removeClass(this.document.body, "dark-theme");
    this.renderer.addClass(this.document.body, `${theme}-theme`);
    localStorage.setItem("theme", theme);
    this.currentThemeSubject.next(theme);
  }
  toggleTheme() {
    const newTheme = this.currentThemeSubject.value === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: RendererFactory2 }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: () => {
    const _document = inject(DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
      getPathname: () => _location ? _location.pathname + _location.search : ""
    };
  }
});
var MatProgressBar = class _MatProgressBar {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  constructor() {
    const animationsState = _getAnimationsState();
    const defaults = inject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._isNoopAnimation = animationsState === "di-disabled";
    if (animationsState === "reduced-motion") {
      this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  _isNoopAnimation;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _value = 0;
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _bufferValue = 0;
  animationEnd = new EventEmitter();
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  _mode = "determinate";
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._cleanupTransitionEnd?.();
  }
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  _transitionendHandler = (event) => {
    if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
      return;
    }
    if (this.mode === "determinate" || this.mode === "buffer") {
      this._ngZone.run(() => this.animationEnd.next({
        value: this.value
      }));
    }
  };
  static \u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressBar,
    selectors: [["mat-progress-bar"]],
    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
    hostVars: 10,
    hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
      }
    },
    inputs: {
      color: "color",
      value: [2, "value", "value", numberAttribute],
      bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
      mode: "mode"
    },
    outputs: {
      animationEnd: "animationEnd"
    },
    exportAs: ["matProgressBar"],
    decls: 7,
    vars: 5,
    consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
    template: function MatProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275conditionalCreate(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 3);
        \u0275\u0275domElement(4, "span", 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 5);
        \u0275\u0275domElement(6, "span", 4);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
      }
    },
    styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static \u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressBarModule,
    imports: [MatProgressBar],
    exports: [MatProgressBar, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, BidiModule]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@angular+cdk@22.0.2_@angula_48c8b55feda0d9d20e0646dd7488a25d/node_modules/@angular/cdk/fesm2022/_dispose-view-repeater-strategy-chunk.mjs
var _DisposeViewRepeaterStrategy = class {
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
        operation = _ViewRepeaterOperation.INSERTED;
      } else if (currentIndex == null) {
        viewContainerRef.remove(adjustedPreviousIndex);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
  }
};

// node_modules/.pnpm/@angular+cdk@22.0.2_@angula_48c8b55feda0d9d20e0646dd7488a25d/node_modules/@angular/cdk/fesm2022/table.mjs
var _c0 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c1 = ["caption", "colgroup, col", "*"];
function CdkTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function CdkTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 0);
    \u0275\u0275elementContainer(3, 2)(4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 4);
    \u0275\u0275elementEnd();
  }
}
function CdkTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 2)(2, 3)(3, 4);
  }
}
function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var CDK_TABLE = new InjectionToken("CDK_TABLE");
var TEXT_COLUMN_OPTIONS = new InjectionToken("text-column-options");
var CdkCellDef = class _CdkCellDef {
  template = inject(TemplateRef);
  static \u0275fac = function CdkCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCellDef,
    selectors: [["", "cdkCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkCellDef]"
    }]
  }], null, null);
})();
var CdkHeaderCellDef = class _CdkHeaderCellDef {
  template = inject(TemplateRef);
  static \u0275fac = function CdkHeaderCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderCellDef,
    selectors: [["", "cdkHeaderCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderCellDef]"
    }]
  }], null, null);
})();
var CdkFooterCellDef = class _CdkFooterCellDef {
  template = inject(TemplateRef);
  static \u0275fac = function CdkFooterCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterCellDef,
    selectors: [["", "cdkFooterCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterCellDef]"
    }]
  }], null, null);
})();
var CdkColumnDef = class _CdkColumnDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  _name;
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  get stickyEnd() {
    return this._stickyEnd;
  }
  set stickyEnd(value) {
    if (value !== this._stickyEnd) {
      this._stickyEnd = value;
      this._hasStickyChanged = true;
    }
  }
  _stickyEnd = false;
  cell;
  headerCell;
  footerCell;
  cssClassFriendlyName;
  _columnCssClassName;
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  _updateColumnCssClassName() {
    this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
  }
  _setNameInput(value) {
    if (value) {
      this._name = value;
      this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, "-");
      this._updateColumnCssClassName();
    }
  }
  static \u0275fac = function CdkColumnDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkColumnDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkColumnDef,
    selectors: [["", "cdkColumnDef", ""]],
    contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkCellDef, 5)(dirIndex, CdkHeaderCellDef, 5)(dirIndex, CdkFooterCellDef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerCell = _t.first);
      }
    },
    inputs: {
      name: [0, "cdkColumnDef", "name"],
      sticky: [2, "sticky", "sticky", booleanAttribute],
      stickyEnd: [2, "stickyEnd", "stickyEnd", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkColumnDef, [{
    type: Directive,
    args: [{
      selector: "[cdkColumnDef]"
    }]
  }], null, {
    name: [{
      type: Input,
      args: ["cdkColumnDef"]
    }],
    sticky: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stickyEnd: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cell: [{
      type: ContentChild,
      args: [CdkCellDef]
    }],
    headerCell: [{
      type: ContentChild,
      args: [CdkHeaderCellDef]
    }],
    footerCell: [{
      type: ContentChild,
      args: [CdkFooterCellDef]
    }]
  });
})();
var BaseCdkCell = class {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }
};
var CdkHeaderCell = class _CdkHeaderCell extends BaseCdkCell {
  constructor() {
    super(inject(CdkColumnDef), inject(ElementRef));
  }
  static \u0275fac = function CdkHeaderCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderCell,
    selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCell, [{
    type: Directive,
    args: [{
      selector: "cdk-header-cell, th[cdk-header-cell]",
      host: {
        "class": "cdk-header-cell",
        "role": "columnheader"
      }
    }]
  }], () => [], null);
})();
var CdkFooterCell = class _CdkFooterCell extends BaseCdkCell {
  constructor() {
    const columnDef = inject(CdkColumnDef);
    const elementRef = inject(ElementRef);
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
  static \u0275fac = function CdkFooterCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterCell,
    selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
    hostAttrs: [1, "cdk-footer-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCell, [{
    type: Directive,
    args: [{
      selector: "cdk-footer-cell, td[cdk-footer-cell]",
      host: {
        "class": "cdk-footer-cell"
      }
    }]
  }], () => [], null);
})();
var CdkCell = class _CdkCell extends BaseCdkCell {
  constructor() {
    const columnDef = inject(CdkColumnDef);
    const elementRef = inject(ElementRef);
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
  static \u0275fac = function CdkCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCell,
    selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
    hostAttrs: [1, "cdk-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCell, [{
    type: Directive,
    args: [{
      selector: "cdk-cell, td[cdk-cell]",
      host: {
        "class": "cdk-cell"
      }
    }]
  }], () => [], null);
})();
var CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var BaseRowDef = class _BaseRowDef {
  template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  columns;
  _columnsDiffer;
  ngOnChanges(changes) {
    if (!this._columnsDiffer) {
      const columns = changes["columns"] && changes["columns"].currentValue || [];
      this._columnsDiffer = this._differs.find(columns).create();
      this._columnsDiffer.diff(columns);
    }
  }
  getColumnsDiff() {
    return this._columnsDiffer.diff(this.columns);
  }
  extractCellTemplate(column) {
    if (this instanceof CdkHeaderRowDef) {
      return column.headerCell.template;
    }
    if (this instanceof CdkFooterRowDef) {
      return column.footerCell.template;
    } else {
      return column.cell.template;
    }
  }
  static \u0275fac = function BaseRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseRowDef,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseRowDef, [{
    type: Directive
  }], null, null);
})();
var CdkHeaderRowDef = class _CdkHeaderRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkHeaderRowDef_BaseFactory;
    return function CdkHeaderRowDef_Factory(__ngFactoryType__) {
      return (\u0275CdkHeaderRowDef_BaseFactory || (\u0275CdkHeaderRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_CdkHeaderRowDef)))(__ngFactoryType__ || _CdkHeaderRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderRowDef,
    selectors: [["", "cdkHeaderRowDef", ""]],
    inputs: {
      columns: [0, "cdkHeaderRowDef", "columns"],
      sticky: [2, "cdkHeaderRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkHeaderRowDef"
      }]
    }]
  }], null, {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkHeaderRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkFooterRowDef = class _CdkFooterRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkFooterRowDef_BaseFactory;
    return function CdkFooterRowDef_Factory(__ngFactoryType__) {
      return (\u0275CdkFooterRowDef_BaseFactory || (\u0275CdkFooterRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_CdkFooterRowDef)))(__ngFactoryType__ || _CdkFooterRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterRowDef,
    selectors: [["", "cdkFooterRowDef", ""]],
    inputs: {
      columns: [0, "cdkFooterRowDef", "columns"],
      sticky: [2, "cdkFooterRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkFooterRowDef"
      }]
    }]
  }], null, {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkFooterRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkRowDef = class _CdkRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  when;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkRowDef_BaseFactory;
    return function CdkRowDef_Factory(__ngFactoryType__) {
      return (\u0275CdkRowDef_BaseFactory || (\u0275CdkRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_CdkRowDef)))(__ngFactoryType__ || _CdkRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkRowDef,
    selectors: [["", "cdkRowDef", ""]],
    inputs: {
      columns: [0, "cdkRowDefColumns", "columns"],
      when: [0, "cdkRowDefWhen", "when"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkRowDefColumns"
      }, {
        name: "when",
        alias: "cdkRowDefWhen"
      }]
    }]
  }], null, null);
})();
var CdkCellOutlet = class _CdkCellOutlet {
  _viewContainer = inject(ViewContainerRef);
  cells;
  context;
  static mostRecentCellOutlet = null;
  constructor() {
    _CdkCellOutlet.mostRecentCellOutlet = this;
  }
  ngOnDestroy() {
    if (_CdkCellOutlet.mostRecentCellOutlet === this) {
      _CdkCellOutlet.mostRecentCellOutlet = null;
    }
  }
  static \u0275fac = function CdkCellOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCellOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCellOutlet,
    selectors: [["", "cdkCellOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkCellOutlet]"
    }]
  }], () => [], null);
})();
var CdkHeaderRow = class _CdkHeaderRow {
  static \u0275fac = function CdkHeaderRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkHeaderRow,
    selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-header-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRow, [{
    type: Component,
    args: [{
      selector: "cdk-header-row, tr[cdk-header-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-header-row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Eager,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkFooterRow = class _CdkFooterRow {
  static \u0275fac = function CdkFooterRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkFooterRow,
    selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-footer-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRow, [{
    type: Component,
    args: [{
      selector: "cdk-footer-row, tr[cdk-footer-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-footer-row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Eager,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkRow = class _CdkRow {
  static \u0275fac = function CdkRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkRow,
    selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRow, [{
    type: Component,
    args: [{
      selector: "cdk-row, tr[cdk-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Eager,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkNoDataRow = class _CdkNoDataRow {
  templateRef = inject(TemplateRef);
  _contentClassNames = ["cdk-no-data-row", "cdk-row"];
  _cellClassNames = ["cdk-cell", "cdk-no-data-cell"];
  _cellSelector = "td, cdk-cell, [cdk-cell], .cdk-cell";
  static \u0275fac = function CdkNoDataRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkNoDataRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkNoDataRow,
    selectors: [["ng-template", "cdkNoDataRow", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkNoDataRow]"
    }]
  }], null, null);
})();
var STICKY_DIRECTIONS = ["top", "bottom", "left", "right"];
var StickyStyler = class {
  _isNativeHtmlTable;
  _stickCellCss;
  _isBrowser;
  _needsPositionStickyOnElement;
  direction;
  _positionListener;
  _tableInjector;
  _elemSizeCache = /* @__PURE__ */ new WeakMap();
  _resizeObserver = globalThis?.ResizeObserver ? new globalThis.ResizeObserver((entries) => this._updateCachedSizes(entries)) : null;
  _updatedStickyColumnsParamsToReplay = [];
  _stickyColumnsReplayTimeout = null;
  _cachedCellWidths = [];
  _borderCellCss;
  _destroyed = false;
  constructor(_isNativeHtmlTable, _stickCellCss, _isBrowser = true, _needsPositionStickyOnElement = true, direction, _positionListener, _tableInjector) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this.direction = direction;
    this._positionListener = _positionListener;
    this._tableInjector = _tableInjector;
    this._borderCellCss = {
      "top": `${_stickCellCss}-border-elem-top`,
      "bottom": `${_stickCellCss}-border-elem-bottom`,
      "left": `${_stickCellCss}-border-elem-left`,
      "right": `${_stickCellCss}-border-elem-right`
    };
  }
  clearStickyPositioning(rows, stickyDirections) {
    if (stickyDirections.includes("left") || stickyDirections.includes("right")) {
      this._removeFromStickyColumnReplayQueue(rows);
    }
    const elementsToClear = [];
    for (const row of rows) {
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }
      elementsToClear.push(row, ...Array.from(row.children));
    }
    afterNextRender({
      write: () => {
        for (const element of elementsToClear) {
          this._removeStickyStyle(element, stickyDirections);
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true, replay = true) {
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some((state) => state) || stickyEndStates.some((state) => state))) {
      this._positionListener?.stickyColumnsUpdated({
        sizes: []
      });
      this._positionListener?.stickyEndColumnsUpdated({
        sizes: []
      });
      return;
    }
    const firstRow = rows[0];
    const numCells = firstRow.children.length;
    const isRtl = this.direction === "rtl";
    const start = isRtl ? "right" : "left";
    const end = isRtl ? "left" : "right";
    const lastStickyStart = stickyStartStates.lastIndexOf(true);
    const firstStickyEnd = stickyEndStates.indexOf(true);
    let cellWidths;
    let startPositions;
    let endPositions;
    if (replay) {
      this._updateStickyColumnReplayQueue({
        rows: [...rows],
        stickyStartStates: [...stickyStartStates],
        stickyEndStates: [...stickyEndStates]
      });
    }
    afterNextRender({
      earlyRead: () => {
        cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
        startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
      },
      write: () => {
        for (const row of rows) {
          for (let i = 0; i < numCells; i++) {
            const cell = row.children[i];
            if (stickyStartStates[i]) {
              this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
            }
            if (stickyEndStates[i]) {
              this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
            }
          }
        }
        if (this._positionListener && cellWidths.some((w) => !!w)) {
          this._positionListener.stickyColumnsUpdated({
            sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
          });
          this._positionListener.stickyEndColumnsUpdated({
            sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
          });
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  stickRows(rowsToStick, stickyStates, position) {
    if (!this._isBrowser) {
      return;
    }
    const rows = position === "bottom" ? rowsToStick.slice().reverse() : rowsToStick;
    const states = position === "bottom" ? stickyStates.slice().reverse() : stickyStates;
    const stickyOffsets = [];
    const stickyCellHeights = [];
    const elementsToStick = [];
    afterNextRender({
      earlyRead: () => {
        for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
          if (!states[rowIndex]) {
            continue;
          }
          stickyOffsets[rowIndex] = stickyOffset;
          const row = rows[rowIndex];
          elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
          const height = this._retrieveElementSize(row).height;
          stickyOffset += height;
          stickyCellHeights[rowIndex] = height;
        }
      },
      write: () => {
        const borderedRowIndex = states.lastIndexOf(true);
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
          if (!states[rowIndex]) {
            continue;
          }
          const offset = stickyOffsets[rowIndex];
          const isBorderedRowIndex = rowIndex === borderedRowIndex;
          for (const element of elementsToStick[rowIndex]) {
            this._addStickyStyle(element, position, offset, isBorderedRowIndex);
          }
        }
        if (position === "top") {
          this._positionListener?.stickyHeaderRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        } else {
          this._positionListener?.stickyFooterRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }
    afterNextRender({
      write: () => {
        const tfoot = tableElement.querySelector("tfoot");
        if (tfoot) {
          if (stickyStates.some((state) => !state)) {
            this._removeStickyStyle(tfoot, ["bottom"]);
          } else {
            this._addStickyStyle(tfoot, "bottom", 0, false);
          }
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  destroy() {
    if (this._stickyColumnsReplayTimeout) {
      clearTimeout(this._stickyColumnsReplayTimeout);
    }
    this._resizeObserver?.disconnect();
    this._destroyed = true;
  }
  _removeStickyStyle(element, stickyDirections) {
    if (!element.classList.contains(this._stickCellCss)) {
      return;
    }
    for (const dir of stickyDirections) {
      element.style[dir] = "";
      element.classList.remove(this._borderCellCss[dir]);
    }
    const hasDirection = STICKY_DIRECTIONS.some((dir) => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      element.style.zIndex = "";
      if (this._needsPositionStickyOnElement) {
        element.style.position = "";
      }
      element.classList.remove(this._stickCellCss);
    }
  }
  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);
    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }
    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);
    if (this._needsPositionStickyOnElement) {
      element.style.cssText += "position: -webkit-sticky; position: sticky; ";
    }
  }
  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0;
    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }
    return zIndex ? `${zIndex}` : "";
  }
  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }
    const cellWidths = [];
    const firstRowCells = row.children;
    for (let i = 0; i < firstRowCells.length; i++) {
      const cell = firstRowCells[i];
      cellWidths.push(this._retrieveElementSize(cell).width);
    }
    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = 0; i < widths.length; i++) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = widths.length; i > 0; i--) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  _retrieveElementSize(element) {
    const cachedSize = this._elemSizeCache.get(element);
    if (cachedSize) {
      return cachedSize;
    }
    const clientRect = element.getBoundingClientRect();
    const size = {
      width: clientRect.width,
      height: clientRect.height
    };
    if (!this._resizeObserver) {
      return size;
    }
    this._elemSizeCache.set(element, size);
    this._resizeObserver.observe(element, {
      box: "border-box"
    });
    return size;
  }
  _updateStickyColumnReplayQueue(params) {
    this._removeFromStickyColumnReplayQueue(params.rows);
    if (!this._stickyColumnsReplayTimeout) {
      this._updatedStickyColumnsParamsToReplay.push(params);
    }
  }
  _removeFromStickyColumnReplayQueue(rows) {
    const rowsSet = new Set(rows);
    for (const update of this._updatedStickyColumnsParamsToReplay) {
      update.rows = update.rows.filter((row) => !rowsSet.has(row));
    }
    this._updatedStickyColumnsParamsToReplay = this._updatedStickyColumnsParamsToReplay.filter((update) => !!update.rows.length);
  }
  _updateCachedSizes(entries) {
    let needsColumnUpdate = false;
    for (const entry of entries) {
      const newEntry = entry.borderBoxSize?.length ? {
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      } : {
        width: entry.contentRect.width,
        height: entry.contentRect.height
      };
      if (newEntry.width !== this._elemSizeCache.get(entry.target)?.width && isCell(entry.target)) {
        needsColumnUpdate = true;
      }
      this._elemSizeCache.set(entry.target, newEntry);
    }
    if (needsColumnUpdate && this._updatedStickyColumnsParamsToReplay.length) {
      if (this._stickyColumnsReplayTimeout) {
        clearTimeout(this._stickyColumnsReplayTimeout);
      }
      this._stickyColumnsReplayTimeout = setTimeout(() => {
        if (this._destroyed) {
          return;
        }
        for (const update of this._updatedStickyColumnsParamsToReplay) {
          this.updateStickyColumns(update.rows, update.stickyStartStates, update.stickyEndStates, true, false);
        }
        this._updatedStickyColumnsParamsToReplay = [];
        this._stickyColumnsReplayTimeout = null;
      }, 0);
    }
  }
};
function isCell(element) {
  return ["cdk-cell", "cdk-header-cell", "cdk-footer-cell"].some((klass) => element.classList.contains(klass));
}
function getTableUnknownColumnError(id2) {
  return Error(`Could not find column with id "${id2}".`);
}
function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function. Or set \`multiTemplateDataRows\`.`);
}
function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for the provided row data: ${JSON.stringify(data)}`);
}
function getTableMissingRowDefsError() {
  return Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");
}
function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}
var STICKY_POSITIONING_LISTENER = new InjectionToken("STICKY_POSITIONING_LISTENER");
var CdkRecycleRows = class _CdkRecycleRows {
  static \u0275fac = function CdkRecycleRows_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkRecycleRows)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkRecycleRows,
    selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRecycleRows, [{
    type: Directive,
    args: [{
      selector: "cdk-table[recycleRows], table[cdk-table][recycleRows]"
    }]
  }], null, null);
})();
var DataRowOutlet = class _DataRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._rowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function DataRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DataRowOutlet,
    selectors: [["", "rowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[rowOutlet]"
    }]
  }], () => [], null);
})();
var HeaderRowOutlet = class _HeaderRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._headerRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function HeaderRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _HeaderRowOutlet,
    selectors: [["", "headerRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[headerRowOutlet]"
    }]
  }], () => [], null);
})();
var FooterRowOutlet = class _FooterRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._footerRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function FooterRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FooterRowOutlet,
    selectors: [["", "footerRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[footerRowOutlet]"
    }]
  }], () => [], null);
})();
var NoDataRowOutlet = class _NoDataRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._noDataRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function NoDataRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoDataRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NoDataRowOutlet,
    selectors: [["", "noDataRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoDataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[noDataRowOutlet]"
    }]
  }], () => [], null);
})();
var CdkTable = class _CdkTable {
  _differs = inject(IterableDiffers);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _platform = inject(Platform);
  _viewRepeater;
  _viewportRuler = inject(ViewportRuler);
  _injector = inject(Injector);
  _virtualScrollViewport = inject(CDK_VIRTUAL_SCROLL_VIEWPORT, {
    optional: true,
    host: true
  });
  _positionListener = inject(STICKY_POSITIONING_LISTENER, {
    optional: true
  }) || inject(STICKY_POSITIONING_LISTENER, {
    optional: true,
    skipSelf: true
  });
  _document = inject(DOCUMENT);
  _data;
  _renderedRange;
  _onDestroy = new Subject();
  _renderRows;
  _renderChangeSubscription = null;
  _columnDefsByName = /* @__PURE__ */ new Map();
  _rowDefs;
  _headerRowDefs;
  _footerRowDefs;
  _dataDiffer;
  _defaultRowDef = null;
  _customColumnDefs = /* @__PURE__ */ new Set();
  _customRowDefs = /* @__PURE__ */ new Set();
  _customHeaderRowDefs = /* @__PURE__ */ new Set();
  _customFooterRowDefs = /* @__PURE__ */ new Set();
  _customNoDataRow = null;
  _headerRowDefChanged = true;
  _footerRowDefChanged = true;
  _stickyColumnStylesNeedReset = true;
  _forceRecalculateCellWidths = true;
  _cachedRenderRowsMap = /* @__PURE__ */ new Map();
  _isNativeHtmlTable;
  _stickyStyler;
  stickyCssClass = "cdk-table-sticky";
  needsPositionStickyOnElement = true;
  _isServer;
  _isShowingNoDataRow = false;
  _hasAllOutlets = false;
  _hasInitialized = false;
  _headerRowStickyUpdates = new Subject();
  _footerRowStickyUpdates = new Subject();
  _disableVirtualScrolling = false;
  _getCellRole() {
    if (this._cellRoleInternal === void 0) {
      const tableRole = this._elementRef.nativeElement.getAttribute("role");
      return tableRole === "grid" || tableRole === "treegrid" ? "gridcell" : "cell";
    }
    return this._cellRoleInternal;
  }
  _cellRoleInternal = void 0;
  get trackBy() {
    return this._trackByFn;
  }
  set trackBy(fn) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") {
      console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._trackByFn = fn;
  }
  _trackByFn;
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
      this._changeDetectorRef.markForCheck();
    }
  }
  _dataSource;
  _dataSourceChanges = new Subject();
  _dataStream = new Subject();
  get multiTemplateDataRows() {
    return this._multiTemplateDataRows;
  }
  set multiTemplateDataRows(value) {
    this._multiTemplateDataRows = value;
    if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
      this._forceRenderDataRows();
      this.updateStickyColumnStyles();
    }
  }
  _multiTemplateDataRows = false;
  get fixedLayout() {
    return this._virtualScrollEnabled() ? true : this._fixedLayout;
  }
  set fixedLayout(value) {
    this._fixedLayout = value;
    this._forceRecalculateCellWidths = true;
    this._stickyColumnStylesNeedReset = true;
  }
  _fixedLayout = false;
  recycleRows = false;
  contentChanged = new EventEmitter();
  viewChange = new BehaviorSubject({
    start: 0,
    end: Number.MAX_VALUE
  });
  _rowOutlet;
  _headerRowOutlet;
  _footerRowOutlet;
  _noDataRowOutlet;
  _contentColumnDefs;
  _contentRowDefs;
  _contentHeaderRowDefs;
  _contentFooterRowDefs;
  _noDataRow;
  get renderedRows() {
    return this._renderRows;
  }
  constructor() {
    const role = inject(new HostAttributeToken("role"), {
      optional: true
    });
    if (!role) {
      this._elementRef.nativeElement.setAttribute("role", "table");
    }
    this._isServer = !this._platform.isBrowser;
    this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === "TABLE";
    this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
      return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
    });
  }
  ngOnInit() {
    this._setupStickyStyler();
    this._viewportRuler.change().pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this._forceRecalculateCellWidths = true;
    });
  }
  ngAfterContentInit() {
    this._viewRepeater = this.recycleRows || this._virtualScrollEnabled() ? new _RecycleViewRepeaterStrategy() : new _DisposeViewRepeaterStrategy();
    if (this._virtualScrollEnabled()) {
      this._setupVirtualScrolling(this._virtualScrollViewport);
    }
    this._hasInitialized = true;
  }
  ngAfterContentChecked() {
    if (this._canRender()) {
      this._render();
    }
  }
  ngOnDestroy() {
    this._stickyStyler?.destroy();
    [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach((def) => {
      def?.clear();
    });
    this._headerRowDefs = [];
    this._footerRowDefs = [];
    this._defaultRowDef = null;
    this._headerRowStickyUpdates.complete();
    this._footerRowStickyUpdates.complete();
    this._onDestroy.next();
    this._onDestroy.complete();
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
  }
  renderRows() {
    this._renderRows = this._getAllRenderRows();
    const changes = this._dataDiffer.diff(this._renderRows);
    if (!changes) {
      this._updateNoDataRow();
      this.contentChanged.next();
      return;
    }
    const viewContainer = this._rowOutlet.viewContainer;
    this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
      if (change.operation === _ViewRepeaterOperation.INSERTED && change.context) {
        this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
      }
    });
    this._updateRowIndexContext();
    changes.forEachIdentityChange((record) => {
      const rowView = viewContainer.get(record.currentIndex);
      rowView.context.$implicit = record.item.data;
    });
    this._updateNoDataRow();
    this.contentChanged.next();
    this.updateStickyColumnStyles();
  }
  addColumnDef(columnDef) {
    this._customColumnDefs.add(columnDef);
  }
  removeColumnDef(columnDef) {
    this._customColumnDefs.delete(columnDef);
  }
  addRowDef(rowDef) {
    this._customRowDefs.add(rowDef);
  }
  removeRowDef(rowDef) {
    this._customRowDefs.delete(rowDef);
  }
  addHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.add(headerRowDef);
    this._headerRowDefChanged = true;
  }
  removeHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.delete(headerRowDef);
    this._headerRowDefChanged = true;
  }
  addFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.add(footerRowDef);
    this._footerRowDefChanged = true;
  }
  removeFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.delete(footerRowDef);
    this._footerRowDefChanged = true;
  }
  setNoDataRow(noDataRow) {
    this._customNoDataRow = noDataRow;
  }
  updateStickyHeaderRowStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    if (this._isNativeHtmlTable) {
      const thead = closestTableSection(this._headerRowOutlet, "thead");
      if (thead) {
        thead.style.display = headerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._headerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(headerRows, ["top"]);
    this._stickyStyler.stickRows(headerRows, stickyStates, "top");
    this._headerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  updateStickyFooterRowStyles() {
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable) {
      const tfoot = closestTableSection(this._footerRowOutlet, "tfoot");
      if (tfoot) {
        tfoot.style.display = footerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._footerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(footerRows, ["bottom"]);
    this._stickyStyler.stickRows(footerRows, stickyStates, "bottom");
    this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
    this._footerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  updateStickyColumnStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    const dataRows = this._getRenderedRows(this._rowOutlet);
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable && !this.fixedLayout || this._stickyColumnStylesNeedReset) {
      this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ["left", "right"]);
      this._stickyColumnStylesNeedReset = false;
    }
    headerRows.forEach((headerRow, i) => {
      this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
    });
    this._rowDefs.forEach((rowDef) => {
      const rows = [];
      for (let i = 0; i < dataRows.length; i++) {
        if (this._renderRows[i].rowDef === rowDef) {
          rows.push(dataRows[i]);
        }
      }
      this._addStickyColumnStyles(rows, rowDef);
    });
    footerRows.forEach((footerRow, i) => {
      this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
    });
    Array.from(this._columnDefsByName.values()).forEach((def) => def.resetStickyChanged());
  }
  stickyColumnsUpdated(update) {
    this._positionListener?.stickyColumnsUpdated(update);
  }
  stickyEndColumnsUpdated(update) {
    this._positionListener?.stickyEndColumnsUpdated(update);
  }
  stickyHeaderRowsUpdated(update) {
    this._headerRowStickyUpdates.next(update);
    this._positionListener?.stickyHeaderRowsUpdated(update);
  }
  stickyFooterRowsUpdated(update) {
    this._footerRowStickyUpdates.next(update);
    this._positionListener?.stickyFooterRowsUpdated(update);
  }
  _outletAssigned() {
    if (!this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet) {
      this._hasAllOutlets = true;
      if (this._canRender()) {
        this._render();
      }
    }
  }
  _canRender() {
    return this._hasAllOutlets && this._hasInitialized;
  }
  _render() {
    this._cacheRowDefs();
    this._cacheColumnDefs();
    if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingRowDefsError();
    }
    const columnsChanged = this._renderUpdatedColumns();
    const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
    this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
    this._forceRecalculateCellWidths = rowDefsChanged;
    if (this._headerRowDefChanged) {
      this._forceRenderHeaderRows();
      this._headerRowDefChanged = false;
    }
    if (this._footerRowDefChanged) {
      this._forceRenderFooterRows();
      this._footerRowDefChanged = false;
    }
    if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
      this._observeRenderChanges();
    } else if (this._stickyColumnStylesNeedReset) {
      this.updateStickyColumnStyles();
    }
    this._checkStickyStates();
  }
  _getAllRenderRows() {
    if (!Array.isArray(this._data) || !this._renderedRange) {
      return [];
    }
    const renderRows = [];
    const end = Math.min(this._data.length, this._renderedRange.end);
    const prevCachedRenderRows = this._cachedRenderRowsMap;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    for (let i = this._renderedRange.start; i < end; i++) {
      const data = this._data[i];
      const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
      if (!this._cachedRenderRowsMap.has(data)) {
        this._cachedRenderRowsMap.set(data, /* @__PURE__ */ new WeakMap());
      }
      for (let j = 0; j < renderRowsForData.length; j++) {
        let renderRow = renderRowsForData[j];
        const cache = this._cachedRenderRowsMap.get(renderRow.data);
        if (cache.has(renderRow.rowDef)) {
          cache.get(renderRow.rowDef).push(renderRow);
        } else {
          cache.set(renderRow.rowDef, [renderRow]);
        }
        renderRows.push(renderRow);
      }
    }
    return renderRows;
  }
  _getRenderRowsForData(data, dataIndex, cache) {
    const rowDefs = this._getRowDefs(data, dataIndex);
    return rowDefs.map((rowDef) => {
      const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];
      if (cachedRenderRows.length) {
        const dataRow = cachedRenderRows.shift();
        dataRow.dataIndex = dataIndex;
        return dataRow;
      } else {
        return {
          data,
          rowDef,
          dataIndex
        };
      }
    });
  }
  _cacheColumnDefs() {
    this._columnDefsByName.clear();
    const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
    columnDefs.forEach((columnDef) => {
      if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableDuplicateColumnNameError(columnDef.name);
      }
      this._columnDefsByName.set(columnDef.name, columnDef);
    });
  }
  _cacheRowDefs() {
    this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
    this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
    this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
    const defaultRowDefs = this._rowDefs.filter((def) => !def.when);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (this._virtualScrollEnabled() && this._rowDefs.some((def) => def.when)) {
        throw new Error("Conditional row definitions via the `when` input are not supported when virtual scrolling is enabled, at the moment.");
      }
      if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
        throw getTableMultipleDefaultRowDefsError();
      }
    }
    this._defaultRowDef = defaultRowDefs[0];
  }
  _renderUpdatedColumns() {
    const columnsDiffReducer = (acc, def) => {
      const diff = !!def.getColumnsDiff();
      return acc || diff;
    };
    const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
    if (dataColumnsChanged) {
      this._forceRenderDataRows();
    }
    const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
    if (headerColumnsChanged) {
      this._forceRenderHeaderRows();
    }
    const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
    if (footerColumnsChanged) {
      this._forceRenderFooterRows();
    }
    return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
  }
  _switchDataSource(dataSource) {
    this._data = [];
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
    if (this._renderChangeSubscription) {
      this._renderChangeSubscription.unsubscribe();
      this._renderChangeSubscription = null;
    }
    if (!dataSource) {
      if (this._dataDiffer) {
        this._dataDiffer.diff([]);
      }
      if (this._rowOutlet) {
        this._rowOutlet.viewContainer.clear();
      }
    }
    this._dataSource = dataSource;
  }
  _observeRenderChanges() {
    if (!this.dataSource) {
      return;
    }
    let dataStream;
    if (isDataSource(this.dataSource)) {
      dataStream = this.dataSource.connect(this);
    } else if (isObservable(this.dataSource)) {
      dataStream = this.dataSource;
    } else if (Array.isArray(this.dataSource)) {
      dataStream = of(this.dataSource);
    }
    if (dataStream === void 0 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableUnknownDataSourceError();
    }
    this._renderChangeSubscription = combineLatest([dataStream, this.viewChange]).pipe(takeUntil(this._onDestroy)).subscribe(([data, range]) => {
      this._data = data || [];
      this._renderedRange = range;
      this._dataStream.next(data);
      this.renderRows();
    });
  }
  _forceRenderHeaderRows() {
    if (this._headerRowOutlet.viewContainer.length > 0) {
      this._headerRowOutlet.viewContainer.clear();
    }
    this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
    this.updateStickyHeaderRowStyles();
  }
  _forceRenderFooterRows() {
    if (this._footerRowOutlet.viewContainer.length > 0) {
      this._footerRowOutlet.viewContainer.clear();
    }
    this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
    this.updateStickyFooterRowStyles();
  }
  _addStickyColumnStyles(rows, rowDef) {
    const columnDefs = Array.from(rowDef?.columns || []).map((columnName) => {
      const columnDef = this._columnDefsByName.get(columnName);
      if (!columnDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnName);
      }
      return columnDef;
    });
    const stickyStartStates = columnDefs.map((columnDef) => columnDef.sticky);
    const stickyEndStates = columnDefs.map((columnDef) => columnDef.stickyEnd);
    this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this.fixedLayout || this._forceRecalculateCellWidths);
  }
  _getRenderedRows(rowOutlet) {
    const renderedRows = [];
    for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
      const viewRef = rowOutlet.viewContainer.get(i);
      renderedRows.push(viewRef.rootNodes[0]);
    }
    return renderedRows;
  }
  _getRowDefs(data, dataIndex) {
    if (this._rowDefs.length === 1) {
      return [this._rowDefs[0]];
    }
    let rowDefs = [];
    if (this.multiTemplateDataRows) {
      rowDefs = this._rowDefs.filter((def) => !def.when || def.when(dataIndex, data));
    } else {
      let rowDef = this._rowDefs.find((def) => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
      if (rowDef) {
        rowDefs.push(rowDef);
      }
    }
    if (!rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingMatchingRowDefError(data);
    }
    return rowDefs;
  }
  _getEmbeddedViewArgs(renderRow, index) {
    const rowDef = renderRow.rowDef;
    const context = {
      $implicit: renderRow.data
    };
    return {
      templateRef: rowDef.template,
      context,
      index
    };
  }
  _renderRow(outlet, rowDef, index, context = {}) {
    const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
    this._renderCellTemplateForItem(rowDef, context);
    return view;
  }
  _renderCellTemplateForItem(rowDef, context) {
    for (let cellTemplate of this._getCellTemplates(rowDef)) {
      if (CdkCellOutlet.mostRecentCellOutlet) {
        CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  _updateRowIndexContext() {
    const viewContainer = this._rowOutlet.viewContainer;
    for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
      const viewRef = viewContainer.get(renderIndex);
      const context = viewRef.context;
      context.count = count;
      context.first = renderIndex === 0;
      context.last = renderIndex === count - 1;
      context.even = renderIndex % 2 === 0;
      context.odd = !context.even;
      if (this.multiTemplateDataRows) {
        context.dataIndex = this._renderRows[renderIndex].dataIndex;
        context.renderIndex = renderIndex;
      } else {
        context.index = this._renderRows[renderIndex].dataIndex;
      }
    }
  }
  _getCellTemplates(rowDef) {
    if (!rowDef || !rowDef.columns) {
      return [];
    }
    return Array.from(rowDef.columns, (columnId) => {
      const column = this._columnDefsByName.get(columnId);
      if (!column && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnId);
      }
      return rowDef.extractCellTemplate(column);
    });
  }
  _forceRenderDataRows() {
    this._dataDiffer.diff([]);
    this._rowOutlet.viewContainer.clear();
    this.renderRows();
  }
  _checkStickyStates() {
    const stickyCheckReducer = (acc, d) => {
      return acc || d.hasStickyChanged();
    };
    if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyHeaderRowStyles();
    }
    if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyFooterRowStyles();
    }
    if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
      this._stickyColumnStylesNeedReset = true;
      this.updateStickyColumnStyles();
    }
  }
  _setupStickyStyler() {
    const direction = this._dir ? this._dir.value : "ltr";
    const injector = this._injector;
    this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, this._platform.isBrowser, this.needsPositionStickyOnElement, direction, this, injector);
    (this._dir ? this._dir.change : of()).pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      this._stickyStyler.direction = value;
      this.updateStickyColumnStyles();
    });
  }
  _setupVirtualScrolling(viewport) {
    const virtualScrollScheduler = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
    this.viewChange.next({
      start: 0,
      end: 0
    });
    viewport.renderedRangeStream.pipe(auditTime(0, virtualScrollScheduler), takeUntil(this._onDestroy)).subscribe(this.viewChange);
    viewport.attach({
      dataStream: this._dataStream,
      measureRangeSize: (range, orientation) => this._measureRangeSize(range, orientation)
    });
    combineLatest([viewport.renderedContentOffset, this._headerRowStickyUpdates]).pipe(takeUntil(this._onDestroy)).subscribe(([offsetFromTop, update]) => {
      if (!update.sizes || !update.offsets || !update.elements) {
        return;
      }
      for (let i = 0; i < update.elements.length; i++) {
        const cells = update.elements[i];
        if (cells) {
          const current = update.offsets[i];
          const offset = offsetFromTop !== 0 ? Math.max(offsetFromTop - current, current) : -current;
          for (const cell of cells) {
            cell.style.top = `${-offset}px`;
          }
        }
      }
    });
    combineLatest([viewport.renderedContentOffset, this._footerRowStickyUpdates]).pipe(takeUntil(this._onDestroy)).subscribe(([offsetFromTop, update]) => {
      if (!update.sizes || !update.offsets || !update.elements) {
        return;
      }
      for (let i = 0; i < update.elements.length; i++) {
        const cells = update.elements[i];
        if (cells) {
          for (const cell of cells) {
            cell.style.bottom = `${offsetFromTop + update.offsets[i]}px`;
          }
        }
      }
    });
  }
  _getOwnDefs(items) {
    return items.filter((item) => !item._table || item._table === this);
  }
  _updateNoDataRow() {
    const noDataRow = this._customNoDataRow || this._noDataRow;
    if (!noDataRow) {
      return;
    }
    const shouldShow = this._rowOutlet.viewContainer.length === 0;
    if (shouldShow === this._isShowingNoDataRow) {
      return;
    }
    const container = this._noDataRowOutlet.viewContainer;
    if (shouldShow) {
      const view = container.createEmbeddedView(noDataRow.templateRef);
      const rootNode = view.rootNodes[0];
      if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
        rootNode.setAttribute("role", "row");
        rootNode.classList.add(...noDataRow._contentClassNames);
        const cells = rootNode.querySelectorAll(noDataRow._cellSelector);
        for (let i = 0; i < cells.length; i++) {
          cells[i].classList.add(...noDataRow._cellClassNames);
        }
      }
    } else {
      container.clear();
    }
    this._isShowingNoDataRow = shouldShow;
    this._changeDetectorRef.markForCheck();
  }
  _measureRangeSize(range, orientation) {
    if (range.start >= range.end || orientation !== "vertical") {
      return 0;
    }
    const renderedRange = this.viewChange.value;
    const viewContainerRef = this._rowOutlet.viewContainer;
    if ((range.start < renderedRange.start || range.end > renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    const startRect = firstNode?.getBoundingClientRect?.();
    const endRect = lastNode?.getBoundingClientRect?.();
    return startRect && endRect ? endRect.bottom - startRect.top : 0;
  }
  _virtualScrollEnabled() {
    return !this._disableVirtualScrolling && this._virtualScrollViewport != null;
  }
  static \u0275fac = function CdkTable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTable)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTable,
    selectors: [["cdk-table"], ["table", "cdk-table", ""]],
    contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkNoDataRow, 5)(dirIndex, CdkColumnDef, 5)(dirIndex, CdkRowDef, 5)(dirIndex, CdkHeaderRowDef, 5)(dirIndex, CdkFooterRowDef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._noDataRow = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentColumnDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentRowDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentHeaderRowDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentFooterRowDefs = _t);
      }
    },
    hostAttrs: [1, "cdk-table"],
    hostVars: 2,
    hostBindings: function CdkTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-table-fixed-layout", ctx.fixedLayout);
      }
    },
    inputs: {
      trackBy: "trackBy",
      dataSource: "dataSource",
      multiTemplateDataRows: [2, "multiTemplateDataRows", "multiTemplateDataRows", booleanAttribute],
      fixedLayout: [2, "fixedLayout", "fixedLayout", booleanAttribute],
      recycleRows: [2, "recycleRows", "recycleRows", booleanAttribute]
    },
    outputs: {
      contentChanged: "contentChanged"
    },
    exportAs: ["cdkTable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_TABLE,
      useExisting: _CdkTable
    }, {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }])],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 2,
    consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function CdkTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
        \u0275\u0275conditionalCreate(2, CdkTable_Conditional_2_Template, 1, 0);
        \u0275\u0275conditionalCreate(3, CdkTable_Conditional_3_Template, 7, 0)(4, CdkTable_Conditional_4_Template, 4, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isServer ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
      }
    },
    dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
    styles: [".cdk-table-fixed-layout {\n  table-layout: fixed;\n}\n"],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTable, [{
    type: Component,
    args: [{
      selector: "cdk-table, table[cdk-table]",
      exportAs: "cdkTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "cdk-table",
        "[class.cdk-table-fixed-layout]": "fixedLayout"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Eager,
      providers: [{
        provide: CDK_TABLE,
        useExisting: CdkTable
      }, {
        provide: STICKY_POSITIONING_LISTENER,
        useValue: null
      }],
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".cdk-table-fixed-layout {\n  table-layout: fixed;\n}\n"]
    }]
  }], () => [], {
    trackBy: [{
      type: Input
    }],
    dataSource: [{
      type: Input
    }],
    multiTemplateDataRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fixedLayout: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    recycleRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentChanged: [{
      type: Output
    }],
    _contentColumnDefs: [{
      type: ContentChildren,
      args: [CdkColumnDef, {
        descendants: true
      }]
    }],
    _contentRowDefs: [{
      type: ContentChildren,
      args: [CdkRowDef, {
        descendants: true
      }]
    }],
    _contentHeaderRowDefs: [{
      type: ContentChildren,
      args: [CdkHeaderRowDef, {
        descendants: true
      }]
    }],
    _contentFooterRowDefs: [{
      type: ContentChildren,
      args: [CdkFooterRowDef, {
        descendants: true
      }]
    }],
    _noDataRow: [{
      type: ContentChild,
      args: [CdkNoDataRow]
    }]
  });
})();
function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
function closestTableSection(outlet, section) {
  const uppercaseSection = section.toUpperCase();
  let current = outlet.viewContainer.element.nativeElement;
  while (current) {
    const nodeName = current.nodeType === 1 ? current.nodeName : null;
    if (nodeName === uppercaseSection) {
      return current;
    } else if (nodeName === "TABLE") {
      break;
    }
    current = current.parentNode;
  }
  return null;
}
var CdkTextColumn = class _CdkTextColumn {
  _table = inject(CdkTable, {
    optional: true
  });
  _options = inject(TEXT_COLUMN_OPTIONS, {
    optional: true
  });
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
    this._syncColumnDefName();
  }
  _name;
  headerText;
  dataAccessor;
  justify = "start";
  columnDef;
  cell;
  headerCell;
  constructor() {
    this._options = this._options || {};
  }
  ngOnInit() {
    this._syncColumnDefName();
    if (this.headerText === void 0) {
      this.headerText = this._createDefaultHeaderText();
    }
    if (!this.dataAccessor) {
      this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
    }
    if (this._table) {
      this.columnDef.cell = this.cell;
      this.columnDef.headerCell = this.headerCell;
      this._table.addColumnDef(this.columnDef);
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getTableTextColumnMissingParentTableError();
    }
  }
  ngOnDestroy() {
    if (this._table) {
      this._table.removeColumnDef(this.columnDef);
    }
  }
  _createDefaultHeaderText() {
    const name = this.name;
    if (!name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableTextColumnMissingNameError();
    }
    if (this._options && this._options.defaultHeaderTextTransform) {
      return this._options.defaultHeaderTextTransform(name);
    }
    return name[0].toUpperCase() + name.slice(1);
  }
  _syncColumnDefName() {
    if (this.columnDef) {
      this.columnDef.name = this.name;
    }
  }
  static \u0275fac = function CdkTextColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTextColumn)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTextColumn,
    selectors: [["cdk-text-column"]],
    viewQuery: function CdkTextColumn_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkColumnDef, 7)(CdkCellDef, 7)(CdkHeaderCellDef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.columnDef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
      }
    },
    inputs: {
      name: "name",
      headerText: "headerText",
      dataAccessor: "dataAccessor",
      justify: "justify"
    },
    decls: 3,
    vars: 0,
    consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
    template: function CdkTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0, 0);
        \u0275\u0275template(1, CdkTextColumn_th_1_Template, 2, 3, "th", 1)(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        \u0275\u0275elementContainerEnd();
      }
    },
    dependencies: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextColumn, [{
    type: Component,
    args: [{
      selector: "cdk-text-column",
      template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Eager,
      imports: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell]
    }]
  }], () => [], {
    name: [{
      type: Input
    }],
    headerText: [{
      type: Input
    }],
    dataAccessor: [{
      type: Input
    }],
    justify: [{
      type: Input
    }],
    columnDef: [{
      type: ViewChild,
      args: [CdkColumnDef, {
        static: true
      }]
    }],
    cell: [{
      type: ViewChild,
      args: [CdkCellDef, {
        static: true
      }]
    }],
    headerCell: [{
      type: ViewChild,
      args: [CdkHeaderCellDef, {
        static: true
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
var CdkTableModule = class _CdkTableModule {
  static \u0275fac = function CdkTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkTableModule,
    imports: [ScrollingModule, CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet],
    exports: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ScrollingModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTableModule, [{
    type: NgModule,
    args: [{
      exports: EXPORTED_DECLARATIONS,
      imports: [ScrollingModule, ...EXPORTED_DECLARATIONS]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@angular+cdk@22.0.2_@angula_48c8b55feda0d9d20e0646dd7488a25d/node_modules/@angular/cdk/fesm2022/_selection-model-chunk.mjs
var SelectionModel = class {
  _multiple;
  _emitChanges;
  compareWith;
  _selection = /* @__PURE__ */ new Set();
  _deselectedToEmit = [];
  _selectedToEmit = [];
  _selected = null;
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  changed = new Subject();
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach((value) => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      this._selectedToEmit.length = 0;
    }
  }
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  setSelection(...values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values.map((value) => this._getConcreteValue(value)));
    values.forEach((value) => this._markSelected(value));
    oldValues.filter((value) => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  isEmpty() {
    return this._selection.size === 0;
  }
  hasValue() {
    return !this.isEmpty();
  }
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  isMultipleSelection() {
    return this._multiple;
  }
  _emitChangeEvent() {
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach((value) => this._unmarkSelected(value));
    }
  }
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
};
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}

// node_modules/.pnpm/@angular+cdk@22.0.2_@angula_48c8b55feda0d9d20e0646dd7488a25d/node_modules/@angular/cdk/fesm2022/_unique-selection-dispatcher-chunk.mjs
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  _listeners = [];
  notify(id2, name) {
    for (let listener of this._listeners) {
      listener(id2, name);
    }
  }
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static \u0275fac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniqueSelectionDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _UniqueSelectionDispatcher,
    factory: _UniqueSelectionDispatcher.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Service
  }], null, null);
})();

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/table.mjs
var _c02 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c12 = ["caption", "colgroup, col", "*"];
function MatTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function MatTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 2);
    \u0275\u0275elementContainer(3, 3)(4, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 5);
    \u0275\u0275elementEnd();
  }
}
function MatTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 3)(2, 4)(3, 5);
  }
}
function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var MatRecycleRows = class _MatRecycleRows {
  static \u0275fac = function MatRecycleRows_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRecycleRows)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRecycleRows,
    selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRecycleRows, [{
    type: Directive,
    args: [{
      selector: "mat-table[recycleRows], table[mat-table][recycleRows]"
    }]
  }], null, null);
})();
var MatTable = class _MatTable extends CdkTable {
  stickyCssClass = "mat-mdc-table-sticky";
  needsPositionStickyOnElement = false;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTable_BaseFactory;
    return function MatTable_Factory(__ngFactoryType__) {
      return (\u0275MatTable_BaseFactory || (\u0275MatTable_BaseFactory = \u0275\u0275getInheritedFactory(_MatTable)))(__ngFactoryType__ || _MatTable);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTable,
    selectors: [["mat-table"], ["table", "mat-table", ""]],
    hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
    hostVars: 2,
    hostBindings: function MatTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-table-fixed-layout", ctx.fixedLayout);
      }
    },
    exportAs: ["matTable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTable,
      useExisting: _MatTable
    }, {
      provide: CDK_TABLE,
      useExisting: _MatTable
    }, {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c12,
    decls: 5,
    vars: 2,
    consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function MatTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
        \u0275\u0275conditionalCreate(2, MatTable_Conditional_2_Template, 1, 0);
        \u0275\u0275conditionalCreate(3, MatTable_Conditional_3_Template, 7, 0)(4, MatTable_Conditional_4_Template, 4, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isServer ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
      }
    },
    dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
    styles: [".mat-mdc-table-sticky {\n  position: sticky !important;\n}\n\nmat-table {\n  display: block;\n}\n\nmat-header-row {\n  min-height: var(--mat-table-header-container-height, 56px);\n}\n\nmat-row {\n  min-height: var(--mat-table-row-item-container-height, 52px);\n}\n\nmat-footer-row {\n  min-height: var(--mat-table-footer-container-height, 52px);\n}\n\nmat-row, mat-header-row, mat-footer-row {\n  display: flex;\n  border-width: 0;\n  border-bottom-width: 1px;\n  border-style: solid;\n  align-items: center;\n  box-sizing: border-box;\n}\n\nmat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {\n  padding-left: 24px;\n}\n[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {\n  padding-left: 0;\n  padding-right: 24px;\n}\nmat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {\n  padding-right: 24px;\n}\n[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {\n  padding-right: 0;\n  padding-left: 24px;\n}\n\nmat-cell, mat-header-cell, mat-footer-cell {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  word-wrap: break-word;\n  min-height: inherit;\n}\n\n.mat-mdc-table {\n  min-width: 100%;\n  border: 0;\n  border-spacing: 0;\n  table-layout: auto;\n  white-space: normal;\n  background-color: var(--mat-table-background-color, var(--mat-sys-surface));\n}\n\n.mat-table-fixed-layout {\n  table-layout: fixed;\n}\n\n.mdc-data-table__cell {\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: start;\n  text-overflow: ellipsis;\n}\n\n.mdc-data-table__cell,\n.mdc-data-table__header-cell {\n  padding: 0 16px;\n}\n\n.mat-mdc-header-row {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  height: var(--mat-table-header-container-height, 56px);\n  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));\n  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));\n  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));\n  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));\n}\n\n.mat-mdc-row {\n  height: var(--mat-table-row-item-container-height, 52px);\n  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n}\n\n.mat-mdc-row,\n.mdc-data-table__content {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));\n  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));\n  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n\n.mat-mdc-footer-row {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  height: var(--mat-table-footer-container-height, 52px);\n  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));\n  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));\n  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));\n  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n\n.mat-mdc-header-cell {\n  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));\n  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);\n  border-bottom-style: solid;\n  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));\n  font-weight: inherit;\n  line-height: inherit;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  outline: none;\n  text-align: start;\n}\n.mdc-data-table__row:last-child > .mat-mdc-header-cell {\n  border-bottom: none;\n}\n\n.mat-mdc-cell {\n  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));\n  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);\n  border-bottom-style: solid;\n  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  line-height: inherit;\n}\n.mdc-data-table__row:last-child > .mat-mdc-cell {\n  border-bottom: none;\n}\n\n.mat-mdc-footer-cell {\n  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n\nmat-row.mat-mdc-row,\nmat-header-row.mat-mdc-header-row,\nmat-footer-row.mat-mdc-footer-row {\n  border-bottom: none;\n}\n\n.mat-mdc-table tbody,\n.mat-mdc-table tfoot,\n.mat-mdc-table thead,\n.mat-mdc-cell,\n.mat-mdc-footer-cell,\n.mat-mdc-header-row,\n.mat-mdc-row,\n.mat-mdc-footer-row,\n.mat-mdc-table .mat-mdc-header-cell {\n  background: inherit;\n}\n\n.mat-mdc-table mat-header-row.mat-mdc-header-row,\n.mat-mdc-table mat-row.mat-mdc-row,\n.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {\n  height: unset;\n}\n\nmat-header-cell.mat-mdc-header-cell,\nmat-cell.mat-mdc-cell,\nmat-footer-cell.mat-mdc-footer-cell {\n  align-self: stretch;\n}\n"],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTable, [{
    type: Component,
    args: [{
      selector: "mat-table, table[mat-table]",
      exportAs: "matTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody class="mdc-data-table__content" role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "mat-mdc-table mdc-data-table__table",
        "[class.mat-table-fixed-layout]": "fixedLayout"
      },
      providers: [{
        provide: CdkTable,
        useExisting: MatTable
      }, {
        provide: CDK_TABLE,
        useExisting: MatTable
      }, {
        provide: STICKY_POSITIONING_LISTENER,
        useValue: null
      }],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Eager,
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".mat-mdc-table-sticky {\n  position: sticky !important;\n}\n\nmat-table {\n  display: block;\n}\n\nmat-header-row {\n  min-height: var(--mat-table-header-container-height, 56px);\n}\n\nmat-row {\n  min-height: var(--mat-table-row-item-container-height, 52px);\n}\n\nmat-footer-row {\n  min-height: var(--mat-table-footer-container-height, 52px);\n}\n\nmat-row, mat-header-row, mat-footer-row {\n  display: flex;\n  border-width: 0;\n  border-bottom-width: 1px;\n  border-style: solid;\n  align-items: center;\n  box-sizing: border-box;\n}\n\nmat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {\n  padding-left: 24px;\n}\n[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {\n  padding-left: 0;\n  padding-right: 24px;\n}\nmat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {\n  padding-right: 24px;\n}\n[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {\n  padding-right: 0;\n  padding-left: 24px;\n}\n\nmat-cell, mat-header-cell, mat-footer-cell {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  word-wrap: break-word;\n  min-height: inherit;\n}\n\n.mat-mdc-table {\n  min-width: 100%;\n  border: 0;\n  border-spacing: 0;\n  table-layout: auto;\n  white-space: normal;\n  background-color: var(--mat-table-background-color, var(--mat-sys-surface));\n}\n\n.mat-table-fixed-layout {\n  table-layout: fixed;\n}\n\n.mdc-data-table__cell {\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: start;\n  text-overflow: ellipsis;\n}\n\n.mdc-data-table__cell,\n.mdc-data-table__header-cell {\n  padding: 0 16px;\n}\n\n.mat-mdc-header-row {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  height: var(--mat-table-header-container-height, 56px);\n  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));\n  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));\n  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));\n  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));\n}\n\n.mat-mdc-row {\n  height: var(--mat-table-row-item-container-height, 52px);\n  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n}\n\n.mat-mdc-row,\n.mdc-data-table__content {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));\n  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));\n  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n\n.mat-mdc-footer-row {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  height: var(--mat-table-footer-container-height, 52px);\n  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));\n  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));\n  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));\n  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n\n.mat-mdc-header-cell {\n  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));\n  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);\n  border-bottom-style: solid;\n  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));\n  font-weight: inherit;\n  line-height: inherit;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  outline: none;\n  text-align: start;\n}\n.mdc-data-table__row:last-child > .mat-mdc-header-cell {\n  border-bottom: none;\n}\n\n.mat-mdc-cell {\n  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));\n  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);\n  border-bottom-style: solid;\n  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  line-height: inherit;\n}\n.mdc-data-table__row:last-child > .mat-mdc-cell {\n  border-bottom: none;\n}\n\n.mat-mdc-footer-cell {\n  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n\nmat-row.mat-mdc-row,\nmat-header-row.mat-mdc-header-row,\nmat-footer-row.mat-mdc-footer-row {\n  border-bottom: none;\n}\n\n.mat-mdc-table tbody,\n.mat-mdc-table tfoot,\n.mat-mdc-table thead,\n.mat-mdc-cell,\n.mat-mdc-footer-cell,\n.mat-mdc-header-row,\n.mat-mdc-row,\n.mat-mdc-footer-row,\n.mat-mdc-table .mat-mdc-header-cell {\n  background: inherit;\n}\n\n.mat-mdc-table mat-header-row.mat-mdc-header-row,\n.mat-mdc-table mat-row.mat-mdc-row,\n.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {\n  height: unset;\n}\n\nmat-header-cell.mat-mdc-header-cell,\nmat-cell.mat-mdc-cell,\nmat-footer-cell.mat-mdc-footer-cell {\n  align-self: stretch;\n}\n"]
    }]
  }], null, null);
})();
var MatCellDef = class _MatCellDef extends CdkCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatCellDef_BaseFactory;
    return function MatCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatCellDef_BaseFactory || (\u0275MatCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatCellDef)))(__ngFactoryType__ || _MatCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCellDef,
    selectors: [["", "matCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkCellDef,
      useExisting: _MatCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCellDef, [{
    type: Directive,
    args: [{
      selector: "[matCellDef]",
      providers: [{
        provide: CdkCellDef,
        useExisting: MatCellDef
      }]
    }]
  }], null, null);
})();
var MatHeaderCellDef = class _MatHeaderCellDef extends CdkHeaderCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderCellDef_BaseFactory;
    return function MatHeaderCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderCellDef_BaseFactory || (\u0275MatHeaderCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCellDef)))(__ngFactoryType__ || _MatHeaderCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderCellDef,
    selectors: [["", "matHeaderCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderCellDef,
      useExisting: _MatHeaderCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderCellDef]",
      providers: [{
        provide: CdkHeaderCellDef,
        useExisting: MatHeaderCellDef
      }]
    }]
  }], null, null);
})();
var MatFooterCellDef = class _MatFooterCellDef extends CdkFooterCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterCellDef_BaseFactory;
    return function MatFooterCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatFooterCellDef_BaseFactory || (\u0275MatFooterCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCellDef)))(__ngFactoryType__ || _MatFooterCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterCellDef,
    selectors: [["", "matFooterCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterCellDef,
      useExisting: _MatFooterCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterCellDef]",
      providers: [{
        provide: CdkFooterCellDef,
        useExisting: MatFooterCellDef
      }]
    }]
  }], null, null);
})();
var MatColumnDef = class _MatColumnDef extends CdkColumnDef {
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatColumnDef_BaseFactory;
    return function MatColumnDef_Factory(__ngFactoryType__) {
      return (\u0275MatColumnDef_BaseFactory || (\u0275MatColumnDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatColumnDef)))(__ngFactoryType__ || _MatColumnDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatColumnDef,
    selectors: [["", "matColumnDef", ""]],
    inputs: {
      name: [0, "matColumnDef", "name"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkColumnDef,
      useExisting: _MatColumnDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatColumnDef, [{
    type: Directive,
    args: [{
      selector: "[matColumnDef]",
      providers: [{
        provide: CdkColumnDef,
        useExisting: MatColumnDef
      }]
    }]
  }], null, {
    name: [{
      type: Input,
      args: ["matColumnDef"]
    }]
  });
})();
var MatHeaderCell = class _MatHeaderCell extends CdkHeaderCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderCell_BaseFactory;
    return function MatHeaderCell_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderCell_BaseFactory || (\u0275MatHeaderCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCell)))(__ngFactoryType__ || _MatHeaderCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderCell,
    selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCell, [{
    type: Directive,
    args: [{
      selector: "mat-header-cell, th[mat-header-cell]",
      host: {
        "class": "mat-mdc-header-cell mdc-data-table__header-cell",
        "role": "columnheader"
      }
    }]
  }], null, null);
})();
var MatFooterCell = class _MatFooterCell extends CdkFooterCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterCell_BaseFactory;
    return function MatFooterCell_Factory(__ngFactoryType__) {
      return (\u0275MatFooterCell_BaseFactory || (\u0275MatFooterCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCell)))(__ngFactoryType__ || _MatFooterCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterCell,
    selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
    hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCell, [{
    type: Directive,
    args: [{
      selector: "mat-footer-cell, td[mat-footer-cell]",
      host: {
        "class": "mat-mdc-footer-cell mdc-data-table__cell"
      }
    }]
  }], null, null);
})();
var MatCell = class _MatCell extends CdkCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatCell_BaseFactory;
    return function MatCell_Factory(__ngFactoryType__) {
      return (\u0275MatCell_BaseFactory || (\u0275MatCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatCell)))(__ngFactoryType__ || _MatCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCell,
    selectors: [["mat-cell"], ["td", "mat-cell", ""]],
    hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCell, [{
    type: Directive,
    args: [{
      selector: "mat-cell, td[mat-cell]",
      host: {
        "class": "mat-mdc-cell mdc-data-table__cell"
      }
    }]
  }], null, null);
})();
var ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var MatHeaderRowDef = class _MatHeaderRowDef extends CdkHeaderRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderRowDef_BaseFactory;
    return function MatHeaderRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderRowDef_BaseFactory || (\u0275MatHeaderRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRowDef)))(__ngFactoryType__ || _MatHeaderRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderRowDef,
    selectors: [["", "matHeaderRowDef", ""]],
    inputs: {
      columns: [0, "matHeaderRowDef", "columns"],
      sticky: [2, "matHeaderRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderRowDef,
      useExisting: _MatHeaderRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderRowDef]",
      providers: [{
        provide: CdkHeaderRowDef,
        useExisting: MatHeaderRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matHeaderRowDef"
      }, {
        name: "sticky",
        alias: "matHeaderRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  }], null, null);
})();
var MatFooterRowDef = class _MatFooterRowDef extends CdkFooterRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterRowDef_BaseFactory;
    return function MatFooterRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatFooterRowDef_BaseFactory || (\u0275MatFooterRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRowDef)))(__ngFactoryType__ || _MatFooterRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterRowDef,
    selectors: [["", "matFooterRowDef", ""]],
    inputs: {
      columns: [0, "matFooterRowDef", "columns"],
      sticky: [2, "matFooterRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterRowDef,
      useExisting: _MatFooterRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterRowDef]",
      providers: [{
        provide: CdkFooterRowDef,
        useExisting: MatFooterRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matFooterRowDef"
      }, {
        name: "sticky",
        alias: "matFooterRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  }], null, null);
})();
var MatRowDef = class _MatRowDef extends CdkRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatRowDef_BaseFactory;
    return function MatRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatRowDef_BaseFactory || (\u0275MatRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatRowDef)))(__ngFactoryType__ || _MatRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRowDef,
    selectors: [["", "matRowDef", ""]],
    inputs: {
      columns: [0, "matRowDefColumns", "columns"],
      when: [0, "matRowDefWhen", "when"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkRowDef,
      useExisting: _MatRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRowDef, [{
    type: Directive,
    args: [{
      selector: "[matRowDef]",
      providers: [{
        provide: CdkRowDef,
        useExisting: MatRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matRowDefColumns"
      }, {
        name: "when",
        alias: "matRowDefWhen"
      }]
    }]
  }], null, null);
})();
var MatHeaderRow = class _MatHeaderRow extends CdkHeaderRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderRow_BaseFactory;
    return function MatHeaderRow_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderRow_BaseFactory || (\u0275MatHeaderRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRow)))(__ngFactoryType__ || _MatHeaderRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatHeaderRow,
    selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
    exportAs: ["matHeaderRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderRow,
      useExisting: _MatHeaderRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRow, [{
    type: Component,
    args: [{
      selector: "mat-header-row, tr[mat-header-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-header-row mdc-data-table__header-row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Eager,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matHeaderRow",
      providers: [{
        provide: CdkHeaderRow,
        useExisting: MatHeaderRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatFooterRow = class _MatFooterRow extends CdkFooterRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterRow_BaseFactory;
    return function MatFooterRow_Factory(__ngFactoryType__) {
      return (\u0275MatFooterRow_BaseFactory || (\u0275MatFooterRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRow)))(__ngFactoryType__ || _MatFooterRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatFooterRow,
    selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
    exportAs: ["matFooterRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterRow,
      useExisting: _MatFooterRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRow, [{
    type: Component,
    args: [{
      selector: "mat-footer-row, tr[mat-footer-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-footer-row mdc-data-table__row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Eager,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matFooterRow",
      providers: [{
        provide: CdkFooterRow,
        useExisting: MatFooterRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatRow = class _MatRow extends CdkRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatRow_BaseFactory;
    return function MatRow_Factory(__ngFactoryType__) {
      return (\u0275MatRow_BaseFactory || (\u0275MatRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatRow)))(__ngFactoryType__ || _MatRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatRow,
    selectors: [["mat-row"], ["tr", "mat-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
    exportAs: ["matRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkRow,
      useExisting: _MatRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRow, [{
    type: Component,
    args: [{
      selector: "mat-row, tr[mat-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-row mdc-data-table__row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Eager,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matRow",
      providers: [{
        provide: CdkRow,
        useExisting: MatRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatNoDataRow = class _MatNoDataRow extends CdkNoDataRow {
  _cellSelector = "td, mat-cell, [mat-cell], .mat-cell";
  constructor() {
    super();
    this._contentClassNames.push("mat-mdc-no-data-row", "mat-mdc-row", "mdc-data-table__row");
    this._cellClassNames.push("mat-mdc-cell", "mdc-data-table__cell", "mat-no-data-cell");
  }
  static \u0275fac = function MatNoDataRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatNoDataRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatNoDataRow,
    selectors: [["ng-template", "matNoDataRow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkNoDataRow,
      useExisting: _MatNoDataRow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[matNoDataRow]",
      providers: [{
        provide: CdkNoDataRow,
        useExisting: MatNoDataRow
      }]
    }]
  }], () => [], null);
})();
var MatTextColumn = class _MatTextColumn extends CdkTextColumn {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTextColumn_BaseFactory;
    return function MatTextColumn_Factory(__ngFactoryType__) {
      return (\u0275MatTextColumn_BaseFactory || (\u0275MatTextColumn_BaseFactory = \u0275\u0275getInheritedFactory(_MatTextColumn)))(__ngFactoryType__ || _MatTextColumn);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTextColumn,
    selectors: [["mat-text-column"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 0,
    consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
    template: function MatTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0, 0);
        \u0275\u0275template(1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        \u0275\u0275elementContainerEnd();
      }
    },
    dependencies: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTextColumn, [{
    type: Component,
    args: [{
      selector: "mat-text-column",
      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Eager,
      imports: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell]
    }]
  }], null, null);
})();
var EXPORTED_DECLARATIONS2 = [MatTable, MatRecycleRows, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
var MatTableModule = class _MatTableModule {
  static \u0275fac = function MatTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTableModule,
    imports: [CdkTableModule, MatTable, MatRecycleRows, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn],
    exports: [BidiModule, MatTable, MatRecycleRows, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CdkTableModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTableModule, [{
    type: NgModule,
    args: [{
      imports: [CdkTableModule, ...EXPORTED_DECLARATIONS2],
      exports: [BidiModule, EXPORTED_DECLARATIONS2]
    }]
  }], null, null);
})();
var MAX_SAFE_INTEGER = 9007199254740991;
var MatTableDataSource = class extends DataSource {
  _data;
  _renderData = new BehaviorSubject([]);
  _filter = new BehaviorSubject("");
  _internalPageChanges = new Subject();
  _renderChangesSubscription = null;
  filteredData;
  get data() {
    return this._data.value;
  }
  set data(data) {
    data = Array.isArray(data) ? data : [];
    this._data.next(data);
    if (!this._renderChangesSubscription) {
      this._filterData(data);
    }
  }
  get filter() {
    return this._filter.value;
  }
  set filter(filter2) {
    this._filter.next(filter2);
    if (!this._renderChangesSubscription) {
      this._filterData(this.data);
    }
  }
  get sort() {
    return this._sort;
  }
  set sort(sort) {
    this._sort = sort;
    this._updateChangeSubscription();
  }
  _sort;
  get paginator() {
    return this._paginator;
  }
  set paginator(paginator) {
    this._paginator = paginator;
    this._updateChangeSubscription();
  }
  _paginator;
  sortingDataAccessor = (data, sortHeaderId) => {
    const value = data[sortHeaderId];
    if (_isNumberValue(value)) {
      const numberValue = Number(value);
      return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
    }
    return value;
  };
  sortData = (data, sort) => {
    const active = sort.active;
    const direction = sort.direction;
    if (!active || direction == "") {
      return data;
    }
    return data.sort((a, b) => {
      let valueA = this.sortingDataAccessor(a, active);
      let valueB = this.sortingDataAccessor(b, active);
      const valueAType = typeof valueA;
      const valueBType = typeof valueB;
      if (valueAType !== valueBType) {
        if (valueAType === "number") {
          valueA += "";
        }
        if (valueBType === "number") {
          valueB += "";
        }
      }
      let comparatorResult = 0;
      if (valueA != null && valueB != null) {
        if (valueA > valueB) {
          comparatorResult = 1;
        } else if (valueA < valueB) {
          comparatorResult = -1;
        }
      } else if (valueA != null) {
        comparatorResult = 1;
      } else if (valueB != null) {
        comparatorResult = -1;
      }
      return comparatorResult * (direction == "asc" ? 1 : -1);
    });
  };
  filterPredicate = (data, filter2) => {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && (typeof data !== "object" || data === null)) {
      console.warn("Default implementation of filterPredicate requires data to be a non-null object.");
    }
    const transformedFilter = filter2.trim().toLowerCase();
    return Object.values(data).some((value) => `${value}`.toLowerCase().includes(transformedFilter));
  };
  constructor(initialData = []) {
    super();
    this._data = new BehaviorSubject(initialData);
    this._updateChangeSubscription();
  }
  _updateChangeSubscription() {
    const sortChange = this._sort ? merge(this._sort.sortChange, this._sort.initialized) : of(null);
    const pageChange = this._paginator ? merge(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : of(null);
    const dataStream = this._data;
    const filteredData = combineLatest([dataStream, this._filter]).pipe(map(([data]) => this._filterData(data)));
    const orderedData = combineLatest([filteredData, sortChange]).pipe(map(([data]) => this._orderData(data)));
    const paginatedData = combineLatest([orderedData, pageChange]).pipe(map(([data]) => this._pageData(data)));
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = paginatedData.subscribe((data) => this._renderData.next(data));
  }
  _filterData(data) {
    this.filteredData = this.filter == null || this.filter === "" ? data : data.filter((obj) => this.filterPredicate(obj, this.filter));
    if (this.paginator) {
      this._updatePaginator(this.filteredData.length);
    }
    return this.filteredData;
  }
  _orderData(data) {
    if (!this.sort) {
      return data;
    }
    return this.sortData(data.slice(), this.sort);
  }
  _pageData(data) {
    if (!this.paginator) {
      return data;
    }
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.slice(startIndex, startIndex + this.paginator.pageSize);
  }
  _updatePaginator(filteredDataLength) {
    Promise.resolve().then(() => {
      const paginator = this.paginator;
      if (!paginator) {
        return;
      }
      paginator.length = filteredDataLength;
      if (paginator.pageIndex > 0) {
        const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
        const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
        if (newPageIndex !== paginator.pageIndex) {
          paginator.pageIndex = newPageIndex;
          this._internalPageChanges.next();
        }
      }
    });
  }
  connect() {
    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }
    return this._renderData;
  }
  disconnect() {
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = null;
  }
};

// src/_core/_pagination/tm.list.0.base.ts
var TM_Base = class {
  _bcs;
  httpReqPaginate;
  colsExtra;
  httpResPaginate = {};
  ds = new MatTableDataSource([]);
  // Data Source
  cols = [];
  constructor(_bcs, httpReqPaginate, colsExtra = []) {
    this._bcs = _bcs;
    this.httpReqPaginate = httpReqPaginate;
    this.colsExtra = colsExtra;
    this.initCols(colsExtra);
    return this;
  }
  initCols(colsExtra) {
    const finalCol = colsExtra.map((x) => x.key);
    this.cols = ["id", "name", "status", "desc", ...finalCol, "updatedAt", "actions"];
  }
};

// src/_core/_pagination/tm.list.1.api.ts
var TM_Base_API = class extends TM_Base {
  // Get Paginate API
  isLoading = true;
  hitApi = (next = this.next, error = this.error, complete = this.complete, beforeHit = this.beforeHit) => {
    this.isLoading = true;
    beforeHit().subscribe({
      next: () => {
        this._bcs._httpUwo.Client.GetsPaginate(this.httpReqPaginate).subscribe({ next, error, complete });
      }
    });
  };
  beforeHit = () => {
    return of(this);
  };
  next = (res) => {
    this.httpResPaginate = res;
    this.ds.data = res.records ?? [];
    this.httpReqPaginate.body.pageNo = res.pageNo;
    this.httpReqPaginate.body.pageSize = res.pageSize;
  };
  error = (err) => {
  };
  complete = () => {
    this.isLoading = false;
  };
};

// src/_core/_pagination/tm.list.1.filter.ts
var TM_Base_Filter = class extends TM_Base_API {
  filterShow() {
    this._bcs._sideNav.Right.opened = !this._bcs._sideNav.Right.opened;
    this._bcs._cdr.detectChanges();
  }
  // {
  //   this._sideNav.showRight(filterComponent);
  //   this._sideNav.Right.opened = !this._sideNav.Right.opened;
  // }
  filterSystemShow = false;
  filterDefaultShow = true;
  filterAdvanceShow = true;
  filterSystem = new FormGroup({
    org: new FormControl(null),
    system: new FormControl(null)
  });
  filterDefault = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    desc: new FormControl(null),
    status: new FormControl(null),
    dateFrom: new FormControl(null),
    dateTo: new FormControl(null)
  });
  // Form Filter (For Filter System)
  filterAdvance = new FormGroup({});
};

// src/_core/_pagination/tm.list.2.sort.paginate.ts
var TM_Base_SortPaginate = class extends TM_Base_Filter {
  reset() {
    this.filterDefault.reset();
    this.filterAdvance.reset();
    this.httpReqPaginate.body = {
      pageNo: 1,
      pageSize: 25,
      filter: __spreadValues({}, this.filterSystem?.value),
      sort: {
        by: null,
        order: null
      }
    };
  }
  fresh() {
    this._bcs._dialog.closeAll();
    this._bcs._notify.clear();
    this.httpReqPaginate.body.filter = __spreadValues(__spreadValues(__spreadValues({}, this.filterSystem?.value), this.filterDefault.value), this.filterAdvance?.value);
    this.hitApi();
  }
  refresh() {
    this.reset();
    this.fresh();
  }
  sort(sort) {
    console.log({ sort });
    let by = sort.active;
    by = by.charAt(0).toUpperCase() + by.slice(1);
    this.httpReqPaginate.body.sort.by = by;
    this.httpReqPaginate.body.sort.order = sort.direction == "asc" ? 0 : 1;
    this.fresh();
  }
  paginate(event) {
    console.log(event);
    this.httpReqPaginate.body.pageNo = event.pageIndex + 1;
    this.httpReqPaginate.body.pageSize = event.pageSize;
    if (!this.httpResPaginate.back && this.httpReqPaginate.body.pageNo == 1)
      return event;
    this.fresh();
    return event;
  }
};

// src/_core/_pagination/tm.list.3.actions.ts
var TM_Actions = class extends TM_Base_SortPaginate {
  _bcs;
  httpReqPaginate;
  colsExtra;
  httpReqStatus = {};
  httpReqDelete = {};
  httpReqUpdateDelete = {};
  constructor(_bcs, httpReqPaginate, colsExtra = []) {
    super(_bcs, httpReqPaginate, colsExtra);
    this._bcs = _bcs;
    this.httpReqPaginate = httpReqPaginate;
    this.colsExtra = colsExtra;
    return this;
  }
  updateStatus(item) {
    console.log("updateStatus");
    const isNotActive = item.status != "Active";
    let id2 = item.id;
    this.httpReqStatus.srvc = this.httpReqStatus.srvc || this.httpReqPaginate.srvc;
    this.httpReqStatus.cntrl = this.httpReqStatus.cntrl || this.httpReqPaginate.cntrl;
    this.httpReqStatus.resource = id2;
    this.httpReqStatus.body = {
      id: id2,
      status: isNotActive ? "Active" : "DeActive"
      // 1 Active, 2 DeActive, 0 Delete, -1 None
    };
    const subs = isNotActive ? this._bcs._dialog.confirmSuccess("Record will be Activated") : this._bcs._dialog.confirmWarn("Record will be De-Activated");
    subs.subscribe({
      next: (val) => {
        if (val) {
          this._bcs._httpUwo.Client.UpdateStatus(this.httpReqStatus).subscribe({
            next: (res) => {
              if (res.record) {
                item.status = res?.record?.status;
                this._bcs._dialog.info(`Record Status ${item?.status} Successfully.`);
              }
            }
          });
        }
      },
      error: () => {
        this._bcs._dialog.error("Status not Updated!");
      }
    });
  }
  // Neet to Work
  updateDelete(item) {
    console.log("UpadateDelete");
    let id2 = item.id;
    this.httpReqUpdateDelete.srvc = this.httpReqUpdateDelete.srvc || this.httpReqPaginate.srvc;
    this.httpReqUpdateDelete.cntrl = this.httpReqUpdateDelete.cntrl || this.httpReqPaginate.cntrl;
    this.httpReqUpdateDelete.resource = id2;
    this.httpReqUpdateDelete.body = { id: id2, status: "Delete" };
    this._bcs._dialog.confirmWarn("Record will be Soft Deleted").subscribe({
      next: (val) => {
        if (val) {
          this._bcs._httpUwo.Client.UpdateDelete(this.httpReqUpdateDelete).subscribe({
            next: (res) => {
              if (res?.status == "OK") {
                this._bcs._dialog.info("Record Soft Deleted Successfully.");
                this.fresh();
              }
            }
          });
        }
      },
      error: () => {
        this._bcs._dialog.error("Record not Deleted!");
      }
    });
  }
  Delete(item) {
    console.log("Delete");
    let id2 = item.id;
    this.httpReqDelete.srvc = this.httpReqDelete.srvc || this.httpReqPaginate.srvc;
    this.httpReqDelete.cntrl = this.httpReqDelete.cntrl || this.httpReqPaginate.cntrl;
    this.httpReqDelete.resource = id2;
    this.httpReqDelete.body = { id: id2 };
    this._bcs._dialog.confirmDanger("Record will be Permenently Deleted.").subscribe({
      next: (val) => {
        if (val) {
          this._bcs._httpUwo.Client.Delete(this.httpReqDelete).subscribe({
            next: (res) => {
              if (res?.status == "OK") {
                this.fresh();
                this._bcs._dialog.error("Record Permenently Deleted Successfully.", "Success");
              }
            }
          });
        }
      },
      error: () => {
        this._bcs._dialog.error("Record not Deleted!");
      }
    });
  }
};

// src/_core/_pagination/tm.list.3.utils.ts
var TM_Utils = class extends TM_Actions {
  // Cross Cutting Concerns
  openImage(data, title) {
    console.log("openImage");
    const config = {
      panelClass: "dialog-responsive",
      data: { source: data, title }
    };
  }
  printList() {
    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style')).map((x) => x.outerHTML).join("");
    const content = document.getElementById("print-area");
    console.log({ content });
    if (!content) {
      return;
    }
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      return;
    }
    printWindow.document.write(`
    <html>
      <head>
        <title>Print</title>
        ${styles}
      </head>
      <body>
        ${content.outerHTML}
      </body>
    </html>
  `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }
  downloadCSV(data, fileName) {
    if (!data.length) {
      return;
    }
    const priorityHeaders = ["id", "name", "status", "desc", "createdAt", "updatedAt"];
    const lessPriorityHeaders = ["createdAt", "updatedAt"];
    const otherHeaders = Object.keys(data[0]).filter((h) => !priorityHeaders.includes(h) && !lessPriorityHeaders.includes(h));
    const headers = [...priorityHeaders, ...otherHeaders, ...lessPriorityHeaders].filter((h) => h in data[0]);
    const csv = [
      headers.join(","),
      ...data.map((item) => headers.map((h) => `"${String(item[h] ?? "").replace(/"/g, '""')}"`).join(","))
    ].join("\n");
    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  exportListToCSV(fileName = "Export") {
    this.downloadCSV(this.httpResPaginate.records, fileName);
  }
  exportItemToCSV(item, fileName = "Export") {
    this.downloadCSV([item], fileName);
  }
  exportListToJSON(fileName = "Export") {
    const json = JSON.stringify(this.httpResPaginate.records, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
  copyListJSON() {
    return __async(this, null, function* () {
      this.copyItemJSON(this.httpResPaginate.records);
    });
  }
  copyItemJSON(item) {
    return __async(this, null, function* () {
      yield navigator.clipboard.writeText(JSON.stringify(item, null, 2));
      this._bcs._dialog.info("copied successfully.");
    });
  }
  copyValue(value) {
    return __async(this, null, function* () {
      yield navigator.clipboard.writeText(String(value ?? ""));
    });
  }
};

// src/_core/_pagination/tm.list.4.expose.ts
var TM_List = class extends TM_Utils {
  init() {
    this.reset();
    this.refresh();
    return this;
  }
};

// src/_core/_form/class/2.tm.submit.http.ts
var TMSubmitHttp = class {
  _bcs;
  httpReqGet;
  httpResSingle = new Subject();
  httpReqCreate = {};
  httpReqUpdate = {};
  constructor(_bcs, httpReq) {
    this._bcs = _bcs;
    this.httpReqGet = httpReq;
    return this;
  }
  init() {
    this.getById();
    return this;
  }
  getById() {
    if (!this.httpReqGet.resource) {
      this.httpReqGet.resource = this._bcs._route.snapshot.paramMap.get("id");
    }
    console.log(this.httpReqGet.resource);
    if (this.httpReqGet.resource) {
      this._bcs._httpUwo.Client.Get(this.httpReqGet).subscribe({
        next: (res) => {
          const record = res.Record || res.record;
          if (record) {
            console.log({ record });
            this.httpResSingle.next(record);
          }
        }
      });
    }
  }
  execute() {
    const request$ = !!this.httpReqGet.resource ? this.update() : this.create();
    request$.subscribe({
      next: (res) => this.onNext(res),
      error: (err) => this.onError(err),
      complete: () => this.onComplete()
    });
  }
  create() {
    this.httpReqCreate.srvc = this.httpReqCreate.srvc || this.httpReqGet.srvc;
    this.httpReqCreate.cntrl = this.httpReqCreate.cntrl || this.httpReqGet.cntrl;
    this.httpReqCreate.body = this._bcs._fs._form.value;
    return this._bcs._httpUwo.Client.Add(this.httpReqCreate);
  }
  update() {
    this.httpReqUpdate.srvc = this.httpReqUpdate.srvc || this.httpReqGet.srvc;
    this.httpReqUpdate.cntrl = this.httpReqUpdate.cntrl || this.httpReqGet.cntrl;
    this.httpReqUpdate.resource = this.httpReqUpdate.resource || this.httpReqGet.resource;
    this.httpReqUpdate.body = this._bcs._fs._form.value;
    return this._bcs._httpUwo.Client.Update(this.httpReqUpdate);
  }
  onNext(res) {
    if (res.status == "OK" || res.status == "None") {
      const msg = `Record ${this.httpReqGet.resource ? " Updated" : " Created"} Successfully`;
      this._bcs._dialog.info(this._bcs._translate.instant(msg)).subscribe({
        next: () => {
          this._bcs._fs._form.reset();
          this._bcs._router.navigate([this._bcs._template.linkPaginate]);
        }
      });
    } else {
      const msg = `Record not ${this.httpReqGet.resource ? " Updated" : " Created"}`;
      this._bcs._dialog.error(msg);
    }
  }
  onError(error) {
    console.log(error);
    if (error.status > 500) {
      this._bcs._notify.error({
        title: `Status Code ${error.status}`,
        message: error.message,
        details: error.url
      });
    }
  }
  onComplete() {
  }
  onConfirmDenied() {
  }
  afterSuccess(response) {
  }
};

// src/_core/_form/class/3.tm.submit.ts
var TMSubmit = class extends TMSubmitHttp {
  submit() {
    this.beforeSubmit();
    if (this._bcs._fs._form.invalid) {
      return;
    }
    const prompt = this.httpReqGet.resource ? this._bcs._dialog.confirmSuccess("Record will be updated") : this._bcs._dialog.confirmSuccess("A new Record will be Created.");
    prompt.subscribe({
      next: (val) => {
        if (val)
          this.execute();
      }
    });
  }
  resetForm() {
    this._bcs._fs._form.reset();
  }
  beforeSubmit() {
    this._bcs._fs._form.markAllAsTouched();
    this._bcs._fs._isSubmitted = true;
    this._bcs._fs.logForm();
  }
};

// src/_core/_form/static/custom.ts
var CONTROL_HOST_CSS_CLASS = "col-12 col-md-6 col-lg-4 col-xl-3 px-1";
var Custom = class {
  static handleError(error) {
    return throwError(() => error);
  }
  static jsontoFormData(jo, pk = "", carryFormData) {
    const formData = carryFormData || new FormData();
    let index = 0;
    Object.keys(jo).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(jo, key)) {
        if (jo[key] !== null && jo[key] !== void 0) {
          let propName = pk || key;
          if (pk && this.isObject(jo)) {
            propName = pk + "[" + key + "]";
          }
          if (pk && this.isArray(jo)) {
            propName = pk + "[" + index + "]";
          }
          if (jo[key] instanceof File) {
            formData.append(propName, jo[key]);
          } else if (jo[key] instanceof FileList) {
            for (let j = 0; j < jo[key].length; j++) {
              formData.append(propName + "[" + j + "]", jo[key].item(j));
            }
          } else if (this.isArray(jo[key]) || this.isObject(jo[key])) {
            this.jsontoFormData(jo[key], propName, formData);
          } else if (typeof jo[key] === "boolean") {
            formData.append(propName, +jo[key] ? "1" : "0");
          } else {
            formData.append(propName, jo[key]);
          }
        }
      }
      index++;
    });
    return formData;
  }
  // FOR CHECKING THE GIVEN INPUT IS ARRAY
  static isArray(val) {
    const toString = {}.toString;
    return toString.call(val) === "[object Array]";
  }
  // FOR CHECKING THE GIVEN INPUT IS OBJECT
  static isObject(val) {
    return !this.isArray(val) && typeof val === "object" && !!val;
  }
  static objToURLQuery(searchObject) {
    let result = "";
    const obj = searchObject;
    Object.keys(obj).forEach((key) => {
      if (obj[key] != null && obj[key] != "" && obj[key] != void 0 && typeof obj[key] != "object") {
        result += "&" + key + "=" + obj[key];
      }
    });
    if (result)
      result = result.substring(1, result.length);
    return result;
  }
  static arrayToObj(arr) {
    const res = arr.map((val) => val);
    let result = res.join(",");
    result = "(" + result + ")";
    return result;
  }
  // Most Used by doesn't required
  static emptyCheck(val) {
    return val != void 0 && val != null && val != "";
  }
};

// src/_core/components/dialog/dialog-common/dialog-common.ts
function DialogCommon_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function DialogCommon_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.cancelText ?? "Cancel", " ");
  }
}
var DialogCommon = class _DialogCommon {
  dialogRef;
  data;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  confirm() {
    this.dialogRef.close(true);
  }
  cancel() {
    this.dialogRef.close(false);
  }
  static \u0275fac = function DialogCommon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogCommon)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogCommon, selectors: [["dialog-common"]], standalone: false, decls: 17, vars: 8, consts: [["appearance", "outlined"], [2, "padding", "5px 0px 0px 10px", "margin", "-1px"], [1, "dialog-header", "text-light"], [1, "dialog-title", 2, "display", "flex", "gap", "5px"], [1, "ms-2"], ["mat-icon-button", "", "type", "button", "aria-label", "Close Dialog", 1, "d-flex", "me-2", 3, "click"], [1, "text-danger"], [1, "pt-3", 2, "min-height", "100px", "max-height", "80vh"], ["align", "end"], ["mat-button", ""], ["mat-flat-button", "", 3, "click"], ["mat-button", "", 3, "click"]], template: function DialogCommon_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0)(1, "mat-card-header", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function DialogCommon_Template_button_click_8_listener() {
        return ctx.cancel();
      });
      \u0275\u0275elementStart(9, "mat-icon", 6);
      \u0275\u0275text(10, "close");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "mat-card-content", 7);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-card-actions", 8);
      \u0275\u0275conditionalCreate(14, DialogCommon_Conditional_14_Template, 2, 1, "button", 9);
      \u0275\u0275elementStart(15, "button", 10);
      \u0275\u0275listener("click", function DialogCommon_Template_button_click_15_listener() {
        return ctx.confirm();
      });
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("bg-", ctx.data.color));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.data.icon);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data.title);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.data.message, " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.data.showCancel ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data.confirmText ?? "OK", " ");
    }
  }, dependencies: [MatButton, MatIconButton, MatIcon, MatCard, MatCardActions, MatCardContent, MatCardHeader], styles: ["/* angular:styles/component:scss;e0bf391dec6a5b2487f94fea535b85ad87152e18787e104e4ec937865b2d84be;C:/Codez/edu-fe-admin/src/_core/components/dialog/dialog-common/dialog-common.ts */\n:host {\n  display: block;\n}\nmat-card {\n  box-shadow: none;\n  overflow: hidden;\n  border: 2px solid black;\n}\nmat-card-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dialog-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n}\n.mat-mdc-dialog-surface {\n  background: transparent;\n  border-radius: 10px;\n}\n.mat-mdc-card-outlined {\n  border: transparent;\n}\n/*# sourceMappingURL=dialog-common-BP3EHOPY.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogCommon, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "dialog-common", template: `<mat-card appearance="outlined">\r
  <mat-card-header style="padding: 5px 0px 0px 10px; margin: -1px;" class="bg-{{data.color}}">\r
    <div class="dialog-header text-light">\r
      <div class="dialog-title" style="display: flex; gap: 5px;">\r
        <mat-icon>{{ data.icon }}</mat-icon>\r
        <span class="ms-2" >{{ data.title }}</span>\r
      </div>\r
\r
      <button mat-icon-button type="button" class="d-flex me-2" (click)="cancel()"  aria-label="Close Dialog">\r
        <mat-icon class="text-danger">close</mat-icon>\r
      </button>\r
    </div>\r
  </mat-card-header>\r
\r
  <mat-card-content class="pt-3" style="min-height: 100px; max-height: 80vh;">\r
    {{ data.message }}\r
  </mat-card-content>\r
\r
  <mat-card-actions align="end">\r
    @if(data.showCancel){\r
    <button mat-button (click)="cancel()">\r
      {{ data.cancelText ?? 'Cancel' }}\r
    </button>\r
    }\r
\r
    <button mat-flat-button (click)="confirm()">\r
      {{ data.confirmText ?? 'OK' }}\r
    </button>\r
  </mat-card-actions>\r
</mat-card>\r
`, styles: ["/* angular:styles/component:scss;e0bf391dec6a5b2487f94fea535b85ad87152e18787e104e4ec937865b2d84be;C:/Codez/edu-fe-admin/src/_core/components/dialog/dialog-common/dialog-common.ts */\n:host {\n  display: block;\n}\nmat-card {\n  box-shadow: none;\n  overflow: hidden;\n  border: 2px solid black;\n}\nmat-card-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dialog-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n}\n.mat-mdc-dialog-surface {\n  background: transparent;\n  border-radius: 10px;\n}\n.mat-mdc-card-outlined {\n  border: transparent;\n}\n/*# sourceMappingURL=dialog-common-BP3EHOPY.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogCommon, { className: "DialogCommon", filePath: "_core/components/dialog/dialog-common/dialog-common.ts", lineNumber: 39 });
})();

// src/_core/components/dialog/dialog-common/srvc.dialog.ts
var DialogService = class _DialogService {
  dialog = inject(MatDialog);
  open(data) {
    return this.dialog.open(DialogCommon, {
      width: "400px",
      maxWidth: "95vw",
      disableClose: true,
      data
    });
  }
  static \u0275fac = function DialogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DialogService, factory: _DialogService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/_core/components/dialog/dialog-common/srvc.dialog.wrapper.ts
var DialogCommonService = class _DialogCommonService {
  dialog;
  md;
  constructor() {
    this.dialog = AppInjector.get(DialogService);
    this.md = AppInjector.get(MatDialog);
  }
  confirmInfo(message = "Do you wanted to make this change", title = "Are you sure?", color = "info") {
    return this.dialog.open({
      title,
      message,
      color,
      icon: "help",
      confirmText: "Confirm",
      cancelText: "Cancel",
      showCancel: true
    }).afterClosed();
  }
  confirmSuccess(message = "Do you wanted to make this change.", title = "Are you sure?") {
    return this.confirmInfo(message, title, "success");
  }
  confirmWarn(message = "Do you wanted to make this change.", title = "Are you sure?") {
    return this.confirmInfo(message, title, "warning");
  }
  confirmDanger(message = "Changes can not be undone.", title = "Are you sure?") {
    return this.confirmInfo(message, title, "danger");
  }
  info(message, title = "Information") {
    return this.dialog.open({
      icon: "info",
      color: "success",
      title,
      message
    }).afterClosed();
  }
  warning(message, title = "Warning") {
    return this.dialog.open({
      title,
      icon: "warning",
      color: "warning",
      message
    }).afterClosed();
  }
  error(message, title = "Error") {
    return this.dialog.open({
      title,
      icon: "error",
      color: "danger",
      message
    }).afterClosed();
  }
  infoSub(message) {
    this.info(message).subscribe();
  }
  warningSub(message) {
    this.warning(message).subscribe();
  }
  errorSub(message) {
    this.error(message).subscribe();
  }
  closeAll() {
    this.md.closeAll();
  }
  static \u0275fac = function DialogCommonService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogCommonService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DialogCommonService, factory: _DialogCommonService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogCommonService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/_core/components/dialog/notify-container/srvc.notify.ts
var NotifyService = class _NotifyService {
  notifications = signal(
    [],
    ...ngDevMode ? [{ debugName: "notifications" }] : (
      /* istanbul ignore next */
      []
    )
  );
  id = 0;
  add(notify) {
    const item = __spreadProps(__spreadValues({}, notify), {
      id: ++this.id,
      createdAt: /* @__PURE__ */ new Date(),
      autoClose: true,
      duration: 8e3
    });
    this.notifications.update((x) => [...x, item]);
  }
  remove(id2) {
    this.notifications.update((x) => x.filter((n) => n.id !== id2));
  }
  clear() {
    this.notifications.set([]);
  }
  info(notify) {
    this.add(__spreadValues({
      bg: "info",
      color: "dark",
      icon: "info",
      title: "Information"
    }, notify));
  }
  success(notify) {
    this.add(__spreadValues({
      bg: "success",
      color: "light",
      icon: "check_circle",
      title: "Success"
    }, notify));
  }
  warning(notify) {
    this.add(__spreadValues({
      bg: "warning",
      color: "light",
      icon: "warning",
      title: "Warning!!"
    }, notify));
  }
  validations(validations) {
    this.add({
      bg: "warning",
      color: "light",
      icon: "rule",
      title: "Validation Messages",
      validations
    });
  }
  error(notify) {
    this.add(__spreadValues({
      bg: "danger",
      color: "light",
      icon: "error",
      title: "Server Error"
    }, notify));
  }
  static \u0275fac = function NotifyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotifyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotifyService, factory: _NotifyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotifyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/.pnpm/@angular+cdk@22.0.2_@angula_48c8b55feda0d9d20e0646dd7488a25d/node_modules/@angular/cdk/fesm2022/accordion.mjs
var CDK_ACCORDION = new InjectionToken("CdkAccordion");
var CdkAccordion = class _CdkAccordion {
  _stateChanges = new Subject();
  _openCloseAllActions = new Subject();
  id = inject(_IdGenerator).getId("cdk-accordion-");
  multi = false;
  openAll() {
    if (this.multi) {
      this._openCloseAllActions.next(true);
    }
  }
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
  static \u0275fac = function CdkAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordion)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordion,
    selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
    inputs: {
      multi: [2, "multi", "multi", booleanAttribute]
    },
    exportAs: ["cdkAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_ACCORDION,
      useExisting: _CdkAccordion
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordion, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion, [cdkAccordion]",
      exportAs: "cdkAccordion",
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionItem = class _CdkAccordionItem {
  accordion = inject(CDK_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _expansionDispatcher = inject(UniqueSelectionDispatcher);
  _openCloseAllSubscription = Subscription.EMPTY;
  closed = new EventEmitter();
  opened = new EventEmitter();
  destroyed = new EventEmitter();
  expandedChange = new EventEmitter();
  id = inject(_IdGenerator).getId("cdk-accordion-child-");
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  _expanded = false;
  get disabled() {
    return this._disabled();
  }
  set disabled(value) {
    this._disabled.set(value);
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  _removeUniqueSelectionListener = () => {
  };
  ngOnInit() {
    this._removeUniqueSelectionListener = this._expansionDispatcher.listen((id2, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id2) {
        this.expanded = false;
      }
    });
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe((expanded) => {
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
  static \u0275fac = function CdkAccordionItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordionItem,
    selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
    inputs: {
      expanded: [2, "expanded", "expanded", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      closed: "closed",
      opened: "opened",
      destroyed: "destroyed",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkAccordionItem"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_ACCORDION,
      useValue: void 0
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionItem, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion-item, [cdkAccordionItem]",
      exportAs: "cdkAccordionItem",
      providers: [{
        provide: CDK_ACCORDION,
        useValue: void 0
      }]
    }]
  }], null, {
    closed: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    expanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionModule = class _CdkAccordionModule {
  static \u0275fac = function CdkAccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkAccordionModule,
    imports: [CdkAccordion, CdkAccordionItem],
    exports: [CdkAccordion, CdkAccordionItem]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAccordion, CdkAccordionItem],
      exports: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

// node_modules/.pnpm/@angular+material@22.0.2_fafb1761f712f01913f2bad44e62ee2a/node_modules/@angular/material/fesm2022/expansion.mjs
var _c03 = ["body"];
var _c13 = ["bodyWrapper"];
var _c2 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
var _c3 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanel_ng_template_7_Template(rf, ctx) {
}
var _c4 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
var _c5 = ["mat-panel-title", "mat-panel-description", "*"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 2);
    \u0275\u0275domElement(2, "path", 3);
    \u0275\u0275domElementEnd()();
  }
}
var MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
var MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
var MatExpansionPanelContent = class _MatExpansionPanelContent {
  _template = inject(TemplateRef);
  _expansionPanel = inject(MAT_EXPANSION_PANEL, {
    optional: true
  });
  static \u0275fac = function MatExpansionPanelContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelContent,
    selectors: [["ng-template", "matExpansionPanelContent", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matExpansionPanelContent]"
    }]
  }], null, null);
})();
var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
var MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
  _viewContainerRef = inject(ViewContainerRef);
  _animationsDisabled = _animationsDisabled();
  _document = inject(DOCUMENT);
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = value;
  }
  _hideToggle = false;
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  _togglePosition;
  afterExpand = new EventEmitter();
  afterCollapse = new EventEmitter();
  _inputChanges = new Subject();
  accordion = inject(MAT_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  _lazyContent;
  _body;
  _bodyWrapper;
  _portal;
  _headerId = inject(_IdGenerator).getId("mat-expansion-panel-header-");
  constructor() {
    super();
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    this._expansionDispatcher = inject(UniqueSelectionDispatcher);
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === "default";
    }
    return false;
  }
  _getExpandedState() {
    return this.expanded ? "expanded" : "collapsed";
  }
  toggle() {
    this.expanded = !this.expanded;
  }
  close() {
    this.expanded = false;
  }
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
    this._setupAnimationEvents();
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTransitionEnd?.();
    this._inputChanges.complete();
  }
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
  _transitionEndListener = ({
    target,
    propertyName
  }) => {
    if (target === this._bodyWrapper?.nativeElement && propertyName === "grid-template-rows") {
      this._ngZone.run(() => {
        if (this.expanded) {
          this.afterExpand.emit();
        } else {
          this.afterCollapse.emit();
        }
      });
    }
  };
  _setupAnimationEvents() {
    this._ngZone.runOutsideAngular(() => {
      if (this._animationsDisabled) {
        this.opened.subscribe(() => this._ngZone.run(() => this.afterExpand.emit()));
        this.closed.subscribe(() => this._ngZone.run(() => this.afterCollapse.emit()));
      } else {
        setTimeout(() => {
          const element = this._elementRef.nativeElement;
          this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this._transitionEndListener);
          element.classList.add("mat-expansion-panel-animations-enabled");
        }, 200);
      }
    });
  }
  static \u0275fac = function MatExpansionPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanel,
    selectors: [["mat-expansion-panel"]],
    contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lazyContent = _t.first);
      }
    },
    viewQuery: function MatExpansionPanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5)(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._body = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._bodyWrapper = _t.first);
      }
    },
    hostAttrs: [1, "mat-expansion-panel"],
    hostVars: 4,
    hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-expanded", ctx.expanded)("mat-expansion-panel-spacing", ctx._hasSpacing());
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      togglePosition: "togglePosition"
    },
    outputs: {
      afterExpand: "afterExpand",
      afterCollapse: "afterCollapse"
    },
    exportAs: ["matExpansionPanel"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_ACCORDION,
      useValue: void 0
    }, {
      provide: MAT_EXPANSION_PANEL,
      useExisting: _MatExpansionPanel
    }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 4,
    consts: [["bodyWrapper", ""], ["body", ""], [1, "mat-expansion-panel-content-wrapper"], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
    template: function MatExpansionPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2, 0)(3, "div", 3, 1)(5, "div", 4);
        \u0275\u0275projection(6, 1);
        \u0275\u0275template(7, MatExpansionPanel_ng_template_7_Template, 0, 0, "ng-template", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(8, 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("inert", ctx.expanded ? null : "");
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.id);
        \u0275\u0275attribute("aria-labelledby", ctx._headerId);
        \u0275\u0275advance(4);
        \u0275\u0275property("cdkPortalOutlet", ctx._portal);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".mat-expansion-panel {\n  box-sizing: content-box;\n  display: block;\n  margin: 0;\n  overflow: hidden;\n}\n.mat-expansion-panel.mat-expansion-panel-animations-enabled {\n  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-expansion-panel {\n  position: relative;\n  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));\n  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));\n  border-radius: var(--mat-expansion-container-shape, 12px);\n}\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n}\n.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {\n  border-radius: 0;\n}\n.mat-accordion .mat-expansion-panel:first-of-type {\n  border-top-right-radius: var(--mat-expansion-container-shape, 12px);\n  border-top-left-radius: var(--mat-expansion-container-shape, 12px);\n}\n.mat-accordion .mat-expansion-panel:last-of-type {\n  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);\n  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);\n}\n@media (forced-colors: active) {\n  .mat-expansion-panel {\n    outline: solid 1px;\n  }\n}\n\n.mat-expansion-panel-content-wrapper {\n  display: grid;\n  grid-template-rows: 0fr;\n  grid-template-columns: 100%;\n}\n.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {\n  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {\n  grid-template-rows: 1fr;\n}\n@supports not (grid-template-rows: 0fr) {\n  .mat-expansion-panel-content-wrapper {\n    height: 0;\n  }\n  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {\n    height: auto;\n  }\n}\n@media print {\n  .mat-expansion-panel-content-wrapper {\n    height: 0;\n  }\n  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {\n    height: auto;\n  }\n}\n\n.mat-expansion-panel-content {\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n  min-height: 0;\n  visibility: hidden;\n}\n.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {\n  transition: visibility 190ms linear;\n}\n.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {\n  visibility: visible;\n}\n.mat-expansion-panel-content {\n  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));\n  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));\n  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));\n  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));\n}\n\n.mat-expansion-panel-body {\n  padding: 0 24px 16px;\n}\n\n.mat-expansion-panel-spacing {\n  margin: 16px 0;\n}\n.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {\n  margin-top: 0;\n}\n.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {\n  margin-bottom: 0;\n}\n\n.mat-action-row {\n  border-top-style: solid;\n  border-top-width: 1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 16px 8px 16px 24px;\n  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));\n}\n.mat-action-row .mat-button-base,\n.mat-action-row .mat-mdc-button-base {\n  margin-left: 8px;\n}\n[dir=rtl] .mat-action-row .mat-button-base,\n[dir=rtl] .mat-action-row .mat-mdc-button-base {\n  margin-left: 0;\n  margin-right: 8px;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanel, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel",
      exportAs: "matExpansionPanel",
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_ACCORDION,
        useValue: void 0
      }, {
        provide: MAT_EXPANSION_PANEL,
        useExisting: MatExpansionPanel
      }],
      host: {
        "class": "mat-expansion-panel",
        "[class.mat-expanded]": "expanded",
        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
      },
      imports: [CdkPortalOutlet],
      template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`,
      styles: [".mat-expansion-panel {\n  box-sizing: content-box;\n  display: block;\n  margin: 0;\n  overflow: hidden;\n}\n.mat-expansion-panel.mat-expansion-panel-animations-enabled {\n  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-expansion-panel {\n  position: relative;\n  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));\n  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));\n  border-radius: var(--mat-expansion-container-shape, 12px);\n}\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n}\n.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {\n  border-radius: 0;\n}\n.mat-accordion .mat-expansion-panel:first-of-type {\n  border-top-right-radius: var(--mat-expansion-container-shape, 12px);\n  border-top-left-radius: var(--mat-expansion-container-shape, 12px);\n}\n.mat-accordion .mat-expansion-panel:last-of-type {\n  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);\n  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);\n}\n@media (forced-colors: active) {\n  .mat-expansion-panel {\n    outline: solid 1px;\n  }\n}\n\n.mat-expansion-panel-content-wrapper {\n  display: grid;\n  grid-template-rows: 0fr;\n  grid-template-columns: 100%;\n}\n.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {\n  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {\n  grid-template-rows: 1fr;\n}\n@supports not (grid-template-rows: 0fr) {\n  .mat-expansion-panel-content-wrapper {\n    height: 0;\n  }\n  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {\n    height: auto;\n  }\n}\n@media print {\n  .mat-expansion-panel-content-wrapper {\n    height: 0;\n  }\n  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {\n    height: auto;\n  }\n}\n\n.mat-expansion-panel-content {\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n  min-height: 0;\n  visibility: hidden;\n}\n.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {\n  transition: visibility 190ms linear;\n}\n.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {\n  visibility: visible;\n}\n.mat-expansion-panel-content {\n  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));\n  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));\n  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));\n  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));\n  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));\n}\n\n.mat-expansion-panel-body {\n  padding: 0 24px 16px;\n}\n\n.mat-expansion-panel-spacing {\n  margin: 16px 0;\n}\n.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {\n  margin-top: 0;\n}\n.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {\n  margin-bottom: 0;\n}\n\n.mat-action-row {\n  border-top-style: solid;\n  border-top-width: 1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 16px 8px 16px 24px;\n  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));\n}\n.mat-action-row .mat-button-base,\n.mat-action-row .mat-mdc-button-base {\n  margin-left: 8px;\n}\n[dir=rtl] .mat-action-row .mat-button-base,\n[dir=rtl] .mat-action-row .mat-mdc-button-base {\n  margin-left: 0;\n  margin-right: 8px;\n}\n"]
    }]
  }], () => [], {
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    togglePosition: [{
      type: Input
    }],
    afterExpand: [{
      type: Output
    }],
    afterCollapse: [{
      type: Output
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: ViewChild,
      args: ["body"]
    }],
    _bodyWrapper: [{
      type: ViewChild,
      args: ["bodyWrapper"]
    }]
  });
})();
var MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
  static \u0275fac = function MatExpansionPanelActionRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelActionRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelActionRow,
    selectors: [["mat-action-row"]],
    hostAttrs: [1, "mat-action-row"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelActionRow, [{
    type: Directive,
    args: [{
      selector: "mat-action-row",
      host: {
        class: "mat-action-row"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelHeader = class _MatExpansionPanelHeader {
  panel = inject(MatExpansionPanel, {
    host: true
  });
  _element = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _parentChangeSubscription = Subscription.EMPTY;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const panel = this.panel;
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter((changes) => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
    this.tabIndex = parseInt(tabIndex || "") || 0;
    this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter((changes) => {
      return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => this._focusMonitor.focusVia(this._element, "program"));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  expandedHeight;
  collapsedHeight;
  tabIndex = 0;
  get disabled() {
    return this.panel.disabled;
  }
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  _isExpanded() {
    return this.panel.expanded;
  }
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  _getPanelId() {
    return this.panel.id;
  }
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  _keydown(event) {
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe((origin) => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
  static \u0275fac = function MatExpansionPanelHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanelHeader,
    selectors: [["mat-expansion-panel-header"]],
    hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
    hostVars: 13,
    hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
          return ctx._toggle();
        })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        \u0275\u0275styleProp("height", ctx._getHeaderHeight());
        \u0275\u0275classProp("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
      }
    },
    inputs: {
      expandedHeight: "expandedHeight",
      collapsedHeight: "collapsedHeight",
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
    },
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
    template: function MatExpansionPanelHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275domElementStart(0, "span", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275projection(3, 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(4, MatExpansionPanelHeader_Conditional_4_Template, 3, 0, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-content-hide-toggle", !ctx._showToggle());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx._showToggle() ? 4 : -1);
      }
    },
    styles: ['.mat-expansion-panel-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0 24px;\n  border-radius: inherit;\n}\n.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {\n  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-expansion-panel-header::before {\n  border-radius: inherit;\n}\n.mat-expansion-panel-header {\n  height: var(--mat-expansion-header-collapsed-state-height, 48px);\n  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));\n  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));\n  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));\n  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));\n  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));\n}\n.mat-expansion-panel-header.mat-expanded {\n  height: var(--mat-expansion-header-expanded-state-height, 64px);\n}\n.mat-expansion-panel-header[aria-disabled=true] {\n  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-expansion-panel-header:not([aria-disabled=true]) {\n  cursor: pointer;\n}\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {\n  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {\n    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));\n  }\n}\n.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {\n  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n}\n.mat-expansion-panel-header._mat-animation-noopable {\n  transition: none;\n}\n.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {\n  outline: none;\n}\n.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {\n  background: inherit;\n}\n.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {\n  flex-direction: row-reverse;\n}\n.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {\n  margin: 0 16px 0 0;\n}\n[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {\n  margin: 0 0 0 16px;\n}\n\n.mat-content {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  overflow: hidden;\n}\n.mat-content.mat-content-hide-toggle {\n  margin-right: 8px;\n}\n[dir=rtl] .mat-content.mat-content-hide-toggle {\n  margin-right: 0;\n  margin-left: 8px;\n}\n.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {\n  margin-left: 24px;\n  margin-right: 0;\n}\n[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {\n  margin-right: 24px;\n  margin-left: 0;\n}\n\n.mat-expansion-panel-header-title {\n  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));\n}\n\n.mat-expansion-panel-header-title,\n.mat-expansion-panel-header-description {\n  display: flex;\n  flex-grow: 1;\n  flex-basis: 0;\n  margin-right: 16px;\n  align-items: center;\n}\n[dir=rtl] .mat-expansion-panel-header-title,\n[dir=rtl] .mat-expansion-panel-header-description {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {\n  color: inherit;\n}\n\n.mat-expansion-panel-header-description {\n  flex-grow: 2;\n  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));\n}\n\n.mat-expansion-panel-animations-enabled .mat-expansion-indicator {\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {\n  transform: rotate(180deg);\n}\n.mat-expansion-indicator::after {\n  border-style: solid;\n  border-width: 0 2px 2px 0;\n  content: "";\n  padding: 3px;\n  transform: rotate(45deg);\n  vertical-align: middle;\n  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));\n  display: var(--mat-expansion-legacy-header-indicator-display, none);\n}\n.mat-expansion-indicator svg {\n  width: 24px;\n  height: 24px;\n  margin: 0 -8px;\n  vertical-align: middle;\n  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));\n  display: var(--mat-expansion-header-indicator-display, inline-block);\n}\n\n@media (forced-colors: active) {\n  .mat-expansion-panel-content {\n    border-top: 1px solid;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelHeader, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel-header",
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mat-expansion-panel-header mat-focus-indicator",
        "role": "button",
        "[attr.id]": "panel._headerId",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": "_getPanelId()",
        "[attr.aria-expanded]": "_isExpanded()",
        "[attr.aria-disabled]": "panel.disabled",
        "[class.mat-expanded]": "_isExpanded()",
        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
        "[style.height]": "_getHeaderHeight()",
        "(click)": "_toggle()",
        "(keydown)": "_keydown($event)"
      },
      template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n',
      styles: ['.mat-expansion-panel-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0 24px;\n  border-radius: inherit;\n}\n.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {\n  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-expansion-panel-header::before {\n  border-radius: inherit;\n}\n.mat-expansion-panel-header {\n  height: var(--mat-expansion-header-collapsed-state-height, 48px);\n  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));\n  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));\n  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));\n  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));\n  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));\n}\n.mat-expansion-panel-header.mat-expanded {\n  height: var(--mat-expansion-header-expanded-state-height, 64px);\n}\n.mat-expansion-panel-header[aria-disabled=true] {\n  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));\n}\n.mat-expansion-panel-header:not([aria-disabled=true]) {\n  cursor: pointer;\n}\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {\n  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {\n    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));\n  }\n}\n.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {\n  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n}\n.mat-expansion-panel-header._mat-animation-noopable {\n  transition: none;\n}\n.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {\n  outline: none;\n}\n.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {\n  background: inherit;\n}\n.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {\n  flex-direction: row-reverse;\n}\n.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {\n  margin: 0 16px 0 0;\n}\n[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {\n  margin: 0 0 0 16px;\n}\n\n.mat-content {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  overflow: hidden;\n}\n.mat-content.mat-content-hide-toggle {\n  margin-right: 8px;\n}\n[dir=rtl] .mat-content.mat-content-hide-toggle {\n  margin-right: 0;\n  margin-left: 8px;\n}\n.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {\n  margin-left: 24px;\n  margin-right: 0;\n}\n[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {\n  margin-right: 24px;\n  margin-left: 0;\n}\n\n.mat-expansion-panel-header-title {\n  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));\n}\n\n.mat-expansion-panel-header-title,\n.mat-expansion-panel-header-description {\n  display: flex;\n  flex-grow: 1;\n  flex-basis: 0;\n  margin-right: 16px;\n  align-items: center;\n}\n[dir=rtl] .mat-expansion-panel-header-title,\n[dir=rtl] .mat-expansion-panel-header-description {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {\n  color: inherit;\n}\n\n.mat-expansion-panel-header-description {\n  flex-grow: 2;\n  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));\n}\n\n.mat-expansion-panel-animations-enabled .mat-expansion-indicator {\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {\n  transform: rotate(180deg);\n}\n.mat-expansion-indicator::after {\n  border-style: solid;\n  border-width: 0 2px 2px 0;\n  content: "";\n  padding: 3px;\n  transform: rotate(45deg);\n  vertical-align: middle;\n  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));\n  display: var(--mat-expansion-legacy-header-indicator-display, none);\n}\n.mat-expansion-indicator svg {\n  width: 24px;\n  height: 24px;\n  margin: 0 -8px;\n  vertical-align: middle;\n  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));\n  display: var(--mat-expansion-header-indicator-display, inline-block);\n}\n\n@media (forced-colors: active) {\n  .mat-expansion-panel-content {\n    border-top: 1px solid;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n}\n']
    }]
  }], () => [], {
    expandedHeight: [{
      type: Input
    }],
    collapsedHeight: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var MatExpansionPanelDescription = class _MatExpansionPanelDescription {
  static \u0275fac = function MatExpansionPanelDescription_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelDescription)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelDescription,
    selectors: [["mat-panel-description"]],
    hostAttrs: [1, "mat-expansion-panel-header-description"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelDescription, [{
    type: Directive,
    args: [{
      selector: "mat-panel-description",
      host: {
        class: "mat-expansion-panel-header-description"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelTitle = class _MatExpansionPanelTitle {
  static \u0275fac = function MatExpansionPanelTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelTitle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelTitle,
    selectors: [["mat-panel-title"]],
    hostAttrs: [1, "mat-expansion-panel-header-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelTitle, [{
    type: Directive,
    args: [{
      selector: "mat-panel-title",
      host: {
        class: "mat-expansion-panel-header-title"
      }
    }]
  }], null, null);
})();
var MatAccordion = class _MatAccordion extends CdkAccordion {
  _keyManager;
  _ownHeaders = new QueryList();
  _headers;
  hideToggle = false;
  displayMode = "default";
  togglePosition = "after";
  ngAfterContentInit() {
    this._headers.changes.pipe(startWith(this._headers)).subscribe((headers) => {
      this._ownHeaders.reset(headers.filter((header) => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatAccordion_BaseFactory;
    return function MatAccordion_Factory(__ngFactoryType__) {
      return (\u0275MatAccordion_BaseFactory || (\u0275MatAccordion_BaseFactory = \u0275\u0275getInheritedFactory(_MatAccordion)))(__ngFactoryType__ || _MatAccordion);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAccordion,
    selectors: [["mat-accordion"]],
    contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headers = _t);
      }
    },
    hostAttrs: [1, "mat-accordion"],
    hostVars: 2,
    hostBindings: function MatAccordion_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-accordion-multi", ctx.multi);
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      displayMode: "displayMode",
      togglePosition: "togglePosition"
    },
    exportAs: ["matAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_ACCORDION,
      useExisting: _MatAccordion
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAccordion, [{
    type: Directive,
    args: [{
      selector: "mat-accordion",
      exportAs: "matAccordion",
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: "mat-accordion",
        "[class.mat-accordion-multi]": "this.multi"
      }
    }]
  }], null, {
    _headers: [{
      type: ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    displayMode: [{
      type: Input
    }],
    togglePosition: [{
      type: Input
    }]
  });
})();
var MatExpansionModule = class _MatExpansionModule {
  static \u0275fac = function MatExpansionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatExpansionModule,
    imports: [CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
    exports: [BidiModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CdkAccordionModule, PortalModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      exports: [BidiModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();

// src/_core/components/dialog/notify-container/notify-card/notify-card.ts
function NotifyCard_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Code: ", ctx_r0.data.code);
  }
}
function NotifyCard_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-expansion-panel")(1, "mat-expansion-panel-header");
    \u0275\u0275text(2, " Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data.details);
  }
}
function NotifyCard_Conditional_17_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r2);
  }
}
function NotifyCard_Conditional_17_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "strong", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, NotifyCard_Conditional_17_For_4_For_5_Template, 2, 1, "li", 12, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.field);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(item_r3.errors);
  }
}
function NotifyCard_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-expansion-panel", 7)(1, "mat-expansion-panel-header");
    \u0275\u0275text(2, " Validation Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, NotifyCard_Conditional_17_For_4_Template, 6, 1, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("expanded", true);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.data.validations);
  }
}
var NotifyCard = class _NotifyCard {
  data;
  service = inject(NotifyService);
  progress = signal(
    100,
    ...ngDevMode ? [{ debugName: "progress" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pinned = signal(
    false,
    ...ngDevMode ? [{ debugName: "pinned" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    if (!this.data.autoClose)
      return;
    const duration = this.data.duration ?? 5e3;
    const interval = 100;
    const decrement = 100 / (duration / interval);
    const timer = setInterval(() => {
      if (this.pinned())
        return;
      this.progress.update((p) => p - decrement);
      if (this.progress() <= 0) {
        clearInterval(timer);
        this.close();
      }
    }, interval);
  }
  close() {
    this.service.remove(this.data.id);
  }
  pin() {
    this.pinned.set(!this.pinned());
  }
  static \u0275fac = function NotifyCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotifyCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotifyCard, selectors: [["notify-card"]], inputs: { data: "data" }, standalone: false, decls: 23, vars: 12, consts: [["appearance", "outlined"], [1, "header"], [1, "title"], [1, "heading"], ["mat-icon-button", "", 3, "click"], ["mode", "determinate", 3, "value"], [2, "overflow-y", "scroll", "max-height", "65vh"], [3, "expanded"], ["align", "end"], ["mat-button", "", 3, "click"], [1, "validation-item"], [1, "text-danger"], [1, "text-secondary"]], template: function NotifyCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-card", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "div", 3);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, NotifyCard_Conditional_8_Template, 2, 1, "small");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275listener("click", function NotifyCard_Template_button_click_9_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(10, "mat-icon");
      \u0275\u0275text(11, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(12, "mat-progress-bar", 5);
      \u0275\u0275elementStart(13, "mat-card-content", 6)(14, "p");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, NotifyCard_Conditional_16_Template, 5, 1, "mat-expansion-panel");
      \u0275\u0275conditionalCreate(17, NotifyCard_Conditional_17_Template, 5, 1, "mat-expansion-panel", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "mat-card-actions", 8)(19, "button", 9);
      \u0275\u0275listener("click", function NotifyCard_Template_button_click_19_listener() {
        return ctx.pin();
      });
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 9);
      \u0275\u0275listener("click", function NotifyCard_Template_button_click_21_listener() {
        return ctx.service.clear();
      });
      \u0275\u0275text(22, " Close All ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275interpolate2("bg-", ctx.data?.bg, " text-", ctx.data?.color));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.data.icon);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data.title);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data.code ? 8 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.progress());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data.message);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data.details ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data.icon === "rule" ? 17 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.pinned() ? "Resume" : "Don't Close", " ");
    }
  }, dependencies: [MatButton, MatIconButton, MatIcon, MatCard, MatCardActions, MatCardContent, MatExpansionPanel, MatExpansionPanelHeader, MatProgressBar], styles: ["/* src/_core/components/dialog/notify-container/notify-card/notify-card.scss */\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  padding: 8px 16px;\n}\n.title {\n  display: flex;\n  gap: 10px;\n}\n.heading {\n  font-weight: 600;\n}\n.validation-item {\n  padding: 8px 0;\n  border-bottom: 1px solid #eee;\n}\npre {\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n/*# sourceMappingURL=notify-card-SX5VU3S3.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotifyCard, [{
    type: Component,
    args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, selector: "notify-card", template: `<mat-card appearance="outlined" class="bg-{{data?.bg}} text-{{data?.color}}">\r
  <div class="header">\r
    <div class="title">\r
      <mat-icon>{{ data.icon }}</mat-icon>\r
      <div>\r
        <div class="heading">{{ data.title }}</div>\r
        @if(data.code){\r
        <small>Code: {{ data.code }}</small>\r
        }\r
      </div>\r
    </div>\r
\r
    <button mat-icon-button (click)="close()">\r
      <mat-icon>close</mat-icon>\r
    </button>\r
  </div>\r
\r
  <mat-progress-bar mode="determinate" [value]="progress()"></mat-progress-bar>\r
\r
  <mat-card-content style="overflow-y: scroll; max-height: 65vh;">\r
    <p>{{ data.message }}</p>\r
    <!-- Only 500 Stack Trace Dev Mode -->\r
    @if(data.details){\r
    <mat-expansion-panel>\r
      <mat-expansion-panel-header>\r
        Details\r
      </mat-expansion-panel-header>\r
      <pre>{{ data.details }}</pre>\r
    </mat-expansion-panel>\r
    }\r
    <!-- Only Validation  -->\r
    @if(data.icon === 'rule'){\r
    <mat-expansion-panel [expanded]="true">\r
      <mat-expansion-panel-header>\r
        Validation Details\r
      </mat-expansion-panel-header>\r
      @for(item of data.validations; track item){\r
      <div class="validation-item">\r
        <strong class="text-danger">{{ item.field }}</strong>\r
        <ul>\r
          @for (error of item.errors; track $index) {\r
            <li class="text-secondary">{{ error }}</li>\r
          }\r
        </ul>\r
      </div>\r
      }\r
    </mat-expansion-panel>\r
    }\r
  </mat-card-content>\r
  <mat-card-actions align="end">\r
    <button mat-button (click)="pin()">\r
      {{ pinned() ? 'Resume' : 'Don\\'t Close' }}\r
    </button>\r
    <button mat-button (click)="service.clear()">\r
      Close All\r
    </button>\r
  </mat-card-actions>\r
</mat-card>\r
`, styles: ["/* src/_core/components/dialog/notify-container/notify-card/notify-card.scss */\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  padding: 8px 16px;\n}\n.title {\n  display: flex;\n  gap: 10px;\n}\n.heading {\n  font-weight: 600;\n}\n.validation-item {\n  padding: 8px 0;\n  border-bottom: 1px solid #eee;\n}\npre {\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n/*# sourceMappingURL=notify-card-SX5VU3S3.css.map */\n"] }]
  }], null, { data: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotifyCard, { className: "NotifyCard", filePath: "_core/components/dialog/notify-container/notify-card/notify-card.ts", lineNumber: 22 });
})();

// src/_core/components/dialog/notify-container/notify-container.ts
var _forTrack0 = ($index, $item) => $item.id;
function NotifyContainer_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "notify-card", 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("data", item_r1);
  }
}
var NotifyContainer = class _NotifyContainer {
  service = inject(NotifyService);
  static \u0275fac = function NotifyContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotifyContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotifyContainer, selectors: [["notify-container"]], standalone: false, decls: 3, vars: 0, consts: [[1, "notify-container"], [3, "data"]], template: function NotifyContainer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, NotifyContainer_For_2_Template, 1, 1, "notify-card", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.service.notifications());
    }
  }, dependencies: [NotifyCard], styles: ["/* angular:styles/component:scss;6fd00d240d94190a5f083503c0d22b7b6f23ab02881097c72e674d264d5bd68f;C:/Codez/edu-fe-admin/src/_core/components/dialog/notify-container/notify-container.ts */\n.notify-container {\n  position: fixed;\n  top: 16px;\n  right: 16px;\n  width: 450px;\n  max-width: 95vw;\n  max-height: 80vh;\n  overflow-y: auto;\n  z-index: 99999;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n/*# sourceMappingURL=notify-container-ONLS646B.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotifyContainer, [{
    type: Component,
    args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, selector: "notify-container", template: '<div class="notify-container">\r\n  @for(item of service.notifications(); track item.id){\r\n  <notify-card [data]="item"> </notify-card>\r\n  }\r\n</div>\r\n', styles: ["/* angular:styles/component:scss;6fd00d240d94190a5f083503c0d22b7b6f23ab02881097c72e674d264d5bd68f;C:/Codez/edu-fe-admin/src/_core/components/dialog/notify-container/notify-container.ts */\n.notify-container {\n  position: fixed;\n  top: 16px;\n  right: 16px;\n  width: 450px;\n  max-width: 95vw;\n  max-height: 80vh;\n  overflow-y: auto;\n  z-index: 99999;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n/*# sourceMappingURL=notify-container-ONLS646B.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotifyContainer, { className: "NotifyContainer", filePath: "_core/components/dialog/notify-container/notify-container.ts", lineNumber: 26 });
})();

// src/_core/store/srvc.cache.ts
var LocalStorageService = class _LocalStorageService {
  set(key, value) {
    localStorage.setItem(key, value);
  }
  get(key) {
    return localStorage.getItem(key);
  }
  setObject(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getObject(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  static \u0275fac = function LocalStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocalStorageService, factory: _LocalStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/_core/_route/menu-items-settings.ts
var permission = [
  EP.Add,
  EP.Update,
  EP.UpdateStatus,
  EP.Delete,
  EP.Get,
  EP.Gets,
  EP.GetsByIds,
  EP.GetsLookup,
  EP.GetsByIdsLookup,
  EP.GetsPaginate,
  EP.GetsPaginateOptions,
  EP.GetsCSV
  // EP.None
];
var defaultChild = {
  // icon: 'dashboard',
  // class: '',
  permission: JSON.stringify(permission),
  submenu: []
};
var defaultParent = __spreadProps(__spreadValues({}, defaultChild), {
  permission: void 0
  // path: '',
  // icon: 'icon-list',
  // class: 'has-arrow',
});
var id = 1;
function P(title, icon, emoji, link, desc, submenu) {
  return __spreadProps(__spreadValues({
    id: id++,
    title,
    desc,
    icon,
    emoji,
    link
  }, defaultParent), {
    submenu
  });
}
function C(title, icon, emoji, link, desc = "") {
  return __spreadValues({
    id: id++,
    link,
    title,
    desc,
    icon,
    emoji
  }, defaultChild);
}

// src/_core/_route/menu-items.ts
var ROUTEZ = [
  P("Dashboard", "dashboard", "\u{1F4CA}", "/dashboard", "Admin, Teacher, Parent, Student, Dashboards and their metrics, charts, etc...", [
    C("Finance", "stacked_bar_chart", "\u{1F4B0}", "/dashboard/finance"),
    C("Admin", "admin_panel_settings", "\u{1F6E1}\uFE0F", "/dashboard/admin"),
    C("Teachers", "school", "\u{1F468}\u200D\u{1F3EB}", "/dashboard/teachers"),
    C("Parents", "family_restroom", "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "/dashboard/parents"),
    C("Students", "mood", "\u{1F393}", "/dashboard/students")
  ]),
  P("User", "diversity_3", "\u{1F465}", "/feature/user", "All the Userz", [
    C("User Type", "groups_3", "\u{1F3F7}\uFE0F", "/feature/user/type"),
    C("Admin", "admin_panel_settings", "\u{1F6E1}\uFE0F", "/feature/user/admin"),
    C("Teacher", "school", "\u{1F468}\u200D\u{1F3EB}", "/feature/user/teacher"),
    C("Parents", "family_restroom", "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "/feature/user/parent"),
    C("Students", "mood", "\u{1F393}", "/feature/user/student")
  ]),
  P("Education", "apartment", "\u{1F3EB}", "/feature/education", "Education Related Stuff", [
    C("Institute", "add_home_work", "\u{1F3E2}", "/feature/education/institute"),
    C("Class", "other_houses", "\u{1F3D8}\uFE0F", "/feature/education/class"),
    C("Section", "house_siding", "\u{1F6AA}", "/feature/education/section"),
    C("Class Section", "house_siding", "\u{1F6AA}", "/feature/education/class-section"),
    C("Class Routine", "assignment_add", "\u{1F4C5}", "/feature/education/class-routine"),
    C("Student Promote", "add_chart", "\u2B06\uFE0F", "/feature/education/student-promote"),
    C("Attendance", "list_alt_check", "\u2705", "/feature/education/attendance")
  ]),
  P("Library", "apartment", "\u{1F3EB}", "/feature/library", "Library Related Stuff", [
    C("Library", "museum", "\u{1F4DA}", "/feature/library/library"),
    C("Library Cabinet", "museum", "\u{1F4DA}", "/feature/library/library-cabinet"),
    C("Library Shelf", "museum", "\u{1F4DA}", "/feature/library/library-shelf"),
    C("Library Book", "museum", "\u{1F4DA}", "/feature/library/library-book"),
    C("Book Issue", "museum", "\u{1F4DA}", "/feature/library/book-issue")
  ]),
  P("Syllabus", "menu_book", "\u{1F4D6}", "/feature/syllabus", "Syllabus Related Stuff", [
    C("Subject", "language_chinese_dayi", "\u{1F4DD}", "/feature/syllabus/subject"),
    C("Book", "menu_book", "\u{1F4DA}", "/feature/syllabus/book"),
    C("Chapter", "book_ribbon", "\u{1F4D1}", "/feature/syllabus/chapter"),
    C("Question", "contact_support", "\u2753", "/feature/syllabus/question")
  ]),
  P("Exam", "assignment", "\u{1F4DD}", "/exam/type", "Exam Related Stuff", [
    C("Exam Type", "content_paste_search", "\u{1F4CB}", "/exam/type"),
    C("Schedule", "calendar_month", "\u{1F4C5}", "/exam/schedule"),
    C("Grades", "percent", "\u{1F4AF}", "/exam/grades"),
    C("Result", "stars_2", "\u{1F3C6}", "/exam/result")
  ]),
  P("Prints", "receipt", "\u{1F5A8}\uFE0F", "/feature/print/admission", "Printable Forms, Summary and Reports", [
    C("Admission Form", "article", "\u{1F4C4}", "/feature/print/admission"),
    C("Attendance Summary", "article", "\u{1F4CA}", "/feature/print/attendance-summary"),
    C("Explanation", "article", "\u{1F4C3}", "/feature/print/explanation"),
    C("Leave Form", "article", "\u{1F4DD}", "/feature/print/leave-form"),
    C("Result", "article", "\u{1F3C6}", "/feature/print/result")
  ]),
  P("Account In", "paid", "\u{1F4B5}", "/feature/account-in/donar-type", "All the income records", [
    C("Donar Type", "volunteer_activism", "\u{1F91D}", "/feature/account-in/donar-type"),
    C("Donation Type", "volunteer_activism", "\u{1F381}", "/feature/account-in/donation-type"),
    C("Donation Box", "how_to_vote", "\u{1F4E6}", "/feature/account-in/donation-box"),
    C("Donar", "volunteer_activism", "\u{1F64B}", "/feature/account-in/donar"),
    C("Account Type", "volunteer_activism", "\u{1F3E6}", "/feature/account-in/account-type"),
    C("Fees", "currency_bitcoin", "\u{1F4B3}", "/feature/account-in/fees")
  ]),
  P("Account Out", "money_off", "\u{1F4B8}", "/feature/account-out/expense-type", "All the Expenses related to purchasing, payable amount records", [
    C("Expense Type", "area_chart", "\u{1F4C9}", "/feature/account-out/expense-type"),
    C("Expenses", "bar_chart", "\u{1F9FE}", "/feature/account-out/expenses"),
    C("Teacher Payment", "payments", "\u{1F4B0}", "/feature/account-out/teacher-payment"),
    C("Teacher Advance Payment", "money_bag", "\u{1F4B5}", "/feature/account-out/teacher_advance_payment")
  ]),
  P("File Upload", "cloud_upload", "\u2601\uFE0F", "/feature/file", "Manage Files on Cloud", [
    C("File Type", "image", "\u{1F5BC}\uFE0F", "/feature/file/type"),
    C("File Upload", "upload", "\u{1F4E4}", "/feature/file-upload")
  ])
  // P('Notice', 'assignment', '📢', '/feature/notice', 'School, Student, Teacher Notices',
  // [
  //   C('School Notice', 'cash', '🏫', '/feature/notice/school'),
  //   C('Student Notice', 'cash', '🎓', '/feature/notice/student'),
  //   C('Teacher Notice', 'cash', '👨‍🏫', '/feature/notice/teacher'),
  // ]),
  // P('Transport', 'account_balance', '🚌', '/feature/transport', 'Transport Management System',
  // [
  //   C('Vehicle Type', 'cash', '🚗', '/feature/transport/type'),
  //   C('Vehicle', 'cash', '🚐', '/feature/transport/vehicle'),
  // ]),
  // P('Hostel', 'account_balance', '🏨', '/feature/hostel', 'Hostel Management System',
  // [
  //   C('Room', 'cash', '🛏️', '/feature/hostel/room'),
  // ]),
];

// src/_core/_template/srvc.direction.ts
var DirectionService = class _DirectionService {
  translate;
  rendererFactory;
  document;
  renderer;
  constructor(translate, rendererFactory, document2) {
    this.translate = translate;
    this.rendererFactory = rendererFactory;
    this.document = document2;
    this.renderer = rendererFactory.createRenderer(null, null);
    this.translate.setDefaultLang("en");
  }
  setLanguage(lang) {
    const isRtl = lang === "ur" || lang === "ar" || lang === "he";
    this.renderer.setAttribute(this.document.documentElement, "dir", isRtl ? "rtl" : "ltr");
    this.renderer.setAttribute(this.document.documentElement, "lang", lang);
    this.loadMaterialTheme(isRtl);
  }
  loadMaterialTheme(isRtl) {
    const themeId = "material-theme-rtl";
    let existingLink = this.document.getElementById(themeId);
    if (existingLink) {
      existingLink.remove();
    }
    if (isRtl) {
      const link = this.renderer.createElement("link");
      this.renderer.setAttribute(link, "id", themeId);
      this.renderer.setAttribute(link, "rel", "stylesheet");
      this.renderer.setAttribute(link, "href", "indigo-pink-rtl.css");
      this.renderer.appendChild(this.document.head, link);
    }
  }
  static \u0275fac = function DirectionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DirectionService)(\u0275\u0275inject(TranslateService), \u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DirectionService, factory: _DirectionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirectionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: TranslateService }, { type: RendererFactory2 }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();

// src/_core/_template/srvc.template.ts
var TemplateService = class _TemplateService {
  bpo;
  title = "";
  layer = [""];
  linkPaginate = "";
  linkAdd = "";
  linkUpdate = "";
  linkProfile = "admin";
  DATA = new Subject();
  _cdr;
  lb = new TM_List(this, {}, []);
  fsb = new TMSubmit(this, {});
  constructor(bpo) {
    this.bpo = bpo;
    this.DATA.subscribe({
      next: (data) => {
        this.title = data?.title || "";
        this.layer = data?.layer || ["Module", "Submodule", "Page"];
        this.linkPaginate = data?.linkPaginate || "";
        this.linkAdd = data?.linkAdd || "";
        this.linkUpdate = data?.linkUpdate || "";
      }
    });
    this.bpoInit();
  }
  cols;
  SM = false;
  MD = false;
  LG = false;
  bpoInit() {
    this.bpo.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).subscribe((result) => {
      const bp = result.breakpoints;
      this.SM = this.MD = this.LG = false;
      if (bp[Breakpoints.XSmall] || bp[Breakpoints.Small])
        this.SM = true;
      else if (bp[Breakpoints.Medium])
        this.MD = true;
      else
        this.LG = true;
      this._cdr?.detectChanges();
    });
  }
  static \u0275fac = function TemplateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TemplateService)(\u0275\u0275inject(BreakpointObserver));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TemplateService, factory: _TemplateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: BreakpointObserver }], null);
})();

// src/_core/store/srvc.state.ts
var StateService = class _StateService {
  injector;
  // TRANSACTION
  activeSideBarParent;
  activeSideBarParentId;
  activeSideBarLink;
  sideBarMenus;
  sideBarMenusFlat = [];
  permission;
  transBatch = true;
  DATA = new Subject();
  isLoading = new BehaviorSubject(false);
  constructor(injector) {
    this.injector = injector;
    const dirService = inject(DirectionService);
    dirService.setLanguage("en");
    this.sideBarMenus = ROUTEZ;
    ROUTEZ.forEach((x) => {
      this.flatSideBarMenu(x);
    });
  }
  flatSideBarMenu(menu) {
    this.sideBarMenusFlat.push(menu);
    if (menu.submenu.length) {
      menu.submenu.forEach((y) => {
        this.flatSideBarMenu(y);
      });
    }
  }
  checkPermission(action) {
    return this.permission?.find((a) => a.name == action);
  }
  EDUCTION = [
    { id: "Middle", name: "Middle" },
    { id: "Matric", name: "Matric" },
    { id: "Inter", name: "Inter" },
    { id: "Graduation", name: "Graduation" },
    { id: "Masters", name: "Masters" }
  ];
  GENDER = [
    { id: "Male", name: "Male" },
    { id: "Female", name: "Female" }
  ];
  STATUS = [
    { id: "None", name: "None" },
    { id: "Active", name: "Active" },
    { id: "DeActive", name: "DeActive" },
    { id: "Archived", name: "Archived" },
    { id: "Delete", name: "Delete" }
    // { id: "Published", name: "Published" },
    // { id: "Pending", name: "Pending" },
    // { id: "NonVerified", name: "NonVerified" },
    // { id: "Verified", name: "Verified" }
  ];
  static \u0275fac = function StateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StateService)(\u0275\u0275inject(Injector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StateService, factory: _StateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Injector }], null);
})();

// node_modules/.pnpm/ngx-spinner@21.1.0_@angular_3fe20a0b39fbf9e090c5c448b8b5df53/node_modules/ngx-spinner/fesm2022/ngx-spinner.mjs
var _c04 = ["overlay"];
var _c14 = ["*"];
function NgxSpinnerComponent_Conditional_0_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div");
  }
}
function NgxSpinnerComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div");
    \u0275\u0275repeaterCreate(1, NgxSpinnerComponent_Conditional_0_Conditional_2_For_2_Template, 1, 0, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.spinner.class);
    \u0275\u0275styleProp("color", ctx_r1.spinner.color);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.spinner.divArray);
  }
}
function NgxSpinnerComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 4);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r1.template), \u0275\u0275sanitizeHtml);
  }
}
function NgxSpinnerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2, 0);
    \u0275\u0275animateLeave(function NgxSpinnerComponent_Conditional_0_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.disableAnimation ? "" : "fade-out");
    });
    \u0275\u0275conditionalCreate(2, NgxSpinnerComponent_Conditional_0_Conditional_2_Template, 3, 4, "div", 3);
    \u0275\u0275conditionalCreate(3, NgxSpinnerComponent_Conditional_0_Conditional_3_Template, 2, 3, "div", 4);
    \u0275\u0275domElementStart(4, "div", 5);
    \u0275\u0275projection(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r1.spinner.bdColor)("z-index", ctx_r1.spinner.zIndex)("position", ctx_r1.spinner.fullScreen ? "fixed" : "absolute");
    \u0275\u0275classProp("no-animate", ctx_r1.disableAnimation);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.template ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.template ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("z-index", ctx_r1.spinner.zIndex);
  }
}
var LOADERS = {
  "ball-8bits": 16,
  "ball-atom": 4,
  "ball-beat": 3,
  "ball-circus": 5,
  "ball-climbing-dot": 4,
  "ball-clip-rotate": 1,
  "ball-clip-rotate-multiple": 2,
  "ball-clip-rotate-pulse": 2,
  "ball-elastic-dots": 5,
  "ball-fall": 3,
  "ball-fussion": 4,
  "ball-grid-beat": 9,
  "ball-grid-pulse": 9,
  "ball-newton-cradle": 4,
  "ball-pulse": 3,
  "ball-pulse-rise": 5,
  "ball-pulse-sync": 3,
  "ball-rotate": 1,
  "ball-running-dots": 5,
  "ball-scale": 1,
  "ball-scale-multiple": 3,
  "ball-scale-pulse": 2,
  "ball-scale-ripple": 1,
  "ball-scale-ripple-multiple": 3,
  "ball-spin": 8,
  "ball-spin-clockwise": 8,
  "ball-spin-clockwise-fade": 8,
  "ball-spin-clockwise-fade-rotating": 8,
  "ball-spin-fade": 8,
  "ball-spin-fade-rotating": 8,
  "ball-spin-rotate": 2,
  "ball-square-clockwise-spin": 8,
  "ball-square-spin": 8,
  "ball-triangle-path": 3,
  "ball-zig-zag": 2,
  "ball-zig-zag-deflect": 2,
  cog: 1,
  "cube-transition": 2,
  fire: 3,
  "line-scale": 5,
  "line-scale-party": 5,
  "line-scale-pulse-out": 5,
  "line-scale-pulse-out-rapid": 5,
  "line-spin-clockwise-fade": 8,
  "line-spin-clockwise-fade-rotating": 8,
  "line-spin-fade": 8,
  "line-spin-fade-rotating": 8,
  pacman: 6,
  "square-jelly-box": 2,
  "square-loader": 1,
  "square-spin": 1,
  timer: 1,
  "triangle-skew-spin": 1
};
var DEFAULTS = {
  BD_COLOR: "rgba(51,51,51,0.8)",
  SPINNER_COLOR: "#fff",
  Z_INDEX: 99999
};
var PRIMARY_SPINNER = "primary";
var NgxSpinner = class _NgxSpinner {
  constructor(init) {
    Object.assign(this, init);
  }
  static create(init) {
    if (!init?.template && !init?.type) {
      console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`);
    }
    return new _NgxSpinner(init);
  }
};
var NgxSpinnerService = class _NgxSpinnerService {
  /**
   * Creates an instance of NgxSpinnerService.
   * @memberof NgxSpinnerService
   */
  constructor() {
    this.spinnerObservable = new BehaviorSubject(null);
  }
  /**
   * Get subscription of desired spinner
   * @memberof NgxSpinnerService
   **/
  getSpinner(name) {
    return this.spinnerObservable.asObservable().pipe(filter((x) => x && x.name === name));
  }
  /**
   * To show spinner
   *
   * @memberof NgxSpinnerService
   */
  show(name = PRIMARY_SPINNER, spinner) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (spinner && Object.keys(spinner).length) {
          spinner["name"] = name;
          this.spinnerObservable.next(new NgxSpinner(__spreadProps(__spreadValues({}, spinner), {
            show: true
          })));
          resolve(true);
        } else {
          this.spinnerObservable.next(new NgxSpinner({
            name,
            show: true
          }));
          resolve(true);
        }
      }, 10);
    });
  }
  /**
   * To hide spinner
   *
   * @memberof NgxSpinnerService
   */
  hide(name = PRIMARY_SPINNER, debounce = 10) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        this.spinnerObservable.next(new NgxSpinner({
          name,
          show: false
        }));
        resolve(true);
      }, debounce);
    });
  }
  static {
    this.\u0275fac = function NgxSpinnerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxSpinnerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgxSpinnerService,
      factory: _NgxSpinnerService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NGX_SPINNER_CONFIG = new InjectionToken("NGX_SPINNER_CONFIG");
var SafeHtmlPipe = class _SafeHtmlPipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  transform(value) {
    return value ? this.sanitizer.bypassSecurityTrustHtml(value) : "";
  }
  static {
    this.\u0275fac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SafeHtmlPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
      name: "safeHtml",
      type: _SafeHtmlPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml",
      standalone: true
    }]
  }], null, null);
})();
var NgxSpinnerComponent = class _NgxSpinnerComponent {
  // TODO: https://github.com/Napster2210/ngx-spinner/issues/259
  // @HostListener("document:keydown", ["$event"])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (this.spinnerDOM && this.spinnerDOM.nativeElement) {
  //     if (
  //       this.fullScreen ||
  //       (!this.fullScreen && this.isSpinnerZone(event.target))
  //     ) {
  //       event.returnValue = false;
  //       event.preventDefault();
  //     }
  //   }
  // }
  /**
   * Creates an instance of NgxSpinnerComponent.
   *
   * @memberof NgxSpinnerComponent
   */
  constructor(spinnerService, changeDetector, elementRef, globalConfig) {
    this.spinnerService = spinnerService;
    this.changeDetector = changeDetector;
    this.elementRef = elementRef;
    this.globalConfig = globalConfig;
    this.disableAnimation = false;
    this.spinner = new NgxSpinner();
    this.ngUnsubscribe = new Subject();
    this.setDefaultOptions = () => {
      const {
        type
      } = this.globalConfig ?? {};
      this.spinner = NgxSpinner.create({
        name: this.name,
        bdColor: this.bdColor,
        size: this.size,
        color: this.color,
        type: this.type ?? type,
        fullScreen: this.fullScreen,
        divArray: this.divArray,
        divCount: this.divCount,
        show: this.show,
        zIndex: this.zIndex,
        template: this.template,
        showSpinner: this.showSpinner
      });
    };
    this.bdColor = DEFAULTS.BD_COLOR;
    this.zIndex = DEFAULTS.Z_INDEX;
    this.color = DEFAULTS.SPINNER_COLOR;
    this.size = "large";
    this.fullScreen = true;
    this.name = PRIMARY_SPINNER;
    this.template = null;
    this.showSpinner = false;
    this.divArray = [];
    this.divCount = 0;
    this.show = false;
  }
  initObservable() {
    this.spinnerService.getSpinner(this.name).pipe(takeUntil(this.ngUnsubscribe)).subscribe((spinner) => {
      this.setDefaultOptions();
      Object.assign(this.spinner, spinner);
      if (spinner.show) {
        this.onInputChange();
      }
      this.changeDetector.detectChanges();
    });
  }
  /**
   * Initialization method
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnInit() {
    this.setDefaultOptions();
    this.initObservable();
  }
  /**
   * To check event triggers inside the Spinner Zone
   *
   * @param {*} element
   * @returns {boolean}
   * @memberof NgxSpinnerComponent
   */
  isSpinnerZone(element) {
    if (element === this.elementRef.nativeElement.parentElement) {
      return true;
    }
    return element.parentNode && this.isSpinnerZone(element.parentNode);
  }
  /**
   * On changes event for input variables
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnChanges(changes) {
    for (const propName in changes) {
      if (propName) {
        const changedProp = changes[propName];
        if (changedProp.isFirstChange()) {
          return;
        } else if (typeof changedProp.currentValue !== "undefined" && changedProp.currentValue !== changedProp.previousValue) {
          if (changedProp.currentValue !== "") {
            this.spinner[propName] = changedProp.currentValue;
            if (propName === "showSpinner") {
              if (changedProp.currentValue) {
                this.spinnerService.show(this.spinner.name, this.spinner);
              } else {
                this.spinnerService.hide(this.spinner.name);
              }
            }
            if (propName === "name") {
              this.initObservable();
            }
          }
        }
      }
    }
  }
  /**
   * To get class for spinner
   *
   * @memberof NgxSpinnerComponent
   */
  getClass(type, size) {
    this.spinner.divCount = LOADERS[type];
    this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((_, i) => i);
    let sizeClass = "";
    switch (size.toLowerCase()) {
      case "small":
        sizeClass = "la-sm";
        break;
      case "medium":
        sizeClass = "la-2x";
        break;
      case "large":
        sizeClass = "la-3x";
        break;
      default:
        break;
    }
    return "la-" + type + " " + sizeClass;
  }
  /**
   * Check if input variables have changed
   *
   * @memberof NgxSpinnerComponent
   */
  onInputChange() {
    this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
  }
  /**
   * Component destroy event
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  static {
    this.\u0275fac = function NgxSpinnerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxSpinnerComponent)(\u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NGX_SPINNER_CONFIG, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxSpinnerComponent,
      selectors: [["ngx-spinner"]],
      viewQuery: function NgxSpinnerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c04, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.spinnerDOM = _t.first);
        }
      },
      inputs: {
        bdColor: "bdColor",
        size: "size",
        color: "color",
        type: "type",
        fullScreen: "fullScreen",
        name: "name",
        zIndex: "zIndex",
        template: "template",
        showSpinner: "showSpinner",
        disableAnimation: "disableAnimation"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c14,
      decls: 1,
      vars: 1,
      consts: [["overlay", ""], [1, "ngx-spinner-overlay", 3, "no-animate", "background-color", "z-index", "position"], [1, "ngx-spinner-overlay"], [3, "class", "color"], [3, "innerHTML"], [1, "loading-text"]],
      template: function NgxSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275conditionalCreate(0, NgxSpinnerComponent_Conditional_0_Template, 6, 12, "div", 1);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.spinner.show ? 0 : -1);
        }
      },
      dependencies: [SafeHtmlPipe],
      styles: [".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;transition:opacity .3s ease-in}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}@starting-style{.ngx-spinner-overlay[_ngcontent-%COMP%]{opacity:0}}.fade-out[_ngcontent-%COMP%]{opacity:0;transition:opacity .2s ease-out}.no-animate[_ngcontent-%COMP%]{transition:none!important}@starting-style{.no-animate[_ngcontent-%COMP%]{opacity:1!important;transition:none!important}}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerComponent, [{
    type: Component,
    args: [{
      imports: [SafeHtmlPipe],
      selector: "ngx-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (spinner.show) {
  <div
    class="ngx-spinner-overlay"
    [class.no-animate]="disableAnimation"
    [animate.leave]="disableAnimation ? '' : 'fade-out'"
    [style.background-color]="spinner.bdColor"
    [style.z-index]="spinner.zIndex"
    [style.position]="spinner.fullScreen ? 'fixed' : 'absolute'"
    #overlay
  >
    @if (!template) {
      <div [class]="spinner.class" [style.color]="spinner.color">
        @for (index of spinner.divArray; track index) {
          <div></div>
        }
      </div>
    }
    @if (template) {
      <div [innerHTML]="template | safeHtml"></div>
    }
    <div class="loading-text" [style.z-index]="spinner.zIndex">
      <ng-content></ng-content>
    </div>
  </div>
}
`,
      styles: [".ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;transition:opacity .3s ease-in}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}@starting-style{.ngx-spinner-overlay{opacity:0}}.fade-out{opacity:0;transition:opacity .2s ease-out}.no-animate{transition:none!important}@starting-style{.no-animate{opacity:1!important;transition:none!important}}\n"]
    }]
  }], () => [{
    type: NgxSpinnerService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NGX_SPINNER_CONFIG]
    }]
  }], {
    bdColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    fullScreen: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    showSpinner: [{
      type: Input
    }],
    disableAnimation: [{
      type: Input
    }],
    spinnerDOM: [{
      type: ViewChild,
      args: ["overlay"]
    }]
  });
})();
var NgxSpinnerModule = class _NgxSpinnerModule {
  static forRoot(config) {
    return {
      ngModule: _NgxSpinnerModule,
      providers: [{
        provide: NGX_SPINNER_CONFIG,
        useValue: config
      }]
    };
  }
  static {
    this.\u0275fac = function NgxSpinnerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxSpinnerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgxSpinnerModule,
      imports: [NgxSpinnerComponent, SafeHtmlPipe],
      exports: [NgxSpinnerComponent]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [NgxSpinnerComponent, SafeHtmlPipe],
      exports: [NgxSpinnerComponent]
    }]
  }], null, null);
})();

// src/_core/components/loader/loader.component.ts
var LoaderComponent = class _LoaderComponent {
  _ss;
  spinner;
  loading;
  constructor(_ss, spinner) {
    this._ss = _ss;
    this.spinner = spinner;
    this._ss.isLoading.subscribe((x) => {
      if (x)
        this.spinner.show();
      else
        this.spinner.hide();
    });
  }
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)(\u0275\u0275directiveInject(StateService), \u0275\u0275directiveInject(NgxSpinnerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["ctrl-loader"]], standalone: false, decls: 6, vars: 1, consts: [["bdColor", "rgba(161,176,184,0.47)", "load", "", "size", "medium", "color", "#039be5", "type", "ball-clip-rotate-pulse", 3, "fullScreen"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ngx-spinner", 0)(1, "h1");
      \u0275\u0275text(2, " \u0635\u064E\u0644\u064F\u0651\u0648\u0627 \u0639\u064E\u0644\u064E\u0649 \u0627\u0644\u0652\u062D\u064E\u0628\u0650\u064A\u0652\u0628 \u0635\u064E\u0644\u064E\u0651\u0649 ");
      \u0275\u0275elementStart(3, "span");
      \u0275\u0275text(4, "\uFDF2\u064F");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " \u062A\u064E\u0639\u064E\u0627\u0644\u0670\u0649 \u0639\u064E\u0644\u0670\u0649 \u0645\u064F\u062D\u064E\u0645\u064E\u0651\u062F ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("fullScreen", true);
    }
  }, dependencies: [NgxSpinnerComponent], styles: ["\nh1[_ngcontent-%COMP%] {\n  color: white;\n  text-shadow: 2px 1px 2px black;\n  font-size: 25px;\n}\nspan[_ngcontent-%COMP%] {\n  color: white;\n  text-shadow: 1px 1px 2px black;\n  font-size: 33px;\n  font-weight: 100;\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 13px;\n    text-shadow: 1px 1px 0px black;\n  }\n  span[_ngcontent-%COMP%] {\n    font-size: 15px;\n    text-shadow: 1px 1px 0px black;\n  }\n}\n/*# sourceMappingURL=loader.component-Y6TGBAP7.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ standalone: false, encapsulation: ViewEncapsulation.Emulated, changeDetection: ChangeDetectionStrategy.OnPush, selector: "ctrl-loader", template: '<ngx-spinner\r\n  bdColor="rgba(161,176,184,0.47)"\r\n  load\r\n  size="medium"\r\n  color="#039be5"\r\n  type="ball-clip-rotate-pulse"\r\n  [fullScreen]="true"\r\n>\r\n  <h1>\r\n    \u0635\u064E\u0644\u064F\u0651\u0648\u0627 \u0639\u064E\u0644\u064E\u0649 \u0627\u0644\u0652\u062D\u064E\u0628\u0650\u064A\u0652\u0628 \u0635\u064E\u0644\u064E\u0651\u0649 <span>\uFDF2\u064F</span> \u062A\u064E\u0639\u064E\u0627\u0644\u0670\u0649 \u0639\u064E\u0644\u0670\u0649 \u0645\u064F\u062D\u064E\u0645\u064E\u0651\u062F\r\n  </h1>\r\n</ngx-spinner>\r\n', styles: ["/* src/_core/components/loader/loader.component.css */\nh1 {\n  color: white;\n  text-shadow: 2px 1px 2px black;\n  font-size: 25px;\n}\nspan {\n  color: white;\n  text-shadow: 1px 1px 2px black;\n  font-size: 33px;\n  font-weight: 100;\n}\n@media (max-width: 768px) {\n  h1 {\n    font-size: 13px;\n    text-shadow: 1px 1px 0px black;\n  }\n  span {\n    font-size: 15px;\n    text-shadow: 1px 1px 0px black;\n  }\n}\n/*# sourceMappingURL=loader.component-Y6TGBAP7.css.map */\n"] }]
  }], () => [{ type: StateService }, { type: NgxSpinnerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "_core/components/loader/loader.component.ts", lineNumber: 14 });
})();

// src/_core/_form/class/1.srvc.form.ts
var FormService = class _FormService {
  _notify;
  _fb;
  _form;
  _isSubmitted = false;
  _showWarning = false;
  constructor(_notify, _fb) {
    this._notify = _notify;
    this._fb = _fb;
    this._form = this._fb.group({});
  }
  _dd_selected(control, value, form = this._form) {
    return form.value[control] === value;
  }
  _has(fieldName, fg = this._form) {
    return fg?.contains(fieldName);
  }
  _hasVal(fieldName, fg = this._form) {
    return Custom.emptyCheck(this._getVal(fieldName, fg));
  }
  _hasGroup(groupName, fieldName) {
    const group = this._form?.get(groupName);
    return group?.contains(fieldName);
  }
  _getVal(control, group = this._form) {
    return group?.get(control)?.value;
  }
  _checkBoxChecked(val, fieldname) {
    const selectedArray = this._form.get(fieldname);
    if (val.target.checked) {
      selectedArray.push(new FormControl(val.target.value));
    } else {
      let i = 0;
      selectedArray.controls.forEach((ctrl) => {
        if (ctrl.value == val.target.value) {
          selectedArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(selectedArray);
  }
  // FOR LOGGING FORM ERRORS AND WARNINGS
  logForm(group = this._form, groupName = "") {
    let logFormMsg = [];
    const scopeFunc = (group2 = this._form, grp = "") => {
      if (group2.invalid) {
        console.group(grp);
        Object.keys(group2.controls).forEach((key) => {
          const acc = group2.get(key);
          if (acc instanceof FormGroup || acc instanceof FormArray) {
            scopeFunc(acc, grp ? `${grp}.${key}` : key);
          } else if (acc instanceof FormControl) {
            if (acc.status == "INVALID" || acc.status == "PENDING") {
              const field = grp == "" ? key : `${grp}.${key}`;
              logFormMsg.push({
                field,
                errors: [acc.errors["en"]]
              });
              console.error({
                field: key,
                errors: acc.errors
              });
            } else if (acc.status == "VALID") {
              console.warn({
                field: key,
                message: "No Validator Error"
              });
            }
          }
        });
        console.groupEnd();
      }
    };
    scopeFunc(group, groupName);
    if (logFormMsg.length > 0)
      this._notify.validations(logFormMsg);
  }
  static \u0275fac = function FormService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormService)(\u0275\u0275inject(NotifyService), \u0275\u0275inject(FormBuilder));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormService, factory: _FormService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: NotifyService }, { type: FormBuilder }], null);
})();

// src/_core/_form/validator/abstract.regex.ts
var RegExps = class {
  // NUMERIC
  // static NUM: RegExp = /^[0-9]*$/;
  static NUM = /^(\d+(\.\d+)?)$/;
  // Numerics and decimals
  static NO_DECIMAL = /^[\d]*$/;
  static DECIMAL = (precision) => {
    var expression = /^\d+\.{0,1}\d{0,2}$/;
    return new RegExp(expression);
  };
  // ALPHABATIC
  static ALPHA = /^[a-zA-Z -]*$/;
  static ALPHANUM = /([a-zA-Z0-9 _-]+)$/;
  static DATE_RANGE = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  // SPECIFIC
  static SPECIALCHARS = /[!~`@$%^&*()+\=\[\]{};':"\\|<>\?]/;
  static WHITE_SPACE = /^[^\s]+(\s+[^\s]+)*$/;
  static HYPHEN_REG = /^(?!-).*[^-]$/;
  static EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  static PASSWORD = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
  static POSITIVENUM = /^(?:[+\d].*\d|\d)$/;
};

// src/_core/_form/validator/abstract.validation-message.ts
var VAL = class {
  static _translate;
  static ENTER = (val) => {
    return {
      key: "ENTER",
      lbl: val,
      en: "Please enter " + val,
      ur: " \u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645".concat(" ", this._translate?.instant(val), " ", "\u062F\u0631\u062C \u06A9\u0631\u06CC\u06BA\u06D4")
    };
  };
  static SELECT = (val) => {
    return {
      key: "SELECT",
      lbl: val,
      en: "Please select " + val,
      ur: " \u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645".concat(" ", this._translate.instant(val), " ", "\u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA\u06D4")
    };
  };
  static WHITE_SPACE = {
    key: "WHIE_SPACE",
    en: "White space not allowed",
    ur: "\u062E\u0627\u0644\u06CC \u062C\u06AF\u06C1 \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u0646\u06C1\u06CC\u06BA \u06C1\u06D2\u06D4"
  };
  static MAX_CHAR = (val) => {
    return {
      key: "MAX_CHAR",
      en: "Maximum " + val + " characters allowed",
      ur: " \u0632\u06CC\u0627\u062F\u06C1 \u0633\u06D2 \u0632\u06CC\u0627\u062F\u06C1".concat(" ", val, " ", "\u062D\u0631\u0648\u0641 \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u06C1\u06D2\u06D4")
    };
  };
  static MIN_CHAR = (val) => {
    return {
      key: "MIN_CHAR",
      en: "Minimum " + val + " characters allowed",
      ur: " \u06A9\u0645 \u0627\u0632 \u06A9\u0645".concat(" ", val, " ", "\u062D\u0631\u0648\u0641 \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u06C1\u06D2\u06D4")
    };
  };
  static NUM = {
    key: "NUM",
    en: "Only numbers allowed",
    ur: "\u0635\u0631\u0641 \u0646\u0645\u0628\u0631\u0648\u06BA \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u06C1\u06D2\u06D4"
  };
  static DECIMAL = {
    key: "DECIMAL",
    en: "Only whole numbers allowed",
    ur: "\u0627\u0639\u0634\u0627\u0631\u06CC\u06C1 \u0646\u0645\u0628\u0631 \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u0646\u06C1\u06CC\u06BA \u06C1\u06D2\u06D4"
  };
  static MIN = (val) => {
    return {
      key: "MIN",
      en: "Minimum digits " + val + " allowed",
      ur: " \u06A9\u0645 \u0627\u0632 \u06A9\u0645".concat(" ", val, " ", "\u06C1\u0646\u062F\u0633\u06D2 \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u06C1\u06D2\u06D4")
    };
  };
  static MAX = (val) => {
    return {
      key: "MAX",
      en: "Maximum digits " + val + " allowed",
      ur: " \u0632\u06CC\u0627\u062F\u06C1 \u0633\u06D2 \u0632\u06CC\u0627\u062F\u06C1".concat(" ", val, " ", "\u06C1\u0646\u062F\u0633\u06D2 \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u06C1\u06D2\u06D4")
    };
  };
  static NUM_POS = {
    key: "NUM_POS",
    en: "Only positive numbers allowed",
    ur: "\u0645\u0646\u0641\u06CC \u0646\u0645\u0628\u0631\u0648\u06BA \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u0646\u06C1\u06CC\u06BA \u06C1\u06D2\u06D4"
  };
  static ALPHA = {
    key: "ALPHA",
    en: "Only alphabets allowed",
    ur: "\u0635\u0631\u0641 \u0627\u0646\u06AF\u0631\u06CC\u0632\u06CC \u062D\u0631\u0648\u0641 \u062A\u06C1\u062C\u06CC \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u06C1\u06D2\u06D4"
  };
  static ALPHANUM = {
    key: "ALPHANUM",
    en: "Only alphabets and numbers allowed",
    ur: "\u0635\u0631\u0641 \u0627\u0646\u06AF\u0631\u06CC\u0632\u06CC \u062D\u0631\u0648\u0641 \u062A\u06C1\u062C\u06CC \u0627\u0648\u0631 \u0631\u06CC\u0627\u0636\u06CC \u06A9\u06D2 \u0646\u0645\u0628\u0631\u0648\u06BA \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u06C1\u06D2\u06D4"
  };
  static HYPHEN = {
    key: "HYPHEN",
    en: "Hyphen not allowed at start and end",
    ur: "\u0634\u0631\u0648\u0639 \u0627\u0648\u0631 \u0622\u062E\u0631 \u0645\u06CC\u06BA \u06C1\u0627\u0626\u0641\u0646 (-) \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u0646\u06C1\u06CC\u06BA \u06C1\u06D2\u06D4"
  };
  static PATTERN = {
    key: "PATTERN",
    en: "Special characters not allowed",
    ur: "\u062E\u0635\u0648\u0635\u06CC \u062D\u0631\u0648\u0641 \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u0646\u06C1\u06CC\u06BA \u06C1\u06D2\u06D4"
  };
  static EMAIL = {
    key: "EMAIL",
    en: 'Invalid email containing "@, .com"',
    ur: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633 \u06A9\u0648 ".concat(" ", "abc@xyz.com", "\u067E\u06CC\u0679\u0631\u0646 \u06A9\u06CC \u067E\u06CC\u0631\u0648\u06CC \u06A9\u0631\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2")
  };
  static PASSWORD = {
    key: "PASSWORD",
    en: "Invalid password must contains Upper Case, Lower Case, Number and Special Character.",
    ur: "\u067E\u0627\u0633 \u0648\u0631\u0688 \u0645\u06CC\u06BA \u0627\u067E\u0631 \u06A9\u06CC\u0633\u060C \u0644\u0648\u0626\u0631 \u06A9\u06CC\u0633\u060C \u0646\u0645\u0628\u0631 \u0627\u0648\u0631 \u062E\u0635\u0648\u0635\u06CC \u06A9\u0631\u06CC\u06A9\u0679\u0631 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2\u06D4"
  };
  static DATE_EQUAL = {
    key: "DATE_EQUAL",
    en: "Date must be equal current date",
    ur: " \u062A\u0627\u0631\u06CC\u062E \u0645\u0648\u062C\u0648\u062F\u06C1 \u062A\u0627\u0631\u06CC\u062E \u06A9\u06D2 \u0628\u0631\u0627\u0628\u0631 \u06C1\u0648\u0646\u06CC \u0686\u0627\u06C1\u06CC\u06D2\u06D4"
  };
  static MIN_DATE = {
    key: "MIN_DATE",
    en: "Date must be <= current date",
    ur: " \u062A\u0627\u0631\u06CC\u062E \u0645\u0648\u062C\u0648\u062F\u06C1 \u062A\u0627\u0631\u06CC\u062E \u0633\u06D2 \u06A9\u0645 \u0627\u0648\u0631 \u0645\u0633\u0627\u0648\u06CC \u06C1\u0648\u0646\u06CC \u0686\u0627\u06C1\u06CC\u06D2\u06D4"
  };
  static MAX_DATE = {
    key: "MAX_DATE",
    en: "Date must be >= current date",
    ur: " \u062A\u0627\u0631\u06CC\u062E \u0645\u0648\u062C\u0648\u062F\u06C1 \u062A\u0627\u0631\u06CC\u062E \u0633\u06D2 \u0628\u0691\u06CC \u0627\u0648\u0631 \u0645\u0633\u0627\u0648\u06CC \u06C1\u0648\u0646\u06CC \u0686\u0627\u06C1\u06CC\u06D2\u06D4"
  };
  static CONFIRM = {
    key: "CONFIRM",
    en: "Please enter Confirm Password",
    ur: "\u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645 \u062A\u0635\u062F\u06CC\u0642\u06CC \u067E\u0627\u0633 \u0648\u0631\u0688 \u062F\u0631\u062C \u06A9\u0631\u06CC\u06BA\u06D4"
  };
  static MATCH = {
    key: "MATCH",
    en: "Your passwords are not match",
    ur: "\u0622\u067E \u06A9\u06D2 \u067E\u0627\u0633 \u0648\u0631\u0688 \u0627\u06CC\u06A9 \u062C\u06CC\u0633\u06D2 \u06C1\u0648\u0646\u06D2 \u0686\u0627\u06C1\u0626\u06CC\u06BA"
  };
  static DUPLICATE = {
    key: "DUPLICATE",
    en: "Duplicate Selection Not Allowed",
    ur: "\u0688\u067E\u0644\u06CC\u06A9\u06CC\u0679 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u06CC \u0627\u062C\u0627\u0632\u062A \u0646\u06C1\u06CC\u06BA \u06C1\u06D2\u06D4"
  };
};

// src/_core/_form/validator/srvc.validator.ts
var ValidatorService = class _ValidatorService {
  _translate;
  _fs;
  constructor(_translate) {
    this._translate = _translate;
    this._fs = AppInjector.get(FormService);
    VAL._translate = this._translate;
  }
  // BELOW METHODS IS TO DISPLAY ERROR MESSAGES
  toTitleCase(str) {
    if (str) {
      const field = str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
      return field.replaceAll("_", " ").replace("id", "");
    }
    return "No Property Provided";
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control.
   * @param group An instance of a FormGroup default this._fs._form is set
   * @usageNotes
   * ### Retrieve a nested control
   * * `this.form.get('person.name');`
   * * `this.form.get(['person', 'name']);`
   * * `this.form.get('items.0.price');`
   * * `this.form.get(['items', 0, 'price']);`
   */
  errMsg(path, group = this._fs._form) {
    let control;
    if (!(path instanceof FormControl)) {
      control = group?.get(path);
    }
    if (control && control.touched)
      return this.handleRequired(control);
    return "";
  }
  _error_control(control) {
    if (control?.errors)
      return control?.errors;
  }
  handleRequired(control) {
    const errObj = this._error_control(control);
    if (errObj && errObj[this._translate.currentLang]) {
      if (errObj.key == "ENTER") {
        errObj.en = "Please enter " + errObj.lbl;
        errObj.ur = " \u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645".concat(" ", this._translate.instant(errObj.lbl), " ", "\u062F\u0631\u062C \u06A9\u0631\u06CC\u06BA\u06D4");
      } else if (errObj.key == "SELECT") {
        errObj.en = "Please select " + errObj.lbl, errObj.ur = " \u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645".concat(" ", this._translate?.instant(errObj.lbl), " ", "\u0645\u0646\u062A\u062E\u0628 \u06A9\u0631\u06CC\u06BA\u06D4");
      }
      return errObj[this._translate.currentLang];
    }
  }
  // BELOW METHODS IS TO ADD VALIDATION TO CONTROLS
  _val(fn = "", param = {}) {
    if (param?.maxChar == void 0)
      param.maxChar = 100;
    if (param?.specialChar == void 0)
      param.specialChar = 1;
    return (control) => {
      if (!fn)
        fn = param?.fn;
      const a = control?.value;
      if (fn && (!a || a == 0)) {
        if (param.authorized != void 0 && a == param.authorized)
          return null;
        if (param.isField == void 0)
          return VAL.ENTER(fn);
        else
          return VAL.SELECT(fn);
      } else if (Custom.emptyCheck(a) && a != "0") {
        if (param.maxChar && a.length > param.maxChar)
          return VAL.MAX_CHAR(param.maxChar);
        else if (param.minChar && a.length < param.minChar)
          return VAL.MIN_CHAR(param.minChar);
        else if (!RegExps.WHITE_SPACE.test(a))
          return VAL.WHITE_SPACE;
        else if (param.num || param.max || param.min) {
          if (!RegExps.NUM.test(a))
            return VAL.NUM;
          else if (a % 1 != 0 && !param.decimal)
            return VAL.DECIMAL;
          else if (param.min && Number(a) < param.min)
            return VAL.MIN(param.min);
          else if (param.max && Number(a) > param.max)
            return VAL.MAX(param.min);
          else if (!RegExps.POSITIVENUM.test(a))
            return VAL.NUM_POS;
          else
            return null;
        } else if (param.alpha && !RegExps.ALPHA.test(a))
          return VAL.ALPHA;
        else if (param.alphaNum && !RegExps.ALPHANUM.test(a))
          return VAL.ALPHANUM;
        else if (param.hypenreg && !RegExps.HYPHEN_REG.test(a))
          return VAL.HYPHEN;
        else if (param.specialChar && RegExps.SPECIALCHARS.test(a))
          return VAL.PATTERN;
        else if (param.email && !RegExps.EMAIL.test(a))
          return VAL.EMAIL;
        else if (param.password && !RegExps.PASSWORD.test(a))
          return VAL.PASSWORD;
        else
          return null;
      }
    };
  }
  // FOR SELECTBOX / AUTOCOMPLETE / RADIOBUTTONS / CHECKBOX
  _vals(fn) {
    return (control) => {
      const a = control?.value;
      if (!a || a == 0) {
        return VAL.SELECT(fn);
      }
    };
  }
  _val_Date(dat) {
    return (control) => {
      const b = new Date(control?.value);
      let a;
      if (Custom.emptyCheck(b) && b instanceof Date) {
        a = b?.getTime() ?? "";
      }
      if (Custom.emptyCheck(b)) {
        if (dat?.currentDate != void 0 && a != dat?.currentDate?.getTime()) {
          return VAL.DATE_EQUAL;
        } else if (b?.toDateString() == dat?.minDate?.toDateString() || b?.toDateString() == dat?.maxDate?.toDateString())
          return null;
        else if (dat?.minDate != void 0 && dat?.minDate?.getTime() > a) {
          return VAL.MIN_DATE;
        } else if (dat?.maxDate != void 0 && dat?.maxDate?.getTime() < a) {
          return VAL.MAX_DATE;
        } else
          return null;
      }
    };
  }
  repeatOneField(field1) {
    return (array) => {
      let repeat = 0;
      array?.controls?.forEach((group) => {
        const fieldA = group?.get(field1);
        array?.controls?.forEach((groups) => {
          const fielda = groups?.get(field1);
          if (fieldA?.value == fielda?.value && (fieldA?.valid || fieldA?.errors?.key == "DUPLICATE")) {
            repeat++;
          }
          if (repeat > 1) {
            fieldA?.setErrors(VAL.DUPLICATE);
          } else {
            if (fieldA?.errors?.key == "DUPLICATE") {
              fieldA?.setErrors(null);
            }
          }
        });
        repeat = 0;
      });
      return null;
    };
  }
  repeatTwoFields(field1, field2) {
    return (array) => {
      let repeat = 0;
      array?.controls?.forEach((group) => {
        const fieldA = group?.get(field1);
        const fieldB = group?.get(field2);
        array?.controls?.forEach((groups) => {
          const fielda = groups?.get(field1);
          const fieldb = groups?.get(field2);
          if (fieldA?.value == fielda?.value && fieldB?.value == fieldb?.value && (fieldA?.valid || fieldA?.errors?.key == "DUPLICATE") && (fieldB?.valid || fieldB?.errors?.key == "DUPLICATE")) {
            repeat++;
          }
          if (repeat > 1) {
            fieldA?.setErrors(VAL.DUPLICATE);
            fieldB?.setErrors(VAL.DUPLICATE);
            return VAL.DUPLICATE;
          } else {
            if (fieldA?.errors?.key == "DUPLICATE") {
              fieldA?.setErrors(null);
            }
            if (fieldB?.errors?.key == "DUPLICATE") {
              fieldB?.setErrors(null);
            }
          }
          return null;
        });
        repeat = 0;
      });
      return null;
    };
  }
  _matchValidator(firstControl, secondControl, groupone, grouptwo) {
    return (group) => {
      if (group.get(groupone) && group.get(grouptwo)) {
        let repeat = 0;
        const fieldA = group.get([groupone, firstControl]);
        const fieldB = group.get([groupone, secondControl]);
        const fielda = group.get([grouptwo, firstControl]);
        const fieldb = group.get([grouptwo, secondControl]);
        if (fieldA?.value && fieldB?.value && fielda?.value && fieldb?.value) {
          if (fieldA?.value == fielda?.value && fieldB?.value == fieldb?.value && (fieldA?.valid || fieldA?.errors?.key == "DUPLICATE") && (fieldB?.valid || fieldB?.errors?.key == "DUPLICATE")) {
            repeat++;
          }
          if (repeat >= 1) {
            fieldA?.setErrors(VAL.DUPLICATE);
            fieldB?.setErrors(VAL.DUPLICATE);
            fielda?.setErrors(VAL.DUPLICATE);
            fieldb?.setErrors(VAL.DUPLICATE);
            return VAL.DUPLICATE;
          } else if (fieldA?.errors?.key == "DUPLICATE" || fieldB?.errors?.key == "DUPLICATE") {
            fieldA?.setErrors(null);
            fieldB?.setErrors(null);
            fielda?.setErrors(null);
            fieldb?.setErrors(null);
            return null;
          }
        }
      }
    };
  }
  _passwordMatchValidator(field1, field2) {
    return (group) => {
      const fieldA = group?.get(field1);
      const fieldB = group?.get(field2);
      if (fieldA !== null && fieldB !== null) {
        if (fieldB.value == "") {
          fieldB.setErrors(VAL.CONFIRM);
          return VAL.CONFIRM;
        } else if (fieldA.value != fieldB.value) {
          fieldB.setErrors(VAL.MATCH);
          return VAL.MATCH;
        } else {
          fieldB.setErrors(null);
          return null;
        }
      }
    };
  }
  static \u0275fac = function ValidatorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValidatorService)(\u0275\u0275inject(TranslateService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ValidatorService, factory: _ValidatorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TranslateService }], null);
})();
var VALIDATION_KEY;
(function(VALIDATION_KEY2) {
  VALIDATION_KEY2["SELECT"] = "SELECT";
  VALIDATION_KEY2["ENTER"] = "ENTER";
  VALIDATION_KEY2["MIN"] = "MIN";
  VALIDATION_KEY2["MAX"] = "MAX";
  VALIDATION_KEY2["MIN_CHAR"] = "MIN_CHAR";
  VALIDATION_KEY2["MAX_CHAR"] = "MAX_CHAR";
  VALIDATION_KEY2["HYPHEN"] = "HYPHEN";
  VALIDATION_KEY2["NUM"] = "NUM";
  VALIDATION_KEY2["NUM_POS"] = "NUM_POS";
  VALIDATION_KEY2["ALPHA"] = "ALPHA";
  VALIDATION_KEY2["ALPHANUM"] = "ALPHANUM";
  VALIDATION_KEY2["PATTERN"] = "PATTERN";
  VALIDATION_KEY2["EMAIL"] = "EMAIL";
  VALIDATION_KEY2["PASSWORD"] = "PASSWORD";
  VALIDATION_KEY2["DATE_EQUAL"] = "DATE_EQUAL";
  VALIDATION_KEY2["DATE_MIN"] = "DATE_MIN";
  VALIDATION_KEY2["MAX_DATE"] = "MAX_DATE";
  VALIDATION_KEY2["DUPLICATE"] = "DUPLICATE";
  VALIDATION_KEY2["CONFIRM"] = "CONFIRM";
  VALIDATION_KEY2["MATCH"] = "MATCH";
})(VALIDATION_KEY || (VALIDATION_KEY = {}));

// src/_core/_form/validator/constant.ts
var MAX_VALIDATOR = 9999999999999998e-2;
var IMG_FULL_URL = environment.HOST_URL + "assets/";
var IMG_URL = {
  BOX: IMG_FULL_URL + "box/"
};

// src/_core/_form/validator/srvc.validator2.ts
var ValidatorService2 = class _ValidatorService2 {
  constructor(injector) {
  }
  // BELOW METHODS IS TO ADD VALIDATION TO CONTROLS
  AMOUNT(param) {
    param = setDefaultNum(param);
    return (control) => {
      if (!control)
        return null;
      const val = control?.value;
      if (this.emptyCheck(val) && param.required)
        return VAL.ENTER("");
      else if (!this.emptyCheck(val)) {
        if (isNaN(val))
          return VAL.NUM;
        else if (Number(val) < param.min)
          return VAL.MIN(val);
        else if (Number(val) > param.max)
          return VAL.MAX(val);
        else if (param.decimal !== 0 && !RegExps.DECIMAL(param.decimal).test(val)) {
          return VAL.DECIMAL;
        }
      }
      return null;
    };
  }
  // BELOW METHODS IS TO ADD VALIDATION TO CONTROLS
  TEXT(param) {
    param = setDefaultText(param);
    return (control) => {
      const val = control?.value;
      if (!control)
        return null;
      if (this.emptyCheck(val) && param.required)
        return VAL.ENTER("");
      else if (!this.emptyCheck(val)) {
        if (param.max && val.length > param.max)
          return VAL.MAX_CHAR(param.max);
        else if (param.min && val.length < param.min)
          return VAL.MIN_CHAR(param.min);
        else if (!RegExps.WHITE_SPACE.test(val))
          return VAL.WHITE_SPACE;
        else if (param.alpha && !RegExps.ALPHA.test(val))
          return VAL.ALPHA;
        else if (param.alphaNum && !RegExps.ALPHANUM.test(val))
          return VAL.ALPHANUM;
        else if (param.special != 0 && RegExps.SPECIALCHARS.test(val))
          return VAL.PATTERN;
        else
          return null;
      }
    };
  }
  NUM(param) {
    param = __spreadValues({ required: 1, min: 11, max: 12 }, param);
    return (control) => {
      if (!control)
        return null;
      const val = control?.value?.toString();
      if (this.emptyCheck(val) && param.required)
        return VAL.ENTER("");
      else if (!this.emptyCheck(val)) {
        if (isNaN(val))
          return VAL.NUM;
        else if (!RegExps.NO_DECIMAL.test(val))
          return VAL.DECIMAL;
        else if (val?.length < param.min)
          return VAL.MIN_CHAR(param.min);
        else if (val?.length > param.max)
          return VAL.MAX_CHAR(param.max);
      }
      return null;
    };
  }
  errAMOUNT(item, field, label, param) {
    if (typeof label === "object")
      param = label;
    param = setDefaultNum(param);
    const control = item?.get(field);
    if (control?.touched) {
      const err = control?.errors;
      return [
        {
          condition: err?.required,
          error: label + " is required"
        },
        {
          condition: err?.min,
          error: `Minimum value ${param.min} is allowed`
        },
        {
          condition: err?.max,
          error: `Maximum value ${param.max} is allowed`
        },
        {
          condition: err?.decimal,
          error: `Decimal Precision ${param.decimal} is allowed`
        },
        {
          condition: err?.num,
          error: "Only numeric values allowed"
        }
      ];
    }
    return "";
  }
  errTEXT(item, field, label, param) {
    if (typeof label === "object")
      param = label;
    param = setDefaultText(param);
    const control = item?.get(field);
    if (control?.touched) {
      const err = control?.errors;
      return [
        {
          condition: err?.required,
          error: label + " is required"
        },
        {
          condition: err?.min,
          error: `Minimum character ${param.min} is allowed`
        },
        {
          condition: err?.max,
          error: `Maximum character ${param.max} is allowed`
        },
        {
          condition: err?.space,
          error: "White Spaces are not allowed"
        },
        {
          condition: err?.special,
          error: "Special characters are not allowed"
        },
        {
          condition: err?.alpha,
          error: "Only alphabets are allowed"
        },
        {
          condition: err?.alphaNum,
          error: "Only alpha numeric values allowed"
        }
      ];
    }
    return "";
  }
  errNUM(item, field, label, param) {
    if (typeof label === "object")
      param = label;
    param = __spreadValues({ required: 1, min: 11, max: 12 }, param);
    const control = item?.get(field);
    if (control?.touched) {
      const err = control?.errors;
      return [
        {
          condition: err?.required,
          error: label + " is required"
        },
        {
          condition: err?.min,
          error: `Minimum character ${param.min} is allowed`
        },
        {
          condition: err?.max,
          error: `Maximum character ${param.max} is allowed`
        },
        {
          condition: err?.num,
          error: "Only numeric values allowed"
        },
        {
          condition: err?.decimal,
          error: `Only whole number is allowed`
        }
      ];
    }
    return "";
  }
  emptyCheck(val) {
    return val === "" || val === void 0 || val === null;
  }
  static \u0275fac = function ValidatorService2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValidatorService2)(\u0275\u0275inject(Injector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ValidatorService2, factory: _ValidatorService2.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidatorService2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Injector }], null);
})();
function setDefaultNum(param) {
  if (!param)
    param = {};
  if (param.required === void 0)
    param.required = 1;
  if (param.min === void 0)
    param.min = 0;
  if (param.max === void 0)
    param.max = MAX_VALIDATOR;
  if (param.decimal === void 0)
    param.decimal = 2;
  return param;
}
function setDefaultText(param) {
  if (!param)
    param = {};
  if (param.max === void 0)
    param.max = 100;
  if (param.pattern === void 0)
    param.pattern = 1;
  if (param.special === void 0)
    param.special = 1;
  if (param.required === void 0)
    param.required = 1;
  if (param.min === void 0 && param.required === 1)
    param.min = 3;
  return param;
}

// src/_core/_form/base.form.ts
function FormBase(that, d = {}) {
  return {
    id: [{ disabled: false, value: d?.id || "" }],
    name: [{ disabled: false, value: d?.name || "" }, that._vs._val("Name", { minChar: 3, alpha: 1 })],
    status: [{ disabled: false, value: d?.status || "" }, that._vs._val("Status", { maxChar: 10, alpha: 1 })],
    desc: [{ disabled: false, value: d?.desc || "" }, that._vs._val("", { maxChar: 255, specialChar: 1 })],
    createdAt: [{ disabled: true, value: d?.createdAt && new Date(d?.createdAt) || "" }],
    updatedAt: [{ disabled: true, value: d?.updatedAt && new Date(d?.updatedAt) || "" }]
  };
}

export {
  TranslateLoader,
  TranslateService,
  TranslatePipe,
  provideTranslateService,
  TranslateModule,
  EP,
  URL_SRVC,
  URL_CONTRL,
  AppInjector,
  HttpBaseService,
  HTTP_UOW,
  CONTROL_HOST_CSS_CLASS,
  Custom,
  MatDialogModule,
  DialogCommon,
  ProviderService,
  UtilService,
  ThemeService,
  DialogCommonService,
  NotifyService,
  UniqueSelectionDispatcher,
  SelectionModel,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
  MatAccordion,
  MatExpansionModule,
  MatProgressBar,
  MatProgressBarModule,
  NotifyCard,
  NotifyContainer,
  LocalStorageService,
  ROUTEZ,
  CdkColumnDef,
  MatTable,
  MatCellDef,
  MatHeaderCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatCell,
  MatHeaderRowDef,
  MatRowDef,
  MatHeaderRow,
  MatRow,
  MatNoDataRow,
  MatTableModule,
  TM_List,
  TemplateService,
  StateService,
  NgxSpinnerModule,
  LoaderComponent,
  FormService,
  TMSubmit,
  ValidatorService,
  IMG_URL,
  FormBase
};
//# sourceMappingURL=chunk-L25IYKSY.js.map
