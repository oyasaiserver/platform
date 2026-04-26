"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peers
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
exports.DataCloudflareDnsZoneTransfersPeers = exports.DataCloudflareDnsZoneTransfersPeersResultList = exports.DataCloudflareDnsZoneTransfersPeersResultOutputReference = void 0;
exports.dataCloudflareDnsZoneTransfersPeersResultToTerraform = dataCloudflareDnsZoneTransfersPeersResultToTerraform;
exports.dataCloudflareDnsZoneTransfersPeersResultToHclTerraform = dataCloudflareDnsZoneTransfersPeersResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareDnsZoneTransfersPeersResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareDnsZoneTransfersPeersResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareDnsZoneTransfersPeersResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsZoneTransfersPeersResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareDnsZoneTransfersPeersResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeersResultOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeersResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeersResultOutputReference.prototype, "ip", {
        // ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeersResultOutputReference.prototype, "ixfrEnable", {
        // ixfr_enable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ixfr_enable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeersResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeersResultOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeersResultOutputReference.prototype, "tsigId", {
        // tsig_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tsig_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsZoneTransfersPeersResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsZoneTransfersPeersResultOutputReference = DataCloudflareDnsZoneTransfersPeersResultOutputReference;
var DataCloudflareDnsZoneTransfersPeersResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsZoneTransfersPeersResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareDnsZoneTransfersPeersResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareDnsZoneTransfersPeersResultList.prototype.get = function (index) {
        return new DataCloudflareDnsZoneTransfersPeersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareDnsZoneTransfersPeersResultList;
}(cdktf.ComplexList));
exports.DataCloudflareDnsZoneTransfersPeersResultList = DataCloudflareDnsZoneTransfersPeersResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peers cloudflare_dns_zone_transfers_peers}
*/
var DataCloudflareDnsZoneTransfersPeers = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsZoneTransfersPeers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peers cloudflare_dns_zone_transfers_peers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsZoneTransfersPeersConfig = {}
    */
    function DataCloudflareDnsZoneTransfersPeers(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_dns_zone_transfers_peers',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareDnsZoneTransfersPeersResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersPeers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersPeers to import
    * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersPeers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersPeers to import is found
    */
    DataCloudflareDnsZoneTransfersPeers.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_zone_transfers_peers", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeers.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsZoneTransfersPeers.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeers.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeers.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsZoneTransfersPeers.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeers.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsZoneTransfersPeers.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareDnsZoneTransfersPeers.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareDnsZoneTransfersPeers.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareDnsZoneTransfersPeers.tfResourceType = "cloudflare_dns_zone_transfers_peers";
    return DataCloudflareDnsZoneTransfersPeers;
}(cdktf.TerraformDataSource));
exports.DataCloudflareDnsZoneTransfersPeers = DataCloudflareDnsZoneTransfersPeers;
