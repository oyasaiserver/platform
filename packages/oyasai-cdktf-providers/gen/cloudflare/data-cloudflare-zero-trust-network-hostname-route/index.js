"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route
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
exports.DataCloudflareZeroTrustNetworkHostnameRoute = exports.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference = void 0;
exports.dataCloudflareZeroTrustNetworkHostnameRouteFilterToTerraform = dataCloudflareZeroTrustNetworkHostnameRouteFilterToTerraform;
exports.dataCloudflareZeroTrustNetworkHostnameRouteFilterToHclTerraform = dataCloudflareZeroTrustNetworkHostnameRouteFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustNetworkHostnameRouteFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        existed_at: cdktf.stringToTerraform(struct.existedAt),
        hostname: cdktf.stringToTerraform(struct.hostname),
        id: cdktf.stringToTerraform(struct.id),
        is_deleted: cdktf.booleanToTerraform(struct.isDeleted),
        tunnel_id: cdktf.stringToTerraform(struct.tunnelId),
    };
}
function dataCloudflareZeroTrustNetworkHostnameRouteFilterToHclTerraform(struct) {
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
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
        tunnel_id: {
            value: cdktf.stringToHclTerraform(struct.tunnelId),
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
var DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "internalValue", {
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
            if (this._hostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = this._hostname;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._isDeleted !== undefined) {
                hasAnyValues = true;
                internalValueResult.isDeleted = this._isDeleted;
            }
            if (this._tunnelId !== undefined) {
                hasAnyValues = true;
                internalValueResult.tunnelId = this._tunnelId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._comment = undefined;
                this._existedAt = undefined;
                this._hostname = undefined;
                this._id = undefined;
                this._isDeleted = undefined;
                this._tunnelId = undefined;
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
                this._hostname = value.hostname;
                this._id = value.id;
                this._isDeleted = value.isDeleted;
                this._tunnelId = value.tunnelId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "existedAt", {
        get: function () {
            return this.getStringAttribute('existed_at');
        },
        set: function (value) {
            this._existedAt = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype.resetExistedAt = function () {
        this._existedAt = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "existedAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._existedAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "isDeleted", {
        get: function () {
            return this.getBooleanAttribute('is_deleted');
        },
        set: function (value) {
            this._isDeleted = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype.resetIsDeleted = function () {
        this._isDeleted = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "isDeletedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isDeleted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype.resetTunnelId = function () {
        this._tunnelId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference = DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route}
*/
var DataCloudflareZeroTrustNetworkHostnameRoute = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustNetworkHostnameRoute, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustNetworkHostnameRouteConfig = {}
    */
    function DataCloudflareZeroTrustNetworkHostnameRoute(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_network_hostname_route',
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
        _this._filter = new DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._hostnameRouteId = config.hostnameRouteId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustNetworkHostnameRoute to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustNetworkHostnameRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustNetworkHostnameRoute to import is found
    */
    DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_network_hostname_route", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRoute.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "deletedAt", {
        // deleted_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deleted_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRoute.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZeroTrustNetworkHostnameRoute.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "hostnameRouteId", {
        get: function () {
            return this.getStringAttribute('hostname_route_id');
        },
        set: function (value) {
            this._hostnameRouteId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustNetworkHostnameRoute.prototype.resetHostnameRouteId = function () {
        this._hostnameRouteId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "hostnameRouteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostnameRouteId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "tunnelId", {
        // tunnel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustNetworkHostnameRoute.prototype, "tunnelName", {
        // tunnel_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tunnel_name');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustNetworkHostnameRoute.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustNetworkHostnameRouteFilterToTerraform(this._filter.internalValue),
            hostname_route_id: cdktf.stringToTerraform(this._hostnameRouteId),
        };
    };
    DataCloudflareZeroTrustNetworkHostnameRoute.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareZeroTrustNetworkHostnameRouteFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustNetworkHostnameRouteFilter",
            },
            hostname_route_id: {
                value: cdktf.stringToHclTerraform(this._hostnameRouteId),
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
    DataCloudflareZeroTrustNetworkHostnameRoute.tfResourceType = "cloudflare_zero_trust_network_hostname_route";
    return DataCloudflareZeroTrustNetworkHostnameRoute;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustNetworkHostnameRoute = DataCloudflareZeroTrustNetworkHostnameRoute;
