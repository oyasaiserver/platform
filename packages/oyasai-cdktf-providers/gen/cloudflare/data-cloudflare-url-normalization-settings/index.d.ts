import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareUrlNormalizationSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The unique ID of the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/url_normalization_settings#zone_id DataCloudflareUrlNormalizationSettings#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/url_normalization_settings cloudflare_url_normalization_settings}
*/
export declare class DataCloudflareUrlNormalizationSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_url_normalization_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareUrlNormalizationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUrlNormalizationSettings to import
    * @param importFromId The id of the existing DataCloudflareUrlNormalizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/url_normalization_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUrlNormalizationSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/url_normalization_settings cloudflare_url_normalization_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUrlNormalizationSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareUrlNormalizationSettingsConfig);
    get id(): any;
    get scope(): any;
    get type(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
