"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_logging
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
exports.DataCloudflareZeroTrustGatewayLogging = exports.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference = exports.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference = exports.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference = exports.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference = void 0;
exports.dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform = dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform;
exports.dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform = dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform;
exports.dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform = dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform;
exports.dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform = dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform;
exports.dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform = dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform;
exports.dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform = dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform;
exports.dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeToTerraform = dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeToTerraform;
exports.dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform = dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.prototype, "logAll", {
        // log_all - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('log_all');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.prototype, "logBlocks", {
        // log_blocks - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('log_blocks');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference = DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference;
function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.prototype, "logAll", {
        // log_all - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('log_all');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.prototype, "logBlocks", {
        // log_blocks - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('log_blocks');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference = DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference;
function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.prototype, "logAll", {
        // log_all - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('log_all');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.prototype, "logBlocks", {
        // log_blocks - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('log_blocks');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference = DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference;
function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // dns - computed: true, optional: false, required: false
        _this._dns = new DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference(_this, "dns");
        // http - computed: true, optional: false, required: false
        _this._http = new DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference(_this, "http");
        // l4 - computed: true, optional: false, required: false
        _this._l4 = new DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference(_this, "l4");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype, "dns", {
        get: function () {
            return this._dns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype, "http", {
        get: function () {
            return this._http;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.prototype, "l4", {
        get: function () {
            return this._l4;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference = DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging}
*/
var DataCloudflareZeroTrustGatewayLogging = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustGatewayLogging, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustGatewayLoggingConfig = {}
    */
    function DataCloudflareZeroTrustGatewayLogging(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_gateway_logging',
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
        // settings_by_rule_type - computed: true, optional: false, required: false
        _this._settingsByRuleType = new DataCloudflareZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference(_this, "settings_by_rule_type");
        _this._accountId = config.accountId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayLogging resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayLogging to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_gateway_logging#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayLogging to import is found
    */
    DataCloudflareZeroTrustGatewayLogging.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_logging", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayLogging.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustGatewayLogging.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustGatewayLogging.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayLogging.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayLogging.prototype, "redactPii", {
        // redact_pii - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('redact_pii');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustGatewayLogging.prototype, "settingsByRuleType", {
        get: function () {
            return this._settingsByRuleType;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustGatewayLogging.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
        };
    };
    DataCloudflareZeroTrustGatewayLogging.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareZeroTrustGatewayLogging.tfResourceType = "cloudflare_zero_trust_gateway_logging";
    return DataCloudflareZeroTrustGatewayLogging;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustGatewayLogging = DataCloudflareZeroTrustGatewayLogging;
