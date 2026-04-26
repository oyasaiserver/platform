import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareOrganizationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}
    */
    readonly containing?: DataCloudflareOrganizationsContaining;
    /**
    * Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements
    * by repeating the query value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#id DataCloudflareOrganizations#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string[];
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#max_items DataCloudflareOrganizations#max_items}
    */
    readonly maxItems?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}
    */
    readonly name?: DataCloudflareOrganizationsName;
    /**
    * The amount of items to return. Defaults to 10.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#page_size DataCloudflareOrganizations#page_size}
    */
    readonly pageSize?: number;
    /**
    * An opaque token returned from the last list response that when
    * provided will retrieve the next page.
    *
    * Parameters used to filter the retrieved list must remain in subsequent
    * requests with a page token.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#page_token DataCloudflareOrganizations#page_token}
    */
    readonly pageToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}
    */
    readonly parent?: DataCloudflareOrganizationsParent;
}
export interface DataCloudflareOrganizationsContaining {
    /**
    * Filter the list of organizations to the ones that contain this particular
    * account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#account DataCloudflareOrganizations#account}
    */
    readonly account?: string;
    /**
    * Filter the list of organizations to the ones that contain this particular
    * organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#organization DataCloudflareOrganizations#organization}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#user DataCloudflareOrganizations#user}
    */
    readonly user?: string;
}
export declare function dataCloudflareOrganizationsContainingToTerraform(struct?: DataCloudflareOrganizationsContaining | cdktf.IResolvable): any;
export declare function dataCloudflareOrganizationsContainingToHclTerraform(struct?: DataCloudflareOrganizationsContaining | cdktf.IResolvable): any;
export declare class DataCloudflareOrganizationsContainingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationsContaining | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareOrganizationsContaining | cdktf.IResolvable | undefined);
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
export interface DataCloudflareOrganizationsName {
    /**
    * (case-insensitive) Filter the list of organizations to where the name contains a particular
    * string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#contains DataCloudflareOrganizations#contains}
    */
    readonly contains?: string;
    /**
    * (case-insensitive) Filter the list of organizations to where the name ends with a particular
    * string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#ends_with DataCloudflareOrganizations#ends_with}
    */
    readonly endsWith?: string;
    /**
    * (case-insensitive) Filter the list of organizations to where the name starts with a
    * particular string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#starts_with DataCloudflareOrganizations#starts_with}
    */
    readonly startsWith?: string;
}
export declare function dataCloudflareOrganizationsNameToTerraform(struct?: DataCloudflareOrganizationsName | cdktf.IResolvable): any;
export declare function dataCloudflareOrganizationsNameToHclTerraform(struct?: DataCloudflareOrganizationsName | cdktf.IResolvable): any;
export declare class DataCloudflareOrganizationsNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationsName | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareOrganizationsName | cdktf.IResolvable | undefined);
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
export interface DataCloudflareOrganizationsParent {
}
export declare function dataCloudflareOrganizationsParentToTerraform(struct?: DataCloudflareOrganizationsParent | cdktf.IResolvable): any;
export declare function dataCloudflareOrganizationsParentToHclTerraform(struct?: DataCloudflareOrganizationsParent | cdktf.IResolvable): any;
export declare class DataCloudflareOrganizationsParentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationsParent | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareOrganizationsParent | cdktf.IResolvable | undefined);
    get id(): any;
}
export interface DataCloudflareOrganizationsResultMetaFlags {
}
export declare function dataCloudflareOrganizationsResultMetaFlagsToTerraform(struct?: DataCloudflareOrganizationsResultMetaFlags): any;
export declare function dataCloudflareOrganizationsResultMetaFlagsToHclTerraform(struct?: DataCloudflareOrganizationsResultMetaFlags): any;
export declare class DataCloudflareOrganizationsResultMetaFlagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationsResultMetaFlags | undefined;
    set internalValue(value: DataCloudflareOrganizationsResultMetaFlags | undefined);
    get accountCreation(): any;
    get accountDeletion(): any;
    get accountMigration(): any;
    get accountMobility(): any;
    get subOrgCreation(): any;
}
export interface DataCloudflareOrganizationsResultMeta {
}
export declare function dataCloudflareOrganizationsResultMetaToTerraform(struct?: DataCloudflareOrganizationsResultMeta): any;
export declare function dataCloudflareOrganizationsResultMetaToHclTerraform(struct?: DataCloudflareOrganizationsResultMeta): any;
export declare class DataCloudflareOrganizationsResultMetaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationsResultMeta | undefined;
    set internalValue(value: DataCloudflareOrganizationsResultMeta | undefined);
    private _flags;
    get flags(): DataCloudflareOrganizationsResultMetaFlagsOutputReference;
    get managedBy(): any;
}
export interface DataCloudflareOrganizationsResultParent {
}
export declare function dataCloudflareOrganizationsResultParentToTerraform(struct?: DataCloudflareOrganizationsResultParent): any;
export declare function dataCloudflareOrganizationsResultParentToHclTerraform(struct?: DataCloudflareOrganizationsResultParent): any;
export declare class DataCloudflareOrganizationsResultParentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationsResultParent | undefined;
    set internalValue(value: DataCloudflareOrganizationsResultParent | undefined);
    get id(): any;
    get name(): any;
}
export interface DataCloudflareOrganizationsResultProfile {
}
export declare function dataCloudflareOrganizationsResultProfileToTerraform(struct?: DataCloudflareOrganizationsResultProfile): any;
export declare function dataCloudflareOrganizationsResultProfileToHclTerraform(struct?: DataCloudflareOrganizationsResultProfile): any;
export declare class DataCloudflareOrganizationsResultProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOrganizationsResultProfile | undefined;
    set internalValue(value: DataCloudflareOrganizationsResultProfile | undefined);
    get businessAddress(): any;
    get businessEmail(): any;
    get businessName(): any;
    get businessPhone(): any;
    get externalMetadata(): any;
}
export interface DataCloudflareOrganizationsResult {
}
export declare function dataCloudflareOrganizationsResultToTerraform(struct?: DataCloudflareOrganizationsResult): any;
export declare function dataCloudflareOrganizationsResultToHclTerraform(struct?: DataCloudflareOrganizationsResult): any;
export declare class DataCloudflareOrganizationsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareOrganizationsResult | undefined;
    set internalValue(value: DataCloudflareOrganizationsResult | undefined);
    get createTime(): any;
    get id(): any;
    private _meta;
    get meta(): DataCloudflareOrganizationsResultMetaOutputReference;
    get name(): any;
    private _parent;
    get parent(): DataCloudflareOrganizationsResultParentOutputReference;
    private _profile;
    get profile(): DataCloudflareOrganizationsResultProfileOutputReference;
}
export declare class DataCloudflareOrganizationsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareOrganizationsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations cloudflare_organizations}
*/
export declare class DataCloudflareOrganizations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_organizations";
    /**
    * Generates CDKTF code for importing a DataCloudflareOrganizations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOrganizations to import
    * @param importFromId The id of the existing DataCloudflareOrganizations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOrganizations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organizations cloudflare_organizations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOrganizationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareOrganizationsConfig);
    private _containing;
    get containing(): DataCloudflareOrganizationsContainingOutputReference;
    putContaining(value: DataCloudflareOrganizationsContaining): void;
    resetContaining(): void;
    get containingInput(): any;
    private _id?;
    get id(): string[];
    set id(value: string[]);
    resetId(): void;
    get idInput(): string[];
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _name;
    get name(): DataCloudflareOrganizationsNameOutputReference;
    putName(value: DataCloudflareOrganizationsName): void;
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
    get parent(): DataCloudflareOrganizationsParentOutputReference;
    putParent(value: DataCloudflareOrganizationsParent): void;
    resetParent(): void;
    get parentInput(): any;
    private _result;
    get result(): DataCloudflareOrganizationsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
