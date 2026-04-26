"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_static_route
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
exports.DataCloudflareMagicWanStaticRoute = exports.DataCloudflareMagicWanStaticRouteRouteOutputReference = exports.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference = void 0;
exports.dataCloudflareMagicWanStaticRouteRouteScopeToTerraform = dataCloudflareMagicWanStaticRouteRouteScopeToTerraform;
exports.dataCloudflareMagicWanStaticRouteRouteScopeToHclTerraform = dataCloudflareMagicWanStaticRouteRouteScopeToHclTerraform;
exports.dataCloudflareMagicWanStaticRouteRouteToTerraform = dataCloudflareMagicWanStaticRouteRouteToTerraform;
exports.dataCloudflareMagicWanStaticRouteRouteToHclTerraform = dataCloudflareMagicWanStaticRouteRouteToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicWanStaticRouteRouteScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanStaticRouteRouteScopeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanStaticRouteRouteScopeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanStaticRouteRouteScopeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanStaticRouteRouteScopeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.prototype, "coloNames", {
        // colo_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('colo_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.prototype, "coloRegions", {
        // colo_regions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('colo_regions');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanStaticRouteRouteScopeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference = DataCloudflareMagicWanStaticRouteRouteScopeOutputReference;
function dataCloudflareMagicWanStaticRouteRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanStaticRouteRouteToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanStaticRouteRouteOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanStaticRouteRouteOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanStaticRouteRouteOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // scope - computed: true, optional: false, required: false
        _this._scope = new DataCloudflareMagicWanStaticRouteRouteScopeOutputReference(_this, "scope");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteOutputReference.prototype, "nexthop", {
        // nexthop - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('nexthop');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteOutputReference.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteOutputReference.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRouteRouteOutputReference.prototype, "weight", {
        // weight - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('weight');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanStaticRouteRouteOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanStaticRouteRouteOutputReference = DataCloudflareMagicWanStaticRouteRouteOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_static_route cloudflare_magic_wan_static_route}
*/
var DataCloudflareMagicWanStaticRoute = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanStaticRoute, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_static_route cloudflare_magic_wan_static_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicWanStaticRouteConfig
    */
    function DataCloudflareMagicWanStaticRoute(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_wan_static_route',
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
        // route - computed: true, optional: false, required: false
        _this._route = new DataCloudflareMagicWanStaticRouteRouteOutputReference(_this, "route");
        _this._accountId = config.accountId;
        _this._routeId = config.routeId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicWanStaticRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicWanStaticRoute to import
    * @param importFromId The id of the existing DataCloudflareMagicWanStaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_static_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicWanStaticRoute to import is found
    */
    DataCloudflareMagicWanStaticRoute.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_static_route", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicWanStaticRoute.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicWanStaticRoute.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicWanStaticRoute.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRoute.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRoute.prototype, "route", {
        get: function () {
            return this._route;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRoute.prototype, "routeId", {
        get: function () {
            return this.getStringAttribute('route_id');
        },
        set: function (value) {
            this._routeId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanStaticRoute.prototype, "routeIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicWanStaticRoute.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            route_id: cdktf.stringToTerraform(this._routeId),
        };
    };
    DataCloudflareMagicWanStaticRoute.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
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
    DataCloudflareMagicWanStaticRoute.tfResourceType = "cloudflare_magic_wan_static_route";
    return DataCloudflareMagicWanStaticRoute;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicWanStaticRoute = DataCloudflareMagicWanStaticRoute;
