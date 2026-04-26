"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan
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
exports.MagicTransitSiteWan = exports.MagicTransitSiteWanStaticAddressingOutputReference = void 0;
exports.magicTransitSiteWanStaticAddressingToTerraform = magicTransitSiteWanStaticAddressingToTerraform;
exports.magicTransitSiteWanStaticAddressingToHclTerraform = magicTransitSiteWanStaticAddressingToHclTerraform;
var cdktf = require("cdktf");
function magicTransitSiteWanStaticAddressingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        gateway_address: cdktf.stringToTerraform(struct.gatewayAddress),
        secondary_address: cdktf.stringToTerraform(struct.secondaryAddress),
    };
}
function magicTransitSiteWanStaticAddressingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        address: {
            value: cdktf.stringToHclTerraform(struct.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        gateway_address: {
            value: cdktf.stringToHclTerraform(struct.gatewayAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secondary_address: {
            value: cdktf.stringToHclTerraform(struct.secondaryAddress),
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
}
var MagicTransitSiteWanStaticAddressingOutputReference = /** @class */ (function (_super) {
    __extends(MagicTransitSiteWanStaticAddressingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicTransitSiteWanStaticAddressingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicTransitSiteWanStaticAddressingOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._address !== undefined) {
                hasAnyValues = true;
                internalValueResult.address = this._address;
            }
            if (this._gatewayAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.gatewayAddress = this._gatewayAddress;
            }
            if (this._secondaryAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.secondaryAddress = this._secondaryAddress;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._address = undefined;
                this._gatewayAddress = undefined;
                this._secondaryAddress = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._address = value.address;
                this._gatewayAddress = value.gatewayAddress;
                this._secondaryAddress = value.secondaryAddress;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWanStaticAddressingOutputReference.prototype, "address", {
        get: function () {
            return this.getStringAttribute('address');
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWanStaticAddressingOutputReference.prototype, "addressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWanStaticAddressingOutputReference.prototype, "gatewayAddress", {
        get: function () {
            return this.getStringAttribute('gateway_address');
        },
        set: function (value) {
            this._gatewayAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWanStaticAddressingOutputReference.prototype, "gatewayAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWanStaticAddressingOutputReference.prototype, "secondaryAddress", {
        get: function () {
            return this.getStringAttribute('secondary_address');
        },
        set: function (value) {
            this._secondaryAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteWanStaticAddressingOutputReference.prototype.resetSecondaryAddress = function () {
        this._secondaryAddress = undefined;
    };
    Object.defineProperty(MagicTransitSiteWanStaticAddressingOutputReference.prototype, "secondaryAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secondaryAddress;
        },
        enumerable: false,
        configurable: true
    });
    return MagicTransitSiteWanStaticAddressingOutputReference;
}(cdktf.ComplexObject));
exports.MagicTransitSiteWanStaticAddressingOutputReference = MagicTransitSiteWanStaticAddressingOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan}
*/
var MagicTransitSiteWan = /** @class */ (function (_super) {
    __extends(MagicTransitSiteWan, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitSiteWanConfig
    */
    function MagicTransitSiteWan(scope, id, config) {
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
        // static_addressing - computed: false, optional: true, required: false
        _this._staticAddressing = new MagicTransitSiteWanStaticAddressingOutputReference(_this, "static_addressing");
        _this._accountId = config.accountId;
        _this._name = config.name;
        _this._physport = config.physport;
        _this._priority = config.priority;
        _this._siteId = config.siteId;
        _this._staticAddressing.internalValue = config.staticAddressing;
        _this._vlanTag = config.vlanTag;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitSiteWan to import
    * @param importFromId The id of the existing MagicTransitSiteWan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitSiteWan to import is found
    */
    MagicTransitSiteWan.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_wan", importId: importFromId, provider: provider });
    };
    Object.defineProperty(MagicTransitSiteWan.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteWan.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(MagicTransitSiteWan.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWan.prototype, "healthCheckRate", {
        // health_check_rate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('health_check_rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWan.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWan.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteWan.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(MagicTransitSiteWan.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWan.prototype, "physport", {
        get: function () {
            return this.getNumberAttribute('physport');
        },
        set: function (value) {
            this._physport = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWan.prototype, "physportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._physport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWan.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteWan.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(MagicTransitSiteWan.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWan.prototype, "siteId", {
        get: function () {
            return this.getStringAttribute('site_id');
        },
        set: function (value) {
            this._siteId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWan.prototype, "siteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._siteId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWan.prototype, "staticAddressing", {
        get: function () {
            return this._staticAddressing;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteWan.prototype.putStaticAddressing = function (value) {
        this._staticAddressing.internalValue = value;
    };
    MagicTransitSiteWan.prototype.resetStaticAddressing = function () {
        this._staticAddressing.internalValue = undefined;
    };
    Object.defineProperty(MagicTransitSiteWan.prototype, "staticAddressingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._staticAddressing.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicTransitSiteWan.prototype, "vlanTag", {
        get: function () {
            return this.getNumberAttribute('vlan_tag');
        },
        set: function (value) {
            this._vlanTag = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicTransitSiteWan.prototype.resetVlanTag = function () {
        this._vlanTag = undefined;
    };
    Object.defineProperty(MagicTransitSiteWan.prototype, "vlanTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vlanTag;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MagicTransitSiteWan.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            name: cdktf.stringToTerraform(this._name),
            physport: cdktf.numberToTerraform(this._physport),
            priority: cdktf.numberToTerraform(this._priority),
            site_id: cdktf.stringToTerraform(this._siteId),
            static_addressing: magicTransitSiteWanStaticAddressingToTerraform(this._staticAddressing.internalValue),
            vlan_tag: cdktf.numberToTerraform(this._vlanTag),
        };
    };
    MagicTransitSiteWan.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
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
            physport: {
                value: cdktf.numberToHclTerraform(this._physport),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            priority: {
                value: cdktf.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            site_id: {
                value: cdktf.stringToHclTerraform(this._siteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            static_addressing: {
                value: magicTransitSiteWanStaticAddressingToHclTerraform(this._staticAddressing.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicTransitSiteWanStaticAddressing",
            },
            vlan_tag: {
                value: cdktf.numberToHclTerraform(this._vlanTag),
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
    MagicTransitSiteWan.tfResourceType = "cloudflare_magic_transit_site_wan";
    return MagicTransitSiteWan;
}(cdktf.TerraformResource));
exports.MagicTransitSiteWan = MagicTransitSiteWan;
