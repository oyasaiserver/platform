"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_ip_profile
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
exports.DataCloudflareZeroTrustDeviceIpProfile = exports.DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference = void 0;
exports.dataCloudflareZeroTrustDeviceIpProfileFilterToTerraform = dataCloudflareZeroTrustDeviceIpProfileFilterToTerraform;
exports.dataCloudflareZeroTrustDeviceIpProfileFilterToHclTerraform = dataCloudflareZeroTrustDeviceIpProfileFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDeviceIpProfileFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        per_page: cdktf.numberToTerraform(struct.perPage),
    };
}
function dataCloudflareZeroTrustDeviceIpProfileFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        per_page: {
            value: cdktf.numberToHclTerraform(struct.perPage),
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
var DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._perPage !== undefined) {
                hasAnyValues = true;
                internalValueResult.perPage = this._perPage;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._perPage = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._perPage = value.perPage;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference.prototype, "perPage", {
        get: function () {
            return this.getNumberAttribute('per_page');
        },
        set: function (value) {
            this._perPage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference.prototype.resetPerPage = function () {
        this._perPage = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference.prototype, "perPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._perPage;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference = DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_ip_profile cloudflare_zero_trust_device_ip_profile}
*/
var DataCloudflareZeroTrustDeviceIpProfile = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceIpProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_ip_profile cloudflare_zero_trust_device_ip_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceIpProfileConfig = {}
    */
    function DataCloudflareZeroTrustDeviceIpProfile(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_ip_profile',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._profileId = config.profileId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceIpProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceIpProfile to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceIpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_ip_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceIpProfile to import is found
    */
    DataCloudflareZeroTrustDeviceIpProfile.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_ip_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceIpProfile.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceIpProfile.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZeroTrustDeviceIpProfile.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "match", {
        // match - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('match');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "precedence", {
        // precedence - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('precedence');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "profileId", {
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        set: function (value) {
            this._profileId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceIpProfile.prototype.resetProfileId = function () {
        this._profileId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "profileIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "subnetId", {
        // subnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceIpProfile.prototype, "updatedAt", {
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
    DataCloudflareZeroTrustDeviceIpProfile.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustDeviceIpProfileFilterToTerraform(this._filter.internalValue),
            profile_id: cdktf.stringToTerraform(this._profileId),
        };
    };
    DataCloudflareZeroTrustDeviceIpProfile.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareZeroTrustDeviceIpProfileFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustDeviceIpProfileFilter",
            },
            profile_id: {
                value: cdktf.stringToHclTerraform(this._profileId),
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
    DataCloudflareZeroTrustDeviceIpProfile.tfResourceType = "cloudflare_zero_trust_device_ip_profile";
    return DataCloudflareZeroTrustDeviceIpProfile;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDeviceIpProfile = DataCloudflareZeroTrustDeviceIpProfile;
