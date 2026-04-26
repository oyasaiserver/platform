"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site
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
exports.DataCloudflareMagicTransitSite = exports.DataCloudflareMagicTransitSiteLocationOutputReference = exports.DataCloudflareMagicTransitSiteFilterOutputReference = void 0;
exports.dataCloudflareMagicTransitSiteFilterToTerraform = dataCloudflareMagicTransitSiteFilterToTerraform;
exports.dataCloudflareMagicTransitSiteFilterToHclTerraform = dataCloudflareMagicTransitSiteFilterToHclTerraform;
exports.dataCloudflareMagicTransitSiteLocationToTerraform = dataCloudflareMagicTransitSiteLocationToTerraform;
exports.dataCloudflareMagicTransitSiteLocationToHclTerraform = dataCloudflareMagicTransitSiteLocationToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicTransitSiteFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connectorid: cdktf.stringToTerraform(struct.connectorid),
    };
}
function dataCloudflareMagicTransitSiteFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        connectorid: {
            value: cdktf.stringToHclTerraform(struct.connectorid),
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
var DataCloudflareMagicTransitSiteFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._connectorid !== undefined) {
                hasAnyValues = true;
                internalValueResult.connectorid = this._connectorid;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._connectorid = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._connectorid = value.connectorid;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteFilterOutputReference.prototype, "connectorid", {
        get: function () {
            return this.getStringAttribute('connectorid');
        },
        set: function (value) {
            this._connectorid = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSiteFilterOutputReference.prototype.resetConnectorid = function () {
        this._connectorid = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteFilterOutputReference.prototype, "connectoridInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectorid;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteFilterOutputReference = DataCloudflareMagicTransitSiteFilterOutputReference;
function dataCloudflareMagicTransitSiteLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteLocationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteLocationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteLocationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteLocationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteLocationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteLocationOutputReference.prototype, "lat", {
        // lat - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lat');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteLocationOutputReference.prototype, "lon", {
        // lon - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lon');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteLocationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteLocationOutputReference = DataCloudflareMagicTransitSiteLocationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site cloudflare_magic_transit_site}
*/
var DataCloudflareMagicTransitSite = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSite, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site cloudflare_magic_transit_site} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteConfig = {}
    */
    function DataCloudflareMagicTransitSite(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_site',
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
        _this._filter = new DataCloudflareMagicTransitSiteFilterOutputReference(_this, "filter");
        // location - computed: true, optional: false, required: false
        _this._location = new DataCloudflareMagicTransitSiteLocationOutputReference(_this, "location");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._siteId = config.siteId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSite to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSite to import is found
    */
    DataCloudflareMagicTransitSite.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSite.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "connectorId", {
        // connector_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('connector_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSite.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareMagicTransitSite.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "haMode", {
        // ha_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ha_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "secondaryConnectorId", {
        // secondary_connector_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secondary_connector_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "siteId", {
        get: function () {
            return this.getStringAttribute('site_id');
        },
        set: function (value) {
            this._siteId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSite.prototype.resetSiteId = function () {
        this._siteId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSite.prototype, "siteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._siteId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicTransitSite.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareMagicTransitSiteFilterToTerraform(this._filter.internalValue),
            site_id: cdktf.stringToTerraform(this._siteId),
        };
    };
    DataCloudflareMagicTransitSite.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareMagicTransitSiteFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareMagicTransitSiteFilter",
            },
            site_id: {
                value: cdktf.stringToHclTerraform(this._siteId),
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
    DataCloudflareMagicTransitSite.tfResourceType = "cloudflare_magic_transit_site";
    return DataCloudflareMagicTransitSite;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicTransitSite = DataCloudflareMagicTransitSite;
