import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpIntegrationEntriesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entries#account_id DataCloudflareZeroTrustDlpIntegrationEntries#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entries#max_items DataCloudflareZeroTrustDlpIntegrationEntries#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence {
}
export declare function dataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceToTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence): any;
export declare function dataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceToHclTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence): any;
export declare class DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern {
}
export declare function dataCloudflareZeroTrustDlpIntegrationEntriesResultPatternToTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern): any;
export declare function dataCloudflareZeroTrustDlpIntegrationEntriesResultPatternToHclTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern): any;
export declare class DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpIntegrationEntriesResultPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant {
}
export declare function dataCloudflareZeroTrustDlpIntegrationEntriesResultVariantToTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant): any;
export declare function dataCloudflareZeroTrustDlpIntegrationEntriesResultVariantToHclTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant): any;
export declare class DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpIntegrationEntriesResultVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
export interface DataCloudflareZeroTrustDlpIntegrationEntriesResult {
}
export declare function dataCloudflareZeroTrustDlpIntegrationEntriesResultToTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntriesResult): any;
export declare function dataCloudflareZeroTrustDlpIntegrationEntriesResultToHclTerraform(struct?: DataCloudflareZeroTrustDlpIntegrationEntriesResult): any;
export declare class DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpIntegrationEntriesResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpIntegrationEntriesResult | undefined);
    get caseSensitive(): any;
    private _confidence;
    get confidence(): DataCloudflareZeroTrustDlpIntegrationEntriesResultConfidenceOutputReference;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    get id(): any;
    get name(): any;
    private _pattern;
    get pattern(): DataCloudflareZeroTrustDlpIntegrationEntriesResultPatternOutputReference;
    get profileId(): any;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): DataCloudflareZeroTrustDlpIntegrationEntriesResultVariantOutputReference;
    get wordList(): any;
}
export declare class DataCloudflareZeroTrustDlpIntegrationEntriesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpIntegrationEntriesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entries cloudflare_zero_trust_dlp_integration_entries}
*/
export declare class DataCloudflareZeroTrustDlpIntegrationEntries extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_integration_entries";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpIntegrationEntries resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpIntegrationEntries to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpIntegrationEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entries#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpIntegrationEntries to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_integration_entries cloudflare_zero_trust_dlp_integration_entries} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpIntegrationEntriesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDlpIntegrationEntriesConfig);
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
    get result(): DataCloudflareZeroTrustDlpIntegrationEntriesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
