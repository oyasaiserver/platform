"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration
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
exports.ZeroTrustAccessKeyConfiguration = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration cloudflare_zero_trust_access_key_configuration}
*/
var ZeroTrustAccessKeyConfiguration = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessKeyConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration cloudflare_zero_trust_access_key_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessKeyConfigurationConfig
    */
    function ZeroTrustAccessKeyConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_key_configuration',
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
        _this._keyRotationIntervalDays = config.keyRotationIntervalDays;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessKeyConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessKeyConfiguration to import
    * @param importFromId The id of the existing ZeroTrustAccessKeyConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_key_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessKeyConfiguration to import is found
    */
    ZeroTrustAccessKeyConfiguration.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_key_configuration", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustAccessKeyConfiguration.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessKeyConfiguration.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessKeyConfiguration.prototype, "daysUntilNextRotation", {
        // days_until_next_rotation - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('days_until_next_rotation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessKeyConfiguration.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessKeyConfiguration.prototype, "keyRotationIntervalDays", {
        get: function () {
            return this.getNumberAttribute('key_rotation_interval_days');
        },
        set: function (value) {
            this._keyRotationIntervalDays = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessKeyConfiguration.prototype, "keyRotationIntervalDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyRotationIntervalDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessKeyConfiguration.prototype, "lastKeyRotationAt", {
        // last_key_rotation_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_key_rotation_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustAccessKeyConfiguration.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            key_rotation_interval_days: cdktf.numberToTerraform(this._keyRotationIntervalDays),
        };
    };
    ZeroTrustAccessKeyConfiguration.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_rotation_interval_days: {
                value: cdktf.numberToHclTerraform(this._keyRotationIntervalDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    ZeroTrustAccessKeyConfiguration.tfResourceType = "cloudflare_zero_trust_access_key_configuration";
    return ZeroTrustAccessKeyConfiguration;
}(cdktf.TerraformResource));
exports.ZeroTrustAccessKeyConfiguration = ZeroTrustAccessKeyConfiguration;
