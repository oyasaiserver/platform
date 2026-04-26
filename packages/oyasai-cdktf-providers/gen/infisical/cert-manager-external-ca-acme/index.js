"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme
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
exports.CertManagerExternalCaAcme = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme infisical_cert_manager_external_ca_acme}
*/
var CertManagerExternalCaAcme = /** @class */ (function (_super) {
    __extends(CertManagerExternalCaAcme, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme infisical_cert_manager_external_ca_acme} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerExternalCaAcmeConfig
    */
    function CertManagerExternalCaAcme(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_cert_manager_external_ca_acme',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._accountEmail = config.accountEmail;
        _this._directoryUrl = config.directoryUrl;
        _this._dnsAppConnectionId = config.dnsAppConnectionId;
        _this._dnsHostedZoneId = config.dnsHostedZoneId;
        _this._dnsProvider = config.dnsProvider;
        _this._eabHmacKey = config.eabHmacKey;
        _this._eabKid = config.eabKid;
        _this._name = config.name;
        _this._projectSlug = config.projectSlug;
        _this._status = config.status;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerExternalCaAcme resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerExternalCaAcme to import
    * @param importFromId The id of the existing CertManagerExternalCaAcme that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_acme#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerExternalCaAcme to import is found
    */
    CertManagerExternalCaAcme.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_external_ca_acme", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "accountEmail", {
        get: function () {
            return this.getStringAttribute('account_email');
        },
        set: function (value) {
            this._accountEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "accountEmailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "directoryUrl", {
        get: function () {
            return this.getStringAttribute('directory_url');
        },
        set: function (value) {
            this._directoryUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "directoryUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directoryUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "dnsAppConnectionId", {
        get: function () {
            return this.getStringAttribute('dns_app_connection_id');
        },
        set: function (value) {
            this._dnsAppConnectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "dnsAppConnectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsAppConnectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "dnsHostedZoneId", {
        get: function () {
            return this.getStringAttribute('dns_hosted_zone_id');
        },
        set: function (value) {
            this._dnsHostedZoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerExternalCaAcme.prototype.resetDnsHostedZoneId = function () {
        this._dnsHostedZoneId = undefined;
    };
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "dnsHostedZoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsHostedZoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "dnsProvider", {
        get: function () {
            return this.getStringAttribute('dns_provider');
        },
        set: function (value) {
            this._dnsProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "dnsProviderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "eabHmacKey", {
        get: function () {
            return this.getStringAttribute('eab_hmac_key');
        },
        set: function (value) {
            this._eabHmacKey = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerExternalCaAcme.prototype.resetEabHmacKey = function () {
        this._eabHmacKey = undefined;
    };
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "eabHmacKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eabHmacKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "eabKid", {
        get: function () {
            return this.getStringAttribute('eab_kid');
        },
        set: function (value) {
            this._eabKid = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerExternalCaAcme.prototype.resetEabKid = function () {
        this._eabKid = undefined;
    };
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "eabKidInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eabKid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerExternalCaAcme.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(CertManagerExternalCaAcme.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CertManagerExternalCaAcme.prototype.synthesizeAttributes = function () {
        return {
            account_email: cdktf.stringToTerraform(this._accountEmail),
            directory_url: cdktf.stringToTerraform(this._directoryUrl),
            dns_app_connection_id: cdktf.stringToTerraform(this._dnsAppConnectionId),
            dns_hosted_zone_id: cdktf.stringToTerraform(this._dnsHostedZoneId),
            dns_provider: cdktf.stringToTerraform(this._dnsProvider),
            eab_hmac_key: cdktf.stringToTerraform(this._eabHmacKey),
            eab_kid: cdktf.stringToTerraform(this._eabKid),
            name: cdktf.stringToTerraform(this._name),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            status: cdktf.stringToTerraform(this._status),
        };
    };
    CertManagerExternalCaAcme.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_email: {
                value: cdktf.stringToHclTerraform(this._accountEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            directory_url: {
                value: cdktf.stringToHclTerraform(this._directoryUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dns_app_connection_id: {
                value: cdktf.stringToHclTerraform(this._dnsAppConnectionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dns_hosted_zone_id: {
                value: cdktf.stringToHclTerraform(this._dnsHostedZoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dns_provider: {
                value: cdktf.stringToHclTerraform(this._dnsProvider),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            eab_hmac_key: {
                value: cdktf.stringToHclTerraform(this._eabHmacKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            eab_kid: {
                value: cdktf.stringToHclTerraform(this._eabKid),
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
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
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
    CertManagerExternalCaAcme.tfResourceType = "infisical_cert_manager_external_ca_acme";
    return CertManagerExternalCaAcme;
}(cdktf.TerraformResource));
exports.CertManagerExternalCaAcme = CertManagerExternalCaAcme;
