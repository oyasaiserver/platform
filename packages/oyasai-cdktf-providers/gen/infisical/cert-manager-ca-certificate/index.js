"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate
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
exports.CertManagerCaCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate infisical_cert_manager_ca_certificate}
*/
var CertManagerCaCertificate = /** @class */ (function (_super) {
    __extends(CertManagerCaCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate infisical_cert_manager_ca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerCaCertificateConfig
    */
    function CertManagerCaCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_cert_manager_ca_certificate',
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
        _this._caId = config.caId;
        _this._maxPathLength = config.maxPathLength;
        _this._notAfter = config.notAfter;
        _this._notBefore = config.notBefore;
        _this._parentCaId = config.parentCaId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerCaCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerCaCertificate to import
    * @param importFromId The id of the existing CertManagerCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_ca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerCaCertificate to import is found
    */
    CertManagerCaCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_ca_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CertManagerCaCertificate.prototype, "caId", {
        get: function () {
            return this.getStringAttribute('ca_id');
        },
        set: function (value) {
            this._caId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCaCertificate.prototype, "caIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCaCertificate.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCaCertificate.prototype, "certificateChain", {
        // certificate_chain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_chain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCaCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCaCertificate.prototype, "maxPathLength", {
        get: function () {
            return this.getNumberAttribute('max_path_length');
        },
        set: function (value) {
            this._maxPathLength = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCaCertificate.prototype.resetMaxPathLength = function () {
        this._maxPathLength = undefined;
    };
    Object.defineProperty(CertManagerCaCertificate.prototype, "maxPathLengthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxPathLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCaCertificate.prototype, "notAfter", {
        get: function () {
            return this.getStringAttribute('not_after');
        },
        set: function (value) {
            this._notAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCaCertificate.prototype, "notAfterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notAfter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCaCertificate.prototype, "notBefore", {
        get: function () {
            return this.getStringAttribute('not_before');
        },
        set: function (value) {
            this._notBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCaCertificate.prototype, "notBeforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notBefore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCaCertificate.prototype, "parentCaId", {
        get: function () {
            return this.getStringAttribute('parent_ca_id');
        },
        set: function (value) {
            this._parentCaId = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerCaCertificate.prototype.resetParentCaId = function () {
        this._parentCaId = undefined;
    };
    Object.defineProperty(CertManagerCaCertificate.prototype, "parentCaIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parentCaId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerCaCertificate.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CertManagerCaCertificate.prototype.synthesizeAttributes = function () {
        return {
            ca_id: cdktf.stringToTerraform(this._caId),
            max_path_length: cdktf.numberToTerraform(this._maxPathLength),
            not_after: cdktf.stringToTerraform(this._notAfter),
            not_before: cdktf.stringToTerraform(this._notBefore),
            parent_ca_id: cdktf.stringToTerraform(this._parentCaId),
        };
    };
    CertManagerCaCertificate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            ca_id: {
                value: cdktf.stringToHclTerraform(this._caId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_path_length: {
                value: cdktf.numberToHclTerraform(this._maxPathLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            not_after: {
                value: cdktf.stringToHclTerraform(this._notAfter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            not_before: {
                value: cdktf.stringToHclTerraform(this._notBefore),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent_ca_id: {
                value: cdktf.stringToHclTerraform(this._parentCaId),
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
    CertManagerCaCertificate.tfResourceType = "infisical_cert_manager_ca_certificate";
    return CertManagerCaCertificate;
}(cdktf.TerraformResource));
exports.CertManagerCaCertificate = CertManagerCaCertificate;
