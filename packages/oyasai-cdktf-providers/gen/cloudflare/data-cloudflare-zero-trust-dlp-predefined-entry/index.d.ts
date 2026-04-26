import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpPredefinedEntryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entry#account_id DataCloudflareZeroTrustDlpPredefinedEntry#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entry#entry_id DataCloudflareZeroTrustDlpPredefinedEntry#entry_id}
    */
    readonly entryId: string;
}
export interface DataCloudflareZeroTrustDlpPredefinedEntryConfidence {
}
export declare function dataCloudflareZeroTrustDlpPredefinedEntryConfidenceToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntryConfidence): any;
export declare function dataCloudflareZeroTrustDlpPredefinedEntryConfidenceToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntryConfidence): any;
export declare class DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedEntryConfidence | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedEntryConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface DataCloudflareZeroTrustDlpPredefinedEntryPattern {
}
export declare function dataCloudflareZeroTrustDlpPredefinedEntryPatternToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntryPattern): any;
export declare function dataCloudflareZeroTrustDlpPredefinedEntryPatternToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntryPattern): any;
export declare class DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedEntryPattern | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedEntryPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface DataCloudflareZeroTrustDlpPredefinedEntryProfiles {
}
export declare function dataCloudflareZeroTrustDlpPredefinedEntryProfilesToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntryProfiles): any;
export declare function dataCloudflareZeroTrustDlpPredefinedEntryProfilesToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntryProfiles): any;
export declare class DataCloudflareZeroTrustDlpPredefinedEntryProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedEntryProfiles | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedEntryProfiles | undefined);
    get id(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustDlpPredefinedEntryProfilesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpPredefinedEntryProfilesOutputReference;
}
export interface DataCloudflareZeroTrustDlpPredefinedEntryVariant {
}
export declare function dataCloudflareZeroTrustDlpPredefinedEntryVariantToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntryVariant): any;
export declare function dataCloudflareZeroTrustDlpPredefinedEntryVariantToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedEntryVariant): any;
export declare class DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedEntryVariant | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedEntryVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entry cloudflare_zero_trust_dlp_predefined_entry}
*/
export declare class DataCloudflareZeroTrustDlpPredefinedEntry extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_predefined_entry";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpPredefinedEntry to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpPredefinedEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpPredefinedEntry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_entry cloudflare_zero_trust_dlp_predefined_entry} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpPredefinedEntryConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpPredefinedEntryConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get caseSensitive(): any;
    private _confidence;
    get confidence(): DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    private _entryId?;
    get entryId(): string;
    set entryId(value: string);
    get entryIdInput(): string;
    get id(): any;
    get name(): any;
    private _pattern;
    get pattern(): DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference;
    get profileId(): any;
    private _profiles;
    get profiles(): DataCloudflareZeroTrustDlpPredefinedEntryProfilesList;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference;
    get wordList(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
