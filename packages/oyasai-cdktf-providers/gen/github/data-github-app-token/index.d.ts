import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubAppTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * The GitHub App ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token#app_id DataGithubAppToken#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token#id DataGithubAppToken#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The GitHub App installation instance ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token#installation_id DataGithubAppToken#installation_id}
    */
    readonly installationId: string;
    /**
    * The GitHub App PEM file contents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token#pem_file DataGithubAppToken#pem_file}
    */
    readonly pemFile: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token github_app_token}
*/
export declare class DataGithubAppToken extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_app_token";
    /**
    * Generates CDKTF code for importing a DataGithubAppToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubAppToken to import
    * @param importFromId The id of the existing DataGithubAppToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubAppToken to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token github_app_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubAppTokenConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubAppTokenConfig);
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _installationId?;
    get installationId(): string;
    set installationId(value: string);
    get installationIdInput(): string;
    private _pemFile?;
    get pemFile(): string;
    set pemFile(value: string);
    get pemFileInput(): string;
    get token(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
