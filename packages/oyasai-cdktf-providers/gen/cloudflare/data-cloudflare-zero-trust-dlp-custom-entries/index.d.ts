import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpCustomEntriesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entries#account_id DataCloudflareZeroTrustDlpCustomEntries#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entries#max_items DataCloudflareZeroTrustDlpCustomEntries#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustDlpCustomEntriesResultConfidence {
}
export declare function dataCloudflareZeroTrustDlpCustomEntriesResultConfidenceToTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntriesResultConfidence): any;
export declare function dataCloudflareZeroTrustDlpCustomEntriesResultConfidenceToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntriesResultConfidence): any;
export declare class DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomEntriesResultConfidence | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomEntriesResultConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface DataCloudflareZeroTrustDlpCustomEntriesResultPattern {
}
export declare function dataCloudflareZeroTrustDlpCustomEntriesResultPatternToTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntriesResultPattern): any;
export declare function dataCloudflareZeroTrustDlpCustomEntriesResultPatternToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntriesResultPattern): any;
export declare class DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomEntriesResultPattern | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomEntriesResultPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface DataCloudflareZeroTrustDlpCustomEntriesResultVariant {
}
export declare function dataCloudflareZeroTrustDlpCustomEntriesResultVariantToTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntriesResultVariant): any;
export declare function dataCloudflareZeroTrustDlpCustomEntriesResultVariantToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntriesResultVariant): any;
export declare class DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomEntriesResultVariant | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomEntriesResultVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
export interface DataCloudflareZeroTrustDlpCustomEntriesResult {
}
export declare function dataCloudflareZeroTrustDlpCustomEntriesResultToTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntriesResult): any;
export declare function dataCloudflareZeroTrustDlpCustomEntriesResultToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomEntriesResult): any;
export declare class DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpCustomEntriesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomEntriesResult | undefined);
    get caseSensitive(): any;
    private _confidence;
    get confidence(): DataCloudflareZeroTrustDlpCustomEntriesResultConfidenceOutputReference;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    get id(): any;
    get name(): any;
    private _pattern;
    get pattern(): DataCloudflareZeroTrustDlpCustomEntriesResultPatternOutputReference;
    get profileId(): any;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): DataCloudflareZeroTrustDlpCustomEntriesResultVariantOutputReference;
    get wordList(): any;
}
export declare class DataCloudflareZeroTrustDlpCustomEntriesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpCustomEntriesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entries cloudflare_zero_trust_dlp_custom_entries}
*/
export declare class DataCloudflareZeroTrustDlpCustomEntries extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_custom_entries";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpCustomEntries resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpCustomEntries to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpCustomEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entries#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpCustomEntries to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_entries cloudflare_zero_trust_dlp_custom_entries} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpCustomEntriesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDlpCustomEntriesConfig);
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
    get result(): DataCloudflareZeroTrustDlpCustomEntriesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
