import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailSecurityTrustedDomainsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#account_id DataCloudflareEmailSecurityTrustedDomains#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#filter DataCloudflareEmailSecurityTrustedDomains#filter}
    */
    readonly filter?: DataCloudflareEmailSecurityTrustedDomainsFilter;
    /**
    * The unique identifier for the trusted domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#trusted_domain_id DataCloudflareEmailSecurityTrustedDomains#trusted_domain_id}
    */
    readonly trustedDomainId?: number;
}
export interface DataCloudflareEmailSecurityTrustedDomainsFilter {
    /**
    * The sorting direction.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#direction DataCloudflareEmailSecurityTrustedDomains#direction}
    */
    readonly direction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#is_recent DataCloudflareEmailSecurityTrustedDomains#is_recent}
    */
    readonly isRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#is_similarity DataCloudflareEmailSecurityTrustedDomains#is_similarity}
    */
    readonly isSimilarity?: boolean | cdktf.IResolvable;
    /**
    * The field to sort by.
    * Available values: "pattern", "created_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#order DataCloudflareEmailSecurityTrustedDomains#order}
    */
    readonly order?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#pattern DataCloudflareEmailSecurityTrustedDomains#pattern}
    */
    readonly pattern?: string;
    /**
    * Allows searching in multiple properties of a record simultaneously.
    * This parameter is intended for human users, not automation. Its exact
    * behavior is intentionally left unspecified and is subject to change
    * in the future.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#search DataCloudflareEmailSecurityTrustedDomains#search}
    */
    readonly search?: string;
}
export declare function dataCloudflareEmailSecurityTrustedDomainsFilterToTerraform(struct?: DataCloudflareEmailSecurityTrustedDomainsFilter | cdktf.IResolvable): any;
export declare function dataCloudflareEmailSecurityTrustedDomainsFilterToHclTerraform(struct?: DataCloudflareEmailSecurityTrustedDomainsFilter | cdktf.IResolvable): any;
export declare class DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareEmailSecurityTrustedDomainsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareEmailSecurityTrustedDomainsFilter | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _isRecent?;
    get isRecent(): boolean | cdktf.IResolvable;
    set isRecent(value: boolean | cdktf.IResolvable);
    resetIsRecent(): void;
    get isRecentInput(): any;
    private _isSimilarity?;
    get isSimilarity(): boolean | cdktf.IResolvable;
    set isSimilarity(value: boolean | cdktf.IResolvable);
    resetIsSimilarity(): void;
    get isSimilarityInput(): any;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    resetPattern(): void;
    get patternInput(): string;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains cloudflare_email_security_trusted_domains}
*/
export declare class DataCloudflareEmailSecurityTrustedDomains extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_security_trusted_domains";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityTrustedDomains to import
    * @param importFromId The id of the existing DataCloudflareEmailSecurityTrustedDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityTrustedDomains to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains cloudflare_email_security_trusted_domains} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailSecurityTrustedDomainsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailSecurityTrustedDomainsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get comments(): any;
    get createdAt(): any;
    private _filter;
    get filter(): DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference;
    putFilter(value: DataCloudflareEmailSecurityTrustedDomainsFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get isRecent(): any;
    get isRegex(): any;
    get isSimilarity(): any;
    get lastModified(): any;
    get pattern(): any;
    private _trustedDomainId?;
    get trustedDomainId(): number;
    set trustedDomainId(value: number);
    resetTrustedDomainId(): void;
    get trustedDomainIdInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
