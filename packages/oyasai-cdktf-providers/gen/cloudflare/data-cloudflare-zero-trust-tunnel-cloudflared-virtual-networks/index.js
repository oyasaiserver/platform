"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks
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
exports.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks = exports.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList = exports.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference = void 0;
exports.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultToTerraform = dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultToTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultToHclTerraform = dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.prototype, "isDefaultNetwork", {
        // is_default_network - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_default_network');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference = DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference;
var DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList = DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks cloudflare_zero_trust_tunnel_cloudflared_virtual_networks}
*/
var DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks cloudflare_zero_trust_tunnel_cloudflared_virtual_networks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig = {}
    */
    function DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_virtual_networks',
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
        _this._result = new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._id = config.id;
        _this._isDefault = config.isDefault;
        _this._isDefaultNetwork = config.isDefaultNetwork;
        _this._isDeleted = config.isDeleted;
        _this._maxItems = config.maxItems;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks to import is found
    */
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_virtual_networks", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "isDefault", {
        get: function () {
            return this.getBooleanAttribute('is_default');
        },
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype.resetIsDefault = function () {
        this._isDefault = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "isDefaultInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDefault;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "isDefaultNetwork", {
        get: function () {
            return this.getBooleanAttribute('is_default_network');
        },
        set: function (value) {
            this._isDefaultNetwork = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype.resetIsDefaultNetwork = function () {
        this._isDefaultNetwork = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "isDefaultNetworkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDefaultNetwork;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "isDeleted", {
        get: function () {
            return this.getBooleanAttribute('is_deleted');
        },
        set: function (value) {
            this._isDeleted = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype.resetIsDeleted = function () {
        this._isDeleted = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "isDeletedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDeleted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            id: cdktf.stringToTerraform(this._id),
            is_default: cdktf.booleanToTerraform(this._isDefault),
            is_default_network: cdktf.booleanToTerraform(this._isDefaultNetwork),
            is_deleted: cdktf.booleanToTerraform(this._isDeleted),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_default: {
                value: cdktf.booleanToHclTerraform(this._isDefault),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_default_network: {
                value: cdktf.booleanToHclTerraform(this._isDefaultNetwork),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_deleted: {
                value: cdktf.booleanToHclTerraform(this._isDeleted),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_virtual_networks";
    return DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks = DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks;
