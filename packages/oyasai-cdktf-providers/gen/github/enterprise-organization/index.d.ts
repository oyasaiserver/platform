import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EnterpriseOrganizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * List of organization owner usernames.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization#admin_logins EnterpriseOrganization#admin_logins}
    */
    readonly adminLogins: string[];
    /**
    * The billing email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization#billing_email EnterpriseOrganization#billing_email}
    */
    readonly billingEmail: string;
    /**
    * The description of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization#description EnterpriseOrganization#description}
    */
    readonly description?: string;
    /**
    * The display name of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization#display_name EnterpriseOrganization#display_name}
    */
    readonly displayName?: string;
    /**
    * The ID of the enterprise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization#enterprise_id EnterpriseOrganization#enterprise_id}
    */
    readonly enterpriseId: string;
    /**
    * The name of the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization#name EnterpriseOrganization#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization github_enterprise_organization}
*/
export declare class EnterpriseOrganization extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_enterprise_organization";
    /**
    * Generates CDKTF code for importing a EnterpriseOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EnterpriseOrganization to import
    * @param importFromId The id of the existing EnterpriseOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EnterpriseOrganization to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/enterprise_organization github_enterprise_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EnterpriseOrganizationConfig
    */
    constructor(scope: Construct, id: string, config: EnterpriseOrganizationConfig);
    private _adminLogins?;
    get adminLogins(): string[];
    set adminLogins(value: string[]);
    get adminLoginsInput(): string[];
    private _billingEmail?;
    get billingEmail(): string;
    set billingEmail(value: string);
    get billingEmailInput(): string;
    get databaseId(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string;
    private _enterpriseId?;
    get enterpriseId(): string;
    set enterpriseId(value: string);
    get enterpriseIdInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
