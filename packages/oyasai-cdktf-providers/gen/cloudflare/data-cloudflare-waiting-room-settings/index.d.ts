import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWaitingRoomSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_settings#zone_id DataCloudflareWaitingRoomSettings#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_settings cloudflare_waiting_room_settings}
*/
export declare class DataCloudflareWaitingRoomSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_waiting_room_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRoomSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoomSettings to import
    * @param importFromId The id of the existing DataCloudflareWaitingRoomSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoomSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_settings cloudflare_waiting_room_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWaitingRoomSettingsConfig);
    get id(): any;
    get searchEngineCrawlerBypass(): any;
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
