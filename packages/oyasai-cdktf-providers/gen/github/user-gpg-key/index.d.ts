import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface UserGpgKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Your public GPG key, generated in ASCII-armored format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key#armored_public_key UserGpgKey#armored_public_key}
    */
    readonly armoredPublicKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key#id UserGpgKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key github_user_gpg_key}
*/
export declare class UserGpgKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_user_gpg_key";
    /**
    * Generates CDKTF code for importing a UserGpgKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UserGpgKey to import
    * @param importFromId The id of the existing UserGpgKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UserGpgKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/user_gpg_key github_user_gpg_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UserGpgKeyConfig
    */
    constructor(scope: Construct, id: string, config: UserGpgKeyConfig);
    private _armoredPublicKey?;
    get armoredPublicKey(): string;
    set armoredPublicKey(value: string);
    get armoredPublicKeyInput(): string;
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get keyId(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
