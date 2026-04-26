import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AiSearchTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token#account_id AiSearchToken#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token#cf_api_id AiSearchToken#cf_api_id}
    */
    readonly cfApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token#cf_api_key AiSearchToken#cf_api_key}
    */
    readonly cfApiKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token#legacy AiSearchToken#legacy}
    */
    readonly legacy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token#name AiSearchToken#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token cloudflare_ai_search_token}
*/
export declare class AiSearchToken extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_ai_search_token";
    /**
    * Generates CDKTF code for importing a AiSearchToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AiSearchToken to import
    * @param importFromId The id of the existing AiSearchToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AiSearchToken to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_token cloudflare_ai_search_token} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AiSearchTokenConfig
    */
    constructor(scope: Construct, id: string, config: AiSearchTokenConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _cfApiId?;
    get cfApiId(): string;
    set cfApiId(value: string);
    get cfApiIdInput(): string;
    private _cfApiKey?;
    get cfApiKey(): string;
    set cfApiKey(value: string);
    get cfApiKeyInput(): string;
    get createdAt(): any;
    get createdBy(): any;
    get enabled(): any;
    get id(): any;
    private _legacy?;
    get legacy(): boolean | cdktf.IResolvable;
    set legacy(value: boolean | cdktf.IResolvable);
    resetLegacy(): void;
    get legacyInput(): any;
    get modifiedAt(): any;
    get modifiedBy(): any;
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
