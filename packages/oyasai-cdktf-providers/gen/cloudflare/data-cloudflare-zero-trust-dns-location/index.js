"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_location
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
exports.DataCloudflareZeroTrustDnsLocation = exports.DataCloudflareZeroTrustDnsLocationNetworksList = exports.DataCloudflareZeroTrustDnsLocationNetworksOutputReference = exports.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference = exports.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference = exports.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList = exports.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference = exports.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference = exports.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference = exports.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList = exports.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference = exports.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference = exports.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList = exports.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference = void 0;
exports.dataCloudflareZeroTrustDnsLocationEndpointsDohNetworksToTerraform = dataCloudflareZeroTrustDnsLocationEndpointsDohNetworksToTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsDohNetworksToHclTerraform = dataCloudflareZeroTrustDnsLocationEndpointsDohNetworksToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsDohToTerraform = dataCloudflareZeroTrustDnsLocationEndpointsDohToTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsDohToHclTerraform = dataCloudflareZeroTrustDnsLocationEndpointsDohToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsDotNetworksToTerraform = dataCloudflareZeroTrustDnsLocationEndpointsDotNetworksToTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsDotNetworksToHclTerraform = dataCloudflareZeroTrustDnsLocationEndpointsDotNetworksToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsDotToTerraform = dataCloudflareZeroTrustDnsLocationEndpointsDotToTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsDotToHclTerraform = dataCloudflareZeroTrustDnsLocationEndpointsDotToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsIpv4ToTerraform = dataCloudflareZeroTrustDnsLocationEndpointsIpv4ToTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsIpv4ToHclTerraform = dataCloudflareZeroTrustDnsLocationEndpointsIpv4ToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksToTerraform = dataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksToTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform = dataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsIpv6ToTerraform = dataCloudflareZeroTrustDnsLocationEndpointsIpv6ToTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsIpv6ToHclTerraform = dataCloudflareZeroTrustDnsLocationEndpointsIpv6ToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsToTerraform = dataCloudflareZeroTrustDnsLocationEndpointsToTerraform;
exports.dataCloudflareZeroTrustDnsLocationEndpointsToHclTerraform = dataCloudflareZeroTrustDnsLocationEndpointsToHclTerraform;
exports.dataCloudflareZeroTrustDnsLocationNetworksToTerraform = dataCloudflareZeroTrustDnsLocationNetworksToTerraform;
exports.dataCloudflareZeroTrustDnsLocationNetworksToHclTerraform = dataCloudflareZeroTrustDnsLocationNetworksToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDnsLocationEndpointsDohNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationEndpointsDohNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference.prototype, "network", {
        // network - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference = DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference;
var DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList = DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList;
function dataCloudflareZeroTrustDnsLocationEndpointsDohToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationEndpointsDohToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // networks - computed: true, optional: false, required: false
        _this._networks = new DataCloudflareZeroTrustDnsLocationEndpointsDohNetworksList(_this, "networks", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference.prototype, "requireToken", {
        // require_token - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_token');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference = DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference;
function dataCloudflareZeroTrustDnsLocationEndpointsDotNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationEndpointsDotNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference.prototype, "network", {
        // network - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference = DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference;
var DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList = DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList;
function dataCloudflareZeroTrustDnsLocationEndpointsDotToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationEndpointsDotToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // networks - computed: true, optional: false, required: false
        _this._networks = new DataCloudflareZeroTrustDnsLocationEndpointsDotNetworksList(_this, "networks", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference = DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference;
function dataCloudflareZeroTrustDnsLocationEndpointsIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationEndpointsIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference = DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference;
function dataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.prototype, "network", {
        // network - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference = DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference;
var DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList = DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList;
function dataCloudflareZeroTrustDnsLocationEndpointsIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationEndpointsIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // networks - computed: true, optional: false, required: false
        _this._networks = new DataCloudflareZeroTrustDnsLocationEndpointsIpv6NetworksList(_this, "networks", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference = DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference;
function dataCloudflareZeroTrustDnsLocationEndpointsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationEndpointsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationEndpointsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationEndpointsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDnsLocationEndpointsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // doh - computed: true, optional: false, required: false
        _this._doh = new DataCloudflareZeroTrustDnsLocationEndpointsDohOutputReference(_this, "doh");
        // dot - computed: true, optional: false, required: false
        _this._dot = new DataCloudflareZeroTrustDnsLocationEndpointsDotOutputReference(_this, "dot");
        // ipv4 - computed: true, optional: false, required: false
        _this._ipv4 = new DataCloudflareZeroTrustDnsLocationEndpointsIpv4OutputReference(_this, "ipv4");
        // ipv6 - computed: true, optional: false, required: false
        _this._ipv6 = new DataCloudflareZeroTrustDnsLocationEndpointsIpv6OutputReference(_this, "ipv6");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.prototype, "doh", {
        get: function () {
            return this._doh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.prototype, "dot", {
        get: function () {
            return this._dot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.prototype, "ipv4", {
        get: function () {
            return this._ipv4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationEndpointsOutputReference.prototype, "ipv6", {
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationEndpointsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationEndpointsOutputReference = DataCloudflareZeroTrustDnsLocationEndpointsOutputReference;
function dataCloudflareZeroTrustDnsLocationNetworksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDnsLocationNetworksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDnsLocationNetworksOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationNetworksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationNetworksOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationNetworksOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDnsLocationNetworksOutputReference.prototype, "network", {
        // network - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDnsLocationNetworksOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDnsLocationNetworksOutputReference = DataCloudflareZeroTrustDnsLocationNetworksOutputReference;
var DataCloudflareZeroTrustDnsLocationNetworksList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocationNetworksList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDnsLocationNetworksList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDnsLocationNetworksList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDnsLocationNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDnsLocationNetworksList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDnsLocationNetworksList = DataCloudflareZeroTrustDnsLocationNetworksList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_location cloudflare_zero_trust_dns_location}
*/
var DataCloudflareZeroTrustDnsLocation = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDnsLocation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_location cloudflare_zero_trust_dns_location} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDnsLocationConfig
    */
    function DataCloudflareZeroTrustDnsLocation(scope, id, config) {
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
        // endpoints - computed: true, optional: false, required: false
        _this._endpoints = new DataCloudflareZeroTrustDnsLocationEndpointsOutputReference(_this, "endpoints");
        // networks - computed: true, optional: false, required: false
        _this._networks = new DataCloudflareZeroTrustDnsLocationNetworksList(_this, "networks", false);
        _this._accountId = config.accountId;
        _this._locationId = config.locationId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDnsLocation to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDnsLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dns_location#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDnsLocation to import is found
    */
    DataCloudflareZeroTrustDnsLocation.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dns_location", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDnsLocation.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "clientDefault", {
        // client_default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('client_default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "dnsDestinationIpsId", {
        // dns_destination_ips_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_destination_ips_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "dnsDestinationIpv6BlockId", {
        // dns_destination_ipv6_block_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_destination_ipv6_block_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "dohSubdomain", {
        // doh_subdomain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('doh_subdomain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "ecsSupport", {
        // ecs_support - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ecs_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "endpoints", {
        get: function () {
            return this._endpoints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "ipv4Destination", {
        // ipv4_destination - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4_destination');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "ipv4DestinationBackup", {
        // ipv4_destination_backup - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4_destination_backup');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "locationId", {
        get: function () {
            return this.getStringAttribute('location_id');
        },
        set: function (value) {
            this._locationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "locationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "networks", {
        get: function () {
            return this._networks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDnsLocation.prototype, "updatedAt", {
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
    DataCloudflareZeroTrustDnsLocation.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            location_id: cdktf.stringToTerraform(this._locationId),
        };
    };
    DataCloudflareZeroTrustDnsLocation.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            location_id: {
                value: cdktf.stringToHclTerraform(this._locationId),
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
    DataCloudflareZeroTrustDnsLocation.tfResourceType = "cloudflare_zero_trust_dns_location";
    return DataCloudflareZeroTrustDnsLocation;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDnsLocation = DataCloudflareZeroTrustDnsLocation;
