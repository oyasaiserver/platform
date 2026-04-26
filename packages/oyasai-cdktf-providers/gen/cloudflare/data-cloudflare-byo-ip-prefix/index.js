"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix
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
exports.DataCloudflareByoIpPrefix = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix cloudflare_byo_ip_prefix}
*/
var DataCloudflareByoIpPrefix = /** @class */ (function (_super) {
    __extends(DataCloudflareByoIpPrefix, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix cloudflare_byo_ip_prefix} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareByoIpPrefixConfig
    */
    function DataCloudflareByoIpPrefix(scope, id, config) {
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
        _this._prefixId = config.prefixId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareByoIpPrefix resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareByoIpPrefix to import
    * @param importFromId The id of the existing DataCloudflareByoIpPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/byo_ip_prefix#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareByoIpPrefix to import is found
    */
    DataCloudflareByoIpPrefix.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_byo_ip_prefix", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareByoIpPrefix.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "advertised", {
        // advertised - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('advertised');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "advertisedModifiedAt", {
        // advertised_modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('advertised_modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "approved", {
        // approved - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('approved');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "asn", {
        // asn - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "cidr", {
        // cidr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cidr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "delegateLoaCreation", {
        // delegate_loa_creation - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('delegate_loa_creation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "irrValidationState", {
        // irr_validation_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('irr_validation_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "loaDocumentId", {
        // loa_document_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('loa_document_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "onDemandEnabled", {
        // on_demand_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('on_demand_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "onDemandLocked", {
        // on_demand_locked - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('on_demand_locked');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "ownershipValidationState", {
        // ownership_validation_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ownership_validation_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "ownershipValidationToken", {
        // ownership_validation_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ownership_validation_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "prefixId", {
        get: function () {
            return this.getStringAttribute('prefix_id');
        },
        set: function (value) {
            this._prefixId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "prefixIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefixId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareByoIpPrefix.prototype, "rpkiValidationState", {
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
    DataCloudflareByoIpPrefix.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            prefix_id: cdktf.stringToTerraform(this._prefixId),
        };
    };
    DataCloudflareByoIpPrefix.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            prefix_id: {
                value: cdktf.stringToHclTerraform(this._prefixId),
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
    DataCloudflareByoIpPrefix.tfResourceType = "cloudflare_byo_ip_prefix";
    return DataCloudflareByoIpPrefix;
}(cdktf.TerraformDataSource));
exports.DataCloudflareByoIpPrefix = DataCloudflareByoIpPrefix;
