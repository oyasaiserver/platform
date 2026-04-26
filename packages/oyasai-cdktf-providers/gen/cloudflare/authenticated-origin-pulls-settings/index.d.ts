import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuthenticatedOriginPullsSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Indicates whether zone-level authenticated origin pulls is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls_settings#enabled AuthenticatedOriginPullsSettings#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls_settings#zone_id AuthenticatedOriginPullsSettings#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls_settings cloudflare_authenticated_origin_pulls_settings}
*/
export declare class AuthenticatedOriginPullsSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_authenticated_origin_pulls_settings";
    /**
    * Generates CDKTF code for importing a AuthenticatedOriginPullsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AuthenticatedOriginPullsSettings to import
    * @param importFromId The id of the existing AuthenticatedOriginPullsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AuthenticatedOriginPullsSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls_settings cloudflare_authenticated_origin_pulls_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuthenticatedOriginPullsSettingsConfig
    */
    constructor(scope: Construct, id: string, config: AuthenticatedOriginPullsSettingsConfig);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
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
