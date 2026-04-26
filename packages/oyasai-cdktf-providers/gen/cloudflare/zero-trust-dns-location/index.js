"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location
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
exports.ZeroTrustDnsLocation = exports.ZeroTrustDnsLocationNetworksList = exports.ZeroTrustDnsLocationNetworksOutputReference = exports.ZeroTrustDnsLocationEndpointsOutputReference = exports.ZeroTrustDnsLocationEndpointsIpv6OutputReference = exports.ZeroTrustDnsLocationEndpointsIpv6NetworksList = exports.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference = exports.ZeroTrustDnsLocationEndpointsIpv4OutputReference = exports.ZeroTrustDnsLocationEndpointsDotOutputReference = exports.ZeroTrustDnsLocationEndpointsDotNetworksList = exports.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference = exports.ZeroTrustDnsLocationEndpointsDohOutputReference = exports.ZeroTrustDnsLocationEndpointsDohNetworksList = exports.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference = void 0;
exports.zeroTrustDnsLocationEndpointsDohNetworksToTerraform = zeroTrustDnsLocationEndpointsDohNetworksToTerraform;
exports.zeroTrustDnsLocationEndpointsDohNetworksToHclTerraform = zeroTrustDnsLocationEndpointsDohNetworksToHclTerraform;
exports.zeroTrustDnsLocationEndpointsDohToTerraform = zeroTrustDnsLocationEndpointsDohToTerraform;
exports.zeroTrustDnsLocationEndpointsDohToHclTerraform = zeroTrustDnsLocationEndpointsDohToHclTerraform;
exports.zeroTrustDnsLocationEndpointsDotNetworksToTerraform = zeroTrustDnsLocationEndpointsDotNetworksToTerraform;
exports.zeroTrustDnsLocationEndpointsDotNetworksToHclTerraform = zeroTrustDnsLocationEndpointsDotNetworksToHclTerraform;
exports.zeroTrustDnsLocationEndpointsDotToTerraform = zeroTrustDnsLocationEndpointsDotToTerraform;
exports.zeroTrustDnsLocationEndpointsDotToHclTerraform = zeroTrustDnsLocationEndpointsDotToHclTerraform;
exports.zeroTrustDnsLocationEndpointsIpv4ToTerraform = zeroTrustDnsLocationEndpointsIpv4ToTerraform;
exports.zeroTrustDnsLocationEndpointsIpv4ToHclTerraform = zeroTrustDnsLocationEndpointsIpv4ToHclTerraform;
exports.zeroTrustDnsLocationEndpointsIpv6NetworksToTerraform = zeroTrustDnsLocationEndpointsIpv6NetworksToTerraform;
exports.zeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform = zeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform;
exports.zeroTrustDnsLocationEndpointsIpv6ToTerraform = zeroTrustDnsLocationEndpointsIpv6ToTerraform;
exports.zeroTrustDnsLocationEndpointsIpv6ToHclTerraform = zeroTrustDnsLocationEndpointsIpv6ToHclTerraform;
exports.zeroTrustDnsLocationEndpointsToTerraform = zeroTrustDnsLocationEndpointsToTerraform;
exports.zeroTrustDnsLocationEndpointsToHclTerraform = zeroTrustDnsLocationEndpointsToHclTerraform;
exports.zeroTrustDnsLocationNetworksToTerraform = zeroTrustDnsLocationNetworksToTerraform;
exports.zeroTrustDnsLocationNetworksToHclTerraform = zeroTrustDnsLocationNetworksToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDnsLocationEndpointsDohNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        network: cdktf.stringToTerraform(struct.network),
    };
}
function zeroTrustDnsLocationEndpointsDohNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        network: {
            value: cdktf.stringToHclTerraform(struct.network),
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
var ZeroTrustDnsLocationEndpointsDohNetworksOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationEndpointsDohNetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDnsLocationEndpointsDohNetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._network !== undefined) {
                hasAnyValues = true;
                internalValueResult.network = this._network;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._network = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._network = value.network;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.prototype, "network", {
        get: function () {
            return this.getStringAttribute('network');
        },
        set: function (value) {
            this._network = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.prototype, "networkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._network;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDnsLocationEndpointsDohNetworksOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference = ZeroTrustDnsLocationEndpointsDohNetworksOutputReference;
var ZeroTrustDnsLocationEndpointsDohNetworksList = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationEndpointsDohNetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDnsLocationEndpointsDohNetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDnsLocationEndpointsDohNetworksList.prototype.get = function (index) {
        return new ZeroTrustDnsLocationEndpointsDohNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDnsLocationEndpointsDohNetworksList;
}(cdktf.ComplexList));
exports.ZeroTrustDnsLocationEndpointsDohNetworksList = ZeroTrustDnsLocationEndpointsDohNetworksList;
function zeroTrustDnsLocationEndpointsDohToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        networks: cdktf.listMapper(zeroTrustDnsLocationEndpointsDohNetworksToTerraform, false)(struct.networks),
        require_token: cdktf.booleanToTerraform(struct.requireToken),
    };
}
function zeroTrustDnsLocationEndpointsDohToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        networks: {
            value: cdktf.listMapperHcl(zeroTrustDnsLocationEndpointsDohNetworksToHclTerraform, false)(struct.networks),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustDnsLocationEndpointsDohNetworksList",
        },
        require_token: {
            value: cdktf.booleanToHclTerraform(struct.requireToken),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustDnsLocationEndpointsDohOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationEndpointsDohOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDnsLocationEndpointsDohOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // networks - computed: true, optional: true, required: false
        _this._networks = new ZeroTrustDnsLocationEndpointsDohNetworksList(_this, "networks", false);
        return _this;
    }
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDohOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (((_a = this._networks) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.networks = (_b = this._networks) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._requireToken !== undefined) {
                hasAnyValues = true;
                internalValueResult.requireToken = this._requireToken;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._networks.internalValue = undefined;
                this._requireToken = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._networks.internalValue = value.networks;
                this._requireToken = value.requireToken;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDohOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsDohOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDohOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDohOutputReference.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsDohOutputReference.prototype.putNetworks = function (value) {
        this._networks.internalValue = value;
    };
    ZeroTrustDnsLocationEndpointsDohOutputReference.prototype.resetNetworks = function () {
        this._networks.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDohOutputReference.prototype, "networksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networks.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDohOutputReference.prototype, "requireToken", {
        get: function () {
            return this.getBooleanAttribute('require_token');
        },
        set: function (value) {
            this._requireToken = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsDohOutputReference.prototype.resetRequireToken = function () {
        this._requireToken = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDohOutputReference.prototype, "requireTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireToken;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDnsLocationEndpointsDohOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDnsLocationEndpointsDohOutputReference = ZeroTrustDnsLocationEndpointsDohOutputReference;
function zeroTrustDnsLocationEndpointsDotNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        network: cdktf.stringToTerraform(struct.network),
    };
}
function zeroTrustDnsLocationEndpointsDotNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        network: {
            value: cdktf.stringToHclTerraform(struct.network),
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
var ZeroTrustDnsLocationEndpointsDotNetworksOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationEndpointsDotNetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDnsLocationEndpointsDotNetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._network !== undefined) {
                hasAnyValues = true;
                internalValueResult.network = this._network;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._network = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._network = value.network;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.prototype, "network", {
        get: function () {
            return this.getStringAttribute('network');
        },
        set: function (value) {
            this._network = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.prototype, "networkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._network;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDnsLocationEndpointsDotNetworksOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference = ZeroTrustDnsLocationEndpointsDotNetworksOutputReference;
var ZeroTrustDnsLocationEndpointsDotNetworksList = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationEndpointsDotNetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDnsLocationEndpointsDotNetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDnsLocationEndpointsDotNetworksList.prototype.get = function (index) {
        return new ZeroTrustDnsLocationEndpointsDotNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDnsLocationEndpointsDotNetworksList;
}(cdktf.ComplexList));
exports.ZeroTrustDnsLocationEndpointsDotNetworksList = ZeroTrustDnsLocationEndpointsDotNetworksList;
function zeroTrustDnsLocationEndpointsDotToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        networks: cdktf.listMapper(zeroTrustDnsLocationEndpointsDotNetworksToTerraform, false)(struct.networks),
    };
}
function zeroTrustDnsLocationEndpointsDotToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        networks: {
            value: cdktf.listMapperHcl(zeroTrustDnsLocationEndpointsDotNetworksToHclTerraform, false)(struct.networks),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustDnsLocationEndpointsDotNetworksList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustDnsLocationEndpointsDotOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationEndpointsDotOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDnsLocationEndpointsDotOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // networks - computed: true, optional: true, required: false
        _this._networks = new ZeroTrustDnsLocationEndpointsDotNetworksList(_this, "networks", false);
        return _this;
    }
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDotOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (((_a = this._networks) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.networks = (_b = this._networks) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._networks.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._networks.internalValue = value.networks;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDotOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsDotOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDotOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDotOutputReference.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsDotOutputReference.prototype.putNetworks = function (value) {
        this._networks.internalValue = value;
    };
    ZeroTrustDnsLocationEndpointsDotOutputReference.prototype.resetNetworks = function () {
        this._networks.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsDotOutputReference.prototype, "networksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networks.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDnsLocationEndpointsDotOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDnsLocationEndpointsDotOutputReference = ZeroTrustDnsLocationEndpointsDotOutputReference;
function zeroTrustDnsLocationEndpointsIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
function zeroTrustDnsLocationEndpointsIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustDnsLocationEndpointsIpv4OutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationEndpointsIpv4OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDnsLocationEndpointsIpv4OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDnsLocationEndpointsIpv4OutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsIpv4OutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsIpv4OutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsIpv4OutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDnsLocationEndpointsIpv4OutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDnsLocationEndpointsIpv4OutputReference = ZeroTrustDnsLocationEndpointsIpv4OutputReference;
function zeroTrustDnsLocationEndpointsIpv6NetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        network: cdktf.stringToTerraform(struct.network),
    };
}
function zeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        network: {
            value: cdktf.stringToHclTerraform(struct.network),
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
var ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._network !== undefined) {
                hasAnyValues = true;
                internalValueResult.network = this._network;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._network = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._network = value.network;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.prototype, "network", {
        get: function () {
            return this.getStringAttribute('network');
        },
        set: function (value) {
            this._network = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.prototype, "networkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._network;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference = ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference;
var ZeroTrustDnsLocationEndpointsIpv6NetworksList = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationEndpointsIpv6NetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDnsLocationEndpointsIpv6NetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDnsLocationEndpointsIpv6NetworksList.prototype.get = function (index) {
        return new ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDnsLocationEndpointsIpv6NetworksList;
}(cdktf.ComplexList));
exports.ZeroTrustDnsLocationEndpointsIpv6NetworksList = ZeroTrustDnsLocationEndpointsIpv6NetworksList;
function zeroTrustDnsLocationEndpointsIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        networks: cdktf.listMapper(zeroTrustDnsLocationEndpointsIpv6NetworksToTerraform, false)(struct.networks),
    };
}
function zeroTrustDnsLocationEndpointsIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        networks: {
            value: cdktf.listMapperHcl(zeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform, false)(struct.networks),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustDnsLocationEndpointsIpv6NetworksList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustDnsLocationEndpointsIpv6OutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationEndpointsIpv6OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDnsLocationEndpointsIpv6OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // networks - computed: true, optional: true, required: false
        _this._networks = new ZeroTrustDnsLocationEndpointsIpv6NetworksList(_this, "networks", false);
        return _this;
    }
    Object.defineProperty(ZeroTrustDnsLocationEndpointsIpv6OutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (((_a = this._networks) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.networks = (_b = this._networks) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._networks.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._networks.internalValue = value.networks;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsIpv6OutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsIpv6OutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsIpv6OutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsIpv6OutputReference.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsIpv6OutputReference.prototype.putNetworks = function (value) {
        this._networks.internalValue = value;
    };
    ZeroTrustDnsLocationEndpointsIpv6OutputReference.prototype.resetNetworks = function () {
        this._networks.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsIpv6OutputReference.prototype, "networksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networks.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDnsLocationEndpointsIpv6OutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDnsLocationEndpointsIpv6OutputReference = ZeroTrustDnsLocationEndpointsIpv6OutputReference;
function zeroTrustDnsLocationEndpointsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        doh: zeroTrustDnsLocationEndpointsDohToTerraform(struct.doh),
        dot: zeroTrustDnsLocationEndpointsDotToTerraform(struct.dot),
        ipv4: zeroTrustDnsLocationEndpointsIpv4ToTerraform(struct.ipv4),
        ipv6: zeroTrustDnsLocationEndpointsIpv6ToTerraform(struct.ipv6),
    };
}
function zeroTrustDnsLocationEndpointsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        doh: {
            value: zeroTrustDnsLocationEndpointsDohToHclTerraform(struct.doh),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDnsLocationEndpointsDoh",
        },
        dot: {
            value: zeroTrustDnsLocationEndpointsDotToHclTerraform(struct.dot),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDnsLocationEndpointsDot",
        },
        ipv4: {
            value: zeroTrustDnsLocationEndpointsIpv4ToHclTerraform(struct.ipv4),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDnsLocationEndpointsIpv4",
        },
        ipv6: {
            value: zeroTrustDnsLocationEndpointsIpv6ToHclTerraform(struct.ipv6),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustDnsLocationEndpointsIpv6",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustDnsLocationEndpointsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationEndpointsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDnsLocationEndpointsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // doh - computed: false, optional: false, required: true
        _this._doh = new ZeroTrustDnsLocationEndpointsDohOutputReference(_this, "doh");
        // dot - computed: false, optional: false, required: true
        _this._dot = new ZeroTrustDnsLocationEndpointsDotOutputReference(_this, "dot");
        // ipv4 - computed: false, optional: false, required: true
        _this._ipv4 = new ZeroTrustDnsLocationEndpointsIpv4OutputReference(_this, "ipv4");
        // ipv6 - computed: false, optional: false, required: true
        _this._ipv6 = new ZeroTrustDnsLocationEndpointsIpv6OutputReference(_this, "ipv6");
        return _this;
    }
    Object.defineProperty(ZeroTrustDnsLocationEndpointsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._doh) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.doh = (_b = this._doh) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._dot) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.dot = (_d = this._dot) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._ipv4) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv4 = (_f = this._ipv4) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._ipv6) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv6 = (_h = this._ipv6) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._doh.internalValue = undefined;
                this._dot.internalValue = undefined;
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
                this._doh.internalValue = value.doh;
                this._dot.internalValue = value.dot;
                this._ipv4.internalValue = value.ipv4;
                this._ipv6.internalValue = value.ipv6;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsOutputReference.prototype, "doh", {
        get: function () {
            return this._doh;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsOutputReference.prototype.putDoh = function (value) {
        this._doh.internalValue = value;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsOutputReference.prototype, "dohInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._doh.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsOutputReference.prototype, "dot", {
        get: function () {
            return this._dot;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsOutputReference.prototype.putDot = function (value) {
        this._dot.internalValue = value;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsOutputReference.prototype, "dotInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dot.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsOutputReference.prototype, "ipv4", {
        get: function () {
            return this._ipv4;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsOutputReference.prototype.putIpv4 = function (value) {
        this._ipv4.internalValue = value;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsOutputReference.prototype, "ipv4Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationEndpointsOutputReference.prototype, "ipv6", {
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocationEndpointsOutputReference.prototype.putIpv6 = function (value) {
        this._ipv6.internalValue = value;
    };
    Object.defineProperty(ZeroTrustDnsLocationEndpointsOutputReference.prototype, "ipv6Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDnsLocationEndpointsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDnsLocationEndpointsOutputReference = ZeroTrustDnsLocationEndpointsOutputReference;
function zeroTrustDnsLocationNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        network: cdktf.stringToTerraform(struct.network),
    };
}
function zeroTrustDnsLocationNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        network: {
            value: cdktf.stringToHclTerraform(struct.network),
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
var ZeroTrustDnsLocationNetworksOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationNetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDnsLocationNetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDnsLocationNetworksOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._network !== undefined) {
                hasAnyValues = true;
                internalValueResult.network = this._network;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._network = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._network = value.network;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationNetworksOutputReference.prototype, "network", {
        get: function () {
            return this.getStringAttribute('network');
        },
        set: function (value) {
            this._network = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocationNetworksOutputReference.prototype, "networkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._network;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDnsLocationNetworksOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDnsLocationNetworksOutputReference = ZeroTrustDnsLocationNetworksOutputReference;
var ZeroTrustDnsLocationNetworksList = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocationNetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDnsLocationNetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDnsLocationNetworksList.prototype.get = function (index) {
        return new ZeroTrustDnsLocationNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDnsLocationNetworksList;
}(cdktf.ComplexList));
exports.ZeroTrustDnsLocationNetworksList = ZeroTrustDnsLocationNetworksList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location cloudflare_zero_trust_dns_location}
*/
var ZeroTrustDnsLocation = /** @class */ (function (_super) {
    __extends(ZeroTrustDnsLocation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location cloudflare_zero_trust_dns_location} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDnsLocationConfig
    */
    function ZeroTrustDnsLocation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dns_location',
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
        // endpoints - computed: false, optional: true, required: false
        _this._endpoints = new ZeroTrustDnsLocationEndpointsOutputReference(_this, "endpoints");
        // networks - computed: true, optional: true, required: false
        _this._networks = new ZeroTrustDnsLocationNetworksList(_this, "networks", false);
        _this._accountId = config.accountId;
        _this._clientDefault = config.clientDefault;
        _this._dnsDestinationIpsId = config.dnsDestinationIpsId;
        _this._ecsSupport = config.ecsSupport;
        _this._endpoints.internalValue = config.endpoints;
        _this._name = config.name;
        _this._networks.internalValue = config.networks;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDnsLocation to import
    * @param importFromId The id of the existing ZeroTrustDnsLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dns_location#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDnsLocation to import is found
    */
    ZeroTrustDnsLocation.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dns_location", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocation.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "clientDefault", {
        get: function () {
            return this.getBooleanAttribute('client_default');
        },
        set: function (value) {
            this._clientDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocation.prototype.resetClientDefault = function () {
        this._clientDefault = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "clientDefaultInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientDefault;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "dnsDestinationIpsId", {
        get: function () {
            return this.getStringAttribute('dns_destination_ips_id');
        },
        set: function (value) {
            this._dnsDestinationIpsId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocation.prototype.resetDnsDestinationIpsId = function () {
        this._dnsDestinationIpsId = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "dnsDestinationIpsIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsDestinationIpsId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "dnsDestinationIpv6BlockId", {
        // dns_destination_ipv6_block_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_destination_ipv6_block_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "dohSubdomain", {
        // doh_subdomain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('doh_subdomain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "ecsSupport", {
        get: function () {
            return this.getBooleanAttribute('ecs_support');
        },
        set: function (value) {
            this._ecsSupport = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocation.prototype.resetEcsSupport = function () {
        this._ecsSupport = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "ecsSupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ecsSupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "endpoints", {
        get: function () {
            return this._endpoints;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocation.prototype.putEndpoints = function (value) {
        this._endpoints.internalValue = value;
    };
    ZeroTrustDnsLocation.prototype.resetEndpoints = function () {
        this._endpoints.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "endpointsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpoints.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "ipv4Destination", {
        // ipv4_destination - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4_destination');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "ipv4DestinationBackup", {
        // ipv4_destination_backup - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4_destination_backup');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDnsLocation.prototype.putNetworks = function (value) {
        this._networks.internalValue = value;
    };
    ZeroTrustDnsLocation.prototype.resetNetworks = function () {
        this._networks.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "networksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networks.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDnsLocation.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDnsLocation.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            client_default: cdktf.booleanToTerraform(this._clientDefault),
            dns_destination_ips_id: cdktf.stringToTerraform(this._dnsDestinationIpsId),
            ecs_support: cdktf.booleanToTerraform(this._ecsSupport),
            endpoints: zeroTrustDnsLocationEndpointsToTerraform(this._endpoints.internalValue),
            name: cdktf.stringToTerraform(this._name),
            networks: cdktf.listMapper(zeroTrustDnsLocationNetworksToTerraform, false)(this._networks.internalValue),
        };
    };
    ZeroTrustDnsLocation.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            client_default: {
                value: cdktf.booleanToHclTerraform(this._clientDefault),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dns_destination_ips_id: {
                value: cdktf.stringToHclTerraform(this._dnsDestinationIpsId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ecs_support: {
                value: cdktf.booleanToHclTerraform(this._ecsSupport),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            endpoints: {
                value: zeroTrustDnsLocationEndpointsToHclTerraform(this._endpoints.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDnsLocationEndpoints",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            networks: {
                value: cdktf.listMapperHcl(zeroTrustDnsLocationNetworksToHclTerraform, false)(this._networks.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDnsLocationNetworksList",
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
    ZeroTrustDnsLocation.tfResourceType = "cloudflare_zero_trust_dns_location";
    return ZeroTrustDnsLocation;
}(cdktf.TerraformResource));
exports.ZeroTrustDnsLocation = ZeroTrustDnsLocation;
