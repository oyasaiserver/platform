import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDlpIntegrationEntryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_integration_entry#account_id ZeroTrustDlpIntegrationEntry#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_integration_entry#enabled ZeroTrustDlpIntegrationEntry#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_integration_entry#entry_id ZeroTrustDlpIntegrationEntry#entry_id}
    */
    readonly entryId: string;
    /**
    * This field is not used as the owning profile.
    * For predefined entries it is already set to a predefined profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_integration_entry#profile_id ZeroTrustDlpIntegrationEntry#profile_id}
    */
    readonly profileId?: string;
}
export interface ZeroTrustDlpIntegrationEntryConfidence {
}
export declare function zeroTrustDlpIntegrationEntryConfidenceToTerraform(struct?: ZeroTrustDlpIntegrationEntryConfidence): any;
export declare function zeroTrustDlpIntegrationEntryConfidenceToHclTerraform(struct?: ZeroTrustDlpIntegrationEntryConfidence): any;
export declare class ZeroTrustDlpIntegrationEntryConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpIntegrationEntryConfidence | undefined;
    set internalValue(value: ZeroTrustDlpIntegrationEntryConfidence | undefined);
    get aiContextAvailable(): any;
    get available(): any;
}
export interface ZeroTrustDlpIntegrationEntryPattern {
}
export declare function zeroTrustDlpIntegrationEntryPatternToTerraform(struct?: ZeroTrustDlpIntegrationEntryPattern): any;
export declare function zeroTrustDlpIntegrationEntryPatternToHclTerraform(struct?: ZeroTrustDlpIntegrationEntryPattern): any;
export declare class ZeroTrustDlpIntegrationEntryPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpIntegrationEntryPattern | undefined;
    set internalValue(value: ZeroTrustDlpIntegrationEntryPattern | undefined);
    get regex(): any;
    get validation(): any;
}
export interface ZeroTrustDlpIntegrationEntryProfiles {
}
export declare function zeroTrustDlpIntegrationEntryProfilesToTerraform(struct?: ZeroTrustDlpIntegrationEntryProfiles): any;
export declare function zeroTrustDlpIntegrationEntryProfilesToHclTerraform(struct?: ZeroTrustDlpIntegrationEntryProfiles): any;
export declare class ZeroTrustDlpIntegrationEntryProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDlpIntegrationEntryProfiles | undefined;
    set internalValue(value: ZeroTrustDlpIntegrationEntryProfiles | undefined);
    get id(): any;
    get name(): any;
}
export declare class ZeroTrustDlpIntegrationEntryProfilesList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustDlpIntegrationEntryProfilesOutputReference;
}
export interface ZeroTrustDlpIntegrationEntryVariant {
}
export declare function zeroTrustDlpIntegrationEntryVariantToTerraform(struct?: ZeroTrustDlpIntegrationEntryVariant): any;
export declare function zeroTrustDlpIntegrationEntryVariantToHclTerraform(struct?: ZeroTrustDlpIntegrationEntryVariant): any;
export declare class ZeroTrustDlpIntegrationEntryVariantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDlpIntegrationEntryVariant | undefined;
    set internalValue(value: ZeroTrustDlpIntegrationEntryVariant | undefined);
    get description(): any;
    get topicType(): any;
    get type(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_integration_entry cloudflare_zero_trust_dlp_integration_entry}
*/
export declare class ZeroTrustDlpIntegrationEntry extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_dlp_integration_entry";
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpIntegrationEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpIntegrationEntry to import
    * @param importFromId The id of the existing ZeroTrustDlpIntegrationEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_integration_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpIntegrationEntry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_integration_entry cloudflare_zero_trust_dlp_integration_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpIntegrationEntryConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDlpIntegrationEntryConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get caseSensitive(): any;
    private _confidence;
    get confidence(): ZeroTrustDlpIntegrationEntryConfidenceOutputReference;
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
    get pattern(): ZeroTrustDlpIntegrationEntryPatternOutputReference;
    private _profileId?;
    get profileId(): string;
    set profileId(value: string);
    resetProfileId(): void;
    get profileIdInput(): string;
    private _profiles;
    get profiles(): ZeroTrustDlpIntegrationEntryProfilesList;
    get secret(): any;
    get type(): any;
    get updatedAt(): any;
    get uploadStatus(): any;
    private _variant;
    get variant(): ZeroTrustDlpIntegrationEntryVariantOutputReference;
    get wordList(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
