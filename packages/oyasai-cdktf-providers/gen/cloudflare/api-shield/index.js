"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield
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
exports.ApiShield = exports.ApiShieldAuthIdCharacteristicsList = exports.ApiShieldAuthIdCharacteristicsOutputReference = void 0;
exports.apiShieldAuthIdCharacteristicsToTerraform = apiShieldAuthIdCharacteristicsToTerraform;
exports.apiShieldAuthIdCharacteristicsToHclTerraform = apiShieldAuthIdCharacteristicsToHclTerraform;
var cdktf = require("cdktf");
function apiShieldAuthIdCharacteristicsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function apiShieldAuthIdCharacteristicsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
var ApiShieldAuthIdCharacteristicsOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldAuthIdCharacteristicsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ApiShieldAuthIdCharacteristicsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiShieldAuthIdCharacteristicsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldAuthIdCharacteristicsOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldAuthIdCharacteristicsOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldAuthIdCharacteristicsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldAuthIdCharacteristicsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldAuthIdCharacteristicsOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldAuthIdCharacteristicsOutputReference = ApiShieldAuthIdCharacteristicsOutputReference;
var ApiShieldAuthIdCharacteristicsList = /** @class */ (function (_super) {
    __extends(ApiShieldAuthIdCharacteristicsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ApiShieldAuthIdCharacteristicsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ApiShieldAuthIdCharacteristicsList.prototype.get = function (index) {
        return new ApiShieldAuthIdCharacteristicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ApiShieldAuthIdCharacteristicsList;
}(cdktf.ComplexList));
exports.ApiShieldAuthIdCharacteristicsList = ApiShieldAuthIdCharacteristicsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield cloudflare_api_shield}
*/
var ApiShield = /** @class */ (function (_super) {
    __extends(ApiShield, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield cloudflare_api_shield} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldConfig
    */
    function ApiShield(scope, id, config) {
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
        // auth_id_characteristics - computed: false, optional: false, required: true
        _this._authIdCharacteristics = new ApiShieldAuthIdCharacteristicsList(_this, "auth_id_characteristics", false);
        _this._authIdCharacteristics.internalValue = config.authIdCharacteristics;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ApiShield resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShield to import
    * @param importFromId The id of the existing ApiShield that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShield to import is found
    */
    ApiShield.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ApiShield.prototype, "authIdCharacteristics", {
        get: function () {
            return this._authIdCharacteristics;
        },
        enumerable: false,
        configurable: true
    });
    ApiShield.prototype.putAuthIdCharacteristics = function (value) {
        this._authIdCharacteristics.internalValue = value;
    };
    Object.defineProperty(ApiShield.prototype, "authIdCharacteristicsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authIdCharacteristics.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShield.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShield.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShield.prototype, "zoneIdInput", {
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
    ApiShield.prototype.synthesizeAttributes = function () {
        return {
            auth_id_characteristics: cdktf.listMapper(apiShieldAuthIdCharacteristicsToTerraform, false)(this._authIdCharacteristics.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ApiShield.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            auth_id_characteristics: {
                value: cdktf.listMapperHcl(apiShieldAuthIdCharacteristicsToHclTerraform, false)(this._authIdCharacteristics.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ApiShieldAuthIdCharacteristicsList",
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
    ApiShield.tfResourceType = "cloudflare_api_shield";
    return ApiShield;
}(cdktf.TerraformResource));
exports.ApiShield = ApiShield;
