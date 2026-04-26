"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate
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
exports.ClientCertificate = exports.ClientCertificateCertificateAuthorityOutputReference = void 0;
exports.clientCertificateCertificateAuthorityToTerraform = clientCertificateCertificateAuthorityToTerraform;
exports.clientCertificateCertificateAuthorityToHclTerraform = clientCertificateCertificateAuthorityToHclTerraform;
var cdktf = require("cdktf");
function clientCertificateCertificateAuthorityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function clientCertificateCertificateAuthorityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ClientCertificateCertificateAuthorityOutputReference = /** @class */ (function (_super) {
    __extends(ClientCertificateCertificateAuthorityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ClientCertificateCertificateAuthorityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ClientCertificateCertificateAuthorityOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ClientCertificateCertificateAuthorityOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificateCertificateAuthorityOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return ClientCertificateCertificateAuthorityOutputReference;
}(cdktf.ComplexObject));
exports.ClientCertificateCertificateAuthorityOutputReference = ClientCertificateCertificateAuthorityOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate cloudflare_client_certificate}
*/
var ClientCertificate = /** @class */ (function (_super) {
    __extends(ClientCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate cloudflare_client_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ClientCertificateConfig
    */
    function ClientCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_client_certificate',
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
        // certificate_authority - computed: true, optional: false, required: false
        _this._certificateAuthority = new ClientCertificateCertificateAuthorityOutputReference(_this, "certificate_authority");
        _this._csr = config.csr;
        _this._reactivate = config.reactivate;
        _this._validityDays = config.validityDays;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ClientCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ClientCertificate to import
    * @param importFromId The id of the existing ClientCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/client_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ClientCertificate to import is found
    */
    ClientCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_client_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ClientCertificate.prototype, "certificate", {
        // ==========
        // ATTRIBUTES
        // ==========
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "certificateAuthority", {
        get: function () {
            return this._certificateAuthority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "commonName", {
        // common_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('common_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "country", {
        // country - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('country');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "csr", {
        get: function () {
            return this.getStringAttribute('csr');
        },
        set: function (value) {
            this._csr = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "csrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._csr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "fingerprintSha256", {
        // fingerprint_sha256 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fingerprint_sha256');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "issuedOn", {
        // issued_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issued_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "location", {
        // location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "organization", {
        // organization - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('organization');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "organizationalUnit", {
        // organizational_unit - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('organizational_unit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "reactivate", {
        get: function () {
            return this.getBooleanAttribute('reactivate');
        },
        set: function (value) {
            this._reactivate = value;
        },
        enumerable: false,
        configurable: true
    });
    ClientCertificate.prototype.resetReactivate = function () {
        this._reactivate = undefined;
    };
    Object.defineProperty(ClientCertificate.prototype, "reactivateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reactivate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "ski", {
        // ski - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ski');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "validityDays", {
        get: function () {
            return this.getNumberAttribute('validity_days');
        },
        set: function (value) {
            this._validityDays = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "validityDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validityDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientCertificate.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ClientCertificate.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ClientCertificate.prototype, "zoneIdInput", {
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
    ClientCertificate.prototype.synthesizeAttributes = function () {
        return {
            csr: cdktf.stringToTerraform(this._csr),
            reactivate: cdktf.booleanToTerraform(this._reactivate),
            validity_days: cdktf.numberToTerraform(this._validityDays),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ClientCertificate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            csr: {
                value: cdktf.stringToHclTerraform(this._csr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            reactivate: {
                value: cdktf.booleanToHclTerraform(this._reactivate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            validity_days: {
                value: cdktf.numberToHclTerraform(this._validityDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    ClientCertificate.tfResourceType = "cloudflare_client_certificate";
    return ClientCertificate;
}(cdktf.TerraformResource));
exports.ClientCertificate = ClientCertificate;
