"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_acl
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
exports.DnsZoneTransfersAcl = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_acl cloudflare_dns_zone_transfers_acl}
*/
var DnsZoneTransfersAcl = /** @class */ (function (_super) {
    __extends(DnsZoneTransfersAcl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_acl cloudflare_dns_zone_transfers_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsZoneTransfersAclConfig
    */
    function DnsZoneTransfersAcl(scope, id, config) {
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
        _this._ipRange = config.ipRange;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DnsZoneTransfersAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsZoneTransfersAcl to import
    * @param importFromId The id of the existing DnsZoneTransfersAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsZoneTransfersAcl to import is found
    */
    DnsZoneTransfersAcl.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_acl", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DnsZoneTransfersAcl.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsZoneTransfersAcl.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DnsZoneTransfersAcl.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersAcl.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersAcl.prototype, "ipRange", {
        get: function () {
            return this.getStringAttribute('ip_range');
        },
        set: function (value) {
            this._ipRange = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersAcl.prototype, "ipRangeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipRange;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersAcl.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersAcl.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DnsZoneTransfersAcl.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ip_range: cdktf.stringToTerraform(this._ipRange),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    DnsZoneTransfersAcl.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_range: {
                value: cdktf.stringToHclTerraform(this._ipRange),
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
    DnsZoneTransfersAcl.tfResourceType = "cloudflare_dns_zone_transfers_acl";
    return DnsZoneTransfersAcl;
}(cdktf.TerraformResource));
exports.DnsZoneTransfersAcl = DnsZoneTransfersAcl;
