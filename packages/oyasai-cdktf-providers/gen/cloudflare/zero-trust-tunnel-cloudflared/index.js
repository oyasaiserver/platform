"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared
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
exports.ZeroTrustTunnelCloudflared = exports.ZeroTrustTunnelCloudflaredConnectionsList = exports.ZeroTrustTunnelCloudflaredConnectionsOutputReference = void 0;
exports.zeroTrustTunnelCloudflaredConnectionsToTerraform = zeroTrustTunnelCloudflaredConnectionsToTerraform;
exports.zeroTrustTunnelCloudflaredConnectionsToHclTerraform = zeroTrustTunnelCloudflaredConnectionsToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustTunnelCloudflaredConnectionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustTunnelCloudflaredConnectionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustTunnelCloudflaredConnectionsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredConnectionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustTunnelCloudflaredConnectionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustTunnelCloudflaredConnectionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustTunnelCloudflaredConnectionsOutputReference.prototype, "clientId", {
        // client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConnectionsOutputReference.prototype, "clientVersion", {
        // client_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConnectionsOutputReference.prototype, "coloName", {
        // colo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('colo_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConnectionsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConnectionsOutputReference.prototype, "isPendingReconnect", {
        // is_pending_reconnect - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_pending_reconnect');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConnectionsOutputReference.prototype, "openedAt", {
        // opened_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('opened_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConnectionsOutputReference.prototype, "originIp", {
        // origin_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('origin_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConnectionsOutputReference.prototype, "uuid", {
        // uuid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uuid');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustTunnelCloudflaredConnectionsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustTunnelCloudflaredConnectionsOutputReference = ZeroTrustTunnelCloudflaredConnectionsOutputReference;
var ZeroTrustTunnelCloudflaredConnectionsList = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredConnectionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustTunnelCloudflaredConnectionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustTunnelCloudflaredConnectionsList.prototype.get = function (index) {
        return new ZeroTrustTunnelCloudflaredConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustTunnelCloudflaredConnectionsList;
}(cdktf.ComplexList));
exports.ZeroTrustTunnelCloudflaredConnectionsList = ZeroTrustTunnelCloudflaredConnectionsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared cloudflare_zero_trust_tunnel_cloudflared}
*/
var ZeroTrustTunnelCloudflared = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflared, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared cloudflare_zero_trust_tunnel_cloudflared} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustTunnelCloudflaredConfig
    */
    function ZeroTrustTunnelCloudflared(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared',
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
        // connections - computed: true, optional: false, required: false
        _this._connections = new ZeroTrustTunnelCloudflaredConnectionsList(_this, "connections", false);
        _this._accountId = config.accountId;
        _this._configSrc = config.configSrc;
        _this._name = config.name;
        _this._tunnelSecret = config.tunnelSecret;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustTunnelCloudflared resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustTunnelCloudflared to import
    * @param importFromId The id of the existing ZeroTrustTunnelCloudflared that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustTunnelCloudflared to import is found
    */
    ZeroTrustTunnelCloudflared.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflared.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "accountTag", {
        // account_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "configSrc", {
        get: function () {
            return this.getStringAttribute('config_src');
        },
        set: function (value) {
            this._configSrc = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflared.prototype.resetConfigSrc = function () {
        this._configSrc = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "configSrcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configSrc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "connections", {
        get: function () {
            return this._connections;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "connsActiveAt", {
        // conns_active_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('conns_active_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "connsInactiveAt", {
        // conns_inactive_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('conns_inactive_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "metadata", {
        // metadata - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('metadata');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "remoteConfig", {
        // remote_config - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('remote_config');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "tunType", {
        // tun_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tun_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "tunnelSecret", {
        get: function () {
            return this.getStringAttribute('tunnel_secret');
        },
        set: function (value) {
            this._tunnelSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflared.prototype.resetTunnelSecret = function () {
        this._tunnelSecret = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflared.prototype, "tunnelSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelSecret;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustTunnelCloudflared.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            config_src: cdktf.stringToTerraform(this._configSrc),
            name: cdktf.stringToTerraform(this._name),
            tunnel_secret: cdktf.stringToTerraform(this._tunnelSecret),
        };
    };
    ZeroTrustTunnelCloudflared.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            config_src: {
                value: cdktf.stringToHclTerraform(this._configSrc),
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
            tunnel_secret: {
                value: cdktf.stringToHclTerraform(this._tunnelSecret),
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
    ZeroTrustTunnelCloudflared.tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared";
    return ZeroTrustTunnelCloudflared;
}(cdktf.TerraformResource));
exports.ZeroTrustTunnelCloudflared = ZeroTrustTunnelCloudflared;
