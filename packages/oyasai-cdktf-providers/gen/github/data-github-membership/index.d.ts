import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/membership#id DataGithubMembership#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/membership#organization DataGithubMembership#organization}
    */
    readonly organization?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/membership#username DataGithubMembership#username}
    */
    readonly username: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/membership github_membership}
*/
export declare class DataGithubMembership extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_membership";
    /**
    * Generates CDKTF code for importing a DataGithubMembership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubMembership to import
    * @param importFromId The id of the existing DataGithubMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubMembership to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/membership github_membership} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubMembershipConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubMembershipConfig);
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _organization?;
    get organization(): string;
    set organization(value: string);
    resetOrganization(): void;
    get organizationInput(): string;
    get role(): any;
    get state(): any;
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
