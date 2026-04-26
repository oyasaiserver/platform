"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification
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
exports.R2BucketEventNotification = exports.R2BucketEventNotificationRulesList = exports.R2BucketEventNotificationRulesOutputReference = void 0;
exports.r2BucketEventNotificationRulesToTerraform = r2BucketEventNotificationRulesToTerraform;
exports.r2BucketEventNotificationRulesToHclTerraform = r2BucketEventNotificationRulesToHclTerraform;
var cdktf = require("cdktf");
function r2BucketEventNotificationRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.actions),
        description: cdktf.stringToTerraform(struct.description),
        prefix: cdktf.stringToTerraform(struct.prefix),
        suffix: cdktf.stringToTerraform(struct.suffix),
    };
}
function r2BucketEventNotificationRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        actions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.actions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        description: {
            value: cdktf.stringToHclTerraform(struct.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktf.stringToHclTerraform(struct.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        suffix: {
            value: cdktf.stringToHclTerraform(struct.suffix),
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
var R2BucketEventNotificationRulesOutputReference = /** @class */ (function (_super) {
    __extends(R2BucketEventNotificationRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function R2BucketEventNotificationRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(R2BucketEventNotificationRulesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._actions !== undefined) {
                hasAnyValues = true;
                internalValueResult.actions = this._actions;
            }
            if (this._description !== undefined) {
                hasAnyValues = true;
                internalValueResult.description = this._description;
            }
            if (this._prefix !== undefined) {
                hasAnyValues = true;
                internalValueResult.prefix = this._prefix;
            }
            if (this._suffix !== undefined) {
                hasAnyValues = true;
                internalValueResult.suffix = this._suffix;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._actions = undefined;
                this._description = undefined;
                this._prefix = undefined;
                this._suffix = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._actions = value.actions;
                this._description = value.description;
                this._prefix = value.prefix;
                this._suffix = value.suffix;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotificationRulesOutputReference.prototype, "actions", {
        get: function () {
            return this.getListAttribute('actions');
        },
        set: function (value) {
            this._actions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotificationRulesOutputReference.prototype, "actionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotificationRulesOutputReference.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketEventNotificationRulesOutputReference.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(R2BucketEventNotificationRulesOutputReference.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotificationRulesOutputReference.prototype, "prefix", {
        get: function () {
            return this.getStringAttribute('prefix');
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketEventNotificationRulesOutputReference.prototype.resetPrefix = function () {
        this._prefix = undefined;
    };
    Object.defineProperty(R2BucketEventNotificationRulesOutputReference.prototype, "prefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotificationRulesOutputReference.prototype, "suffix", {
        get: function () {
            return this.getStringAttribute('suffix');
        },
        set: function (value) {
            this._suffix = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketEventNotificationRulesOutputReference.prototype.resetSuffix = function () {
        this._suffix = undefined;
    };
    Object.defineProperty(R2BucketEventNotificationRulesOutputReference.prototype, "suffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._suffix;
        },
        enumerable: false,
        configurable: true
    });
    return R2BucketEventNotificationRulesOutputReference;
}(cdktf.ComplexObject));
exports.R2BucketEventNotificationRulesOutputReference = R2BucketEventNotificationRulesOutputReference;
var R2BucketEventNotificationRulesList = /** @class */ (function (_super) {
    __extends(R2BucketEventNotificationRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function R2BucketEventNotificationRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    R2BucketEventNotificationRulesList.prototype.get = function (index) {
        return new R2BucketEventNotificationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return R2BucketEventNotificationRulesList;
}(cdktf.ComplexList));
exports.R2BucketEventNotificationRulesList = R2BucketEventNotificationRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification}
*/
var R2BucketEventNotification = /** @class */ (function (_super) {
    __extends(R2BucketEventNotification, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketEventNotificationConfig
    */
    function R2BucketEventNotification(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_r2_bucket_event_notification',
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
        // rules - computed: false, optional: false, required: true
        _this._rules = new R2BucketEventNotificationRulesList(_this, "rules", false);
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        _this._jurisdiction = config.jurisdiction;
        _this._queueId = config.queueId;
        _this._rules.internalValue = config.rules;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a R2BucketEventNotification resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketEventNotification to import
    * @param importFromId The id of the existing R2BucketEventNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_event_notification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketEventNotification to import is found
    */
    R2BucketEventNotification.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_event_notification", importId: importFromId, provider: provider });
    };
    Object.defineProperty(R2BucketEventNotification.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketEventNotification.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(R2BucketEventNotification.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotification.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotification.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotification.prototype, "jurisdiction", {
        get: function () {
            return this.getStringAttribute('jurisdiction');
        },
        set: function (value) {
            this._jurisdiction = value;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketEventNotification.prototype.resetJurisdiction = function () {
        this._jurisdiction = undefined;
    };
    Object.defineProperty(R2BucketEventNotification.prototype, "jurisdictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jurisdiction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotification.prototype, "queueId", {
        get: function () {
            return this.getStringAttribute('queue_id');
        },
        set: function (value) {
            this._queueId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotification.prototype, "queueIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotification.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(R2BucketEventNotification.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    R2BucketEventNotification.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    Object.defineProperty(R2BucketEventNotification.prototype, "rulesInput", {
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
    R2BucketEventNotification.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            queue_id: cdktf.stringToTerraform(this._queueId),
            rules: cdktf.listMapper(r2BucketEventNotificationRulesToTerraform, false)(this._rules.internalValue),
        };
    };
    R2BucketEventNotification.prototype.synthesizeHclAttributes = function () {
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
            queue_id: {
                value: cdktf.stringToHclTerraform(this._queueId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rules: {
                value: cdktf.listMapperHcl(r2BucketEventNotificationRulesToHclTerraform, false)(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "R2BucketEventNotificationRulesList",
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
    R2BucketEventNotification.tfResourceType = "cloudflare_r2_bucket_event_notification";
    return R2BucketEventNotification;
}(cdktf.TerraformResource));
exports.R2BucketEventNotification = R2BucketEventNotification;
