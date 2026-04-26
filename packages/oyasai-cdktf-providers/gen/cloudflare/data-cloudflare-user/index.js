"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user
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
exports.DataCloudflareUser = exports.DataCloudflareUserOrganizationsList = exports.DataCloudflareUserOrganizationsOutputReference = void 0;
exports.dataCloudflareUserOrganizationsToTerraform = dataCloudflareUserOrganizationsToTerraform;
exports.dataCloudflareUserOrganizationsToHclTerraform = dataCloudflareUserOrganizationsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareUserOrganizationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareUserOrganizationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareUserOrganizationsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareUserOrganizationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserOrganizationsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareUserOrganizationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareUserOrganizationsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserOrganizationsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserOrganizationsOutputReference.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserOrganizationsOutputReference.prototype, "roles", {
        // roles - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('roles');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUserOrganizationsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareUserOrganizationsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareUserOrganizationsOutputReference = DataCloudflareUserOrganizationsOutputReference;
var DataCloudflareUserOrganizationsList = /** @class */ (function (_super) {
    __extends(DataCloudflareUserOrganizationsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareUserOrganizationsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareUserOrganizationsList.prototype.get = function (index) {
        return new DataCloudflareUserOrganizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareUserOrganizationsList;
}(cdktf.ComplexList));
exports.DataCloudflareUserOrganizationsList = DataCloudflareUserOrganizationsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user cloudflare_user}
*/
var DataCloudflareUser = /** @class */ (function (_super) {
    __extends(DataCloudflareUser, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user cloudflare_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserConfig = {}
    */
    function DataCloudflareUser(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_user',
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
        // organizations - computed: true, optional: false, required: false
        _this._organizations = new DataCloudflareUserOrganizationsList(_this, "organizations", false);
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUser to import
    * @param importFromId The id of the existing DataCloudflareUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUser to import is found
    */
    DataCloudflareUser.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareUser.prototype, "betas", {
        // ==========
        // ATTRIBUTES
        // ==========
        // betas - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('betas');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "country", {
        // country - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('country');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "firstName", {
        // first_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "hasBusinessZones", {
        // has_business_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_business_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "hasEnterpriseZones", {
        // has_enterprise_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_enterprise_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "hasProZones", {
        // has_pro_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_pro_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "lastName", {
        // last_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "organizations", {
        get: function () {
            return this._organizations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "suspended", {
        // suspended - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "telephone", {
        // telephone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('telephone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "twoFactorAuthenticationEnabled", {
        // two_factor_authentication_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('two_factor_authentication_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "twoFactorAuthenticationLocked", {
        // two_factor_authentication_locked - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('two_factor_authentication_locked');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareUser.prototype, "zipcode", {
        // zipcode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zipcode');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareUser.prototype.synthesizeAttributes = function () {
        return {};
    };
    DataCloudflareUser.prototype.synthesizeHclAttributes = function () {
        var attrs = {};
        return attrs;
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataCloudflareUser.tfResourceType = "cloudflare_user";
    return DataCloudflareUser;
}(cdktf.TerraformDataSource));
exports.DataCloudflareUser = DataCloudflareUser;
