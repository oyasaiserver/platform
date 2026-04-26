"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wan
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
exports.DataCloudflareMagicTransitSiteWan = exports.DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference = void 0;
exports.dataCloudflareMagicTransitSiteWanStaticAddressingToTerraform = dataCloudflareMagicTransitSiteWanStaticAddressingToTerraform;
exports.dataCloudflareMagicTransitSiteWanStaticAddressingToHclTerraform = dataCloudflareMagicTransitSiteWanStaticAddressingToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicTransitSiteWanStaticAddressingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicTransitSiteWanStaticAddressingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference.prototype, "gatewayAddress", {
        // gateway_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference.prototype, "secondaryAddress", {
        // secondary_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secondary_address');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference = DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wan cloudflare_magic_transit_site_wan}
*/
var DataCloudflareMagicTransitSiteWan = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicTransitSiteWan, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wan cloudflare_magic_transit_site_wan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicTransitSiteWanConfig
    */
    function DataCloudflareMagicTransitSiteWan(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_transit_site_wan',
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
        // static_addressing - computed: true, optional: false, required: false
        _this._staticAddressing = new DataCloudflareMagicTransitSiteWanStaticAddressingOutputReference(_this, "static_addressing");
        _this._accountId = config.accountId;
        _this._siteId = config.siteId;
        _this._wanId = config.wanId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicTransitSiteWan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicTransitSiteWan to import
    * @param importFromId The id of the existing DataCloudflareMagicTransitSiteWan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_transit_site_wan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicTransitSiteWan to import is found
    */
    DataCloudflareMagicTransitSiteWan.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_wan", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicTransitSiteWan.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "healthCheckRate", {
        // health_check_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('health_check_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "physport", {
        // physport - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('physport');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "siteId", {
        get: function () {
            return this.getStringAttribute('site_id');
        },
        set: function (value) {
            this._siteId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "siteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._siteId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "staticAddressing", {
        get: function () {
            return this._staticAddressing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "vlanTag", {
        // vlan_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('vlan_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "wanId", {
        get: function () {
            return this.getStringAttribute('wan_id');
        },
        set: function (value) {
            this._wanId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicTransitSiteWan.prototype, "wanIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._wanId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicTransitSiteWan.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            site_id: cdktf.stringToTerraform(this._siteId),
            wan_id: cdktf.stringToTerraform(this._wanId),
        };
    };
    DataCloudflareMagicTransitSiteWan.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            site_id: {
                value: cdktf.stringToHclTerraform(this._siteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            wan_id: {
                value: cdktf.stringToHclTerraform(this._wanId),
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
    DataCloudflareMagicTransitSiteWan.tfResourceType = "cloudflare_magic_transit_site_wan";
    return DataCloudflareMagicTransitSiteWan;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicTransitSiteWan = DataCloudflareMagicTransitSiteWan;
