import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailSecurityImpersonationRegistriesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries#account_id DataCloudflareEmailSecurityImpersonationRegistries#account_id}
    */
    readonly accountId?: string;
    /**
    * The sorting direction.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries#direction DataCloudflareEmailSecurityImpersonationRegistries#direction}
    */
    readonly direction?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries#max_items DataCloudflareEmailSecurityImpersonationRegistries#max_items}
    */
    readonly maxItems?: number;
    /**
    * The field to sort by.
    * Available values: "name", "email", "created_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries#order DataCloudflareEmailSecurityImpersonationRegistries#order}
    */
    readonly order?: string;
    /**
    * Available values: "A1S_INTERNAL", "SNOOPY-CASB_OFFICE_365", "SNOOPY-OFFICE_365", "SNOOPY-GOOGLE_DIRECTORY".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries#provenance DataCloudflareEmailSecurityImpersonationRegistries#provenance}
    */
    readonly provenance?: string;
    /**
    * Allows searching in multiple properties of a record simultaneously.
    * This parameter is intended for human users, not automation. Its exact
    * behavior is intentionally left unspecified and is subject to change
    * in the future.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries#search DataCloudflareEmailSecurityImpersonationRegistries#search}
    */
    readonly search?: string;
}
export interface DataCloudflareEmailSecurityImpersonationRegistriesResult {
}
export declare function dataCloudflareEmailSecurityImpersonationRegistriesResultToTerraform(struct?: DataCloudflareEmailSecurityImpersonationRegistriesResult): any;
export declare function dataCloudflareEmailSecurityImpersonationRegistriesResultToHclTerraform(struct?: DataCloudflareEmailSecurityImpersonationRegistriesResult): any;
export declare class DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailSecurityImpersonationRegistriesResult | undefined;
    set internalValue(value: DataCloudflareEmailSecurityImpersonationRegistriesResult | undefined);
    get comments(): any;
    get createdAt(): any;
    get directoryId(): any;
    get directoryNodeId(): any;
    get email(): any;
    get externalDirectoryNodeId(): any;
    get id(): any;
    get isEmailRegex(): any;
    get lastModified(): any;
    get name(): any;
    get provenance(): any;
}
export declare class DataCloudflareEmailSecurityImpersonationRegistriesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailSecurityImpersonationRegistriesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries cloudflare_email_security_impersonation_registries}
*/
export declare class DataCloudflareEmailSecurityImpersonationRegistries extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_security_impersonation_registries";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailSecurityImpersonationRegistries resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityImpersonationRegistries to import
    * @param importFromId The id of the existing DataCloudflareEmailSecurityImpersonationRegistries that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityImpersonationRegistries to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registries cloudflare_email_security_impersonation_registries} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailSecurityImpersonationRegistriesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailSecurityImpersonationRegistriesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _provenance?;
    get provenance(): string;
    set provenance(value: string);
    resetProvenance(): void;
    get provenanceInput(): string;
    private _result;
    get result(): DataCloudflareEmailSecurityImpersonationRegistriesResultList;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
