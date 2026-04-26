import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpDatasetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_dataset#account_id DataCloudflareZeroTrustDlpDataset#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_dataset#dataset_id DataCloudflareZeroTrustDlpDataset#dataset_id}
    */
    readonly datasetId: string;
}
export interface DataCloudflareZeroTrustDlpDatasetColumns {
}
export declare function dataCloudflareZeroTrustDlpDatasetColumnsToTerraform(struct?: DataCloudflareZeroTrustDlpDatasetColumns): any;
export declare function dataCloudflareZeroTrustDlpDatasetColumnsToHclTerraform(struct?: DataCloudflareZeroTrustDlpDatasetColumns): any;
export declare class DataCloudflareZeroTrustDlpDatasetColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpDatasetColumns | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpDatasetColumns | undefined);
    get entryId(): any;
    get headerName(): any;
    get numCells(): any;
    get uploadStatus(): any;
}
export declare class DataCloudflareZeroTrustDlpDatasetColumnsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpDatasetColumnsOutputReference;
}
export interface DataCloudflareZeroTrustDlpDatasetUploads {
}
export declare function dataCloudflareZeroTrustDlpDatasetUploadsToTerraform(struct?: DataCloudflareZeroTrustDlpDatasetUploads): any;
export declare function dataCloudflareZeroTrustDlpDatasetUploadsToHclTerraform(struct?: DataCloudflareZeroTrustDlpDatasetUploads): any;
export declare class DataCloudflareZeroTrustDlpDatasetUploadsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpDatasetUploads | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpDatasetUploads | undefined);
    get numCells(): any;
    get status(): any;
    get version(): any;
}
export declare class DataCloudflareZeroTrustDlpDatasetUploadsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpDatasetUploadsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_dataset cloudflare_zero_trust_dlp_dataset}
*/
export declare class DataCloudflareZeroTrustDlpDataset extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_dataset";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpDataset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpDataset to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_dataset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpDataset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_dataset cloudflare_zero_trust_dlp_dataset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpDatasetConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpDatasetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get caseSensitive(): any;
    private _columns;
    get columns(): DataCloudflareZeroTrustDlpDatasetColumnsList;
    get createdAt(): any;
    private _datasetId?;
    get datasetId(): string;
    set datasetId(value: string);
    get datasetIdInput(): string;
    get description(): any;
    get encodingVersion(): any;
    get id(): any;
    get name(): any;
    get numCells(): any;
    get secret(): any;
    get status(): any;
    get updatedAt(): any;
    private _uploads;
    get uploads(): DataCloudflareZeroTrustDlpDatasetUploadsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
