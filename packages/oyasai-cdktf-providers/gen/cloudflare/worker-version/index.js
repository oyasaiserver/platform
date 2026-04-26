"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version
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
exports.WorkerVersion = exports.WorkerVersionPlacementOutputReference = exports.WorkerVersionPlacementTargetList = exports.WorkerVersionPlacementTargetOutputReference = exports.WorkerVersionModulesList = exports.WorkerVersionModulesOutputReference = exports.WorkerVersionMigrationsOutputReference = exports.WorkerVersionMigrationsTransferredClassesList = exports.WorkerVersionMigrationsTransferredClassesOutputReference = exports.WorkerVersionMigrationsStepsList = exports.WorkerVersionMigrationsStepsOutputReference = exports.WorkerVersionMigrationsStepsTransferredClassesList = exports.WorkerVersionMigrationsStepsTransferredClassesOutputReference = exports.WorkerVersionMigrationsStepsRenamedClassesList = exports.WorkerVersionMigrationsStepsRenamedClassesOutputReference = exports.WorkerVersionMigrationsRenamedClassesList = exports.WorkerVersionMigrationsRenamedClassesOutputReference = exports.WorkerVersionLimitsOutputReference = exports.WorkerVersionContainersList = exports.WorkerVersionContainersOutputReference = exports.WorkerVersionBindingsList = exports.WorkerVersionBindingsOutputReference = exports.WorkerVersionBindingsSimpleOutputReference = exports.WorkerVersionBindingsOutboundOutputReference = exports.WorkerVersionBindingsOutboundWorkerOutputReference = exports.WorkerVersionBindingsOutboundParamsList = exports.WorkerVersionBindingsOutboundParamsOutputReference = exports.WorkerVersionAssetsOutputReference = exports.WorkerVersionAssetsConfigOutputReference = exports.WorkerVersionAnnotationsOutputReference = void 0;
exports.workerVersionAnnotationsToTerraform = workerVersionAnnotationsToTerraform;
exports.workerVersionAnnotationsToHclTerraform = workerVersionAnnotationsToHclTerraform;
exports.workerVersionAssetsConfigToTerraform = workerVersionAssetsConfigToTerraform;
exports.workerVersionAssetsConfigToHclTerraform = workerVersionAssetsConfigToHclTerraform;
exports.workerVersionAssetsToTerraform = workerVersionAssetsToTerraform;
exports.workerVersionAssetsToHclTerraform = workerVersionAssetsToHclTerraform;
exports.workerVersionBindingsOutboundParamsToTerraform = workerVersionBindingsOutboundParamsToTerraform;
exports.workerVersionBindingsOutboundParamsToHclTerraform = workerVersionBindingsOutboundParamsToHclTerraform;
exports.workerVersionBindingsOutboundWorkerToTerraform = workerVersionBindingsOutboundWorkerToTerraform;
exports.workerVersionBindingsOutboundWorkerToHclTerraform = workerVersionBindingsOutboundWorkerToHclTerraform;
exports.workerVersionBindingsOutboundToTerraform = workerVersionBindingsOutboundToTerraform;
exports.workerVersionBindingsOutboundToHclTerraform = workerVersionBindingsOutboundToHclTerraform;
exports.workerVersionBindingsSimpleToTerraform = workerVersionBindingsSimpleToTerraform;
exports.workerVersionBindingsSimpleToHclTerraform = workerVersionBindingsSimpleToHclTerraform;
exports.workerVersionBindingsToTerraform = workerVersionBindingsToTerraform;
exports.workerVersionBindingsToHclTerraform = workerVersionBindingsToHclTerraform;
exports.workerVersionContainersToTerraform = workerVersionContainersToTerraform;
exports.workerVersionContainersToHclTerraform = workerVersionContainersToHclTerraform;
exports.workerVersionLimitsToTerraform = workerVersionLimitsToTerraform;
exports.workerVersionLimitsToHclTerraform = workerVersionLimitsToHclTerraform;
exports.workerVersionMigrationsRenamedClassesToTerraform = workerVersionMigrationsRenamedClassesToTerraform;
exports.workerVersionMigrationsRenamedClassesToHclTerraform = workerVersionMigrationsRenamedClassesToHclTerraform;
exports.workerVersionMigrationsStepsRenamedClassesToTerraform = workerVersionMigrationsStepsRenamedClassesToTerraform;
exports.workerVersionMigrationsStepsRenamedClassesToHclTerraform = workerVersionMigrationsStepsRenamedClassesToHclTerraform;
exports.workerVersionMigrationsStepsTransferredClassesToTerraform = workerVersionMigrationsStepsTransferredClassesToTerraform;
exports.workerVersionMigrationsStepsTransferredClassesToHclTerraform = workerVersionMigrationsStepsTransferredClassesToHclTerraform;
exports.workerVersionMigrationsStepsToTerraform = workerVersionMigrationsStepsToTerraform;
exports.workerVersionMigrationsStepsToHclTerraform = workerVersionMigrationsStepsToHclTerraform;
exports.workerVersionMigrationsTransferredClassesToTerraform = workerVersionMigrationsTransferredClassesToTerraform;
exports.workerVersionMigrationsTransferredClassesToHclTerraform = workerVersionMigrationsTransferredClassesToHclTerraform;
exports.workerVersionMigrationsToTerraform = workerVersionMigrationsToTerraform;
exports.workerVersionMigrationsToHclTerraform = workerVersionMigrationsToHclTerraform;
exports.workerVersionModulesToTerraform = workerVersionModulesToTerraform;
exports.workerVersionModulesToHclTerraform = workerVersionModulesToHclTerraform;
exports.workerVersionPlacementTargetToTerraform = workerVersionPlacementTargetToTerraform;
exports.workerVersionPlacementTargetToHclTerraform = workerVersionPlacementTargetToHclTerraform;
exports.workerVersionPlacementToTerraform = workerVersionPlacementToTerraform;
exports.workerVersionPlacementToHclTerraform = workerVersionPlacementToHclTerraform;
var cdktf = require("cdktf");
function workerVersionAnnotationsToTerraform(struct) {
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
function workerVersionAnnotationsToHclTerraform(struct) {
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
var WorkerVersionAnnotationsOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionAnnotationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerVersionAnnotationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionAnnotationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerVersionAnnotationsOutputReference.prototype, "workersMessage", {
        get: function () {
            return this.getStringAttribute('workers_message');
        },
        set: function (value) {
            this._workersMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionAnnotationsOutputReference.prototype.resetWorkersMessage = function () {
        this._workersMessage = undefined;
    };
    Object.defineProperty(WorkerVersionAnnotationsOutputReference.prototype, "workersMessageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workersMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionAnnotationsOutputReference.prototype, "workersTag", {
        get: function () {
            return this.getStringAttribute('workers_tag');
        },
        set: function (value) {
            this._workersTag = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionAnnotationsOutputReference.prototype.resetWorkersTag = function () {
        this._workersTag = undefined;
    };
    Object.defineProperty(WorkerVersionAnnotationsOutputReference.prototype, "workersTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workersTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionAnnotationsOutputReference.prototype, "workersTriggeredBy", {
        // workers_triggered_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_triggered_by');
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionAnnotationsOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionAnnotationsOutputReference = WorkerVersionAnnotationsOutputReference;
function workerVersionAssetsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        html_handling: cdktf.stringToTerraform(struct.htmlHandling),
        not_found_handling: cdktf.stringToTerraform(struct.notFoundHandling),
        run_worker_first: cdktf.hashMapper(cdktf.anyToTerraform)(struct.runWorkerFirst),
    };
}
function workerVersionAssetsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
        run_worker_first: {
            value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct.runWorkerFirst),
            isBlock: false,
            type: "map",
            storageClassType: "anyMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkerVersionAssetsConfigOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionAssetsConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerVersionAssetsConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionAssetsConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._htmlHandling !== undefined) {
                hasAnyValues = true;
                internalValueResult.htmlHandling = this._htmlHandling;
            }
            if (this._notFoundHandling !== undefined) {
                hasAnyValues = true;
                internalValueResult.notFoundHandling = this._notFoundHandling;
            }
            if (this._runWorkerFirst !== undefined) {
                hasAnyValues = true;
                internalValueResult.runWorkerFirst = this._runWorkerFirst;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._htmlHandling = undefined;
                this._notFoundHandling = undefined;
                this._runWorkerFirst = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._htmlHandling = value.htmlHandling;
                this._notFoundHandling = value.notFoundHandling;
                this._runWorkerFirst = value.runWorkerFirst;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionAssetsConfigOutputReference.prototype, "htmlHandling", {
        get: function () {
            return this.getStringAttribute('html_handling');
        },
        set: function (value) {
            this._htmlHandling = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionAssetsConfigOutputReference.prototype.resetHtmlHandling = function () {
        this._htmlHandling = undefined;
    };
    Object.defineProperty(WorkerVersionAssetsConfigOutputReference.prototype, "htmlHandlingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._htmlHandling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionAssetsConfigOutputReference.prototype, "notFoundHandling", {
        get: function () {
            return this.getStringAttribute('not_found_handling');
        },
        set: function (value) {
            this._notFoundHandling = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionAssetsConfigOutputReference.prototype.resetNotFoundHandling = function () {
        this._notFoundHandling = undefined;
    };
    Object.defineProperty(WorkerVersionAssetsConfigOutputReference.prototype, "notFoundHandlingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notFoundHandling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionAssetsConfigOutputReference.prototype, "runWorkerFirst", {
        get: function () {
            return this.getAnyMapAttribute('run_worker_first');
        },
        set: function (value) {
            this._runWorkerFirst = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionAssetsConfigOutputReference.prototype.resetRunWorkerFirst = function () {
        this._runWorkerFirst = undefined;
    };
    Object.defineProperty(WorkerVersionAssetsConfigOutputReference.prototype, "runWorkerFirstInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runWorkerFirst;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionAssetsConfigOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionAssetsConfigOutputReference = WorkerVersionAssetsConfigOutputReference;
function workerVersionAssetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        config: workerVersionAssetsConfigToTerraform(struct.config),
        directory: cdktf.stringToTerraform(struct.directory),
        jwt: cdktf.stringToTerraform(struct.jwt),
    };
}
function workerVersionAssetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        config: {
            value: workerVersionAssetsConfigToHclTerraform(struct.config),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerVersionAssetsConfig",
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
var WorkerVersionAssetsOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionAssetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerVersionAssetsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: false, optional: true, required: false
        _this._config = new WorkerVersionAssetsConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(WorkerVersionAssetsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerVersionAssetsOutputReference.prototype, "assetManifestSha256", {
        // asset_manifest_sha256 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('asset_manifest_sha256');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionAssetsOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionAssetsOutputReference.prototype.putConfig = function (value) {
        this._config.internalValue = value;
    };
    WorkerVersionAssetsOutputReference.prototype.resetConfig = function () {
        this._config.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersionAssetsOutputReference.prototype, "configInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._config.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionAssetsOutputReference.prototype, "directory", {
        get: function () {
            return this.getStringAttribute('directory');
        },
        set: function (value) {
            this._directory = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionAssetsOutputReference.prototype.resetDirectory = function () {
        this._directory = undefined;
    };
    Object.defineProperty(WorkerVersionAssetsOutputReference.prototype, "directoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionAssetsOutputReference.prototype, "jwt", {
        get: function () {
            return this.getStringAttribute('jwt');
        },
        set: function (value) {
            this._jwt = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionAssetsOutputReference.prototype.resetJwt = function () {
        this._jwt = undefined;
    };
    Object.defineProperty(WorkerVersionAssetsOutputReference.prototype, "jwtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jwt;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionAssetsOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionAssetsOutputReference = WorkerVersionAssetsOutputReference;
function workerVersionBindingsOutboundParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
function workerVersionBindingsOutboundParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
var WorkerVersionBindingsOutboundParamsOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionBindingsOutboundParamsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionBindingsOutboundParamsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionBindingsOutboundParamsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutboundParamsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutboundParamsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionBindingsOutboundParamsOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionBindingsOutboundParamsOutputReference = WorkerVersionBindingsOutboundParamsOutputReference;
var WorkerVersionBindingsOutboundParamsList = /** @class */ (function (_super) {
    __extends(WorkerVersionBindingsOutboundParamsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionBindingsOutboundParamsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerVersionBindingsOutboundParamsList.prototype.get = function (index) {
        return new WorkerVersionBindingsOutboundParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerVersionBindingsOutboundParamsList;
}(cdktf.ComplexList));
exports.WorkerVersionBindingsOutboundParamsList = WorkerVersionBindingsOutboundParamsList;
function workerVersionBindingsOutboundWorkerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        entrypoint: cdktf.stringToTerraform(struct.entrypoint),
        environment: cdktf.stringToTerraform(struct.environment),
        service: cdktf.stringToTerraform(struct.service),
    };
}
function workerVersionBindingsOutboundWorkerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
var WorkerVersionBindingsOutboundWorkerOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionBindingsOutboundWorkerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerVersionBindingsOutboundWorkerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionBindingsOutboundWorkerOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._entrypoint !== undefined) {
                hasAnyValues = true;
                internalValueResult.entrypoint = this._entrypoint;
            }
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
                this._entrypoint = undefined;
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
                this._entrypoint = value.entrypoint;
                this._environment = value.environment;
                this._service = value.service;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutboundWorkerOutputReference.prototype, "entrypoint", {
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        set: function (value) {
            this._entrypoint = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutboundWorkerOutputReference.prototype.resetEntrypoint = function () {
        this._entrypoint = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutboundWorkerOutputReference.prototype, "entrypointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entrypoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutboundWorkerOutputReference.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutboundWorkerOutputReference.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutboundWorkerOutputReference.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutboundWorkerOutputReference.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutboundWorkerOutputReference.prototype.resetService = function () {
        this._service = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutboundWorkerOutputReference.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionBindingsOutboundWorkerOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionBindingsOutboundWorkerOutputReference = WorkerVersionBindingsOutboundWorkerOutputReference;
function workerVersionBindingsOutboundToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        params: cdktf.listMapper(workerVersionBindingsOutboundParamsToTerraform, false)(struct.params),
        worker: workerVersionBindingsOutboundWorkerToTerraform(struct.worker),
    };
}
function workerVersionBindingsOutboundToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        params: {
            value: cdktf.listMapperHcl(workerVersionBindingsOutboundParamsToHclTerraform, false)(struct.params),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionBindingsOutboundParamsList",
        },
        worker: {
            value: workerVersionBindingsOutboundWorkerToHclTerraform(struct.worker),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerVersionBindingsOutboundWorker",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkerVersionBindingsOutboundOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionBindingsOutboundOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerVersionBindingsOutboundOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // params - computed: false, optional: true, required: false
        _this._params = new WorkerVersionBindingsOutboundParamsList(_this, "params", false);
        // worker - computed: false, optional: true, required: false
        _this._worker = new WorkerVersionBindingsOutboundWorkerOutputReference(_this, "worker");
        return _this;
    }
    Object.defineProperty(WorkerVersionBindingsOutboundOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._params) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.params = (_b = this._params) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._worker) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.worker = (_d = this._worker) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._params.internalValue = undefined;
                this._worker.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._params.internalValue = value.params;
                this._worker.internalValue = value.worker;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutboundOutputReference.prototype, "params", {
        get: function () {
            return this._params;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutboundOutputReference.prototype.putParams = function (value) {
        this._params.internalValue = value;
    };
    WorkerVersionBindingsOutboundOutputReference.prototype.resetParams = function () {
        this._params.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutboundOutputReference.prototype, "paramsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._params.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutboundOutputReference.prototype, "worker", {
        get: function () {
            return this._worker;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutboundOutputReference.prototype.putWorker = function (value) {
        this._worker.internalValue = value;
    };
    WorkerVersionBindingsOutboundOutputReference.prototype.resetWorker = function () {
        this._worker.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutboundOutputReference.prototype, "workerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._worker.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionBindingsOutboundOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionBindingsOutboundOutputReference = WorkerVersionBindingsOutboundOutputReference;
function workerVersionBindingsSimpleToTerraform(struct) {
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
function workerVersionBindingsSimpleToHclTerraform(struct) {
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
var WorkerVersionBindingsSimpleOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionBindingsSimpleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerVersionBindingsSimpleOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionBindingsSimpleOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerVersionBindingsSimpleOutputReference.prototype, "limit", {
        get: function () {
            return this.getNumberAttribute('limit');
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsSimpleOutputReference.prototype, "limitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsSimpleOutputReference.prototype, "period", {
        get: function () {
            return this.getNumberAttribute('period');
        },
        set: function (value) {
            this._period = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsSimpleOutputReference.prototype, "periodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._period;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionBindingsSimpleOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionBindingsSimpleOutputReference = WorkerVersionBindingsSimpleOutputReference;
function workerVersionBindingsToTerraform(struct) {
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
        outbound: workerVersionBindingsOutboundToTerraform(struct.outbound),
        part: cdktf.stringToTerraform(struct.part),
        pipeline: cdktf.stringToTerraform(struct.pipeline),
        queue_name: cdktf.stringToTerraform(struct.queueName),
        script_name: cdktf.stringToTerraform(struct.scriptName),
        secret_name: cdktf.stringToTerraform(struct.secretName),
        service: cdktf.stringToTerraform(struct.service),
        service_id: cdktf.stringToTerraform(struct.serviceId),
        simple: workerVersionBindingsSimpleToTerraform(struct.simple),
        store_id: cdktf.stringToTerraform(struct.storeId),
        text: cdktf.stringToTerraform(struct.text),
        tunnel_id: cdktf.stringToTerraform(struct.tunnelId),
        type: cdktf.stringToTerraform(struct.type),
        usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.usages),
        version_id: cdktf.stringToTerraform(struct.versionId),
        workflow_name: cdktf.stringToTerraform(struct.workflowName),
    };
}
function workerVersionBindingsToHclTerraform(struct) {
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
            value: workerVersionBindingsOutboundToHclTerraform(struct.outbound),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerVersionBindingsOutbound",
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
            value: workerVersionBindingsSimpleToHclTerraform(struct.simple),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerVersionBindingsSimple",
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
var WorkerVersionBindingsOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionBindingsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // outbound - computed: false, optional: true, required: false
        _this._outbound = new WorkerVersionBindingsOutboundOutputReference(_this, "outbound");
        // simple - computed: false, optional: true, required: false
        _this._simple = new WorkerVersionBindingsSimpleOutputReference(_this, "simple");
        return _this;
    }
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "algorithm", {
        get: function () {
            return this.getStringAttribute('algorithm');
        },
        set: function (value) {
            this._algorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetAlgorithm = function () {
        this._algorithm = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "algorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._algorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "allowedDestinationAddresses", {
        get: function () {
            return this.getListAttribute('allowed_destination_addresses');
        },
        set: function (value) {
            this._allowedDestinationAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetAllowedDestinationAddresses = function () {
        this._allowedDestinationAddresses = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "allowedDestinationAddressesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedDestinationAddresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "allowedSenderAddresses", {
        get: function () {
            return this.getListAttribute('allowed_sender_addresses');
        },
        set: function (value) {
            this._allowedSenderAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetAllowedSenderAddresses = function () {
        this._allowedSenderAddresses = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "allowedSenderAddressesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedSenderAddresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "appId", {
        get: function () {
            return this.getStringAttribute('app_id');
        },
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetAppId = function () {
        this._appId = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "appIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetBucketName = function () {
        this._bucketName = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "certificateId", {
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        set: function (value) {
            this._certificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetCertificateId = function () {
        this._certificateId = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "certificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "className", {
        get: function () {
            return this.getStringAttribute('class_name');
        },
        set: function (value) {
            this._className = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetClassName = function () {
        this._className = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "classNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._className;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "databaseId", {
        get: function () {
            return this.getStringAttribute('database_id');
        },
        set: function (value) {
            this._databaseId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetDatabaseId = function () {
        this._databaseId = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "databaseIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "dataset", {
        get: function () {
            return this.getStringAttribute('dataset');
        },
        set: function (value) {
            this._dataset = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetDataset = function () {
        this._dataset = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "datasetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "destinationAddress", {
        get: function () {
            return this.getStringAttribute('destination_address');
        },
        set: function (value) {
            this._destinationAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetDestinationAddress = function () {
        this._destinationAddress = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "destinationAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "dispatchNamespace", {
        get: function () {
            return this.getStringAttribute('dispatch_namespace');
        },
        set: function (value) {
            this._dispatchNamespace = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetDispatchNamespace = function () {
        this._dispatchNamespace = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "dispatchNamespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dispatchNamespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "entrypoint", {
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        set: function (value) {
            this._entrypoint = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetEntrypoint = function () {
        this._entrypoint = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "entrypointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entrypoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "environment", {
        get: function () {
            return this.getStringAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "format", {
        get: function () {
            return this.getStringAttribute('format');
        },
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetFormat = function () {
        this._format = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "formatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "indexName", {
        get: function () {
            return this.getStringAttribute('index_name');
        },
        set: function (value) {
            this._indexName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetIndexName = function () {
        this._indexName = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "indexNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._indexName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "instanceName", {
        get: function () {
            return this.getStringAttribute('instance_name');
        },
        set: function (value) {
            this._instanceName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetInstanceName = function () {
        this._instanceName = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "instanceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "json", {
        get: function () {
            return this.getStringAttribute('json');
        },
        set: function (value) {
            this._json = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetJson = function () {
        this._json = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "jsonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._json;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "keyBase64", {
        get: function () {
            return this.getStringAttribute('key_base64');
        },
        set: function (value) {
            this._keyBase64 = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetKeyBase64 = function () {
        this._keyBase64 = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "keyBase64Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyBase64;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "keyJwk", {
        get: function () {
            return this.getStringAttribute('key_jwk');
        },
        set: function (value) {
            this._keyJwk = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetKeyJwk = function () {
        this._keyJwk = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "keyJwkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyJwk;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "namespace", {
        get: function () {
            return this.getStringAttribute('namespace');
        },
        set: function (value) {
            this._namespace = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetNamespace = function () {
        this._namespace = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "namespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "namespaceId", {
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        set: function (value) {
            this._namespaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetNamespaceId = function () {
        this._namespaceId = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "namespaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "networkId", {
        get: function () {
            return this.getStringAttribute('network_id');
        },
        set: function (value) {
            this._networkId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetNetworkId = function () {
        this._networkId = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "networkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "oldName", {
        get: function () {
            return this.getStringAttribute('old_name');
        },
        set: function (value) {
            this._oldName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetOldName = function () {
        this._oldName = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "oldNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oldName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "outbound", {
        get: function () {
            return this._outbound;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.putOutbound = function (value) {
        this._outbound.internalValue = value;
    };
    WorkerVersionBindingsOutputReference.prototype.resetOutbound = function () {
        this._outbound.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "outboundInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outbound.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "part", {
        get: function () {
            return this.getStringAttribute('part');
        },
        set: function (value) {
            this._part = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetPart = function () {
        this._part = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "partInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._part;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "pipeline", {
        get: function () {
            return this.getStringAttribute('pipeline');
        },
        set: function (value) {
            this._pipeline = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetPipeline = function () {
        this._pipeline = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "pipelineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pipeline;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "queueName", {
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        set: function (value) {
            this._queueName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetQueueName = function () {
        this._queueName = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "queueNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "scriptName", {
        get: function () {
            return this.getStringAttribute('script_name');
        },
        set: function (value) {
            this._scriptName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetScriptName = function () {
        this._scriptName = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "scriptNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scriptName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "secretName", {
        get: function () {
            return this.getStringAttribute('secret_name');
        },
        set: function (value) {
            this._secretName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetSecretName = function () {
        this._secretName = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "secretNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetService = function () {
        this._service = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "serviceId", {
        get: function () {
            return this.getStringAttribute('service_id');
        },
        set: function (value) {
            this._serviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetServiceId = function () {
        this._serviceId = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "serviceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "simple", {
        get: function () {
            return this._simple;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.putSimple = function (value) {
        this._simple.internalValue = value;
    };
    WorkerVersionBindingsOutputReference.prototype.resetSimple = function () {
        this._simple.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "simpleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._simple.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "storeId", {
        get: function () {
            return this.getStringAttribute('store_id');
        },
        set: function (value) {
            this._storeId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetStoreId = function () {
        this._storeId = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "storeIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storeId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "text", {
        get: function () {
            return this.getStringAttribute('text');
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetText = function () {
        this._text = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "textInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetTunnelId = function () {
        this._tunnelId = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "usages", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('usages'));
        },
        set: function (value) {
            this._usages = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetUsages = function () {
        this._usages = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "usagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "versionId", {
        get: function () {
            return this.getStringAttribute('version_id');
        },
        set: function (value) {
            this._versionId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetVersionId = function () {
        this._versionId = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "versionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "workflowName", {
        get: function () {
            return this.getStringAttribute('workflow_name');
        },
        set: function (value) {
            this._workflowName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionBindingsOutputReference.prototype.resetWorkflowName = function () {
        this._workflowName = undefined;
    };
    Object.defineProperty(WorkerVersionBindingsOutputReference.prototype, "workflowNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workflowName;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionBindingsOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionBindingsOutputReference = WorkerVersionBindingsOutputReference;
var WorkerVersionBindingsList = /** @class */ (function (_super) {
    __extends(WorkerVersionBindingsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionBindingsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerVersionBindingsList.prototype.get = function (index) {
        return new WorkerVersionBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerVersionBindingsList;
}(cdktf.ComplexList));
exports.WorkerVersionBindingsList = WorkerVersionBindingsList;
function workerVersionContainersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        class_name: cdktf.stringToTerraform(struct.className),
    };
}
function workerVersionContainersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        class_name: {
            value: cdktf.stringToHclTerraform(struct.className),
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
var WorkerVersionContainersOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionContainersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionContainersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionContainersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._className !== undefined) {
                hasAnyValues = true;
                internalValueResult.className = this._className;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._className = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._className = value.className;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionContainersOutputReference.prototype, "className", {
        get: function () {
            return this.getStringAttribute('class_name');
        },
        set: function (value) {
            this._className = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionContainersOutputReference.prototype, "classNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._className;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionContainersOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionContainersOutputReference = WorkerVersionContainersOutputReference;
var WorkerVersionContainersList = /** @class */ (function (_super) {
    __extends(WorkerVersionContainersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionContainersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerVersionContainersList.prototype.get = function (index) {
        return new WorkerVersionContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerVersionContainersList;
}(cdktf.ComplexList));
exports.WorkerVersionContainersList = WorkerVersionContainersList;
function workerVersionLimitsToTerraform(struct) {
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
function workerVersionLimitsToHclTerraform(struct) {
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
var WorkerVersionLimitsOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerVersionLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionLimitsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerVersionLimitsOutputReference.prototype, "cpuMs", {
        get: function () {
            return this.getNumberAttribute('cpu_ms');
        },
        set: function (value) {
            this._cpuMs = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionLimitsOutputReference.prototype.resetCpuMs = function () {
        this._cpuMs = undefined;
    };
    Object.defineProperty(WorkerVersionLimitsOutputReference.prototype, "cpuMsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuMs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionLimitsOutputReference.prototype, "subrequests", {
        get: function () {
            return this.getNumberAttribute('subrequests');
        },
        set: function (value) {
            this._subrequests = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionLimitsOutputReference.prototype.resetSubrequests = function () {
        this._subrequests = undefined;
    };
    Object.defineProperty(WorkerVersionLimitsOutputReference.prototype, "subrequestsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subrequests;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionLimitsOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionLimitsOutputReference = WorkerVersionLimitsOutputReference;
function workerVersionMigrationsRenamedClassesToTerraform(struct) {
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
function workerVersionMigrationsRenamedClassesToHclTerraform(struct) {
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
var WorkerVersionMigrationsRenamedClassesOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionMigrationsRenamedClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionMigrationsRenamedClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionMigrationsRenamedClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerVersionMigrationsRenamedClassesOutputReference.prototype, "from", {
        get: function () {
            return this.getStringAttribute('from');
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsRenamedClassesOutputReference.prototype.resetFrom = function () {
        this._from = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsRenamedClassesOutputReference.prototype, "fromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsRenamedClassesOutputReference.prototype, "to", {
        get: function () {
            return this.getStringAttribute('to');
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsRenamedClassesOutputReference.prototype.resetTo = function () {
        this._to = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsRenamedClassesOutputReference.prototype, "toInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionMigrationsRenamedClassesOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionMigrationsRenamedClassesOutputReference = WorkerVersionMigrationsRenamedClassesOutputReference;
var WorkerVersionMigrationsRenamedClassesList = /** @class */ (function (_super) {
    __extends(WorkerVersionMigrationsRenamedClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionMigrationsRenamedClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerVersionMigrationsRenamedClassesList.prototype.get = function (index) {
        return new WorkerVersionMigrationsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerVersionMigrationsRenamedClassesList;
}(cdktf.ComplexList));
exports.WorkerVersionMigrationsRenamedClassesList = WorkerVersionMigrationsRenamedClassesList;
function workerVersionMigrationsStepsRenamedClassesToTerraform(struct) {
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
function workerVersionMigrationsStepsRenamedClassesToHclTerraform(struct) {
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
var WorkerVersionMigrationsStepsRenamedClassesOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionMigrationsStepsRenamedClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionMigrationsStepsRenamedClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionMigrationsStepsRenamedClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerVersionMigrationsStepsRenamedClassesOutputReference.prototype, "from", {
        get: function () {
            return this.getStringAttribute('from');
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsStepsRenamedClassesOutputReference.prototype.resetFrom = function () {
        this._from = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsStepsRenamedClassesOutputReference.prototype, "fromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsStepsRenamedClassesOutputReference.prototype, "to", {
        get: function () {
            return this.getStringAttribute('to');
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsStepsRenamedClassesOutputReference.prototype.resetTo = function () {
        this._to = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsStepsRenamedClassesOutputReference.prototype, "toInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionMigrationsStepsRenamedClassesOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionMigrationsStepsRenamedClassesOutputReference = WorkerVersionMigrationsStepsRenamedClassesOutputReference;
var WorkerVersionMigrationsStepsRenamedClassesList = /** @class */ (function (_super) {
    __extends(WorkerVersionMigrationsStepsRenamedClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionMigrationsStepsRenamedClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerVersionMigrationsStepsRenamedClassesList.prototype.get = function (index) {
        return new WorkerVersionMigrationsStepsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerVersionMigrationsStepsRenamedClassesList;
}(cdktf.ComplexList));
exports.WorkerVersionMigrationsStepsRenamedClassesList = WorkerVersionMigrationsStepsRenamedClassesList;
function workerVersionMigrationsStepsTransferredClassesToTerraform(struct) {
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
function workerVersionMigrationsStepsTransferredClassesToHclTerraform(struct) {
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
var WorkerVersionMigrationsStepsTransferredClassesOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionMigrationsStepsTransferredClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionMigrationsStepsTransferredClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype, "from", {
        get: function () {
            return this.getStringAttribute('from');
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype.resetFrom = function () {
        this._from = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype, "fromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype, "fromScript", {
        get: function () {
            return this.getStringAttribute('from_script');
        },
        set: function (value) {
            this._fromScript = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype.resetFromScript = function () {
        this._fromScript = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype, "fromScriptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fromScript;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype, "to", {
        get: function () {
            return this.getStringAttribute('to');
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype.resetTo = function () {
        this._to = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype, "toInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionMigrationsStepsTransferredClassesOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionMigrationsStepsTransferredClassesOutputReference = WorkerVersionMigrationsStepsTransferredClassesOutputReference;
var WorkerVersionMigrationsStepsTransferredClassesList = /** @class */ (function (_super) {
    __extends(WorkerVersionMigrationsStepsTransferredClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionMigrationsStepsTransferredClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerVersionMigrationsStepsTransferredClassesList.prototype.get = function (index) {
        return new WorkerVersionMigrationsStepsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerVersionMigrationsStepsTransferredClassesList;
}(cdktf.ComplexList));
exports.WorkerVersionMigrationsStepsTransferredClassesList = WorkerVersionMigrationsStepsTransferredClassesList;
function workerVersionMigrationsStepsToTerraform(struct) {
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
        renamed_classes: cdktf.listMapper(workerVersionMigrationsStepsRenamedClassesToTerraform, false)(struct.renamedClasses),
        transferred_classes: cdktf.listMapper(workerVersionMigrationsStepsTransferredClassesToTerraform, false)(struct.transferredClasses),
    };
}
function workerVersionMigrationsStepsToHclTerraform(struct) {
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
            value: cdktf.listMapperHcl(workerVersionMigrationsStepsRenamedClassesToHclTerraform, false)(struct.renamedClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionMigrationsStepsRenamedClassesList",
        },
        transferred_classes: {
            value: cdktf.listMapperHcl(workerVersionMigrationsStepsTransferredClassesToHclTerraform, false)(struct.transferredClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionMigrationsStepsTransferredClassesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkerVersionMigrationsStepsOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionMigrationsStepsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionMigrationsStepsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // renamed_classes - computed: false, optional: true, required: false
        _this._renamedClasses = new WorkerVersionMigrationsStepsRenamedClassesList(_this, "renamed_classes", false);
        // transferred_classes - computed: false, optional: true, required: false
        _this._transferredClasses = new WorkerVersionMigrationsStepsTransferredClassesList(_this, "transferred_classes", false);
        return _this;
    }
    Object.defineProperty(WorkerVersionMigrationsStepsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerVersionMigrationsStepsOutputReference.prototype, "deletedClasses", {
        get: function () {
            return this.getListAttribute('deleted_classes');
        },
        set: function (value) {
            this._deletedClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsStepsOutputReference.prototype.resetDeletedClasses = function () {
        this._deletedClasses = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsStepsOutputReference.prototype, "deletedClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletedClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsStepsOutputReference.prototype, "newClasses", {
        get: function () {
            return this.getListAttribute('new_classes');
        },
        set: function (value) {
            this._newClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsStepsOutputReference.prototype.resetNewClasses = function () {
        this._newClasses = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsStepsOutputReference.prototype, "newClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsStepsOutputReference.prototype, "newSqliteClasses", {
        get: function () {
            return this.getListAttribute('new_sqlite_classes');
        },
        set: function (value) {
            this._newSqliteClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsStepsOutputReference.prototype.resetNewSqliteClasses = function () {
        this._newSqliteClasses = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsStepsOutputReference.prototype, "newSqliteClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newSqliteClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsStepsOutputReference.prototype, "renamedClasses", {
        get: function () {
            return this._renamedClasses;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsStepsOutputReference.prototype.putRenamedClasses = function (value) {
        this._renamedClasses.internalValue = value;
    };
    WorkerVersionMigrationsStepsOutputReference.prototype.resetRenamedClasses = function () {
        this._renamedClasses.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsStepsOutputReference.prototype, "renamedClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._renamedClasses.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsStepsOutputReference.prototype, "transferredClasses", {
        get: function () {
            return this._transferredClasses;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsStepsOutputReference.prototype.putTransferredClasses = function (value) {
        this._transferredClasses.internalValue = value;
    };
    WorkerVersionMigrationsStepsOutputReference.prototype.resetTransferredClasses = function () {
        this._transferredClasses.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsStepsOutputReference.prototype, "transferredClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transferredClasses.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionMigrationsStepsOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionMigrationsStepsOutputReference = WorkerVersionMigrationsStepsOutputReference;
var WorkerVersionMigrationsStepsList = /** @class */ (function (_super) {
    __extends(WorkerVersionMigrationsStepsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionMigrationsStepsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerVersionMigrationsStepsList.prototype.get = function (index) {
        return new WorkerVersionMigrationsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerVersionMigrationsStepsList;
}(cdktf.ComplexList));
exports.WorkerVersionMigrationsStepsList = WorkerVersionMigrationsStepsList;
function workerVersionMigrationsTransferredClassesToTerraform(struct) {
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
function workerVersionMigrationsTransferredClassesToHclTerraform(struct) {
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
var WorkerVersionMigrationsTransferredClassesOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionMigrationsTransferredClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionMigrationsTransferredClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionMigrationsTransferredClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerVersionMigrationsTransferredClassesOutputReference.prototype, "from", {
        get: function () {
            return this.getStringAttribute('from');
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsTransferredClassesOutputReference.prototype.resetFrom = function () {
        this._from = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsTransferredClassesOutputReference.prototype, "fromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsTransferredClassesOutputReference.prototype, "fromScript", {
        get: function () {
            return this.getStringAttribute('from_script');
        },
        set: function (value) {
            this._fromScript = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsTransferredClassesOutputReference.prototype.resetFromScript = function () {
        this._fromScript = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsTransferredClassesOutputReference.prototype, "fromScriptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fromScript;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsTransferredClassesOutputReference.prototype, "to", {
        get: function () {
            return this.getStringAttribute('to');
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsTransferredClassesOutputReference.prototype.resetTo = function () {
        this._to = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsTransferredClassesOutputReference.prototype, "toInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionMigrationsTransferredClassesOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionMigrationsTransferredClassesOutputReference = WorkerVersionMigrationsTransferredClassesOutputReference;
var WorkerVersionMigrationsTransferredClassesList = /** @class */ (function (_super) {
    __extends(WorkerVersionMigrationsTransferredClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionMigrationsTransferredClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerVersionMigrationsTransferredClassesList.prototype.get = function (index) {
        return new WorkerVersionMigrationsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerVersionMigrationsTransferredClassesList;
}(cdktf.ComplexList));
exports.WorkerVersionMigrationsTransferredClassesList = WorkerVersionMigrationsTransferredClassesList;
function workerVersionMigrationsToTerraform(struct) {
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
        renamed_classes: cdktf.listMapper(workerVersionMigrationsRenamedClassesToTerraform, false)(struct.renamedClasses),
        steps: cdktf.listMapper(workerVersionMigrationsStepsToTerraform, false)(struct.steps),
        transferred_classes: cdktf.listMapper(workerVersionMigrationsTransferredClassesToTerraform, false)(struct.transferredClasses),
    };
}
function workerVersionMigrationsToHclTerraform(struct) {
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
            value: cdktf.listMapperHcl(workerVersionMigrationsRenamedClassesToHclTerraform, false)(struct.renamedClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionMigrationsRenamedClassesList",
        },
        steps: {
            value: cdktf.listMapperHcl(workerVersionMigrationsStepsToHclTerraform, false)(struct.steps),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionMigrationsStepsList",
        },
        transferred_classes: {
            value: cdktf.listMapperHcl(workerVersionMigrationsTransferredClassesToHclTerraform, false)(struct.transferredClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionMigrationsTransferredClassesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkerVersionMigrationsOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionMigrationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerVersionMigrationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // renamed_classes - computed: false, optional: true, required: false
        _this._renamedClasses = new WorkerVersionMigrationsRenamedClassesList(_this, "renamed_classes", false);
        // steps - computed: false, optional: true, required: false
        _this._steps = new WorkerVersionMigrationsStepsList(_this, "steps", false);
        // transferred_classes - computed: false, optional: true, required: false
        _this._transferredClasses = new WorkerVersionMigrationsTransferredClassesList(_this, "transferred_classes", false);
        return _this;
    }
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "deletedClasses", {
        get: function () {
            return this.getListAttribute('deleted_classes');
        },
        set: function (value) {
            this._deletedClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsOutputReference.prototype.resetDeletedClasses = function () {
        this._deletedClasses = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "deletedClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletedClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "newClasses", {
        get: function () {
            return this.getListAttribute('new_classes');
        },
        set: function (value) {
            this._newClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsOutputReference.prototype.resetNewClasses = function () {
        this._newClasses = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "newClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "newSqliteClasses", {
        get: function () {
            return this.getListAttribute('new_sqlite_classes');
        },
        set: function (value) {
            this._newSqliteClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsOutputReference.prototype.resetNewSqliteClasses = function () {
        this._newSqliteClasses = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "newSqliteClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newSqliteClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "newTag", {
        get: function () {
            return this.getStringAttribute('new_tag');
        },
        set: function (value) {
            this._newTag = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsOutputReference.prototype.resetNewTag = function () {
        this._newTag = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "newTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "oldTag", {
        get: function () {
            return this.getStringAttribute('old_tag');
        },
        set: function (value) {
            this._oldTag = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsOutputReference.prototype.resetOldTag = function () {
        this._oldTag = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "oldTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oldTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "renamedClasses", {
        get: function () {
            return this._renamedClasses;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsOutputReference.prototype.putRenamedClasses = function (value) {
        this._renamedClasses.internalValue = value;
    };
    WorkerVersionMigrationsOutputReference.prototype.resetRenamedClasses = function () {
        this._renamedClasses.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "renamedClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._renamedClasses.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "steps", {
        get: function () {
            return this._steps;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsOutputReference.prototype.putSteps = function (value) {
        this._steps.internalValue = value;
    };
    WorkerVersionMigrationsOutputReference.prototype.resetSteps = function () {
        this._steps.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "stepsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._steps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "transferredClasses", {
        get: function () {
            return this._transferredClasses;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionMigrationsOutputReference.prototype.putTransferredClasses = function (value) {
        this._transferredClasses.internalValue = value;
    };
    WorkerVersionMigrationsOutputReference.prototype.resetTransferredClasses = function () {
        this._transferredClasses.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersionMigrationsOutputReference.prototype, "transferredClassesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transferredClasses.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionMigrationsOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionMigrationsOutputReference = WorkerVersionMigrationsOutputReference;
function workerVersionModulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_base64: cdktf.stringToTerraform(struct.contentBase64),
        content_file: cdktf.stringToTerraform(struct.contentFile),
        content_type: cdktf.stringToTerraform(struct.contentType),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function workerVersionModulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        content_base64: {
            value: cdktf.stringToHclTerraform(struct.contentBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_file: {
            value: cdktf.stringToHclTerraform(struct.contentFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkerVersionModulesOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionModulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionModulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionModulesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contentBase64 !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentBase64 = this._contentBase64;
            }
            if (this._contentFile !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentFile = this._contentFile;
            }
            if (this._contentType !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentType = this._contentType;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._contentBase64 = undefined;
                this._contentFile = undefined;
                this._contentType = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contentBase64 = value.contentBase64;
                this._contentFile = value.contentFile;
                this._contentType = value.contentType;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionModulesOutputReference.prototype, "contentBase64", {
        get: function () {
            return this.getStringAttribute('content_base64');
        },
        set: function (value) {
            this._contentBase64 = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionModulesOutputReference.prototype.resetContentBase64 = function () {
        this._contentBase64 = undefined;
    };
    Object.defineProperty(WorkerVersionModulesOutputReference.prototype, "contentBase64Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentBase64;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionModulesOutputReference.prototype, "contentFile", {
        get: function () {
            return this.getStringAttribute('content_file');
        },
        set: function (value) {
            this._contentFile = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionModulesOutputReference.prototype.resetContentFile = function () {
        this._contentFile = undefined;
    };
    Object.defineProperty(WorkerVersionModulesOutputReference.prototype, "contentFileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionModulesOutputReference.prototype, "contentSha256", {
        // content_sha256 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_sha256');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionModulesOutputReference.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionModulesOutputReference.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionModulesOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionModulesOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionModulesOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionModulesOutputReference = WorkerVersionModulesOutputReference;
var WorkerVersionModulesList = /** @class */ (function (_super) {
    __extends(WorkerVersionModulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionModulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerVersionModulesList.prototype.get = function (index) {
        return new WorkerVersionModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerVersionModulesList;
}(cdktf.ComplexList));
exports.WorkerVersionModulesList = WorkerVersionModulesList;
function workerVersionPlacementTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        hostname: cdktf.stringToTerraform(struct.hostname),
        region: cdktf.stringToTerraform(struct.region),
    };
}
function workerVersionPlacementTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktf.stringToHclTerraform(struct.region),
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
var WorkerVersionPlacementTargetOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionPlacementTargetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionPlacementTargetOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(WorkerVersionPlacementTargetOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._hostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = this._hostname;
            }
            if (this._region !== undefined) {
                hasAnyValues = true;
                internalValueResult.region = this._region;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._host = undefined;
                this._hostname = undefined;
                this._region = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._host = value.host;
                this._hostname = value.hostname;
                this._region = value.region;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionPlacementTargetOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionPlacementTargetOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(WorkerVersionPlacementTargetOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionPlacementTargetOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionPlacementTargetOutputReference.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(WorkerVersionPlacementTargetOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionPlacementTargetOutputReference.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionPlacementTargetOutputReference.prototype.resetRegion = function () {
        this._region = undefined;
    };
    Object.defineProperty(WorkerVersionPlacementTargetOutputReference.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionPlacementTargetOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionPlacementTargetOutputReference = WorkerVersionPlacementTargetOutputReference;
var WorkerVersionPlacementTargetList = /** @class */ (function (_super) {
    __extends(WorkerVersionPlacementTargetList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function WorkerVersionPlacementTargetList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    WorkerVersionPlacementTargetList.prototype.get = function (index) {
        return new WorkerVersionPlacementTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return WorkerVersionPlacementTargetList;
}(cdktf.ComplexList));
exports.WorkerVersionPlacementTargetList = WorkerVersionPlacementTargetList;
function workerVersionPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        hostname: cdktf.stringToTerraform(struct.hostname),
        mode: cdktf.stringToTerraform(struct.mode),
        region: cdktf.stringToTerraform(struct.region),
        target: cdktf.listMapper(workerVersionPlacementTargetToTerraform, false)(struct.target),
    };
}
function workerVersionPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktf.stringToHclTerraform(struct.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktf.listMapperHcl(workerVersionPlacementTargetToHclTerraform, false)(struct.target),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionPlacementTargetList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var WorkerVersionPlacementOutputReference = /** @class */ (function (_super) {
    __extends(WorkerVersionPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function WorkerVersionPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // target - computed: false, optional: true, required: false
        _this._target = new WorkerVersionPlacementTargetList(_this, "target", false);
        return _this;
    }
    Object.defineProperty(WorkerVersionPlacementOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._hostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = this._hostname;
            }
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (this._region !== undefined) {
                hasAnyValues = true;
                internalValueResult.region = this._region;
            }
            if (((_a = this._target) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.target = (_b = this._target) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._host = undefined;
                this._hostname = undefined;
                this._mode = undefined;
                this._region = undefined;
                this._target.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._host = value.host;
                this._hostname = value.hostname;
                this._mode = value.mode;
                this._region = value.region;
                this._target.internalValue = value.target;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionPlacementOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionPlacementOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(WorkerVersionPlacementOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionPlacementOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionPlacementOutputReference.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(WorkerVersionPlacementOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionPlacementOutputReference.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionPlacementOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(WorkerVersionPlacementOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionPlacementOutputReference.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionPlacementOutputReference.prototype.resetRegion = function () {
        this._region = undefined;
    };
    Object.defineProperty(WorkerVersionPlacementOutputReference.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersionPlacementOutputReference.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersionPlacementOutputReference.prototype.putTarget = function (value) {
        this._target.internalValue = value;
    };
    WorkerVersionPlacementOutputReference.prototype.resetTarget = function () {
        this._target.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersionPlacementOutputReference.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return WorkerVersionPlacementOutputReference;
}(cdktf.ComplexObject));
exports.WorkerVersionPlacementOutputReference = WorkerVersionPlacementOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version cloudflare_worker_version}
*/
var WorkerVersion = /** @class */ (function (_super) {
    __extends(WorkerVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version cloudflare_worker_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkerVersionConfig
    */
    function WorkerVersion(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_worker_version',
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
        _this._annotations = new WorkerVersionAnnotationsOutputReference(_this, "annotations");
        // assets - computed: false, optional: true, required: false
        _this._assets = new WorkerVersionAssetsOutputReference(_this, "assets");
        // bindings - computed: false, optional: true, required: false
        _this._bindings = new WorkerVersionBindingsList(_this, "bindings", false);
        // containers - computed: false, optional: true, required: false
        _this._containers = new WorkerVersionContainersList(_this, "containers", true);
        // limits - computed: true, optional: true, required: false
        _this._limits = new WorkerVersionLimitsOutputReference(_this, "limits");
        // migrations - computed: false, optional: true, required: false
        _this._migrations = new WorkerVersionMigrationsOutputReference(_this, "migrations");
        // modules - computed: false, optional: true, required: false
        _this._modules = new WorkerVersionModulesList(_this, "modules", true);
        // placement - computed: false, optional: true, required: false
        _this._placement = new WorkerVersionPlacementOutputReference(_this, "placement");
        _this._accountId = config.accountId;
        _this._annotations.internalValue = config.annotations;
        _this._assets.internalValue = config.assets;
        _this._bindings.internalValue = config.bindings;
        _this._compatibilityDate = config.compatibilityDate;
        _this._compatibilityFlags = config.compatibilityFlags;
        _this._containers.internalValue = config.containers;
        _this._limits.internalValue = config.limits;
        _this._mainModule = config.mainModule;
        _this._migrations.internalValue = config.migrations;
        _this._modules.internalValue = config.modules;
        _this._placement.internalValue = config.placement;
        _this._usageModel = config.usageModel;
        _this._workerId = config.workerId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkerVersion to import
    * @param importFromId The id of the existing WorkerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkerVersion to import is found
    */
    WorkerVersion.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker_version", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WorkerVersion.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "annotations", {
        get: function () {
            return this._annotations;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.putAnnotations = function (value) {
        this._annotations.internalValue = value;
    };
    WorkerVersion.prototype.resetAnnotations = function () {
        this._annotations.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "annotationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._annotations.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "assets", {
        get: function () {
            return this._assets;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.putAssets = function (value) {
        this._assets.internalValue = value;
    };
    WorkerVersion.prototype.resetAssets = function () {
        this._assets.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "assetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assets.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "bindings", {
        get: function () {
            return this._bindings;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.putBindings = function (value) {
        this._bindings.internalValue = value;
    };
    WorkerVersion.prototype.resetBindings = function () {
        this._bindings.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "bindingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bindings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "compatibilityDate", {
        get: function () {
            return this.getStringAttribute('compatibility_date');
        },
        set: function (value) {
            this._compatibilityDate = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.resetCompatibilityDate = function () {
        this._compatibilityDate = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "compatibilityDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibilityDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "compatibilityFlags", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('compatibility_flags'));
        },
        set: function (value) {
            this._compatibilityFlags = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.resetCompatibilityFlags = function () {
        this._compatibilityFlags = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "compatibilityFlagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibilityFlags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "containers", {
        get: function () {
            return this._containers;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.putContainers = function (value) {
        this._containers.internalValue = value;
    };
    WorkerVersion.prototype.resetContainers = function () {
        this._containers.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "containersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._containers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.putLimits = function (value) {
        this._limits.internalValue = value;
    };
    WorkerVersion.prototype.resetLimits = function () {
        this._limits.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "limitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limits.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "mainModule", {
        get: function () {
            return this.getStringAttribute('main_module');
        },
        set: function (value) {
            this._mainModule = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.resetMainModule = function () {
        this._mainModule = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "mainModuleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mainModule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "mainScriptBase64", {
        // main_script_base64 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('main_script_base64');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "migrationTag", {
        // migration_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('migration_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "migrations", {
        get: function () {
            return this._migrations;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.putMigrations = function (value) {
        this._migrations.internalValue = value;
    };
    WorkerVersion.prototype.resetMigrations = function () {
        this._migrations.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "migrationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._migrations.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "modules", {
        get: function () {
            return this._modules;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.putModules = function (value) {
        this._modules.internalValue = value;
    };
    WorkerVersion.prototype.resetModules = function () {
        this._modules.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "modulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "number", {
        // number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.putPlacement = function (value) {
        this._placement.internalValue = value;
    };
    WorkerVersion.prototype.resetPlacement = function () {
        this._placement.internalValue = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "placementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placement.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "startupTimeMs", {
        // startup_time_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('startup_time_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "urls", {
        // urls - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "usageModel", {
        get: function () {
            return this.getStringAttribute('usage_model');
        },
        set: function (value) {
            this._usageModel = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkerVersion.prototype.resetUsageModel = function () {
        this._usageModel = undefined;
    };
    Object.defineProperty(WorkerVersion.prototype, "usageModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usageModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "workerId", {
        get: function () {
            return this.getStringAttribute('worker_id');
        },
        set: function (value) {
            this._workerId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkerVersion.prototype, "workerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workerId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WorkerVersion.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            annotations: workerVersionAnnotationsToTerraform(this._annotations.internalValue),
            assets: workerVersionAssetsToTerraform(this._assets.internalValue),
            bindings: cdktf.listMapper(workerVersionBindingsToTerraform, false)(this._bindings.internalValue),
            compatibility_date: cdktf.stringToTerraform(this._compatibilityDate),
            compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibilityFlags),
            containers: cdktf.listMapper(workerVersionContainersToTerraform, false)(this._containers.internalValue),
            limits: workerVersionLimitsToTerraform(this._limits.internalValue),
            main_module: cdktf.stringToTerraform(this._mainModule),
            migrations: workerVersionMigrationsToTerraform(this._migrations.internalValue),
            modules: cdktf.listMapper(workerVersionModulesToTerraform, false)(this._modules.internalValue),
            placement: workerVersionPlacementToTerraform(this._placement.internalValue),
            usage_model: cdktf.stringToTerraform(this._usageModel),
            worker_id: cdktf.stringToTerraform(this._workerId),
        };
    };
    WorkerVersion.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            annotations: {
                value: workerVersionAnnotationsToHclTerraform(this._annotations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerVersionAnnotations",
            },
            assets: {
                value: workerVersionAssetsToHclTerraform(this._assets.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerVersionAssets",
            },
            bindings: {
                value: cdktf.listMapperHcl(workerVersionBindingsToHclTerraform, false)(this._bindings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WorkerVersionBindingsList",
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
            containers: {
                value: cdktf.listMapperHcl(workerVersionContainersToHclTerraform, false)(this._containers.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "WorkerVersionContainersList",
            },
            limits: {
                value: workerVersionLimitsToHclTerraform(this._limits.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerVersionLimits",
            },
            main_module: {
                value: cdktf.stringToHclTerraform(this._mainModule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            migrations: {
                value: workerVersionMigrationsToHclTerraform(this._migrations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerVersionMigrations",
            },
            modules: {
                value: cdktf.listMapperHcl(workerVersionModulesToHclTerraform, false)(this._modules.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "WorkerVersionModulesList",
            },
            placement: {
                value: workerVersionPlacementToHclTerraform(this._placement.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerVersionPlacement",
            },
            usage_model: {
                value: cdktf.stringToHclTerraform(this._usageModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            worker_id: {
                value: cdktf.stringToHclTerraform(this._workerId),
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
    WorkerVersion.tfResourceType = "cloudflare_worker_version";
    return WorkerVersion;
}(cdktf.TerraformResource));
exports.WorkerVersion = WorkerVersion;
