import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpPredefinedProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_profile#account_id DataCloudflareZeroTrustDlpPredefinedProfile#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_profile#profile_id DataCloudflareZeroTrustDlpPredefinedProfile#profile_id}
    */
    readonly profileId: string;
}
export interface DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence {
}
export declare function dataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence): any;
export declare function dataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence): any;
export declare class DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern {
}
export declare function dataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern): any;
export declare function dataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern): any;
export declare class DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface DataCloudflareZeroTrustDlpPredefinedProfileEntriesVariant {
}
export declare function dataCloudflareZeroTrustDlpPredefinedProfileEntriesVariantToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedProfileEntriesVariant): any;
export declare function dataCloudflareZeroTrustDlpPredefinedProfileEntriesVariantToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedProfileEntriesVariant): any;
export declare class DataCloudflareZeroTrustDlpPredefinedProfileEntriesVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedProfileEntriesVariant | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedProfileEntriesVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
export interface DataCloudflareZeroTrustDlpPredefinedProfileEntries {
}
export declare function dataCloudflareZeroTrustDlpPredefinedProfileEntriesToTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedProfileEntries): any;
export declare function dataCloudflareZeroTrustDlpPredefinedProfileEntriesToHclTerraform(struct?: DataCloudflareZeroTrustDlpPredefinedProfileEntries): any;
export declare class DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpPredefinedProfileEntries | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpPredefinedProfileEntries | undefined);
    get caseSensitive(): any;
    private _confidence;
    get confidence(): DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    get id(): any;
    get name(): any;
    private _pattern;
    get pattern(): DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference;
    get profileId(): any;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    private _variant;
    get variant(): DataCloudflareZeroTrustDlpPredefinedProfileEntriesVariantOutputReference;
    get wordList(): any;
}
export declare class DataCloudflareZeroTrustDlpPredefinedProfileEntriesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile}
*/
export declare class DataCloudflareZeroTrustDlpPredefinedProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_predefined_profile";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpPredefinedProfile to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpPredefinedProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpPredefinedProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpPredefinedProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpPredefinedProfileConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get aiContextEnabled(): any;
    get allowedMatchCount(): any;
    get confidenceThreshold(): any;
    get enabledEntries(): any;
    private _entries;
    get entries(): DataCloudflareZeroTrustDlpPredefinedProfileEntriesList;
    get id(): any;
    get name(): any;
    get ocrEnabled(): any;
    get openAccess(): any;
    private _profileId?;
    get profileId(): string;
    set profileId(value: string);
    get profileIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
