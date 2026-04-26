"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline
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
exports.Pipeline = exports.PipelineTablesList = exports.PipelineTablesOutputReference = void 0;
exports.pipelineTablesToTerraform = pipelineTablesToTerraform;
exports.pipelineTablesToHclTerraform = pipelineTablesToHclTerraform;
var cdktf = require("cdktf");
function pipelineTablesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pipelineTablesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PipelineTablesOutputReference = /** @class */ (function (_super) {
    __extends(PipelineTablesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PipelineTablesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PipelineTablesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(PipelineTablesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineTablesOutputReference.prototype, "latest", {
        // latest - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('latest');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineTablesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineTablesOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PipelineTablesOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    return PipelineTablesOutputReference;
}(cdktf.ComplexObject));
exports.PipelineTablesOutputReference = PipelineTablesOutputReference;
var PipelineTablesList = /** @class */ (function (_super) {
    __extends(PipelineTablesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function PipelineTablesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    PipelineTablesList.prototype.get = function (index) {
        return new PipelineTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return PipelineTablesList;
}(cdktf.ComplexList));
exports.PipelineTablesList = PipelineTablesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline cloudflare_pipeline}
*/
var Pipeline = /** @class */ (function (_super) {
    __extends(Pipeline, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline cloudflare_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PipelineConfig
    */
    function Pipeline(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_pipeline',
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
        // tables - computed: true, optional: false, required: false
        _this._tables = new PipelineTablesList(_this, "tables", false);
        _this._accountId = config.accountId;
        _this._name = config.name;
        _this._sql = config.sql;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Pipeline to import
    * @param importFromId The id of the existing Pipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Pipeline to import is found
    */
    Pipeline.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pipeline", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Pipeline.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Pipeline.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(Pipeline.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pipeline.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pipeline.prototype, "failureReason", {
        // failure_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('failure_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pipeline.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pipeline.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pipeline.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pipeline.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pipeline.prototype, "sql", {
        get: function () {
            return this.getStringAttribute('sql');
        },
        set: function (value) {
            this._sql = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pipeline.prototype, "sqlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sql;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pipeline.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pipeline.prototype, "tables", {
        get: function () {
            return this._tables;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Pipeline.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            name: cdktf.stringToTerraform(this._name),
            sql: cdktf.stringToTerraform(this._sql),
        };
    };
    Pipeline.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sql: {
                value: cdktf.stringToHclTerraform(this._sql),
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
    Pipeline.tfResourceType = "cloudflare_pipeline";
    return Pipeline;
}(cdktf.TerraformResource));
exports.Pipeline = Pipeline;
