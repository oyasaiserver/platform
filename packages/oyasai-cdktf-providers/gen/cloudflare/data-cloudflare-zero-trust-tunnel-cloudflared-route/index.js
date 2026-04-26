"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route
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
exports.DataCloudflareZeroTrustTunnelCloudflaredRoute = exports.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference = void 0;
exports.dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToTerraform = dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToHclTerraform = dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        existed_at: cdktf.stringToTerraform(struct.existedAt),
        is_deleted: cdktf.booleanToTerraform(struct.isDeleted),
        network_subset: cdktf.stringToTerraform(struct.networkSubset),
        network_superset: cdktf.stringToTerraform(struct.networkSuperset),
        tun_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.tunTypes),
        tunnel_id: cdktf.stringToTerraform(struct.tunnelId),
        virtual_network_id: cdktf.stringToTerraform(struct.virtualNetworkId),
    };
}
function dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        comment: {
            value: cdktf.stringToHclTerraform(struct.comment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        existed_at: {
            value: cdktf.stringToHclTerraform(struct.existedAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_deleted: {
            value: cdktf.booleanToHclTerraform(struct.isDeleted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        network_subset: {
            value: cdktf.stringToHclTerraform(struct.networkSubset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_superset: {
            value: cdktf.stringToHclTerraform(struct.networkSuperset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tun_types: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.tunTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tunnel_id: {
            value: cdktf.stringToHclTerraform(struct.tunnelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        virtual_network_id: {
            value: cdktf.stringToHclTerraform(struct.virtualNetworkId),
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
var DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._comment !== undefined) {
                hasAnyValues = true;
                internalValueResult.comment = this._comment;
            }
            if (this._existedAt !== undefined) {
                hasAnyValues = true;
                internalValueResult.existedAt = this._existedAt;
            }
            if (this._isDeleted !== undefined) {
                hasAnyValues = true;
                internalValueResult.isDeleted = this._isDeleted;
            }
            if (this._networkSubset !== undefined) {
                hasAnyValues = true;
                internalValueResult.networkSubset = this._networkSubset;
            }
            if (this._networkSuperset !== undefined) {
                hasAnyValues = true;
                internalValueResult.networkSuperset = this._networkSuperset;
            }
            if (this._tunTypes !== undefined) {
                hasAnyValues = true;
                internalValueResult.tunTypes = this._tunTypes;
            }
            if (this._tunnelId !== undefined) {
                hasAnyValues = true;
                internalValueResult.tunnelId = this._tunnelId;
            }
            if (this._virtualNetworkId !== undefined) {
                hasAnyValues = true;
                internalValueResult.virtualNetworkId = this._virtualNetworkId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._comment = undefined;
                this._existedAt = undefined;
                this._isDeleted = undefined;
                this._networkSubset = undefined;
                this._networkSuperset = undefined;
                this._tunTypes = undefined;
                this._tunnelId = undefined;
                this._virtualNetworkId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._comment = value.comment;
                this._existedAt = value.existedAt;
                this._isDeleted = value.isDeleted;
                this._networkSubset = value.networkSubset;
                this._networkSuperset = value.networkSuperset;
                this._tunTypes = value.tunTypes;
                this._tunnelId = value.tunnelId;
                this._virtualNetworkId = value.virtualNetworkId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "existedAt", {
        get: function () {
            return this.getStringAttribute('existed_at');
        },
        set: function (value) {
            this._existedAt = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype.resetExistedAt = function () {
        this._existedAt = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "existedAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._existedAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "isDeleted", {
        get: function () {
            return this.getBooleanAttribute('is_deleted');
        },
        set: function (value) {
            this._isDeleted = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype.resetIsDeleted = function () {
        this._isDeleted = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "isDeletedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDeleted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "networkSubset", {
        get: function () {
            return this.getStringAttribute('network_subset');
        },
        set: function (value) {
            this._networkSubset = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype.resetNetworkSubset = function () {
        this._networkSubset = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "networkSubsetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkSubset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "networkSuperset", {
        get: function () {
            return this.getStringAttribute('network_superset');
        },
        set: function (value) {
            this._networkSuperset = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype.resetNetworkSuperset = function () {
        this._networkSuperset = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "networkSupersetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkSuperset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "tunTypes", {
        get: function () {
            return this.getListAttribute('tun_types');
        },
        set: function (value) {
            this._tunTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype.resetTunTypes = function () {
        this._tunTypes = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "tunTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype.resetTunnelId = function () {
        this._tunnelId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "virtualNetworkId", {
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        set: function (value) {
            this._virtualNetworkId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype.resetVirtualNetworkId = function () {
        this._virtualNetworkId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.prototype, "virtualNetworkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualNetworkId;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference = DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route}
*/
var DataCloudflareZeroTrustTunnelCloudflaredRoute = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredRoute, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredRouteConfig = {}
    */
    function DataCloudflareZeroTrustTunnelCloudflaredRoute(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_route',
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
        _this._filter = new DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._routeId = config.routeId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredRoute to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredRoute to import is found
    */
    DataCloudflareZeroTrustTunnelCloudflaredRoute.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_route", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "network", {
        // network - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "routeId", {
        get: function () {
            return this.getStringAttribute('route_id');
        },
        set: function (value) {
            this._routeId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype.resetRouteId = function () {
        this._routeId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "routeIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype, "virtualNetworkId", {
        // virtual_network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToTerraform(this._filter.internalValue),
            route_id: cdktf.stringToTerraform(this._routeId),
        };
    };
    DataCloudflareZeroTrustTunnelCloudflaredRoute.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareZeroTrustTunnelCloudflaredRouteFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustTunnelCloudflaredRouteFilter",
            },
            route_id: {
                value: cdktf.stringToHclTerraform(this._routeId),
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
    DataCloudflareZeroTrustTunnelCloudflaredRoute.tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_route";
    return DataCloudflareZeroTrustTunnelCloudflaredRoute;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustTunnelCloudflaredRoute = DataCloudflareZeroTrustTunnelCloudflaredRoute;
