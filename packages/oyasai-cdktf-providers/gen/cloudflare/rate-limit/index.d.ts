import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RateLimitConfig extends cdktf.TerraformMetaArguments {
    /**
    * The action to perform when the threshold of matched traffic within the configured period is exceeded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#action RateLimit#action}
    */
    readonly action: RateLimitAction;
    /**
    * Determines which traffic the rate limit counts towards the threshold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#match RateLimit#match}
    */
    readonly match: RateLimitMatch;
    /**
    * The time in seconds (an integer value) to count matching traffic. If the count exceeds the configured threshold within this period, Cloudflare will perform the configured action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#period RateLimit#period}
    */
    readonly period: number;
    /**
    * The threshold that will trigger the configured mitigation action. Configure this value along with the `period` property to establish a threshold per period.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#threshold RateLimit#threshold}
    */
    readonly threshold: number;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#zone_id RateLimit#zone_id}
    */
    readonly zoneId?: string;
}
export interface RateLimitActionResponse {
    /**
    * The response body to return. The value must conform to the configured content type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#body RateLimit#body}
    */
    readonly body?: string;
    /**
    * The content type of the body. Must be one of the following: `text/plain`, `text/xml`, or `application/json`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#content_type RateLimit#content_type}
    */
    readonly contentType?: string;
}
export declare function rateLimitActionResponseToTerraform(struct?: RateLimitActionResponse | cdktf.IResolvable): any;
export declare function rateLimitActionResponseToHclTerraform(struct?: RateLimitActionResponse | cdktf.IResolvable): any;
export declare class RateLimitActionResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RateLimitActionResponse | cdktf.IResolvable | undefined;
    set internalValue(value: RateLimitActionResponse | cdktf.IResolvable | undefined);
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    resetContentType(): void;
    get contentTypeInput(): string;
}
export interface RateLimitAction {
    /**
    * The action to perform.
    * Available values: "simulate", "ban", "challenge", "js_challenge", "managed_challenge".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#mode RateLimit#mode}
    */
    readonly mode?: string;
    /**
    * A custom content type and reponse to return when the threshold is exceeded. The custom response configured in this object will override the custom error for the zone. This object is optional.
    * Notes: If you omit this object, Cloudflare will use the default HTML error page. If "mode" is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the zone challenge pages and you should not provide the "response" object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#response RateLimit#response}
    */
    readonly response?: RateLimitActionResponse;
    /**
    * The time in seconds during which Cloudflare will perform the mitigation action. Must be an integer value greater than or equal to the period.
    * Notes: If "mode" is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the zone's Challenge Passage time and you should not provide this value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#timeout RateLimit#timeout}
    */
    readonly timeout?: number;
}
export declare function rateLimitActionToTerraform(struct?: RateLimitAction | cdktf.IResolvable): any;
export declare function rateLimitActionToHclTerraform(struct?: RateLimitAction | cdktf.IResolvable): any;
export declare class RateLimitActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RateLimitAction | cdktf.IResolvable | undefined;
    set internalValue(value: RateLimitAction | cdktf.IResolvable | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _response;
    get response(): RateLimitActionResponseOutputReference;
    putResponse(value: RateLimitActionResponse): void;
    resetResponse(): void;
    get responseInput(): any;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number;
}
export interface RateLimitBypass {
}
export declare function rateLimitBypassToTerraform(struct?: RateLimitBypass): any;
export declare function rateLimitBypassToHclTerraform(struct?: RateLimitBypass): any;
export declare class RateLimitBypassOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RateLimitBypass | undefined;
    set internalValue(value: RateLimitBypass | undefined);
    get name(): any;
    get value(): any;
}
export declare class RateLimitBypassList extends cdktf.ComplexList {
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
    get(index: number): RateLimitBypassOutputReference;
}
export interface RateLimitMatchHeaders {
    /**
    * The name of the response header to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#name RateLimit#name}
    */
    readonly name?: string;
    /**
    * The operator used when matching: `eq` means "equal" and `ne` means "not equal".
    * Available values: "eq", "ne".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#op RateLimit#op}
    */
    readonly op?: string;
    /**
    * The value of the response header, which must match exactly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#value RateLimit#value}
    */
    readonly value?: string;
}
export declare function rateLimitMatchHeadersToTerraform(struct?: RateLimitMatchHeaders | cdktf.IResolvable): any;
export declare function rateLimitMatchHeadersToHclTerraform(struct?: RateLimitMatchHeaders | cdktf.IResolvable): any;
export declare class RateLimitMatchHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RateLimitMatchHeaders | cdktf.IResolvable | undefined;
    set internalValue(value: RateLimitMatchHeaders | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _op?;
    get op(): string;
    set op(value: string);
    resetOp(): void;
    get opInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
}
export declare class RateLimitMatchHeadersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RateLimitMatchHeaders[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RateLimitMatchHeadersOutputReference;
}
export interface RateLimitMatchRequest {
    /**
    * The HTTP methods to match. You can specify a subset (for example, `['POST','PUT']`) or all methods (`['_ALL_']`). This field is optional when creating a rate limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#methods RateLimit#methods}
    */
    readonly methods?: string[];
    /**
    * The HTTP schemes to match. You can specify one scheme (`['HTTPS']`), both schemes (`['HTTP','HTTPS']`), or all schemes (`['_ALL_']`). This field is optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#schemes RateLimit#schemes}
    */
    readonly schemes?: string[];
    /**
    * The URL pattern to match, composed of a host and a path such as `example.org/path*`. Normalization is applied before the pattern is matched. `*` wildcards are expanded to match applicable traffic. Query strings are not matched. Set the value to `*` to match all traffic to your zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#url RateLimit#url}
    */
    readonly url?: string;
}
export declare function rateLimitMatchRequestToTerraform(struct?: RateLimitMatchRequest | cdktf.IResolvable): any;
export declare function rateLimitMatchRequestToHclTerraform(struct?: RateLimitMatchRequest | cdktf.IResolvable): any;
export declare class RateLimitMatchRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RateLimitMatchRequest | cdktf.IResolvable | undefined;
    set internalValue(value: RateLimitMatchRequest | cdktf.IResolvable | undefined);
    private _methods?;
    get methods(): string[];
    set methods(value: string[]);
    resetMethods(): void;
    get methodsInput(): string[];
    private _schemes?;
    get schemes(): string[];
    set schemes(value: string[]);
    resetSchemes(): void;
    get schemesInput(): string[];
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string;
}
export interface RateLimitMatchResponse {
    /**
    * When true, only the uncached traffic served from your origin servers will count towards rate limiting. In this case, any cached traffic served by Cloudflare will not count towards rate limiting. This field is optional.
    * Notes: This field is deprecated. Instead, use response headers and set "origin_traffic" to "false" to avoid legacy behaviour interacting with the "response_headers" property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#origin_traffic RateLimit#origin_traffic}
    */
    readonly originTraffic?: boolean | cdktf.IResolvable;
}
export declare function rateLimitMatchResponseToTerraform(struct?: RateLimitMatchResponse | cdktf.IResolvable): any;
export declare function rateLimitMatchResponseToHclTerraform(struct?: RateLimitMatchResponse | cdktf.IResolvable): any;
export declare class RateLimitMatchResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RateLimitMatchResponse | cdktf.IResolvable | undefined;
    set internalValue(value: RateLimitMatchResponse | cdktf.IResolvable | undefined);
    private _originTraffic?;
    get originTraffic(): boolean | cdktf.IResolvable;
    set originTraffic(value: boolean | cdktf.IResolvable);
    resetOriginTraffic(): void;
    get originTrafficInput(): any;
}
export interface RateLimitMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#headers RateLimit#headers}
    */
    readonly headers?: RateLimitMatchHeaders[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#request RateLimit#request}
    */
    readonly request?: RateLimitMatchRequest;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#response RateLimit#response}
    */
    readonly response?: RateLimitMatchResponse;
}
export declare function rateLimitMatchToTerraform(struct?: RateLimitMatch | cdktf.IResolvable): any;
export declare function rateLimitMatchToHclTerraform(struct?: RateLimitMatch | cdktf.IResolvable): any;
export declare class RateLimitMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RateLimitMatch | cdktf.IResolvable | undefined;
    set internalValue(value: RateLimitMatch | cdktf.IResolvable | undefined);
    private _headers;
    get headers(): RateLimitMatchHeadersList;
    putHeaders(value: RateLimitMatchHeaders[] | cdktf.IResolvable): void;
    resetHeaders(): void;
    get headersInput(): any;
    private _request;
    get request(): RateLimitMatchRequestOutputReference;
    putRequest(value: RateLimitMatchRequest): void;
    resetRequest(): void;
    get requestInput(): any;
    private _response;
    get response(): RateLimitMatchResponseOutputReference;
    putResponse(value: RateLimitMatchResponse): void;
    resetResponse(): void;
    get responseInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit cloudflare_rate_limit}
*/
export declare class RateLimit extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_rate_limit";
    /**
    * Generates CDKTF code for importing a RateLimit resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RateLimit to import
    * @param importFromId The id of the existing RateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RateLimit to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/rate_limit cloudflare_rate_limit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RateLimitConfig
    */
    constructor(scope: Construct, id: string, config: RateLimitConfig);
    private _action;
    get action(): RateLimitActionOutputReference;
    putAction(value: RateLimitAction): void;
    get actionInput(): any;
    private _bypass;
    get bypass(): RateLimitBypassList;
    get description(): any;
    get disabled(): any;
    get id(): any;
    private _match;
    get match(): RateLimitMatchOutputReference;
    putMatch(value: RateLimitMatch): void;
    get matchInput(): any;
    private _period?;
    get period(): number;
    set period(value: number);
    get periodInput(): number;
    private _threshold?;
    get threshold(): number;
    set threshold(value: number);
    get thresholdInput(): number;
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
