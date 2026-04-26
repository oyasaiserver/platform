"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions
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
exports.DataCloudflareWorkerVersions = exports.DataCloudflareWorkerVersionsResultList = exports.DataCloudflareWorkerVersionsResultOutputReference = exports.DataCloudflareWorkerVersionsResultPlacementOutputReference = exports.DataCloudflareWorkerVersionsResultPlacementTargetList = exports.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference = exports.DataCloudflareWorkerVersionsResultModulesList = exports.DataCloudflareWorkerVersionsResultModulesOutputReference = exports.DataCloudflareWorkerVersionsResultMigrationsOutputReference = exports.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList = exports.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference = exports.DataCloudflareWorkerVersionsResultMigrationsStepsList = exports.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference = exports.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList = exports.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference = exports.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList = exports.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference = exports.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList = exports.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference = exports.DataCloudflareWorkerVersionsResultLimitsOutputReference = exports.DataCloudflareWorkerVersionsResultContainersList = exports.DataCloudflareWorkerVersionsResultContainersOutputReference = exports.DataCloudflareWorkerVersionsResultBindingsList = exports.DataCloudflareWorkerVersionsResultBindingsOutputReference = exports.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference = exports.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference = exports.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference = exports.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList = exports.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference = exports.DataCloudflareWorkerVersionsResultAssetsOutputReference = exports.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference = exports.DataCloudflareWorkerVersionsResultAnnotationsOutputReference = void 0;
exports.dataCloudflareWorkerVersionsResultAnnotationsToTerraform = dataCloudflareWorkerVersionsResultAnnotationsToTerraform;
exports.dataCloudflareWorkerVersionsResultAnnotationsToHclTerraform = dataCloudflareWorkerVersionsResultAnnotationsToHclTerraform;
exports.dataCloudflareWorkerVersionsResultAssetsConfigToTerraform = dataCloudflareWorkerVersionsResultAssetsConfigToTerraform;
exports.dataCloudflareWorkerVersionsResultAssetsConfigToHclTerraform = dataCloudflareWorkerVersionsResultAssetsConfigToHclTerraform;
exports.dataCloudflareWorkerVersionsResultAssetsToTerraform = dataCloudflareWorkerVersionsResultAssetsToTerraform;
exports.dataCloudflareWorkerVersionsResultAssetsToHclTerraform = dataCloudflareWorkerVersionsResultAssetsToHclTerraform;
exports.dataCloudflareWorkerVersionsResultBindingsOutboundParamsToTerraform = dataCloudflareWorkerVersionsResultBindingsOutboundParamsToTerraform;
exports.dataCloudflareWorkerVersionsResultBindingsOutboundParamsToHclTerraform = dataCloudflareWorkerVersionsResultBindingsOutboundParamsToHclTerraform;
exports.dataCloudflareWorkerVersionsResultBindingsOutboundWorkerToTerraform = dataCloudflareWorkerVersionsResultBindingsOutboundWorkerToTerraform;
exports.dataCloudflareWorkerVersionsResultBindingsOutboundWorkerToHclTerraform = dataCloudflareWorkerVersionsResultBindingsOutboundWorkerToHclTerraform;
exports.dataCloudflareWorkerVersionsResultBindingsOutboundToTerraform = dataCloudflareWorkerVersionsResultBindingsOutboundToTerraform;
exports.dataCloudflareWorkerVersionsResultBindingsOutboundToHclTerraform = dataCloudflareWorkerVersionsResultBindingsOutboundToHclTerraform;
exports.dataCloudflareWorkerVersionsResultBindingsSimpleToTerraform = dataCloudflareWorkerVersionsResultBindingsSimpleToTerraform;
exports.dataCloudflareWorkerVersionsResultBindingsSimpleToHclTerraform = dataCloudflareWorkerVersionsResultBindingsSimpleToHclTerraform;
exports.dataCloudflareWorkerVersionsResultBindingsToTerraform = dataCloudflareWorkerVersionsResultBindingsToTerraform;
exports.dataCloudflareWorkerVersionsResultBindingsToHclTerraform = dataCloudflareWorkerVersionsResultBindingsToHclTerraform;
exports.dataCloudflareWorkerVersionsResultContainersToTerraform = dataCloudflareWorkerVersionsResultContainersToTerraform;
exports.dataCloudflareWorkerVersionsResultContainersToHclTerraform = dataCloudflareWorkerVersionsResultContainersToHclTerraform;
exports.dataCloudflareWorkerVersionsResultLimitsToTerraform = dataCloudflareWorkerVersionsResultLimitsToTerraform;
exports.dataCloudflareWorkerVersionsResultLimitsToHclTerraform = dataCloudflareWorkerVersionsResultLimitsToHclTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsRenamedClassesToTerraform = dataCloudflareWorkerVersionsResultMigrationsRenamedClassesToTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsRenamedClassesToHclTerraform = dataCloudflareWorkerVersionsResultMigrationsRenamedClassesToHclTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesToTerraform = dataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesToTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesToHclTerraform = dataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesToHclTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesToTerraform = dataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesToTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesToHclTerraform = dataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesToHclTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsStepsToTerraform = dataCloudflareWorkerVersionsResultMigrationsStepsToTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsStepsToHclTerraform = dataCloudflareWorkerVersionsResultMigrationsStepsToHclTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsTransferredClassesToTerraform = dataCloudflareWorkerVersionsResultMigrationsTransferredClassesToTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsTransferredClassesToHclTerraform = dataCloudflareWorkerVersionsResultMigrationsTransferredClassesToHclTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsToTerraform = dataCloudflareWorkerVersionsResultMigrationsToTerraform;
exports.dataCloudflareWorkerVersionsResultMigrationsToHclTerraform = dataCloudflareWorkerVersionsResultMigrationsToHclTerraform;
exports.dataCloudflareWorkerVersionsResultModulesToTerraform = dataCloudflareWorkerVersionsResultModulesToTerraform;
exports.dataCloudflareWorkerVersionsResultModulesToHclTerraform = dataCloudflareWorkerVersionsResultModulesToHclTerraform;
exports.dataCloudflareWorkerVersionsResultPlacementTargetToTerraform = dataCloudflareWorkerVersionsResultPlacementTargetToTerraform;
exports.dataCloudflareWorkerVersionsResultPlacementTargetToHclTerraform = dataCloudflareWorkerVersionsResultPlacementTargetToHclTerraform;
exports.dataCloudflareWorkerVersionsResultPlacementToTerraform = dataCloudflareWorkerVersionsResultPlacementToTerraform;
exports.dataCloudflareWorkerVersionsResultPlacementToHclTerraform = dataCloudflareWorkerVersionsResultPlacementToHclTerraform;
exports.dataCloudflareWorkerVersionsResultToTerraform = dataCloudflareWorkerVersionsResultToTerraform;
exports.dataCloudflareWorkerVersionsResultToHclTerraform = dataCloudflareWorkerVersionsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkerVersionsResultAnnotationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultAnnotationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultAnnotationsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultAnnotationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionsResultAnnotationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultAnnotationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultAnnotationsOutputReference.prototype, "workersMessage", {
        // workers_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultAnnotationsOutputReference.prototype, "workersTag", {
        // workers_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultAnnotationsOutputReference.prototype, "workersTriggeredBy", {
        // workers_triggered_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_triggered_by');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultAnnotationsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultAnnotationsOutputReference = DataCloudflareWorkerVersionsResultAnnotationsOutputReference;
function dataCloudflareWorkerVersionsResultAssetsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultAssetsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultAssetsConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultAssetsConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionsResultAssetsConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.prototype, "htmlHandling", {
        // html_handling - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_handling');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.prototype, "notFoundHandling", {
        // not_found_handling - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('not_found_handling');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.prototype, "runWorkerFirst", {
        // run_worker_first - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('run_worker_first');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultAssetsConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference = DataCloudflareWorkerVersionsResultAssetsConfigOutputReference;
function dataCloudflareWorkerVersionsResultAssetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultAssetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultAssetsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultAssetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionsResultAssetsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflareWorkerVersionsResultAssetsConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultAssetsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultAssetsOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultAssetsOutputReference.prototype, "jwt", {
        // jwt - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('jwt');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultAssetsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultAssetsOutputReference = DataCloudflareWorkerVersionsResultAssetsOutputReference;
function dataCloudflareWorkerVersionsResultBindingsOutboundParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultBindingsOutboundParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference = DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference;
var DataCloudflareWorkerVersionsResultBindingsOutboundParamsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultBindingsOutboundParamsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultBindingsOutboundParamsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionsResultBindingsOutboundParamsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList = DataCloudflareWorkerVersionsResultBindingsOutboundParamsList;
function dataCloudflareWorkerVersionsResultBindingsOutboundWorkerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultBindingsOutboundWorkerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.prototype, "entrypoint", {
        // entrypoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference = DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference;
function dataCloudflareWorkerVersionsResultBindingsOutboundToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultBindingsOutboundToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // params - computed: true, optional: false, required: false
        _this._params = new DataCloudflareWorkerVersionsResultBindingsOutboundParamsList(_this, "params", false);
        // worker - computed: true, optional: false, required: false
        _this._worker = new DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference(_this, "worker");
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.prototype, "params", {
        get: function () {
            return this._params;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.prototype, "worker", {
        get: function () {
            return this._worker;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference = DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference;
function dataCloudflareWorkerVersionsResultBindingsSimpleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultBindingsSimpleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.prototype, "limit", {
        // limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.prototype, "period", {
        // period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('period');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference = DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference;
function dataCloudflareWorkerVersionsResultBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultBindingsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // outbound - computed: true, optional: false, required: false
        _this._outbound = new DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference(_this, "outbound");
        // simple - computed: true, optional: false, required: false
        _this._simple = new DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference(_this, "simple");
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "algorithm", {
        // algorithm - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('algorithm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "allowedDestinationAddresses", {
        // allowed_destination_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_destination_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "allowedSenderAddresses", {
        // allowed_sender_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_sender_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "appId", {
        // app_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('app_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "bucketName", {
        // bucket_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "certificateId", {
        // certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "className", {
        // class_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('class_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "databaseId", {
        // database_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('database_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "dataset", {
        // dataset - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dataset');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "destinationAddress", {
        // destination_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "dispatchNamespace", {
        // dispatch_namespace - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dispatch_namespace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "entrypoint", {
        // entrypoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "format", {
        // format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('format');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "indexName", {
        // index_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('index_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "instanceName", {
        // instance_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "json", {
        // json - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('json');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "jurisdiction", {
        // jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "keyBase64", {
        // key_base64 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_base64');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "keyJwk", {
        // key_jwk - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_jwk');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "namespace", {
        // namespace - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "networkId", {
        // network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "oldName", {
        // old_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('old_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "outbound", {
        get: function () {
            return this._outbound;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "part", {
        // part - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('part');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "pipeline", {
        // pipeline - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pipeline');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "scriptName", {
        // script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "secretName", {
        // secret_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "serviceId", {
        // service_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "simple", {
        get: function () {
            return this._simple;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "storeId", {
        // store_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('store_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "text", {
        // text - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('text');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "usages", {
        // usages - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('usages'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultBindingsOutputReference.prototype, "workflowName", {
        // workflow_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workflow_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultBindingsOutputReference = DataCloudflareWorkerVersionsResultBindingsOutputReference;
var DataCloudflareWorkerVersionsResultBindingsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultBindingsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultBindingsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionsResultBindingsList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionsResultBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionsResultBindingsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionsResultBindingsList = DataCloudflareWorkerVersionsResultBindingsList;
function dataCloudflareWorkerVersionsResultContainersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultContainersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultContainersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultContainersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultContainersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultContainersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultContainersOutputReference.prototype, "className", {
        // class_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('class_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultContainersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultContainersOutputReference = DataCloudflareWorkerVersionsResultContainersOutputReference;
var DataCloudflareWorkerVersionsResultContainersList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultContainersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultContainersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionsResultContainersList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionsResultContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionsResultContainersList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionsResultContainersList = DataCloudflareWorkerVersionsResultContainersList;
function dataCloudflareWorkerVersionsResultLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultLimitsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionsResultLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultLimitsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultLimitsOutputReference.prototype, "cpuMs", {
        // cpu_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cpu_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultLimitsOutputReference.prototype, "subrequests", {
        // subrequests - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('subrequests');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultLimitsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultLimitsOutputReference = DataCloudflareWorkerVersionsResultLimitsOutputReference;
function dataCloudflareWorkerVersionsResultMigrationsRenamedClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultMigrationsRenamedClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.prototype, "from", {
        // from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.prototype, "to", {
        // to - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('to');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference = DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference;
var DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList = DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList;
function dataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.prototype, "from", {
        // from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.prototype, "to", {
        // to - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('to');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference = DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference;
var DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList = DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList;
function dataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.prototype, "from", {
        // from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.prototype, "fromScript", {
        // from_script - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from_script');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.prototype, "to", {
        // to - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('to');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference = DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference;
var DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList = DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList;
function dataCloudflareWorkerVersionsResultMigrationsStepsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultMigrationsStepsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // renamed_classes - computed: true, optional: false, required: false
        _this._renamedClasses = new DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList(_this, "renamed_classes", false);
        // transferred_classes - computed: true, optional: false, required: false
        _this._transferredClasses = new DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList(_this, "transferred_classes", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.prototype, "deletedClasses", {
        // deleted_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('deleted_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.prototype, "newClasses", {
        // new_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.prototype, "newSqliteClasses", {
        // new_sqlite_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_sqlite_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.prototype, "renamedClasses", {
        get: function () {
            return this._renamedClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.prototype, "transferredClasses", {
        get: function () {
            return this._transferredClasses;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference = DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference;
var DataCloudflareWorkerVersionsResultMigrationsStepsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultMigrationsStepsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultMigrationsStepsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionsResultMigrationsStepsList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionsResultMigrationsStepsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionsResultMigrationsStepsList = DataCloudflareWorkerVersionsResultMigrationsStepsList;
function dataCloudflareWorkerVersionsResultMigrationsTransferredClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultMigrationsTransferredClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.prototype, "from", {
        // from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.prototype, "fromScript", {
        // from_script - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from_script');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.prototype, "to", {
        // to - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('to');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference = DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference;
var DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList = DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList;
function dataCloudflareWorkerVersionsResultMigrationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultMigrationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultMigrationsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultMigrationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionsResultMigrationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // renamed_classes - computed: true, optional: false, required: false
        _this._renamedClasses = new DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList(_this, "renamed_classes", false);
        // steps - computed: true, optional: false, required: false
        _this._steps = new DataCloudflareWorkerVersionsResultMigrationsStepsList(_this, "steps", false);
        // transferred_classes - computed: true, optional: false, required: false
        _this._transferredClasses = new DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList(_this, "transferred_classes", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsOutputReference.prototype, "deletedClasses", {
        // deleted_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('deleted_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsOutputReference.prototype, "newClasses", {
        // new_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsOutputReference.prototype, "newSqliteClasses", {
        // new_sqlite_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_sqlite_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsOutputReference.prototype, "newTag", {
        // new_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('new_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsOutputReference.prototype, "oldTag", {
        // old_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('old_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsOutputReference.prototype, "renamedClasses", {
        get: function () {
            return this._renamedClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsOutputReference.prototype, "steps", {
        get: function () {
            return this._steps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultMigrationsOutputReference.prototype, "transferredClasses", {
        get: function () {
            return this._transferredClasses;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultMigrationsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultMigrationsOutputReference = DataCloudflareWorkerVersionsResultMigrationsOutputReference;
function dataCloudflareWorkerVersionsResultModulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultModulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultModulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultModulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultModulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultModulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultModulesOutputReference.prototype, "contentBase64", {
        // content_base64 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_base64');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultModulesOutputReference.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultModulesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultModulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultModulesOutputReference = DataCloudflareWorkerVersionsResultModulesOutputReference;
var DataCloudflareWorkerVersionsResultModulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultModulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultModulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionsResultModulesList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionsResultModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionsResultModulesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionsResultModulesList = DataCloudflareWorkerVersionsResultModulesList;
function dataCloudflareWorkerVersionsResultPlacementTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultPlacementTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultPlacementTargetOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultPlacementTargetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultPlacementTargetOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultPlacementTargetOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference = DataCloudflareWorkerVersionsResultPlacementTargetOutputReference;
var DataCloudflareWorkerVersionsResultPlacementTargetList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultPlacementTargetList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultPlacementTargetList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionsResultPlacementTargetList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionsResultPlacementTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionsResultPlacementTargetList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionsResultPlacementTargetList = DataCloudflareWorkerVersionsResultPlacementTargetList;
function dataCloudflareWorkerVersionsResultPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultPlacementOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionsResultPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // target - computed: true, optional: false, required: false
        _this._target = new DataCloudflareWorkerVersionsResultPlacementTargetList(_this, "target", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultPlacementOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultPlacementOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultPlacementOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultPlacementOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultPlacementOutputReference.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultPlacementOutputReference.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultPlacementOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultPlacementOutputReference = DataCloudflareWorkerVersionsResultPlacementOutputReference;
function dataCloudflareWorkerVersionsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // annotations - computed: true, optional: false, required: false
        _this._annotations = new DataCloudflareWorkerVersionsResultAnnotationsOutputReference(_this, "annotations");
        // assets - computed: true, optional: false, required: false
        _this._assets = new DataCloudflareWorkerVersionsResultAssetsOutputReference(_this, "assets");
        // bindings - computed: true, optional: false, required: false
        _this._bindings = new DataCloudflareWorkerVersionsResultBindingsList(_this, "bindings", false);
        // containers - computed: true, optional: false, required: false
        _this._containers = new DataCloudflareWorkerVersionsResultContainersList(_this, "containers", true);
        // limits - computed: true, optional: false, required: false
        _this._limits = new DataCloudflareWorkerVersionsResultLimitsOutputReference(_this, "limits");
        // migrations - computed: true, optional: false, required: false
        _this._migrations = new DataCloudflareWorkerVersionsResultMigrationsOutputReference(_this, "migrations");
        // modules - computed: true, optional: false, required: false
        _this._modules = new DataCloudflareWorkerVersionsResultModulesList(_this, "modules", true);
        // placement - computed: true, optional: false, required: false
        _this._placement = new DataCloudflareWorkerVersionsResultPlacementOutputReference(_this, "placement");
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "annotations", {
        get: function () {
            return this._annotations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "assets", {
        get: function () {
            return this._assets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "bindings", {
        get: function () {
            return this._bindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "compatibilityDate", {
        // compatibility_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compatibility_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "compatibilityFlags", {
        // compatibility_flags - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('compatibility_flags'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "containers", {
        get: function () {
            return this._containers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "mainModule", {
        // main_module - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('main_module');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "mainScriptBase64", {
        // main_script_base64 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('main_script_base64');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "migrationTag", {
        // migration_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('migration_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "migrations", {
        get: function () {
            return this._migrations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "modules", {
        get: function () {
            return this._modules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "number", {
        // number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "startupTimeMs", {
        // startup_time_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('startup_time_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "urls", {
        // urls - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionsResultOutputReference.prototype, "usageModel", {
        // usage_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('usage_model');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionsResultOutputReference = DataCloudflareWorkerVersionsResultOutputReference;
var DataCloudflareWorkerVersionsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionsResultList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionsResultList = DataCloudflareWorkerVersionsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions cloudflare_worker_versions}
*/
var DataCloudflareWorkerVersions = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions cloudflare_worker_versions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkerVersionsConfig
    */
    function DataCloudflareWorkerVersions(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_worker_versions',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareWorkerVersionsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._workerId = config.workerId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkerVersions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkerVersions to import
    * @param importFromId The id of the existing DataCloudflareWorkerVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkerVersions to import is found
    */
    DataCloudflareWorkerVersions.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker_versions", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkerVersions.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkerVersions.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkerVersions.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersions.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkerVersions.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareWorkerVersions.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersions.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersions.prototype, "workerId", {
        get: function () {
            return this.getStringAttribute('worker_id');
        },
        set: function (value) {
            this._workerId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersions.prototype, "workerIdInput", {
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
    DataCloudflareWorkerVersions.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            worker_id: cdktf.stringToTerraform(this._workerId),
        };
    };
    DataCloudflareWorkerVersions.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareWorkerVersions.tfResourceType = "cloudflare_worker_versions";
    return DataCloudflareWorkerVersions;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkerVersions = DataCloudflareWorkerVersions;
