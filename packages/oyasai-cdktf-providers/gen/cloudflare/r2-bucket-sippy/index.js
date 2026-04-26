"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy
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
exports.R2BucketSippy = exports.R2BucketSippySourceOutputReference = exports.R2BucketSippyDestinationOutputReference = void 0;
exports.r2BucketSippyDestinationToTerraform = r2BucketSippyDestinationToTerraform;
exports.r2BucketSippyDestinationToHclTerraform = r2BucketSippyDestinationToHclTerraform;
exports.r2BucketSippySourceToTerraform = r2BucketSippySourceToTerraform;
exports.r2BucketSippySourceToHclTerraform = r2BucketSippySourceToHclTerraform;
var cdktf = require("cdktf");
function r2BucketSippyDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_id: cdktf.stringToTerraform(struct.accessKeyId),
        cloud_provider: cdktf.stringToTerraform(struct.cloudProvider),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
function r2BucketSippyDestinationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access_key_id: {
            value: cdktf.stringToHclTerraform(struct.accessKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloud_provider: {
            value: cdktf.stringToHclTerraform(struct.cloudProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_access_key: {
            value: cdktf.stringToHclTerraform(struct.secretAccessKey),
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
var R2BucketSippyDestinationOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketSippyDestinationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2BucketSippyDestinationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2BucketSippyDestinationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._accessKeyId !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessKeyId = this._accessKeyId;
            }
            if (this._cloudProvider !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudProvider = this._cloudProvider;
            }
            if (this._secretAccessKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretAccessKey = this._secretAccessKey;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accessKeyId = undefined;
                this._cloudProvider = undefined;
                this._secretAccessKey = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessKeyId = value.accessKeyId;
                this._cloudProvider = value.cloudProvider;
                this._secretAccessKey = value.secretAccessKey;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippyDestinationOutputReference.prototype, "accessKeyId", {
        get: function () {
            return this.getStringAttribute('access_key_id');
        },
        set: function (value) {
            this._accessKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippyDestinationOutputReference.prototype.resetAccessKeyId = function () {
        this._accessKeyId = undefined;
    };
    Object.defineProperty(R2BucketSippyDestinationOutputReference.prototype, "accessKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippyDestinationOutputReference.prototype, "cloudProvider", {
        get: function () {
            return this.getStringAttribute('cloud_provider');
        },
        set: function (value) {
            this._cloudProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippyDestinationOutputReference.prototype.resetCloudProvider = function () {
        this._cloudProvider = undefined;
    };
    Object.defineProperty(R2BucketSippyDestinationOutputReference.prototype, "cloudProviderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippyDestinationOutputReference.prototype, "secretAccessKey", {
        get: function () {
            return this.getStringAttribute('secret_access_key');
        },
        set: function (value) {
            this._secretAccessKey = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippyDestinationOutputReference.prototype.resetSecretAccessKey = function () {
        this._secretAccessKey = undefined;
    };
    Object.defineProperty(R2BucketSippyDestinationOutputReference.prototype, "secretAccessKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretAccessKey;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketSippyDestinationOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketSippyDestinationOutputReference = R2BucketSippyDestinationOutputReference;
function r2BucketSippySourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_id: cdktf.stringToTerraform(struct.accessKeyId),
        bucket: cdktf.stringToTerraform(struct.bucket),
        bucket_url: cdktf.stringToTerraform(struct.bucketUrl),
        client_email: cdktf.stringToTerraform(struct.clientEmail),
        cloud_provider: cdktf.stringToTerraform(struct.cloudProvider),
        private_key: cdktf.stringToTerraform(struct.privateKey),
        region: cdktf.stringToTerraform(struct.region),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
function r2BucketSippySourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access_key_id: {
            value: cdktf.stringToHclTerraform(struct.accessKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket: {
            value: cdktf.stringToHclTerraform(struct.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_url: {
            value: cdktf.stringToHclTerraform(struct.bucketUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_email: {
            value: cdktf.stringToHclTerraform(struct.clientEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloud_provider: {
            value: cdktf.stringToHclTerraform(struct.cloudProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_key: {
            value: cdktf.stringToHclTerraform(struct.privateKey),
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
        secret_access_key: {
            value: cdktf.stringToHclTerraform(struct.secretAccessKey),
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
var R2BucketSippySourceOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketSippySourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2BucketSippySourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._accessKeyId !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessKeyId = this._accessKeyId;
            }
            if (this._bucket !== undefined) {
                hasAnyValues = true;
                internalValueResult.bucket = this._bucket;
            }
            if (this._bucketUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.bucketUrl = this._bucketUrl;
            }
            if (this._clientEmail !== undefined) {
                hasAnyValues = true;
                internalValueResult.clientEmail = this._clientEmail;
            }
            if (this._cloudProvider !== undefined) {
                hasAnyValues = true;
                internalValueResult.cloudProvider = this._cloudProvider;
            }
            if (this._privateKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.privateKey = this._privateKey;
            }
            if (this._region !== undefined) {
                hasAnyValues = true;
                internalValueResult.region = this._region;
            }
            if (this._secretAccessKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretAccessKey = this._secretAccessKey;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accessKeyId = undefined;
                this._bucket = undefined;
                this._bucketUrl = undefined;
                this._clientEmail = undefined;
                this._cloudProvider = undefined;
                this._privateKey = undefined;
                this._region = undefined;
                this._secretAccessKey = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessKeyId = value.accessKeyId;
                this._bucket = value.bucket;
                this._bucketUrl = value.bucketUrl;
                this._clientEmail = value.clientEmail;
                this._cloudProvider = value.cloudProvider;
                this._privateKey = value.privateKey;
                this._region = value.region;
                this._secretAccessKey = value.secretAccessKey;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "accessKeyId", {
        get: function () {
            return this.getStringAttribute('access_key_id');
        },
        set: function (value) {
            this._accessKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippySourceOutputReference.prototype.resetAccessKeyId = function () {
        this._accessKeyId = undefined;
    };
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "accessKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippySourceOutputReference.prototype.resetBucket = function () {
        this._bucket = undefined;
    };
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "bucketUrl", {
        get: function () {
            return this.getStringAttribute('bucket_url');
        },
        set: function (value) {
            this._bucketUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippySourceOutputReference.prototype.resetBucketUrl = function () {
        this._bucketUrl = undefined;
    };
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "bucketUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "clientEmail", {
        get: function () {
            return this.getStringAttribute('client_email');
        },
        set: function (value) {
            this._clientEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippySourceOutputReference.prototype.resetClientEmail = function () {
        this._clientEmail = undefined;
    };
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "clientEmailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "cloudProvider", {
        get: function () {
            return this.getStringAttribute('cloud_provider');
        },
        set: function (value) {
            this._cloudProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippySourceOutputReference.prototype.resetCloudProvider = function () {
        this._cloudProvider = undefined;
    };
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "cloudProviderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "privateKey", {
        get: function () {
            return this.getStringAttribute('private_key');
        },
        set: function (value) {
            this._privateKey = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippySourceOutputReference.prototype.resetPrivateKey = function () {
        this._privateKey = undefined;
    };
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "privateKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippySourceOutputReference.prototype.resetRegion = function () {
        this._region = undefined;
    };
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "secretAccessKey", {
        get: function () {
            return this.getStringAttribute('secret_access_key');
        },
        set: function (value) {
            this._secretAccessKey = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippySourceOutputReference.prototype.resetSecretAccessKey = function () {
        this._secretAccessKey = undefined;
    };
    Object.defineProperty(R2BucketSippySourceOutputReference.prototype, "secretAccessKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretAccessKey;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketSippySourceOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketSippySourceOutputReference = R2BucketSippySourceOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy cloudflare_r2_bucket_sippy}
*/
var R2BucketSippy = /** @class */ (function (_super) {
    __extends(R2BucketSippy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy cloudflare_r2_bucket_sippy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketSippyConfig
    */
    function R2BucketSippy(scope, id, config) {
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
        // destination - computed: false, optional: true, required: false
        _this._destination = new R2BucketSippyDestinationOutputReference(_this, "destination");
        // source - computed: false, optional: true, required: false
        _this._source = new R2BucketSippySourceOutputReference(_this, "source");
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        _this._destination.internalValue = config.destination;
        _this._jurisdiction = config.jurisdiction;
        _this._source.internalValue = config.source;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a R2BucketSippy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketSippy to import
    * @param importFromId The id of the existing R2BucketSippy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketSippy to import is found
    */
    R2BucketSippy.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_sippy", importId: importFromId, provider: provider });
    };
    Object.defineProperty(R2BucketSippy.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippy.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(R2BucketSippy.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippy.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippy.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippy.prototype, "destination", {
        get: function () {
            return this._destination;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippy.prototype.putDestination = function (value) {
        this._destination.internalValue = value;
    };
    R2BucketSippy.prototype.resetDestination = function () {
        this._destination.internalValue = undefined;
    };
    Object.defineProperty(R2BucketSippy.prototype, "destinationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destination.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippy.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippy.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippy.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(R2BucketSippy.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketSippy.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketSippy.prototype.putSource = function (value) {
        this._source.internalValue = value;
    };
    R2BucketSippy.prototype.resetSource = function () {
        this._source.internalValue = undefined;
    };
    Object.defineProperty(R2BucketSippy.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    R2BucketSippy.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            destination: r2BucketSippyDestinationToTerraform(this._destination.internalValue),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            source: r2BucketSippySourceToTerraform(this._source.internalValue),
        };
    };
    R2BucketSippy.prototype.synthesizeHclAttributes = function () {
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
            destination: {
                value: r2BucketSippyDestinationToHclTerraform(this._destination.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "R2BucketSippyDestination",
            },
            jurisdiction: {
                value: cdktf.stringToHclTerraform(this._jurisdiction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: r2BucketSippySourceToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "R2BucketSippySource",
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
    R2BucketSippy.tfResourceType = "cloudflare_r2_bucket_sippy";
    return R2BucketSippy;
}(cdktf.TerraformResource));
exports.R2BucketSippy = R2BucketSippy;
