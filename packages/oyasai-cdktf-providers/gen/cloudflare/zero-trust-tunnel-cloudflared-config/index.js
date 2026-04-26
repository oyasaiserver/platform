"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config
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
exports.ZeroTrustTunnelCloudflaredConfigA = exports.ZeroTrustTunnelCloudflaredConfigConfigOutputReference = exports.ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference = exports.ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference = exports.ZeroTrustTunnelCloudflaredConfigConfigIngressList = exports.ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference = exports.ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference = exports.ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference = void 0;
exports.zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform = zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform;
exports.zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform = zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform;
exports.zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform = zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform;
exports.zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform = zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform;
exports.zeroTrustTunnelCloudflaredConfigConfigIngressToTerraform = zeroTrustTunnelCloudflaredConfigConfigIngressToTerraform;
exports.zeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform = zeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform;
exports.zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform = zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform;
exports.zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform = zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform;
exports.zeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform = zeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform;
exports.zeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform = zeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform;
exports.zeroTrustTunnelCloudflaredConfigConfigToTerraform = zeroTrustTunnelCloudflaredConfigConfigToTerraform;
exports.zeroTrustTunnelCloudflaredConfigConfigToHclTerraform = zeroTrustTunnelCloudflaredConfigConfigToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aud_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.audTag),
        required: cdktf.booleanToTerraform(struct.required),
        team_name: cdktf.stringToTerraform(struct.teamName),
    };
}
function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        aud_tag: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.audTag),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        required: {
            value: cdktf.booleanToHclTerraform(struct.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        team_name: {
            value: cdktf.stringToHclTerraform(struct.teamName),
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
var ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._audTag !== undefined) {
                hasAnyValues = true;
                internalValueResult.audTag = this._audTag;
            }
            if (this._required !== undefined) {
                hasAnyValues = true;
                internalValueResult.required = this._required;
            }
            if (this._teamName !== undefined) {
                hasAnyValues = true;
                internalValueResult.teamName = this._teamName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._audTag = undefined;
                this._required = undefined;
                this._teamName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._audTag = value.audTag;
                this._required = value.required;
                this._teamName = value.teamName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype, "audTag", {
        get: function () {
            return this.getListAttribute('aud_tag');
        },
        set: function (value) {
            this._audTag = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype, "audTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._audTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype, "required", {
        get: function () {
            return this.getBooleanAttribute('required');
        },
        set: function (value) {
            this._required = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype.resetRequired = function () {
        this._required = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype, "requiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype, "teamName", {
        get: function () {
            return this.getStringAttribute('team_name');
        },
        set: function (value) {
            this._teamName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype, "teamNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamName;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference = ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference;
function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access: zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform(struct.access),
        ca_pool: cdktf.stringToTerraform(struct.caPool),
        connect_timeout: cdktf.numberToTerraform(struct.connectTimeout),
        disable_chunked_encoding: cdktf.booleanToTerraform(struct.disableChunkedEncoding),
        http2_origin: cdktf.booleanToTerraform(struct.http2Origin),
        http_host_header: cdktf.stringToTerraform(struct.httpHostHeader),
        keep_alive_connections: cdktf.numberToTerraform(struct.keepAliveConnections),
        keep_alive_timeout: cdktf.numberToTerraform(struct.keepAliveTimeout),
        match_sn_ito_host: cdktf.booleanToTerraform(struct.matchSnItoHost),
        no_happy_eyeballs: cdktf.booleanToTerraform(struct.noHappyEyeballs),
        no_tls_verify: cdktf.booleanToTerraform(struct.noTlsVerify),
        origin_server_name: cdktf.stringToTerraform(struct.originServerName),
        proxy_type: cdktf.stringToTerraform(struct.proxyType),
        tcp_keep_alive: cdktf.numberToTerraform(struct.tcpKeepAlive),
        tls_timeout: cdktf.numberToTerraform(struct.tlsTimeout),
    };
}
function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access: {
            value: zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform(struct.access),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess",
        },
        ca_pool: {
            value: cdktf.stringToHclTerraform(struct.caPool),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connect_timeout: {
            value: cdktf.numberToHclTerraform(struct.connectTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        disable_chunked_encoding: {
            value: cdktf.booleanToHclTerraform(struct.disableChunkedEncoding),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        http2_origin: {
            value: cdktf.booleanToHclTerraform(struct.http2Origin),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        http_host_header: {
            value: cdktf.stringToHclTerraform(struct.httpHostHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keep_alive_connections: {
            value: cdktf.numberToHclTerraform(struct.keepAliveConnections),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        keep_alive_timeout: {
            value: cdktf.numberToHclTerraform(struct.keepAliveTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        match_sn_ito_host: {
            value: cdktf.booleanToHclTerraform(struct.matchSnItoHost),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        no_happy_eyeballs: {
            value: cdktf.booleanToHclTerraform(struct.noHappyEyeballs),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        no_tls_verify: {
            value: cdktf.booleanToHclTerraform(struct.noTlsVerify),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        origin_server_name: {
            value: cdktf.stringToHclTerraform(struct.originServerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        proxy_type: {
            value: cdktf.stringToHclTerraform(struct.proxyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tcp_keep_alive: {
            value: cdktf.numberToHclTerraform(struct.tcpKeepAlive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        tls_timeout: {
            value: cdktf.numberToHclTerraform(struct.tlsTimeout),
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
}
var ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // access - computed: true, optional: true, required: false
        _this._access = new ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference(_this, "access");
        return _this;
    }
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._access) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.access = (_b = this._access) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._caPool !== undefined) {
                hasAnyValues = true;
                internalValueResult.caPool = this._caPool;
            }
            if (this._connectTimeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.connectTimeout = this._connectTimeout;
            }
            if (this._disableChunkedEncoding !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableChunkedEncoding = this._disableChunkedEncoding;
            }
            if (this._http2Origin !== undefined) {
                hasAnyValues = true;
                internalValueResult.http2Origin = this._http2Origin;
            }
            if (this._httpHostHeader !== undefined) {
                hasAnyValues = true;
                internalValueResult.httpHostHeader = this._httpHostHeader;
            }
            if (this._keepAliveConnections !== undefined) {
                hasAnyValues = true;
                internalValueResult.keepAliveConnections = this._keepAliveConnections;
            }
            if (this._keepAliveTimeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.keepAliveTimeout = this._keepAliveTimeout;
            }
            if (this._matchSnItoHost !== undefined) {
                hasAnyValues = true;
                internalValueResult.matchSnItoHost = this._matchSnItoHost;
            }
            if (this._noHappyEyeballs !== undefined) {
                hasAnyValues = true;
                internalValueResult.noHappyEyeballs = this._noHappyEyeballs;
            }
            if (this._noTlsVerify !== undefined) {
                hasAnyValues = true;
                internalValueResult.noTlsVerify = this._noTlsVerify;
            }
            if (this._originServerName !== undefined) {
                hasAnyValues = true;
                internalValueResult.originServerName = this._originServerName;
            }
            if (this._proxyType !== undefined) {
                hasAnyValues = true;
                internalValueResult.proxyType = this._proxyType;
            }
            if (this._tcpKeepAlive !== undefined) {
                hasAnyValues = true;
                internalValueResult.tcpKeepAlive = this._tcpKeepAlive;
            }
            if (this._tlsTimeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.tlsTimeout = this._tlsTimeout;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._access.internalValue = undefined;
                this._caPool = undefined;
                this._connectTimeout = undefined;
                this._disableChunkedEncoding = undefined;
                this._http2Origin = undefined;
                this._httpHostHeader = undefined;
                this._keepAliveConnections = undefined;
                this._keepAliveTimeout = undefined;
                this._matchSnItoHost = undefined;
                this._noHappyEyeballs = undefined;
                this._noTlsVerify = undefined;
                this._originServerName = undefined;
                this._proxyType = undefined;
                this._tcpKeepAlive = undefined;
                this._tlsTimeout = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._access.internalValue = value.access;
                this._caPool = value.caPool;
                this._connectTimeout = value.connectTimeout;
                this._disableChunkedEncoding = value.disableChunkedEncoding;
                this._http2Origin = value.http2Origin;
                this._httpHostHeader = value.httpHostHeader;
                this._keepAliveConnections = value.keepAliveConnections;
                this._keepAliveTimeout = value.keepAliveTimeout;
                this._matchSnItoHost = value.matchSnItoHost;
                this._noHappyEyeballs = value.noHappyEyeballs;
                this._noTlsVerify = value.noTlsVerify;
                this._originServerName = value.originServerName;
                this._proxyType = value.proxyType;
                this._tcpKeepAlive = value.tcpKeepAlive;
                this._tlsTimeout = value.tlsTimeout;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "access", {
        get: function () {
            return this._access;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.putAccess = function (value) {
        this._access.internalValue = value;
    };
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetAccess = function () {
        this._access.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "accessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._access.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "caPool", {
        get: function () {
            return this.getStringAttribute('ca_pool');
        },
        set: function (value) {
            this._caPool = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetCaPool = function () {
        this._caPool = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "caPoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caPool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "connectTimeout", {
        get: function () {
            return this.getNumberAttribute('connect_timeout');
        },
        set: function (value) {
            this._connectTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetConnectTimeout = function () {
        this._connectTimeout = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "connectTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "disableChunkedEncoding", {
        get: function () {
            return this.getBooleanAttribute('disable_chunked_encoding');
        },
        set: function (value) {
            this._disableChunkedEncoding = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetDisableChunkedEncoding = function () {
        this._disableChunkedEncoding = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "disableChunkedEncodingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableChunkedEncoding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "http2Origin", {
        get: function () {
            return this.getBooleanAttribute('http2_origin');
        },
        set: function (value) {
            this._http2Origin = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetHttp2Origin = function () {
        this._http2Origin = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "http2OriginInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._http2Origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "httpHostHeader", {
        get: function () {
            return this.getStringAttribute('http_host_header');
        },
        set: function (value) {
            this._httpHostHeader = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetHttpHostHeader = function () {
        this._httpHostHeader = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "httpHostHeaderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpHostHeader;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "keepAliveConnections", {
        get: function () {
            return this.getNumberAttribute('keep_alive_connections');
        },
        set: function (value) {
            this._keepAliveConnections = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetKeepAliveConnections = function () {
        this._keepAliveConnections = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "keepAliveConnectionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keepAliveConnections;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "keepAliveTimeout", {
        get: function () {
            return this.getNumberAttribute('keep_alive_timeout');
        },
        set: function (value) {
            this._keepAliveTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetKeepAliveTimeout = function () {
        this._keepAliveTimeout = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "keepAliveTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keepAliveTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "matchSnItoHost", {
        get: function () {
            return this.getBooleanAttribute('match_sn_ito_host');
        },
        set: function (value) {
            this._matchSnItoHost = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetMatchSnItoHost = function () {
        this._matchSnItoHost = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "matchSnItoHostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._matchSnItoHost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "noHappyEyeballs", {
        get: function () {
            return this.getBooleanAttribute('no_happy_eyeballs');
        },
        set: function (value) {
            this._noHappyEyeballs = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetNoHappyEyeballs = function () {
        this._noHappyEyeballs = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "noHappyEyeballsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._noHappyEyeballs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "noTlsVerify", {
        get: function () {
            return this.getBooleanAttribute('no_tls_verify');
        },
        set: function (value) {
            this._noTlsVerify = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetNoTlsVerify = function () {
        this._noTlsVerify = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "noTlsVerifyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._noTlsVerify;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "originServerName", {
        get: function () {
            return this.getStringAttribute('origin_server_name');
        },
        set: function (value) {
            this._originServerName = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetOriginServerName = function () {
        this._originServerName = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "originServerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originServerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "proxyType", {
        get: function () {
            return this.getStringAttribute('proxy_type');
        },
        set: function (value) {
            this._proxyType = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetProxyType = function () {
        this._proxyType = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "proxyTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proxyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "tcpKeepAlive", {
        get: function () {
            return this.getNumberAttribute('tcp_keep_alive');
        },
        set: function (value) {
            this._tcpKeepAlive = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetTcpKeepAlive = function () {
        this._tcpKeepAlive = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "tcpKeepAliveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tcpKeepAlive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "tlsTimeout", {
        get: function () {
            return this.getNumberAttribute('tls_timeout');
        },
        set: function (value) {
            this._tlsTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype.resetTlsTimeout = function () {
        this._tlsTimeout = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "tlsTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tlsTimeout;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference = ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference;
function zeroTrustTunnelCloudflaredConfigConfigIngressToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hostname: cdktf.stringToTerraform(struct.hostname),
        origin_request: zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform(struct.originRequest),
        path: cdktf.stringToTerraform(struct.path),
        service: cdktf.stringToTerraform(struct.service),
    };
}
function zeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        origin_request: {
            value: zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform(struct.originRequest),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
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
var ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // origin_request - computed: true, optional: true, required: false
        _this._originRequest = new ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference(_this, "origin_request");
        return _this;
    }
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._hostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = this._hostname;
            }
            if (((_a = this._originRequest) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.originRequest = (_b = this._originRequest) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            if (this._service !== undefined) {
                hasAnyValues = true;
                internalValueResult.service = this._service;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._hostname = undefined;
                this._originRequest.internalValue = undefined;
                this._path = undefined;
                this._service = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._hostname = value.hostname;
                this._originRequest.internalValue = value.originRequest;
                this._path = value.path;
                this._service = value.service;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "originRequest", {
        get: function () {
            return this._originRequest;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype.putOriginRequest = function (value) {
        this._originRequest.internalValue = value;
    };
    ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype.resetOriginRequest = function () {
        this._originRequest.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "originRequestInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originRequest.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference = ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference;
var ZeroTrustTunnelCloudflaredConfigConfigIngressList = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredConfigConfigIngressList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustTunnelCloudflaredConfigConfigIngressList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustTunnelCloudflaredConfigConfigIngressList.prototype.get = function (index) {
        return new ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustTunnelCloudflaredConfigConfigIngressList;
}(cdktf.ComplexList));
exports.ZeroTrustTunnelCloudflaredConfigConfigIngressList = ZeroTrustTunnelCloudflaredConfigConfigIngressList;
function zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aud_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.audTag),
        required: cdktf.booleanToTerraform(struct.required),
        team_name: cdktf.stringToTerraform(struct.teamName),
    };
}
function zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        aud_tag: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.audTag),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        required: {
            value: cdktf.booleanToHclTerraform(struct.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        team_name: {
            value: cdktf.stringToHclTerraform(struct.teamName),
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
var ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._audTag !== undefined) {
                hasAnyValues = true;
                internalValueResult.audTag = this._audTag;
            }
            if (this._required !== undefined) {
                hasAnyValues = true;
                internalValueResult.required = this._required;
            }
            if (this._teamName !== undefined) {
                hasAnyValues = true;
                internalValueResult.teamName = this._teamName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._audTag = undefined;
                this._required = undefined;
                this._teamName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._audTag = value.audTag;
                this._required = value.required;
                this._teamName = value.teamName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype, "audTag", {
        get: function () {
            return this.getListAttribute('aud_tag');
        },
        set: function (value) {
            this._audTag = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype, "audTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._audTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype, "required", {
        get: function () {
            return this.getBooleanAttribute('required');
        },
        set: function (value) {
            this._required = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype.resetRequired = function () {
        this._required = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype, "requiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype, "teamName", {
        get: function () {
            return this.getStringAttribute('team_name');
        },
        set: function (value) {
            this._teamName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype, "teamNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamName;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference = ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference;
function zeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access: zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform(struct.access),
        ca_pool: cdktf.stringToTerraform(struct.caPool),
        connect_timeout: cdktf.numberToTerraform(struct.connectTimeout),
        disable_chunked_encoding: cdktf.booleanToTerraform(struct.disableChunkedEncoding),
        http2_origin: cdktf.booleanToTerraform(struct.http2Origin),
        http_host_header: cdktf.stringToTerraform(struct.httpHostHeader),
        keep_alive_connections: cdktf.numberToTerraform(struct.keepAliveConnections),
        keep_alive_timeout: cdktf.numberToTerraform(struct.keepAliveTimeout),
        match_sn_ito_host: cdktf.booleanToTerraform(struct.matchSnItoHost),
        no_happy_eyeballs: cdktf.booleanToTerraform(struct.noHappyEyeballs),
        no_tls_verify: cdktf.booleanToTerraform(struct.noTlsVerify),
        origin_server_name: cdktf.stringToTerraform(struct.originServerName),
        proxy_type: cdktf.stringToTerraform(struct.proxyType),
        tcp_keep_alive: cdktf.numberToTerraform(struct.tcpKeepAlive),
        tls_timeout: cdktf.numberToTerraform(struct.tlsTimeout),
    };
}
function zeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access: {
            value: zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform(struct.access),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess",
        },
        ca_pool: {
            value: cdktf.stringToHclTerraform(struct.caPool),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connect_timeout: {
            value: cdktf.numberToHclTerraform(struct.connectTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        disable_chunked_encoding: {
            value: cdktf.booleanToHclTerraform(struct.disableChunkedEncoding),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        http2_origin: {
            value: cdktf.booleanToHclTerraform(struct.http2Origin),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        http_host_header: {
            value: cdktf.stringToHclTerraform(struct.httpHostHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keep_alive_connections: {
            value: cdktf.numberToHclTerraform(struct.keepAliveConnections),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        keep_alive_timeout: {
            value: cdktf.numberToHclTerraform(struct.keepAliveTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        match_sn_ito_host: {
            value: cdktf.booleanToHclTerraform(struct.matchSnItoHost),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        no_happy_eyeballs: {
            value: cdktf.booleanToHclTerraform(struct.noHappyEyeballs),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        no_tls_verify: {
            value: cdktf.booleanToHclTerraform(struct.noTlsVerify),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        origin_server_name: {
            value: cdktf.stringToHclTerraform(struct.originServerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        proxy_type: {
            value: cdktf.stringToHclTerraform(struct.proxyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tcp_keep_alive: {
            value: cdktf.numberToHclTerraform(struct.tcpKeepAlive),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        tls_timeout: {
            value: cdktf.numberToHclTerraform(struct.tlsTimeout),
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
}
var ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // access - computed: true, optional: true, required: false
        _this._access = new ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference(_this, "access");
        return _this;
    }
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._access) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.access = (_b = this._access) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._caPool !== undefined) {
                hasAnyValues = true;
                internalValueResult.caPool = this._caPool;
            }
            if (this._connectTimeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.connectTimeout = this._connectTimeout;
            }
            if (this._disableChunkedEncoding !== undefined) {
                hasAnyValues = true;
                internalValueResult.disableChunkedEncoding = this._disableChunkedEncoding;
            }
            if (this._http2Origin !== undefined) {
                hasAnyValues = true;
                internalValueResult.http2Origin = this._http2Origin;
            }
            if (this._httpHostHeader !== undefined) {
                hasAnyValues = true;
                internalValueResult.httpHostHeader = this._httpHostHeader;
            }
            if (this._keepAliveConnections !== undefined) {
                hasAnyValues = true;
                internalValueResult.keepAliveConnections = this._keepAliveConnections;
            }
            if (this._keepAliveTimeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.keepAliveTimeout = this._keepAliveTimeout;
            }
            if (this._matchSnItoHost !== undefined) {
                hasAnyValues = true;
                internalValueResult.matchSnItoHost = this._matchSnItoHost;
            }
            if (this._noHappyEyeballs !== undefined) {
                hasAnyValues = true;
                internalValueResult.noHappyEyeballs = this._noHappyEyeballs;
            }
            if (this._noTlsVerify !== undefined) {
                hasAnyValues = true;
                internalValueResult.noTlsVerify = this._noTlsVerify;
            }
            if (this._originServerName !== undefined) {
                hasAnyValues = true;
                internalValueResult.originServerName = this._originServerName;
            }
            if (this._proxyType !== undefined) {
                hasAnyValues = true;
                internalValueResult.proxyType = this._proxyType;
            }
            if (this._tcpKeepAlive !== undefined) {
                hasAnyValues = true;
                internalValueResult.tcpKeepAlive = this._tcpKeepAlive;
            }
            if (this._tlsTimeout !== undefined) {
                hasAnyValues = true;
                internalValueResult.tlsTimeout = this._tlsTimeout;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._access.internalValue = undefined;
                this._caPool = undefined;
                this._connectTimeout = undefined;
                this._disableChunkedEncoding = undefined;
                this._http2Origin = undefined;
                this._httpHostHeader = undefined;
                this._keepAliveConnections = undefined;
                this._keepAliveTimeout = undefined;
                this._matchSnItoHost = undefined;
                this._noHappyEyeballs = undefined;
                this._noTlsVerify = undefined;
                this._originServerName = undefined;
                this._proxyType = undefined;
                this._tcpKeepAlive = undefined;
                this._tlsTimeout = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._access.internalValue = value.access;
                this._caPool = value.caPool;
                this._connectTimeout = value.connectTimeout;
                this._disableChunkedEncoding = value.disableChunkedEncoding;
                this._http2Origin = value.http2Origin;
                this._httpHostHeader = value.httpHostHeader;
                this._keepAliveConnections = value.keepAliveConnections;
                this._keepAliveTimeout = value.keepAliveTimeout;
                this._matchSnItoHost = value.matchSnItoHost;
                this._noHappyEyeballs = value.noHappyEyeballs;
                this._noTlsVerify = value.noTlsVerify;
                this._originServerName = value.originServerName;
                this._proxyType = value.proxyType;
                this._tcpKeepAlive = value.tcpKeepAlive;
                this._tlsTimeout = value.tlsTimeout;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "access", {
        get: function () {
            return this._access;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.putAccess = function (value) {
        this._access.internalValue = value;
    };
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetAccess = function () {
        this._access.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "accessInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._access.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "caPool", {
        get: function () {
            return this.getStringAttribute('ca_pool');
        },
        set: function (value) {
            this._caPool = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetCaPool = function () {
        this._caPool = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "caPoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caPool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "connectTimeout", {
        get: function () {
            return this.getNumberAttribute('connect_timeout');
        },
        set: function (value) {
            this._connectTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetConnectTimeout = function () {
        this._connectTimeout = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "connectTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "disableChunkedEncoding", {
        get: function () {
            return this.getBooleanAttribute('disable_chunked_encoding');
        },
        set: function (value) {
            this._disableChunkedEncoding = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetDisableChunkedEncoding = function () {
        this._disableChunkedEncoding = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "disableChunkedEncodingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableChunkedEncoding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "http2Origin", {
        get: function () {
            return this.getBooleanAttribute('http2_origin');
        },
        set: function (value) {
            this._http2Origin = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetHttp2Origin = function () {
        this._http2Origin = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "http2OriginInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._http2Origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "httpHostHeader", {
        get: function () {
            return this.getStringAttribute('http_host_header');
        },
        set: function (value) {
            this._httpHostHeader = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetHttpHostHeader = function () {
        this._httpHostHeader = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "httpHostHeaderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpHostHeader;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "keepAliveConnections", {
        get: function () {
            return this.getNumberAttribute('keep_alive_connections');
        },
        set: function (value) {
            this._keepAliveConnections = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetKeepAliveConnections = function () {
        this._keepAliveConnections = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "keepAliveConnectionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keepAliveConnections;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "keepAliveTimeout", {
        get: function () {
            return this.getNumberAttribute('keep_alive_timeout');
        },
        set: function (value) {
            this._keepAliveTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetKeepAliveTimeout = function () {
        this._keepAliveTimeout = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "keepAliveTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keepAliveTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "matchSnItoHost", {
        get: function () {
            return this.getBooleanAttribute('match_sn_ito_host');
        },
        set: function (value) {
            this._matchSnItoHost = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetMatchSnItoHost = function () {
        this._matchSnItoHost = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "matchSnItoHostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._matchSnItoHost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "noHappyEyeballs", {
        get: function () {
            return this.getBooleanAttribute('no_happy_eyeballs');
        },
        set: function (value) {
            this._noHappyEyeballs = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetNoHappyEyeballs = function () {
        this._noHappyEyeballs = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "noHappyEyeballsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._noHappyEyeballs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "noTlsVerify", {
        get: function () {
            return this.getBooleanAttribute('no_tls_verify');
        },
        set: function (value) {
            this._noTlsVerify = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetNoTlsVerify = function () {
        this._noTlsVerify = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "noTlsVerifyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._noTlsVerify;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "originServerName", {
        get: function () {
            return this.getStringAttribute('origin_server_name');
        },
        set: function (value) {
            this._originServerName = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetOriginServerName = function () {
        this._originServerName = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "originServerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originServerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "proxyType", {
        get: function () {
            return this.getStringAttribute('proxy_type');
        },
        set: function (value) {
            this._proxyType = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetProxyType = function () {
        this._proxyType = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "proxyTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proxyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "tcpKeepAlive", {
        get: function () {
            return this.getNumberAttribute('tcp_keep_alive');
        },
        set: function (value) {
            this._tcpKeepAlive = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetTcpKeepAlive = function () {
        this._tcpKeepAlive = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "tcpKeepAliveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tcpKeepAlive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "tlsTimeout", {
        get: function () {
            return this.getNumberAttribute('tls_timeout');
        },
        set: function (value) {
            this._tlsTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype.resetTlsTimeout = function () {
        this._tlsTimeout = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "tlsTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tlsTimeout;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference = ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference;
function zeroTrustTunnelCloudflaredConfigConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ingress: cdktf.listMapper(zeroTrustTunnelCloudflaredConfigConfigIngressToTerraform, false)(struct.ingress),
        origin_request: zeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform(struct.originRequest),
    };
}
function zeroTrustTunnelCloudflaredConfigConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ingress: {
            value: cdktf.listMapperHcl(zeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform, false)(struct.ingress),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustTunnelCloudflaredConfigConfigIngressList",
        },
        origin_request: {
            value: zeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform(struct.originRequest),
            isBlock: true,
            type: "struct",
            storageClassType: "ZeroTrustTunnelCloudflaredConfigConfigOriginRequest",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustTunnelCloudflaredConfigConfigOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredConfigConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustTunnelCloudflaredConfigConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ingress - computed: true, optional: true, required: false
        _this._ingress = new ZeroTrustTunnelCloudflaredConfigConfigIngressList(_this, "ingress", false);
        // origin_request - computed: true, optional: true, required: false
        _this._originRequest = new ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference(_this, "origin_request");
        return _this;
    }
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._ingress) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.ingress = (_b = this._ingress) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._originRequest) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.originRequest = (_d = this._originRequest) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ingress.internalValue = undefined;
                this._originRequest.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ingress.internalValue = value.ingress;
                this._originRequest.internalValue = value.originRequest;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype, "ingress", {
        get: function () {
            return this._ingress;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype.putIngress = function (value) {
        this._ingress.internalValue = value;
    };
    ZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype.resetIngress = function () {
        this._ingress.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype, "ingressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ingress.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype, "originRequest", {
        get: function () {
            return this._originRequest;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype.putOriginRequest = function (value) {
        this._originRequest.internalValue = value;
    };
    ZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype.resetOriginRequest = function () {
        this._originRequest.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype, "originRequestInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originRequest.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustTunnelCloudflaredConfigConfigOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustTunnelCloudflaredConfigConfigOutputReference = ZeroTrustTunnelCloudflaredConfigConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config}
*/
var ZeroTrustTunnelCloudflaredConfigA = /** @class */ (function (_super) {
    __extends(ZeroTrustTunnelCloudflaredConfigA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustTunnelCloudflaredConfigAConfig
    */
    function ZeroTrustTunnelCloudflaredConfigA(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_config',
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
        // config - computed: true, optional: true, required: false
        _this._config = new ZeroTrustTunnelCloudflaredConfigConfigOutputReference(_this, "config");
        _this._accountId = config.accountId;
        _this._config.internalValue = config.config;
        _this._source = config.source;
        _this._tunnelId = config.tunnelId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustTunnelCloudflaredConfigA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustTunnelCloudflaredConfigA to import
    * @param importFromId The id of the existing ZeroTrustTunnelCloudflaredConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustTunnelCloudflaredConfigA to import is found
    */
    ZeroTrustTunnelCloudflaredConfigA.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_config", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigA.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigA.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigA.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigA.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigA.prototype.putConfig = function (value) {
        this._config.internalValue = value;
    };
    ZeroTrustTunnelCloudflaredConfigA.prototype.resetConfig = function () {
        this._config.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigA.prototype, "configInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._config.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigA.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigA.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigA.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustTunnelCloudflaredConfigA.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigA.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigA.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigA.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustTunnelCloudflaredConfigA.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustTunnelCloudflaredConfigA.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            config: zeroTrustTunnelCloudflaredConfigConfigToTerraform(this._config.internalValue),
            source: cdktf.stringToTerraform(this._source),
            tunnel_id: cdktf.stringToTerraform(this._tunnelId),
        };
    };
    ZeroTrustTunnelCloudflaredConfigA.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            config: {
                value: zeroTrustTunnelCloudflaredConfigConfigToHclTerraform(this._config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustTunnelCloudflaredConfigConfig",
            },
            source: {
                value: cdktf.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel_id: {
                value: cdktf.stringToHclTerraform(this._tunnelId),
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
    ZeroTrustTunnelCloudflaredConfigA.tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_config";
    return ZeroTrustTunnelCloudflaredConfigA;
}(cdktf.TerraformResource));
exports.ZeroTrustTunnelCloudflaredConfigA = ZeroTrustTunnelCloudflaredConfigA;
