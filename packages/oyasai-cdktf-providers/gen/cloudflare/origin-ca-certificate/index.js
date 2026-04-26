"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate
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
exports.OriginCaCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate cloudflare_origin_ca_certificate}
*/
var OriginCaCertificate = /** @class */ (function (_super) {
    __extends(OriginCaCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate cloudflare_origin_ca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OriginCaCertificateConfig
    */
    function OriginCaCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_origin_ca_certificate',
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
        _this._csr = config.csr;
        _this._hostnames = config.hostnames;
        _this._requestType = config.requestType;
        _this._requestedValidity = config.requestedValidity;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OriginCaCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OriginCaCertificate to import
    * @param importFromId The id of the existing OriginCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OriginCaCertificate to import is found
    */
    OriginCaCertificate.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_origin_ca_certificate", importId: importFromId, provider: provider });
    };
    Object.defineProperty(OriginCaCertificate.prototype, "certificate", {
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
    Object.defineProperty(OriginCaCertificate.prototype, "csr", {
        get: function () {
            return this.getStringAttribute('csr');
        },
        set: function (value) {
            this._csr = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OriginCaCertificate.prototype, "csrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._csr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OriginCaCertificate.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OriginCaCertificate.prototype, "hostnames", {
        get: function () {
            return this.getListAttribute('hostnames');
        },
        set: function (value) {
            this._hostnames = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OriginCaCertificate.prototype, "hostnamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostnames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OriginCaCertificate.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OriginCaCertificate.prototype, "requestType", {
        get: function () {
            return this.getStringAttribute('request_type');
        },
        set: function (value) {
            this._requestType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OriginCaCertificate.prototype, "requestTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OriginCaCertificate.prototype, "requestedValidity", {
        get: function () {
            return this.getNumberAttribute('requested_validity');
        },
        set: function (value) {
            this._requestedValidity = value;
        },
        enumerable: false,
        configurable: true
    });
    OriginCaCertificate.prototype.resetRequestedValidity = function () {
        this._requestedValidity = undefined;
    };
    Object.defineProperty(OriginCaCertificate.prototype, "requestedValidityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestedValidity;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OriginCaCertificate.prototype.synthesizeAttributes = function () {
        return {
            csr: cdktf.stringToTerraform(this._csr),
            hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostnames),
            request_type: cdktf.stringToTerraform(this._requestType),
            requested_validity: cdktf.numberToTerraform(this._requestedValidity),
        };
    };
    OriginCaCertificate.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            csr: {
                value: cdktf.stringToHclTerraform(this._csr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostnames: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostnames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            request_type: {
                value: cdktf.stringToHclTerraform(this._requestType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            requested_validity: {
                value: cdktf.numberToHclTerraform(this._requestedValidity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    OriginCaCertificate.tfResourceType = "cloudflare_origin_ca_certificate";
    return OriginCaCertificate;
}(cdktf.TerraformResource));
exports.OriginCaCertificate = OriginCaCertificate;
