"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_tsig
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
exports.DnsZoneTransfersTsig = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_tsig cloudflare_dns_zone_transfers_tsig}
*/
var DnsZoneTransfersTsig = /** @class */ (function (_super) {
    __extends(DnsZoneTransfersTsig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_tsig cloudflare_dns_zone_transfers_tsig} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsZoneTransfersTsigConfig
    */
    function DnsZoneTransfersTsig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_dns_zone_transfers_tsig',
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
        _this._algo = config.algo;
        _this._name = config.name;
        _this._secret = config.secret;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DnsZoneTransfersTsig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsZoneTransfersTsig to import
    * @param importFromId The id of the existing DnsZoneTransfersTsig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_tsig#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsZoneTransfersTsig to import is found
    */
    DnsZoneTransfersTsig.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_tsig", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DnsZoneTransfersTsig.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsZoneTransfersTsig.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DnsZoneTransfersTsig.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersTsig.prototype, "algo", {
        get: function () {
            return this.getStringAttribute('algo');
        },
        set: function (value) {
            this._algo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersTsig.prototype, "algoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._algo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersTsig.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersTsig.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersTsig.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersTsig.prototype, "secret", {
        get: function () {
            return this.getStringAttribute('secret');
        },
        set: function (value) {
            this._secret = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersTsig.prototype, "secretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secret;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DnsZoneTransfersTsig.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            algo: cdktf.stringToTerraform(this._algo),
            name: cdktf.stringToTerraform(this._name),
            secret: cdktf.stringToTerraform(this._secret),
        };
    };
    DnsZoneTransfersTsig.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            algo: {
                value: cdktf.stringToHclTerraform(this._algo),
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
            secret: {
                value: cdktf.stringToHclTerraform(this._secret),
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
    DnsZoneTransfersTsig.tfResourceType = "cloudflare_dns_zone_transfers_tsig";
    return DnsZoneTransfersTsig;
}(cdktf.TerraformResource));
exports.DnsZoneTransfersTsig = DnsZoneTransfersTsig;
