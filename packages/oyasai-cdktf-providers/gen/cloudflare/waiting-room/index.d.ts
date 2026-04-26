import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WaitingRoomConfig extends cdktf.TerraformMetaArguments {
    /**
    * Only available for the Waiting Room Advanced subscription. Additional hostname and path combinations to which this waiting room will be applied. There is an implied wildcard at the end of the path. The hostname and path combination must be unique to this and all other waiting rooms.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#additional_routes WaitingRoom#additional_routes}
    */
    readonly additionalRoutes?: WaitingRoomAdditionalRoutes[] | cdktf.IResolvable;
    /**
    * Configures cookie attributes for the waiting room cookie. This encrypted cookie stores a user's status in the waiting room, such as queue position.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#cookie_attributes WaitingRoom#cookie_attributes}
    */
    readonly cookieAttributes?: WaitingRoomCookieAttributes;
    /**
    * Appends a '_' + a custom suffix to the end of Cloudflare Waiting Room's cookie name(__cf_waitingroom). If `cookie_suffix` is "abcd", the cookie name will be `__cf_waitingroom_abcd`. This field is required if using `additional_routes`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#cookie_suffix WaitingRoom#cookie_suffix}
    */
    readonly cookieSuffix?: string;
    /**
    * Only available for the Waiting Room Advanced subscription. This is a template html file that will be rendered at the edge. If no custom_page_html is provided, the default waiting room will be used. The template is based on mustache ( https://mustache.github.io/ ). There are several variables that are evaluated by the Cloudflare edge:
    * 1. {{`waitTimeKnown`}} Acts like a boolean value that indicates the behavior to take when wait time is not available, for instance when queue_all is **true**.
    * 2. {{`waitTimeFormatted`}} Estimated wait time for the user. For example, five minutes. Alternatively, you can use:
    * 3. {{`waitTime`}} Number of minutes of estimated wait for a user.
    * 4. {{`waitTimeHours`}} Number of hours of estimated wait for a user (`Math.floor(waitTime/60)`).
    * 5. {{`waitTimeHourMinutes`}} Number of minutes above the `waitTimeHours` value (`waitTime%60`).
    * 6. {{`queueIsFull`}} Changes to **true** when no more people can be added to the queue.
    *
    * To view the full list of variables, look at the `cfWaitingRoom` object described under the `json_response_enabled` property in other Waiting Room API calls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#custom_page_html WaitingRoom#custom_page_html}
    */
    readonly customPageHtml?: string;
    /**
    * The language of the default page template. If no default_template_language is provided, then `en-US` (English) will be used.
    * Available values: "en-US", "es-ES", "de-DE", "fr-FR", "it-IT", "ja-JP", "ko-KR", "pt-BR", "zh-CN", "zh-TW", "nl-NL", "pl-PL", "id-ID", "tr-TR", "ar-EG", "ru-RU", "fa-IR", "bg-BG", "hr-HR", "cs-CZ", "da-DK", "fi-FI", "lt-LT", "ms-MY", "nb-NO", "ro-RO", "el-GR", "he-IL", "hi-IN", "hu-HU", "sr-BA", "sk-SK", "sl-SI", "sv-SE", "tl-PH", "th-TH", "uk-UA", "vi-VN".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#default_template_language WaitingRoom#default_template_language}
    */
    readonly defaultTemplateLanguage?: string;
    /**
    * A note that you can use to add more details about the waiting room.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#description WaitingRoom#description}
    */
    readonly description?: string;
    /**
    * Only available for the Waiting Room Advanced subscription. Disables automatic renewal of session cookies. If `true`, an accepted user will have session_duration minutes to browse the site. After that, they will have to go through the waiting room again. If `false`, a user's session cookie will be automatically renewed on every request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#disable_session_renewal WaitingRoom#disable_session_renewal}
    */
    readonly disableSessionRenewal?: boolean | cdktf.IResolvable;
    /**
    * A list of enabled origin commands.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#enabled_origin_commands WaitingRoom#enabled_origin_commands}
    */
    readonly enabledOriginCommands?: string[];
    /**
    * The host name to which the waiting room will be applied (no wildcards). Please do not include the scheme (http:// or https://). The host and path combination must be unique.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#host WaitingRoom#host}
    */
    readonly host: string;
    /**
    * Only available for the Waiting Room Advanced subscription. If `true`, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object with information on the user's status in the waiting room as opposed to the configured static HTML page. This JSON response object has one property `cfWaitingRoom` which is an object containing the following fields:
    * 1. `inWaitingRoom`: Boolean indicating if the user is in the waiting room (always **true**).
    * 2. `waitTimeKnown`: Boolean indicating if the current estimated wait times are accurate. If **false**, they are not available.
    * 3. `waitTime`: Valid only when `waitTimeKnown` is **true**. Integer indicating the current estimated time in minutes the user will wait in the waiting room. When `queueingMethod` is **random**, this is set to `waitTime50Percentile`.
    * 4. `waitTime25Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 25% of users that gain entry the fastest (25th percentile).
    * 5. `waitTime50Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 50% of users that gain entry the fastest (50th percentile). In other words, half of the queued users are expected to let into the origin website before `waitTime50Percentile` and half are expected to be let in after it.
    * 6. `waitTime75Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 75% of users that gain entry the fastest (75th percentile).
    * 7. `waitTimeFormatted`: String displaying the `waitTime` formatted in English for users. If `waitTimeKnown` is **false**, `waitTimeFormatted` will display **unavailable**.
    * 8. `queueIsFull`: Boolean indicating if the waiting room's queue is currently full and not accepting new users at the moment.
    * 9. `queueAll`: Boolean indicating if all users will be queued in the waiting room and no one will be let into the origin website.
    * 10. `lastUpdated`: String displaying the timestamp as an ISO 8601 string of the user's last attempt to leave the waiting room and be let into the origin website. The user is able to make another attempt after `refreshIntervalSeconds` past this time. If the user makes a request too soon, it will be ignored and `lastUpdated` will not change.
    * 11. `refreshIntervalSeconds`: Integer indicating the number of seconds after `lastUpdated` until the user is able to make another attempt to leave the waiting room and be let into the origin website. When the `queueingMethod` is `reject`, there is no specified refresh time —\_it will always be **zero**.
    * 12. `queueingMethod`: The queueing method currently used by the waiting room. It is either **fifo**, **random**, **passthrough**, or **reject**.
    * 13. `isFIFOQueue`: Boolean indicating if the waiting room uses a FIFO (First-In-First-Out) queue.
    * 14. `isRandomQueue`: Boolean indicating if the waiting room uses a Random queue where users gain access randomly.
    * 15. `isPassthroughQueue`: Boolean indicating if the waiting room uses a passthrough queue. Keep in mind that when passthrough is enabled, this JSON response will only exist when `queueAll` is **true** or `isEventPrequeueing` is **true** because in all other cases requests will go directly to the origin.
    * 16. `isRejectQueue`: Boolean indicating if the waiting room uses a reject queue.
    * 17. `isEventActive`: Boolean indicating if an event is currently occurring. Events are able to change a waiting room's behavior during a specified period of time. For additional information, look at the event properties `prequeue_start_time`, `event_start_time`, and `event_end_time` in the documentation for creating waiting room events. Events are considered active between these start and end times, as well as during the prequeueing period if it exists.
    * 18. `isEventPrequeueing`: Valid only when `isEventActive` is **true**. Boolean indicating if an event is currently prequeueing users before it starts.
    * 19. `timeUntilEventStart`: Valid only when `isEventPrequeueing` is **true**. Integer indicating the number of minutes until the event starts.
    * 20. `timeUntilEventStartFormatted`: String displaying the `timeUntilEventStart` formatted in English for users. If `isEventPrequeueing` is **false**, `timeUntilEventStartFormatted` will display **unavailable**.
    * 21. `timeUntilEventEnd`: Valid only when `isEventActive` is **true**. Integer indicating the number of minutes until the event ends.
    * 22. `timeUntilEventEndFormatted`: String displaying the `timeUntilEventEnd` formatted in English for users. If `isEventActive` is **false**, `timeUntilEventEndFormatted` will display **unavailable**.
    * 23. `shuffleAtEventStart`: Valid only when `isEventActive` is **true**. Boolean indicating if the users in the prequeue are shuffled randomly when the event starts.
    * 24. `turnstile`: Empty when turnstile isn't enabled. String displaying an html tag to display the Turnstile widget. Please add the `{{{turnstile}}}` tag to the `custom_html` template to ensure the Turnstile widget appears.
    * 25. `infiniteQueue`: Boolean indicating whether the response is for a user in the infinite queue.
    *
    * An example cURL to a waiting room could be:
    *
    * 	curl -X GET "https://example.com/waitingroom" \
    * 		-H "Accept: application/json"
    *
    * If `json_response_enabled` is **true** and the request hits the waiting room, an example JSON response when `queueingMethod` is **fifo** and no event is active could be:
    *
    * 	{
    * 		"cfWaitingRoom": {
    * 			"inWaitingRoom": true,
    * 			"waitTimeKnown": true,
    * 			"waitTime": 10,
    * 			"waitTime25Percentile": 0,
    * 			"waitTime50Percentile": 0,
    * 			"waitTime75Percentile": 0,
    * 			"waitTimeFormatted": "10 minutes",
    * 			"queueIsFull": false,
    * 			"queueAll": false,
    * 			"lastUpdated": "2020-08-03T23:46:00.000Z",
    * 			"refreshIntervalSeconds": 20,
    * 			"queueingMethod": "fifo",
    * 			"isFIFOQueue": true,
    * 			"isRandomQueue": false,
    * 			"isPassthroughQueue": false,
    * 			"isRejectQueue": false,
    * 			"isEventActive": false,
    * 			"isEventPrequeueing": false,
    * 			"timeUntilEventStart": 0,
    * 			"timeUntilEventStartFormatted": "unavailable",
    * 			"timeUntilEventEnd": 0,
    * 			"timeUntilEventEndFormatted": "unavailable",
    * 			"shuffleAtEventStart": false
    * 		}
    * 	}
    *
    * If `json_response_enabled` is **true** and the request hits the waiting room, an example JSON response when `queueingMethod` is **random** and an event is active could be:
    *
    * 	{
    * 		"cfWaitingRoom": {
    * 			"inWaitingRoom": true,
    * 			"waitTimeKnown": true,
    * 			"waitTime": 10,
    * 			"waitTime25Percentile": 5,
    * 			"waitTime50Percentile": 10,
    * 			"waitTime75Percentile": 15,
    * 			"waitTimeFormatted": "5 minutes to 15 minutes",
    * 			"queueIsFull": false,
    * 			"queueAll": false,
    * 			"lastUpdated": "2020-08-03T23:46:00.000Z",
    * 			"refreshIntervalSeconds": 20,
    * 			"queueingMethod": "random",
    * 			"isFIFOQueue": false,
    * 			"isRandomQueue": true,
    * 			"isPassthroughQueue": false,
    * 			"isRejectQueue": false,
    * 			"isEventActive": true,
    * 			"isEventPrequeueing": false,
    * 			"timeUntilEventStart": 0,
    * 			"timeUntilEventStartFormatted": "unavailable",
    * 			"timeUntilEventEnd": 15,
    * 			"timeUntilEventEndFormatted": "15 minutes",
    * 			"shuffleAtEventStart": true
    * 		}
    * 	}
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#json_response_enabled WaitingRoom#json_response_enabled}
    */
    readonly jsonResponseEnabled?: boolean | cdktf.IResolvable;
    /**
    * A unique name to identify the waiting room. Only alphanumeric characters, hyphens and underscores are allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#name WaitingRoom#name}
    */
    readonly name: string;
    /**
    * Sets the number of new users that will be let into the route every minute. This value is used as baseline for the number of users that are let in per minute. So it is possible that there is a little more or little less traffic coming to the route based on the traffic patterns at that time around the world.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#new_users_per_minute WaitingRoom#new_users_per_minute}
    */
    readonly newUsersPerMinute: number;
    /**
    * Sets the path within the host to enable the waiting room on. The waiting room will be enabled for all subpaths as well. If there are two waiting rooms on the same subpath, the waiting room for the most specific path will be chosen. Wildcards and query parameters are not supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#path WaitingRoom#path}
    */
    readonly path?: string;
    /**
    * If queue_all is `true`, all the traffic that is coming to a route will be sent to the waiting room. No new traffic can get to the route once this field is set and estimated time will become unavailable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#queue_all WaitingRoom#queue_all}
    */
    readonly queueAll?: boolean | cdktf.IResolvable;
    /**
    * Sets the queueing method used by the waiting room. Changing this parameter from the **default** queueing method is only available for the Waiting Room Advanced subscription. Regardless of the queueing method, if `queue_all` is enabled or an event is prequeueing, users in the waiting room will not be accepted to the origin. These users will always see a waiting room page that refreshes automatically. The valid queueing methods are:
    * 1. `fifo` **(default)**: First-In-First-Out queue where customers gain access in the order they arrived.
    * 2. `random`: Random queue where customers gain access randomly, regardless of arrival time.
    * 3. `passthrough`: Users will pass directly through the waiting room and into the origin website. As a result, any configured limits will not be respected while this is enabled. This method can be used as an alternative to disabling a waiting room (with `suspended`) so that analytics are still reported. This can be used if you wish to allow all traffic normally, but want to restrict traffic during a waiting room event, or vice versa.
    * 4. `reject`: Users will be immediately rejected from the waiting room. As a result, no users will reach the origin website while this is enabled. This can be used if you wish to reject all traffic while performing maintenance, block traffic during a specified period of time (an event), or block traffic while events are not occurring. Consider a waiting room used for vaccine distribution that only allows traffic during sign-up events, and otherwise blocks all traffic. For this case, the waiting room uses `reject`, and its events override this with `fifo`, `random`, or `passthrough`. When this queueing method is enabled and neither `queueAll` is enabled nor an event is prequeueing, the waiting room page **will not refresh automatically**.
    * Available values: "fifo", "random", "passthrough", "reject".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#queueing_method WaitingRoom#queueing_method}
    */
    readonly queueingMethod?: string;
    /**
    * HTTP status code returned to a user while in the queue.
    * Available values: 200, 202, 429.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#queueing_status_code WaitingRoom#queueing_status_code}
    */
    readonly queueingStatusCode?: number;
    /**
    * Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the route. If a user is not seen by Cloudflare again in that time period, they will be treated as a new user that visits the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#session_duration WaitingRoom#session_duration}
    */
    readonly sessionDuration?: number;
    /**
    * Suspends or allows traffic going to the waiting room. If set to `true`, the traffic will not go to the waiting room.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#suspended WaitingRoom#suspended}
    */
    readonly suspended?: boolean | cdktf.IResolvable;
    /**
    * Sets the total number of active user sessions on the route at a point in time. A route is a combination of host and path on which a waiting room is available. This value is used as a baseline for the total number of active user sessions on the route. It is possible to have a situation where there are more or less active users sessions on the route based on the traffic patterns at that time around the world.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#total_active_users WaitingRoom#total_active_users}
    */
    readonly totalActiveUsers: number;
    /**
    * Which action to take when a bot is detected using Turnstile. `log` will
    * have no impact on queueing behavior, simply keeping track of how many
    * bots are detected in Waiting Room Analytics. `infinite_queue` will send
    * bots to a false queueing state, where they will never reach your
    * origin. `infinite_queue` requires Advanced Waiting Room.
    * Available values: "log", "infinite_queue".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#turnstile_action WaitingRoom#turnstile_action}
    */
    readonly turnstileAction?: string;
    /**
    * Which Turnstile widget type to use for detecting bot traffic. See
    * [the Turnstile documentation](https://developers.cloudflare.com/turnstile/concepts/widget/#widget-types)
    * for the definitions of these widget types. Set to `off` to disable the
    * Turnstile integration entirely. Setting this to anything other than
    * `off` or `invisible` requires Advanced Waiting Room.
    * Available values: "off", "invisible", "visible_non_interactive", "visible_managed".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#turnstile_mode WaitingRoom#turnstile_mode}
    */
    readonly turnstileMode?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#zone_id WaitingRoom#zone_id}
    */
    readonly zoneId?: string;
}
export interface WaitingRoomAdditionalRoutes {
    /**
    * The hostname to which this waiting room will be applied (no wildcards). The hostname must be the primary domain, subdomain, or custom hostname (if using SSL for SaaS) of this zone. Please do not include the scheme (http:// or https://).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#host WaitingRoom#host}
    */
    readonly host?: string;
    /**
    * Sets the path within the host to enable the waiting room on. The waiting room will be enabled for all subpaths as well. If there are two waiting rooms on the same subpath, the waiting room for the most specific path will be chosen. Wildcards and query parameters are not supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#path WaitingRoom#path}
    */
    readonly path?: string;
}
export declare function waitingRoomAdditionalRoutesToTerraform(struct?: WaitingRoomAdditionalRoutes | cdktf.IResolvable): any;
export declare function waitingRoomAdditionalRoutesToHclTerraform(struct?: WaitingRoomAdditionalRoutes | cdktf.IResolvable): any;
export declare class WaitingRoomAdditionalRoutesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WaitingRoomAdditionalRoutes | cdktf.IResolvable | undefined;
    set internalValue(value: WaitingRoomAdditionalRoutes | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
}
export declare class WaitingRoomAdditionalRoutesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WaitingRoomAdditionalRoutes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WaitingRoomAdditionalRoutesOutputReference;
}
export interface WaitingRoomCookieAttributes {
    /**
    * Configures the SameSite attribute on the waiting room cookie. Value `auto` will be translated to `lax` or `none` depending if **Always Use HTTPS** is enabled. Note that when using value `none`, the secure attribute cannot be set to `never`.
    * Available values: "auto", "lax", "none", "strict".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#samesite WaitingRoom#samesite}
    */
    readonly samesite?: string;
    /**
    * Configures the Secure attribute on the waiting room cookie. Value `always` indicates that the Secure attribute will be set in the Set-Cookie header, `never` indicates that the Secure attribute will not be set, and `auto` will set the Secure attribute depending if **Always Use HTTPS** is enabled.
    * Available values: "auto", "always", "never".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#secure WaitingRoom#secure}
    */
    readonly secure?: string;
}
export declare function waitingRoomCookieAttributesToTerraform(struct?: WaitingRoomCookieAttributes | cdktf.IResolvable): any;
export declare function waitingRoomCookieAttributesToHclTerraform(struct?: WaitingRoomCookieAttributes | cdktf.IResolvable): any;
export declare class WaitingRoomCookieAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WaitingRoomCookieAttributes | cdktf.IResolvable | undefined;
    set internalValue(value: WaitingRoomCookieAttributes | cdktf.IResolvable | undefined);
    private _samesite?;
    get samesite(): string;
    set samesite(value: string);
    resetSamesite(): void;
    get samesiteInput(): string;
    private _secure?;
    get secure(): string;
    set secure(value: string);
    resetSecure(): void;
    get secureInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room cloudflare_waiting_room}
*/
export declare class WaitingRoom extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_waiting_room";
    /**
    * Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WaitingRoom to import
    * @param importFromId The id of the existing WaitingRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WaitingRoom to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/waiting_room cloudflare_waiting_room} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WaitingRoomConfig
    */
    constructor(scope: Construct, id: string, config: WaitingRoomConfig);
    private _additionalRoutes;
    get additionalRoutes(): WaitingRoomAdditionalRoutesList;
    putAdditionalRoutes(value: WaitingRoomAdditionalRoutes[] | cdktf.IResolvable): void;
    resetAdditionalRoutes(): void;
    get additionalRoutesInput(): any;
    private _cookieAttributes;
    get cookieAttributes(): WaitingRoomCookieAttributesOutputReference;
    putCookieAttributes(value: WaitingRoomCookieAttributes): void;
    resetCookieAttributes(): void;
    get cookieAttributesInput(): any;
    private _cookieSuffix?;
    get cookieSuffix(): string;
    set cookieSuffix(value: string);
    resetCookieSuffix(): void;
    get cookieSuffixInput(): string;
    get createdOn(): any;
    private _customPageHtml?;
    get customPageHtml(): string;
    set customPageHtml(value: string);
    resetCustomPageHtml(): void;
    get customPageHtmlInput(): string;
    private _defaultTemplateLanguage?;
    get defaultTemplateLanguage(): string;
    set defaultTemplateLanguage(value: string);
    resetDefaultTemplateLanguage(): void;
    get defaultTemplateLanguageInput(): string;
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
    private _enabledOriginCommands?;
    get enabledOriginCommands(): string[];
    set enabledOriginCommands(value: string[]);
    resetEnabledOriginCommands(): void;
    get enabledOriginCommandsInput(): string[];
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    get id(): any;
    private _jsonResponseEnabled?;
    get jsonResponseEnabled(): boolean | cdktf.IResolvable;
    set jsonResponseEnabled(value: boolean | cdktf.IResolvable);
    resetJsonResponseEnabled(): void;
    get jsonResponseEnabledInput(): any;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _newUsersPerMinute?;
    get newUsersPerMinute(): number;
    set newUsersPerMinute(value: number);
    get newUsersPerMinuteInput(): number;
    get nextEventPrequeueStartTime(): any;
    get nextEventStartTime(): any;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _queueAll?;
    get queueAll(): boolean | cdktf.IResolvable;
    set queueAll(value: boolean | cdktf.IResolvable);
    resetQueueAll(): void;
    get queueAllInput(): any;
    private _queueingMethod?;
    get queueingMethod(): string;
    set queueingMethod(value: string);
    resetQueueingMethod(): void;
    get queueingMethodInput(): string;
    private _queueingStatusCode?;
    get queueingStatusCode(): number;
    set queueingStatusCode(value: number);
    resetQueueingStatusCode(): void;
    get queueingStatusCodeInput(): number;
    private _sessionDuration?;
    get sessionDuration(): number;
    set sessionDuration(value: number);
    resetSessionDuration(): void;
    get sessionDurationInput(): number;
    private _suspended?;
    get suspended(): boolean | cdktf.IResolvable;
    set suspended(value: boolean | cdktf.IResolvable);
    resetSuspended(): void;
    get suspendedInput(): any;
    private _totalActiveUsers?;
    get totalActiveUsers(): number;
    set totalActiveUsers(value: number);
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
