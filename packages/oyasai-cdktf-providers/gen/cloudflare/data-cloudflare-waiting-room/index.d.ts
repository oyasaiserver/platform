import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWaitingRoomConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room#waiting_room_id DataCloudflareWaitingRoom#waiting_room_id}
    */
    readonly waitingRoomId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room#zone_id DataCloudflareWaitingRoom#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareWaitingRoomAdditionalRoutes {
}
export declare function dataCloudflareWaitingRoomAdditionalRoutesToTerraform(struct?: DataCloudflareWaitingRoomAdditionalRoutes): any;
export declare function dataCloudflareWaitingRoomAdditionalRoutesToHclTerraform(struct?: DataCloudflareWaitingRoomAdditionalRoutes): any;
export declare class DataCloudflareWaitingRoomAdditionalRoutesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWaitingRoomAdditionalRoutes | undefined;
    set internalValue(value: DataCloudflareWaitingRoomAdditionalRoutes | undefined);
    get host(): any;
    get path(): any;
}
export declare class DataCloudflareWaitingRoomAdditionalRoutesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWaitingRoomAdditionalRoutesOutputReference;
}
export interface DataCloudflareWaitingRoomCookieAttributes {
}
export declare function dataCloudflareWaitingRoomCookieAttributesToTerraform(struct?: DataCloudflareWaitingRoomCookieAttributes): any;
export declare function dataCloudflareWaitingRoomCookieAttributesToHclTerraform(struct?: DataCloudflareWaitingRoomCookieAttributes): any;
export declare class DataCloudflareWaitingRoomCookieAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWaitingRoomCookieAttributes | undefined;
    set internalValue(value: DataCloudflareWaitingRoomCookieAttributes | undefined);
    get samesite(): any;
    get secure(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room cloudflare_waiting_room}
*/
export declare class DataCloudflareWaitingRoom extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_waiting_room";
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRoom resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRoom to import
    * @param importFromId The id of the existing DataCloudflareWaitingRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRoom to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_room cloudflare_waiting_room} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareWaitingRoomConfig);
    private _additionalRoutes;
    get additionalRoutes(): DataCloudflareWaitingRoomAdditionalRoutesList;
    private _cookieAttributes;
    get cookieAttributes(): DataCloudflareWaitingRoomCookieAttributesOutputReference;
    get cookieSuffix(): any;
    get createdOn(): any;
    get customPageHtml(): any;
    get defaultTemplateLanguage(): any;
    get description(): any;
    get disableSessionRenewal(): any;
    get enabledOriginCommands(): any;
    get host(): any;
    get id(): any;
    get jsonResponseEnabled(): any;
    get modifiedOn(): any;
    get name(): any;
    get newUsersPerMinute(): any;
    get nextEventPrequeueStartTime(): any;
    get nextEventStartTime(): any;
    get path(): any;
    get queueAll(): any;
    get queueingMethod(): any;
    get queueingStatusCode(): any;
    get sessionDuration(): any;
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
