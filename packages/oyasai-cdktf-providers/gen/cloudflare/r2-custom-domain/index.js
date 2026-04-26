"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain
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
exports.R2CustomDomain = exports.R2CustomDomainStatusOutputReference = void 0;
exports.r2CustomDomainStatusToTerraform = r2CustomDomainStatusToTerraform;
exports.r2CustomDomainStatusToHclTerraform = r2CustomDomainStatusToHclTerraform;
var cdktf = require("cdktf");
function r2CustomDomainStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function r2CustomDomainStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var R2CustomDomainStatusOutputReference = /** @class */ (function (_super) {
    __extends(R2CustomDomainStatusOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2CustomDomainStatusOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2CustomDomainStatusOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(R2CustomDomainStatusOutputReference.prototype, "ownership", {
        // ownership - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ownership');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomainStatusOutputReference.prototype, "ssl", {
        // ssl - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ssl');
        },
        enumerable: false,
        configurable: true
    });
    return R2CustomDomainStatusOutputReference;
}(cdktf.ComplexObject));
exports.R2CustomDomainStatusOutputReference = R2CustomDomainStatusOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain cloudflare_r2_custom_domain}
*/
var R2CustomDomain = /** @class */ (function (_super) {
    __extends(R2CustomDomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain cloudflare_r2_custom_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2CustomDomainConfig
    */
    function R2CustomDomain(scope, id, config) {
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
        _this._status = new R2CustomDomainStatusOutputReference(_this, "status");
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        _this._ciphers = config.ciphers;
        _this._domain = config.domain;
        _this._enabled = config.enabled;
        _this._jurisdiction = config.jurisdiction;
        _this._minTls = config.minTls;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a R2CustomDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2CustomDomain to import
    * @param importFromId The id of the existing R2CustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_custom_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2CustomDomain to import is found
    */
    R2CustomDomain.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_custom_domain", importId: importFromId, provider: provider });
    };
    Object.defineProperty(R2CustomDomain.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    R2CustomDomain.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(R2CustomDomain.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "ciphers", {
        get: function () {
            return this.getListAttribute('ciphers');
        },
        set: function (value) {
            this._ciphers = value;
        },
        enumerable: false,
        configurable: true
    });
    R2CustomDomain.prototype.resetCiphers = function () {
        this._ciphers = undefined;
    };
    Object.defineProperty(R2CustomDomain.prototype, "ciphersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ciphers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    R2CustomDomain.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(R2CustomDomain.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "minTls", {
        get: function () {
            return this.getStringAttribute('min_tls');
        },
        set: function (value) {
            this._minTls = value;
        },
        enumerable: false,
        configurable: true
    });
    R2CustomDomain.prototype.resetMinTls = function () {
        this._minTls = undefined;
    };
    Object.defineProperty(R2CustomDomain.prototype, "minTlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minTls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2CustomDomain.prototype, "zoneName", {
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
    R2CustomDomain.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ciphers),
            domain: cdktf.stringToTerraform(this._domain),
            enabled: cdktf.booleanToTerraform(this._enabled),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            min_tls: cdktf.stringToTerraform(this._minTls),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    R2CustomDomain.prototype.synthesizeHclAttributes = function () {
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
            ciphers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ciphers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            domain: {
                value: cdktf.stringToHclTerraform(this._domain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            jurisdiction: {
                value: cdktf.stringToHclTerraform(this._jurisdiction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            min_tls: {
                value: cdktf.stringToHclTerraform(this._minTls),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    R2CustomDomain.tfResourceType = "cloudflare_r2_custom_domain";
    return R2CustomDomain;
}(cdktf.TerraformResource));
exports.R2CustomDomain = R2CustomDomain;
