"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connector
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
exports.DataCloudflareSsoConnector = exports.DataCloudflareSsoConnectorVerificationOutputReference = void 0;
exports.dataCloudflareSsoConnectorVerificationToTerraform = dataCloudflareSsoConnectorVerificationToTerraform;
exports.dataCloudflareSsoConnectorVerificationToHclTerraform = dataCloudflareSsoConnectorVerificationToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareSsoConnectorVerificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareSsoConnectorVerificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareSsoConnectorVerificationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSsoConnectorVerificationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareSsoConnectorVerificationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareSsoConnectorVerificationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareSsoConnectorVerificationOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnectorVerificationOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSsoConnectorVerificationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSsoConnectorVerificationOutputReference = DataCloudflareSsoConnectorVerificationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connector cloudflare_sso_connector}
*/
var DataCloudflareSsoConnector = /** @class */ (function (_super) {
    __extends(DataCloudflareSsoConnector, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connector cloudflare_sso_connector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSsoConnectorConfig
    */
    function DataCloudflareSsoConnector(scope, id, config) {
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
        _this._verification = new DataCloudflareSsoConnectorVerificationOutputReference(_this, "verification");
        _this._accountId = config.accountId;
        _this._ssoConnectorId = config.ssoConnectorId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareSsoConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSsoConnector to import
    * @param importFromId The id of the existing DataCloudflareSsoConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSsoConnector to import is found
    */
    DataCloudflareSsoConnector.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_sso_connector", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareSsoConnector.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSsoConnector.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareSsoConnector.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnector.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnector.prototype, "emailDomain", {
        // email_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email_domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnector.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnector.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnector.prototype, "ssoConnectorId", {
        get: function () {
            return this.getStringAttribute('sso_connector_id');
        },
        set: function (value) {
            this._ssoConnectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnector.prototype, "ssoConnectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ssoConnectorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnector.prototype, "updatedOn", {
        // updated_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnector.prototype, "useFedrampLanguage", {
        // use_fedramp_language - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('use_fedramp_language');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnector.prototype, "verification", {
        get: function () {
            return this._verification;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareSsoConnector.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            sso_connector_id: cdktf.stringToTerraform(this._ssoConnectorId),
        };
    };
    DataCloudflareSsoConnector.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sso_connector_id: {
                value: cdktf.stringToHclTerraform(this._ssoConnectorId),
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
    DataCloudflareSsoConnector.tfResourceType = "cloudflare_sso_connector";
    return DataCloudflareSsoConnector;
}(cdktf.TerraformDataSource));
exports.DataCloudflareSsoConnector = DataCloudflareSsoConnector;
