import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LoadBalancerMonitorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#account_id LoadBalancerMonitor#account_id}
    */
    readonly accountId?: string;
    /**
    * Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#allow_insecure LoadBalancerMonitor#allow_insecure}
    */
    readonly allowInsecure?: boolean | cdktf.IResolvable;
    /**
    * To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#consecutive_down LoadBalancerMonitor#consecutive_down}
    */
    readonly consecutiveDown?: number;
    /**
    * To be marked healthy the monitored origin must pass this healthcheck N consecutive times.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#consecutive_up LoadBalancerMonitor#consecutive_up}
    */
    readonly consecutiveUp?: number;
    /**
    * Object description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#description LoadBalancerMonitor#description}
    */
    readonly description?: string;
    /**
    * A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#expected_body LoadBalancerMonitor#expected_body}
    */
    readonly expectedBody?: string;
    /**
    * The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#expected_codes LoadBalancerMonitor#expected_codes}
    */
    readonly expectedCodes?: string;
    /**
    * Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#follow_redirects LoadBalancerMonitor#follow_redirects}
    */
    readonly followRedirects?: boolean | cdktf.IResolvable;
    /**
    * The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#header LoadBalancerMonitor#header}
    */
    readonly header?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#interval LoadBalancerMonitor#interval}
    */
    readonly interval?: number;
    /**
    * The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#method LoadBalancerMonitor#method}
    */
    readonly method?: string;
    /**
    * The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#path LoadBalancerMonitor#path}
    */
    readonly path?: string;
    /**
    * The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: default 443).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#port LoadBalancerMonitor#port}
    */
    readonly port?: number;
    /**
    * Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#probe_zone LoadBalancerMonitor#probe_zone}
    */
    readonly probeZone?: string;
    /**
    * The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#retries LoadBalancerMonitor#retries}
    */
    readonly retries?: number;
    /**
    * The timeout (in seconds) before marking the health check as failed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#timeout LoadBalancerMonitor#timeout}
    */
    readonly timeout?: number;
    /**
    * The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
    * Available values: "http", "https", "tcp", "udp_icmp", "icmp_ping", "smtp".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#type LoadBalancerMonitor#type}
    */
    readonly type?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor cloudflare_load_balancer_monitor}
*/
export declare class LoadBalancerMonitor extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_load_balancer_monitor";
    /**
    * Generates CDKTF code for importing a LoadBalancerMonitor resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LoadBalancerMonitor to import
    * @param importFromId The id of the existing LoadBalancerMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LoadBalancerMonitor to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/load_balancer_monitor cloudflare_load_balancer_monitor} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerMonitorConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LoadBalancerMonitorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _allowInsecure?;
    get allowInsecure(): boolean | cdktf.IResolvable;
    set allowInsecure(value: boolean | cdktf.IResolvable);
    resetAllowInsecure(): void;
    get allowInsecureInput(): any;
    private _consecutiveDown?;
    get consecutiveDown(): number;
    set consecutiveDown(value: number);
    resetConsecutiveDown(): void;
    get consecutiveDownInput(): number;
    private _consecutiveUp?;
    get consecutiveUp(): number;
    set consecutiveUp(value: number);
    resetConsecutiveUp(): void;
    get consecutiveUpInput(): number;
    get createdOn(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _expectedBody?;
    get expectedBody(): string;
    set expectedBody(value: string);
    resetExpectedBody(): void;
    get expectedBodyInput(): string;
    private _expectedCodes?;
    get expectedCodes(): string;
    set expectedCodes(value: string);
    resetExpectedCodes(): void;
    get expectedCodesInput(): string;
    private _followRedirects?;
    get followRedirects(): boolean | cdktf.IResolvable;
    set followRedirects(value: boolean | cdktf.IResolvable);
    resetFollowRedirects(): void;
    get followRedirectsInput(): any;
    private _header?;
    get header(): {
        [key: string]: string[];
    } | cdktf.IResolvable;
    set header(value: {
        [key: string]: string[];
    } | cdktf.IResolvable);
    resetHeader(): void;
    get headerInput(): any;
    get id(): any;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number;
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string;
    get modifiedOn(): any;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _probeZone?;
    get probeZone(): string;
    set probeZone(value: string);
    resetProbeZone(): void;
    get probeZoneInput(): string;
    private _retries?;
    get retries(): number;
    set retries(value: number);
    resetRetries(): void;
    get retriesInput(): number;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
