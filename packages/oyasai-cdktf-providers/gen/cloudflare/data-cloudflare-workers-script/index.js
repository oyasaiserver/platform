"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_script
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
exports.DataCloudflareWorkersScript = exports.DataCloudflareWorkersScriptFilterOutputReference = void 0;
exports.dataCloudflareWorkersScriptFilterToTerraform = dataCloudflareWorkersScriptFilterToTerraform;
exports.dataCloudflareWorkersScriptFilterToHclTerraform = dataCloudflareWorkersScriptFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareWorkersScriptFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        tags: cdktf.stringToTerraform(struct.tags),
    };
}
function dataCloudflareWorkersScriptFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        tags: {
            value: cdktf.stringToHclTerraform(struct.tags),
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
var DataCloudflareWorkersScriptFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScriptFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareWorkersScriptFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareWorkersScriptFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._tags !== undefined) {
                hasAnyValues = true;
                internalValueResult.tags = this._tags;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._tags = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._tags = value.tags;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScriptFilterOutputReference.prototype, "tags", {
        get: function () {
            return this.getStringAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersScriptFilterOutputReference.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersScriptFilterOutputReference.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareWorkersScriptFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareWorkersScriptFilterOutputReference = DataCloudflareWorkersScriptFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_script cloudflare_workers_script}
*/
var DataCloudflareWorkersScript = /** @class */ (function (_super) {
    __extends(DataCloudflareWorkersScript, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_script cloudflare_workers_script} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersScriptConfig = {}
    */
    function DataCloudflareWorkersScript(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareWorkersScriptFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._scriptName = config.scriptName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersScript resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersScript to import
    * @param importFromId The id of the existing DataCloudflareWorkersScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_script#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersScript to import is found
    */
    DataCloudflareWorkersScript.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_script", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareWorkersScript.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersScript.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersScript.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScript.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersScript.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareWorkersScript.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersScript.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScript.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScript.prototype, "script", {
        // script - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('script');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareWorkersScript.prototype, "scriptName", {
        get: function () {
            return this.getStringAttribute('script_name');
        },
        set: function (value) {
            this._scriptName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareWorkersScript.prototype.resetScriptName = function () {
        this._scriptName = undefined;
    };
    Object.defineProperty(DataCloudflareWorkersScript.prototype, "scriptNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scriptName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareWorkersScript.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareWorkersScriptFilterToTerraform(this._filter.internalValue),
            script_name: cdktf.stringToTerraform(this._scriptName),
        };
    };
    DataCloudflareWorkersScript.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareWorkersScriptFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareWorkersScriptFilter",
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
    DataCloudflareWorkersScript.tfResourceType = "cloudflare_workers_script";
    return DataCloudflareWorkersScript;
}(cdktf.TerraformDataSource));
exports.DataCloudflareWorkersScript = DataCloudflareWorkersScript;
