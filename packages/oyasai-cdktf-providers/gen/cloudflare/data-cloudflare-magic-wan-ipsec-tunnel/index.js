"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel
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
exports.DataCloudflareMagicWanIpsecTunnel = exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference = exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference = exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference = exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference = exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference = exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference = exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference = void 0;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpToTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpToTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpToHclTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpToHclTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusToTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusToTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusToHclTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusToHclTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesToTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesToTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesToHclTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesToHclTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToHclTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToHclTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToHclTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToHclTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToHclTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToHclTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelToTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelToTerraform;
exports.dataCloudflareMagicWanIpsecTunnelIpsecTunnelToHclTerraform = dataCloudflareMagicWanIpsecTunnelIpsecTunnelToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference.prototype, "customerAsn", {
        // customer_asn - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('customer_asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference.prototype, "extraPrefixes", {
        // extra_prefixes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('extra_prefixes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference.prototype, "md5Key", {
        // md5_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('md5_key');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference = DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference;
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference.prototype, "bgpState", {
        // bgp_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bgp_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference.prototype, "cfSpeakerIp", {
        // cf_speaker_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cf_speaker_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference.prototype, "cfSpeakerPort", {
        // cf_speaker_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cf_speaker_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference.prototype, "customerSpeakerIp", {
        // customer_speaker_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_speaker_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference.prototype, "customerSpeakerPort", {
        // customer_speaker_port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('customer_speaker_port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference.prototype, "tcpEstablished", {
        // tcp_established - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('tcp_established');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference = DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference;
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference.prototype, "fqdnId", {
        // fqdn_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fqdn_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference = DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference;
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.prototype, "effective", {
        // effective - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('effective');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.prototype, "saved", {
        // saved - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('saved');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference = DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference;
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // target - computed: true, optional: false, required: false
        _this._target = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference(_this, "target");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.prototype, "direction", {
        // direction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('direction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.prototype, "rate", {
        // rate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference = DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference;
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.prototype, "lastGeneratedOn", {
        // last_generated_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_generated_on');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference = DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference;
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareMagicWanIpsecTunnelIpsecTunnelToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // bgp - computed: true, optional: false, required: false
        _this._bgp = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpOutputReference(_this, "bgp");
        // bgp_status - computed: true, optional: false, required: false
        _this._bgpStatus = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelBgpStatusOutputReference(_this, "bgp_status");
        // custom_remote_identities - computed: true, optional: false, required: false
        _this._customRemoteIdentities = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelCustomRemoteIdentitiesOutputReference(_this, "custom_remote_identities");
        // health_check - computed: true, optional: false, required: false
        _this._healthCheck = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference(_this, "health_check");
        // psk_metadata - computed: true, optional: false, required: false
        _this._pskMetadata = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference(_this, "psk_metadata");
        return _this;
    }
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "allowNullCipher", {
        // allow_null_cipher - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_null_cipher');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "automaticReturnRouting", {
        // automatic_return_routing - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('automatic_return_routing');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "bgp", {
        get: function () {
            return this._bgp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "bgpStatus", {
        get: function () {
            return this._bgpStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "cloudflareEndpoint", {
        // cloudflare_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cloudflare_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "customRemoteIdentities", {
        get: function () {
            return this._customRemoteIdentities;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "customerEndpoint", {
        // customer_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "healthCheck", {
        get: function () {
            return this._healthCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "interfaceAddress", {
        // interface_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('interface_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "interfaceAddress6", {
        // interface_address6 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('interface_address6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "pskMetadata", {
        get: function () {
            return this._pskMetadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.prototype, "replayProtection", {
        // replay_protection - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('replay_protection');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference = DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}
*/
var DataCloudflareMagicWanIpsecTunnel = /** @class */ (function (_super) {
    __extends(DataCloudflareMagicWanIpsecTunnel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicWanIpsecTunnelConfig
    */
    function DataCloudflareMagicWanIpsecTunnel(scope, id, config) {
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
        // ipsec_tunnel - computed: true, optional: false, required: false
        _this._ipsecTunnel = new DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference(_this, "ipsec_tunnel");
        _this._accountId = config.accountId;
        _this._ipsecTunnelId = config.ipsecTunnelId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicWanIpsecTunnel to import
    * @param importFromId The id of the existing DataCloudflareMagicWanIpsecTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicWanIpsecTunnel to import is found
    */
    DataCloudflareMagicWanIpsecTunnel.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_wan_ipsec_tunnel", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnel.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareMagicWanIpsecTunnel.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnel.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnel.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnel.prototype, "ipsecTunnel", {
        get: function () {
            return this._ipsecTunnel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnel.prototype, "ipsecTunnelId", {
        get: function () {
            return this.getStringAttribute('ipsec_tunnel_id');
        },
        set: function (value) {
            this._ipsecTunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareMagicWanIpsecTunnel.prototype, "ipsecTunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipsecTunnelId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareMagicWanIpsecTunnel.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            ipsec_tunnel_id: cdktf.stringToTerraform(this._ipsecTunnelId),
        };
    };
    DataCloudflareMagicWanIpsecTunnel.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipsec_tunnel_id: {
                value: cdktf.stringToHclTerraform(this._ipsecTunnelId),
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
    DataCloudflareMagicWanIpsecTunnel.tfResourceType = "cloudflare_magic_wan_ipsec_tunnel";
    return DataCloudflareMagicWanIpsecTunnel;
}(cdktf.TerraformDataSource));
exports.DataCloudflareMagicWanIpsecTunnel = DataCloudflareMagicWanIpsecTunnel;
