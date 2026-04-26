"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connectors
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
exports.DataCloudflareZeroTrustTunnelWarpConnectors = exports.DataCloudflareZeroTrustTunnelWarpConnectorsResultList = exports.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference = exports.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList = exports.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference = void 0;
exports.dataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsToTerraform = dataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsToTerraform;
exports.dataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsToHclTerraform = dataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsToHclTerraform;
exports.dataCloudflareZeroTrustTunnelWarpConnectorsResultToTerraform = dataCloudflareZeroTrustTunnelWarpConnectorsResultToTerraform;
exports.dataCloudflareZeroTrustTunnelWarpConnectorsResultToHclTerraform = dataCloudflareZeroTrustTunnelWarpConnectorsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.prototype, "clientId", {
        // client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.prototype, "clientVersion", {
        // client_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.prototype, "coloName", {
        // colo_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('colo_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.prototype, "isPendingReconnect", {
        // is_pending_reconnect - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_pending_reconnect');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.prototype, "openedAt", {
        // opened_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('opened_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.prototype, "originIp", {
        // origin_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('origin_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.prototype, "uuid", {
        // uuid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uuid');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference = DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference;
var DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList = DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList;
function dataCloudflareZeroTrustTunnelWarpConnectorsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustTunnelWarpConnectorsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // connections - computed: true, optional: false, required: false
        _this._connections = new DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList(_this, "connections", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "accountTag", {
        // account_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "connections", {
        get: function () {
            return this._connections;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "connsActiveAt", {
        // conns_active_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('conns_active_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "connsInactiveAt", {
        // conns_inactive_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('conns_inactive_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "metadata", {
        // metadata - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('metadata');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.prototype, "tunType", {
        // tun_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tun_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference = DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference;
var DataCloudflareZeroTrustTunnelWarpConnectorsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelWarpConnectorsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelWarpConnectorsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustTunnelWarpConnectorsResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustTunnelWarpConnectorsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustTunnelWarpConnectorsResultList = DataCloudflareZeroTrustTunnelWarpConnectorsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connectors cloudflare_zero_trust_tunnel_warp_connectors}
*/
var DataCloudflareZeroTrustTunnelWarpConnectors = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelWarpConnectors, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connectors cloudflare_zero_trust_tunnel_warp_connectors} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelWarpConnectorsConfig = {}
    */
    function DataCloudflareZeroTrustTunnelWarpConnectors(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_warp_connectors',
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
        _this._result = new DataCloudflareZeroTrustTunnelWarpConnectorsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._excludePrefix = config.excludePrefix;
        _this._existedAt = config.existedAt;
        _this._includePrefix = config.includePrefix;
        _this._isDeleted = config.isDeleted;
        _this._maxItems = config.maxItems;
        _this._name = config.name;
        _this._status = config.status;
        _this._uuid = config.uuid;
        _this._wasActiveAt = config.wasActiveAt;
        _this._wasInactiveAt = config.wasInactiveAt;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnectors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelWarpConnectors to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelWarpConnectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_warp_connectors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelWarpConnectors to import is found
    */
    DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_warp_connectors", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "excludePrefix", {
        get: function () {
            return this.getStringAttribute('exclude_prefix');
        },
        set: function (value) {
            this._excludePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.resetExcludePrefix = function () {
        this._excludePrefix = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "excludePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "existedAt", {
        get: function () {
            return this.getStringAttribute('existed_at');
        },
        set: function (value) {
            this._existedAt = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.resetExistedAt = function () {
        this._existedAt = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "existedAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._existedAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "includePrefix", {
        get: function () {
            return this.getStringAttribute('include_prefix');
        },
        set: function (value) {
            this._includePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.resetIncludePrefix = function () {
        this._includePrefix = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "includePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "isDeleted", {
        get: function () {
            return this.getBooleanAttribute('is_deleted');
        },
        set: function (value) {
            this._isDeleted = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.resetIsDeleted = function () {
        this._isDeleted = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "isDeletedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDeleted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "uuid", {
        get: function () {
            return this.getStringAttribute('uuid');
        },
        set: function (value) {
            this._uuid = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.resetUuid = function () {
        this._uuid = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "uuidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uuid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "wasActiveAt", {
        get: function () {
            return this.getStringAttribute('was_active_at');
        },
        set: function (value) {
            this._wasActiveAt = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.resetWasActiveAt = function () {
        this._wasActiveAt = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "wasActiveAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wasActiveAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "wasInactiveAt", {
        get: function () {
            return this.getStringAttribute('was_inactive_at');
        },
        set: function (value) {
            this._wasInactiveAt = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.resetWasInactiveAt = function () {
        this._wasInactiveAt = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelWarpConnectors.prototype, "wasInactiveAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wasInactiveAt;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            exclude_prefix: cdktf.stringToTerraform(this._excludePrefix),
            existed_at: cdktf.stringToTerraform(this._existedAt),
            include_prefix: cdktf.stringToTerraform(this._includePrefix),
            is_deleted: cdktf.booleanToTerraform(this._isDeleted),
            max_items: cdktf.numberToTerraform(this._maxItems),
            name: cdktf.stringToTerraform(this._name),
            status: cdktf.stringToTerraform(this._status),
            uuid: cdktf.stringToTerraform(this._uuid),
            was_active_at: cdktf.stringToTerraform(this._wasActiveAt),
            was_inactive_at: cdktf.stringToTerraform(this._wasInactiveAt),
        };
    };
    DataCloudflareZeroTrustTunnelWarpConnectors.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            exclude_prefix: {
                value: cdktf.stringToHclTerraform(this._excludePrefix),
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
            include_prefix: {
                value: cdktf.stringToHclTerraform(this._includePrefix),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            uuid: {
                value: cdktf.stringToHclTerraform(this._uuid),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            was_active_at: {
                value: cdktf.stringToHclTerraform(this._wasActiveAt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            was_inactive_at: {
                value: cdktf.stringToHclTerraform(this._wasInactiveAt),
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
    DataCloudflareZeroTrustTunnelWarpConnectors.tfResourceType = "cloudflare_zero_trust_tunnel_warp_connectors";
    return DataCloudflareZeroTrustTunnelWarpConnectors;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustTunnelWarpConnectors = DataCloudflareZeroTrustTunnelWarpConnectors;
