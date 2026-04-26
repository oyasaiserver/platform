import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsOrganizationSecretRepositoriesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repositories#id ActionsOrganizationSecretRepositories#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Name of the existing secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repositories#secret_name ActionsOrganizationSecretRepositories#secret_name}
    */
    readonly secretName: string;
    /**
    * An array of repository ids that can access the organization secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repositories#selected_repository_ids ActionsOrganizationSecretRepositories#selected_repository_ids}
    */
    readonly selectedRepositoryIds: number[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repositories github_actions_organization_secret_repositories}
*/
export declare class ActionsOrganizationSecretRepositories extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_organization_secret_repositories";
    /**
    * Generates CDKTF code for importing a ActionsOrganizationSecretRepositories resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationSecretRepositories to import
    * @param importFromId The id of the existing ActionsOrganizationSecretRepositories that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repositories#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationSecretRepositories to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repositories github_actions_organization_secret_repositories} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationSecretRepositoriesConfig
    */
    constructor(scope: Construct, id: string, config: ActionsOrganizationSecretRepositoriesConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
    private _selectedRepositoryIds?;
    get selectedRepositoryIds(): number[];
    set selectedRepositoryIds(value: number[]);
    get selectedRepositoryIdsInput(): number[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
