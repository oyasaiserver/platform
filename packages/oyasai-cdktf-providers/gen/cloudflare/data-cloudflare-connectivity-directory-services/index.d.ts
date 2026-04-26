import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareConnectivityDirectoryServicesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_services#account_id DataCloudflareConnectivityDirectoryServices#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_services#max_items DataCloudflareConnectivityDirectoryServices#max_items}
    */
    readonly maxItems?: number;
    /**
    * Available values: "tcp", "http".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_services#type DataCloudflareConnectivityDirectoryServices#type}
    */
    readonly type?: string;
}
export interface DataCloudflareConnectivityDirectoryServicesResultHostNetwork {
}
export declare function dataCloudflareConnectivityDirectoryServicesResultHostNetworkToTerraform(struct?: DataCloudflareConnectivityDirectoryServicesResultHostNetwork): any;
export declare function dataCloudflareConnectivityDirectoryServicesResultHostNetworkToHclTerraform(struct?: DataCloudflareConnectivityDirectoryServicesResultHostNetwork): any;
export declare class DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareConnectivityDirectoryServicesResultHostNetwork | undefined;
    set internalValue(value: DataCloudflareConnectivityDirectoryServicesResultHostNetwork | undefined);
    get tunnelId(): any;
}
export interface DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork {
}
export declare function dataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkToTerraform(struct?: DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork): any;
export declare function dataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkToHclTerraform(struct?: DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork): any;
export declare class DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork | undefined;
    set internalValue(value: DataCloudflareConnectivityDirectoryServicesResultHostResolverNetwork | undefined);
    get resolverIps(): any;
    get tunnelId(): any;
}
export interface DataCloudflareConnectivityDirectoryServicesResultHost {
}
export declare function dataCloudflareConnectivityDirectoryServicesResultHostToTerraform(struct?: DataCloudflareConnectivityDirectoryServicesResultHost): any;
export declare function dataCloudflareConnectivityDirectoryServicesResultHostToHclTerraform(struct?: DataCloudflareConnectivityDirectoryServicesResultHost): any;
export declare class DataCloudflareConnectivityDirectoryServicesResultHostOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareConnectivityDirectoryServicesResultHost | undefined;
    set internalValue(value: DataCloudflareConnectivityDirectoryServicesResultHost | undefined);
    get hostname(): any;
    get ipv4(): any;
    get ipv6(): any;
    private _network;
    get network(): DataCloudflareConnectivityDirectoryServicesResultHostNetworkOutputReference;
    private _resolverNetwork;
    get resolverNetwork(): DataCloudflareConnectivityDirectoryServicesResultHostResolverNetworkOutputReference;
}
export interface DataCloudflareConnectivityDirectoryServicesResultTlsSettings {
}
export declare function dataCloudflareConnectivityDirectoryServicesResultTlsSettingsToTerraform(struct?: DataCloudflareConnectivityDirectoryServicesResultTlsSettings): any;
export declare function dataCloudflareConnectivityDirectoryServicesResultTlsSettingsToHclTerraform(struct?: DataCloudflareConnectivityDirectoryServicesResultTlsSettings): any;
export declare class DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareConnectivityDirectoryServicesResultTlsSettings | undefined;
    set internalValue(value: DataCloudflareConnectivityDirectoryServicesResultTlsSettings | undefined);
    get certVerificationMode(): any;
}
export interface DataCloudflareConnectivityDirectoryServicesResult {
}
export declare function dataCloudflareConnectivityDirectoryServicesResultToTerraform(struct?: DataCloudflareConnectivityDirectoryServicesResult): any;
export declare function dataCloudflareConnectivityDirectoryServicesResultToHclTerraform(struct?: DataCloudflareConnectivityDirectoryServicesResult): any;
export declare class DataCloudflareConnectivityDirectoryServicesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareConnectivityDirectoryServicesResult | undefined;
    set internalValue(value: DataCloudflareConnectivityDirectoryServicesResult | undefined);
    get appProtocol(): any;
    get createdAt(): any;
    private _host;
    get host(): DataCloudflareConnectivityDirectoryServicesResultHostOutputReference;
    get httpPort(): any;
    get httpsPort(): any;
    get name(): any;
    get serviceId(): any;
    get tcpPort(): any;
    private _tlsSettings;
    get tlsSettings(): DataCloudflareConnectivityDirectoryServicesResultTlsSettingsOutputReference;
    get type(): any;
    get updatedAt(): any;
}
export declare class DataCloudflareConnectivityDirectoryServicesResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareConnectivityDirectoryServicesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_services cloudflare_connectivity_directory_services}
*/
export declare class DataCloudflareConnectivityDirectoryServices extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_connectivity_directory_services";
    /**
    * Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryServices resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareConnectivityDirectoryServices to import
    * @param importFromId The id of the existing DataCloudflareConnectivityDirectoryServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_services#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareConnectivityDirectoryServices to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/connectivity_directory_services cloudflare_connectivity_directory_services} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareConnectivityDirectoryServicesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareConnectivityDirectoryServicesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareConnectivityDirectoryServicesResultList;
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
