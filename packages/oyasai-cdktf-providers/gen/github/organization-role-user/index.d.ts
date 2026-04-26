import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationRoleUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_user#id OrganizationRoleUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The login for the GitHub user account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_user#login OrganizationRoleUser#login}
    */
    readonly login: string;
    /**
    * The unique identifier of the organization role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_user#role_id OrganizationRoleUser#role_id}
    */
    readonly roleId: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_user github_organization_role_user}
*/
export declare class OrganizationRoleUser extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_organization_role_user";
    /**
    * Generates CDKTF code for importing a OrganizationRoleUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationRoleUser to import
    * @param importFromId The id of the existing OrganizationRoleUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationRoleUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_role_user github_organization_role_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationRoleUserConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationRoleUserConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _login?;
    get login(): string;
    set login(value: string);
    get loginInput(): string;
    private _roleId?;
    get roleId(): number;
    set roleId(value: number);
    get roleIdInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
