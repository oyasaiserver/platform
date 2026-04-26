"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflow
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
exports.DataCloudflareWorkflow = exports.DataCloudflareWorkflowInstancesOutputReference = exports.DataCloudflareWorkflowFilterOutputReference = void 0;
exports.dataCloudflareWorkflowFilterToTerraform = dataCloudflareWorkflowFilterToTerraform;
exports.dataCloudflareWorkflowFilterToHclTerraform = dataCloudflareWorkflowFilterToHclTerraform;
exports.dataCloudflareWorkflowInstancesToTerraform = dataCloudflareWorkflowInstancesToTerraform;
exports.dataCloudflareWorkflowInstancesToHclTerraform = dataCloudflareWorkflowInstancesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkflowFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        search: cdktf.stringToTerraform(struct.search),
    };
}
function dataCloudflareWorkflowFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        search: {
            value: cdktf.stringToHclTerraform(struct.search),
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
var DataCloudflareWorkflowFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkflowFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkflowFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkflowFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._search !== undefined) {
                hasAnyValues = true;
                internalValueResult.search = this._search;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._search = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._search = value.search;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowFilterOutputReference.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkflowFilterOutputReference.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareWorkflowFilterOutputReference.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkflowFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkflowFilterOutputReference = DataCloudflareWorkflowFilterOutputReference;
function dataCloudflareWorkflowInstancesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareWorkflowInstancesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareWorkflowInstancesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkflowInstancesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkflowInstancesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkflowInstancesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareWorkflowInstancesOutputReference.prototype, "complete", {
        // complete - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('complete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowInstancesOutputReference.prototype, "errored", {
        // errored - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('errored');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowInstancesOutputReference.prototype, "paused", {
        // paused - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('paused');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowInstancesOutputReference.prototype, "queued", {
        // queued - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('queued');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowInstancesOutputReference.prototype, "running", {
        // running - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('running');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowInstancesOutputReference.prototype, "terminated", {
        // terminated - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('terminated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowInstancesOutputReference.prototype, "waiting", {
        // waiting - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('waiting');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflowInstancesOutputReference.prototype, "waitingForPause", {
        // waiting_for_pause - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('waiting_for_pause');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkflowInstancesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkflowInstancesOutputReference = DataCloudflareWorkflowInstancesOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflow cloudflare_workflow}
*/
var DataCloudflareWorkflow = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkflow, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflow cloudflare_workflow} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkflowConfig = {}
    */
    function DataCloudflareWorkflow(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workflow',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareWorkflowFilterOutputReference(_this, "filter");
        // instances - computed: true, optional: false, required: false
        _this._instances = new DataCloudflareWorkflowInstancesOutputReference(_this, "instances");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._workflowName = config.workflowName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkflow resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkflow to import
    * @param importFromId The id of the existing DataCloudflareWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workflow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkflow to import is found
    */
    DataCloudflareWorkflow.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workflow", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkflow.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkflow.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkflow.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflow.prototype, "className", {
        // class_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('class_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflow.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflow.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkflow.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareWorkflow.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareWorkflow.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflow.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflow.prototype, "instances", {
        get: function () {
            return this._instances;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflow.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflow.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflow.prototype, "scriptName", {
        // script_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflow.prototype, "triggeredOn", {
        // triggered_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('triggered_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkflow.prototype, "workflowName", {
        get: function () {
            return this.getStringAttribute('workflow_name');
        },
        set: function (value) {
            this._workflowName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkflow.prototype.resetWorkflowName = function () {
        this._workflowName = undefined;
    };
    Object.defineProperty(DataCloudflareWorkflow.prototype, "workflowNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workflowName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWorkflow.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareWorkflowFilterToTerraform(this._filter.internalValue),
            workflow_name: cdktf.stringToTerraform(this._workflowName),
        };
    };
    DataCloudflareWorkflow.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareWorkflowFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareWorkflowFilter",
            },
            workflow_name: {
                value: cdktf.stringToHclTerraform(this._workflowName),
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
    DataCloudflareWorkflow.tfResourceType = "cloudflare_workflow";
    return DataCloudflareWorkflow;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkflow = DataCloudflareWorkflow;
