import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DependabotOrganizationSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Encrypted value of the secret using the GitHub public key in Base64 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret#encrypted_value DependabotOrganizationSecret#encrypted_value}
    */
    readonly encryptedValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret#id DependabotOrganizationSecret#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * ID of the public key used to encrypt the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret#key_id DependabotOrganizationSecret#key_id}
    */
    readonly keyId?: string;
    /**
    * Plaintext value of the secret to be encrypted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret#plaintext_value DependabotOrganizationSecret#plaintext_value}
    */
    readonly plaintextValue?: string;
    /**
    * Name of the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret#secret_name DependabotOrganizationSecret#secret_name}
    */
    readonly secretName: string;
    /**
    * An array of repository ids that can access the organization secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret#selected_repository_ids DependabotOrganizationSecret#selected_repository_ids}
    */
    readonly selectedRepositoryIds?: number[];
    /**
    * Plaintext value to be encrypted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret#value DependabotOrganizationSecret#value}
    */
    readonly value?: string;
    /**
    * Value encrypted with the GitHub public key, defined by key_id, in Base64 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret#value_encrypted DependabotOrganizationSecret#value_encrypted}
    */
    readonly valueEncrypted?: string;
    /**
    * Configures the access that repositories have to the organization secret. Must be one of 'all', 'private' or 'selected'. 'selected_repository_ids' is required if set to 'selected'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret#visibility DependabotOrganizationSecret#visibility}
    */
    readonly visibility: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret github_dependabot_organization_secret}
*/
export declare class DependabotOrganizationSecret extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_dependabot_organization_secret";
    /**
    * Generates CDKTF code for importing a DependabotOrganizationSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DependabotOrganizationSecret to import
    * @param importFromId The id of the existing DependabotOrganizationSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DependabotOrganizationSecret to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/dependabot_organization_secret github_dependabot_organization_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DependabotOrganizationSecretConfig
    */
    constructor(scope: Construct, id: string, config: DependabotOrganizationSecretConfig);
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
    private _visibility?;
    get visibility(): string;
    set visibility(value: string);
    get visibilityInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
