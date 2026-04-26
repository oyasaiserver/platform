"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_configs
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
exports.DataCloudflareTokenValidationConfigs = exports.DataCloudflareTokenValidationConfigsResultList = exports.DataCloudflareTokenValidationConfigsResultOutputReference = exports.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference = exports.DataCloudflareTokenValidationConfigsResultCredentialsKeysList = exports.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference = void 0;
exports.dataCloudflareTokenValidationConfigsResultCredentialsKeysToTerraform = dataCloudflareTokenValidationConfigsResultCredentialsKeysToTerraform;
exports.dataCloudflareTokenValidationConfigsResultCredentialsKeysToHclTerraform = dataCloudflareTokenValidationConfigsResultCredentialsKeysToHclTerraform;
exports.dataCloudflareTokenValidationConfigsResultCredentialsToTerraform = dataCloudflareTokenValidationConfigsResultCredentialsToTerraform;
exports.dataCloudflareTokenValidationConfigsResultCredentialsToHclTerraform = dataCloudflareTokenValidationConfigsResultCredentialsToHclTerraform;
exports.dataCloudflareTokenValidationConfigsResultToTerraform = dataCloudflareTokenValidationConfigsResultToTerraform;
exports.dataCloudflareTokenValidationConfigsResultToHclTerraform = dataCloudflareTokenValidationConfigsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareTokenValidationConfigsResultCredentialsKeysToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationConfigsResultCredentialsKeysToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.prototype, "alg", {
        // alg - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.prototype, "crv", {
        // crv - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('crv');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.prototype, "e", {
        // e - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('e');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.prototype, "kid", {
        // kid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.prototype, "kty", {
        // kty - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kty');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.prototype, "n", {
        // n - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('n');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.prototype, "x", {
        // x - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('x');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.prototype, "y", {
        // y - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('y');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference = DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference;
var DataCloudflareTokenValidationConfigsResultCredentialsKeysList = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationConfigsResultCredentialsKeysList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationConfigsResultCredentialsKeysList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareTokenValidationConfigsResultCredentialsKeysList.prototype.get = function (index) {
        return new DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareTokenValidationConfigsResultCredentialsKeysList;
}(cdktf.ComplexList));
exports.DataCloudflareTokenValidationConfigsResultCredentialsKeysList = DataCloudflareTokenValidationConfigsResultCredentialsKeysList;
function dataCloudflareTokenValidationConfigsResultCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationConfigsResultCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationConfigsResultCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationConfigsResultCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareTokenValidationConfigsResultCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // keys - computed: true, optional: false, required: false
        _this._keys = new DataCloudflareTokenValidationConfigsResultCredentialsKeysList(_this, "keys", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.prototype, "keys", {
        get: function () {
            return this._keys;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationConfigsResultCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference = DataCloudflareTokenValidationConfigsResultCredentialsOutputReference;
function dataCloudflareTokenValidationConfigsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationConfigsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationConfigsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationConfigsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationConfigsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // credentials - computed: true, optional: false, required: false
        _this._credentials = new DataCloudflareTokenValidationConfigsResultCredentialsOutputReference(_this, "credentials");
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultOutputReference.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultOutputReference.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultOutputReference.prototype, "title", {
        // title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultOutputReference.prototype, "tokenSources", {
        // token_sources - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('token_sources');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigsResultOutputReference.prototype, "tokenType", {
        // token_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationConfigsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationConfigsResultOutputReference = DataCloudflareTokenValidationConfigsResultOutputReference;
var DataCloudflareTokenValidationConfigsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationConfigsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationConfigsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareTokenValidationConfigsResultList.prototype.get = function (index) {
        return new DataCloudflareTokenValidationConfigsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareTokenValidationConfigsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareTokenValidationConfigsResultList = DataCloudflareTokenValidationConfigsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_configs cloudflare_token_validation_configs}
*/
var DataCloudflareTokenValidationConfigs = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationConfigs, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_configs cloudflare_token_validation_configs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTokenValidationConfigsConfig = {}
    */
    function DataCloudflareTokenValidationConfigs(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_token_validation_configs',
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
        _this._result = new DataCloudflareTokenValidationConfigsResultList(_this, "result", false);
        _this._maxItems = config.maxItems;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareTokenValidationConfigs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTokenValidationConfigs to import
    * @param importFromId The id of the existing DataCloudflareTokenValidationConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_configs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTokenValidationConfigs to import is found
    */
    DataCloudflareTokenValidationConfigs.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_token_validation_configs", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareTokenValidationConfigs.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationConfigs.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationConfigs.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigs.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigs.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationConfigs.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationConfigs.prototype, "zoneIdInput", {
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
    DataCloudflareTokenValidationConfigs.prototype.synthesizeAttributes = function () {
        return {
            max_items: cdktf.numberToTerraform(this._maxItems),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareTokenValidationConfigs.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareTokenValidationConfigs.tfResourceType = "cloudflare_token_validation_configs";
    return DataCloudflareTokenValidationConfigs;
}(cdktf.TerraformDataSource));
exports.DataCloudflareTokenValidationConfigs = DataCloudflareTokenValidationConfigs;
