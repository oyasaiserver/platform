"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription
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
exports.AccountSubscription = exports.AccountSubscriptionRatePlanOutputReference = void 0;
exports.accountSubscriptionRatePlanToTerraform = accountSubscriptionRatePlanToTerraform;
exports.accountSubscriptionRatePlanToHclTerraform = accountSubscriptionRatePlanToHclTerraform;
var cdktf = require("cdktf");
function accountSubscriptionRatePlanToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
function accountSubscriptionRatePlanToHclTerraform(struct) {
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
        scope: {
            value: cdktf.stringToHclTerraform(struct.scope),
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
var AccountSubscriptionRatePlanOutputReference = /** @class */ (function (_super) {
    __extends(AccountSubscriptionRatePlanOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AccountSubscriptionRatePlanOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AccountSubscriptionRatePlanOutputReference.prototype, "internalValue", {
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
            if (this._scope !== undefined) {
                hasAnyValues = true;
                internalValueResult.scope = this._scope;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
                this._scope = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
                this._scope = value.scope;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscriptionRatePlanOutputReference.prototype, "currency", {
        // currency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('currency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscriptionRatePlanOutputReference.prototype, "externallyManaged", {
        // externally_managed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('externally_managed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscriptionRatePlanOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountSubscriptionRatePlanOutputReference.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(AccountSubscriptionRatePlanOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscriptionRatePlanOutputReference.prototype, "isContract", {
        // is_contract - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_contract');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscriptionRatePlanOutputReference.prototype, "publicName", {
        // public_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscriptionRatePlanOutputReference.prototype, "scope", {
        get: function () {
            return this.getStringAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountSubscriptionRatePlanOutputReference.prototype.resetScope = function () {
        this._scope = undefined;
    };
    Object.defineProperty(AccountSubscriptionRatePlanOutputReference.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscriptionRatePlanOutputReference.prototype, "sets", {
        // sets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('sets');
        },
        enumerable: false,
        configurable: true
    });
    return AccountSubscriptionRatePlanOutputReference;
}(cdktf.ComplexObject));
exports.AccountSubscriptionRatePlanOutputReference = AccountSubscriptionRatePlanOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription cloudflare_account_subscription}
*/
var AccountSubscription = /** @class */ (function (_super) {
    __extends(AccountSubscription, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription cloudflare_account_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountSubscriptionConfig = {}
    */
    function AccountSubscription(scope, id, config) {
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
        // rate_plan - computed: true, optional: true, required: false
        _this._ratePlan = new AccountSubscriptionRatePlanOutputReference(_this, "rate_plan");
        _this._accountId = config.accountId;
        _this._frequency = config.frequency;
        _this._ratePlan.internalValue = config.ratePlan;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AccountSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountSubscription to import
    * @param importFromId The id of the existing AccountSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountSubscription to import is found
    */
    AccountSubscription.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_subscription", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AccountSubscription.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountSubscription.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(AccountSubscription.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscription.prototype, "currency", {
        // currency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('currency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscription.prototype, "currentPeriodEnd", {
        // current_period_end - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('current_period_end');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscription.prototype, "currentPeriodStart", {
        // current_period_start - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('current_period_start');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscription.prototype, "frequency", {
        get: function () {
            return this.getStringAttribute('frequency');
        },
        set: function (value) {
            this._frequency = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountSubscription.prototype.resetFrequency = function () {
        this._frequency = undefined;
    };
    Object.defineProperty(AccountSubscription.prototype, "frequencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._frequency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscription.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscription.prototype, "price", {
        // price - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('price');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscription.prototype, "ratePlan", {
        get: function () {
            return this._ratePlan;
        },
        enumerable: false,
        configurable: true
    });
    AccountSubscription.prototype.putRatePlan = function (value) {
        this._ratePlan.internalValue = value;
    };
    AccountSubscription.prototype.resetRatePlan = function () {
        this._ratePlan.internalValue = undefined;
    };
    Object.defineProperty(AccountSubscription.prototype, "ratePlanInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ratePlan.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountSubscription.prototype, "state", {
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
    AccountSubscription.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            frequency: cdktf.stringToTerraform(this._frequency),
            rate_plan: accountSubscriptionRatePlanToTerraform(this._ratePlan.internalValue),
        };
    };
    AccountSubscription.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            frequency: {
                value: cdktf.stringToHclTerraform(this._frequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rate_plan: {
                value: accountSubscriptionRatePlanToHclTerraform(this._ratePlan.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AccountSubscriptionRatePlan",
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
    AccountSubscription.tfResourceType = "cloudflare_account_subscription";
    return AccountSubscription;
}(cdktf.TerraformResource));
exports.AccountSubscription = AccountSubscription;
