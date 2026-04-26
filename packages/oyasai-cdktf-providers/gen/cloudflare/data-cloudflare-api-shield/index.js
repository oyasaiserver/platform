"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield
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
exports.DataCloudflareApiShield = exports.DataCloudflareApiShieldAuthIdCharacteristicsList = exports.DataCloudflareApiShieldAuthIdCharacteristicsOutputReference = void 0;
exports.dataCloudflareApiShieldAuthIdCharacteristicsToTerraform = dataCloudflareApiShieldAuthIdCharacteristicsToTerraform;
exports.dataCloudflareApiShieldAuthIdCharacteristicsToHclTerraform = dataCloudflareApiShieldAuthIdCharacteristicsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareApiShieldAuthIdCharacteristicsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareApiShieldAuthIdCharacteristicsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareApiShieldAuthIdCharacteristicsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldAuthIdCharacteristicsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiShieldAuthIdCharacteristicsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareApiShieldAuthIdCharacteristicsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareApiShieldAuthIdCharacteristicsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShieldAuthIdCharacteristicsOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareApiShieldAuthIdCharacteristicsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareApiShieldAuthIdCharacteristicsOutputReference = DataCloudflareApiShieldAuthIdCharacteristicsOutputReference;
var DataCloudflareApiShieldAuthIdCharacteristicsList = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShieldAuthIdCharacteristicsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareApiShieldAuthIdCharacteristicsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareApiShieldAuthIdCharacteristicsList.prototype.get = function (index) {
        return new DataCloudflareApiShieldAuthIdCharacteristicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareApiShieldAuthIdCharacteristicsList;
}(cdktf.ComplexList));
exports.DataCloudflareApiShieldAuthIdCharacteristicsList = DataCloudflareApiShieldAuthIdCharacteristicsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield cloudflare_api_shield}
*/
var DataCloudflareApiShield = /** @class */ (function (_super) {
    __extends(DataCloudflareApiShield, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield cloudflare_api_shield} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareApiShieldConfig = {}
    */
    function DataCloudflareApiShield(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_api_shield',
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
        // auth_id_characteristics - computed: true, optional: false, required: false
        _this._authIdCharacteristics = new DataCloudflareApiShieldAuthIdCharacteristicsList(_this, "auth_id_characteristics", false);
        _this._normalize = config.normalize;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareApiShield resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareApiShield to import
    * @param importFromId The id of the existing DataCloudflareApiShield that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/api_shield#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareApiShield to import is found
    */
    DataCloudflareApiShield.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareApiShield.prototype, "authIdCharacteristics", {
        get: function () {
            return this._authIdCharacteristics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShield.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShield.prototype, "normalize", {
        get: function () {
            return this.getBooleanAttribute('normalize');
        },
        set: function (value) {
            this._normalize = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShield.prototype.resetNormalize = function () {
        this._normalize = undefined;
    };
    Object.defineProperty(DataCloudflareApiShield.prototype, "normalizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._normalize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareApiShield.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareApiShield.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareApiShield.prototype, "zoneIdInput", {
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
    DataCloudflareApiShield.prototype.synthesizeAttributes = function () {
        return {
            normalize: cdktf.booleanToTerraform(this._normalize),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareApiShield.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            normalize: {
                value: cdktf.booleanToHclTerraform(this._normalize),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
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
    DataCloudflareApiShield.tfResourceType = "cloudflare_api_shield";
    return DataCloudflareApiShield;
}(cdktf.TerraformDataSource));
exports.DataCloudflareApiShield = DataCloudflareApiShield;
