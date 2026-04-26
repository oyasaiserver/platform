import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWaitingRoomEventsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_events#max_items DataCloudflareWaitingRoomEvents#max_items}
    */
    readonly maxItems?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_events#waiting_room_id DataCloudflareWaitingRoomEvents#waiting_room_id}
    */
    readonly waitingRoomId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_events#zone_id DataCloudflareWaitingRoomEvents#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareWaitingRoomEventsResult {
}
export declare function dataCloudflareWaitingRoomEventsResultToTerraform(struct?: DataCloudflareWaitingRoomEventsResult): any;
export declare function dataCloudflareWaitingRoomEventsResultToHclTerraform(struct?: DataCloudflareWaitingRoomEventsResult): any;
export declare class DataCloudflareWaitingRoomEventsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWaitingRoomEventsResult | undefined;
    set internalValue(value: DataCloudflareWaitingRoomEventsResult | undefined);
    get createdOn(): any;
    get customPageHtml(): any;
    get description(): any;
    get disableSessionRenewal(): any;
    get eventEndTime(): any;
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
}
export declare class DataCloudflareWaitingRoomEventsResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareWaitingRoomEventsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_events cloudflare_waiting_room_events}
*/
export declare class DataCloudflareWaitingRoomEvents extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_waiting_room_events";
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRoomEvents resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoomEvents to import
    * @param importFromId The id of the existing DataCloudflareWaitingRoomEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_events#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoomEvents to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room_events cloudflare_waiting_room_events} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomEventsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareWaitingRoomEventsConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareWaitingRoomEventsResultList;
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
