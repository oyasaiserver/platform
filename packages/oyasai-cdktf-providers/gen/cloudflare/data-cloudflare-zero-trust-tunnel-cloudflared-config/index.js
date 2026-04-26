// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // aud_tag - computed: true, optional: false, required: false
    get audTag() {
        return this.getListAttribute('aud_tag');
    }
    // required - computed: true, optional: false, required: false
    get required() {
        return this.getBooleanAttribute('required');
    }
    // team_name - computed: true, optional: false, required: false
    get teamName() {
        return this.getStringAttribute('team_name');
    }
}
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // access - computed: true, optional: false, required: false
    _access = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference(this, "access");
    get access() {
        return this._access;
    }
    // ca_pool - computed: true, optional: false, required: false
    get caPool() {
        return this.getStringAttribute('ca_pool');
    }
    // connect_timeout - computed: true, optional: false, required: false
    get connectTimeout() {
        return this.getNumberAttribute('connect_timeout');
    }
    // disable_chunked_encoding - computed: true, optional: false, required: false
    get disableChunkedEncoding() {
        return this.getBooleanAttribute('disable_chunked_encoding');
    }
    // http2_origin - computed: true, optional: false, required: false
    get http2Origin() {
        return this.getBooleanAttribute('http2_origin');
    }
    // http_host_header - computed: true, optional: false, required: false
    get httpHostHeader() {
        return this.getStringAttribute('http_host_header');
    }
    // keep_alive_connections - computed: true, optional: false, required: false
    get keepAliveConnections() {
        return this.getNumberAttribute('keep_alive_connections');
    }
    // keep_alive_timeout - computed: true, optional: false, required: false
    get keepAliveTimeout() {
        return this.getNumberAttribute('keep_alive_timeout');
    }
    // match_sn_ito_host - computed: true, optional: false, required: false
    get matchSnItoHost() {
        return this.getBooleanAttribute('match_sn_ito_host');
    }
    // no_happy_eyeballs - computed: true, optional: false, required: false
    get noHappyEyeballs() {
        return this.getBooleanAttribute('no_happy_eyeballs');
    }
    // no_tls_verify - computed: true, optional: false, required: false
    get noTlsVerify() {
        return this.getBooleanAttribute('no_tls_verify');
    }
    // origin_server_name - computed: true, optional: false, required: false
    get originServerName() {
        return this.getStringAttribute('origin_server_name');
    }
    // proxy_type - computed: true, optional: false, required: false
    get proxyType() {
        return this.getStringAttribute('proxy_type');
    }
    // tcp_keep_alive - computed: true, optional: false, required: false
    get tcpKeepAlive() {
        return this.getNumberAttribute('tcp_keep_alive');
    }
    // tls_timeout - computed: true, optional: false, required: false
    get tlsTimeout() {
        return this.getNumberAttribute('tls_timeout');
    }
}
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
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
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    // origin_request - computed: true, optional: false, required: false
    _originRequest = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference(this, "origin_request");
    get originRequest() {
        return this._originRequest;
    }
    // path - computed: true, optional: false, required: false
    get path() {
        return this.getStringAttribute('path');
    }
    // service - computed: true, optional: false, required: false
    get service() {
        return this.getStringAttribute('service');
    }
}
export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
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
        return new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // aud_tag - computed: true, optional: false, required: false
    get audTag() {
        return this.getListAttribute('aud_tag');
    }
    // required - computed: true, optional: false, required: false
    get required() {
        return this.getBooleanAttribute('required');
    }
    // team_name - computed: true, optional: false, required: false
    get teamName() {
        return this.getStringAttribute('team_name');
    }
}
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // access - computed: true, optional: false, required: false
    _access = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference(this, "access");
    get access() {
        return this._access;
    }
    // ca_pool - computed: true, optional: false, required: false
    get caPool() {
        return this.getStringAttribute('ca_pool');
    }
    // connect_timeout - computed: true, optional: false, required: false
    get connectTimeout() {
        return this.getNumberAttribute('connect_timeout');
    }
    // disable_chunked_encoding - computed: true, optional: false, required: false
    get disableChunkedEncoding() {
        return this.getBooleanAttribute('disable_chunked_encoding');
    }
    // http2_origin - computed: true, optional: false, required: false
    get http2Origin() {
        return this.getBooleanAttribute('http2_origin');
    }
    // http_host_header - computed: true, optional: false, required: false
    get httpHostHeader() {
        return this.getStringAttribute('http_host_header');
    }
    // keep_alive_connections - computed: true, optional: false, required: false
    get keepAliveConnections() {
        return this.getNumberAttribute('keep_alive_connections');
    }
    // keep_alive_timeout - computed: true, optional: false, required: false
    get keepAliveTimeout() {
        return this.getNumberAttribute('keep_alive_timeout');
    }
    // match_sn_ito_host - computed: true, optional: false, required: false
    get matchSnItoHost() {
        return this.getBooleanAttribute('match_sn_ito_host');
    }
    // no_happy_eyeballs - computed: true, optional: false, required: false
    get noHappyEyeballs() {
        return this.getBooleanAttribute('no_happy_eyeballs');
    }
    // no_tls_verify - computed: true, optional: false, required: false
    get noTlsVerify() {
        return this.getBooleanAttribute('no_tls_verify');
    }
    // origin_server_name - computed: true, optional: false, required: false
    get originServerName() {
        return this.getStringAttribute('origin_server_name');
    }
    // proxy_type - computed: true, optional: false, required: false
    get proxyType() {
        return this.getStringAttribute('proxy_type');
    }
    // tcp_keep_alive - computed: true, optional: false, required: false
    get tcpKeepAlive() {
        return this.getNumberAttribute('tcp_keep_alive');
    }
    // tls_timeout - computed: true, optional: false, required: false
    get tlsTimeout() {
        return this.getNumberAttribute('tls_timeout');
    }
}
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // ingress - computed: true, optional: false, required: false
    _ingress = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList(this, "ingress", false);
    get ingress() {
        return this._ingress;
    }
    // origin_request - computed: true, optional: false, required: false
    _originRequest = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference(this, "origin_request");
    get originRequest() {
        return this._originRequest;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config}
*/
export class DataCloudflareZeroTrustTunnelCloudflaredConfigA extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_config";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredConfigA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredConfigA to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredConfigA to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_config", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredConfigAConfig
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
    // config - computed: true, optional: false, required: false
    _config = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference(this, "config");
    get config() {
        return this._config;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // source - computed: true, optional: false, required: false
    get source() {
        return this.getStringAttribute('source');
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
