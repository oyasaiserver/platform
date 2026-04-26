import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareOrganizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#filter DataCloudflareOrganization#filter}
    */
    readonly filter?: DataCloudflareOrganizationFilter;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#organization_id DataCloudflareOrganization#organization_id}
    */
    readonly organizationId?: string;
}
export interface DataCloudflareOrganizationFilterContaining {
    /**
    * Filter the list of organizations to the ones that contain this particular
    * account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#account DataCloudflareOrganization#account}
    */
    readonly account?: string;
    /**
    * Filter the list of organizations to the ones that contain this particular
    * organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#organization DataCloudflareOrganization#organization}
    */
    readonly organization?: string;
    /**
    * Filter the list of organizations to the ones that contain this particular
    * user.
    *
    * IMPORTANT: Just because an organization "contains" a user is not a
    * representation of any authorization or privilege to manage any resources
    * therein. An organization "containing" a user simply means the user is managed by
    * that organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#user DataCloudflareOrganization#user}
    */
    readonly user?: string;
}
export declare function dataCloudflareOrganizationFilterContainingToTerraform(struct?: DataCloudflareOrganizationFilterContaining | cdktf.IResolvable): any;
export declare function dataCloudflareOrganizationFilterContainingToHclTerraform(struct?: DataCloudflareOrganizationFilterContaining | cdktf.IResolvable): any;
export declare class DataCloudflareOrganizationFilterContainingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationFilterContaining | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareOrganizationFilterContaining | cdktf.IResolvable | undefined);
    private _account?;
    get account(): string;
    set account(value: string);
    resetAccount(): void;
    get accountInput(): string;
    private _organization?;
    get organization(): string;
    set organization(value: string);
    resetOrganization(): void;
    get organizationInput(): string;
    private _user?;
    get user(): string;
    set user(value: string);
    resetUser(): void;
    get userInput(): string;
}
export interface DataCloudflareOrganizationFilterName {
    /**
    * (case-insensitive) Filter the list of organizations to where the name contains a particular
    * string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#contains DataCloudflareOrganization#contains}
    */
    readonly contains?: string;
    /**
    * (case-insensitive) Filter the list of organizations to where the name ends with a particular
    * string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#ends_with DataCloudflareOrganization#ends_with}
    */
    readonly endsWith?: string;
    /**
    * (case-insensitive) Filter the list of organizations to where the name starts with a
    * particular string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#starts_with DataCloudflareOrganization#starts_with}
    */
    readonly startsWith?: string;
}
export declare function dataCloudflareOrganizationFilterNameToTerraform(struct?: DataCloudflareOrganizationFilterName | cdktf.IResolvable): any;
export declare function dataCloudflareOrganizationFilterNameToHclTerraform(struct?: DataCloudflareOrganizationFilterName | cdktf.IResolvable): any;
export declare class DataCloudflareOrganizationFilterNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationFilterName | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareOrganizationFilterName | cdktf.IResolvable | undefined);
    private _contains?;
    get contains(): string;
    set contains(value: string);
    resetContains(): void;
    get containsInput(): string;
    private _endsWith?;
    get endsWith(): string;
    set endsWith(value: string);
    resetEndsWith(): void;
    get endsWithInput(): string;
    private _startsWith?;
    get startsWith(): string;
    set startsWith(value: string);
    resetStartsWith(): void;
    get startsWithInput(): string;
}
export interface DataCloudflareOrganizationFilterParent {
    /**
    * Filter the list of organizations to the ones that are a sub-organization
    * of the specified organization.
    *
    * "null" is a valid value to provide for this parameter. It means "where
    * an organization has no parent (i.e. it is a 'root' organization)."
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#id DataCloudflareOrganization#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export declare function dataCloudflareOrganizationFilterParentToTerraform(struct?: DataCloudflareOrganizationFilterParent | cdktf.IResolvable): any;
export declare function dataCloudflareOrganizationFilterParentToHclTerraform(struct?: DataCloudflareOrganizationFilterParent | cdktf.IResolvable): any;
export declare class DataCloudflareOrganizationFilterParentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationFilterParent | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareOrganizationFilterParent | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
}
export interface DataCloudflareOrganizationFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#containing DataCloudflareOrganization#containing}
    */
    readonly containing?: DataCloudflareOrganizationFilterContaining;
    /**
    * Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements
    * by repeating the query value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#id DataCloudflareOrganization#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#name DataCloudflareOrganization#name}
    */
    readonly name?: DataCloudflareOrganizationFilterName;
    /**
    * The amount of items to return. Defaults to 10.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#page_size DataCloudflareOrganization#page_size}
    */
    readonly pageSize?: number;
    /**
    * An opaque token returned from the last list response that when
    * provided will retrieve the next page.
    *
    * Parameters used to filter the retrieved list must remain in subsequent
    * requests with a page token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#page_token DataCloudflareOrganization#page_token}
    */
    readonly pageToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#parent DataCloudflareOrganization#parent}
    */
    readonly parent?: DataCloudflareOrganizationFilterParent;
}
export declare function dataCloudflareOrganizationFilterToTerraform(struct?: DataCloudflareOrganizationFilter | cdktf.IResolvable): any;
export declare function dataCloudflareOrganizationFilterToHclTerraform(struct?: DataCloudflareOrganizationFilter | cdktf.IResolvable): any;
export declare class DataCloudflareOrganizationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareOrganizationFilter | cdktf.IResolvable | undefined);
    private _containing;
    get containing(): DataCloudflareOrganizationFilterContainingOutputReference;
    putContaining(value: DataCloudflareOrganizationFilterContaining): void;
    resetContaining(): void;
    get containingInput(): any;
    private _id?;
    get id(): string[];
    set id(value: string[]);
    resetId(): void;
    get idInput(): string[];
    private _name;
    get name(): DataCloudflareOrganizationFilterNameOutputReference;
    putName(value: DataCloudflareOrganizationFilterName): void;
    resetName(): void;
    get nameInput(): any;
    private _pageSize?;
    get pageSize(): number;
    set pageSize(value: number);
    resetPageSize(): void;
    get pageSizeInput(): number;
    private _pageToken?;
    get pageToken(): string;
    set pageToken(value: string);
    resetPageToken(): void;
    get pageTokenInput(): string;
    private _parent;
    get parent(): DataCloudflareOrganizationFilterParentOutputReference;
    putParent(value: DataCloudflareOrganizationFilterParent): void;
    resetParent(): void;
    get parentInput(): any;
}
export interface DataCloudflareOrganizationMetaFlags {
}
export declare function dataCloudflareOrganizationMetaFlagsToTerraform(struct?: DataCloudflareOrganizationMetaFlags): any;
export declare function dataCloudflareOrganizationMetaFlagsToHclTerraform(struct?: DataCloudflareOrganizationMetaFlags): any;
export declare class DataCloudflareOrganizationMetaFlagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationMetaFlags | undefined;
    set internalValue(value: DataCloudflareOrganizationMetaFlags | undefined);
    get accountCreation(): any;
    get accountDeletion(): any;
    get accountMigration(): any;
    get accountMobility(): any;
    get subOrgCreation(): any;
}
export interface DataCloudflareOrganizationMeta {
}
export declare function dataCloudflareOrganizationMetaToTerraform(struct?: DataCloudflareOrganizationMeta): any;
export declare function dataCloudflareOrganizationMetaToHclTerraform(struct?: DataCloudflareOrganizationMeta): any;
export declare class DataCloudflareOrganizationMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationMeta | undefined;
    set internalValue(value: DataCloudflareOrganizationMeta | undefined);
    private _flags;
    get flags(): DataCloudflareOrganizationMetaFlagsOutputReference;
    get managedBy(): any;
}
export interface DataCloudflareOrganizationParent {
}
export declare function dataCloudflareOrganizationParentToTerraform(struct?: DataCloudflareOrganizationParent): any;
export declare function dataCloudflareOrganizationParentToHclTerraform(struct?: DataCloudflareOrganizationParent): any;
export declare class DataCloudflareOrganizationParentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationParent | undefined;
    set internalValue(value: DataCloudflareOrganizationParent | undefined);
    get id(): any;
    get name(): any;
}
export interface DataCloudflareOrganizationProfile {
}
export declare function dataCloudflareOrganizationProfileToTerraform(struct?: DataCloudflareOrganizationProfile): any;
export declare function dataCloudflareOrganizationProfileToHclTerraform(struct?: DataCloudflareOrganizationProfile): any;
export declare class DataCloudflareOrganizationProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationProfile | undefined;
    set internalValue(value: DataCloudflareOrganizationProfile | undefined);
    get businessAddress(): any;
    get businessEmail(): any;
    get businessName(): any;
    get businessPhone(): any;
    get externalMetadata(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization cloudflare_organization}
*/
export declare class DataCloudflareOrganization extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_organization";
    /**
    * Generates CDKTF code for importing a DataCloudflareOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOrganization to import
    * @param importFromId The id of the existing DataCloudflareOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOrganization to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization cloudflare_organization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOrganizationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareOrganizationConfig);
    get createTime(): any;
    private _filter;
    get filter(): DataCloudflareOrganizationFilterOutputReference;
    putFilter(value: DataCloudflareOrganizationFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    private _meta;
    get meta(): DataCloudflareOrganizationMetaOutputReference;
    get name(): any;
    private _organizationId?;
    get organizationId(): string;
    set organizationId(value: string);
    resetOrganizationId(): void;
    get organizationIdInput(): string;
    private _parent;
    get parent(): DataCloudflareOrganizationParentOutputReference;
    private _profile;
    get profile(): DataCloudflareOrganizationProfileOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
