// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform(struct) {
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
export function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // aud_tag - computed: true, optional: false, required: true
    _audTag;
    get audTag() {
        return this.getListAttribute('aud_tag');
    }
    set audTag(value) {
        this._audTag = value;
    }
    // Temporarily expose input value. Use with caution.
    get audTagInput() {
        return this._audTag;
    }
    // required - computed: true, optional: true, required: false
    _required;
    get required() {
        return this.getBooleanAttribute('required');
    }
    set required(value) {
        this._required = value;
    }
    resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredInput() {
        return this._required;
    }
    // team_name - computed: true, optional: false, required: true
    _teamName;
    get teamName() {
        return this.getStringAttribute('team_name');
    }
    set teamName(value) {
        this._teamName = value;
    }
    // Temporarily expose input value. Use with caution.
    get teamNameInput() {
        return this._teamName;
    }
}
export function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform(struct) {
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
export function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._access?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.access = this._access?.internalValue;
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
    }
    set internalValue(value) {
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
    }
    // access - computed: true, optional: true, required: false
    _access = new ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference(this, "access");
    get access() {
        return this._access;
    }
    putAccess(value) {
        this._access.internalValue = value;
    }
    resetAccess() {
        this._access.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessInput() {
        return this._access.internalValue;
    }
    // ca_pool - computed: true, optional: true, required: false
    _caPool;
    get caPool() {
        return this.getStringAttribute('ca_pool');
    }
    set caPool(value) {
        this._caPool = value;
    }
    resetCaPool() {
        this._caPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get caPoolInput() {
        return this._caPool;
    }
    // connect_timeout - computed: true, optional: true, required: false
    _connectTimeout;
    get connectTimeout() {
        return this.getNumberAttribute('connect_timeout');
    }
    set connectTimeout(value) {
        this._connectTimeout = value;
    }
    resetConnectTimeout() {
        this._connectTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectTimeoutInput() {
        return this._connectTimeout;
    }
    // disable_chunked_encoding - computed: true, optional: true, required: false
    _disableChunkedEncoding;
    get disableChunkedEncoding() {
        return this.getBooleanAttribute('disable_chunked_encoding');
    }
    set disableChunkedEncoding(value) {
        this._disableChunkedEncoding = value;
    }
    resetDisableChunkedEncoding() {
        this._disableChunkedEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableChunkedEncodingInput() {
        return this._disableChunkedEncoding;
    }
    // http2_origin - computed: true, optional: true, required: false
    _http2Origin;
    get http2Origin() {
        return this.getBooleanAttribute('http2_origin');
    }
    set http2Origin(value) {
        this._http2Origin = value;
    }
    resetHttp2Origin() {
        this._http2Origin = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get http2OriginInput() {
        return this._http2Origin;
    }
    // http_host_header - computed: true, optional: true, required: false
    _httpHostHeader;
    get httpHostHeader() {
        return this.getStringAttribute('http_host_header');
    }
    set httpHostHeader(value) {
        this._httpHostHeader = value;
    }
    resetHttpHostHeader() {
        this._httpHostHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpHostHeaderInput() {
        return this._httpHostHeader;
    }
    // keep_alive_connections - computed: true, optional: true, required: false
    _keepAliveConnections;
    get keepAliveConnections() {
        return this.getNumberAttribute('keep_alive_connections');
    }
    set keepAliveConnections(value) {
        this._keepAliveConnections = value;
    }
    resetKeepAliveConnections() {
        this._keepAliveConnections = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keepAliveConnectionsInput() {
        return this._keepAliveConnections;
    }
    // keep_alive_timeout - computed: true, optional: true, required: false
    _keepAliveTimeout;
    get keepAliveTimeout() {
        return this.getNumberAttribute('keep_alive_timeout');
    }
    set keepAliveTimeout(value) {
        this._keepAliveTimeout = value;
    }
    resetKeepAliveTimeout() {
        this._keepAliveTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keepAliveTimeoutInput() {
        return this._keepAliveTimeout;
    }
    // match_sn_ito_host - computed: true, optional: true, required: false
    _matchSnItoHost;
    get matchSnItoHost() {
        return this.getBooleanAttribute('match_sn_ito_host');
    }
    set matchSnItoHost(value) {
        this._matchSnItoHost = value;
    }
    resetMatchSnItoHost() {
        this._matchSnItoHost = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get matchSnItoHostInput() {
        return this._matchSnItoHost;
    }
    // no_happy_eyeballs - computed: true, optional: true, required: false
    _noHappyEyeballs;
    get noHappyEyeballs() {
        return this.getBooleanAttribute('no_happy_eyeballs');
    }
    set noHappyEyeballs(value) {
        this._noHappyEyeballs = value;
    }
    resetNoHappyEyeballs() {
        this._noHappyEyeballs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noHappyEyeballsInput() {
        return this._noHappyEyeballs;
    }
    // no_tls_verify - computed: true, optional: true, required: false
    _noTlsVerify;
    get noTlsVerify() {
        return this.getBooleanAttribute('no_tls_verify');
    }
    set noTlsVerify(value) {
        this._noTlsVerify = value;
    }
    resetNoTlsVerify() {
        this._noTlsVerify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noTlsVerifyInput() {
        return this._noTlsVerify;
    }
    // origin_server_name - computed: true, optional: true, required: false
    _originServerName;
    get originServerName() {
        return this.getStringAttribute('origin_server_name');
    }
    set originServerName(value) {
        this._originServerName = value;
    }
    resetOriginServerName() {
        this._originServerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originServerNameInput() {
        return this._originServerName;
    }
    // proxy_type - computed: true, optional: true, required: false
    _proxyType;
    get proxyType() {
        return this.getStringAttribute('proxy_type');
    }
    set proxyType(value) {
        this._proxyType = value;
    }
    resetProxyType() {
        this._proxyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get proxyTypeInput() {
        return this._proxyType;
    }
    // tcp_keep_alive - computed: true, optional: true, required: false
    _tcpKeepAlive;
    get tcpKeepAlive() {
        return this.getNumberAttribute('tcp_keep_alive');
    }
    set tcpKeepAlive(value) {
        this._tcpKeepAlive = value;
    }
    resetTcpKeepAlive() {
        this._tcpKeepAlive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tcpKeepAliveInput() {
        return this._tcpKeepAlive;
    }
    // tls_timeout - computed: true, optional: true, required: false
    _tlsTimeout;
    get tlsTimeout() {
        return this.getNumberAttribute('tls_timeout');
    }
    set tlsTimeout(value) {
        this._tlsTimeout = value;
    }
    resetTlsTimeout() {
        this._tlsTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tlsTimeoutInput() {
        return this._tlsTimeout;
    }
}
export function zeroTrustTunnelCloudflaredConfigConfigIngressToTerraform(struct) {
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
export function zeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._originRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.originRequest = this._originRequest?.internalValue;
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
    }
    set internalValue(value) {
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
    }
    // hostname - computed: true, optional: true, required: false
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // origin_request - computed: true, optional: true, required: false
    _originRequest = new ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference(this, "origin_request");
    get originRequest() {
        return this._originRequest;
    }
    putOriginRequest(value) {
        this._originRequest.internalValue = value;
    }
    resetOriginRequest() {
        this._originRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originRequestInput() {
        return this._originRequest.internalValue;
    }
    // path - computed: true, optional: true, required: false
    _path;
    get path() {
        return this.getStringAttribute('path');
    }
    set path(value) {
        this._path = value;
    }
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathInput() {
        return this._path;
    }
    // service - computed: true, optional: false, required: true
    _service;
    get service() {
        return this.getStringAttribute('service');
    }
    set service(value) {
        this._service = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceInput() {
        return this._service;
    }
}
export class ZeroTrustTunnelCloudflaredConfigConfigIngressList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform(struct) {
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
export function zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
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
    }
    set internalValue(value) {
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
    }
    // aud_tag - computed: true, optional: false, required: true
    _audTag;
    get audTag() {
        return this.getListAttribute('aud_tag');
    }
    set audTag(value) {
        this._audTag = value;
    }
    // Temporarily expose input value. Use with caution.
    get audTagInput() {
        return this._audTag;
    }
    // required - computed: true, optional: true, required: false
    _required;
    get required() {
        return this.getBooleanAttribute('required');
    }
    set required(value) {
        this._required = value;
    }
    resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredInput() {
        return this._required;
    }
    // team_name - computed: true, optional: false, required: true
    _teamName;
    get teamName() {
        return this.getStringAttribute('team_name');
    }
    set teamName(value) {
        this._teamName = value;
    }
    // Temporarily expose input value. Use with caution.
    get teamNameInput() {
        return this._teamName;
    }
}
export function zeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform(struct) {
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
export function zeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._access?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.access = this._access?.internalValue;
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
    }
    set internalValue(value) {
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
    }
    // access - computed: true, optional: true, required: false
    _access = new ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference(this, "access");
    get access() {
        return this._access;
    }
    putAccess(value) {
        this._access.internalValue = value;
    }
    resetAccess() {
        this._access.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessInput() {
        return this._access.internalValue;
    }
    // ca_pool - computed: true, optional: true, required: false
    _caPool;
    get caPool() {
        return this.getStringAttribute('ca_pool');
    }
    set caPool(value) {
        this._caPool = value;
    }
    resetCaPool() {
        this._caPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get caPoolInput() {
        return this._caPool;
    }
    // connect_timeout - computed: true, optional: true, required: false
    _connectTimeout;
    get connectTimeout() {
        return this.getNumberAttribute('connect_timeout');
    }
    set connectTimeout(value) {
        this._connectTimeout = value;
    }
    resetConnectTimeout() {
        this._connectTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectTimeoutInput() {
        return this._connectTimeout;
    }
    // disable_chunked_encoding - computed: true, optional: true, required: false
    _disableChunkedEncoding;
    get disableChunkedEncoding() {
        return this.getBooleanAttribute('disable_chunked_encoding');
    }
    set disableChunkedEncoding(value) {
        this._disableChunkedEncoding = value;
    }
    resetDisableChunkedEncoding() {
        this._disableChunkedEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disableChunkedEncodingInput() {
        return this._disableChunkedEncoding;
    }
    // http2_origin - computed: true, optional: true, required: false
    _http2Origin;
    get http2Origin() {
        return this.getBooleanAttribute('http2_origin');
    }
    set http2Origin(value) {
        this._http2Origin = value;
    }
    resetHttp2Origin() {
        this._http2Origin = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get http2OriginInput() {
        return this._http2Origin;
    }
    // http_host_header - computed: true, optional: true, required: false
    _httpHostHeader;
    get httpHostHeader() {
        return this.getStringAttribute('http_host_header');
    }
    set httpHostHeader(value) {
        this._httpHostHeader = value;
    }
    resetHttpHostHeader() {
        this._httpHostHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpHostHeaderInput() {
        return this._httpHostHeader;
    }
    // keep_alive_connections - computed: true, optional: true, required: false
    _keepAliveConnections;
    get keepAliveConnections() {
        return this.getNumberAttribute('keep_alive_connections');
    }
    set keepAliveConnections(value) {
        this._keepAliveConnections = value;
    }
    resetKeepAliveConnections() {
        this._keepAliveConnections = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keepAliveConnectionsInput() {
        return this._keepAliveConnections;
    }
    // keep_alive_timeout - computed: true, optional: true, required: false
    _keepAliveTimeout;
    get keepAliveTimeout() {
        return this.getNumberAttribute('keep_alive_timeout');
    }
    set keepAliveTimeout(value) {
        this._keepAliveTimeout = value;
    }
    resetKeepAliveTimeout() {
        this._keepAliveTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keepAliveTimeoutInput() {
        return this._keepAliveTimeout;
    }
    // match_sn_ito_host - computed: true, optional: true, required: false
    _matchSnItoHost;
    get matchSnItoHost() {
        return this.getBooleanAttribute('match_sn_ito_host');
    }
    set matchSnItoHost(value) {
        this._matchSnItoHost = value;
    }
    resetMatchSnItoHost() {
        this._matchSnItoHost = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get matchSnItoHostInput() {
        return this._matchSnItoHost;
    }
    // no_happy_eyeballs - computed: true, optional: true, required: false
    _noHappyEyeballs;
    get noHappyEyeballs() {
        return this.getBooleanAttribute('no_happy_eyeballs');
    }
    set noHappyEyeballs(value) {
        this._noHappyEyeballs = value;
    }
    resetNoHappyEyeballs() {
        this._noHappyEyeballs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noHappyEyeballsInput() {
        return this._noHappyEyeballs;
    }
    // no_tls_verify - computed: true, optional: true, required: false
    _noTlsVerify;
    get noTlsVerify() {
        return this.getBooleanAttribute('no_tls_verify');
    }
    set noTlsVerify(value) {
        this._noTlsVerify = value;
    }
    resetNoTlsVerify() {
        this._noTlsVerify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noTlsVerifyInput() {
        return this._noTlsVerify;
    }
    // origin_server_name - computed: true, optional: true, required: false
    _originServerName;
    get originServerName() {
        return this.getStringAttribute('origin_server_name');
    }
    set originServerName(value) {
        this._originServerName = value;
    }
    resetOriginServerName() {
        this._originServerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originServerNameInput() {
        return this._originServerName;
    }
    // proxy_type - computed: true, optional: true, required: false
    _proxyType;
    get proxyType() {
        return this.getStringAttribute('proxy_type');
    }
    set proxyType(value) {
        this._proxyType = value;
    }
    resetProxyType() {
        this._proxyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get proxyTypeInput() {
        return this._proxyType;
    }
    // tcp_keep_alive - computed: true, optional: true, required: false
    _tcpKeepAlive;
    get tcpKeepAlive() {
        return this.getNumberAttribute('tcp_keep_alive');
    }
    set tcpKeepAlive(value) {
        this._tcpKeepAlive = value;
    }
    resetTcpKeepAlive() {
        this._tcpKeepAlive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tcpKeepAliveInput() {
        return this._tcpKeepAlive;
    }
    // tls_timeout - computed: true, optional: true, required: false
    _tlsTimeout;
    get tlsTimeout() {
        return this.getNumberAttribute('tls_timeout');
    }
    set tlsTimeout(value) {
        this._tlsTimeout = value;
    }
    resetTlsTimeout() {
        this._tlsTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tlsTimeoutInput() {
        return this._tlsTimeout;
    }
}
export function zeroTrustTunnelCloudflaredConfigConfigToTerraform(struct) {
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
export function zeroTrustTunnelCloudflaredConfigConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class ZeroTrustTunnelCloudflaredConfigConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._ingress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ingress = this._ingress?.internalValue;
        }
        if (this._originRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.originRequest = this._originRequest?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
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
    }
    // ingress - computed: true, optional: true, required: false
    _ingress = new ZeroTrustTunnelCloudflaredConfigConfigIngressList(this, "ingress", false);
    get ingress() {
        return this._ingress;
    }
    putIngress(value) {
        this._ingress.internalValue = value;
    }
    resetIngress() {
        this._ingress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ingressInput() {
        return this._ingress.internalValue;
    }
    // origin_request - computed: true, optional: true, required: false
    _originRequest = new ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference(this, "origin_request");
    get originRequest() {
        return this._originRequest;
    }
    putOriginRequest(value) {
        this._originRequest.internalValue = value;
    }
    resetOriginRequest() {
        this._originRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get originRequestInput() {
        return this._originRequest.internalValue;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config}
*/
export class ZeroTrustTunnelCloudflaredConfigA extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_config";
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
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_config", importId: importFromId, provider });
    }
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
    constructor(scope, id, config) {
        super(scope, id, {
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
        });
        this._accountId = config.accountId;
        this._config.internalValue = config.config;
        this._source = config.source;
        this._tunnelId = config.tunnelId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // config - computed: true, optional: true, required: false
    _config = new ZeroTrustTunnelCloudflaredConfigConfigOutputReference(this, "config");
    get config() {
        return this._config;
    }
    putConfig(value) {
        this._config.internalValue = value;
    }
    resetConfig() {
        this._config.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configInput() {
        return this._config.internalValue;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // source - computed: true, optional: true, required: false
    _source;
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    // tunnel_id - computed: false, optional: false, required: true
    _tunnelId;
    get tunnelId() {
        return this.getStringAttribute('tunnel_id');
    }
    set tunnelId(value) {
        this._tunnelId = value;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelIdInput() {
        return this._tunnelId;
    }
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getNumberAttribute('version');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            config: zeroTrustTunnelCloudflaredConfigConfigToTerraform(this._config.internalValue),
            source: cdktf.stringToTerraform(this._source),
            tunnel_id: cdktf.stringToTerraform(this._tunnelId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
