import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDlpPredefinedEntryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_entry#account_id ZeroTrustDlpPredefinedEntry#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_entry#enabled ZeroTrustDlpPredefinedEntry#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_entry#entry_id ZeroTrustDlpPredefinedEntry#entry_id}
    */
    readonly entryId: string;
    /**
    * This field is not used as the owning profile.
    * For predefined entries it is already set to a predefined profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_entry#profile_id ZeroTrustDlpPredefinedEntry#profile_id}
    */
    readonly profileId?: string;
}
export interface ZeroTrustDlpPredefinedEntryConfidence {
}
export declare function zeroTrustDlpPredefinedEntryConfidenceToTerraform(struct?: ZeroTrustDlpPredefinedEntryConfidence): any;
export declare function zeroTrustDlpPredefinedEntryConfidenceToHclTerraform(struct?: ZeroTrustDlpPredefinedEntryConfidence): any;
export declare class ZeroTrustDlpPredefinedEntryConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpPredefinedEntryConfidence | undefined;
    set internalValue(value: ZeroTrustDlpPredefinedEntryConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface ZeroTrustDlpPredefinedEntryPattern {
}
export declare function zeroTrustDlpPredefinedEntryPatternToTerraform(struct?: ZeroTrustDlpPredefinedEntryPattern): any;
export declare function zeroTrustDlpPredefinedEntryPatternToHclTerraform(struct?: ZeroTrustDlpPredefinedEntryPattern): any;
export declare class ZeroTrustDlpPredefinedEntryPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpPredefinedEntryPattern | undefined;
    set internalValue(value: ZeroTrustDlpPredefinedEntryPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface ZeroTrustDlpPredefinedEntryProfiles {
}
export declare function zeroTrustDlpPredefinedEntryProfilesToTerraform(struct?: ZeroTrustDlpPredefinedEntryProfiles): any;
export declare function zeroTrustDlpPredefinedEntryProfilesToHclTerraform(struct?: ZeroTrustDlpPredefinedEntryProfiles): any;
export declare class ZeroTrustDlpPredefinedEntryProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpPredefinedEntryProfiles | undefined;
    set internalValue(value: ZeroTrustDlpPredefinedEntryProfiles | undefined);
    get id(): any;
    get name(): any;
}
export declare class ZeroTrustDlpPredefinedEntryProfilesList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustDlpPredefinedEntryProfilesOutputReference;
}
export interface ZeroTrustDlpPredefinedEntryVariant {
}
export declare function zeroTrustDlpPredefinedEntryVariantToTerraform(struct?: ZeroTrustDlpPredefinedEntryVariant): any;
export declare function zeroTrustDlpPredefinedEntryVariantToHclTerraform(struct?: ZeroTrustDlpPredefinedEntryVariant): any;
export declare class ZeroTrustDlpPredefinedEntryVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpPredefinedEntryVariant | undefined;
    set internalValue(value: ZeroTrustDlpPredefinedEntryVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_entry cloudflare_zero_trust_dlp_predefined_entry}
*/
export declare class ZeroTrustDlpPredefinedEntry extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_predefined_entry";
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpPredefinedEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpPredefinedEntry to import
    * @param importFromId The id of the existing ZeroTrustDlpPredefinedEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpPredefinedEntry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_predefined_entry cloudflare_zero_trust_dlp_predefined_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpPredefinedEntryConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDlpPredefinedEntryConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get caseSensitive(): any;
    private _confidence;
    get confidence(): ZeroTrustDlpPredefinedEntryConfidenceOutputReference;
    get createdAt(): any;
    get description(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    private _entryId?;
    get entryId(): string;
    set entryId(value: string);
    get entryIdInput(): string;
    get id(): any;
    get name(): any;
    private _pattern;
    get pattern(): ZeroTrustDlpPredefinedEntryPatternOutputReference;
    private _profileId?;
    get profileId(): string;
    set profileId(value: string);
    resetProfileId(): void;
    get profileIdInput(): string;
    private _profiles;
    get profiles(): ZeroTrustDlpPredefinedEntryProfilesList;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): ZeroTrustDlpPredefinedEntryVariantOutputReference;
    get wordList(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
