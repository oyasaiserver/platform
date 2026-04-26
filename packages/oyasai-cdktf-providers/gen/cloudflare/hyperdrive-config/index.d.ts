import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface HyperdriveConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Define configurations using a unique string identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#account_id HyperdriveConfig#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}
    */
    readonly caching?: HyperdriveConfigCaching;
    /**
    * mTLS configuration for the origin connection. Cannot be used with VPC Service origins; TLS must be managed on the VPC Service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#mtls HyperdriveConfig#mtls}
    */
    readonly mtls?: HyperdriveConfigMtls;
    /**
    * The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#name HyperdriveConfig#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}
    */
    readonly origin: HyperdriveConfigOrigin;
    /**
    * The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.
    *
    * Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts.
    * If not specified, defaults to 20 for free tier and 60 for paid tier.
    * Contact Cloudflare if you need a higher limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#origin_connection_limit HyperdriveConfig#origin_connection_limit}
    */
    readonly originConnectionLimit?: number;
}
export interface HyperdriveConfigCaching {
    /**
    * Set to true to disable caching of SQL responses. Default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#disabled HyperdriveConfig#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Specify the maximum duration (in seconds) items should persist in the cache. Defaults to 60 seconds if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#max_age HyperdriveConfig#max_age}
    */
    readonly maxAge?: number;
    /**
    * Specify the number of seconds the cache may serve a stale response. Defaults to 15 seconds if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#stale_while_revalidate HyperdriveConfig#stale_while_revalidate}
    */
    readonly staleWhileRevalidate?: number;
}
export declare function hyperdriveConfigCachingToTerraform(struct?: HyperdriveConfigCaching | cdktf.IResolvable): any;
export declare function hyperdriveConfigCachingToHclTerraform(struct?: HyperdriveConfigCaching | cdktf.IResolvable): any;
export declare class HyperdriveConfigCachingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): HyperdriveConfigCaching | cdktf.IResolvable | undefined;
    set internalValue(value: HyperdriveConfigCaching | cdktf.IResolvable | undefined);
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): any;
    private _maxAge?;
    get maxAge(): number;
    set maxAge(value: number);
    resetMaxAge(): void;
    get maxAgeInput(): number;
    private _staleWhileRevalidate?;
    get staleWhileRevalidate(): number;
    set staleWhileRevalidate(value: number);
    resetStaleWhileRevalidate(): void;
    get staleWhileRevalidateInput(): number;
}
export interface HyperdriveConfigMtls {
    /**
    * Define CA certificate ID obtained after uploading CA cert.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#ca_certificate_id HyperdriveConfig#ca_certificate_id}
    */
    readonly caCertificateId?: string;
    /**
    * Define mTLS certificate ID obtained after uploading client cert.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#mtls_certificate_id HyperdriveConfig#mtls_certificate_id}
    */
    readonly mtlsCertificateId?: string;
    /**
    * Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#sslmode HyperdriveConfig#sslmode}
    */
    readonly sslmode?: string;
}
export declare function hyperdriveConfigMtlsToTerraform(struct?: HyperdriveConfigMtls | cdktf.IResolvable): any;
export declare function hyperdriveConfigMtlsToHclTerraform(struct?: HyperdriveConfigMtls | cdktf.IResolvable): any;
export declare class HyperdriveConfigMtlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): HyperdriveConfigMtls | cdktf.IResolvable | undefined;
    set internalValue(value: HyperdriveConfigMtls | cdktf.IResolvable | undefined);
    private _caCertificateId?;
    get caCertificateId(): string;
    set caCertificateId(value: string);
    resetCaCertificateId(): void;
    get caCertificateIdInput(): string;
    private _mtlsCertificateId?;
    get mtlsCertificateId(): string;
    set mtlsCertificateId(value: string);
    resetMtlsCertificateId(): void;
    get mtlsCertificateIdInput(): string;
    private _sslmode?;
    get sslmode(): string;
    set sslmode(value: string);
    resetSslmode(): void;
    get sslmodeInput(): string;
}
export interface HyperdriveConfigOrigin {
    /**
    * Defines the Client ID of the Access token to use when connecting to the origin database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#access_client_id HyperdriveConfig#access_client_id}
    */
    readonly accessClientId?: string;
    /**
    * Defines the Client Secret of the Access Token to use when connecting to the origin database. The API never returns this write-only value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#access_client_secret HyperdriveConfig#access_client_secret}
    */
    readonly accessClientSecret?: string;
    /**
    * Set the name of your origin database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#database HyperdriveConfig#database}
    */
    readonly database: string;
    /**
    * Defines the host (hostname or IP) of your origin database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#host HyperdriveConfig#host}
    */
    readonly host?: string;
    /**
    * Set the password needed to access your origin database. The API never returns this write-only value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#password HyperdriveConfig#password}
    */
    readonly password: string;
    /**
    * Defines the port of your origin database. Defaults to 5432 for PostgreSQL or 3306 for MySQL if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#port HyperdriveConfig#port}
    */
    readonly port?: number;
    /**
    * Specifies the URL scheme used to connect to your origin database.
    * Available values: "postgres", "postgresql", "mysql".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#scheme HyperdriveConfig#scheme}
    */
    readonly scheme: string;
    /**
    * The identifier of the Workers VPC Service to connect through. Hyperdrive will egress through the specified VPC Service to reach the origin database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#service_id HyperdriveConfig#service_id}
    */
    readonly serviceId?: string;
    /**
    * Set the user of your origin database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#user HyperdriveConfig#user}
    */
    readonly user: string;
}
export declare function hyperdriveConfigOriginToTerraform(struct?: HyperdriveConfigOrigin | cdktf.IResolvable): any;
export declare function hyperdriveConfigOriginToHclTerraform(struct?: HyperdriveConfigOrigin | cdktf.IResolvable): any;
export declare class HyperdriveConfigOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): HyperdriveConfigOrigin | cdktf.IResolvable | undefined;
    set internalValue(value: HyperdriveConfigOrigin | cdktf.IResolvable | undefined);
    private _accessClientId?;
    get accessClientId(): string;
    set accessClientId(value: string);
    resetAccessClientId(): void;
    get accessClientIdInput(): string;
    private _accessClientSecret?;
    get accessClientSecret(): string;
    set accessClientSecret(value: string);
    resetAccessClientSecret(): void;
    get accessClientSecretInput(): string;
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _scheme?;
    get scheme(): string;
    set scheme(value: string);
    get schemeInput(): string;
    private _serviceId?;
    get serviceId(): string;
    set serviceId(value: string);
    resetServiceId(): void;
    get serviceIdInput(): string;
    private _user?;
    get user(): string;
    set user(value: string);
    get userInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config cloudflare_hyperdrive_config}
*/
export declare class HyperdriveConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_hyperdrive_config";
    /**
    * Generates CDKTF code for importing a HyperdriveConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the HyperdriveConfig to import
    * @param importFromId The id of the existing HyperdriveConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the HyperdriveConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/hyperdrive_config cloudflare_hyperdrive_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options HyperdriveConfigConfig
    */
    constructor(scope: Construct, id: string, config: HyperdriveConfigConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _caching;
    get caching(): HyperdriveConfigCachingOutputReference;
    putCaching(value: HyperdriveConfigCaching): void;
    resetCaching(): void;
    get cachingInput(): any;
    get createdOn(): any;
    get id(): any;
    get modifiedOn(): any;
    private _mtls;
    get mtls(): HyperdriveConfigMtlsOutputReference;
    putMtls(value: HyperdriveConfigMtls): void;
    resetMtls(): void;
    get mtlsInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _origin;
    get origin(): HyperdriveConfigOriginOutputReference;
    putOrigin(value: HyperdriveConfigOrigin): void;
    get originInput(): any;
    private _originConnectionLimit?;
    get originConnectionLimit(): number;
    set originConnectionLimit(value: number);
    resetOriginConnectionLimit(): void;
    get originConnectionLimitInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
