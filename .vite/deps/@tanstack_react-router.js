import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React13 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React13.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix2;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix2 === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix2 = match && match[1] || "";
              }
            }
            return "\n" + prefix2 + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx7 = jsxWithValidationDynamic;
        var jsxs3 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx7;
        exports.jsxs = jsxs3;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React13 = require_react();
        var ReactSharedInternals = React13.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState2 = React13.useState, useEffect6 = React13.useEffect, useLayoutEffect5 = React13.useLayoutEffect, useDebugValue = React13.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React13.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState2({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect5(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect6(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
        var useSyncExternalStore$2 = React13.useSyncExternalStore !== void 0 ? React13.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React13 = require_react();
        var shim = require_shim();
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        var useRef3 = React13.useRef, useEffect6 = React13.useEffect, useMemo = React13.useMemo, useDebugValue = React13.useDebugValue;
        function useSyncExternalStoreWithSelector2(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef3(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            };
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = function() {
              return memoizedSelector(getSnapshot());
            };
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
          useEffect6(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue(value);
          return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/@tanstack/history/dist/esm/index.js
var pushStateEvent = "pushstate";
var popStateEvent = "popstate";
var beforeUnloadEvent = "beforeunload";
var beforeUnloadListener = (event) => {
  event.preventDefault();
  return event.returnValue = "";
};
var stopBlocking = () => {
  removeEventListener(beforeUnloadEvent, beforeUnloadListener, {
    capture: true
  });
};
function createHistory(opts) {
  let location = opts.getLocation();
  let subscribers = /* @__PURE__ */ new Set();
  let blockers = [];
  const onUpdate = () => {
    location = opts.getLocation();
    subscribers.forEach((subscriber) => subscriber());
  };
  const tryNavigation = async (task) => {
    var _a;
    if (typeof document !== "undefined" && blockers.length) {
      for (let blocker of blockers) {
        const allowed = await blocker();
        if (!allowed) {
          (_a = opts.onBlocked) == null ? void 0 : _a.call(opts, onUpdate);
          return;
        }
      }
    }
    task();
  };
  return {
    get location() {
      return location;
    },
    subscribe: (cb) => {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },
    push: (path, state) => {
      state = assignKey(state);
      tryNavigation(() => {
        opts.pushState(path, state);
        onUpdate();
      });
    },
    replace: (path, state) => {
      state = assignKey(state);
      tryNavigation(() => {
        opts.replaceState(path, state);
        onUpdate();
      });
    },
    go: (index) => {
      tryNavigation(() => {
        opts.go(index);
      });
    },
    back: () => {
      tryNavigation(() => {
        opts.back();
      });
    },
    forward: () => {
      tryNavigation(() => {
        opts.forward();
      });
    },
    createHref: (str) => opts.createHref(str),
    block: (blocker) => {
      blockers.push(blocker);
      if (blockers.length === 1) {
        addEventListener(beforeUnloadEvent, beforeUnloadListener, {
          capture: true
        });
      }
      return () => {
        blockers = blockers.filter((b) => b !== blocker);
        if (!blockers.length) {
          stopBlocking();
        }
      };
    },
    flush: () => {
      var _a;
      return (_a = opts.flush) == null ? void 0 : _a.call(opts);
    },
    destroy: () => {
      var _a;
      return (_a = opts.destroy) == null ? void 0 : _a.call(opts);
    },
    notify: onUpdate
  };
}
function assignKey(state) {
  if (!state) {
    state = {};
  }
  return {
    ...state,
    key: createRandomKey()
  };
}
function createBrowserHistory(opts) {
  const win = (opts == null ? void 0 : opts.window) ?? (typeof document !== "undefined" ? window : void 0);
  const createHref = (opts == null ? void 0 : opts.createHref) ?? ((path) => path);
  const parseLocation = (opts == null ? void 0 : opts.parseLocation) ?? (() => parseHref(
    `${win.location.pathname}${win.location.search}${win.location.hash}`,
    win.history.state
  ));
  let currentLocation = parseLocation();
  let rollbackLocation;
  const getLocation = () => currentLocation;
  let next;
  let tracking = true;
  let scheduled;
  const untrack = (fn) => {
    tracking = false;
    fn();
    tracking = true;
  };
  const flush = () => {
    untrack(() => {
      if (!next)
        return;
      win.history[next.isPush ? "pushState" : "replaceState"](
        next.state,
        "",
        next.href
      );
      next = void 0;
      scheduled = void 0;
      rollbackLocation = void 0;
    });
  };
  const queueHistoryAction = (type, destHref, state) => {
    const href = createHref(destHref);
    if (!scheduled) {
      rollbackLocation = currentLocation;
    }
    currentLocation = parseHref(destHref, state);
    next = {
      href,
      state,
      isPush: (next == null ? void 0 : next.isPush) || type === "push"
    };
    if (!scheduled) {
      scheduled = Promise.resolve().then(() => flush());
    }
  };
  const onPushPop = () => {
    currentLocation = parseLocation();
    history.notify();
  };
  var originalPushState = win.history.pushState;
  var originalReplaceState = win.history.replaceState;
  const history = createHistory({
    getLocation,
    pushState: (href, state) => queueHistoryAction("push", href, state),
    replaceState: (href, state) => queueHistoryAction("replace", href, state),
    back: () => win.history.back(),
    forward: () => win.history.forward(),
    go: (n) => win.history.go(n),
    createHref: (href) => createHref(href),
    flush,
    destroy: () => {
      win.history.pushState = originalPushState;
      win.history.replaceState = originalReplaceState;
      win.removeEventListener(pushStateEvent, onPushPop);
      win.removeEventListener(popStateEvent, onPushPop);
    },
    onBlocked: (onUpdate) => {
      if (rollbackLocation && currentLocation !== rollbackLocation) {
        currentLocation = rollbackLocation;
        onUpdate();
      }
    }
  });
  win.addEventListener(pushStateEvent, onPushPop);
  win.addEventListener(popStateEvent, onPushPop);
  win.history.pushState = function() {
    let res = originalPushState.apply(win.history, arguments);
    if (tracking)
      history.notify();
    return res;
  };
  win.history.replaceState = function() {
    let res = originalReplaceState.apply(win.history, arguments);
    if (tracking)
      history.notify();
    return res;
  };
  return history;
}
function createHashHistory(opts) {
  const win = (opts == null ? void 0 : opts.window) ?? (typeof document !== "undefined" ? window : void 0);
  return createBrowserHistory({
    window: win,
    parseLocation: () => {
      const hashHref = win.location.hash.split("#").slice(1).join("#") ?? "/";
      return parseHref(hashHref, win.history.state);
    },
    createHref: (href) => `${win.location.pathname}${win.location.search}#${href}`
  });
}
function createMemoryHistory(opts = {
  initialEntries: ["/"]
}) {
  const entries = opts.initialEntries;
  let index = opts.initialIndex ?? entries.length - 1;
  let currentState = {
    key: createRandomKey()
  };
  const getLocation = () => parseHref(entries[index], currentState);
  return createHistory({
    getLocation,
    pushState: (path, state) => {
      currentState = state;
      entries.push(path);
      index++;
    },
    replaceState: (path, state) => {
      currentState = state;
      entries[index] = path;
    },
    back: () => {
      index--;
    },
    forward: () => {
      index = Math.min(index + 1, entries.length - 1);
    },
    go: (n) => {
      index = Math.min(Math.max(index + n, 0), entries.length - 1);
    },
    createHref: (path) => path
  });
}
function parseHref(href, state) {
  let hashIndex = href.indexOf("#");
  let searchIndex = href.indexOf("?");
  return {
    href,
    pathname: href.substring(
      0,
      hashIndex > 0 ? searchIndex > 0 ? Math.min(hashIndex, searchIndex) : hashIndex : searchIndex > 0 ? searchIndex : href.length
    ),
    hash: hashIndex > -1 ? href.substring(hashIndex) : "",
    search: searchIndex > -1 ? href.slice(searchIndex, hashIndex === -1 ? void 0 : hashIndex) : "",
    state: state || {}
  };
}
function createRandomKey() {
  return (Math.random() + 1).toString(36).substring(7);
}

// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction2 = false;
function warning(condition, message) {
  if (!isProduction2) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/@tanstack/react-router/dist/esm/awaited.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var React7 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/useRouter.js
var React2 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/routerContext.js
var React = __toESM(require_react(), 1);
var routerContext = React.createContext(null);
function getRouterContext() {
  if (typeof document === "undefined") {
    return routerContext;
  }
  if (window.__TSR_ROUTER_CONTEXT__) {
    return window.__TSR_ROUTER_CONTEXT__;
  }
  window.__TSR_ROUTER_CONTEXT__ = routerContext;
  return routerContext;
}

// node_modules/@tanstack/react-router/dist/esm/useRouter.js
function useRouter(opts) {
  const value = React2.useContext(getRouterContext());
  tiny_warning_esm_default(
    !(((opts == null ? void 0 : opts.warn) ?? true) && !value),
    "useRouter must be used inside a <RouterProvider> component!"
  );
  return value;
}

// node_modules/@tanstack/react-store/build/modern/index.js
var import_with_selector = __toESM(require_with_selector());

// node_modules/@tanstack/store/build/modern/index.js
var Store = class {
  constructor(initialState, options) {
    this.listeners = /* @__PURE__ */ new Set();
    this._batching = false;
    this._flushing = 0;
    this._nextPriority = null;
    this.subscribe = (listener) => {
      var _a, _b;
      this.listeners.add(listener);
      const unsub = (_b = (_a = this.options) == null ? void 0 : _a.onSubscribe) == null ? void 0 : _b.call(_a, listener, this);
      return () => {
        this.listeners.delete(listener);
        unsub == null ? void 0 : unsub();
      };
    };
    this.setState = (updater, opts) => {
      var _a, _b, _c, _d, _e;
      const previous = this.state;
      this.state = ((_a = this.options) == null ? void 0 : _a.updateFn) ? this.options.updateFn(previous)(updater) : updater(previous);
      const priority = (opts == null ? void 0 : opts.priority) ?? ((_b = this.options) == null ? void 0 : _b.defaultPriority) ?? "high";
      if (this._nextPriority === null) {
        this._nextPriority = priority;
      } else if (this._nextPriority === "high") {
        this._nextPriority = priority;
      } else {
        this._nextPriority = ((_c = this.options) == null ? void 0 : _c.defaultPriority) ?? "high";
      }
      (_e = (_d = this.options) == null ? void 0 : _d.onUpdate) == null ? void 0 : _e.call(_d, {
        priority: this._nextPriority
      });
      this._flush();
    };
    this._flush = () => {
      if (this._batching)
        return;
      const flushId = ++this._flushing;
      this.listeners.forEach((listener) => {
        if (this._flushing !== flushId)
          return;
        listener({
          priority: this._nextPriority ?? "high"
        });
      });
    };
    this.batch = (cb) => {
      if (this._batching)
        return cb();
      this._batching = true;
      cb();
      this._batching = false;
      this._flush();
    };
    this.state = initialState;
    this.options = options;
  }
};

// node_modules/@tanstack/react-store/build/modern/index.js
function useStore(store, selector = (d) => d) {
  const slice = (0, import_with_selector.useSyncExternalStoreWithSelector)(
    store.subscribe,
    () => store.state,
    () => store.state,
    selector,
    shallow
  );
  return slice;
}
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// node_modules/@tanstack/react-router/dist/esm/Matches.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var React5 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-router/dist/esm/CatchBoundary.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var React3 = __toESM(require_react(), 1);
function CatchBoundary(props) {
  const errorComponent = props.errorComponent ?? ErrorComponent;
  return (0, import_jsx_runtime.jsx)(
    CatchBoundaryImpl,
    {
      getResetKey: props.getResetKey,
      onCatch: props.onCatch,
      children: ({ error }) => {
        if (error) {
          return React3.createElement(errorComponent, {
            error
          });
        }
        return props.children;
      }
    }
  );
}
var CatchBoundaryImpl = class extends React3.Component {
  constructor() {
    super(...arguments);
    this.state = { error: null };
  }
  static getDerivedStateFromProps(props) {
    var _a;
    return { resetKey: (_a = props.getResetKey) == null ? void 0 : _a.call(props) };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.error && prevState.resetKey !== this.state.resetKey) {
      this.setState({ error: null });
    }
  }
  componentDidCatch(error) {
    var _a, _b;
    if (this.props.onCatch) {
      (_b = (_a = this.props).onCatch) == null ? void 0 : _b.call(_a, error);
    } else {
      console.error(error);
    }
  }
  render() {
    return this.props.children(this.state);
  }
};
function ErrorComponent({ error }) {
  const [show, setShow] = React3.useState(true);
  return (0, import_jsx_runtime.jsxs)("div", { style: { padding: ".5rem", maxWidth: "100%" }, children: [
    (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [
      (0, import_jsx_runtime.jsx)("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
      (0, import_jsx_runtime.jsx)(
        "button",
        {
          style: {
            appearance: "none",
            fontSize: ".6em",
            border: "1px solid currentColor",
            padding: ".1rem .2rem",
            fontWeight: "bold",
            borderRadius: ".25rem"
          },
          onClick: () => setShow((d) => !d),
          children: show ? "Hide Error" : "Show Error"
        }
      )
    ] }),
    (0, import_jsx_runtime.jsx)("div", { style: { height: ".25rem" } }),
    show ? (0, import_jsx_runtime.jsx)("div", { children: (0, import_jsx_runtime.jsx)(
      "pre",
      {
        style: {
          fontSize: ".7em",
          border: "1px solid red",
          borderRadius: ".25rem",
          padding: ".3rem",
          color: "red",
          overflow: "auto"
        },
        children: error.message ? (0, import_jsx_runtime.jsx)("code", { children: error.message }) : null
      }
    ) }) : null
  ] });
}

// node_modules/@tanstack/react-router/dist/esm/useRouterState.js
function useRouterState(opts) {
  const contextRouter = useRouter({
    warn: (opts == null ? void 0 : opts.router) === void 0
  });
  return useStore(((opts == null ? void 0 : opts.router) || contextRouter).__store, opts == null ? void 0 : opts.select);
}

// node_modules/@tanstack/react-router/dist/esm/utils.js
var React4 = __toESM(require_react(), 1);
var isServer = typeof document === "undefined";
function last(arr) {
  return arr[arr.length - 1];
}
function isFunction(d) {
  return typeof d === "function";
}
function functionalUpdate(updater, previous) {
  if (isFunction(updater)) {
    return updater(previous);
  }
  return updater;
}
function pick(parent, keys) {
  return keys.reduce((obj, key) => {
    obj[key] = parent[key];
    return obj;
  }, {});
}
function replaceEqualDeep(prev, _next) {
  if (prev === _next) {
    return prev;
  }
  const next = _next;
  const array = isPlainArray(prev) && isPlainArray(next);
  if (array || isPlainObject(prev) && isPlainObject(next)) {
    const prevItems = array ? prev : Object.keys(prev);
    const prevSize = prevItems.length;
    const nextItems = array ? next : Object.keys(next);
    const nextSize = nextItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;
    for (let i = 0; i < nextSize; i++) {
      const key = array ? i : nextItems[i];
      if (!array && prev[key] === void 0 && next[key] === void 0 && prevItems.includes(key)) {
        copy[key] = void 0;
        equalItems++;
      } else {
        copy[key] = replaceEqualDeep(prev[key], next[key]);
        if (copy[key] === prev[key] && prev[key] !== void 0) {
          equalItems++;
        }
      }
    }
    return prevSize === nextSize && equalItems === prevSize ? prev : copy;
  }
  return next;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function deepEqual(a, b, partial = false) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (!partial && aKeys.length !== bKeys.length) {
      return false;
    }
    return !bKeys.some(
      (key) => !(key in a) || !deepEqual(a[key], b[key], partial)
    );
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return !a.some((item, index) => !deepEqual(item, b[index], partial));
  }
  return false;
}
function useStableCallback(fn) {
  const fnRef = React4.useRef(fn);
  fnRef.current = fn;
  const ref = React4.useRef((...args) => fnRef.current(...args));
  return ref.current;
}
function shallow2(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}
var useLayoutEffect2 = typeof window !== "undefined" ? React4.useLayoutEffect : React4.useEffect;
function escapeJSON(jsonString) {
  return jsonString.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"');
}

// node_modules/@tanstack/react-router/dist/esm/not-found.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function notFound(options = {}) {
  options.isNotFound = true;
  if (options.throw)
    throw options;
  return options;
}
function isNotFound(obj) {
  return !!(obj == null ? void 0 : obj.isNotFound);
}
function CatchNotFound(props) {
  const resetKey = useRouterState({
    select: (s) => `not-found-${s.location.pathname}-${s.status}`
  });
  return (0, import_jsx_runtime2.jsx)(
    CatchBoundary,
    {
      getResetKey: () => resetKey,
      onCatch: (error) => {
        var _a;
        if (isNotFound(error)) {
          (_a = props.onCatch) == null ? void 0 : _a.call(props, error);
        } else {
          throw error;
        }
      },
      errorComponent: ({ error }) => {
        var _a;
        return (_a = props.fallback) == null ? void 0 : _a.call(props, error);
      },
      children: props.children
    }
  );
}
function DefaultGlobalNotFound() {
  return (0, import_jsx_runtime2.jsx)("p", { children: "Not Found" });
}

// node_modules/@tanstack/react-router/dist/esm/Matches.js
var matchContext = React5.createContext(void 0);
function Matches() {
  const router = useRouter();
  const matchId = useRouterState({
    select: (s) => {
      var _a;
      return (_a = getRenderedMatches(s)[0]) == null ? void 0 : _a.id;
    }
  });
  return (0, import_jsx_runtime3.jsx)(matchContext.Provider, { value: matchId, children: (0, import_jsx_runtime3.jsx)(
    CatchBoundary,
    {
      getResetKey: () => {
        var _a;
        return (_a = router.state.resolvedLocation.state) == null ? void 0 : _a.key;
      },
      errorComponent: ErrorComponent,
      onCatch: (error) => {
        tiny_warning_esm_default(
          false,
          `The following error wasn't caught by any route! 👇 At the very least, consider setting an 'errorComponent' in your RootRoute!`
        );
        console.error(error);
      },
      children: matchId ? (0, import_jsx_runtime3.jsx)(Match, { matchId }) : null
    }
  ) });
}
function SafeFragment(props) {
  return (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: props.children });
}
function Match({ matchId }) {
  var _a, _b, _c, _d;
  const router = useRouter();
  const routeId = useRouterState({
    select: (s) => {
      var _a2;
      return (_a2 = getRenderedMatches(s).find((d) => d.id === matchId)) == null ? void 0 : _a2.routeId;
    }
  });
  invariant(
    routeId,
    `Could not find routeId for matchId "${matchId}". Please file an issue!`
  );
  const route = router.routesById[routeId];
  const PendingComponent = route.options.pendingComponent ?? router.options.defaultPendingComponent;
  const pendingElement = PendingComponent ? (0, import_jsx_runtime3.jsx)(PendingComponent, {}) : null;
  const routeErrorComponent = route.options.errorComponent ?? router.options.defaultErrorComponent ?? ErrorComponent;
  const routeNotFoundComponent = route.isRoot ? (
    // If it's the root route, use the globalNotFound option, with fallback to the notFoundRoute's component
    route.options.notFoundComponent ?? ((_a = router.options.notFoundRoute) == null ? void 0 : _a.options.component)
  ) : route.options.notFoundComponent;
  const ResolvedSuspenseBoundary = route.options.wrapInSuspense ?? PendingComponent ?? ((_b = route.options.component) == null ? void 0 : _b.preload) ?? ((_c = route.options.pendingComponent) == null ? void 0 : _c.preload) ?? ((_d = route.options.errorComponent) == null ? void 0 : _d.preload) ? React5.Suspense : SafeFragment;
  const ResolvedCatchBoundary = routeErrorComponent ? CatchBoundary : SafeFragment;
  const ResolvedNotFoundBoundary = routeNotFoundComponent ? CatchNotFound : SafeFragment;
  return (0, import_jsx_runtime3.jsx)(matchContext.Provider, { value: matchId, children: (0, import_jsx_runtime3.jsx)(ResolvedSuspenseBoundary, { fallback: pendingElement, children: (0, import_jsx_runtime3.jsx)(
    ResolvedCatchBoundary,
    {
      getResetKey: () => {
        var _a2;
        return (_a2 = router.state.resolvedLocation.state) == null ? void 0 : _a2.key;
      },
      errorComponent: routeErrorComponent,
      onCatch: (error) => {
        if (isNotFound(error))
          throw error;
        tiny_warning_esm_default(false, `Error in route match: ${matchId}`);
        console.error(error);
      },
      children: (0, import_jsx_runtime3.jsx)(
        ResolvedNotFoundBoundary,
        {
          fallback: (error) => {
            if (!routeNotFoundComponent || error.global && !route.isRoot)
              throw error;
            return React5.createElement(routeNotFoundComponent, {
              data: error.data
            });
          },
          children: (0, import_jsx_runtime3.jsx)(MatchInner, { matchId, pendingElement })
        }
      )
    }
  ) }) });
}
function MatchInner({
  matchId,
  pendingElement
}) {
  var _a;
  const router = useRouter();
  const routeId = useRouterState({
    select: (s) => {
      var _a2;
      return (_a2 = getRenderedMatches(s).find((d) => d.id === matchId)) == null ? void 0 : _a2.routeId;
    }
  });
  const route = router.routesById[routeId];
  const match = useRouterState({
    select: (s) => pick(getRenderedMatches(s).find((d) => d.id === matchId), [
      "status",
      "error",
      "showPending",
      "loadPromise",
      "notFoundError"
    ])
  });
  if (match.notFoundError) {
    if (routeId === rootRouteId && !route.options.notFoundComponent)
      return (0, import_jsx_runtime3.jsx)(DefaultGlobalNotFound, {});
    invariant(
      route.options.notFoundComponent,
      "Route matched with notFoundError should have a notFoundComponent"
    );
    return (0, import_jsx_runtime3.jsx)(route.options.notFoundComponent, { data: match.notFoundError });
  }
  if (match.status === "error") {
    if (isServerSideError(match.error)) {
      const deserializeError = ((_a = router.options.errorSerializer) == null ? void 0 : _a.deserialize) ?? defaultDeserializeError;
      throw deserializeError(match.error.data);
    } else {
      throw match.error;
    }
  }
  if (match.status === "pending") {
    if (match.showPending) {
      return pendingElement;
    }
    throw match.loadPromise;
  }
  if (match.status === "success") {
    let Comp = route.options.component ?? router.options.defaultComponent;
    if (Comp) {
      return (0, import_jsx_runtime3.jsx)(Comp, {});
    }
    return (0, import_jsx_runtime3.jsx)(Outlet, {});
  }
  invariant(
    false,
    "Idle routeMatch status encountered during rendering! You should never see this. File an issue!"
  );
}
var Outlet = React5.memo(function Outlet2() {
  const matchId = React5.useContext(matchContext);
  const childMatchId = useRouterState({
    select: (s) => {
      var _a;
      const matches = getRenderedMatches(s);
      const index = matches.findIndex((d) => d.id === matchId);
      return (_a = matches[index + 1]) == null ? void 0 : _a.id;
    }
  });
  if (!childMatchId) {
    return null;
  }
  return (0, import_jsx_runtime3.jsx)(Match, { matchId: childMatchId });
});
function useMatchRoute() {
  useRouterState({ select: (s) => [s.location, s.resolvedLocation] });
  const { matchRoute } = useRouter();
  return React5.useCallback(
    (opts) => {
      const { pending, caseSensitive, fuzzy, includeSearch, ...rest } = opts;
      return matchRoute(rest, {
        pending,
        caseSensitive,
        fuzzy,
        includeSearch
      });
    },
    []
  );
}
function MatchRoute(props) {
  const matchRoute = useMatchRoute();
  const params = matchRoute(props);
  if (typeof props.children === "function") {
    return props.children(params);
  }
  return !!params ? props.children : null;
}
function getRenderedMatches(state) {
  var _a;
  return ((_a = state.pendingMatches) == null ? void 0 : _a.some((d) => d.showPending)) ? state.pendingMatches : state.matches;
}
function useMatch(opts) {
  var _a;
  const router = useRouter();
  const nearestMatchId = React5.useContext(matchContext);
  const nearestMatchRouteId = (_a = getRenderedMatches(router.state).find(
    (d) => d.id === nearestMatchId
  )) == null ? void 0 : _a.routeId;
  const matchRouteId = (() => {
    const matches = getRenderedMatches(router.state);
    const match = (opts == null ? void 0 : opts.from) ? matches.find((d) => d.routeId === (opts == null ? void 0 : opts.from)) : matches.find((d) => d.id === nearestMatchId);
    return match.routeId;
  })();
  if ((opts == null ? void 0 : opts.strict) ?? true) {
    invariant(
      nearestMatchRouteId == matchRouteId,
      `useMatch("${matchRouteId}") is being called in a component that is meant to render the '${nearestMatchRouteId}' route. Did you mean to 'useMatch("${matchRouteId}", { strict: false })' or 'useRoute("${matchRouteId}")' instead?`
    );
  }
  const matchSelection = useRouterState({
    select: (state) => {
      const match = getRenderedMatches(state).find(
        (d) => d.id === nearestMatchId
      );
      invariant(
        match,
        `Could not find ${(opts == null ? void 0 : opts.from) ? `an active match from "${opts.from}"` : "a nearest match!"}`
      );
      return (opts == null ? void 0 : opts.select) ? opts.select(match) : match;
    }
  });
  return matchSelection;
}
function useMatches(opts) {
  return useRouterState({
    select: (state) => {
      const matches = getRenderedMatches(state);
      return (opts == null ? void 0 : opts.select) ? opts.select(matches) : matches;
    }
  });
}
function useParentMatches(opts) {
  const contextMatchId = React5.useContext(matchContext);
  return useMatches({
    select: (matches) => {
      matches = matches.slice(
        0,
        matches.findIndex((d) => d.id === contextMatchId)
      );
      return (opts == null ? void 0 : opts.select) ? opts.select(matches) : matches;
    }
  });
}
function useChildMatches(opts) {
  const contextMatchId = React5.useContext(matchContext);
  return useMatches({
    select: (matches) => {
      matches = matches.slice(
        matches.findIndex((d) => d.id === contextMatchId) + 1
      );
      return (opts == null ? void 0 : opts.select) ? opts.select(matches) : matches;
    }
  });
}
function useLoaderDeps(opts) {
  return useMatch({
    ...opts,
    select: (s) => {
      return typeof opts.select === "function" ? opts.select(s == null ? void 0 : s.loaderDeps) : s == null ? void 0 : s.loaderDeps;
    }
  });
}
function useLoaderData(opts) {
  return useMatch({
    ...opts,
    select: (s) => {
      return typeof opts.select === "function" ? opts.select(s == null ? void 0 : s.loaderData) : s == null ? void 0 : s.loaderData;
    }
  });
}
function isServerSideError(error) {
  if (!(typeof error === "object" && error && "data" in error))
    return false;
  if (!("__isServerError" in error && error.__isServerError))
    return false;
  if (!(typeof error.data === "object" && error.data))
    return false;
  return error.__isServerError === true;
}
function defaultDeserializeError(serializedData) {
  if ("name" in serializedData && "message" in serializedData) {
    const error = new Error(serializedData.message);
    error.name = serializedData.name;
    return error;
  }
  return serializedData.data;
}

// node_modules/@tanstack/react-router/dist/esm/path.js
function joinPaths(paths) {
  return cleanPath(paths.filter(Boolean).join("/"));
}
function cleanPath(path) {
  return path.replace(/\/{2,}/g, "/");
}
function trimPathLeft(path) {
  return path === "/" ? path : path.replace(/^\/{1,}/, "");
}
function trimPathRight(path) {
  return path === "/" ? path : path.replace(/\/{1,}$/, "");
}
function trimPath(path) {
  return trimPathRight(trimPathLeft(path));
}
function resolvePath(basepath, base, to) {
  base = base.replace(new RegExp(`^${basepath}`), "/");
  to = to.replace(new RegExp(`^${basepath}`), "/");
  let baseSegments = parsePathname(base);
  const toSegments = parsePathname(to);
  toSegments.forEach((toSegment, index) => {
    var _a;
    if (toSegment.value === "/") {
      if (!index) {
        baseSegments = [toSegment];
      } else if (index === toSegments.length - 1) {
        baseSegments.push(toSegment);
      } else
        ;
    } else if (toSegment.value === "..") {
      if (baseSegments.length > 1 && ((_a = last(baseSegments)) == null ? void 0 : _a.value) === "/") {
        baseSegments.pop();
      }
      baseSegments.pop();
    } else if (toSegment.value === ".") {
      return;
    } else {
      baseSegments.push(toSegment);
    }
  });
  const joined = joinPaths([basepath, ...baseSegments.map((d) => d.value)]);
  return cleanPath(joined);
}
function parsePathname(pathname) {
  if (!pathname) {
    return [];
  }
  pathname = cleanPath(pathname);
  const segments = [];
  if (pathname.slice(0, 1) === "/") {
    pathname = pathname.substring(1);
    segments.push({
      type: "pathname",
      value: "/"
    });
  }
  if (!pathname) {
    return segments;
  }
  const split = pathname.split("/").filter(Boolean);
  segments.push(
    ...split.map((part) => {
      if (part === "$" || part === "*") {
        return {
          type: "wildcard",
          value: part
        };
      }
      if (part.charAt(0) === "$") {
        return {
          type: "param",
          value: part
        };
      }
      return {
        type: "pathname",
        value: part
      };
    })
  );
  if (pathname.slice(-1) === "/") {
    pathname = pathname.substring(1);
    segments.push({
      type: "pathname",
      value: "/"
    });
  }
  return segments;
}
function interpolatePath({
  path,
  params,
  leaveWildcards,
  leaveParams
}) {
  const interpolatedPathSegments = parsePathname(path);
  return joinPaths(
    interpolatedPathSegments.map((segment) => {
      if (segment.type === "wildcard") {
        const value = params._splat;
        if (leaveWildcards)
          return `${segment.value}${value ?? ""}`;
        return value;
      }
      if (segment.type === "param") {
        if (leaveParams) {
          const value = params[segment.value];
          return `${segment.value}${value ?? ""}`;
        }
        return params[segment.value.substring(1)] ?? "undefined";
      }
      return segment.value;
    })
  );
}
function matchPathname(basepath, currentPathname, matchLocation) {
  const pathParams = matchByPath(basepath, currentPathname, matchLocation);
  if (matchLocation.to && !pathParams) {
    return;
  }
  return pathParams ?? {};
}
function removeBasepath(basepath, pathname) {
  return basepath != "/" ? pathname.replace(basepath, "") : pathname;
}
function matchByPath(basepath, from, matchLocation) {
  from = removeBasepath(basepath, from);
  const to = removeBasepath(basepath, `${matchLocation.to ?? "$"}`);
  const baseSegments = parsePathname(from);
  const routeSegments = parsePathname(to);
  if (!from.startsWith("/")) {
    baseSegments.unshift({
      type: "pathname",
      value: "/"
    });
  }
  if (!to.startsWith("/")) {
    routeSegments.unshift({
      type: "pathname",
      value: "/"
    });
  }
  const params = {};
  let isMatch = (() => {
    for (let i = 0; i < Math.max(baseSegments.length, routeSegments.length); i++) {
      const baseSegment = baseSegments[i];
      const routeSegment = routeSegments[i];
      const isLastBaseSegment = i >= baseSegments.length - 1;
      const isLastRouteSegment = i >= routeSegments.length - 1;
      if (routeSegment) {
        if (routeSegment.type === "wildcard") {
          if (baseSegment == null ? void 0 : baseSegment.value) {
            const _splat = decodeURI(
              joinPaths(baseSegments.slice(i).map((d) => d.value))
            );
            params["*"] = _splat;
            params["_splat"] = _splat;
            return true;
          }
          return false;
        }
        if (routeSegment.type === "pathname") {
          if (routeSegment.value === "/" && !(baseSegment == null ? void 0 : baseSegment.value)) {
            return true;
          }
          if (baseSegment) {
            if (matchLocation.caseSensitive) {
              if (routeSegment.value !== baseSegment.value) {
                return false;
              }
            } else if (routeSegment.value.toLowerCase() !== baseSegment.value.toLowerCase()) {
              return false;
            }
          }
        }
        if (!baseSegment) {
          return false;
        }
        if (routeSegment.type === "param") {
          if ((baseSegment == null ? void 0 : baseSegment.value) === "/") {
            return false;
          }
          if (baseSegment.value.charAt(0) !== "$") {
            params[routeSegment.value.substring(1)] = decodeURI(
              baseSegment.value
            );
          }
        }
      }
      if (!isLastBaseSegment && isLastRouteSegment) {
        params["**"] = joinPaths(baseSegments.slice(i + 1).map((d) => d.value));
        return !!matchLocation.fuzzy && (routeSegment == null ? void 0 : routeSegment.value) !== "/";
      }
    }
    return true;
  })();
  return isMatch ? params : void 0;
}

// node_modules/@tanstack/react-router/dist/esm/useParams.js
function useParams(opts) {
  return useRouterState({
    select: (state) => {
      var _a;
      const params = (_a = last(getRenderedMatches(state))) == null ? void 0 : _a.params;
      return (opts == null ? void 0 : opts.select) ? opts.select(params) : params;
    }
  });
}

// node_modules/@tanstack/react-router/dist/esm/useSearch.js
function useSearch(opts) {
  return useMatch({
    ...opts,
    select: (match) => {
      return (opts == null ? void 0 : opts.select) ? opts.select(match.search) : match.search;
    }
  });
}

// node_modules/@tanstack/react-router/dist/esm/route.js
var rootRouteId = "__root__";
function getRouteApi(id) {
  return new RouteApi({ id });
}
var RouteApi = class {
  /**
   * @deprecated Use the `getRouteApi` function instead.
   */
  constructor({ id }) {
    this.useMatch = (opts) => {
      return useMatch({ select: opts == null ? void 0 : opts.select, from: this.id });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        from: this.id,
        select: (d) => (opts == null ? void 0 : opts.select) ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({ ...opts, from: this.id });
    };
    this.useParams = (opts) => {
      return useParams({ ...opts, from: this.id });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({ ...opts, from: this.id });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({ ...opts, from: this.id });
    };
    this.notFound = (opts) => {
      return notFound({ routeId: this.id, ...opts });
    };
    this.id = id;
  }
};
var Route = class {
  constructor(options) {
    this.init = (opts) => {
      var _a, _b;
      this.originalIndex = opts.originalIndex;
      const options2 = this.options;
      const isRoot = !(options2 == null ? void 0 : options2.path) && !(options2 == null ? void 0 : options2.id);
      this.parentRoute = (_b = (_a = this.options) == null ? void 0 : _a.getParentRoute) == null ? void 0 : _b.call(_a);
      if (isRoot) {
        this.path = rootRouteId;
      } else {
        invariant(
          this.parentRoute,
          `Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.`
        );
      }
      let path = isRoot ? rootRouteId : options2.path;
      if (path && path !== "/") {
        path = trimPathLeft(path);
      }
      const customId = (options2 == null ? void 0 : options2.id) || path;
      let id = isRoot ? rootRouteId : joinPaths([
        this.parentRoute.id === rootRouteId ? "" : this.parentRoute.id,
        customId
      ]);
      if (path === rootRouteId) {
        path = "/";
      }
      if (id !== rootRouteId) {
        id = joinPaths(["/", id]);
      }
      const fullPath = id === rootRouteId ? "/" : joinPaths([this.parentRoute.fullPath, path]);
      this.path = path;
      this.id = id;
      this.fullPath = fullPath;
      this.to = fullPath;
    };
    this.addChildren = (children) => {
      this.children = children;
      return this;
    };
    this.updateLoader = (options2) => {
      Object.assign(this.options, options2);
      return this;
    };
    this.update = (options2) => {
      Object.assign(this.options, options2);
      return this;
    };
    this.lazy = (lazyFn2) => {
      this.lazyFn = lazyFn2;
      return this;
    };
    this.useMatch = (opts) => {
      return useMatch({ ...opts, from: this.id });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        ...opts,
        from: this.id,
        select: (d) => (opts == null ? void 0 : opts.select) ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({ ...opts, from: this.id });
    };
    this.useParams = (opts) => {
      return useParams({ ...opts, from: this.id });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({ ...opts, from: this.id });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({ ...opts, from: this.id });
    };
    this.options = options || {};
    this.isRoot = !(options == null ? void 0 : options.getParentRoute);
    invariant(
      !((options == null ? void 0 : options.id) && (options == null ? void 0 : options.path)),
      `Route cannot have both an 'id' and a 'path' option.`
    );
    this.$$typeof = Symbol.for("react.memo");
  }
};
function createRoute(options) {
  return new Route(options);
}
function createRootRouteWithContext() {
  return (options) => {
    return createRootRoute(options);
  };
}
var rootRouteWithContext = createRootRouteWithContext;
var RootRoute = class extends Route {
  /**
   * @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
   */
  constructor(options) {
    super(options);
  }
};
function createRootRoute(options) {
  return new RootRoute(options);
}
function createRouteMask(opts) {
  return opts;
}
var NotFoundRoute = class extends Route {
  constructor(options) {
    super({
      ...options,
      id: "404"
    });
  }
};

// node_modules/@tanstack/react-router/dist/esm/qss.js
function encode(obj, pfx) {
  var k, i, tmp, str = "";
  for (k in obj) {
    if ((tmp = obj[k]) !== void 0) {
      if (Array.isArray(tmp)) {
        for (i = 0; i < tmp.length; i++) {
          str && (str += "&");
          str += encodeURIComponent(k) + "=" + encodeURIComponent(tmp[i]);
        }
      } else {
        str && (str += "&");
        str += encodeURIComponent(k) + "=" + encodeURIComponent(tmp);
      }
    }
  }
  return (pfx || "") + str;
}
function toValue(mix) {
  if (!mix)
    return "";
  var str = decodeURIComponent(mix);
  if (str === "false")
    return false;
  if (str === "true")
    return true;
  return +str * 0 === 0 && +str + "" === str ? +str : str;
}
function decode(str, pfx) {
  var tmp, k, out = {}, arr = (pfx ? str.substr(pfx.length) : str).split("&");
  while (tmp = arr.shift()) {
    tmp = tmp.split("=");
    k = tmp.shift();
    if (out[k] !== void 0) {
      out[k] = [].concat(out[k], toValue(tmp.shift()));
    } else {
      out[k] = toValue(tmp.shift());
    }
  }
  return out;
}

// node_modules/@tanstack/react-router/dist/esm/searchParams.js
var defaultParseSearch = parseSearchWith(JSON.parse);
var defaultStringifySearch = stringifySearchWith(
  JSON.stringify,
  JSON.parse
);
function parseSearchWith(parser) {
  return (searchStr) => {
    if (searchStr.substring(0, 1) === "?") {
      searchStr = searchStr.substring(1);
    }
    let query = decode(searchStr);
    for (let key in query) {
      const value = query[key];
      if (typeof value === "string") {
        try {
          query[key] = parser(value);
        } catch (err) {
        }
      }
    }
    return query;
  };
}
function stringifySearchWith(stringify, parser) {
  function stringifyValue(val) {
    if (typeof val === "object" && val !== null) {
      try {
        return stringify(val);
      } catch (err) {
      }
    } else if (typeof val === "string" && typeof parser === "function") {
      try {
        parser(val);
        return stringify(val);
      } catch (err) {
      }
    }
    return val;
  }
  return (search) => {
    search = { ...search };
    if (search) {
      Object.keys(search).forEach((key) => {
        const val = search[key];
        if (typeof val === "undefined" || val === void 0) {
          delete search[key];
        } else {
          search[key] = stringifyValue(val);
        }
      });
    }
    const searchStr = encode(search).toString();
    return searchStr ? `?${searchStr}` : "";
  };
}

// node_modules/@tanstack/react-router/dist/esm/RouterProvider.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var React6 = __toESM(require_react(), 1);
var useTransition2 = React6.useTransition || (() => [
  false,
  (cb) => {
    cb();
  }
]);
function RouterProvider({ router, ...rest }) {
  router.update({
    ...router.options,
    ...rest,
    context: {
      ...router.options.context,
      ...rest == null ? void 0 : rest.context
    }
  });
  const matches = router.options.InnerWrap ? (0, import_jsx_runtime4.jsx)(router.options.InnerWrap, { children: (0, import_jsx_runtime4.jsx)(Matches, {}) }) : (0, import_jsx_runtime4.jsx)(Matches, {});
  const routerContext2 = getRouterContext();
  const provider = (0, import_jsx_runtime4.jsxs)(routerContext2.Provider, { value: router, children: [
    matches,
    (0, import_jsx_runtime4.jsx)(Transitioner, {})
  ] });
  if (router.options.Wrap) {
    return (0, import_jsx_runtime4.jsx)(router.options.Wrap, { children: provider });
  }
  return provider;
}
function Transitioner() {
  const router = useRouter();
  const mountLoadForRouter = React6.useRef({ router, mounted: false });
  const routerState = useRouterState({
    select: (s) => pick(s, ["isLoading", "location", "resolvedLocation", "isTransitioning"])
  });
  const [isTransitioning, startReactTransition] = useTransition2();
  router.startReactTransition = startReactTransition;
  React6.useEffect(() => {
    if (isTransitioning) {
      router.__store.setState((s) => ({
        ...s,
        isTransitioning
      }));
    }
  }, [isTransitioning]);
  const tryLoad = () => {
    const apply = (cb) => {
      if (!routerState.isTransitioning) {
        startReactTransition(() => cb());
      } else {
        cb();
      }
    };
    apply(() => {
      try {
        router.load();
      } catch (err) {
        console.error(err);
      }
    });
  };
  useLayoutEffect2(() => {
    const unsub = router.history.subscribe(() => {
      router.latestLocation = router.parseLocation(router.latestLocation);
      if (routerState.location !== router.latestLocation) {
        tryLoad();
      }
    });
    const nextLocation = router.buildLocation({
      search: true,
      params: true,
      hash: true,
      state: true
    });
    if (routerState.location.href !== nextLocation.href) {
      router.commitLocation({ ...nextLocation, replace: true });
    }
    return () => {
      unsub();
    };
  }, [router.history]);
  useLayoutEffect2(() => {
    var _a;
    if (React6.useTransition ? routerState.isTransitioning && !isTransitioning : !routerState.isLoading && routerState.resolvedLocation !== routerState.location) {
      router.emit({
        type: "onResolved",
        fromLocation: routerState.resolvedLocation,
        toLocation: routerState.location,
        pathChanged: routerState.location.href !== ((_a = routerState.resolvedLocation) == null ? void 0 : _a.href)
      });
      if (document.querySelector) {
        if (routerState.location.hash !== "") {
          const el = document.getElementById(
            routerState.location.hash
          );
          if (el) {
            el.scrollIntoView();
          }
        }
      }
      router.__store.setState((s) => ({
        ...s,
        isTransitioning: false,
        resolvedLocation: s.location
      }));
    }
  }, [
    routerState.isTransitioning,
    isTransitioning,
    routerState.isLoading,
    routerState.resolvedLocation,
    routerState.location
  ]);
  useLayoutEffect2(() => {
    if (window.__TSR_DEHYDRATED__ || mountLoadForRouter.current.router === router && mountLoadForRouter.current.mounted) {
      return;
    }
    mountLoadForRouter.current = { router, mounted: true };
    tryLoad();
  }, [router]);
  return null;
}
function getRouteMatch(state, id) {
  return [
    ...state.cachedMatches,
    ...state.pendingMatches ?? [],
    ...state.matches
  ].find((d) => d.id === id);
}

// node_modules/@tanstack/react-router/dist/esm/redirects.js
function redirect(opts) {
  opts.isRedirect = true;
  if (opts.throw) {
    throw opts;
  }
  return opts;
}
function isRedirect(obj) {
  return !!(obj == null ? void 0 : obj.isRedirect);
}

// node_modules/@tanstack/react-router/dist/esm/router.js
var componentTypes = [
  "component",
  "errorComponent",
  "pendingComponent",
  "notFoundComponent"
];
function createRouter(options) {
  return new Router(options);
}
var Router = class {
  /**
   * @deprecated Use the `createRouter` function instead
   */
  constructor(options) {
    this.tempLocationKey = `${Math.round(
      Math.random() * 1e7
    )}`;
    this.resetNextScroll = true;
    this.navigateTimeout = null;
    this.latestLoadPromise = Promise.resolve();
    this.subscribers = /* @__PURE__ */ new Set();
    this.injectedHtml = [];
    this.startReactTransition = (fn) => fn();
    this.update = (newOptions) => {
      if (newOptions.notFoundRoute) {
        console.warn(
          "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info."
        );
      }
      const previousOptions = this.options;
      this.options = {
        ...this.options,
        ...newOptions
      };
      if (!this.basepath || newOptions.basepath && newOptions.basepath !== previousOptions.basepath) {
        if (newOptions.basepath === void 0 || newOptions.basepath === "" || newOptions.basepath === "/") {
          this.basepath = "/";
        } else {
          this.basepath = `/${trimPath(newOptions.basepath)}`;
        }
      }
      if (!this.history || this.options.history && this.options.history !== this.history) {
        this.history = this.options.history ?? (typeof document !== "undefined" ? createBrowserHistory() : createMemoryHistory({
          initialEntries: [this.options.basepath || "/"]
        }));
        this.latestLocation = this.parseLocation();
      }
      if (this.options.routeTree !== this.routeTree) {
        this.routeTree = this.options.routeTree;
        this.buildRouteTree();
      }
      if (!this.__store) {
        this.__store = new Store(getInitialRouterState(this.latestLocation), {
          onUpdate: () => {
            this.__store.state = {
              ...this.state,
              status: this.state.isTransitioning || this.state.isLoading ? "pending" : "idle"
            };
          }
        });
      }
    };
    this.buildRouteTree = () => {
      this.routesById = {};
      this.routesByPath = {};
      const notFoundRoute = this.options.notFoundRoute;
      if (notFoundRoute) {
        notFoundRoute.init({ originalIndex: 99999999999 });
        this.routesById[notFoundRoute.id] = notFoundRoute;
      }
      const recurseRoutes = (childRoutes) => {
        childRoutes.forEach((childRoute, i) => {
          childRoute.init({ originalIndex: i });
          const existingRoute = this.routesById[childRoute.id];
          invariant(
            !existingRoute,
            `Duplicate routes found with id: ${String(childRoute.id)}`
          );
          this.routesById[childRoute.id] = childRoute;
          if (!childRoute.isRoot && childRoute.path) {
            const trimmedFullPath = trimPathRight(childRoute.fullPath);
            if (!this.routesByPath[trimmedFullPath] || childRoute.fullPath.endsWith("/")) {
              this.routesByPath[trimmedFullPath] = childRoute;
            }
          }
          const children = childRoute.children;
          if (children == null ? void 0 : children.length) {
            recurseRoutes(children);
          }
        });
      };
      recurseRoutes([this.routeTree]);
      const scoredRoutes = [];
      Object.values(this.routesById).forEach((d, i) => {
        var _a;
        if (d.isRoot || !d.path) {
          return;
        }
        const trimmed = trimPathLeft(d.fullPath);
        const parsed = parsePathname(trimmed);
        while (parsed.length > 1 && ((_a = parsed[0]) == null ? void 0 : _a.value) === "/") {
          parsed.shift();
        }
        const scores = parsed.map((d2) => {
          if (d2.value === "/") {
            return 0.75;
          }
          if (d2.type === "param") {
            return 0.5;
          }
          if (d2.type === "wildcard") {
            return 0.25;
          }
          return 1;
        });
        scoredRoutes.push({ child: d, trimmed, parsed, index: i, scores });
      });
      this.flatRoutes = scoredRoutes.sort((a, b) => {
        const minLength = Math.min(a.scores.length, b.scores.length);
        for (let i = 0; i < minLength; i++) {
          if (a.scores[i] !== b.scores[i]) {
            return b.scores[i] - a.scores[i];
          }
        }
        if (a.scores.length !== b.scores.length) {
          return b.scores.length - a.scores.length;
        }
        for (let i = 0; i < minLength; i++) {
          if (a.parsed[i].value !== b.parsed[i].value) {
            return a.parsed[i].value > b.parsed[i].value ? 1 : -1;
          }
        }
        return a.index - b.index;
      }).map((d, i) => {
        d.child.rank = i;
        return d.child;
      });
    };
    this.subscribe = (eventType, fn) => {
      const listener = {
        eventType,
        fn
      };
      this.subscribers.add(listener);
      return () => {
        this.subscribers.delete(listener);
      };
    };
    this.emit = (routerEvent) => {
      this.subscribers.forEach((listener) => {
        if (listener.eventType === routerEvent.type) {
          listener.fn(routerEvent);
        }
      });
    };
    this.checkLatest = (promise) => {
      return this.latestLoadPromise !== promise ? this.latestLoadPromise : void 0;
    };
    this.parseLocation = (previousLocation) => {
      const parse = ({
        pathname,
        search,
        hash,
        state
      }) => {
        const parsedSearch = this.options.parseSearch(search);
        const searchStr = this.options.stringifySearch(parsedSearch);
        return {
          pathname,
          searchStr,
          search: replaceEqualDeep(previousLocation == null ? void 0 : previousLocation.search, parsedSearch),
          hash: hash.split("#").reverse()[0] ?? "",
          href: `${pathname}${searchStr}${hash}`,
          state: replaceEqualDeep(previousLocation == null ? void 0 : previousLocation.state, state)
        };
      };
      const location = parse(this.history.location);
      let { __tempLocation, __tempKey } = location.state;
      if (__tempLocation && (!__tempKey || __tempKey === this.tempLocationKey)) {
        const parsedTempLocation = parse(__tempLocation);
        parsedTempLocation.state.key = location.state.key;
        delete parsedTempLocation.state.__tempLocation;
        return {
          ...parsedTempLocation,
          maskedLocation: location
        };
      }
      return location;
    };
    this.resolvePathWithBase = (from, path) => {
      return resolvePath(this.basepath, from, cleanPath(path));
    };
    this.matchRoutes = (pathname, locationSearch, opts) => {
      let routeParams = {};
      let foundRoute = this.flatRoutes.find((route) => {
        const matchedParams = matchPathname(
          this.basepath,
          trimPathRight(pathname),
          {
            to: route.fullPath,
            caseSensitive: route.options.caseSensitive ?? this.options.caseSensitive,
            fuzzy: true
          }
        );
        if (matchedParams) {
          routeParams = matchedParams;
          return true;
        }
        return false;
      });
      let routeCursor = foundRoute || this.routesById["__root__"];
      let matchedRoutes = [routeCursor];
      let isGlobalNotFound = false;
      if (
        // If we found a route, and it's not an index route and we have left over path
        foundRoute ? foundRoute.path !== "/" && routeParams["**"] : (
          // Or if we didn't find a route and we have left over path
          trimPathRight(pathname)
        )
      ) {
        if (this.options.notFoundRoute) {
          matchedRoutes.push(this.options.notFoundRoute);
        } else {
          isGlobalNotFound = true;
        }
      }
      while (routeCursor == null ? void 0 : routeCursor.parentRoute) {
        routeCursor = routeCursor.parentRoute;
        if (routeCursor)
          matchedRoutes.unshift(routeCursor);
      }
      const parseErrors = matchedRoutes.map((route) => {
        let parsedParamsError;
        if (route.options.parseParams) {
          try {
            const parsedParams = route.options.parseParams(routeParams);
            Object.assign(routeParams, parsedParams);
          } catch (err) {
            parsedParamsError = new PathParamError(err.message, {
              cause: err
            });
            if (opts == null ? void 0 : opts.throwOnError) {
              throw parsedParamsError;
            }
            return parsedParamsError;
          }
        }
        return;
      });
      const matches = [];
      matchedRoutes.forEach((route, index) => {
        var _a, _b, _c, _d, _e, _f;
        const parentMatch = matches[index - 1];
        const [preMatchSearch, searchError] = (() => {
          const parentSearch = (parentMatch == null ? void 0 : parentMatch.search) ?? locationSearch;
          try {
            const validator = typeof route.options.validateSearch === "object" ? route.options.validateSearch.parse : route.options.validateSearch;
            let search = (validator == null ? void 0 : validator(parentSearch)) ?? {};
            return [
              {
                ...parentSearch,
                ...search
              },
              void 0
            ];
          } catch (err) {
            const searchError2 = new SearchParamError(err.message, {
              cause: err
            });
            if (opts == null ? void 0 : opts.throwOnError) {
              throw searchError2;
            }
            return [parentSearch, searchError2];
          }
        })();
        const loaderDeps = ((_b = (_a = route.options).loaderDeps) == null ? void 0 : _b.call(_a, {
          search: preMatchSearch
        })) ?? "";
        const loaderDepsHash = loaderDeps ? JSON.stringify(loaderDeps) : "";
        const interpolatedPath = interpolatePath({
          path: route.fullPath,
          params: routeParams
        });
        const matchId = interpolatePath({
          path: route.id,
          params: routeParams,
          leaveWildcards: true
        }) + loaderDepsHash;
        const existingMatch = getRouteMatch(this.state, matchId);
        const cause = this.state.matches.find((d) => d.id === matchId) ? "stay" : "enter";
        const match = existingMatch ? {
          ...existingMatch,
          cause,
          notFoundError: isGlobalNotFound && route.id === rootRouteId ? { global: true } : void 0,
          params: routeParams
        } : {
          id: matchId,
          routeId: route.id,
          params: routeParams,
          pathname: joinPaths([this.basepath, interpolatedPath]),
          updatedAt: Date.now(),
          search: {},
          searchError: void 0,
          status: "pending",
          showPending: false,
          isFetching: false,
          error: void 0,
          paramsError: parseErrors[index],
          loadPromise: Promise.resolve(),
          routeContext: void 0,
          context: void 0,
          abortController: new AbortController(),
          fetchCount: 0,
          cause,
          loaderDeps,
          invalid: false,
          preload: false,
          notFoundError: isGlobalNotFound && route.id === rootRouteId ? { global: true } : void 0,
          links: (_d = (_c = route.options).links) == null ? void 0 : _d.call(_c),
          scripts: (_f = (_e = route.options).scripts) == null ? void 0 : _f.call(_e),
          staticData: route.options.staticData || {}
        };
        match.search = replaceEqualDeep(match.search, preMatchSearch);
        match.searchError = searchError;
        matches.push(match);
      });
      return matches;
    };
    this.cancelMatch = (id) => {
      var _a, _b;
      (_b = (_a = getRouteMatch(this.state, id)) == null ? void 0 : _a.abortController) == null ? void 0 : _b.abort();
    };
    this.cancelMatches = () => {
      var _a;
      (_a = this.state.pendingMatches) == null ? void 0 : _a.forEach((match) => {
        this.cancelMatch(match.id);
      });
    };
    this.buildLocation = (opts) => {
      const build = (dest = {}, matches) => {
        var _a, _b;
        const relevantMatches = this.state.pendingMatches || this.state.matches;
        const fromSearch = ((_a = relevantMatches[relevantMatches.length - 1]) == null ? void 0 : _a.search) || this.latestLocation.search;
        let pathname = this.resolvePathWithBase(
          dest.from ?? this.latestLocation.pathname,
          `${dest.to ?? ""}`
        );
        const fromMatches = this.matchRoutes(
          this.latestLocation.pathname,
          fromSearch
        );
        const stayingMatches = matches == null ? void 0 : matches.filter(
          (d) => fromMatches == null ? void 0 : fromMatches.find((e) => e.routeId === d.routeId)
        );
        const prevParams = { ...(_b = last(fromMatches)) == null ? void 0 : _b.params };
        let nextParams = (dest.params ?? true) === true ? prevParams : { ...prevParams, ...functionalUpdate(dest.params, prevParams) };
        if (nextParams) {
          matches == null ? void 0 : matches.map((d) => this.looseRoutesById[d.routeId].options.stringifyParams).filter(Boolean).forEach((fn) => {
            nextParams = { ...nextParams, ...fn(nextParams) };
          });
        }
        pathname = interpolatePath({
          path: pathname,
          params: nextParams ?? {},
          leaveWildcards: false,
          leaveParams: opts.leaveParams
        });
        const preSearchFilters = (stayingMatches == null ? void 0 : stayingMatches.map(
          (match) => this.looseRoutesById[match.routeId].options.preSearchFilters ?? []
        ).flat().filter(Boolean)) ?? [];
        const postSearchFilters = (stayingMatches == null ? void 0 : stayingMatches.map(
          (match) => this.looseRoutesById[match.routeId].options.postSearchFilters ?? []
        ).flat().filter(Boolean)) ?? [];
        const preFilteredSearch = (preSearchFilters == null ? void 0 : preSearchFilters.length) ? preSearchFilters == null ? void 0 : preSearchFilters.reduce(
          (prev, next) => next(prev),
          fromSearch
        ) : fromSearch;
        const destSearch = dest.search === true ? preFilteredSearch : dest.search ? functionalUpdate(dest.search, preFilteredSearch) ?? {} : (preSearchFilters == null ? void 0 : preSearchFilters.length) ? preFilteredSearch : {};
        const postFilteredSearch = (postSearchFilters == null ? void 0 : postSearchFilters.length) ? postSearchFilters.reduce((prev, next) => next(prev), destSearch) : destSearch;
        const search = replaceEqualDeep(fromSearch, postFilteredSearch);
        const searchStr = this.options.stringifySearch(search);
        const hash = dest.hash === true ? this.latestLocation.hash : dest.hash ? functionalUpdate(dest.hash, this.latestLocation.hash) : void 0;
        const hashStr = hash ? `#${hash}` : "";
        let nextState = dest.state === true ? this.latestLocation.state : dest.state ? functionalUpdate(dest.state, this.latestLocation.state) : {};
        nextState = replaceEqualDeep(this.latestLocation.state, nextState);
        return {
          pathname,
          search,
          searchStr,
          state: nextState,
          hash: hash ?? "",
          href: `${pathname}${searchStr}${hashStr}`,
          unmaskOnReload: dest.unmaskOnReload
        };
      };
      const buildWithMatches = (dest = {}, maskedDest) => {
        var _a;
        let next = build(dest);
        let maskedNext = maskedDest ? build(maskedDest) : void 0;
        if (!maskedNext) {
          let params = {};
          let foundMask = (_a = this.options.routeMasks) == null ? void 0 : _a.find((d) => {
            const match = matchPathname(this.basepath, next.pathname, {
              to: d.from,
              caseSensitive: false,
              fuzzy: false
            });
            if (match) {
              params = match;
              return true;
            }
            return false;
          });
          if (foundMask) {
            maskedDest = {
              ...pick(opts, ["from"]),
              ...foundMask,
              params
            };
            maskedNext = build(maskedDest);
          }
        }
        const nextMatches = this.matchRoutes(next.pathname, next.search);
        const maskedMatches = maskedNext ? this.matchRoutes(maskedNext.pathname, maskedNext.search) : void 0;
        const maskedFinal = maskedNext ? build(maskedDest, maskedMatches) : void 0;
        const final = build(dest, nextMatches);
        if (maskedFinal) {
          final.maskedLocation = maskedFinal;
        }
        return final;
      };
      if (opts.mask) {
        return buildWithMatches(opts, {
          ...pick(opts, ["from"]),
          ...opts.mask
        });
      }
      return buildWithMatches(opts);
    };
    this.commitLocation = async ({
      startTransition: startTransition2,
      ...next
    }) => {
      if (this.navigateTimeout)
        clearTimeout(this.navigateTimeout);
      const isSameUrl = this.latestLocation.href === next.href;
      if (!isSameUrl || !next.replace) {
        let { maskedLocation, ...nextHistory } = next;
        if (maskedLocation) {
          nextHistory = {
            ...maskedLocation,
            state: {
              ...maskedLocation.state,
              __tempKey: void 0,
              __tempLocation: {
                ...nextHistory,
                search: nextHistory.searchStr,
                state: {
                  ...nextHistory.state,
                  __tempKey: void 0,
                  __tempLocation: void 0,
                  key: void 0
                }
              }
            }
          };
          if (nextHistory.unmaskOnReload ?? this.options.unmaskOnReload ?? false) {
            nextHistory.state.__tempKey = this.tempLocationKey;
          }
        }
        const apply = () => {
          this.history[next.replace ? "replace" : "push"](
            nextHistory.href,
            nextHistory.state
          );
        };
        if (startTransition2 ?? true) {
          this.startReactTransition(apply);
        } else {
          apply();
        }
      }
      this.resetNextScroll = next.resetScroll ?? true;
      return this.latestLoadPromise;
    };
    this.buildAndCommitLocation = ({
      replace,
      resetScroll,
      startTransition: startTransition2,
      ...rest
    } = {}) => {
      const location = this.buildLocation(rest);
      return this.commitLocation({
        ...location,
        startTransition: startTransition2,
        replace,
        resetScroll
      });
    };
    this.navigate = ({ from, to, ...rest }) => {
      const toString = String(to);
      let isExternal;
      try {
        new URL(`${toString}`);
        isExternal = true;
      } catch (e) {
      }
      invariant(
        !isExternal,
        "Attempting to navigate to external url with this.navigate!"
      );
      return this.buildAndCommitLocation({
        ...rest,
        from,
        to
        // to: toString,
      });
    };
    this.loadMatches = async ({
      checkLatest,
      matches,
      preload
    }) => {
      var _a, _b;
      let latestPromise;
      let firstBadMatchIndex;
      const updateMatch = (match) => {
        var _a2;
        const isPending = (_a2 = this.state.pendingMatches) == null ? void 0 : _a2.find(
          (d) => d.id === match.id
        );
        const isMatched = this.state.matches.find((d) => d.id === match.id);
        const matchesKey = isPending ? "pendingMatches" : isMatched ? "matches" : "cachedMatches";
        this.__store.setState((s) => {
          var _a3;
          return {
            ...s,
            [matchesKey]: (_a3 = s[matchesKey]) == null ? void 0 : _a3.map(
              (d) => d.id === match.id ? match : d
            )
          };
        });
      };
      for (let [index, match] of matches.entries()) {
        const parentMatch = matches[index - 1];
        const route = this.looseRoutesById[match.routeId];
        const abortController = new AbortController();
        const handleError = (err, code) => {
          var _a2, _b2;
          err.routerCode = code;
          firstBadMatchIndex = firstBadMatchIndex ?? index;
          if (isRedirect(err)) {
            throw err;
          }
          if (isNotFound(err)) {
            err.routeId = match.routeId;
            throw err;
          }
          try {
            (_b2 = (_a2 = route.options).onError) == null ? void 0 : _b2.call(_a2, err);
          } catch (errorHandlerErr) {
            err = errorHandlerErr;
            if (isRedirect(errorHandlerErr)) {
              throw errorHandlerErr;
            }
          }
          matches[index] = match = {
            ...match,
            error: err,
            status: "error",
            updatedAt: Date.now(),
            abortController: new AbortController()
          };
        };
        try {
          if (match.paramsError) {
            handleError(match.paramsError, "PARSE_PARAMS");
          }
          if (match.searchError) {
            handleError(match.searchError, "VALIDATE_SEARCH");
          }
          const parentContext = (parentMatch == null ? void 0 : parentMatch.context) ?? this.options.context ?? {};
          const pendingMs = route.options.pendingMs ?? this.options.defaultPendingMs;
          const pendingPromise = typeof pendingMs === "number" && pendingMs <= 0 ? Promise.resolve() : new Promise((r) => setTimeout(r, pendingMs));
          const beforeLoadContext = await ((_b = (_a = route.options).beforeLoad) == null ? void 0 : _b.call(_a, {
            search: match.search,
            abortController,
            params: match.params,
            preload: !!preload,
            context: parentContext,
            location: this.state.location,
            // TOOD: just expose state and router, etc
            navigate: (opts) => this.navigate({ ...opts, from: match.pathname }),
            buildLocation: this.buildLocation,
            cause: preload ? "preload" : match.cause
          })) ?? {};
          if (isRedirect(beforeLoadContext)) {
            throw beforeLoadContext;
          }
          const context = {
            ...parentContext,
            ...beforeLoadContext
          };
          matches[index] = match = {
            ...match,
            routeContext: replaceEqualDeep(match.routeContext, beforeLoadContext),
            context: replaceEqualDeep(match.context, context),
            abortController,
            pendingPromise
          };
        } catch (err) {
          handleError(err, "BEFORE_LOAD");
          break;
        }
      }
      const validResolvedMatches = matches.slice(0, firstBadMatchIndex);
      const matchPromises = [];
      validResolvedMatches.forEach((match, index) => {
        matchPromises.push(
          new Promise(async (resolve, reject) => {
            var _a2;
            const parentMatchPromise = matchPromises[index - 1];
            const route = this.looseRoutesById[match.routeId];
            const handleError = (err) => {
              if (isRedirect(err)) {
                throw err;
              }
              if (isNotFound(err)) {
                err.routeId = match.routeId;
                throw err;
              }
            };
            let loadPromise;
            matches[index] = match = {
              ...match,
              showPending: false
            };
            let didShowPending = false;
            const pendingMs = route.options.pendingMs ?? this.options.defaultPendingMs;
            const pendingMinMs = route.options.pendingMinMs ?? this.options.defaultPendingMinMs;
            const shouldPending = !preload && typeof pendingMs === "number" && (route.options.pendingComponent ?? this.options.defaultPendingComponent);
            const loaderContext = {
              params: match.params,
              deps: match.loaderDeps,
              preload: !!preload,
              parentMatchPromise,
              abortController: match.abortController,
              context: match.context,
              location: this.state.location,
              navigate: (opts) => this.navigate({ ...opts, from: match.pathname }),
              cause: preload ? "preload" : match.cause
            };
            const fetch = async () => {
              var _a3, _b2, _c, _d, _e, _f, _g, _h;
              if (match.isFetching) {
                loadPromise = (_a3 = getRouteMatch(this.state, match.id)) == null ? void 0 : _a3.loadPromise;
              } else {
                if (match.fetchCount && match.status === "success") {
                  resolve();
                }
                matches[index] = match = {
                  ...match,
                  isFetching: true,
                  fetchCount: match.fetchCount + 1
                };
                const lazyPromise = ((_b2 = route.lazyFn) == null ? void 0 : _b2.call(route).then((lazyRoute) => {
                  Object.assign(route.options, lazyRoute.options);
                })) || Promise.resolve();
                const componentsPromise = lazyPromise.then(
                  () => Promise.all(
                    componentTypes.map(async (type) => {
                      const component = route.options[type];
                      if (component == null ? void 0 : component.preload) {
                        await component.preload();
                      }
                    })
                  )
                );
                async function loader() {
                  var _a4, _b3;
                  return await ((_b3 = (_a4 = route.options).loader) == null ? void 0 : _b3.call(_a4, loaderContext));
                }
                const loaderPromise = loader();
                loadPromise = Promise.all([
                  componentsPromise,
                  loaderPromise,
                  lazyPromise
                ]).then((d) => d[1]);
              }
              matches[index] = match = {
                ...match,
                loadPromise
              };
              updateMatch(match);
              try {
                const loaderData = await loadPromise;
                if (latestPromise = checkLatest())
                  return await latestPromise;
                handleError(loaderData);
                if (didShowPending && pendingMinMs) {
                  await new Promise((r) => setTimeout(r, pendingMinMs));
                }
                if (latestPromise = checkLatest())
                  return await latestPromise;
                const [meta, headers] = await Promise.all([
                  (_d = (_c = route.options).meta) == null ? void 0 : _d.call(_c, {
                    params: match.params,
                    loaderData
                  }),
                  (_f = (_e = route.options).headers) == null ? void 0 : _f.call(_e, {
                    loaderData
                  })
                ]);
                matches[index] = match = {
                  ...match,
                  error: void 0,
                  status: "success",
                  isFetching: false,
                  updatedAt: Date.now(),
                  loaderData,
                  loadPromise: void 0,
                  meta,
                  headers
                };
              } catch (error) {
                if (latestPromise = checkLatest())
                  return await latestPromise;
                handleError(error);
                try {
                  (_h = (_g = route.options).onError) == null ? void 0 : _h.call(_g, error);
                } catch (onErrorError) {
                  error = onErrorError;
                  handleError(onErrorError);
                }
                matches[index] = match = {
                  ...match,
                  error,
                  status: "error",
                  isFetching: false
                };
              }
              updateMatch(match);
            };
            const age = Date.now() - match.updatedAt;
            let staleAge = preload ? route.options.preloadStaleTime ?? this.options.defaultPreloadStaleTime ?? 3e4 : route.options.staleTime ?? this.options.defaultStaleTime ?? 0;
            let shouldReload;
            const shouldReloadOption = route.options.shouldReload;
            shouldReload = typeof shouldReloadOption === "function" ? shouldReloadOption(loaderContext) : shouldReloadOption;
            matches[index] = match = {
              ...match,
              preload: !!preload && !this.state.matches.find((d) => d.id === match.id)
            };
            try {
              if (match.status !== "success") {
                if (shouldPending) {
                  (_a2 = match.pendingPromise) == null ? void 0 : _a2.then(async () => {
                    if (latestPromise = checkLatest())
                      return latestPromise;
                    didShowPending = true;
                    matches[index] = match = {
                      ...match,
                      showPending: true
                    };
                    updateMatch(match);
                    resolve();
                  });
                }
                await fetch();
              } else if (match.invalid || (shouldReload ?? age > staleAge)) {
                fetch();
              }
            } catch (err) {
              reject(err);
            }
            resolve();
          })
        );
      });
      await Promise.all(matchPromises);
      return matches;
    };
    this.invalidate = () => {
      const invalidate = (d) => ({
        ...d,
        invalid: true
      });
      this.__store.setState((s) => {
        var _a;
        return {
          ...s,
          matches: s.matches.map(invalidate),
          cachedMatches: s.cachedMatches.map(invalidate),
          pendingMatches: (_a = s.pendingMatches) == null ? void 0 : _a.map(invalidate)
        };
      });
      this.load();
    };
    this.load = async () => {
      const promise = new Promise(async (resolve, reject) => {
        const next = this.latestLocation;
        const prevLocation = this.state.resolvedLocation;
        const pathDidChange = prevLocation.href !== next.href;
        let latestPromise;
        this.cancelMatches();
        this.emit({
          type: "onBeforeLoad",
          fromLocation: prevLocation,
          toLocation: next,
          pathChanged: pathDidChange
        });
        let pendingMatches;
        const previousMatches = this.state.matches;
        this.__store.batch(() => {
          this.cleanCache();
          pendingMatches = this.matchRoutes(next.pathname, next.search, {
            debug: true
          });
          this.__store.setState((s) => ({
            ...s,
            isLoading: true,
            location: next,
            pendingMatches,
            cachedMatches: s.cachedMatches.filter((d) => {
              return !pendingMatches.find((e) => e.id === d.id);
            })
          }));
        });
        try {
          try {
            await this.loadMatches({
              matches: pendingMatches,
              checkLatest: () => this.checkLatest(promise)
            });
          } catch (err) {
            if (isRedirect(err)) {
              this.handleRedirect(err);
            } else if (isNotFound(err)) {
              this.handleNotFound(pendingMatches, err);
            }
          }
          if (latestPromise = this.checkLatest(promise)) {
            return latestPromise;
          }
          const exitingMatches = previousMatches.filter(
            (match) => !pendingMatches.find((d) => d.id === match.id)
          );
          const enteringMatches = pendingMatches.filter(
            (match) => !previousMatches.find((d) => d.id === match.id)
          );
          const stayingMatches = previousMatches.filter(
            (match) => pendingMatches.find((d) => d.id === match.id)
          );
          this.__store.batch(() => {
            this.__store.setState((s) => ({
              ...s,
              isLoading: false,
              matches: s.pendingMatches,
              pendingMatches: void 0,
              cachedMatches: [
                ...s.cachedMatches,
                ...exitingMatches.filter((d) => d.status !== "error")
              ]
            }));
            this.cleanCache();
          });
          [
            [exitingMatches, "onLeave"],
            [enteringMatches, "onEnter"],
            [stayingMatches, "onStay"]
          ].forEach(([matches, hook]) => {
            matches.forEach((match) => {
              var _a, _b;
              (_b = (_a = this.looseRoutesById[match.routeId].options)[hook]) == null ? void 0 : _b.call(_a, match);
            });
          });
          this.emit({
            type: "onLoad",
            fromLocation: prevLocation,
            toLocation: next,
            pathChanged: pathDidChange
          });
          resolve();
        } catch (err) {
          if (latestPromise = this.checkLatest(promise)) {
            return latestPromise;
          }
          reject(err);
        }
      });
      this.latestLoadPromise = promise;
      return this.latestLoadPromise;
    };
    this.handleRedirect = (err) => {
      if (!err.href) {
        err.href = this.buildLocation(err).href;
      }
      if (isServer) {
        throw err;
      }
      this.navigate(err);
    };
    this.cleanCache = () => {
      this.__store.setState((s) => {
        return {
          ...s,
          cachedMatches: s.cachedMatches.filter((d) => {
            const route = this.looseRoutesById[d.routeId];
            if (!route.options.loader) {
              return false;
            }
            const gcTime = (d.preload ? route.options.preloadGcTime ?? this.options.defaultPreloadGcTime : route.options.gcTime ?? this.options.defaultGcTime) ?? 5 * 60 * 1e3;
            return d.status !== "error" && Date.now() - d.updatedAt < gcTime;
          })
        };
      });
    };
    this.preloadRoute = async (navigateOpts = this.state.location) => {
      var _a;
      let next = this.buildLocation(navigateOpts);
      let matches = this.matchRoutes(next.pathname, next.search, {
        throwOnError: true
      });
      const loadedMatchIds = Object.fromEntries(
        (_a = [
          ...this.state.matches,
          ...this.state.pendingMatches ?? [],
          ...this.state.cachedMatches
        ]) == null ? void 0 : _a.map((d) => [d.id, true])
      );
      this.__store.batch(() => {
        matches.forEach((match) => {
          if (!loadedMatchIds[match.id]) {
            this.__store.setState((s) => ({
              ...s,
              cachedMatches: [...s.cachedMatches, match]
            }));
          }
        });
      });
      try {
        matches = await this.loadMatches({
          matches,
          preload: true,
          checkLatest: () => void 0
        });
        return matches;
      } catch (err) {
        if (!isRedirect(err) && !isNotFound(err)) {
          console.error(err);
        }
        return void 0;
      }
    };
    this.matchRoute = (location, opts) => {
      const matchLocation = {
        ...location,
        to: location.to ? this.resolvePathWithBase(location.from || "", location.to) : void 0,
        params: location.params || {},
        leaveParams: true
      };
      const next = this.buildLocation(matchLocation);
      if ((opts == null ? void 0 : opts.pending) && this.state.status !== "pending") {
        return false;
      }
      const baseLocation = (opts == null ? void 0 : opts.pending) ? this.latestLocation : this.state.resolvedLocation;
      if (!baseLocation) {
        return false;
      }
      const match = matchPathname(this.basepath, baseLocation.pathname, {
        ...opts,
        to: next.pathname
      });
      if (!match) {
        return false;
      }
      if (location.params) {
        if (!deepEqual(match, location.params, true)) {
          return false;
        }
      }
      if (match && ((opts == null ? void 0 : opts.includeSearch) ?? true)) {
        return deepEqual(baseLocation.search, next.search, true) ? match : false;
      }
      return match;
    };
    this.injectHtml = async (html) => {
      this.injectedHtml.push(html);
    };
    this.registeredDeferredsIds = /* @__PURE__ */ new Map();
    this.registeredDeferreds = /* @__PURE__ */ new WeakMap();
    this.getDeferred = (uid) => {
      const token = this.registeredDeferredsIds.get(uid);
      if (!token) {
        return void 0;
      }
      return this.registeredDeferreds.get(token);
    };
    this.dehydrateData = (key, getData) => {
      tiny_warning_esm_default(
        false,
        `The dehydrateData method is deprecated. Please use the injectHtml method to inject your own data.`
      );
      if (typeof document === "undefined") {
        const strKey = typeof key === "string" ? key : JSON.stringify(key);
        this.injectHtml(async () => {
          const id = `__TSR_DEHYDRATED__${strKey}`;
          const data = typeof getData === "function" ? await getData() : getData;
          return `<script id='${id}' suppressHydrationWarning>
  window["__TSR_DEHYDRATED__${escapeJSON(
            strKey
          )}"] = ${JSON.stringify(this.options.transformer.stringify(data))}
<\/script>`;
        });
        return () => this.hydrateData(key);
      }
      return () => void 0;
    };
    this.hydrateData = (key) => {
      tiny_warning_esm_default(
        false,
        `The hydrateData method is deprecated. Please use the extractHtml method to extract your own data.`
      );
      if (typeof document !== "undefined") {
        const strKey = typeof key === "string" ? key : JSON.stringify(key);
        return this.options.transformer.parse(
          window[`__TSR_DEHYDRATED__${strKey}`]
        );
      }
      return void 0;
    };
    this.dehydrate = () => {
      var _a;
      const pickError = ((_a = this.options.errorSerializer) == null ? void 0 : _a.serialize) ?? defaultSerializeError;
      return {
        state: {
          dehydratedMatches: this.state.matches.map((d) => ({
            ...pick(d, [
              "id",
              "status",
              "updatedAt",
              "loaderData",
              // Not-founds that occur during SSR don't require the client to load data before
              // triggering in order to prevent the flicker of the loading component
              "notFoundError"
            ]),
            // If an error occurs server-side during SSRing,
            // send a small subset of the error to the client
            error: d.error ? {
              data: pickError(d.error),
              __isServerError: true
            } : void 0
          }))
        }
      };
    };
    this.hydrate = async (__do_not_use_server_ctx) => {
      var _a, _b, _c;
      let _ctx = __do_not_use_server_ctx;
      if (typeof document !== "undefined") {
        _ctx = (_a = window.__TSR_DEHYDRATED__) == null ? void 0 : _a.data;
      }
      invariant(
        _ctx,
        "Expected to find a __TSR_DEHYDRATED__ property on window... but we did not. Did you forget to render <DehydrateRouter /> in your app?"
      );
      const ctx = this.options.transformer.parse(_ctx);
      this.dehydratedData = ctx.payload;
      (_c = (_b = this.options).hydrate) == null ? void 0 : _c.call(_b, ctx.payload);
      const dehydratedState = ctx.router.state;
      let matches = this.matchRoutes(
        this.state.location.pathname,
        this.state.location.search
      ).map((match) => {
        var _a2, _b2, _c2, _d, _e, _f;
        const dehydratedMatch = dehydratedState.dehydratedMatches.find(
          (d) => d.id === match.id
        );
        invariant(
          dehydratedMatch,
          `Could not find a client-side match for dehydrated match with id: ${match.id}!`
        );
        if (dehydratedMatch) {
          const route = this.looseRoutesById[match.routeId];
          return {
            ...match,
            ...dehydratedMatch,
            meta: (_b2 = (_a2 = route.options).meta) == null ? void 0 : _b2.call(_a2, {
              params: match.params,
              loaderData: dehydratedMatch.loaderData
            }),
            links: (_d = (_c2 = route.options).links) == null ? void 0 : _d.call(_c2),
            scripts: (_f = (_e = route.options).scripts) == null ? void 0 : _f.call(_e)
          };
        }
        return match;
      });
      this.__store.setState((s) => {
        return {
          ...s,
          matches,
          lastUpdated: Date.now()
        };
      });
    };
    this.handleNotFound = (matches, err) => {
      const matchesByRouteId = Object.fromEntries(
        matches.map((match) => [match.routeId, match])
      );
      if (!err.global && err.routeId) {
        let currentRoute = this.looseRoutesById[err.routeId];
        if (currentRoute) {
          while (!currentRoute.options.notFoundComponent) {
            currentRoute = currentRoute == null ? void 0 : currentRoute.parentRoute;
            invariant(
              currentRoute,
              "Found invalid route tree while trying to find not-found handler."
            );
            if (currentRoute.id === rootRouteId)
              break;
          }
          const match = matchesByRouteId[currentRoute.id];
          invariant(match, "Could not find match for route: " + currentRoute.id);
          match.notFoundError = err;
          return;
        }
      }
      matchesByRouteId[rootRouteId].notFoundError = err;
    };
    this.hasNotFoundMatch = () => {
      return this.__store.state.matches.some((d) => d.notFoundError);
    };
    this.update({
      defaultPreloadDelay: 50,
      defaultPendingMs: 1e3,
      defaultPendingMinMs: 500,
      context: void 0,
      ...options,
      stringifySearch: (options == null ? void 0 : options.stringifySearch) ?? defaultStringifySearch,
      parseSearch: (options == null ? void 0 : options.parseSearch) ?? defaultParseSearch,
      transformer: (options == null ? void 0 : options.transformer) ?? JSON
    });
    if (typeof document !== "undefined") {
      window.__TSR__ROUTER__ = this;
    }
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  // resolveMatchPromise = (matchId: string, key: string, value: any) => {
  //   state.matches
  //     .find((d) => d.id === matchId)
  //     ?.__promisesByKey[key]?.resolve(value)
  // }
};
function lazyFn(fn, key) {
  return async (...args) => {
    const imported = await fn();
    return imported[key || "default"](...args);
  };
}
var SearchParamError = class extends Error {
};
var PathParamError = class extends Error {
};
function getInitialRouterState(location) {
  return {
    isLoading: false,
    isTransitioning: false,
    status: "idle",
    resolvedLocation: { ...location },
    location,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    lastUpdated: 0
  };
}
function defaultSerializeError(err) {
  if (err instanceof Error)
    return {
      name: err.name,
      message: err.message
    };
  return {
    data: err
  };
}

// node_modules/@tanstack/react-router/dist/esm/defer.js
function defer(_promise, options) {
  const promise = _promise;
  if (!promise.__deferredState) {
    promise.__deferredState = {
      uid: Math.random().toString(36).slice(2),
      status: "pending"
    };
    const state = promise.__deferredState;
    promise.then((data) => {
      state.status = "success";
      state.data = data;
    }).catch((error) => {
      state.status = "error";
      state.error = {
        data: ((options == null ? void 0 : options.serializeError) ?? defaultSerializeError)(error),
        __isServerError: true
      };
    });
  }
  return promise;
}
function isDehydratedDeferred(obj) {
  return typeof obj === "object" && obj !== null && !(obj instanceof Promise) && !obj.then && "__deferredState" in obj;
}

// node_modules/@tanstack/react-router/dist/esm/awaited.js
function useAwaited({ promise }) {
  var _a, _b;
  const router = useRouter();
  const state = promise.__deferredState;
  if (isDehydratedDeferred(promise) && state.status === "pending") {
    const streamedData = window[`__TSR__DEFERRED__${state.uid}`];
    if (streamedData) {
      Object.assign(state, streamedData);
    } else {
      let token = router.registeredDeferredsIds.get(state.uid);
      if (!token) {
        token = {};
        router.registeredDeferredsIds.set(state.uid, token);
        router.registeredDeferreds.set(token, state);
        Object.assign(state, {
          resolve: () => {
            var _a2;
            (_a2 = state.__resolvePromise) == null ? void 0 : _a2.call(state);
          },
          promise: new Promise((r) => {
            state.__resolvePromise = r;
          }),
          __resolvePromise: () => {
          }
        });
      }
    }
  }
  if (state.status === "pending") {
    throw isDehydratedDeferred(promise) ? state.promise : promise;
  }
  if (!isDehydratedDeferred(promise)) {
    router.injectHtml(`<script class='tsr_deferred_data'>window.__TSR__DEFERRED__${state.uid} = ${router.options.transformer.stringify(state)}<\/script>
<script class='tsr_deferred_handler'>
  if (window.__TSR__ROUTER__) {
    let deferred = window.__TSR__ROUTER__.getDeferred('${state.uid}')
    if (deferred) deferred.resolve(window.__TSR__DEFERRED__${state.uid})
  }
  document.querySelectorAll('.tsr_deferred_handler').forEach((el) => el.parentElement.removeChild(el))
<\/script>`);
  }
  if (state.status === "error") {
    if (typeof document !== "undefined") {
      if (isServerSideError(state.error)) {
        throw (((_a = router.options.errorSerializer) == null ? void 0 : _a.deserialize) ?? defaultDeserializeError)(state.error.data);
      } else {
        tiny_warning_esm_default(
          false,
          "Encountered a server-side error that doesn't fit the expected shape"
        );
        throw state.error;
      }
    } else {
      throw {
        data: (((_b = router.options.errorSerializer) == null ? void 0 : _b.serialize) ?? defaultSerializeError)(state.error),
        __isServerError: true
      };
    }
  }
  return [promise.__deferredState.data];
}
function Await(props) {
  const inner = (0, import_jsx_runtime5.jsx)(AwaitInner, { ...props });
  if (props.fallback) {
    return (0, import_jsx_runtime5.jsx)(React7.Suspense, { fallback: props.fallback, children: inner });
  }
  return inner;
}
function AwaitInner(props) {
  const awaited = useAwaited(props);
  return props.children(...awaited);
}

// node_modules/@tanstack/react-router/dist/esm/fileRoute.js
function createFileRoute(path) {
  return new FileRoute(path, {
    silent: true
  }).createRoute;
}
var FileRoute = class {
  constructor(path, _opts) {
    this.path = path;
    this.createRoute = (options) => {
      tiny_warning_esm_default(
        this.silent,
        "FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead."
      );
      const route = createRoute(options);
      route.isRoot = false;
      return route;
    };
    this.silent = _opts == null ? void 0 : _opts.silent;
  }
};
function FileRouteLoader(_path) {
  tiny_warning_esm_default(
    false,
    `FileRouteLoader is deprecated and will be removed in the next major version. Please place the loader function in the the main route file, inside the \`createFileRoute('/path/to/file')(options)\` options`
  );
  return (loaderFn) => loaderFn;
}
var LazyRoute = class {
  constructor(opts) {
    this.useMatch = (opts2) => {
      return useMatch({ select: opts2 == null ? void 0 : opts2.select, from: this.options.id });
    };
    this.useRouteContext = (opts2) => {
      return useMatch({
        from: this.options.id,
        select: (d) => (opts2 == null ? void 0 : opts2.select) ? opts2.select(d.context) : d.context
      });
    };
    this.useSearch = (opts2) => {
      return useSearch({ ...opts2, from: this.options.id });
    };
    this.useParams = (opts2) => {
      return useParams({ ...opts2, from: this.options.id });
    };
    this.useLoaderDeps = (opts2) => {
      return useLoaderDeps({ ...opts2, from: this.options.id });
    };
    this.useLoaderData = (opts2) => {
      return useLoaderData({ ...opts2, from: this.options.id });
    };
    this.options = opts;
    this.$$typeof = Symbol.for("react.memo");
  }
};
function createLazyRoute(id) {
  return (opts) => {
    return new LazyRoute({ id, ...opts });
  };
}
function createLazyFileRoute(id) {
  return (opts) => new LazyRoute({ id, ...opts });
}

// node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
var React8 = __toESM(require_react(), 1);
function isModuleNotFoundError(error) {
  return typeof (error == null ? void 0 : error.message) === "string" && /Failed to fetch dynamically imported module/.test(error.message);
}
function lazyRouteComponent(importer, exportName) {
  let loadPromise;
  const load = () => {
    if (!loadPromise) {
      loadPromise = importer().catch((error) => {
        if (isModuleNotFoundError(error)) {
          loadPromise.moduleNotFoundError = error;
          return null;
        }
        throw error;
      });
    }
    return loadPromise;
  };
  const lazyComp = React8.lazy(async () => {
    try {
      const promise = load();
      if (promise.moduleNotFoundError) {
        throw promise.moduleNotFoundError;
      }
      const moduleExports = await promise;
      const comp = moduleExports[exportName ?? "default"];
      return {
        default: comp
      };
    } catch (error) {
      if (error instanceof Error && isModuleNotFoundError(error) && typeof window !== "undefined" && typeof sessionStorage !== "undefined") {
        const storageKey = `tanstack_router_reload:${error.message}`;
        if (!sessionStorage.getItem(storageKey)) {
          sessionStorage.setItem(storageKey, "1");
          window.location.reload();
          return {
            default: () => null
          };
        }
      }
      throw error;
    }
  });
  lazyComp.preload = load;
  return lazyComp;
}

// node_modules/@tanstack/react-router/dist/esm/link.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var React9 = __toESM(require_react(), 1);
var preloadWarning = "Error preloading route! ☝️";
function useLinkProps(options) {
  const router = useRouter();
  const matchPathname2 = useMatch({
    strict: false,
    select: (s) => s.pathname
  });
  const {
    // custom props
    activeProps = () => ({ className: "active" }),
    inactiveProps = () => ({}),
    activeOptions,
    hash,
    search,
    params,
    to,
    state,
    mask,
    preload: userPreload,
    preloadDelay: userPreloadDelay,
    replace,
    startTransition: startTransition2,
    resetScroll,
    // element props
    children,
    target,
    disabled,
    style,
    className,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onTouchStart,
    ...rest
  } = options;
  const dest = {
    from: options.to ? matchPathname2 : void 0,
    ...options
  };
  let type = "internal";
  try {
    new URL(`${to}`);
    type = "external";
  } catch {
  }
  const next = router.buildLocation(dest);
  const preload = userPreload ?? router.options.defaultPreload;
  const preloadDelay = userPreloadDelay ?? router.options.defaultPreloadDelay ?? 0;
  const isActive = useRouterState({
    select: (s) => {
      const currentPathSplit = s.location.pathname.split("/");
      const nextPathSplit = next.pathname.split("/");
      const pathIsFuzzyEqual = nextPathSplit.every(
        (d, i) => d === currentPathSplit[i]
      );
      const pathTest = (activeOptions == null ? void 0 : activeOptions.exact) ? s.location.pathname === next.pathname : pathIsFuzzyEqual;
      const hashTest = (activeOptions == null ? void 0 : activeOptions.includeHash) ? s.location.hash === next.hash : true;
      const searchTest = (activeOptions == null ? void 0 : activeOptions.includeSearch) ?? true ? deepEqual(s.location.search, next.search, !(activeOptions == null ? void 0 : activeOptions.exact)) : true;
      return pathTest && hashTest && searchTest;
    }
  });
  if (type === "external") {
    return {
      ...rest,
      type,
      href: to,
      children,
      target,
      disabled,
      style,
      className,
      onClick,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      onTouchStart
    };
  }
  const handleClick = (e) => {
    if (!disabled && !isCtrlEvent(e) && !e.defaultPrevented && (!target || target === "_self") && e.button === 0) {
      e.preventDefault();
      router.commitLocation({ ...next, replace, resetScroll, startTransition: startTransition2 });
    }
  };
  const doPreload = () => {
    React9.startTransition(() => {
      router.preloadRoute(dest).catch((err) => {
        console.warn(err);
        console.warn(preloadWarning);
      });
    });
  };
  const handleFocus = (e) => {
    if (disabled)
      return;
    if (preload) {
      doPreload();
    }
  };
  const handleTouchStart = handleFocus;
  const handleEnter = (e) => {
    if (disabled)
      return;
    const target2 = e.target || {};
    if (preload) {
      if (target2.preloadTimeout) {
        return;
      }
      target2.preloadTimeout = setTimeout(() => {
        target2.preloadTimeout = null;
        doPreload();
      }, preloadDelay);
    }
  };
  const handleLeave = (e) => {
    if (disabled)
      return;
    const target2 = e.target || {};
    if (target2.preloadTimeout) {
      clearTimeout(target2.preloadTimeout);
      target2.preloadTimeout = null;
    }
  };
  const composeHandlers = (handlers) => (e) => {
    if (e.persist)
      e.persist();
    handlers.filter(Boolean).forEach((handler) => {
      if (e.defaultPrevented)
        return;
      handler(e);
    });
  };
  const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? {} : {};
  const resolvedInactiveProps = isActive ? {} : functionalUpdate(inactiveProps, {}) ?? {};
  return {
    ...resolvedActiveProps,
    ...resolvedInactiveProps,
    ...rest,
    href: disabled ? void 0 : next.maskedLocation ? next.maskedLocation.href : next.href,
    onClick: composeHandlers([onClick, handleClick]),
    onFocus: composeHandlers([onFocus, handleFocus]),
    onMouseEnter: composeHandlers([onMouseEnter, handleEnter]),
    onMouseLeave: composeHandlers([onMouseLeave, handleLeave]),
    onTouchStart: composeHandlers([onTouchStart, handleTouchStart]),
    target,
    style: {
      ...style,
      ...resolvedActiveProps.style,
      ...resolvedInactiveProps.style
    },
    className: [
      className,
      resolvedActiveProps.className,
      resolvedInactiveProps.className
    ].filter(Boolean).join(" ") || void 0,
    ...disabled ? {
      role: "link",
      "aria-disabled": true
    } : void 0,
    ["data-status"]: isActive ? "active" : void 0
  };
}
var Link = React9.forwardRef((props, ref) => {
  const { type, ...linkProps } = useLinkProps(props);
  const children = typeof props.children === "function" ? props.children({
    isActive: linkProps["data-status"] === "active"
  }) : props.children;
  if (type === "external") {
    return (0, import_jsx_runtime6.jsx)("a", { ...linkProps, ref, children });
  }
  return (0, import_jsx_runtime6.jsx)(InternalLink, { ...linkProps, ref, children });
});
var InternalLink = React9.forwardRef((props, ref) => {
  return (0, import_jsx_runtime6.jsx)(
    "a",
    {
      ...{
        ref,
        ...props
      }
    }
  );
});
function isCtrlEvent(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}

// node_modules/@tanstack/react-router/dist/esm/scroll-restoration.js
var React10 = __toESM(require_react(), 1);
var useLayoutEffect4 = typeof window !== "undefined" ? React10.useLayoutEffect : React10.useEffect;
var windowKey = "window";
var delimiter = "___";
var weakScrolledElements = /* @__PURE__ */ new WeakSet();
var sessionsStorage = typeof window !== "undefined" && window.sessionStorage;
var cache = sessionsStorage ? (() => {
  const storageKey = "tsr-scroll-restoration-v2";
  const state = JSON.parse(
    window.sessionStorage.getItem(storageKey) || "null"
  ) || { cached: {}, next: {} };
  return {
    state,
    set: (updater) => {
      cache.state = functionalUpdate(updater, cache.state);
      window.sessionStorage.setItem(storageKey, JSON.stringify(cache.state));
    }
  };
})() : void 0;
var defaultGetKey = (location) => location.state.key;
function useScrollRestoration(options) {
  const router = useRouter();
  useLayoutEffect4(() => {
    const getKey = (options == null ? void 0 : options.getKey) || defaultGetKey;
    const { history } = window;
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
    const onScroll = (event) => {
      if (weakScrolledElements.has(event.target))
        return;
      weakScrolledElements.add(event.target);
      let elementSelector = "";
      if (event.target === document || event.target === window) {
        elementSelector = windowKey;
      } else {
        const attrId = event.target.getAttribute(
          "data-scroll-restoration-id"
        );
        if (attrId) {
          elementSelector = `[data-scroll-restoration-id="${attrId}"]`;
        } else {
          elementSelector = getCssSelector(event.target);
        }
      }
      if (!cache.state.next[elementSelector]) {
        cache.set((c) => ({
          ...c,
          next: {
            ...c.next,
            [elementSelector]: {
              scrollX: NaN,
              scrollY: NaN
            }
          }
        }));
      }
    };
    if (typeof document !== "undefined") {
      document.addEventListener("scroll", onScroll, true);
    }
    const unsubOnBeforeLoad = router.subscribe("onBeforeLoad", (event) => {
      if (event.pathChanged) {
        const restoreKey = getKey(event.fromLocation);
        for (const elementSelector in cache.state.next) {
          const entry = cache.state.next[elementSelector];
          if (elementSelector === windowKey) {
            entry.scrollX = window.scrollX || 0;
            entry.scrollY = window.scrollY || 0;
          } else if (elementSelector) {
            const element = document.querySelector(elementSelector);
            entry.scrollX = (element == null ? void 0 : element.scrollLeft) || 0;
            entry.scrollY = (element == null ? void 0 : element.scrollTop) || 0;
          }
          cache.set((c) => {
            const next = { ...c.next };
            delete next[elementSelector];
            return {
              ...c,
              next,
              cached: {
                ...c.cached,
                [[restoreKey, elementSelector].join(delimiter)]: entry
              }
            };
          });
        }
      }
    });
    const unsubOnResolved = router.subscribe("onResolved", (event) => {
      if (event.pathChanged) {
        if (!router.resetNextScroll) {
          return;
        }
        router.resetNextScroll = true;
        const getKey2 = (options == null ? void 0 : options.getKey) || defaultGetKey;
        const restoreKey = getKey2(event.toLocation);
        let windowRestored = false;
        for (const cacheKey in cache.state.cached) {
          const entry = cache.state.cached[cacheKey];
          const [key, elementSelector] = cacheKey.split(delimiter);
          if (key === restoreKey) {
            if (elementSelector === windowKey) {
              windowRestored = true;
              window.scrollTo(entry.scrollX, entry.scrollY);
            } else if (elementSelector) {
              const element = document.querySelector(elementSelector);
              if (element) {
                element.scrollLeft = entry.scrollX;
                element.scrollTop = entry.scrollY;
              }
            }
          }
        }
        if (!windowRestored) {
          window.scrollTo(0, 0);
        }
        cache.set((c) => ({ ...c, next: {} }));
        weakScrolledElements = /* @__PURE__ */ new WeakSet();
      }
    });
    return () => {
      document.removeEventListener("scroll", onScroll);
      unsubOnBeforeLoad();
      unsubOnResolved();
    };
  }, []);
}
function ScrollRestoration(props) {
  useScrollRestoration(props);
  return null;
}
function useElementScrollRestoration(options) {
  var _a;
  const router = useRouter();
  const getKey = (options == null ? void 0 : options.getKey) || defaultGetKey;
  let elementSelector = "";
  if (options.id) {
    elementSelector = `[data-scroll-restoration-id="${options.id}"]`;
  } else {
    const element = (_a = options.getElement) == null ? void 0 : _a.call(options);
    if (!element) {
      return;
    }
    elementSelector = getCssSelector(element);
  }
  const restoreKey = getKey(router.latestLocation);
  const cacheKey = [restoreKey, elementSelector].join(delimiter);
  return cache.state.cached[cacheKey];
}
function getCssSelector(el) {
  let path = [], parent;
  while (parent = el.parentNode) {
    path.unshift(
      `${el.tagName}:nth-child(${[].indexOf.call(parent.children, el) + 1})`
    );
    el = parent;
  }
  return `${path.join(" > ")}`.toLowerCase();
}

// node_modules/@tanstack/react-router/dist/esm/useBlocker.js
var React11 = __toESM(require_react(), 1);
function useBlocker(blockerFn, condition = true) {
  const { history } = useRouter();
  React11.useEffect(() => {
    if (!condition)
      return;
    return history.block(blockerFn);
  });
}
function Block({ blocker, condition, children }) {
  useBlocker(blocker, condition);
  return children ?? null;
}

// node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var React12 = __toESM(require_react(), 1);
function useNavigate(_defaultOpts) {
  const { navigate } = useRouter();
  const matchPathname2 = useMatch({
    strict: false,
    select: (s) => s.pathname
  });
  const result = ({ from, ...rest }) => {
    return navigate({
      from: (rest == null ? void 0 : rest.to) ? matchPathname2 : void 0,
      ...rest
    });
  };
  return React12.useCallback(result, []);
}
function Navigate(props) {
  const { navigate } = useRouter();
  const match = useMatch({ strict: false });
  React12.useEffect(() => {
    navigate({
      from: props.to ? match.pathname : void 0,
      ...props
    });
  }, []);
  return null;
}

// node_modules/@tanstack/react-router/dist/esm/useRouteContext.js
function useRouteContext(opts) {
  return useMatch({
    ...opts,
    select: (match) => (opts == null ? void 0 : opts.select) ? opts.select(match.context) : match.context
  });
}

// node_modules/@tanstack/react-router/dist/esm/createServerFn.js
var serverFnReturnTypeHeader = "server-fn-return-type";
var serverFnPayloadTypeHeader = "server-fn-payload-type";
function createServerFn(method, fn) {
  const compiledFn = fn;
  invariant(
    compiledFn.url,
    `createServerFn must be called with a function that is marked with the 'use server' pragma.`
  );
  return Object.assign(
    async (payload, opts) => {
      return compiledFn({
        method,
        payload: payload || void 0,
        requestInit: opts == null ? void 0 : opts.requestInit
      });
    },
    {
      url: fn.url
    }
  );
}
function json(payload, opts) {
  return new Response(JSON.stringify(payload), {
    status: (opts == null ? void 0 : opts.status) || 200,
    statusText: (opts == null ? void 0 : opts.statusText) || (opts == null ? void 0 : opts.status) === 200 ? "OK" : "Error",
    headers: {
      "Content-Type": "application/json",
      [serverFnReturnTypeHeader]: "json",
      ...opts == null ? void 0 : opts.headers
    }
  });
}
export {
  Await,
  Block,
  CatchBoundary,
  CatchBoundaryImpl,
  CatchNotFound,
  DefaultGlobalNotFound,
  ErrorComponent,
  FileRoute,
  FileRouteLoader,
  LazyRoute,
  Link,
  Match,
  MatchRoute,
  Matches,
  Navigate,
  NotFoundRoute,
  Outlet,
  PathParamError,
  RootRoute,
  Route,
  RouteApi,
  Router,
  RouterProvider,
  ScrollRestoration,
  SearchParamError,
  cleanPath,
  componentTypes,
  createBrowserHistory,
  createFileRoute,
  createHashHistory,
  createHistory,
  createLazyFileRoute,
  createLazyRoute,
  createMemoryHistory,
  createRootRoute,
  createRootRouteWithContext,
  createRoute,
  createRouteMask,
  createRouter,
  createServerFn,
  decode,
  deepEqual,
  defaultDeserializeError,
  defaultParseSearch,
  defaultSerializeError,
  defaultStringifySearch,
  defer,
  encode,
  escapeJSON,
  functionalUpdate,
  getInitialRouterState,
  getRenderedMatches,
  getRouteApi,
  getRouteMatch,
  getRouterContext,
  interpolatePath,
  invariant,
  isDehydratedDeferred,
  isNotFound,
  isPlainArray,
  isPlainObject,
  isRedirect,
  isServer,
  isServerSideError,
  joinPaths,
  json,
  last,
  lazyFn,
  lazyRouteComponent,
  matchByPath,
  matchContext,
  matchPathname,
  notFound,
  parsePathname,
  parseSearchWith,
  pick,
  redirect,
  removeBasepath,
  replaceEqualDeep,
  resolvePath,
  rootRouteId,
  rootRouteWithContext,
  serverFnPayloadTypeHeader,
  serverFnReturnTypeHeader,
  shallow2 as shallow,
  stringifySearchWith,
  trimPath,
  trimPathLeft,
  trimPathRight,
  useAwaited,
  useBlocker,
  useChildMatches,
  useElementScrollRestoration,
  useLayoutEffect2 as useLayoutEffect,
  useLinkProps,
  useLoaderData,
  useLoaderDeps,
  useMatch,
  useMatchRoute,
  useMatches,
  useNavigate,
  useParams,
  useParentMatches,
  useRouteContext,
  useRouter,
  useRouterState,
  useScrollRestoration,
  useSearch,
  useStableCallback,
  tiny_warning_esm_default as warning
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@tanstack_react-router.js.map
