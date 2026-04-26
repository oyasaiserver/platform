"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target
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
exports.DataCloudflareZeroTrustAccessInfrastructureTarget = exports.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference = exports.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference = exports.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference = exports.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference = void 0;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetFilterToTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetFilterToTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetFilterToHclTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetFilterToHclTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetIpToTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetIpToTerraform;
exports.dataCloudflareZeroTrustAccessInfrastructureTargetIpToHclTerraform = dataCloudflareZeroTrustAccessInfrastructureTargetIpToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustAccessInfrastructureTargetFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        created_after: cdktf.stringToTerraform(struct.createdAfter),
        created_before: cdktf.stringToTerraform(struct.createdBefore),
        direction: cdktf.stringToTerraform(struct.direction),
        hostname: cdktf.stringToTerraform(struct.hostname),
        hostname_contains: cdktf.stringToTerraform(struct.hostnameContains),
        ip_like: cdktf.stringToTerraform(struct.ipLike),
        ip_v4: cdktf.stringToTerraform(struct.ipV4),
        ip_v6: cdktf.stringToTerraform(struct.ipV6),
        ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.ips),
        ipv4_end: cdktf.stringToTerraform(struct.ipv4End),
        ipv4_start: cdktf.stringToTerraform(struct.ipv4Start),
        ipv6_end: cdktf.stringToTerraform(struct.ipv6End),
        ipv6_start: cdktf.stringToTerraform(struct.ipv6Start),
        modified_after: cdktf.stringToTerraform(struct.modifiedAfter),
        modified_before: cdktf.stringToTerraform(struct.modifiedBefore),
        order: cdktf.stringToTerraform(struct.order),
        target_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.targetIds),
        virtual_network_id: cdktf.stringToTerraform(struct.virtualNetworkId),
    };
}
function dataCloudflareZeroTrustAccessInfrastructureTargetFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        created_after: {
            value: cdktf.stringToHclTerraform(struct.createdAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        created_before: {
            value: cdktf.stringToHclTerraform(struct.createdBefore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname_contains: {
            value: cdktf.stringToHclTerraform(struct.hostnameContains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_like: {
            value: cdktf.stringToHclTerraform(struct.ipLike),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_v4: {
            value: cdktf.stringToHclTerraform(struct.ipV4),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_v6: {
            value: cdktf.stringToHclTerraform(struct.ipV6),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ips: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.ips),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        ipv4_end: {
            value: cdktf.stringToHclTerraform(struct.ipv4End),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv4_start: {
            value: cdktf.stringToHclTerraform(struct.ipv4Start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv6_end: {
            value: cdktf.stringToHclTerraform(struct.ipv6End),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ipv6_start: {
            value: cdktf.stringToHclTerraform(struct.ipv6Start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        modified_after: {
            value: cdktf.stringToHclTerraform(struct.modifiedAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        modified_before: {
            value: cdktf.stringToHclTerraform(struct.modifiedBefore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_ids: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.targetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        virtual_network_id: {
            value: cdktf.stringToHclTerraform(struct.virtualNetworkId),
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
var DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._createdAfter !== undefined) {
                hasAnyValues = true;
                internalValueResult.createdAfter = this._createdAfter;
            }
            if (this._createdBefore !== undefined) {
                hasAnyValues = true;
                internalValueResult.createdBefore = this._createdBefore;
            }
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._hostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = this._hostname;
            }
            if (this._hostnameContains !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostnameContains = this._hostnameContains;
            }
            if (this._ipLike !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipLike = this._ipLike;
            }
            if (this._ipV4 !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipV4 = this._ipV4;
            }
            if (this._ipV6 !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipV6 = this._ipV6;
            }
            if (this._ips !== undefined) {
                hasAnyValues = true;
                internalValueResult.ips = this._ips;
            }
            if (this._ipv4End !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv4End = this._ipv4End;
            }
            if (this._ipv4Start !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv4Start = this._ipv4Start;
            }
            if (this._ipv6End !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv6End = this._ipv6End;
            }
            if (this._ipv6Start !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipv6Start = this._ipv6Start;
            }
            if (this._modifiedAfter !== undefined) {
                hasAnyValues = true;
                internalValueResult.modifiedAfter = this._modifiedAfter;
            }
            if (this._modifiedBefore !== undefined) {
                hasAnyValues = true;
                internalValueResult.modifiedBefore = this._modifiedBefore;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            if (this._targetIds !== undefined) {
                hasAnyValues = true;
                internalValueResult.targetIds = this._targetIds;
            }
            if (this._virtualNetworkId !== undefined) {
                hasAnyValues = true;
                internalValueResult.virtualNetworkId = this._virtualNetworkId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._createdAfter = undefined;
                this._createdBefore = undefined;
                this._direction = undefined;
                this._hostname = undefined;
                this._hostnameContains = undefined;
                this._ipLike = undefined;
                this._ipV4 = undefined;
                this._ipV6 = undefined;
                this._ips = undefined;
                this._ipv4End = undefined;
                this._ipv4Start = undefined;
                this._ipv6End = undefined;
                this._ipv6Start = undefined;
                this._modifiedAfter = undefined;
                this._modifiedBefore = undefined;
                this._order = undefined;
                this._targetIds = undefined;
                this._virtualNetworkId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._createdAfter = value.createdAfter;
                this._createdBefore = value.createdBefore;
                this._direction = value.direction;
                this._hostname = value.hostname;
                this._hostnameContains = value.hostnameContains;
                this._ipLike = value.ipLike;
                this._ipV4 = value.ipV4;
                this._ipV6 = value.ipV6;
                this._ips = value.ips;
                this._ipv4End = value.ipv4End;
                this._ipv4Start = value.ipv4Start;
                this._ipv6End = value.ipv6End;
                this._ipv6Start = value.ipv6Start;
                this._modifiedAfter = value.modifiedAfter;
                this._modifiedBefore = value.modifiedBefore;
                this._order = value.order;
                this._targetIds = value.targetIds;
                this._virtualNetworkId = value.virtualNetworkId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "createdAfter", {
        get: function () {
            return this.getStringAttribute('created_after');
        },
        set: function (value) {
            this._createdAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetCreatedAfter = function () {
        this._createdAfter = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "createdAfterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdAfter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "createdBefore", {
        get: function () {
            return this.getStringAttribute('created_before');
        },
        set: function (value) {
            this._createdBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetCreatedBefore = function () {
        this._createdBefore = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "createdBeforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdBefore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "hostnameContains", {
        get: function () {
            return this.getStringAttribute('hostname_contains');
        },
        set: function (value) {
            this._hostnameContains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetHostnameContains = function () {
        this._hostnameContains = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "hostnameContainsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostnameContains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipLike", {
        get: function () {
            return this.getStringAttribute('ip_like');
        },
        set: function (value) {
            this._ipLike = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetIpLike = function () {
        this._ipLike = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipLikeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipLike;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipV4", {
        get: function () {
            return this.getStringAttribute('ip_v4');
        },
        set: function (value) {
            this._ipV4 = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetIpV4 = function () {
        this._ipV4 = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipV4Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipV4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipV6", {
        get: function () {
            return this.getStringAttribute('ip_v6');
        },
        set: function (value) {
            this._ipV6 = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetIpV6 = function () {
        this._ipV6 = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipV6Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipV6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ips", {
        get: function () {
            return this.getListAttribute('ips');
        },
        set: function (value) {
            this._ips = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetIps = function () {
        this._ips = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ips;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipv4End", {
        get: function () {
            return this.getStringAttribute('ipv4_end');
        },
        set: function (value) {
            this._ipv4End = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetIpv4End = function () {
        this._ipv4End = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipv4EndInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4End;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipv4Start", {
        get: function () {
            return this.getStringAttribute('ipv4_start');
        },
        set: function (value) {
            this._ipv4Start = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetIpv4Start = function () {
        this._ipv4Start = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipv4StartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4Start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipv6End", {
        get: function () {
            return this.getStringAttribute('ipv6_end');
        },
        set: function (value) {
            this._ipv6End = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetIpv6End = function () {
        this._ipv6End = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipv6EndInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6End;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipv6Start", {
        get: function () {
            return this.getStringAttribute('ipv6_start');
        },
        set: function (value) {
            this._ipv6Start = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetIpv6Start = function () {
        this._ipv6Start = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "ipv6StartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6Start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "modifiedAfter", {
        get: function () {
            return this.getStringAttribute('modified_after');
        },
        set: function (value) {
            this._modifiedAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetModifiedAfter = function () {
        this._modifiedAfter = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "modifiedAfterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modifiedAfter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "modifiedBefore", {
        get: function () {
            return this.getStringAttribute('modified_before');
        },
        set: function (value) {
            this._modifiedBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetModifiedBefore = function () {
        this._modifiedBefore = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "modifiedBeforeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modifiedBefore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "targetIds", {
        get: function () {
            return this.getListAttribute('target_ids');
        },
        set: function (value) {
            this._targetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetTargetIds = function () {
        this._targetIds = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "targetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "virtualNetworkId", {
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        set: function (value) {
            this._virtualNetworkId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype.resetVirtualNetworkId = function () {
        this._virtualNetworkId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference.prototype, "virtualNetworkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualNetworkId;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference = DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference;
function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.prototype, "ipAddr", {
        // ip_addr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_addr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference.prototype, "virtualNetworkId", {
        // virtual_network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference = DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference;
function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6ToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.prototype, "ipAddr", {
        // ip_addr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_addr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference.prototype, "virtualNetworkId", {
        // virtual_network_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_network_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference = DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference;
function dataCloudflareZeroTrustAccessInfrastructureTargetIpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessInfrastructureTargetIpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ipv4 - computed: true, optional: false, required: false
        _this._ipv4 = new DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv4OutputReference(_this, "ipv4");
        // ipv6 - computed: true, optional: false, required: false
        _this._ipv6 = new DataCloudflareZeroTrustAccessInfrastructureTargetIpIpv6OutputReference(_this, "ipv6");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.prototype, "ipv4", {
        get: function () {
            return this._ipv4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference.prototype, "ipv6", {
        get: function () {
            return this._ipv6;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference = DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target}
*/
var DataCloudflareZeroTrustAccessInfrastructureTarget = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessInfrastructureTarget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target cloudflare_zero_trust_access_infrastructure_target} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessInfrastructureTargetConfig = {}
    */
    function DataCloudflareZeroTrustAccessInfrastructureTarget(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_infrastructure_target',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareZeroTrustAccessInfrastructureTargetFilterOutputReference(_this, "filter");
        // ip - computed: true, optional: false, required: false
        _this._ip = new DataCloudflareZeroTrustAccessInfrastructureTargetIpOutputReference(_this, "ip");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._targetId = config.targetId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessInfrastructureTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessInfrastructureTarget to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessInfrastructureTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_infrastructure_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessInfrastructureTarget to import is found
    */
    DataCloudflareZeroTrustAccessInfrastructureTarget.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_infrastructure_target", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTarget.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTarget.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTarget.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTarget.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTarget.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTarget.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZeroTrustAccessInfrastructureTarget.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTarget.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTarget.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTarget.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTarget.prototype, "ip", {
        get: function () {
            return this._ip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTarget.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTarget.prototype, "targetId", {
        get: function () {
            return this.getStringAttribute('target_id');
        },
        set: function (value) {
            this._targetId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessInfrastructureTarget.prototype.resetTargetId = function () {
        this._targetId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessInfrastructureTarget.prototype, "targetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustAccessInfrastructureTarget.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustAccessInfrastructureTargetFilterToTerraform(this._filter.internalValue),
            target_id: cdktf.stringToTerraform(this._targetId),
        };
    };
    DataCloudflareZeroTrustAccessInfrastructureTarget.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareZeroTrustAccessInfrastructureTargetFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustAccessInfrastructureTargetFilter",
            },
            target_id: {
                value: cdktf.stringToHclTerraform(this._targetId),
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
    DataCloudflareZeroTrustAccessInfrastructureTarget.tfResourceType = "cloudflare_zero_trust_access_infrastructure_target";
    return DataCloudflareZeroTrustAccessInfrastructureTarget;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustAccessInfrastructureTarget = DataCloudflareZeroTrustAccessInfrastructureTarget;
