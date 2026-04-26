import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpPredefinedEntriesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entries#account_id DataCloudflareZeroTrustDlpPredefinedEntries#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entries#max_items DataCloudflareZeroTrustDlpPredefinedEntries#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence {
}
export declare function dataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence): any;
export declare function dataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence): any;
export declare class DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern {
}
export declare function dataCloudflareZeroTrustDlpPredefinedEntriesResultPatternToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern): any;
export declare function dataCloudflareZeroTrustDlpPredefinedEntriesResultPatternToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern): any;
export declare class DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedEntriesResultPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant {
}
export declare function dataCloudflareZeroTrustDlpPredefinedEntriesResultVariantToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant): any;
export declare function dataCloudflareZeroTrustDlpPredefinedEntriesResultVariantToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant): any;
export declare class DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedEntriesResultVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
export interface DataCloudflareZeroTrustDlpPredefinedEntriesResult {
}
export declare function dataCloudflareZeroTrustDlpPredefinedEntriesResultToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntriesResult): any;
export declare function dataCloudflareZeroTrustDlpPredefinedEntriesResultToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntriesResult): any;
export declare class DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedEntriesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedEntriesResult | undefined);
    get caseSensitive(): any;
    private _confidence;
    get confidence(): DataCloudflareZeroTrustDlpPredefinedEntriesResultConfidenceOutputReference;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    get id(): any;
    get name(): any;
    private _pattern;
    get pattern(): DataCloudflareZeroTrustDlpPredefinedEntriesResultPatternOutputReference;
    get profileId(): any;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): DataCloudflareZeroTrustDlpPredefinedEntriesResultVariantOutputReference;
    get wordList(): any;
}
export declare class DataCloudflareZeroTrustDlpPredefinedEntriesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpPredefinedEntriesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entries cloudflare_zero_trust_dlp_predefined_entries}
*/
export declare class DataCloudflareZeroTrustDlpPredefinedEntries extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_predefined_entries";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedEntries resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpPredefinedEntries to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpPredefinedEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entries#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpPredefinedEntries to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entries cloudflare_zero_trust_dlp_predefined_entries} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpPredefinedEntriesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDlpPredefinedEntriesConfig);
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
    get result(): DataCloudflareZeroTrustDlpPredefinedEntriesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
