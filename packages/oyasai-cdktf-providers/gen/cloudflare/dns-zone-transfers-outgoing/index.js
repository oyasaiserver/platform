"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_outgoing
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
exports.DnsZoneTransfersOutgoing = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing}
*/
var DnsZoneTransfersOutgoing = /** @class */ (function (_super) {
    __extends(DnsZoneTransfersOutgoing, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsZoneTransfersOutgoingConfig
    */
    function DnsZoneTransfersOutgoing(scope, id, config) {
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
        _this._name = config.name;
        _this._peers = config.peers;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DnsZoneTransfersOutgoing resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsZoneTransfersOutgoing to import
    * @param importFromId The id of the existing DnsZoneTransfersOutgoing that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_outgoing#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsZoneTransfersOutgoing to import is found
    */
    DnsZoneTransfersOutgoing.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_outgoing", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DnsZoneTransfersOutgoing.prototype, "checkedTime", {
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
    Object.defineProperty(DnsZoneTransfersOutgoing.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersOutgoing.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersOutgoing.prototype, "lastTransferredTime", {
        // last_transferred_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_transferred_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersOutgoing.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersOutgoing.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersOutgoing.prototype, "peers", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('peers'));
        },
        set: function (value) {
            this._peers = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersOutgoing.prototype, "peersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersOutgoing.prototype, "soaSerial", {
        // soa_serial - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('soa_serial');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DnsZoneTransfersOutgoing.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DnsZoneTransfersOutgoing.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DnsZoneTransfersOutgoing.prototype, "zoneIdInput", {
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
    DnsZoneTransfersOutgoing.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            peers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peers),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DnsZoneTransfersOutgoing.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
    DnsZoneTransfersOutgoing.tfResourceType = "cloudflare_dns_zone_transfers_outgoing";
    return DnsZoneTransfersOutgoing;
}(cdktf.TerraformResource));
exports.DnsZoneTransfersOutgoing = DnsZoneTransfersOutgoing;
