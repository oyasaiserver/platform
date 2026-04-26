import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PagesDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_domain#account_id PagesDomain#account_id}
    */
    readonly accountId?: string;
    /**
    * The domain name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_domain#name PagesDomain#name}
    */
    readonly name: string;
    /**
    * Name of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_domain#project_name PagesDomain#project_name}
    */
    readonly projectName: string;
}
export interface PagesDomainValidationData {
}
export declare function pagesDomainValidationDataToTerraform(struct?: PagesDomainValidationData): any;
export declare function pagesDomainValidationDataToHclTerraform(struct?: PagesDomainValidationData): any;
export declare class PagesDomainValidationDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesDomainValidationData | undefined;
    set internalValue(value: PagesDomainValidationData | undefined);
    get errorMessage(): any;
    get method(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export interface PagesDomainVerificationData {
}
export declare function pagesDomainVerificationDataToTerraform(struct?: PagesDomainVerificationData): any;
export declare function pagesDomainVerificationDataToHclTerraform(struct?: PagesDomainVerificationData): any;
export declare class PagesDomainVerificationDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PagesDomainVerificationData | undefined;
    set internalValue(value: PagesDomainVerificationData | undefined);
    get errorMessage(): any;
    get status(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_domain cloudflare_pages_domain}
*/
export declare class PagesDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_pages_domain";
    /**
    * Generates CDKTF code for importing a PagesDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PagesDomain to import
    * @param importFromId The id of the existing PagesDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PagesDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_domain cloudflare_pages_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PagesDomainConfig
    */
    constructor(scope: Construct, id: string, config: PagesDomainConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get certificateAuthority(): any;
    get createdOn(): any;
    get domainId(): any;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string;
    get status(): any;
    private _validationData;
    get validationData(): PagesDomainValidationDataOutputReference;
    private _verificationData;
    get verificationData(): PagesDomainVerificationDataOutputReference;
    get zoneTag(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
