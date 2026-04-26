import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAiGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway#account_id DataCloudflareAiGateway#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway#filter DataCloudflareAiGateway#filter}
    */
    readonly filter?: DataCloudflareAiGatewayFilter;
    /**
    * gateway id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway#id DataCloudflareAiGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataCloudflareAiGatewayDlpPolicies {
}
export declare function dataCloudflareAiGatewayDlpPoliciesToTerraform(struct?: DataCloudflareAiGatewayDlpPolicies): any;
export declare function dataCloudflareAiGatewayDlpPoliciesToHclTerraform(struct?: DataCloudflareAiGatewayDlpPolicies): any;
export declare class DataCloudflareAiGatewayDlpPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiGatewayDlpPolicies | undefined;
    set internalValue(value: DataCloudflareAiGatewayDlpPolicies | undefined);
    get action(): any;
    get check(): any;
    get enabled(): any;
    get id(): any;
    get profiles(): any;
}
export declare class DataCloudflareAiGatewayDlpPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiGatewayDlpPoliciesOutputReference;
}
export interface DataCloudflareAiGatewayDlp {
}
export declare function dataCloudflareAiGatewayDlpToTerraform(struct?: DataCloudflareAiGatewayDlp): any;
export declare function dataCloudflareAiGatewayDlpToHclTerraform(struct?: DataCloudflareAiGatewayDlp): any;
export declare class DataCloudflareAiGatewayDlpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayDlp | undefined;
    set internalValue(value: DataCloudflareAiGatewayDlp | undefined);
    get action(): any;
    get enabled(): any;
    private _policies;
    get policies(): DataCloudflareAiGatewayDlpPoliciesList;
    get profiles(): any;
}
export interface DataCloudflareAiGatewayFilter {
    /**
    * Search by id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway#search DataCloudflareAiGateway#search}
    */
    readonly search?: string;
}
export declare function dataCloudflareAiGatewayFilterToTerraform(struct?: DataCloudflareAiGatewayFilter | cdktf.IResolvable): any;
export declare function dataCloudflareAiGatewayFilterToHclTerraform(struct?: DataCloudflareAiGatewayFilter | cdktf.IResolvable): any;
export declare class DataCloudflareAiGatewayFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAiGatewayFilter | cdktf.IResolvable | undefined);
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
}
export interface DataCloudflareAiGatewayOtel {
}
export declare function dataCloudflareAiGatewayOtelToTerraform(struct?: DataCloudflareAiGatewayOtel): any;
export declare function dataCloudflareAiGatewayOtelToHclTerraform(struct?: DataCloudflareAiGatewayOtel): any;
export declare class DataCloudflareAiGatewayOtelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiGatewayOtel | undefined;
    set internalValue(value: DataCloudflareAiGatewayOtel | undefined);
    get authorization(): any;
    get contentType(): any;
    private _headers;
    get headers(): any;
    get url(): any;
}
export declare class DataCloudflareAiGatewayOtelList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiGatewayOtelOutputReference;
}
export interface DataCloudflareAiGatewayStripeUsageEvents {
}
export declare function dataCloudflareAiGatewayStripeUsageEventsToTerraform(struct?: DataCloudflareAiGatewayStripeUsageEvents): any;
export declare function dataCloudflareAiGatewayStripeUsageEventsToHclTerraform(struct?: DataCloudflareAiGatewayStripeUsageEvents): any;
export declare class DataCloudflareAiGatewayStripeUsageEventsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiGatewayStripeUsageEvents | undefined;
    set internalValue(value: DataCloudflareAiGatewayStripeUsageEvents | undefined);
    get payload(): any;
}
export declare class DataCloudflareAiGatewayStripeUsageEventsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiGatewayStripeUsageEventsOutputReference;
}
export interface DataCloudflareAiGatewayStripe {
}
export declare function dataCloudflareAiGatewayStripeToTerraform(struct?: DataCloudflareAiGatewayStripe): any;
export declare function dataCloudflareAiGatewayStripeToHclTerraform(struct?: DataCloudflareAiGatewayStripe): any;
export declare class DataCloudflareAiGatewayStripeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayStripe | undefined;
    set internalValue(value: DataCloudflareAiGatewayStripe | undefined);
    get authorization(): any;
    private _usageEvents;
    get usageEvents(): DataCloudflareAiGatewayStripeUsageEventsList;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway cloudflare_ai_gateway}
*/
export declare class DataCloudflareAiGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_ai_gateway";
    /**
    * Generates CDKTF code for importing a DataCloudflareAiGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiGateway to import
    * @param importFromId The id of the existing DataCloudflareAiGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway cloudflare_ai_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAiGatewayConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get authentication(): any;
    get cacheInvalidateOnUpdate(): any;
    get cacheTtl(): any;
    get collectLogs(): any;
    get createdAt(): any;
    private _dlp;
    get dlp(): DataCloudflareAiGatewayDlpOutputReference;
    private _filter;
    get filter(): DataCloudflareAiGatewayFilterOutputReference;
    putFilter(value: DataCloudflareAiGatewayFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get isDefault(): any;
    get logManagement(): any;
    get logManagementStrategy(): any;
    get logpush(): any;
    get logpushPublicKey(): any;
    get modifiedAt(): any;
    private _otel;
    get otel(): DataCloudflareAiGatewayOtelList;
    get rateLimitingInterval(): any;
    get rateLimitingLimit(): any;
    get rateLimitingTechnique(): any;
    get retryBackoff(): any;
    get retryDelay(): any;
    get retryMaxAttempts(): any;
    get storeId(): any;
    private _stripe;
    get stripe(): DataCloudflareAiGatewayStripeOutputReference;
    get workersAiBillingMode(): any;
    get zdr(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
