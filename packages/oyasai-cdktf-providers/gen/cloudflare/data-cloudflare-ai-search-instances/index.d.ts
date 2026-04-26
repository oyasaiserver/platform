import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAiSearchInstancesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances#account_id DataCloudflareAiSearchInstances#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances#max_items DataCloudflareAiSearchInstances#max_items}
    */
    readonly maxItems?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances#namespace DataCloudflareAiSearchInstances#namespace}
    */
    readonly namespace?: string;
    /**
    * Order By Column Name
    * Available values: "created_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances#order_by DataCloudflareAiSearchInstances#order_by}
    */
    readonly orderBy?: string;
    /**
    * Order By Direction
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances#order_by_direction DataCloudflareAiSearchInstances#order_by_direction}
    */
    readonly orderByDirection?: string;
    /**
    * Search by id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances#search DataCloudflareAiSearchInstances#search}
    */
    readonly search?: string;
}
export interface DataCloudflareAiSearchInstancesResultCustomMetadata {
}
export declare function dataCloudflareAiSearchInstancesResultCustomMetadataToTerraform(struct?: DataCloudflareAiSearchInstancesResultCustomMetadata): any;
export declare function dataCloudflareAiSearchInstancesResultCustomMetadataToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultCustomMetadata): any;
export declare class DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiSearchInstancesResultCustomMetadata | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultCustomMetadata | undefined);
    get dataType(): any;
    get fieldName(): any;
}
export declare class DataCloudflareAiSearchInstancesResultCustomMetadataList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference;
}
export interface DataCloudflareAiSearchInstancesResultIndexMethod {
}
export declare function dataCloudflareAiSearchInstancesResultIndexMethodToTerraform(struct?: DataCloudflareAiSearchInstancesResultIndexMethod): any;
export declare function dataCloudflareAiSearchInstancesResultIndexMethodToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultIndexMethod): any;
export declare class DataCloudflareAiSearchInstancesResultIndexMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultIndexMethod | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultIndexMethod | undefined);
    get keyword(): any;
    get vector(): any;
}
export interface DataCloudflareAiSearchInstancesResultIndexingOptions {
}
export declare function dataCloudflareAiSearchInstancesResultIndexingOptionsToTerraform(struct?: DataCloudflareAiSearchInstancesResultIndexingOptions): any;
export declare function dataCloudflareAiSearchInstancesResultIndexingOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultIndexingOptions): any;
export declare class DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultIndexingOptions | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultIndexingOptions | undefined);
    get keywordTokenizer(): any;
}
export interface DataCloudflareAiSearchInstancesResultMetadataSearchForAgents {
}
export declare function dataCloudflareAiSearchInstancesResultMetadataSearchForAgentsToTerraform(struct?: DataCloudflareAiSearchInstancesResultMetadataSearchForAgents): any;
export declare function dataCloudflareAiSearchInstancesResultMetadataSearchForAgentsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultMetadataSearchForAgents): any;
export declare class DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultMetadataSearchForAgents | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultMetadataSearchForAgents | undefined);
    get hostname(): any;
    get zoneId(): any;
    get zoneName(): any;
}
export interface DataCloudflareAiSearchInstancesResultMetadata {
}
export declare function dataCloudflareAiSearchInstancesResultMetadataToTerraform(struct?: DataCloudflareAiSearchInstancesResultMetadata): any;
export declare function dataCloudflareAiSearchInstancesResultMetadataToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultMetadata): any;
export declare class DataCloudflareAiSearchInstancesResultMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultMetadata | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultMetadata | undefined);
    get createdFromAisearchWizard(): any;
    private _searchForAgents;
    get searchForAgents(): DataCloudflareAiSearchInstancesResultMetadataSearchForAgentsOutputReference;
    get workerDomain(): any;
}
export interface DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint {
}
export declare function dataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointToTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint): any;
export declare function dataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint): any;
export declare class DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint | undefined);
    get disabled(): any;
}
export interface DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp {
}
export declare function dataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpToTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp): any;
export declare function dataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp): any;
export declare class DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp | undefined);
    get description(): any;
    get disabled(): any;
}
export interface DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit {
}
export declare function dataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitToTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit): any;
export declare function dataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit): any;
export declare class DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit | undefined);
    get periodMs(): any;
    get requests(): any;
    get technique(): any;
}
export interface DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint {
}
export declare function dataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointToTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint): any;
export declare function dataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint): any;
export declare class DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint | undefined);
    get disabled(): any;
}
export interface DataCloudflareAiSearchInstancesResultPublicEndpointParams {
}
export declare function dataCloudflareAiSearchInstancesResultPublicEndpointParamsToTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParams): any;
export declare function dataCloudflareAiSearchInstancesResultPublicEndpointParamsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParams): any;
export declare class DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultPublicEndpointParams | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultPublicEndpointParams | undefined);
    get authorizedHosts(): any;
    private _chatCompletionsEndpoint;
    get chatCompletionsEndpoint(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference;
    get enabled(): any;
    private _mcp;
    get mcp(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference;
    private _rateLimit;
    get rateLimit(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference;
    private _searchEndpoint;
    get searchEndpoint(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference;
}
export interface DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostBy {
}
export declare function dataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByToTerraform(struct?: DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostBy): any;
export declare function dataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostBy): any;
export declare class DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostBy | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostBy | undefined);
    get direction(): any;
    get field(): any;
}
export declare class DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference;
}
export interface DataCloudflareAiSearchInstancesResultRetrievalOptions {
}
export declare function dataCloudflareAiSearchInstancesResultRetrievalOptionsToTerraform(struct?: DataCloudflareAiSearchInstancesResultRetrievalOptions): any;
export declare function dataCloudflareAiSearchInstancesResultRetrievalOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultRetrievalOptions): any;
export declare class DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultRetrievalOptions | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultRetrievalOptions | undefined);
    private _boostBy;
    get boostBy(): DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList;
    get keywordMatchMode(): any;
}
export interface DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptions {
}
export declare function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptions): any;
export declare function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptions): any;
export declare class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptions | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptions | undefined);
    get depth(): any;
    get includeExternalLinks(): any;
    get includeSubdomains(): any;
    get maxAge(): any;
    get source(): any;
}
export interface DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelector {
}
export declare function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelector): any;
export declare function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelector): any;
export declare class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelector | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelector | undefined);
    get path(): any;
    get selector(): any;
}
export declare class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference;
}
export interface DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions {
}
export declare function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions): any;
export declare function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions): any;
export declare class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions | undefined);
    private _contentSelector;
    get contentSelector(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList;
    private _includeHeaders;
    get includeHeaders(): any;
    get includeImages(): any;
    get specificSitemaps(): any;
    get useBrowserRendering(): any;
}
export interface DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions {
}
export declare function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions): any;
export declare function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions): any;
export declare class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions | undefined);
    get r2Jurisdiction(): any;
    get storageId(): any;
    get storageType(): any;
}
export interface DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler {
}
export declare function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler): any;
export declare function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler): any;
export declare class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler | undefined);
    private _crawlOptions;
    get crawlOptions(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference;
    private _parseOptions;
    get parseOptions(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference;
    get parseType(): any;
    private _storeOptions;
    get storeOptions(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference;
}
export interface DataCloudflareAiSearchInstancesResultSourceParams {
}
export declare function dataCloudflareAiSearchInstancesResultSourceParamsToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParams): any;
export declare function dataCloudflareAiSearchInstancesResultSourceParamsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParams): any;
export declare class DataCloudflareAiSearchInstancesResultSourceParamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancesResultSourceParams | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParams | undefined);
    get excludeItems(): any;
    get includeItems(): any;
    get prefix(): any;
    get r2Jurisdiction(): any;
    private _webCrawler;
    get webCrawler(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference;
}
export interface DataCloudflareAiSearchInstancesResult {
}
export declare function dataCloudflareAiSearchInstancesResultToTerraform(struct?: DataCloudflareAiSearchInstancesResult): any;
export declare function dataCloudflareAiSearchInstancesResultToHclTerraform(struct?: DataCloudflareAiSearchInstancesResult): any;
export declare class DataCloudflareAiSearchInstancesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiSearchInstancesResult | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancesResult | undefined);
    get aiGatewayId(): any;
    get aisearchModel(): any;
    get cache(): any;
    get cacheThreshold(): any;
    get chunkOverlap(): any;
    get chunkSize(): any;
    get createdAt(): any;
    get createdBy(): any;
    private _customMetadata;
    get customMetadata(): DataCloudflareAiSearchInstancesResultCustomMetadataList;
    get embeddingModel(): any;
    get enable(): any;
    get engineVersion(): any;
    get fusionMethod(): any;
    get hybridSearchEnabled(): any;
    get id(): any;
    private _indexMethod;
    get indexMethod(): DataCloudflareAiSearchInstancesResultIndexMethodOutputReference;
    private _indexingOptions;
    get indexingOptions(): DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference;
    get lastActivity(): any;
    get maxNumResults(): any;
    private _metadata;
    get metadata(): DataCloudflareAiSearchInstancesResultMetadataOutputReference;
    get modifiedAt(): any;
    get modifiedBy(): any;
    get namespace(): any;
    get paused(): any;
    get publicEndpointId(): any;
    private _publicEndpointParams;
    get publicEndpointParams(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference;
    get reranking(): any;
    get rerankingModel(): any;
    private _retrievalOptions;
    get retrievalOptions(): DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference;
    get rewriteModel(): any;
    get rewriteQuery(): any;
    get scoreThreshold(): any;
    get source(): any;
    private _sourceParams;
    get sourceParams(): DataCloudflareAiSearchInstancesResultSourceParamsOutputReference;
    get status(): any;
    get syncInterval(): any;
    get tokenId(): any;
    get type(): any;
}
export declare class DataCloudflareAiSearchInstancesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiSearchInstancesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances cloudflare_ai_search_instances}
*/
export declare class DataCloudflareAiSearchInstances extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_ai_search_instances";
    /**
    * Generates CDKTF code for importing a DataCloudflareAiSearchInstances resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiSearchInstances to import
    * @param importFromId The id of the existing DataCloudflareAiSearchInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiSearchInstances to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instances cloudflare_ai_search_instances} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiSearchInstancesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAiSearchInstancesConfig);
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
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string;
    private _orderBy?;
    get orderBy(): string;
    set orderBy(value: string);
    resetOrderBy(): void;
    get orderByInput(): string;
    private _orderByDirection?;
    get orderByDirection(): string;
    set orderByDirection(value: string);
    resetOrderByDirection(): void;
    get orderByDirectionInput(): string;
    private _result;
    get result(): DataCloudflareAiSearchInstancesResultList;
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
