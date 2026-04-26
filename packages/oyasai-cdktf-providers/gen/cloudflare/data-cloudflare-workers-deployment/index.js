"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_deployment
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
exports.DataCloudflareWorkersDeployment = exports.DataCloudflareWorkersDeploymentVersionsList = exports.DataCloudflareWorkersDeploymentVersionsOutputReference = exports.DataCloudflareWorkersDeploymentAnnotationsOutputReference = void 0;
exports.dataCloudflareWorkersDeploymentAnnotationsToTerraform = dataCloudflareWorkersDeploymentAnnotationsToTerraform;
exports.dataCloudflareWorkersDeploymentAnnotationsToHclTerraform = dataCloudflareWorkersDeploymentAnnotationsToHclTerraform;
exports.dataCloudflareWorkersDeploymentVersionsToTerraform = dataCloudflareWorkersDeploymentVersionsToTerraform;
exports.dataCloudflareWorkersDeploymentVersionsToHclTerraform = dataCloudflareWorkersDeploymentVersionsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkersDeploymentAnnotationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersDeploymentAnnotationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersDeploymentAnnotationsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersDeploymentAnnotationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersDeploymentAnnotationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersDeploymentAnnotationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersDeploymentAnnotationsOutputReference.prototype, "workersMessage", {
        // workers_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeploymentAnnotationsOutputReference.prototype, "workersTriggeredBy", {
        // workers_triggered_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('workers_triggered_by');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersDeploymentAnnotationsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersDeploymentAnnotationsOutputReference = DataCloudflareWorkersDeploymentAnnotationsOutputReference;
function dataCloudflareWorkersDeploymentVersionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkersDeploymentVersionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkersDeploymentVersionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersDeploymentVersionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersDeploymentVersionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersDeploymentVersionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkersDeploymentVersionsOutputReference.prototype, "percentage", {
        // percentage - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('percentage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeploymentVersionsOutputReference.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersDeploymentVersionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersDeploymentVersionsOutputReference = DataCloudflareWorkersDeploymentVersionsOutputReference;
var DataCloudflareWorkersDeploymentVersionsList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersDeploymentVersionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkersDeploymentVersionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkersDeploymentVersionsList.prototype.get = function (index) {
        return new DataCloudflareWorkersDeploymentVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkersDeploymentVersionsList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkersDeploymentVersionsList = DataCloudflareWorkersDeploymentVersionsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_deployment cloudflare_workers_deployment}
*/
var DataCloudflareWorkersDeployment = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersDeployment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_deployment cloudflare_workers_deployment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersDeploymentConfig
    */
    function DataCloudflareWorkersDeployment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers_deployment',
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
        _this._annotations = new DataCloudflareWorkersDeploymentAnnotationsOutputReference(_this, "annotations");
        // versions - computed: true, optional: false, required: false
        _this._versions = new DataCloudflareWorkersDeploymentVersionsList(_this, "versions", false);
        _this._accountId = config.accountId;
        _this._deploymentId = config.deploymentId;
        _this._scriptName = config.scriptName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersDeployment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersDeployment to import
    * @param importFromId The id of the existing DataCloudflareWorkersDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersDeployment to import is found
    */
    DataCloudflareWorkersDeployment.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_deployment", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersDeployment.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "annotations", {
        get: function () {
            return this._annotations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "authorEmail", {
        // author_email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('author_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "deploymentId", {
        get: function () {
            return this.getStringAttribute('deployment_id');
        },
        set: function (value) {
            this._deploymentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "deploymentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "scriptName", {
        get: function () {
            return this.getStringAttribute('script_name');
        },
        set: function (value) {
            this._scriptName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "scriptNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scriptName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "strategy", {
        // strategy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('strategy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersDeployment.prototype, "versions", {
        get: function () {
            return this._versions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWorkersDeployment.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            deployment_id: cdktf.stringToTerraform(this._deploymentId),
            script_name: cdktf.stringToTerraform(this._scriptName),
        };
    };
    DataCloudflareWorkersDeployment.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deployment_id: {
                value: cdktf.stringToHclTerraform(this._deploymentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            script_name: {
                value: cdktf.stringToHclTerraform(this._scriptName),
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
    DataCloudflareWorkersDeployment.tfResourceType = "cloudflare_workers_deployment";
    return DataCloudflareWorkersDeployment;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkersDeployment = DataCloudflareWorkersDeployment;
