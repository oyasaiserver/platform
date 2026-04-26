import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WaitingRoomSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether to allow verified search engine crawlers to bypass all waiting rooms on this zone.
    * Verified search engine crawlers will not be tracked or counted by the waiting room system,
    * and will not appear in waiting room analytics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_settings#search_engine_crawler_bypass WaitingRoomSettings#search_engine_crawler_bypass}
    */
    readonly searchEngineCrawlerBypass?: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_settings#zone_id WaitingRoomSettings#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_settings cloudflare_waiting_room_settings}
*/
export declare class WaitingRoomSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_waiting_room_settings";
    /**
    * Generates CDKTF code for importing a WaitingRoomSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WaitingRoomSettings to import
    * @param importFromId The id of the existing WaitingRoomSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WaitingRoomSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_settings cloudflare_waiting_room_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WaitingRoomSettingsConfig
    */
    constructor(scope: Construct, id: string, config: WaitingRoomSettingsConfig);
    get id(): any;
    private _searchEngineCrawlerBypass?;
    get searchEngineCrawlerBypass(): boolean | cdktf.IResolvable;
    set searchEngineCrawlerBypass(value: boolean | cdktf.IResolvable);
    resetSearchEngineCrawlerBypass(): void;
    get searchEngineCrawlerBypassInput(): any;
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
