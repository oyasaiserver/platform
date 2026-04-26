"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule
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
exports.LeakedCredentialCheckRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule cloudflare_leaked_credential_check_rule}
*/
var LeakedCredentialCheckRule = /** @class */ (function (_super) {
    __extends(LeakedCredentialCheckRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule cloudflare_leaked_credential_check_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LeakedCredentialCheckRuleConfig = {}
    */
    function LeakedCredentialCheckRule(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_leaked_credential_check_rule',
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
        _this._password = config.password;
        _this._username = config.username;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a LeakedCredentialCheckRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LeakedCredentialCheckRule to import
    * @param importFromId The id of the existing LeakedCredentialCheckRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LeakedCredentialCheckRule to import is found
    */
    LeakedCredentialCheckRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_leaked_credential_check_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(LeakedCredentialCheckRule.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LeakedCredentialCheckRule.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    LeakedCredentialCheckRule.prototype.resetPassword = function () {
        this._password = undefined;
    };
    Object.defineProperty(LeakedCredentialCheckRule.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LeakedCredentialCheckRule.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    LeakedCredentialCheckRule.prototype.resetUsername = function () {
        this._username = undefined;
    };
    Object.defineProperty(LeakedCredentialCheckRule.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LeakedCredentialCheckRule.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    LeakedCredentialCheckRule.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(LeakedCredentialCheckRule.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LeakedCredentialCheckRule.prototype.synthesizeAttributes = function () {
        return {
            password: cdktf.stringToTerraform(this._password),
            username: cdktf.stringToTerraform(this._username),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    LeakedCredentialCheckRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            password: {
                value: cdktf.stringToHclTerraform(this._password),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username: {
                value: cdktf.stringToHclTerraform(this._username),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    LeakedCredentialCheckRule.tfResourceType = "cloudflare_leaked_credential_check_rule";
    return LeakedCredentialCheckRule;
}(cdktf.TerraformResource));
exports.LeakedCredentialCheckRule = LeakedCredentialCheckRule;
