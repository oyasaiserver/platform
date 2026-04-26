"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback
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
exports.ZeroTrustDeviceCustomProfileLocalDomainFallback = exports.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList = exports.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference = void 0;
exports.zeroTrustDeviceCustomProfileLocalDomainFallbackDomainsToTerraform = zeroTrustDeviceCustomProfileLocalDomainFallbackDomainsToTerraform;
exports.zeroTrustDeviceCustomProfileLocalDomainFallbackDomainsToHclTerraform = zeroTrustDeviceCustomProfileLocalDomainFallbackDomainsToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDeviceCustomProfileLocalDomainFallbackDomainsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        dns_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.dnsServer),
        suffix: cdktf.stringToTerraform(struct.suffix),
    };
}
function zeroTrustDeviceCustomProfileLocalDomainFallbackDomainsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dns_server: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.dnsServer),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        suffix: {
            value: cdktf.stringToHclTerraform(struct.suffix),
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
var ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._dnsServer !== undefined) {
                hasAnyValues = true;
                internalValueResult.dnsServer = this._dnsServer;
            }
            if (this._suffix !== undefined) {
                hasAnyValues = true;
                internalValueResult.suffix = this._suffix;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._description = undefined;
                this._dnsServer = undefined;
                this._suffix = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._description = value.description;
                this._dnsServer = value.dnsServer;
                this._suffix = value.suffix;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.prototype, "dnsServer", {
        get: function () {
            return this.getListAttribute('dns_server');
        },
        set: function (value) {
            this._dnsServer = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.prototype.resetDnsServer = function () {
        this._dnsServer = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.prototype, "dnsServerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.prototype, "suffix", {
        get: function () {
            return this.getStringAttribute('suffix');
        },
        set: function (value) {
            this._suffix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.prototype, "suffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._suffix;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference = ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference;
var ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.prototype.get = function (index) {
        return new ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList;
}(cdktf.ComplexList));
exports.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList = ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback cloudflare_zero_trust_device_custom_profile_local_domain_fallback}
*/
var ZeroTrustDeviceCustomProfileLocalDomainFallback = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceCustomProfileLocalDomainFallback, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback cloudflare_zero_trust_device_custom_profile_local_domain_fallback} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig
    */
    function ZeroTrustDeviceCustomProfileLocalDomainFallback(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_custom_profile_local_domain_fallback',
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
        // domains - computed: false, optional: false, required: true
        _this._domains = new ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList(_this, "domains", true);
        _this._accountId = config.accountId;
        _this._domains.internalValue = config.domains;
        _this._policyId = config.policyId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceCustomProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceCustomProfileLocalDomainFallback to import
    * @param importFromId The id of the existing ZeroTrustDeviceCustomProfileLocalDomainFallback that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceCustomProfileLocalDomainFallback to import is found
    */
    ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_custom_profile_local_domain_fallback", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileLocalDomainFallback.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "domains", {
        get: function () {
            return this._domains;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceCustomProfileLocalDomainFallback.prototype.putDomains = function (value) {
        this._domains.internalValue = value;
    };
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "domainsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domains.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "policyId", {
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        set: function (value) {
            this._policyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "policyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDeviceCustomProfileLocalDomainFallback.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            domains: cdktf.listMapper(zeroTrustDeviceCustomProfileLocalDomainFallbackDomainsToTerraform, false)(this._domains.internalValue),
            policy_id: cdktf.stringToTerraform(this._policyId),
        };
    };
    ZeroTrustDeviceCustomProfileLocalDomainFallback.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domains: {
                value: cdktf.listMapperHcl(zeroTrustDeviceCustomProfileLocalDomainFallbackDomainsToHclTerraform, false)(this._domains.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList",
            },
            policy_id: {
                value: cdktf.stringToHclTerraform(this._policyId),
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
    ZeroTrustDeviceCustomProfileLocalDomainFallback.tfResourceType = "cloudflare_zero_trust_device_custom_profile_local_domain_fallback";
    return ZeroTrustDeviceCustomProfileLocalDomainFallback;
}(cdktf.TerraformResource));
exports.ZeroTrustDeviceCustomProfileLocalDomainFallback = ZeroTrustDeviceCustomProfileLocalDomainFallback;
