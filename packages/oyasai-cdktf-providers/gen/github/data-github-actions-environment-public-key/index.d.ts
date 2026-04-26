import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubActionsEnvironmentPublicKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_public_key#environment DataGithubActionsEnvironmentPublicKey#environment}
    */
    readonly environment: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_public_key#id DataGithubActionsEnvironmentPublicKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_public_key#repository DataGithubActionsEnvironmentPublicKey#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_public_key github_actions_environment_public_key}
*/
export declare class DataGithubActionsEnvironmentPublicKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_actions_environment_public_key";
    /**
    * Generates CDKTF code for importing a DataGithubActionsEnvironmentPublicKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubActionsEnvironmentPublicKey to import
    * @param importFromId The id of the existing DataGithubActionsEnvironmentPublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_public_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubActionsEnvironmentPublicKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/actions_environment_public_key github_actions_environment_public_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubActionsEnvironmentPublicKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubActionsEnvironmentPublicKeyConfig);
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get key(): any;
    get keyId(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
