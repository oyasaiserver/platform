import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDlpDatasetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset#account_id ZeroTrustDlpDataset#account_id}
    */
    readonly accountId?: string;
    /**
    * Only applies to custom word lists.
    * Determines if the words should be matched in a case-sensitive manner
    * Cannot be set to false if `secret` is true or undefined
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset#case_sensitive ZeroTrustDlpDataset#case_sensitive}
    */
    readonly caseSensitive?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset#dataset_id ZeroTrustDlpDataset#dataset_id}
    */
    readonly datasetId?: string;
    /**
    * The description of the dataset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset#description ZeroTrustDlpDataset#description}
    */
    readonly description?: string;
    /**
    * Dataset encoding version
    *
    * Non-secret custom word lists with no header are always version 1.
    * Secret EDM lists with no header are version 1.
    * Multicolumn CSV with headers are version 2.
    * Omitting this field provides the default value 0, which is interpreted
    * the same as 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset#encoding_version ZeroTrustDlpDataset#encoding_version}
    */
    readonly encodingVersion?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset#name ZeroTrustDlpDataset#name}
    */
    readonly name: string;
    /**
    * Generate a secret dataset.
    *
    * If true, the response will include a secret to use with the EDM encoder.
    * If false, the response has no secret and the dataset is uploaded in plaintext.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset#secret ZeroTrustDlpDataset#secret}
    */
    readonly secret?: boolean | cdktf.IResolvable;
}
export interface ZeroTrustDlpDatasetColumns {
}
export declare function zeroTrustDlpDatasetColumnsToTerraform(struct?: ZeroTrustDlpDatasetColumns): any;
export declare function zeroTrustDlpDatasetColumnsToHclTerraform(struct?: ZeroTrustDlpDatasetColumns): any;
export declare class ZeroTrustDlpDatasetColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpDatasetColumns | undefined;
    set internalValue(value: ZeroTrustDlpDatasetColumns | undefined);
    get entryId(): any;
    get headerName(): any;
    get numCells(): any;
    get uploadStatus(): any;
}
export declare class ZeroTrustDlpDatasetColumnsList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustDlpDatasetColumnsOutputReference;
}
export interface ZeroTrustDlpDatasetDatasetColumns {
}
export declare function zeroTrustDlpDatasetDatasetColumnsToTerraform(struct?: ZeroTrustDlpDatasetDatasetColumns): any;
export declare function zeroTrustDlpDatasetDatasetColumnsToHclTerraform(struct?: ZeroTrustDlpDatasetDatasetColumns): any;
export declare class ZeroTrustDlpDatasetDatasetColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpDatasetDatasetColumns | undefined;
    set internalValue(value: ZeroTrustDlpDatasetDatasetColumns | undefined);
    get entryId(): any;
    get headerName(): any;
    get numCells(): any;
    get uploadStatus(): any;
}
export declare class ZeroTrustDlpDatasetDatasetColumnsList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustDlpDatasetDatasetColumnsOutputReference;
}
export interface ZeroTrustDlpDatasetDatasetUploads {
}
export declare function zeroTrustDlpDatasetDatasetUploadsToTerraform(struct?: ZeroTrustDlpDatasetDatasetUploads): any;
export declare function zeroTrustDlpDatasetDatasetUploadsToHclTerraform(struct?: ZeroTrustDlpDatasetDatasetUploads): any;
export declare class ZeroTrustDlpDatasetDatasetUploadsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpDatasetDatasetUploads | undefined;
    set internalValue(value: ZeroTrustDlpDatasetDatasetUploads | undefined);
    get numCells(): any;
    get status(): any;
    get version(): any;
}
export declare class ZeroTrustDlpDatasetDatasetUploadsList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustDlpDatasetDatasetUploadsOutputReference;
}
export interface ZeroTrustDlpDatasetDataset {
}
export declare function zeroTrustDlpDatasetDatasetToTerraform(struct?: ZeroTrustDlpDatasetDataset): any;
export declare function zeroTrustDlpDatasetDatasetToHclTerraform(struct?: ZeroTrustDlpDatasetDataset): any;
export declare class ZeroTrustDlpDatasetDatasetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpDatasetDataset | undefined;
    set internalValue(value: ZeroTrustDlpDatasetDataset | undefined);
    get caseSensitive(): any;
    private _columns;
    get columns(): ZeroTrustDlpDatasetDatasetColumnsList;
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
    get uploads(): ZeroTrustDlpDatasetDatasetUploadsList;
}
export interface ZeroTrustDlpDatasetUploads {
}
export declare function zeroTrustDlpDatasetUploadsToTerraform(struct?: ZeroTrustDlpDatasetUploads): any;
export declare function zeroTrustDlpDatasetUploadsToHclTerraform(struct?: ZeroTrustDlpDatasetUploads): any;
export declare class ZeroTrustDlpDatasetUploadsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpDatasetUploads | undefined;
    set internalValue(value: ZeroTrustDlpDatasetUploads | undefined);
    get numCells(): any;
    get status(): any;
    get version(): any;
}
export declare class ZeroTrustDlpDatasetUploadsList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustDlpDatasetUploadsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset cloudflare_zero_trust_dlp_dataset}
*/
export declare class ZeroTrustDlpDataset extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_dataset";
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpDataset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpDataset to import
    * @param importFromId The id of the existing ZeroTrustDlpDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpDataset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset cloudflare_zero_trust_dlp_dataset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpDatasetConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDlpDatasetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _caseSensitive?;
    get caseSensitive(): boolean | cdktf.IResolvable;
    set caseSensitive(value: boolean | cdktf.IResolvable);
    resetCaseSensitive(): void;
    get caseSensitiveInput(): any;
    private _columns;
    get columns(): ZeroTrustDlpDatasetColumnsList;
    get createdAt(): any;
    private _dataset;
    get dataset(): ZeroTrustDlpDatasetDatasetOutputReference;
    private _datasetId?;
    get datasetId(): string;
    set datasetId(value: string);
    resetDatasetId(): void;
    get datasetIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _encodingVersion?;
    get encodingVersion(): number;
    set encodingVersion(value: number);
    resetEncodingVersion(): void;
    get encodingVersionInput(): number;
    get id(): any;
    get maxCells(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get numCells(): any;
    private _secret?;
    get secret(): boolean | cdktf.IResolvable;
    set secret(value: boolean | cdktf.IResolvable);
    resetSecret(): void;
    get secretInput(): any;
    get status(): any;
    get updatedAt(): any;
    private _uploads;
    get uploads(): ZeroTrustDlpDatasetUploadsList;
    get version(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
