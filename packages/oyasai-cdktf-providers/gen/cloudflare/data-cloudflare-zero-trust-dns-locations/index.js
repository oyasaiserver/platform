"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_locations
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
exports.DataCloudflareZeroTrustDnsLocations = exports.DataCloudflareZeroTrustDnsLocationsResultList = exports.DataCloudflareZeroTrustDnsLocationsResultOutputReference = exports.DataCloudflareZeroTrustDnsLocationsResultNetworksList = exports.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference = exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference = exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference = exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList = exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference = exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference = exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference = exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList = exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference = exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference = exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList = exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference = void 0;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksToTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksToTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksToHclTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsDohToTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsDohToTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsDohToHclTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsDohToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksToTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksToTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksToHclTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsDotToTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsDotToTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsDotToHclTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsDotToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4ToTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4ToTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4ToHclTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4ToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksToTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksToTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksToHclTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6ToTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6ToTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6ToHclTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6ToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsToTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsToTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultEndpointsToHclTerraform = dataCloudflareZeroTrustDnsLocationsResultEndpointsToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultNetworksToTerraform = dataCloudflareZeroTrustDnsLocationsResultNetworksToTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultNetworksToHclTerraform = dataCloudflareZeroTrustDnsLocationsResultNetworksToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultToTerraform = dataCloudflareZeroTrustDnsLocationsResultToTerraform;
exports.dataCloudflareZeroTrustDnsLocationsResultToHclTerraform = dataCloudflareZeroTrustDnsLocationsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.prototype, "network", {
        // network - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference = DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference;
var DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList = DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList;
function dataCloudflareZeroTrustDnsLocationsResultEndpointsDohToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationsResultEndpointsDohToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // networks - computed: true, optional: false, required: false
        _this._networks = new DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList(_this, "networks", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.prototype, "requireToken", {
        // require_token - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_token');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference = DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference;
function dataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.prototype, "network", {
        // network - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference = DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference;
var DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList = DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList;
function dataCloudflareZeroTrustDnsLocationsResultEndpointsDotToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationsResultEndpointsDotToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // networks - computed: true, optional: false, required: false
        _this._networks = new DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList(_this, "networks", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference = DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference;
function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference = DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference;
function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.prototype, "network", {
        // network - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference = DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference;
var DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList = DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList;
function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // networks - computed: true, optional: false, required: false
        _this._networks = new DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList(_this, "networks", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference = DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference;
function dataCloudflareZeroTrustDnsLocationsResultEndpointsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationsResultEndpointsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // doh - computed: true, optional: false, required: false
        _this._doh = new DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference(_this, "doh");
        // dot - computed: true, optional: false, required: false
        _this._dot = new DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference(_this, "dot");
        // ipv4 - computed: true, optional: false, required: false
        _this._ipv4 = new DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference(_this, "ipv4");
        // ipv6 - computed: true, optional: false, required: false
        _this._ipv6 = new DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference(_this, "ipv6");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.prototype, "doh", {
        get: function () {
            return this._doh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.prototype, "dot", {
        get: function () {
            return this._dot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.prototype, "ipv4", {
        get: function () {
            return this._ipv4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.prototype, "ipv6", {
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference = DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference;
function dataCloudflareZeroTrustDnsLocationsResultNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationsResultNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.prototype, "network", {
        // network - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference = DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference;
var DataCloudflareZeroTrustDnsLocationsResultNetworksList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultNetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationsResultNetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDnsLocationsResultNetworksList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDnsLocationsResultNetworksList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDnsLocationsResultNetworksList = DataCloudflareZeroTrustDnsLocationsResultNetworksList;
function dataCloudflareZeroTrustDnsLocationsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // endpoints - computed: true, optional: false, required: false
        _this._endpoints = new DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference(_this, "endpoints");
        // networks - computed: true, optional: false, required: false
        _this._networks = new DataCloudflareZeroTrustDnsLocationsResultNetworksList(_this, "networks", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "clientDefault", {
        // client_default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('client_default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "dnsDestinationIpsId", {
        // dns_destination_ips_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_destination_ips_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "dnsDestinationIpv6BlockId", {
        // dns_destination_ipv6_block_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_destination_ipv6_block_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "dohSubdomain", {
        // doh_subdomain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('doh_subdomain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "ecsSupport", {
        // ecs_support - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ecs_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "endpoints", {
        get: function () {
            return this._endpoints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "ipv4Destination", {
        // ipv4_destination - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4_destination');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "ipv4DestinationBackup", {
        // ipv4_destination_backup - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4_destination_backup');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationsResultOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationsResultOutputReference = DataCloudflareZeroTrustDnsLocationsResultOutputReference;
var DataCloudflareZeroTrustDnsLocationsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDnsLocationsResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDnsLocationsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDnsLocationsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDnsLocationsResultList = DataCloudflareZeroTrustDnsLocationsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_locations cloudflare_zero_trust_dns_locations}
*/
var DataCloudflareZeroTrustDnsLocations = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocations, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_locations cloudflare_zero_trust_dns_locations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDnsLocationsConfig = {}
    */
    function DataCloudflareZeroTrustDnsLocations(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dns_locations',
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
        _this._result = new DataCloudflareZeroTrustDnsLocationsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDnsLocations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDnsLocations to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDnsLocations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_locations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDnsLocations to import is found
    */
    DataCloudflareZeroTrustDnsLocations.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dns_locations", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDnsLocations.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDnsLocations.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDnsLocations.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocations.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDnsLocations.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDnsLocations.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocations.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDnsLocations.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareZeroTrustDnsLocations.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareZeroTrustDnsLocations.tfResourceType = "cloudflare_zero_trust_dns_locations";
    return DataCloudflareZeroTrustDnsLocations;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDnsLocations = DataCloudflareZeroTrustDnsLocations;
