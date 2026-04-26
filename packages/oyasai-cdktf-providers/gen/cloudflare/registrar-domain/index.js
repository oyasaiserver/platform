"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain
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
exports.RegistrarDomain = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain cloudflare_registrar_domain}
*/
var RegistrarDomain = /** @class */ (function (_super) {
    __extends(RegistrarDomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain cloudflare_registrar_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RegistrarDomainConfig
    */
    function RegistrarDomain(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_registrar_domain',
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
        _this._autoRenew = config.autoRenew;
        _this._domainName = config.domainName;
        _this._locked = config.locked;
        _this._privacy = config.privacy;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RegistrarDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RegistrarDomain to import
    * @param importFromId The id of the existing RegistrarDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/registrar_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RegistrarDomain to import is found
    */
    RegistrarDomain.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_registrar_domain", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RegistrarDomain.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    RegistrarDomain.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(RegistrarDomain.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrarDomain.prototype, "autoRenew", {
        get: function () {
            return this.getBooleanAttribute('auto_renew');
        },
        set: function (value) {
            this._autoRenew = value;
        },
        enumerable: false,
        configurable: true
    });
    RegistrarDomain.prototype.resetAutoRenew = function () {
        this._autoRenew = undefined;
    };
    Object.defineProperty(RegistrarDomain.prototype, "autoRenewInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoRenew;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrarDomain.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrarDomain.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrarDomain.prototype, "locked", {
        get: function () {
            return this.getBooleanAttribute('locked');
        },
        set: function (value) {
            this._locked = value;
        },
        enumerable: false,
        configurable: true
    });
    RegistrarDomain.prototype.resetLocked = function () {
        this._locked = undefined;
    };
    Object.defineProperty(RegistrarDomain.prototype, "lockedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrarDomain.prototype, "privacy", {
        get: function () {
            return this.getBooleanAttribute('privacy');
        },
        set: function (value) {
            this._privacy = value;
        },
        enumerable: false,
        configurable: true
    });
    RegistrarDomain.prototype.resetPrivacy = function () {
        this._privacy = undefined;
    };
    Object.defineProperty(RegistrarDomain.prototype, "privacyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privacy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RegistrarDomain.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            auto_renew: cdktf.booleanToTerraform(this._autoRenew),
            domain_name: cdktf.stringToTerraform(this._domainName),
            locked: cdktf.booleanToTerraform(this._locked),
            privacy: cdktf.booleanToTerraform(this._privacy),
        };
    };
    RegistrarDomain.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_renew: {
                value: cdktf.booleanToHclTerraform(this._autoRenew),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            domain_name: {
                value: cdktf.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            locked: {
                value: cdktf.booleanToHclTerraform(this._locked),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            privacy: {
                value: cdktf.booleanToHclTerraform(this._privacy),
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
    RegistrarDomain.tfResourceType = "cloudflare_registrar_domain";
    return RegistrarDomain;
}(cdktf.TerraformResource));
exports.RegistrarDomain = RegistrarDomain;
