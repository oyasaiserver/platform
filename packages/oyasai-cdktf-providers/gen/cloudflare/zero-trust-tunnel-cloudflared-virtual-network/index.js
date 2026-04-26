"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network
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
exports.ZeroTrustTunnelCloudflaredVirtualNetwork = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network}
*/
var ZeroTrustTunnelCloudflaredVirtualNetwork = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredVirtualNetwork, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustTunnelCloudflaredVirtualNetworkConfig
    */
    function ZeroTrustTunnelCloudflaredVirtualNetwork(scope, id, config) {
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
        _this._accountId = config.accountId;
        _this._comment = config.comment;
        _this._isDefault = config.isDefault;
        _this._isDefaultNetwork = config.isDefaultNetwork;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustTunnelCloudflaredVirtualNetwork to import
    * @param importFromId The id of the existing ZeroTrustTunnelCloudflaredVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_virtual_network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustTunnelCloudflaredVirtualNetwork to import is found
    */
    ZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_virtual_network", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredVirtualNetwork.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredVirtualNetwork.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "isDefault", {
        get: function () {
            return this.getBooleanAttribute('is_default');
        },
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredVirtualNetwork.prototype.resetIsDefault = function () {
        this._isDefault = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "isDefaultInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDefault;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "isDefaultNetwork", {
        get: function () {
            return this.getBooleanAttribute('is_default_network');
        },
        set: function (value) {
            this._isDefaultNetwork = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredVirtualNetwork.prototype.resetIsDefaultNetwork = function () {
        this._isDefaultNetwork = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "isDefaultNetworkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDefaultNetwork;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredVirtualNetwork.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustTunnelCloudflaredVirtualNetwork.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            comment: cdktf.stringToTerraform(this._comment),
            is_default: cdktf.booleanToTerraform(this._isDefault),
            is_default_network: cdktf.booleanToTerraform(this._isDefaultNetwork),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    ZeroTrustTunnelCloudflaredVirtualNetwork.prototype.synthesizeHclAttributes = function () {
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
    ZeroTrustTunnelCloudflaredVirtualNetwork.tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_virtual_network";
    return ZeroTrustTunnelCloudflaredVirtualNetwork;
}(cdktf.TerraformResource));
exports.ZeroTrustTunnelCloudflaredVirtualNetwork = ZeroTrustTunnelCloudflaredVirtualNetwork;
