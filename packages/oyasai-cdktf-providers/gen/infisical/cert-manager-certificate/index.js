"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate
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
exports.CertManagerCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate infisical_cert_manager_certificate}
*/
var CertManagerCertificate = /** @class */ (function (_super) {
    __extends(CertManagerCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate infisical_cert_manager_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerCertificateConfig
    */
    function CertManagerCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_cert_manager_certificate',
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
        _this._altNames = config.altNames;
        _this._commonName = config.commonName;
        _this._country = config.country;
        _this._csr = config.csr;
        _this._extendedKeyUsages = config.extendedKeyUsages;
        _this._keyAlgorithm = config.keyAlgorithm;
        _this._keyUsages = config.keyUsages;
        _this._locality = config.locality;
        _this._organization = config.organization;
        _this._ou = config.ou;
        _this._profileId = config.profileId;
        _this._province = config.province;
        _this._signatureAlgorithm = config.signatureAlgorithm;
        _this._timeoutSeconds = config.timeoutSeconds;
        _this._ttl = config.ttl;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerCertificate to import
    * @param importFromId The id of the existing CertManagerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerCertificate to import is found
    */
    CertManagerCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CertManagerCertificate.prototype, "altNames", {
        get: function () {
            return this.getListAttribute('alt_names');
        },
        set: function (value) {
            this._altNames = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetAltNames = function () {
        this._altNames = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "altNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._altNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "certificateChain", {
        // certificate_chain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_chain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "certificateRequestId", {
        // certificate_request_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_request_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "commonName", {
        get: function () {
            return this.getStringAttribute('common_name');
        },
        set: function (value) {
            this._commonName = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetCommonName = function () {
        this._commonName = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "country", {
        get: function () {
            return this.getStringAttribute('country');
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetCountry = function () {
        this._country = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "countryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "csr", {
        get: function () {
            return this.getStringAttribute('csr');
        },
        set: function (value) {
            this._csr = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetCsr = function () {
        this._csr = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "csrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._csr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "extendedKeyUsages", {
        get: function () {
            return this.getListAttribute('extended_key_usages');
        },
        set: function (value) {
            this._extendedKeyUsages = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetExtendedKeyUsages = function () {
        this._extendedKeyUsages = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "extendedKeyUsagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extendedKeyUsages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "keyAlgorithm", {
        get: function () {
            return this.getStringAttribute('key_algorithm');
        },
        set: function (value) {
            this._keyAlgorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetKeyAlgorithm = function () {
        this._keyAlgorithm = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "keyAlgorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyAlgorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "keyUsages", {
        get: function () {
            return this.getListAttribute('key_usages');
        },
        set: function (value) {
            this._keyUsages = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetKeyUsages = function () {
        this._keyUsages = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "keyUsagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyUsages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "locality", {
        get: function () {
            return this.getStringAttribute('locality');
        },
        set: function (value) {
            this._locality = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetLocality = function () {
        this._locality = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "localityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locality;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "notAfter", {
        // not_after - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('not_after');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "notBefore", {
        // not_before - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('not_before');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "organization", {
        get: function () {
            return this.getStringAttribute('organization');
        },
        set: function (value) {
            this._organization = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetOrganization = function () {
        this._organization = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "organizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "ou", {
        get: function () {
            return this.getStringAttribute('ou');
        },
        set: function (value) {
            this._ou = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetOu = function () {
        this._ou = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "ouInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ou;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "privateKey", {
        // private_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "profileId", {
        get: function () {
            return this.getStringAttribute('profile_id');
        },
        set: function (value) {
            this._profileId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "profileIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profileId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "province", {
        get: function () {
            return this.getStringAttribute('province');
        },
        set: function (value) {
            this._province = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetProvince = function () {
        this._province = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "provinceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._province;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "signatureAlgorithm", {
        get: function () {
            return this.getStringAttribute('signature_algorithm');
        },
        set: function (value) {
            this._signatureAlgorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetSignatureAlgorithm = function () {
        this._signatureAlgorithm = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "signatureAlgorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._signatureAlgorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "timeoutSeconds", {
        get: function () {
            return this.getNumberAttribute('timeout_seconds');
        },
        set: function (value) {
            this._timeoutSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetTimeoutSeconds = function () {
        this._timeoutSeconds = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "timeoutSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeoutSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCertificate.prototype, "ttl", {
        get: function () {
            return this.getStringAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCertificate.prototype.resetTtl = function () {
        this._ttl = undefined;
    };
    Object.defineProperty(CertManagerCertificate.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CertManagerCertificate.prototype.synthesizeAttributes = function () {
        return {
            alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._altNames),
            common_name: cdktf.stringToTerraform(this._commonName),
            country: cdktf.stringToTerraform(this._country),
            csr: cdktf.stringToTerraform(this._csr),
            extended_key_usages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extendedKeyUsages),
            key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
            key_usages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyUsages),
            locality: cdktf.stringToTerraform(this._locality),
            organization: cdktf.stringToTerraform(this._organization),
            ou: cdktf.stringToTerraform(this._ou),
            profile_id: cdktf.stringToTerraform(this._profileId),
            province: cdktf.stringToTerraform(this._province),
            signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
            timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
            ttl: cdktf.stringToTerraform(this._ttl),
        };
    };
    CertManagerCertificate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            alt_names: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._altNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            common_name: {
                value: cdktf.stringToHclTerraform(this._commonName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            country: {
                value: cdktf.stringToHclTerraform(this._country),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            csr: {
                value: cdktf.stringToHclTerraform(this._csr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            extended_key_usages: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extendedKeyUsages),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            key_algorithm: {
                value: cdktf.stringToHclTerraform(this._keyAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_usages: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyUsages),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            locality: {
                value: cdktf.stringToHclTerraform(this._locality),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organization: {
                value: cdktf.stringToHclTerraform(this._organization),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ou: {
                value: cdktf.stringToHclTerraform(this._ou),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_id: {
                value: cdktf.stringToHclTerraform(this._profileId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            province: {
                value: cdktf.stringToHclTerraform(this._province),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            signature_algorithm: {
                value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            timeout_seconds: {
                value: cdktf.numberToHclTerraform(this._timeoutSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ttl: {
                value: cdktf.stringToHclTerraform(this._ttl),
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
    CertManagerCertificate.tfResourceType = "infisical_cert_manager_certificate";
    return CertManagerCertificate;
}(cdktf.TerraformResource));
exports.CertManagerCertificate = CertManagerCertificate;
