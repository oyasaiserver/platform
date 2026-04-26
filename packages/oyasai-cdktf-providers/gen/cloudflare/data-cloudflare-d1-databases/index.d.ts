import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareD1DatabasesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_databases#account_id DataCloudflareD1Databases#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_databases#max_items DataCloudflareD1Databases#max_items}
    */
    readonly maxItems?: number;
    /**
    * a database name to search for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_databases#name DataCloudflareD1Databases#name}
    */
    readonly name?: string;
}
export interface DataCloudflareD1DatabasesResult {
}
export declare function dataCloudflareD1DatabasesResultToTerraform(struct?: DataCloudflareD1DatabasesResult): any;
export declare function dataCloudflareD1DatabasesResultToHclTerraform(struct?: DataCloudflareD1DatabasesResult): any;
export declare class DataCloudflareD1DatabasesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareD1DatabasesResult | undefined;
    set internalValue(value: DataCloudflareD1DatabasesResult | undefined);
    get createdAt(): any;
    get id(): any;
    get jurisdiction(): any;
    get name(): any;
    get uuid(): any;
    get version(): any;
}
export declare class DataCloudflareD1DatabasesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareD1DatabasesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_databases cloudflare_d1_databases}
*/
export declare class DataCloudflareD1Databases extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_d1_databases";
    /**
    * Generates CDKTF code for importing a DataCloudflareD1Databases resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareD1Databases to import
    * @param importFromId The id of the existing DataCloudflareD1Databases that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_databases#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareD1Databases to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/d1_databases cloudflare_d1_databases} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareD1DatabasesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareD1DatabasesConfig);
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
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _result;
    get result(): DataCloudflareD1DatabasesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
