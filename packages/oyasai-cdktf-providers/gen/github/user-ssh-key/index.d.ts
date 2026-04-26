import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface UserSshKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_ssh_key#id UserSshKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The public SSH key to add to your GitHub account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_ssh_key#key UserSshKey#key}
    */
    readonly key: string;
    /**
    * A descriptive name for the new key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_ssh_key#title UserSshKey#title}
    */
    readonly title: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_ssh_key github_user_ssh_key}
*/
export declare class UserSshKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_user_ssh_key";
    /**
    * Generates CDKTF code for importing a UserSshKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserSshKey to import
    * @param importFromId The id of the existing UserSshKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_ssh_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserSshKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_ssh_key github_user_ssh_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserSshKeyConfig
    */
    constructor(scope: Construct, id: string, config: UserSshKeyConfig);
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string;
    get url(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
