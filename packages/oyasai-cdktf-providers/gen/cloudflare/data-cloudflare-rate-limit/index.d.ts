import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareRateLimitConfig extends cdktf.TerraformMetaArguments {
    /**
    * Defines the unique identifier of the rate limit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limit#rate_limit_id DataCloudflareRateLimit#rate_limit_id}
    */
    readonly rateLimitId: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limit#zone_id DataCloudflareRateLimit#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareRateLimitActionResponse {
}
export declare function dataCloudflareRateLimitActionResponseToTerraform(struct?: DataCloudflareRateLimitActionResponse): any;
export declare function dataCloudflareRateLimitActionResponseToHclTerraform(struct?: DataCloudflareRateLimitActionResponse): any;
export declare class DataCloudflareRateLimitActionResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRateLimitActionResponse | undefined;
    set internalValue(value: DataCloudflareRateLimitActionResponse | undefined);
    get body(): any;
    get contentType(): any;
}
export interface DataCloudflareRateLimitAction {
}
export declare function dataCloudflareRateLimitActionToTerraform(struct?: DataCloudflareRateLimitAction): any;
export declare function dataCloudflareRateLimitActionToHclTerraform(struct?: DataCloudflareRateLimitAction): any;
export declare class DataCloudflareRateLimitActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRateLimitAction | undefined;
    set internalValue(value: DataCloudflareRateLimitAction | undefined);
    get mode(): any;
    private _response;
    get response(): DataCloudflareRateLimitActionResponseOutputReference;
    get timeout(): any;
}
export interface DataCloudflareRateLimitBypass {
}
export declare function dataCloudflareRateLimitBypassToTerraform(struct?: DataCloudflareRateLimitBypass): any;
export declare function dataCloudflareRateLimitBypassToHclTerraform(struct?: DataCloudflareRateLimitBypass): any;
export declare class DataCloudflareRateLimitBypassOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRateLimitBypass | undefined;
    set internalValue(value: DataCloudflareRateLimitBypass | undefined);
    get name(): any;
    get value(): any;
}
export declare class DataCloudflareRateLimitBypassList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRateLimitBypassOutputReference;
}
export interface DataCloudflareRateLimitMatchHeaders {
}
export declare function dataCloudflareRateLimitMatchHeadersToTerraform(struct?: DataCloudflareRateLimitMatchHeaders): any;
export declare function dataCloudflareRateLimitMatchHeadersToHclTerraform(struct?: DataCloudflareRateLimitMatchHeaders): any;
export declare class DataCloudflareRateLimitMatchHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRateLimitMatchHeaders | undefined;
    set internalValue(value: DataCloudflareRateLimitMatchHeaders | undefined);
    get name(): any;
    get op(): any;
    get value(): any;
}
export declare class DataCloudflareRateLimitMatchHeadersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRateLimitMatchHeadersOutputReference;
}
export interface DataCloudflareRateLimitMatchRequest {
}
export declare function dataCloudflareRateLimitMatchRequestToTerraform(struct?: DataCloudflareRateLimitMatchRequest): any;
export declare function dataCloudflareRateLimitMatchRequestToHclTerraform(struct?: DataCloudflareRateLimitMatchRequest): any;
export declare class DataCloudflareRateLimitMatchRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRateLimitMatchRequest | undefined;
    set internalValue(value: DataCloudflareRateLimitMatchRequest | undefined);
    get methods(): any;
    get schemes(): any;
    get url(): any;
}
export interface DataCloudflareRateLimitMatchResponse {
}
export declare function dataCloudflareRateLimitMatchResponseToTerraform(struct?: DataCloudflareRateLimitMatchResponse): any;
export declare function dataCloudflareRateLimitMatchResponseToHclTerraform(struct?: DataCloudflareRateLimitMatchResponse): any;
export declare class DataCloudflareRateLimitMatchResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRateLimitMatchResponse | undefined;
    set internalValue(value: DataCloudflareRateLimitMatchResponse | undefined);
    get originTraffic(): any;
}
export interface DataCloudflareRateLimitMatch {
}
export declare function dataCloudflareRateLimitMatchToTerraform(struct?: DataCloudflareRateLimitMatch): any;
export declare function dataCloudflareRateLimitMatchToHclTerraform(struct?: DataCloudflareRateLimitMatch): any;
export declare class DataCloudflareRateLimitMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRateLimitMatch | undefined;
    set internalValue(value: DataCloudflareRateLimitMatch | undefined);
    private _headers;
    get headers(): DataCloudflareRateLimitMatchHeadersList;
    private _request;
    get request(): DataCloudflareRateLimitMatchRequestOutputReference;
    private _response;
    get response(): DataCloudflareRateLimitMatchResponseOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limit cloudflare_rate_limit}
*/
export declare class DataCloudflareRateLimit extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_rate_limit";
    /**
    * Generates CDKTF code for importing a DataCloudflareRateLimit resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRateLimit to import
    * @param importFromId The id of the existing DataCloudflareRateLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRateLimit to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limit cloudflare_rate_limit} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRateLimitConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareRateLimitConfig);
    private _action;
    get action(): DataCloudflareRateLimitActionOutputReference;
    private _bypass;
    get bypass(): DataCloudflareRateLimitBypassList;
    get description(): any;
    get disabled(): any;
    get id(): any;
    private _match;
    get match(): DataCloudflareRateLimitMatchOutputReference;
    get period(): any;
    private _rateLimitId?;
    get rateLimitId(): string;
    set rateLimitId(value: string);
    get rateLimitIdInput(): string;
    get threshold(): any;
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
