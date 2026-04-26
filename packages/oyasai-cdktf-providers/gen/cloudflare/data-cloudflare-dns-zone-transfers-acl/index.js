"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acl
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
exports.DataCloudflareDnsZoneTransfersAcl = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acl cloudflare_dns_zone_transfers_acl}
*/
var DataCloudflareDnsZoneTransfersAcl = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsZoneTransfersAcl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acl cloudflare_dns_zone_transfers_acl} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsZoneTransfersAclConfig
    */
    function DataCloudflareDnsZoneTransfersAcl(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_dns_zone_transfers_acl',
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
        _this._aclId = config.aclId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersAcl to import
    * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersAcl to import is found
    */
    DataCloudflareDnsZoneTransfersAcl.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_acl", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareDnsZoneTransfersAcl.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsZoneTransfersAcl.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareDnsZoneTransfersAcl.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersAcl.prototype, "aclId", {
        get: function () {
            return this.getStringAttribute('acl_id');
        },
        set: function (value) {
            this._aclId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersAcl.prototype, "aclIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aclId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersAcl.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersAcl.prototype, "ipRange", {
        // ip_range - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_range');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersAcl.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareDnsZoneTransfersAcl.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            acl_id: cdktf.stringToTerraform(this._aclId),
        };
    };
    DataCloudflareDnsZoneTransfersAcl.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            acl_id: {
                value: cdktf.stringToHclTerraform(this._aclId),
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
    DataCloudflareDnsZoneTransfersAcl.tfResourceType = "cloudflare_dns_zone_transfers_acl";
    return DataCloudflareDnsZoneTransfersAcl;
}(cdktf.TerraformDataSource));
exports.DataCloudflareDnsZoneTransfersAcl = DataCloudflareDnsZoneTransfersAcl;
