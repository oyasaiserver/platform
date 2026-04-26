"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback
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
exports.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback cloudflare_zero_trust_device_custom_profile_local_domain_fallback}
*/
var DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback cloudflare_zero_trust_device_custom_profile_local_domain_fallback} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallbackConfig
    */
    function DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_custom_profile_local_domain_fallback',
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
        _this._accountId = config.accountId;
        _this._policyId = config.policyId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_custom_profile_local_domain_fallback#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback to import is found
    */
    DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_custom_profile_local_domain_fallback", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "dnsServer", {
        // dns_server - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_server');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "policyId", {
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        set: function (value) {
            this._policyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "policyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.prototype, "suffix", {
        // suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('suffix');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            policy_id: cdktf.stringToTerraform(this._policyId),
        };
    };
    DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_id: {
                value: cdktf.stringToHclTerraform(this._policyId),
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
    DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback.tfResourceType = "cloudflare_zero_trust_device_custom_profile_local_domain_fallback";
    return DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback = DataCloudflareZeroTrustDeviceCustomProfileLocalDomainFallback;
