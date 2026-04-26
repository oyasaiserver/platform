"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming
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
exports.DnsZoneTransfersIncoming = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming}
*/
var DnsZoneTransfersIncoming = /** @class */ (function (_super) {
    __extends(DnsZoneTransfersIncoming, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsZoneTransfersIncomingConfig
    */
    function DnsZoneTransfersIncoming(scope, id, config) {
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
        _this._autoRefreshSeconds = config.autoRefreshSeconds;
        _this._name = config.name;
        _this._peers = config.peers;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsZoneTransfersIncoming to import
    * @param importFromId The id of the existing DnsZoneTransfersIncoming that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsZoneTransfersIncoming to import is found
    */
    DnsZoneTransfersIncoming.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_incoming", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "autoRefreshSeconds", {
        get: function () {
            return this.getNumberAttribute('auto_refresh_seconds');
        },
        set: function (value) {
            this._autoRefreshSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsZoneTransfersIncoming.prototype.resetAutoRefreshSeconds = function () {
        this._autoRefreshSeconds = undefined;
    };
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "autoRefreshSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoRefreshSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "checkedTime", {
        // checked_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('checked_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "modifiedTime", {
        // modified_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "peers", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('peers'));
        },
        set: function (value) {
            this._peers = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "peersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "soaSerial", {
        // soa_serial - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('soa_serial');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsZoneTransfersIncoming.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DnsZoneTransfersIncoming.prototype, "zoneIdInput", {
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
    DnsZoneTransfersIncoming.prototype.synthesizeAttributes = function () {
        return {
            auto_refresh_seconds: cdktf.numberToTerraform(this._autoRefreshSeconds),
            name: cdktf.stringToTerraform(this._name),
            peers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peers),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DnsZoneTransfersIncoming.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            auto_refresh_seconds: {
                value: cdktf.numberToHclTerraform(this._autoRefreshSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
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
    DnsZoneTransfersIncoming.tfResourceType = "cloudflare_dns_zone_transfers_incoming";
    return DnsZoneTransfersIncoming;
}(cdktf.TerraformResource));
exports.DnsZoneTransfersIncoming = DnsZoneTransfersIncoming;
