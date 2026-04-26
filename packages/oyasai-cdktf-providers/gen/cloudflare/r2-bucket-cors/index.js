"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors
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
exports.R2BucketCors = exports.R2BucketCorsRulesList = exports.R2BucketCorsRulesOutputReference = exports.R2BucketCorsRulesAllowedOutputReference = void 0;
exports.r2BucketCorsRulesAllowedToTerraform = r2BucketCorsRulesAllowedToTerraform;
exports.r2BucketCorsRulesAllowedToHclTerraform = r2BucketCorsRulesAllowedToHclTerraform;
exports.r2BucketCorsRulesToTerraform = r2BucketCorsRulesToTerraform;
exports.r2BucketCorsRulesToHclTerraform = r2BucketCorsRulesToHclTerraform;
var cdktf = require("cdktf");
function r2BucketCorsRulesAllowedToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.headers),
        methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.methods),
        origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.origins),
    };
}
function r2BucketCorsRulesAllowedToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        headers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.headers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        methods: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.methods),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        origins: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.origins),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var R2BucketCorsRulesAllowedOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketCorsRulesAllowedOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function R2BucketCorsRulesAllowedOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2BucketCorsRulesAllowedOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._headers !== undefined) {
                hasAnyValues = true;
                internalValueResult.headers = this._headers;
            }
            if (this._methods !== undefined) {
                hasAnyValues = true;
                internalValueResult.methods = this._methods;
            }
            if (this._origins !== undefined) {
                hasAnyValues = true;
                internalValueResult.origins = this._origins;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._headers = undefined;
                this._methods = undefined;
                this._origins = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._headers = value.headers;
                this._methods = value.methods;
                this._origins = value.origins;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCorsRulesAllowedOutputReference.prototype, "headers", {
        get: function () {
            return this.getListAttribute('headers');
        },
        set: function (value) {
            this._headers = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketCorsRulesAllowedOutputReference.prototype.resetHeaders = function () {
        this._headers = undefined;
    };
    Object.defineProperty(R2BucketCorsRulesAllowedOutputReference.prototype, "headersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCorsRulesAllowedOutputReference.prototype, "methods", {
        get: function () {
            return this.getListAttribute('methods');
        },
        set: function (value) {
            this._methods = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCorsRulesAllowedOutputReference.prototype, "methodsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._methods;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCorsRulesAllowedOutputReference.prototype, "origins", {
        get: function () {
            return this.getListAttribute('origins');
        },
        set: function (value) {
            this._origins = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCorsRulesAllowedOutputReference.prototype, "originsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._origins;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketCorsRulesAllowedOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketCorsRulesAllowedOutputReference = R2BucketCorsRulesAllowedOutputReference;
function r2BucketCorsRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed: r2BucketCorsRulesAllowedToTerraform(struct.allowed),
        expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.exposeHeaders),
        id: cdktf.stringToTerraform(struct.id),
        max_age_seconds: cdktf.numberToTerraform(struct.maxAgeSeconds),
    };
}
function r2BucketCorsRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed: {
            value: r2BucketCorsRulesAllowedToHclTerraform(struct.allowed),
            isBlock: true,
            type: "struct",
            storageClassType: "R2BucketCorsRulesAllowed",
        },
        expose_headers: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.exposeHeaders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_age_seconds: {
            value: cdktf.numberToHclTerraform(struct.maxAgeSeconds),
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
}
var R2BucketCorsRulesOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketCorsRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function R2BucketCorsRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // allowed - computed: false, optional: false, required: true
        _this._allowed = new R2BucketCorsRulesAllowedOutputReference(_this, "allowed");
        return _this;
    }
    Object.defineProperty(R2BucketCorsRulesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._allowed) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowed = (_b = this._allowed) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._exposeHeaders !== undefined) {
                hasAnyValues = true;
                internalValueResult.exposeHeaders = this._exposeHeaders;
            }
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._maxAgeSeconds !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._allowed.internalValue = undefined;
                this._exposeHeaders = undefined;
                this._id = undefined;
                this._maxAgeSeconds = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._allowed.internalValue = value.allowed;
                this._exposeHeaders = value.exposeHeaders;
                this._id = value.id;
                this._maxAgeSeconds = value.maxAgeSeconds;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCorsRulesOutputReference.prototype, "allowed", {
        get: function () {
            return this._allowed;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketCorsRulesOutputReference.prototype.putAllowed = function (value) {
        this._allowed.internalValue = value;
    };
    Object.defineProperty(R2BucketCorsRulesOutputReference.prototype, "allowedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowed.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCorsRulesOutputReference.prototype, "exposeHeaders", {
        get: function () {
            return this.getListAttribute('expose_headers');
        },
        set: function (value) {
            this._exposeHeaders = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketCorsRulesOutputReference.prototype.resetExposeHeaders = function () {
        this._exposeHeaders = undefined;
    };
    Object.defineProperty(R2BucketCorsRulesOutputReference.prototype, "exposeHeadersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exposeHeaders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCorsRulesOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketCorsRulesOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(R2BucketCorsRulesOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCorsRulesOutputReference.prototype, "maxAgeSeconds", {
        get: function () {
            return this.getNumberAttribute('max_age_seconds');
        },
        set: function (value) {
            this._maxAgeSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketCorsRulesOutputReference.prototype.resetMaxAgeSeconds = function () {
        this._maxAgeSeconds = undefined;
    };
    Object.defineProperty(R2BucketCorsRulesOutputReference.prototype, "maxAgeSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxAgeSeconds;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketCorsRulesOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketCorsRulesOutputReference = R2BucketCorsRulesOutputReference;
var R2BucketCorsRulesList = /** @class */ (function (_super) {
    __extends(R2BucketCorsRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function R2BucketCorsRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    R2BucketCorsRulesList.prototype.get = function (index) {
        return new R2BucketCorsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return R2BucketCorsRulesList;
}(cdktf.ComplexList));
exports.R2BucketCorsRulesList = R2BucketCorsRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors cloudflare_r2_bucket_cors}
*/
var R2BucketCors = /** @class */ (function (_super) {
    __extends(R2BucketCors, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors cloudflare_r2_bucket_cors} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketCorsConfig
    */
    function R2BucketCors(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_r2_bucket_cors',
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
        // rules - computed: false, optional: true, required: false
        _this._rules = new R2BucketCorsRulesList(_this, "rules", false);
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        _this._jurisdiction = config.jurisdiction;
        _this._rules.internalValue = config.rules;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a R2BucketCors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketCors to import
    * @param importFromId The id of the existing R2BucketCors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_cors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketCors to import is found
    */
    R2BucketCors.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_cors", importId: importFromId, provider: provider });
    };
    Object.defineProperty(R2BucketCors.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketCors.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(R2BucketCors.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCors.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCors.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCors.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketCors.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(R2BucketCors.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketCors.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketCors.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    R2BucketCors.prototype.resetRules = function () {
        this._rules.internalValue = undefined;
    };
    Object.defineProperty(R2BucketCors.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    R2BucketCors.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            rules: cdktf.listMapper(r2BucketCorsRulesToTerraform, false)(this._rules.internalValue),
        };
    };
    R2BucketCors.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bucket_name: {
                value: cdktf.stringToHclTerraform(this._bucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            jurisdiction: {
                value: cdktf.stringToHclTerraform(this._jurisdiction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rules: {
                value: cdktf.listMapperHcl(r2BucketCorsRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "R2BucketCorsRulesList",
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
    R2BucketCors.tfResourceType = "cloudflare_r2_bucket_cors";
    return R2BucketCors;
}(cdktf.TerraformResource));
exports.R2BucketCors = R2BucketCors;
