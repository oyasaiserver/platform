"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_cors
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
exports.DataCloudflareR2BucketCors = exports.DataCloudflareR2BucketCorsRulesList = exports.DataCloudflareR2BucketCorsRulesOutputReference = exports.DataCloudflareR2BucketCorsRulesAllowedOutputReference = void 0;
exports.dataCloudflareR2BucketCorsRulesAllowedToTerraform = dataCloudflareR2BucketCorsRulesAllowedToTerraform;
exports.dataCloudflareR2BucketCorsRulesAllowedToHclTerraform = dataCloudflareR2BucketCorsRulesAllowedToHclTerraform;
exports.dataCloudflareR2BucketCorsRulesToTerraform = dataCloudflareR2BucketCorsRulesToTerraform;
exports.dataCloudflareR2BucketCorsRulesToHclTerraform = dataCloudflareR2BucketCorsRulesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareR2BucketCorsRulesAllowedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketCorsRulesAllowedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketCorsRulesAllowedOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketCorsRulesAllowedOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareR2BucketCorsRulesAllowedOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketCorsRulesAllowedOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketCorsRulesAllowedOutputReference.prototype, "headers", {
        // headers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketCorsRulesAllowedOutputReference.prototype, "methods", {
        // methods - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('methods');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketCorsRulesAllowedOutputReference.prototype, "origins", {
        // origins - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('origins');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketCorsRulesAllowedOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketCorsRulesAllowedOutputReference = DataCloudflareR2BucketCorsRulesAllowedOutputReference;
function dataCloudflareR2BucketCorsRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketCorsRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketCorsRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketCorsRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareR2BucketCorsRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // allowed - computed: true, optional: false, required: false
        _this._allowed = new DataCloudflareR2BucketCorsRulesAllowedOutputReference(_this, "allowed");
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketCorsRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketCorsRulesOutputReference.prototype, "allowed", {
        get: function () {
            return this._allowed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketCorsRulesOutputReference.prototype, "exposeHeaders", {
        // expose_headers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('expose_headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketCorsRulesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketCorsRulesOutputReference.prototype, "maxAgeSeconds", {
        // max_age_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age_seconds');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketCorsRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketCorsRulesOutputReference = DataCloudflareR2BucketCorsRulesOutputReference;
var DataCloudflareR2BucketCorsRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketCorsRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareR2BucketCorsRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareR2BucketCorsRulesList.prototype.get = function (index) {
        return new DataCloudflareR2BucketCorsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareR2BucketCorsRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareR2BucketCorsRulesList = DataCloudflareR2BucketCorsRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_cors cloudflare_r2_bucket_cors}
*/
var DataCloudflareR2BucketCors = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketCors, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_cors cloudflare_r2_bucket_cors} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2BucketCorsConfig
    */
    function DataCloudflareR2BucketCors(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_r2_bucket_cors',
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
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareR2BucketCorsRulesList(_this, "rules", false);
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareR2BucketCors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2BucketCors to import
    * @param importFromId The id of the existing DataCloudflareR2BucketCors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_cors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2BucketCors to import is found
    */
    DataCloudflareR2BucketCors.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_cors", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareR2BucketCors.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareR2BucketCors.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareR2BucketCors.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketCors.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketCors.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketCors.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareR2BucketCors.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
        };
    };
    DataCloudflareR2BucketCors.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bucket_name: {
                value: cdktf.stringToHclTerraform(this._bucketName),
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
    DataCloudflareR2BucketCors.tfResourceType = "cloudflare_r2_bucket_cors";
    return DataCloudflareR2BucketCors;
}(cdktf.TerraformDataSource));
exports.DataCloudflareR2BucketCors = DataCloudflareR2BucketCors;
