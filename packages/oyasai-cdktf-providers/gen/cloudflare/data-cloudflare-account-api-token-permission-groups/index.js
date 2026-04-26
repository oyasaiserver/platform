"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups
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
exports.DataCloudflareAccountApiTokenPermissionGroups = exports.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList = exports.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference = void 0;
exports.dataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsToTerraform = dataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsToTerraform;
exports.dataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsToHclTerraform = dataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference.prototype, "scopes", {
        // scopes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('scopes');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference = DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference;
var DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList.prototype.get = function (index) {
        return new DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList;
}(cdktf.ComplexList));
exports.DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList = DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups cloudflare_account_api_token_permission_groups}
*/
var DataCloudflareAccountApiTokenPermissionGroups = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountApiTokenPermissionGroups, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups cloudflare_account_api_token_permission_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountApiTokenPermissionGroupsConfig = {}
    */
    function DataCloudflareAccountApiTokenPermissionGroups(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_api_token_permission_groups',
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
        // permission_groups - computed: true, optional: false, required: false
        _this._permissionGroups = new DataCloudflareAccountApiTokenPermissionGroupsPermissionGroupsList(_this, "permission_groups", false);
        _this._accountId = config.accountId;
        _this._name = config.name;
        _this._scope = config.scope;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountApiTokenPermissionGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountApiTokenPermissionGroups to import
    * @param importFromId The id of the existing DataCloudflareAccountApiTokenPermissionGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_api_token_permission_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountApiTokenPermissionGroups to import is found
    */
    DataCloudflareAccountApiTokenPermissionGroups.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_api_token_permission_groups", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccountApiTokenPermissionGroups.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountApiTokenPermissionGroups.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountApiTokenPermissionGroups.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountApiTokenPermissionGroups.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountApiTokenPermissionGroups.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareAccountApiTokenPermissionGroups.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountApiTokenPermissionGroups.prototype, "permissionGroups", {
        get: function () {
            return this._permissionGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountApiTokenPermissionGroups.prototype, "scope", {
        get: function () {
            return this.getStringAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountApiTokenPermissionGroups.prototype.resetScope = function () {
        this._scope = undefined;
    };
    Object.defineProperty(DataCloudflareAccountApiTokenPermissionGroups.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccountApiTokenPermissionGroups.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            name: cdktf.stringToTerraform(this._name),
            scope: cdktf.stringToTerraform(this._scope),
        };
    };
    DataCloudflareAccountApiTokenPermissionGroups.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scope: {
                value: cdktf.stringToHclTerraform(this._scope),
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
    DataCloudflareAccountApiTokenPermissionGroups.tfResourceType = "cloudflare_account_api_token_permission_groups";
    return DataCloudflareAccountApiTokenPermissionGroups;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccountApiTokenPermissionGroups = DataCloudflareAccountApiTokenPermissionGroups;
