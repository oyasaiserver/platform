import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDlpCustomEntryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_entry#account_id ZeroTrustDlpCustomEntry#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_entry#description ZeroTrustDlpCustomEntry#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_entry#enabled ZeroTrustDlpCustomEntry#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_entry#name ZeroTrustDlpCustomEntry#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_entry#pattern ZeroTrustDlpCustomEntry#pattern}
    */
    readonly pattern: ZeroTrustDlpCustomEntryPattern;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_entry#profile_id ZeroTrustDlpCustomEntry#profile_id}
    */
    readonly profileId?: string;
}
export interface ZeroTrustDlpCustomEntryConfidence {
}
export declare function zeroTrustDlpCustomEntryConfidenceToTerraform(struct?: ZeroTrustDlpCustomEntryConfidence): any;
export declare function zeroTrustDlpCustomEntryConfidenceToHclTerraform(struct?: ZeroTrustDlpCustomEntryConfidence): any;
export declare class ZeroTrustDlpCustomEntryConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpCustomEntryConfidence | undefined;
    set internalValue(value: ZeroTrustDlpCustomEntryConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface ZeroTrustDlpCustomEntryPattern {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_entry#regex ZeroTrustDlpCustomEntry#regex}
    */
    readonly regex: string;
    /**
    * Available values: "luhn".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_entry#validation ZeroTrustDlpCustomEntry#validation}
    */
    readonly validation?: string;
}
export declare function zeroTrustDlpCustomEntryPatternToTerraform(struct?: ZeroTrustDlpCustomEntryPattern | cdktf.IResolvable): any;
export declare function zeroTrustDlpCustomEntryPatternToHclTerraform(struct?: ZeroTrustDlpCustomEntryPattern | cdktf.IResolvable): any;
export declare class ZeroTrustDlpCustomEntryPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpCustomEntryPattern | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDlpCustomEntryPattern | cdktf.IResolvable | undefined);
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
export interface ZeroTrustDlpCustomEntryProfiles {
}
export declare function zeroTrustDlpCustomEntryProfilesToTerraform(struct?: ZeroTrustDlpCustomEntryProfiles): any;
export declare function zeroTrustDlpCustomEntryProfilesToHclTerraform(struct?: ZeroTrustDlpCustomEntryProfiles): any;
export declare class ZeroTrustDlpCustomEntryProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpCustomEntryProfiles | undefined;
    set internalValue(value: ZeroTrustDlpCustomEntryProfiles | undefined);
    get id(): any;
    get name(): any;
}
export declare class ZeroTrustDlpCustomEntryProfilesList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustDlpCustomEntryProfilesOutputReference;
}
export interface ZeroTrustDlpCustomEntryVariant {
}
export declare function zeroTrustDlpCustomEntryVariantToTerraform(struct?: ZeroTrustDlpCustomEntryVariant): any;
export declare function zeroTrustDlpCustomEntryVariantToHclTerraform(struct?: ZeroTrustDlpCustomEntryVariant): any;
export declare class ZeroTrustDlpCustomEntryVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpCustomEntryVariant | undefined;
    set internalValue(value: ZeroTrustDlpCustomEntryVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_entry cloudflare_zero_trust_dlp_custom_entry}
*/
export declare class ZeroTrustDlpCustomEntry extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_custom_entry";
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpCustomEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpCustomEntry to import
    * @param importFromId The id of the existing ZeroTrustDlpCustomEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpCustomEntry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_custom_entry cloudflare_zero_trust_dlp_custom_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpCustomEntryConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDlpCustomEntryConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get caseSensitive(): any;
    private _confidence;
    get confidence(): ZeroTrustDlpCustomEntryConfidenceOutputReference;
    get createdAt(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _pattern;
    get pattern(): ZeroTrustDlpCustomEntryPatternOutputReference;
    putPattern(value: ZeroTrustDlpCustomEntryPattern): void;
    get patternInput(): any;
    private _profileId?;
    get profileId(): string;
    set profileId(value: string);
    resetProfileId(): void;
    get profileIdInput(): string;
    private _profiles;
    get profiles(): ZeroTrustDlpCustomEntryProfilesList;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): ZeroTrustDlpCustomEntryVariantOutputReference;
    get wordList(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
