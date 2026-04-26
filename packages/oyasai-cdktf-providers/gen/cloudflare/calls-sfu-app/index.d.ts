import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CallsSfuAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_sfu_app#account_id CallsSfuApp#account_id}
    */
    readonly accountId?: string;
    /**
    * A Cloudflare-generated unique identifier for a item.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_sfu_app#app_id CallsSfuApp#app_id}
    */
    readonly appId?: string;
    /**
    * A short description of Calls app, not shown to end users.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_sfu_app#name CallsSfuApp#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_sfu_app cloudflare_calls_sfu_app}
*/
export declare class CallsSfuApp extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_calls_sfu_app";
    /**
    * Generates CDKTF code for importing a CallsSfuApp resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CallsSfuApp to import
    * @param importFromId The id of the existing CallsSfuApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_sfu_app#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CallsSfuApp to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/calls_sfu_app cloudflare_calls_sfu_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CallsSfuAppConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CallsSfuAppConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _appId?;
    get appId(): string;
    set appId(value: string);
    resetAppId(): void;
    get appIdInput(): string;
    get created(): any;
    get modified(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get secret(): any;
    get uid(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
