import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePagesDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domain#account_id DataCloudflarePagesDomain#account_id}
    */
    readonly accountId?: string;
    /**
    * The domain name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domain#domain_name DataCloudflarePagesDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Name of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domain#project_name DataCloudflarePagesDomain#project_name}
    */
    readonly projectName: string;
}
export interface DataCloudflarePagesDomainValidationData {
}
export declare function dataCloudflarePagesDomainValidationDataToTerraform(struct?: DataCloudflarePagesDomainValidationData): any;
export declare function dataCloudflarePagesDomainValidationDataToHclTerraform(struct?: DataCloudflarePagesDomainValidationData): any;
export declare class DataCloudflarePagesDomainValidationDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesDomainValidationData | undefined;
    set internalValue(value: DataCloudflarePagesDomainValidationData | undefined);
    get errorMessage(): any;
    get method(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export interface DataCloudflarePagesDomainVerificationData {
}
export declare function dataCloudflarePagesDomainVerificationDataToTerraform(struct?: DataCloudflarePagesDomainVerificationData): any;
export declare function dataCloudflarePagesDomainVerificationDataToHclTerraform(struct?: DataCloudflarePagesDomainVerificationData): any;
export declare class DataCloudflarePagesDomainVerificationDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflarePagesDomainVerificationData | undefined;
    set internalValue(value: DataCloudflarePagesDomainVerificationData | undefined);
    get errorMessage(): any;
    get status(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domain cloudflare_pages_domain}
*/
export declare class DataCloudflarePagesDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_pages_domain";
    /**
    * Generates CDKTF code for importing a DataCloudflarePagesDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePagesDomain to import
    * @param importFromId The id of the existing DataCloudflarePagesDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePagesDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domain cloudflare_pages_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePagesDomainConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflarePagesDomainConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get certificateAuthority(): any;
    get createdOn(): any;
    get domainId(): any;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): any;
    get name(): any;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string;
    get status(): any;
    private _validationData;
    get validationData(): DataCloudflarePagesDomainValidationDataOutputReference;
    private _verificationData;
    get verificationData(): DataCloudflarePagesDomainVerificationDataOutputReference;
    get zoneTag(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
