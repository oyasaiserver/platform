import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the KMS key. Maximum 500 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key#description KmsKey#description}
    */
    readonly description?: string;
    /**
    * The encryption algorithm for the key. Options: aes-256-gcm, aes-128-gcm, RSA_4096, ECC_NIST_P256. Defaults to 'aes-256-gcm'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key#encryption_algorithm KmsKey#encryption_algorithm}
    */
    readonly encryptionAlgorithm?: string;
    /**
    * Whether the key is disabled. Defaults to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key#is_disabled KmsKey#is_disabled}
    */
    readonly isDisabled?: boolean | cdktf.IResolvable;
    /**
    * The usage of the key. Options: encrypt-decrypt, sign-verify. Defaults to 'encrypt-decrypt'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key#key_usage KmsKey#key_usage}
    */
    readonly keyUsage?: string;
    /**
    * The name of the KMS key. Must be 1-32 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key#name KmsKey#name}
    */
    readonly name: string;
    /**
    * The ID of the project where the KMS key will be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key#project_id KmsKey#project_id}
    */
    readonly projectId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key infisical_kms_key}
*/
export declare class KmsKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_kms_key";
    /**
    * Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KmsKey to import
    * @param importFromId The id of the existing KmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KmsKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/kms_key infisical_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsKeyConfig
    */
    constructor(scope: Construct, id: string, config: KmsKeyConfig);
    get createdAt(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _encryptionAlgorithm?;
    get encryptionAlgorithm(): string;
    set encryptionAlgorithm(value: string);
    resetEncryptionAlgorithm(): void;
    get encryptionAlgorithmInput(): string;
    get id(): any;
    private _isDisabled?;
    get isDisabled(): boolean | cdktf.IResolvable;
    set isDisabled(value: boolean | cdktf.IResolvable);
    resetIsDisabled(): void;
    get isDisabledInput(): any;
    private _keyUsage?;
    get keyUsage(): string;
    set keyUsage(value: string);
    resetKeyUsage(): void;
    get keyUsageInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get orgId(): any;
    private _projectId?;
    get projectId(): string;
    set projectId(value: string);
    get projectIdInput(): string;
    get updatedAt(): any;
    get version(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
