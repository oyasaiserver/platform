"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel
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
exports.DataCloudflareMagicWanGreTunnel = exports.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference = exports.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference = exports.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference = exports.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference = exports.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference = void 0;
exports.dataCloudflareMagicWanGreTunnelGreTunnelBgpToTerraform = dataCloudflareMagicWanGreTunnelGreTunnelBgpToTerraform;
exports.dataCloudflareMagicWanGreTunnelGreTunnelBgpToHclTerraform = dataCloudflareMagicWanGreTunnelGreTunnelBgpToHclTerraform;
exports.dataCloudflareMagicWanGreTunnelGreTunnelBgpStatusToTerraform = dataCloudflareMagicWanGreTunnelGreTunnelBgpStatusToTerraform;
exports.dataCloudflareMagicWanGreTunnelGreTunnelBgpStatusToHclTerraform = dataCloudflareMagicWanGreTunnelGreTunnelBgpStatusToHclTerraform;
exports.dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToTerraform = dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToTerraform;
exports.dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToHclTerraform = dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToHclTerraform;
exports.dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToTerraform = dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToTerraform;
exports.dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToHclTerraform = dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToHclTerraform;
exports.dataCloudflareMagicWanGreTunnelGreTunnelToTerraform = dataCloudflareMagicWanGreTunnelGreTunnelToTerraform;
exports.dataCloudflareMagicWanGreTunnelGreTunnelToHclTerraform = dataCloudflareMagicWanGreTunnelGreTunnelToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicWanGreTunnelGreTunnelBgpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanGreTunnelGreTunnelBgpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.prototype, "customerAsn", {
        // customer_asn - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('customer_asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.prototype, "extraPrefixes", {
        // extra_prefixes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('extra_prefixes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.prototype, "md5Key", {
        // md5_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('md5_key');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference = DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference;
function dataCloudflareMagicWanGreTunnelGreTunnelBgpStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanGreTunnelGreTunnelBgpStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.prototype, "bgpState", {
        // bgp_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bgp_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.prototype, "cfSpeakerIp", {
        // cf_speaker_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cf_speaker_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.prototype, "cfSpeakerPort", {
        // cf_speaker_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cf_speaker_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.prototype, "customerSpeakerIp", {
        // customer_speaker_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_speaker_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.prototype, "customerSpeakerPort", {
        // customer_speaker_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('customer_speaker_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.prototype, "tcpEstablished", {
        // tcp_established - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('tcp_established');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference = DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference;
function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.prototype, "effective", {
        // effective - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('effective');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.prototype, "saved", {
        // saved - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('saved');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference = DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference;
function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanGreTunnelGreTunnelHealthCheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // target - computed: true, optional: false, required: false
        _this._target = new DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference(_this, "target");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.prototype, "direction", {
        // direction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('direction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.prototype, "rate", {
        // rate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference = DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference;
function dataCloudflareMagicWanGreTunnelGreTunnelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanGreTunnelGreTunnelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanGreTunnelGreTunnelOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanGreTunnelGreTunnelOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // bgp - computed: true, optional: false, required: false
        _this._bgp = new DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference(_this, "bgp");
        // bgp_status - computed: true, optional: false, required: false
        _this._bgpStatus = new DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference(_this, "bgp_status");
        // health_check - computed: true, optional: false, required: false
        _this._healthCheck = new DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference(_this, "health_check");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "automaticReturnRouting", {
        // automatic_return_routing - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('automatic_return_routing');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "bgp", {
        get: function () {
            return this._bgp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "bgpStatus", {
        get: function () {
            return this._bgpStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "cloudflareGreEndpoint", {
        // cloudflare_gre_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cloudflare_gre_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "customerGreEndpoint", {
        // customer_gre_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_gre_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "healthCheck", {
        get: function () {
            return this._healthCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "interfaceAddress", {
        // interface_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('interface_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "interfaceAddress6", {
        // interface_address6 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('interface_address6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "mtu", {
        // mtu - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('mtu');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanGreTunnelGreTunnelOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference = DataCloudflareMagicWanGreTunnelGreTunnelOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}
*/
var DataCloudflareMagicWanGreTunnel = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanGreTunnel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicWanGreTunnelConfig
    */
    function DataCloudflareMagicWanGreTunnel(scope, id, config) {
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
        // gre_tunnel - computed: true, optional: false, required: false
        _this._greTunnel = new DataCloudflareMagicWanGreTunnelGreTunnelOutputReference(_this, "gre_tunnel");
        _this._accountId = config.accountId;
        _this._greTunnelId = config.greTunnelId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicWanGreTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicWanGreTunnel to import
    * @param importFromId The id of the existing DataCloudflareMagicWanGreTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicWanGreTunnel to import is found
    */
    DataCloudflareMagicWanGreTunnel.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_gre_tunnel", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicWanGreTunnel.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicWanGreTunnel.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicWanGreTunnel.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnel.prototype, "greTunnel", {
        get: function () {
            return this._greTunnel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnel.prototype, "greTunnelId", {
        get: function () {
            return this.getStringAttribute('gre_tunnel_id');
        },
        set: function (value) {
            this._greTunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnel.prototype, "greTunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._greTunnelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanGreTunnel.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicWanGreTunnel.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            gre_tunnel_id: cdktf.stringToTerraform(this._greTunnelId),
        };
    };
    DataCloudflareMagicWanGreTunnel.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gre_tunnel_id: {
                value: cdktf.stringToHclTerraform(this._greTunnelId),
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
    DataCloudflareMagicWanGreTunnel.tfResourceType = "cloudflare_magic_wan_gre_tunnel";
    return DataCloudflareMagicWanGreTunnel;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicWanGreTunnel = DataCloudflareMagicWanGreTunnel;
