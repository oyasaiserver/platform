import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WaitingRoomEventConfig extends cdktf.TerraformMetaArguments {
    /**
    * If set, the event will override the waiting room's `custom_page_html` property while it is active. If null, the event will inherit it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#custom_page_html WaitingRoomEvent#custom_page_html}
    */
    readonly customPageHtml?: string;
    /**
    * A note that you can use to add more details about the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#description WaitingRoomEvent#description}
    */
    readonly description?: string;
    /**
    * If set, the event will override the waiting room's `disable_session_renewal` property while it is active. If null, the event will inherit it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#disable_session_renewal WaitingRoomEvent#disable_session_renewal}
    */
    readonly disableSessionRenewal?: boolean | cdktf.IResolvable;
    /**
    * An ISO 8601 timestamp that marks the end of the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#event_end_time WaitingRoomEvent#event_end_time}
    */
    readonly eventEndTime: string;
    /**
    * An ISO 8601 timestamp that marks the start of the event. At this time, queued users will be processed with the event's configuration. The start time must be at least one minute before `event_end_time`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#event_start_time WaitingRoomEvent#event_start_time}
    */
    readonly eventStartTime: string;
    /**
    * A unique name to identify the event. Only alphanumeric characters, hyphens and underscores are allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#name WaitingRoomEvent#name}
    */
    readonly name: string;
    /**
    * If set, the event will override the waiting room's `new_users_per_minute` property while it is active. If null, the event will inherit it. This can only be set if the event's `total_active_users` property is also set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#new_users_per_minute WaitingRoomEvent#new_users_per_minute}
    */
    readonly newUsersPerMinute?: number;
    /**
    * An ISO 8601 timestamp that marks when to begin queueing all users before the event starts. The prequeue must start at least five minutes before `event_start_time`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#prequeue_start_time WaitingRoomEvent#prequeue_start_time}
    */
    readonly prequeueStartTime?: string;
    /**
    * If set, the event will override the waiting room's `queueing_method` property while it is active. If null, the event will inherit it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#queueing_method WaitingRoomEvent#queueing_method}
    */
    readonly queueingMethod?: string;
    /**
    * If set, the event will override the waiting room's `session_duration` property while it is active. If null, the event will inherit it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#session_duration WaitingRoomEvent#session_duration}
    */
    readonly sessionDuration?: number;
    /**
    * If enabled, users in the prequeue will be shuffled randomly at the `event_start_time`. Requires that `prequeue_start_time` is not null. This is useful for situations when many users will join the event prequeue at the same time and you want to shuffle them to ensure fairness. Naturally, it makes the most sense to enable this feature when the `queueing_method` during the event respects ordering such as **fifo**, or else the shuffling may be unnecessary.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#shuffle_at_event_start WaitingRoomEvent#shuffle_at_event_start}
    */
    readonly shuffleAtEventStart?: boolean | cdktf.IResolvable;
    /**
    * Suspends or allows an event. If set to `true`, the event is ignored and traffic will be handled based on the waiting room configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#suspended WaitingRoomEvent#suspended}
    */
    readonly suspended?: boolean | cdktf.IResolvable;
    /**
    * If set, the event will override the waiting room's `total_active_users` property while it is active. If null, the event will inherit it. This can only be set if the event's `new_users_per_minute` property is also set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#total_active_users WaitingRoomEvent#total_active_users}
    */
    readonly totalActiveUsers?: number;
    /**
    * If set, the event will override the waiting room's `turnstile_action` property while it is active. If null, the event will inherit it.
    * Available values: "log", "infinite_queue".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#turnstile_action WaitingRoomEvent#turnstile_action}
    */
    readonly turnstileAction?: string;
    /**
    * If set, the event will override the waiting room's `turnstile_mode` property while it is active. If null, the event will inherit it.
    * Available values: "off", "invisible", "visible_non_interactive", "visible_managed".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#turnstile_mode WaitingRoomEvent#turnstile_mode}
    */
    readonly turnstileMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#waiting_room_id WaitingRoomEvent#waiting_room_id}
    */
    readonly waitingRoomId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#zone_id WaitingRoomEvent#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event cloudflare_waiting_room_event}
*/
export declare class WaitingRoomEvent extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_waiting_room_event";
    /**
    * Generates CDKTF code for importing a WaitingRoomEvent resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WaitingRoomEvent to import
    * @param importFromId The id of the existing WaitingRoomEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WaitingRoomEvent to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room_event cloudflare_waiting_room_event} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WaitingRoomEventConfig
    */
    constructor(scope: Construct, id: string, config: WaitingRoomEventConfig);
    get createdOn(): any;
    private _customPageHtml?;
    get customPageHtml(): string;
    set customPageHtml(value: string);
    resetCustomPageHtml(): void;
    get customPageHtmlInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _disableSessionRenewal?;
    get disableSessionRenewal(): boolean | cdktf.IResolvable;
    set disableSessionRenewal(value: boolean | cdktf.IResolvable);
    resetDisableSessionRenewal(): void;
    get disableSessionRenewalInput(): any;
    private _eventEndTime?;
    get eventEndTime(): string;
    set eventEndTime(value: string);
    get eventEndTimeInput(): string;
    private _eventStartTime?;
    get eventStartTime(): string;
    set eventStartTime(value: string);
    get eventStartTimeInput(): string;
    get id(): any;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _newUsersPerMinute?;
    get newUsersPerMinute(): number;
    set newUsersPerMinute(value: number);
    resetNewUsersPerMinute(): void;
    get newUsersPerMinuteInput(): number;
    private _prequeueStartTime?;
    get prequeueStartTime(): string;
    set prequeueStartTime(value: string);
    resetPrequeueStartTime(): void;
    get prequeueStartTimeInput(): string;
    private _queueingMethod?;
    get queueingMethod(): string;
    set queueingMethod(value: string);
    resetQueueingMethod(): void;
    get queueingMethodInput(): string;
    private _sessionDuration?;
    get sessionDuration(): number;
    set sessionDuration(value: number);
    resetSessionDuration(): void;
    get sessionDurationInput(): number;
    private _shuffleAtEventStart?;
    get shuffleAtEventStart(): boolean | cdktf.IResolvable;
    set shuffleAtEventStart(value: boolean | cdktf.IResolvable);
    resetShuffleAtEventStart(): void;
    get shuffleAtEventStartInput(): any;
    private _suspended?;
    get suspended(): boolean | cdktf.IResolvable;
    set suspended(value: boolean | cdktf.IResolvable);
    resetSuspended(): void;
    get suspendedInput(): any;
    private _totalActiveUsers?;
    get totalActiveUsers(): number;
    set totalActiveUsers(value: number);
    resetTotalActiveUsers(): void;
    get totalActiveUsersInput(): number;
    private _turnstileAction?;
    get turnstileAction(): string;
    set turnstileAction(value: string);
    resetTurnstileAction(): void;
    get turnstileActionInput(): string;
    private _turnstileMode?;
    get turnstileMode(): string;
    set turnstileMode(value: string);
    resetTurnstileMode(): void;
    get turnstileModeInput(): string;
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
