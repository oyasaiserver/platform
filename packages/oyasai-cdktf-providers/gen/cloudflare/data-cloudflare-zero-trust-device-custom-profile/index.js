"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile
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
exports.DataCloudflareZeroTrustDeviceCustomProfile = exports.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList = exports.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference = exports.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference = exports.DataCloudflareZeroTrustDeviceCustomProfileIncludeList = exports.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference = exports.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList = exports.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference = exports.DataCloudflareZeroTrustDeviceCustomProfileExcludeList = exports.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference = void 0;
exports.dataCloudflareZeroTrustDeviceCustomProfileExcludeToTerraform = dataCloudflareZeroTrustDeviceCustomProfileExcludeToTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfileExcludeToHclTerraform = dataCloudflareZeroTrustDeviceCustomProfileExcludeToHclTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsToTerraform = dataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsToTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsToHclTerraform = dataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsToHclTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfileIncludeToTerraform = dataCloudflareZeroTrustDeviceCustomProfileIncludeToTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfileIncludeToHclTerraform = dataCloudflareZeroTrustDeviceCustomProfileIncludeToHclTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfileServiceModeV2ToTerraform = dataCloudflareZeroTrustDeviceCustomProfileServiceModeV2ToTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfileServiceModeV2ToHclTerraform = dataCloudflareZeroTrustDeviceCustomProfileServiceModeV2ToHclTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfileTargetTestsToTerraform = dataCloudflareZeroTrustDeviceCustomProfileTargetTestsToTerraform;
exports.dataCloudflareZeroTrustDeviceCustomProfileTargetTestsToHclTerraform = dataCloudflareZeroTrustDeviceCustomProfileTargetTestsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDeviceCustomProfileExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceCustomProfileExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference = DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference;
var DataCloudflareZeroTrustDeviceCustomProfileExcludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfileExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfileExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceCustomProfileExcludeList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceCustomProfileExcludeList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceCustomProfileExcludeList = DataCloudflareZeroTrustDeviceCustomProfileExcludeList;
function dataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.prototype, "dnsServer", {
        // dns_server - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_server');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.prototype, "suffix", {
        // suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('suffix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference = DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference;
var DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList = DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList;
function dataCloudflareZeroTrustDeviceCustomProfileIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceCustomProfileIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference = DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference;
var DataCloudflareZeroTrustDeviceCustomProfileIncludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfileIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfileIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceCustomProfileIncludeList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceCustomProfileIncludeList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceCustomProfileIncludeList = DataCloudflareZeroTrustDeviceCustomProfileIncludeList;
function dataCloudflareZeroTrustDeviceCustomProfileServiceModeV2ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceCustomProfileServiceModeV2ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference = DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference;
function dataCloudflareZeroTrustDeviceCustomProfileTargetTestsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceCustomProfileTargetTestsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference = DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference;
var DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList = DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile}
*/
var DataCloudflareZeroTrustDeviceCustomProfile = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceCustomProfileConfig
    */
    function DataCloudflareZeroTrustDeviceCustomProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_custom_profile',
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
        // exclude - computed: true, optional: false, required: false
        _this._exclude = new DataCloudflareZeroTrustDeviceCustomProfileExcludeList(_this, "exclude", false);
        // fallback_domains - computed: true, optional: false, required: false
        _this._fallbackDomains = new DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList(_this, "fallback_domains", false);
        // include - computed: true, optional: false, required: false
        _this._include = new DataCloudflareZeroTrustDeviceCustomProfileIncludeList(_this, "include", false);
        // service_mode_v2 - computed: true, optional: false, required: false
        _this._serviceModeV2 = new DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference(_this, "service_mode_v2");
        // target_tests - computed: true, optional: false, required: false
        _this._targetTests = new DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList(_this, "target_tests", false);
        _this._accountId = config.accountId;
        _this._policyId = config.policyId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfile to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceCustomProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfile to import is found
    */
    DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_custom_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceCustomProfile.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "allowModeSwitch", {
        // allow_mode_switch - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_mode_switch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "allowUpdates", {
        // allow_updates - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_updates');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "allowedToLeave", {
        // allowed_to_leave - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allowed_to_leave');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "autoConnect", {
        // auto_connect - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('auto_connect');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "captivePortal", {
        // captive_portal - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('captive_portal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "disableAutoFallback", {
        // disable_auto_fallback - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_auto_fallback');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "excludeOfficeIps", {
        // exclude_office_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('exclude_office_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "fallbackDomains", {
        get: function () {
            return this._fallbackDomains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "gatewayUniqueId", {
        // gateway_unique_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway_unique_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "lanAllowMinutes", {
        // lan_allow_minutes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lan_allow_minutes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "lanAllowSubnetSize", {
        // lan_allow_subnet_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lan_allow_subnet_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "match", {
        // match - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('match');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "policyId", {
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        set: function (value) {
            this._policyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "policyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "precedence", {
        // precedence - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('precedence');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "registerInterfaceIpWithDns", {
        // register_interface_ip_with_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('register_interface_ip_with_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "sccmVpnBoundarySupport", {
        // sccm_vpn_boundary_support - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('sccm_vpn_boundary_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "serviceModeV2", {
        get: function () {
            return this._serviceModeV2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "supportUrl", {
        // support_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('support_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "switchLocked", {
        // switch_locked - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('switch_locked');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "targetTests", {
        get: function () {
            return this._targetTests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfile.prototype, "tunnelProtocol", {
        // tunnel_protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_protocol');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDeviceCustomProfile.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            policy_id: cdktf.stringToTerraform(this._policyId),
        };
    };
    DataCloudflareZeroTrustDeviceCustomProfile.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_id: {
                value: cdktf.stringToHclTerraform(this._policyId),
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
    DataCloudflareZeroTrustDeviceCustomProfile.tfResourceType = "cloudflare_zero_trust_device_custom_profile";
    return DataCloudflareZeroTrustDeviceCustomProfile;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDeviceCustomProfile = DataCloudflareZeroTrustDeviceCustomProfile;
