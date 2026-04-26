"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_version
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
exports.DataCloudflareWorkerVersion = exports.DataCloudflareWorkerVersionPlacementOutputReference = exports.DataCloudflareWorkerVersionPlacementTargetList = exports.DataCloudflareWorkerVersionPlacementTargetOutputReference = exports.DataCloudflareWorkerVersionModulesList = exports.DataCloudflareWorkerVersionModulesOutputReference = exports.DataCloudflareWorkerVersionMigrationsOutputReference = exports.DataCloudflareWorkerVersionMigrationsTransferredClassesList = exports.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference = exports.DataCloudflareWorkerVersionMigrationsStepsList = exports.DataCloudflareWorkerVersionMigrationsStepsOutputReference = exports.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList = exports.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference = exports.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList = exports.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference = exports.DataCloudflareWorkerVersionMigrationsRenamedClassesList = exports.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference = exports.DataCloudflareWorkerVersionLimitsOutputReference = exports.DataCloudflareWorkerVersionContainersList = exports.DataCloudflareWorkerVersionContainersOutputReference = exports.DataCloudflareWorkerVersionBindingsList = exports.DataCloudflareWorkerVersionBindingsOutputReference = exports.DataCloudflareWorkerVersionBindingsSimpleOutputReference = exports.DataCloudflareWorkerVersionBindingsOutboundOutputReference = exports.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference = exports.DataCloudflareWorkerVersionBindingsOutboundParamsList = exports.DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference = exports.DataCloudflareWorkerVersionAssetsOutputReference = exports.DataCloudflareWorkerVersionAssetsConfigOutputReference = exports.DataCloudflareWorkerVersionAnnotationsOutputReference = void 0;
exports.dataCloudflareWorkerVersionAnnotationsToTerraform = dataCloudflareWorkerVersionAnnotationsToTerraform;
exports.dataCloudflareWorkerVersionAnnotationsToHclTerraform = dataCloudflareWorkerVersionAnnotationsToHclTerraform;
exports.dataCloudflareWorkerVersionAssetsConfigToTerraform = dataCloudflareWorkerVersionAssetsConfigToTerraform;
exports.dataCloudflareWorkerVersionAssetsConfigToHclTerraform = dataCloudflareWorkerVersionAssetsConfigToHclTerraform;
exports.dataCloudflareWorkerVersionAssetsToTerraform = dataCloudflareWorkerVersionAssetsToTerraform;
exports.dataCloudflareWorkerVersionAssetsToHclTerraform = dataCloudflareWorkerVersionAssetsToHclTerraform;
exports.dataCloudflareWorkerVersionBindingsOutboundParamsToTerraform = dataCloudflareWorkerVersionBindingsOutboundParamsToTerraform;
exports.dataCloudflareWorkerVersionBindingsOutboundParamsToHclTerraform = dataCloudflareWorkerVersionBindingsOutboundParamsToHclTerraform;
exports.dataCloudflareWorkerVersionBindingsOutboundWorkerToTerraform = dataCloudflareWorkerVersionBindingsOutboundWorkerToTerraform;
exports.dataCloudflareWorkerVersionBindingsOutboundWorkerToHclTerraform = dataCloudflareWorkerVersionBindingsOutboundWorkerToHclTerraform;
exports.dataCloudflareWorkerVersionBindingsOutboundToTerraform = dataCloudflareWorkerVersionBindingsOutboundToTerraform;
exports.dataCloudflareWorkerVersionBindingsOutboundToHclTerraform = dataCloudflareWorkerVersionBindingsOutboundToHclTerraform;
exports.dataCloudflareWorkerVersionBindingsSimpleToTerraform = dataCloudflareWorkerVersionBindingsSimpleToTerraform;
exports.dataCloudflareWorkerVersionBindingsSimpleToHclTerraform = dataCloudflareWorkerVersionBindingsSimpleToHclTerraform;
exports.dataCloudflareWorkerVersionBindingsToTerraform = dataCloudflareWorkerVersionBindingsToTerraform;
exports.dataCloudflareWorkerVersionBindingsToHclTerraform = dataCloudflareWorkerVersionBindingsToHclTerraform;
exports.dataCloudflareWorkerVersionContainersToTerraform = dataCloudflareWorkerVersionContainersToTerraform;
exports.dataCloudflareWorkerVersionContainersToHclTerraform = dataCloudflareWorkerVersionContainersToHclTerraform;
exports.dataCloudflareWorkerVersionLimitsToTerraform = dataCloudflareWorkerVersionLimitsToTerraform;
exports.dataCloudflareWorkerVersionLimitsToHclTerraform = dataCloudflareWorkerVersionLimitsToHclTerraform;
exports.dataCloudflareWorkerVersionMigrationsRenamedClassesToTerraform = dataCloudflareWorkerVersionMigrationsRenamedClassesToTerraform;
exports.dataCloudflareWorkerVersionMigrationsRenamedClassesToHclTerraform = dataCloudflareWorkerVersionMigrationsRenamedClassesToHclTerraform;
exports.dataCloudflareWorkerVersionMigrationsStepsRenamedClassesToTerraform = dataCloudflareWorkerVersionMigrationsStepsRenamedClassesToTerraform;
exports.dataCloudflareWorkerVersionMigrationsStepsRenamedClassesToHclTerraform = dataCloudflareWorkerVersionMigrationsStepsRenamedClassesToHclTerraform;
exports.dataCloudflareWorkerVersionMigrationsStepsTransferredClassesToTerraform = dataCloudflareWorkerVersionMigrationsStepsTransferredClassesToTerraform;
exports.dataCloudflareWorkerVersionMigrationsStepsTransferredClassesToHclTerraform = dataCloudflareWorkerVersionMigrationsStepsTransferredClassesToHclTerraform;
exports.dataCloudflareWorkerVersionMigrationsStepsToTerraform = dataCloudflareWorkerVersionMigrationsStepsToTerraform;
exports.dataCloudflareWorkerVersionMigrationsStepsToHclTerraform = dataCloudflareWorkerVersionMigrationsStepsToHclTerraform;
exports.dataCloudflareWorkerVersionMigrationsTransferredClassesToTerraform = dataCloudflareWorkerVersionMigrationsTransferredClassesToTerraform;
exports.dataCloudflareWorkerVersionMigrationsTransferredClassesToHclTerraform = dataCloudflareWorkerVersionMigrationsTransferredClassesToHclTerraform;
exports.dataCloudflareWorkerVersionMigrationsToTerraform = dataCloudflareWorkerVersionMigrationsToTerraform;
exports.dataCloudflareWorkerVersionMigrationsToHclTerraform = dataCloudflareWorkerVersionMigrationsToHclTerraform;
exports.dataCloudflareWorkerVersionModulesToTerraform = dataCloudflareWorkerVersionModulesToTerraform;
exports.dataCloudflareWorkerVersionModulesToHclTerraform = dataCloudflareWorkerVersionModulesToHclTerraform;
exports.dataCloudflareWorkerVersionPlacementTargetToTerraform = dataCloudflareWorkerVersionPlacementTargetToTerraform;
exports.dataCloudflareWorkerVersionPlacementTargetToHclTerraform = dataCloudflareWorkerVersionPlacementTargetToHclTerraform;
exports.dataCloudflareWorkerVersionPlacementToTerraform = dataCloudflareWorkerVersionPlacementToTerraform;
exports.dataCloudflareWorkerVersionPlacementToHclTerraform = dataCloudflareWorkerVersionPlacementToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkerVersionAnnotationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionAnnotationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionAnnotationsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionAnnotationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionAnnotationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionAnnotationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionAnnotationsOutputReference.prototype, "workersMessage", {
        // workers_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionAnnotationsOutputReference.prototype, "workersTag", {
        // workers_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionAnnotationsOutputReference.prototype, "workersTriggeredBy", {
        // workers_triggered_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_triggered_by');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionAnnotationsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionAnnotationsOutputReference = DataCloudflareWorkerVersionAnnotationsOutputReference;
function dataCloudflareWorkerVersionAssetsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionAssetsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionAssetsConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionAssetsConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionAssetsConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionAssetsConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionAssetsConfigOutputReference.prototype, "htmlHandling", {
        // html_handling - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_handling');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionAssetsConfigOutputReference.prototype, "notFoundHandling", {
        // not_found_handling - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('not_found_handling');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionAssetsConfigOutputReference.prototype, "runWorkerFirst", {
        // run_worker_first - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('run_worker_first');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionAssetsConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionAssetsConfigOutputReference = DataCloudflareWorkerVersionAssetsConfigOutputReference;
function dataCloudflareWorkerVersionAssetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionAssetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionAssetsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionAssetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionAssetsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflareWorkerVersionAssetsConfigOutputReference(_this, "config");
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionAssetsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionAssetsOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionAssetsOutputReference.prototype, "jwt", {
        // jwt - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('jwt');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionAssetsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionAssetsOutputReference = DataCloudflareWorkerVersionAssetsOutputReference;
function dataCloudflareWorkerVersionBindingsOutboundParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionBindingsOutboundParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference = DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference;
var DataCloudflareWorkerVersionBindingsOutboundParamsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionBindingsOutboundParamsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionBindingsOutboundParamsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionBindingsOutboundParamsList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionBindingsOutboundParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionBindingsOutboundParamsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionBindingsOutboundParamsList = DataCloudflareWorkerVersionBindingsOutboundParamsList;
function dataCloudflareWorkerVersionBindingsOutboundWorkerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionBindingsOutboundWorkerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.prototype, "entrypoint", {
        // entrypoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference = DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference;
function dataCloudflareWorkerVersionBindingsOutboundToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionBindingsOutboundToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionBindingsOutboundOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionBindingsOutboundOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionBindingsOutboundOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // params - computed: true, optional: false, required: false
        _this._params = new DataCloudflareWorkerVersionBindingsOutboundParamsList(_this, "params", false);
        // worker - computed: true, optional: false, required: false
        _this._worker = new DataCloudflareWorkerVersionBindingsOutboundWorkerOutputReference(_this, "worker");
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutboundOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutboundOutputReference.prototype, "params", {
        get: function () {
            return this._params;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutboundOutputReference.prototype, "worker", {
        get: function () {
            return this._worker;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionBindingsOutboundOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionBindingsOutboundOutputReference = DataCloudflareWorkerVersionBindingsOutboundOutputReference;
function dataCloudflareWorkerVersionBindingsSimpleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionBindingsSimpleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionBindingsSimpleOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionBindingsSimpleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionBindingsSimpleOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionBindingsSimpleOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionBindingsSimpleOutputReference.prototype, "limit", {
        // limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsSimpleOutputReference.prototype, "period", {
        // period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('period');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionBindingsSimpleOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionBindingsSimpleOutputReference = DataCloudflareWorkerVersionBindingsSimpleOutputReference;
function dataCloudflareWorkerVersionBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionBindingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionBindingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionBindingsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // outbound - computed: true, optional: false, required: false
        _this._outbound = new DataCloudflareWorkerVersionBindingsOutboundOutputReference(_this, "outbound");
        // simple - computed: true, optional: false, required: false
        _this._simple = new DataCloudflareWorkerVersionBindingsSimpleOutputReference(_this, "simple");
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "algorithm", {
        // algorithm - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('algorithm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "allowedDestinationAddresses", {
        // allowed_destination_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_destination_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "allowedSenderAddresses", {
        // allowed_sender_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_sender_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "appId", {
        // app_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('app_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "bucketName", {
        // bucket_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "certificateId", {
        // certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "className", {
        // class_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('class_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "databaseId", {
        // database_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('database_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "dataset", {
        // dataset - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dataset');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "destinationAddress", {
        // destination_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "dispatchNamespace", {
        // dispatch_namespace - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dispatch_namespace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "entrypoint", {
        // entrypoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entrypoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "environment", {
        // environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "format", {
        // format - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('format');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "indexName", {
        // index_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('index_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "instanceName", {
        // instance_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "json", {
        // json - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('json');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "jurisdiction", {
        // jurisdiction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "keyBase64", {
        // key_base64 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_base64');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "keyJwk", {
        // key_jwk - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_jwk');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "namespace", {
        // namespace - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "networkId", {
        // network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "oldName", {
        // old_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('old_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "outbound", {
        get: function () {
            return this._outbound;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "part", {
        // part - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('part');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "pipeline", {
        // pipeline - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pipeline');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "scriptName", {
        // script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "secretName", {
        // secret_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "serviceId", {
        // service_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "simple", {
        get: function () {
            return this._simple;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "storeId", {
        // store_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('store_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "text", {
        // text - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('text');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "usages", {
        // usages - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('usages'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionBindingsOutputReference.prototype, "workflowName", {
        // workflow_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workflow_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionBindingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionBindingsOutputReference = DataCloudflareWorkerVersionBindingsOutputReference;
var DataCloudflareWorkerVersionBindingsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionBindingsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionBindingsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionBindingsList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionBindingsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionBindingsList = DataCloudflareWorkerVersionBindingsList;
function dataCloudflareWorkerVersionContainersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionContainersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionContainersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionContainersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionContainersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionContainersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionContainersOutputReference.prototype, "className", {
        // class_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('class_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionContainersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionContainersOutputReference = DataCloudflareWorkerVersionContainersOutputReference;
var DataCloudflareWorkerVersionContainersList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionContainersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionContainersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionContainersList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionContainersList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionContainersList = DataCloudflareWorkerVersionContainersList;
function dataCloudflareWorkerVersionLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionLimitsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionLimitsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionLimitsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionLimitsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionLimitsOutputReference.prototype, "cpuMs", {
        // cpu_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cpu_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionLimitsOutputReference.prototype, "subrequests", {
        // subrequests - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('subrequests');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionLimitsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionLimitsOutputReference = DataCloudflareWorkerVersionLimitsOutputReference;
function dataCloudflareWorkerVersionMigrationsRenamedClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionMigrationsRenamedClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.prototype, "from", {
        // from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference.prototype, "to", {
        // to - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('to');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference = DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference;
var DataCloudflareWorkerVersionMigrationsRenamedClassesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionMigrationsRenamedClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionMigrationsRenamedClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionMigrationsRenamedClassesList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionMigrationsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionMigrationsRenamedClassesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionMigrationsRenamedClassesList = DataCloudflareWorkerVersionMigrationsRenamedClassesList;
function dataCloudflareWorkerVersionMigrationsStepsRenamedClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionMigrationsStepsRenamedClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.prototype, "from", {
        // from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference.prototype, "to", {
        // to - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('to');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference = DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference;
var DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionMigrationsStepsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList = DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList;
function dataCloudflareWorkerVersionMigrationsStepsTransferredClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionMigrationsStepsTransferredClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype, "from", {
        // from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype, "fromScript", {
        // from_script - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from_script');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference.prototype, "to", {
        // to - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('to');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference = DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference;
var DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionMigrationsStepsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList = DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList;
function dataCloudflareWorkerVersionMigrationsStepsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionMigrationsStepsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionMigrationsStepsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionMigrationsStepsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionMigrationsStepsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // renamed_classes - computed: true, optional: false, required: false
        _this._renamedClasses = new DataCloudflareWorkerVersionMigrationsStepsRenamedClassesList(_this, "renamed_classes", false);
        // transferred_classes - computed: true, optional: false, required: false
        _this._transferredClasses = new DataCloudflareWorkerVersionMigrationsStepsTransferredClassesList(_this, "transferred_classes", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsOutputReference.prototype, "deletedClasses", {
        // deleted_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('deleted_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsOutputReference.prototype, "newClasses", {
        // new_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsOutputReference.prototype, "newSqliteClasses", {
        // new_sqlite_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_sqlite_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsOutputReference.prototype, "renamedClasses", {
        get: function () {
            return this._renamedClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsStepsOutputReference.prototype, "transferredClasses", {
        get: function () {
            return this._transferredClasses;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionMigrationsStepsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionMigrationsStepsOutputReference = DataCloudflareWorkerVersionMigrationsStepsOutputReference;
var DataCloudflareWorkerVersionMigrationsStepsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionMigrationsStepsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionMigrationsStepsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionMigrationsStepsList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionMigrationsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionMigrationsStepsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionMigrationsStepsList = DataCloudflareWorkerVersionMigrationsStepsList;
function dataCloudflareWorkerVersionMigrationsTransferredClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionMigrationsTransferredClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.prototype, "from", {
        // from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.prototype, "fromScript", {
        // from_script - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('from_script');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference.prototype, "to", {
        // to - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('to');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference = DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference;
var DataCloudflareWorkerVersionMigrationsTransferredClassesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionMigrationsTransferredClassesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionMigrationsTransferredClassesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionMigrationsTransferredClassesList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionMigrationsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionMigrationsTransferredClassesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionMigrationsTransferredClassesList = DataCloudflareWorkerVersionMigrationsTransferredClassesList;
function dataCloudflareWorkerVersionMigrationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionMigrationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionMigrationsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionMigrationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionMigrationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // renamed_classes - computed: true, optional: false, required: false
        _this._renamedClasses = new DataCloudflareWorkerVersionMigrationsRenamedClassesList(_this, "renamed_classes", false);
        // steps - computed: true, optional: false, required: false
        _this._steps = new DataCloudflareWorkerVersionMigrationsStepsList(_this, "steps", false);
        // transferred_classes - computed: true, optional: false, required: false
        _this._transferredClasses = new DataCloudflareWorkerVersionMigrationsTransferredClassesList(_this, "transferred_classes", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsOutputReference.prototype, "deletedClasses", {
        // deleted_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('deleted_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsOutputReference.prototype, "newClasses", {
        // new_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsOutputReference.prototype, "newSqliteClasses", {
        // new_sqlite_classes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('new_sqlite_classes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsOutputReference.prototype, "newTag", {
        // new_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('new_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsOutputReference.prototype, "oldTag", {
        // old_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('old_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsOutputReference.prototype, "renamedClasses", {
        get: function () {
            return this._renamedClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsOutputReference.prototype, "steps", {
        get: function () {
            return this._steps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionMigrationsOutputReference.prototype, "transferredClasses", {
        get: function () {
            return this._transferredClasses;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionMigrationsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionMigrationsOutputReference = DataCloudflareWorkerVersionMigrationsOutputReference;
function dataCloudflareWorkerVersionModulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionModulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionModulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionModulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionModulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionModulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionModulesOutputReference.prototype, "contentBase64", {
        // content_base64 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_base64');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionModulesOutputReference.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionModulesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionModulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionModulesOutputReference = DataCloudflareWorkerVersionModulesOutputReference;
var DataCloudflareWorkerVersionModulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionModulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionModulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionModulesList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionModulesList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionModulesList = DataCloudflareWorkerVersionModulesList;
function dataCloudflareWorkerVersionPlacementTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionPlacementTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionPlacementTargetOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionPlacementTargetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionPlacementTargetOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionPlacementTargetOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionPlacementTargetOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionPlacementTargetOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionPlacementTargetOutputReference.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionPlacementTargetOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionPlacementTargetOutputReference = DataCloudflareWorkerVersionPlacementTargetOutputReference;
var DataCloudflareWorkerVersionPlacementTargetList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionPlacementTargetList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkerVersionPlacementTargetList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkerVersionPlacementTargetList.prototype.get = function (index) {
        return new DataCloudflareWorkerVersionPlacementTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkerVersionPlacementTargetList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkerVersionPlacementTargetList = DataCloudflareWorkerVersionPlacementTargetList;
function dataCloudflareWorkerVersionPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkerVersionPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkerVersionPlacementOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersionPlacementOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkerVersionPlacementOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // target - computed: true, optional: false, required: false
        _this._target = new DataCloudflareWorkerVersionPlacementTargetList(_this, "target", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkerVersionPlacementOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkerVersionPlacementOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionPlacementOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionPlacementOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionPlacementOutputReference.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersionPlacementOutputReference.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkerVersionPlacementOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkerVersionPlacementOutputReference = DataCloudflareWorkerVersionPlacementOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_version cloudflare_worker_version}
*/
var DataCloudflareWorkerVersion = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkerVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_version cloudflare_worker_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkerVersionConfig
    */
    function DataCloudflareWorkerVersion(scope, id, config) {
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
        // annotations - computed: true, optional: false, required: false
        _this._annotations = new DataCloudflareWorkerVersionAnnotationsOutputReference(_this, "annotations");
        // assets - computed: true, optional: false, required: false
        _this._assets = new DataCloudflareWorkerVersionAssetsOutputReference(_this, "assets");
        // bindings - computed: true, optional: false, required: false
        _this._bindings = new DataCloudflareWorkerVersionBindingsList(_this, "bindings", false);
        // containers - computed: true, optional: false, required: false
        _this._containers = new DataCloudflareWorkerVersionContainersList(_this, "containers", true);
        // limits - computed: true, optional: false, required: false
        _this._limits = new DataCloudflareWorkerVersionLimitsOutputReference(_this, "limits");
        // migrations - computed: true, optional: false, required: false
        _this._migrations = new DataCloudflareWorkerVersionMigrationsOutputReference(_this, "migrations");
        // modules - computed: true, optional: false, required: false
        _this._modules = new DataCloudflareWorkerVersionModulesList(_this, "modules", true);
        // placement - computed: true, optional: false, required: false
        _this._placement = new DataCloudflareWorkerVersionPlacementOutputReference(_this, "placement");
        _this._accountId = config.accountId;
        _this._include = config.include;
        _this._versionId = config.versionId;
        _this._workerId = config.workerId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkerVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkerVersion to import
    * @param importFromId The id of the existing DataCloudflareWorkerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkerVersion to import is found
    */
    DataCloudflareWorkerVersion.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker_version", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkerVersion.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "annotations", {
        get: function () {
            return this._annotations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "assets", {
        get: function () {
            return this._assets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "bindings", {
        get: function () {
            return this._bindings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "compatibilityDate", {
        // compatibility_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compatibility_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "compatibilityFlags", {
        // compatibility_flags - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('compatibility_flags'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "containers", {
        get: function () {
            return this._containers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "include", {
        get: function () {
            return this.getStringAttribute('include');
        },
        set: function (value) {
            this._include = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkerVersion.prototype.resetInclude = function () {
        this._include = undefined;
    };
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "limits", {
        get: function () {
            return this._limits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "mainModule", {
        // main_module - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('main_module');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "mainScriptBase64", {
        // main_script_base64 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('main_script_base64');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "migrationTag", {
        // migration_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('migration_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "migrations", {
        get: function () {
            return this._migrations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "modules", {
        get: function () {
            return this._modules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "number", {
        // number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "placement", {
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "startupTimeMs", {
        // startup_time_ms - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('startup_time_ms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "urls", {
        // urls - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "usageModel", {
        // usage_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('usage_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "versionId", {
        get: function () {
            return this.getStringAttribute('version_id');
        },
        set: function (value) {
            this._versionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "versionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "workerId", {
        get: function () {
            return this.getStringAttribute('worker_id');
        },
        set: function (value) {
            this._workerId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkerVersion.prototype, "workerIdInput", {
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
    DataCloudflareWorkerVersion.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            include: cdktf.stringToTerraform(this._include),
            version_id: cdktf.stringToTerraform(this._versionId),
            worker_id: cdktf.stringToTerraform(this._workerId),
        };
    };
    DataCloudflareWorkerVersion.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            include: {
                value: cdktf.stringToHclTerraform(this._include),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            version_id: {
                value: cdktf.stringToHclTerraform(this._versionId),
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
    DataCloudflareWorkerVersion.tfResourceType = "cloudflare_worker_version";
    return DataCloudflareWorkerVersion;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkerVersion = DataCloudflareWorkerVersion;
