"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_sites
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
exports.DataCloudflareMagicTransitSites = exports.DataCloudflareMagicTransitSitesResultList = exports.DataCloudflareMagicTransitSitesResultOutputReference = exports.DataCloudflareMagicTransitSitesResultLocationOutputReference = void 0;
exports.dataCloudflareMagicTransitSitesResultLocationToTerraform = dataCloudflareMagicTransitSitesResultLocationToTerraform;
exports.dataCloudflareMagicTransitSitesResultLocationToHclTerraform = dataCloudflareMagicTransitSitesResultLocationToHclTerraform;
exports.dataCloudflareMagicTransitSitesResultToTerraform = dataCloudflareMagicTransitSitesResultToTerraform;
exports.dataCloudflareMagicTransitSitesResultToHclTerraform = dataCloudflareMagicTransitSitesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicTransitSitesResultLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSitesResultLocationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSitesResultLocationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSitesResultLocationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSitesResultLocationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSitesResultLocationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSitesResultLocationOutputReference.prototype, "lat", {
        // lat - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lat');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSitesResultLocationOutputReference.prototype, "lon", {
        // lon - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lon');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSitesResultLocationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSitesResultLocationOutputReference = DataCloudflareMagicTransitSitesResultLocationOutputReference;
function dataCloudflareMagicTransitSitesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSitesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSitesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSitesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitSitesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // location - computed: true, optional: false, required: false
        _this._location = new DataCloudflareMagicTransitSitesResultLocationOutputReference(_this, "location");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSitesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSitesResultOutputReference.prototype, "connectorId", {
        // connector_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('connector_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSitesResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSitesResultOutputReference.prototype, "haMode", {
        // ha_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ha_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSitesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSitesResultOutputReference.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSitesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSitesResultOutputReference.prototype, "secondaryConnectorId", {
        // secondary_connector_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secondary_connector_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSitesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSitesResultOutputReference = DataCloudflareMagicTransitSitesResultOutputReference;
var DataCloudflareMagicTransitSitesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSitesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareMagicTransitSitesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareMagicTransitSitesResultList.prototype.get = function (index) {
        return new DataCloudflareMagicTransitSitesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareMagicTransitSitesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareMagicTransitSitesResultList = DataCloudflareMagicTransitSitesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_sites cloudflare_magic_transit_sites}
*/
var DataCloudflareMagicTransitSites = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSites, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_sites cloudflare_magic_transit_sites} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSitesConfig = {}
    */
    function DataCloudflareMagicTransitSites(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_sites',
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
        _this._result = new DataCloudflareMagicTransitSitesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._connectorid = config.connectorid;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSites resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSites to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSites that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_sites#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSites to import is found
    */
    DataCloudflareMagicTransitSites.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_sites", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicTransitSites.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSites.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSites.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSites.prototype, "connectorid", {
        get: function () {
            return this.getStringAttribute('connectorid');
        },
        set: function (value) {
            this._connectorid = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSites.prototype.resetConnectorid = function () {
        this._connectorid = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSites.prototype, "connectoridInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectorid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSites.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSites.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSites.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSites.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicTransitSites.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            connectorid: cdktf.stringToTerraform(this._connectorid),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareMagicTransitSites.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connectorid: {
                value: cdktf.stringToHclTerraform(this._connectorid),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
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
    DataCloudflareMagicTransitSites.tfResourceType = "cloudflare_magic_transit_sites";
    return DataCloudflareMagicTransitSites;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicTransitSites = DataCloudflareMagicTransitSites;
