"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile_local_domain_fallback
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
exports.ZeroTrustDeviceDefaultProfileLocalDomainFallback = exports.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList = exports.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference = void 0;
exports.zeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsToTerraform = zeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsToTerraform;
exports.zeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsToHclTerraform = zeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsToTerraform(struct) {
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
function zeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsToHclTerraform(struct) {
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
var ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.prototype, "dnsServer", {
        get: function () {
            return this.getListAttribute('dns_server');
        },
        set: function (value) {
            this._dnsServer = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.prototype.resetDnsServer = function () {
        this._dnsServer = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.prototype, "dnsServerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.prototype, "suffix", {
        get: function () {
            return this.getStringAttribute('suffix');
        },
        set: function (value) {
            this._suffix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.prototype, "suffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._suffix;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference = ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference;
var ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.prototype.get = function (index) {
        return new ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList;
}(cdktf.ComplexList));
exports.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList = ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile_local_domain_fallback cloudflare_zero_trust_device_default_profile_local_domain_fallback}
*/
var ZeroTrustDeviceDefaultProfileLocalDomainFallback = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceDefaultProfileLocalDomainFallback, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile_local_domain_fallback cloudflare_zero_trust_device_default_profile_local_domain_fallback} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig
    */
    function ZeroTrustDeviceDefaultProfileLocalDomainFallback(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_default_profile_local_domain_fallback',
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
        _this._domains = new ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList(_this, "domains", true);
        _this._accountId = config.accountId;
        _this._domains.internalValue = config.domains;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceDefaultProfileLocalDomainFallback to import
    * @param importFromId The id of the existing ZeroTrustDeviceDefaultProfileLocalDomainFallback that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile_local_domain_fallback#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceDefaultProfileLocalDomainFallback to import is found
    */
    ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_default_profile_local_domain_fallback", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallback.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallback.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallback.prototype, "domains", {
        get: function () {
            return this._domains;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceDefaultProfileLocalDomainFallback.prototype.putDomains = function (value) {
        this._domains.internalValue = value;
    };
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallback.prototype, "domainsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domains.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceDefaultProfileLocalDomainFallback.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDeviceDefaultProfileLocalDomainFallback.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            domains: cdktf.listMapper(zeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsToTerraform, false)(this._domains.internalValue),
        };
    };
    ZeroTrustDeviceDefaultProfileLocalDomainFallback.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domains: {
                value: cdktf.listMapperHcl(zeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsToHclTerraform, false)(this._domains.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList",
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
    ZeroTrustDeviceDefaultProfileLocalDomainFallback.tfResourceType = "cloudflare_zero_trust_device_default_profile_local_domain_fallback";
    return ZeroTrustDeviceDefaultProfileLocalDomainFallback;
}(cdktf.TerraformResource));
exports.ZeroTrustDeviceDefaultProfileLocalDomainFallback = ZeroTrustDeviceDefaultProfileLocalDomainFallback;
