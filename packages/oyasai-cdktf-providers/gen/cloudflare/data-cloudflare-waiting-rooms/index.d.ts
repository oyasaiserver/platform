import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareWaitingRoomsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_rooms#account_id DataCloudflareWaitingRooms#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_rooms#max_items DataCloudflareWaitingRooms#max_items}
    */
    readonly maxItems?: number;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_rooms#zone_id DataCloudflareWaitingRooms#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareWaitingRoomsResultAdditionalRoutes {
}
export declare function dataCloudflareWaitingRoomsResultAdditionalRoutesToTerraform(struct?: DataCloudflareWaitingRoomsResultAdditionalRoutes): any;
export declare function dataCloudflareWaitingRoomsResultAdditionalRoutesToHclTerraform(struct?: DataCloudflareWaitingRoomsResultAdditionalRoutes): any;
export declare class DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWaitingRoomsResultAdditionalRoutes | undefined;
    set internalValue(value: DataCloudflareWaitingRoomsResultAdditionalRoutes | undefined);
    get host(): any;
    get path(): any;
}
export declare class DataCloudflareWaitingRoomsResultAdditionalRoutesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWaitingRoomsResultAdditionalRoutesOutputReference;
}
export interface DataCloudflareWaitingRoomsResultCookieAttributes {
}
export declare function dataCloudflareWaitingRoomsResultCookieAttributesToTerraform(struct?: DataCloudflareWaitingRoomsResultCookieAttributes): any;
export declare function dataCloudflareWaitingRoomsResultCookieAttributesToHclTerraform(struct?: DataCloudflareWaitingRoomsResultCookieAttributes): any;
export declare class DataCloudflareWaitingRoomsResultCookieAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareWaitingRoomsResultCookieAttributes | undefined;
    set internalValue(value: DataCloudflareWaitingRoomsResultCookieAttributes | undefined);
    get samesite(): any;
    get secure(): any;
}
export interface DataCloudflareWaitingRoomsResult {
}
export declare function dataCloudflareWaitingRoomsResultToTerraform(struct?: DataCloudflareWaitingRoomsResult): any;
export declare function dataCloudflareWaitingRoomsResultToHclTerraform(struct?: DataCloudflareWaitingRoomsResult): any;
export declare class DataCloudflareWaitingRoomsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareWaitingRoomsResult | undefined;
    set internalValue(value: DataCloudflareWaitingRoomsResult | undefined);
    private _additionalRoutes;
    get additionalRoutes(): DataCloudflareWaitingRoomsResultAdditionalRoutesList;
    private _cookieAttributes;
    get cookieAttributes(): DataCloudflareWaitingRoomsResultCookieAttributesOutputReference;
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
}
export declare class DataCloudflareWaitingRoomsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareWaitingRoomsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_rooms cloudflare_waiting_rooms}
*/
export declare class DataCloudflareWaitingRooms extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_waiting_rooms";
    /**
    * Generates CDKTF code for importing a DataCloudflareWaitingRooms resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWaitingRooms to import
    * @param importFromId The id of the existing DataCloudflareWaitingRooms that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_rooms#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWaitingRooms to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/waiting_rooms cloudflare_waiting_rooms} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWaitingRoomsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareWaitingRoomsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareWaitingRoomsResultList;
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
