"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_behavior
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
exports.DataCloudflareZeroTrustRiskBehavior = exports.DataCloudflareZeroTrustRiskBehaviorBehaviorsMap = exports.DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference = void 0;
exports.dataCloudflareZeroTrustRiskBehaviorBehaviorsToTerraform = dataCloudflareZeroTrustRiskBehaviorBehaviorsToTerraform;
exports.dataCloudflareZeroTrustRiskBehaviorBehaviorsToHclTerraform = dataCloudflareZeroTrustRiskBehaviorBehaviorsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustRiskBehaviorBehaviorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustRiskBehaviorBehaviorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    function DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference(terraformResource, terraformAttribute, complexObjectKey) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, complexObjectKey) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference.prototype, "riskLevel", {
        // risk_level - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('risk_level');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference = DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference;
var DataCloudflareZeroTrustRiskBehaviorBehaviorsMap = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustRiskBehaviorBehaviorsMap, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustRiskBehaviorBehaviorsMap(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        return _this;
    }
    /**
    * @param key the key of the item to return
    */
    DataCloudflareZeroTrustRiskBehaviorBehaviorsMap.prototype.get = function (key) {
        return new DataCloudflareZeroTrustRiskBehaviorBehaviorsOutputReference(this.terraformResource, this.terraformAttribute, key);
    };
    return DataCloudflareZeroTrustRiskBehaviorBehaviorsMap;
}(cdktf.ComplexMap));
exports.DataCloudflareZeroTrustRiskBehaviorBehaviorsMap = DataCloudflareZeroTrustRiskBehaviorBehaviorsMap;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_behavior cloudflare_zero_trust_risk_behavior}
*/
var DataCloudflareZeroTrustRiskBehavior = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustRiskBehavior, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_behavior cloudflare_zero_trust_risk_behavior} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustRiskBehaviorConfig = {}
    */
    function DataCloudflareZeroTrustRiskBehavior(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // behaviors - computed: true, optional: false, required: false
        _this._behaviors = new DataCloudflareZeroTrustRiskBehaviorBehaviorsMap(_this, "behaviors");
        _this._accountId = config.accountId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustRiskBehavior resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustRiskBehavior to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustRiskBehavior that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_risk_behavior#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustRiskBehavior to import is found
    */
    DataCloudflareZeroTrustRiskBehavior.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_risk_behavior", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustRiskBehavior.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustRiskBehavior.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustRiskBehavior.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustRiskBehavior.prototype, "behaviors", {
        get: function () {
            return this._behaviors;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustRiskBehavior.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
        };
    };
    DataCloudflareZeroTrustRiskBehavior.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
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
    DataCloudflareZeroTrustRiskBehavior.tfResourceType = "cloudflare_zero_trust_risk_behavior";
    return DataCloudflareZeroTrustRiskBehavior;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustRiskBehavior = DataCloudflareZeroTrustRiskBehavior;
