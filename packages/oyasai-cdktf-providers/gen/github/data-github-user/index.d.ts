import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user#id DataGithubUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user#username DataGithubUser#username}
    */
    readonly username: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user github_user}
*/
export declare class DataGithubUser extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_user";
    /**
    * Generates CDKTF code for importing a DataGithubUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubUser to import
    * @param importFromId The id of the existing DataGithubUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/user github_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubUserConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubUserConfig);
    get avatarUrl(): any;
    get bio(): any;
    get blog(): any;
    get company(): any;
    get createdAt(): any;
    get email(): any;
    get followers(): any;
    get following(): any;
    get gpgKeys(): any;
    get gravatarId(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get location(): any;
    get login(): any;
    get name(): any;
    get nodeId(): any;
    get publicGists(): any;
    get publicRepos(): any;
    get siteAdmin(): any;
    get sshKeys(): any;
    get suspendedAt(): any;
    get updatedAt(): any;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
