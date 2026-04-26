import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectivityDirectoryServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#account_id ConnectivityDirectoryService#account_id}
    */
    readonly accountId?: string;
    /**
    * Available values: "postgresql", "mysql".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#app_protocol ConnectivityDirectoryService#app_protocol}
    */
    readonly appProtocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#host ConnectivityDirectoryService#host}
    */
    readonly host: ConnectivityDirectoryServiceHost;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#http_port ConnectivityDirectoryService#http_port}
    */
    readonly httpPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#https_port ConnectivityDirectoryService#https_port}
    */
    readonly httpsPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#name ConnectivityDirectoryService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#tcp_port ConnectivityDirectoryService#tcp_port}
    */
    readonly tcpPort?: number;
    /**
    * TLS settings for a connectivity service.
    *
    * If omitted, the default mode (`verify_full`) is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#tls_settings ConnectivityDirectoryService#tls_settings}
    */
    readonly tlsSettings?: ConnectivityDirectoryServiceTlsSettings;
    /**
    * Available values: "tcp", "http".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#type ConnectivityDirectoryService#type}
    */
    readonly type: string;
}
export interface ConnectivityDirectoryServiceHostNetwork {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}
    */
    readonly tunnelId: string;
}
export declare function connectivityDirectoryServiceHostNetworkToTerraform(struct?: ConnectivityDirectoryServiceHostNetwork | cdktf.IResolvable): any;
export declare function connectivityDirectoryServiceHostNetworkToHclTerraform(struct?: ConnectivityDirectoryServiceHostNetwork | cdktf.IResolvable): any;
export declare class ConnectivityDirectoryServiceHostNetworkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectivityDirectoryServiceHostNetwork | cdktf.IResolvable | undefined;
    set internalValue(value: ConnectivityDirectoryServiceHostNetwork | cdktf.IResolvable | undefined);
    private _tunnelId?;
    get tunnelId(): string;
    set tunnelId(value: string);
    get tunnelIdInput(): string;
}
export interface ConnectivityDirectoryServiceHostResolverNetwork {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#resolver_ips ConnectivityDirectoryService#resolver_ips}
    */
    readonly resolverIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}
    */
    readonly tunnelId: string;
}
export declare function connectivityDirectoryServiceHostResolverNetworkToTerraform(struct?: ConnectivityDirectoryServiceHostResolverNetwork | cdktf.IResolvable): any;
export declare function connectivityDirectoryServiceHostResolverNetworkToHclTerraform(struct?: ConnectivityDirectoryServiceHostResolverNetwork | cdktf.IResolvable): any;
export declare class ConnectivityDirectoryServiceHostResolverNetworkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectivityDirectoryServiceHostResolverNetwork | cdktf.IResolvable | undefined;
    set internalValue(value: ConnectivityDirectoryServiceHostResolverNetwork | cdktf.IResolvable | undefined);
    private _resolverIps?;
    get resolverIps(): string[];
    set resolverIps(value: string[]);
    resetResolverIps(): void;
    get resolverIpsInput(): string[];
    private _tunnelId?;
    get tunnelId(): string;
    set tunnelId(value: string);
    get tunnelIdInput(): string;
}
export interface ConnectivityDirectoryServiceHost {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#hostname ConnectivityDirectoryService#hostname}
    */
    readonly hostname?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#ipv4 ConnectivityDirectoryService#ipv4}
    */
    readonly ipv4?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#ipv6 ConnectivityDirectoryService#ipv6}
    */
    readonly ipv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#network ConnectivityDirectoryService#network}
    */
    readonly network?: ConnectivityDirectoryServiceHostNetwork;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#resolver_network ConnectivityDirectoryService#resolver_network}
    */
    readonly resolverNetwork?: ConnectivityDirectoryServiceHostResolverNetwork;
}
export declare function connectivityDirectoryServiceHostToTerraform(struct?: ConnectivityDirectoryServiceHost | cdktf.IResolvable): any;
export declare function connectivityDirectoryServiceHostToHclTerraform(struct?: ConnectivityDirectoryServiceHost | cdktf.IResolvable): any;
export declare class ConnectivityDirectoryServiceHostOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectivityDirectoryServiceHost | cdktf.IResolvable | undefined;
    set internalValue(value: ConnectivityDirectoryServiceHost | cdktf.IResolvable | undefined);
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _ipv4?;
    get ipv4(): string;
    set ipv4(value: string);
    resetIpv4(): void;
    get ipv4Input(): string;
    private _ipv6?;
    get ipv6(): string;
    set ipv6(value: string);
    resetIpv6(): void;
    get ipv6Input(): string;
    private _network;
    get network(): ConnectivityDirectoryServiceHostNetworkOutputReference;
    putNetwork(value: ConnectivityDirectoryServiceHostNetwork): void;
    resetNetwork(): void;
    get networkInput(): any;
    private _resolverNetwork;
    get resolverNetwork(): ConnectivityDirectoryServiceHostResolverNetworkOutputReference;
    putResolverNetwork(value: ConnectivityDirectoryServiceHostResolverNetwork): void;
    resetResolverNetwork(): void;
    get resolverNetworkInput(): any;
}
export interface ConnectivityDirectoryServiceTlsSettings {
    /**
    * TLS certificate verification mode for the connection to the origin.
    *
    * - `"verify_full"` — verify certificate chain and hostname (default)
    * - `"verify_ca"` — verify certificate chain only, skip hostname check
    * - `"disabled"` — do not verify the server certificate at all
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#cert_verification_mode ConnectivityDirectoryService#cert_verification_mode}
    */
    readonly certVerificationMode: string;
}
export declare function connectivityDirectoryServiceTlsSettingsToTerraform(struct?: ConnectivityDirectoryServiceTlsSettings | cdktf.IResolvable): any;
export declare function connectivityDirectoryServiceTlsSettingsToHclTerraform(struct?: ConnectivityDirectoryServiceTlsSettings | cdktf.IResolvable): any;
export declare class ConnectivityDirectoryServiceTlsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectivityDirectoryServiceTlsSettings | cdktf.IResolvable | undefined;
    set internalValue(value: ConnectivityDirectoryServiceTlsSettings | cdktf.IResolvable | undefined);
    private _certVerificationMode?;
    get certVerificationMode(): string;
    set certVerificationMode(value: string);
    get certVerificationModeInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service cloudflare_connectivity_directory_service}
*/
export declare class ConnectivityDirectoryService extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_connectivity_directory_service";
    /**
    * Generates CDKTF code for importing a ConnectivityDirectoryService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectivityDirectoryService to import
    * @param importFromId The id of the existing ConnectivityDirectoryService that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectivityDirectoryService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/connectivity_directory_service cloudflare_connectivity_directory_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectivityDirectoryServiceConfig
    */
    constructor(scope: Construct, id: string, config: ConnectivityDirectoryServiceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _appProtocol?;
    get appProtocol(): string;
    set appProtocol(value: string);
    resetAppProtocol(): void;
    get appProtocolInput(): string;
    get createdAt(): any;
    private _host;
    get host(): ConnectivityDirectoryServiceHostOutputReference;
    putHost(value: ConnectivityDirectoryServiceHost): void;
    get hostInput(): any;
    private _httpPort?;
    get httpPort(): number;
    set httpPort(value: number);
    resetHttpPort(): void;
    get httpPortInput(): number;
    private _httpsPort?;
    get httpsPort(): number;
    set httpsPort(value: number);
    resetHttpsPort(): void;
    get httpsPortInput(): number;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get serviceId(): any;
    private _tcpPort?;
    get tcpPort(): number;
    set tcpPort(value: number);
    resetTcpPort(): void;
    get tcpPortInput(): number;
    private _tlsSettings;
    get tlsSettings(): ConnectivityDirectoryServiceTlsSettingsOutputReference;
    putTlsSettings(value: ConnectivityDirectoryServiceTlsSettings): void;
    resetTlsSettings(): void;
    get tlsSettingsInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
