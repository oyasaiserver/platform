import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ActionsOrganizationSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#destroy_on_drift ActionsOrganizationSecret#destroy_on_drift}
    */
    readonly destroyOnDrift?: boolean | cdktf.IResolvable;
    /**
    * Encrypted value of the secret using the GitHub public key in Base64 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#encrypted_value ActionsOrganizationSecret#encrypted_value}
    */
    readonly encryptedValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#id ActionsOrganizationSecret#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * ID of the public key used to encrypt the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#key_id ActionsOrganizationSecret#key_id}
    */
    readonly keyId?: string;
    /**
    * Plaintext value of the secret to be encrypted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#plaintext_value ActionsOrganizationSecret#plaintext_value}
    */
    readonly plaintextValue?: string;
    /**
    * Name of the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#secret_name ActionsOrganizationSecret#secret_name}
    */
    readonly secretName: string;
    /**
    * An array of repository IDs that can access the organization secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#selected_repository_ids ActionsOrganizationSecret#selected_repository_ids}
    */
    readonly selectedRepositoryIds?: number[];
    /**
    * Plaintext value to be encrypted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#value ActionsOrganizationSecret#value}
    */
    readonly value?: string;
    /**
    * Value encrypted with the GitHub public key, defined by key_id, in Base64 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#value_encrypted ActionsOrganizationSecret#value_encrypted}
    */
    readonly valueEncrypted?: string;
    /**
    * Configures the access that repositories have to the organization secret. Must be one of 'all', 'private', or 'selected'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#visibility ActionsOrganizationSecret#visibility}
    */
    readonly visibility: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret github_actions_organization_secret}
*/
export declare class ActionsOrganizationSecret extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_actions_organization_secret";
    /**
    * Generates CDKTF code for importing a ActionsOrganizationSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationSecret to import
    * @param importFromId The id of the existing ActionsOrganizationSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationSecret to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret github_actions_organization_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationSecretConfig
    */
    constructor(scope: Construct, id: string, config: ActionsOrganizationSecretConfig);
    get createdAt(): any;
    private _destroyOnDrift?;
    get destroyOnDrift(): boolean | cdktf.IResolvable;
    set destroyOnDrift(value: boolean | cdktf.IResolvable);
    resetDestroyOnDrift(): void;
    get destroyOnDriftInput(): any;
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
