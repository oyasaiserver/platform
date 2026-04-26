import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsEnvironmentSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Encrypted value of the secret using the GitHub public key in Base64 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret#encrypted_value ActionsEnvironmentSecret#encrypted_value}
    */
    readonly encryptedValue?: string;
    /**
    * Name of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret#environment ActionsEnvironmentSecret#environment}
    */
    readonly environment: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * ID of the public key used to encrypt the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret#key_id ActionsEnvironmentSecret#key_id}
    */
    readonly keyId?: string;
    /**
    * Plaintext value of the secret to be encrypted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret#plaintext_value ActionsEnvironmentSecret#plaintext_value}
    */
    readonly plaintextValue?: string;
    /**
    * Name of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret#repository ActionsEnvironmentSecret#repository}
    */
    readonly repository: string;
    /**
    * Name of the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret#secret_name ActionsEnvironmentSecret#secret_name}
    */
    readonly secretName: string;
    /**
    * Plaintext value to be encrypted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret#value ActionsEnvironmentSecret#value}
    */
    readonly value?: string;
    /**
    * Value encrypted with the GitHub public key, defined by key_id, in Base64 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret#value_encrypted ActionsEnvironmentSecret#value_encrypted}
    */
    readonly valueEncrypted?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret github_actions_environment_secret}
*/
export declare class ActionsEnvironmentSecret extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_environment_secret";
    /**
    * Generates CDKTF code for importing a ActionsEnvironmentSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsEnvironmentSecret to import
    * @param importFromId The id of the existing ActionsEnvironmentSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsEnvironmentSecret to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_environment_secret github_actions_environment_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsEnvironmentSecretConfig
    */
    constructor(scope: Construct, id: string, config: ActionsEnvironmentSecretConfig);
    get createdAt(): any;
    private _encryptedValue?;
    get encryptedValue(): string;
    set encryptedValue(value: string);
    resetEncryptedValue(): void;
    get encryptedValueInput(): string;
    private _environment?;
    get environment(): string;
    set environment(value: string);
    get environmentInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    resetKeyId(): void;
    get keyIdInput(): string;
    private _plaintextValue?;
    get plaintextValue(): string;
    set plaintextValue(value: string);
    resetPlaintextValue(): void;
    get plaintextValueInput(): string;
    get remoteUpdatedAt(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get repositoryId(): any;
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string;
    get updatedAt(): any;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
    private _valueEncrypted?;
    get valueEncrypted(): string;
    set valueEncrypted(value: string);
    resetValueEncrypted(): void;
    get valueEncryptedInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
