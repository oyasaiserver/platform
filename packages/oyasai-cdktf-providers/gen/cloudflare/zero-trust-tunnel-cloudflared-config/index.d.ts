import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustTunnelCloudflaredConfigAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#account_id ZeroTrustTunnelCloudflaredConfigA#account_id}
    */
    readonly accountId?: string;
    /**
    * The tunnel configuration and ingress rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#config ZeroTrustTunnelCloudflaredConfigA#config}
    */
    readonly config?: ZeroTrustTunnelCloudflaredConfigConfig;
    /**
    * Indicates if this is a locally or remotely configured tunnel. If `local`, manage the tunnel using a YAML file on the origin machine. If `cloudflare`, manage the tunnel's configuration on the Zero Trust dashboard.
    * Available values: "local", "cloudflare".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#source ZeroTrustTunnelCloudflaredConfigA#source}
    */
    readonly source?: string;
    /**
    * UUID of the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#tunnel_id ZeroTrustTunnelCloudflaredConfigA#tunnel_id}
    */
    readonly tunnelId: string;
}
export interface ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess {
    /**
    * Access applications that are allowed to reach this hostname for this Tunnel. Audience tags can be identified in the dashboard or via the List Access policies API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#aud_tag ZeroTrustTunnelCloudflaredConfigA#aud_tag}
    */
    readonly audTag: string[];
    /**
    * Deny traffic that has not fulfilled Access authorization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#required ZeroTrustTunnelCloudflaredConfigA#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#team_name ZeroTrustTunnelCloudflaredConfigA#team_name}
    */
    readonly teamName: string;
}
export declare function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | cdktf.IResolvable): any;
export declare function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | cdktf.IResolvable): any;
export declare class ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | cdktf.IResolvable | undefined);
    private _audTag?;
    get audTag(): string[];
    set audTag(value: string[]);
    get audTagInput(): string[];
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    resetRequired(): void;
    get requiredInput(): any;
    private _teamName?;
    get teamName(): string;
    set teamName(value: string);
    get teamNameInput(): string;
}
export interface ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest {
    /**
    * For all L7 requests to this hostname, cloudflared will validate each request's Cf-Access-Jwt-Assertion request header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#access ZeroTrustTunnelCloudflaredConfigA#access}
    */
    readonly access?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess;
    /**
    * Path to the certificate authority (CA) for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#ca_pool ZeroTrustTunnelCloudflaredConfigA#ca_pool}
    */
    readonly caPool?: string;
    /**
    * Timeout for establishing a new TCP connection to your origin server. This excludes the time taken to establish TLS, which is controlled by tlsTimeout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#connect_timeout ZeroTrustTunnelCloudflaredConfigA#connect_timeout}
    */
    readonly connectTimeout?: number;
    /**
    * Disables chunked transfer encoding. Useful if you are running a WSGI server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#disable_chunked_encoding ZeroTrustTunnelCloudflaredConfigA#disable_chunked_encoding}
    */
    readonly disableChunkedEncoding?: boolean | cdktf.IResolvable;
    /**
    * Attempt to connect to origin using HTTP2. Origin must be configured as https.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#http2_origin ZeroTrustTunnelCloudflaredConfigA#http2_origin}
    */
    readonly http2Origin?: boolean | cdktf.IResolvable;
    /**
    * Sets the HTTP Host header on requests sent to the local service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#http_host_header ZeroTrustTunnelCloudflaredConfigA#http_host_header}
    */
    readonly httpHostHeader?: string;
    /**
    * Maximum number of idle keepalive connections between Tunnel and your origin. This does not restrict the total number of concurrent connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#keep_alive_connections ZeroTrustTunnelCloudflaredConfigA#keep_alive_connections}
    */
    readonly keepAliveConnections?: number;
    /**
    * Timeout after which an idle keepalive connection can be discarded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#keep_alive_timeout ZeroTrustTunnelCloudflaredConfigA#keep_alive_timeout}
    */
    readonly keepAliveTimeout?: number;
    /**
    * Auto configure the Hostname on the origin server certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#match_sn_ito_host ZeroTrustTunnelCloudflaredConfigA#match_sn_ito_host}
    */
    readonly matchSnItoHost?: boolean | cdktf.IResolvable;
    /**
    * Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#no_happy_eyeballs ZeroTrustTunnelCloudflaredConfigA#no_happy_eyeballs}
    */
    readonly noHappyEyeballs?: boolean | cdktf.IResolvable;
    /**
    * Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#no_tls_verify ZeroTrustTunnelCloudflaredConfigA#no_tls_verify}
    */
    readonly noTlsVerify?: boolean | cdktf.IResolvable;
    /**
    * Hostname that cloudflared should expect from your origin server certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#origin_server_name ZeroTrustTunnelCloudflaredConfigA#origin_server_name}
    */
    readonly originServerName?: string;
    /**
    * cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures what type of proxy will be started. Valid options are: "" for the regular proxy and "socks" for a SOCKS5 proxy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#proxy_type ZeroTrustTunnelCloudflaredConfigA#proxy_type}
    */
    readonly proxyType?: string;
    /**
    * The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#tcp_keep_alive ZeroTrustTunnelCloudflaredConfigA#tcp_keep_alive}
    */
    readonly tcpKeepAlive?: number;
    /**
    * Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#tls_timeout ZeroTrustTunnelCloudflaredConfigA#tls_timeout}
    */
    readonly tlsTimeout?: number;
}
export declare function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | cdktf.IResolvable): any;
export declare function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | cdktf.IResolvable): any;
export declare class ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | cdktf.IResolvable | undefined);
    private _access;
    get access(): ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference;
    putAccess(value: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess): void;
    resetAccess(): void;
    get accessInput(): any;
    private _caPool?;
    get caPool(): string;
    set caPool(value: string);
    resetCaPool(): void;
    get caPoolInput(): string;
    private _connectTimeout?;
    get connectTimeout(): number;
    set connectTimeout(value: number);
    resetConnectTimeout(): void;
    get connectTimeoutInput(): number;
    private _disableChunkedEncoding?;
    get disableChunkedEncoding(): boolean | cdktf.IResolvable;
    set disableChunkedEncoding(value: boolean | cdktf.IResolvable);
    resetDisableChunkedEncoding(): void;
    get disableChunkedEncodingInput(): any;
    private _http2Origin?;
    get http2Origin(): boolean | cdktf.IResolvable;
    set http2Origin(value: boolean | cdktf.IResolvable);
    resetHttp2Origin(): void;
    get http2OriginInput(): any;
    private _httpHostHeader?;
    get httpHostHeader(): string;
    set httpHostHeader(value: string);
    resetHttpHostHeader(): void;
    get httpHostHeaderInput(): string;
    private _keepAliveConnections?;
    get keepAliveConnections(): number;
    set keepAliveConnections(value: number);
    resetKeepAliveConnections(): void;
    get keepAliveConnectionsInput(): number;
    private _keepAliveTimeout?;
    get keepAliveTimeout(): number;
    set keepAliveTimeout(value: number);
    resetKeepAliveTimeout(): void;
    get keepAliveTimeoutInput(): number;
    private _matchSnItoHost?;
    get matchSnItoHost(): boolean | cdktf.IResolvable;
    set matchSnItoHost(value: boolean | cdktf.IResolvable);
    resetMatchSnItoHost(): void;
    get matchSnItoHostInput(): any;
    private _noHappyEyeballs?;
    get noHappyEyeballs(): boolean | cdktf.IResolvable;
    set noHappyEyeballs(value: boolean | cdktf.IResolvable);
    resetNoHappyEyeballs(): void;
    get noHappyEyeballsInput(): any;
    private _noTlsVerify?;
    get noTlsVerify(): boolean | cdktf.IResolvable;
    set noTlsVerify(value: boolean | cdktf.IResolvable);
    resetNoTlsVerify(): void;
    get noTlsVerifyInput(): any;
    private _originServerName?;
    get originServerName(): string;
    set originServerName(value: string);
    resetOriginServerName(): void;
    get originServerNameInput(): string;
    private _proxyType?;
    get proxyType(): string;
    set proxyType(value: string);
    resetProxyType(): void;
    get proxyTypeInput(): string;
    private _tcpKeepAlive?;
    get tcpKeepAlive(): number;
    set tcpKeepAlive(value: number);
    resetTcpKeepAlive(): void;
    get tcpKeepAliveInput(): number;
    private _tlsTimeout?;
    get tlsTimeout(): number;
    set tlsTimeout(value: number);
    resetTlsTimeout(): void;
    get tlsTimeoutInput(): number;
}
export interface ZeroTrustTunnelCloudflaredConfigConfigIngress {
    /**
    * Public hostname for this service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#hostname ZeroTrustTunnelCloudflaredConfigA#hostname}
    */
    readonly hostname?: string;
    /**
    * Configuration parameters for the public hostname specific connection settings between cloudflared and origin server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#origin_request ZeroTrustTunnelCloudflaredConfigA#origin_request}
    */
    readonly originRequest?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest;
    /**
    * Requests with this path route to this public hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#path ZeroTrustTunnelCloudflaredConfigA#path}
    */
    readonly path?: string;
    /**
    * Protocol and address of destination server. Supported protocols: http://, https://, unix://, tcp://, ssh://, rdp://, unix+tls://, smb://. Alternatively can return a HTTP status code http_status:[code] e.g. 'http_status:404'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#service ZeroTrustTunnelCloudflaredConfigA#service}
    */
    readonly service: string;
}
export declare function zeroTrustTunnelCloudflaredConfigConfigIngressToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngress | cdktf.IResolvable): any;
export declare function zeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngress | cdktf.IResolvable): any;
export declare class ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustTunnelCloudflaredConfigConfigIngress | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfigIngress | cdktf.IResolvable | undefined);
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _originRequest;
    get originRequest(): ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference;
    putOriginRequest(value: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest): void;
    resetOriginRequest(): void;
    get originRequestInput(): any;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _service?;
    get service(): string;
    set service(value: string);
    get serviceInput(): string;
}
export declare class ZeroTrustTunnelCloudflaredConfigConfigIngressList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustTunnelCloudflaredConfigConfigIngress[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference;
}
export interface ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess {
    /**
    * Access applications that are allowed to reach this hostname for this Tunnel. Audience tags can be identified in the dashboard or via the List Access policies API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#aud_tag ZeroTrustTunnelCloudflaredConfigA#aud_tag}
    */
    readonly audTag: string[];
    /**
    * Deny traffic that has not fulfilled Access authorization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#required ZeroTrustTunnelCloudflaredConfigA#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#team_name ZeroTrustTunnelCloudflaredConfigA#team_name}
    */
    readonly teamName: string;
}
export declare function zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | cdktf.IResolvable): any;
export declare function zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | cdktf.IResolvable): any;
export declare class ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | cdktf.IResolvable | undefined);
    private _audTag?;
    get audTag(): string[];
    set audTag(value: string[]);
    get audTagInput(): string[];
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    resetRequired(): void;
    get requiredInput(): any;
    private _teamName?;
    get teamName(): string;
    set teamName(value: string);
    get teamNameInput(): string;
}
export interface ZeroTrustTunnelCloudflaredConfigConfigOriginRequest {
    /**
    * For all L7 requests to this hostname, cloudflared will validate each request's Cf-Access-Jwt-Assertion request header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#access ZeroTrustTunnelCloudflaredConfigA#access}
    */
    readonly access?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess;
    /**
    * Path to the certificate authority (CA) for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#ca_pool ZeroTrustTunnelCloudflaredConfigA#ca_pool}
    */
    readonly caPool?: string;
    /**
    * Timeout for establishing a new TCP connection to your origin server. This excludes the time taken to establish TLS, which is controlled by tlsTimeout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#connect_timeout ZeroTrustTunnelCloudflaredConfigA#connect_timeout}
    */
    readonly connectTimeout?: number;
    /**
    * Disables chunked transfer encoding. Useful if you are running a WSGI server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#disable_chunked_encoding ZeroTrustTunnelCloudflaredConfigA#disable_chunked_encoding}
    */
    readonly disableChunkedEncoding?: boolean | cdktf.IResolvable;
    /**
    * Attempt to connect to origin using HTTP2. Origin must be configured as https.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#http2_origin ZeroTrustTunnelCloudflaredConfigA#http2_origin}
    */
    readonly http2Origin?: boolean | cdktf.IResolvable;
    /**
    * Sets the HTTP Host header on requests sent to the local service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#http_host_header ZeroTrustTunnelCloudflaredConfigA#http_host_header}
    */
    readonly httpHostHeader?: string;
    /**
    * Maximum number of idle keepalive connections between Tunnel and your origin. This does not restrict the total number of concurrent connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#keep_alive_connections ZeroTrustTunnelCloudflaredConfigA#keep_alive_connections}
    */
    readonly keepAliveConnections?: number;
    /**
    * Timeout after which an idle keepalive connection can be discarded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#keep_alive_timeout ZeroTrustTunnelCloudflaredConfigA#keep_alive_timeout}
    */
    readonly keepAliveTimeout?: number;
    /**
    * Auto configure the Hostname on the origin server certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#match_sn_ito_host ZeroTrustTunnelCloudflaredConfigA#match_sn_ito_host}
    */
    readonly matchSnItoHost?: boolean | cdktf.IResolvable;
    /**
    * Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#no_happy_eyeballs ZeroTrustTunnelCloudflaredConfigA#no_happy_eyeballs}
    */
    readonly noHappyEyeballs?: boolean | cdktf.IResolvable;
    /**
    * Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#no_tls_verify ZeroTrustTunnelCloudflaredConfigA#no_tls_verify}
    */
    readonly noTlsVerify?: boolean | cdktf.IResolvable;
    /**
    * Hostname that cloudflared should expect from your origin server certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#origin_server_name ZeroTrustTunnelCloudflaredConfigA#origin_server_name}
    */
    readonly originServerName?: string;
    /**
    * cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures what type of proxy will be started. Valid options are: "" for the regular proxy and "socks" for a SOCKS5 proxy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#proxy_type ZeroTrustTunnelCloudflaredConfigA#proxy_type}
    */
    readonly proxyType?: string;
    /**
    * The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#tcp_keep_alive ZeroTrustTunnelCloudflaredConfigA#tcp_keep_alive}
    */
    readonly tcpKeepAlive?: number;
    /**
    * Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#tls_timeout ZeroTrustTunnelCloudflaredConfigA#tls_timeout}
    */
    readonly tlsTimeout?: number;
}
export declare function zeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequest | cdktf.IResolvable): any;
export declare function zeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequest | cdktf.IResolvable): any;
export declare class ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustTunnelCloudflaredConfigConfigOriginRequest | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfigOriginRequest | cdktf.IResolvable | undefined);
    private _access;
    get access(): ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference;
    putAccess(value: ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess): void;
    resetAccess(): void;
    get accessInput(): any;
    private _caPool?;
    get caPool(): string;
    set caPool(value: string);
    resetCaPool(): void;
    get caPoolInput(): string;
    private _connectTimeout?;
    get connectTimeout(): number;
    set connectTimeout(value: number);
    resetConnectTimeout(): void;
    get connectTimeoutInput(): number;
    private _disableChunkedEncoding?;
    get disableChunkedEncoding(): boolean | cdktf.IResolvable;
    set disableChunkedEncoding(value: boolean | cdktf.IResolvable);
    resetDisableChunkedEncoding(): void;
    get disableChunkedEncodingInput(): any;
    private _http2Origin?;
    get http2Origin(): boolean | cdktf.IResolvable;
    set http2Origin(value: boolean | cdktf.IResolvable);
    resetHttp2Origin(): void;
    get http2OriginInput(): any;
    private _httpHostHeader?;
    get httpHostHeader(): string;
    set httpHostHeader(value: string);
    resetHttpHostHeader(): void;
    get httpHostHeaderInput(): string;
    private _keepAliveConnections?;
    get keepAliveConnections(): number;
    set keepAliveConnections(value: number);
    resetKeepAliveConnections(): void;
    get keepAliveConnectionsInput(): number;
    private _keepAliveTimeout?;
    get keepAliveTimeout(): number;
    set keepAliveTimeout(value: number);
    resetKeepAliveTimeout(): void;
    get keepAliveTimeoutInput(): number;
    private _matchSnItoHost?;
    get matchSnItoHost(): boolean | cdktf.IResolvable;
    set matchSnItoHost(value: boolean | cdktf.IResolvable);
    resetMatchSnItoHost(): void;
    get matchSnItoHostInput(): any;
    private _noHappyEyeballs?;
    get noHappyEyeballs(): boolean | cdktf.IResolvable;
    set noHappyEyeballs(value: boolean | cdktf.IResolvable);
    resetNoHappyEyeballs(): void;
    get noHappyEyeballsInput(): any;
    private _noTlsVerify?;
    get noTlsVerify(): boolean | cdktf.IResolvable;
    set noTlsVerify(value: boolean | cdktf.IResolvable);
    resetNoTlsVerify(): void;
    get noTlsVerifyInput(): any;
    private _originServerName?;
    get originServerName(): string;
    set originServerName(value: string);
    resetOriginServerName(): void;
    get originServerNameInput(): string;
    private _proxyType?;
    get proxyType(): string;
    set proxyType(value: string);
    resetProxyType(): void;
    get proxyTypeInput(): string;
    private _tcpKeepAlive?;
    get tcpKeepAlive(): number;
    set tcpKeepAlive(value: number);
    resetTcpKeepAlive(): void;
    get tcpKeepAliveInput(): number;
    private _tlsTimeout?;
    get tlsTimeout(): number;
    set tlsTimeout(value: number);
    resetTlsTimeout(): void;
    get tlsTimeoutInput(): number;
}
export interface ZeroTrustTunnelCloudflaredConfigConfig {
    /**
    * List of public hostname definitions. At least one ingress rule needs to be defined for the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#ingress ZeroTrustTunnelCloudflaredConfigA#ingress}
    */
    readonly ingress?: ZeroTrustTunnelCloudflaredConfigConfigIngress[] | cdktf.IResolvable;
    /**
    * Configuration parameters for the public hostname specific connection settings between cloudflared and origin server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#origin_request ZeroTrustTunnelCloudflaredConfigA#origin_request}
    */
    readonly originRequest?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequest;
}
export declare function zeroTrustTunnelCloudflaredConfigConfigToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfig | cdktf.IResolvable): any;
export declare function zeroTrustTunnelCloudflaredConfigConfigToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfig | cdktf.IResolvable): any;
export declare class ZeroTrustTunnelCloudflaredConfigConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustTunnelCloudflaredConfigConfig | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfig | cdktf.IResolvable | undefined);
    private _ingress;
    get ingress(): ZeroTrustTunnelCloudflaredConfigConfigIngressList;
    putIngress(value: ZeroTrustTunnelCloudflaredConfigConfigIngress[] | cdktf.IResolvable): void;
    resetIngress(): void;
    get ingressInput(): any;
    private _originRequest;
    get originRequest(): ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference;
    putOriginRequest(value: ZeroTrustTunnelCloudflaredConfigConfigOriginRequest): void;
    resetOriginRequest(): void;
    get originRequestInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config}
*/
export declare class ZeroTrustTunnelCloudflaredConfigA extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_config";
    /**
    * Generates CDKTF code for importing a ZeroTrustTunnelCloudflaredConfigA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustTunnelCloudflaredConfigA to import
    * @param importFromId The id of the existing ZeroTrustTunnelCloudflaredConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustTunnelCloudflaredConfigA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustTunnelCloudflaredConfigAConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustTunnelCloudflaredConfigAConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _config;
    get config(): ZeroTrustTunnelCloudflaredConfigConfigOutputReference;
    putConfig(value: ZeroTrustTunnelCloudflaredConfigConfig): void;
    resetConfig(): void;
    get configInput(): any;
    get createdAt(): any;
    get id(): any;
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string;
    private _tunnelId?;
    get tunnelId(): string;
    set tunnelId(value: string);
    get tunnelIdInput(): string;
    get version(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
