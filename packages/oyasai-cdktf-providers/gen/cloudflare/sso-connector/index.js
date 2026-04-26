"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector
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
exports.SsoConnector = exports.SsoConnectorVerificationOutputReference = void 0;
exports.ssoConnectorVerificationToTerraform = ssoConnectorVerificationToTerraform;
exports.ssoConnectorVerificationToHclTerraform = ssoConnectorVerificationToHclTerraform;
var cdktf = require("cdktf");
function ssoConnectorVerificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function ssoConnectorVerificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var SsoConnectorVerificationOutputReference = /** @class */ (function (_super) {
    __extends(SsoConnectorVerificationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SsoConnectorVerificationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SsoConnectorVerificationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SsoConnectorVerificationOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoConnectorVerificationOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return SsoConnectorVerificationOutputReference;
}(cdktf.ComplexObject));
exports.SsoConnectorVerificationOutputReference = SsoConnectorVerificationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector cloudflare_sso_connector}
*/
var SsoConnector = /** @class */ (function (_super) {
    __extends(SsoConnector, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector cloudflare_sso_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoConnectorConfig
    */
    function SsoConnector(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_sso_connector',
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
        // verification - computed: true, optional: false, required: false
        _this._verification = new SsoConnectorVerificationOutputReference(_this, "verification");
        _this._accountId = config.accountId;
        _this._beginVerification = config.beginVerification;
        _this._emailDomain = config.emailDomain;
        _this._enabled = config.enabled;
        _this._useFedrampLanguage = config.useFedrampLanguage;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SsoConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoConnector to import
    * @param importFromId The id of the existing SsoConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoConnector to import is found
    */
    SsoConnector.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_sso_connector", importId: importFromId, provider: provider });
    };
    Object.defineProperty(SsoConnector.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    SsoConnector.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(SsoConnector.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoConnector.prototype, "beginVerification", {
        get: function () {
            return this.getBooleanAttribute('begin_verification');
        },
        set: function (value) {
            this._beginVerification = value;
        },
        enumerable: false,
        configurable: true
    });
    SsoConnector.prototype.resetBeginVerification = function () {
        this._beginVerification = undefined;
    };
    Object.defineProperty(SsoConnector.prototype, "beginVerificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._beginVerification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoConnector.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoConnector.prototype, "emailDomain", {
        get: function () {
            return this.getStringAttribute('email_domain');
        },
        set: function (value) {
            this._emailDomain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoConnector.prototype, "emailDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailDomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoConnector.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SsoConnector.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(SsoConnector.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoConnector.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoConnector.prototype, "updatedOn", {
        // updated_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoConnector.prototype, "useFedrampLanguage", {
        get: function () {
            return this.getBooleanAttribute('use_fedramp_language');
        },
        set: function (value) {
            this._useFedrampLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    SsoConnector.prototype.resetUseFedrampLanguage = function () {
        this._useFedrampLanguage = undefined;
    };
    Object.defineProperty(SsoConnector.prototype, "useFedrampLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._useFedrampLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoConnector.prototype, "verification", {
        get: function () {
            return this._verification;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SsoConnector.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            begin_verification: cdktf.booleanToTerraform(this._beginVerification),
            email_domain: cdktf.stringToTerraform(this._emailDomain),
            enabled: cdktf.booleanToTerraform(this._enabled),
            use_fedramp_language: cdktf.booleanToTerraform(this._useFedrampLanguage),
        };
    };
    SsoConnector.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            begin_verification: {
                value: cdktf.booleanToHclTerraform(this._beginVerification),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            email_domain: {
                value: cdktf.stringToHclTerraform(this._emailDomain),
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
            use_fedramp_language: {
                value: cdktf.booleanToHclTerraform(this._useFedrampLanguage),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    SsoConnector.tfResourceType = "cloudflare_sso_connector";
    return SsoConnector;
}(cdktf.TerraformResource));
exports.SsoConnector = SsoConnector;
