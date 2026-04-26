import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCallsTurnAppsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_turn_apps#account_id DataCloudflareCallsTurnApps#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_turn_apps#max_items DataCloudflareCallsTurnApps#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareCallsTurnAppsResult {
}
export declare function dataCloudflareCallsTurnAppsResultToTerraform(struct?: DataCloudflareCallsTurnAppsResult): any;
export declare function dataCloudflareCallsTurnAppsResultToHclTerraform(struct?: DataCloudflareCallsTurnAppsResult): any;
export declare class DataCloudflareCallsTurnAppsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCallsTurnAppsResult | undefined;
    set internalValue(value: DataCloudflareCallsTurnAppsResult | undefined);
    get created(): any;
    get modified(): any;
    get name(): any;
    get uid(): any;
}
export declare class DataCloudflareCallsTurnAppsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCallsTurnAppsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_turn_apps cloudflare_calls_turn_apps}
*/
export declare class DataCloudflareCallsTurnApps extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_calls_turn_apps";
    /**
    * Generates CDKTF code for importing a DataCloudflareCallsTurnApps resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCallsTurnApps to import
    * @param importFromId The id of the existing DataCloudflareCallsTurnApps that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_turn_apps#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCallsTurnApps to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/calls_turn_apps cloudflare_calls_turn_apps} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCallsTurnAppsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCallsTurnAppsConfig);
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
    get result(): DataCloudflareCallsTurnAppsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
