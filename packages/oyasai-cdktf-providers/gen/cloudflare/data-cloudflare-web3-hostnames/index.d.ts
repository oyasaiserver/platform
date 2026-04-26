import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWeb3HostnamesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web3_hostnames#max_items DataCloudflareWeb3Hostnames#max_items}
    */
    readonly maxItems?: number;
    /**
    * Specify the identifier of the hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web3_hostnames#zone_id DataCloudflareWeb3Hostnames#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareWeb3HostnamesResult {
}
export declare function dataCloudflareWeb3HostnamesResultToTerraform(struct?: DataCloudflareWeb3HostnamesResult): any;
export declare function dataCloudflareWeb3HostnamesResultToHclTerraform(struct?: DataCloudflareWeb3HostnamesResult): any;
export declare class DataCloudflareWeb3HostnamesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWeb3HostnamesResult | undefined;
    set internalValue(value: DataCloudflareWeb3HostnamesResult | undefined);
    get createdOn(): any;
    get description(): any;
    get dnslink(): any;
    get id(): any;
    get modifiedOn(): any;
    get name(): any;
    get status(): any;
    get target(): any;
}
export declare class DataCloudflareWeb3HostnamesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWeb3HostnamesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web3_hostnames cloudflare_web3_hostnames}
*/
export declare class DataCloudflareWeb3Hostnames extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_web3_hostnames";
    /**
    * Generates CDKTF code for importing a DataCloudflareWeb3Hostnames resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWeb3Hostnames to import
    * @param importFromId The id of the existing DataCloudflareWeb3Hostnames that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web3_hostnames#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWeb3Hostnames to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/web3_hostnames cloudflare_web3_hostnames} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWeb3HostnamesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWeb3HostnamesConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareWeb3HostnamesResultList;
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
