"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema
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
exports.ApiShieldSchema = exports.ApiShieldSchemaUploadDetailsOutputReference = exports.ApiShieldSchemaUploadDetailsWarningsList = exports.ApiShieldSchemaUploadDetailsWarningsOutputReference = exports.ApiShieldSchemaSchemaOutputReference = void 0;
exports.apiShieldSchemaSchemaToTerraform = apiShieldSchemaSchemaToTerraform;
exports.apiShieldSchemaSchemaToHclTerraform = apiShieldSchemaSchemaToHclTerraform;
exports.apiShieldSchemaUploadDetailsWarningsToTerraform = apiShieldSchemaUploadDetailsWarningsToTerraform;
exports.apiShieldSchemaUploadDetailsWarningsToHclTerraform = apiShieldSchemaUploadDetailsWarningsToHclTerraform;
exports.apiShieldSchemaUploadDetailsToTerraform = apiShieldSchemaUploadDetailsToTerraform;
exports.apiShieldSchemaUploadDetailsToHclTerraform = apiShieldSchemaUploadDetailsToHclTerraform;
var cdktf = require("cdktf");
function apiShieldSchemaSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldSchemaSchemaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldSchemaSchemaOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldSchemaSchemaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldSchemaSchemaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiShieldSchemaSchemaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldSchemaSchemaOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchemaSchemaOutputReference.prototype, "kind", {
        // kind - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kind');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchemaSchemaOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchemaSchemaOutputReference.prototype, "schemaId", {
        // schema_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('schema_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchemaSchemaOutputReference.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchemaSchemaOutputReference.prototype, "validationEnabled", {
        // validation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('validation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldSchemaSchemaOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldSchemaSchemaOutputReference = ApiShieldSchemaSchemaOutputReference;
function apiShieldSchemaUploadDetailsWarningsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldSchemaUploadDetailsWarningsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldSchemaUploadDetailsWarningsOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldSchemaUploadDetailsWarningsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ApiShieldSchemaUploadDetailsWarningsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ApiShieldSchemaUploadDetailsWarningsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldSchemaUploadDetailsWarningsOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchemaUploadDetailsWarningsOutputReference.prototype, "locations", {
        // locations - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('locations');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchemaUploadDetailsWarningsOutputReference.prototype, "message", {
        // message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message');
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldSchemaUploadDetailsWarningsOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldSchemaUploadDetailsWarningsOutputReference = ApiShieldSchemaUploadDetailsWarningsOutputReference;
var ApiShieldSchemaUploadDetailsWarningsList = /** @class */ (function (_super) {
    __extends(ApiShieldSchemaUploadDetailsWarningsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ApiShieldSchemaUploadDetailsWarningsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ApiShieldSchemaUploadDetailsWarningsList.prototype.get = function (index) {
        return new ApiShieldSchemaUploadDetailsWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ApiShieldSchemaUploadDetailsWarningsList;
}(cdktf.ComplexList));
exports.ApiShieldSchemaUploadDetailsWarningsList = ApiShieldSchemaUploadDetailsWarningsList;
function apiShieldSchemaUploadDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function apiShieldSchemaUploadDetailsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ApiShieldSchemaUploadDetailsOutputReference = /** @class */ (function (_super) {
    __extends(ApiShieldSchemaUploadDetailsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ApiShieldSchemaUploadDetailsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // warnings - computed: true, optional: false, required: false
        _this._warnings = new ApiShieldSchemaUploadDetailsWarningsList(_this, "warnings", false);
        return _this;
    }
    Object.defineProperty(ApiShieldSchemaUploadDetailsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ApiShieldSchemaUploadDetailsOutputReference.prototype, "warnings", {
        get: function () {
            return this._warnings;
        },
        enumerable: false,
        configurable: true
    });
    return ApiShieldSchemaUploadDetailsOutputReference;
}(cdktf.ComplexObject));
exports.ApiShieldSchemaUploadDetailsOutputReference = ApiShieldSchemaUploadDetailsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema cloudflare_api_shield_schema}
*/
var ApiShieldSchema = /** @class */ (function (_super) {
    __extends(ApiShieldSchema, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema cloudflare_api_shield_schema} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldSchemaConfig
    */
    function ApiShieldSchema(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_api_shield_schema',
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
        // schema - computed: true, optional: false, required: false
        _this._schema = new ApiShieldSchemaSchemaOutputReference(_this, "schema");
        // upload_details - computed: true, optional: false, required: false
        _this._uploadDetails = new ApiShieldSchemaUploadDetailsOutputReference(_this, "upload_details");
        _this._file = config.file;
        _this._kind = config.kind;
        _this._name = config.name;
        _this._schemaId = config.schemaId;
        _this._validationEnabled = config.validationEnabled;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ApiShieldSchema resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShieldSchema to import
    * @param importFromId The id of the existing ApiShieldSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShieldSchema to import is found
    */
    ApiShieldSchema.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_schema", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ApiShieldSchema.prototype, "createdAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchema.prototype, "file", {
        get: function () {
            return this.getStringAttribute('file');
        },
        set: function (value) {
            this._file = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchema.prototype, "fileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._file;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchema.prototype, "kind", {
        get: function () {
            return this.getStringAttribute('kind');
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchema.prototype, "kindInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kind;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchema.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiShieldSchema.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(ApiShieldSchema.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchema.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchema.prototype, "schemaId", {
        get: function () {
            return this.getStringAttribute('schema_id');
        },
        set: function (value) {
            this._schemaId = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiShieldSchema.prototype.resetSchemaId = function () {
        this._schemaId = undefined;
    };
    Object.defineProperty(ApiShieldSchema.prototype, "schemaIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schemaId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchema.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchema.prototype, "uploadDetails", {
        get: function () {
            return this._uploadDetails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchema.prototype, "validationEnabled", {
        get: function () {
            return this.getStringAttribute('validation_enabled');
        },
        set: function (value) {
            this._validationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiShieldSchema.prototype.resetValidationEnabled = function () {
        this._validationEnabled = undefined;
    };
    Object.defineProperty(ApiShieldSchema.prototype, "validationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiShieldSchema.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiShieldSchema.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ApiShieldSchema.prototype, "zoneIdInput", {
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
    ApiShieldSchema.prototype.synthesizeAttributes = function () {
        return {
            file: cdktf.stringToTerraform(this._file),
            kind: cdktf.stringToTerraform(this._kind),
            name: cdktf.stringToTerraform(this._name),
            schema_id: cdktf.stringToTerraform(this._schemaId),
            validation_enabled: cdktf.stringToTerraform(this._validationEnabled),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ApiShieldSchema.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            file: {
                value: cdktf.stringToHclTerraform(this._file),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kind: {
                value: cdktf.stringToHclTerraform(this._kind),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schema_id: {
                value: cdktf.stringToHclTerraform(this._schemaId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validation_enabled: {
                value: cdktf.stringToHclTerraform(this._validationEnabled),
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
    ApiShieldSchema.tfResourceType = "cloudflare_api_shield_schema";
    return ApiShieldSchema;
}(cdktf.TerraformResource));
exports.ApiShieldSchema = ApiShieldSchema;
