// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiSearchInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#account_id AiSearchInstance#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#ai_gateway_id AiSearchInstance#ai_gateway_id}
  */
  readonly aiGatewayId?: string;
  /**
  * Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#aisearch_model AiSearchInstance#aisearch_model}
  */
  readonly aisearchModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#cache AiSearchInstance#cache}
  */
  readonly cache?: boolean | cdktf.IResolvable;
  /**
  * Available values: "super_strict_match", "close_enough", "flexible_friend", "anything_goes".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#cache_threshold AiSearchInstance#cache_threshold}
  */
  readonly cacheThreshold?: string;
  /**
  * Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d).
  * Available values: 600, 1800, 3600, 7200, 21600, 43200, 86400, 172800, 259200, 518400.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#cache_ttl AiSearchInstance#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#chunk AiSearchInstance#chunk}
  */
  readonly chunk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#chunk_overlap AiSearchInstance#chunk_overlap}
  */
  readonly chunkOverlap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#chunk_size AiSearchInstance#chunk_size}
  */
  readonly chunkSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#custom_metadata AiSearchInstance#custom_metadata}
  */
  readonly customMetadata?: AiSearchInstanceCustomMetadata[] | cdktf.IResolvable;
  /**
  * Available values: "@cf/qwen/qwen3-embedding-0.6b", "@cf/baai/bge-m3", "@cf/baai/bge-large-en-v1.5", "@cf/google/embeddinggemma-300m", "google-ai-studio/gemini-embedding-001", "google-ai-studio/gemini-embedding-2-preview", "google-ai-studio/gemini-embedding-2", "openai/text-embedding-3-small", "openai/text-embedding-3-large", "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#embedding_model AiSearchInstance#embedding_model}
  */
  readonly embeddingModel?: string;
  /**
  * Available values: "max", "rrf".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#fusion_method AiSearchInstance#fusion_method}
  */
  readonly fusionMethod?: string;
  /**
  * Deprecated — use index_method instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#hybrid_search_enabled AiSearchInstance#hybrid_search_enabled}
  */
  readonly hybridSearchEnabled?: boolean | cdktf.IResolvable;
  /**
  * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#id AiSearchInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Controls which storage backends are used during indexing. Defaults to vector-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#index_method AiSearchInstance#index_method}
  */
  readonly indexMethod?: AiSearchInstanceIndexMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#indexing_options AiSearchInstance#indexing_options}
  */
  readonly indexingOptions?: AiSearchInstanceIndexingOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#max_num_results AiSearchInstance#max_num_results}
  */
  readonly maxNumResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#metadata AiSearchInstance#metadata}
  */
  readonly metadata?: AiSearchInstanceMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#paused AiSearchInstance#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#public_endpoint_params AiSearchInstance#public_endpoint_params}
  */
  readonly publicEndpointParams?: AiSearchInstancePublicEndpointParams;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#reranking AiSearchInstance#reranking}
  */
  readonly reranking?: boolean | cdktf.IResolvable;
  /**
  * Available values: "@cf/baai/bge-reranker-base", "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#reranking_model AiSearchInstance#reranking_model}
  */
  readonly rerankingModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#retrieval_options AiSearchInstance#retrieval_options}
  */
  readonly retrievalOptions?: AiSearchInstanceRetrievalOptions;
  /**
  * Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#rewrite_model AiSearchInstance#rewrite_model}
  */
  readonly rewriteModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#rewrite_query AiSearchInstance#rewrite_query}
  */
  readonly rewriteQuery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#score_threshold AiSearchInstance#score_threshold}
  */
  readonly scoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#source AiSearchInstance#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#source_params AiSearchInstance#source_params}
  */
  readonly sourceParams?: AiSearchInstanceSourceParams;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#summarization AiSearchInstance#summarization}
  */
  readonly summarization?: boolean | cdktf.IResolvable;
  /**
  * Available values: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/zai-org/glm-4.7-flash", "@cf/meta/llama-3.1-8b-instruct-fast", "@cf/meta/llama-3.1-8b-instruct-fp8", "@cf/meta/llama-4-scout-17b-16e-instruct", "@cf/qwen/qwen3-30b-a3b-fp8", "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", "@cf/moonshotai/kimi-k2-instruct", "@cf/google/gemma-3-12b-it", "@cf/google/gemma-4-26b-a4b-it", "@cf/moonshotai/kimi-k2.5", "anthropic/claude-3-7-sonnet", "anthropic/claude-sonnet-4", "anthropic/claude-opus-4", "anthropic/claude-3-5-haiku", "cerebras/qwen-3-235b-a22b-instruct", "cerebras/qwen-3-235b-a22b-thinking", "cerebras/llama-3.3-70b", "cerebras/llama-4-maverick-17b-128e-instruct", "cerebras/llama-4-scout-17b-16e-instruct", "cerebras/gpt-oss-120b", "google-ai-studio/gemini-2.5-flash", "google-ai-studio/gemini-2.5-pro", "grok/grok-4", "groq/llama-3.3-70b-versatile", "groq/llama-3.1-8b-instant", "openai/gpt-5", "openai/gpt-5-mini", "openai/gpt-5-nano", "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#summarization_model AiSearchInstance#summarization_model}
  */
  readonly summarizationModel?: string;
  /**
  * Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
  * Available values: 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#sync_interval AiSearchInstance#sync_interval}
  */
  readonly syncInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#system_prompt_aisearch AiSearchInstance#system_prompt_aisearch}
  */
  readonly systemPromptAisearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#system_prompt_index_summarization AiSearchInstance#system_prompt_index_summarization}
  */
  readonly systemPromptIndexSummarization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#system_prompt_rewrite_query AiSearchInstance#system_prompt_rewrite_query}
  */
  readonly systemPromptRewriteQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#token_id AiSearchInstance#token_id}
  */
  readonly tokenId?: string;
  /**
  * Available values: "r2", "web-crawler".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#type AiSearchInstance#type}
  */
  readonly type?: string;
}
export interface AiSearchInstanceCustomMetadata {
  /**
  * Available values: "text", "number", "boolean", "datetime".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#data_type AiSearchInstance#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#field_name AiSearchInstance#field_name}
  */
  readonly fieldName: string;
}

export function aiSearchInstanceCustomMetadataToTerraform(struct?: AiSearchInstanceCustomMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
  }
}


export function aiSearchInstanceCustomMetadataToHclTerraform(struct?: AiSearchInstanceCustomMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstanceCustomMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AiSearchInstanceCustomMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstanceCustomMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._fieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._fieldName = value.fieldName;
    }
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }
}

export class AiSearchInstanceCustomMetadataList extends cdktf.ComplexList {
  public internalValue? : AiSearchInstanceCustomMetadata[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AiSearchInstanceCustomMetadataOutputReference {
    return new AiSearchInstanceCustomMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiSearchInstanceIndexMethod {
  /**
  * Enable keyword (BM25) storage backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#keyword AiSearchInstance#keyword}
  */
  readonly keyword: boolean | cdktf.IResolvable;
  /**
  * Enable vector (embedding) storage backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#vector AiSearchInstance#vector}
  */
  readonly vector: boolean | cdktf.IResolvable;
}

export function aiSearchInstanceIndexMethodToTerraform(struct?: AiSearchInstanceIndexMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keyword: cdktf.booleanToTerraform(struct!.keyword),
    vector: cdktf.booleanToTerraform(struct!.vector),
  }
}


export function aiSearchInstanceIndexMethodToHclTerraform(struct?: AiSearchInstanceIndexMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keyword: {
      value: cdktf.booleanToHclTerraform(struct!.keyword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vector: {
      value: cdktf.booleanToHclTerraform(struct!.vector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstanceIndexMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstanceIndexMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword;
    }
    if (this._vector !== undefined) {
      hasAnyValues = true;
      internalValueResult.vector = this._vector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstanceIndexMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyword = undefined;
      this._vector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyword = value.keyword;
      this._vector = value.vector;
    }
  }

  // keyword - computed: true, optional: false, required: true
  private _keyword?: boolean | cdktf.IResolvable; 
  public get keyword() {
    return this.getBooleanAttribute('keyword');
  }
  public set keyword(value: boolean | cdktf.IResolvable) {
    this._keyword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // vector - computed: true, optional: false, required: true
  private _vector?: boolean | cdktf.IResolvable; 
  public get vector() {
    return this.getBooleanAttribute('vector');
  }
  public set vector(value: boolean | cdktf.IResolvable) {
    this._vector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorInput() {
    return this._vector;
  }
}
export interface AiSearchInstanceIndexingOptions {
  /**
  * Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.
  * Available values: "porter", "trigram".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#keyword_tokenizer AiSearchInstance#keyword_tokenizer}
  */
  readonly keywordTokenizer?: string;
}

export function aiSearchInstanceIndexingOptionsToTerraform(struct?: AiSearchInstanceIndexingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keyword_tokenizer: cdktf.stringToTerraform(struct!.keywordTokenizer),
  }
}


export function aiSearchInstanceIndexingOptionsToHclTerraform(struct?: AiSearchInstanceIndexingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keyword_tokenizer: {
      value: cdktf.stringToHclTerraform(struct!.keywordTokenizer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstanceIndexingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstanceIndexingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keywordTokenizer !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywordTokenizer = this._keywordTokenizer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstanceIndexingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keywordTokenizer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keywordTokenizer = value.keywordTokenizer;
    }
  }

  // keyword_tokenizer - computed: true, optional: true, required: false
  private _keywordTokenizer?: string; 
  public get keywordTokenizer() {
    return this.getStringAttribute('keyword_tokenizer');
  }
  public set keywordTokenizer(value: string) {
    this._keywordTokenizer = value;
  }
  public resetKeywordTokenizer() {
    this._keywordTokenizer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordTokenizerInput() {
    return this._keywordTokenizer;
  }
}
export interface AiSearchInstanceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#created_from_aisearch_wizard AiSearchInstance#created_from_aisearch_wizard}
  */
  readonly createdFromAisearchWizard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#worker_domain AiSearchInstance#worker_domain}
  */
  readonly workerDomain?: string;
}

export function aiSearchInstanceMetadataToTerraform(struct?: AiSearchInstanceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_from_aisearch_wizard: cdktf.booleanToTerraform(struct!.createdFromAisearchWizard),
    worker_domain: cdktf.stringToTerraform(struct!.workerDomain),
  }
}


export function aiSearchInstanceMetadataToHclTerraform(struct?: AiSearchInstanceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_from_aisearch_wizard: {
      value: cdktf.booleanToHclTerraform(struct!.createdFromAisearchWizard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    worker_domain: {
      value: cdktf.stringToHclTerraform(struct!.workerDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstanceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstanceMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdFromAisearchWizard !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdFromAisearchWizard = this._createdFromAisearchWizard;
    }
    if (this._workerDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerDomain = this._workerDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstanceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdFromAisearchWizard = undefined;
      this._workerDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdFromAisearchWizard = value.createdFromAisearchWizard;
      this._workerDomain = value.workerDomain;
    }
  }

  // created_from_aisearch_wizard - computed: false, optional: true, required: false
  private _createdFromAisearchWizard?: boolean | cdktf.IResolvable; 
  public get createdFromAisearchWizard() {
    return this.getBooleanAttribute('created_from_aisearch_wizard');
  }
  public set createdFromAisearchWizard(value: boolean | cdktf.IResolvable) {
    this._createdFromAisearchWizard = value;
  }
  public resetCreatedFromAisearchWizard() {
    this._createdFromAisearchWizard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdFromAisearchWizardInput() {
    return this._createdFromAisearchWizard;
  }

  // worker_domain - computed: false, optional: true, required: false
  private _workerDomain?: string; 
  public get workerDomain() {
    return this.getStringAttribute('worker_domain');
  }
  public set workerDomain(value: string) {
    this._workerDomain = value;
  }
  public resetWorkerDomain() {
    this._workerDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerDomainInput() {
    return this._workerDomain;
  }
}
export interface AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint {
  /**
  * Disable chat completions endpoint for this public endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform(struct?: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct?: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface AiSearchInstancePublicEndpointParamsMcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#description AiSearchInstance#description}
  */
  readonly description?: string;
  /**
  * Disable MCP endpoint for this public endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function aiSearchInstancePublicEndpointParamsMcpToTerraform(struct?: AiSearchInstancePublicEndpointParamsMcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function aiSearchInstancePublicEndpointParamsMcpToHclTerraform(struct?: AiSearchInstancePublicEndpointParamsMcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstancePublicEndpointParamsMcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstancePublicEndpointParamsMcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstancePublicEndpointParamsMcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disabled = value.disabled;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface AiSearchInstancePublicEndpointParamsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#period_ms AiSearchInstance#period_ms}
  */
  readonly periodMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#requests AiSearchInstance#requests}
  */
  readonly requests?: number;
  /**
  * Available values: "fixed", "sliding".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#technique AiSearchInstance#technique}
  */
  readonly technique?: string;
}

export function aiSearchInstancePublicEndpointParamsRateLimitToTerraform(struct?: AiSearchInstancePublicEndpointParamsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period_ms: cdktf.numberToTerraform(struct!.periodMs),
    requests: cdktf.numberToTerraform(struct!.requests),
    technique: cdktf.stringToTerraform(struct!.technique),
  }
}


export function aiSearchInstancePublicEndpointParamsRateLimitToHclTerraform(struct?: AiSearchInstancePublicEndpointParamsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period_ms: {
      value: cdktf.numberToHclTerraform(struct!.periodMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requests: {
      value: cdktf.numberToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    technique: {
      value: cdktf.stringToHclTerraform(struct!.technique),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstancePublicEndpointParamsRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstancePublicEndpointParamsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodMs = this._periodMs;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    if (this._technique !== undefined) {
      hasAnyValues = true;
      internalValueResult.technique = this._technique;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstancePublicEndpointParamsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._periodMs = undefined;
      this._requests = undefined;
      this._technique = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._periodMs = value.periodMs;
      this._requests = value.requests;
      this._technique = value.technique;
    }
  }

  // period_ms - computed: true, optional: true, required: false
  private _periodMs?: number; 
  public get periodMs() {
    return this.getNumberAttribute('period_ms');
  }
  public set periodMs(value: number) {
    this._periodMs = value;
  }
  public resetPeriodMs() {
    this._periodMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodMsInput() {
    return this._periodMs;
  }

  // requests - computed: true, optional: true, required: false
  private _requests?: number; 
  public get requests() {
    return this.getNumberAttribute('requests');
  }
  public set requests(value: number) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }

  // technique - computed: true, optional: true, required: false
  private _technique?: string; 
  public get technique() {
    return this.getStringAttribute('technique');
  }
  public set technique(value: string) {
    this._technique = value;
  }
  public resetTechnique() {
    this._technique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techniqueInput() {
    return this._technique;
  }
}
export interface AiSearchInstancePublicEndpointParamsSearchEndpoint {
  /**
  * Disable search endpoint for this public endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#disabled AiSearchInstance#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function aiSearchInstancePublicEndpointParamsSearchEndpointToTerraform(struct?: AiSearchInstancePublicEndpointParamsSearchEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function aiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform(struct?: AiSearchInstancePublicEndpointParamsSearchEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstancePublicEndpointParamsSearchEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstancePublicEndpointParamsSearchEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface AiSearchInstancePublicEndpointParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#authorized_hosts AiSearchInstance#authorized_hosts}
  */
  readonly authorizedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#chat_completions_endpoint AiSearchInstance#chat_completions_endpoint}
  */
  readonly chatCompletionsEndpoint?: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint;
  /**
  * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#custom_domains AiSearchInstance#custom_domains}
  */
  readonly customDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#enabled AiSearchInstance#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#mcp AiSearchInstance#mcp}
  */
  readonly mcp?: AiSearchInstancePublicEndpointParamsMcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#rate_limit AiSearchInstance#rate_limit}
  */
  readonly rateLimit?: AiSearchInstancePublicEndpointParamsRateLimit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#search_endpoint AiSearchInstance#search_endpoint}
  */
  readonly searchEndpoint?: AiSearchInstancePublicEndpointParamsSearchEndpoint;
}

export function aiSearchInstancePublicEndpointParamsToTerraform(struct?: AiSearchInstancePublicEndpointParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedHosts),
    chat_completions_endpoint: aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform(struct!.chatCompletionsEndpoint),
    custom_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customDomains),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mcp: aiSearchInstancePublicEndpointParamsMcpToTerraform(struct!.mcp),
    rate_limit: aiSearchInstancePublicEndpointParamsRateLimitToTerraform(struct!.rateLimit),
    search_endpoint: aiSearchInstancePublicEndpointParamsSearchEndpointToTerraform(struct!.searchEndpoint),
  }
}


export function aiSearchInstancePublicEndpointParamsToHclTerraform(struct?: AiSearchInstancePublicEndpointParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    chat_completions_endpoint: {
      value: aiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct!.chatCompletionsEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint",
    },
    custom_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mcp: {
      value: aiSearchInstancePublicEndpointParamsMcpToHclTerraform(struct!.mcp),
      isBlock: true,
      type: "struct",
      storageClassType: "AiSearchInstancePublicEndpointParamsMcp",
    },
    rate_limit: {
      value: aiSearchInstancePublicEndpointParamsRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "AiSearchInstancePublicEndpointParamsRateLimit",
    },
    search_endpoint: {
      value: aiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform(struct!.searchEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "AiSearchInstancePublicEndpointParamsSearchEndpoint",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstancePublicEndpointParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstancePublicEndpointParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedHosts = this._authorizedHosts;
    }
    if (this._chatCompletionsEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatCompletionsEndpoint = this._chatCompletionsEndpoint?.internalValue;
    }
    if (this._customDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomains = this._customDomains;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcp = this._mcp?.internalValue;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    if (this._searchEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchEndpoint = this._searchEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstancePublicEndpointParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizedHosts = undefined;
      this._chatCompletionsEndpoint.internalValue = undefined;
      this._customDomains = undefined;
      this._enabled = undefined;
      this._mcp.internalValue = undefined;
      this._rateLimit.internalValue = undefined;
      this._searchEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizedHosts = value.authorizedHosts;
      this._chatCompletionsEndpoint.internalValue = value.chatCompletionsEndpoint;
      this._customDomains = value.customDomains;
      this._enabled = value.enabled;
      this._mcp.internalValue = value.mcp;
      this._rateLimit.internalValue = value.rateLimit;
      this._searchEndpoint.internalValue = value.searchEndpoint;
    }
  }

  // authorized_hosts - computed: true, optional: true, required: false
  private _authorizedHosts?: string[]; 
  public get authorizedHosts() {
    return this.getListAttribute('authorized_hosts');
  }
  public set authorizedHosts(value: string[]) {
    this._authorizedHosts = value;
  }
  public resetAuthorizedHosts() {
    this._authorizedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedHostsInput() {
    return this._authorizedHosts;
  }

  // chat_completions_endpoint - computed: true, optional: true, required: false
  private _chatCompletionsEndpoint = new AiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(this, "chat_completions_endpoint");
  public get chatCompletionsEndpoint() {
    return this._chatCompletionsEndpoint;
  }
  public putChatCompletionsEndpoint(value: AiSearchInstancePublicEndpointParamsChatCompletionsEndpoint) {
    this._chatCompletionsEndpoint.internalValue = value;
  }
  public resetChatCompletionsEndpoint() {
    this._chatCompletionsEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatCompletionsEndpointInput() {
    return this._chatCompletionsEndpoint.internalValue;
  }

  // custom_domains - computed: true, optional: true, required: false
  private _customDomains?: string[]; 
  public get customDomains() {
    return this.getListAttribute('custom_domains');
  }
  public set customDomains(value: string[]) {
    this._customDomains = value;
  }
  public resetCustomDomains() {
    this._customDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainsInput() {
    return this._customDomains;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // mcp - computed: true, optional: true, required: false
  private _mcp = new AiSearchInstancePublicEndpointParamsMcpOutputReference(this, "mcp");
  public get mcp() {
    return this._mcp;
  }
  public putMcp(value: AiSearchInstancePublicEndpointParamsMcp) {
    this._mcp.internalValue = value;
  }
  public resetMcp() {
    this._mcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpInput() {
    return this._mcp.internalValue;
  }

  // rate_limit - computed: true, optional: true, required: false
  private _rateLimit = new AiSearchInstancePublicEndpointParamsRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: AiSearchInstancePublicEndpointParamsRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // search_endpoint - computed: true, optional: true, required: false
  private _searchEndpoint = new AiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(this, "search_endpoint");
  public get searchEndpoint() {
    return this._searchEndpoint;
  }
  public putSearchEndpoint(value: AiSearchInstancePublicEndpointParamsSearchEndpoint) {
    this._searchEndpoint.internalValue = value;
  }
  public resetSearchEndpoint() {
    this._searchEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEndpointInput() {
    return this._searchEndpoint.internalValue;
  }
}
export interface AiSearchInstanceRetrievalOptionsBoostBy {
  /**
  * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps). 'asc' = lower values rank higher. 'exists' = boost chunks that have the field. 'not_exists' = boost chunks that lack the field. Optional — defaults to 'asc' for numeric/datetime fields, 'exists' for text/boolean fields.
  * Available values: "asc", "desc", "exists", "not_exists".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#direction AiSearchInstance#direction}
  */
  readonly direction?: string;
  /**
  * Metadata field name to boost by. Use 'timestamp' for document freshness, or any custom_metadata field. Numeric and datetime fields support all four directions (asc, desc, exists, not_exists); text/boolean fields only support exists/not_exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#field AiSearchInstance#field}
  */
  readonly field: string;
}

export function aiSearchInstanceRetrievalOptionsBoostByToTerraform(struct?: AiSearchInstanceRetrievalOptionsBoostBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field: cdktf.stringToTerraform(struct!.field),
  }
}


export function aiSearchInstanceRetrievalOptionsBoostByToHclTerraform(struct?: AiSearchInstanceRetrievalOptionsBoostBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstanceRetrievalOptionsBoostByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AiSearchInstanceRetrievalOptionsBoostBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstanceRetrievalOptionsBoostBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._field = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._field = value.field;
    }
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // field - computed: true, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class AiSearchInstanceRetrievalOptionsBoostByList extends cdktf.ComplexList {
  public internalValue? : AiSearchInstanceRetrievalOptionsBoostBy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AiSearchInstanceRetrievalOptionsBoostByOutputReference {
    return new AiSearchInstanceRetrievalOptionsBoostByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiSearchInstanceRetrievalOptions {
  /**
  * Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined custom_metadata field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#boost_by AiSearchInstance#boost_by}
  */
  readonly boostBy?: AiSearchInstanceRetrievalOptionsBoostBy[] | cdktf.IResolvable;
  /**
  * Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
  * Available values: "and", "or".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#keyword_match_mode AiSearchInstance#keyword_match_mode}
  */
  readonly keywordMatchMode?: string;
}

export function aiSearchInstanceRetrievalOptionsToTerraform(struct?: AiSearchInstanceRetrievalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boost_by: cdktf.listMapper(aiSearchInstanceRetrievalOptionsBoostByToTerraform, false)(struct!.boostBy),
    keyword_match_mode: cdktf.stringToTerraform(struct!.keywordMatchMode),
  }
}


export function aiSearchInstanceRetrievalOptionsToHclTerraform(struct?: AiSearchInstanceRetrievalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boost_by: {
      value: cdktf.listMapperHcl(aiSearchInstanceRetrievalOptionsBoostByToHclTerraform, false)(struct!.boostBy),
      isBlock: true,
      type: "list",
      storageClassType: "AiSearchInstanceRetrievalOptionsBoostByList",
    },
    keyword_match_mode: {
      value: cdktf.stringToHclTerraform(struct!.keywordMatchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstanceRetrievalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstanceRetrievalOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boostBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boostBy = this._boostBy?.internalValue;
    }
    if (this._keywordMatchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywordMatchMode = this._keywordMatchMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstanceRetrievalOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boostBy.internalValue = undefined;
      this._keywordMatchMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boostBy.internalValue = value.boostBy;
      this._keywordMatchMode = value.keywordMatchMode;
    }
  }

  // boost_by - computed: true, optional: true, required: false
  private _boostBy = new AiSearchInstanceRetrievalOptionsBoostByList(this, "boost_by", false);
  public get boostBy() {
    return this._boostBy;
  }
  public putBoostBy(value: AiSearchInstanceRetrievalOptionsBoostBy[] | cdktf.IResolvable) {
    this._boostBy.internalValue = value;
  }
  public resetBoostBy() {
    this._boostBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostByInput() {
    return this._boostBy.internalValue;
  }

  // keyword_match_mode - computed: true, optional: true, required: false
  private _keywordMatchMode?: string; 
  public get keywordMatchMode() {
    return this.getStringAttribute('keyword_match_mode');
  }
  public set keywordMatchMode(value: string) {
    this._keywordMatchMode = value;
  }
  public resetKeywordMatchMode() {
    this._keywordMatchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordMatchModeInput() {
    return this._keywordMatchMode;
  }
}
export interface AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector {
  /**
  * Glob pattern to match against the page URL path. Uses standard glob syntax: * matches within a segment, ** crosses directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#path AiSearchInstance#path}
  */
  readonly path: string;
  /**
  * CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector is ignored and the full page is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#selector AiSearchInstance#selector}
  */
  readonly selector: string;
}

export function aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._selector = value.selector;
    }
  }

  // path - computed: true, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // selector - computed: true, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList extends cdktf.ComplexList {
  public internalValue? : AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference {
    return new AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiSearchInstanceSourceParamsWebCrawlerParseOptions {
  /**
  * List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed. Omit the field to disable content selection — empty arrays are rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#content_selector AiSearchInstance#content_selector}
  */
  readonly contentSelector?: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[] | cdktf.IResolvable;
  /**
  * Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#include_headers AiSearchInstance#include_headers}
  */
  readonly includeHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#include_images AiSearchInstance#include_images}
  */
  readonly includeImages?: boolean | cdktf.IResolvable;
  /**
  * List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#specific_sitemaps AiSearchInstance#specific_sitemaps}
  */
  readonly specificSitemaps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#use_browser_rendering AiSearchInstance#use_browser_rendering}
  */
  readonly useBrowserRendering?: boolean | cdktf.IResolvable;
}

export function aiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerParseOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_selector: cdktf.listMapper(aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform, false)(struct!.contentSelector),
    include_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.includeHeaders),
    include_images: cdktf.booleanToTerraform(struct!.includeImages),
    specific_sitemaps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.specificSitemaps),
    use_browser_rendering: cdktf.booleanToTerraform(struct!.useBrowserRendering),
  }
}


export function aiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerParseOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_selector: {
      value: cdktf.listMapperHcl(aiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform, false)(struct!.contentSelector),
      isBlock: true,
      type: "list",
      storageClassType: "AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList",
    },
    include_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.includeHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    include_images: {
      value: cdktf.booleanToHclTerraform(struct!.includeImages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific_sitemaps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.specificSitemaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_browser_rendering: {
      value: cdktf.booleanToHclTerraform(struct!.useBrowserRendering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstanceSourceParamsWebCrawlerParseOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSelector = this._contentSelector?.internalValue;
    }
    if (this._includeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHeaders = this._includeHeaders;
    }
    if (this._includeImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeImages = this._includeImages;
    }
    if (this._specificSitemaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificSitemaps = this._specificSitemaps;
    }
    if (this._useBrowserRendering !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBrowserRendering = this._useBrowserRendering;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstanceSourceParamsWebCrawlerParseOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentSelector.internalValue = undefined;
      this._includeHeaders = undefined;
      this._includeImages = undefined;
      this._specificSitemaps = undefined;
      this._useBrowserRendering = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentSelector.internalValue = value.contentSelector;
      this._includeHeaders = value.includeHeaders;
      this._includeImages = value.includeImages;
      this._specificSitemaps = value.specificSitemaps;
      this._useBrowserRendering = value.useBrowserRendering;
    }
  }

  // content_selector - computed: true, optional: true, required: false
  private _contentSelector = new AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(this, "content_selector", false);
  public get contentSelector() {
    return this._contentSelector;
  }
  public putContentSelector(value: AiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector[] | cdktf.IResolvable) {
    this._contentSelector.internalValue = value;
  }
  public resetContentSelector() {
    this._contentSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSelectorInput() {
    return this._contentSelector.internalValue;
  }

  // include_headers - computed: true, optional: true, required: false
  private _includeHeaders?: { [key: string]: string }; 
  public get includeHeaders() {
    return this.getStringMapAttribute('include_headers');
  }
  public set includeHeaders(value: { [key: string]: string }) {
    this._includeHeaders = value;
  }
  public resetIncludeHeaders() {
    this._includeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeadersInput() {
    return this._includeHeaders;
  }

  // include_images - computed: true, optional: true, required: false
  private _includeImages?: boolean | cdktf.IResolvable; 
  public get includeImages() {
    return this.getBooleanAttribute('include_images');
  }
  public set includeImages(value: boolean | cdktf.IResolvable) {
    this._includeImages = value;
  }
  public resetIncludeImages() {
    this._includeImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeImagesInput() {
    return this._includeImages;
  }

  // specific_sitemaps - computed: true, optional: true, required: false
  private _specificSitemaps?: string[]; 
  public get specificSitemaps() {
    return this.getListAttribute('specific_sitemaps');
  }
  public set specificSitemaps(value: string[]) {
    this._specificSitemaps = value;
  }
  public resetSpecificSitemaps() {
    this._specificSitemaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificSitemapsInput() {
    return this._specificSitemaps;
  }

  // use_browser_rendering - computed: true, optional: true, required: false
  private _useBrowserRendering?: boolean | cdktf.IResolvable; 
  public get useBrowserRendering() {
    return this.getBooleanAttribute('use_browser_rendering');
  }
  public set useBrowserRendering(value: boolean | cdktf.IResolvable) {
    this._useBrowserRendering = value;
  }
  public resetUseBrowserRendering() {
    this._useBrowserRendering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBrowserRenderingInput() {
    return this._useBrowserRendering;
  }
}
export interface AiSearchInstanceSourceParamsWebCrawlerStoreOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}
  */
  readonly r2Jurisdiction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#storage_id AiSearchInstance#storage_id}
  */
  readonly storageId: string;
  /**
  * Available values: "r2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#storage_type AiSearchInstance#storage_type}
  */
  readonly storageType?: string;
}

export function aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerStoreOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    r2_jurisdiction: cdktf.stringToTerraform(struct!.r2Jurisdiction),
    storage_id: cdktf.stringToTerraform(struct!.storageId),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct?: AiSearchInstanceSourceParamsWebCrawlerStoreOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    r2_jurisdiction: {
      value: cdktf.stringToHclTerraform(struct!.r2Jurisdiction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_id: {
      value: cdktf.stringToHclTerraform(struct!.storageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstanceSourceParamsWebCrawlerStoreOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._r2Jurisdiction !== undefined) {
      hasAnyValues = true;
      internalValueResult.r2Jurisdiction = this._r2Jurisdiction;
    }
    if (this._storageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageId = this._storageId;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstanceSourceParamsWebCrawlerStoreOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._r2Jurisdiction = undefined;
      this._storageId = undefined;
      this._storageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._r2Jurisdiction = value.r2Jurisdiction;
      this._storageId = value.storageId;
      this._storageType = value.storageType;
    }
  }

  // r2_jurisdiction - computed: true, optional: true, required: false
  private _r2Jurisdiction?: string; 
  public get r2Jurisdiction() {
    return this.getStringAttribute('r2_jurisdiction');
  }
  public set r2Jurisdiction(value: string) {
    this._r2Jurisdiction = value;
  }
  public resetR2Jurisdiction() {
    this._r2Jurisdiction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r2JurisdictionInput() {
    return this._r2Jurisdiction;
  }

  // storage_id - computed: true, optional: false, required: true
  private _storageId?: string; 
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }
  public set storageId(value: string) {
    this._storageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }
}
export interface AiSearchInstanceSourceParamsWebCrawler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#parse_options AiSearchInstance#parse_options}
  */
  readonly parseOptions?: AiSearchInstanceSourceParamsWebCrawlerParseOptions;
  /**
  * Available values: "sitemap", "feed-rss", "crawl".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#parse_type AiSearchInstance#parse_type}
  */
  readonly parseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#store_options AiSearchInstance#store_options}
  */
  readonly storeOptions?: AiSearchInstanceSourceParamsWebCrawlerStoreOptions;
}

export function aiSearchInstanceSourceParamsWebCrawlerToTerraform(struct?: AiSearchInstanceSourceParamsWebCrawler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parse_options: aiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform(struct!.parseOptions),
    parse_type: cdktf.stringToTerraform(struct!.parseType),
    store_options: aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform(struct!.storeOptions),
  }
}


export function aiSearchInstanceSourceParamsWebCrawlerToHclTerraform(struct?: AiSearchInstanceSourceParamsWebCrawler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parse_options: {
      value: aiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform(struct!.parseOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "AiSearchInstanceSourceParamsWebCrawlerParseOptions",
    },
    parse_type: {
      value: cdktf.stringToHclTerraform(struct!.parseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_options: {
      value: aiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct!.storeOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "AiSearchInstanceSourceParamsWebCrawlerStoreOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstanceSourceParamsWebCrawlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstanceSourceParamsWebCrawler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parseOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseOptions = this._parseOptions?.internalValue;
    }
    if (this._parseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseType = this._parseType;
    }
    if (this._storeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeOptions = this._storeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstanceSourceParamsWebCrawler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parseOptions.internalValue = undefined;
      this._parseType = undefined;
      this._storeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parseOptions.internalValue = value.parseOptions;
      this._parseType = value.parseType;
      this._storeOptions.internalValue = value.storeOptions;
    }
  }

  // parse_options - computed: true, optional: true, required: false
  private _parseOptions = new AiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(this, "parse_options");
  public get parseOptions() {
    return this._parseOptions;
  }
  public putParseOptions(value: AiSearchInstanceSourceParamsWebCrawlerParseOptions) {
    this._parseOptions.internalValue = value;
  }
  public resetParseOptions() {
    this._parseOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseOptionsInput() {
    return this._parseOptions.internalValue;
  }

  // parse_type - computed: true, optional: true, required: false
  private _parseType?: string; 
  public get parseType() {
    return this.getStringAttribute('parse_type');
  }
  public set parseType(value: string) {
    this._parseType = value;
  }
  public resetParseType() {
    this._parseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseTypeInput() {
    return this._parseType;
  }

  // store_options - computed: true, optional: true, required: false
  private _storeOptions = new AiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(this, "store_options");
  public get storeOptions() {
    return this._storeOptions;
  }
  public putStoreOptions(value: AiSearchInstanceSourceParamsWebCrawlerStoreOptions) {
    this._storeOptions.internalValue = value;
  }
  public resetStoreOptions() {
    this._storeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeOptionsInput() {
    return this._storeOptions.internalValue;
  }
}
export interface AiSearchInstanceSourceParams {
  /**
  * List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#exclude_items AiSearchInstance#exclude_items}
  */
  readonly excludeItems?: string[];
  /**
  * List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#include_items AiSearchInstance#include_items}
  */
  readonly includeItems?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#prefix AiSearchInstance#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#r2_jurisdiction AiSearchInstance#r2_jurisdiction}
  */
  readonly r2Jurisdiction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#web_crawler AiSearchInstance#web_crawler}
  */
  readonly webCrawler?: AiSearchInstanceSourceParamsWebCrawler;
}

export function aiSearchInstanceSourceParamsToTerraform(struct?: AiSearchInstanceSourceParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeItems),
    include_items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeItems),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    r2_jurisdiction: cdktf.stringToTerraform(struct!.r2Jurisdiction),
    web_crawler: aiSearchInstanceSourceParamsWebCrawlerToTerraform(struct!.webCrawler),
  }
}


export function aiSearchInstanceSourceParamsToHclTerraform(struct?: AiSearchInstanceSourceParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeItems),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeItems),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    r2_jurisdiction: {
      value: cdktf.stringToHclTerraform(struct!.r2Jurisdiction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_crawler: {
      value: aiSearchInstanceSourceParamsWebCrawlerToHclTerraform(struct!.webCrawler),
      isBlock: true,
      type: "struct",
      storageClassType: "AiSearchInstanceSourceParamsWebCrawler",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchInstanceSourceParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchInstanceSourceParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeItems = this._excludeItems;
    }
    if (this._includeItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeItems = this._includeItems;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._r2Jurisdiction !== undefined) {
      hasAnyValues = true;
      internalValueResult.r2Jurisdiction = this._r2Jurisdiction;
    }
    if (this._webCrawler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCrawler = this._webCrawler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiSearchInstanceSourceParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeItems = undefined;
      this._includeItems = undefined;
      this._prefix = undefined;
      this._r2Jurisdiction = undefined;
      this._webCrawler.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeItems = value.excludeItems;
      this._includeItems = value.includeItems;
      this._prefix = value.prefix;
      this._r2Jurisdiction = value.r2Jurisdiction;
      this._webCrawler.internalValue = value.webCrawler;
    }
  }

  // exclude_items - computed: true, optional: true, required: false
  private _excludeItems?: string[]; 
  public get excludeItems() {
    return this.getListAttribute('exclude_items');
  }
  public set excludeItems(value: string[]) {
    this._excludeItems = value;
  }
  public resetExcludeItems() {
    this._excludeItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeItemsInput() {
    return this._excludeItems;
  }

  // include_items - computed: true, optional: true, required: false
  private _includeItems?: string[]; 
  public get includeItems() {
    return this.getListAttribute('include_items');
  }
  public set includeItems(value: string[]) {
    this._includeItems = value;
  }
  public resetIncludeItems() {
    this._includeItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeItemsInput() {
    return this._includeItems;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // r2_jurisdiction - computed: true, optional: true, required: false
  private _r2Jurisdiction?: string; 
  public get r2Jurisdiction() {
    return this.getStringAttribute('r2_jurisdiction');
  }
  public set r2Jurisdiction(value: string) {
    this._r2Jurisdiction = value;
  }
  public resetR2Jurisdiction() {
    this._r2Jurisdiction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get r2JurisdictionInput() {
    return this._r2Jurisdiction;
  }

  // web_crawler - computed: true, optional: true, required: false
  private _webCrawler = new AiSearchInstanceSourceParamsWebCrawlerOutputReference(this, "web_crawler");
  public get webCrawler() {
    return this._webCrawler;
  }
  public putWebCrawler(value: AiSearchInstanceSourceParamsWebCrawler) {
    this._webCrawler.internalValue = value;
  }
  public resetWebCrawler() {
    this._webCrawler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCrawlerInput() {
    return this._webCrawler.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance cloudflare_ai_search_instance}
*/
export class AiSearchInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ai_search_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiSearchInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiSearchInstance to import
  * @param importFromId The id of the existing AiSearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiSearchInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/ai_search_instance cloudflare_ai_search_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiSearchInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AiSearchInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ai_search_instance',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.22.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._aiGatewayId = config.aiGatewayId;
    this._aisearchModel = config.aisearchModel;
    this._cache = config.cache;
    this._cacheThreshold = config.cacheThreshold;
    this._cacheTtl = config.cacheTtl;
    this._chunk = config.chunk;
    this._chunkOverlap = config.chunkOverlap;
    this._chunkSize = config.chunkSize;
    this._customMetadata.internalValue = config.customMetadata;
    this._embeddingModel = config.embeddingModel;
    this._fusionMethod = config.fusionMethod;
    this._hybridSearchEnabled = config.hybridSearchEnabled;
    this._id = config.id;
    this._indexMethod.internalValue = config.indexMethod;
    this._indexingOptions.internalValue = config.indexingOptions;
    this._maxNumResults = config.maxNumResults;
    this._metadata.internalValue = config.metadata;
    this._paused = config.paused;
    this._publicEndpointParams.internalValue = config.publicEndpointParams;
    this._reranking = config.reranking;
    this._rerankingModel = config.rerankingModel;
    this._retrievalOptions.internalValue = config.retrievalOptions;
    this._rewriteModel = config.rewriteModel;
    this._rewriteQuery = config.rewriteQuery;
    this._scoreThreshold = config.scoreThreshold;
    this._source = config.source;
    this._sourceParams.internalValue = config.sourceParams;
    this._summarization = config.summarization;
    this._summarizationModel = config.summarizationModel;
    this._syncInterval = config.syncInterval;
    this._systemPromptAisearch = config.systemPromptAisearch;
    this._systemPromptIndexSummarization = config.systemPromptIndexSummarization;
    this._systemPromptRewriteQuery = config.systemPromptRewriteQuery;
    this._tokenId = config.tokenId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // ai_gateway_id - computed: true, optional: true, required: false
  private _aiGatewayId?: string; 
  public get aiGatewayId() {
    return this.getStringAttribute('ai_gateway_id');
  }
  public set aiGatewayId(value: string) {
    this._aiGatewayId = value;
  }
  public resetAiGatewayId() {
    this._aiGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiGatewayIdInput() {
    return this._aiGatewayId;
  }

  // aisearch_model - computed: true, optional: true, required: false
  private _aisearchModel?: string; 
  public get aisearchModel() {
    return this.getStringAttribute('aisearch_model');
  }
  public set aisearchModel(value: string) {
    this._aisearchModel = value;
  }
  public resetAisearchModel() {
    this._aisearchModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aisearchModelInput() {
    return this._aisearchModel;
  }

  // cache - computed: true, optional: true, required: false
  private _cache?: boolean | cdktf.IResolvable; 
  public get cache() {
    return this.getBooleanAttribute('cache');
  }
  public set cache(value: boolean | cdktf.IResolvable) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // cache_threshold - computed: true, optional: true, required: false
  private _cacheThreshold?: string; 
  public get cacheThreshold() {
    return this.getStringAttribute('cache_threshold');
  }
  public set cacheThreshold(value: string) {
    this._cacheThreshold = value;
  }
  public resetCacheThreshold() {
    this._cacheThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheThresholdInput() {
    return this._cacheThreshold;
  }

  // cache_ttl - computed: true, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // chunk - computed: true, optional: true, required: false
  private _chunk?: boolean | cdktf.IResolvable; 
  public get chunk() {
    return this.getBooleanAttribute('chunk');
  }
  public set chunk(value: boolean | cdktf.IResolvable) {
    this._chunk = value;
  }
  public resetChunk() {
    this._chunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkInput() {
    return this._chunk;
  }

  // chunk_overlap - computed: true, optional: true, required: false
  private _chunkOverlap?: number; 
  public get chunkOverlap() {
    return this.getNumberAttribute('chunk_overlap');
  }
  public set chunkOverlap(value: number) {
    this._chunkOverlap = value;
  }
  public resetChunkOverlap() {
    this._chunkOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkOverlapInput() {
    return this._chunkOverlap;
  }

  // chunk_size - computed: true, optional: true, required: false
  private _chunkSize?: number; 
  public get chunkSize() {
    return this.getNumberAttribute('chunk_size');
  }
  public set chunkSize(value: number) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // custom_metadata - computed: false, optional: true, required: false
  private _customMetadata = new AiSearchInstanceCustomMetadataList(this, "custom_metadata", false);
  public get customMetadata() {
    return this._customMetadata;
  }
  public putCustomMetadata(value: AiSearchInstanceCustomMetadata[] | cdktf.IResolvable) {
    this._customMetadata.internalValue = value;
  }
  public resetCustomMetadata() {
    this._customMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataInput() {
    return this._customMetadata.internalValue;
  }

  // embedding_model - computed: true, optional: true, required: false
  private _embeddingModel?: string; 
  public get embeddingModel() {
    return this.getStringAttribute('embedding_model');
  }
  public set embeddingModel(value: string) {
    this._embeddingModel = value;
  }
  public resetEmbeddingModel() {
    this._embeddingModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelInput() {
    return this._embeddingModel;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getNumberAttribute('engine_version');
  }

  // fusion_method - computed: true, optional: true, required: false
  private _fusionMethod?: string; 
  public get fusionMethod() {
    return this.getStringAttribute('fusion_method');
  }
  public set fusionMethod(value: string) {
    this._fusionMethod = value;
  }
  public resetFusionMethod() {
    this._fusionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fusionMethodInput() {
    return this._fusionMethod;
  }

  // hybrid_search_enabled - computed: true, optional: true, required: false
  private _hybridSearchEnabled?: boolean | cdktf.IResolvable; 
  public get hybridSearchEnabled() {
    return this.getBooleanAttribute('hybrid_search_enabled');
  }
  public set hybridSearchEnabled(value: boolean | cdktf.IResolvable) {
    this._hybridSearchEnabled = value;
  }
  public resetHybridSearchEnabled() {
    this._hybridSearchEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridSearchEnabledInput() {
    return this._hybridSearchEnabled;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // index_method - computed: true, optional: true, required: false
  private _indexMethod = new AiSearchInstanceIndexMethodOutputReference(this, "index_method");
  public get indexMethod() {
    return this._indexMethod;
  }
  public putIndexMethod(value: AiSearchInstanceIndexMethod) {
    this._indexMethod.internalValue = value;
  }
  public resetIndexMethod() {
    this._indexMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexMethodInput() {
    return this._indexMethod.internalValue;
  }

  // indexing_options - computed: true, optional: true, required: false
  private _indexingOptions = new AiSearchInstanceIndexingOptionsOutputReference(this, "indexing_options");
  public get indexingOptions() {
    return this._indexingOptions;
  }
  public putIndexingOptions(value: AiSearchInstanceIndexingOptions) {
    this._indexingOptions.internalValue = value;
  }
  public resetIndexingOptions() {
    this._indexingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingOptionsInput() {
    return this._indexingOptions.internalValue;
  }

  // last_activity - computed: true, optional: false, required: false
  public get lastActivity() {
    return this.getStringAttribute('last_activity');
  }

  // max_num_results - computed: true, optional: true, required: false
  private _maxNumResults?: number; 
  public get maxNumResults() {
    return this.getNumberAttribute('max_num_results');
  }
  public set maxNumResults(value: number) {
    this._maxNumResults = value;
  }
  public resetMaxNumResults() {
    this._maxNumResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumResultsInput() {
    return this._maxNumResults;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AiSearchInstanceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AiSearchInstanceMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // public_endpoint_id - computed: true, optional: false, required: false
  public get publicEndpointId() {
    return this.getStringAttribute('public_endpoint_id');
  }

  // public_endpoint_params - computed: true, optional: true, required: false
  private _publicEndpointParams = new AiSearchInstancePublicEndpointParamsOutputReference(this, "public_endpoint_params");
  public get publicEndpointParams() {
    return this._publicEndpointParams;
  }
  public putPublicEndpointParams(value: AiSearchInstancePublicEndpointParams) {
    this._publicEndpointParams.internalValue = value;
  }
  public resetPublicEndpointParams() {
    this._publicEndpointParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicEndpointParamsInput() {
    return this._publicEndpointParams.internalValue;
  }

  // reranking - computed: true, optional: true, required: false
  private _reranking?: boolean | cdktf.IResolvable; 
  public get reranking() {
    return this.getBooleanAttribute('reranking');
  }
  public set reranking(value: boolean | cdktf.IResolvable) {
    this._reranking = value;
  }
  public resetReranking() {
    this._reranking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rerankingInput() {
    return this._reranking;
  }

  // reranking_model - computed: true, optional: true, required: false
  private _rerankingModel?: string; 
  public get rerankingModel() {
    return this.getStringAttribute('reranking_model');
  }
  public set rerankingModel(value: string) {
    this._rerankingModel = value;
  }
  public resetRerankingModel() {
    this._rerankingModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rerankingModelInput() {
    return this._rerankingModel;
  }

  // retrieval_options - computed: true, optional: true, required: false
  private _retrievalOptions = new AiSearchInstanceRetrievalOptionsOutputReference(this, "retrieval_options");
  public get retrievalOptions() {
    return this._retrievalOptions;
  }
  public putRetrievalOptions(value: AiSearchInstanceRetrievalOptions) {
    this._retrievalOptions.internalValue = value;
  }
  public resetRetrievalOptions() {
    this._retrievalOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalOptionsInput() {
    return this._retrievalOptions.internalValue;
  }

  // rewrite_model - computed: true, optional: true, required: false
  private _rewriteModel?: string; 
  public get rewriteModel() {
    return this.getStringAttribute('rewrite_model');
  }
  public set rewriteModel(value: string) {
    this._rewriteModel = value;
  }
  public resetRewriteModel() {
    this._rewriteModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteModelInput() {
    return this._rewriteModel;
  }

  // rewrite_query - computed: true, optional: true, required: false
  private _rewriteQuery?: boolean | cdktf.IResolvable; 
  public get rewriteQuery() {
    return this.getBooleanAttribute('rewrite_query');
  }
  public set rewriteQuery(value: boolean | cdktf.IResolvable) {
    this._rewriteQuery = value;
  }
  public resetRewriteQuery() {
    this._rewriteQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteQueryInput() {
    return this._rewriteQuery;
  }

  // score_threshold - computed: true, optional: true, required: false
  private _scoreThreshold?: number; 
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }
  public set scoreThreshold(value: number) {
    this._scoreThreshold = value;
  }
  public resetScoreThreshold() {
    this._scoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreThresholdInput() {
    return this._scoreThreshold;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_params - computed: true, optional: true, required: false
  private _sourceParams = new AiSearchInstanceSourceParamsOutputReference(this, "source_params");
  public get sourceParams() {
    return this._sourceParams;
  }
  public putSourceParams(value: AiSearchInstanceSourceParams) {
    this._sourceParams.internalValue = value;
  }
  public resetSourceParams() {
    this._sourceParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceParamsInput() {
    return this._sourceParams.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // summarization - computed: true, optional: true, required: false
  private _summarization?: boolean | cdktf.IResolvable; 
  public get summarization() {
    return this.getBooleanAttribute('summarization');
  }
  public set summarization(value: boolean | cdktf.IResolvable) {
    this._summarization = value;
  }
  public resetSummarization() {
    this._summarization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationInput() {
    return this._summarization;
  }

  // summarization_model - computed: false, optional: true, required: false
  private _summarizationModel?: string; 
  public get summarizationModel() {
    return this.getStringAttribute('summarization_model');
  }
  public set summarizationModel(value: string) {
    this._summarizationModel = value;
  }
  public resetSummarizationModel() {
    this._summarizationModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationModelInput() {
    return this._summarizationModel;
  }

  // sync_interval - computed: true, optional: true, required: false
  private _syncInterval?: number; 
  public get syncInterval() {
    return this.getNumberAttribute('sync_interval');
  }
  public set syncInterval(value: number) {
    this._syncInterval = value;
  }
  public resetSyncInterval() {
    this._syncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalInput() {
    return this._syncInterval;
  }

  // system_prompt_aisearch - computed: false, optional: true, required: false
  private _systemPromptAisearch?: string; 
  public get systemPromptAisearch() {
    return this.getStringAttribute('system_prompt_aisearch');
  }
  public set systemPromptAisearch(value: string) {
    this._systemPromptAisearch = value;
  }
  public resetSystemPromptAisearch() {
    this._systemPromptAisearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPromptAisearchInput() {
    return this._systemPromptAisearch;
  }

  // system_prompt_index_summarization - computed: false, optional: true, required: false
  private _systemPromptIndexSummarization?: string; 
  public get systemPromptIndexSummarization() {
    return this.getStringAttribute('system_prompt_index_summarization');
  }
  public set systemPromptIndexSummarization(value: string) {
    this._systemPromptIndexSummarization = value;
  }
  public resetSystemPromptIndexSummarization() {
    this._systemPromptIndexSummarization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPromptIndexSummarizationInput() {
    return this._systemPromptIndexSummarization;
  }

  // system_prompt_rewrite_query - computed: false, optional: true, required: false
  private _systemPromptRewriteQuery?: string; 
  public get systemPromptRewriteQuery() {
    return this.getStringAttribute('system_prompt_rewrite_query');
  }
  public set systemPromptRewriteQuery(value: string) {
    this._systemPromptRewriteQuery = value;
  }
  public resetSystemPromptRewriteQuery() {
    this._systemPromptRewriteQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPromptRewriteQueryInput() {
    return this._systemPromptRewriteQuery;
  }

  // token_id - computed: false, optional: true, required: false
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  public resetTokenId() {
    this._tokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vectorize_name - computed: true, optional: false, required: false
  public get vectorizeName() {
    return this.getStringAttribute('vectorize_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      ai_gateway_id: cdktf.stringToTerraform(this._aiGatewayId),
      aisearch_model: cdktf.stringToTerraform(this._aisearchModel),
      cache: cdktf.booleanToTerraform(this._cache),
      cache_threshold: cdktf.stringToTerraform(this._cacheThreshold),
      cache_ttl: cdktf.numberToTerraform(this._cacheTtl),
      chunk: cdktf.booleanToTerraform(this._chunk),
      chunk_overlap: cdktf.numberToTerraform(this._chunkOverlap),
      chunk_size: cdktf.numberToTerraform(this._chunkSize),
      custom_metadata: cdktf.listMapper(aiSearchInstanceCustomMetadataToTerraform, false)(this._customMetadata.internalValue),
      embedding_model: cdktf.stringToTerraform(this._embeddingModel),
      fusion_method: cdktf.stringToTerraform(this._fusionMethod),
      hybrid_search_enabled: cdktf.booleanToTerraform(this._hybridSearchEnabled),
      id: cdktf.stringToTerraform(this._id),
      index_method: aiSearchInstanceIndexMethodToTerraform(this._indexMethod.internalValue),
      indexing_options: aiSearchInstanceIndexingOptionsToTerraform(this._indexingOptions.internalValue),
      max_num_results: cdktf.numberToTerraform(this._maxNumResults),
      metadata: aiSearchInstanceMetadataToTerraform(this._metadata.internalValue),
      paused: cdktf.booleanToTerraform(this._paused),
      public_endpoint_params: aiSearchInstancePublicEndpointParamsToTerraform(this._publicEndpointParams.internalValue),
      reranking: cdktf.booleanToTerraform(this._reranking),
      reranking_model: cdktf.stringToTerraform(this._rerankingModel),
      retrieval_options: aiSearchInstanceRetrievalOptionsToTerraform(this._retrievalOptions.internalValue),
      rewrite_model: cdktf.stringToTerraform(this._rewriteModel),
      rewrite_query: cdktf.booleanToTerraform(this._rewriteQuery),
      score_threshold: cdktf.numberToTerraform(this._scoreThreshold),
      source: cdktf.stringToTerraform(this._source),
      source_params: aiSearchInstanceSourceParamsToTerraform(this._sourceParams.internalValue),
      summarization: cdktf.booleanToTerraform(this._summarization),
      summarization_model: cdktf.stringToTerraform(this._summarizationModel),
      sync_interval: cdktf.numberToTerraform(this._syncInterval),
      system_prompt_aisearch: cdktf.stringToTerraform(this._systemPromptAisearch),
      system_prompt_index_summarization: cdktf.stringToTerraform(this._systemPromptIndexSummarization),
      system_prompt_rewrite_query: cdktf.stringToTerraform(this._systemPromptRewriteQuery),
      token_id: cdktf.stringToTerraform(this._tokenId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ai_gateway_id: {
        value: cdktf.stringToHclTerraform(this._aiGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aisearch_model: {
        value: cdktf.stringToHclTerraform(this._aisearchModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache: {
        value: cdktf.booleanToHclTerraform(this._cache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_threshold: {
        value: cdktf.stringToHclTerraform(this._cacheThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_ttl: {
        value: cdktf.numberToHclTerraform(this._cacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      chunk: {
        value: cdktf.booleanToHclTerraform(this._chunk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      chunk_overlap: {
        value: cdktf.numberToHclTerraform(this._chunkOverlap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      chunk_size: {
        value: cdktf.numberToHclTerraform(this._chunkSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_metadata: {
        value: cdktf.listMapperHcl(aiSearchInstanceCustomMetadataToHclTerraform, false)(this._customMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiSearchInstanceCustomMetadataList",
      },
      embedding_model: {
        value: cdktf.stringToHclTerraform(this._embeddingModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fusion_method: {
        value: cdktf.stringToHclTerraform(this._fusionMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hybrid_search_enabled: {
        value: cdktf.booleanToHclTerraform(this._hybridSearchEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_method: {
        value: aiSearchInstanceIndexMethodToHclTerraform(this._indexMethod.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiSearchInstanceIndexMethod",
      },
      indexing_options: {
        value: aiSearchInstanceIndexingOptionsToHclTerraform(this._indexingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiSearchInstanceIndexingOptions",
      },
      max_num_results: {
        value: cdktf.numberToHclTerraform(this._maxNumResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: aiSearchInstanceMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiSearchInstanceMetadata",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_endpoint_params: {
        value: aiSearchInstancePublicEndpointParamsToHclTerraform(this._publicEndpointParams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiSearchInstancePublicEndpointParams",
      },
      reranking: {
        value: cdktf.booleanToHclTerraform(this._reranking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reranking_model: {
        value: cdktf.stringToHclTerraform(this._rerankingModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retrieval_options: {
        value: aiSearchInstanceRetrievalOptionsToHclTerraform(this._retrievalOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiSearchInstanceRetrievalOptions",
      },
      rewrite_model: {
        value: cdktf.stringToHclTerraform(this._rewriteModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_query: {
        value: cdktf.booleanToHclTerraform(this._rewriteQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      score_threshold: {
        value: cdktf.numberToHclTerraform(this._scoreThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_params: {
        value: aiSearchInstanceSourceParamsToHclTerraform(this._sourceParams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiSearchInstanceSourceParams",
      },
      summarization: {
        value: cdktf.booleanToHclTerraform(this._summarization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      summarization_model: {
        value: cdktf.stringToHclTerraform(this._summarizationModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_interval: {
        value: cdktf.numberToHclTerraform(this._syncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_prompt_aisearch: {
        value: cdktf.stringToHclTerraform(this._systemPromptAisearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_prompt_index_summarization: {
        value: cdktf.stringToHclTerraform(this._systemPromptIndexSummarization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_prompt_rewrite_query: {
        value: cdktf.stringToHclTerraform(this._systemPromptRewriteQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_id: {
        value: cdktf.stringToHclTerraform(this._tokenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
