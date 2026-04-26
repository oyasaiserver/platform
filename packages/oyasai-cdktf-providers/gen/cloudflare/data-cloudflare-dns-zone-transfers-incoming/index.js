"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_incoming
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
exports.DataCloudflareDnsZoneTransfersIncoming = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming}
*/
var DataCloudflareDnsZoneTransfersIncoming = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsZoneTransfersIncoming, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsZoneTransfersIncomingConfig = {}
    */
    function DataCloudflareDnsZoneTransfersIncoming(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_dns_zone_transfers_incoming',
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
    * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersIncoming to import
    * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersIncoming that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_incoming#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersIncoming to import is found
    */
    DataCloudflareDnsZoneTransfersIncoming.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_incoming", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareDnsZoneTransfersIncoming.prototype, "autoRefreshSeconds", {
        // ==========
        // ATTRIBUTES
        // ==========
        // auto_refresh_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('auto_refresh_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersIncoming.prototype, "checkedTime", {
        // checked_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('checked_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersIncoming.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersIncoming.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersIncoming.prototype, "modifiedTime", {
        // modified_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersIncoming.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersIncoming.prototype, "peers", {
        // peers - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('peers'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersIncoming.prototype, "soaSerial", {
        // soa_serial - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('soa_serial');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersIncoming.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsZoneTransfersIncoming.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareDnsZoneTransfersIncoming.prototype, "zoneIdInput", {
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
    DataCloudflareDnsZoneTransfersIncoming.prototype.synthesizeAttributes = function () {
        return {
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareDnsZoneTransfersIncoming.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareDnsZoneTransfersIncoming.tfResourceType = "cloudflare_dns_zone_transfers_incoming";
    return DataCloudflareDnsZoneTransfersIncoming;
}(cdktf.TerraformDataSource));
exports.DataCloudflareDnsZoneTransfersIncoming = DataCloudflareDnsZoneTransfersIncoming;
