import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareRateLimitsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limits#max_items DataCloudflareRateLimits#max_items}
    */
    readonly maxItems?: number;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limits#zone_id DataCloudflareRateLimits#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareRateLimitsResultActionResponse {
}
export declare function dataCloudflareRateLimitsResultActionResponseToTerraform(struct?: DataCloudflareRateLimitsResultActionResponse): any;
export declare function dataCloudflareRateLimitsResultActionResponseToHclTerraform(struct?: DataCloudflareRateLimitsResultActionResponse): any;
export declare class DataCloudflareRateLimitsResultActionResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRateLimitsResultActionResponse | undefined;
    set internalValue(value: DataCloudflareRateLimitsResultActionResponse | undefined);
    get body(): any;
    get contentType(): any;
}
export interface DataCloudflareRateLimitsResultAction {
}
export declare function dataCloudflareRateLimitsResultActionToTerraform(struct?: DataCloudflareRateLimitsResultAction): any;
export declare function dataCloudflareRateLimitsResultActionToHclTerraform(struct?: DataCloudflareRateLimitsResultAction): any;
export declare class DataCloudflareRateLimitsResultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRateLimitsResultAction | undefined;
    set internalValue(value: DataCloudflareRateLimitsResultAction | undefined);
    get mode(): any;
    private _response;
    get response(): DataCloudflareRateLimitsResultActionResponseOutputReference;
    get timeout(): any;
}
export interface DataCloudflareRateLimitsResultBypass {
}
export declare function dataCloudflareRateLimitsResultBypassToTerraform(struct?: DataCloudflareRateLimitsResultBypass): any;
export declare function dataCloudflareRateLimitsResultBypassToHclTerraform(struct?: DataCloudflareRateLimitsResultBypass): any;
export declare class DataCloudflareRateLimitsResultBypassOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRateLimitsResultBypass | undefined;
    set internalValue(value: DataCloudflareRateLimitsResultBypass | undefined);
    get name(): any;
    get value(): any;
}
export declare class DataCloudflareRateLimitsResultBypassList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRateLimitsResultBypassOutputReference;
}
export interface DataCloudflareRateLimitsResultMatchHeaders {
}
export declare function dataCloudflareRateLimitsResultMatchHeadersToTerraform(struct?: DataCloudflareRateLimitsResultMatchHeaders): any;
export declare function dataCloudflareRateLimitsResultMatchHeadersToHclTerraform(struct?: DataCloudflareRateLimitsResultMatchHeaders): any;
export declare class DataCloudflareRateLimitsResultMatchHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRateLimitsResultMatchHeaders | undefined;
    set internalValue(value: DataCloudflareRateLimitsResultMatchHeaders | undefined);
    get name(): any;
    get op(): any;
    get value(): any;
}
export declare class DataCloudflareRateLimitsResultMatchHeadersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRateLimitsResultMatchHeadersOutputReference;
}
export interface DataCloudflareRateLimitsResultMatchRequest {
}
export declare function dataCloudflareRateLimitsResultMatchRequestToTerraform(struct?: DataCloudflareRateLimitsResultMatchRequest): any;
export declare function dataCloudflareRateLimitsResultMatchRequestToHclTerraform(struct?: DataCloudflareRateLimitsResultMatchRequest): any;
export declare class DataCloudflareRateLimitsResultMatchRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRateLimitsResultMatchRequest | undefined;
    set internalValue(value: DataCloudflareRateLimitsResultMatchRequest | undefined);
    get methods(): any;
    get schemes(): any;
    get url(): any;
}
export interface DataCloudflareRateLimitsResultMatchResponse {
}
export declare function dataCloudflareRateLimitsResultMatchResponseToTerraform(struct?: DataCloudflareRateLimitsResultMatchResponse): any;
export declare function dataCloudflareRateLimitsResultMatchResponseToHclTerraform(struct?: DataCloudflareRateLimitsResultMatchResponse): any;
export declare class DataCloudflareRateLimitsResultMatchResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRateLimitsResultMatchResponse | undefined;
    set internalValue(value: DataCloudflareRateLimitsResultMatchResponse | undefined);
    get originTraffic(): any;
}
export interface DataCloudflareRateLimitsResultMatch {
}
export declare function dataCloudflareRateLimitsResultMatchToTerraform(struct?: DataCloudflareRateLimitsResultMatch): any;
export declare function dataCloudflareRateLimitsResultMatchToHclTerraform(struct?: DataCloudflareRateLimitsResultMatch): any;
export declare class DataCloudflareRateLimitsResultMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareRateLimitsResultMatch | undefined;
    set internalValue(value: DataCloudflareRateLimitsResultMatch | undefined);
    private _headers;
    get headers(): DataCloudflareRateLimitsResultMatchHeadersList;
    private _request;
    get request(): DataCloudflareRateLimitsResultMatchRequestOutputReference;
    private _response;
    get response(): DataCloudflareRateLimitsResultMatchResponseOutputReference;
}
export interface DataCloudflareRateLimitsResult {
}
export declare function dataCloudflareRateLimitsResultToTerraform(struct?: DataCloudflareRateLimitsResult): any;
export declare function dataCloudflareRateLimitsResultToHclTerraform(struct?: DataCloudflareRateLimitsResult): any;
export declare class DataCloudflareRateLimitsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareRateLimitsResult | undefined;
    set internalValue(value: DataCloudflareRateLimitsResult | undefined);
    private _action;
    get action(): DataCloudflareRateLimitsResultActionOutputReference;
    private _bypass;
    get bypass(): DataCloudflareRateLimitsResultBypassList;
    get description(): any;
    get disabled(): any;
    get id(): any;
    private _match;
    get match(): DataCloudflareRateLimitsResultMatchOutputReference;
    get period(): any;
    get threshold(): any;
}
export declare class DataCloudflareRateLimitsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareRateLimitsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limits cloudflare_rate_limits}
*/
export declare class DataCloudflareRateLimits extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_rate_limits";
    /**
    * Generates CDKTF code for importing a DataCloudflareRateLimits resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRateLimits to import
    * @param importFromId The id of the existing DataCloudflareRateLimits that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limits#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRateLimits to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/rate_limits cloudflare_rate_limits} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRateLimitsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareRateLimitsConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareRateLimitsResultList;
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
