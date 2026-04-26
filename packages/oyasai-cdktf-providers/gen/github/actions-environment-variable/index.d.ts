import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsEnvironmentVariableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Name of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_variable#environment ActionsEnvironmentVariable#environment}
    */
    readonly environment: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_variable#id ActionsEnvironmentVariable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Name of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_variable#repository ActionsEnvironmentVariable#repository}
    */
    readonly repository: string;
    /**
    * Value of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_variable#value ActionsEnvironmentVariable#value}
    */
    readonly value: string;
    /**
    * Name of the variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_variable#variable_name ActionsEnvironmentVariable#variable_name}
    */
    readonly variableName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_variable github_actions_environment_variable}
*/
export declare class ActionsEnvironmentVariable extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_environment_variable";
    /**
    * Generates CDKTF code for importing a ActionsEnvironmentVariable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsEnvironmentVariable to import
    * @param importFromId The id of the existing ActionsEnvironmentVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_variable#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsEnvironmentVariable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_variable github_actions_environment_variable} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsEnvironmentVariableConfig
    */
    constructor(scope: Construct, id: string, config: ActionsEnvironmentVariableConfig);
    get createdAt(): any;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get repositoryId(): any;
    get updatedAt(): any;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
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
