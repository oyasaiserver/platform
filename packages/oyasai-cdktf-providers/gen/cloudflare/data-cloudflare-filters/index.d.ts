import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareFiltersConfig extends cdktf.TerraformMetaArguments {
    /**
    * A case-insensitive string to find in the description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filters#description DataCloudflareFilters#description}
    */
    readonly description?: string;
    /**
    * A case-insensitive string to find in the expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filters#expression DataCloudflareFilters#expression}
    */
    readonly expression?: string;
    /**
    * The unique identifier of the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filters#id DataCloudflareFilters#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filters#max_items DataCloudflareFilters#max_items}
    */
    readonly maxItems?: number;
    /**
    * When true, indicates that the filter is currently paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filters#paused DataCloudflareFilters#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * The filter ref (a short reference tag) to search for. Must be an exact match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filters#ref DataCloudflareFilters#ref}
    */
    readonly ref?: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filters#zone_id DataCloudflareFilters#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareFiltersResult {
}
export declare function dataCloudflareFiltersResultToTerraform(struct?: DataCloudflareFiltersResult): any;
export declare function dataCloudflareFiltersResultToHclTerraform(struct?: DataCloudflareFiltersResult): any;
export declare class DataCloudflareFiltersResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareFiltersResult | undefined;
    set internalValue(value: DataCloudflareFiltersResult | undefined);
    get description(): any;
    get expression(): any;
    get id(): any;
    get paused(): any;
    get ref(): any;
}
export declare class DataCloudflareFiltersResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareFiltersResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filters cloudflare_filters}
*/
export declare class DataCloudflareFilters extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_filters";
    /**
    * Generates CDKTF code for importing a DataCloudflareFilters resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareFilters to import
    * @param importFromId The id of the existing DataCloudflareFilters that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filters#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareFilters to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/filters cloudflare_filters} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareFiltersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareFiltersConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _paused?;
    get paused(): boolean | cdktf.IResolvable;
    set paused(value: boolean | cdktf.IResolvable);
    resetPaused(): void;
    get pausedInput(): any;
    private _ref?;
    get ref(): string;
    set ref(value: string);
    resetRef(): void;
    get refInput(): string;
    private _result;
    get result(): DataCloudflareFiltersResultList;
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
