"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes
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
exports.DataCloudflareZeroTrustTunnelCloudflaredRoutes = exports.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList = exports.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference = void 0;
exports.dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToTerraform = dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToHclTerraform = dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustTunnelCloudflaredRoutesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.prototype, "network", {
        // network - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.prototype, "tunType", {
        // tun_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tun_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.prototype, "tunnelName", {
        // tunnel_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.prototype, "virtualNetworkId", {
        // virtual_network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.prototype, "virtualNetworkName", {
        // virtual_network_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_network_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference = DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference;
var DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList = DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes cloudflare_zero_trust_tunnel_cloudflared_routes}
*/
var DataCloudflareZeroTrustTunnelCloudflaredRoutes = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredRoutes, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes cloudflare_zero_trust_tunnel_cloudflared_routes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig = {}
    */
    function DataCloudflareZeroTrustTunnelCloudflaredRoutes(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_routes',
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
        _this._result = new DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._comment = config.comment;
        _this._existedAt = config.existedAt;
        _this._isDeleted = config.isDeleted;
        _this._maxItems = config.maxItems;
        _this._networkSubset = config.networkSubset;
        _this._networkSuperset = config.networkSuperset;
        _this._routeId = config.routeId;
        _this._tunTypes = config.tunTypes;
        _this._tunnelId = config.tunnelId;
        _this._virtualNetworkId = config.virtualNetworkId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoutes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import is found
    */
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_routes", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "existedAt", {
        get: function () {
            return this.getStringAttribute('existed_at');
        },
        set: function (value) {
            this._existedAt = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.resetExistedAt = function () {
        this._existedAt = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "existedAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._existedAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "isDeleted", {
        get: function () {
            return this.getBooleanAttribute('is_deleted');
        },
        set: function (value) {
            this._isDeleted = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.resetIsDeleted = function () {
        this._isDeleted = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "isDeletedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDeleted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "networkSubset", {
        get: function () {
            return this.getStringAttribute('network_subset');
        },
        set: function (value) {
            this._networkSubset = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.resetNetworkSubset = function () {
        this._networkSubset = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "networkSubsetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkSubset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "networkSuperset", {
        get: function () {
            return this.getStringAttribute('network_superset');
        },
        set: function (value) {
            this._networkSuperset = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.resetNetworkSuperset = function () {
        this._networkSuperset = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "networkSupersetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkSuperset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "routeId", {
        get: function () {
            return this.getStringAttribute('route_id');
        },
        set: function (value) {
            this._routeId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.resetRouteId = function () {
        this._routeId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "routeIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "tunTypes", {
        get: function () {
            return this.getListAttribute('tun_types');
        },
        set: function (value) {
            this._tunTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.resetTunTypes = function () {
        this._tunTypes = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "tunTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.resetTunnelId = function () {
        this._tunnelId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "virtualNetworkId", {
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        set: function (value) {
            this._virtualNetworkId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.resetVirtualNetworkId = function () {
        this._virtualNetworkId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype, "virtualNetworkIdInput", {
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
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            comment: cdktf.stringToTerraform(this._comment),
            existed_at: cdktf.stringToTerraform(this._existedAt),
            is_deleted: cdktf.booleanToTerraform(this._isDeleted),
            max_items: cdktf.numberToTerraform(this._maxItems),
            network_subset: cdktf.stringToTerraform(this._networkSubset),
            network_superset: cdktf.stringToTerraform(this._networkSuperset),
            route_id: cdktf.stringToTerraform(this._routeId),
            tun_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunTypes),
            tunnel_id: cdktf.stringToTerraform(this._tunnelId),
            virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
        };
    };
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            comment: {
                value: cdktf.stringToHclTerraform(this._comment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            existed_at: {
                value: cdktf.stringToHclTerraform(this._existedAt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            network_subset: {
                value: cdktf.stringToHclTerraform(this._networkSubset),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_superset: {
                value: cdktf.stringToHclTerraform(this._networkSuperset),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            route_id: {
                value: cdktf.stringToHclTerraform(this._routeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tun_types: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunTypes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tunnel_id: {
                value: cdktf.stringToHclTerraform(this._tunnelId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    DataCloudflareZeroTrustTunnelCloudflaredRoutes.tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_routes";
    return DataCloudflareZeroTrustTunnelCloudflaredRoutes;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustTunnelCloudflaredRoutes = DataCloudflareZeroTrustTunnelCloudflaredRoutes;
