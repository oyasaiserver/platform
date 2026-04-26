import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodespacesUserSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Encrypted value of the secret using the GitHub public key in Base64 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_user_secret#encrypted_value CodespacesUserSecret#encrypted_value}
    */
    readonly encryptedValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_user_secret#id CodespacesUserSecret#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Plaintext value of the secret to be encrypted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_user_secret#plaintext_value CodespacesUserSecret#plaintext_value}
    */
    readonly plaintextValue?: string;
    /**
    * Name of the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_user_secret#secret_name CodespacesUserSecret#secret_name}
    */
    readonly secretName: string;
    /**
    * An array of repository ids that can access the user secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_user_secret#selected_repository_ids CodespacesUserSecret#selected_repository_ids}
    */
    readonly selectedRepositoryIds?: number[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_user_secret github_codespaces_user_secret}
*/
export declare class CodespacesUserSecret extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_codespaces_user_secret";
    /**
    * Generates CDKTF code for importing a CodespacesUserSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodespacesUserSecret to import
    * @param importFromId The id of the existing CodespacesUserSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_user_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodespacesUserSecret to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/codespaces_user_secret github_codespaces_user_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodespacesUserSecretConfig
    */
    constructor(scope: Construct, id: string, config: CodespacesUserSecretConfig);
    get createdAt(): any;
    private _encryptedValue?;
    get encryptedValue(): string;
    set encryptedValue(value: string);
    resetEncryptedValue(): void;
    get encryptedValueInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _plaintextValue?;
    get plaintextValue(): string;
    set plaintextValue(value: string);
    resetPlaintextValue(): void;
    get plaintextValueInput(): string;
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
    private _selectedRepositoryIds?;
    get selectedRepositoryIds(): number[];
    set selectedRepositoryIds(value: number[]);
    resetSelectedRepositoryIds(): void;
    get selectedRepositoryIdsInput(): number[];
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
