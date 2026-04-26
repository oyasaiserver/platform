"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile
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
exports.DataCloudflareZeroTrustDeviceDefaultProfile = exports.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference = exports.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList = exports.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference = exports.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList = exports.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference = exports.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList = exports.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference = void 0;
exports.dataCloudflareZeroTrustDeviceDefaultProfileExcludeToTerraform = dataCloudflareZeroTrustDeviceDefaultProfileExcludeToTerraform;
exports.dataCloudflareZeroTrustDeviceDefaultProfileExcludeToHclTerraform = dataCloudflareZeroTrustDeviceDefaultProfileExcludeToHclTerraform;
exports.dataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsToTerraform = dataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsToTerraform;
exports.dataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsToHclTerraform = dataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsToHclTerraform;
exports.dataCloudflareZeroTrustDeviceDefaultProfileIncludeToTerraform = dataCloudflareZeroTrustDeviceDefaultProfileIncludeToTerraform;
exports.dataCloudflareZeroTrustDeviceDefaultProfileIncludeToHclTerraform = dataCloudflareZeroTrustDeviceDefaultProfileIncludeToHclTerraform;
exports.dataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2ToTerraform = dataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2ToTerraform;
exports.dataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2ToHclTerraform = dataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2ToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDeviceDefaultProfileExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceDefaultProfileExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference = DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference;
var DataCloudflareZeroTrustDeviceDefaultProfileExcludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceDefaultProfileExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceDefaultProfileExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceDefaultProfileExcludeList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList = DataCloudflareZeroTrustDeviceDefaultProfileExcludeList;
function dataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.prototype, "dnsServer", {
        // dns_server - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_server');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.prototype, "suffix", {
        // suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('suffix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference = DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference;
var DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList = DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList;
function dataCloudflareZeroTrustDeviceDefaultProfileIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceDefaultProfileIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference = DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference;
var DataCloudflareZeroTrustDeviceDefaultProfileIncludeList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceDefaultProfileIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDeviceDefaultProfileIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDeviceDefaultProfileIncludeList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList = DataCloudflareZeroTrustDeviceDefaultProfileIncludeList;
function dataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference = DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile}
*/
var DataCloudflareZeroTrustDeviceDefaultProfile = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceDefaultProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceDefaultProfileConfig = {}
    */
    function DataCloudflareZeroTrustDeviceDefaultProfile(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_default_profile',
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
        _this._exclude = new DataCloudflareZeroTrustDeviceDefaultProfileExcludeList(_this, "exclude", false);
        // fallback_domains - computed: true, optional: false, required: false
        _this._fallbackDomains = new DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList(_this, "fallback_domains", false);
        // include - computed: true, optional: false, required: false
        _this._include = new DataCloudflareZeroTrustDeviceDefaultProfileIncludeList(_this, "include", false);
        // service_mode_v2 - computed: true, optional: false, required: false
        _this._serviceModeV2 = new DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference(_this, "service_mode_v2");
        _this._accountId = config.accountId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceDefaultProfile to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceDefaultProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_default_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceDefaultProfile to import is found
    */
    DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_default_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceDefaultProfile.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "allowModeSwitch", {
        // allow_mode_switch - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_mode_switch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "allowUpdates", {
        // allow_updates - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_updates');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "allowedToLeave", {
        // allowed_to_leave - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allowed_to_leave');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "autoConnect", {
        // auto_connect - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('auto_connect');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "captivePortal", {
        // captive_portal - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('captive_portal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "disableAutoFallback", {
        // disable_auto_fallback - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_auto_fallback');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "excludeOfficeIps", {
        // exclude_office_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('exclude_office_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "fallbackDomains", {
        get: function () {
            return this._fallbackDomains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "gatewayUniqueId", {
        // gateway_unique_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway_unique_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "policyId", {
        // policy_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "registerInterfaceIpWithDns", {
        // register_interface_ip_with_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('register_interface_ip_with_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "sccmVpnBoundarySupport", {
        // sccm_vpn_boundary_support - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('sccm_vpn_boundary_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "serviceModeV2", {
        get: function () {
            return this._serviceModeV2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "supportUrl", {
        // support_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('support_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "switchLocked", {
        // switch_locked - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('switch_locked');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceDefaultProfile.prototype, "tunnelProtocol", {
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
    DataCloudflareZeroTrustDeviceDefaultProfile.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
        };
    };
    DataCloudflareZeroTrustDeviceDefaultProfile.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
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
    DataCloudflareZeroTrustDeviceDefaultProfile.tfResourceType = "cloudflare_zero_trust_device_default_profile";
    return DataCloudflareZeroTrustDeviceDefaultProfile;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDeviceDefaultProfile = DataCloudflareZeroTrustDeviceDefaultProfile;
