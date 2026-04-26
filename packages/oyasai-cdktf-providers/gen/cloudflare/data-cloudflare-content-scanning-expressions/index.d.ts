import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareContentScanningExpressionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/content_scanning_expressions#max_items DataCloudflareContentScanningExpressions#max_items}
    */
    readonly maxItems?: number;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/content_scanning_expressions#zone_id DataCloudflareContentScanningExpressions#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareContentScanningExpressionsResult {
}
export declare function dataCloudflareContentScanningExpressionsResultToTerraform(struct?: DataCloudflareContentScanningExpressionsResult): any;
export declare function dataCloudflareContentScanningExpressionsResultToHclTerraform(struct?: DataCloudflareContentScanningExpressionsResult): any;
export declare class DataCloudflareContentScanningExpressionsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareContentScanningExpressionsResult | undefined;
    set internalValue(value: DataCloudflareContentScanningExpressionsResult | undefined);
    get id(): any;
    get payload(): any;
}
export declare class DataCloudflareContentScanningExpressionsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareContentScanningExpressionsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/content_scanning_expressions cloudflare_content_scanning_expressions}
*/
export declare class DataCloudflareContentScanningExpressions extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_content_scanning_expressions";
    /**
    * Generates CDKTF code for importing a DataCloudflareContentScanningExpressions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareContentScanningExpressions to import
    * @param importFromId The id of the existing DataCloudflareContentScanningExpressions that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/content_scanning_expressions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareContentScanningExpressions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/content_scanning_expressions cloudflare_content_scanning_expressions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareContentScanningExpressionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareContentScanningExpressionsConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareContentScanningExpressionsResultList;
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
