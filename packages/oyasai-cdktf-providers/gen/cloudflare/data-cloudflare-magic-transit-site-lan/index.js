"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan
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
exports.DataCloudflareMagicTransitSiteLan = exports.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference = exports.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference = exports.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference = exports.DataCloudflareMagicTransitSiteLanRoutedSubnetsList = exports.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference = exports.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference = exports.DataCloudflareMagicTransitSiteLanNatOutputReference = void 0;
exports.dataCloudflareMagicTransitSiteLanNatToTerraform = dataCloudflareMagicTransitSiteLanNatToTerraform;
exports.dataCloudflareMagicTransitSiteLanNatToHclTerraform = dataCloudflareMagicTransitSiteLanNatToHclTerraform;
exports.dataCloudflareMagicTransitSiteLanRoutedSubnetsNatToTerraform = dataCloudflareMagicTransitSiteLanRoutedSubnetsNatToTerraform;
exports.dataCloudflareMagicTransitSiteLanRoutedSubnetsNatToHclTerraform = dataCloudflareMagicTransitSiteLanRoutedSubnetsNatToHclTerraform;
exports.dataCloudflareMagicTransitSiteLanRoutedSubnetsToTerraform = dataCloudflareMagicTransitSiteLanRoutedSubnetsToTerraform;
exports.dataCloudflareMagicTransitSiteLanRoutedSubnetsToHclTerraform = dataCloudflareMagicTransitSiteLanRoutedSubnetsToHclTerraform;
exports.dataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayToTerraform = dataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayToTerraform;
exports.dataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform = dataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform;
exports.dataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerToTerraform = dataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerToTerraform;
exports.dataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerToHclTerraform = dataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerToHclTerraform;
exports.dataCloudflareMagicTransitSiteLanStaticAddressingToTerraform = dataCloudflareMagicTransitSiteLanStaticAddressingToTerraform;
exports.dataCloudflareMagicTransitSiteLanStaticAddressingToHclTerraform = dataCloudflareMagicTransitSiteLanStaticAddressingToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicTransitSiteLanNatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLanNatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLanNatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLanNatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteLanNatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLanNatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLanNatOutputReference.prototype, "staticPrefix", {
        // static_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('static_prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLanNatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLanNatOutputReference = DataCloudflareMagicTransitSiteLanNatOutputReference;
function dataCloudflareMagicTransitSiteLanRoutedSubnetsNatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLanRoutedSubnetsNatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.prototype, "staticPrefix", {
        // static_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('static_prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference = DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference;
function dataCloudflareMagicTransitSiteLanRoutedSubnetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLanRoutedSubnetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // nat - computed: true, optional: false, required: false
        _this._nat = new DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference(_this, "nat");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.prototype, "nat", {
        get: function () {
            return this._nat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.prototype, "nextHop", {
        // next_hop - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('next_hop');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference = DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference;
var DataCloudflareMagicTransitSiteLanRoutedSubnetsList = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLanRoutedSubnetsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitSiteLanRoutedSubnetsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareMagicTransitSiteLanRoutedSubnetsList.prototype.get = function (index) {
        return new DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareMagicTransitSiteLanRoutedSubnetsList;
}(cdktf.ComplexList));
exports.DataCloudflareMagicTransitSiteLanRoutedSubnetsList = DataCloudflareMagicTransitSiteLanRoutedSubnetsList;
function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.prototype, "serverAddresses", {
        // server_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('server_addresses');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference = DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference;
function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // reservations - computed: true, optional: false, required: false
        _this._reservations = new cdktf.StringMap(_this, "reservations");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dhcpPoolEnd", {
        // dhcp_pool_end - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dhcp_pool_end');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dhcpPoolStart", {
        // dhcp_pool_start - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dhcp_pool_start');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dnsServer", {
        // dns_server - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_server');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "dnsServers", {
        // dns_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.prototype, "reservations", {
        get: function () {
            return this._reservations;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference = DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference;
function dataCloudflareMagicTransitSiteLanStaticAddressingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLanStaticAddressingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // dhcp_relay - computed: true, optional: false, required: false
        _this._dhcpRelay = new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(_this, "dhcp_relay");
        // dhcp_server - computed: true, optional: false, required: false
        _this._dhcpServer = new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference(_this, "dhcp_server");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.prototype, "dhcpRelay", {
        get: function () {
            return this._dhcpRelay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.prototype, "dhcpServer", {
        get: function () {
            return this._dhcpServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.prototype, "secondaryAddress", {
        // secondary_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secondary_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.prototype, "virtualAddress", {
        // virtual_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_address');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference = DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan cloudflare_magic_transit_site_lan}
*/
var DataCloudflareMagicTransitSiteLan = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLan, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan cloudflare_magic_transit_site_lan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteLanConfig
    */
    function DataCloudflareMagicTransitSiteLan(scope, id, config) {
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
        // nat - computed: true, optional: false, required: false
        _this._nat = new DataCloudflareMagicTransitSiteLanNatOutputReference(_this, "nat");
        // routed_subnets - computed: true, optional: false, required: false
        _this._routedSubnets = new DataCloudflareMagicTransitSiteLanRoutedSubnetsList(_this, "routed_subnets", false);
        // static_addressing - computed: true, optional: false, required: false
        _this._staticAddressing = new DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference(_this, "static_addressing");
        _this._accountId = config.accountId;
        _this._lanId = config.lanId;
        _this._siteId = config.siteId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteLan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteLan to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteLan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteLan to import is found
    */
    DataCloudflareMagicTransitSiteLan.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_lan", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSiteLan.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "bondId", {
        // bond_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('bond_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "haLink", {
        // ha_link - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ha_link');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "isBreakout", {
        // is_breakout - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_breakout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "isPrioritized", {
        // is_prioritized - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_prioritized');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "lanId", {
        get: function () {
            return this.getStringAttribute('lan_id');
        },
        set: function (value) {
            this._lanId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "lanIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lanId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "nat", {
        get: function () {
            return this._nat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "physport", {
        // physport - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('physport');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "routedSubnets", {
        get: function () {
            return this._routedSubnets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "siteId", {
        get: function () {
            return this.getStringAttribute('site_id');
        },
        set: function (value) {
            this._siteId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "siteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._siteId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "staticAddressing", {
        get: function () {
            return this._staticAddressing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLan.prototype, "vlanTag", {
        // vlan_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('vlan_tag');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicTransitSiteLan.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            lan_id: cdktf.stringToTerraform(this._lanId),
            site_id: cdktf.stringToTerraform(this._siteId),
        };
    };
    DataCloudflareMagicTransitSiteLan.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lan_id: {
                value: cdktf.stringToHclTerraform(this._lanId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            site_id: {
                value: cdktf.stringToHclTerraform(this._siteId),
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
    DataCloudflareMagicTransitSiteLan.tfResourceType = "cloudflare_magic_transit_site_lan";
    return DataCloudflareMagicTransitSiteLan;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicTransitSiteLan = DataCloudflareMagicTransitSiteLan;
