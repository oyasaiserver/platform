"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate
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
exports.MtlsCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate cloudflare_mtls_certificate}
*/
var MtlsCertificate = /** @class */ (function (_super) {
    __extends(MtlsCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate cloudflare_mtls_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MtlsCertificateConfig
    */
    function MtlsCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_mtls_certificate',
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
        _this._ca = config.ca;
        _this._certificates = config.certificates;
        _this._name = config.name;
        _this._privateKey = config.privateKey;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MtlsCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MtlsCertificate to import
    * @param importFromId The id of the existing MtlsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/mtls_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MtlsCertificate to import is found
    */
    MtlsCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_mtls_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(MtlsCertificate.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "ca", {
        get: function () {
            return this.getBooleanAttribute('ca');
        },
        set: function (value) {
            this._ca = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "caInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "certificates", {
        get: function () {
            return this.getStringAttribute('certificates');
        },
        set: function (value) {
            this._certificates = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "certificatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    MtlsCertificate.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(MtlsCertificate.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "privateKey", {
        get: function () {
            return this.getStringAttribute('private_key');
        },
        set: function (value) {
            this._privateKey = value;
        },
        enumerable: false,
        configurable: true
    });
    MtlsCertificate.prototype.resetPrivateKey = function () {
        this._privateKey = undefined;
    };
    Object.defineProperty(MtlsCertificate.prototype, "privateKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MtlsCertificate.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MtlsCertificate.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ca: cdktf.booleanToTerraform(this._ca),
            certificates: cdktf.stringToTerraform(this._certificates),
            name: cdktf.stringToTerraform(this._name),
            private_key: cdktf.stringToTerraform(this._privateKey),
        };
    };
    MtlsCertificate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ca: {
                value: cdktf.booleanToHclTerraform(this._ca),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            certificates: {
                value: cdktf.stringToHclTerraform(this._certificates),
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
            private_key: {
                value: cdktf.stringToHclTerraform(this._privateKey),
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
    MtlsCertificate.tfResourceType = "cloudflare_mtls_certificate";
    return MtlsCertificate;
}(cdktf.TerraformResource));
exports.MtlsCertificate = MtlsCertificate;
