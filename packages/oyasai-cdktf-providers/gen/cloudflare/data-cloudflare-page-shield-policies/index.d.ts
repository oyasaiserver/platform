import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePageShieldPoliciesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_policies#max_items DataCloudflarePageShieldPolicies#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_policies#zone_id DataCloudflarePageShieldPolicies#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflarePageShieldPoliciesResult {
}
export declare function dataCloudflarePageShieldPoliciesResultToTerraform(struct?: DataCloudflarePageShieldPoliciesResult): any;
export declare function dataCloudflarePageShieldPoliciesResultToHclTerraform(struct?: DataCloudflarePageShieldPoliciesResult): any;
export declare class DataCloudflarePageShieldPoliciesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflarePageShieldPoliciesResult | undefined;
    set internalValue(value: DataCloudflarePageShieldPoliciesResult | undefined);
    get action(): any;
    get description(): any;
    get enabled(): any;
    get expression(): any;
    get id(): any;
    get value(): any;
}
export declare class DataCloudflarePageShieldPoliciesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflarePageShieldPoliciesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_policies cloudflare_page_shield_policies}
*/
export declare class DataCloudflarePageShieldPolicies extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_page_shield_policies";
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldPolicies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldPolicies to import
    * @param importFromId The id of the existing DataCloudflarePageShieldPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_policies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldPolicies to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_policies cloudflare_page_shield_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldPoliciesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflarePageShieldPoliciesConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflarePageShieldPoliciesResultList;
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
