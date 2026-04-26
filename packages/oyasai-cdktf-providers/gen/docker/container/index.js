"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container
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
exports.Container = exports.ContainerVolumesList = exports.ContainerVolumesOutputReference = exports.ContainerUploadList = exports.ContainerUploadOutputReference = exports.ContainerUlimitList = exports.ContainerUlimitOutputReference = exports.ContainerTimeoutsOutputReference = exports.ContainerPortsList = exports.ContainerPortsOutputReference = exports.ContainerNetworksAdvancedList = exports.ContainerNetworksAdvancedOutputReference = exports.ContainerMountsList = exports.ContainerMountsOutputReference = exports.ContainerMountsVolumeOptionsOutputReference = exports.ContainerMountsVolumeOptionsLabelsList = exports.ContainerMountsVolumeOptionsLabelsOutputReference = exports.ContainerMountsTmpfsOptionsOutputReference = exports.ContainerMountsBindOptionsOutputReference = exports.ContainerLabelsList = exports.ContainerLabelsOutputReference = exports.ContainerHostList = exports.ContainerHostOutputReference = exports.ContainerHealthcheckOutputReference = exports.ContainerDevicesList = exports.ContainerDevicesOutputReference = exports.ContainerDeviceWriteIopsList = exports.ContainerDeviceWriteIopsOutputReference = exports.ContainerDeviceWriteBpsList = exports.ContainerDeviceWriteBpsOutputReference = exports.ContainerDeviceRequestsList = exports.ContainerDeviceRequestsOutputReference = exports.ContainerDeviceReadIopsList = exports.ContainerDeviceReadIopsOutputReference = exports.ContainerDeviceReadBpsList = exports.ContainerDeviceReadBpsOutputReference = exports.ContainerCapabilitiesOutputReference = exports.ContainerNetworkDataList = exports.ContainerNetworkDataOutputReference = void 0;
exports.containerNetworkDataToTerraform = containerNetworkDataToTerraform;
exports.containerNetworkDataToHclTerraform = containerNetworkDataToHclTerraform;
exports.containerCapabilitiesToTerraform = containerCapabilitiesToTerraform;
exports.containerCapabilitiesToHclTerraform = containerCapabilitiesToHclTerraform;
exports.containerDeviceReadBpsToTerraform = containerDeviceReadBpsToTerraform;
exports.containerDeviceReadBpsToHclTerraform = containerDeviceReadBpsToHclTerraform;
exports.containerDeviceReadIopsToTerraform = containerDeviceReadIopsToTerraform;
exports.containerDeviceReadIopsToHclTerraform = containerDeviceReadIopsToHclTerraform;
exports.containerDeviceRequestsToTerraform = containerDeviceRequestsToTerraform;
exports.containerDeviceRequestsToHclTerraform = containerDeviceRequestsToHclTerraform;
exports.containerDeviceWriteBpsToTerraform = containerDeviceWriteBpsToTerraform;
exports.containerDeviceWriteBpsToHclTerraform = containerDeviceWriteBpsToHclTerraform;
exports.containerDeviceWriteIopsToTerraform = containerDeviceWriteIopsToTerraform;
exports.containerDeviceWriteIopsToHclTerraform = containerDeviceWriteIopsToHclTerraform;
exports.containerDevicesToTerraform = containerDevicesToTerraform;
exports.containerDevicesToHclTerraform = containerDevicesToHclTerraform;
exports.containerHealthcheckToTerraform = containerHealthcheckToTerraform;
exports.containerHealthcheckToHclTerraform = containerHealthcheckToHclTerraform;
exports.containerHostToTerraform = containerHostToTerraform;
exports.containerHostToHclTerraform = containerHostToHclTerraform;
exports.containerLabelsToTerraform = containerLabelsToTerraform;
exports.containerLabelsToHclTerraform = containerLabelsToHclTerraform;
exports.containerMountsBindOptionsToTerraform = containerMountsBindOptionsToTerraform;
exports.containerMountsBindOptionsToHclTerraform = containerMountsBindOptionsToHclTerraform;
exports.containerMountsTmpfsOptionsToTerraform = containerMountsTmpfsOptionsToTerraform;
exports.containerMountsTmpfsOptionsToHclTerraform = containerMountsTmpfsOptionsToHclTerraform;
exports.containerMountsVolumeOptionsLabelsToTerraform = containerMountsVolumeOptionsLabelsToTerraform;
exports.containerMountsVolumeOptionsLabelsToHclTerraform = containerMountsVolumeOptionsLabelsToHclTerraform;
exports.containerMountsVolumeOptionsToTerraform = containerMountsVolumeOptionsToTerraform;
exports.containerMountsVolumeOptionsToHclTerraform = containerMountsVolumeOptionsToHclTerraform;
exports.containerMountsToTerraform = containerMountsToTerraform;
exports.containerMountsToHclTerraform = containerMountsToHclTerraform;
exports.containerNetworksAdvancedToTerraform = containerNetworksAdvancedToTerraform;
exports.containerNetworksAdvancedToHclTerraform = containerNetworksAdvancedToHclTerraform;
exports.containerPortsToTerraform = containerPortsToTerraform;
exports.containerPortsToHclTerraform = containerPortsToHclTerraform;
exports.containerTimeoutsToTerraform = containerTimeoutsToTerraform;
exports.containerTimeoutsToHclTerraform = containerTimeoutsToHclTerraform;
exports.containerUlimitToTerraform = containerUlimitToTerraform;
exports.containerUlimitToHclTerraform = containerUlimitToHclTerraform;
exports.containerUploadToTerraform = containerUploadToTerraform;
exports.containerUploadToHclTerraform = containerUploadToHclTerraform;
exports.containerVolumesToTerraform = containerVolumesToTerraform;
exports.containerVolumesToHclTerraform = containerVolumesToHclTerraform;
var cdktf = require("cdktf");
function containerNetworkDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function containerNetworkDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ContainerNetworkDataOutputReference = /** @class */ (function (_super) {
    __extends(ContainerNetworkDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerNetworkDataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerNetworkDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ContainerNetworkDataOutputReference.prototype, "gateway", {
        // gateway - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworkDataOutputReference.prototype, "globalIpv6Address", {
        // global_ipv6_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('global_ipv6_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworkDataOutputReference.prototype, "globalIpv6PrefixLength", {
        // global_ipv6_prefix_length - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('global_ipv6_prefix_length');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworkDataOutputReference.prototype, "ipAddress", {
        // ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworkDataOutputReference.prototype, "ipPrefixLength", {
        // ip_prefix_length - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ip_prefix_length');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworkDataOutputReference.prototype, "ipv6Gateway", {
        // ipv6_gateway - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_gateway');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworkDataOutputReference.prototype, "macAddress", {
        // mac_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mac_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworkDataOutputReference.prototype, "networkName", {
        // network_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_name');
        },
        enumerable: false,
        configurable: true
    });
    return ContainerNetworkDataOutputReference;
}(cdktf.ComplexObject));
exports.ContainerNetworkDataOutputReference = ContainerNetworkDataOutputReference;
var ContainerNetworkDataList = /** @class */ (function (_super) {
    __extends(ContainerNetworkDataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerNetworkDataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerNetworkDataList.prototype.get = function (index) {
        return new ContainerNetworkDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerNetworkDataList;
}(cdktf.ComplexList));
exports.ContainerNetworkDataList = ContainerNetworkDataList;
function containerCapabilitiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.add),
        drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.drop),
    };
}
function containerCapabilitiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        add: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.add),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        drop: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.drop),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ContainerCapabilitiesOutputReference = /** @class */ (function (_super) {
    __extends(ContainerCapabilitiesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ContainerCapabilitiesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerCapabilitiesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._add !== undefined) {
                hasAnyValues = true;
                internalValueResult.add = this._add;
            }
            if (this._drop !== undefined) {
                hasAnyValues = true;
                internalValueResult.drop = this._drop;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._add = undefined;
                this._drop = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._add = value.add;
                this._drop = value.drop;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerCapabilitiesOutputReference.prototype, "add", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('add'));
        },
        set: function (value) {
            this._add = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerCapabilitiesOutputReference.prototype.resetAdd = function () {
        this._add = undefined;
    };
    Object.defineProperty(ContainerCapabilitiesOutputReference.prototype, "addInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._add;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerCapabilitiesOutputReference.prototype, "drop", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('drop'));
        },
        set: function (value) {
            this._drop = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerCapabilitiesOutputReference.prototype.resetDrop = function () {
        this._drop = undefined;
    };
    Object.defineProperty(ContainerCapabilitiesOutputReference.prototype, "dropInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._drop;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerCapabilitiesOutputReference;
}(cdktf.ComplexObject));
exports.ContainerCapabilitiesOutputReference = ContainerCapabilitiesOutputReference;
function containerDeviceReadBpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        rate: cdktf.numberToTerraform(struct.rate),
    };
}
function containerDeviceReadBpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rate: {
            value: cdktf.numberToHclTerraform(struct.rate),
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
}
var ContainerDeviceReadBpsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerDeviceReadBpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDeviceReadBpsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerDeviceReadBpsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            if (this._rate !== undefined) {
                hasAnyValues = true;
                internalValueResult.rate = this._rate;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._path = undefined;
                this._rate = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._path = value.path;
                this._rate = value.rate;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceReadBpsOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceReadBpsOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceReadBpsOutputReference.prototype, "rate", {
        get: function () {
            return this.getNumberAttribute('rate');
        },
        set: function (value) {
            this._rate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceReadBpsOutputReference.prototype, "rateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rate;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerDeviceReadBpsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerDeviceReadBpsOutputReference = ContainerDeviceReadBpsOutputReference;
var ContainerDeviceReadBpsList = /** @class */ (function (_super) {
    __extends(ContainerDeviceReadBpsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDeviceReadBpsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerDeviceReadBpsList.prototype.get = function (index) {
        return new ContainerDeviceReadBpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerDeviceReadBpsList;
}(cdktf.ComplexList));
exports.ContainerDeviceReadBpsList = ContainerDeviceReadBpsList;
function containerDeviceReadIopsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        rate: cdktf.numberToTerraform(struct.rate),
    };
}
function containerDeviceReadIopsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rate: {
            value: cdktf.numberToHclTerraform(struct.rate),
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
}
var ContainerDeviceReadIopsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerDeviceReadIopsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDeviceReadIopsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerDeviceReadIopsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            if (this._rate !== undefined) {
                hasAnyValues = true;
                internalValueResult.rate = this._rate;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._path = undefined;
                this._rate = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._path = value.path;
                this._rate = value.rate;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceReadIopsOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceReadIopsOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceReadIopsOutputReference.prototype, "rate", {
        get: function () {
            return this.getNumberAttribute('rate');
        },
        set: function (value) {
            this._rate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceReadIopsOutputReference.prototype, "rateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rate;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerDeviceReadIopsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerDeviceReadIopsOutputReference = ContainerDeviceReadIopsOutputReference;
var ContainerDeviceReadIopsList = /** @class */ (function (_super) {
    __extends(ContainerDeviceReadIopsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDeviceReadIopsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerDeviceReadIopsList.prototype.get = function (index) {
        return new ContainerDeviceReadIopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerDeviceReadIopsList;
}(cdktf.ComplexList));
exports.ContainerDeviceReadIopsList = ContainerDeviceReadIopsList;
function containerDeviceRequestsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.capabilities),
        count: cdktf.numberToTerraform(struct.count),
        device_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.deviceIds),
        driver: cdktf.stringToTerraform(struct.driver),
        options: cdktf.hashMapper(cdktf.stringToTerraform)(struct.options),
    };
}
function containerDeviceRequestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        capabilities: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.capabilities),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        count: {
            value: cdktf.numberToHclTerraform(struct.count),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        device_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.deviceIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        driver: {
            value: cdktf.stringToHclTerraform(struct.driver),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        options: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.options),
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
var ContainerDeviceRequestsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerDeviceRequestsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDeviceRequestsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerDeviceRequestsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._capabilities !== undefined) {
                hasAnyValues = true;
                internalValueResult.capabilities = this._capabilities;
            }
            if (this._count !== undefined) {
                hasAnyValues = true;
                internalValueResult.count = this._count;
            }
            if (this._deviceIds !== undefined) {
                hasAnyValues = true;
                internalValueResult.deviceIds = this._deviceIds;
            }
            if (this._driver !== undefined) {
                hasAnyValues = true;
                internalValueResult.driver = this._driver;
            }
            if (this._options !== undefined) {
                hasAnyValues = true;
                internalValueResult.options = this._options;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._capabilities = undefined;
                this._count = undefined;
                this._deviceIds = undefined;
                this._driver = undefined;
                this._options = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._capabilities = value.capabilities;
                this._count = value.count;
                this._deviceIds = value.deviceIds;
                this._driver = value.driver;
                this._options = value.options;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceRequestsOutputReference.prototype, "capabilities", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
        },
        set: function (value) {
            this._capabilities = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerDeviceRequestsOutputReference.prototype.resetCapabilities = function () {
        this._capabilities = undefined;
    };
    Object.defineProperty(ContainerDeviceRequestsOutputReference.prototype, "capabilitiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capabilities;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceRequestsOutputReference.prototype, "count", {
        get: function () {
            return this.getNumberAttribute('count');
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerDeviceRequestsOutputReference.prototype.resetCount = function () {
        this._count = undefined;
    };
    Object.defineProperty(ContainerDeviceRequestsOutputReference.prototype, "countInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceRequestsOutputReference.prototype, "deviceIds", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('device_ids'));
        },
        set: function (value) {
            this._deviceIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerDeviceRequestsOutputReference.prototype.resetDeviceIds = function () {
        this._deviceIds = undefined;
    };
    Object.defineProperty(ContainerDeviceRequestsOutputReference.prototype, "deviceIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceRequestsOutputReference.prototype, "driver", {
        get: function () {
            return this.getStringAttribute('driver');
        },
        set: function (value) {
            this._driver = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerDeviceRequestsOutputReference.prototype.resetDriver = function () {
        this._driver = undefined;
    };
    Object.defineProperty(ContainerDeviceRequestsOutputReference.prototype, "driverInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceRequestsOutputReference.prototype, "options", {
        get: function () {
            return this.getStringMapAttribute('options');
        },
        set: function (value) {
            this._options = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerDeviceRequestsOutputReference.prototype.resetOptions = function () {
        this._options = undefined;
    };
    Object.defineProperty(ContainerDeviceRequestsOutputReference.prototype, "optionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerDeviceRequestsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerDeviceRequestsOutputReference = ContainerDeviceRequestsOutputReference;
var ContainerDeviceRequestsList = /** @class */ (function (_super) {
    __extends(ContainerDeviceRequestsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDeviceRequestsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerDeviceRequestsList.prototype.get = function (index) {
        return new ContainerDeviceRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerDeviceRequestsList;
}(cdktf.ComplexList));
exports.ContainerDeviceRequestsList = ContainerDeviceRequestsList;
function containerDeviceWriteBpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        rate: cdktf.numberToTerraform(struct.rate),
    };
}
function containerDeviceWriteBpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rate: {
            value: cdktf.numberToHclTerraform(struct.rate),
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
}
var ContainerDeviceWriteBpsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerDeviceWriteBpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDeviceWriteBpsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerDeviceWriteBpsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            if (this._rate !== undefined) {
                hasAnyValues = true;
                internalValueResult.rate = this._rate;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._path = undefined;
                this._rate = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._path = value.path;
                this._rate = value.rate;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceWriteBpsOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceWriteBpsOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceWriteBpsOutputReference.prototype, "rate", {
        get: function () {
            return this.getNumberAttribute('rate');
        },
        set: function (value) {
            this._rate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceWriteBpsOutputReference.prototype, "rateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rate;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerDeviceWriteBpsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerDeviceWriteBpsOutputReference = ContainerDeviceWriteBpsOutputReference;
var ContainerDeviceWriteBpsList = /** @class */ (function (_super) {
    __extends(ContainerDeviceWriteBpsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDeviceWriteBpsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerDeviceWriteBpsList.prototype.get = function (index) {
        return new ContainerDeviceWriteBpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerDeviceWriteBpsList;
}(cdktf.ComplexList));
exports.ContainerDeviceWriteBpsList = ContainerDeviceWriteBpsList;
function containerDeviceWriteIopsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        rate: cdktf.numberToTerraform(struct.rate),
    };
}
function containerDeviceWriteIopsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rate: {
            value: cdktf.numberToHclTerraform(struct.rate),
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
}
var ContainerDeviceWriteIopsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerDeviceWriteIopsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDeviceWriteIopsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerDeviceWriteIopsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            if (this._rate !== undefined) {
                hasAnyValues = true;
                internalValueResult.rate = this._rate;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._path = undefined;
                this._rate = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._path = value.path;
                this._rate = value.rate;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceWriteIopsOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceWriteIopsOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceWriteIopsOutputReference.prototype, "rate", {
        get: function () {
            return this.getNumberAttribute('rate');
        },
        set: function (value) {
            this._rate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDeviceWriteIopsOutputReference.prototype, "rateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rate;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerDeviceWriteIopsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerDeviceWriteIopsOutputReference = ContainerDeviceWriteIopsOutputReference;
var ContainerDeviceWriteIopsList = /** @class */ (function (_super) {
    __extends(ContainerDeviceWriteIopsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDeviceWriteIopsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerDeviceWriteIopsList.prototype.get = function (index) {
        return new ContainerDeviceWriteIopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerDeviceWriteIopsList;
}(cdktf.ComplexList));
exports.ContainerDeviceWriteIopsList = ContainerDeviceWriteIopsList;
function containerDevicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        container_path: cdktf.stringToTerraform(struct.containerPath),
        host_path: cdktf.stringToTerraform(struct.hostPath),
        permissions: cdktf.stringToTerraform(struct.permissions),
    };
}
function containerDevicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        container_path: {
            value: cdktf.stringToHclTerraform(struct.containerPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_path: {
            value: cdktf.stringToHclTerraform(struct.hostPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permissions: {
            value: cdktf.stringToHclTerraform(struct.permissions),
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
var ContainerDevicesOutputReference = /** @class */ (function (_super) {
    __extends(ContainerDevicesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDevicesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerDevicesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._containerPath !== undefined) {
                hasAnyValues = true;
                internalValueResult.containerPath = this._containerPath;
            }
            if (this._hostPath !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostPath = this._hostPath;
            }
            if (this._permissions !== undefined) {
                hasAnyValues = true;
                internalValueResult.permissions = this._permissions;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._containerPath = undefined;
                this._hostPath = undefined;
                this._permissions = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._containerPath = value.containerPath;
                this._hostPath = value.hostPath;
                this._permissions = value.permissions;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDevicesOutputReference.prototype, "containerPath", {
        get: function () {
            return this.getStringAttribute('container_path');
        },
        set: function (value) {
            this._containerPath = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerDevicesOutputReference.prototype.resetContainerPath = function () {
        this._containerPath = undefined;
    };
    Object.defineProperty(ContainerDevicesOutputReference.prototype, "containerPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._containerPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDevicesOutputReference.prototype, "hostPath", {
        get: function () {
            return this.getStringAttribute('host_path');
        },
        set: function (value) {
            this._hostPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDevicesOutputReference.prototype, "hostPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerDevicesOutputReference.prototype, "permissions", {
        get: function () {
            return this.getStringAttribute('permissions');
        },
        set: function (value) {
            this._permissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerDevicesOutputReference.prototype.resetPermissions = function () {
        this._permissions = undefined;
    };
    Object.defineProperty(ContainerDevicesOutputReference.prototype, "permissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerDevicesOutputReference;
}(cdktf.ComplexObject));
exports.ContainerDevicesOutputReference = ContainerDevicesOutputReference;
var ContainerDevicesList = /** @class */ (function (_super) {
    __extends(ContainerDevicesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerDevicesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerDevicesList.prototype.get = function (index) {
        return new ContainerDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerDevicesList;
}(cdktf.ComplexList));
exports.ContainerDevicesList = ContainerDevicesList;
function containerHealthcheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        interval: cdktf.stringToTerraform(struct.interval),
        retries: cdktf.numberToTerraform(struct.retries),
        start_interval: cdktf.stringToTerraform(struct.startInterval),
        start_period: cdktf.stringToTerraform(struct.startPeriod),
        test: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.test),
        timeout: cdktf.stringToTerraform(struct.timeout),
    };
}
function containerHealthcheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        interval: {
            value: cdktf.stringToHclTerraform(struct.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retries: {
            value: cdktf.numberToHclTerraform(struct.retries),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_interval: {
            value: cdktf.stringToHclTerraform(struct.startInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_period: {
            value: cdktf.stringToHclTerraform(struct.startPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        test: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.test),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        timeout: {
            value: cdktf.stringToHclTerraform(struct.timeout),
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
var ContainerHealthcheckOutputReference = /** @class */ (function (_super) {
    __extends(ContainerHealthcheckOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ContainerHealthcheckOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._interval !== undefined) {
                hasAnyValues = true;
                internalValueResult.interval = this._interval;
            }
            if (this._retries !== undefined) {
                hasAnyValues = true;
                internalValueResult.retries = this._retries;
            }
            if (this._startInterval !== undefined) {
                hasAnyValues = true;
                internalValueResult.startInterval = this._startInterval;
            }
            if (this._startPeriod !== undefined) {
                hasAnyValues = true;
                internalValueResult.startPeriod = this._startPeriod;
            }
            if (this._test !== undefined) {
                hasAnyValues = true;
                internalValueResult.test = this._test;
            }
            if (this._timeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.timeout = this._timeout;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._interval = undefined;
                this._retries = undefined;
                this._startInterval = undefined;
                this._startPeriod = undefined;
                this._test = undefined;
                this._timeout = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._interval = value.interval;
                this._retries = value.retries;
                this._startInterval = value.startInterval;
                this._startPeriod = value.startPeriod;
                this._test = value.test;
                this._timeout = value.timeout;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "interval", {
        get: function () {
            return this.getStringAttribute('interval');
        },
        set: function (value) {
            this._interval = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerHealthcheckOutputReference.prototype.resetInterval = function () {
        this._interval = undefined;
    };
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "intervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "retries", {
        get: function () {
            return this.getNumberAttribute('retries');
        },
        set: function (value) {
            this._retries = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerHealthcheckOutputReference.prototype.resetRetries = function () {
        this._retries = undefined;
    };
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "retriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "startInterval", {
        get: function () {
            return this.getStringAttribute('start_interval');
        },
        set: function (value) {
            this._startInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerHealthcheckOutputReference.prototype.resetStartInterval = function () {
        this._startInterval = undefined;
    };
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "startIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "startPeriod", {
        get: function () {
            return this.getStringAttribute('start_period');
        },
        set: function (value) {
            this._startPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerHealthcheckOutputReference.prototype.resetStartPeriod = function () {
        this._startPeriod = undefined;
    };
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "startPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "test", {
        get: function () {
            return this.getListAttribute('test');
        },
        set: function (value) {
            this._test = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerHealthcheckOutputReference.prototype.resetTest = function () {
        this._test = undefined;
    };
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "testInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._test;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "timeout", {
        get: function () {
            return this.getStringAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerHealthcheckOutputReference.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(ContainerHealthcheckOutputReference.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerHealthcheckOutputReference;
}(cdktf.ComplexObject));
exports.ContainerHealthcheckOutputReference = ContainerHealthcheckOutputReference;
function containerHostToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        ip: cdktf.stringToTerraform(struct.ip),
    };
}
function containerHostToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
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
var ContainerHostOutputReference = /** @class */ (function (_super) {
    __extends(ContainerHostOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerHostOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerHostOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._ip !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = this._ip;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._host = undefined;
                this._ip = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._host = value.host;
                this._ip = value.ip;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerHostOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerHostOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerHostOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerHostOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerHostOutputReference;
}(cdktf.ComplexObject));
exports.ContainerHostOutputReference = ContainerHostOutputReference;
var ContainerHostList = /** @class */ (function (_super) {
    __extends(ContainerHostList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerHostList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerHostList.prototype.get = function (index) {
        return new ContainerHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerHostList;
}(cdktf.ComplexList));
exports.ContainerHostList = ContainerHostList;
function containerLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function containerLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var ContainerLabelsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerLabelsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerLabelsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerLabelsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._label !== undefined) {
                hasAnyValues = true;
                internalValueResult.label = this._label;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._label = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._label = value.label;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerLabelsOutputReference.prototype, "label", {
        get: function () {
            return this.getStringAttribute('label');
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerLabelsOutputReference.prototype, "labelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerLabelsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerLabelsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerLabelsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerLabelsOutputReference = ContainerLabelsOutputReference;
var ContainerLabelsList = /** @class */ (function (_super) {
    __extends(ContainerLabelsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerLabelsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerLabelsList.prototype.get = function (index) {
        return new ContainerLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerLabelsList;
}(cdktf.ComplexList));
exports.ContainerLabelsList = ContainerLabelsList;
function containerMountsBindOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        propagation: cdktf.stringToTerraform(struct.propagation),
    };
}
function containerMountsBindOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        propagation: {
            value: cdktf.stringToHclTerraform(struct.propagation),
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
var ContainerMountsBindOptionsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerMountsBindOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ContainerMountsBindOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerMountsBindOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._propagation !== undefined) {
                hasAnyValues = true;
                internalValueResult.propagation = this._propagation;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._propagation = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._propagation = value.propagation;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsBindOptionsOutputReference.prototype, "propagation", {
        get: function () {
            return this.getStringAttribute('propagation');
        },
        set: function (value) {
            this._propagation = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsBindOptionsOutputReference.prototype.resetPropagation = function () {
        this._propagation = undefined;
    };
    Object.defineProperty(ContainerMountsBindOptionsOutputReference.prototype, "propagationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._propagation;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerMountsBindOptionsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerMountsBindOptionsOutputReference = ContainerMountsBindOptionsOutputReference;
function containerMountsTmpfsOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.numberToTerraform(struct.mode),
        size_bytes: cdktf.numberToTerraform(struct.sizeBytes),
    };
}
function containerMountsTmpfsOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        mode: {
            value: cdktf.numberToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        size_bytes: {
            value: cdktf.numberToHclTerraform(struct.sizeBytes),
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
}
var ContainerMountsTmpfsOptionsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerMountsTmpfsOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ContainerMountsTmpfsOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerMountsTmpfsOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mode !== undefined) {
                hasAnyValues = true;
                internalValueResult.mode = this._mode;
            }
            if (this._sizeBytes !== undefined) {
                hasAnyValues = true;
                internalValueResult.sizeBytes = this._sizeBytes;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._mode = undefined;
                this._sizeBytes = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._mode = value.mode;
                this._sizeBytes = value.sizeBytes;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsTmpfsOptionsOutputReference.prototype, "mode", {
        get: function () {
            return this.getNumberAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsTmpfsOptionsOutputReference.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(ContainerMountsTmpfsOptionsOutputReference.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsTmpfsOptionsOutputReference.prototype, "sizeBytes", {
        get: function () {
            return this.getNumberAttribute('size_bytes');
        },
        set: function (value) {
            this._sizeBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsTmpfsOptionsOutputReference.prototype.resetSizeBytes = function () {
        this._sizeBytes = undefined;
    };
    Object.defineProperty(ContainerMountsTmpfsOptionsOutputReference.prototype, "sizeBytesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sizeBytes;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerMountsTmpfsOptionsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerMountsTmpfsOptionsOutputReference = ContainerMountsTmpfsOptionsOutputReference;
function containerMountsVolumeOptionsLabelsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        label: cdktf.stringToTerraform(struct.label),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function containerMountsVolumeOptionsLabelsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        label: {
            value: cdktf.stringToHclTerraform(struct.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var ContainerMountsVolumeOptionsLabelsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerMountsVolumeOptionsLabelsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerMountsVolumeOptionsLabelsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerMountsVolumeOptionsLabelsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._label !== undefined) {
                hasAnyValues = true;
                internalValueResult.label = this._label;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._label = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._label = value.label;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsVolumeOptionsLabelsOutputReference.prototype, "label", {
        get: function () {
            return this.getStringAttribute('label');
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsVolumeOptionsLabelsOutputReference.prototype, "labelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsVolumeOptionsLabelsOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsVolumeOptionsLabelsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerMountsVolumeOptionsLabelsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerMountsVolumeOptionsLabelsOutputReference = ContainerMountsVolumeOptionsLabelsOutputReference;
var ContainerMountsVolumeOptionsLabelsList = /** @class */ (function (_super) {
    __extends(ContainerMountsVolumeOptionsLabelsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerMountsVolumeOptionsLabelsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerMountsVolumeOptionsLabelsList.prototype.get = function (index) {
        return new ContainerMountsVolumeOptionsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerMountsVolumeOptionsLabelsList;
}(cdktf.ComplexList));
exports.ContainerMountsVolumeOptionsLabelsList = ContainerMountsVolumeOptionsLabelsList;
function containerMountsVolumeOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        driver_name: cdktf.stringToTerraform(struct.driverName),
        driver_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct.driverOptions),
        no_copy: cdktf.booleanToTerraform(struct.noCopy),
        subpath: cdktf.stringToTerraform(struct.subpath),
        labels: cdktf.listMapper(containerMountsVolumeOptionsLabelsToTerraform, true)(struct.labels),
    };
}
function containerMountsVolumeOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        driver_name: {
            value: cdktf.stringToHclTerraform(struct.driverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        driver_options: {
            value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct.driverOptions),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        no_copy: {
            value: cdktf.booleanToHclTerraform(struct.noCopy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        subpath: {
            value: cdktf.stringToHclTerraform(struct.subpath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        labels: {
            value: cdktf.listMapperHcl(containerMountsVolumeOptionsLabelsToHclTerraform, true)(struct.labels),
            isBlock: true,
            type: "set",
            storageClassType: "ContainerMountsVolumeOptionsLabelsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ContainerMountsVolumeOptionsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerMountsVolumeOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ContainerMountsVolumeOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // labels - computed: false, optional: true, required: false
        _this._labels = new ContainerMountsVolumeOptionsLabelsList(_this, "labels", true);
        return _this;
    }
    Object.defineProperty(ContainerMountsVolumeOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._driverName !== undefined) {
                hasAnyValues = true;
                internalValueResult.driverName = this._driverName;
            }
            if (this._driverOptions !== undefined) {
                hasAnyValues = true;
                internalValueResult.driverOptions = this._driverOptions;
            }
            if (this._noCopy !== undefined) {
                hasAnyValues = true;
                internalValueResult.noCopy = this._noCopy;
            }
            if (this._subpath !== undefined) {
                hasAnyValues = true;
                internalValueResult.subpath = this._subpath;
            }
            if (((_a = this._labels) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.labels = (_b = this._labels) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._driverName = undefined;
                this._driverOptions = undefined;
                this._noCopy = undefined;
                this._subpath = undefined;
                this._labels.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._driverName = value.driverName;
                this._driverOptions = value.driverOptions;
                this._noCopy = value.noCopy;
                this._subpath = value.subpath;
                this._labels.internalValue = value.labels;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsVolumeOptionsOutputReference.prototype, "driverName", {
        get: function () {
            return this.getStringAttribute('driver_name');
        },
        set: function (value) {
            this._driverName = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsVolumeOptionsOutputReference.prototype.resetDriverName = function () {
        this._driverName = undefined;
    };
    Object.defineProperty(ContainerMountsVolumeOptionsOutputReference.prototype, "driverNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driverName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsVolumeOptionsOutputReference.prototype, "driverOptions", {
        get: function () {
            return this.getStringMapAttribute('driver_options');
        },
        set: function (value) {
            this._driverOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsVolumeOptionsOutputReference.prototype.resetDriverOptions = function () {
        this._driverOptions = undefined;
    };
    Object.defineProperty(ContainerMountsVolumeOptionsOutputReference.prototype, "driverOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driverOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsVolumeOptionsOutputReference.prototype, "noCopy", {
        get: function () {
            return this.getBooleanAttribute('no_copy');
        },
        set: function (value) {
            this._noCopy = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsVolumeOptionsOutputReference.prototype.resetNoCopy = function () {
        this._noCopy = undefined;
    };
    Object.defineProperty(ContainerMountsVolumeOptionsOutputReference.prototype, "noCopyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._noCopy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsVolumeOptionsOutputReference.prototype, "subpath", {
        get: function () {
            return this.getStringAttribute('subpath');
        },
        set: function (value) {
            this._subpath = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsVolumeOptionsOutputReference.prototype.resetSubpath = function () {
        this._subpath = undefined;
    };
    Object.defineProperty(ContainerMountsVolumeOptionsOutputReference.prototype, "subpathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subpath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsVolumeOptionsOutputReference.prototype, "labels", {
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsVolumeOptionsOutputReference.prototype.putLabels = function (value) {
        this._labels.internalValue = value;
    };
    ContainerMountsVolumeOptionsOutputReference.prototype.resetLabels = function () {
        this._labels.internalValue = undefined;
    };
    Object.defineProperty(ContainerMountsVolumeOptionsOutputReference.prototype, "labelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._labels.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerMountsVolumeOptionsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerMountsVolumeOptionsOutputReference = ContainerMountsVolumeOptionsOutputReference;
function containerMountsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        source: cdktf.stringToTerraform(struct.source),
        target: cdktf.stringToTerraform(struct.target),
        type: cdktf.stringToTerraform(struct.type),
        bind_options: containerMountsBindOptionsToTerraform(struct.bindOptions),
        tmpfs_options: containerMountsTmpfsOptionsToTerraform(struct.tmpfsOptions),
        volume_options: containerMountsVolumeOptionsToTerraform(struct.volumeOptions),
    };
}
function containerMountsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        read_only: {
            value: cdktf.booleanToHclTerraform(struct.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bind_options: {
            value: containerMountsBindOptionsToHclTerraform(struct.bindOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ContainerMountsBindOptionsList",
        },
        tmpfs_options: {
            value: containerMountsTmpfsOptionsToHclTerraform(struct.tmpfsOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ContainerMountsTmpfsOptionsList",
        },
        volume_options: {
            value: containerMountsVolumeOptionsToHclTerraform(struct.volumeOptions),
            isBlock: true,
            type: "list",
            storageClassType: "ContainerMountsVolumeOptionsList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ContainerMountsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerMountsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerMountsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // bind_options - computed: false, optional: true, required: false
        _this._bindOptions = new ContainerMountsBindOptionsOutputReference(_this, "bind_options");
        // tmpfs_options - computed: false, optional: true, required: false
        _this._tmpfsOptions = new ContainerMountsTmpfsOptionsOutputReference(_this, "tmpfs_options");
        // volume_options - computed: false, optional: true, required: false
        _this._volumeOptions = new ContainerMountsVolumeOptionsOutputReference(_this, "volume_options");
        return _this;
    }
    Object.defineProperty(ContainerMountsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._readOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.readOnly = this._readOnly;
            }
            if (this._source !== undefined) {
                hasAnyValues = true;
                internalValueResult.source = this._source;
            }
            if (this._target !== undefined) {
                hasAnyValues = true;
                internalValueResult.target = this._target;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            if (((_a = this._bindOptions) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.bindOptions = (_b = this._bindOptions) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._tmpfsOptions) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.tmpfsOptions = (_d = this._tmpfsOptions) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._volumeOptions) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.volumeOptions = (_f = this._volumeOptions) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._readOnly = undefined;
                this._source = undefined;
                this._target = undefined;
                this._type = undefined;
                this._bindOptions.internalValue = undefined;
                this._tmpfsOptions.internalValue = undefined;
                this._volumeOptions.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._readOnly = value.readOnly;
                this._source = value.source;
                this._target = value.target;
                this._type = value.type;
                this._bindOptions.internalValue = value.bindOptions;
                this._tmpfsOptions.internalValue = value.tmpfsOptions;
                this._volumeOptions.internalValue = value.volumeOptions;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsOutputReference.prototype, "readOnly", {
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        set: function (value) {
            this._readOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsOutputReference.prototype.resetReadOnly = function () {
        this._readOnly = undefined;
    };
    Object.defineProperty(ContainerMountsOutputReference.prototype, "readOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsOutputReference.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsOutputReference.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(ContainerMountsOutputReference.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsOutputReference.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsOutputReference.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsOutputReference.prototype, "bindOptions", {
        get: function () {
            return this._bindOptions;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsOutputReference.prototype.putBindOptions = function (value) {
        this._bindOptions.internalValue = value;
    };
    ContainerMountsOutputReference.prototype.resetBindOptions = function () {
        this._bindOptions.internalValue = undefined;
    };
    Object.defineProperty(ContainerMountsOutputReference.prototype, "bindOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bindOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsOutputReference.prototype, "tmpfsOptions", {
        get: function () {
            return this._tmpfsOptions;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsOutputReference.prototype.putTmpfsOptions = function (value) {
        this._tmpfsOptions.internalValue = value;
    };
    ContainerMountsOutputReference.prototype.resetTmpfsOptions = function () {
        this._tmpfsOptions.internalValue = undefined;
    };
    Object.defineProperty(ContainerMountsOutputReference.prototype, "tmpfsOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tmpfsOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerMountsOutputReference.prototype, "volumeOptions", {
        get: function () {
            return this._volumeOptions;
        },
        enumerable: false,
        configurable: true
    });
    ContainerMountsOutputReference.prototype.putVolumeOptions = function (value) {
        this._volumeOptions.internalValue = value;
    };
    ContainerMountsOutputReference.prototype.resetVolumeOptions = function () {
        this._volumeOptions.internalValue = undefined;
    };
    Object.defineProperty(ContainerMountsOutputReference.prototype, "volumeOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volumeOptions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerMountsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerMountsOutputReference = ContainerMountsOutputReference;
var ContainerMountsList = /** @class */ (function (_super) {
    __extends(ContainerMountsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerMountsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerMountsList.prototype.get = function (index) {
        return new ContainerMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerMountsList;
}(cdktf.ComplexList));
exports.ContainerMountsList = ContainerMountsList;
function containerNetworksAdvancedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.aliases),
        driver_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.driverOpts),
        gw_priority: cdktf.numberToTerraform(struct.gwPriority),
        ipv4_address: cdktf.stringToTerraform(struct.ipv4Address),
        ipv6_address: cdktf.stringToTerraform(struct.ipv6Address),
        link_local_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.linkLocalIps),
        mac_address: cdktf.stringToTerraform(struct.macAddress),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function containerNetworksAdvancedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        aliases: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.aliases),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        driver_opts: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.driverOpts),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        gw_priority: {
            value: cdktf.numberToHclTerraform(struct.gwPriority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ipv4_address: {
            value: cdktf.stringToHclTerraform(struct.ipv4Address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv6_address: {
            value: cdktf.stringToHclTerraform(struct.ipv6Address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        link_local_ips: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.linkLocalIps),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        mac_address: {
            value: cdktf.stringToHclTerraform(struct.macAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
var ContainerNetworksAdvancedOutputReference = /** @class */ (function (_super) {
    __extends(ContainerNetworksAdvancedOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerNetworksAdvancedOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._aliases !== undefined) {
                hasAnyValues = true;
                internalValueResult.aliases = this._aliases;
            }
            if (this._driverOpts !== undefined) {
                hasAnyValues = true;
                internalValueResult.driverOpts = this._driverOpts;
            }
            if (this._gwPriority !== undefined) {
                hasAnyValues = true;
                internalValueResult.gwPriority = this._gwPriority;
            }
            if (this._ipv4Address !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv4Address = this._ipv4Address;
            }
            if (this._ipv6Address !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv6Address = this._ipv6Address;
            }
            if (this._linkLocalIps !== undefined) {
                hasAnyValues = true;
                internalValueResult.linkLocalIps = this._linkLocalIps;
            }
            if (this._macAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.macAddress = this._macAddress;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._aliases = undefined;
                this._driverOpts = undefined;
                this._gwPriority = undefined;
                this._ipv4Address = undefined;
                this._ipv6Address = undefined;
                this._linkLocalIps = undefined;
                this._macAddress = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._aliases = value.aliases;
                this._driverOpts = value.driverOpts;
                this._gwPriority = value.gwPriority;
                this._ipv4Address = value.ipv4Address;
                this._ipv6Address = value.ipv6Address;
                this._linkLocalIps = value.linkLocalIps;
                this._macAddress = value.macAddress;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "aliases", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('aliases'));
        },
        set: function (value) {
            this._aliases = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerNetworksAdvancedOutputReference.prototype.resetAliases = function () {
        this._aliases = undefined;
    };
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "aliasesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aliases;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "driverOpts", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('driver_opts'));
        },
        set: function (value) {
            this._driverOpts = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerNetworksAdvancedOutputReference.prototype.resetDriverOpts = function () {
        this._driverOpts = undefined;
    };
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "driverOptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driverOpts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "gwPriority", {
        get: function () {
            return this.getNumberAttribute('gw_priority');
        },
        set: function (value) {
            this._gwPriority = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerNetworksAdvancedOutputReference.prototype.resetGwPriority = function () {
        this._gwPriority = undefined;
    };
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "gwPriorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gwPriority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "ipv4Address", {
        get: function () {
            return this.getStringAttribute('ipv4_address');
        },
        set: function (value) {
            this._ipv4Address = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerNetworksAdvancedOutputReference.prototype.resetIpv4Address = function () {
        this._ipv4Address = undefined;
    };
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "ipv4AddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4Address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "ipv6Address", {
        get: function () {
            return this.getStringAttribute('ipv6_address');
        },
        set: function (value) {
            this._ipv6Address = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerNetworksAdvancedOutputReference.prototype.resetIpv6Address = function () {
        this._ipv6Address = undefined;
    };
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "ipv6AddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6Address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "linkLocalIps", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('link_local_ips'));
        },
        set: function (value) {
            this._linkLocalIps = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerNetworksAdvancedOutputReference.prototype.resetLinkLocalIps = function () {
        this._linkLocalIps = undefined;
    };
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "linkLocalIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._linkLocalIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "macAddress", {
        get: function () {
            return this.getStringAttribute('mac_address');
        },
        set: function (value) {
            this._macAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerNetworksAdvancedOutputReference.prototype.resetMacAddress = function () {
        this._macAddress = undefined;
    };
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "macAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._macAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerNetworksAdvancedOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerNetworksAdvancedOutputReference;
}(cdktf.ComplexObject));
exports.ContainerNetworksAdvancedOutputReference = ContainerNetworksAdvancedOutputReference;
var ContainerNetworksAdvancedList = /** @class */ (function (_super) {
    __extends(ContainerNetworksAdvancedList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerNetworksAdvancedList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerNetworksAdvancedList.prototype.get = function (index) {
        return new ContainerNetworksAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerNetworksAdvancedList;
}(cdktf.ComplexList));
exports.ContainerNetworksAdvancedList = ContainerNetworksAdvancedList;
function containerPortsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        external: cdktf.numberToTerraform(struct.external),
        internal: cdktf.numberToTerraform(struct.internal),
        ip: cdktf.stringToTerraform(struct.ip),
        protocol: cdktf.stringToTerraform(struct.protocol),
    };
}
function containerPortsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        external: {
            value: cdktf.numberToHclTerraform(struct.external),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        internal: {
            value: cdktf.numberToHclTerraform(struct.internal),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ip: {
            value: cdktf.stringToHclTerraform(struct.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktf.stringToHclTerraform(struct.protocol),
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
var ContainerPortsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerPortsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerPortsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerPortsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._external !== undefined) {
                hasAnyValues = true;
                internalValueResult.external = this._external;
            }
            if (this._internal !== undefined) {
                hasAnyValues = true;
                internalValueResult.internal = this._internal;
            }
            if (this._ip !== undefined) {
                hasAnyValues = true;
                internalValueResult.ip = this._ip;
            }
            if (this._protocol !== undefined) {
                hasAnyValues = true;
                internalValueResult.protocol = this._protocol;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._external = undefined;
                this._internal = undefined;
                this._ip = undefined;
                this._protocol = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._external = value.external;
                this._internal = value.internal;
                this._ip = value.ip;
                this._protocol = value.protocol;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerPortsOutputReference.prototype, "external", {
        get: function () {
            return this.getNumberAttribute('external');
        },
        set: function (value) {
            this._external = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerPortsOutputReference.prototype.resetExternal = function () {
        this._external = undefined;
    };
    Object.defineProperty(ContainerPortsOutputReference.prototype, "externalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._external;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerPortsOutputReference.prototype, "internal", {
        get: function () {
            return this.getNumberAttribute('internal');
        },
        set: function (value) {
            this._internal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerPortsOutputReference.prototype, "internalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._internal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerPortsOutputReference.prototype, "ip", {
        get: function () {
            return this.getStringAttribute('ip');
        },
        set: function (value) {
            this._ip = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerPortsOutputReference.prototype.resetIp = function () {
        this._ip = undefined;
    };
    Object.defineProperty(ContainerPortsOutputReference.prototype, "ipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerPortsOutputReference.prototype, "protocol", {
        get: function () {
            return this.getStringAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerPortsOutputReference.prototype.resetProtocol = function () {
        this._protocol = undefined;
    };
    Object.defineProperty(ContainerPortsOutputReference.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerPortsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerPortsOutputReference = ContainerPortsOutputReference;
var ContainerPortsList = /** @class */ (function (_super) {
    __extends(ContainerPortsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerPortsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerPortsList.prototype.get = function (index) {
        return new ContainerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerPortsList;
}(cdktf.ComplexList));
exports.ContainerPortsList = ContainerPortsList;
function containerTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
function containerTimeoutsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        create: {
            value: cdktf.stringToHclTerraform(struct.create),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delete: {
            value: cdktf.stringToHclTerraform(struct.delete),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update: {
            value: cdktf.stringToHclTerraform(struct.update),
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
var ContainerTimeoutsOutputReference = /** @class */ (function (_super) {
    __extends(ContainerTimeoutsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ContainerTimeoutsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerTimeoutsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._create !== undefined) {
                hasAnyValues = true;
                internalValueResult.create = this._create;
            }
            if (this._delete !== undefined) {
                hasAnyValues = true;
                internalValueResult.delete = this._delete;
            }
            if (this._update !== undefined) {
                hasAnyValues = true;
                internalValueResult.update = this._update;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._create = undefined;
                this._delete = undefined;
                this._update = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._create = value.create;
                this._delete = value.delete;
                this._update = value.update;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerTimeoutsOutputReference.prototype, "create", {
        get: function () {
            return this.getStringAttribute('create');
        },
        set: function (value) {
            this._create = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerTimeoutsOutputReference.prototype.resetCreate = function () {
        this._create = undefined;
    };
    Object.defineProperty(ContainerTimeoutsOutputReference.prototype, "createInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._create;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerTimeoutsOutputReference.prototype, "delete", {
        get: function () {
            return this.getStringAttribute('delete');
        },
        set: function (value) {
            this._delete = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerTimeoutsOutputReference.prototype.resetDelete = function () {
        this._delete = undefined;
    };
    Object.defineProperty(ContainerTimeoutsOutputReference.prototype, "deleteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._delete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerTimeoutsOutputReference.prototype, "update", {
        get: function () {
            return this.getStringAttribute('update');
        },
        set: function (value) {
            this._update = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerTimeoutsOutputReference.prototype.resetUpdate = function () {
        this._update = undefined;
    };
    Object.defineProperty(ContainerTimeoutsOutputReference.prototype, "updateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._update;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerTimeoutsOutputReference;
}(cdktf.ComplexObject));
exports.ContainerTimeoutsOutputReference = ContainerTimeoutsOutputReference;
function containerUlimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hard: cdktf.numberToTerraform(struct.hard),
        name: cdktf.stringToTerraform(struct.name),
        soft: cdktf.numberToTerraform(struct.soft),
    };
}
function containerUlimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        hard: {
            value: cdktf.numberToHclTerraform(struct.hard),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        soft: {
            value: cdktf.numberToHclTerraform(struct.soft),
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
}
var ContainerUlimitOutputReference = /** @class */ (function (_super) {
    __extends(ContainerUlimitOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerUlimitOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerUlimitOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._hard !== undefined) {
                hasAnyValues = true;
                internalValueResult.hard = this._hard;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._soft !== undefined) {
                hasAnyValues = true;
                internalValueResult.soft = this._soft;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._hard = undefined;
                this._name = undefined;
                this._soft = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._hard = value.hard;
                this._name = value.name;
                this._soft = value.soft;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUlimitOutputReference.prototype, "hard", {
        get: function () {
            return this.getNumberAttribute('hard');
        },
        set: function (value) {
            this._hard = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUlimitOutputReference.prototype, "hardInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUlimitOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUlimitOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUlimitOutputReference.prototype, "soft", {
        get: function () {
            return this.getNumberAttribute('soft');
        },
        set: function (value) {
            this._soft = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUlimitOutputReference.prototype, "softInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._soft;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerUlimitOutputReference;
}(cdktf.ComplexObject));
exports.ContainerUlimitOutputReference = ContainerUlimitOutputReference;
var ContainerUlimitList = /** @class */ (function (_super) {
    __extends(ContainerUlimitList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerUlimitList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerUlimitList.prototype.get = function (index) {
        return new ContainerUlimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerUlimitList;
}(cdktf.ComplexList));
exports.ContainerUlimitList = ContainerUlimitList;
function containerUploadToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_base64: cdktf.stringToTerraform(struct.contentBase64),
        executable: cdktf.booleanToTerraform(struct.executable),
        file: cdktf.stringToTerraform(struct.file),
        permissions: cdktf.stringToTerraform(struct.permissions),
        source: cdktf.stringToTerraform(struct.source),
        source_hash: cdktf.stringToTerraform(struct.sourceHash),
    };
}
function containerUploadToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        content: {
            value: cdktf.stringToHclTerraform(struct.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_base64: {
            value: cdktf.stringToHclTerraform(struct.contentBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        executable: {
            value: cdktf.booleanToHclTerraform(struct.executable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        file: {
            value: cdktf.stringToHclTerraform(struct.file),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permissions: {
            value: cdktf.stringToHclTerraform(struct.permissions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_hash: {
            value: cdktf.stringToHclTerraform(struct.sourceHash),
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
var ContainerUploadOutputReference = /** @class */ (function (_super) {
    __extends(ContainerUploadOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerUploadOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerUploadOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._content !== undefined) {
                hasAnyValues = true;
                internalValueResult.content = this._content;
            }
            if (this._contentBase64 !== undefined) {
                hasAnyValues = true;
                internalValueResult.contentBase64 = this._contentBase64;
            }
            if (this._executable !== undefined) {
                hasAnyValues = true;
                internalValueResult.executable = this._executable;
            }
            if (this._file !== undefined) {
                hasAnyValues = true;
                internalValueResult.file = this._file;
            }
            if (this._permissions !== undefined) {
                hasAnyValues = true;
                internalValueResult.permissions = this._permissions;
            }
            if (this._source !== undefined) {
                hasAnyValues = true;
                internalValueResult.source = this._source;
            }
            if (this._sourceHash !== undefined) {
                hasAnyValues = true;
                internalValueResult.sourceHash = this._sourceHash;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._content = undefined;
                this._contentBase64 = undefined;
                this._executable = undefined;
                this._file = undefined;
                this._permissions = undefined;
                this._source = undefined;
                this._sourceHash = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._content = value.content;
                this._contentBase64 = value.contentBase64;
                this._executable = value.executable;
                this._file = value.file;
                this._permissions = value.permissions;
                this._source = value.source;
                this._sourceHash = value.sourceHash;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUploadOutputReference.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerUploadOutputReference.prototype.resetContent = function () {
        this._content = undefined;
    };
    Object.defineProperty(ContainerUploadOutputReference.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUploadOutputReference.prototype, "contentBase64", {
        get: function () {
            return this.getStringAttribute('content_base64');
        },
        set: function (value) {
            this._contentBase64 = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerUploadOutputReference.prototype.resetContentBase64 = function () {
        this._contentBase64 = undefined;
    };
    Object.defineProperty(ContainerUploadOutputReference.prototype, "contentBase64Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentBase64;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUploadOutputReference.prototype, "executable", {
        get: function () {
            return this.getBooleanAttribute('executable');
        },
        set: function (value) {
            this._executable = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerUploadOutputReference.prototype.resetExecutable = function () {
        this._executable = undefined;
    };
    Object.defineProperty(ContainerUploadOutputReference.prototype, "executableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUploadOutputReference.prototype, "file", {
        get: function () {
            return this.getStringAttribute('file');
        },
        set: function (value) {
            this._file = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUploadOutputReference.prototype, "fileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._file;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUploadOutputReference.prototype, "permissions", {
        get: function () {
            return this.getStringAttribute('permissions');
        },
        set: function (value) {
            this._permissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerUploadOutputReference.prototype.resetPermissions = function () {
        this._permissions = undefined;
    };
    Object.defineProperty(ContainerUploadOutputReference.prototype, "permissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUploadOutputReference.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerUploadOutputReference.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(ContainerUploadOutputReference.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerUploadOutputReference.prototype, "sourceHash", {
        get: function () {
            return this.getStringAttribute('source_hash');
        },
        set: function (value) {
            this._sourceHash = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerUploadOutputReference.prototype.resetSourceHash = function () {
        this._sourceHash = undefined;
    };
    Object.defineProperty(ContainerUploadOutputReference.prototype, "sourceHashInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceHash;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerUploadOutputReference;
}(cdktf.ComplexObject));
exports.ContainerUploadOutputReference = ContainerUploadOutputReference;
var ContainerUploadList = /** @class */ (function (_super) {
    __extends(ContainerUploadList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerUploadList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerUploadList.prototype.get = function (index) {
        return new ContainerUploadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerUploadList;
}(cdktf.ComplexList));
exports.ContainerUploadList = ContainerUploadList;
function containerVolumesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        container_path: cdktf.stringToTerraform(struct.containerPath),
        from_container: cdktf.stringToTerraform(struct.fromContainer),
        host_path: cdktf.stringToTerraform(struct.hostPath),
        read_only: cdktf.booleanToTerraform(struct.readOnly),
        selinux_relabel: cdktf.stringToTerraform(struct.selinuxRelabel),
        volume_name: cdktf.stringToTerraform(struct.volumeName),
    };
}
function containerVolumesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        container_path: {
            value: cdktf.stringToHclTerraform(struct.containerPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from_container: {
            value: cdktf.stringToHclTerraform(struct.fromContainer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_path: {
            value: cdktf.stringToHclTerraform(struct.hostPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        read_only: {
            value: cdktf.booleanToHclTerraform(struct.readOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        selinux_relabel: {
            value: cdktf.stringToHclTerraform(struct.selinuxRelabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_name: {
            value: cdktf.stringToHclTerraform(struct.volumeName),
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
var ContainerVolumesOutputReference = /** @class */ (function (_super) {
    __extends(ContainerVolumesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerVolumesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._containerPath !== undefined) {
                hasAnyValues = true;
                internalValueResult.containerPath = this._containerPath;
            }
            if (this._fromContainer !== undefined) {
                hasAnyValues = true;
                internalValueResult.fromContainer = this._fromContainer;
            }
            if (this._hostPath !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostPath = this._hostPath;
            }
            if (this._readOnly !== undefined) {
                hasAnyValues = true;
                internalValueResult.readOnly = this._readOnly;
            }
            if (this._selinuxRelabel !== undefined) {
                hasAnyValues = true;
                internalValueResult.selinuxRelabel = this._selinuxRelabel;
            }
            if (this._volumeName !== undefined) {
                hasAnyValues = true;
                internalValueResult.volumeName = this._volumeName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._containerPath = undefined;
                this._fromContainer = undefined;
                this._hostPath = undefined;
                this._readOnly = undefined;
                this._selinuxRelabel = undefined;
                this._volumeName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._containerPath = value.containerPath;
                this._fromContainer = value.fromContainer;
                this._hostPath = value.hostPath;
                this._readOnly = value.readOnly;
                this._selinuxRelabel = value.selinuxRelabel;
                this._volumeName = value.volumeName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "containerPath", {
        get: function () {
            return this.getStringAttribute('container_path');
        },
        set: function (value) {
            this._containerPath = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerVolumesOutputReference.prototype.resetContainerPath = function () {
        this._containerPath = undefined;
    };
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "containerPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._containerPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "fromContainer", {
        get: function () {
            return this.getStringAttribute('from_container');
        },
        set: function (value) {
            this._fromContainer = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerVolumesOutputReference.prototype.resetFromContainer = function () {
        this._fromContainer = undefined;
    };
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "fromContainerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fromContainer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "hostPath", {
        get: function () {
            return this.getStringAttribute('host_path');
        },
        set: function (value) {
            this._hostPath = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerVolumesOutputReference.prototype.resetHostPath = function () {
        this._hostPath = undefined;
    };
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "hostPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "readOnly", {
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        set: function (value) {
            this._readOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerVolumesOutputReference.prototype.resetReadOnly = function () {
        this._readOnly = undefined;
    };
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "readOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "selinuxRelabel", {
        get: function () {
            return this.getStringAttribute('selinux_relabel');
        },
        set: function (value) {
            this._selinuxRelabel = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerVolumesOutputReference.prototype.resetSelinuxRelabel = function () {
        this._selinuxRelabel = undefined;
    };
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "selinuxRelabelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selinuxRelabel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "volumeName", {
        get: function () {
            return this.getStringAttribute('volume_name');
        },
        set: function (value) {
            this._volumeName = value;
        },
        enumerable: false,
        configurable: true
    });
    ContainerVolumesOutputReference.prototype.resetVolumeName = function () {
        this._volumeName = undefined;
    };
    Object.defineProperty(ContainerVolumesOutputReference.prototype, "volumeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volumeName;
        },
        enumerable: false,
        configurable: true
    });
    return ContainerVolumesOutputReference;
}(cdktf.ComplexObject));
exports.ContainerVolumesOutputReference = ContainerVolumesOutputReference;
var ContainerVolumesList = /** @class */ (function (_super) {
    __extends(ContainerVolumesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContainerVolumesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContainerVolumesList.prototype.get = function (index) {
        return new ContainerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContainerVolumesList;
}(cdktf.ComplexList));
exports.ContainerVolumesList = ContainerVolumesList;
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container docker_container}
*/
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container docker_container} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ContainerConfig
    */
    function Container(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_container',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // network_data - computed: true, optional: false, required: false
        _this._networkData = new ContainerNetworkDataList(_this, "network_data", false);
        // capabilities - computed: false, optional: true, required: false
        _this._capabilities = new ContainerCapabilitiesOutputReference(_this, "capabilities");
        // device_read_bps - computed: false, optional: true, required: false
        _this._deviceReadBps = new ContainerDeviceReadBpsList(_this, "device_read_bps", true);
        // device_read_iops - computed: false, optional: true, required: false
        _this._deviceReadIops = new ContainerDeviceReadIopsList(_this, "device_read_iops", true);
        // device_requests - computed: false, optional: true, required: false
        _this._deviceRequests = new ContainerDeviceRequestsList(_this, "device_requests", true);
        // device_write_bps - computed: false, optional: true, required: false
        _this._deviceWriteBps = new ContainerDeviceWriteBpsList(_this, "device_write_bps", true);
        // device_write_iops - computed: false, optional: true, required: false
        _this._deviceWriteIops = new ContainerDeviceWriteIopsList(_this, "device_write_iops", true);
        // devices - computed: false, optional: true, required: false
        _this._devices = new ContainerDevicesList(_this, "devices", true);
        // healthcheck - computed: false, optional: true, required: false
        _this._healthcheck = new ContainerHealthcheckOutputReference(_this, "healthcheck");
        // host - computed: false, optional: true, required: false
        _this._host = new ContainerHostList(_this, "host", true);
        // labels - computed: false, optional: true, required: false
        _this._labels = new ContainerLabelsList(_this, "labels", true);
        // mounts - computed: false, optional: true, required: false
        _this._mounts = new ContainerMountsList(_this, "mounts", true);
        // networks_advanced - computed: false, optional: true, required: false
        _this._networksAdvanced = new ContainerNetworksAdvancedList(_this, "networks_advanced", true);
        // ports - computed: false, optional: true, required: false
        _this._ports = new ContainerPortsList(_this, "ports", false);
        // timeouts - computed: false, optional: true, required: false
        _this._timeouts = new ContainerTimeoutsOutputReference(_this, "timeouts");
        // ulimit - computed: false, optional: true, required: false
        _this._ulimit = new ContainerUlimitList(_this, "ulimit", true);
        // upload - computed: false, optional: true, required: false
        _this._upload = new ContainerUploadList(_this, "upload", true);
        // volumes - computed: false, optional: true, required: false
        _this._volumes = new ContainerVolumesList(_this, "volumes", true);
        _this._attach = config.attach;
        _this._cgroupParent = config.cgroupParent;
        _this._cgroupnsMode = config.cgroupnsMode;
        _this._command = config.command;
        _this._containerReadRefreshTimeoutMilliseconds = config.containerReadRefreshTimeoutMilliseconds;
        _this._cpuPeriod = config.cpuPeriod;
        _this._cpuQuota = config.cpuQuota;
        _this._cpuSet = config.cpuSet;
        _this._cpuShares = config.cpuShares;
        _this._cpus = config.cpus;
        _this._destroyGraceSeconds = config.destroyGraceSeconds;
        _this._dns = config.dns;
        _this._dnsOpts = config.dnsOpts;
        _this._dnsSearch = config.dnsSearch;
        _this._domainname = config.domainname;
        _this._entrypoint = config.entrypoint;
        _this._env = config.env;
        _this._gpus = config.gpus;
        _this._groupAdd = config.groupAdd;
        _this._hostname = config.hostname;
        _this._id = config.id;
        _this._image = config.image;
        _this._init = config.init;
        _this._ipcMode = config.ipcMode;
        _this._logDriver = config.logDriver;
        _this._logOpts = config.logOpts;
        _this._logs = config.logs;
        _this._maxRetryCount = config.maxRetryCount;
        _this._memory = config.memory;
        _this._memoryReservation = config.memoryReservation;
        _this._memorySwap = config.memorySwap;
        _this._mustRun = config.mustRun;
        _this._name = config.name;
        _this._networkMode = config.networkMode;
        _this._pidMode = config.pidMode;
        _this._platform = config.platform;
        _this._privileged = config.privileged;
        _this._publishAllPorts = config.publishAllPorts;
        _this._readOnly = config.readOnly;
        _this._removeVolumes = config.removeVolumes;
        _this._restart = config.restart;
        _this._rm = config.rm;
        _this._runtime = config.runtime;
        _this._securityOpts = config.securityOpts;
        _this._shmSize = config.shmSize;
        _this._start = config.start;
        _this._stdinOpen = config.stdinOpen;
        _this._stopSignal = config.stopSignal;
        _this._stopTimeout = config.stopTimeout;
        _this._storageOpts = config.storageOpts;
        _this._sysctls = config.sysctls;
        _this._tmpfs = config.tmpfs;
        _this._tty = config.tty;
        _this._user = config.user;
        _this._usernsMode = config.usernsMode;
        _this._wait = config.wait;
        _this._waitTimeout = config.waitTimeout;
        _this._workingDir = config.workingDir;
        _this._capabilities.internalValue = config.capabilities;
        _this._deviceReadBps.internalValue = config.deviceReadBps;
        _this._deviceReadIops.internalValue = config.deviceReadIops;
        _this._deviceRequests.internalValue = config.deviceRequests;
        _this._deviceWriteBps.internalValue = config.deviceWriteBps;
        _this._deviceWriteIops.internalValue = config.deviceWriteIops;
        _this._devices.internalValue = config.devices;
        _this._healthcheck.internalValue = config.healthcheck;
        _this._host.internalValue = config.host;
        _this._labels.internalValue = config.labels;
        _this._mounts.internalValue = config.mounts;
        _this._networksAdvanced.internalValue = config.networksAdvanced;
        _this._ports.internalValue = config.ports;
        _this._timeouts.internalValue = config.timeouts;
        _this._ulimit.internalValue = config.ulimit;
        _this._upload.internalValue = config.upload;
        _this._volumes.internalValue = config.volumes;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Container resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Container to import
    * @param importFromId The id of the existing Container that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/container#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Container to import is found
    */
    Container.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_container", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Container.prototype, "attach", {
        get: function () {
            return this.getBooleanAttribute('attach');
        },
        set: function (value) {
            this._attach = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetAttach = function () {
        this._attach = undefined;
    };
    Object.defineProperty(Container.prototype, "attachInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attach;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "bridge", {
        // bridge - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bridge');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "cgroupParent", {
        get: function () {
            return this.getStringAttribute('cgroup_parent');
        },
        set: function (value) {
            this._cgroupParent = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetCgroupParent = function () {
        this._cgroupParent = undefined;
    };
    Object.defineProperty(Container.prototype, "cgroupParentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cgroupParent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "cgroupnsMode", {
        get: function () {
            return this.getStringAttribute('cgroupns_mode');
        },
        set: function (value) {
            this._cgroupnsMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetCgroupnsMode = function () {
        this._cgroupnsMode = undefined;
    };
    Object.defineProperty(Container.prototype, "cgroupnsModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cgroupnsMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "command", {
        get: function () {
            return this.getListAttribute('command');
        },
        set: function (value) {
            this._command = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetCommand = function () {
        this._command = undefined;
    };
    Object.defineProperty(Container.prototype, "commandInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._command;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "containerLogs", {
        // container_logs - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('container_logs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "containerReadRefreshTimeoutMilliseconds", {
        get: function () {
            return this.getNumberAttribute('container_read_refresh_timeout_milliseconds');
        },
        set: function (value) {
            this._containerReadRefreshTimeoutMilliseconds = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetContainerReadRefreshTimeoutMilliseconds = function () {
        this._containerReadRefreshTimeoutMilliseconds = undefined;
    };
    Object.defineProperty(Container.prototype, "containerReadRefreshTimeoutMillisecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._containerReadRefreshTimeoutMilliseconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "cpuPeriod", {
        get: function () {
            return this.getNumberAttribute('cpu_period');
        },
        set: function (value) {
            this._cpuPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetCpuPeriod = function () {
        this._cpuPeriod = undefined;
    };
    Object.defineProperty(Container.prototype, "cpuPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "cpuQuota", {
        get: function () {
            return this.getNumberAttribute('cpu_quota');
        },
        set: function (value) {
            this._cpuQuota = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetCpuQuota = function () {
        this._cpuQuota = undefined;
    };
    Object.defineProperty(Container.prototype, "cpuQuotaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuQuota;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "cpuSet", {
        get: function () {
            return this.getStringAttribute('cpu_set');
        },
        set: function (value) {
            this._cpuSet = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetCpuSet = function () {
        this._cpuSet = undefined;
    };
    Object.defineProperty(Container.prototype, "cpuSetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuSet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "cpuShares", {
        get: function () {
            return this.getNumberAttribute('cpu_shares');
        },
        set: function (value) {
            this._cpuShares = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetCpuShares = function () {
        this._cpuShares = undefined;
    };
    Object.defineProperty(Container.prototype, "cpuSharesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuShares;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "cpus", {
        get: function () {
            return this.getStringAttribute('cpus');
        },
        set: function (value) {
            this._cpus = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetCpus = function () {
        this._cpus = undefined;
    };
    Object.defineProperty(Container.prototype, "cpusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "destroyGraceSeconds", {
        get: function () {
            return this.getNumberAttribute('destroy_grace_seconds');
        },
        set: function (value) {
            this._destroyGraceSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetDestroyGraceSeconds = function () {
        this._destroyGraceSeconds = undefined;
    };
    Object.defineProperty(Container.prototype, "destroyGraceSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destroyGraceSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "dns", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('dns'));
        },
        set: function (value) {
            this._dns = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetDns = function () {
        this._dns = undefined;
    };
    Object.defineProperty(Container.prototype, "dnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "dnsOpts", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('dns_opts'));
        },
        set: function (value) {
            this._dnsOpts = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetDnsOpts = function () {
        this._dnsOpts = undefined;
    };
    Object.defineProperty(Container.prototype, "dnsOptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsOpts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "dnsSearch", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('dns_search'));
        },
        set: function (value) {
            this._dnsSearch = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetDnsSearch = function () {
        this._dnsSearch = undefined;
    };
    Object.defineProperty(Container.prototype, "dnsSearchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsSearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "domainname", {
        get: function () {
            return this.getStringAttribute('domainname');
        },
        set: function (value) {
            this._domainname = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetDomainname = function () {
        this._domainname = undefined;
    };
    Object.defineProperty(Container.prototype, "domainnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "entrypoint", {
        get: function () {
            return this.getListAttribute('entrypoint');
        },
        set: function (value) {
            this._entrypoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetEntrypoint = function () {
        this._entrypoint = undefined;
    };
    Object.defineProperty(Container.prototype, "entrypointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entrypoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "env", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('env'));
        },
        set: function (value) {
            this._env = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetEnv = function () {
        this._env = undefined;
    };
    Object.defineProperty(Container.prototype, "envInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._env;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "exitCode", {
        // exit_code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('exit_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "gpus", {
        get: function () {
            return this.getStringAttribute('gpus');
        },
        set: function (value) {
            this._gpus = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetGpus = function () {
        this._gpus = undefined;
    };
    Object.defineProperty(Container.prototype, "gpusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gpus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "groupAdd", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('group_add'));
        },
        set: function (value) {
            this._groupAdd = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetGroupAdd = function () {
        this._groupAdd = undefined;
    };
    Object.defineProperty(Container.prototype, "groupAddInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupAdd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(Container.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Container.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "image", {
        get: function () {
            return this.getStringAttribute('image');
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "imageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "init", {
        get: function () {
            return this.getBooleanAttribute('init');
        },
        set: function (value) {
            this._init = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetInit = function () {
        this._init = undefined;
    };
    Object.defineProperty(Container.prototype, "initInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._init;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "ipcMode", {
        get: function () {
            return this.getStringAttribute('ipc_mode');
        },
        set: function (value) {
            this._ipcMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetIpcMode = function () {
        this._ipcMode = undefined;
    };
    Object.defineProperty(Container.prototype, "ipcModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipcMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "logDriver", {
        get: function () {
            return this.getStringAttribute('log_driver');
        },
        set: function (value) {
            this._logDriver = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetLogDriver = function () {
        this._logDriver = undefined;
    };
    Object.defineProperty(Container.prototype, "logDriverInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logDriver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "logOpts", {
        get: function () {
            return this.getStringMapAttribute('log_opts');
        },
        set: function (value) {
            this._logOpts = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetLogOpts = function () {
        this._logOpts = undefined;
    };
    Object.defineProperty(Container.prototype, "logOptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logOpts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "logs", {
        get: function () {
            return this.getBooleanAttribute('logs');
        },
        set: function (value) {
            this._logs = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetLogs = function () {
        this._logs = undefined;
    };
    Object.defineProperty(Container.prototype, "logsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "maxRetryCount", {
        get: function () {
            return this.getNumberAttribute('max_retry_count');
        },
        set: function (value) {
            this._maxRetryCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetMaxRetryCount = function () {
        this._maxRetryCount = undefined;
    };
    Object.defineProperty(Container.prototype, "maxRetryCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxRetryCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "memory", {
        get: function () {
            return this.getNumberAttribute('memory');
        },
        set: function (value) {
            this._memory = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetMemory = function () {
        this._memory = undefined;
    };
    Object.defineProperty(Container.prototype, "memoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "memoryReservation", {
        get: function () {
            return this.getNumberAttribute('memory_reservation');
        },
        set: function (value) {
            this._memoryReservation = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetMemoryReservation = function () {
        this._memoryReservation = undefined;
    };
    Object.defineProperty(Container.prototype, "memoryReservationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memoryReservation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "memorySwap", {
        get: function () {
            return this.getNumberAttribute('memory_swap');
        },
        set: function (value) {
            this._memorySwap = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetMemorySwap = function () {
        this._memorySwap = undefined;
    };
    Object.defineProperty(Container.prototype, "memorySwapInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memorySwap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "mustRun", {
        get: function () {
            return this.getBooleanAttribute('must_run');
        },
        set: function (value) {
            this._mustRun = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetMustRun = function () {
        this._mustRun = undefined;
    };
    Object.defineProperty(Container.prototype, "mustRunInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mustRun;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "networkData", {
        get: function () {
            return this._networkData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "networkMode", {
        get: function () {
            return this.getStringAttribute('network_mode');
        },
        set: function (value) {
            this._networkMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetNetworkMode = function () {
        this._networkMode = undefined;
    };
    Object.defineProperty(Container.prototype, "networkModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "pidMode", {
        get: function () {
            return this.getStringAttribute('pid_mode');
        },
        set: function (value) {
            this._pidMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetPidMode = function () {
        this._pidMode = undefined;
    };
    Object.defineProperty(Container.prototype, "pidModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pidMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "platform", {
        get: function () {
            return this.getStringAttribute('platform');
        },
        set: function (value) {
            this._platform = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetPlatform = function () {
        this._platform = undefined;
    };
    Object.defineProperty(Container.prototype, "platformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "privileged", {
        get: function () {
            return this.getBooleanAttribute('privileged');
        },
        set: function (value) {
            this._privileged = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetPrivileged = function () {
        this._privileged = undefined;
    };
    Object.defineProperty(Container.prototype, "privilegedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privileged;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "publishAllPorts", {
        get: function () {
            return this.getBooleanAttribute('publish_all_ports');
        },
        set: function (value) {
            this._publishAllPorts = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetPublishAllPorts = function () {
        this._publishAllPorts = undefined;
    };
    Object.defineProperty(Container.prototype, "publishAllPortsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publishAllPorts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "readOnly", {
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        set: function (value) {
            this._readOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetReadOnly = function () {
        this._readOnly = undefined;
    };
    Object.defineProperty(Container.prototype, "readOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "removeVolumes", {
        get: function () {
            return this.getBooleanAttribute('remove_volumes');
        },
        set: function (value) {
            this._removeVolumes = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetRemoveVolumes = function () {
        this._removeVolumes = undefined;
    };
    Object.defineProperty(Container.prototype, "removeVolumesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._removeVolumes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "restart", {
        get: function () {
            return this.getStringAttribute('restart');
        },
        set: function (value) {
            this._restart = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetRestart = function () {
        this._restart = undefined;
    };
    Object.defineProperty(Container.prototype, "restartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "rm", {
        get: function () {
            return this.getBooleanAttribute('rm');
        },
        set: function (value) {
            this._rm = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetRm = function () {
        this._rm = undefined;
    };
    Object.defineProperty(Container.prototype, "rmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "runtime", {
        get: function () {
            return this.getStringAttribute('runtime');
        },
        set: function (value) {
            this._runtime = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetRuntime = function () {
        this._runtime = undefined;
    };
    Object.defineProperty(Container.prototype, "runtimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runtime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "securityOpts", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('security_opts'));
        },
        set: function (value) {
            this._securityOpts = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetSecurityOpts = function () {
        this._securityOpts = undefined;
    };
    Object.defineProperty(Container.prototype, "securityOptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityOpts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "shmSize", {
        get: function () {
            return this.getNumberAttribute('shm_size');
        },
        set: function (value) {
            this._shmSize = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetShmSize = function () {
        this._shmSize = undefined;
    };
    Object.defineProperty(Container.prototype, "shmSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shmSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "start", {
        get: function () {
            return this.getBooleanAttribute('start');
        },
        set: function (value) {
            this._start = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetStart = function () {
        this._start = undefined;
    };
    Object.defineProperty(Container.prototype, "startInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "stdinOpen", {
        get: function () {
            return this.getBooleanAttribute('stdin_open');
        },
        set: function (value) {
            this._stdinOpen = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetStdinOpen = function () {
        this._stdinOpen = undefined;
    };
    Object.defineProperty(Container.prototype, "stdinOpenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stdinOpen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "stopSignal", {
        get: function () {
            return this.getStringAttribute('stop_signal');
        },
        set: function (value) {
            this._stopSignal = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetStopSignal = function () {
        this._stopSignal = undefined;
    };
    Object.defineProperty(Container.prototype, "stopSignalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stopSignal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "stopTimeout", {
        get: function () {
            return this.getNumberAttribute('stop_timeout');
        },
        set: function (value) {
            this._stopTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetStopTimeout = function () {
        this._stopTimeout = undefined;
    };
    Object.defineProperty(Container.prototype, "stopTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stopTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "storageOpts", {
        get: function () {
            return this.getStringMapAttribute('storage_opts');
        },
        set: function (value) {
            this._storageOpts = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetStorageOpts = function () {
        this._storageOpts = undefined;
    };
    Object.defineProperty(Container.prototype, "storageOptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageOpts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "sysctls", {
        get: function () {
            return this.getStringMapAttribute('sysctls');
        },
        set: function (value) {
            this._sysctls = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetSysctls = function () {
        this._sysctls = undefined;
    };
    Object.defineProperty(Container.prototype, "sysctlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sysctls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "tmpfs", {
        get: function () {
            return this.getStringMapAttribute('tmpfs');
        },
        set: function (value) {
            this._tmpfs = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetTmpfs = function () {
        this._tmpfs = undefined;
    };
    Object.defineProperty(Container.prototype, "tmpfsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tmpfs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "tty", {
        get: function () {
            return this.getBooleanAttribute('tty');
        },
        set: function (value) {
            this._tty = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetTty = function () {
        this._tty = undefined;
    };
    Object.defineProperty(Container.prototype, "ttyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetUser = function () {
        this._user = undefined;
    };
    Object.defineProperty(Container.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "usernsMode", {
        get: function () {
            return this.getStringAttribute('userns_mode');
        },
        set: function (value) {
            this._usernsMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetUsernsMode = function () {
        this._usernsMode = undefined;
    };
    Object.defineProperty(Container.prototype, "usernsModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usernsMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "wait", {
        get: function () {
            return this.getBooleanAttribute('wait');
        },
        set: function (value) {
            this._wait = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetWait = function () {
        this._wait = undefined;
    };
    Object.defineProperty(Container.prototype, "waitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wait;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "waitTimeout", {
        get: function () {
            return this.getNumberAttribute('wait_timeout');
        },
        set: function (value) {
            this._waitTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetWaitTimeout = function () {
        this._waitTimeout = undefined;
    };
    Object.defineProperty(Container.prototype, "waitTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "workingDir", {
        get: function () {
            return this.getStringAttribute('working_dir');
        },
        set: function (value) {
            this._workingDir = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.resetWorkingDir = function () {
        this._workingDir = undefined;
    };
    Object.defineProperty(Container.prototype, "workingDirInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workingDir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "capabilities", {
        get: function () {
            return this._capabilities;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putCapabilities = function (value) {
        this._capabilities.internalValue = value;
    };
    Container.prototype.resetCapabilities = function () {
        this._capabilities.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "capabilitiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capabilities.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "deviceReadBps", {
        get: function () {
            return this._deviceReadBps;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putDeviceReadBps = function (value) {
        this._deviceReadBps.internalValue = value;
    };
    Container.prototype.resetDeviceReadBps = function () {
        this._deviceReadBps.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "deviceReadBpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceReadBps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "deviceReadIops", {
        get: function () {
            return this._deviceReadIops;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putDeviceReadIops = function (value) {
        this._deviceReadIops.internalValue = value;
    };
    Container.prototype.resetDeviceReadIops = function () {
        this._deviceReadIops.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "deviceReadIopsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceReadIops.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "deviceRequests", {
        get: function () {
            return this._deviceRequests;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putDeviceRequests = function (value) {
        this._deviceRequests.internalValue = value;
    };
    Container.prototype.resetDeviceRequests = function () {
        this._deviceRequests.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "deviceRequestsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceRequests.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "deviceWriteBps", {
        get: function () {
            return this._deviceWriteBps;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putDeviceWriteBps = function (value) {
        this._deviceWriteBps.internalValue = value;
    };
    Container.prototype.resetDeviceWriteBps = function () {
        this._deviceWriteBps.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "deviceWriteBpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceWriteBps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "deviceWriteIops", {
        get: function () {
            return this._deviceWriteIops;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putDeviceWriteIops = function (value) {
        this._deviceWriteIops.internalValue = value;
    };
    Container.prototype.resetDeviceWriteIops = function () {
        this._deviceWriteIops.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "deviceWriteIopsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceWriteIops.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "devices", {
        get: function () {
            return this._devices;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putDevices = function (value) {
        this._devices.internalValue = value;
    };
    Container.prototype.resetDevices = function () {
        this._devices.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "devicesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._devices.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "healthcheck", {
        get: function () {
            return this._healthcheck;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putHealthcheck = function (value) {
        this._healthcheck.internalValue = value;
    };
    Container.prototype.resetHealthcheck = function () {
        this._healthcheck.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "healthcheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthcheck.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "host", {
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putHost = function (value) {
        this._host.internalValue = value;
    };
    Container.prototype.resetHost = function () {
        this._host.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "labels", {
        get: function () {
            return this._labels;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putLabels = function (value) {
        this._labels.internalValue = value;
    };
    Container.prototype.resetLabels = function () {
        this._labels.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "labelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._labels.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "mounts", {
        get: function () {
            return this._mounts;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putMounts = function (value) {
        this._mounts.internalValue = value;
    };
    Container.prototype.resetMounts = function () {
        this._mounts.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "mountsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mounts.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "networksAdvanced", {
        get: function () {
            return this._networksAdvanced;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putNetworksAdvanced = function (value) {
        this._networksAdvanced.internalValue = value;
    };
    Container.prototype.resetNetworksAdvanced = function () {
        this._networksAdvanced.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "networksAdvancedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networksAdvanced.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "ports", {
        get: function () {
            return this._ports;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putPorts = function (value) {
        this._ports.internalValue = value;
    };
    Container.prototype.resetPorts = function () {
        this._ports.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "portsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ports.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "timeouts", {
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putTimeouts = function (value) {
        this._timeouts.internalValue = value;
    };
    Container.prototype.resetTimeouts = function () {
        this._timeouts.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "ulimit", {
        get: function () {
            return this._ulimit;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putUlimit = function (value) {
        this._ulimit.internalValue = value;
    };
    Container.prototype.resetUlimit = function () {
        this._ulimit.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "ulimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ulimit.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "upload", {
        get: function () {
            return this._upload;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putUpload = function (value) {
        this._upload.internalValue = value;
    };
    Container.prototype.resetUpload = function () {
        this._upload.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "uploadInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._upload.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "volumes", {
        get: function () {
            return this._volumes;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.putVolumes = function (value) {
        this._volumes.internalValue = value;
    };
    Container.prototype.resetVolumes = function () {
        this._volumes.internalValue = undefined;
    };
    Object.defineProperty(Container.prototype, "volumesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volumes.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Container.prototype.synthesizeAttributes = function () {
        return {
            attach: cdktf.booleanToTerraform(this._attach),
            cgroup_parent: cdktf.stringToTerraform(this._cgroupParent),
            cgroupns_mode: cdktf.stringToTerraform(this._cgroupnsMode),
            command: cdktf.listMapper(cdktf.stringToTerraform, false)(this._command),
            container_read_refresh_timeout_milliseconds: cdktf.numberToTerraform(this._containerReadRefreshTimeoutMilliseconds),
            cpu_period: cdktf.numberToTerraform(this._cpuPeriod),
            cpu_quota: cdktf.numberToTerraform(this._cpuQuota),
            cpu_set: cdktf.stringToTerraform(this._cpuSet),
            cpu_shares: cdktf.numberToTerraform(this._cpuShares),
            cpus: cdktf.stringToTerraform(this._cpus),
            destroy_grace_seconds: cdktf.numberToTerraform(this._destroyGraceSeconds),
            dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dns),
            dns_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsOpts),
            dns_search: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSearch),
            domainname: cdktf.stringToTerraform(this._domainname),
            entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entrypoint),
            env: cdktf.listMapper(cdktf.stringToTerraform, false)(this._env),
            gpus: cdktf.stringToTerraform(this._gpus),
            group_add: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupAdd),
            hostname: cdktf.stringToTerraform(this._hostname),
            id: cdktf.stringToTerraform(this._id),
            image: cdktf.stringToTerraform(this._image),
            init: cdktf.booleanToTerraform(this._init),
            ipc_mode: cdktf.stringToTerraform(this._ipcMode),
            log_driver: cdktf.stringToTerraform(this._logDriver),
            log_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._logOpts),
            logs: cdktf.booleanToTerraform(this._logs),
            max_retry_count: cdktf.numberToTerraform(this._maxRetryCount),
            memory: cdktf.numberToTerraform(this._memory),
            memory_reservation: cdktf.numberToTerraform(this._memoryReservation),
            memory_swap: cdktf.numberToTerraform(this._memorySwap),
            must_run: cdktf.booleanToTerraform(this._mustRun),
            name: cdktf.stringToTerraform(this._name),
            network_mode: cdktf.stringToTerraform(this._networkMode),
            pid_mode: cdktf.stringToTerraform(this._pidMode),
            platform: cdktf.stringToTerraform(this._platform),
            privileged: cdktf.booleanToTerraform(this._privileged),
            publish_all_ports: cdktf.booleanToTerraform(this._publishAllPorts),
            read_only: cdktf.booleanToTerraform(this._readOnly),
            remove_volumes: cdktf.booleanToTerraform(this._removeVolumes),
            restart: cdktf.stringToTerraform(this._restart),
            rm: cdktf.booleanToTerraform(this._rm),
            runtime: cdktf.stringToTerraform(this._runtime),
            security_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityOpts),
            shm_size: cdktf.numberToTerraform(this._shmSize),
            start: cdktf.booleanToTerraform(this._start),
            stdin_open: cdktf.booleanToTerraform(this._stdinOpen),
            stop_signal: cdktf.stringToTerraform(this._stopSignal),
            stop_timeout: cdktf.numberToTerraform(this._stopTimeout),
            storage_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._storageOpts),
            sysctls: cdktf.hashMapper(cdktf.stringToTerraform)(this._sysctls),
            tmpfs: cdktf.hashMapper(cdktf.stringToTerraform)(this._tmpfs),
            tty: cdktf.booleanToTerraform(this._tty),
            user: cdktf.stringToTerraform(this._user),
            userns_mode: cdktf.stringToTerraform(this._usernsMode),
            wait: cdktf.booleanToTerraform(this._wait),
            wait_timeout: cdktf.numberToTerraform(this._waitTimeout),
            working_dir: cdktf.stringToTerraform(this._workingDir),
            capabilities: containerCapabilitiesToTerraform(this._capabilities.internalValue),
            device_read_bps: cdktf.listMapper(containerDeviceReadBpsToTerraform, true)(this._deviceReadBps.internalValue),
            device_read_iops: cdktf.listMapper(containerDeviceReadIopsToTerraform, true)(this._deviceReadIops.internalValue),
            device_requests: cdktf.listMapper(containerDeviceRequestsToTerraform, true)(this._deviceRequests.internalValue),
            device_write_bps: cdktf.listMapper(containerDeviceWriteBpsToTerraform, true)(this._deviceWriteBps.internalValue),
            device_write_iops: cdktf.listMapper(containerDeviceWriteIopsToTerraform, true)(this._deviceWriteIops.internalValue),
            devices: cdktf.listMapper(containerDevicesToTerraform, true)(this._devices.internalValue),
            healthcheck: containerHealthcheckToTerraform(this._healthcheck.internalValue),
            host: cdktf.listMapper(containerHostToTerraform, true)(this._host.internalValue),
            labels: cdktf.listMapper(containerLabelsToTerraform, true)(this._labels.internalValue),
            mounts: cdktf.listMapper(containerMountsToTerraform, true)(this._mounts.internalValue),
            networks_advanced: cdktf.listMapper(containerNetworksAdvancedToTerraform, true)(this._networksAdvanced.internalValue),
            ports: cdktf.listMapper(containerPortsToTerraform, true)(this._ports.internalValue),
            timeouts: containerTimeoutsToTerraform(this._timeouts.internalValue),
            ulimit: cdktf.listMapper(containerUlimitToTerraform, true)(this._ulimit.internalValue),
            upload: cdktf.listMapper(containerUploadToTerraform, true)(this._upload.internalValue),
            volumes: cdktf.listMapper(containerVolumesToTerraform, true)(this._volumes.internalValue),
        };
    };
    Container.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            attach: {
                value: cdktf.booleanToHclTerraform(this._attach),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cgroup_parent: {
                value: cdktf.stringToHclTerraform(this._cgroupParent),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cgroupns_mode: {
                value: cdktf.stringToHclTerraform(this._cgroupnsMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            command: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._command),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            container_read_refresh_timeout_milliseconds: {
                value: cdktf.numberToHclTerraform(this._containerReadRefreshTimeoutMilliseconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpu_period: {
                value: cdktf.numberToHclTerraform(this._cpuPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpu_quota: {
                value: cdktf.numberToHclTerraform(this._cpuQuota),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpu_set: {
                value: cdktf.stringToHclTerraform(this._cpuSet),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cpu_shares: {
                value: cdktf.numberToHclTerraform(this._cpuShares),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cpus: {
                value: cdktf.stringToHclTerraform(this._cpus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destroy_grace_seconds: {
                value: cdktf.numberToHclTerraform(this._destroyGraceSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            dns: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dns),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            dns_opts: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsOpts),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            dns_search: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSearch),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            domainname: {
                value: cdktf.stringToHclTerraform(this._domainname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entrypoint: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entrypoint),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            env: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._env),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            gpus: {
                value: cdktf.stringToHclTerraform(this._gpus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_add: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupAdd),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image: {
                value: cdktf.stringToHclTerraform(this._image),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            init: {
                value: cdktf.booleanToHclTerraform(this._init),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ipc_mode: {
                value: cdktf.stringToHclTerraform(this._ipcMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_driver: {
                value: cdktf.stringToHclTerraform(this._logDriver),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_opts: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._logOpts),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            logs: {
                value: cdktf.booleanToHclTerraform(this._logs),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            max_retry_count: {
                value: cdktf.numberToHclTerraform(this._maxRetryCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            memory: {
                value: cdktf.numberToHclTerraform(this._memory),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            memory_reservation: {
                value: cdktf.numberToHclTerraform(this._memoryReservation),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            memory_swap: {
                value: cdktf.numberToHclTerraform(this._memorySwap),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            must_run: {
                value: cdktf.booleanToHclTerraform(this._mustRun),
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
            network_mode: {
                value: cdktf.stringToHclTerraform(this._networkMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pid_mode: {
                value: cdktf.stringToHclTerraform(this._pidMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            platform: {
                value: cdktf.stringToHclTerraform(this._platform),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            privileged: {
                value: cdktf.booleanToHclTerraform(this._privileged),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            publish_all_ports: {
                value: cdktf.booleanToHclTerraform(this._publishAllPorts),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            read_only: {
                value: cdktf.booleanToHclTerraform(this._readOnly),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            remove_volumes: {
                value: cdktf.booleanToHclTerraform(this._removeVolumes),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            restart: {
                value: cdktf.stringToHclTerraform(this._restart),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rm: {
                value: cdktf.booleanToHclTerraform(this._rm),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            runtime: {
                value: cdktf.stringToHclTerraform(this._runtime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_opts: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityOpts),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            shm_size: {
                value: cdktf.numberToHclTerraform(this._shmSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            start: {
                value: cdktf.booleanToHclTerraform(this._start),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            stdin_open: {
                value: cdktf.booleanToHclTerraform(this._stdinOpen),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            stop_signal: {
                value: cdktf.stringToHclTerraform(this._stopSignal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stop_timeout: {
                value: cdktf.numberToHclTerraform(this._stopTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            storage_opts: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._storageOpts),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            sysctls: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sysctls),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            tmpfs: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tmpfs),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            tty: {
                value: cdktf.booleanToHclTerraform(this._tty),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            user: {
                value: cdktf.stringToHclTerraform(this._user),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            userns_mode: {
                value: cdktf.stringToHclTerraform(this._usernsMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            wait: {
                value: cdktf.booleanToHclTerraform(this._wait),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            wait_timeout: {
                value: cdktf.numberToHclTerraform(this._waitTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            working_dir: {
                value: cdktf.stringToHclTerraform(this._workingDir),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            capabilities: {
                value: containerCapabilitiesToHclTerraform(this._capabilities.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerCapabilitiesList",
            },
            device_read_bps: {
                value: cdktf.listMapperHcl(containerDeviceReadBpsToHclTerraform, true)(this._deviceReadBps.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDeviceReadBpsList",
            },
            device_read_iops: {
                value: cdktf.listMapperHcl(containerDeviceReadIopsToHclTerraform, true)(this._deviceReadIops.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDeviceReadIopsList",
            },
            device_requests: {
                value: cdktf.listMapperHcl(containerDeviceRequestsToHclTerraform, true)(this._deviceRequests.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDeviceRequestsList",
            },
            device_write_bps: {
                value: cdktf.listMapperHcl(containerDeviceWriteBpsToHclTerraform, true)(this._deviceWriteBps.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDeviceWriteBpsList",
            },
            device_write_iops: {
                value: cdktf.listMapperHcl(containerDeviceWriteIopsToHclTerraform, true)(this._deviceWriteIops.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDeviceWriteIopsList",
            },
            devices: {
                value: cdktf.listMapperHcl(containerDevicesToHclTerraform, true)(this._devices.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerDevicesList",
            },
            healthcheck: {
                value: containerHealthcheckToHclTerraform(this._healthcheck.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ContainerHealthcheckList",
            },
            host: {
                value: cdktf.listMapperHcl(containerHostToHclTerraform, true)(this._host.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerHostList",
            },
            labels: {
                value: cdktf.listMapperHcl(containerLabelsToHclTerraform, true)(this._labels.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerLabelsList",
            },
            mounts: {
                value: cdktf.listMapperHcl(containerMountsToHclTerraform, true)(this._mounts.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerMountsList",
            },
            networks_advanced: {
                value: cdktf.listMapperHcl(containerNetworksAdvancedToHclTerraform, true)(this._networksAdvanced.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerNetworksAdvancedList",
            },
            ports: {
                value: cdktf.listMapperHcl(containerPortsToHclTerraform, true)(this._ports.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ContainerPortsList",
            },
            timeouts: {
                value: containerTimeoutsToHclTerraform(this._timeouts.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ContainerTimeouts",
            },
            ulimit: {
                value: cdktf.listMapperHcl(containerUlimitToHclTerraform, true)(this._ulimit.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerUlimitList",
            },
            upload: {
                value: cdktf.listMapperHcl(containerUploadToHclTerraform, true)(this._upload.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerUploadList",
            },
            volumes: {
                value: cdktf.listMapperHcl(containerVolumesToHclTerraform, true)(this._volumes.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "ContainerVolumesList",
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
    Container.tfResourceType = "docker_container";
    return Container;
}(cdktf.TerraformResource));
exports.Container = Container;
