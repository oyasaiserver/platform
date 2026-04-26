import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LogpullRetentionConfig extends cdktf.TerraformMetaArguments {
    /**
    * The log retention flag for Logpull API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpull_retention#flag LogpullRetention#flag}
    */
    readonly flag?: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpull_retention#zone_id LogpullRetention#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpull_retention cloudflare_logpull_retention}
*/
export declare class LogpullRetention extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_logpull_retention";
    /**
    * Generates CDKTF code for importing a LogpullRetention resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LogpullRetention to import
    * @param importFromId The id of the existing LogpullRetention that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpull_retention#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LogpullRetention to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/logpull_retention cloudflare_logpull_retention} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LogpullRetentionConfig
    */
    constructor(scope: Construct, id: string, config: LogpullRetentionConfig);
    private _flag?;
    get flag(): boolean | cdktf.IResolvable;
    set flag(value: boolean | cdktf.IResolvable);
    resetFlag(): void;
    get flagInput(): any;
    get id(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
