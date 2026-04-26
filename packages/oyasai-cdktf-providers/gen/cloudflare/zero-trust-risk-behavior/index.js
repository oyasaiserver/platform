"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_behavior
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
exports.ZeroTrustRiskBehavior = exports.ZeroTrustRiskBehaviorBehaviorsMap = exports.ZeroTrustRiskBehaviorBehaviorsOutputReference = void 0;
exports.zeroTrustRiskBehaviorBehaviorsToTerraform = zeroTrustRiskBehaviorBehaviorsToTerraform;
exports.zeroTrustRiskBehaviorBehaviorsToHclTerraform = zeroTrustRiskBehaviorBehaviorsToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustRiskBehaviorBehaviorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        risk_level: cdktf.stringToTerraform(struct.riskLevel),
    };
}
function zeroTrustRiskBehaviorBehaviorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        risk_level: {
            value: cdktf.stringToHclTerraform(struct.riskLevel),
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
var ZeroTrustRiskBehaviorBehaviorsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustRiskBehaviorBehaviorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function ZeroTrustRiskBehaviorBehaviorsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustRiskBehaviorBehaviorsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._riskLevel !== undefined) {
                hasAnyValues = true;
                internalValueResult.riskLevel = this._riskLevel;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._riskLevel = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._riskLevel = value.riskLevel;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskBehaviorBehaviorsOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskBehaviorBehaviorsOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskBehaviorBehaviorsOutputReference.prototype, "riskLevel", {
        get: function () {
            return this.getStringAttribute('risk_level');
        },
        set: function (value) {
            this._riskLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskBehaviorBehaviorsOutputReference.prototype, "riskLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._riskLevel;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustRiskBehaviorBehaviorsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustRiskBehaviorBehaviorsOutputReference = ZeroTrustRiskBehaviorBehaviorsOutputReference;
var ZeroTrustRiskBehaviorBehaviorsMap = /** @class */ (function (_super) {
    __extends(ZeroTrustRiskBehaviorBehaviorsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustRiskBehaviorBehaviorsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    ZeroTrustRiskBehaviorBehaviorsMap.prototype.get = function (key) {
        return new ZeroTrustRiskBehaviorBehaviorsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return ZeroTrustRiskBehaviorBehaviorsMap;
}(cdktf.ComplexMap));
exports.ZeroTrustRiskBehaviorBehaviorsMap = ZeroTrustRiskBehaviorBehaviorsMap;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_behavior cloudflare_zero_trust_risk_behavior}
*/
var ZeroTrustRiskBehavior = /** @class */ (function (_super) {
    __extends(ZeroTrustRiskBehavior, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_behavior cloudflare_zero_trust_risk_behavior} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustRiskBehaviorConfig
    */
    function ZeroTrustRiskBehavior(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_risk_behavior',
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
        // behaviors - computed: false, optional: false, required: true
        _this._behaviors = new ZeroTrustRiskBehaviorBehaviorsMap(_this, "behaviors");
        _this._accountId = config.accountId;
        _this._behaviors.internalValue = config.behaviors;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustRiskBehavior resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustRiskBehavior to import
    * @param importFromId The id of the existing ZeroTrustRiskBehavior that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_risk_behavior#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustRiskBehavior to import is found
    */
    ZeroTrustRiskBehavior.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_risk_behavior", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustRiskBehavior.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustRiskBehavior.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustRiskBehavior.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustRiskBehavior.prototype, "behaviors", {
        get: function () {
            return this._behaviors;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustRiskBehavior.prototype.putBehaviors = function (value) {
        this._behaviors.internalValue = value;
    };
    Object.defineProperty(ZeroTrustRiskBehavior.prototype, "behaviorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._behaviors.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustRiskBehavior.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            behaviors: cdktf.hashMapper(zeroTrustRiskBehaviorBehaviorsToTerraform)(this._behaviors.internalValue),
        };
    };
    ZeroTrustRiskBehavior.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            behaviors: {
                value: cdktf.hashMapperHcl(zeroTrustRiskBehaviorBehaviorsToHclTerraform)(this._behaviors.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "ZeroTrustRiskBehaviorBehaviorsMap",
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
    ZeroTrustRiskBehavior.tfResourceType = "cloudflare_zero_trust_risk_behavior";
    return ZeroTrustRiskBehavior;
}(cdktf.TerraformResource));
exports.ZeroTrustRiskBehavior = ZeroTrustRiskBehavior;
