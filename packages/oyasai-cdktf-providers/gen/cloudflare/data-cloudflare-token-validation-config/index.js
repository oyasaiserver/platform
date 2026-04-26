"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_config
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
exports.DataCloudflareTokenValidationConfig = exports.DataCloudflareTokenValidationConfigCredentialsOutputReference = exports.DataCloudflareTokenValidationConfigCredentialsKeysList = exports.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference = void 0;
exports.dataCloudflareTokenValidationConfigCredentialsKeysToTerraform = dataCloudflareTokenValidationConfigCredentialsKeysToTerraform;
exports.dataCloudflareTokenValidationConfigCredentialsKeysToHclTerraform = dataCloudflareTokenValidationConfigCredentialsKeysToHclTerraform;
exports.dataCloudflareTokenValidationConfigCredentialsToTerraform = dataCloudflareTokenValidationConfigCredentialsToTerraform;
exports.dataCloudflareTokenValidationConfigCredentialsToHclTerraform = dataCloudflareTokenValidationConfigCredentialsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareTokenValidationConfigCredentialsKeysToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationConfigCredentialsKeysToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationConfigCredentialsKeysOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationConfigCredentialsKeysOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationConfigCredentialsKeysOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.prototype, "alg", {
        // alg - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alg');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.prototype, "crv", {
        // crv - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('crv');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.prototype, "e", {
        // e - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('e');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.prototype, "kid", {
        // kid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.prototype, "kty", {
        // kty - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kty');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.prototype, "n", {
        // n - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('n');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.prototype, "x", {
        // x - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('x');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.prototype, "y", {
        // y - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('y');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationConfigCredentialsKeysOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference = DataCloudflareTokenValidationConfigCredentialsKeysOutputReference;
var DataCloudflareTokenValidationConfigCredentialsKeysList = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationConfigCredentialsKeysList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareTokenValidationConfigCredentialsKeysList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareTokenValidationConfigCredentialsKeysList.prototype.get = function (index) {
        return new DataCloudflareTokenValidationConfigCredentialsKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareTokenValidationConfigCredentialsKeysList;
}(cdktf.ComplexList));
exports.DataCloudflareTokenValidationConfigCredentialsKeysList = DataCloudflareTokenValidationConfigCredentialsKeysList;
function dataCloudflareTokenValidationConfigCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareTokenValidationConfigCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareTokenValidationConfigCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationConfigCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareTokenValidationConfigCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // keys - computed: true, optional: false, required: false
        _this._keys = new DataCloudflareTokenValidationConfigCredentialsKeysList(_this, "keys", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareTokenValidationConfigCredentialsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareTokenValidationConfigCredentialsOutputReference.prototype, "keys", {
        get: function () {
            return this._keys;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTokenValidationConfigCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTokenValidationConfigCredentialsOutputReference = DataCloudflareTokenValidationConfigCredentialsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_config cloudflare_token_validation_config}
*/
var DataCloudflareTokenValidationConfig = /** @class */ (function (_super) {
    __extends(DataCloudflareTokenValidationConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_config cloudflare_token_validation_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTokenValidationConfigConfig
    */
    function DataCloudflareTokenValidationConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_token_validation_config',
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
        // credentials - computed: true, optional: false, required: false
        _this._credentials = new DataCloudflareTokenValidationConfigCredentialsOutputReference(_this, "credentials");
        _this._configId = config.configId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareTokenValidationConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTokenValidationConfig to import
    * @param importFromId The id of the existing DataCloudflareTokenValidationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/token_validation_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTokenValidationConfig to import is found
    */
    DataCloudflareTokenValidationConfig.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_token_validation_config", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "configId", {
        get: function () {
            return this.getStringAttribute('config_id');
        },
        set: function (value) {
            this._configId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "configIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "title", {
        // title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "tokenSources", {
        // token_sources - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('token_sources');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "tokenType", {
        // token_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTokenValidationConfig.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareTokenValidationConfig.prototype, "zoneIdInput", {
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
    DataCloudflareTokenValidationConfig.prototype.synthesizeAttributes = function () {
        return {
            config_id: cdktf.stringToTerraform(this._configId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareTokenValidationConfig.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            config_id: {
                value: cdktf.stringToHclTerraform(this._configId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    DataCloudflareTokenValidationConfig.tfResourceType = "cloudflare_token_validation_config";
    return DataCloudflareTokenValidationConfig;
}(cdktf.TerraformDataSource));
exports.DataCloudflareTokenValidationConfig = DataCloudflareTokenValidationConfig;
