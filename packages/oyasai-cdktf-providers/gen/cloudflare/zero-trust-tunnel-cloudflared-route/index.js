"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_route
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
exports.ZeroTrustTunnelCloudflaredRoute = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route}
*/
var ZeroTrustTunnelCloudflaredRoute = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredRoute, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustTunnelCloudflaredRouteConfig
    */
    function ZeroTrustTunnelCloudflaredRoute(scope, id, config) {
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
        _this._accountId = config.accountId;
        _this._comment = config.comment;
        _this._network = config.network;
        _this._tunnelId = config.tunnelId;
        _this._virtualNetworkId = config.virtualNetworkId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustTunnelCloudflaredRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustTunnelCloudflaredRoute to import
    * @param importFromId The id of the existing ZeroTrustTunnelCloudflaredRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustTunnelCloudflaredRoute to import is found
    */
    ZeroTrustTunnelCloudflaredRoute.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_route", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredRoute.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredRoute.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "network", {
        get: function () {
            return this.getStringAttribute('network');
        },
        set: function (value) {
            this._network = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "networkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._network;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "virtualNetworkId", {
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        set: function (value) {
            this._virtualNetworkId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredRoute.prototype.resetVirtualNetworkId = function () {
        this._virtualNetworkId = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredRoute.prototype, "virtualNetworkIdInput", {
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
    ZeroTrustTunnelCloudflaredRoute.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            comment: cdktf.stringToTerraform(this._comment),
            network: cdktf.stringToTerraform(this._network),
            tunnel_id: cdktf.stringToTerraform(this._tunnelId),
            virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
        };
    };
    ZeroTrustTunnelCloudflaredRoute.prototype.synthesizeHclAttributes = function () {
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
            network: {
                value: cdktf.stringToHclTerraform(this._network),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    ZeroTrustTunnelCloudflaredRoute.tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_route";
    return ZeroTrustTunnelCloudflaredRoute;
}(cdktf.TerraformResource));
exports.ZeroTrustTunnelCloudflaredRoute = ZeroTrustTunnelCloudflaredRoute;
