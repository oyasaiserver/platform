import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_tag#account_id ZeroTrustAccessTag#account_id}
    */
    readonly accountId?: string;
    /**
    * The name of the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_tag#name ZeroTrustAccessTag#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_tag cloudflare_zero_trust_access_tag}
*/
export declare class ZeroTrustAccessTag extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_tag";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessTag resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessTag to import
    * @param importFromId The id of the existing ZeroTrustAccessTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessTag to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_tag cloudflare_zero_trust_access_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessTagConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessTagConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
