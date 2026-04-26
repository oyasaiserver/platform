import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDlpCustomProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_profile#account_id DataCloudflareZeroTrustDlpCustomProfile#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_profile#profile_id DataCloudflareZeroTrustDlpCustomProfile#profile_id}
    */
    readonly profileId: string;
}
export interface DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkip {
}
export declare function dataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipToTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkip): any;
export declare function dataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkip): any;
export declare class DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkip | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkip | undefined);
    get files(): any;
}
export interface DataCloudflareZeroTrustDlpCustomProfileContextAwareness {
}
export declare function dataCloudflareZeroTrustDlpCustomProfileContextAwarenessToTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileContextAwareness): any;
export declare function dataCloudflareZeroTrustDlpCustomProfileContextAwarenessToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileContextAwareness): any;
export declare class DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomProfileContextAwareness | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomProfileContextAwareness | undefined);
    get enabled(): any;
    private _skip;
    get skip(): DataCloudflareZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference;
}
export interface DataCloudflareZeroTrustDlpCustomProfileEntriesConfidence {
}
export declare function dataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceToTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileEntriesConfidence): any;
export declare function dataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileEntriesConfidence): any;
export declare class DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomProfileEntriesConfidence | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomProfileEntriesConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface DataCloudflareZeroTrustDlpCustomProfileEntriesPattern {
}
export declare function dataCloudflareZeroTrustDlpCustomProfileEntriesPatternToTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileEntriesPattern): any;
export declare function dataCloudflareZeroTrustDlpCustomProfileEntriesPatternToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileEntriesPattern): any;
export declare class DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomProfileEntriesPattern | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomProfileEntriesPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface DataCloudflareZeroTrustDlpCustomProfileEntriesVariant {
}
export declare function dataCloudflareZeroTrustDlpCustomProfileEntriesVariantToTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileEntriesVariant): any;
export declare function dataCloudflareZeroTrustDlpCustomProfileEntriesVariantToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileEntriesVariant): any;
export declare class DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomProfileEntriesVariant | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomProfileEntriesVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
export interface DataCloudflareZeroTrustDlpCustomProfileEntries {
}
export declare function dataCloudflareZeroTrustDlpCustomProfileEntriesToTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileEntries): any;
export declare function dataCloudflareZeroTrustDlpCustomProfileEntriesToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileEntries): any;
export declare class DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpCustomProfileEntries | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomProfileEntries | undefined);
    get caseSensitive(): any;
    private _confidence;
    get confidence(): DataCloudflareZeroTrustDlpCustomProfileEntriesConfidenceOutputReference;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    get id(): any;
    get name(): any;
    private _pattern;
    get pattern(): DataCloudflareZeroTrustDlpCustomProfileEntriesPatternOutputReference;
    get profileId(): any;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    private _variant;
    get variant(): DataCloudflareZeroTrustDlpCustomProfileEntriesVariantOutputReference;
    get wordList(): any;
}
export declare class DataCloudflareZeroTrustDlpCustomProfileEntriesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpCustomProfileEntriesOutputReference;
}
export interface DataCloudflareZeroTrustDlpCustomProfileSensitivityLevels {
}
export declare function dataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsToTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileSensitivityLevels): any;
export declare function dataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileSensitivityLevels): any;
export declare class DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpCustomProfileSensitivityLevels | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomProfileSensitivityLevels | undefined);
    get groupId(): any;
    get levelId(): any;
}
export declare class DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsOutputReference;
}
export interface DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidence {
}
export declare function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceToTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidence): any;
export declare function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidence): any;
export declare class DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidence | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPattern {
}
export declare function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternToTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPattern): any;
export declare function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPattern): any;
export declare class DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPattern | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariant {
}
export declare function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantToTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariant): any;
export declare function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariant): any;
export declare class DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariant | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
export interface DataCloudflareZeroTrustDlpCustomProfileSharedEntries {
}
export declare function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesToTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileSharedEntries): any;
export declare function dataCloudflareZeroTrustDlpCustomProfileSharedEntriesToHclTerraform(struct?: DataCloudflareZeroTrustDlpCustomProfileSharedEntries): any;
export declare class DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDlpCustomProfileSharedEntries | undefined;
    set internalValue(value: DataCloudflareZeroTrustDlpCustomProfileSharedEntries | undefined);
    get caseSensitive(): any;
    private _confidence;
    get confidence(): DataCloudflareZeroTrustDlpCustomProfileSharedEntriesConfidenceOutputReference;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    get id(): any;
    get name(): any;
    private _pattern;
    get pattern(): DataCloudflareZeroTrustDlpCustomProfileSharedEntriesPatternOutputReference;
    get profileId(): any;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    private _variant;
    get variant(): DataCloudflareZeroTrustDlpCustomProfileSharedEntriesVariantOutputReference;
    get wordList(): any;
}
export declare class DataCloudflareZeroTrustDlpCustomProfileSharedEntriesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDlpCustomProfileSharedEntriesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile}
*/
export declare class DataCloudflareZeroTrustDlpCustomProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_custom_profile";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDlpCustomProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDlpCustomProfile to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDlpCustomProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDlpCustomProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDlpCustomProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpCustomProfileConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get aiContextEnabled(): any;
    get allowedMatchCount(): any;
    get confidenceThreshold(): any;
    private _contextAwareness;
    get contextAwareness(): DataCloudflareZeroTrustDlpCustomProfileContextAwarenessOutputReference;
    get createdAt(): any;
    get dataClasses(): any;
    get dataTags(): any;
    get description(): any;
    private _entries;
    get entries(): DataCloudflareZeroTrustDlpCustomProfileEntriesList;
    get id(): any;
    get name(): any;
    get ocrEnabled(): any;
    get openAccess(): any;
    private _profileId?;
    get profileId(): string;
    set profileId(value: string);
    get profileIdInput(): string;
    private _sensitivityLevels;
    get sensitivityLevels(): DataCloudflareZeroTrustDlpCustomProfileSensitivityLevelsList;
    private _sharedEntries;
    get sharedEntries(): DataCloudflareZeroTrustDlpCustomProfileSharedEntriesList;
    get type(): any;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
