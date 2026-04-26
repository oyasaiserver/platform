"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lans
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
exports.DataCloudflareMagicTransitSiteLans = exports.DataCloudflareMagicTransitSiteLansResultList = exports.DataCloudflareMagicTransitSiteLansResultOutputReference = exports.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference = exports.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference = exports.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference = exports.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList = exports.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference = exports.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference = exports.DataCloudflareMagicTransitSiteLansResultNatOutputReference = void 0;
exports.dataCloudflareMagicTransitSiteLansResultNatToTerraform = dataCloudflareMagicTransitSiteLansResultNatToTerraform;
exports.dataCloudflareMagicTransitSiteLansResultNatToHclTerraform = dataCloudflareMagicTransitSiteLansResultNatToHclTerraform;
exports.dataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatToTerraform = dataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatToTerraform;
exports.dataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatToHclTerraform = dataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatToHclTerraform;
exports.dataCloudflareMagicTransitSiteLansResultRoutedSubnetsToTerraform = dataCloudflareMagicTransitSiteLansResultRoutedSubnetsToTerraform;
exports.dataCloudflareMagicTransitSiteLansResultRoutedSubnetsToHclTerraform = dataCloudflareMagicTransitSiteLansResultRoutedSubnetsToHclTerraform;
exports.dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayToTerraform = dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayToTerraform;
exports.dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayToHclTerraform = dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayToHclTerraform;
exports.dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerToTerraform = dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerToTerraform;
exports.dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerToHclTerraform = dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerToHclTerraform;
exports.dataCloudflareMagicTransitSiteLansResultStaticAddressingToTerraform = dataCloudflareMagicTransitSiteLansResultStaticAddressingToTerraform;
exports.dataCloudflareMagicTransitSiteLansResultStaticAddressingToHclTerraform = dataCloudflareMagicTransitSiteLansResultStaticAddressingToHclTerraform;
exports.dataCloudflareMagicTransitSiteLansResultToTerraform = dataCloudflareMagicTransitSiteLansResultToTerraform;
exports.dataCloudflareMagicTransitSiteLansResultToHclTerraform = dataCloudflareMagicTransitSiteLansResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicTransitSiteLansResultNatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLansResultNatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLansResultNatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLansResultNatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteLansResultNatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultNatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultNatOutputReference.prototype, "staticPrefix", {
        // static_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('static_prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLansResultNatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLansResultNatOutputReference = DataCloudflareMagicTransitSiteLansResultNatOutputReference;
function dataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.prototype, "staticPrefix", {
        // static_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('static_prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference = DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference;
function dataCloudflareMagicTransitSiteLansResultRoutedSubnetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLansResultRoutedSubnetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // nat - computed: true, optional: false, required: false
        _this._nat = new DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference(_this, "nat");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.prototype, "nat", {
        get: function () {
            return this._nat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.prototype, "nextHop", {
        // next_hop - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('next_hop');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference = DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference;
var DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.prototype.get = function (index) {
        return new DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList;
}(cdktf.ComplexList));
exports.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList = DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList;
function dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.prototype, "serverAddresses", {
        // server_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('server_addresses');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference = DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference;
function dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // reservations - computed: true, optional: false, required: false
        _this._reservations = new cdktf.StringMap(_this, "reservations");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.prototype, "dhcpPoolEnd", {
        // dhcp_pool_end - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dhcp_pool_end');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.prototype, "dhcpPoolStart", {
        // dhcp_pool_start - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dhcp_pool_start');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.prototype, "dnsServer", {
        // dns_server - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_server');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.prototype, "dnsServers", {
        // dns_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.prototype, "reservations", {
        get: function () {
            return this._reservations;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference = DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference;
function dataCloudflareMagicTransitSiteLansResultStaticAddressingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLansResultStaticAddressingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // dhcp_relay - computed: true, optional: false, required: false
        _this._dhcpRelay = new DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference(_this, "dhcp_relay");
        // dhcp_server - computed: true, optional: false, required: false
        _this._dhcpServer = new DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference(_this, "dhcp_server");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.prototype, "dhcpRelay", {
        get: function () {
            return this._dhcpRelay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.prototype, "dhcpServer", {
        get: function () {
            return this._dhcpServer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.prototype, "secondaryAddress", {
        // secondary_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secondary_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.prototype, "virtualAddress", {
        // virtual_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_address');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference = DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference;
function dataCloudflareMagicTransitSiteLansResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLansResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLansResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLansResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitSiteLansResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // nat - computed: true, optional: false, required: false
        _this._nat = new DataCloudflareMagicTransitSiteLansResultNatOutputReference(_this, "nat");
        // routed_subnets - computed: true, optional: false, required: false
        _this._routedSubnets = new DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList(_this, "routed_subnets", false);
        // static_addressing - computed: true, optional: false, required: false
        _this._staticAddressing = new DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference(_this, "static_addressing");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "bondId", {
        // bond_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('bond_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "haLink", {
        // ha_link - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ha_link');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "isBreakout", {
        // is_breakout - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_breakout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "isPrioritized", {
        // is_prioritized - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_prioritized');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "nat", {
        get: function () {
            return this._nat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "physport", {
        // physport - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('physport');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "routedSubnets", {
        get: function () {
            return this._routedSubnets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "siteId", {
        // site_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('site_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "staticAddressing", {
        get: function () {
            return this._staticAddressing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLansResultOutputReference.prototype, "vlanTag", {
        // vlan_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('vlan_tag');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLansResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLansResultOutputReference = DataCloudflareMagicTransitSiteLansResultOutputReference;
var DataCloudflareMagicTransitSiteLansResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLansResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitSiteLansResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareMagicTransitSiteLansResultList.prototype.get = function (index) {
        return new DataCloudflareMagicTransitSiteLansResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareMagicTransitSiteLansResultList;
}(cdktf.ComplexList));
exports.DataCloudflareMagicTransitSiteLansResultList = DataCloudflareMagicTransitSiteLansResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lans cloudflare_magic_transit_site_lans}
*/
var DataCloudflareMagicTransitSiteLans = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLans, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lans cloudflare_magic_transit_site_lans} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteLansConfig
    */
    function DataCloudflareMagicTransitSiteLans(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_site_lans',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareMagicTransitSiteLansResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._siteId = config.siteId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteLans resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteLans to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteLans that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_lans#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteLans to import is found
    */
    DataCloudflareMagicTransitSiteLans.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_lans", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteLans.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSiteLans.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteLans.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLans.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSiteLans.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteLans.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLans.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLans.prototype, "siteId", {
        get: function () {
            return this.getStringAttribute('site_id');
        },
        set: function (value) {
            this._siteId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLans.prototype, "siteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._siteId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicTransitSiteLans.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            site_id: cdktf.stringToTerraform(this._siteId),
        };
    };
    DataCloudflareMagicTransitSiteLans.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareMagicTransitSiteLans.tfResourceType = "cloudflare_magic_transit_site_lans";
    return DataCloudflareMagicTransitSiteLans;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicTransitSiteLans = DataCloudflareMagicTransitSiteLans;
