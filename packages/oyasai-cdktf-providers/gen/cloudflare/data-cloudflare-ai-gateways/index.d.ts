import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAiGatewaysConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateways#account_id DataCloudflareAiGateways#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateways#max_items DataCloudflareAiGateways#max_items}
    */
    readonly maxItems?: number;
    /**
    * Search by id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateways#search DataCloudflareAiGateways#search}
    */
    readonly search?: string;
}
export interface DataCloudflareAiGatewaysResultDlpPolicies {
}
export declare function dataCloudflareAiGatewaysResultDlpPoliciesToTerraform(struct?: DataCloudflareAiGatewaysResultDlpPolicies): any;
export declare function dataCloudflareAiGatewaysResultDlpPoliciesToHclTerraform(struct?: DataCloudflareAiGatewaysResultDlpPolicies): any;
export declare class DataCloudflareAiGatewaysResultDlpPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiGatewaysResultDlpPolicies | undefined;
    set internalValue(value: DataCloudflareAiGatewaysResultDlpPolicies | undefined);
    get action(): any;
    get check(): any;
    get enabled(): any;
    get id(): any;
    get profiles(): any;
}
export declare class DataCloudflareAiGatewaysResultDlpPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiGatewaysResultDlpPoliciesOutputReference;
}
export interface DataCloudflareAiGatewaysResultDlp {
}
export declare function dataCloudflareAiGatewaysResultDlpToTerraform(struct?: DataCloudflareAiGatewaysResultDlp): any;
export declare function dataCloudflareAiGatewaysResultDlpToHclTerraform(struct?: DataCloudflareAiGatewaysResultDlp): any;
export declare class DataCloudflareAiGatewaysResultDlpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewaysResultDlp | undefined;
    set internalValue(value: DataCloudflareAiGatewaysResultDlp | undefined);
    get action(): any;
    get enabled(): any;
    private _policies;
    get policies(): DataCloudflareAiGatewaysResultDlpPoliciesList;
    get profiles(): any;
}
export interface DataCloudflareAiGatewaysResultOtel {
}
export declare function dataCloudflareAiGatewaysResultOtelToTerraform(struct?: DataCloudflareAiGatewaysResultOtel): any;
export declare function dataCloudflareAiGatewaysResultOtelToHclTerraform(struct?: DataCloudflareAiGatewaysResultOtel): any;
export declare class DataCloudflareAiGatewaysResultOtelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiGatewaysResultOtel | undefined;
    set internalValue(value: DataCloudflareAiGatewaysResultOtel | undefined);
    get authorization(): any;
    get contentType(): any;
    private _headers;
    get headers(): any;
    get url(): any;
}
export declare class DataCloudflareAiGatewaysResultOtelList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiGatewaysResultOtelOutputReference;
}
export interface DataCloudflareAiGatewaysResultStripeUsageEvents {
}
export declare function dataCloudflareAiGatewaysResultStripeUsageEventsToTerraform(struct?: DataCloudflareAiGatewaysResultStripeUsageEvents): any;
export declare function dataCloudflareAiGatewaysResultStripeUsageEventsToHclTerraform(struct?: DataCloudflareAiGatewaysResultStripeUsageEvents): any;
export declare class DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiGatewaysResultStripeUsageEvents | undefined;
    set internalValue(value: DataCloudflareAiGatewaysResultStripeUsageEvents | undefined);
    get payload(): any;
}
export declare class DataCloudflareAiGatewaysResultStripeUsageEventsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiGatewaysResultStripeUsageEventsOutputReference;
}
export interface DataCloudflareAiGatewaysResultStripe {
}
export declare function dataCloudflareAiGatewaysResultStripeToTerraform(struct?: DataCloudflareAiGatewaysResultStripe): any;
export declare function dataCloudflareAiGatewaysResultStripeToHclTerraform(struct?: DataCloudflareAiGatewaysResultStripe): any;
export declare class DataCloudflareAiGatewaysResultStripeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewaysResultStripe | undefined;
    set internalValue(value: DataCloudflareAiGatewaysResultStripe | undefined);
    get authorization(): any;
    private _usageEvents;
    get usageEvents(): DataCloudflareAiGatewaysResultStripeUsageEventsList;
}
export interface DataCloudflareAiGatewaysResult {
}
export declare function dataCloudflareAiGatewaysResultToTerraform(struct?: DataCloudflareAiGatewaysResult): any;
export declare function dataCloudflareAiGatewaysResultToHclTerraform(struct?: DataCloudflareAiGatewaysResult): any;
export declare class DataCloudflareAiGatewaysResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiGatewaysResult | undefined;
    set internalValue(value: DataCloudflareAiGatewaysResult | undefined);
    get authentication(): any;
    get cacheInvalidateOnUpdate(): any;
    get cacheTtl(): any;
    get collectLogs(): any;
    get createdAt(): any;
    private _dlp;
    get dlp(): DataCloudflareAiGatewaysResultDlpOutputReference;
    get id(): any;
    get isDefault(): any;
    get logManagement(): any;
    get logManagementStrategy(): any;
    get logpush(): any;
    get logpushPublicKey(): any;
    get modifiedAt(): any;
    private _otel;
    get otel(): DataCloudflareAiGatewaysResultOtelList;
    get rateLimitingInterval(): any;
    get rateLimitingLimit(): any;
    get rateLimitingTechnique(): any;
    get retryBackoff(): any;
    get retryDelay(): any;
    get retryMaxAttempts(): any;
    get storeId(): any;
    private _stripe;
    get stripe(): DataCloudflareAiGatewaysResultStripeOutputReference;
    get workersAiBillingMode(): any;
    get zdr(): any;
}
export declare class DataCloudflareAiGatewaysResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiGatewaysResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateways cloudflare_ai_gateways}
*/
export declare class DataCloudflareAiGateways extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_ai_gateways";
    /**
    * Generates CDKTF code for importing a DataCloudflareAiGateways resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiGateways to import
    * @param importFromId The id of the existing DataCloudflareAiGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateways#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiGateways to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateways cloudflare_ai_gateways} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiGatewaysConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAiGatewaysConfig);
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
    get result(): DataCloudflareAiGatewaysResultList;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
