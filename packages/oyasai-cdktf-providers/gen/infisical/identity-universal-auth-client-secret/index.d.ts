import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentityUniversalAuthClientSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the client secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret#description IdentityUniversalAuthClientSecret#description}
    */
    readonly description?: string;
    /**
    * The ID of the identity to create a client secret for
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret#identity_id IdentityUniversalAuthClientSecret#identity_id}
    */
    readonly identityId: string;
    /**
    * The maximum number of times that the client secret can be used; a value of 0 implies infinite number of uses. Default: 0
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret#number_of_uses_limit IdentityUniversalAuthClientSecret#number_of_uses_limit}
    */
    readonly numberOfUsesLimit?: number;
    /**
    * The lifetime for the client secret in seconds. Default: 0 - not expiring
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret#ttl IdentityUniversalAuthClientSecret#ttl}
    */
    readonly ttl?: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret infisical_identity_universal_auth_client_secret}
*/
export declare class IdentityUniversalAuthClientSecret extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_identity_universal_auth_client_secret";
    /**
    * Generates CDKTF code for importing a IdentityUniversalAuthClientSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityUniversalAuthClientSecret to import
    * @param importFromId The id of the existing IdentityUniversalAuthClientSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityUniversalAuthClientSecret to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth_client_secret infisical_identity_universal_auth_client_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityUniversalAuthClientSecretConfig
    */
    constructor(scope: Construct, id: string, config: IdentityUniversalAuthClientSecretConfig);
    get clientId(): any;
    get clientSecret(): any;
    get createdAt(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    get isRevoked(): any;
    get numberOfUses(): any;
    private _numberOfUsesLimit?;
    get numberOfUsesLimit(): number;
    set numberOfUsesLimit(value: number);
    resetNumberOfUsesLimit(): void;
    get numberOfUsesLimitInput(): number;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    resetTtl(): void;
    get ttlInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
