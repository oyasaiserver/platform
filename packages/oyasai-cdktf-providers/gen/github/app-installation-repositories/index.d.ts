import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppInstallationRepositoriesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repositories#id AppInstallationRepositories#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub app installation id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repositories#installation_id AppInstallationRepositories#installation_id}
    */
    readonly installationId: string;
    /**
    * A list of repository names to install the app on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repositories#selected_repositories AppInstallationRepositories#selected_repositories}
    */
    readonly selectedRepositories: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repositories github_app_installation_repositories}
*/
export declare class AppInstallationRepositories extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_app_installation_repositories";
    /**
    * Generates CDKTF code for importing a AppInstallationRepositories resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppInstallationRepositories to import
    * @param importFromId The id of the existing AppInstallationRepositories that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repositories#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppInstallationRepositories to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repositories github_app_installation_repositories} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppInstallationRepositoriesConfig
    */
    constructor(scope: Construct, id: string, config: AppInstallationRepositoriesConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _installationId?;
    get installationId(): string;
    set installationId(value: string);
    get installationIdInput(): string;
    private _selectedRepositories?;
    get selectedRepositories(): string[];
    set selectedRepositories(value: string[]);
    get selectedRepositoriesInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
