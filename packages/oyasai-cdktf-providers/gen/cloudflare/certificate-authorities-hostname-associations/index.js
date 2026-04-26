"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations
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
exports.CertificateAuthoritiesHostnameAssociations = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}
*/
var CertificateAuthoritiesHostnameAssociations = /** @class */ (function (_super) {
    __extends(CertificateAuthoritiesHostnameAssociations, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertificateAuthoritiesHostnameAssociationsConfig
    */
    function CertificateAuthoritiesHostnameAssociations(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_certificate_authorities_hostname_associations',
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
        _this._hostnames = config.hostnames;
        _this._mtlsCertificateId = config.mtlsCertificateId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertificateAuthoritiesHostnameAssociations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertificateAuthoritiesHostnameAssociations to import
    * @param importFromId The id of the existing CertificateAuthoritiesHostnameAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertificateAuthoritiesHostnameAssociations to import is found
    */
    CertificateAuthoritiesHostnameAssociations.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_certificate_authorities_hostname_associations", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CertificateAuthoritiesHostnameAssociations.prototype, "hostnames", {
        get: function () {
            return this.getListAttribute('hostnames');
        },
        set: function (value) {
            this._hostnames = value;
        },
        enumerable: false,
        configurable: true
    });
    CertificateAuthoritiesHostnameAssociations.prototype.resetHostnames = function () {
        this._hostnames = undefined;
    };
    Object.defineProperty(CertificateAuthoritiesHostnameAssociations.prototype, "hostnamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostnames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificateAuthoritiesHostnameAssociations.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificateAuthoritiesHostnameAssociations.prototype, "mtlsCertificateId", {
        get: function () {
            return this.getStringAttribute('mtls_certificate_id');
        },
        set: function (value) {
            this._mtlsCertificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    CertificateAuthoritiesHostnameAssociations.prototype.resetMtlsCertificateId = function () {
        this._mtlsCertificateId = undefined;
    };
    Object.defineProperty(CertificateAuthoritiesHostnameAssociations.prototype, "mtlsCertificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mtlsCertificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificateAuthoritiesHostnameAssociations.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertificateAuthoritiesHostnameAssociations.prototype, "zoneIdInput", {
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
    CertificateAuthoritiesHostnameAssociations.prototype.synthesizeAttributes = function () {
        return {
            hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostnames),
            mtls_certificate_id: cdktf.stringToTerraform(this._mtlsCertificateId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    CertificateAuthoritiesHostnameAssociations.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            hostnames: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostnames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            mtls_certificate_id: {
                value: cdktf.stringToHclTerraform(this._mtlsCertificateId),
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
    CertificateAuthoritiesHostnameAssociations.tfResourceType = "cloudflare_certificate_authorities_hostname_associations";
    return CertificateAuthoritiesHostnameAssociations;
}(cdktf.TerraformResource));
exports.CertificateAuthoritiesHostnameAssociations = CertificateAuthoritiesHostnameAssociations;
