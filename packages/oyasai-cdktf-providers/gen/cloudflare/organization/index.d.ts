import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#name Organization#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#parent Organization#parent}
    */
    readonly parent?: OrganizationParent;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#profile Organization#profile}
    */
    readonly profile?: OrganizationProfile;
}
export interface OrganizationMetaFlags {
}
export declare function organizationMetaFlagsToTerraform(struct?: OrganizationMetaFlags): any;
export declare function organizationMetaFlagsToHclTerraform(struct?: OrganizationMetaFlags): any;
export declare class OrganizationMetaFlagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationMetaFlags | undefined;
    set internalValue(value: OrganizationMetaFlags | undefined);
    get accountCreation(): any;
    get accountDeletion(): any;
    get accountMigration(): any;
    get accountMobility(): any;
    get subOrgCreation(): any;
}
export interface OrganizationMeta {
}
export declare function organizationMetaToTerraform(struct?: OrganizationMeta): any;
export declare function organizationMetaToHclTerraform(struct?: OrganizationMeta): any;
export declare class OrganizationMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationMeta | undefined;
    set internalValue(value: OrganizationMeta | undefined);
    private _flags;
    get flags(): OrganizationMetaFlagsOutputReference;
    get managedBy(): any;
}
export interface OrganizationParent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#id Organization#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function organizationParentToTerraform(struct?: OrganizationParent | cdktf.IResolvable): any;
export declare function organizationParentToHclTerraform(struct?: OrganizationParent | cdktf.IResolvable): any;
export declare class OrganizationParentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationParent | cdktf.IResolvable | undefined;
    set internalValue(value: OrganizationParent | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): any;
}
export interface OrganizationProfile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#business_address Organization#business_address}
    */
    readonly businessAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#business_email Organization#business_email}
    */
    readonly businessEmail: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#business_name Organization#business_name}
    */
    readonly businessName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#business_phone Organization#business_phone}
    */
    readonly businessPhone: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#external_metadata Organization#external_metadata}
    */
    readonly externalMetadata: string;
}
export declare function organizationProfileToTerraform(struct?: OrganizationProfile | cdktf.IResolvable): any;
export declare function organizationProfileToHclTerraform(struct?: OrganizationProfile | cdktf.IResolvable): any;
export declare class OrganizationProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationProfile | cdktf.IResolvable | undefined;
    set internalValue(value: OrganizationProfile | cdktf.IResolvable | undefined);
    private _businessAddress?;
    get businessAddress(): string;
    set businessAddress(value: string);
    get businessAddressInput(): string;
    private _businessEmail?;
    get businessEmail(): string;
    set businessEmail(value: string);
    get businessEmailInput(): string;
    private _businessName?;
    get businessName(): string;
    set businessName(value: string);
    get businessNameInput(): string;
    private _businessPhone?;
    get businessPhone(): string;
    set businessPhone(value: string);
    get businessPhoneInput(): string;
    private _externalMetadata?;
    get externalMetadata(): string;
    set externalMetadata(value: string);
    get externalMetadataInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization cloudflare_organization}
*/
export declare class Organization extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_organization";
    /**
    * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Organization to import
    * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Organization to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization cloudflare_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationConfig);
    get createTime(): any;
    get id(): any;
    private _meta;
    get meta(): OrganizationMetaOutputReference;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parent;
    get parent(): OrganizationParentOutputReference;
    putParent(value: OrganizationParent): void;
    resetParent(): void;
    get parentInput(): any;
    private _profile;
    get profile(): OrganizationProfileOutputReference;
    putProfile(value: OrganizationProfile): void;
    resetProfile(): void;
    get profileInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
