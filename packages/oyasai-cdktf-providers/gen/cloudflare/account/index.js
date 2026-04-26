"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account
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
exports.Account = exports.AccountUnitOutputReference = exports.AccountSettingsOutputReference = exports.AccountManagedByOutputReference = void 0;
exports.accountManagedByToTerraform = accountManagedByToTerraform;
exports.accountManagedByToHclTerraform = accountManagedByToHclTerraform;
exports.accountSettingsToTerraform = accountSettingsToTerraform;
exports.accountSettingsToHclTerraform = accountSettingsToHclTerraform;
exports.accountUnitToTerraform = accountUnitToTerraform;
exports.accountUnitToHclTerraform = accountUnitToHclTerraform;
var cdktf = require("cdktf");
function accountManagedByToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function accountManagedByToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var AccountManagedByOutputReference = /** @class */ (function (_super) {
    __extends(AccountManagedByOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AccountManagedByOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountManagedByOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountManagedByOutputReference.prototype, "parentOrgId", {
        // parent_org_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parent_org_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountManagedByOutputReference.prototype, "parentOrgName", {
        // parent_org_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parent_org_name');
        },
        enumerable: false,
        configurable: true
    });
    return AccountManagedByOutputReference;
}(cdktf.ComplexObject));
exports.AccountManagedByOutputReference = AccountManagedByOutputReference;
function accountSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        abuse_contact_email: cdktf.stringToTerraform(struct.abuseContactEmail),
        enforce_twofactor: cdktf.booleanToTerraform(struct.enforceTwofactor),
    };
}
function accountSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        abuse_contact_email: {
            value: cdktf.stringToHclTerraform(struct.abuseContactEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enforce_twofactor: {
            value: cdktf.booleanToHclTerraform(struct.enforceTwofactor),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var AccountSettingsOutputReference = /** @class */ (function (_super) {
    __extends(AccountSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AccountSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountSettingsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._abuseContactEmail !== undefined) {
                hasAnyValues = true;
                internalValueResult.abuseContactEmail = this._abuseContactEmail;
            }
            if (this._enforceTwofactor !== undefined) {
                hasAnyValues = true;
                internalValueResult.enforceTwofactor = this._enforceTwofactor;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._abuseContactEmail = undefined;
                this._enforceTwofactor = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._abuseContactEmail = value.abuseContactEmail;
                this._enforceTwofactor = value.enforceTwofactor;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSettingsOutputReference.prototype, "abuseContactEmail", {
        get: function () {
            return this.getStringAttribute('abuse_contact_email');
        },
        set: function (value) {
            this._abuseContactEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountSettingsOutputReference.prototype.resetAbuseContactEmail = function () {
        this._abuseContactEmail = undefined;
    };
    Object.defineProperty(AccountSettingsOutputReference.prototype, "abuseContactEmailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._abuseContactEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSettingsOutputReference.prototype, "enforceTwofactor", {
        get: function () {
            return this.getBooleanAttribute('enforce_twofactor');
        },
        set: function (value) {
            this._enforceTwofactor = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountSettingsOutputReference.prototype.resetEnforceTwofactor = function () {
        this._enforceTwofactor = undefined;
    };
    Object.defineProperty(AccountSettingsOutputReference.prototype, "enforceTwofactorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enforceTwofactor;
        },
        enumerable: false,
        configurable: true
    });
    return AccountSettingsOutputReference;
}(cdktf.ComplexObject));
exports.AccountSettingsOutputReference = AccountSettingsOutputReference;
function accountUnitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function accountUnitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
var AccountUnitOutputReference = /** @class */ (function (_super) {
    __extends(AccountUnitOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AccountUnitOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountUnitOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountUnitOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountUnitOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(AccountUnitOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return AccountUnitOutputReference;
}(cdktf.ComplexObject));
exports.AccountUnitOutputReference = AccountUnitOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account cloudflare_account}
*/
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account cloudflare_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountConfig
    */
    function Account(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account',
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
        // managed_by - computed: true, optional: true, required: false
        _this._managedBy = new AccountManagedByOutputReference(_this, "managed_by");
        // settings - computed: true, optional: true, required: false
        _this._settings = new AccountSettingsOutputReference(_this, "settings");
        // unit - computed: true, optional: true, required: false
        _this._unit = new AccountUnitOutputReference(_this, "unit");
        _this._managedBy.internalValue = config.managedBy;
        _this._name = config.name;
        _this._settings.internalValue = config.settings;
        _this._type = config.type;
        _this._unit.internalValue = config.unit;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Account to import
    * @param importFromId The id of the existing Account that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Account to import is found
    */
    Account.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Account.prototype, "createdOn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "managedBy", {
        get: function () {
            return this._managedBy;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.putManagedBy = function (value) {
        this._managedBy.internalValue = value;
    };
    Account.prototype.resetManagedBy = function () {
        this._managedBy.internalValue = undefined;
    };
    Object.defineProperty(Account.prototype, "managedByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._managedBy.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.putSettings = function (value) {
        this._settings.internalValue = value;
    };
    Account.prototype.resetSettings = function () {
        this._settings.internalValue = undefined;
    };
    Object.defineProperty(Account.prototype, "settingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._settings.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(Account.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "unit", {
        get: function () {
            return this._unit;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.putUnit = function (value) {
        this._unit.internalValue = value;
    };
    Account.prototype.resetUnit = function () {
        this._unit.internalValue = undefined;
    };
    Object.defineProperty(Account.prototype, "unitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._unit.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Account.prototype.synthesizeAttributes = function () {
        return {
            managed_by: accountManagedByToTerraform(this._managedBy.internalValue),
            name: cdktf.stringToTerraform(this._name),
            settings: accountSettingsToTerraform(this._settings.internalValue),
            type: cdktf.stringToTerraform(this._type),
            unit: accountUnitToTerraform(this._unit.internalValue),
        };
    };
    Account.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            managed_by: {
                value: accountManagedByToHclTerraform(this._managedBy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AccountManagedBy",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            settings: {
                value: accountSettingsToHclTerraform(this._settings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AccountSettings",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            unit: {
                value: accountUnitToHclTerraform(this._unit.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AccountUnit",
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
    Account.tfResourceType = "cloudflare_account";
    return Account;
}(cdktf.TerraformResource));
exports.Account = Account;
