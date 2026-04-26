"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkersScript = exports.WorkersScriptTailConsumersList = exports.WorkersScriptTailConsumersOutputReference = exports.WorkersScriptPlacementOutputReference = exports.WorkersScriptPlacementTargetList = exports.WorkersScriptPlacementTargetOutputReference = exports.WorkersScriptObservabilityOutputReference = exports.WorkersScriptObservabilityTracesOutputReference = exports.WorkersScriptObservabilityLogsOutputReference = exports.WorkersScriptNamedHandlersList = exports.WorkersScriptNamedHandlersOutputReference = exports.WorkersScriptMigrationsOutputReference = exports.WorkersScriptMigrationsTransferredClassesList = exports.WorkersScriptMigrationsTransferredClassesOutputReference = exports.WorkersScriptMigrationsStepsList = exports.WorkersScriptMigrationsStepsOutputReference = exports.WorkersScriptMigrationsStepsTransferredClassesList = exports.WorkersScriptMigrationsStepsTransferredClassesOutputReference = exports.WorkersScriptMigrationsStepsRenamedClassesList = exports.WorkersScriptMigrationsStepsRenamedClassesOutputReference = exports.WorkersScriptMigrationsRenamedClassesList = exports.WorkersScriptMigrationsRenamedClassesOutputReference = exports.WorkersScriptLimitsOutputReference = exports.WorkersScriptBindingsList = exports.WorkersScriptBindingsOutputReference = exports.WorkersScriptBindingsSimpleOutputReference = exports.WorkersScriptBindingsOutboundOutputReference = exports.WorkersScriptBindingsOutboundWorkerOutputReference = exports.WorkersScriptAssetsOutputReference = exports.WorkersScriptAssetsConfigOutputReference = exports.WorkersScriptAnnotationsOutputReference = void 0;
exports.workersScriptAnnotationsToTerraform = workersScriptAnnotationsToTerraform;
exports.workersScriptAnnotationsToHclTerraform = workersScriptAnnotationsToHclTerraform;
exports.workersScriptAssetsConfigToTerraform = workersScriptAssetsConfigToTerraform;
exports.workersScriptAssetsConfigToHclTerraform = workersScriptAssetsConfigToHclTerraform;
exports.workersScriptAssetsToTerraform = workersScriptAssetsToTerraform;
exports.workersScriptAssetsToHclTerraform = workersScriptAssetsToHclTerraform;
exports.workersScriptBindingsOutboundWorkerToTerraform = workersScriptBindingsOutboundWorkerToTerraform;
exports.workersScriptBindingsOutboundWorkerToHclTerraform = workersScriptBindingsOutboundWorkerToHclTerraform;
exports.workersScriptBindingsOutboundToTerraform = workersScriptBindingsOutboundToTerraform;
exports.workersScriptBindingsOutboundToHclTerraform = workersScriptBindingsOutboundToHclTerraform;
exports.workersScriptBindingsSimpleToTerraform = workersScriptBindingsSimpleToTerraform;
exports.workersScriptBindingsSimpleToHclTerraform = workersScriptBindingsSimpleToHclTerraform;
exports.workersScriptBindingsToTerraform = workersScriptBindingsToTerraform;
exports.workersScriptBindingsToHclTerraform = workersScriptBindingsToHclTerraform;
exports.workersScriptLimitsToTerraform = workersScriptLimitsToTerraform;
exports.workersScriptLimitsToHclTerraform = workersScriptLimitsToHclTerraform;
exports.workersScriptMigrationsRenamedClassesToTerraform = workersScriptMigrationsRenamedClassesToTerraform;
exports.workersScriptMigrationsRenamedClassesToHclTerraform = workersScriptMigrationsRenamedClassesToHclTerraform;
exports.workersScriptMigrationsStepsRenamedClassesToTerraform = workersScriptMigrationsStepsRenamedClassesToTerraform;
exports.workersScriptMigrationsStepsRenamedClassesToHclTerraform = workersScriptMigrationsStepsRenamedClassesToHclTerraform;
exports.workersScriptMigrationsStepsTransferredClassesToTerraform = workersScriptMigrationsStepsTransferredClassesToTerraform;
exports.workersScriptMigrationsStepsTransferredClassesToHclTerraform = workersScriptMigrationsStepsTransferredClassesToHclTerraform;
exports.workersScriptMigrationsStepsToTerraform = workersScriptMigrationsStepsToTerraform;
exports.workersScriptMigrationsStepsToHclTerraform = workersScriptMigrationsStepsToHclTerraform;
exports.workersScriptMigrationsTransferredClassesToTerraform = workersScriptMigrationsTransferredClassesToTerraform;
exports.workersScriptMigrationsTransferredClassesToHclTerraform = workersScriptMigrationsTransferredClassesToHclTerraform;
exports.workersScriptMigrationsToTerraform = workersScriptMigrationsToTerraform;
exports.workersScriptMigrationsToHclTerraform = workersScriptMigrationsToHclTerraform;
exports.workersScriptNamedHandlersToTerraform = workersScriptNamedHandlersToTerraform;
exports.workersScriptNamedHandlersToHclTerraform = workersScriptNamedHandlersToHclTerraform;
exports.workersScriptObservabilityLogsToTerraform = workersScriptObservabilityLogsToTerraform;
exports.workersScriptObservabilityLogsToHclTerraform = workersScriptObservabilityLogsToHclTerraform;
exports.workersScriptObservabilityTracesToTerraform = workersScriptObservabilityTracesToTerraform;
exports.workersScriptObservabilityTracesToHclTerraform = workersScriptObservabilityTracesToHclTerraform;
exports.workersScriptObservabilityToTerraform = workersScriptObservabilityToTerraform;
exports.workersScriptObservabilityToHclTerraform = workersScriptObservabilityToHclTerraform;
exports.workersScriptPlacementTargetToTerraform = workersScriptPlacementTargetToTerraform;
exports.workersScriptPlacementTargetToHclTerraform = workersScriptPlacementTargetToHclTerraform;
exports.workersScriptPlacementToTerraform = workersScriptPlacementToTerraform;
exports.workersScriptPlacementToHclTerraform = workersScriptPlacementToHclTerraform;
exports.workersScriptTailConsumersToTerraform = workersScriptTailConsumersToTerraform;
exports.workersScriptTailConsumersToHclTerraform = workersScriptTailConsumersToHclTerraform;
var cdktf = require("cdktf");
function workersScriptAnnotationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        workers_message: cdktf.stringToTerraform(struct.workersMessage),
        workers_tag: cdktf.stringToTerraform(struct.workersTag),
    };
}
function workersScriptAnnotationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        workers_message: {
            value: cdktf.stringToHclTerraform(struct.workersMessage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workers_tag: {
            value: cdktf.stringToHclTerraform(struct.workersTag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptAnnotationsOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptAnnotationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptAnnotationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptAnnotationsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._workersMessage !== undefined) {
                hasAnyValues = true;
                internalValueResult.workersMessage = this._workersMessage;
            }
            if (this._workersTag !== undefined) {
                hasAnyValues = true;
                internalValueResult.workersTag = this._workersTag;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._workersMessage = undefined;
                this._workersTag = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._workersMessage = value.workersMessage;
                this._workersTag = value.workersTag;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAnnotationsOutputReference.prototype, "workersMessage", {
        get: function () {
            return this.getStringAttribute('workers_message');
        },
        set: function (value) {
            this._workersMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptAnnotationsOutputReference.prototype.resetWorkersMessage = function () {
        this._workersMessage = undefined;
    };
    Object.defineProperty(WorkersScriptAnnotationsOutputReference.prototype, "workersMessageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workersMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAnnotationsOutputReference.prototype, "workersTag", {
        get: function () {
            return this.getStringAttribute('workers_tag');
        },
        set: function (value) {
            this._workersTag = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptAnnotationsOutputReference.prototype.resetWorkersTag = function () {
        this._workersTag = undefined;
    };
    Object.defineProperty(WorkersScriptAnnotationsOutputReference.prototype, "workersTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workersTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAnnotationsOutputReference.prototype, "workersTriggeredBy", {
        // workers_triggered_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_triggered_by');
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptAnnotationsOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptAnnotationsOutputReference = WorkersScriptAnnotationsOutputReference;
function workersScriptAssetsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        headers: cdktf.stringToTerraform(struct.headers),
        html_handling: cdktf.stringToTerraform(struct.htmlHandling),
        not_found_handling: cdktf.stringToTerraform(struct.notFoundHandling),
        redirects: cdktf.stringToTerraform(struct.redirects),
        run_worker_first: cdktf.hashMapper(cdktf.anyToTerraform)(struct.runWorkerFirst),
        serve_directly: cdktf.booleanToTerraform(struct.serveDirectly),
    };
}
function workersScriptAssetsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        headers: {
            value: cdktf.stringToHclTerraform(struct.headers),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        html_handling: {
            value: cdktf.stringToHclTerraform(struct.htmlHandling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        not_found_handling: {
            value: cdktf.stringToHclTerraform(struct.notFoundHandling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirects: {
            value: cdktf.stringToHclTerraform(struct.redirects),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        run_worker_first: {
            value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct.runWorkerFirst),
            isBlock: false,
            type: "map",
            storageClassType: "anyMap",
        },
        serve_directly: {
            value: cdktf.booleanToHclTerraform(struct.serveDirectly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptAssetsConfigOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptAssetsConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptAssetsConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._headers !== undefined) {
                hasAnyValues = true;
                internalValueResult.headers = this._headers;
            }
            if (this._htmlHandling !== undefined) {
                hasAnyValues = true;
                internalValueResult.htmlHandling = this._htmlHandling;
            }
            if (this._notFoundHandling !== undefined) {
                hasAnyValues = true;
                internalValueResult.notFoundHandling = this._notFoundHandling;
            }
            if (this._redirects !== undefined) {
                hasAnyValues = true;
                internalValueResult.redirects = this._redirects;
            }
            if (this._runWorkerFirst !== undefined) {
                hasAnyValues = true;
                internalValueResult.runWorkerFirst = this._runWorkerFirst;
            }
            if (this._serveDirectly !== undefined) {
                hasAnyValues = true;
                internalValueResult.serveDirectly = this._serveDirectly;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._headers = undefined;
                this._htmlHandling = undefined;
                this._notFoundHandling = undefined;
                this._redirects = undefined;
                this._runWorkerFirst = undefined;
                this._serveDirectly = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._headers = value.headers;
                this._htmlHandling = value.htmlHandling;
                this._notFoundHandling = value.notFoundHandling;
                this._redirects = value.redirects;
                this._runWorkerFirst = value.runWorkerFirst;
                this._serveDirectly = value.serveDirectly;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "headers", {
        get: function () {
            return this.getStringAttribute('headers');
        },
        set: function (value) {
            this._headers = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptAssetsConfigOutputReference.prototype.resetHeaders = function () {
        this._headers = undefined;
    };
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "headersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "htmlHandling", {
        get: function () {
            return this.getStringAttribute('html_handling');
        },
        set: function (value) {
            this._htmlHandling = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptAssetsConfigOutputReference.prototype.resetHtmlHandling = function () {
        this._htmlHandling = undefined;
    };
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "htmlHandlingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._htmlHandling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "notFoundHandling", {
        get: function () {
            return this.getStringAttribute('not_found_handling');
        },
        set: function (value) {
            this._notFoundHandling = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptAssetsConfigOutputReference.prototype.resetNotFoundHandling = function () {
        this._notFoundHandling = undefined;
    };
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "notFoundHandlingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notFoundHandling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "redirects", {
        get: function () {
            return this.getStringAttribute('redirects');
        },
        set: function (value) {
            this._redirects = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptAssetsConfigOutputReference.prototype.resetRedirects = function () {
        this._redirects = undefined;
    };
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "redirectsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._redirects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "runWorkerFirst", {
        get: function () {
            return this.getAnyMapAttribute('run_worker_first');
        },
        set: function (value) {
            this._runWorkerFirst = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptAssetsConfigOutputReference.prototype.resetRunWorkerFirst = function () {
        this._runWorkerFirst = undefined;
    };
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "runWorkerFirstInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runWorkerFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "serveDirectly", {
        get: function () {
            return this.getBooleanAttribute('serve_directly');
        },
        set: function (value) {
            this._serveDirectly = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptAssetsConfigOutputReference.prototype.resetServeDirectly = function () {
        this._serveDirectly = undefined;
    };
    Object.defineProperty(WorkersScriptAssetsConfigOutputReference.prototype, "serveDirectlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serveDirectly;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptAssetsConfigOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptAssetsConfigOutputReference = WorkersScriptAssetsConfigOutputReference;
function workersScriptAssetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        config: workersScriptAssetsConfigToTerraform(struct.config),
        directory: cdktf.stringToTerraform(struct.directory),
        jwt: cdktf.stringToTerraform(struct.jwt),
    };
}
function workersScriptAssetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        config: {
            value: workersScriptAssetsConfigToHclTerraform(struct.config),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptAssetsConfig",
        },
        directory: {
            value: cdktf.stringToHclTerraform(struct.directory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jwt: {
            value: cdktf.stringToHclTerraform(struct.jwt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptAssetsOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptAssetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptAssetsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: false, optional: true, required: false
        _this._config = new WorkersScriptAssetsConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(WorkersScriptAssetsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._config) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.config = (_b = this._config) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._directory !== undefined) {
                hasAnyValues = true;
                internalValueResult.directory = this._directory;
            }
            if (this._jwt !== undefined) {
                hasAnyValues = true;
                internalValueResult.jwt = this._jwt;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._config.internalValue = undefined;
                this._directory = undefined;
                this._jwt = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._config.internalValue = value.config;
                this._directory = value.directory;
                this._jwt = value.jwt;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAssetsOutputReference.prototype, "assetManifestSha256", {
        // asset_manifest_sha256 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('asset_manifest_sha256');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAssetsOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptAssetsOutputReference.prototype.putConfig = function (value) {
        this._config.internalValue = value;
    };
    WorkersScriptAssetsOutputReference.prototype.resetConfig = function () {
        this._config.internalValue = undefined;
    };
    Object.defineProperty(WorkersScriptAssetsOutputReference.prototype, "configInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._config.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAssetsOutputReference.prototype, "directory", {
        get: function () {
            return this.getStringAttribute('directory');
        },
        set: function (value) {
            this._directory = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptAssetsOutputReference.prototype.resetDirectory = function () {
        this._directory = undefined;
    };
    Object.defineProperty(WorkersScriptAssetsOutputReference.prototype, "directoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptAssetsOutputReference.prototype, "jwt", {
        get: function () {
            return this.getStringAttribute('jwt');
        },
        set: function (value) {
            this._jwt = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptAssetsOutputReference.prototype.resetJwt = function () {
        this._jwt = undefined;
    };
    Object.defineProperty(WorkersScriptAssetsOutputReference.prototype, "jwtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jwt;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptAssetsOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptAssetsOutputReference = WorkersScriptAssetsOutputReference;
function workersScriptBindingsOutboundWorkerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        environment: cdktf.stringToTerraform(struct.environment),
        service: cdktf.stringToTerraform(struct.service),
    };
}
function workersScriptBindingsOutboundWorkerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptBindingsOutboundWorkerOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptBindingsOutboundWorkerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptBindingsOutboundWorkerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptBindingsOutboundWorkerOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._environment !== undefined) {
                hasAnyValues = true;
                internalValueResult.environment = this._environment;
            }
            if (this._service !== undefined) {
                hasAnyValues = true;
                internalValueResult.service = this._service;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._environment = undefined;
                this._service = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._environment = value.environment;
                this._service = value.service;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutboundWorkerOutputReference.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutboundWorkerOutputReference.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutboundWorkerOutputReference.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutboundWorkerOutputReference.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutboundWorkerOutputReference.prototype.resetService = function () {
        this._service = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutboundWorkerOutputReference.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptBindingsOutboundWorkerOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptBindingsOutboundWorkerOutputReference = WorkersScriptBindingsOutboundWorkerOutputReference;
function workersScriptBindingsOutboundToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.params),
        worker: workersScriptBindingsOutboundWorkerToTerraform(struct.worker),
    };
}
function workersScriptBindingsOutboundToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        params: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.params),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        worker: {
            value: workersScriptBindingsOutboundWorkerToHclTerraform(struct.worker),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptBindingsOutboundWorker",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptBindingsOutboundOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptBindingsOutboundOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptBindingsOutboundOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // worker - computed: true, optional: true, required: false
        _this._worker = new WorkersScriptBindingsOutboundWorkerOutputReference(_this, "worker");
        return _this;
    }
    Object.defineProperty(WorkersScriptBindingsOutboundOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._params !== undefined) {
                hasAnyValues = true;
                internalValueResult.params = this._params;
            }
            if (((_a = this._worker) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.worker = (_b = this._worker) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._params = undefined;
                this._worker.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._params = value.params;
                this._worker.internalValue = value.worker;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutboundOutputReference.prototype, "params", {
        get: function () {
            return this.getListAttribute('params');
        },
        set: function (value) {
            this._params = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutboundOutputReference.prototype.resetParams = function () {
        this._params = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutboundOutputReference.prototype, "paramsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._params;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutboundOutputReference.prototype, "worker", {
        get: function () {
            return this._worker;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutboundOutputReference.prototype.putWorker = function (value) {
        this._worker.internalValue = value;
    };
    WorkersScriptBindingsOutboundOutputReference.prototype.resetWorker = function () {
        this._worker.internalValue = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutboundOutputReference.prototype, "workerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._worker.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptBindingsOutboundOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptBindingsOutboundOutputReference = WorkersScriptBindingsOutboundOutputReference;
function workersScriptBindingsSimpleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        limit: cdktf.numberToTerraform(struct.limit),
        period: cdktf.numberToTerraform(struct.period),
    };
}
function workersScriptBindingsSimpleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        limit: {
            value: cdktf.numberToHclTerraform(struct.limit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        period: {
            value: cdktf.numberToHclTerraform(struct.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptBindingsSimpleOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptBindingsSimpleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptBindingsSimpleOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptBindingsSimpleOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._limit !== undefined) {
                hasAnyValues = true;
                internalValueResult.limit = this._limit;
            }
            if (this._period !== undefined) {
                hasAnyValues = true;
                internalValueResult.period = this._period;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._limit = undefined;
                this._period = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._limit = value.limit;
                this._period = value.period;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsSimpleOutputReference.prototype, "limit", {
        get: function () {
            return this.getNumberAttribute('limit');
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsSimpleOutputReference.prototype, "limitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsSimpleOutputReference.prototype, "period", {
        get: function () {
            return this.getNumberAttribute('period');
        },
        set: function (value) {
            this._period = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsSimpleOutputReference.prototype, "periodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._period;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptBindingsSimpleOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptBindingsSimpleOutputReference = WorkersScriptBindingsSimpleOutputReference;
function workersScriptBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        algorithm: cdktf.stringToTerraform(struct.algorithm),
        allowed_destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedDestinationAddresses),
        allowed_sender_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedSenderAddresses),
        app_id: cdktf.stringToTerraform(struct.appId),
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        certificate_id: cdktf.stringToTerraform(struct.certificateId),
        class_name: cdktf.stringToTerraform(struct.className),
        database_id: cdktf.stringToTerraform(struct.databaseId),
        dataset: cdktf.stringToTerraform(struct.dataset),
        destination_address: cdktf.stringToTerraform(struct.destinationAddress),
        dispatch_namespace: cdktf.stringToTerraform(struct.dispatchNamespace),
        entrypoint: cdktf.stringToTerraform(struct.entrypoint),
        environment: cdktf.stringToTerraform(struct.environment),
        format: cdktf.stringToTerraform(struct.format),
        id: cdktf.stringToTerraform(struct.id),
        index_name: cdktf.stringToTerraform(struct.indexName),
        instance_name: cdktf.stringToTerraform(struct.instanceName),
        json: cdktf.stringToTerraform(struct.json),
        jurisdiction: cdktf.stringToTerraform(struct.jurisdiction),
        key_base64: cdktf.stringToTerraform(struct.keyBase64),
        key_jwk: cdktf.stringToTerraform(struct.keyJwk),
        name: cdktf.stringToTerraform(struct.name),
        namespace: cdktf.stringToTerraform(struct.namespace),
        namespace_id: cdktf.stringToTerraform(struct.namespaceId),
        network_id: cdktf.stringToTerraform(struct.networkId),
        old_name: cdktf.stringToTerraform(struct.oldName),
        outbound: workersScriptBindingsOutboundToTerraform(struct.outbound),
        part: cdktf.stringToTerraform(struct.part),
        pipeline: cdktf.stringToTerraform(struct.pipeline),
        queue_name: cdktf.stringToTerraform(struct.queueName),
        script_name: cdktf.stringToTerraform(struct.scriptName),
        secret_name: cdktf.stringToTerraform(struct.secretName),
        service: cdktf.stringToTerraform(struct.service),
        service_id: cdktf.stringToTerraform(struct.serviceId),
        simple: workersScriptBindingsSimpleToTerraform(struct.simple),
        store_id: cdktf.stringToTerraform(struct.storeId),
        text: cdktf.stringToTerraform(struct.text),
        tunnel_id: cdktf.stringToTerraform(struct.tunnelId),
        type: cdktf.stringToTerraform(struct.type),
        usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.usages),
        version_id: cdktf.stringToTerraform(struct.versionId),
        workflow_name: cdktf.stringToTerraform(struct.workflowName),
    };
}
function workersScriptBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        algorithm: {
            value: cdktf.stringToHclTerraform(struct.algorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        allowed_destination_addresses: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedDestinationAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_sender_addresses: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedSenderAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        app_id: {
            value: cdktf.stringToHclTerraform(struct.appId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_name: {
            value: cdktf.stringToHclTerraform(struct.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        certificate_id: {
            value: cdktf.stringToHclTerraform(struct.certificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        class_name: {
            value: cdktf.stringToHclTerraform(struct.className),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_id: {
            value: cdktf.stringToHclTerraform(struct.databaseId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dataset: {
            value: cdktf.stringToHclTerraform(struct.dataset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_address: {
            value: cdktf.stringToHclTerraform(struct.destinationAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dispatch_namespace: {
            value: cdktf.stringToHclTerraform(struct.dispatchNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entrypoint: {
            value: cdktf.stringToHclTerraform(struct.entrypoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format: {
            value: cdktf.stringToHclTerraform(struct.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        index_name: {
            value: cdktf.stringToHclTerraform(struct.indexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_name: {
            value: cdktf.stringToHclTerraform(struct.instanceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        json: {
            value: cdktf.stringToHclTerraform(struct.json),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.jurisdiction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_base64: {
            value: cdktf.stringToHclTerraform(struct.keyBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_jwk: {
            value: cdktf.stringToHclTerraform(struct.keyJwk),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace_id: {
            value: cdktf.stringToHclTerraform(struct.namespaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_id: {
            value: cdktf.stringToHclTerraform(struct.networkId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        old_name: {
            value: cdktf.stringToHclTerraform(struct.oldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        outbound: {
            value: workersScriptBindingsOutboundToHclTerraform(struct.outbound),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptBindingsOutbound",
        },
        part: {
            value: cdktf.stringToHclTerraform(struct.part),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pipeline: {
            value: cdktf.stringToHclTerraform(struct.pipeline),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        queue_name: {
            value: cdktf.stringToHclTerraform(struct.queueName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        script_name: {
            value: cdktf.stringToHclTerraform(struct.scriptName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_name: {
            value: cdktf.stringToHclTerraform(struct.secretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_id: {
            value: cdktf.stringToHclTerraform(struct.serviceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        simple: {
            value: workersScriptBindingsSimpleToHclTerraform(struct.simple),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptBindingsSimple",
        },
        store_id: {
            value: cdktf.stringToHclTerraform(struct.storeId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text: {
            value: cdktf.stringToHclTerraform(struct.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tunnel_id: {
            value: cdktf.stringToHclTerraform(struct.tunnelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        usages: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.usages),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        version_id: {
            value: cdktf.stringToHclTerraform(struct.versionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workflow_name: {
            value: cdktf.stringToHclTerraform(struct.workflowName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptBindingsOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptBindingsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // outbound - computed: true, optional: true, required: false
        _this._outbound = new WorkersScriptBindingsOutboundOutputReference(_this, "outbound");
        // simple - computed: true, optional: true, required: false
        _this._simple = new WorkersScriptBindingsSimpleOutputReference(_this, "simple");
        return _this;
    }
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._algorithm !== undefined) {
                hasAnyValues = true;
                internalValueResult.algorithm = this._algorithm;
            }
            if (this._allowedDestinationAddresses !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowedDestinationAddresses = this._allowedDestinationAddresses;
            }
            if (this._allowedSenderAddresses !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowedSenderAddresses = this._allowedSenderAddresses;
            }
            if (this._appId !== undefined) {
                hasAnyValues = true;
                internalValueResult.appId = this._appId;
            }
            if (this._bucketName !== undefined) {
                hasAnyValues = true;
                internalValueResult.bucketName = this._bucketName;
            }
            if (this._certificateId !== undefined) {
                hasAnyValues = true;
                internalValueResult.certificateId = this._certificateId;
            }
            if (this._className !== undefined) {
                hasAnyValues = true;
                internalValueResult.className = this._className;
            }
            if (this._databaseId !== undefined) {
                hasAnyValues = true;
                internalValueResult.databaseId = this._databaseId;
            }
            if (this._dataset !== undefined) {
                hasAnyValues = true;
                internalValueResult.dataset = this._dataset;
            }
            if (this._destinationAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.destinationAddress = this._destinationAddress;
            }
            if (this._dispatchNamespace !== undefined) {
                hasAnyValues = true;
                internalValueResult.dispatchNamespace = this._dispatchNamespace;
            }
            if (this._entrypoint !== undefined) {
                hasAnyValues = true;
                internalValueResult.entrypoint = this._entrypoint;
            }
            if (this._environment !== undefined) {
                hasAnyValues = true;
                internalValueResult.environment = this._environment;
            }
            if (this._format !== undefined) {
                hasAnyValues = true;
                internalValueResult.format = this._format;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._indexName !== undefined) {
                hasAnyValues = true;
                internalValueResult.indexName = this._indexName;
            }
            if (this._instanceName !== undefined) {
                hasAnyValues = true;
                internalValueResult.instanceName = this._instanceName;
            }
            if (this._json !== undefined) {
                hasAnyValues = true;
                internalValueResult.json = this._json;
            }
            if (this._jurisdiction !== undefined) {
                hasAnyValues = true;
                internalValueResult.jurisdiction = this._jurisdiction;
            }
            if (this._keyBase64 !== undefined) {
                hasAnyValues = true;
                internalValueResult.keyBase64 = this._keyBase64;
            }
            if (this._keyJwk !== undefined) {
                hasAnyValues = true;
                internalValueResult.keyJwk = this._keyJwk;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._namespace !== undefined) {
                hasAnyValues = true;
                internalValueResult.namespace = this._namespace;
            }
            if (this._namespaceId !== undefined) {
                hasAnyValues = true;
                internalValueResult.namespaceId = this._namespaceId;
            }
            if (this._networkId !== undefined) {
                hasAnyValues = true;
                internalValueResult.networkId = this._networkId;
            }
            if (this._oldName !== undefined) {
                hasAnyValues = true;
                internalValueResult.oldName = this._oldName;
            }
            if (((_a = this._outbound) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.outbound = (_b = this._outbound) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._part !== undefined) {
                hasAnyValues = true;
                internalValueResult.part = this._part;
            }
            if (this._pipeline !== undefined) {
                hasAnyValues = true;
                internalValueResult.pipeline = this._pipeline;
            }
            if (this._queueName !== undefined) {
                hasAnyValues = true;
                internalValueResult.queueName = this._queueName;
            }
            if (this._scriptName !== undefined) {
                hasAnyValues = true;
                internalValueResult.scriptName = this._scriptName;
            }
            if (this._secretName !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretName = this._secretName;
            }
            if (this._service !== undefined) {
                hasAnyValues = true;
                internalValueResult.service = this._service;
            }
            if (this._serviceId !== undefined) {
                hasAnyValues = true;
                internalValueResult.serviceId = this._serviceId;
            }
            if (((_c = this._simple) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.simple = (_d = this._simple) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._storeId !== undefined) {
                hasAnyValues = true;
                internalValueResult.storeId = this._storeId;
            }
            if (this._text !== undefined) {
                hasAnyValues = true;
                internalValueResult.text = this._text;
            }
            if (this._tunnelId !== undefined) {
                hasAnyValues = true;
                internalValueResult.tunnelId = this._tunnelId;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (this._usages !== undefined) {
                hasAnyValues = true;
                internalValueResult.usages = this._usages;
            }
            if (this._versionId !== undefined) {
                hasAnyValues = true;
                internalValueResult.versionId = this._versionId;
            }
            if (this._workflowName !== undefined) {
                hasAnyValues = true;
                internalValueResult.workflowName = this._workflowName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._algorithm = undefined;
                this._allowedDestinationAddresses = undefined;
                this._allowedSenderAddresses = undefined;
                this._appId = undefined;
                this._bucketName = undefined;
                this._certificateId = undefined;
                this._className = undefined;
                this._databaseId = undefined;
                this._dataset = undefined;
                this._destinationAddress = undefined;
                this._dispatchNamespace = undefined;
                this._entrypoint = undefined;
                this._environment = undefined;
                this._format = undefined;
                this._id = undefined;
                this._indexName = undefined;
                this._instanceName = undefined;
                this._json = undefined;
                this._jurisdiction = undefined;
                this._keyBase64 = undefined;
                this._keyJwk = undefined;
                this._name = undefined;
                this._namespace = undefined;
                this._namespaceId = undefined;
                this._networkId = undefined;
                this._oldName = undefined;
                this._outbound.internalValue = undefined;
                this._part = undefined;
                this._pipeline = undefined;
                this._queueName = undefined;
                this._scriptName = undefined;
                this._secretName = undefined;
                this._service = undefined;
                this._serviceId = undefined;
                this._simple.internalValue = undefined;
                this._storeId = undefined;
                this._text = undefined;
                this._tunnelId = undefined;
                this._type = undefined;
                this._usages = undefined;
                this._versionId = undefined;
                this._workflowName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._algorithm = value.algorithm;
                this._allowedDestinationAddresses = value.allowedDestinationAddresses;
                this._allowedSenderAddresses = value.allowedSenderAddresses;
                this._appId = value.appId;
                this._bucketName = value.bucketName;
                this._certificateId = value.certificateId;
                this._className = value.className;
                this._databaseId = value.databaseId;
                this._dataset = value.dataset;
                this._destinationAddress = value.destinationAddress;
                this._dispatchNamespace = value.dispatchNamespace;
                this._entrypoint = value.entrypoint;
                this._environment = value.environment;
                this._format = value.format;
                this._id = value.id;
                this._indexName = value.indexName;
                this._instanceName = value.instanceName;
                this._json = value.json;
                this._jurisdiction = value.jurisdiction;
                this._keyBase64 = value.keyBase64;
                this._keyJwk = value.keyJwk;
                this._name = value.name;
                this._namespace = value.namespace;
                this._namespaceId = value.namespaceId;
                this._networkId = value.networkId;
                this._oldName = value.oldName;
                this._outbound.internalValue = value.outbound;
                this._part = value.part;
                this._pipeline = value.pipeline;
                this._queueName = value.queueName;
                this._scriptName = value.scriptName;
                this._secretName = value.secretName;
                this._service = value.service;
                this._serviceId = value.serviceId;
                this._simple.internalValue = value.simple;
                this._storeId = value.storeId;
                this._text = value.text;
                this._tunnelId = value.tunnelId;
                this._type = value.type;
                this._usages = value.usages;
                this._versionId = value.versionId;
                this._workflowName = value.workflowName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "algorithm", {
        get: function () {
            return this.getStringAttribute('algorithm');
        },
        set: function (value) {
            this._algorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetAlgorithm = function () {
        this._algorithm = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "algorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._algorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "allowedDestinationAddresses", {
        get: function () {
            return this.getListAttribute('allowed_destination_addresses');
        },
        set: function (value) {
            this._allowedDestinationAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetAllowedDestinationAddresses = function () {
        this._allowedDestinationAddresses = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "allowedDestinationAddressesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedDestinationAddresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "allowedSenderAddresses", {
        get: function () {
            return this.getListAttribute('allowed_sender_addresses');
        },
        set: function (value) {
            this._allowedSenderAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetAllowedSenderAddresses = function () {
        this._allowedSenderAddresses = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "allowedSenderAddressesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedSenderAddresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "appId", {
        get: function () {
            return this.getStringAttribute('app_id');
        },
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetAppId = function () {
        this._appId = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "appIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetBucketName = function () {
        this._bucketName = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "certificateId", {
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        set: function (value) {
            this._certificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetCertificateId = function () {
        this._certificateId = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "certificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "className", {
        get: function () {
            return this.getStringAttribute('class_name');
        },
        set: function (value) {
            this._className = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetClassName = function () {
        this._className = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "classNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._className;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "databaseId", {
        get: function () {
            return this.getStringAttribute('database_id');
        },
        set: function (value) {
            this._databaseId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetDatabaseId = function () {
        this._databaseId = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "databaseIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "dataset", {
        get: function () {
            return this.getStringAttribute('dataset');
        },
        set: function (value) {
            this._dataset = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetDataset = function () {
        this._dataset = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "datasetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "destinationAddress", {
        get: function () {
            return this.getStringAttribute('destination_address');
        },
        set: function (value) {
            this._destinationAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetDestinationAddress = function () {
        this._destinationAddress = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "destinationAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "dispatchNamespace", {
        get: function () {
            return this.getStringAttribute('dispatch_namespace');
        },
        set: function (value) {
            this._dispatchNamespace = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetDispatchNamespace = function () {
        this._dispatchNamespace = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "dispatchNamespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dispatchNamespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "entrypoint", {
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        set: function (value) {
            this._entrypoint = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetEntrypoint = function () {
        this._entrypoint = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "entrypointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entrypoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "format", {
        get: function () {
            return this.getStringAttribute('format');
        },
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetFormat = function () {
        this._format = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "formatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "indexName", {
        get: function () {
            return this.getStringAttribute('index_name');
        },
        set: function (value) {
            this._indexName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetIndexName = function () {
        this._indexName = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "indexNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._indexName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "instanceName", {
        get: function () {
            return this.getStringAttribute('instance_name');
        },
        set: function (value) {
            this._instanceName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetInstanceName = function () {
        this._instanceName = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "instanceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "json", {
        get: function () {
            return this.getStringAttribute('json');
        },
        set: function (value) {
            this._json = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetJson = function () {
        this._json = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "jsonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._json;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "keyBase64", {
        get: function () {
            return this.getStringAttribute('key_base64');
        },
        set: function (value) {
            this._keyBase64 = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetKeyBase64 = function () {
        this._keyBase64 = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "keyBase64Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyBase64;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "keyJwk", {
        get: function () {
            return this.getStringAttribute('key_jwk');
        },
        set: function (value) {
            this._keyJwk = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetKeyJwk = function () {
        this._keyJwk = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "keyJwkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyJwk;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "namespace", {
        get: function () {
            return this.getStringAttribute('namespace');
        },
        set: function (value) {
            this._namespace = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetNamespace = function () {
        this._namespace = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "namespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "namespaceId", {
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        set: function (value) {
            this._namespaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetNamespaceId = function () {
        this._namespaceId = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "namespaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "networkId", {
        get: function () {
            return this.getStringAttribute('network_id');
        },
        set: function (value) {
            this._networkId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetNetworkId = function () {
        this._networkId = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "networkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "oldName", {
        get: function () {
            return this.getStringAttribute('old_name');
        },
        set: function (value) {
            this._oldName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetOldName = function () {
        this._oldName = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "oldNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oldName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "outbound", {
        get: function () {
            return this._outbound;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.putOutbound = function (value) {
        this._outbound.internalValue = value;
    };
    WorkersScriptBindingsOutputReference.prototype.resetOutbound = function () {
        this._outbound.internalValue = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "outboundInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outbound.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "part", {
        get: function () {
            return this.getStringAttribute('part');
        },
        set: function (value) {
            this._part = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetPart = function () {
        this._part = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "partInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._part;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "pipeline", {
        get: function () {
            return this.getStringAttribute('pipeline');
        },
        set: function (value) {
            this._pipeline = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetPipeline = function () {
        this._pipeline = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "pipelineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pipeline;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "queueName", {
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        set: function (value) {
            this._queueName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetQueueName = function () {
        this._queueName = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "queueNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "scriptName", {
        get: function () {
            return this.getStringAttribute('script_name');
        },
        set: function (value) {
            this._scriptName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetScriptName = function () {
        this._scriptName = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "scriptNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scriptName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "secretName", {
        get: function () {
            return this.getStringAttribute('secret_name');
        },
        set: function (value) {
            this._secretName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetSecretName = function () {
        this._secretName = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "secretNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetService = function () {
        this._service = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "serviceId", {
        get: function () {
            return this.getStringAttribute('service_id');
        },
        set: function (value) {
            this._serviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetServiceId = function () {
        this._serviceId = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "serviceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "simple", {
        get: function () {
            return this._simple;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.putSimple = function (value) {
        this._simple.internalValue = value;
    };
    WorkersScriptBindingsOutputReference.prototype.resetSimple = function () {
        this._simple.internalValue = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "simpleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._simple.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "storeId", {
        get: function () {
            return this.getStringAttribute('store_id');
        },
        set: function (value) {
            this._storeId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetStoreId = function () {
        this._storeId = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "storeIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storeId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "text", {
        get: function () {
            return this.getStringAttribute('text');
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetText = function () {
        this._text = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "textInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetTunnelId = function () {
        this._tunnelId = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "usages", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('usages'));
        },
        set: function (value) {
            this._usages = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetUsages = function () {
        this._usages = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "usagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "versionId", {
        get: function () {
            return this.getStringAttribute('version_id');
        },
        set: function (value) {
            this._versionId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetVersionId = function () {
        this._versionId = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "versionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "workflowName", {
        get: function () {
            return this.getStringAttribute('workflow_name');
        },
        set: function (value) {
            this._workflowName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptBindingsOutputReference.prototype.resetWorkflowName = function () {
        this._workflowName = undefined;
    };
    Object.defineProperty(WorkersScriptBindingsOutputReference.prototype, "workflowNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workflowName;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptBindingsOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptBindingsOutputReference = WorkersScriptBindingsOutputReference;
var WorkersScriptBindingsList = /** @class */ (function (_super) {
    __extends(WorkersScriptBindingsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptBindingsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkersScriptBindingsList.prototype.get = function (index) {
        return new WorkersScriptBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkersScriptBindingsList;
}(cdktf.ComplexList));
exports.WorkersScriptBindingsList = WorkersScriptBindingsList;
function workersScriptLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu_ms: cdktf.numberToTerraform(struct.cpuMs),
        subrequests: cdktf.numberToTerraform(struct.subrequests),
    };
}
function workersScriptLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cpu_ms: {
            value: cdktf.numberToHclTerraform(struct.cpuMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        subrequests: {
            value: cdktf.numberToHclTerraform(struct.subrequests),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptLimitsOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptLimitsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._cpuMs !== undefined) {
                hasAnyValues = true;
                internalValueResult.cpuMs = this._cpuMs;
            }
            if (this._subrequests !== undefined) {
                hasAnyValues = true;
                internalValueResult.subrequests = this._subrequests;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._cpuMs = undefined;
                this._subrequests = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._cpuMs = value.cpuMs;
                this._subrequests = value.subrequests;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptLimitsOutputReference.prototype, "cpuMs", {
        get: function () {
            return this.getNumberAttribute('cpu_ms');
        },
        set: function (value) {
            this._cpuMs = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptLimitsOutputReference.prototype.resetCpuMs = function () {
        this._cpuMs = undefined;
    };
    Object.defineProperty(WorkersScriptLimitsOutputReference.prototype, "cpuMsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuMs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptLimitsOutputReference.prototype, "subrequests", {
        get: function () {
            return this.getNumberAttribute('subrequests');
        },
        set: function (value) {
            this._subrequests = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptLimitsOutputReference.prototype.resetSubrequests = function () {
        this._subrequests = undefined;
    };
    Object.defineProperty(WorkersScriptLimitsOutputReference.prototype, "subrequestsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subrequests;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptLimitsOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptLimitsOutputReference = WorkersScriptLimitsOutputReference;
function workersScriptMigrationsRenamedClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from: cdktf.stringToTerraform(struct.from),
        to: cdktf.stringToTerraform(struct.to),
    };
}
function workersScriptMigrationsRenamedClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        from: {
            value: cdktf.stringToHclTerraform(struct.from),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to: {
            value: cdktf.stringToHclTerraform(struct.to),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptMigrationsRenamedClassesOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptMigrationsRenamedClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptMigrationsRenamedClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptMigrationsRenamedClassesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._from !== undefined) {
                hasAnyValues = true;
                internalValueResult.from = this._from;
            }
            if (this._to !== undefined) {
                hasAnyValues = true;
                internalValueResult.to = this._to;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._from = undefined;
                this._to = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._from = value.from;
                this._to = value.to;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsRenamedClassesOutputReference.prototype, "from", {
        get: function () {
            return this.getStringAttribute('from');
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsRenamedClassesOutputReference.prototype.resetFrom = function () {
        this._from = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsRenamedClassesOutputReference.prototype, "fromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsRenamedClassesOutputReference.prototype, "to", {
        get: function () {
            return this.getStringAttribute('to');
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsRenamedClassesOutputReference.prototype.resetTo = function () {
        this._to = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsRenamedClassesOutputReference.prototype, "toInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptMigrationsRenamedClassesOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptMigrationsRenamedClassesOutputReference = WorkersScriptMigrationsRenamedClassesOutputReference;
var WorkersScriptMigrationsRenamedClassesList = /** @class */ (function (_super) {
    __extends(WorkersScriptMigrationsRenamedClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptMigrationsRenamedClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkersScriptMigrationsRenamedClassesList.prototype.get = function (index) {
        return new WorkersScriptMigrationsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkersScriptMigrationsRenamedClassesList;
}(cdktf.ComplexList));
exports.WorkersScriptMigrationsRenamedClassesList = WorkersScriptMigrationsRenamedClassesList;
function workersScriptMigrationsStepsRenamedClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from: cdktf.stringToTerraform(struct.from),
        to: cdktf.stringToTerraform(struct.to),
    };
}
function workersScriptMigrationsStepsRenamedClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        from: {
            value: cdktf.stringToHclTerraform(struct.from),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to: {
            value: cdktf.stringToHclTerraform(struct.to),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptMigrationsStepsRenamedClassesOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptMigrationsStepsRenamedClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptMigrationsStepsRenamedClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptMigrationsStepsRenamedClassesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._from !== undefined) {
                hasAnyValues = true;
                internalValueResult.from = this._from;
            }
            if (this._to !== undefined) {
                hasAnyValues = true;
                internalValueResult.to = this._to;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._from = undefined;
                this._to = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._from = value.from;
                this._to = value.to;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsStepsRenamedClassesOutputReference.prototype, "from", {
        get: function () {
            return this.getStringAttribute('from');
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsStepsRenamedClassesOutputReference.prototype.resetFrom = function () {
        this._from = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsStepsRenamedClassesOutputReference.prototype, "fromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsStepsRenamedClassesOutputReference.prototype, "to", {
        get: function () {
            return this.getStringAttribute('to');
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsStepsRenamedClassesOutputReference.prototype.resetTo = function () {
        this._to = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsStepsRenamedClassesOutputReference.prototype, "toInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptMigrationsStepsRenamedClassesOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptMigrationsStepsRenamedClassesOutputReference = WorkersScriptMigrationsStepsRenamedClassesOutputReference;
var WorkersScriptMigrationsStepsRenamedClassesList = /** @class */ (function (_super) {
    __extends(WorkersScriptMigrationsStepsRenamedClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptMigrationsStepsRenamedClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkersScriptMigrationsStepsRenamedClassesList.prototype.get = function (index) {
        return new WorkersScriptMigrationsStepsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkersScriptMigrationsStepsRenamedClassesList;
}(cdktf.ComplexList));
exports.WorkersScriptMigrationsStepsRenamedClassesList = WorkersScriptMigrationsStepsRenamedClassesList;
function workersScriptMigrationsStepsTransferredClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from: cdktf.stringToTerraform(struct.from),
        from_script: cdktf.stringToTerraform(struct.fromScript),
        to: cdktf.stringToTerraform(struct.to),
    };
}
function workersScriptMigrationsStepsTransferredClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        from: {
            value: cdktf.stringToHclTerraform(struct.from),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from_script: {
            value: cdktf.stringToHclTerraform(struct.fromScript),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to: {
            value: cdktf.stringToHclTerraform(struct.to),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptMigrationsStepsTransferredClassesOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptMigrationsStepsTransferredClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptMigrationsStepsTransferredClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptMigrationsStepsTransferredClassesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._from !== undefined) {
                hasAnyValues = true;
                internalValueResult.from = this._from;
            }
            if (this._fromScript !== undefined) {
                hasAnyValues = true;
                internalValueResult.fromScript = this._fromScript;
            }
            if (this._to !== undefined) {
                hasAnyValues = true;
                internalValueResult.to = this._to;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._from = undefined;
                this._fromScript = undefined;
                this._to = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._from = value.from;
                this._fromScript = value.fromScript;
                this._to = value.to;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsStepsTransferredClassesOutputReference.prototype, "from", {
        get: function () {
            return this.getStringAttribute('from');
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsStepsTransferredClassesOutputReference.prototype.resetFrom = function () {
        this._from = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsStepsTransferredClassesOutputReference.prototype, "fromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsStepsTransferredClassesOutputReference.prototype, "fromScript", {
        get: function () {
            return this.getStringAttribute('from_script');
        },
        set: function (value) {
            this._fromScript = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsStepsTransferredClassesOutputReference.prototype.resetFromScript = function () {
        this._fromScript = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsStepsTransferredClassesOutputReference.prototype, "fromScriptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fromScript;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsStepsTransferredClassesOutputReference.prototype, "to", {
        get: function () {
            return this.getStringAttribute('to');
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsStepsTransferredClassesOutputReference.prototype.resetTo = function () {
        this._to = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsStepsTransferredClassesOutputReference.prototype, "toInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptMigrationsStepsTransferredClassesOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptMigrationsStepsTransferredClassesOutputReference = WorkersScriptMigrationsStepsTransferredClassesOutputReference;
var WorkersScriptMigrationsStepsTransferredClassesList = /** @class */ (function (_super) {
    __extends(WorkersScriptMigrationsStepsTransferredClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptMigrationsStepsTransferredClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkersScriptMigrationsStepsTransferredClassesList.prototype.get = function (index) {
        return new WorkersScriptMigrationsStepsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkersScriptMigrationsStepsTransferredClassesList;
}(cdktf.ComplexList));
exports.WorkersScriptMigrationsStepsTransferredClassesList = WorkersScriptMigrationsStepsTransferredClassesList;
function workersScriptMigrationsStepsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        deleted_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.deletedClasses),
        new_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.newClasses),
        new_sqlite_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.newSqliteClasses),
        renamed_classes: cdktf.listMapper(workersScriptMigrationsStepsRenamedClassesToTerraform, false)(struct.renamedClasses),
        transferred_classes: cdktf.listMapper(workersScriptMigrationsStepsTransferredClassesToTerraform, false)(struct.transferredClasses),
    };
}
function workersScriptMigrationsStepsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        deleted_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.deletedClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.newClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_sqlite_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.newSqliteClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        renamed_classes: {
            value: cdktf.listMapperHcl(workersScriptMigrationsStepsRenamedClassesToHclTerraform, false)(struct.renamedClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkersScriptMigrationsStepsRenamedClassesList",
        },
        transferred_classes: {
            value: cdktf.listMapperHcl(workersScriptMigrationsStepsTransferredClassesToHclTerraform, false)(struct.transferredClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkersScriptMigrationsStepsTransferredClassesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptMigrationsStepsOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptMigrationsStepsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptMigrationsStepsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // renamed_classes - computed: false, optional: true, required: false
        _this._renamedClasses = new WorkersScriptMigrationsStepsRenamedClassesList(_this, "renamed_classes", false);
        // transferred_classes - computed: false, optional: true, required: false
        _this._transferredClasses = new WorkersScriptMigrationsStepsTransferredClassesList(_this, "transferred_classes", false);
        return _this;
    }
    Object.defineProperty(WorkersScriptMigrationsStepsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._deletedClasses !== undefined) {
                hasAnyValues = true;
                internalValueResult.deletedClasses = this._deletedClasses;
            }
            if (this._newClasses !== undefined) {
                hasAnyValues = true;
                internalValueResult.newClasses = this._newClasses;
            }
            if (this._newSqliteClasses !== undefined) {
                hasAnyValues = true;
                internalValueResult.newSqliteClasses = this._newSqliteClasses;
            }
            if (((_a = this._renamedClasses) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.renamedClasses = (_b = this._renamedClasses) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._transferredClasses) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.transferredClasses = (_d = this._transferredClasses) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._deletedClasses = undefined;
                this._newClasses = undefined;
                this._newSqliteClasses = undefined;
                this._renamedClasses.internalValue = undefined;
                this._transferredClasses.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._deletedClasses = value.deletedClasses;
                this._newClasses = value.newClasses;
                this._newSqliteClasses = value.newSqliteClasses;
                this._renamedClasses.internalValue = value.renamedClasses;
                this._transferredClasses.internalValue = value.transferredClasses;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsStepsOutputReference.prototype, "deletedClasses", {
        get: function () {
            return this.getListAttribute('deleted_classes');
        },
        set: function (value) {
            this._deletedClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsStepsOutputReference.prototype.resetDeletedClasses = function () {
        this._deletedClasses = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsStepsOutputReference.prototype, "deletedClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletedClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsStepsOutputReference.prototype, "newClasses", {
        get: function () {
            return this.getListAttribute('new_classes');
        },
        set: function (value) {
            this._newClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsStepsOutputReference.prototype.resetNewClasses = function () {
        this._newClasses = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsStepsOutputReference.prototype, "newClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsStepsOutputReference.prototype, "newSqliteClasses", {
        get: function () {
            return this.getListAttribute('new_sqlite_classes');
        },
        set: function (value) {
            this._newSqliteClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsStepsOutputReference.prototype.resetNewSqliteClasses = function () {
        this._newSqliteClasses = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsStepsOutputReference.prototype, "newSqliteClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newSqliteClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsStepsOutputReference.prototype, "renamedClasses", {
        get: function () {
            return this._renamedClasses;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsStepsOutputReference.prototype.putRenamedClasses = function (value) {
        this._renamedClasses.internalValue = value;
    };
    WorkersScriptMigrationsStepsOutputReference.prototype.resetRenamedClasses = function () {
        this._renamedClasses.internalValue = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsStepsOutputReference.prototype, "renamedClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._renamedClasses.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsStepsOutputReference.prototype, "transferredClasses", {
        get: function () {
            return this._transferredClasses;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsStepsOutputReference.prototype.putTransferredClasses = function (value) {
        this._transferredClasses.internalValue = value;
    };
    WorkersScriptMigrationsStepsOutputReference.prototype.resetTransferredClasses = function () {
        this._transferredClasses.internalValue = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsStepsOutputReference.prototype, "transferredClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transferredClasses.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptMigrationsStepsOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptMigrationsStepsOutputReference = WorkersScriptMigrationsStepsOutputReference;
var WorkersScriptMigrationsStepsList = /** @class */ (function (_super) {
    __extends(WorkersScriptMigrationsStepsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptMigrationsStepsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkersScriptMigrationsStepsList.prototype.get = function (index) {
        return new WorkersScriptMigrationsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkersScriptMigrationsStepsList;
}(cdktf.ComplexList));
exports.WorkersScriptMigrationsStepsList = WorkersScriptMigrationsStepsList;
function workersScriptMigrationsTransferredClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from: cdktf.stringToTerraform(struct.from),
        from_script: cdktf.stringToTerraform(struct.fromScript),
        to: cdktf.stringToTerraform(struct.to),
    };
}
function workersScriptMigrationsTransferredClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        from: {
            value: cdktf.stringToHclTerraform(struct.from),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from_script: {
            value: cdktf.stringToHclTerraform(struct.fromScript),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to: {
            value: cdktf.stringToHclTerraform(struct.to),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptMigrationsTransferredClassesOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptMigrationsTransferredClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptMigrationsTransferredClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptMigrationsTransferredClassesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._from !== undefined) {
                hasAnyValues = true;
                internalValueResult.from = this._from;
            }
            if (this._fromScript !== undefined) {
                hasAnyValues = true;
                internalValueResult.fromScript = this._fromScript;
            }
            if (this._to !== undefined) {
                hasAnyValues = true;
                internalValueResult.to = this._to;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._from = undefined;
                this._fromScript = undefined;
                this._to = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._from = value.from;
                this._fromScript = value.fromScript;
                this._to = value.to;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsTransferredClassesOutputReference.prototype, "from", {
        get: function () {
            return this.getStringAttribute('from');
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsTransferredClassesOutputReference.prototype.resetFrom = function () {
        this._from = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsTransferredClassesOutputReference.prototype, "fromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsTransferredClassesOutputReference.prototype, "fromScript", {
        get: function () {
            return this.getStringAttribute('from_script');
        },
        set: function (value) {
            this._fromScript = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsTransferredClassesOutputReference.prototype.resetFromScript = function () {
        this._fromScript = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsTransferredClassesOutputReference.prototype, "fromScriptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fromScript;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsTransferredClassesOutputReference.prototype, "to", {
        get: function () {
            return this.getStringAttribute('to');
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsTransferredClassesOutputReference.prototype.resetTo = function () {
        this._to = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsTransferredClassesOutputReference.prototype, "toInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptMigrationsTransferredClassesOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptMigrationsTransferredClassesOutputReference = WorkersScriptMigrationsTransferredClassesOutputReference;
var WorkersScriptMigrationsTransferredClassesList = /** @class */ (function (_super) {
    __extends(WorkersScriptMigrationsTransferredClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptMigrationsTransferredClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkersScriptMigrationsTransferredClassesList.prototype.get = function (index) {
        return new WorkersScriptMigrationsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkersScriptMigrationsTransferredClassesList;
}(cdktf.ComplexList));
exports.WorkersScriptMigrationsTransferredClassesList = WorkersScriptMigrationsTransferredClassesList;
function workersScriptMigrationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        deleted_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.deletedClasses),
        new_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.newClasses),
        new_sqlite_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.newSqliteClasses),
        new_tag: cdktf.stringToTerraform(struct.newTag),
        old_tag: cdktf.stringToTerraform(struct.oldTag),
        renamed_classes: cdktf.listMapper(workersScriptMigrationsRenamedClassesToTerraform, false)(struct.renamedClasses),
        steps: cdktf.listMapper(workersScriptMigrationsStepsToTerraform, false)(struct.steps),
        transferred_classes: cdktf.listMapper(workersScriptMigrationsTransferredClassesToTerraform, false)(struct.transferredClasses),
    };
}
function workersScriptMigrationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        deleted_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.deletedClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.newClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_sqlite_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.newSqliteClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_tag: {
            value: cdktf.stringToHclTerraform(struct.newTag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        old_tag: {
            value: cdktf.stringToHclTerraform(struct.oldTag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        renamed_classes: {
            value: cdktf.listMapperHcl(workersScriptMigrationsRenamedClassesToHclTerraform, false)(struct.renamedClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkersScriptMigrationsRenamedClassesList",
        },
        steps: {
            value: cdktf.listMapperHcl(workersScriptMigrationsStepsToHclTerraform, false)(struct.steps),
            isBlock: true,
            type: "list",
            storageClassType: "WorkersScriptMigrationsStepsList",
        },
        transferred_classes: {
            value: cdktf.listMapperHcl(workersScriptMigrationsTransferredClassesToHclTerraform, false)(struct.transferredClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkersScriptMigrationsTransferredClassesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptMigrationsOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptMigrationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptMigrationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // renamed_classes - computed: false, optional: true, required: false
        _this._renamedClasses = new WorkersScriptMigrationsRenamedClassesList(_this, "renamed_classes", false);
        // steps - computed: false, optional: true, required: false
        _this._steps = new WorkersScriptMigrationsStepsList(_this, "steps", false);
        // transferred_classes - computed: false, optional: true, required: false
        _this._transferredClasses = new WorkersScriptMigrationsTransferredClassesList(_this, "transferred_classes", false);
        return _this;
    }
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._deletedClasses !== undefined) {
                hasAnyValues = true;
                internalValueResult.deletedClasses = this._deletedClasses;
            }
            if (this._newClasses !== undefined) {
                hasAnyValues = true;
                internalValueResult.newClasses = this._newClasses;
            }
            if (this._newSqliteClasses !== undefined) {
                hasAnyValues = true;
                internalValueResult.newSqliteClasses = this._newSqliteClasses;
            }
            if (this._newTag !== undefined) {
                hasAnyValues = true;
                internalValueResult.newTag = this._newTag;
            }
            if (this._oldTag !== undefined) {
                hasAnyValues = true;
                internalValueResult.oldTag = this._oldTag;
            }
            if (((_a = this._renamedClasses) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.renamedClasses = (_b = this._renamedClasses) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._steps) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.steps = (_d = this._steps) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._transferredClasses) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.transferredClasses = (_f = this._transferredClasses) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._deletedClasses = undefined;
                this._newClasses = undefined;
                this._newSqliteClasses = undefined;
                this._newTag = undefined;
                this._oldTag = undefined;
                this._renamedClasses.internalValue = undefined;
                this._steps.internalValue = undefined;
                this._transferredClasses.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._deletedClasses = value.deletedClasses;
                this._newClasses = value.newClasses;
                this._newSqliteClasses = value.newSqliteClasses;
                this._newTag = value.newTag;
                this._oldTag = value.oldTag;
                this._renamedClasses.internalValue = value.renamedClasses;
                this._steps.internalValue = value.steps;
                this._transferredClasses.internalValue = value.transferredClasses;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "deletedClasses", {
        get: function () {
            return this.getListAttribute('deleted_classes');
        },
        set: function (value) {
            this._deletedClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsOutputReference.prototype.resetDeletedClasses = function () {
        this._deletedClasses = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "deletedClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletedClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "newClasses", {
        get: function () {
            return this.getListAttribute('new_classes');
        },
        set: function (value) {
            this._newClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsOutputReference.prototype.resetNewClasses = function () {
        this._newClasses = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "newClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "newSqliteClasses", {
        get: function () {
            return this.getListAttribute('new_sqlite_classes');
        },
        set: function (value) {
            this._newSqliteClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsOutputReference.prototype.resetNewSqliteClasses = function () {
        this._newSqliteClasses = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "newSqliteClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newSqliteClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "newTag", {
        get: function () {
            return this.getStringAttribute('new_tag');
        },
        set: function (value) {
            this._newTag = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsOutputReference.prototype.resetNewTag = function () {
        this._newTag = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "newTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "oldTag", {
        get: function () {
            return this.getStringAttribute('old_tag');
        },
        set: function (value) {
            this._oldTag = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsOutputReference.prototype.resetOldTag = function () {
        this._oldTag = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "oldTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oldTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "renamedClasses", {
        get: function () {
            return this._renamedClasses;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsOutputReference.prototype.putRenamedClasses = function (value) {
        this._renamedClasses.internalValue = value;
    };
    WorkersScriptMigrationsOutputReference.prototype.resetRenamedClasses = function () {
        this._renamedClasses.internalValue = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "renamedClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._renamedClasses.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "steps", {
        get: function () {
            return this._steps;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsOutputReference.prototype.putSteps = function (value) {
        this._steps.internalValue = value;
    };
    WorkersScriptMigrationsOutputReference.prototype.resetSteps = function () {
        this._steps.internalValue = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "stepsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._steps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "transferredClasses", {
        get: function () {
            return this._transferredClasses;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptMigrationsOutputReference.prototype.putTransferredClasses = function (value) {
        this._transferredClasses.internalValue = value;
    };
    WorkersScriptMigrationsOutputReference.prototype.resetTransferredClasses = function () {
        this._transferredClasses.internalValue = undefined;
    };
    Object.defineProperty(WorkersScriptMigrationsOutputReference.prototype, "transferredClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transferredClasses.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptMigrationsOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptMigrationsOutputReference = WorkersScriptMigrationsOutputReference;
function workersScriptNamedHandlersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function workersScriptNamedHandlersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var WorkersScriptNamedHandlersOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptNamedHandlersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptNamedHandlersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptNamedHandlersOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptNamedHandlersOutputReference.prototype, "handlers", {
        // handlers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('handlers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptNamedHandlersOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptNamedHandlersOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptNamedHandlersOutputReference = WorkersScriptNamedHandlersOutputReference;
var WorkersScriptNamedHandlersList = /** @class */ (function (_super) {
    __extends(WorkersScriptNamedHandlersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptNamedHandlersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkersScriptNamedHandlersList.prototype.get = function (index) {
        return new WorkersScriptNamedHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkersScriptNamedHandlersList;
}(cdktf.ComplexList));
exports.WorkersScriptNamedHandlersList = WorkersScriptNamedHandlersList;
function workersScriptObservabilityLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.destinations),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        head_sampling_rate: cdktf.numberToTerraform(struct.headSamplingRate),
        invocation_logs: cdktf.booleanToTerraform(struct.invocationLogs),
        persist: cdktf.booleanToTerraform(struct.persist),
    };
}
function workersScriptObservabilityLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        destinations: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.destinations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        head_sampling_rate: {
            value: cdktf.numberToHclTerraform(struct.headSamplingRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        invocation_logs: {
            value: cdktf.booleanToHclTerraform(struct.invocationLogs),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        persist: {
            value: cdktf.booleanToHclTerraform(struct.persist),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptObservabilityLogsOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptObservabilityLogsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptObservabilityLogsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptObservabilityLogsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._destinations !== undefined) {
                hasAnyValues = true;
                internalValueResult.destinations = this._destinations;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._headSamplingRate !== undefined) {
                hasAnyValues = true;
                internalValueResult.headSamplingRate = this._headSamplingRate;
            }
            if (this._invocationLogs !== undefined) {
                hasAnyValues = true;
                internalValueResult.invocationLogs = this._invocationLogs;
            }
            if (this._persist !== undefined) {
                hasAnyValues = true;
                internalValueResult.persist = this._persist;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._destinations = undefined;
                this._enabled = undefined;
                this._headSamplingRate = undefined;
                this._invocationLogs = undefined;
                this._persist = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._destinations = value.destinations;
                this._enabled = value.enabled;
                this._headSamplingRate = value.headSamplingRate;
                this._invocationLogs = value.invocationLogs;
                this._persist = value.persist;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityLogsOutputReference.prototype, "destinations", {
        get: function () {
            return this.getListAttribute('destinations');
        },
        set: function (value) {
            this._destinations = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptObservabilityLogsOutputReference.prototype.resetDestinations = function () {
        this._destinations = undefined;
    };
    Object.defineProperty(WorkersScriptObservabilityLogsOutputReference.prototype, "destinationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityLogsOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityLogsOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityLogsOutputReference.prototype, "headSamplingRate", {
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        set: function (value) {
            this._headSamplingRate = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptObservabilityLogsOutputReference.prototype.resetHeadSamplingRate = function () {
        this._headSamplingRate = undefined;
    };
    Object.defineProperty(WorkersScriptObservabilityLogsOutputReference.prototype, "headSamplingRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headSamplingRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityLogsOutputReference.prototype, "invocationLogs", {
        get: function () {
            return this.getBooleanAttribute('invocation_logs');
        },
        set: function (value) {
            this._invocationLogs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityLogsOutputReference.prototype, "invocationLogsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invocationLogs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityLogsOutputReference.prototype, "persist", {
        get: function () {
            return this.getBooleanAttribute('persist');
        },
        set: function (value) {
            this._persist = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptObservabilityLogsOutputReference.prototype.resetPersist = function () {
        this._persist = undefined;
    };
    Object.defineProperty(WorkersScriptObservabilityLogsOutputReference.prototype, "persistInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._persist;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptObservabilityLogsOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptObservabilityLogsOutputReference = WorkersScriptObservabilityLogsOutputReference;
function workersScriptObservabilityTracesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.destinations),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        head_sampling_rate: cdktf.numberToTerraform(struct.headSamplingRate),
        persist: cdktf.booleanToTerraform(struct.persist),
    };
}
function workersScriptObservabilityTracesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        destinations: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.destinations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        head_sampling_rate: {
            value: cdktf.numberToHclTerraform(struct.headSamplingRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        persist: {
            value: cdktf.booleanToHclTerraform(struct.persist),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptObservabilityTracesOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptObservabilityTracesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptObservabilityTracesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptObservabilityTracesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._destinations !== undefined) {
                hasAnyValues = true;
                internalValueResult.destinations = this._destinations;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._headSamplingRate !== undefined) {
                hasAnyValues = true;
                internalValueResult.headSamplingRate = this._headSamplingRate;
            }
            if (this._persist !== undefined) {
                hasAnyValues = true;
                internalValueResult.persist = this._persist;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._destinations = undefined;
                this._enabled = undefined;
                this._headSamplingRate = undefined;
                this._persist = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._destinations = value.destinations;
                this._enabled = value.enabled;
                this._headSamplingRate = value.headSamplingRate;
                this._persist = value.persist;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityTracesOutputReference.prototype, "destinations", {
        get: function () {
            return this.getListAttribute('destinations');
        },
        set: function (value) {
            this._destinations = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptObservabilityTracesOutputReference.prototype.resetDestinations = function () {
        this._destinations = undefined;
    };
    Object.defineProperty(WorkersScriptObservabilityTracesOutputReference.prototype, "destinationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityTracesOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptObservabilityTracesOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(WorkersScriptObservabilityTracesOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityTracesOutputReference.prototype, "headSamplingRate", {
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        set: function (value) {
            this._headSamplingRate = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptObservabilityTracesOutputReference.prototype.resetHeadSamplingRate = function () {
        this._headSamplingRate = undefined;
    };
    Object.defineProperty(WorkersScriptObservabilityTracesOutputReference.prototype, "headSamplingRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headSamplingRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityTracesOutputReference.prototype, "persist", {
        get: function () {
            return this.getBooleanAttribute('persist');
        },
        set: function (value) {
            this._persist = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptObservabilityTracesOutputReference.prototype.resetPersist = function () {
        this._persist = undefined;
    };
    Object.defineProperty(WorkersScriptObservabilityTracesOutputReference.prototype, "persistInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._persist;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptObservabilityTracesOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptObservabilityTracesOutputReference = WorkersScriptObservabilityTracesOutputReference;
function workersScriptObservabilityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        head_sampling_rate: cdktf.numberToTerraform(struct.headSamplingRate),
        logs: workersScriptObservabilityLogsToTerraform(struct.logs),
        traces: workersScriptObservabilityTracesToTerraform(struct.traces),
    };
}
function workersScriptObservabilityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        head_sampling_rate: {
            value: cdktf.numberToHclTerraform(struct.headSamplingRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        logs: {
            value: workersScriptObservabilityLogsToHclTerraform(struct.logs),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptObservabilityLogs",
        },
        traces: {
            value: workersScriptObservabilityTracesToHclTerraform(struct.traces),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptObservabilityTraces",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptObservabilityOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptObservabilityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptObservabilityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // logs - computed: false, optional: true, required: false
        _this._logs = new WorkersScriptObservabilityLogsOutputReference(_this, "logs");
        // traces - computed: false, optional: true, required: false
        _this._traces = new WorkersScriptObservabilityTracesOutputReference(_this, "traces");
        return _this;
    }
    Object.defineProperty(WorkersScriptObservabilityOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._headSamplingRate !== undefined) {
                hasAnyValues = true;
                internalValueResult.headSamplingRate = this._headSamplingRate;
            }
            if (((_a = this._logs) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.logs = (_b = this._logs) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._traces) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.traces = (_d = this._traces) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._headSamplingRate = undefined;
                this._logs.internalValue = undefined;
                this._traces.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._headSamplingRate = value.headSamplingRate;
                this._logs.internalValue = value.logs;
                this._traces.internalValue = value.traces;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityOutputReference.prototype, "headSamplingRate", {
        get: function () {
            return this.getNumberAttribute('head_sampling_rate');
        },
        set: function (value) {
            this._headSamplingRate = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptObservabilityOutputReference.prototype.resetHeadSamplingRate = function () {
        this._headSamplingRate = undefined;
    };
    Object.defineProperty(WorkersScriptObservabilityOutputReference.prototype, "headSamplingRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headSamplingRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityOutputReference.prototype, "logs", {
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptObservabilityOutputReference.prototype.putLogs = function (value) {
        this._logs.internalValue = value;
    };
    WorkersScriptObservabilityOutputReference.prototype.resetLogs = function () {
        this._logs.internalValue = undefined;
    };
    Object.defineProperty(WorkersScriptObservabilityOutputReference.prototype, "logsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logs.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptObservabilityOutputReference.prototype, "traces", {
        get: function () {
            return this._traces;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptObservabilityOutputReference.prototype.putTraces = function (value) {
        this._traces.internalValue = value;
    };
    WorkersScriptObservabilityOutputReference.prototype.resetTraces = function () {
        this._traces.internalValue = undefined;
    };
    Object.defineProperty(WorkersScriptObservabilityOutputReference.prototype, "tracesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._traces.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptObservabilityOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptObservabilityOutputReference = WorkersScriptObservabilityOutputReference;
function workersScriptPlacementTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function workersScriptPlacementTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var WorkersScriptPlacementTargetOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptPlacementTargetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptPlacementTargetOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptPlacementTargetOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptPlacementTargetOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptPlacementTargetOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptPlacementTargetOutputReference.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptPlacementTargetOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptPlacementTargetOutputReference = WorkersScriptPlacementTargetOutputReference;
var WorkersScriptPlacementTargetList = /** @class */ (function (_super) {
    __extends(WorkersScriptPlacementTargetList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptPlacementTargetList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkersScriptPlacementTargetList.prototype.get = function (index) {
        return new WorkersScriptPlacementTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkersScriptPlacementTargetList;
}(cdktf.ComplexList));
exports.WorkersScriptPlacementTargetList = WorkersScriptPlacementTargetList;
function workersScriptPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
function workersScriptPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptPlacementOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkersScriptPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // target - computed: true, optional: false, required: false
        _this._target = new WorkersScriptPlacementTargetList(_this, "target", false);
        return _this;
    }
    Object.defineProperty(WorkersScriptPlacementOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._mode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._mode = value.mode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptPlacementOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptPlacementOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptPlacementOutputReference.prototype, "lastAnalyzedAt", {
        // last_analyzed_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_analyzed_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptPlacementOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptPlacementOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(WorkersScriptPlacementOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptPlacementOutputReference.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptPlacementOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptPlacementOutputReference.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptPlacementOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptPlacementOutputReference = WorkersScriptPlacementOutputReference;
function workersScriptTailConsumersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        environment: cdktf.stringToTerraform(struct.environment),
        namespace: cdktf.stringToTerraform(struct.namespace),
        service: cdktf.stringToTerraform(struct.service),
    };
}
function workersScriptTailConsumersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkersScriptTailConsumersOutputReference = /** @class */ (function (_super) {
    __extends(WorkersScriptTailConsumersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptTailConsumersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkersScriptTailConsumersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._environment !== undefined) {
                hasAnyValues = true;
                internalValueResult.environment = this._environment;
            }
            if (this._namespace !== undefined) {
                hasAnyValues = true;
                internalValueResult.namespace = this._namespace;
            }
            if (this._service !== undefined) {
                hasAnyValues = true;
                internalValueResult.service = this._service;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._environment = undefined;
                this._namespace = undefined;
                this._service = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._environment = value.environment;
                this._namespace = value.namespace;
                this._service = value.service;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptTailConsumersOutputReference.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptTailConsumersOutputReference.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(WorkersScriptTailConsumersOutputReference.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptTailConsumersOutputReference.prototype, "namespace", {
        get: function () {
            return this.getStringAttribute('namespace');
        },
        set: function (value) {
            this._namespace = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScriptTailConsumersOutputReference.prototype.resetNamespace = function () {
        this._namespace = undefined;
    };
    Object.defineProperty(WorkersScriptTailConsumersOutputReference.prototype, "namespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptTailConsumersOutputReference.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScriptTailConsumersOutputReference.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    return WorkersScriptTailConsumersOutputReference;
}(cdktf.ComplexObject));
exports.WorkersScriptTailConsumersOutputReference = WorkersScriptTailConsumersOutputReference;
var WorkersScriptTailConsumersList = /** @class */ (function (_super) {
    __extends(WorkersScriptTailConsumersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkersScriptTailConsumersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkersScriptTailConsumersList.prototype.get = function (index) {
        return new WorkersScriptTailConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkersScriptTailConsumersList;
}(cdktf.ComplexList));
exports.WorkersScriptTailConsumersList = WorkersScriptTailConsumersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script cloudflare_workers_script}
*/
var WorkersScript = /** @class */ (function (_super) {
    __extends(WorkersScript, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script cloudflare_workers_script} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersScriptConfig
    */
    function WorkersScript(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers_script',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // annotations - computed: true, optional: true, required: false
        _this._annotations = new WorkersScriptAnnotationsOutputReference(_this, "annotations");
        // assets - computed: false, optional: true, required: false
        _this._assets = new WorkersScriptAssetsOutputReference(_this, "assets");
        // bindings - computed: true, optional: true, required: false
        _this._bindings = new WorkersScriptBindingsList(_this, "bindings", false);
        // limits - computed: false, optional: true, required: false
        _this._limits = new WorkersScriptLimitsOutputReference(_this, "limits");
        // migrations - computed: false, optional: true, required: false
        _this._migrations = new WorkersScriptMigrationsOutputReference(_this, "migrations");
        // named_handlers - computed: true, optional: false, required: false
        _this._namedHandlers = new WorkersScriptNamedHandlersList(_this, "named_handlers", false);
        // observability - computed: false, optional: true, required: false
        _this._observability = new WorkersScriptObservabilityOutputReference(_this, "observability");
        // placement - computed: true, optional: true, required: false
        _this._placement = new WorkersScriptPlacementOutputReference(_this, "placement");
        // tail_consumers - computed: true, optional: true, required: false
        _this._tailConsumers = new WorkersScriptTailConsumersList(_this, "tail_consumers", true);
        _this._accountId = config.accountId;
        _this._annotations.internalValue = config.annotations;
        _this._assets.internalValue = config.assets;
        _this._bindings.internalValue = config.bindings;
        _this._bodyPart = config.bodyPart;
        _this._compatibilityDate = config.compatibilityDate;
        _this._compatibilityFlags = config.compatibilityFlags;
        _this._content = config.content;
        _this._contentFile = config.contentFile;
        _this._contentSha256 = config.contentSha256;
        _this._contentType = config.contentType;
        _this._keepAssets = config.keepAssets;
        _this._keepBindings = config.keepBindings;
        _this._limits.internalValue = config.limits;
        _this._logpush = config.logpush;
        _this._mainModule = config.mainModule;
        _this._migrations.internalValue = config.migrations;
        _this._observability.internalValue = config.observability;
        _this._placement.internalValue = config.placement;
        _this._scriptName = config.scriptName;
        _this._tailConsumers.internalValue = config.tailConsumers;
        _this._usageModel = config.usageModel;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersScript to import
    * @param importFromId The id of the existing WorkersScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersScript to import is found
    */
    WorkersScript.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_script", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WorkersScript.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "annotations", {
        get: function () {
            return this._annotations;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.putAnnotations = function (value) {
        this._annotations.internalValue = value;
    };
    WorkersScript.prototype.resetAnnotations = function () {
        this._annotations.internalValue = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "annotationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._annotations.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "assets", {
        get: function () {
            return this._assets;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.putAssets = function (value) {
        this._assets.internalValue = value;
    };
    WorkersScript.prototype.resetAssets = function () {
        this._assets.internalValue = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "assetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assets.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "bindings", {
        get: function () {
            return this._bindings;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.putBindings = function (value) {
        this._bindings.internalValue = value;
    };
    WorkersScript.prototype.resetBindings = function () {
        this._bindings.internalValue = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "bindingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bindings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "bodyPart", {
        get: function () {
            return this.getStringAttribute('body_part');
        },
        set: function (value) {
            this._bodyPart = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetBodyPart = function () {
        this._bodyPart = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "bodyPartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bodyPart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "compatibilityDate", {
        get: function () {
            return this.getStringAttribute('compatibility_date');
        },
        set: function (value) {
            this._compatibilityDate = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetCompatibilityDate = function () {
        this._compatibilityDate = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "compatibilityDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibilityDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "compatibilityFlags", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('compatibility_flags'));
        },
        set: function (value) {
            this._compatibilityFlags = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetCompatibilityFlags = function () {
        this._compatibilityFlags = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "compatibilityFlagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibilityFlags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetContent = function () {
        this._content = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "contentFile", {
        get: function () {
            return this.getStringAttribute('content_file');
        },
        set: function (value) {
            this._contentFile = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetContentFile = function () {
        this._contentFile = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "contentFileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "contentSha256", {
        get: function () {
            return this.getStringAttribute('content_sha256');
        },
        set: function (value) {
            this._contentSha256 = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetContentSha256 = function () {
        this._contentSha256 = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "contentSha256Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentSha256;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetContentType = function () {
        this._contentType = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "handlers", {
        // handlers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('handlers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "hasAssets", {
        // has_assets - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_assets');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "hasModules", {
        // has_modules - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_modules');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "keepAssets", {
        get: function () {
            return this.getBooleanAttribute('keep_assets');
        },
        set: function (value) {
            this._keepAssets = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetKeepAssets = function () {
        this._keepAssets = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "keepAssetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keepAssets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "keepBindings", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('keep_bindings'));
        },
        set: function (value) {
            this._keepBindings = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetKeepBindings = function () {
        this._keepBindings = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "keepBindingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keepBindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "lastDeployedFrom", {
        // last_deployed_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_deployed_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.putLimits = function (value) {
        this._limits.internalValue = value;
    };
    WorkersScript.prototype.resetLimits = function () {
        this._limits.internalValue = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "limitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limits.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "logpush", {
        get: function () {
            return this.getBooleanAttribute('logpush');
        },
        set: function (value) {
            this._logpush = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetLogpush = function () {
        this._logpush = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "logpushInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logpush;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "mainModule", {
        get: function () {
            return this.getStringAttribute('main_module');
        },
        set: function (value) {
            this._mainModule = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetMainModule = function () {
        this._mainModule = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "mainModuleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mainModule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "migrationTag", {
        // migration_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('migration_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "migrations", {
        get: function () {
            return this._migrations;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.putMigrations = function (value) {
        this._migrations.internalValue = value;
    };
    WorkersScript.prototype.resetMigrations = function () {
        this._migrations.internalValue = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "migrationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._migrations.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "namedHandlers", {
        get: function () {
            return this._namedHandlers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "observability", {
        get: function () {
            return this._observability;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.putObservability = function (value) {
        this._observability.internalValue = value;
    };
    WorkersScript.prototype.resetObservability = function () {
        this._observability.internalValue = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "observabilityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._observability.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.putPlacement = function (value) {
        this._placement.internalValue = value;
    };
    WorkersScript.prototype.resetPlacement = function () {
        this._placement.internalValue = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "placementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placement.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "placementMode", {
        // placement_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('placement_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "placementStatus", {
        // placement_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('placement_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "scriptName", {
        get: function () {
            return this.getStringAttribute('script_name');
        },
        set: function (value) {
            this._scriptName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "scriptNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scriptName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "startupTimeMs", {
        // startup_time_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('startup_time_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "tailConsumers", {
        get: function () {
            return this._tailConsumers;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.putTailConsumers = function (value) {
        this._tailConsumers.internalValue = value;
    };
    WorkersScript.prototype.resetTailConsumers = function () {
        this._tailConsumers.internalValue = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "tailConsumersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tailConsumers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersScript.prototype, "usageModel", {
        get: function () {
            return this.getStringAttribute('usage_model');
        },
        set: function (value) {
            this._usageModel = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersScript.prototype.resetUsageModel = function () {
        this._usageModel = undefined;
    };
    Object.defineProperty(WorkersScript.prototype, "usageModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usageModel;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WorkersScript.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            annotations: workersScriptAnnotationsToTerraform(this._annotations.internalValue),
            assets: workersScriptAssetsToTerraform(this._assets.internalValue),
            bindings: cdktf.listMapper(workersScriptBindingsToTerraform, false)(this._bindings.internalValue),
            body_part: cdktf.stringToTerraform(this._bodyPart),
            compatibility_date: cdktf.stringToTerraform(this._compatibilityDate),
            compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibilityFlags),
            content: cdktf.stringToTerraform(this._content),
            content_file: cdktf.stringToTerraform(this._contentFile),
            content_sha256: cdktf.stringToTerraform(this._contentSha256),
            content_type: cdktf.stringToTerraform(this._contentType),
            keep_assets: cdktf.booleanToTerraform(this._keepAssets),
            keep_bindings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keepBindings),
            limits: workersScriptLimitsToTerraform(this._limits.internalValue),
            logpush: cdktf.booleanToTerraform(this._logpush),
            main_module: cdktf.stringToTerraform(this._mainModule),
            migrations: workersScriptMigrationsToTerraform(this._migrations.internalValue),
            observability: workersScriptObservabilityToTerraform(this._observability.internalValue),
            placement: workersScriptPlacementToTerraform(this._placement.internalValue),
            script_name: cdktf.stringToTerraform(this._scriptName),
            tail_consumers: cdktf.listMapper(workersScriptTailConsumersToTerraform, false)(this._tailConsumers.internalValue),
            usage_model: cdktf.stringToTerraform(this._usageModel),
        };
    };
    WorkersScript.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            annotations: {
                value: workersScriptAnnotationsToHclTerraform(this._annotations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptAnnotations",
            },
            assets: {
                value: workersScriptAssetsToHclTerraform(this._assets.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptAssets",
            },
            bindings: {
                value: cdktf.listMapperHcl(workersScriptBindingsToHclTerraform, false)(this._bindings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WorkersScriptBindingsList",
            },
            body_part: {
                value: cdktf.stringToHclTerraform(this._bodyPart),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compatibility_date: {
                value: cdktf.stringToHclTerraform(this._compatibilityDate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compatibility_flags: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compatibilityFlags),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            content: {
                value: cdktf.stringToHclTerraform(this._content),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_file: {
                value: cdktf.stringToHclTerraform(this._contentFile),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_sha256: {
                value: cdktf.stringToHclTerraform(this._contentSha256),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_type: {
                value: cdktf.stringToHclTerraform(this._contentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            keep_assets: {
                value: cdktf.booleanToHclTerraform(this._keepAssets),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            keep_bindings: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keepBindings),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            limits: {
                value: workersScriptLimitsToHclTerraform(this._limits.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptLimits",
            },
            logpush: {
                value: cdktf.booleanToHclTerraform(this._logpush),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            main_module: {
                value: cdktf.stringToHclTerraform(this._mainModule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            migrations: {
                value: workersScriptMigrationsToHclTerraform(this._migrations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptMigrations",
            },
            observability: {
                value: workersScriptObservabilityToHclTerraform(this._observability.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptObservability",
            },
            placement: {
                value: workersScriptPlacementToHclTerraform(this._placement.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptPlacement",
            },
            script_name: {
                value: cdktf.stringToHclTerraform(this._scriptName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tail_consumers: {
                value: cdktf.listMapperHcl(workersScriptTailConsumersToHclTerraform, false)(this._tailConsumers.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "WorkersScriptTailConsumersList",
            },
            usage_model: {
                value: cdktf.stringToHclTerraform(this._usageModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WorkersScript.tfResourceType = "cloudflare_workers_script";
    return WorkersScript;
}(cdktf.TerraformResource));
exports.WorkersScript = WorkersScript;
