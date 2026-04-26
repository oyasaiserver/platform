"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes
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
exports.DataCloudflareZeroTrustNetworkHostnameRoutes = exports.DataCloudflareZeroTrustNetworkHostnameRoutesResultList = exports.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference = void 0;
exports.dataCloudflareZeroTrustNetworkHostnameRoutesResultToTerraform = dataCloudflareZeroTrustNetworkHostnameRoutesResultToTerraform;
exports.dataCloudflareZeroTrustNetworkHostnameRoutesResultToHclTerraform = dataCloudflareZeroTrustNetworkHostnameRoutesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustNetworkHostnameRoutesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustNetworkHostnameRoutesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference.prototype, "tunnelName", {
        // tunnel_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference = DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference;
var DataCloudflareZeroTrustNetworkHostnameRoutesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustNetworkHostnameRoutesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustNetworkHostnameRoutesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustNetworkHostnameRoutesResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustNetworkHostnameRoutesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustNetworkHostnameRoutesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustNetworkHostnameRoutesResultList = DataCloudflareZeroTrustNetworkHostnameRoutesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes cloudflare_zero_trust_network_hostname_routes}
*/
var DataCloudflareZeroTrustNetworkHostnameRoutes = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustNetworkHostnameRoutes, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes cloudflare_zero_trust_network_hostname_routes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustNetworkHostnameRoutesConfig = {}
    */
    function DataCloudflareZeroTrustNetworkHostnameRoutes(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_network_hostname_routes',
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
        _this._result = new DataCloudflareZeroTrustNetworkHostnameRoutesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._comment = config.comment;
        _this._existedAt = config.existedAt;
        _this._hostname = config.hostname;
        _this._id = config.id;
        _this._isDeleted = config.isDeleted;
        _this._maxItems = config.maxItems;
        _this._tunnelId = config.tunnelId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoutes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustNetworkHostnameRoutes to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustNetworkHostnameRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_routes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustNetworkHostnameRoutes to import is found
    */
    DataCloudflareZeroTrustNetworkHostnameRoutes.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_network_hostname_routes", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRoutes.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRoutes.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "existedAt", {
        get: function () {
            return this.getStringAttribute('existed_at');
        },
        set: function (value) {
            this._existedAt = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRoutes.prototype.resetExistedAt = function () {
        this._existedAt = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "existedAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._existedAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRoutes.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRoutes.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "isDeleted", {
        get: function () {
            return this.getBooleanAttribute('is_deleted');
        },
        set: function (value) {
            this._isDeleted = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRoutes.prototype.resetIsDeleted = function () {
        this._isDeleted = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "isDeletedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDeleted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRoutes.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRoutes.prototype.resetTunnelId = function () {
        this._tunnelId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoutes.prototype, "tunnelIdInput", {
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
    DataCloudflareZeroTrustNetworkHostnameRoutes.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            comment: cdktf.stringToTerraform(this._comment),
            existed_at: cdktf.stringToTerraform(this._existedAt),
            hostname: cdktf.stringToTerraform(this._hostname),
            id: cdktf.stringToTerraform(this._id),
            is_deleted: cdktf.booleanToTerraform(this._isDeleted),
            max_items: cdktf.numberToTerraform(this._maxItems),
            tunnel_id: cdktf.stringToTerraform(this._tunnelId),
        };
    };
    DataCloudflareZeroTrustNetworkHostnameRoutes.prototype.synthesizeHclAttributes = function () {
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
            hostname: {
                value: cdktf.stringToHclTerraform(this._hostname),
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
    DataCloudflareZeroTrustNetworkHostnameRoutes.tfResourceType = "cloudflare_zero_trust_network_hostname_routes";
    return DataCloudflareZeroTrustNetworkHostnameRoutes;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustNetworkHostnameRoutes = DataCloudflareZeroTrustNetworkHostnameRoutes;
