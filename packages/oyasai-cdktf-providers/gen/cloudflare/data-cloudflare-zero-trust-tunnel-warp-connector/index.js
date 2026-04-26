"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector
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
exports.DataCloudflareZeroTrustTunnelWarpConnector = exports.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference = exports.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList = exports.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference = void 0;
exports.dataCloudflareZeroTrustTunnelWarpConnectorConnectionsToTerraform = dataCloudflareZeroTrustTunnelWarpConnectorConnectionsToTerraform;
exports.dataCloudflareZeroTrustTunnelWarpConnectorConnectionsToHclTerraform = dataCloudflareZeroTrustTunnelWarpConnectorConnectionsToHclTerraform;
exports.dataCloudflareZeroTrustTunnelWarpConnectorFilterToTerraform = dataCloudflareZeroTrustTunnelWarpConnectorFilterToTerraform;
exports.dataCloudflareZeroTrustTunnelWarpConnectorFilterToHclTerraform = dataCloudflareZeroTrustTunnelWarpConnectorFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustTunnelWarpConnectorConnectionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustTunnelWarpConnectorConnectionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.prototype, "clientId", {
        // client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.prototype, "clientVersion", {
        // client_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.prototype, "coloName", {
        // colo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('colo_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.prototype, "isPendingReconnect", {
        // is_pending_reconnect - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_pending_reconnect');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.prototype, "openedAt", {
        // opened_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('opened_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.prototype, "originIp", {
        // origin_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('origin_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.prototype, "uuid", {
        // uuid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uuid');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference = DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference;
var DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList = DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList;
function dataCloudflareZeroTrustTunnelWarpConnectorFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude_prefix: cdktf.stringToTerraform(struct.excludePrefix),
        existed_at: cdktf.stringToTerraform(struct.existedAt),
        include_prefix: cdktf.stringToTerraform(struct.includePrefix),
        is_deleted: cdktf.booleanToTerraform(struct.isDeleted),
        name: cdktf.stringToTerraform(struct.name),
        status: cdktf.stringToTerraform(struct.status),
        uuid: cdktf.stringToTerraform(struct.uuid),
        was_active_at: cdktf.stringToTerraform(struct.wasActiveAt),
        was_inactive_at: cdktf.stringToTerraform(struct.wasInactiveAt),
    };
}
function dataCloudflareZeroTrustTunnelWarpConnectorFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        exclude_prefix: {
            value: cdktf.stringToHclTerraform(struct.excludePrefix),
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
        include_prefix: {
            value: cdktf.stringToHclTerraform(struct.includePrefix),
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
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uuid: {
            value: cdktf.stringToHclTerraform(struct.uuid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        was_active_at: {
            value: cdktf.stringToHclTerraform(struct.wasActiveAt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        was_inactive_at: {
            value: cdktf.stringToHclTerraform(struct.wasInactiveAt),
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
var DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._excludePrefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.excludePrefix = this._excludePrefix;
            }
            if (this._existedAt !== undefined) {
                hasAnyValues = true;
                internalValueResult.existedAt = this._existedAt;
            }
            if (this._includePrefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.includePrefix = this._includePrefix;
            }
            if (this._isDeleted !== undefined) {
                hasAnyValues = true;
                internalValueResult.isDeleted = this._isDeleted;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            if (this._uuid !== undefined) {
                hasAnyValues = true;
                internalValueResult.uuid = this._uuid;
            }
            if (this._wasActiveAt !== undefined) {
                hasAnyValues = true;
                internalValueResult.wasActiveAt = this._wasActiveAt;
            }
            if (this._wasInactiveAt !== undefined) {
                hasAnyValues = true;
                internalValueResult.wasInactiveAt = this._wasInactiveAt;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._excludePrefix = undefined;
                this._existedAt = undefined;
                this._includePrefix = undefined;
                this._isDeleted = undefined;
                this._name = undefined;
                this._status = undefined;
                this._uuid = undefined;
                this._wasActiveAt = undefined;
                this._wasInactiveAt = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._excludePrefix = value.excludePrefix;
                this._existedAt = value.existedAt;
                this._includePrefix = value.includePrefix;
                this._isDeleted = value.isDeleted;
                this._name = value.name;
                this._status = value.status;
                this._uuid = value.uuid;
                this._wasActiveAt = value.wasActiveAt;
                this._wasInactiveAt = value.wasInactiveAt;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "excludePrefix", {
        get: function () {
            return this.getStringAttribute('exclude_prefix');
        },
        set: function (value) {
            this._excludePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype.resetExcludePrefix = function () {
        this._excludePrefix = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "excludePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "existedAt", {
        get: function () {
            return this.getStringAttribute('existed_at');
        },
        set: function (value) {
            this._existedAt = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype.resetExistedAt = function () {
        this._existedAt = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "existedAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._existedAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "includePrefix", {
        get: function () {
            return this.getStringAttribute('include_prefix');
        },
        set: function (value) {
            this._includePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype.resetIncludePrefix = function () {
        this._includePrefix = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "includePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "isDeleted", {
        get: function () {
            return this.getBooleanAttribute('is_deleted');
        },
        set: function (value) {
            this._isDeleted = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype.resetIsDeleted = function () {
        this._isDeleted = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "isDeletedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDeleted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "uuid", {
        get: function () {
            return this.getStringAttribute('uuid');
        },
        set: function (value) {
            this._uuid = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype.resetUuid = function () {
        this._uuid = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "uuidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uuid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "wasActiveAt", {
        get: function () {
            return this.getStringAttribute('was_active_at');
        },
        set: function (value) {
            this._wasActiveAt = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype.resetWasActiveAt = function () {
        this._wasActiveAt = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "wasActiveAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wasActiveAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "wasInactiveAt", {
        get: function () {
            return this.getStringAttribute('was_inactive_at');
        },
        set: function (value) {
            this._wasInactiveAt = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype.resetWasInactiveAt = function () {
        this._wasInactiveAt = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.prototype, "wasInactiveAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wasInactiveAt;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference = DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector}
*/
var DataCloudflareZeroTrustTunnelWarpConnector = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelWarpConnector, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelWarpConnectorConfig = {}
    */
    function DataCloudflareZeroTrustTunnelWarpConnector(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_warp_connector',
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
        _this._connections = new DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList(_this, "connections", false);
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._tunnelId = config.tunnelId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelWarpConnector to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelWarpConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelWarpConnector to import is found
    */
    DataCloudflareZeroTrustTunnelWarpConnector.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_warp_connector", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnector.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "accountTag", {
        // account_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "connections", {
        get: function () {
            return this._connections;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "connsActiveAt", {
        // conns_active_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('conns_active_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "connsInactiveAt", {
        // conns_inactive_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('conns_inactive_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnector.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZeroTrustTunnelWarpConnector.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "metadata", {
        // metadata - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('metadata');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "tunType", {
        // tun_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tun_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnector.prototype.resetTunnelId = function () {
        this._tunnelId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnector.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustTunnelWarpConnector.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustTunnelWarpConnectorFilterToTerraform(this._filter.internalValue),
            tunnel_id: cdktf.stringToTerraform(this._tunnelId),
        };
    };
    DataCloudflareZeroTrustTunnelWarpConnector.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareZeroTrustTunnelWarpConnectorFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustTunnelWarpConnectorFilter",
            },
            tunnel_id: {
                value: cdktf.stringToHclTerraform(this._tunnelId),
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
    DataCloudflareZeroTrustTunnelWarpConnector.tfResourceType = "cloudflare_zero_trust_tunnel_warp_connector";
    return DataCloudflareZeroTrustTunnelWarpConnector;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustTunnelWarpConnector = DataCloudflareZeroTrustTunnelWarpConnector;
