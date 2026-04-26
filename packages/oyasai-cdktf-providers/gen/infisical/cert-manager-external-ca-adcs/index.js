"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_adcs
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
exports.CertManagerExternalCaAdcs = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_adcs infisical_cert_manager_external_ca_adcs}
*/
var CertManagerExternalCaAdcs = /** @class */ (function (_super) {
    __extends(CertManagerExternalCaAdcs, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_adcs infisical_cert_manager_external_ca_adcs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerExternalCaAdcsConfig
    */
    function CertManagerExternalCaAdcs(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_cert_manager_external_ca_adcs',
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
        _this._azureAdcsConnectionId = config.azureAdcsConnectionId;
        _this._name = config.name;
        _this._projectSlug = config.projectSlug;
        _this._status = config.status;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CertManagerExternalCaAdcs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerExternalCaAdcs to import
    * @param importFromId The id of the existing CertManagerExternalCaAdcs that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_external_ca_adcs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerExternalCaAdcs to import is found
    */
    CertManagerExternalCaAdcs.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_cert_manager_external_ca_adcs", importId: importFromId, provider: provider });
    };
    Object.defineProperty(CertManagerExternalCaAdcs.prototype, "azureAdcsConnectionId", {
        get: function () {
            return this.getStringAttribute('azure_adcs_connection_id');
        },
        set: function (value) {
            this._azureAdcsConnectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAdcs.prototype, "azureAdcsConnectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._azureAdcsConnectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAdcs.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAdcs.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAdcs.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAdcs.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAdcs.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CertManagerExternalCaAdcs.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    CertManagerExternalCaAdcs.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(CertManagerExternalCaAdcs.prototype, "statusInput", {
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
    CertManagerExternalCaAdcs.prototype.synthesizeAttributes = function () {
        return {
            azure_adcs_connection_id: cdktf.stringToTerraform(this._azureAdcsConnectionId),
            name: cdktf.stringToTerraform(this._name),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            status: cdktf.stringToTerraform(this._status),
        };
    };
    CertManagerExternalCaAdcs.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            azure_adcs_connection_id: {
                value: cdktf.stringToHclTerraform(this._azureAdcsConnectionId),
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
    CertManagerExternalCaAdcs.tfResourceType = "infisical_cert_manager_external_ca_adcs";
    return CertManagerExternalCaAdcs;
}(cdktf.TerraformResource));
exports.CertManagerExternalCaAdcs = CertManagerExternalCaAdcs;
