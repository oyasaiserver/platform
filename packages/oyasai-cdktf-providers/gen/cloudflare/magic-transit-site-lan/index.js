"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan
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
exports.MagicTransitSiteLan = exports.MagicTransitSiteLanStaticAddressingOutputReference = exports.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference = exports.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference = exports.MagicTransitSiteLanRoutedSubnetsList = exports.MagicTransitSiteLanRoutedSubnetsOutputReference = exports.MagicTransitSiteLanRoutedSubnetsNatOutputReference = exports.MagicTransitSiteLanNatOutputReference = void 0;
exports.magicTransitSiteLanNatToTerraform = magicTransitSiteLanNatToTerraform;
exports.magicTransitSiteLanNatToHclTerraform = magicTransitSiteLanNatToHclTerraform;
exports.magicTransitSiteLanRoutedSubnetsNatToTerraform = magicTransitSiteLanRoutedSubnetsNatToTerraform;
exports.magicTransitSiteLanRoutedSubnetsNatToHclTerraform = magicTransitSiteLanRoutedSubnetsNatToHclTerraform;
exports.magicTransitSiteLanRoutedSubnetsToTerraform = magicTransitSiteLanRoutedSubnetsToTerraform;
exports.magicTransitSiteLanRoutedSubnetsToHclTerraform = magicTransitSiteLanRoutedSubnetsToHclTerraform;
exports.magicTransitSiteLanStaticAddressingDhcpRelayToTerraform = magicTransitSiteLanStaticAddressingDhcpRelayToTerraform;
exports.magicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform = magicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform;
exports.magicTransitSiteLanStaticAddressingDhcpServerToTerraform = magicTransitSiteLanStaticAddressingDhcpServerToTerraform;
exports.magicTransitSiteLanStaticAddressingDhcpServerToHclTerraform = magicTransitSiteLanStaticAddressingDhcpServerToHclTerraform;
exports.magicTransitSiteLanStaticAddressingToTerraform = magicTransitSiteLanStaticAddressingToTerraform;
exports.magicTransitSiteLanStaticAddressingToHclTerraform = magicTransitSiteLanStaticAddressingToHclTerraform;
var cdktf = require("cdktf");
function magicTransitSiteLanNatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        static_prefix: cdktf.stringToTerraform(struct.staticPrefix),
    };
}
function magicTransitSiteLanNatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        static_prefix: {
            value: cdktf.stringToHclTerraform(struct.staticPrefix),
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
var MagicTransitSiteLanNatOutputReference = /** @class */ (function (_super) {
    __extends(MagicTransitSiteLanNatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicTransitSiteLanNatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicTransitSiteLanNatOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._staticPrefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.staticPrefix = this._staticPrefix;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._staticPrefix = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._staticPrefix = value.staticPrefix;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanNatOutputReference.prototype, "staticPrefix", {
        get: function () {
            return this.getStringAttribute('static_prefix');
        },
        set: function (value) {
            this._staticPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanNatOutputReference.prototype.resetStaticPrefix = function () {
        this._staticPrefix = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanNatOutputReference.prototype, "staticPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._staticPrefix;
        },
        enumerable: false,
        configurable: true
    });
    return MagicTransitSiteLanNatOutputReference;
}(cdktf.ComplexObject));
exports.MagicTransitSiteLanNatOutputReference = MagicTransitSiteLanNatOutputReference;
function magicTransitSiteLanRoutedSubnetsNatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        static_prefix: cdktf.stringToTerraform(struct.staticPrefix),
    };
}
function magicTransitSiteLanRoutedSubnetsNatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        static_prefix: {
            value: cdktf.stringToHclTerraform(struct.staticPrefix),
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
var MagicTransitSiteLanRoutedSubnetsNatOutputReference = /** @class */ (function (_super) {
    __extends(MagicTransitSiteLanRoutedSubnetsNatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicTransitSiteLanRoutedSubnetsNatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicTransitSiteLanRoutedSubnetsNatOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._staticPrefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.staticPrefix = this._staticPrefix;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._staticPrefix = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._staticPrefix = value.staticPrefix;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanRoutedSubnetsNatOutputReference.prototype, "staticPrefix", {
        get: function () {
            return this.getStringAttribute('static_prefix');
        },
        set: function (value) {
            this._staticPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanRoutedSubnetsNatOutputReference.prototype.resetStaticPrefix = function () {
        this._staticPrefix = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanRoutedSubnetsNatOutputReference.prototype, "staticPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._staticPrefix;
        },
        enumerable: false,
        configurable: true
    });
    return MagicTransitSiteLanRoutedSubnetsNatOutputReference;
}(cdktf.ComplexObject));
exports.MagicTransitSiteLanRoutedSubnetsNatOutputReference = MagicTransitSiteLanRoutedSubnetsNatOutputReference;
function magicTransitSiteLanRoutedSubnetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        nat: magicTransitSiteLanRoutedSubnetsNatToTerraform(struct.nat),
        next_hop: cdktf.stringToTerraform(struct.nextHop),
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
function magicTransitSiteLanRoutedSubnetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        nat: {
            value: magicTransitSiteLanRoutedSubnetsNatToHclTerraform(struct.nat),
            isBlock: true,
            type: "struct",
            storageClassType: "MagicTransitSiteLanRoutedSubnetsNat",
        },
        next_hop: {
            value: cdktf.stringToHclTerraform(struct.nextHop),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
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
var MagicTransitSiteLanRoutedSubnetsOutputReference = /** @class */ (function (_super) {
    __extends(MagicTransitSiteLanRoutedSubnetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function MagicTransitSiteLanRoutedSubnetsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // nat - computed: false, optional: true, required: false
        _this._nat = new MagicTransitSiteLanRoutedSubnetsNatOutputReference(_this, "nat");
        return _this;
    }
    Object.defineProperty(MagicTransitSiteLanRoutedSubnetsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._nat) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.nat = (_b = this._nat) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._nextHop !== undefined) {
                hasAnyValues = true;
                internalValueResult.nextHop = this._nextHop;
            }
            if (this._prefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.prefix = this._prefix;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._nat.internalValue = undefined;
                this._nextHop = undefined;
                this._prefix = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._nat.internalValue = value.nat;
                this._nextHop = value.nextHop;
                this._prefix = value.prefix;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanRoutedSubnetsOutputReference.prototype, "nat", {
        get: function () {
            return this._nat;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanRoutedSubnetsOutputReference.prototype.putNat = function (value) {
        this._nat.internalValue = value;
    };
    MagicTransitSiteLanRoutedSubnetsOutputReference.prototype.resetNat = function () {
        this._nat.internalValue = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanRoutedSubnetsOutputReference.prototype, "natInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nat.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanRoutedSubnetsOutputReference.prototype, "nextHop", {
        get: function () {
            return this.getStringAttribute('next_hop');
        },
        set: function (value) {
            this._nextHop = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanRoutedSubnetsOutputReference.prototype, "nextHopInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nextHop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanRoutedSubnetsOutputReference.prototype, "prefix", {
        get: function () {
            return this.getStringAttribute('prefix');
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanRoutedSubnetsOutputReference.prototype, "prefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefix;
        },
        enumerable: false,
        configurable: true
    });
    return MagicTransitSiteLanRoutedSubnetsOutputReference;
}(cdktf.ComplexObject));
exports.MagicTransitSiteLanRoutedSubnetsOutputReference = MagicTransitSiteLanRoutedSubnetsOutputReference;
var MagicTransitSiteLanRoutedSubnetsList = /** @class */ (function (_super) {
    __extends(MagicTransitSiteLanRoutedSubnetsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function MagicTransitSiteLanRoutedSubnetsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    MagicTransitSiteLanRoutedSubnetsList.prototype.get = function (index) {
        return new MagicTransitSiteLanRoutedSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return MagicTransitSiteLanRoutedSubnetsList;
}(cdktf.ComplexList));
exports.MagicTransitSiteLanRoutedSubnetsList = MagicTransitSiteLanRoutedSubnetsList;
function magicTransitSiteLanStaticAddressingDhcpRelayToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        server_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.serverAddresses),
    };
}
function magicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        server_addresses: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.serverAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference = /** @class */ (function (_super) {
    __extends(MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._serverAddresses !== undefined) {
                hasAnyValues = true;
                internalValueResult.serverAddresses = this._serverAddresses;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._serverAddresses = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._serverAddresses = value.serverAddresses;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.prototype, "serverAddresses", {
        get: function () {
            return this.getListAttribute('server_addresses');
        },
        set: function (value) {
            this._serverAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.prototype.resetServerAddresses = function () {
        this._serverAddresses = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.prototype, "serverAddressesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverAddresses;
        },
        enumerable: false,
        configurable: true
    });
    return MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference;
}(cdktf.ComplexObject));
exports.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference = MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference;
function magicTransitSiteLanStaticAddressingDhcpServerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dhcp_pool_end: cdktf.stringToTerraform(struct.dhcpPoolEnd),
        dhcp_pool_start: cdktf.stringToTerraform(struct.dhcpPoolStart),
        dns_server: cdktf.stringToTerraform(struct.dnsServer),
        dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.dnsServers),
        reservations: cdktf.hashMapper(cdktf.stringToTerraform)(struct.reservations),
    };
}
function magicTransitSiteLanStaticAddressingDhcpServerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        dhcp_pool_end: {
            value: cdktf.stringToHclTerraform(struct.dhcpPoolEnd),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dhcp_pool_start: {
            value: cdktf.stringToHclTerraform(struct.dhcpPoolStart),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dns_server: {
            value: cdktf.stringToHclTerraform(struct.dnsServer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dns_servers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.dnsServers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        reservations: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.reservations),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var MagicTransitSiteLanStaticAddressingDhcpServerOutputReference = /** @class */ (function (_super) {
    __extends(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicTransitSiteLanStaticAddressingDhcpServerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._dhcpPoolEnd !== undefined) {
                hasAnyValues = true;
                internalValueResult.dhcpPoolEnd = this._dhcpPoolEnd;
            }
            if (this._dhcpPoolStart !== undefined) {
                hasAnyValues = true;
                internalValueResult.dhcpPoolStart = this._dhcpPoolStart;
            }
            if (this._dnsServer !== undefined) {
                hasAnyValues = true;
                internalValueResult.dnsServer = this._dnsServer;
            }
            if (this._dnsServers !== undefined) {
                hasAnyValues = true;
                internalValueResult.dnsServers = this._dnsServers;
            }
            if (this._reservations !== undefined) {
                hasAnyValues = true;
                internalValueResult.reservations = this._reservations;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._dhcpPoolEnd = undefined;
                this._dhcpPoolStart = undefined;
                this._dnsServer = undefined;
                this._dnsServers = undefined;
                this._reservations = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._dhcpPoolEnd = value.dhcpPoolEnd;
                this._dhcpPoolStart = value.dhcpPoolStart;
                this._dnsServer = value.dnsServer;
                this._dnsServers = value.dnsServers;
                this._reservations = value.reservations;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dhcpPoolEnd", {
        get: function () {
            return this.getStringAttribute('dhcp_pool_end');
        },
        set: function (value) {
            this._dhcpPoolEnd = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype.resetDhcpPoolEnd = function () {
        this._dhcpPoolEnd = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dhcpPoolEndInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dhcpPoolEnd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dhcpPoolStart", {
        get: function () {
            return this.getStringAttribute('dhcp_pool_start');
        },
        set: function (value) {
            this._dhcpPoolStart = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype.resetDhcpPoolStart = function () {
        this._dhcpPoolStart = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dhcpPoolStartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dhcpPoolStart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dnsServer", {
        get: function () {
            return this.getStringAttribute('dns_server');
        },
        set: function (value) {
            this._dnsServer = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype.resetDnsServer = function () {
        this._dnsServer = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dnsServerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dnsServers", {
        get: function () {
            return this.getListAttribute('dns_servers');
        },
        set: function (value) {
            this._dnsServers = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype.resetDnsServers = function () {
        this._dnsServers = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dnsServersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsServers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "reservations", {
        get: function () {
            return this.getStringMapAttribute('reservations');
        },
        set: function (value) {
            this._reservations = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype.resetReservations = function () {
        this._reservations = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "reservationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reservations;
        },
        enumerable: false,
        configurable: true
    });
    return MagicTransitSiteLanStaticAddressingDhcpServerOutputReference;
}(cdktf.ComplexObject));
exports.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference = MagicTransitSiteLanStaticAddressingDhcpServerOutputReference;
function magicTransitSiteLanStaticAddressingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        dhcp_relay: magicTransitSiteLanStaticAddressingDhcpRelayToTerraform(struct.dhcpRelay),
        dhcp_server: magicTransitSiteLanStaticAddressingDhcpServerToTerraform(struct.dhcpServer),
        secondary_address: cdktf.stringToTerraform(struct.secondaryAddress),
        virtual_address: cdktf.stringToTerraform(struct.virtualAddress),
    };
}
function magicTransitSiteLanStaticAddressingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dhcp_relay: {
            value: magicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform(struct.dhcpRelay),
            isBlock: true,
            type: "struct",
            storageClassType: "MagicTransitSiteLanStaticAddressingDhcpRelay",
        },
        dhcp_server: {
            value: magicTransitSiteLanStaticAddressingDhcpServerToHclTerraform(struct.dhcpServer),
            isBlock: true,
            type: "struct",
            storageClassType: "MagicTransitSiteLanStaticAddressingDhcpServer",
        },
        secondary_address: {
            value: cdktf.stringToHclTerraform(struct.secondaryAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        virtual_address: {
            value: cdktf.stringToHclTerraform(struct.virtualAddress),
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
var MagicTransitSiteLanStaticAddressingOutputReference = /** @class */ (function (_super) {
    __extends(MagicTransitSiteLanStaticAddressingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicTransitSiteLanStaticAddressingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // dhcp_relay - computed: false, optional: true, required: false
        _this._dhcpRelay = new MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(_this, "dhcp_relay");
        // dhcp_server - computed: false, optional: true, required: false
        _this._dhcpServer = new MagicTransitSiteLanStaticAddressingDhcpServerOutputReference(_this, "dhcp_server");
        return _this;
    }
    Object.defineProperty(MagicTransitSiteLanStaticAddressingOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._address !== undefined) {
                hasAnyValues = true;
                internalValueResult.address = this._address;
            }
            if (((_a = this._dhcpRelay) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.dhcpRelay = (_b = this._dhcpRelay) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._dhcpServer) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.dhcpServer = (_d = this._dhcpServer) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._secondaryAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.secondaryAddress = this._secondaryAddress;
            }
            if (this._virtualAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.virtualAddress = this._virtualAddress;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._address = undefined;
                this._dhcpRelay.internalValue = undefined;
                this._dhcpServer.internalValue = undefined;
                this._secondaryAddress = undefined;
                this._virtualAddress = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._address = value.address;
                this._dhcpRelay.internalValue = value.dhcpRelay;
                this._dhcpServer.internalValue = value.dhcpServer;
                this._secondaryAddress = value.secondaryAddress;
                this._virtualAddress = value.virtualAddress;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingOutputReference.prototype, "address", {
        get: function () {
            return this.getStringAttribute('address');
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingOutputReference.prototype, "addressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingOutputReference.prototype, "dhcpRelay", {
        get: function () {
            return this._dhcpRelay;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanStaticAddressingOutputReference.prototype.putDhcpRelay = function (value) {
        this._dhcpRelay.internalValue = value;
    };
    MagicTransitSiteLanStaticAddressingOutputReference.prototype.resetDhcpRelay = function () {
        this._dhcpRelay.internalValue = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanStaticAddressingOutputReference.prototype, "dhcpRelayInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dhcpRelay.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingOutputReference.prototype, "dhcpServer", {
        get: function () {
            return this._dhcpServer;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanStaticAddressingOutputReference.prototype.putDhcpServer = function (value) {
        this._dhcpServer.internalValue = value;
    };
    MagicTransitSiteLanStaticAddressingOutputReference.prototype.resetDhcpServer = function () {
        this._dhcpServer.internalValue = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanStaticAddressingOutputReference.prototype, "dhcpServerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dhcpServer.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingOutputReference.prototype, "secondaryAddress", {
        get: function () {
            return this.getStringAttribute('secondary_address');
        },
        set: function (value) {
            this._secondaryAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanStaticAddressingOutputReference.prototype.resetSecondaryAddress = function () {
        this._secondaryAddress = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanStaticAddressingOutputReference.prototype, "secondaryAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secondaryAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLanStaticAddressingOutputReference.prototype, "virtualAddress", {
        get: function () {
            return this.getStringAttribute('virtual_address');
        },
        set: function (value) {
            this._virtualAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLanStaticAddressingOutputReference.prototype.resetVirtualAddress = function () {
        this._virtualAddress = undefined;
    };
    Object.defineProperty(MagicTransitSiteLanStaticAddressingOutputReference.prototype, "virtualAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualAddress;
        },
        enumerable: false,
        configurable: true
    });
    return MagicTransitSiteLanStaticAddressingOutputReference;
}(cdktf.ComplexObject));
exports.MagicTransitSiteLanStaticAddressingOutputReference = MagicTransitSiteLanStaticAddressingOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan}
*/
var MagicTransitSiteLan = /** @class */ (function (_super) {
    __extends(MagicTransitSiteLan, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitSiteLanConfig
    */
    function MagicTransitSiteLan(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_site_lan',
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
        // nat - computed: false, optional: true, required: false
        _this._nat = new MagicTransitSiteLanNatOutputReference(_this, "nat");
        // routed_subnets - computed: false, optional: true, required: false
        _this._routedSubnets = new MagicTransitSiteLanRoutedSubnetsList(_this, "routed_subnets", false);
        // static_addressing - computed: false, optional: true, required: false
        _this._staticAddressing = new MagicTransitSiteLanStaticAddressingOutputReference(_this, "static_addressing");
        _this._accountId = config.accountId;
        _this._bondId = config.bondId;
        _this._haLink = config.haLink;
        _this._isBreakout = config.isBreakout;
        _this._isPrioritized = config.isPrioritized;
        _this._name = config.name;
        _this._nat.internalValue = config.nat;
        _this._physport = config.physport;
        _this._routedSubnets.internalValue = config.routedSubnets;
        _this._siteId = config.siteId;
        _this._staticAddressing.internalValue = config.staticAddressing;
        _this._vlanTag = config.vlanTag;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicTransitSiteLan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitSiteLan to import
    * @param importFromId The id of the existing MagicTransitSiteLan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitSiteLan to import is found
    */
    MagicTransitSiteLan.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_lan", importId: importFromId, provider: provider });
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLan.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "bondId", {
        get: function () {
            return this.getNumberAttribute('bond_id');
        },
        set: function (value) {
            this._bondId = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLan.prototype.resetBondId = function () {
        this._bondId = undefined;
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "bondIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bondId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "haLink", {
        get: function () {
            return this.getBooleanAttribute('ha_link');
        },
        set: function (value) {
            this._haLink = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLan.prototype.resetHaLink = function () {
        this._haLink = undefined;
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "haLinkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._haLink;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "isBreakout", {
        get: function () {
            return this.getBooleanAttribute('is_breakout');
        },
        set: function (value) {
            this._isBreakout = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLan.prototype.resetIsBreakout = function () {
        this._isBreakout = undefined;
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "isBreakoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isBreakout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "isPrioritized", {
        get: function () {
            return this.getBooleanAttribute('is_prioritized');
        },
        set: function (value) {
            this._isPrioritized = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLan.prototype.resetIsPrioritized = function () {
        this._isPrioritized = undefined;
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "isPrioritizedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isPrioritized;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLan.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "nat", {
        get: function () {
            return this._nat;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLan.prototype.putNat = function (value) {
        this._nat.internalValue = value;
    };
    MagicTransitSiteLan.prototype.resetNat = function () {
        this._nat.internalValue = undefined;
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "natInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nat.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "physport", {
        get: function () {
            return this.getNumberAttribute('physport');
        },
        set: function (value) {
            this._physport = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLan.prototype.resetPhysport = function () {
        this._physport = undefined;
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "physportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._physport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "routedSubnets", {
        get: function () {
            return this._routedSubnets;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLan.prototype.putRoutedSubnets = function (value) {
        this._routedSubnets.internalValue = value;
    };
    MagicTransitSiteLan.prototype.resetRoutedSubnets = function () {
        this._routedSubnets.internalValue = undefined;
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "routedSubnetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routedSubnets.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "siteId", {
        get: function () {
            return this.getStringAttribute('site_id');
        },
        set: function (value) {
            this._siteId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "siteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._siteId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "staticAddressing", {
        get: function () {
            return this._staticAddressing;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLan.prototype.putStaticAddressing = function (value) {
        this._staticAddressing.internalValue = value;
    };
    MagicTransitSiteLan.prototype.resetStaticAddressing = function () {
        this._staticAddressing.internalValue = undefined;
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "staticAddressingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._staticAddressing.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLan.prototype, "vlanTag", {
        get: function () {
            return this.getNumberAttribute('vlan_tag');
        },
        set: function (value) {
            this._vlanTag = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLan.prototype.resetVlanTag = function () {
        this._vlanTag = undefined;
    };
    Object.defineProperty(MagicTransitSiteLan.prototype, "vlanTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vlanTag;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MagicTransitSiteLan.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bond_id: cdktf.numberToTerraform(this._bondId),
            ha_link: cdktf.booleanToTerraform(this._haLink),
            is_breakout: cdktf.booleanToTerraform(this._isBreakout),
            is_prioritized: cdktf.booleanToTerraform(this._isPrioritized),
            name: cdktf.stringToTerraform(this._name),
            nat: magicTransitSiteLanNatToTerraform(this._nat.internalValue),
            physport: cdktf.numberToTerraform(this._physport),
            routed_subnets: cdktf.listMapper(magicTransitSiteLanRoutedSubnetsToTerraform, false)(this._routedSubnets.internalValue),
            site_id: cdktf.stringToTerraform(this._siteId),
            static_addressing: magicTransitSiteLanStaticAddressingToTerraform(this._staticAddressing.internalValue),
            vlan_tag: cdktf.numberToTerraform(this._vlanTag),
        };
    };
    MagicTransitSiteLan.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bond_id: {
                value: cdktf.numberToHclTerraform(this._bondId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ha_link: {
                value: cdktf.booleanToHclTerraform(this._haLink),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_breakout: {
                value: cdktf.booleanToHclTerraform(this._isBreakout),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_prioritized: {
                value: cdktf.booleanToHclTerraform(this._isPrioritized),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            nat: {
                value: magicTransitSiteLanNatToHclTerraform(this._nat.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicTransitSiteLanNat",
            },
            physport: {
                value: cdktf.numberToHclTerraform(this._physport),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            routed_subnets: {
                value: cdktf.listMapperHcl(magicTransitSiteLanRoutedSubnetsToHclTerraform, false)(this._routedSubnets.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "MagicTransitSiteLanRoutedSubnetsList",
            },
            site_id: {
                value: cdktf.stringToHclTerraform(this._siteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            static_addressing: {
                value: magicTransitSiteLanStaticAddressingToHclTerraform(this._staticAddressing.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicTransitSiteLanStaticAddressing",
            },
            vlan_tag: {
                value: cdktf.numberToHclTerraform(this._vlanTag),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    MagicTransitSiteLan.tfResourceType = "cloudflare_magic_transit_site_lan";
    return MagicTransitSiteLan;
}(cdktf.TerraformResource));
exports.MagicTransitSiteLan = MagicTransitSiteLan;
