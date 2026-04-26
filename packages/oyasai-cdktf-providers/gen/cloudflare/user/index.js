"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user
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
exports.User = exports.UserOrganizationsList = exports.UserOrganizationsOutputReference = void 0;
exports.userOrganizationsToTerraform = userOrganizationsToTerraform;
exports.userOrganizationsToHclTerraform = userOrganizationsToHclTerraform;
var cdktf = require("cdktf");
function userOrganizationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function userOrganizationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var UserOrganizationsOutputReference = /** @class */ (function (_super) {
    __extends(UserOrganizationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function UserOrganizationsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(UserOrganizationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(UserOrganizationsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserOrganizationsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserOrganizationsOutputReference.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserOrganizationsOutputReference.prototype, "roles", {
        // roles - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('roles');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserOrganizationsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return UserOrganizationsOutputReference;
}(cdktf.ComplexObject));
exports.UserOrganizationsOutputReference = UserOrganizationsOutputReference;
var UserOrganizationsList = /** @class */ (function (_super) {
    __extends(UserOrganizationsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function UserOrganizationsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    UserOrganizationsList.prototype.get = function (index) {
        return new UserOrganizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return UserOrganizationsList;
}(cdktf.ComplexList));
exports.UserOrganizationsList = UserOrganizationsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user cloudflare_user}
*/
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user cloudflare_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserConfig = {}
    */
    function User(scope, id, config) {
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
        _this._organizations = new UserOrganizationsList(_this, "organizations", false);
        _this._country = config.country;
        _this._firstName = config.firstName;
        _this._lastName = config.lastName;
        _this._telephone = config.telephone;
        _this._zipcode = config.zipcode;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the User to import
    * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the User to import is found
    */
    User.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_user", importId: importFromId, provider: provider });
    };
    Object.defineProperty(User.prototype, "betas", {
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
    Object.defineProperty(User.prototype, "country", {
        get: function () {
            return this.getStringAttribute('country');
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.resetCountry = function () {
        this._country = undefined;
    };
    Object.defineProperty(User.prototype, "countryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "firstName", {
        get: function () {
            return this.getStringAttribute('first_name');
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.resetFirstName = function () {
        this._firstName = undefined;
    };
    Object.defineProperty(User.prototype, "firstNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "hasBusinessZones", {
        // has_business_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_business_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "hasEnterpriseZones", {
        // has_enterprise_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_enterprise_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "hasProZones", {
        // has_pro_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_pro_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        get: function () {
            return this.getStringAttribute('last_name');
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.resetLastName = function () {
        this._lastName = undefined;
    };
    Object.defineProperty(User.prototype, "lastNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "organizations", {
        get: function () {
            return this._organizations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "suspended", {
        // suspended - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('suspended');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "telephone", {
        get: function () {
            return this.getStringAttribute('telephone');
        },
        set: function (value) {
            this._telephone = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.resetTelephone = function () {
        this._telephone = undefined;
    };
    Object.defineProperty(User.prototype, "telephoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._telephone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "twoFactorAuthenticationEnabled", {
        // two_factor_authentication_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('two_factor_authentication_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "twoFactorAuthenticationLocked", {
        // two_factor_authentication_locked - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('two_factor_authentication_locked');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "zipcode", {
        get: function () {
            return this.getStringAttribute('zipcode');
        },
        set: function (value) {
            this._zipcode = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.resetZipcode = function () {
        this._zipcode = undefined;
    };
    Object.defineProperty(User.prototype, "zipcodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zipcode;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    User.prototype.synthesizeAttributes = function () {
        return {
            country: cdktf.stringToTerraform(this._country),
            first_name: cdktf.stringToTerraform(this._firstName),
            last_name: cdktf.stringToTerraform(this._lastName),
            telephone: cdktf.stringToTerraform(this._telephone),
            zipcode: cdktf.stringToTerraform(this._zipcode),
        };
    };
    User.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            country: {
                value: cdktf.stringToHclTerraform(this._country),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            first_name: {
                value: cdktf.stringToHclTerraform(this._firstName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            last_name: {
                value: cdktf.stringToHclTerraform(this._lastName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            telephone: {
                value: cdktf.stringToHclTerraform(this._telephone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zipcode: {
                value: cdktf.stringToHclTerraform(this._zipcode),
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
    User.tfResourceType = "cloudflare_user";
    return User;
}(cdktf.TerraformResource));
exports.User = User;
