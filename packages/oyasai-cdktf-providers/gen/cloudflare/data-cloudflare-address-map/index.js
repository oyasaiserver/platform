"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_map
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
exports.DataCloudflareAddressMap = exports.DataCloudflareAddressMapMembershipsList = exports.DataCloudflareAddressMapMembershipsOutputReference = exports.DataCloudflareAddressMapIpsList = exports.DataCloudflareAddressMapIpsOutputReference = void 0;
exports.dataCloudflareAddressMapIpsToTerraform = dataCloudflareAddressMapIpsToTerraform;
exports.dataCloudflareAddressMapIpsToHclTerraform = dataCloudflareAddressMapIpsToHclTerraform;
exports.dataCloudflareAddressMapMembershipsToTerraform = dataCloudflareAddressMapMembershipsToTerraform;
exports.dataCloudflareAddressMapMembershipsToHclTerraform = dataCloudflareAddressMapMembershipsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAddressMapIpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAddressMapIpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAddressMapIpsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAddressMapIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAddressMapIpsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAddressMapIpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAddressMapIpsOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMapIpsOutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAddressMapIpsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAddressMapIpsOutputReference = DataCloudflareAddressMapIpsOutputReference;
var DataCloudflareAddressMapIpsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAddressMapIpsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAddressMapIpsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAddressMapIpsList.prototype.get = function (index) {
        return new DataCloudflareAddressMapIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAddressMapIpsList;
}(cdktf.ComplexList));
exports.DataCloudflareAddressMapIpsList = DataCloudflareAddressMapIpsList;
function dataCloudflareAddressMapMembershipsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAddressMapMembershipsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAddressMapMembershipsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAddressMapMembershipsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAddressMapMembershipsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAddressMapMembershipsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAddressMapMembershipsOutputReference.prototype, "canDelete", {
        // can_delete - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('can_delete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMapMembershipsOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMapMembershipsOutputReference.prototype, "identifier", {
        // identifier - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identifier');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMapMembershipsOutputReference.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAddressMapMembershipsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAddressMapMembershipsOutputReference = DataCloudflareAddressMapMembershipsOutputReference;
var DataCloudflareAddressMapMembershipsList = /** @class */ (function (_super) {
    __extends(DataCloudflareAddressMapMembershipsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAddressMapMembershipsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAddressMapMembershipsList.prototype.get = function (index) {
        return new DataCloudflareAddressMapMembershipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAddressMapMembershipsList;
}(cdktf.ComplexList));
exports.DataCloudflareAddressMapMembershipsList = DataCloudflareAddressMapMembershipsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_map cloudflare_address_map}
*/
var DataCloudflareAddressMap = /** @class */ (function (_super) {
    __extends(DataCloudflareAddressMap, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_map cloudflare_address_map} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAddressMapConfig
    */
    function DataCloudflareAddressMap(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_address_map',
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
        // ips - computed: true, optional: false, required: false
        _this._ips = new DataCloudflareAddressMapIpsList(_this, "ips", false);
        // memberships - computed: true, optional: false, required: false
        _this._memberships = new DataCloudflareAddressMapMembershipsList(_this, "memberships", false);
        _this._accountId = config.accountId;
        _this._addressMapId = config.addressMapId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAddressMap resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAddressMap to import
    * @param importFromId The id of the existing DataCloudflareAddressMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_map#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAddressMap to import is found
    */
    DataCloudflareAddressMap.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_address_map", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAddressMap.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAddressMap.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAddressMap.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "addressMapId", {
        get: function () {
            return this.getStringAttribute('address_map_id');
        },
        set: function (value) {
            this._addressMapId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "addressMapIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._addressMapId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "canDelete", {
        // can_delete - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('can_delete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "canModifyIps", {
        // can_modify_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('can_modify_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "defaultSni", {
        // default_sni - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_sni');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "ips", {
        get: function () {
            return this._ips;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "memberships", {
        get: function () {
            return this._memberships;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAddressMap.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAddressMap.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            address_map_id: cdktf.stringToTerraform(this._addressMapId),
        };
    };
    DataCloudflareAddressMap.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            address_map_id: {
                value: cdktf.stringToHclTerraform(this._addressMapId),
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
    DataCloudflareAddressMap.tfResourceType = "cloudflare_address_map";
    return DataCloudflareAddressMap;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAddressMap = DataCloudflareAddressMap;
