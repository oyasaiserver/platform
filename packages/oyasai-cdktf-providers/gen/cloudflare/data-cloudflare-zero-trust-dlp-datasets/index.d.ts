import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpDatasetsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_datasets#account_id DataCloudflareZeroTrustDlpDatasets#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_datasets#max_items DataCloudflareZeroTrustDlpDatasets#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustDlpDatasetsResultColumns {
}
export declare function dataCloudflareZeroTrustDlpDatasetsResultColumnsToTerraform(struct?: DataCloudflareZeroTrustDlpDatasetsResultColumns): any;
export declare function dataCloudflareZeroTrustDlpDatasetsResultColumnsToHclTerraform(struct?: DataCloudflareZeroTrustDlpDatasetsResultColumns): any;
export declare class DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpDatasetsResultColumns | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpDatasetsResultColumns | undefined);
    get entryId(): any;
    get headerName(): any;
    get numCells(): any;
    get uploadStatus(): any;
}
export declare class DataCloudflareZeroTrustDlpDatasetsResultColumnsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpDatasetsResultColumnsOutputReference;
}
export interface DataCloudflareZeroTrustDlpDatasetsResultUploads {
}
export declare function dataCloudflareZeroTrustDlpDatasetsResultUploadsToTerraform(struct?: DataCloudflareZeroTrustDlpDatasetsResultUploads): any;
export declare function dataCloudflareZeroTrustDlpDatasetsResultUploadsToHclTerraform(struct?: DataCloudflareZeroTrustDlpDatasetsResultUploads): any;
export declare class DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpDatasetsResultUploads | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpDatasetsResultUploads | undefined);
    get numCells(): any;
    get status(): any;
    get version(): any;
}
export declare class DataCloudflareZeroTrustDlpDatasetsResultUploadsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpDatasetsResultUploadsOutputReference;
}
export interface DataCloudflareZeroTrustDlpDatasetsResult {
}
export declare function dataCloudflareZeroTrustDlpDatasetsResultToTerraform(struct?: DataCloudflareZeroTrustDlpDatasetsResult): any;
export declare function dataCloudflareZeroTrustDlpDatasetsResultToHclTerraform(struct?: DataCloudflareZeroTrustDlpDatasetsResult): any;
export declare class DataCloudflareZeroTrustDlpDatasetsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpDatasetsResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpDatasetsResult | undefined);
    get caseSensitive(): any;
    private _columns;
    get columns(): DataCloudflareZeroTrustDlpDatasetsResultColumnsList;
    get createdAt(): any;
    get description(): any;
    get encodingVersion(): any;
    get id(): any;
    get name(): any;
    get numCells(): any;
    get secret(): any;
    get status(): any;
    get updatedAt(): any;
    private _uploads;
    get uploads(): DataCloudflareZeroTrustDlpDatasetsResultUploadsList;
}
export declare class DataCloudflareZeroTrustDlpDatasetsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpDatasetsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_datasets cloudflare_zero_trust_dlp_datasets}
*/
export declare class DataCloudflareZeroTrustDlpDatasets extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_datasets";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpDatasets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpDatasets to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpDatasets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_datasets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpDatasets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_datasets cloudflare_zero_trust_dlp_datasets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpDatasetsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDlpDatasetsConfig);
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
    get result(): DataCloudflareZeroTrustDlpDatasetsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
