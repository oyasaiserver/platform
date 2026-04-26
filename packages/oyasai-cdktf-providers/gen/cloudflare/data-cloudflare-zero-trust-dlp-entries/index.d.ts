import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpEntriesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_entries#account_id DataCloudflareZeroTrustDlpEntries#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_entries#max_items DataCloudflareZeroTrustDlpEntries#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustDlpEntriesResultConfidence {
}
export declare function dataCloudflareZeroTrustDlpEntriesResultConfidenceToTerraform(struct?: DataCloudflareZeroTrustDlpEntriesResultConfidence): any;
export declare function dataCloudflareZeroTrustDlpEntriesResultConfidenceToHclTerraform(struct?: DataCloudflareZeroTrustDlpEntriesResultConfidence): any;
export declare class DataCloudflareZeroTrustDlpEntriesResultConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpEntriesResultConfidence | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpEntriesResultConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface DataCloudflareZeroTrustDlpEntriesResultPattern {
}
export declare function dataCloudflareZeroTrustDlpEntriesResultPatternToTerraform(struct?: DataCloudflareZeroTrustDlpEntriesResultPattern): any;
export declare function dataCloudflareZeroTrustDlpEntriesResultPatternToHclTerraform(struct?: DataCloudflareZeroTrustDlpEntriesResultPattern): any;
export declare class DataCloudflareZeroTrustDlpEntriesResultPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpEntriesResultPattern | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpEntriesResultPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface DataCloudflareZeroTrustDlpEntriesResultVariant {
}
export declare function dataCloudflareZeroTrustDlpEntriesResultVariantToTerraform(struct?: DataCloudflareZeroTrustDlpEntriesResultVariant): any;
export declare function dataCloudflareZeroTrustDlpEntriesResultVariantToHclTerraform(struct?: DataCloudflareZeroTrustDlpEntriesResultVariant): any;
export declare class DataCloudflareZeroTrustDlpEntriesResultVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpEntriesResultVariant | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpEntriesResultVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
export interface DataCloudflareZeroTrustDlpEntriesResult {
}
export declare function dataCloudflareZeroTrustDlpEntriesResultToTerraform(struct?: DataCloudflareZeroTrustDlpEntriesResult): any;
export declare function dataCloudflareZeroTrustDlpEntriesResultToHclTerraform(struct?: DataCloudflareZeroTrustDlpEntriesResult): any;
export declare class DataCloudflareZeroTrustDlpEntriesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpEntriesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpEntriesResult | undefined);
    get caseSensitive(): any;
    private _confidence;
    get confidence(): DataCloudflareZeroTrustDlpEntriesResultConfidenceOutputReference;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    get id(): any;
    get name(): any;
    private _pattern;
    get pattern(): DataCloudflareZeroTrustDlpEntriesResultPatternOutputReference;
    get profileId(): any;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): DataCloudflareZeroTrustDlpEntriesResultVariantOutputReference;
    get wordList(): any;
}
export declare class DataCloudflareZeroTrustDlpEntriesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpEntriesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_entries cloudflare_zero_trust_dlp_entries}
*/
export declare class DataCloudflareZeroTrustDlpEntries extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_entries";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpEntries resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpEntries to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_entries#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpEntries to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_entries cloudflare_zero_trust_dlp_entries} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpEntriesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDlpEntriesConfig);
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
    get result(): DataCloudflareZeroTrustDlpEntriesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
