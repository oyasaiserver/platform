"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel
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
exports.MagicWanIpsecTunnel = exports.MagicWanIpsecTunnelPskMetadataOutputReference = exports.MagicWanIpsecTunnelHealthCheckOutputReference = exports.MagicWanIpsecTunnelHealthCheckTargetOutputReference = exports.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference = exports.MagicWanIpsecTunnelBgpStatusOutputReference = exports.MagicWanIpsecTunnelBgpOutputReference = void 0;
exports.magicWanIpsecTunnelBgpToTerraform = magicWanIpsecTunnelBgpToTerraform;
exports.magicWanIpsecTunnelBgpToHclTerraform = magicWanIpsecTunnelBgpToHclTerraform;
exports.magicWanIpsecTunnelBgpStatusToTerraform = magicWanIpsecTunnelBgpStatusToTerraform;
exports.magicWanIpsecTunnelBgpStatusToHclTerraform = magicWanIpsecTunnelBgpStatusToHclTerraform;
exports.magicWanIpsecTunnelCustomRemoteIdentitiesToTerraform = magicWanIpsecTunnelCustomRemoteIdentitiesToTerraform;
exports.magicWanIpsecTunnelCustomRemoteIdentitiesToHclTerraform = magicWanIpsecTunnelCustomRemoteIdentitiesToHclTerraform;
exports.magicWanIpsecTunnelHealthCheckTargetToTerraform = magicWanIpsecTunnelHealthCheckTargetToTerraform;
exports.magicWanIpsecTunnelHealthCheckTargetToHclTerraform = magicWanIpsecTunnelHealthCheckTargetToHclTerraform;
exports.magicWanIpsecTunnelHealthCheckToTerraform = magicWanIpsecTunnelHealthCheckToTerraform;
exports.magicWanIpsecTunnelHealthCheckToHclTerraform = magicWanIpsecTunnelHealthCheckToHclTerraform;
exports.magicWanIpsecTunnelPskMetadataToTerraform = magicWanIpsecTunnelPskMetadataToTerraform;
exports.magicWanIpsecTunnelPskMetadataToHclTerraform = magicWanIpsecTunnelPskMetadataToHclTerraform;
var cdktf = require("cdktf");
function magicWanIpsecTunnelBgpToTerraform(struct) {
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
function magicWanIpsecTunnelBgpToHclTerraform(struct) {
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
var MagicWanIpsecTunnelBgpOutputReference = /** @class */ (function (_super) {
    __extends(MagicWanIpsecTunnelBgpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicWanIpsecTunnelBgpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicWanIpsecTunnelBgpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(MagicWanIpsecTunnelBgpOutputReference.prototype, "customerAsn", {
        get: function () {
            return this.getNumberAttribute('customer_asn');
        },
        set: function (value) {
            this._customerAsn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelBgpOutputReference.prototype, "customerAsnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerAsn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelBgpOutputReference.prototype, "extraPrefixes", {
        get: function () {
            return this.getListAttribute('extra_prefixes');
        },
        set: function (value) {
            this._extraPrefixes = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnelBgpOutputReference.prototype.resetExtraPrefixes = function () {
        this._extraPrefixes = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnelBgpOutputReference.prototype, "extraPrefixesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extraPrefixes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelBgpOutputReference.prototype, "md5Key", {
        get: function () {
            return this.getStringAttribute('md5_key');
        },
        set: function (value) {
            this._md5Key = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnelBgpOutputReference.prototype.resetMd5Key = function () {
        this._md5Key = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnelBgpOutputReference.prototype, "md5KeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._md5Key;
        },
        enumerable: false,
        configurable: true
    });
    return MagicWanIpsecTunnelBgpOutputReference;
}(cdktf.ComplexObject));
exports.MagicWanIpsecTunnelBgpOutputReference = MagicWanIpsecTunnelBgpOutputReference;
function magicWanIpsecTunnelBgpStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function magicWanIpsecTunnelBgpStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var MagicWanIpsecTunnelBgpStatusOutputReference = /** @class */ (function (_super) {
    __extends(MagicWanIpsecTunnelBgpStatusOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicWanIpsecTunnelBgpStatusOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicWanIpsecTunnelBgpStatusOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(MagicWanIpsecTunnelBgpStatusOutputReference.prototype, "bgpState", {
        // bgp_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bgp_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelBgpStatusOutputReference.prototype, "cfSpeakerIp", {
        // cf_speaker_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cf_speaker_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelBgpStatusOutputReference.prototype, "cfSpeakerPort", {
        // cf_speaker_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cf_speaker_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelBgpStatusOutputReference.prototype, "customerSpeakerIp", {
        // customer_speaker_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_speaker_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelBgpStatusOutputReference.prototype, "customerSpeakerPort", {
        // customer_speaker_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('customer_speaker_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelBgpStatusOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelBgpStatusOutputReference.prototype, "tcpEstablished", {
        // tcp_established - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('tcp_established');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelBgpStatusOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return MagicWanIpsecTunnelBgpStatusOutputReference;
}(cdktf.ComplexObject));
exports.MagicWanIpsecTunnelBgpStatusOutputReference = MagicWanIpsecTunnelBgpStatusOutputReference;
function magicWanIpsecTunnelCustomRemoteIdentitiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fqdn_id: cdktf.stringToTerraform(struct.fqdnId),
    };
}
function magicWanIpsecTunnelCustomRemoteIdentitiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        fqdn_id: {
            value: cdktf.stringToHclTerraform(struct.fqdnId),
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
var MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference = /** @class */ (function (_super) {
    __extends(MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._fqdnId !== undefined) {
                hasAnyValues = true;
                internalValueResult.fqdnId = this._fqdnId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._fqdnId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._fqdnId = value.fqdnId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.prototype, "fqdnId", {
        get: function () {
            return this.getStringAttribute('fqdn_id');
        },
        set: function (value) {
            this._fqdnId = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.prototype.resetFqdnId = function () {
        this._fqdnId = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.prototype, "fqdnIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fqdnId;
        },
        enumerable: false,
        configurable: true
    });
    return MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference;
}(cdktf.ComplexObject));
exports.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference = MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference;
function magicWanIpsecTunnelHealthCheckTargetToTerraform(struct) {
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
function magicWanIpsecTunnelHealthCheckTargetToHclTerraform(struct) {
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
var MagicWanIpsecTunnelHealthCheckTargetOutputReference = /** @class */ (function (_super) {
    __extends(MagicWanIpsecTunnelHealthCheckTargetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicWanIpsecTunnelHealthCheckTargetOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckTargetOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckTargetOutputReference.prototype, "effective", {
        // effective - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('effective');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckTargetOutputReference.prototype, "saved", {
        get: function () {
            return this.getStringAttribute('saved');
        },
        set: function (value) {
            this._saved = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnelHealthCheckTargetOutputReference.prototype.resetSaved = function () {
        this._saved = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckTargetOutputReference.prototype, "savedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._saved;
        },
        enumerable: false,
        configurable: true
    });
    return MagicWanIpsecTunnelHealthCheckTargetOutputReference;
}(cdktf.ComplexObject));
exports.MagicWanIpsecTunnelHealthCheckTargetOutputReference = MagicWanIpsecTunnelHealthCheckTargetOutputReference;
function magicWanIpsecTunnelHealthCheckToTerraform(struct) {
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
        target: magicWanIpsecTunnelHealthCheckTargetToTerraform(struct.target),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function magicWanIpsecTunnelHealthCheckToHclTerraform(struct) {
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
            value: magicWanIpsecTunnelHealthCheckTargetToHclTerraform(struct.target),
            isBlock: true,
            type: "struct",
            storageClassType: "MagicWanIpsecTunnelHealthCheckTarget",
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
var MagicWanIpsecTunnelHealthCheckOutputReference = /** @class */ (function (_super) {
    __extends(MagicWanIpsecTunnelHealthCheckOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicWanIpsecTunnelHealthCheckOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // target - computed: true, optional: true, required: false
        _this._target = new MagicWanIpsecTunnelHealthCheckTargetOutputReference(_this, "target");
        return _this;
    }
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnelHealthCheckOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnelHealthCheckOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckOutputReference.prototype, "rate", {
        get: function () {
            return this.getStringAttribute('rate');
        },
        set: function (value) {
            this._rate = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnelHealthCheckOutputReference.prototype.resetRate = function () {
        this._rate = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckOutputReference.prototype, "rateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckOutputReference.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnelHealthCheckOutputReference.prototype.putTarget = function (value) {
        this._target.internalValue = value;
    };
    MagicWanIpsecTunnelHealthCheckOutputReference.prototype.resetTarget = function () {
        this._target.internalValue = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckOutputReference.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnelHealthCheckOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnelHealthCheckOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return MagicWanIpsecTunnelHealthCheckOutputReference;
}(cdktf.ComplexObject));
exports.MagicWanIpsecTunnelHealthCheckOutputReference = MagicWanIpsecTunnelHealthCheckOutputReference;
function magicWanIpsecTunnelPskMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function magicWanIpsecTunnelPskMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var MagicWanIpsecTunnelPskMetadataOutputReference = /** @class */ (function (_super) {
    __extends(MagicWanIpsecTunnelPskMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function MagicWanIpsecTunnelPskMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(MagicWanIpsecTunnelPskMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(MagicWanIpsecTunnelPskMetadataOutputReference.prototype, "lastGeneratedOn", {
        // last_generated_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_generated_on');
        },
        enumerable: false,
        configurable: true
    });
    return MagicWanIpsecTunnelPskMetadataOutputReference;
}(cdktf.ComplexObject));
exports.MagicWanIpsecTunnelPskMetadataOutputReference = MagicWanIpsecTunnelPskMetadataOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}
*/
var MagicWanIpsecTunnel = /** @class */ (function (_super) {
    __extends(MagicWanIpsecTunnel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicWanIpsecTunnelConfig
    */
    function MagicWanIpsecTunnel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_magic_wan_ipsec_tunnel',
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
        _this._bgp = new MagicWanIpsecTunnelBgpOutputReference(_this, "bgp");
        // bgp_status - computed: true, optional: false, required: false
        _this._bgpStatus = new MagicWanIpsecTunnelBgpStatusOutputReference(_this, "bgp_status");
        // custom_remote_identities - computed: false, optional: true, required: false
        _this._customRemoteIdentities = new MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference(_this, "custom_remote_identities");
        // health_check - computed: true, optional: true, required: false
        _this._healthCheck = new MagicWanIpsecTunnelHealthCheckOutputReference(_this, "health_check");
        // psk_metadata - computed: true, optional: false, required: false
        _this._pskMetadata = new MagicWanIpsecTunnelPskMetadataOutputReference(_this, "psk_metadata");
        _this._accountId = config.accountId;
        _this._automaticReturnRouting = config.automaticReturnRouting;
        _this._bgp.internalValue = config.bgp;
        _this._cloudflareEndpoint = config.cloudflareEndpoint;
        _this._customRemoteIdentities.internalValue = config.customRemoteIdentities;
        _this._customerEndpoint = config.customerEndpoint;
        _this._description = config.description;
        _this._healthCheck.internalValue = config.healthCheck;
        _this._interfaceAddress = config.interfaceAddress;
        _this._interfaceAddress6 = config.interfaceAddress6;
        _this._name = config.name;
        _this._psk = config.psk;
        _this._replayProtection = config.replayProtection;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a MagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicWanIpsecTunnel to import
    * @param importFromId The id of the existing MagicWanIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicWanIpsecTunnel to import is found
    */
    MagicWanIpsecTunnel.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_ipsec_tunnel", importId: importFromId, provider: provider });
    };
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "allowNullCipher", {
        // allow_null_cipher - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_null_cipher');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "automaticReturnRouting", {
        get: function () {
            return this.getBooleanAttribute('automatic_return_routing');
        },
        set: function (value) {
            this._automaticReturnRouting = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnel.prototype.resetAutomaticReturnRouting = function () {
        this._automaticReturnRouting = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "automaticReturnRoutingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automaticReturnRouting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "bgp", {
        get: function () {
            return this._bgp;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnel.prototype.putBgp = function (value) {
        this._bgp.internalValue = value;
    };
    MagicWanIpsecTunnel.prototype.resetBgp = function () {
        this._bgp.internalValue = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "bgpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bgp.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "bgpStatus", {
        get: function () {
            return this._bgpStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "cloudflareEndpoint", {
        get: function () {
            return this.getStringAttribute('cloudflare_endpoint');
        },
        set: function (value) {
            this._cloudflareEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "cloudflareEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudflareEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "customRemoteIdentities", {
        get: function () {
            return this._customRemoteIdentities;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnel.prototype.putCustomRemoteIdentities = function (value) {
        this._customRemoteIdentities.internalValue = value;
    };
    MagicWanIpsecTunnel.prototype.resetCustomRemoteIdentities = function () {
        this._customRemoteIdentities.internalValue = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "customRemoteIdentitiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customRemoteIdentities.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "customerEndpoint", {
        get: function () {
            return this.getStringAttribute('customer_endpoint');
        },
        set: function (value) {
            this._customerEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnel.prototype.resetCustomerEndpoint = function () {
        this._customerEndpoint = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "customerEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnel.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "healthCheck", {
        get: function () {
            return this._healthCheck;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnel.prototype.putHealthCheck = function (value) {
        this._healthCheck.internalValue = value;
    };
    MagicWanIpsecTunnel.prototype.resetHealthCheck = function () {
        this._healthCheck.internalValue = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "healthCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheck.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "interfaceAddress", {
        get: function () {
            return this.getStringAttribute('interface_address');
        },
        set: function (value) {
            this._interfaceAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "interfaceAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interfaceAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "interfaceAddress6", {
        get: function () {
            return this.getStringAttribute('interface_address6');
        },
        set: function (value) {
            this._interfaceAddress6 = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnel.prototype.resetInterfaceAddress6 = function () {
        this._interfaceAddress6 = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "interfaceAddress6Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interfaceAddress6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "psk", {
        get: function () {
            return this.getStringAttribute('psk');
        },
        set: function (value) {
            this._psk = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnel.prototype.resetPsk = function () {
        this._psk = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "pskInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._psk;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "pskMetadata", {
        get: function () {
            return this._pskMetadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "replayProtection", {
        get: function () {
            return this.getBooleanAttribute('replay_protection');
        },
        set: function (value) {
            this._replayProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    MagicWanIpsecTunnel.prototype.resetReplayProtection = function () {
        this._replayProtection = undefined;
    };
    Object.defineProperty(MagicWanIpsecTunnel.prototype, "replayProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replayProtection;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MagicWanIpsecTunnel.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            automatic_return_routing: cdktf.booleanToTerraform(this._automaticReturnRouting),
            bgp: magicWanIpsecTunnelBgpToTerraform(this._bgp.internalValue),
            cloudflare_endpoint: cdktf.stringToTerraform(this._cloudflareEndpoint),
            custom_remote_identities: magicWanIpsecTunnelCustomRemoteIdentitiesToTerraform(this._customRemoteIdentities.internalValue),
            customer_endpoint: cdktf.stringToTerraform(this._customerEndpoint),
            description: cdktf.stringToTerraform(this._description),
            health_check: magicWanIpsecTunnelHealthCheckToTerraform(this._healthCheck.internalValue),
            interface_address: cdktf.stringToTerraform(this._interfaceAddress),
            interface_address6: cdktf.stringToTerraform(this._interfaceAddress6),
            name: cdktf.stringToTerraform(this._name),
            psk: cdktf.stringToTerraform(this._psk),
            replay_protection: cdktf.booleanToTerraform(this._replayProtection),
        };
    };
    MagicWanIpsecTunnel.prototype.synthesizeHclAttributes = function () {
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
                value: magicWanIpsecTunnelBgpToHclTerraform(this._bgp.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanIpsecTunnelBgp",
            },
            cloudflare_endpoint: {
                value: cdktf.stringToHclTerraform(this._cloudflareEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            custom_remote_identities: {
                value: magicWanIpsecTunnelCustomRemoteIdentitiesToHclTerraform(this._customRemoteIdentities.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanIpsecTunnelCustomRemoteIdentities",
            },
            customer_endpoint: {
                value: cdktf.stringToHclTerraform(this._customerEndpoint),
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
                value: magicWanIpsecTunnelHealthCheckToHclTerraform(this._healthCheck.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "MagicWanIpsecTunnelHealthCheck",
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            psk: {
                value: cdktf.stringToHclTerraform(this._psk),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replay_protection: {
                value: cdktf.booleanToHclTerraform(this._replayProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
    MagicWanIpsecTunnel.tfResourceType = "cloudflare_magic_wan_ipsec_tunnel";
    return MagicWanIpsecTunnel;
}(cdktf.TerraformResource));
exports.MagicWanIpsecTunnel = MagicWanIpsecTunnel;
