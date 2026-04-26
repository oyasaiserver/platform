import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppInstallationRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository#id AppInstallationRepository#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub app installation id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository#installation_id AppInstallationRepository#installation_id}
    */
    readonly installationId: string;
    /**
    * The repository to install the app on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository#repository AppInstallationRepository#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository github_app_installation_repository}
*/
export declare class AppInstallationRepository extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_app_installation_repository";
    /**
    * Generates CDKTF code for importing a AppInstallationRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppInstallationRepository to import
    * @param importFromId The id of the existing AppInstallationRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppInstallationRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repository github_app_installation_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppInstallationRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: AppInstallationRepositoryConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _installationId?;
    get installationId(): string;
    set installationId(value: string);
    get installationIdInput(): string;
    get repoId(): any;
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
