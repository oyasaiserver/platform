import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareConnectivityDirectoryServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_service#account_id DataCloudflareConnectivityDirectoryService#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_service#filter DataCloudflareConnectivityDirectoryService#filter}
    */
    readonly filter?: DataCloudflareConnectivityDirectoryServiceFilter;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_service#service_id DataCloudflareConnectivityDirectoryService#service_id}
    */
    readonly serviceId?: string;
}
export interface DataCloudflareConnectivityDirectoryServiceFilter {
    /**
    * Available values: "tcp", "http".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_service#type DataCloudflareConnectivityDirectoryService#type}
    */
    readonly type?: string;
}
export declare function dataCloudflareConnectivityDirectoryServiceFilterToTerraform(struct?: DataCloudflareConnectivityDirectoryServiceFilter | cdktf.IResolvable): any;
export declare function dataCloudflareConnectivityDirectoryServiceFilterToHclTerraform(struct?: DataCloudflareConnectivityDirectoryServiceFilter | cdktf.IResolvable): any;
export declare class DataCloudflareConnectivityDirectoryServiceFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareConnectivityDirectoryServiceFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareConnectivityDirectoryServiceFilter | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface DataCloudflareConnectivityDirectoryServiceHostNetwork {
}
export declare function dataCloudflareConnectivityDirectoryServiceHostNetworkToTerraform(struct?: DataCloudflareConnectivityDirectoryServiceHostNetwork): any;
export declare function dataCloudflareConnectivityDirectoryServiceHostNetworkToHclTerraform(struct?: DataCloudflareConnectivityDirectoryServiceHostNetwork): any;
export declare class DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareConnectivityDirectoryServiceHostNetwork | undefined;
    set internalValue(value: DataCloudflareConnectivityDirectoryServiceHostNetwork | undefined);
    get tunnelId(): any;
}
export interface DataCloudflareConnectivityDirectoryServiceHostResolverNetwork {
}
export declare function dataCloudflareConnectivityDirectoryServiceHostResolverNetworkToTerraform(struct?: DataCloudflareConnectivityDirectoryServiceHostResolverNetwork): any;
export declare function dataCloudflareConnectivityDirectoryServiceHostResolverNetworkToHclTerraform(struct?: DataCloudflareConnectivityDirectoryServiceHostResolverNetwork): any;
export declare class DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareConnectivityDirectoryServiceHostResolverNetwork | undefined;
    set internalValue(value: DataCloudflareConnectivityDirectoryServiceHostResolverNetwork | undefined);
    get resolverIps(): any;
    get tunnelId(): any;
}
export interface DataCloudflareConnectivityDirectoryServiceHost {
}
export declare function dataCloudflareConnectivityDirectoryServiceHostToTerraform(struct?: DataCloudflareConnectivityDirectoryServiceHost): any;
export declare function dataCloudflareConnectivityDirectoryServiceHostToHclTerraform(struct?: DataCloudflareConnectivityDirectoryServiceHost): any;
export declare class DataCloudflareConnectivityDirectoryServiceHostOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareConnectivityDirectoryServiceHost | undefined;
    set internalValue(value: DataCloudflareConnectivityDirectoryServiceHost | undefined);
    get hostname(): any;
    get ipv4(): any;
    get ipv6(): any;
    private _network;
    get network(): DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference;
    private _resolverNetwork;
    get resolverNetwork(): DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference;
}
export interface DataCloudflareConnectivityDirectoryServiceTlsSettings {
}
export declare function dataCloudflareConnectivityDirectoryServiceTlsSettingsToTerraform(struct?: DataCloudflareConnectivityDirectoryServiceTlsSettings): any;
export declare function dataCloudflareConnectivityDirectoryServiceTlsSettingsToHclTerraform(struct?: DataCloudflareConnectivityDirectoryServiceTlsSettings): any;
export declare class DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareConnectivityDirectoryServiceTlsSettings | undefined;
    set internalValue(value: DataCloudflareConnectivityDirectoryServiceTlsSettings | undefined);
    get certVerificationMode(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_service cloudflare_connectivity_directory_service}
*/
export declare class DataCloudflareConnectivityDirectoryService extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_connectivity_directory_service";
    /**
    * Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareConnectivityDirectoryService to import
    * @param importFromId The id of the existing DataCloudflareConnectivityDirectoryService that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareConnectivityDirectoryService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_service cloudflare_connectivity_directory_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareConnectivityDirectoryServiceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareConnectivityDirectoryServiceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get appProtocol(): any;
    get createdAt(): any;
    private _filter;
    get filter(): DataCloudflareConnectivityDirectoryServiceFilterOutputReference;
    putFilter(value: DataCloudflareConnectivityDirectoryServiceFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    private _host;
    get host(): DataCloudflareConnectivityDirectoryServiceHostOutputReference;
    get httpPort(): any;
    get httpsPort(): any;
    get id(): any;
    get name(): any;
    private _serviceId?;
    get serviceId(): string;
    set serviceId(value: string);
    resetServiceId(): void;
    get serviceIdInput(): string;
    get tcpPort(): any;
    private _tlsSettings;
    get tlsSettings(): DataCloudflareConnectivityDirectoryServiceTlsSettingsOutputReference;
    get type(): any;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
