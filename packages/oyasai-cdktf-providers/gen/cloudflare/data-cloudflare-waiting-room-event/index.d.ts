import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWaitingRoomEventConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event#event_id DataCloudflareWaitingRoomEvent#event_id}
    */
    readonly eventId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event#waiting_room_id DataCloudflareWaitingRoomEvent#waiting_room_id}
    */
    readonly waitingRoomId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event#zone_id DataCloudflareWaitingRoomEvent#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event cloudflare_waiting_room_event}
*/
export declare class DataCloudflareWaitingRoomEvent extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_waiting_room_event";
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRoomEvent resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoomEvent to import
    * @param importFromId The id of the existing DataCloudflareWaitingRoomEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoomEvent to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_event cloudflare_waiting_room_event} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomEventConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareWaitingRoomEventConfig);
    get createdOn(): any;
    get customPageHtml(): any;
    get description(): any;
    get disableSessionRenewal(): any;
    get eventEndTime(): any;
    private _eventId?;
    get eventId(): string;
    set eventId(value: string);
    get eventIdInput(): string;
    get eventStartTime(): any;
    get id(): any;
    get modifiedOn(): any;
    get name(): any;
    get newUsersPerMinute(): any;
    get prequeueStartTime(): any;
    get queueingMethod(): any;
    get sessionDuration(): any;
    get shuffleAtEventStart(): any;
    get suspended(): any;
    get totalActiveUsers(): any;
    get turnstileAction(): any;
    get turnstileMode(): any;
    private _waitingRoomId?;
    get waitingRoomId(): string;
    set waitingRoomId(value: string);
    get waitingRoomIdInput(): string;
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
