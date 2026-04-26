"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test
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
exports.ZeroTrustDexTest = exports.ZeroTrustDexTestTargetPoliciesList = exports.ZeroTrustDexTestTargetPoliciesOutputReference = exports.ZeroTrustDexTestDataOutputReference = void 0;
exports.zeroTrustDexTestDataToTerraform = zeroTrustDexTestDataToTerraform;
exports.zeroTrustDexTestDataToHclTerraform = zeroTrustDexTestDataToHclTerraform;
exports.zeroTrustDexTestTargetPoliciesToTerraform = zeroTrustDexTestTargetPoliciesToTerraform;
exports.zeroTrustDexTestTargetPoliciesToHclTerraform = zeroTrustDexTestTargetPoliciesToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDexTestDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        kind: cdktf.stringToTerraform(struct.kind),
        method: cdktf.stringToTerraform(struct.method),
    };
}
function zeroTrustDexTestDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kind: {
            value: cdktf.stringToHclTerraform(struct.kind),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        method: {
            value: cdktf.stringToHclTerraform(struct.method),
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
var ZeroTrustDexTestDataOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDexTestDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDexTestDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDexTestDataOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._kind !== undefined) {
                hasAnyValues = true;
                internalValueResult.kind = this._kind;
            }
            if (this._method !== undefined) {
                hasAnyValues = true;
                internalValueResult.method = this._method;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._host = undefined;
                this._kind = undefined;
                this._method = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._host = value.host;
                this._kind = value.kind;
                this._method = value.method;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTestDataOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDexTestDataOutputReference.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(ZeroTrustDexTestDataOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTestDataOutputReference.prototype, "kind", {
        get: function () {
            return this.getStringAttribute('kind');
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDexTestDataOutputReference.prototype.resetKind = function () {
        this._kind = undefined;
    };
    Object.defineProperty(ZeroTrustDexTestDataOutputReference.prototype, "kindInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kind;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTestDataOutputReference.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDexTestDataOutputReference.prototype.resetMethod = function () {
        this._method = undefined;
    };
    Object.defineProperty(ZeroTrustDexTestDataOutputReference.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDexTestDataOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDexTestDataOutputReference = ZeroTrustDexTestDataOutputReference;
function zeroTrustDexTestTargetPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function zeroTrustDexTestTargetPoliciesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
var ZeroTrustDexTestTargetPoliciesOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDexTestTargetPoliciesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDexTestTargetPoliciesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDexTestTargetPoliciesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTestTargetPoliciesOutputReference.prototype, "default", {
        // default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTestTargetPoliciesOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTestTargetPoliciesOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTestTargetPoliciesOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDexTestTargetPoliciesOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDexTestTargetPoliciesOutputReference = ZeroTrustDexTestTargetPoliciesOutputReference;
var ZeroTrustDexTestTargetPoliciesList = /** @class */ (function (_super) {
    __extends(ZeroTrustDexTestTargetPoliciesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDexTestTargetPoliciesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDexTestTargetPoliciesList.prototype.get = function (index) {
        return new ZeroTrustDexTestTargetPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDexTestTargetPoliciesList;
}(cdktf.ComplexList));
exports.ZeroTrustDexTestTargetPoliciesList = ZeroTrustDexTestTargetPoliciesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test cloudflare_zero_trust_dex_test}
*/
var ZeroTrustDexTest = /** @class */ (function (_super) {
    __extends(ZeroTrustDexTest, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test cloudflare_zero_trust_dex_test} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDexTestConfig
    */
    function ZeroTrustDexTest(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dex_test',
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
        // data - computed: false, optional: false, required: true
        _this._data = new ZeroTrustDexTestDataOutputReference(_this, "data");
        // target_policies - computed: true, optional: true, required: false
        _this._targetPolicies = new ZeroTrustDexTestTargetPoliciesList(_this, "target_policies", false);
        _this._accountId = config.accountId;
        _this._data.internalValue = config.data;
        _this._description = config.description;
        _this._enabled = config.enabled;
        _this._interval = config.interval;
        _this._name = config.name;
        _this._targetPolicies.internalValue = config.targetPolicies;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDexTest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDexTest to import
    * @param importFromId The id of the existing ZeroTrustDexTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDexTest to import is found
    */
    ZeroTrustDexTest.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dex_test", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDexTest.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDexTest.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDexTest.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDexTest.prototype.putData = function (value) {
        this._data.internalValue = value;
    };
    Object.defineProperty(ZeroTrustDexTest.prototype, "dataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._data.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDexTest.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDexTest.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "interval", {
        get: function () {
            return this.getStringAttribute('interval');
        },
        set: function (value) {
            this._interval = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "intervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "targetPolicies", {
        get: function () {
            return this._targetPolicies;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDexTest.prototype.putTargetPolicies = function (value) {
        this._targetPolicies.internalValue = value;
    };
    ZeroTrustDexTest.prototype.resetTargetPolicies = function () {
        this._targetPolicies.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustDexTest.prototype, "targetPoliciesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetPolicies.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "targeted", {
        // targeted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('targeted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDexTest.prototype, "testId", {
        // test_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('test_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDexTest.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            data: zeroTrustDexTestDataToTerraform(this._data.internalValue),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            interval: cdktf.stringToTerraform(this._interval),
            name: cdktf.stringToTerraform(this._name),
            target_policies: cdktf.listMapper(zeroTrustDexTestTargetPoliciesToTerraform, false)(this._targetPolicies.internalValue),
        };
    };
    ZeroTrustDexTest.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data: {
                value: zeroTrustDexTestDataToHclTerraform(this._data.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustDexTestData",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            interval: {
                value: cdktf.stringToHclTerraform(this._interval),
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
            target_policies: {
                value: cdktf.listMapperHcl(zeroTrustDexTestTargetPoliciesToHclTerraform, false)(this._targetPolicies.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ZeroTrustDexTestTargetPoliciesList",
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
    ZeroTrustDexTest.tfResourceType = "cloudflare_zero_trust_dex_test";
    return ZeroTrustDexTest;
}(cdktf.TerraformResource));
exports.ZeroTrustDexTest = ZeroTrustDexTest;
