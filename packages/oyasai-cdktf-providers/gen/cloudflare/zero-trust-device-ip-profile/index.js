"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile
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
exports.ZeroTrustDeviceIpProfile = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile cloudflare_zero_trust_device_ip_profile}
*/
var ZeroTrustDeviceIpProfile = /** @class */ (function (_super) {
    __extends(ZeroTrustDeviceIpProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile cloudflare_zero_trust_device_ip_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceIpProfileConfig
    */
    function ZeroTrustDeviceIpProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_ip_profile',
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
        _this._description = config.description;
        _this._enabled = config.enabled;
        _this._match = config.match;
        _this._name = config.name;
        _this._precedence = config.precedence;
        _this._subnetId = config.subnetId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceIpProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceIpProfile to import
    * @param importFromId The id of the existing ZeroTrustDeviceIpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_ip_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceIpProfile to import is found
    */
    ZeroTrustDeviceIpProfile.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_ip_profile", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceIpProfile.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceIpProfile.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDeviceIpProfile.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "precedence", {
        get: function () {
            return this.getNumberAttribute('precedence');
        },
        set: function (value) {
            this._precedence = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "precedenceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._precedence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDeviceIpProfile.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDeviceIpProfile.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            match: cdktf.stringToTerraform(this._match),
            name: cdktf.stringToTerraform(this._name),
            precedence: cdktf.numberToTerraform(this._precedence),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
        };
    };
    ZeroTrustDeviceIpProfile.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
            match: {
                value: cdktf.stringToHclTerraform(this._match),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            precedence: {
                value: cdktf.numberToHclTerraform(this._precedence),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            subnet_id: {
                value: cdktf.stringToHclTerraform(this._subnetId),
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
    ZeroTrustDeviceIpProfile.tfResourceType = "cloudflare_zero_trust_device_ip_profile";
    return ZeroTrustDeviceIpProfile;
}(cdktf.TerraformResource));
exports.ZeroTrustDeviceIpProfile = ZeroTrustDeviceIpProfile;
