import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDlpEntryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry#account_id ZeroTrustDlpEntry#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry#description ZeroTrustDlpEntry#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry#enabled ZeroTrustDlpEntry#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry#name ZeroTrustDlpEntry#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry#pattern ZeroTrustDlpEntry#pattern}
    */
    readonly pattern: ZeroTrustDlpEntryPattern;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry#profile_id ZeroTrustDlpEntry#profile_id}
    */
    readonly profileId?: string;
    /**
    * Available values: "custom", "predefined", "integration".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry#type ZeroTrustDlpEntry#type}
    */
    readonly type?: string;
}
export interface ZeroTrustDlpEntryConfidence {
}
export declare function zeroTrustDlpEntryConfidenceToTerraform(struct?: ZeroTrustDlpEntryConfidence): any;
export declare function zeroTrustDlpEntryConfidenceToHclTerraform(struct?: ZeroTrustDlpEntryConfidence): any;
export declare class ZeroTrustDlpEntryConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpEntryConfidence | undefined;
    set internalValue(value: ZeroTrustDlpEntryConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface ZeroTrustDlpEntryPattern {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry#regex ZeroTrustDlpEntry#regex}
    */
    readonly regex: string;
    /**
    * Available values: "luhn".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry#validation ZeroTrustDlpEntry#validation}
    */
    readonly validation?: string;
}
export declare function zeroTrustDlpEntryPatternToTerraform(struct?: ZeroTrustDlpEntryPattern | cdktf.IResolvable): any;
export declare function zeroTrustDlpEntryPatternToHclTerraform(struct?: ZeroTrustDlpEntryPattern | cdktf.IResolvable): any;
export declare class ZeroTrustDlpEntryPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpEntryPattern | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDlpEntryPattern | cdktf.IResolvable | undefined);
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
export interface ZeroTrustDlpEntryProfiles {
}
export declare function zeroTrustDlpEntryProfilesToTerraform(struct?: ZeroTrustDlpEntryProfiles): any;
export declare function zeroTrustDlpEntryProfilesToHclTerraform(struct?: ZeroTrustDlpEntryProfiles): any;
export declare class ZeroTrustDlpEntryProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpEntryProfiles | undefined;
    set internalValue(value: ZeroTrustDlpEntryProfiles | undefined);
    get id(): any;
    get name(): any;
}
export declare class ZeroTrustDlpEntryProfilesList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustDlpEntryProfilesOutputReference;
}
export interface ZeroTrustDlpEntryVariant {
}
export declare function zeroTrustDlpEntryVariantToTerraform(struct?: ZeroTrustDlpEntryVariant): any;
export declare function zeroTrustDlpEntryVariantToHclTerraform(struct?: ZeroTrustDlpEntryVariant): any;
export declare class ZeroTrustDlpEntryVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpEntryVariant | undefined;
    set internalValue(value: ZeroTrustDlpEntryVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry cloudflare_zero_trust_dlp_entry}
*/
export declare class ZeroTrustDlpEntry extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_entry";
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpEntry to import
    * @param importFromId The id of the existing ZeroTrustDlpEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpEntry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_entry cloudflare_zero_trust_dlp_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpEntryConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDlpEntryConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get caseSensitive(): any;
    private _confidence;
    get confidence(): ZeroTrustDlpEntryConfidenceOutputReference;
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
    get pattern(): ZeroTrustDlpEntryPatternOutputReference;
    putPattern(value: ZeroTrustDlpEntryPattern): void;
    get patternInput(): any;
    private _profileId?;
    get profileId(): string;
    set profileId(value: string);
    resetProfileId(): void;
    get profileIdInput(): string;
    private _profiles;
    get profiles(): ZeroTrustDlpEntryProfilesList;
    get secret(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): ZeroTrustDlpEntryVariantOutputReference;
    get wordList(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
