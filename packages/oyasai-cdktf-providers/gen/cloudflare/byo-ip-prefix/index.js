"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix
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
exports.ByoIpPrefix = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix cloudflare_byo_ip_prefix}
*/
var ByoIpPrefix = /** @class */ (function (_super) {
    __extends(ByoIpPrefix, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix cloudflare_byo_ip_prefix} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ByoIpPrefixConfig
    */
    function ByoIpPrefix(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_byo_ip_prefix',
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
        _this._asn = config.asn;
        _this._cidr = config.cidr;
        _this._delegateLoaCreation = config.delegateLoaCreation;
        _this._description = config.description;
        _this._loaDocumentId = config.loaDocumentId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ByoIpPrefix resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ByoIpPrefix to import
    * @param importFromId The id of the existing ByoIpPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ByoIpPrefix to import is found
    */
    ByoIpPrefix.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_byo_ip_prefix", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ByoIpPrefix.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ByoIpPrefix.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ByoIpPrefix.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "advertised", {
        // advertised - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('advertised');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "advertisedModifiedAt", {
        // advertised_modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('advertised_modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "approved", {
        // approved - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('approved');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "asn", {
        get: function () {
            return this.getNumberAttribute('asn');
        },
        set: function (value) {
            this._asn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "asnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._asn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "cidr", {
        get: function () {
            return this.getStringAttribute('cidr');
        },
        set: function (value) {
            this._cidr = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "cidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "delegateLoaCreation", {
        get: function () {
            return this.getBooleanAttribute('delegate_loa_creation');
        },
        set: function (value) {
            this._delegateLoaCreation = value;
        },
        enumerable: false,
        configurable: true
    });
    ByoIpPrefix.prototype.resetDelegateLoaCreation = function () {
        this._delegateLoaCreation = undefined;
    };
    Object.defineProperty(ByoIpPrefix.prototype, "delegateLoaCreationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._delegateLoaCreation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ByoIpPrefix.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ByoIpPrefix.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "irrValidationState", {
        // irr_validation_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('irr_validation_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "loaDocumentId", {
        get: function () {
            return this.getStringAttribute('loa_document_id');
        },
        set: function (value) {
            this._loaDocumentId = value;
        },
        enumerable: false,
        configurable: true
    });
    ByoIpPrefix.prototype.resetLoaDocumentId = function () {
        this._loaDocumentId = undefined;
    };
    Object.defineProperty(ByoIpPrefix.prototype, "loaDocumentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loaDocumentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "onDemandEnabled", {
        // on_demand_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('on_demand_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "onDemandLocked", {
        // on_demand_locked - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('on_demand_locked');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "ownershipValidationState", {
        // ownership_validation_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ownership_validation_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "ownershipValidationToken", {
        // ownership_validation_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ownership_validation_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByoIpPrefix.prototype, "rpkiValidationState", {
        // rpki_validation_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rpki_validation_state');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ByoIpPrefix.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            asn: cdktf.numberToTerraform(this._asn),
            cidr: cdktf.stringToTerraform(this._cidr),
            delegate_loa_creation: cdktf.booleanToTerraform(this._delegateLoaCreation),
            description: cdktf.stringToTerraform(this._description),
            loa_document_id: cdktf.stringToTerraform(this._loaDocumentId),
        };
    };
    ByoIpPrefix.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            asn: {
                value: cdktf.numberToHclTerraform(this._asn),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cidr: {
                value: cdktf.stringToHclTerraform(this._cidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            delegate_loa_creation: {
                value: cdktf.booleanToHclTerraform(this._delegateLoaCreation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            loa_document_id: {
                value: cdktf.stringToHclTerraform(this._loaDocumentId),
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
    ByoIpPrefix.tfResourceType = "cloudflare_byo_ip_prefix";
    return ByoIpPrefix;
}(cdktf.TerraformResource));
exports.ByoIpPrefix = ByoIpPrefix;
