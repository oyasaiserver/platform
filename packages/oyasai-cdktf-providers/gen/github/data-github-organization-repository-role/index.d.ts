import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubOrganizationRepositoryRoleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_role#id DataGithubOrganizationRepositoryRole#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The ID of the organization repository role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_role#role_id DataGithubOrganizationRepositoryRole#role_id}
    */
    readonly roleId: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_role github_organization_repository_role}
*/
export declare class DataGithubOrganizationRepositoryRole extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_organization_repository_role";
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationRepositoryRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationRepositoryRole to import
    * @param importFromId The id of the existing DataGithubOrganizationRepositoryRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationRepositoryRole to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_repository_role github_organization_repository_role} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationRepositoryRoleConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubOrganizationRepositoryRoleConfig);
    get baseRole(): any;
    get description(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get name(): any;
    get permissions(): any;
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
