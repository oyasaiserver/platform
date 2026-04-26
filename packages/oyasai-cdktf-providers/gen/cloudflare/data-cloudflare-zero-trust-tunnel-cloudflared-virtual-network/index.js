"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network
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
exports.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork = exports.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference = void 0;
exports.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToTerraform = dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToHclTerraform = dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        is_default: cdktf.booleanToTerraform(struct.isDefault),
        is_default_network: cdktf.booleanToTerraform(struct.isDefaultNetwork),
        is_deleted: cdktf.booleanToTerraform(struct.isDeleted),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToHclTerraform(struct) {
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
        is_default: {
            value: cdktf.booleanToHclTerraform(struct.isDefault),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_default_network: {
            value: cdktf.booleanToHclTerraform(struct.isDefaultNetwork),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_deleted: {
            value: cdktf.booleanToHclTerraform(struct.isDeleted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
var DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype, "internalValue", {
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
            if (this._isDefault !== undefined) {
                hasAnyValues = true;
                internalValueResult.isDefault = this._isDefault;
            }
            if (this._isDefaultNetwork !== undefined) {
                hasAnyValues = true;
                internalValueResult.isDefaultNetwork = this._isDefaultNetwork;
            }
            if (this._isDeleted !== undefined) {
                hasAnyValues = true;
                internalValueResult.isDeleted = this._isDeleted;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
                this._isDefault = undefined;
                this._isDefaultNetwork = undefined;
                this._isDeleted = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
                this._isDefault = value.isDefault;
                this._isDefaultNetwork = value.isDefaultNetwork;
                this._isDeleted = value.isDeleted;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype, "isDefault", {
        get: function () {
            return this.getBooleanAttribute('is_default');
        },
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype.resetIsDefault = function () {
        this._isDefault = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype, "isDefaultInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDefault;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype, "isDefaultNetwork", {
        get: function () {
            return this.getBooleanAttribute('is_default_network');
        },
        set: function (value) {
            this._isDefaultNetwork = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype.resetIsDefaultNetwork = function () {
        this._isDefaultNetwork = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype, "isDefaultNetworkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDefaultNetwork;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype, "isDeleted", {
        get: function () {
            return this.getBooleanAttribute('is_deleted');
        },
        set: function (value) {
            this._isDeleted = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype.resetIsDeleted = function () {
        this._isDeleted = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype, "isDeletedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDeleted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference = DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network}
*/
var DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig = {}
    */
    function DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_virtual_network',
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
        _this._filter = new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._virtualNetworkId = config.virtualNetworkId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import is found
    */
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_virtual_network", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "isDefaultNetwork", {
        // is_default_network - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_default_network');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "virtualNetworkId", {
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        set: function (value) {
            this._virtualNetworkId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype.resetVirtualNetworkId = function () {
        this._virtualNetworkId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "virtualNetworkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualNetworkId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToTerraform(this._filter.internalValue),
            virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
        };
    };
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter",
            },
            virtual_network_id: {
                value: cdktf.stringToHclTerraform(this._virtualNetworkId),
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
    DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_virtual_network";
    return DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork = DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork;
