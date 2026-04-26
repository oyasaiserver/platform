"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config
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
exports.TokenValidationConfig = exports.TokenValidationConfigCredentialsOutputReference = exports.TokenValidationConfigCredentialsKeysList = exports.TokenValidationConfigCredentialsKeysOutputReference = void 0;
exports.tokenValidationConfigCredentialsKeysToTerraform = tokenValidationConfigCredentialsKeysToTerraform;
exports.tokenValidationConfigCredentialsKeysToHclTerraform = tokenValidationConfigCredentialsKeysToHclTerraform;
exports.tokenValidationConfigCredentialsToTerraform = tokenValidationConfigCredentialsToTerraform;
exports.tokenValidationConfigCredentialsToHclTerraform = tokenValidationConfigCredentialsToHclTerraform;
var cdktf = require("cdktf");
function tokenValidationConfigCredentialsKeysToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        alg: cdktf.stringToTerraform(struct.alg),
        crv: cdktf.stringToTerraform(struct.crv),
        e: cdktf.stringToTerraform(struct.e),
        kid: cdktf.stringToTerraform(struct.kid),
        kty: cdktf.stringToTerraform(struct.kty),
        n: cdktf.stringToTerraform(struct.n),
        x: cdktf.stringToTerraform(struct.x),
        y: cdktf.stringToTerraform(struct.y),
    };
}
function tokenValidationConfigCredentialsKeysToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        alg: {
            value: cdktf.stringToHclTerraform(struct.alg),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        crv: {
            value: cdktf.stringToHclTerraform(struct.crv),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        e: {
            value: cdktf.stringToHclTerraform(struct.e),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kid: {
            value: cdktf.stringToHclTerraform(struct.kid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kty: {
            value: cdktf.stringToHclTerraform(struct.kty),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        n: {
            value: cdktf.stringToHclTerraform(struct.n),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        x: {
            value: cdktf.stringToHclTerraform(struct.x),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        y: {
            value: cdktf.stringToHclTerraform(struct.y),
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
var TokenValidationConfigCredentialsKeysOutputReference = /** @class */ (function (_super) {
    __extends(TokenValidationConfigCredentialsKeysOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function TokenValidationConfigCredentialsKeysOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._alg !== undefined) {
                hasAnyValues = true;
                internalValueResult.alg = this._alg;
            }
            if (this._crv !== undefined) {
                hasAnyValues = true;
                internalValueResult.crv = this._crv;
            }
            if (this._e !== undefined) {
                hasAnyValues = true;
                internalValueResult.e = this._e;
            }
            if (this._kid !== undefined) {
                hasAnyValues = true;
                internalValueResult.kid = this._kid;
            }
            if (this._kty !== undefined) {
                hasAnyValues = true;
                internalValueResult.kty = this._kty;
            }
            if (this._n !== undefined) {
                hasAnyValues = true;
                internalValueResult.n = this._n;
            }
            if (this._x !== undefined) {
                hasAnyValues = true;
                internalValueResult.x = this._x;
            }
            if (this._y !== undefined) {
                hasAnyValues = true;
                internalValueResult.y = this._y;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._alg = undefined;
                this._crv = undefined;
                this._e = undefined;
                this._kid = undefined;
                this._kty = undefined;
                this._n = undefined;
                this._x = undefined;
                this._y = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._alg = value.alg;
                this._crv = value.crv;
                this._e = value.e;
                this._kid = value.kid;
                this._kty = value.kty;
                this._n = value.n;
                this._x = value.x;
                this._y = value.y;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "alg", {
        get: function () {
            return this.getStringAttribute('alg');
        },
        set: function (value) {
            this._alg = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "algInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "crv", {
        get: function () {
            return this.getStringAttribute('crv');
        },
        set: function (value) {
            this._crv = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationConfigCredentialsKeysOutputReference.prototype.resetCrv = function () {
        this._crv = undefined;
    };
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "crvInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._crv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "e", {
        get: function () {
            return this.getStringAttribute('e');
        },
        set: function (value) {
            this._e = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationConfigCredentialsKeysOutputReference.prototype.resetE = function () {
        this._e = undefined;
    };
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "eInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "kid", {
        get: function () {
            return this.getStringAttribute('kid');
        },
        set: function (value) {
            this._kid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "kidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "kty", {
        get: function () {
            return this.getStringAttribute('kty');
        },
        set: function (value) {
            this._kty = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "ktyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "n", {
        get: function () {
            return this.getStringAttribute('n');
        },
        set: function (value) {
            this._n = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationConfigCredentialsKeysOutputReference.prototype.resetN = function () {
        this._n = undefined;
    };
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "nInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "x", {
        get: function () {
            return this.getStringAttribute('x');
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationConfigCredentialsKeysOutputReference.prototype.resetX = function () {
        this._x = undefined;
    };
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "xInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "y", {
        get: function () {
            return this.getStringAttribute('y');
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationConfigCredentialsKeysOutputReference.prototype.resetY = function () {
        this._y = undefined;
    };
    Object.defineProperty(TokenValidationConfigCredentialsKeysOutputReference.prototype, "yInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return TokenValidationConfigCredentialsKeysOutputReference;
}(cdktf.ComplexObject));
exports.TokenValidationConfigCredentialsKeysOutputReference = TokenValidationConfigCredentialsKeysOutputReference;
var TokenValidationConfigCredentialsKeysList = /** @class */ (function (_super) {
    __extends(TokenValidationConfigCredentialsKeysList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function TokenValidationConfigCredentialsKeysList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    TokenValidationConfigCredentialsKeysList.prototype.get = function (index) {
        return new TokenValidationConfigCredentialsKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return TokenValidationConfigCredentialsKeysList;
}(cdktf.ComplexList));
exports.TokenValidationConfigCredentialsKeysList = TokenValidationConfigCredentialsKeysList;
function tokenValidationConfigCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        keys: cdktf.listMapper(tokenValidationConfigCredentialsKeysToTerraform, false)(struct.keys),
    };
}
function tokenValidationConfigCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        keys: {
            value: cdktf.listMapperHcl(tokenValidationConfigCredentialsKeysToHclTerraform, false)(struct.keys),
            isBlock: true,
            type: "list",
            storageClassType: "TokenValidationConfigCredentialsKeysList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var TokenValidationConfigCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(TokenValidationConfigCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function TokenValidationConfigCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // keys - computed: false, optional: false, required: true
        _this._keys = new TokenValidationConfigCredentialsKeysList(_this, "keys", false);
        return _this;
    }
    Object.defineProperty(TokenValidationConfigCredentialsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._keys) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.keys = (_b = this._keys) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._keys.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._keys.internalValue = value.keys;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfigCredentialsOutputReference.prototype, "keys", {
        get: function () {
            return this._keys;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationConfigCredentialsOutputReference.prototype.putKeys = function (value) {
        this._keys.internalValue = value;
    };
    Object.defineProperty(TokenValidationConfigCredentialsOutputReference.prototype, "keysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keys.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return TokenValidationConfigCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.TokenValidationConfigCredentialsOutputReference = TokenValidationConfigCredentialsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config cloudflare_token_validation_config}
*/
var TokenValidationConfig = /** @class */ (function (_super) {
    __extends(TokenValidationConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config cloudflare_token_validation_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TokenValidationConfigConfig
    */
    function TokenValidationConfig(scope, id, config) {
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
        // credentials - computed: false, optional: false, required: true
        _this._credentials = new TokenValidationConfigCredentialsOutputReference(_this, "credentials");
        _this._credentials.internalValue = config.credentials;
        _this._description = config.description;
        _this._title = config.title;
        _this._tokenSources = config.tokenSources;
        _this._tokenType = config.tokenType;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TokenValidationConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TokenValidationConfig to import
    * @param importFromId The id of the existing TokenValidationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/token_validation_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TokenValidationConfig to import is found
    */
    TokenValidationConfig.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_token_validation_config", importId: importFromId, provider: provider });
    };
    Object.defineProperty(TokenValidationConfig.prototype, "createdAt", {
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
    Object.defineProperty(TokenValidationConfig.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationConfig.prototype.putCredentials = function (value) {
        this._credentials.internalValue = value;
    };
    Object.defineProperty(TokenValidationConfig.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfig.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfig.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfig.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfig.prototype, "lastUpdated", {
        // last_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfig.prototype, "title", {
        get: function () {
            return this.getStringAttribute('title');
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfig.prototype, "titleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfig.prototype, "tokenSources", {
        get: function () {
            return this.getListAttribute('token_sources');
        },
        set: function (value) {
            this._tokenSources = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfig.prototype, "tokenSourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenSources;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfig.prototype, "tokenType", {
        get: function () {
            return this.getStringAttribute('token_type');
        },
        set: function (value) {
            this._tokenType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfig.prototype, "tokenTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TokenValidationConfig.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    TokenValidationConfig.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(TokenValidationConfig.prototype, "zoneIdInput", {
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
    TokenValidationConfig.prototype.synthesizeAttributes = function () {
        return {
            credentials: tokenValidationConfigCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            title: cdktf.stringToTerraform(this._title),
            token_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenSources),
            token_type: cdktf.stringToTerraform(this._tokenType),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    TokenValidationConfig.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            credentials: {
                value: tokenValidationConfigCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "TokenValidationConfigCredentials",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            title: {
                value: cdktf.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            token_sources: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenSources),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            token_type: {
                value: cdktf.stringToHclTerraform(this._tokenType),
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
    TokenValidationConfig.tfResourceType = "cloudflare_token_validation_config";
    return TokenValidationConfig;
}(cdktf.TerraformResource));
exports.TokenValidationConfig = TokenValidationConfig;
