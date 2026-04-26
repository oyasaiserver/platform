"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target
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
exports.ZeroTrustAccessInfrastructureTarget = exports.ZeroTrustAccessInfrastructureTargetIpOutputReference = exports.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference = exports.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference = void 0;
exports.zeroTrustAccessInfrastructureTargetIpIpv4ToTerraform = zeroTrustAccessInfrastructureTargetIpIpv4ToTerraform;
exports.zeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform = zeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform;
exports.zeroTrustAccessInfrastructureTargetIpIpv6ToTerraform = zeroTrustAccessInfrastructureTargetIpIpv6ToTerraform;
exports.zeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform = zeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform;
exports.zeroTrustAccessInfrastructureTargetIpToTerraform = zeroTrustAccessInfrastructureTargetIpToTerraform;
exports.zeroTrustAccessInfrastructureTargetIpToHclTerraform = zeroTrustAccessInfrastructureTargetIpToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustAccessInfrastructureTargetIpIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip_addr: cdktf.stringToTerraform(struct.ipAddr),
        virtual_network_id: cdktf.stringToTerraform(struct.virtualNetworkId),
    };
}
function zeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ip_addr: {
            value: cdktf.stringToHclTerraform(struct.ipAddr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        virtual_network_id: {
            value: cdktf.stringToHclTerraform(struct.virtualNetworkId),
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
var ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ipAddr !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipAddr = this._ipAddr;
            }
            if (this._virtualNetworkId !== undefined) {
                hasAnyValues = true;
                internalValueResult.virtualNetworkId = this._virtualNetworkId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ipAddr = undefined;
                this._virtualNetworkId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ipAddr = value.ipAddr;
                this._virtualNetworkId = value.virtualNetworkId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.prototype, "ipAddr", {
        get: function () {
            return this.getStringAttribute('ip_addr');
        },
        set: function (value) {
            this._ipAddr = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.prototype.resetIpAddr = function () {
        this._ipAddr = undefined;
    };
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.prototype, "ipAddrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.prototype, "virtualNetworkId", {
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        set: function (value) {
            this._virtualNetworkId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.prototype.resetVirtualNetworkId = function () {
        this._virtualNetworkId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.prototype, "virtualNetworkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualNetworkId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference = ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference;
function zeroTrustAccessInfrastructureTargetIpIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip_addr: cdktf.stringToTerraform(struct.ipAddr),
        virtual_network_id: cdktf.stringToTerraform(struct.virtualNetworkId),
    };
}
function zeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ip_addr: {
            value: cdktf.stringToHclTerraform(struct.ipAddr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        virtual_network_id: {
            value: cdktf.stringToHclTerraform(struct.virtualNetworkId),
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
var ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ipAddr !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipAddr = this._ipAddr;
            }
            if (this._virtualNetworkId !== undefined) {
                hasAnyValues = true;
                internalValueResult.virtualNetworkId = this._virtualNetworkId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ipAddr = undefined;
                this._virtualNetworkId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ipAddr = value.ipAddr;
                this._virtualNetworkId = value.virtualNetworkId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.prototype, "ipAddr", {
        get: function () {
            return this.getStringAttribute('ip_addr');
        },
        set: function (value) {
            this._ipAddr = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.prototype.resetIpAddr = function () {
        this._ipAddr = undefined;
    };
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.prototype, "ipAddrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.prototype, "virtualNetworkId", {
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        set: function (value) {
            this._virtualNetworkId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.prototype.resetVirtualNetworkId = function () {
        this._virtualNetworkId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.prototype, "virtualNetworkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualNetworkId;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference = ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference;
function zeroTrustAccessInfrastructureTargetIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ipv4: zeroTrustAccessInfrastructureTargetIpIpv4ToTerraform(struct.ipv4),
        ipv6: zeroTrustAccessInfrastructureTargetIpIpv6ToTerraform(struct.ipv6),
    };
}
function zeroTrustAccessInfrastructureTargetIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ipv4: {
            value: zeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform(struct.ipv4),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessInfrastructureTargetIpIpv4",
        },
        ipv6: {
            value: zeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform(struct.ipv6),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustAccessInfrastructureTargetIpIpv6",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessInfrastructureTargetIpOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessInfrastructureTargetIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessInfrastructureTargetIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ipv4 - computed: false, optional: true, required: false
        _this._ipv4 = new ZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(_this, "ipv4");
        // ipv6 - computed: false, optional: true, required: false
        _this._ipv6 = new ZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(_this, "ipv6");
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._ipv4) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv4 = (_b = this._ipv4) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._ipv6) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv6 = (_d = this._ipv6) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ipv4.internalValue = undefined;
                this._ipv6.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ipv4.internalValue = value.ipv4;
                this._ipv6.internalValue = value.ipv6;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpOutputReference.prototype, "ipv4", {
        get: function () {
            return this._ipv4;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessInfrastructureTargetIpOutputReference.prototype.putIpv4 = function (value) {
        this._ipv4.internalValue = value;
    };
    ZeroTrustAccessInfrastructureTargetIpOutputReference.prototype.resetIpv4 = function () {
        this._ipv4.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpOutputReference.prototype, "ipv4Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpOutputReference.prototype, "ipv6", {
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessInfrastructureTargetIpOutputReference.prototype.putIpv6 = function (value) {
        this._ipv6.internalValue = value;
    };
    ZeroTrustAccessInfrastructureTargetIpOutputReference.prototype.resetIpv6 = function () {
        this._ipv6.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessInfrastructureTargetIpOutputReference.prototype, "ipv6Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessInfrastructureTargetIpOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessInfrastructureTargetIpOutputReference = ZeroTrustAccessInfrastructureTargetIpOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}
*/
var ZeroTrustAccessInfrastructureTarget = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessInfrastructureTarget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessInfrastructureTargetConfig
    */
    function ZeroTrustAccessInfrastructureTarget(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_infrastructure_target',
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
        // ip - computed: false, optional: false, required: true
        _this._ip = new ZeroTrustAccessInfrastructureTargetIpOutputReference(_this, "ip");
        _this._accountId = config.accountId;
        _this._hostname = config.hostname;
        _this._ip.internalValue = config.ip;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessInfrastructureTarget to import
    * @param importFromId The id of the existing ZeroTrustAccessInfrastructureTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessInfrastructureTarget to import is found
    */
    ZeroTrustAccessInfrastructureTarget.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_infrastructure_target", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustAccessInfrastructureTarget.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessInfrastructureTarget.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessInfrastructureTarget.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTarget.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTarget.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTarget.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTarget.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTarget.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessInfrastructureTarget.prototype.putIp = function (value) {
        this._ip.internalValue = value;
    };
    Object.defineProperty(ZeroTrustAccessInfrastructureTarget.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessInfrastructureTarget.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustAccessInfrastructureTarget.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            hostname: cdktf.stringToTerraform(this._hostname),
            ip: zeroTrustAccessInfrastructureTargetIpToTerraform(this._ip.internalValue),
        };
    };
    ZeroTrustAccessInfrastructureTarget.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip: {
                value: zeroTrustAccessInfrastructureTargetIpToHclTerraform(this._ip.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessInfrastructureTargetIp",
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
    ZeroTrustAccessInfrastructureTarget.tfResourceType = "cloudflare_zero_trust_access_infrastructure_target";
    return ZeroTrustAccessInfrastructureTarget;
}(cdktf.TerraformResource));
exports.ZeroTrustAccessInfrastructureTarget = ZeroTrustAccessInfrastructureTarget;
