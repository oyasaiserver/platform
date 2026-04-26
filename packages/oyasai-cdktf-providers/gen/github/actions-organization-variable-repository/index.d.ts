import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsOrganizationVariableRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repository#id ActionsOrganizationVariableRepository#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The repository ID that can access the organization variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repository#repository_id ActionsOrganizationVariableRepository#repository_id}
    */
    readonly repositoryId: number;
    /**
    * Name of the existing variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repository#variable_name ActionsOrganizationVariableRepository#variable_name}
    */
    readonly variableName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repository github_actions_organization_variable_repository}
*/
export declare class ActionsOrganizationVariableRepository extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_organization_variable_repository";
    /**
    * Generates CDKTF code for importing a ActionsOrganizationVariableRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationVariableRepository to import
    * @param importFromId The id of the existing ActionsOrganizationVariableRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationVariableRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable_repository github_actions_organization_variable_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationVariableRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: ActionsOrganizationVariableRepositoryConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _repositoryId?;
    get repositoryId(): number;
    set repositoryId(value: number);
    get repositoryIdInput(): number;
    private _variableName?;
    get variableName(): string;
    set variableName(value: string);
    get variableNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
