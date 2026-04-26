import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StreamKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_key#account_id StreamKey#account_id}
    */
    readonly accountId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_key cloudflare_stream_key}
*/
export declare class StreamKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_stream_key";
    /**
    * Generates CDKTF code for importing a StreamKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StreamKey to import
    * @param importFromId The id of the existing StreamKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StreamKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/stream_key cloudflare_stream_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StreamKeyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: StreamKeyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get created(): any;
    get id(): any;
    get jwk(): any;
    get keyId(): any;
    get pem(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
