import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAiSearchInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance#account_id DataCloudflareAiSearchInstance#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance#filter DataCloudflareAiSearchInstance#filter}
    */
    readonly filter?: DataCloudflareAiSearchInstanceFilter;
    /**
    * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance#id DataCloudflareAiSearchInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataCloudflareAiSearchInstanceCustomMetadata {
}
export declare function dataCloudflareAiSearchInstanceCustomMetadataToTerraform(struct?: DataCloudflareAiSearchInstanceCustomMetadata): any;
export declare function dataCloudflareAiSearchInstanceCustomMetadataToHclTerraform(struct?: DataCloudflareAiSearchInstanceCustomMetadata): any;
export declare class DataCloudflareAiSearchInstanceCustomMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiSearchInstanceCustomMetadata | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceCustomMetadata | undefined);
    get dataType(): any;
    get fieldName(): any;
}
export declare class DataCloudflareAiSearchInstanceCustomMetadataList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiSearchInstanceCustomMetadataOutputReference;
}
export interface DataCloudflareAiSearchInstanceFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance#namespace DataCloudflareAiSearchInstance#namespace}
    */
    readonly namespace?: string;
    /**
    * Order By Column Name
    * Available values: "created_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance#order_by DataCloudflareAiSearchInstance#order_by}
    */
    readonly orderBy?: string;
    /**
    * Order By Direction
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance#order_by_direction DataCloudflareAiSearchInstance#order_by_direction}
    */
    readonly orderByDirection?: string;
    /**
    * Search by id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance#search DataCloudflareAiSearchInstance#search}
    */
    readonly search?: string;
}
export declare function dataCloudflareAiSearchInstanceFilterToTerraform(struct?: DataCloudflareAiSearchInstanceFilter | cdktf.IResolvable): any;
export declare function dataCloudflareAiSearchInstanceFilterToHclTerraform(struct?: DataCloudflareAiSearchInstanceFilter | cdktf.IResolvable): any;
export declare class DataCloudflareAiSearchInstanceFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstanceFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceFilter | cdktf.IResolvable | undefined);
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
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
}
export interface DataCloudflareAiSearchInstanceIndexMethod {
}
export declare function dataCloudflareAiSearchInstanceIndexMethodToTerraform(struct?: DataCloudflareAiSearchInstanceIndexMethod): any;
export declare function dataCloudflareAiSearchInstanceIndexMethodToHclTerraform(struct?: DataCloudflareAiSearchInstanceIndexMethod): any;
export declare class DataCloudflareAiSearchInstanceIndexMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstanceIndexMethod | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceIndexMethod | undefined);
    get keyword(): any;
    get vector(): any;
}
export interface DataCloudflareAiSearchInstanceIndexingOptions {
}
export declare function dataCloudflareAiSearchInstanceIndexingOptionsToTerraform(struct?: DataCloudflareAiSearchInstanceIndexingOptions): any;
export declare function dataCloudflareAiSearchInstanceIndexingOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstanceIndexingOptions): any;
export declare class DataCloudflareAiSearchInstanceIndexingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstanceIndexingOptions | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceIndexingOptions | undefined);
    get keywordTokenizer(): any;
}
export interface DataCloudflareAiSearchInstanceMetadataSearchForAgents {
}
export declare function dataCloudflareAiSearchInstanceMetadataSearchForAgentsToTerraform(struct?: DataCloudflareAiSearchInstanceMetadataSearchForAgents): any;
export declare function dataCloudflareAiSearchInstanceMetadataSearchForAgentsToHclTerraform(struct?: DataCloudflareAiSearchInstanceMetadataSearchForAgents): any;
export declare class DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstanceMetadataSearchForAgents | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceMetadataSearchForAgents | undefined);
    get hostname(): any;
    get zoneId(): any;
    get zoneName(): any;
}
export interface DataCloudflareAiSearchInstanceMetadata {
}
export declare function dataCloudflareAiSearchInstanceMetadataToTerraform(struct?: DataCloudflareAiSearchInstanceMetadata): any;
export declare function dataCloudflareAiSearchInstanceMetadataToHclTerraform(struct?: DataCloudflareAiSearchInstanceMetadata): any;
export declare class DataCloudflareAiSearchInstanceMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstanceMetadata | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceMetadata | undefined);
    get createdFromAisearchWizard(): any;
    private _searchForAgents;
    get searchForAgents(): DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference;
    get workerDomain(): any;
}
export interface DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint {
}
export declare function dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint): any;
export declare function dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint): any;
export declare class DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | undefined);
    get disabled(): any;
}
export interface DataCloudflareAiSearchInstancePublicEndpointParamsMcp {
}
export declare function dataCloudflareAiSearchInstancePublicEndpointParamsMcpToTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsMcp): any;
export declare function dataCloudflareAiSearchInstancePublicEndpointParamsMcpToHclTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsMcp): any;
export declare class DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancePublicEndpointParamsMcp | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancePublicEndpointParamsMcp | undefined);
    get description(): any;
    get disabled(): any;
}
export interface DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit {
}
export declare function dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit): any;
export declare function dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToHclTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit): any;
export declare class DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit | undefined);
    get periodMs(): any;
    get requests(): any;
    get technique(): any;
}
export interface DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint {
}
export declare function dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint): any;
export declare function dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint): any;
export declare class DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint | undefined);
    get disabled(): any;
}
export interface DataCloudflareAiSearchInstancePublicEndpointParams {
}
export declare function dataCloudflareAiSearchInstancePublicEndpointParamsToTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParams): any;
export declare function dataCloudflareAiSearchInstancePublicEndpointParamsToHclTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParams): any;
export declare class DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstancePublicEndpointParams | undefined;
    set internalValue(value: DataCloudflareAiSearchInstancePublicEndpointParams | undefined);
    get authorizedHosts(): any;
    private _chatCompletionsEndpoint;
    get chatCompletionsEndpoint(): DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference;
    get enabled(): any;
    private _mcp;
    get mcp(): DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference;
    private _rateLimit;
    get rateLimit(): DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference;
    private _searchEndpoint;
    get searchEndpoint(): DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference;
}
export interface DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy {
}
export declare function dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToTerraform(struct?: DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy): any;
export declare function dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToHclTerraform(struct?: DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy): any;
export declare class DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy | undefined);
    get direction(): any;
    get field(): any;
}
export declare class DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference;
}
export interface DataCloudflareAiSearchInstanceRetrievalOptions {
}
export declare function dataCloudflareAiSearchInstanceRetrievalOptionsToTerraform(struct?: DataCloudflareAiSearchInstanceRetrievalOptions): any;
export declare function dataCloudflareAiSearchInstanceRetrievalOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstanceRetrievalOptions): any;
export declare class DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstanceRetrievalOptions | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceRetrievalOptions | undefined);
    private _boostBy;
    get boostBy(): DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList;
    get keywordMatchMode(): any;
}
export interface DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions {
}
export declare function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions): any;
export declare function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions): any;
export declare class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptions | undefined);
    get depth(): any;
    get includeExternalLinks(): any;
    get includeSubdomains(): any;
    get maxAge(): any;
    get source(): any;
}
export interface DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector {
}
export declare function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector): any;
export declare function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector): any;
export declare class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | undefined);
    get path(): any;
    get selector(): any;
}
export declare class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference;
}
export interface DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions {
}
export declare function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions): any;
export declare function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions): any;
export declare class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions | undefined);
    private _contentSelector;
    get contentSelector(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList;
    private _includeHeaders;
    get includeHeaders(): any;
    get includeImages(): any;
    get specificSitemaps(): any;
    get useBrowserRendering(): any;
}
export interface DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions {
}
export declare function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions): any;
export declare function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions): any;
export declare class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions | undefined);
    get r2Jurisdiction(): any;
    get storageId(): any;
    get storageType(): any;
}
export interface DataCloudflareAiSearchInstanceSourceParamsWebCrawler {
}
export declare function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawler): any;
export declare function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToHclTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawler): any;
export declare class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstanceSourceParamsWebCrawler | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceSourceParamsWebCrawler | undefined);
    private _crawlOptions;
    get crawlOptions(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference;
    private _parseOptions;
    get parseOptions(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference;
    get parseType(): any;
    private _storeOptions;
    get storeOptions(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference;
}
export interface DataCloudflareAiSearchInstanceSourceParams {
}
export declare function dataCloudflareAiSearchInstanceSourceParamsToTerraform(struct?: DataCloudflareAiSearchInstanceSourceParams): any;
export declare function dataCloudflareAiSearchInstanceSourceParamsToHclTerraform(struct?: DataCloudflareAiSearchInstanceSourceParams): any;
export declare class DataCloudflareAiSearchInstanceSourceParamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiSearchInstanceSourceParams | undefined;
    set internalValue(value: DataCloudflareAiSearchInstanceSourceParams | undefined);
    get excludeItems(): any;
    get includeItems(): any;
    get prefix(): any;
    get r2Jurisdiction(): any;
    private _webCrawler;
    get webCrawler(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance cloudflare_ai_search_instance}
*/
export declare class DataCloudflareAiSearchInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_ai_search_instance";
    /**
    * Generates CDKTF code for importing a DataCloudflareAiSearchInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiSearchInstance to import
    * @param importFromId The id of the existing DataCloudflareAiSearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiSearchInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance cloudflare_ai_search_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiSearchInstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAiSearchInstanceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get aiGatewayId(): any;
    get aisearchModel(): any;
    get cache(): any;
    get cacheThreshold(): any;
    get chunkOverlap(): any;
    get chunkSize(): any;
    get createdAt(): any;
    get createdBy(): any;
    private _customMetadata;
    get customMetadata(): DataCloudflareAiSearchInstanceCustomMetadataList;
    get embeddingModel(): any;
    get enable(): any;
    get engineVersion(): any;
    private _filter;
    get filter(): DataCloudflareAiSearchInstanceFilterOutputReference;
    putFilter(value: DataCloudflareAiSearchInstanceFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get fusionMethod(): any;
    get hybridSearchEnabled(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _indexMethod;
    get indexMethod(): DataCloudflareAiSearchInstanceIndexMethodOutputReference;
    private _indexingOptions;
    get indexingOptions(): DataCloudflareAiSearchInstanceIndexingOptionsOutputReference;
    get lastActivity(): any;
    get maxNumResults(): any;
    private _metadata;
    get metadata(): DataCloudflareAiSearchInstanceMetadataOutputReference;
    get modifiedAt(): any;
    get modifiedBy(): any;
    get namespace(): any;
    get paused(): any;
    get publicEndpointId(): any;
    private _publicEndpointParams;
    get publicEndpointParams(): DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference;
    get reranking(): any;
    get rerankingModel(): any;
    private _retrievalOptions;
    get retrievalOptions(): DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference;
    get rewriteModel(): any;
    get rewriteQuery(): any;
    get scoreThreshold(): any;
    get source(): any;
    private _sourceParams;
    get sourceParams(): DataCloudflareAiSearchInstanceSourceParamsOutputReference;
    get status(): any;
    get syncInterval(): any;
    get tokenId(): any;
    get type(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
