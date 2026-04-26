"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflows
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
exports.DataCloudflareWorkflows = exports.DataCloudflareWorkflowsResultList = exports.DataCloudflareWorkflowsResultOutputReference = exports.DataCloudflareWorkflowsResultInstancesOutputReference = void 0;
exports.dataCloudflareWorkflowsResultInstancesToTerraform = dataCloudflareWorkflowsResultInstancesToTerraform;
exports.dataCloudflareWorkflowsResultInstancesToHclTerraform = dataCloudflareWorkflowsResultInstancesToHclTerraform;
exports.dataCloudflareWorkflowsResultToTerraform = dataCloudflareWorkflowsResultToTerraform;
exports.dataCloudflareWorkflowsResultToHclTerraform = dataCloudflareWorkflowsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkflowsResultInstancesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkflowsResultInstancesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkflowsResultInstancesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkflowsResultInstancesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkflowsResultInstancesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkflowsResultInstancesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkflowsResultInstancesOutputReference.prototype, "complete", {
        // complete - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('complete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultInstancesOutputReference.prototype, "errored", {
        // errored - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('errored');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultInstancesOutputReference.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultInstancesOutputReference.prototype, "queued", {
        // queued - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('queued');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultInstancesOutputReference.prototype, "running", {
        // running - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('running');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultInstancesOutputReference.prototype, "terminated", {
        // terminated - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('terminated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultInstancesOutputReference.prototype, "waiting", {
        // waiting - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('waiting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultInstancesOutputReference.prototype, "waitingForPause", {
        // waiting_for_pause - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('waiting_for_pause');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkflowsResultInstancesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkflowsResultInstancesOutputReference = DataCloudflareWorkflowsResultInstancesOutputReference;
function dataCloudflareWorkflowsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkflowsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkflowsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkflowsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkflowsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // instances - computed: true, optional: false, required: false
        _this._instances = new DataCloudflareWorkflowsResultInstancesOutputReference(_this, "instances");
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkflowsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkflowsResultOutputReference.prototype, "className", {
        // class_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('class_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultOutputReference.prototype, "instances", {
        get: function () {
            return this._instances;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultOutputReference.prototype, "scriptName", {
        // script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowsResultOutputReference.prototype, "triggeredOn", {
        // triggered_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('triggered_on');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkflowsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkflowsResultOutputReference = DataCloudflareWorkflowsResultOutputReference;
var DataCloudflareWorkflowsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkflowsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareWorkflowsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareWorkflowsResultList.prototype.get = function (index) {
        return new DataCloudflareWorkflowsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareWorkflowsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareWorkflowsResultList = DataCloudflareWorkflowsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflows cloudflare_workflows}
*/
var DataCloudflareWorkflows = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkflows, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflows cloudflare_workflows} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkflowsConfig = {}
    */
    function DataCloudflareWorkflows(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workflows',
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
        _this._result = new DataCloudflareWorkflowsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._search = config.search;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkflows resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkflows to import
    * @param importFromId The id of the existing DataCloudflareWorkflows that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflows#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkflows to import is found
    */
    DataCloudflareWorkflows.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workflows", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkflows.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkflows.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkflows.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflows.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkflows.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareWorkflows.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflows.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflows.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkflows.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareWorkflows.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWorkflows.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            search: cdktf.stringToTerraform(this._search),
        };
    };
    DataCloudflareWorkflows.prototype.synthesizeHclAttributes = function () {
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
            search: {
                value: cdktf.stringToHclTerraform(this._search),
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
    DataCloudflareWorkflows.tfResourceType = "cloudflare_workflows";
    return DataCloudflareWorkflows;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkflows = DataCloudflareWorkflows;
