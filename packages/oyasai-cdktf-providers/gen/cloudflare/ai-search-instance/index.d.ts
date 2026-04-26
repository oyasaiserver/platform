import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AiSearchInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}
    */
    readonly aiGatewayId?: string;
    /**
    * Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#aisearch_model AiSearchInstance#aisearch_model}
    */
    readonly aisearchModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}
    */
    readonly cache?: boolean | cdktf.IResolvable;
    /**
    * Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#cache_threshold AiSearchInstance#cache_threshold}
    */
    readonly cacheThreshold?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}
    */
    readonly chunk?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}
    */
    readonly chunkOverlap?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}
    */
    readonly chunkSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}
    */
    readonly customMetadata?: AiSearchInstanceCustomMetadata[] | cdktf.IResolvable;
    /**
    * Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "google-ai-studio/gemini-embedding-2-preview", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#embedding_model AiSearchInstance#embedding_model}
    */
    readonly embeddingModel?: string;
    /**
    * Available values: "max", "rrf".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#fusion_method AiSearchInstance#fusion_method}
    */
    readonly fusionMethod?: string;
    /**
    * Deprecated — use index_method instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}
    */
    readonly hybridSearchEnabled?: boolean | cdktf.IResolvable;
    /**
    * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#id AiSearchInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Controls which storage backends are used during indexing. Defaults to vector-only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#index_method AiSearchInstance#index_method}
    */
    readonly indexMethod?: AiSearchInstanceIndexMethod;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#indexing_options AiSearchInstance#indexing_options}
    */
    readonly indexingOptions?: AiSearchInstanceIndexingOptions;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}
    */
    readonly maxNumResults?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}
    */
    readonly metadata?: AiSearchInstanceMetadata;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}
    */
    readonly paused?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}
    */
    readonly publicEndpointParams?: AiSearchInstancePublicEndpointParams;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}
    */
    readonly reranking?: boolean | cdktf.IResolvable;
    /**
    * Available values: "@cf/baai/bge-reranker-base", "".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#reranking_model AiSearchInstance#reranking_model}
    */
    readonly rerankingModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#retrieval_options AiSearchInstance#retrieval_options}
    */
    readonly retrievalOptions?: AiSearchInstanceRetrievalOptions;
    /**
    * Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#rewrite_model AiSearchInstance#rewrite_model}
    */
    readonly rewriteModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}
    */
    readonly rewriteQuery?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}
    */
    readonly scoreThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#source AiSearchInstance#source}
    */
    readonly source?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}
    */
    readonly sourceParams?: AiSearchInstanceSourceParams;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}
    */
    readonly summarization?: boolean | cdktf.IResolvable;
    /**
    * Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#summarization_model AiSearchInstance#summarization_model}
    */
    readonly summarizationModel?: string;
    /**
    * Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
    * Available values: 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#sync_interval AiSearchInstance#sync_interval}
    */
    readonly syncInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}
    */
    readonly systemPromptAisearch?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}
    */
    readonly systemPromptIndexSummarization?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}
    */
    readonly systemPromptRewriteQuery?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}
    */
    readonly tokenId?: string;
    /**
    * Available values: "r2", "web-crawler".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#type AiSearchInstance#type}
    */
    readonly type?: string;
}
export interface AiSearchInstanceCustomMetadata {
    /**
    * Available values: "text", "number", "boolean", "datetime".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#data_type AiSearchInstance#data_type}
    */
    readonly dataType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}
    */
    readonly fieldName: string;
}
export declare function aiSearchInstanceCustomMetadataToTerraform(struct?: AiSearchInstanceCustomMetadata | cdktf.IResolvable): any;
export declare function aiSearchInstanceCustomMetadataToHclTerraform(struct?: AiSearchInstanceCustomMetadata | cdktf.IResolvable): any;
export declare class AiSearchInstanceCustomMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AiSearchInstanceCustomMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceCustomMetadata | cdktf.IResolvable | undefined);
    private _dataType?;
    get dataType(): string;
    set dataType(value: string);
    get dataTypeInput(): string;
    private _fieldName?;
    get fieldName(): string;
    set fieldName(value: string);
    get fieldNameInput(): string;
}
export declare class AiSearchInstanceCustomMetadataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AiSearchInstanceCustomMetadata[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AiSearchInstanceCustomMetadataOutputReference;
}
export interface AiSearchInstanceIndexMethod {
    /**
    * Enable keyword (BM25) storage backend.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#keyword AiSearchInstance#keyword}
    */
    readonly keyword: boolean | cdktf.IResolvable;
    /**
    * Enable vector (embedding) storage backend.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#vector AiSearchInstance#vector}
    */
    readonly vector: boolean | cdktf.IResolvable;
}
export declare function aiSearchInstanceIndexMethodToTerraform(struct?: AiSearchInstanceIndexMethod | cdktf.IResolvable): any;
export declare function aiSearchInstanceIndexMethodToHclTerraform(struct?: AiSearchInstanceIndexMethod | cdktf.IResolvable): any;
export declare class AiSearchInstanceIndexMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstanceIndexMethod | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceIndexMethod | cdktf.IResolvable | undefined);
    private _keyword?;
    get keyword(): boolean | cdktf.IResolvable;
    set keyword(value: boolean | cdktf.IResolvable);
    get keywordInput(): any;
    private _vector?;
    get vector(): boolean | cdktf.IResolvable;
    set vector(value: boolean | cdktf.IResolvable);
    get vectorInput(): any;
}
export interface AiSearchInstanceIndexingOptions {
    /**
    * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
    * Available values: "porter", "trigram".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#keyword_tokenizer AiSearchInstance#keyword_tokenizer}
    */
    readonly keywordTokenizer?: string;
}
export declare function aiSearchInstanceIndexingOptionsToTerraform(struct?: AiSearchInstanceIndexingOptions | cdktf.IResolvable): any;
export declare function aiSearchInstanceIndexingOptionsToHclTerraform(struct?: AiSearchInstanceIndexingOptions | cdktf.IResolvable): any;
export declare class AiSearchInstanceIndexingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstanceIndexingOptions | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceIndexingOptions | cdktf.IResolvable | undefined);
    private _keywordTokenizer?;
    get keywordTokenizer(): string;
    set keywordTokenizer(value: string);
    resetKeywordTokenizer(): void;
    get keywordTokenizerInput(): string;
}
export interface AiSearchInstanceMetadataSearchForAgents {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#hostname AiSearchInstance#hostname}
    */
    readonly hostname: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#zone_id AiSearchInstance#zone_id}
    */
    readonly zoneId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#zone_name AiSearchInstance#zone_name}
    */
    readonly zoneName: string;
}
export declare function aiSearchInstanceMetadataSearchForAgentsToTerraform(struct?: AiSearchInstanceMetadataSearchForAgents | cdktf.IResolvable): any;
export declare function aiSearchInstanceMetadataSearchForAgentsToHclTerraform(struct?: AiSearchInstanceMetadataSearchForAgents | cdktf.IResolvable): any;
export declare class AiSearchInstanceMetadataSearchForAgentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstanceMetadataSearchForAgents | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceMetadataSearchForAgents | cdktf.IResolvable | undefined);
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    private _zoneName?;
    get zoneName(): string;
    set zoneName(value: string);
    get zoneNameInput(): string;
}
export interface AiSearchInstanceMetadata {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}
    */
    readonly createdFromAisearchWizard?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#search_for_agents AiSearchInstance#search_for_agents}
    */
    readonly searchForAgents?: AiSearchInstanceMetadataSearchForAgents;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}
    */
    readonly workerDomain?: string;
}
export declare function aiSearchInstanceMetadataToTerraform(struct?: AiSearchInstanceMetadata | cdktf.IResolvable): any;
export declare function aiSearchInstanceMetadataToHclTerraform(struct?: AiSearchInstanceMetadata | cdktf.IResolvable): any;
export declare class AiSearchInstanceMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstanceMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceMetadata | cdktf.IResolvable | undefined);
    private _createdFromAisearchWizard?;
    get createdFromAisearchWizard(): boolean | cdktf.IResolvable;
    set createdFromAisearchWizard(value: boolean | cdktf.IResolvable);
    resetCreatedFromAisearchWizard(): void;
    get createdFromAisearchWizardInput(): any;
    private _searchForAgents;
    get searchForAgents(): AiSearchInstanceMetadataSearchForAgentsOutputReference;
    putSearchForAgents(value: AiSearchInstanceMetadataSearchForAgents): void;
    resetSearchForAgents(): void;
    get searchForAgentsInput(): any;
    private _workerDomain?;
    get workerDomain(): string;
    set workerDomain(value: string);
    resetWorkerDomain(): void;
    get workerDomainInput(): string;
}
export interface AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint {
    /**
    * Disable chat completions endpoint for this public endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
}
export declare function aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform(struct?: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable): any;
export declare function aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct?: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable): any;
export declare class AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable | undefined);
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): any;
}
export interface AiSearchInstancePublicEndpointParamsMcp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#description AiSearchInstance#description}
    */
    readonly description?: string;
    /**
    * Disable MCP endpoint for this public endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
}
export declare function aiSearchInstancePublicEndpointParamsMcpToTerraform(struct?: AiSearchInstancePublicEndpointParamsMcp | cdktf.IResolvable): any;
export declare function aiSearchInstancePublicEndpointParamsMcpToHclTerraform(struct?: AiSearchInstancePublicEndpointParamsMcp | cdktf.IResolvable): any;
export declare class AiSearchInstancePublicEndpointParamsMcpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstancePublicEndpointParamsMcp | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstancePublicEndpointParamsMcp | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): any;
}
export interface AiSearchInstancePublicEndpointParamsRateLimit {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}
    */
    readonly periodMs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}
    */
    readonly requests?: number;
    /**
    * Available values: "fixed", "sliding".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#technique AiSearchInstance#technique}
    */
    readonly technique?: string;
}
export declare function aiSearchInstancePublicEndpointParamsRateLimitToTerraform(struct?: AiSearchInstancePublicEndpointParamsRateLimit | cdktf.IResolvable): any;
export declare function aiSearchInstancePublicEndpointParamsRateLimitToHclTerraform(struct?: AiSearchInstancePublicEndpointParamsRateLimit | cdktf.IResolvable): any;
export declare class AiSearchInstancePublicEndpointParamsRateLimitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstancePublicEndpointParamsRateLimit | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstancePublicEndpointParamsRateLimit | cdktf.IResolvable | undefined);
    private _periodMs?;
    get periodMs(): number;
    set periodMs(value: number);
    resetPeriodMs(): void;
    get periodMsInput(): number;
    private _requests?;
    get requests(): number;
    set requests(value: number);
    resetRequests(): void;
    get requestsInput(): number;
    private _technique?;
    get technique(): string;
    set technique(value: string);
    resetTechnique(): void;
    get techniqueInput(): string;
}
export interface AiSearchInstancePublicEndpointParamsSearchEndpoint {
    /**
    * Disable search endpoint for this public endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
}
export declare function aiSearchInstancePublicEndpointParamsSearchEndpointToTerraform(struct?: AiSearchInstancePublicEndpointParamsSearchEndpoint | cdktf.IResolvable): any;
export declare function aiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform(struct?: AiSearchInstancePublicEndpointParamsSearchEndpoint | cdktf.IResolvable): any;
export declare class AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstancePublicEndpointParamsSearchEndpoint | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstancePublicEndpointParamsSearchEndpoint | cdktf.IResolvable | undefined);
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): any;
}
export interface AiSearchInstancePublicEndpointParams {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}
    */
    readonly authorizedHosts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}
    */
    readonly chatCompletionsEndpoint?: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}
    */
    readonly mcp?: AiSearchInstancePublicEndpointParamsMcp;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}
    */
    readonly rateLimit?: AiSearchInstancePublicEndpointParamsRateLimit;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}
    */
    readonly searchEndpoint?: AiSearchInstancePublicEndpointParamsSearchEndpoint;
}
export declare function aiSearchInstancePublicEndpointParamsToTerraform(struct?: AiSearchInstancePublicEndpointParams | cdktf.IResolvable): any;
export declare function aiSearchInstancePublicEndpointParamsToHclTerraform(struct?: AiSearchInstancePublicEndpointParams | cdktf.IResolvable): any;
export declare class AiSearchInstancePublicEndpointParamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstancePublicEndpointParams | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstancePublicEndpointParams | cdktf.IResolvable | undefined);
    private _authorizedHosts?;
    get authorizedHosts(): string[];
    set authorizedHosts(value: string[]);
    resetAuthorizedHosts(): void;
    get authorizedHostsInput(): string[];
    private _chatCompletionsEndpoint;
    get chatCompletionsEndpoint(): AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference;
    putChatCompletionsEndpoint(value: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint): void;
    resetChatCompletionsEndpoint(): void;
    get chatCompletionsEndpointInput(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _mcp;
    get mcp(): AiSearchInstancePublicEndpointParamsMcpOutputReference;
    putMcp(value: AiSearchInstancePublicEndpointParamsMcp): void;
    resetMcp(): void;
    get mcpInput(): any;
    private _rateLimit;
    get rateLimit(): AiSearchInstancePublicEndpointParamsRateLimitOutputReference;
    putRateLimit(value: AiSearchInstancePublicEndpointParamsRateLimit): void;
    resetRateLimit(): void;
    get rateLimitInput(): any;
    private _searchEndpoint;
    get searchEndpoint(): AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference;
    putSearchEndpoint(value: AiSearchInstancePublicEndpointParamsSearchEndpoint): void;
    resetSearchEndpoint(): void;
    get searchEndpointInput(): any;
}
export interface AiSearchInstanceRetrievalOptionsBoostBy {
    /**
    * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps). 'asc' = lower values rank higher. 'exists' = boost chunks that have the field. 'not_exists' = boost chunks that lack the field. Optional - defaults to 'asc' for numeric/datetime fields, 'exists' for text/boolean fields.
    * Available values: "asc", "desc", "exists", "not_exists".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#direction AiSearchInstance#direction}
    */
    readonly direction?: string;
    /**
    * Metadata field name to boost by. Use 'timestamp' for document freshness, or any custom_metadata field. Numeric and datetime fields support asc/desc directions; text/boolean fields support exists/not_exists.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#field AiSearchInstance#field}
    */
    readonly field: string;
}
export declare function aiSearchInstanceRetrievalOptionsBoostByToTerraform(struct?: AiSearchInstanceRetrievalOptionsBoostBy | cdktf.IResolvable): any;
export declare function aiSearchInstanceRetrievalOptionsBoostByToHclTerraform(struct?: AiSearchInstanceRetrievalOptionsBoostBy | cdktf.IResolvable): any;
export declare class AiSearchInstanceRetrievalOptionsBoostByOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AiSearchInstanceRetrievalOptionsBoostBy | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceRetrievalOptionsBoostBy | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _field?;
    get field(): string;
    set field(value: string);
    get fieldInput(): string;
}
export declare class AiSearchInstanceRetrievalOptionsBoostByList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AiSearchInstanceRetrievalOptionsBoostBy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AiSearchInstanceRetrievalOptionsBoostByOutputReference;
}
export interface AiSearchInstanceRetrievalOptions {
    /**
    * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#boost_by AiSearchInstance#boost_by}
    */
    readonly boostBy?: AiSearchInstanceRetrievalOptionsBoostBy[] | cdktf.IResolvable;
    /**
    * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
    * Available values: "and", "or".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#keyword_match_mode AiSearchInstance#keyword_match_mode}
    */
    readonly keywordMatchMode?: string;
}
export declare function aiSearchInstanceRetrievalOptionsToTerraform(struct?: AiSearchInstanceRetrievalOptions | cdktf.IResolvable): any;
export declare function aiSearchInstanceRetrievalOptionsToHclTerraform(struct?: AiSearchInstanceRetrievalOptions | cdktf.IResolvable): any;
export declare class AiSearchInstanceRetrievalOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstanceRetrievalOptions | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceRetrievalOptions | cdktf.IResolvable | undefined);
    private _boostBy;
    get boostBy(): AiSearchInstanceRetrievalOptionsBoostByList;
    putBoostBy(value: AiSearchInstanceRetrievalOptionsBoostBy[] | cdktf.IResolvable): void;
    resetBoostBy(): void;
    get boostByInput(): any;
    private _keywordMatchMode?;
    get keywordMatchMode(): string;
    set keywordMatchMode(value: string);
    resetKeywordMatchMode(): void;
    get keywordMatchModeInput(): string;
}
export interface AiSearchInstanceSourceParamsWebCrawlerCrawlOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#depth AiSearchInstance#depth}
    */
    readonly depth?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#include_external_links AiSearchInstance#include_external_links}
    */
    readonly includeExternalLinks?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#include_subdomains AiSearchInstance#include_subdomains}
    */
    readonly includeSubdomains?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#max_age AiSearchInstance#max_age}
    */
    readonly maxAge?: number;
    /**
    * Available values: "all", "sitemaps", "links".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#source AiSearchInstance#source}
    */
    readonly source?: string;
}
export declare function aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerCrawlOptions | cdktf.IResolvable): any;
export declare function aiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerCrawlOptions | cdktf.IResolvable): any;
export declare class AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstanceSourceParamsWebCrawlerCrawlOptions | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceSourceParamsWebCrawlerCrawlOptions | cdktf.IResolvable | undefined);
    private _depth?;
    get depth(): number;
    set depth(value: number);
    resetDepth(): void;
    get depthInput(): number;
    private _includeExternalLinks?;
    get includeExternalLinks(): boolean | cdktf.IResolvable;
    set includeExternalLinks(value: boolean | cdktf.IResolvable);
    resetIncludeExternalLinks(): void;
    get includeExternalLinksInput(): any;
    private _includeSubdomains?;
    get includeSubdomains(): boolean | cdktf.IResolvable;
    set includeSubdomains(value: boolean | cdktf.IResolvable);
    resetIncludeSubdomains(): void;
    get includeSubdomainsInput(): any;
    private _maxAge?;
    get maxAge(): number;
    set maxAge(value: number);
    resetMaxAge(): void;
    get maxAgeInput(): number;
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string;
}
export interface AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector {
    /**
    * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#path AiSearchInstance#path}
    */
    readonly path: string;
    /**
    * CSS selector to extract content from pages matching the path pattern. Supports standard CSS selectors including class, ID, element, and attribute selectors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#selector AiSearchInstance#selector}
    */
    readonly selector: string;
}
export declare function aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | cdktf.IResolvable): any;
export declare function aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | cdktf.IResolvable): any;
export declare class AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | cdktf.IResolvable | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
    private _selector?;
    get selector(): string;
    set selector(value: string);
    get selectorInput(): string;
}
export declare class AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference;
}
export interface AiSearchInstanceSourceParamsWebCrawlerParseOptions {
    /**
    * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#content_selector AiSearchInstance#content_selector}
    */
    readonly contentSelector?: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#include_headers AiSearchInstance#include_headers}
    */
    readonly includeHeaders?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}
    */
    readonly includeImages?: boolean | cdktf.IResolvable;
    /**
    * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#specific_sitemaps AiSearchInstance#specific_sitemaps}
    */
    readonly specificSitemaps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}
    */
    readonly useBrowserRendering?: boolean | cdktf.IResolvable;
}
export declare function aiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerParseOptions | cdktf.IResolvable): any;
export declare function aiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerParseOptions | cdktf.IResolvable): any;
export declare class AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstanceSourceParamsWebCrawlerParseOptions | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceSourceParamsWebCrawlerParseOptions | cdktf.IResolvable | undefined);
    private _contentSelector;
    get contentSelector(): AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList;
    putContentSelector(value: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[] | cdktf.IResolvable): void;
    resetContentSelector(): void;
    get contentSelectorInput(): any;
    private _includeHeaders?;
    get includeHeaders(): {
        [key: string]: string;
    };
    set includeHeaders(value: {
        [key: string]: string;
    });
    resetIncludeHeaders(): void;
    get includeHeadersInput(): {
        [key: string]: string;
    };
    private _includeImages?;
    get includeImages(): boolean | cdktf.IResolvable;
    set includeImages(value: boolean | cdktf.IResolvable);
    resetIncludeImages(): void;
    get includeImagesInput(): any;
    private _specificSitemaps?;
    get specificSitemaps(): string[];
    set specificSitemaps(value: string[]);
    resetSpecificSitemaps(): void;
    get specificSitemapsInput(): string[];
    private _useBrowserRendering?;
    get useBrowserRendering(): boolean | cdktf.IResolvable;
    set useBrowserRendering(value: boolean | cdktf.IResolvable);
    resetUseBrowserRendering(): void;
    get useBrowserRenderingInput(): any;
}
export interface AiSearchInstanceSourceParamsWebCrawlerStoreOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}
    */
    readonly r2Jurisdiction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}
    */
    readonly storageId: string;
    /**
    * Available values: "r2".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#storage_type AiSearchInstance#storage_type}
    */
    readonly storageType?: string;
}
export declare function aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerStoreOptions | cdktf.IResolvable): any;
export declare function aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerStoreOptions | cdktf.IResolvable): any;
export declare class AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstanceSourceParamsWebCrawlerStoreOptions | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceSourceParamsWebCrawlerStoreOptions | cdktf.IResolvable | undefined);
    private _r2Jurisdiction?;
    get r2Jurisdiction(): string;
    set r2Jurisdiction(value: string);
    resetR2Jurisdiction(): void;
    get r2JurisdictionInput(): string;
    private _storageId?;
    get storageId(): string;
    set storageId(value: string);
    get storageIdInput(): string;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string;
}
export interface AiSearchInstanceSourceParamsWebCrawler {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#crawl_options AiSearchInstance#crawl_options}
    */
    readonly crawlOptions?: AiSearchInstanceSourceParamsWebCrawlerCrawlOptions;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}
    */
    readonly parseOptions?: AiSearchInstanceSourceParamsWebCrawlerParseOptions;
    /**
    * Available values: "sitemap", "feed-rss", "crawl".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#parse_type AiSearchInstance#parse_type}
    */
    readonly parseType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}
    */
    readonly storeOptions?: AiSearchInstanceSourceParamsWebCrawlerStoreOptions;
}
export declare function aiSearchInstanceSourceParamsWebCrawlerToTerraform(struct?: AiSearchInstanceSourceParamsWebCrawler | cdktf.IResolvable): any;
export declare function aiSearchInstanceSourceParamsWebCrawlerToHclTerraform(struct?: AiSearchInstanceSourceParamsWebCrawler | cdktf.IResolvable): any;
export declare class AiSearchInstanceSourceParamsWebCrawlerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstanceSourceParamsWebCrawler | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceSourceParamsWebCrawler | cdktf.IResolvable | undefined);
    private _crawlOptions;
    get crawlOptions(): AiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference;
    putCrawlOptions(value: AiSearchInstanceSourceParamsWebCrawlerCrawlOptions): void;
    resetCrawlOptions(): void;
    get crawlOptionsInput(): any;
    private _parseOptions;
    get parseOptions(): AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference;
    putParseOptions(value: AiSearchInstanceSourceParamsWebCrawlerParseOptions): void;
    resetParseOptions(): void;
    get parseOptionsInput(): any;
    private _parseType?;
    get parseType(): string;
    set parseType(value: string);
    resetParseType(): void;
    get parseTypeInput(): string;
    private _storeOptions;
    get storeOptions(): AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference;
    putStoreOptions(value: AiSearchInstanceSourceParamsWebCrawlerStoreOptions): void;
    resetStoreOptions(): void;
    get storeOptionsInput(): any;
}
export interface AiSearchInstanceSourceParams {
    /**
    * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#exclude_items AiSearchInstance#exclude_items}
    */
    readonly excludeItems?: string[];
    /**
    * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#include_items AiSearchInstance#include_items}
    */
    readonly includeItems?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}
    */
    readonly r2Jurisdiction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}
    */
    readonly webCrawler?: AiSearchInstanceSourceParamsWebCrawler;
}
export declare function aiSearchInstanceSourceParamsToTerraform(struct?: AiSearchInstanceSourceParams | cdktf.IResolvable): any;
export declare function aiSearchInstanceSourceParamsToHclTerraform(struct?: AiSearchInstanceSourceParams | cdktf.IResolvable): any;
export declare class AiSearchInstanceSourceParamsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiSearchInstanceSourceParams | cdktf.IResolvable | undefined;
    set internalValue(value: AiSearchInstanceSourceParams | cdktf.IResolvable | undefined);
    private _excludeItems?;
    get excludeItems(): string[];
    set excludeItems(value: string[]);
    resetExcludeItems(): void;
    get excludeItemsInput(): string[];
    private _includeItems?;
    get includeItems(): string[];
    set includeItems(value: string[]);
    resetIncludeItems(): void;
    get includeItemsInput(): string[];
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _r2Jurisdiction?;
    get r2Jurisdiction(): string;
    set r2Jurisdiction(value: string);
    resetR2Jurisdiction(): void;
    get r2JurisdictionInput(): string;
    private _webCrawler;
    get webCrawler(): AiSearchInstanceSourceParamsWebCrawlerOutputReference;
    putWebCrawler(value: AiSearchInstanceSourceParamsWebCrawler): void;
    resetWebCrawler(): void;
    get webCrawlerInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance cloudflare_ai_search_instance}
*/
export declare class AiSearchInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_ai_search_instance";
    /**
    * Generates CDKTF code for importing a AiSearchInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AiSearchInstance to import
    * @param importFromId The id of the existing AiSearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AiSearchInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_search_instance cloudflare_ai_search_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AiSearchInstanceConfig
    */
    constructor(scope: Construct, id: string, config: AiSearchInstanceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _aiGatewayId?;
    get aiGatewayId(): string;
    set aiGatewayId(value: string);
    resetAiGatewayId(): void;
    get aiGatewayIdInput(): string;
    private _aisearchModel?;
    get aisearchModel(): string;
    set aisearchModel(value: string);
    resetAisearchModel(): void;
    get aisearchModelInput(): string;
    private _cache?;
    get cache(): boolean | cdktf.IResolvable;
    set cache(value: boolean | cdktf.IResolvable);
    resetCache(): void;
    get cacheInput(): any;
    private _cacheThreshold?;
    get cacheThreshold(): string;
    set cacheThreshold(value: string);
    resetCacheThreshold(): void;
    get cacheThresholdInput(): string;
    private _chunk?;
    get chunk(): boolean | cdktf.IResolvable;
    set chunk(value: boolean | cdktf.IResolvable);
    resetChunk(): void;
    get chunkInput(): any;
    private _chunkOverlap?;
    get chunkOverlap(): number;
    set chunkOverlap(value: number);
    resetChunkOverlap(): void;
    get chunkOverlapInput(): number;
    private _chunkSize?;
    get chunkSize(): number;
    set chunkSize(value: number);
    resetChunkSize(): void;
    get chunkSizeInput(): number;
    get createdAt(): any;
    get createdBy(): any;
    private _customMetadata;
    get customMetadata(): AiSearchInstanceCustomMetadataList;
    putCustomMetadata(value: AiSearchInstanceCustomMetadata[] | cdktf.IResolvable): void;
    resetCustomMetadata(): void;
    get customMetadataInput(): any;
    private _embeddingModel?;
    get embeddingModel(): string;
    set embeddingModel(value: string);
    resetEmbeddingModel(): void;
    get embeddingModelInput(): string;
    get enable(): any;
    get engineVersion(): any;
    private _fusionMethod?;
    get fusionMethod(): string;
    set fusionMethod(value: string);
    resetFusionMethod(): void;
    get fusionMethodInput(): string;
    private _hybridSearchEnabled?;
    get hybridSearchEnabled(): boolean | cdktf.IResolvable;
    set hybridSearchEnabled(value: boolean | cdktf.IResolvable);
    resetHybridSearchEnabled(): void;
    get hybridSearchEnabledInput(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _indexMethod;
    get indexMethod(): AiSearchInstanceIndexMethodOutputReference;
    putIndexMethod(value: AiSearchInstanceIndexMethod): void;
    resetIndexMethod(): void;
    get indexMethodInput(): any;
    private _indexingOptions;
    get indexingOptions(): AiSearchInstanceIndexingOptionsOutputReference;
    putIndexingOptions(value: AiSearchInstanceIndexingOptions): void;
    resetIndexingOptions(): void;
    get indexingOptionsInput(): any;
    get lastActivity(): any;
    private _maxNumResults?;
    get maxNumResults(): number;
    set maxNumResults(value: number);
    resetMaxNumResults(): void;
    get maxNumResultsInput(): number;
    private _metadata;
    get metadata(): AiSearchInstanceMetadataOutputReference;
    putMetadata(value: AiSearchInstanceMetadata): void;
    resetMetadata(): void;
    get metadataInput(): any;
    get modifiedAt(): any;
    get modifiedBy(): any;
    get namespace(): any;
    private _paused?;
    get paused(): boolean | cdktf.IResolvable;
    set paused(value: boolean | cdktf.IResolvable);
    resetPaused(): void;
    get pausedInput(): any;
    get publicEndpointId(): any;
    private _publicEndpointParams;
    get publicEndpointParams(): AiSearchInstancePublicEndpointParamsOutputReference;
    putPublicEndpointParams(value: AiSearchInstancePublicEndpointParams): void;
    resetPublicEndpointParams(): void;
    get publicEndpointParamsInput(): any;
    private _reranking?;
    get reranking(): boolean | cdktf.IResolvable;
    set reranking(value: boolean | cdktf.IResolvable);
    resetReranking(): void;
    get rerankingInput(): any;
    private _rerankingModel?;
    get rerankingModel(): string;
    set rerankingModel(value: string);
    resetRerankingModel(): void;
    get rerankingModelInput(): string;
    private _retrievalOptions;
    get retrievalOptions(): AiSearchInstanceRetrievalOptionsOutputReference;
    putRetrievalOptions(value: AiSearchInstanceRetrievalOptions): void;
    resetRetrievalOptions(): void;
    get retrievalOptionsInput(): any;
    private _rewriteModel?;
    get rewriteModel(): string;
    set rewriteModel(value: string);
    resetRewriteModel(): void;
    get rewriteModelInput(): string;
    private _rewriteQuery?;
    get rewriteQuery(): boolean | cdktf.IResolvable;
    set rewriteQuery(value: boolean | cdktf.IResolvable);
    resetRewriteQuery(): void;
    get rewriteQueryInput(): any;
    private _scoreThreshold?;
    get scoreThreshold(): number;
    set scoreThreshold(value: number);
    resetScoreThreshold(): void;
    get scoreThresholdInput(): number;
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string;
    private _sourceParams;
    get sourceParams(): AiSearchInstanceSourceParamsOutputReference;
    putSourceParams(value: AiSearchInstanceSourceParams): void;
    resetSourceParams(): void;
    get sourceParamsInput(): any;
    get status(): any;
    private _summarization?;
    get summarization(): boolean | cdktf.IResolvable;
    set summarization(value: boolean | cdktf.IResolvable);
    resetSummarization(): void;
    get summarizationInput(): any;
    private _summarizationModel?;
    get summarizationModel(): string;
    set summarizationModel(value: string);
    resetSummarizationModel(): void;
    get summarizationModelInput(): string;
    private _syncInterval?;
    get syncInterval(): number;
    set syncInterval(value: number);
    resetSyncInterval(): void;
    get syncIntervalInput(): number;
    private _systemPromptAisearch?;
    get systemPromptAisearch(): string;
    set systemPromptAisearch(value: string);
    resetSystemPromptAisearch(): void;
    get systemPromptAisearchInput(): string;
    private _systemPromptIndexSummarization?;
    get systemPromptIndexSummarization(): string;
    set systemPromptIndexSummarization(value: string);
    resetSystemPromptIndexSummarization(): void;
    get systemPromptIndexSummarizationInput(): string;
    private _systemPromptRewriteQuery?;
    get systemPromptRewriteQuery(): string;
    set systemPromptRewriteQuery(value: string);
    resetSystemPromptRewriteQuery(): void;
    get systemPromptRewriteQueryInput(): string;
    private _tokenId?;
    get tokenId(): string;
    set tokenId(value: string);
    resetTokenId(): void;
    get tokenIdInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    get vectorizeName(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
