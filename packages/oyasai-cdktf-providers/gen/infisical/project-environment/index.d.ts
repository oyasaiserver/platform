import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ProjectEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_environment#name ProjectEnvironment#name}
    */
    readonly name: string;
    /**
    * The position of the environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_environment#position ProjectEnvironment#position}
    */
    readonly position?: number;
    /**
    * The Infisical project ID (Required for Machine Identity auth, and service tokens with multiple scopes)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_environment#project_id ProjectEnvironment#project_id}
    */
    readonly projectId: string;
    /**
    * The slug of the environment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_environment#slug ProjectEnvironment#slug}
    */
    readonly slug: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_environment infisical_project_environment}
*/
export declare class ProjectEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_project_environment";
    /**
    * Generates CDKTF code for importing a ProjectEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ProjectEnvironment to import
    * @param importFromId The id of the existing ProjectEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ProjectEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/project_environment infisical_project_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProjectEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: ProjectEnvironmentConfig);
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _position?;
    get position(): number;
    set position(value: number);
    resetPosition(): void;
    get positionInput(): number;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    private _slug?;
    get slug(): string;
    set slug(value: string);
    get slugInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
