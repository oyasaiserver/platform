import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsOrganizationVariableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable#id ActionsOrganizationVariable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * An array of repository ids that can access the organization variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable#selected_repository_ids ActionsOrganizationVariable#selected_repository_ids}
    */
    readonly selectedRepositoryIds?: number[];
    /**
    * Value of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable#value ActionsOrganizationVariable#value}
    */
    readonly value: string;
    /**
    * Name of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable#variable_name ActionsOrganizationVariable#variable_name}
    */
    readonly variableName: string;
    /**
    * Configures the access that repositories have to the organization variable. Must be one of 'all', 'private', or 'selected'. 'selected_repository_ids' is required if set to 'selected'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable#visibility ActionsOrganizationVariable#visibility}
    */
    readonly visibility: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable github_actions_organization_variable}
*/
export declare class ActionsOrganizationVariable extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_organization_variable";
    /**
    * Generates CDKTF code for importing a ActionsOrganizationVariable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationVariable to import
    * @param importFromId The id of the existing ActionsOrganizationVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationVariable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable github_actions_organization_variable} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationVariableConfig
    */
    constructor(scope: Construct, id: string, config: ActionsOrganizationVariableConfig);
    get createdAt(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _selectedRepositoryIds?;
    get selectedRepositoryIds(): number[];
    set selectedRepositoryIds(value: number[]);
    resetSelectedRepositoryIds(): void;
    get selectedRepositoryIdsInput(): number[];
    get updatedAt(): any;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
    private _variableName?;
    get variableName(): string;
    set variableName(value: string);
    get variableNameInput(): string;
    private _visibility?;
    get visibility(): string;
    set visibility(value: string);
    get visibilityInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
