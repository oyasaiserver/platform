import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdentityTokenAuthTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the identity to create a token for
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_token_auth_token#identity_id IdentityTokenAuthToken#identity_id}
    */
    readonly identityId: string;
    /**
    * The name of the token auth token
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_token_auth_token#name IdentityTokenAuthToken#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_token_auth_token infisical_identity_token_auth_token}
*/
export declare class IdentityTokenAuthToken extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_identity_token_auth_token";
    /**
    * Generates CDKTF code for importing a IdentityTokenAuthToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityTokenAuthToken to import
    * @param importFromId The id of the existing IdentityTokenAuthToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_token_auth_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityTokenAuthToken to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_token_auth_token infisical_identity_token_auth_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityTokenAuthTokenConfig
    */
    constructor(scope: Construct, id: string, config: IdentityTokenAuthTokenConfig);
    get createdAt(): any;
    get id(): any;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    get identityIdInput(): string;
    get isRevoked(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get numberOfUses(): any;
    get numberOfUsesLimit(): any;
    get token(): any;
    get ttl(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
