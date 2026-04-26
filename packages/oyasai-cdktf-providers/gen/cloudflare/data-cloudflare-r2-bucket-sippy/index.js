"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_sippy
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
exports.DataCloudflareR2BucketSippy = exports.DataCloudflareR2BucketSippySourceOutputReference = exports.DataCloudflareR2BucketSippyDestinationOutputReference = void 0;
exports.dataCloudflareR2BucketSippyDestinationToTerraform = dataCloudflareR2BucketSippyDestinationToTerraform;
exports.dataCloudflareR2BucketSippyDestinationToHclTerraform = dataCloudflareR2BucketSippyDestinationToHclTerraform;
exports.dataCloudflareR2BucketSippySourceToTerraform = dataCloudflareR2BucketSippySourceToTerraform;
exports.dataCloudflareR2BucketSippySourceToHclTerraform = dataCloudflareR2BucketSippySourceToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareR2BucketSippyDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketSippyDestinationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketSippyDestinationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketSippyDestinationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareR2BucketSippyDestinationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketSippyDestinationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketSippyDestinationOutputReference.prototype, "accessKeyId", {
        // access_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketSippyDestinationOutputReference.prototype, "account", {
        // account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketSippyDestinationOutputReference.prototype, "bucket", {
        // bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketSippyDestinationOutputReference.prototype, "r2BucketSippyProvider", {
        // r2_bucket_sippy_provider - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('r2_bucket_sippy_provider');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketSippyDestinationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketSippyDestinationOutputReference = DataCloudflareR2BucketSippyDestinationOutputReference;
function dataCloudflareR2BucketSippySourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketSippySourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketSippySourceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketSippySourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareR2BucketSippySourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketSippySourceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketSippySourceOutputReference.prototype, "bucket", {
        // bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketSippySourceOutputReference.prototype, "bucketUrl", {
        // bucket_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketSippySourceOutputReference.prototype, "r2BucketSippyProvider", {
        // r2_bucket_sippy_provider - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('r2_bucket_sippy_provider');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketSippySourceOutputReference.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketSippySourceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketSippySourceOutputReference = DataCloudflareR2BucketSippySourceOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_sippy cloudflare_r2_bucket_sippy}
*/
var DataCloudflareR2BucketSippy = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketSippy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_sippy cloudflare_r2_bucket_sippy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2BucketSippyConfig
    */
    function DataCloudflareR2BucketSippy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_r2_bucket_sippy',
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
        // destination - computed: true, optional: false, required: false
        _this._destination = new DataCloudflareR2BucketSippyDestinationOutputReference(_this, "destination");
        // source - computed: true, optional: false, required: false
        _this._source = new DataCloudflareR2BucketSippySourceOutputReference(_this, "source");
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareR2BucketSippy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2BucketSippy to import
    * @param importFromId The id of the existing DataCloudflareR2BucketSippy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_sippy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2BucketSippy to import is found
    */
    DataCloudflareR2BucketSippy.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_sippy", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareR2BucketSippy.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareR2BucketSippy.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareR2BucketSippy.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketSippy.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketSippy.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketSippy.prototype, "destination", {
        get: function () {
            return this._destination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketSippy.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketSippy.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareR2BucketSippy.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
        };
    };
    DataCloudflareR2BucketSippy.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareR2BucketSippy.tfResourceType = "cloudflare_r2_bucket_sippy";
    return DataCloudflareR2BucketSippy;
}(cdktf.TerraformDataSource));
exports.DataCloudflareR2BucketSippy = DataCloudflareR2BucketSippy;
