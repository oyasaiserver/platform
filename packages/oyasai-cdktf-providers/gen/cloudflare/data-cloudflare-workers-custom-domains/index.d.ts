import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWorkersCustomDomainsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains#account_id DataCloudflareWorkersCustomDomains#account_id}
    */
    readonly accountId?: string;
    /**
    * Worker environment associated with the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains#environment DataCloudflareWorkersCustomDomains#environment}
    */
    readonly environment?: string;
    /**
    * Hostname of the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains#hostname DataCloudflareWorkersCustomDomains#hostname}
    */
    readonly hostname?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains#max_items DataCloudflareWorkersCustomDomains#max_items}
    */
    readonly maxItems?: number;
    /**
    * Name of the Worker associated with the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains#service DataCloudflareWorkersCustomDomains#service}
    */
    readonly service?: string;
    /**
    * ID of the zone containing the domain hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains#zone_id DataCloudflareWorkersCustomDomains#zone_id}
    */
    readonly zoneId?: string;
    /**
    * Name of the zone containing the domain hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains#zone_name DataCloudflareWorkersCustomDomains#zone_name}
    */
    readonly zoneName?: string;
}
export interface DataCloudflareWorkersCustomDomainsResult {
}
export declare function dataCloudflareWorkersCustomDomainsResultToTerraform(struct?: DataCloudflareWorkersCustomDomainsResult): any;
export declare function dataCloudflareWorkersCustomDomainsResultToHclTerraform(struct?: DataCloudflareWorkersCustomDomainsResult): any;
export declare class DataCloudflareWorkersCustomDomainsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWorkersCustomDomainsResult | undefined;
    set internalValue(value: DataCloudflareWorkersCustomDomainsResult | undefined);
    get certId(): any;
    get environment(): any;
    get hostname(): any;
    get id(): any;
    get service(): any;
    get zoneId(): any;
    get zoneName(): any;
}
export declare class DataCloudflareWorkersCustomDomainsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWorkersCustomDomainsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains cloudflare_workers_custom_domains}
*/
export declare class DataCloudflareWorkersCustomDomains extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_workers_custom_domains";
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersCustomDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersCustomDomains to import
    * @param importFromId The id of the existing DataCloudflareWorkersCustomDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersCustomDomains to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_custom_domains cloudflare_workers_custom_domains} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersCustomDomainsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWorkersCustomDomainsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    resetEnvironment(): void;
    get environmentInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareWorkersCustomDomainsResultList;
    private _service?;
    get service(): string;
    set service(value: string);
    resetService(): void;
    get serviceInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    private _zoneName?;
    get zoneName(): string;
    set zoneName(value: string);
    resetZoneName(): void;
    get zoneNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
