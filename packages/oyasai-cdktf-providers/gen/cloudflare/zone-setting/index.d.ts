import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZoneSettingConfig extends cdktf.TerraformMetaArguments {
    /**
    * ssl-recommender enrollment setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_setting#enabled ZoneSetting#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Setting name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_setting#setting_id ZoneSetting#setting_id}
    */
    readonly settingId: string;
    /**
    * Current value of the zone setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_setting#value ZoneSetting#value}
    */
    readonly value: {
        [key: string]: any;
    };
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_setting#zone_id ZoneSetting#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_setting cloudflare_zone_setting}
*/
export declare class ZoneSetting extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zone_setting";
    /**
    * Generates CDKTF code for importing a ZoneSetting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneSetting to import
    * @param importFromId The id of the existing ZoneSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_setting#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneSetting to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_setting cloudflare_zone_setting} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneSettingConfig
    */
    constructor(scope: Construct, id: string, config: ZoneSettingConfig);
    get editable(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    get id(): any;
    get modifiedOn(): any;
    private _settingId?;
    get settingId(): string;
    set settingId(value: string);
    get settingIdInput(): string;
    get timeRemaining(): any;
    private _value?;
    get value(): {
        [key: string]: any;
    };
    set value(value: {
        [key: string]: any;
    });
    get valueInput(): {
        [key: string]: any;
    };
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
