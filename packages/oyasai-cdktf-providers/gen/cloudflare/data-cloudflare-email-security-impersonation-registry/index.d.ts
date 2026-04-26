import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailSecurityImpersonationRegistryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry#account_id DataCloudflareEmailSecurityImpersonationRegistry#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry#display_name_id DataCloudflareEmailSecurityImpersonationRegistry#display_name_id}
    */
    readonly displayNameId?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry#filter DataCloudflareEmailSecurityImpersonationRegistry#filter}
    */
    readonly filter?: DataCloudflareEmailSecurityImpersonationRegistryFilter;
}
export interface DataCloudflareEmailSecurityImpersonationRegistryFilter {
    /**
    * The sorting direction.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry#direction DataCloudflareEmailSecurityImpersonationRegistry#direction}
    */
    readonly direction?: string;
    /**
    * The field to sort by.
    * Available values: "name", "email", "created_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry#order DataCloudflareEmailSecurityImpersonationRegistry#order}
    */
    readonly order?: string;
    /**
    * Available values: "A1S_INTERNAL", "SNOOPY-CASB_OFFICE_365", "SNOOPY-OFFICE_365", "SNOOPY-GOOGLE_DIRECTORY".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry#provenance DataCloudflareEmailSecurityImpersonationRegistry#provenance}
    */
    readonly provenance?: string;
    /**
    * Allows searching in multiple properties of a record simultaneously.
    * This parameter is intended for human users, not automation. Its exact
    * behavior is intentionally left unspecified and is subject to change
    * in the future.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry#search DataCloudflareEmailSecurityImpersonationRegistry#search}
    */
    readonly search?: string;
}
export declare function dataCloudflareEmailSecurityImpersonationRegistryFilterToTerraform(struct?: DataCloudflareEmailSecurityImpersonationRegistryFilter | cdktf.IResolvable): any;
export declare function dataCloudflareEmailSecurityImpersonationRegistryFilterToHclTerraform(struct?: DataCloudflareEmailSecurityImpersonationRegistryFilter | cdktf.IResolvable): any;
export declare class DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareEmailSecurityImpersonationRegistryFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareEmailSecurityImpersonationRegistryFilter | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
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
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}
*/
export declare class DataCloudflareEmailSecurityImpersonationRegistry extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_security_impersonation_registry";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityImpersonationRegistry to import
    * @param importFromId The id of the existing DataCloudflareEmailSecurityImpersonationRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityImpersonationRegistry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailSecurityImpersonationRegistryConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailSecurityImpersonationRegistryConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get comments(): any;
    get createdAt(): any;
    get directoryId(): any;
    get directoryNodeId(): any;
    private _displayNameId?;
    get displayNameId(): number;
    set displayNameId(value: number);
    resetDisplayNameId(): void;
    get displayNameIdInput(): number;
    get email(): any;
    get externalDirectoryNodeId(): any;
    private _filter;
    get filter(): DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference;
    putFilter(value: DataCloudflareEmailSecurityImpersonationRegistryFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get isEmailRegex(): any;
    get lastModified(): any;
    get name(): any;
    get provenance(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
