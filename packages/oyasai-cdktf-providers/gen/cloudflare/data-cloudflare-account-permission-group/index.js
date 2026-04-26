"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_group
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
exports.DataCloudflareAccountPermissionGroup = exports.DataCloudflareAccountPermissionGroupMetaOutputReference = void 0;
exports.dataCloudflareAccountPermissionGroupMetaToTerraform = dataCloudflareAccountPermissionGroupMetaToTerraform;
exports.dataCloudflareAccountPermissionGroupMetaToHclTerraform = dataCloudflareAccountPermissionGroupMetaToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountPermissionGroupMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountPermissionGroupMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountPermissionGroupMetaOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountPermissionGroupMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountPermissionGroupMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountPermissionGroupMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountPermissionGroupMetaOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountPermissionGroupMetaOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountPermissionGroupMetaOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountPermissionGroupMetaOutputReference = DataCloudflareAccountPermissionGroupMetaOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_group cloudflare_account_permission_group}
*/
var DataCloudflareAccountPermissionGroup = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountPermissionGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_group cloudflare_account_permission_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountPermissionGroupConfig
    */
    function DataCloudflareAccountPermissionGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_permission_group',
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
        // meta - computed: true, optional: false, required: false
        _this._meta = new DataCloudflareAccountPermissionGroupMetaOutputReference(_this, "meta");
        _this._accountId = config.accountId;
        _this._permissionGroupId = config.permissionGroupId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountPermissionGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountPermissionGroup to import
    * @param importFromId The id of the existing DataCloudflareAccountPermissionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_permission_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountPermissionGroup to import is found
    */
    DataCloudflareAccountPermissionGroup.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_permission_group", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccountPermissionGroup.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountPermissionGroup.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountPermissionGroup.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountPermissionGroup.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountPermissionGroup.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountPermissionGroup.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountPermissionGroup.prototype, "permissionGroupId", {
        get: function () {
            return this.getStringAttribute('permission_group_id');
        },
        set: function (value) {
            this._permissionGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountPermissionGroup.prototype, "permissionGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionGroupId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccountPermissionGroup.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            permission_group_id: cdktf.stringToTerraform(this._permissionGroupId),
        };
    };
    DataCloudflareAccountPermissionGroup.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permission_group_id: {
                value: cdktf.stringToHclTerraform(this._permissionGroupId),
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
    DataCloudflareAccountPermissionGroup.tfResourceType = "cloudflare_account_permission_group";
    return DataCloudflareAccountPermissionGroup;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccountPermissionGroup = DataCloudflareAccountPermissionGroup;
