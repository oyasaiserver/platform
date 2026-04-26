import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface HealthcheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * The hostname or IP address of the origin server to run health checks on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#address Healthcheck#address}
    */
    readonly address: string;
    /**
    * A list of regions from which to run health checks. Null means Cloudflare will pick a default region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#check_regions Healthcheck#check_regions}
    */
    readonly checkRegions?: string[];
    /**
    * The number of consecutive fails required from a health check before changing the health to unhealthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#consecutive_fails Healthcheck#consecutive_fails}
    */
    readonly consecutiveFails?: number;
    /**
    * The number of consecutive successes required from a health check before changing the health to healthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#consecutive_successes Healthcheck#consecutive_successes}
    */
    readonly consecutiveSuccesses?: number;
    /**
    * A human-readable description of the health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#description Healthcheck#description}
    */
    readonly description?: string;
    /**
    * Parameters specific to an HTTP or HTTPS health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#http_config Healthcheck#http_config}
    */
    readonly httpConfig?: HealthcheckHttpConfig;
    /**
    * The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#interval Healthcheck#interval}
    */
    readonly interval?: number;
    /**
    * A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#name Healthcheck#name}
    */
    readonly name: string;
    /**
    * The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#retries Healthcheck#retries}
    */
    readonly retries?: number;
    /**
    * If suspended, no health checks are sent to the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#suspended Healthcheck#suspended}
    */
    readonly suspended?: boolean | cdktf.IResolvable;
    /**
    * Parameters specific to TCP health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#tcp_config Healthcheck#tcp_config}
    */
    readonly tcpConfig?: HealthcheckTcpConfig;
    /**
    * The timeout (in seconds) before marking the health check as failed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#timeout Healthcheck#timeout}
    */
    readonly timeout?: number;
    /**
    * The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#type Healthcheck#type}
    */
    readonly type?: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#zone_id Healthcheck#zone_id}
    */
    readonly zoneId?: string;
}
export interface HealthcheckHttpConfig {
    /**
    * Do not validate the certificate when the health check uses HTTPS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#allow_insecure Healthcheck#allow_insecure}
    */
    readonly allowInsecure?: boolean | cdktf.IResolvable;
    /**
    * A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#expected_body Healthcheck#expected_body}
    */
    readonly expectedBody?: string;
    /**
    * The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#expected_codes Healthcheck#expected_codes}
    */
    readonly expectedCodes?: string[];
    /**
    * Follow redirects if the origin returns a 3xx status code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#follow_redirects Healthcheck#follow_redirects}
    */
    readonly followRedirects?: boolean | cdktf.IResolvable;
    /**
    * The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#header Healthcheck#header}
    */
    readonly header?: {
        [key: string]: string[];
    } | cdktf.IResolvable;
    /**
    * The HTTP method to use for the health check.
    * Available values: "GET", "HEAD".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#method Healthcheck#method}
    */
    readonly method?: string;
    /**
    * The endpoint path to health check against.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#path Healthcheck#path}
    */
    readonly path?: string;
    /**
    * Port number to connect to for the health check. Defaults to 80 if type is HTTP or 443 if type is HTTPS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#port Healthcheck#port}
    */
    readonly port?: number;
}
export declare function healthcheckHttpConfigToTerraform(struct?: HealthcheckHttpConfig | cdktf.IResolvable): any;
export declare function healthcheckHttpConfigToHclTerraform(struct?: HealthcheckHttpConfig | cdktf.IResolvable): any;
export declare class HealthcheckHttpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): HealthcheckHttpConfig | cdktf.IResolvable | undefined;
    set internalValue(value: HealthcheckHttpConfig | cdktf.IResolvable | undefined);
    private _allowInsecure?;
    get allowInsecure(): boolean | cdktf.IResolvable;
    set allowInsecure(value: boolean | cdktf.IResolvable);
    resetAllowInsecure(): void;
    get allowInsecureInput(): any;
    private _expectedBody?;
    get expectedBody(): string;
    set expectedBody(value: string);
    resetExpectedBody(): void;
    get expectedBodyInput(): string;
    private _expectedCodes?;
    get expectedCodes(): string[];
    set expectedCodes(value: string[]);
    resetExpectedCodes(): void;
    get expectedCodesInput(): string[];
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
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string;
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
}
export interface HealthcheckTcpConfig {
    /**
    * The TCP connection method to use for the health check.
    * Available values: "connection_established".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#method Healthcheck#method}
    */
    readonly method?: string;
    /**
    * Port number to connect to for the health check. Defaults to 80.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#port Healthcheck#port}
    */
    readonly port?: number;
}
export declare function healthcheckTcpConfigToTerraform(struct?: HealthcheckTcpConfig | cdktf.IResolvable): any;
export declare function healthcheckTcpConfigToHclTerraform(struct?: HealthcheckTcpConfig | cdktf.IResolvable): any;
export declare class HealthcheckTcpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): HealthcheckTcpConfig | cdktf.IResolvable | undefined;
    set internalValue(value: HealthcheckTcpConfig | cdktf.IResolvable | undefined);
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck cloudflare_healthcheck}
*/
export declare class Healthcheck extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_healthcheck";
    /**
    * Generates CDKTF code for importing a Healthcheck resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Healthcheck to import
    * @param importFromId The id of the existing Healthcheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Healthcheck to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/healthcheck cloudflare_healthcheck} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options HealthcheckConfig
    */
    constructor(scope: Construct, id: string, config: HealthcheckConfig);
    private _address?;
    get address(): string;
    set address(value: string);
    get addressInput(): string;
    private _checkRegions?;
    get checkRegions(): string[];
    set checkRegions(value: string[]);
    resetCheckRegions(): void;
    get checkRegionsInput(): string[];
    private _consecutiveFails?;
    get consecutiveFails(): number;
    set consecutiveFails(value: number);
    resetConsecutiveFails(): void;
    get consecutiveFailsInput(): number;
    private _consecutiveSuccesses?;
    get consecutiveSuccesses(): number;
    set consecutiveSuccesses(value: number);
    resetConsecutiveSuccesses(): void;
    get consecutiveSuccessesInput(): number;
    get createdOn(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get failureReason(): any;
    private _httpConfig;
    get httpConfig(): HealthcheckHttpConfigOutputReference;
    putHttpConfig(value: HealthcheckHttpConfig): void;
    resetHttpConfig(): void;
    get httpConfigInput(): any;
    get id(): any;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _retries?;
    get retries(): number;
    set retries(value: number);
    resetRetries(): void;
    get retriesInput(): number;
    get status(): any;
    private _suspended?;
    get suspended(): boolean | cdktf.IResolvable;
    set suspended(value: boolean | cdktf.IResolvable);
    resetSuspended(): void;
    get suspendedInput(): any;
    private _tcpConfig;
    get tcpConfig(): HealthcheckTcpConfigOutputReference;
    putTcpConfig(value: HealthcheckTcpConfig): void;
    resetTcpConfig(): void;
    get tcpConfigInput(): any;
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
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
