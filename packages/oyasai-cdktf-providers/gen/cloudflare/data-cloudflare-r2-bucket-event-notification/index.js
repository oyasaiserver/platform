"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_event_notification
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
exports.DataCloudflareR2BucketEventNotification = exports.DataCloudflareR2BucketEventNotificationRulesList = exports.DataCloudflareR2BucketEventNotificationRulesOutputReference = void 0;
exports.dataCloudflareR2BucketEventNotificationRulesToTerraform = dataCloudflareR2BucketEventNotificationRulesToTerraform;
exports.dataCloudflareR2BucketEventNotificationRulesToHclTerraform = dataCloudflareR2BucketEventNotificationRulesToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareR2BucketEventNotificationRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareR2BucketEventNotificationRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareR2BucketEventNotificationRulesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketEventNotificationRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareR2BucketEventNotificationRulesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareR2BucketEventNotificationRulesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareR2BucketEventNotificationRulesOutputReference.prototype, "actions", {
        // actions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('actions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketEventNotificationRulesOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketEventNotificationRulesOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketEventNotificationRulesOutputReference.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketEventNotificationRulesOutputReference.prototype, "ruleId", {
        // rule_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rule_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketEventNotificationRulesOutputReference.prototype, "suffix", {
        // suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('suffix');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareR2BucketEventNotificationRulesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareR2BucketEventNotificationRulesOutputReference = DataCloudflareR2BucketEventNotificationRulesOutputReference;
var DataCloudflareR2BucketEventNotificationRulesList = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketEventNotificationRulesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareR2BucketEventNotificationRulesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareR2BucketEventNotificationRulesList.prototype.get = function (index) {
        return new DataCloudflareR2BucketEventNotificationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareR2BucketEventNotificationRulesList;
}(cdktf.ComplexList));
exports.DataCloudflareR2BucketEventNotificationRulesList = DataCloudflareR2BucketEventNotificationRulesList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification}
*/
var DataCloudflareR2BucketEventNotification = /** @class */ (function (_super) {
    __extends(DataCloudflareR2BucketEventNotification, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareR2BucketEventNotificationConfig
    */
    function DataCloudflareR2BucketEventNotification(scope, id, config) {
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
        // rules - computed: true, optional: false, required: false
        _this._rules = new DataCloudflareR2BucketEventNotificationRulesList(_this, "rules", false);
        _this._accountId = config.accountId;
        _this._bucketName = config.bucketName;
        _this._queueId = config.queueId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareR2BucketEventNotification resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareR2BucketEventNotification to import
    * @param importFromId The id of the existing DataCloudflareR2BucketEventNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/r2_bucket_event_notification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareR2BucketEventNotification to import is found
    */
    DataCloudflareR2BucketEventNotification.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_event_notification", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareR2BucketEventNotification.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareR2BucketEventNotification.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareR2BucketEventNotification.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketEventNotification.prototype, "bucketName", {
        get: function () {
            return this.getStringAttribute('bucket_name');
        },
        set: function (value) {
            this._bucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketEventNotification.prototype, "bucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketEventNotification.prototype, "queueId", {
        get: function () {
            return this.getStringAttribute('queue_id');
        },
        set: function (value) {
            this._queueId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketEventNotification.prototype, "queueIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queueId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketEventNotification.prototype, "queueName", {
        // queue_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('queue_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareR2BucketEventNotification.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareR2BucketEventNotification.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            queue_id: cdktf.stringToTerraform(this._queueId),
        };
    };
    DataCloudflareR2BucketEventNotification.prototype.synthesizeHclAttributes = function () {
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
            queue_id: {
                value: cdktf.stringToHclTerraform(this._queueId),
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
    DataCloudflareR2BucketEventNotification.tfResourceType = "cloudflare_r2_bucket_event_notification";
    return DataCloudflareR2BucketEventNotification;
}(cdktf.TerraformDataSource));
exports.DataCloudflareR2BucketEventNotification = DataCloudflareR2BucketEventNotification;
