"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_catch_all
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
exports.DataCloudflareEmailRoutingCatchAll = exports.DataCloudflareEmailRoutingCatchAllMatchersList = exports.DataCloudflareEmailRoutingCatchAllMatchersOutputReference = exports.DataCloudflareEmailRoutingCatchAllActionsList = exports.DataCloudflareEmailRoutingCatchAllActionsOutputReference = void 0;
exports.dataCloudflareEmailRoutingCatchAllActionsToTerraform = dataCloudflareEmailRoutingCatchAllActionsToTerraform;
exports.dataCloudflareEmailRoutingCatchAllActionsToHclTerraform = dataCloudflareEmailRoutingCatchAllActionsToHclTerraform;
exports.dataCloudflareEmailRoutingCatchAllMatchersToTerraform = dataCloudflareEmailRoutingCatchAllMatchersToTerraform;
exports.dataCloudflareEmailRoutingCatchAllMatchersToHclTerraform = dataCloudflareEmailRoutingCatchAllMatchersToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareEmailRoutingCatchAllActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingCatchAllActionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingCatchAllActionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingCatchAllActionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingCatchAllActionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingCatchAllActionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareEmailRoutingCatchAllActionsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingCatchAllActionsOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingCatchAllActionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingCatchAllActionsOutputReference = DataCloudflareEmailRoutingCatchAllActionsOutputReference;
var DataCloudflareEmailRoutingCatchAllActionsList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingCatchAllActionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingCatchAllActionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailRoutingCatchAllActionsList.prototype.get = function (index) {
        return new DataCloudflareEmailRoutingCatchAllActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailRoutingCatchAllActionsList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailRoutingCatchAllActionsList = DataCloudflareEmailRoutingCatchAllActionsList;
function dataCloudflareEmailRoutingCatchAllMatchersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingCatchAllMatchersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingCatchAllMatchersOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingCatchAllMatchersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingCatchAllMatchersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingCatchAllMatchersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareEmailRoutingCatchAllMatchersOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingCatchAllMatchersOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingCatchAllMatchersOutputReference = DataCloudflareEmailRoutingCatchAllMatchersOutputReference;
var DataCloudflareEmailRoutingCatchAllMatchersList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingCatchAllMatchersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingCatchAllMatchersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailRoutingCatchAllMatchersList.prototype.get = function (index) {
        return new DataCloudflareEmailRoutingCatchAllMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailRoutingCatchAllMatchersList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailRoutingCatchAllMatchersList = DataCloudflareEmailRoutingCatchAllMatchersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_catch_all cloudflare_email_routing_catch_all}
*/
var DataCloudflareEmailRoutingCatchAll = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingCatchAll, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_catch_all cloudflare_email_routing_catch_all} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingCatchAllConfig = {}
    */
    function DataCloudflareEmailRoutingCatchAll(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_routing_catch_all',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // actions - computed: true, optional: false, required: false
        _this._actions = new DataCloudflareEmailRoutingCatchAllActionsList(_this, "actions", false);
        // matchers - computed: true, optional: false, required: false
        _this._matchers = new DataCloudflareEmailRoutingCatchAllMatchersList(_this, "matchers", false);
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingCatchAll resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingCatchAll to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingCatchAll that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_catch_all#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingCatchAll to import is found
    */
    DataCloudflareEmailRoutingCatchAll.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_routing_catch_all", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareEmailRoutingCatchAll.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingCatchAll.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingCatchAll.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingCatchAll.prototype, "matchers", {
        get: function () {
            return this._matchers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingCatchAll.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingCatchAll.prototype, "tag", {
        // tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingCatchAll.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingCatchAll.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingCatchAll.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareEmailRoutingCatchAll.prototype.synthesizeAttributes = function () {
        return {
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareEmailRoutingCatchAll.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflareEmailRoutingCatchAll.tfResourceType = "cloudflare_email_routing_catch_all";
    return DataCloudflareEmailRoutingCatchAll;
}(cdktf.TerraformDataSource));
exports.DataCloudflareEmailRoutingCatchAll = DataCloudflareEmailRoutingCatchAll;
