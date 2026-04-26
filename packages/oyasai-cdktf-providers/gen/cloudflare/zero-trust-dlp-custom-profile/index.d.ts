import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDlpCustomProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#account_id ZeroTrustDlpCustomProfile#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#ai_context_enabled ZeroTrustDlpCustomProfile#ai_context_enabled}
    */
    readonly aiContextEnabled?: boolean | cdktf.IResolvable;
    /**
    * Related DLP policies will trigger when the match count exceeds the number set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#allowed_match_count ZeroTrustDlpCustomProfile#allowed_match_count}
    */
    readonly allowedMatchCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#confidence_threshold ZeroTrustDlpCustomProfile#confidence_threshold}
    */
    readonly confidenceThreshold?: string;
    /**
    * Scan the context of predefined entries to only return matches surrounded by keywords.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#context_awareness ZeroTrustDlpCustomProfile#context_awareness}
    */
    readonly contextAwareness?: ZeroTrustDlpCustomProfileContextAwareness;
    /**
    * Data class IDs to associate with the profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#data_classes ZeroTrustDlpCustomProfile#data_classes}
    */
    readonly dataClasses?: string[];
    /**
    * Data tag IDs to associate with the profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#data_tags ZeroTrustDlpCustomProfile#data_tags}
    */
    readonly dataTags?: string[];
    /**
    * The description of the profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#description ZeroTrustDlpCustomProfile#description}
    */
    readonly description?: string;
    /**
    * Custom entries from this profile.
    * If this field is omitted, entries owned by this profile will not be changed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#entries ZeroTrustDlpCustomProfile#entries}
    */
    readonly entries?: ZeroTrustDlpCustomProfileEntries[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#ocr_enabled ZeroTrustDlpCustomProfile#ocr_enabled}
    */
    readonly ocrEnabled?: boolean | cdktf.IResolvable;
    /**
    * Sensitivity levels to associate with the profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#sensitivity_levels ZeroTrustDlpCustomProfile#sensitivity_levels}
    */
    readonly sensitivityLevels?: ZeroTrustDlpCustomProfileSensitivityLevels[] | cdktf.IResolvable;
    /**
    * Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#shared_entries ZeroTrustDlpCustomProfile#shared_entries}
    */
    readonly sharedEntries?: ZeroTrustDlpCustomProfileSharedEntries[] | cdktf.IResolvable;
}
export interface ZeroTrustDlpCustomProfileContextAwarenessSkip {
    /**
    * If the content type is a file, skip context analysis and return all matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#files ZeroTrustDlpCustomProfile#files}
    */
    readonly files?: boolean | cdktf.IResolvable;
}
export declare function zeroTrustDlpCustomProfileContextAwarenessSkipToTerraform(struct?: ZeroTrustDlpCustomProfileContextAwarenessSkip | cdktf.IResolvable): any;
export declare function zeroTrustDlpCustomProfileContextAwarenessSkipToHclTerraform(struct?: ZeroTrustDlpCustomProfileContextAwarenessSkip | cdktf.IResolvable): any;
export declare class ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpCustomProfileContextAwarenessSkip | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDlpCustomProfileContextAwarenessSkip | cdktf.IResolvable | undefined);
    private _files?;
    get files(): boolean | cdktf.IResolvable;
    set files(value: boolean | cdktf.IResolvable);
    resetFiles(): void;
    get filesInput(): any;
}
export interface ZeroTrustDlpCustomProfileContextAwareness {
    /**
    * If true, scan the context of predefined entries to only return matches surrounded by keywords.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Content types to exclude from context analysis and return all matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#skip ZeroTrustDlpCustomProfile#skip}
    */
    readonly skip?: ZeroTrustDlpCustomProfileContextAwarenessSkip;
}
export declare function zeroTrustDlpCustomProfileContextAwarenessToTerraform(struct?: ZeroTrustDlpCustomProfileContextAwareness | cdktf.IResolvable): any;
export declare function zeroTrustDlpCustomProfileContextAwarenessToHclTerraform(struct?: ZeroTrustDlpCustomProfileContextAwareness | cdktf.IResolvable): any;
export declare class ZeroTrustDlpCustomProfileContextAwarenessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpCustomProfileContextAwareness | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDlpCustomProfileContextAwareness | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _skip;
    get skip(): ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference;
    putSkip(value: ZeroTrustDlpCustomProfileContextAwarenessSkip): void;
    resetSkip(): void;
    get skipInput(): any;
}
export interface ZeroTrustDlpCustomProfileEntriesPattern {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#regex ZeroTrustDlpCustomProfile#regex}
    */
    readonly regex: string;
    /**
    * Available values: "luhn".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#validation ZeroTrustDlpCustomProfile#validation}
    */
    readonly validation?: string;
}
export declare function zeroTrustDlpCustomProfileEntriesPatternToTerraform(struct?: ZeroTrustDlpCustomProfileEntriesPattern | cdktf.IResolvable): any;
export declare function zeroTrustDlpCustomProfileEntriesPatternToHclTerraform(struct?: ZeroTrustDlpCustomProfileEntriesPattern | cdktf.IResolvable): any;
export declare class ZeroTrustDlpCustomProfileEntriesPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpCustomProfileEntriesPattern | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDlpCustomProfileEntriesPattern | cdktf.IResolvable | undefined);
    private _regex?;
    get regex(): string;
    set regex(value: string);
    get regexInput(): string;
    private _validation?;
    get validation(): string;
    set validation(value: string);
    resetValidation(): void;
    get validationInput(): string;
}
export interface ZeroTrustDlpCustomProfileEntries {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#description ZeroTrustDlpCustomProfile#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}
    */
    readonly entryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#pattern ZeroTrustDlpCustomProfile#pattern}
    */
    readonly pattern: ZeroTrustDlpCustomProfileEntriesPattern;
}
export declare function zeroTrustDlpCustomProfileEntriesToTerraform(struct?: ZeroTrustDlpCustomProfileEntries | cdktf.IResolvable): any;
export declare function zeroTrustDlpCustomProfileEntriesToHclTerraform(struct?: ZeroTrustDlpCustomProfileEntries | cdktf.IResolvable): any;
export declare class ZeroTrustDlpCustomProfileEntriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpCustomProfileEntries | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDlpCustomProfileEntries | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _entryId?;
    get entryId(): string;
    set entryId(value: string);
    resetEntryId(): void;
    get entryIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _pattern;
    get pattern(): ZeroTrustDlpCustomProfileEntriesPatternOutputReference;
    putPattern(value: ZeroTrustDlpCustomProfileEntriesPattern): void;
    get patternInput(): any;
}
export declare class ZeroTrustDlpCustomProfileEntriesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDlpCustomProfileEntries[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDlpCustomProfileEntriesOutputReference;
}
export interface ZeroTrustDlpCustomProfileSensitivityLevels {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#group_id ZeroTrustDlpCustomProfile#group_id}
    */
    readonly groupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#level_id ZeroTrustDlpCustomProfile#level_id}
    */
    readonly levelId: string;
}
export declare function zeroTrustDlpCustomProfileSensitivityLevelsToTerraform(struct?: ZeroTrustDlpCustomProfileSensitivityLevels | cdktf.IResolvable): any;
export declare function zeroTrustDlpCustomProfileSensitivityLevelsToHclTerraform(struct?: ZeroTrustDlpCustomProfileSensitivityLevels | cdktf.IResolvable): any;
export declare class ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpCustomProfileSensitivityLevels | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDlpCustomProfileSensitivityLevels | cdktf.IResolvable | undefined);
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    get groupIdInput(): string;
    private _levelId?;
    get levelId(): string;
    set levelId(value: string);
    get levelIdInput(): string;
}
export declare class ZeroTrustDlpCustomProfileSensitivityLevelsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDlpCustomProfileSensitivityLevels[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDlpCustomProfileSensitivityLevelsOutputReference;
}
export interface ZeroTrustDlpCustomProfileSharedEntries {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}
    */
    readonly entryId: string;
    /**
    * Available values: "custom", "predefined", "integration", "exact_data", "document_fingerprint".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#entry_type ZeroTrustDlpCustomProfile#entry_type}
    */
    readonly entryType: string;
}
export declare function zeroTrustDlpCustomProfileSharedEntriesToTerraform(struct?: ZeroTrustDlpCustomProfileSharedEntries | cdktf.IResolvable): any;
export declare function zeroTrustDlpCustomProfileSharedEntriesToHclTerraform(struct?: ZeroTrustDlpCustomProfileSharedEntries | cdktf.IResolvable): any;
export declare class ZeroTrustDlpCustomProfileSharedEntriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpCustomProfileSharedEntries | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDlpCustomProfileSharedEntries | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _entryId?;
    get entryId(): string;
    set entryId(value: string);
    get entryIdInput(): string;
    private _entryType?;
    get entryType(): string;
    set entryType(value: string);
    get entryTypeInput(): string;
}
export declare class ZeroTrustDlpCustomProfileSharedEntriesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDlpCustomProfileSharedEntries[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDlpCustomProfileSharedEntriesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile}
*/
export declare class ZeroTrustDlpCustomProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_custom_profile";
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpCustomProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpCustomProfile to import
    * @param importFromId The id of the existing ZeroTrustDlpCustomProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpCustomProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpCustomProfileConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDlpCustomProfileConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _aiContextEnabled?;
    get aiContextEnabled(): boolean | cdktf.IResolvable;
    set aiContextEnabled(value: boolean | cdktf.IResolvable);
    resetAiContextEnabled(): void;
    get aiContextEnabledInput(): any;
    private _allowedMatchCount?;
    get allowedMatchCount(): number;
    set allowedMatchCount(value: number);
    resetAllowedMatchCount(): void;
    get allowedMatchCountInput(): number;
    private _confidenceThreshold?;
    get confidenceThreshold(): string;
    set confidenceThreshold(value: string);
    resetConfidenceThreshold(): void;
    get confidenceThresholdInput(): string;
    private _contextAwareness;
    get contextAwareness(): ZeroTrustDlpCustomProfileContextAwarenessOutputReference;
    putContextAwareness(value: ZeroTrustDlpCustomProfileContextAwareness): void;
    resetContextAwareness(): void;
    get contextAwarenessInput(): any;
    get createdAt(): any;
    private _dataClasses?;
    get dataClasses(): string[];
    set dataClasses(value: string[]);
    resetDataClasses(): void;
    get dataClassesInput(): string[];
    private _dataTags?;
    get dataTags(): string[];
    set dataTags(value: string[]);
    resetDataTags(): void;
    get dataTagsInput(): string[];
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _entries;
    get entries(): ZeroTrustDlpCustomProfileEntriesList;
    putEntries(value: ZeroTrustDlpCustomProfileEntries[] | cdktf.IResolvable): void;
    resetEntries(): void;
    get entriesInput(): any;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _ocrEnabled?;
    get ocrEnabled(): boolean | cdktf.IResolvable;
    set ocrEnabled(value: boolean | cdktf.IResolvable);
    resetOcrEnabled(): void;
    get ocrEnabledInput(): any;
    get openAccess(): any;
    private _sensitivityLevels;
    get sensitivityLevels(): ZeroTrustDlpCustomProfileSensitivityLevelsList;
    putSensitivityLevels(value: ZeroTrustDlpCustomProfileSensitivityLevels[] | cdktf.IResolvable): void;
    resetSensitivityLevels(): void;
    get sensitivityLevelsInput(): any;
    private _sharedEntries;
    get sharedEntries(): ZeroTrustDlpCustomProfileSharedEntriesList;
    putSharedEntries(value: ZeroTrustDlpCustomProfileSharedEntries[] | cdktf.IResolvable): void;
    resetSharedEntries(): void;
    get sharedEntriesInput(): any;
    get type(): any;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
