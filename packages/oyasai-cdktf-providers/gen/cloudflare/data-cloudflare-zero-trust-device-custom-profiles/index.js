"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profiles
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
exports.DataCloudflareZeroTrustDeviceCustomProfiles = exports.DataCloudflareZeroTrustDeviceCustomProfilesResultList = exports.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference = exports.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList = exports.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference = exports.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference = exports.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList = exports.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference = exports.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList = exports.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference = exports.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList = exports.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference = void 0;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultExcludeToTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultExcludeToTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultExcludeToHclTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultExcludeToHclTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsToTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsToTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsToHclTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsToHclTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultIncludeToTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultIncludeToTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultIncludeToHclTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultIncludeToHclTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2ToTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2ToTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2ToHclTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2ToHclTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsToTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsToTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsToHclTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsToHclTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultToTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultToTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfilesResultToHclTerraform = dataCloudflareZeroTrustDeviceCustomProfilesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDeviceCustomProfilesResultExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceCustomProfilesResultExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference = DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference;
var DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList = DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList;
function dataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.prototype, "dnsServer", {
        // dns_server - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_server');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.prototype, "suffix", {
        // suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('suffix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference = DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference;
var DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList = DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList;
function dataCloudflareZeroTrustDeviceCustomProfilesResultIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceCustomProfilesResultIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference = DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference;
var DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList = DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList;
function dataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference = DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference;
function dataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference = DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference;
var DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList = DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList;
function dataCloudflareZeroTrustDeviceCustomProfilesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceCustomProfilesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // exclude - computed: true, optional: false, required: false
        _this._exclude = new DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList(_this, "exclude", false);
        // fallback_domains - computed: true, optional: false, required: false
        _this._fallbackDomains = new DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList(_this, "fallback_domains", false);
        // include - computed: true, optional: false, required: false
        _this._include = new DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList(_this, "include", false);
        // service_mode_v2 - computed: true, optional: false, required: false
        _this._serviceModeV2 = new DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference(_this, "service_mode_v2");
        // target_tests - computed: true, optional: false, required: false
        _this._targetTests = new DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList(_this, "target_tests", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "allowModeSwitch", {
        // allow_mode_switch - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_mode_switch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "allowUpdates", {
        // allow_updates - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_updates');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "allowedToLeave", {
        // allowed_to_leave - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allowed_to_leave');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "autoConnect", {
        // auto_connect - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('auto_connect');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "captivePortal", {
        // captive_portal - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('captive_portal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "disableAutoFallback", {
        // disable_auto_fallback - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_auto_fallback');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "excludeOfficeIps", {
        // exclude_office_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('exclude_office_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "fallbackDomains", {
        get: function () {
            return this._fallbackDomains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "gatewayUniqueId", {
        // gateway_unique_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway_unique_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "lanAllowMinutes", {
        // lan_allow_minutes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lan_allow_minutes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "lanAllowSubnetSize", {
        // lan_allow_subnet_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lan_allow_subnet_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "match", {
        // match - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('match');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "policyId", {
        // policy_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "precedence", {
        // precedence - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('precedence');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "registerInterfaceIpWithDns", {
        // register_interface_ip_with_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('register_interface_ip_with_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "sccmVpnBoundarySupport", {
        // sccm_vpn_boundary_support - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('sccm_vpn_boundary_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "serviceModeV2", {
        get: function () {
            return this._serviceModeV2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "supportUrl", {
        // support_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('support_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "switchLocked", {
        // switch_locked - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('switch_locked');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "targetTests", {
        get: function () {
            return this._targetTests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.prototype, "tunnelProtocol", {
        // tunnel_protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_protocol');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference = DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference;
var DataCloudflareZeroTrustDeviceCustomProfilesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfilesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfilesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceCustomProfilesResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceCustomProfilesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceCustomProfilesResultList = DataCloudflareZeroTrustDeviceCustomProfilesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profiles cloudflare_zero_trust_device_custom_profiles}
*/
var DataCloudflareZeroTrustDeviceCustomProfiles = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfiles, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profiles cloudflare_zero_trust_device_custom_profiles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceCustomProfilesConfig = {}
    */
    function DataCloudflareZeroTrustDeviceCustomProfiles(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_custom_profiles',
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
        _this._result = new DataCloudflareZeroTrustDeviceCustomProfilesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfiles resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfiles to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceCustomProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profiles#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfiles to import is found
    */
    DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_custom_profiles", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfiles.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceCustomProfiles.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfiles.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfiles.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceCustomProfiles.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfiles.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfiles.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDeviceCustomProfiles.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareZeroTrustDeviceCustomProfiles.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareZeroTrustDeviceCustomProfiles.tfResourceType = "cloudflare_zero_trust_device_custom_profiles";
    return DataCloudflareZeroTrustDeviceCustomProfiles;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDeviceCustomProfiles = DataCloudflareZeroTrustDeviceCustomProfiles;
