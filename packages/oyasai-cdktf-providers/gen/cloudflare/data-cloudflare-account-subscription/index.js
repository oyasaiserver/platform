"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_subscription
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
exports.DataCloudflareAccountSubscription = exports.DataCloudflareAccountSubscriptionRatePlanOutputReference = void 0;
exports.dataCloudflareAccountSubscriptionRatePlanToTerraform = dataCloudflareAccountSubscriptionRatePlanToTerraform;
exports.dataCloudflareAccountSubscriptionRatePlanToHclTerraform = dataCloudflareAccountSubscriptionRatePlanToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccountSubscriptionRatePlanToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccountSubscriptionRatePlanToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccountSubscriptionRatePlanOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountSubscriptionRatePlanOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccountSubscriptionRatePlanOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccountSubscriptionRatePlanOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccountSubscriptionRatePlanOutputReference.prototype, "currency", {
        // currency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('currency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscriptionRatePlanOutputReference.prototype, "externallyManaged", {
        // externally_managed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('externally_managed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscriptionRatePlanOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscriptionRatePlanOutputReference.prototype, "isContract", {
        // is_contract - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_contract');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscriptionRatePlanOutputReference.prototype, "publicName", {
        // public_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscriptionRatePlanOutputReference.prototype, "scope", {
        // scope - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scope');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscriptionRatePlanOutputReference.prototype, "sets", {
        // sets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('sets');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccountSubscriptionRatePlanOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccountSubscriptionRatePlanOutputReference = DataCloudflareAccountSubscriptionRatePlanOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_subscription cloudflare_account_subscription}
*/
var DataCloudflareAccountSubscription = /** @class */ (function (_super) {
    __extends(DataCloudflareAccountSubscription, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_subscription cloudflare_account_subscription} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountSubscriptionConfig = {}
    */
    function DataCloudflareAccountSubscription(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_account_subscription',
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
        // rate_plan - computed: true, optional: false, required: false
        _this._ratePlan = new DataCloudflareAccountSubscriptionRatePlanOutputReference(_this, "rate_plan");
        _this._accountId = config.accountId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountSubscription to import
    * @param importFromId The id of the existing DataCloudflareAccountSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountSubscription to import is found
    */
    DataCloudflareAccountSubscription.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_subscription", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccountSubscription.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccountSubscription.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccountSubscription.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscription.prototype, "currency", {
        // currency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('currency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscription.prototype, "currentPeriodEnd", {
        // current_period_end - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('current_period_end');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscription.prototype, "currentPeriodStart", {
        // current_period_start - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('current_period_start');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscription.prototype, "frequency", {
        // frequency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('frequency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscription.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscription.prototype, "price", {
        // price - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('price');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscription.prototype, "ratePlan", {
        get: function () {
            return this._ratePlan;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccountSubscription.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareAccountSubscription.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
        };
    };
    DataCloudflareAccountSubscription.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareAccountSubscription.tfResourceType = "cloudflare_account_subscription";
    return DataCloudflareAccountSubscription;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccountSubscription = DataCloudflareAccountSubscription;
