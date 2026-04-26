"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca
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
exports.CertManagerInternalCa = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca infisical_cert_manager_internal_ca}
*/
var CertManagerInternalCa = /** @class */ (function (_super) {
    __extends(CertManagerInternalCa, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca infisical_cert_manager_internal_ca} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerInternalCaConfig
    */
    function CertManagerInternalCa(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_cert_manager_internal_ca',
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
        _this._commonName = config.commonName;
        _this._country = config.country;
        _this._keyAlgorithm = config.keyAlgorithm;
        _this._locality = config.locality;
        _this._name = config.name;
        _this._organization = config.organization;
        _this._ou = config.ou;
        _this._projectSlug = config.projectSlug;
        _this._province = config.province;
        _this._status = config.status;
        _this._type = config.type;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerInternalCa resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerInternalCa to import
    * @param importFromId The id of the existing CertManagerInternalCa that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_internal_ca#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerInternalCa to import is found
    */
    CertManagerInternalCa.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_internal_ca", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CertManagerInternalCa.prototype, "commonName", {
        get: function () {
            return this.getStringAttribute('common_name');
        },
        set: function (value) {
            this._commonName = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerInternalCa.prototype.resetCommonName = function () {
        this._commonName = undefined;
    };
    Object.defineProperty(CertManagerInternalCa.prototype, "commonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commonName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "country", {
        get: function () {
            return this.getStringAttribute('country');
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerInternalCa.prototype.resetCountry = function () {
        this._country = undefined;
    };
    Object.defineProperty(CertManagerInternalCa.prototype, "countryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "keyAlgorithm", {
        get: function () {
            return this.getStringAttribute('key_algorithm');
        },
        set: function (value) {
            this._keyAlgorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerInternalCa.prototype.resetKeyAlgorithm = function () {
        this._keyAlgorithm = undefined;
    };
    Object.defineProperty(CertManagerInternalCa.prototype, "keyAlgorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyAlgorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "locality", {
        get: function () {
            return this.getStringAttribute('locality');
        },
        set: function (value) {
            this._locality = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerInternalCa.prototype.resetLocality = function () {
        this._locality = undefined;
    };
    Object.defineProperty(CertManagerInternalCa.prototype, "localityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locality;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "organization", {
        get: function () {
            return this.getStringAttribute('organization');
        },
        set: function (value) {
            this._organization = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerInternalCa.prototype.resetOrganization = function () {
        this._organization = undefined;
    };
    Object.defineProperty(CertManagerInternalCa.prototype, "organizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "ou", {
        get: function () {
            return this.getStringAttribute('ou');
        },
        set: function (value) {
            this._ou = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerInternalCa.prototype.resetOu = function () {
        this._ou = undefined;
    };
    Object.defineProperty(CertManagerInternalCa.prototype, "ouInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ou;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "province", {
        get: function () {
            return this.getStringAttribute('province');
        },
        set: function (value) {
            this._province = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerInternalCa.prototype.resetProvince = function () {
        this._province = undefined;
    };
    Object.defineProperty(CertManagerInternalCa.prototype, "provinceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._province;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerInternalCa.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(CertManagerInternalCa.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerInternalCa.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CertManagerInternalCa.prototype.synthesizeAttributes = function () {
        return {
            common_name: cdktf.stringToTerraform(this._commonName),
            country: cdktf.stringToTerraform(this._country),
            key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
            locality: cdktf.stringToTerraform(this._locality),
            name: cdktf.stringToTerraform(this._name),
            organization: cdktf.stringToTerraform(this._organization),
            ou: cdktf.stringToTerraform(this._ou),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            province: cdktf.stringToTerraform(this._province),
            status: cdktf.stringToTerraform(this._status),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    CertManagerInternalCa.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
            key_algorithm: {
                value: cdktf.stringToHclTerraform(this._keyAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            locality: {
                value: cdktf.stringToHclTerraform(this._locality),
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
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
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
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
    CertManagerInternalCa.tfResourceType = "infisical_cert_manager_internal_ca";
    return CertManagerInternalCa;
}(cdktf.TerraformResource));
exports.CertManagerInternalCa = CertManagerInternalCa;
