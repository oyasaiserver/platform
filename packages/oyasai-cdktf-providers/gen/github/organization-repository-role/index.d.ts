import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationRepositoryRoleConfig extends cdktf.TerraformMetaArguments {
    /**
    * The base role for the organization repository role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_repository_role#base_role OrganizationRepositoryRole#base_role}
    */
    readonly baseRole: string;
    /**
    * The description of the organization repository role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_repository_role#description OrganizationRepositoryRole#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_repository_role#id OrganizationRepositoryRole#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the organization repository role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_repository_role#name OrganizationRepositoryRole#name}
    */
    readonly name: string;
    /**
    * The permissions for the organization repository role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_repository_role#permissions OrganizationRepositoryRole#permissions}
    */
    readonly permissions: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_repository_role github_organization_repository_role}
*/
export declare class OrganizationRepositoryRole extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_organization_repository_role";
    /**
    * Generates CDKTF code for importing a OrganizationRepositoryRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationRepositoryRole to import
    * @param importFromId The id of the existing OrganizationRepositoryRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_repository_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationRepositoryRole to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_repository_role github_organization_repository_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationRepositoryRoleConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationRepositoryRoleConfig);
    private _baseRole?;
    get baseRole(): string;
    set baseRole(value: string);
    get baseRoleInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _permissions?;
    get permissions(): string[];
    set permissions(value: string[]);
    get permissionsInput(): string[];
    get roleId(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
