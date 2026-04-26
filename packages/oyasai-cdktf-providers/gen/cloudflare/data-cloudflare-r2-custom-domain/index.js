"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_custom_domain
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
exports.DataCloudflareR2CustomDomain = exports.DataCloudflareR2CustomDomainStatusOutputReference = void 0;
exports.dataCloudflareR2CustomDomainStatusToTerraform = dataCloudflareR2CustomDomainStatusToTerraform;
exports.dataCloudflareR2CustomDomainStatusToHclTerraform = dataCloudflareR2CustomDomainStatusToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareR2CustomDomainStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2CustomDomainStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2CustomDomainStatusOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2CustomDomainStatusOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareR2CustomDomainStatusOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareR2CustomDomainStatusOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2CustomDomainStatusOutputReference.prototype, "ownership", {
        // ownership - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ownership');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2CustomDomainStatusOutputReference.prototype, "ssl", {
        // ssl - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ssl');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2CustomDomainStatusOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2CustomDomainStatusOutputReference = DataCloudflareR2CustomDomainStatusOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_custom_domain cloudflare_r2_custom_domain}
*/
var DataCloudflareR2CustomDomain = /** @class */ (function (_super) {
    __extends(DataCloudflareR2CustomDomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_custom_domain cloudflare_r2_custom_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2CustomDomainConfig
    */
    function DataCloudflareR2CustomDomain(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_r2_custom_domain',
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
        // status - computed: true, optional: false, required: false
        _this._status = new DataCloudflareR2CustomDomainStatusOutputReference(_this, "status");
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        _this._domain = config.domain;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareR2CustomDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2CustomDomain to import
    * @param importFromId The id of the existing DataCloudflareR2CustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_custom_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2CustomDomain to import is found
    */
    DataCloudflareR2CustomDomain.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_custom_domain", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareR2CustomDomain.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "ciphers", {
        // ciphers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ciphers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "minTls", {
        // min_tls - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('min_tls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2CustomDomain.prototype, "zoneName", {
        // zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_name');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareR2CustomDomain.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            domain: cdktf.stringToTerraform(this._domain),
        };
    };
    DataCloudflareR2CustomDomain.prototype.synthesizeHclAttributes = function () {
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
            domain: {
                value: cdktf.stringToHclTerraform(this._domain),
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
    DataCloudflareR2CustomDomain.tfResourceType = "cloudflare_r2_custom_domain";
    return DataCloudflareR2CustomDomain;
}(cdktf.TerraformDataSource));
exports.DataCloudflareR2CustomDomain = DataCloudflareR2CustomDomain;
