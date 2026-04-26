import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZoneSettingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Setting name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_setting#setting_id DataCloudflareZoneSetting#setting_id}
    */
    readonly settingId: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_setting#zone_id DataCloudflareZoneSetting#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_setting cloudflare_zone_setting}
*/
export declare class DataCloudflareZoneSetting extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zone_setting";
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneSetting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneSetting to import
    * @param importFromId The id of the existing DataCloudflareZoneSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_setting#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneSetting to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_setting cloudflare_zone_setting} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneSettingConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZoneSettingConfig);
    get editable(): any;
    get enabled(): any;
    get id(): any;
    get modifiedOn(): any;
    private _settingId?;
    get settingId(): string;
    set settingId(value: string);
    get settingIdInput(): string;
    get timeRemaining(): any;
    get value(): any;
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
