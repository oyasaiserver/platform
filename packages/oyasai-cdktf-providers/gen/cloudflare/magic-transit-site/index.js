"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site
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
exports.MagicTransitSite = exports.MagicTransitSiteLocationOutputReference = void 0;
exports.magicTransitSiteLocationToTerraform = magicTransitSiteLocationToTerraform;
exports.magicTransitSiteLocationToHclTerraform = magicTransitSiteLocationToHclTerraform;
var cdktf = require("cdktf");
function magicTransitSiteLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lat: cdktf.stringToTerraform(struct.lat),
        lon: cdktf.stringToTerraform(struct.lon),
    };
}
function magicTransitSiteLocationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        lat: {
            value: cdktf.stringToHclTerraform(struct.lat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lon: {
            value: cdktf.stringToHclTerraform(struct.lon),
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
var MagicTransitSiteLocationOutputReference = /** @class */ (function (_super) {
    __extends(MagicTransitSiteLocationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicTransitSiteLocationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicTransitSiteLocationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._lat !== undefined) {
                hasAnyValues = true;
                internalValueResult.lat = this._lat;
            }
            if (this._lon !== undefined) {
                hasAnyValues = true;
                internalValueResult.lon = this._lon;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._lat = undefined;
                this._lon = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._lat = value.lat;
                this._lon = value.lon;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLocationOutputReference.prototype, "lat", {
        get: function () {
            return this.getStringAttribute('lat');
        },
        set: function (value) {
            this._lat = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLocationOutputReference.prototype.resetLat = function () {
        this._lat = undefined;
    };
    Object.defineProperty(MagicTransitSiteLocationOutputReference.prototype, "latInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteLocationOutputReference.prototype, "lon", {
        get: function () {
            return this.getStringAttribute('lon');
        },
        set: function (value) {
            this._lon = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteLocationOutputReference.prototype.resetLon = function () {
        this._lon = undefined;
    };
    Object.defineProperty(MagicTransitSiteLocationOutputReference.prototype, "lonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lon;
        },
        enumerable: false,
        configurable: true
    });
    return MagicTransitSiteLocationOutputReference;
}(cdktf.ComplexObject));
exports.MagicTransitSiteLocationOutputReference = MagicTransitSiteLocationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site cloudflare_magic_transit_site}
*/
var MagicTransitSite = /** @class */ (function (_super) {
    __extends(MagicTransitSite, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site cloudflare_magic_transit_site} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitSiteConfig
    */
    function MagicTransitSite(scope, id, config) {
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
        // location - computed: false, optional: true, required: false
        _this._location = new MagicTransitSiteLocationOutputReference(_this, "location");
        _this._accountId = config.accountId;
        _this._connectorId = config.connectorId;
        _this._description = config.description;
        _this._haMode = config.haMode;
        _this._location.internalValue = config.location;
        _this._name = config.name;
        _this._secondaryConnectorId = config.secondaryConnectorId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicTransitSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitSite to import
    * @param importFromId The id of the existing MagicTransitSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitSite to import is found
    */
    MagicTransitSite.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site", importId: importFromId, provider: provider });
    };
    Object.defineProperty(MagicTransitSite.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSite.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(MagicTransitSite.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSite.prototype, "connectorId", {
        get: function () {
            return this.getStringAttribute('connector_id');
        },
        set: function (value) {
            this._connectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSite.prototype.resetConnectorId = function () {
        this._connectorId = undefined;
    };
    Object.defineProperty(MagicTransitSite.prototype, "connectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSite.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSite.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(MagicTransitSite.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSite.prototype, "haMode", {
        get: function () {
            return this.getBooleanAttribute('ha_mode');
        },
        set: function (value) {
            this._haMode = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSite.prototype.resetHaMode = function () {
        this._haMode = undefined;
    };
    Object.defineProperty(MagicTransitSite.prototype, "haModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._haMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSite.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSite.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSite.prototype.putLocation = function (value) {
        this._location.internalValue = value;
    };
    MagicTransitSite.prototype.resetLocation = function () {
        this._location.internalValue = undefined;
    };
    Object.defineProperty(MagicTransitSite.prototype, "locationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._location.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSite.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSite.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSite.prototype, "secondaryConnectorId", {
        get: function () {
            return this.getStringAttribute('secondary_connector_id');
        },
        set: function (value) {
            this._secondaryConnectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSite.prototype.resetSecondaryConnectorId = function () {
        this._secondaryConnectorId = undefined;
    };
    Object.defineProperty(MagicTransitSite.prototype, "secondaryConnectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secondaryConnectorId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MagicTransitSite.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            connector_id: cdktf.stringToTerraform(this._connectorId),
            description: cdktf.stringToTerraform(this._description),
            ha_mode: cdktf.booleanToTerraform(this._haMode),
            location: magicTransitSiteLocationToTerraform(this._location.internalValue),
            name: cdktf.stringToTerraform(this._name),
            secondary_connector_id: cdktf.stringToTerraform(this._secondaryConnectorId),
        };
    };
    MagicTransitSite.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connector_id: {
                value: cdktf.stringToHclTerraform(this._connectorId),
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
            ha_mode: {
                value: cdktf.booleanToHclTerraform(this._haMode),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            location: {
                value: magicTransitSiteLocationToHclTerraform(this._location.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicTransitSiteLocation",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secondary_connector_id: {
                value: cdktf.stringToHclTerraform(this._secondaryConnectorId),
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
    MagicTransitSite.tfResourceType = "cloudflare_magic_transit_site";
    return MagicTransitSite;
}(cdktf.TerraformResource));
exports.MagicTransitSite = MagicTransitSite;
