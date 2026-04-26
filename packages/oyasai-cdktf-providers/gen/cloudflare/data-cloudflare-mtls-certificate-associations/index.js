"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate_associations
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
exports.DataCloudflareMtlsCertificateAssociations = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate_associations cloudflare_mtls_certificate_associations}
*/
var DataCloudflareMtlsCertificateAssociations = /** @class */ (function (_super) {
    __extends(DataCloudflareMtlsCertificateAssociations, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate_associations cloudflare_mtls_certificate_associations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMtlsCertificateAssociationsConfig
    */
    function DataCloudflareMtlsCertificateAssociations(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_mtls_certificate_associations',
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
        _this._mtlsCertificateId = config.mtlsCertificateId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMtlsCertificateAssociations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMtlsCertificateAssociations to import
    * @param importFromId The id of the existing DataCloudflareMtlsCertificateAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMtlsCertificateAssociations to import is found
    */
    DataCloudflareMtlsCertificateAssociations.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_mtls_certificate_associations", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMtlsCertificateAssociations.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMtlsCertificateAssociations.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMtlsCertificateAssociations.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMtlsCertificateAssociations.prototype, "mtlsCertificateId", {
        get: function () {
            return this.getStringAttribute('mtls_certificate_id');
        },
        set: function (value) {
            this._mtlsCertificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMtlsCertificateAssociations.prototype, "mtlsCertificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mtlsCertificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMtlsCertificateAssociations.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMtlsCertificateAssociations.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMtlsCertificateAssociations.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            mtls_certificate_id: cdktf.stringToTerraform(this._mtlsCertificateId),
        };
    };
    DataCloudflareMtlsCertificateAssociations.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mtls_certificate_id: {
                value: cdktf.stringToHclTerraform(this._mtlsCertificateId),
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
    DataCloudflareMtlsCertificateAssociations.tfResourceType = "cloudflare_mtls_certificate_associations";
    return DataCloudflareMtlsCertificateAssociations;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMtlsCertificateAssociations = DataCloudflareMtlsCertificateAssociations;
