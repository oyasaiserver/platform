import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataInfisicalKmsKeyPublicKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the KMS key to retrieve the public key for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key#key_id DataInfisicalKmsKeyPublicKey#key_id}
    */
    readonly keyId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key infisical_kms_key_public_key}
*/
export declare class DataInfisicalKmsKeyPublicKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "infisical_kms_key_public_key";
    /**
    * Generates CDKTF code for importing a DataInfisicalKmsKeyPublicKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalKmsKeyPublicKey to import
    * @param importFromId The id of the existing DataInfisicalKmsKeyPublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalKmsKeyPublicKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/kms_key_public_key infisical_kms_key_public_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalKmsKeyPublicKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataInfisicalKmsKeyPublicKeyConfig);
    get encryptionAlgorithm(): any;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string;
    get keyUsage(): any;
    get name(): any;
    get publicKey(): any;
    get signingAlgorithms(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
