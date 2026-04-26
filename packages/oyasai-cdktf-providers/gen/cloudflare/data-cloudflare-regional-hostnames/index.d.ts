import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareRegionalHostnamesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_hostnames#max_items DataCloudflareRegionalHostnames#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_hostnames#zone_id DataCloudflareRegionalHostnames#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareRegionalHostnamesResult {
}
export declare function dataCloudflareRegionalHostnamesResultToTerraform(struct?: DataCloudflareRegionalHostnamesResult): any;
export declare function dataCloudflareRegionalHostnamesResultToHclTerraform(struct?: DataCloudflareRegionalHostnamesResult): any;
export declare class DataCloudflareRegionalHostnamesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRegionalHostnamesResult | undefined;
    set internalValue(value: DataCloudflareRegionalHostnamesResult | undefined);
    get createdOn(): any;
    get hostname(): any;
    get id(): any;
    get regionKey(): any;
    get routing(): any;
}
export declare class DataCloudflareRegionalHostnamesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRegionalHostnamesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_hostnames cloudflare_regional_hostnames}
*/
export declare class DataCloudflareRegionalHostnames extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_regional_hostnames";
    /**
    * Generates CDKTF code for importing a DataCloudflareRegionalHostnames resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRegionalHostnames to import
    * @param importFromId The id of the existing DataCloudflareRegionalHostnames that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_hostnames#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRegionalHostnames to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_hostnames cloudflare_regional_hostnames} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRegionalHostnamesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareRegionalHostnamesConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareRegionalHostnamesResultList;
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
