"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/accounts
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
exports.DataCloudflareAccounts = exports.DataCloudflareAccountsResultList = exports.DataCloudflareAccountsResultOutputReference = exports.DataCloudflareAccountsResultSettingsOutputReference = exports.DataCloudflareAccountsResultManagedByOutputReference = void 0;
exports.dataCloudflareAccountsResultManagedByToTerraform = dataCloudflareAccountsResultManagedByToTerraform;
exports.dataCloudflareAccountsResultManagedByToHclTerraform = dataCloudflareAccountsResultManagedByToHclTerraform;
exports.dataCloudflareAccountsResultSettingsToTerraform = dataCloudflareAccountsResultSettingsToTerraform;
exports.dataCloudflareAccountsResultSettingsToHclTerraform = dataCloudflareAccountsResultSettingsToHclTerraform;
exports.dataCloudflareAccountsResultToTerraform = dataCloudflareAccountsResultToTerraform;
exports.dataCloudflareAccountsResultToHclTerraform = dataCloudflareAccountsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountsResultManagedByToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountsResultManagedByToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountsResultManagedByOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountsResultManagedByOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountsResultManagedByOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountsResultManagedByOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountsResultManagedByOutputReference.prototype, "parentOrgId", {
        // parent_org_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parent_org_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountsResultManagedByOutputReference.prototype, "parentOrgName", {
        // parent_org_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parent_org_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountsResultManagedByOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountsResultManagedByOutputReference = DataCloudflareAccountsResultManagedByOutputReference;
function dataCloudflareAccountsResultSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountsResultSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountsResultSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountsResultSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountsResultSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountsResultSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountsResultSettingsOutputReference.prototype, "abuseContactEmail", {
        // abuse_contact_email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('abuse_contact_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountsResultSettingsOutputReference.prototype, "enforceTwofactor", {
        // enforce_twofactor - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enforce_twofactor');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountsResultSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountsResultSettingsOutputReference = DataCloudflareAccountsResultSettingsOutputReference;
function dataCloudflareAccountsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // managed_by - computed: true, optional: false, required: false
        _this._managedBy = new DataCloudflareAccountsResultManagedByOutputReference(_this, "managed_by");
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareAccountsResultSettingsOutputReference(_this, "settings");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountsResultOutputReference.prototype, "managedBy", {
        get: function () {
            return this._managedBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountsResultOutputReference.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountsResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountsResultOutputReference = DataCloudflareAccountsResultOutputReference;
var DataCloudflareAccountsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountsResultList.prototype.get = function (index) {
        return new DataCloudflareAccountsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountsResultList = DataCloudflareAccountsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/accounts cloudflare_accounts}
*/
var DataCloudflareAccounts = /** @class */ (function (_super) {
    __extends(DataCloudflareAccounts, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/accounts cloudflare_accounts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountsConfig = {}
    */
    function DataCloudflareAccounts(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_accounts',
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
        _this._result = new DataCloudflareAccountsResultList(_this, "result", false);
        _this._direction = config.direction;
        _this._maxItems = config.maxItems;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccounts resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccounts to import
    * @param importFromId The id of the existing DataCloudflareAccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/accounts#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccounts to import is found
    */
    DataCloudflareAccounts.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_accounts", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccounts.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccounts.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareAccounts.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccounts.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccounts.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareAccounts.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccounts.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccounts.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareAccounts.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccounts.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccounts.prototype.synthesizeAttributes = function () {
        return {
            direction: cdktf.stringToTerraform(this._direction),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    DataCloudflareAccounts.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    DataCloudflareAccounts.tfResourceType = "cloudflare_accounts";
    return DataCloudflareAccounts;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccounts = DataCloudflareAccounts;
