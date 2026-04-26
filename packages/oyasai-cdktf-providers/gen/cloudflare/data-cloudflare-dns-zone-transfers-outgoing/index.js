"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_outgoing
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
exports.DataCloudflareDnsZoneTransfersOutgoing = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing}
*/
var DataCloudflareDnsZoneTransfersOutgoing = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsZoneTransfersOutgoing, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsZoneTransfersOutgoingConfig = {}
    */
    function DataCloudflareDnsZoneTransfersOutgoing(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_dns_zone_transfers_outgoing',
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
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersOutgoing resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersOutgoing to import
    * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersOutgoing that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_outgoing#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersOutgoing to import is found
    */
    DataCloudflareDnsZoneTransfersOutgoing.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_outgoing", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareDnsZoneTransfersOutgoing.prototype, "checkedTime", {
        // ==========
        // ATTRIBUTES
        // ==========
        // checked_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('checked_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersOutgoing.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersOutgoing.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersOutgoing.prototype, "lastTransferredTime", {
        // last_transferred_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_transferred_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersOutgoing.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersOutgoing.prototype, "peers", {
        // peers - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('peers'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersOutgoing.prototype, "soaSerial", {
        // soa_serial - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('soa_serial');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersOutgoing.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsZoneTransfersOutgoing.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareDnsZoneTransfersOutgoing.prototype, "zoneIdInput", {
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
    DataCloudflareDnsZoneTransfersOutgoing.prototype.synthesizeAttributes = function () {
        return {
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareDnsZoneTransfersOutgoing.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DataCloudflareDnsZoneTransfersOutgoing.tfResourceType = "cloudflare_dns_zone_transfers_outgoing";
    return DataCloudflareDnsZoneTransfersOutgoing;
}(cdktf.TerraformDataSource));
exports.DataCloudflareDnsZoneTransfersOutgoing = DataCloudflareDnsZoneTransfersOutgoing;
