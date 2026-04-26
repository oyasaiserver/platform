import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CallsTurnAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_turn_app#account_id CallsTurnApp#account_id}
    */
    readonly accountId?: string;
    /**
    * A Cloudflare-generated unique identifier for a item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_turn_app#key_id CallsTurnApp#key_id}
    */
    readonly keyId?: string;
    /**
    * A short description of a TURN key, not shown to end users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_turn_app#name CallsTurnApp#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_turn_app cloudflare_calls_turn_app}
*/
export declare class CallsTurnApp extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_calls_turn_app";
    /**
    * Generates CDKTF code for importing a CallsTurnApp resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CallsTurnApp to import
    * @param importFromId The id of the existing CallsTurnApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_turn_app#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CallsTurnApp to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_turn_app cloudflare_calls_turn_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CallsTurnAppConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CallsTurnAppConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get created(): any;
    get key(): any;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    resetKeyId(): void;
    get keyIdInput(): string;
    get modified(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get uid(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
