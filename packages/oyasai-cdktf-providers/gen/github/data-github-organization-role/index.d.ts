import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubOrganizationRoleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role#id DataGithubOrganizationRole#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The ID of the organization role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role#role_id DataGithubOrganizationRole#role_id}
    */
    readonly roleId: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role github_organization_role}
*/
export declare class DataGithubOrganizationRole extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_organization_role";
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationRole resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationRole to import
    * @param importFromId The id of the existing DataGithubOrganizationRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationRole to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role github_organization_role} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationRoleConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubOrganizationRoleConfig);
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
    get source(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
