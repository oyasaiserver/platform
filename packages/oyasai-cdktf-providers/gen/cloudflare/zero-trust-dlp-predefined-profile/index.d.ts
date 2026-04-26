import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDlpPredefinedProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}
    */
    readonly aiContextEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}
    */
    readonly allowedMatchCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}
    */
    readonly confidenceThreshold?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#enabled_entries ZeroTrustDlpPredefinedProfile#enabled_entries}
    */
    readonly enabledEntries?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}
    */
    readonly entries?: ZeroTrustDlpPredefinedProfileEntries[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}
    */
    readonly ocrEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}
    */
    readonly profileId: string;
}
export interface ZeroTrustDlpPredefinedProfileEntries {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#enabled ZeroTrustDlpPredefinedProfile#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#id ZeroTrustDlpPredefinedProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustDlpPredefinedProfileEntriesToTerraform(struct?: ZeroTrustDlpPredefinedProfileEntries | cdktf.IResolvable): any;
export declare function zeroTrustDlpPredefinedProfileEntriesToHclTerraform(struct?: ZeroTrustDlpPredefinedProfileEntries | cdktf.IResolvable): any;
export declare class ZeroTrustDlpPredefinedProfileEntriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpPredefinedProfileEntries | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDlpPredefinedProfileEntries | cdktf.IResolvable | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
}
export declare class ZeroTrustDlpPredefinedProfileEntriesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDlpPredefinedProfileEntries[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDlpPredefinedProfileEntriesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile}
*/
export declare class ZeroTrustDlpPredefinedProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_predefined_profile";
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpPredefinedProfile to import
    * @param importFromId The id of the existing ZeroTrustDlpPredefinedProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpPredefinedProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpPredefinedProfileConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDlpPredefinedProfileConfig);
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
    private _enabledEntries?;
    get enabledEntries(): string[];
    set enabledEntries(value: string[]);
    resetEnabledEntries(): void;
    get enabledEntriesInput(): string[];
    private _entries;
    get entries(): ZeroTrustDlpPredefinedProfileEntriesList;
    putEntries(value: ZeroTrustDlpPredefinedProfileEntries[] | cdktf.IResolvable): void;
    resetEntries(): void;
    get entriesInput(): any;
    get id(): any;
    get name(): any;
    private _ocrEnabled?;
    get ocrEnabled(): boolean | cdktf.IResolvable;
    set ocrEnabled(value: boolean | cdktf.IResolvable);
    resetOcrEnabled(): void;
    get ocrEnabledInput(): any;
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
