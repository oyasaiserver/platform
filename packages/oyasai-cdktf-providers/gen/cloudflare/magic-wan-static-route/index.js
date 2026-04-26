"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route
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
exports.MagicWanStaticRoute = exports.MagicWanStaticRouteScopeOutputReference = void 0;
exports.magicWanStaticRouteScopeToTerraform = magicWanStaticRouteScopeToTerraform;
exports.magicWanStaticRouteScopeToHclTerraform = magicWanStaticRouteScopeToHclTerraform;
var cdktf = require("cdktf");
function magicWanStaticRouteScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        colo_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.coloNames),
        colo_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.coloRegions),
    };
}
function magicWanStaticRouteScopeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        colo_names: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.coloNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        colo_regions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.coloRegions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var MagicWanStaticRouteScopeOutputReference = /** @class */ (function (_super) {
    __extends(MagicWanStaticRouteScopeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicWanStaticRouteScopeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicWanStaticRouteScopeOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._coloNames !== undefined) {
                hasAnyValues = true;
                internalValueResult.coloNames = this._coloNames;
            }
            if (this._coloRegions !== undefined) {
                hasAnyValues = true;
                internalValueResult.coloRegions = this._coloRegions;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._coloNames = undefined;
                this._coloRegions = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._coloNames = value.coloNames;
                this._coloRegions = value.coloRegions;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRouteScopeOutputReference.prototype, "coloNames", {
        get: function () {
            return this.getListAttribute('colo_names');
        },
        set: function (value) {
            this._coloNames = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanStaticRouteScopeOutputReference.prototype.resetColoNames = function () {
        this._coloNames = undefined;
    };
    Object.defineProperty(MagicWanStaticRouteScopeOutputReference.prototype, "coloNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._coloNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRouteScopeOutputReference.prototype, "coloRegions", {
        get: function () {
            return this.getListAttribute('colo_regions');
        },
        set: function (value) {
            this._coloRegions = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanStaticRouteScopeOutputReference.prototype.resetColoRegions = function () {
        this._coloRegions = undefined;
    };
    Object.defineProperty(MagicWanStaticRouteScopeOutputReference.prototype, "coloRegionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._coloRegions;
        },
        enumerable: false,
        configurable: true
    });
    return MagicWanStaticRouteScopeOutputReference;
}(cdktf.ComplexObject));
exports.MagicWanStaticRouteScopeOutputReference = MagicWanStaticRouteScopeOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route cloudflare_magic_wan_static_route}
*/
var MagicWanStaticRoute = /** @class */ (function (_super) {
    __extends(MagicWanStaticRoute, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route cloudflare_magic_wan_static_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicWanStaticRouteConfig
    */
    function MagicWanStaticRoute(scope, id, config) {
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
        // scope - computed: false, optional: true, required: false
        _this._scope = new MagicWanStaticRouteScopeOutputReference(_this, "scope");
        _this._accountId = config.accountId;
        _this._description = config.description;
        _this._nexthop = config.nexthop;
        _this._prefix = config.prefix;
        _this._priority = config.priority;
        _this._scope.internalValue = config.scope;
        _this._weight = config.weight;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicWanStaticRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicWanStaticRoute to import
    * @param importFromId The id of the existing MagicWanStaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicWanStaticRoute to import is found
    */
    MagicWanStaticRoute.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_static_route", importId: importFromId, provider: provider });
    };
    Object.defineProperty(MagicWanStaticRoute.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanStaticRoute.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(MagicWanStaticRoute.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "nexthop", {
        get: function () {
            return this.getStringAttribute('nexthop');
        },
        set: function (value) {
            this._nexthop = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "nexthopInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nexthop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "prefix", {
        get: function () {
            return this.getStringAttribute('prefix');
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "prefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanStaticRoute.prototype.putScope = function (value) {
        this._scope.internalValue = value;
    };
    MagicWanStaticRoute.prototype.resetScope = function () {
        this._scope.internalValue = undefined;
    };
    Object.defineProperty(MagicWanStaticRoute.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanStaticRoute.prototype, "weight", {
        get: function () {
            return this.getNumberAttribute('weight');
        },
        set: function (value) {
            this._weight = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanStaticRoute.prototype.resetWeight = function () {
        this._weight = undefined;
    };
    Object.defineProperty(MagicWanStaticRoute.prototype, "weightInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._weight;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MagicWanStaticRoute.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            description: cdktf.stringToTerraform(this._description),
            nexthop: cdktf.stringToTerraform(this._nexthop),
            prefix: cdktf.stringToTerraform(this._prefix),
            priority: cdktf.numberToTerraform(this._priority),
            scope: magicWanStaticRouteScopeToTerraform(this._scope.internalValue),
            weight: cdktf.numberToTerraform(this._weight),
        };
    };
    MagicWanStaticRoute.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            nexthop: {
                value: cdktf.stringToHclTerraform(this._nexthop),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            prefix: {
                value: cdktf.stringToHclTerraform(this._prefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            scope: {
                value: magicWanStaticRouteScopeToHclTerraform(this._scope.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanStaticRouteScope",
            },
            weight: {
                value: cdktf.numberToHclTerraform(this._weight),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    MagicWanStaticRoute.tfResourceType = "cloudflare_magic_wan_static_route";
    return MagicWanStaticRoute;
}(cdktf.TerraformResource));
exports.MagicWanStaticRoute = MagicWanStaticRoute;
