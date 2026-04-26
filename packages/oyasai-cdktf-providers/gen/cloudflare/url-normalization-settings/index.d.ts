import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface UrlNormalizationSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The scope of the URL normalization.
    * Available values: "incoming", "both", "none".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/url_normalization_settings#scope UrlNormalizationSettings#scope}
    */
    readonly scope: string;
    /**
    * The type of URL normalization performed by Cloudflare.
    * Available values: "cloudflare", "rfc3986".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/url_normalization_settings#type UrlNormalizationSettings#type}
    */
    readonly type: string;
    /**
    * The unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/url_normalization_settings#zone_id UrlNormalizationSettings#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/url_normalization_settings cloudflare_url_normalization_settings}
*/
export declare class UrlNormalizationSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_url_normalization_settings";
    /**
    * Generates CDKTF code for importing a UrlNormalizationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the UrlNormalizationSettings to import
    * @param importFromId The id of the existing UrlNormalizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/url_normalization_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the UrlNormalizationSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/url_normalization_settings cloudflare_url_normalization_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UrlNormalizationSettingsConfig
    */
    constructor(scope: Construct, id: string, config: UrlNormalizationSettingsConfig);
    get id(): any;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
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
