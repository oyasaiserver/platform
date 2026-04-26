"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_tsig
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
exports.DataCloudflareDnsZoneTransfersTsig = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_tsig cloudflare_dns_zone_transfers_tsig}
*/
var DataCloudflareDnsZoneTransfersTsig = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsZoneTransfersTsig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_tsig cloudflare_dns_zone_transfers_tsig} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsZoneTransfersTsigConfig
    */
    function DataCloudflareDnsZoneTransfersTsig(scope, id, config) {
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
        _this._tsigId = config.tsigId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersTsig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersTsig to import
    * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersTsig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_tsig#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersTsig to import is found
    */
    DataCloudflareDnsZoneTransfersTsig.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_tsig", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareDnsZoneTransfersTsig.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsZoneTransfersTsig.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareDnsZoneTransfersTsig.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersTsig.prototype, "algo", {
        // algo - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('algo');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersTsig.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersTsig.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersTsig.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersTsig.prototype, "tsigId", {
        get: function () {
            return this.getStringAttribute('tsig_id');
        },
        set: function (value) {
            this._tsigId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersTsig.prototype, "tsigIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tsigId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareDnsZoneTransfersTsig.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            tsig_id: cdktf.stringToTerraform(this._tsigId),
        };
    };
    DataCloudflareDnsZoneTransfersTsig.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tsig_id: {
                value: cdktf.stringToHclTerraform(this._tsigId),
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
    DataCloudflareDnsZoneTransfersTsig.tfResourceType = "cloudflare_dns_zone_transfers_tsig";
    return DataCloudflareDnsZoneTransfersTsig;
}(cdktf.TerraformDataSource));
exports.DataCloudflareDnsZoneTransfersTsig = DataCloudflareDnsZoneTransfersTsig;
