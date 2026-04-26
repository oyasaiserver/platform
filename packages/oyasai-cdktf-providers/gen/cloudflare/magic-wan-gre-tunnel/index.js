"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel
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
exports.MagicWanGreTunnel = exports.MagicWanGreTunnelHealthCheckOutputReference = exports.MagicWanGreTunnelHealthCheckTargetOutputReference = exports.MagicWanGreTunnelBgpStatusOutputReference = exports.MagicWanGreTunnelBgpOutputReference = void 0;
exports.magicWanGreTunnelBgpToTerraform = magicWanGreTunnelBgpToTerraform;
exports.magicWanGreTunnelBgpToHclTerraform = magicWanGreTunnelBgpToHclTerraform;
exports.magicWanGreTunnelBgpStatusToTerraform = magicWanGreTunnelBgpStatusToTerraform;
exports.magicWanGreTunnelBgpStatusToHclTerraform = magicWanGreTunnelBgpStatusToHclTerraform;
exports.magicWanGreTunnelHealthCheckTargetToTerraform = magicWanGreTunnelHealthCheckTargetToTerraform;
exports.magicWanGreTunnelHealthCheckTargetToHclTerraform = magicWanGreTunnelHealthCheckTargetToHclTerraform;
exports.magicWanGreTunnelHealthCheckToTerraform = magicWanGreTunnelHealthCheckToTerraform;
exports.magicWanGreTunnelHealthCheckToHclTerraform = magicWanGreTunnelHealthCheckToHclTerraform;
var cdktf = require("cdktf");
function magicWanGreTunnelBgpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        customer_asn: cdktf.numberToTerraform(struct.customerAsn),
        extra_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.extraPrefixes),
        md5_key: cdktf.stringToTerraform(struct.md5Key),
    };
}
function magicWanGreTunnelBgpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        customer_asn: {
            value: cdktf.numberToHclTerraform(struct.customerAsn),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        extra_prefixes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.extraPrefixes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        md5_key: {
            value: cdktf.stringToHclTerraform(struct.md5Key),
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
var MagicWanGreTunnelBgpOutputReference = /** @class */ (function (_super) {
    __extends(MagicWanGreTunnelBgpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicWanGreTunnelBgpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicWanGreTunnelBgpOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._customerAsn !== undefined) {
                hasAnyValues = true;
                internalValueResult.customerAsn = this._customerAsn;
            }
            if (this._extraPrefixes !== undefined) {
                hasAnyValues = true;
                internalValueResult.extraPrefixes = this._extraPrefixes;
            }
            if (this._md5Key !== undefined) {
                hasAnyValues = true;
                internalValueResult.md5Key = this._md5Key;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._customerAsn = undefined;
                this._extraPrefixes = undefined;
                this._md5Key = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._customerAsn = value.customerAsn;
                this._extraPrefixes = value.extraPrefixes;
                this._md5Key = value.md5Key;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelBgpOutputReference.prototype, "customerAsn", {
        get: function () {
            return this.getNumberAttribute('customer_asn');
        },
        set: function (value) {
            this._customerAsn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelBgpOutputReference.prototype, "customerAsnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerAsn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelBgpOutputReference.prototype, "extraPrefixes", {
        get: function () {
            return this.getListAttribute('extra_prefixes');
        },
        set: function (value) {
            this._extraPrefixes = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnelBgpOutputReference.prototype.resetExtraPrefixes = function () {
        this._extraPrefixes = undefined;
    };
    Object.defineProperty(MagicWanGreTunnelBgpOutputReference.prototype, "extraPrefixesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extraPrefixes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelBgpOutputReference.prototype, "md5Key", {
        get: function () {
            return this.getStringAttribute('md5_key');
        },
        set: function (value) {
            this._md5Key = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnelBgpOutputReference.prototype.resetMd5Key = function () {
        this._md5Key = undefined;
    };
    Object.defineProperty(MagicWanGreTunnelBgpOutputReference.prototype, "md5KeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._md5Key;
        },
        enumerable: false,
        configurable: true
    });
    return MagicWanGreTunnelBgpOutputReference;
}(cdktf.ComplexObject));
exports.MagicWanGreTunnelBgpOutputReference = MagicWanGreTunnelBgpOutputReference;
function magicWanGreTunnelBgpStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function magicWanGreTunnelBgpStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var MagicWanGreTunnelBgpStatusOutputReference = /** @class */ (function (_super) {
    __extends(MagicWanGreTunnelBgpStatusOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicWanGreTunnelBgpStatusOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicWanGreTunnelBgpStatusOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(MagicWanGreTunnelBgpStatusOutputReference.prototype, "bgpState", {
        // bgp_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bgp_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelBgpStatusOutputReference.prototype, "cfSpeakerIp", {
        // cf_speaker_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cf_speaker_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelBgpStatusOutputReference.prototype, "cfSpeakerPort", {
        // cf_speaker_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cf_speaker_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelBgpStatusOutputReference.prototype, "customerSpeakerIp", {
        // customer_speaker_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_speaker_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelBgpStatusOutputReference.prototype, "customerSpeakerPort", {
        // customer_speaker_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('customer_speaker_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelBgpStatusOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelBgpStatusOutputReference.prototype, "tcpEstablished", {
        // tcp_established - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('tcp_established');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelBgpStatusOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return MagicWanGreTunnelBgpStatusOutputReference;
}(cdktf.ComplexObject));
exports.MagicWanGreTunnelBgpStatusOutputReference = MagicWanGreTunnelBgpStatusOutputReference;
function magicWanGreTunnelHealthCheckTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        saved: cdktf.stringToTerraform(struct.saved),
    };
}
function magicWanGreTunnelHealthCheckTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        saved: {
            value: cdktf.stringToHclTerraform(struct.saved),
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
var MagicWanGreTunnelHealthCheckTargetOutputReference = /** @class */ (function (_super) {
    __extends(MagicWanGreTunnelHealthCheckTargetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicWanGreTunnelHealthCheckTargetOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicWanGreTunnelHealthCheckTargetOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._saved !== undefined) {
                hasAnyValues = true;
                internalValueResult.saved = this._saved;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._saved = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._saved = value.saved;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelHealthCheckTargetOutputReference.prototype, "effective", {
        // effective - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('effective');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelHealthCheckTargetOutputReference.prototype, "saved", {
        get: function () {
            return this.getStringAttribute('saved');
        },
        set: function (value) {
            this._saved = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnelHealthCheckTargetOutputReference.prototype.resetSaved = function () {
        this._saved = undefined;
    };
    Object.defineProperty(MagicWanGreTunnelHealthCheckTargetOutputReference.prototype, "savedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._saved;
        },
        enumerable: false,
        configurable: true
    });
    return MagicWanGreTunnelHealthCheckTargetOutputReference;
}(cdktf.ComplexObject));
exports.MagicWanGreTunnelHealthCheckTargetOutputReference = MagicWanGreTunnelHealthCheckTargetOutputReference;
function magicWanGreTunnelHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        rate: cdktf.stringToTerraform(struct.rate),
        target: magicWanGreTunnelHealthCheckTargetToTerraform(struct.target),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function magicWanGreTunnelHealthCheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rate: {
            value: cdktf.stringToHclTerraform(struct.rate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: magicWanGreTunnelHealthCheckTargetToHclTerraform(struct.target),
            isBlock: true,
            type: "struct",
            storageClassType: "MagicWanGreTunnelHealthCheckTarget",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
var MagicWanGreTunnelHealthCheckOutputReference = /** @class */ (function (_super) {
    __extends(MagicWanGreTunnelHealthCheckOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicWanGreTunnelHealthCheckOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // target - computed: true, optional: true, required: false
        _this._target = new MagicWanGreTunnelHealthCheckTargetOutputReference(_this, "target");
        return _this;
    }
    Object.defineProperty(MagicWanGreTunnelHealthCheckOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._rate !== undefined) {
                hasAnyValues = true;
                internalValueResult.rate = this._rate;
            }
            if (((_a = this._target) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.target = (_b = this._target) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
                this._enabled = undefined;
                this._rate = undefined;
                this._target.internalValue = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._direction = value.direction;
                this._enabled = value.enabled;
                this._rate = value.rate;
                this._target.internalValue = value.target;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelHealthCheckOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnelHealthCheckOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(MagicWanGreTunnelHealthCheckOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelHealthCheckOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnelHealthCheckOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(MagicWanGreTunnelHealthCheckOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelHealthCheckOutputReference.prototype, "rate", {
        get: function () {
            return this.getStringAttribute('rate');
        },
        set: function (value) {
            this._rate = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnelHealthCheckOutputReference.prototype.resetRate = function () {
        this._rate = undefined;
    };
    Object.defineProperty(MagicWanGreTunnelHealthCheckOutputReference.prototype, "rateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelHealthCheckOutputReference.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnelHealthCheckOutputReference.prototype.putTarget = function (value) {
        this._target.internalValue = value;
    };
    MagicWanGreTunnelHealthCheckOutputReference.prototype.resetTarget = function () {
        this._target.internalValue = undefined;
    };
    Object.defineProperty(MagicWanGreTunnelHealthCheckOutputReference.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnelHealthCheckOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnelHealthCheckOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(MagicWanGreTunnelHealthCheckOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return MagicWanGreTunnelHealthCheckOutputReference;
}(cdktf.ComplexObject));
exports.MagicWanGreTunnelHealthCheckOutputReference = MagicWanGreTunnelHealthCheckOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}
*/
var MagicWanGreTunnel = /** @class */ (function (_super) {
    __extends(MagicWanGreTunnel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicWanGreTunnelConfig
    */
    function MagicWanGreTunnel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_wan_gre_tunnel',
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
        // bgp - computed: false, optional: true, required: false
        _this._bgp = new MagicWanGreTunnelBgpOutputReference(_this, "bgp");
        // bgp_status - computed: true, optional: false, required: false
        _this._bgpStatus = new MagicWanGreTunnelBgpStatusOutputReference(_this, "bgp_status");
        // health_check - computed: true, optional: true, required: false
        _this._healthCheck = new MagicWanGreTunnelHealthCheckOutputReference(_this, "health_check");
        _this._accountId = config.accountId;
        _this._automaticReturnRouting = config.automaticReturnRouting;
        _this._bgp.internalValue = config.bgp;
        _this._cloudflareGreEndpoint = config.cloudflareGreEndpoint;
        _this._customerGreEndpoint = config.customerGreEndpoint;
        _this._description = config.description;
        _this._healthCheck.internalValue = config.healthCheck;
        _this._interfaceAddress = config.interfaceAddress;
        _this._interfaceAddress6 = config.interfaceAddress6;
        _this._mtu = config.mtu;
        _this._name = config.name;
        _this._ttl = config.ttl;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicWanGreTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicWanGreTunnel to import
    * @param importFromId The id of the existing MagicWanGreTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicWanGreTunnel to import is found
    */
    MagicWanGreTunnel.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_gre_tunnel", importId: importFromId, provider: provider });
    };
    Object.defineProperty(MagicWanGreTunnel.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "automaticReturnRouting", {
        get: function () {
            return this.getBooleanAttribute('automatic_return_routing');
        },
        set: function (value) {
            this._automaticReturnRouting = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnel.prototype.resetAutomaticReturnRouting = function () {
        this._automaticReturnRouting = undefined;
    };
    Object.defineProperty(MagicWanGreTunnel.prototype, "automaticReturnRoutingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automaticReturnRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "bgp", {
        get: function () {
            return this._bgp;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnel.prototype.putBgp = function (value) {
        this._bgp.internalValue = value;
    };
    MagicWanGreTunnel.prototype.resetBgp = function () {
        this._bgp.internalValue = undefined;
    };
    Object.defineProperty(MagicWanGreTunnel.prototype, "bgpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bgp.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "bgpStatus", {
        get: function () {
            return this._bgpStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "cloudflareGreEndpoint", {
        get: function () {
            return this.getStringAttribute('cloudflare_gre_endpoint');
        },
        set: function (value) {
            this._cloudflareGreEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "cloudflareGreEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareGreEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "customerGreEndpoint", {
        get: function () {
            return this.getStringAttribute('customer_gre_endpoint');
        },
        set: function (value) {
            this._customerGreEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "customerGreEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerGreEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnel.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(MagicWanGreTunnel.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "healthCheck", {
        get: function () {
            return this._healthCheck;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnel.prototype.putHealthCheck = function (value) {
        this._healthCheck.internalValue = value;
    };
    MagicWanGreTunnel.prototype.resetHealthCheck = function () {
        this._healthCheck.internalValue = undefined;
    };
    Object.defineProperty(MagicWanGreTunnel.prototype, "healthCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheck.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "interfaceAddress", {
        get: function () {
            return this.getStringAttribute('interface_address');
        },
        set: function (value) {
            this._interfaceAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "interfaceAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interfaceAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "interfaceAddress6", {
        get: function () {
            return this.getStringAttribute('interface_address6');
        },
        set: function (value) {
            this._interfaceAddress6 = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnel.prototype.resetInterfaceAddress6 = function () {
        this._interfaceAddress6 = undefined;
    };
    Object.defineProperty(MagicWanGreTunnel.prototype, "interfaceAddress6Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interfaceAddress6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "mtu", {
        get: function () {
            return this.getNumberAttribute('mtu');
        },
        set: function (value) {
            this._mtu = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnel.prototype.resetMtu = function () {
        this._mtu = undefined;
    };
    Object.defineProperty(MagicWanGreTunnel.prototype, "mtuInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mtu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanGreTunnel.prototype, "ttl", {
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanGreTunnel.prototype.resetTtl = function () {
        this._ttl = undefined;
    };
    Object.defineProperty(MagicWanGreTunnel.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MagicWanGreTunnel.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            automatic_return_routing: cdktf.booleanToTerraform(this._automaticReturnRouting),
            bgp: magicWanGreTunnelBgpToTerraform(this._bgp.internalValue),
            cloudflare_gre_endpoint: cdktf.stringToTerraform(this._cloudflareGreEndpoint),
            customer_gre_endpoint: cdktf.stringToTerraform(this._customerGreEndpoint),
            description: cdktf.stringToTerraform(this._description),
            health_check: magicWanGreTunnelHealthCheckToTerraform(this._healthCheck.internalValue),
            interface_address: cdktf.stringToTerraform(this._interfaceAddress),
            interface_address6: cdktf.stringToTerraform(this._interfaceAddress6),
            mtu: cdktf.numberToTerraform(this._mtu),
            name: cdktf.stringToTerraform(this._name),
            ttl: cdktf.numberToTerraform(this._ttl),
        };
    };
    MagicWanGreTunnel.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            automatic_return_routing: {
                value: cdktf.booleanToHclTerraform(this._automaticReturnRouting),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            bgp: {
                value: magicWanGreTunnelBgpToHclTerraform(this._bgp.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanGreTunnelBgp",
            },
            cloudflare_gre_endpoint: {
                value: cdktf.stringToHclTerraform(this._cloudflareGreEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            customer_gre_endpoint: {
                value: cdktf.stringToHclTerraform(this._customerGreEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            health_check: {
                value: magicWanGreTunnelHealthCheckToHclTerraform(this._healthCheck.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanGreTunnelHealthCheck",
            },
            interface_address: {
                value: cdktf.stringToHclTerraform(this._interfaceAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            interface_address6: {
                value: cdktf.stringToHclTerraform(this._interfaceAddress6),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mtu: {
                value: cdktf.numberToHclTerraform(this._mtu),
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
            ttl: {
                value: cdktf.numberToHclTerraform(this._ttl),
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
    MagicWanGreTunnel.tfResourceType = "cloudflare_magic_wan_gre_tunnel";
    return MagicWanGreTunnel;
}(cdktf.TerraformResource));
exports.MagicWanGreTunnel = MagicWanGreTunnel;
