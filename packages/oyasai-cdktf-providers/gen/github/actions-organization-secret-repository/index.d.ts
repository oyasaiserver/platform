import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsOrganizationSecretRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repository#id ActionsOrganizationSecretRepository#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The repository ID that can access the organization secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repository#repository_id ActionsOrganizationSecretRepository#repository_id}
    */
    readonly repositoryId: number;
    /**
    * Name of the existing secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repository#secret_name ActionsOrganizationSecretRepository#secret_name}
    */
    readonly secretName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repository github_actions_organization_secret_repository}
*/
export declare class ActionsOrganizationSecretRepository extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_organization_secret_repository";
    /**
    * Generates CDKTF code for importing a ActionsOrganizationSecretRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationSecretRepository to import
    * @param importFromId The id of the existing ActionsOrganizationSecretRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationSecretRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repository github_actions_organization_secret_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationSecretRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: ActionsOrganizationSecretRepositoryConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _repositoryId?;
    get repositoryId(): number;
    set repositoryId(value: number);
    get repositoryIdInput(): number;
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
