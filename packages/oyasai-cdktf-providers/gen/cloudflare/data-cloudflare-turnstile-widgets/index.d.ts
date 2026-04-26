import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareTurnstileWidgetsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets#account_id DataCloudflareTurnstileWidgets#account_id}
    */
    readonly accountId?: string;
    /**
    * Direction to order widgets.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets#direction DataCloudflareTurnstileWidgets#direction}
    */
    readonly direction?: string;
    /**
    * Filter widgets by field using case-insensitive substring matching.
    * Format: `field:value`
    *
    * Supported fields:
    * - `name` - Filter by widget name (e.g., `filter=name:login-form`)
    * - `sitekey` - Filter by sitekey (e.g., `filter=sitekey:0x4AAA`)
    *
    * Returns 400 Bad Request if the field is unsupported or format is invalid.
    * An empty filter value returns all results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets#filter DataCloudflareTurnstileWidgets#filter}
    */
    readonly filter?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets#max_items DataCloudflareTurnstileWidgets#max_items}
    */
    readonly maxItems?: number;
    /**
    * Field to order widgets by.
    * Available values: "id", "sitekey", "name", "created_on", "modified_on".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets#order DataCloudflareTurnstileWidgets#order}
    */
    readonly order?: string;
}
export interface DataCloudflareTurnstileWidgetsResult {
}
export declare function dataCloudflareTurnstileWidgetsResultToTerraform(struct?: DataCloudflareTurnstileWidgetsResult): any;
export declare function dataCloudflareTurnstileWidgetsResultToHclTerraform(struct?: DataCloudflareTurnstileWidgetsResult): any;
export declare class DataCloudflareTurnstileWidgetsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareTurnstileWidgetsResult | undefined;
    set internalValue(value: DataCloudflareTurnstileWidgetsResult | undefined);
    get botFightMode(): any;
    get clearanceLevel(): any;
    get createdOn(): any;
    get domains(): any;
    get ephemeralId(): any;
    get id(): any;
    get mode(): any;
    get modifiedOn(): any;
    get name(): any;
    get offlabel(): any;
    get region(): any;
    get sitekey(): any;
}
export declare class DataCloudflareTurnstileWidgetsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareTurnstileWidgetsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets cloudflare_turnstile_widgets}
*/
export declare class DataCloudflareTurnstileWidgets extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_turnstile_widgets";
    /**
    * Generates CDKTF code for importing a DataCloudflareTurnstileWidgets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTurnstileWidgets to import
    * @param importFromId The id of the existing DataCloudflareTurnstileWidgets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTurnstileWidgets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widgets cloudflare_turnstile_widgets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTurnstileWidgetsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareTurnstileWidgetsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _filter?;
    get filter(): string;
    set filter(value: string);
    resetFilter(): void;
    get filterInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _result;
    get result(): DataCloudflareTurnstileWidgetsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
