// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_search_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareAiSearchInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_search_instances#account_id DataCloudflareAiSearchInstances#account_id}
  */
  readonly accountId?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_search_instances#max_items DataCloudflareAiSearchInstances#max_items}
  */
  readonly maxItems?: number;
  /**
  * Filter by namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_search_instances#namespace DataCloudflareAiSearchInstances#namespace}
  */
  readonly namespace?: string;
  /**
  * Field to order results by.
  * Available values: "created_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_search_instances#order_by DataCloudflareAiSearchInstances#order_by}
  */
  readonly orderBy?: string;
  /**
  * Order direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_search_instances#order_by_direction DataCloudflareAiSearchInstances#order_by_direction}
  */
  readonly orderByDirection?: string;
  /**
  * Filter instances whose id contains this string (case-insensitive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_search_instances#search DataCloudflareAiSearchInstances#search}
  */
  readonly search?: string;
}
export interface DataCloudflareAiSearchInstancesResultCustomMetadata {
}

export function dataCloudflareAiSearchInstancesResultCustomMetadataToTerraform(struct?: DataCloudflareAiSearchInstancesResultCustomMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultCustomMetadataToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultCustomMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultCustomMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultCustomMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
}

export class DataCloudflareAiSearchInstancesResultCustomMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference {
    return new DataCloudflareAiSearchInstancesResultCustomMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiSearchInstancesResultIndexMethod {
}

export function dataCloudflareAiSearchInstancesResultIndexMethodToTerraform(struct?: DataCloudflareAiSearchInstancesResultIndexMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultIndexMethodToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultIndexMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultIndexMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultIndexMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultIndexMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keyword - computed: true, optional: false, required: false
  public get keyword() {
    return this.getBooleanAttribute('keyword');
  }

  // vector - computed: true, optional: false, required: false
  public get vector() {
    return this.getBooleanAttribute('vector');
  }
}
export interface DataCloudflareAiSearchInstancesResultIndexingOptions {
}

export function dataCloudflareAiSearchInstancesResultIndexingOptionsToTerraform(struct?: DataCloudflareAiSearchInstancesResultIndexingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultIndexingOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultIndexingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultIndexingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultIndexingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keyword_tokenizer - computed: true, optional: false, required: false
  public get keywordTokenizer() {
    return this.getStringAttribute('keyword_tokenizer');
  }
}
export interface DataCloudflareAiSearchInstancesResultMetadata {
}

export function dataCloudflareAiSearchInstancesResultMetadataToTerraform(struct?: DataCloudflareAiSearchInstancesResultMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultMetadataToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_from_aisearch_wizard - computed: true, optional: false, required: false
  public get createdFromAisearchWizard() {
    return this.getBooleanAttribute('created_from_aisearch_wizard');
  }

  // worker_domain - computed: true, optional: false, required: false
  public get workerDomain() {
    return this.getStringAttribute('worker_domain');
  }
}
export interface DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint {
}

export function dataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointToTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export interface DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp {
}

export function dataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpToTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export interface DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit {
}

export function dataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitToTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period_ms - computed: true, optional: false, required: false
  public get periodMs() {
    return this.getNumberAttribute('period_ms');
  }

  // requests - computed: true, optional: false, required: false
  public get requests() {
    return this.getNumberAttribute('requests');
  }

  // technique - computed: true, optional: false, required: false
  public get technique() {
    return this.getStringAttribute('technique');
  }
}
export interface DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint {
}

export function dataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointToTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export interface DataCloudflareAiSearchInstancesResultPublicEndpointParams {
}

export function dataCloudflareAiSearchInstancesResultPublicEndpointParamsToTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultPublicEndpointParamsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultPublicEndpointParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultPublicEndpointParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultPublicEndpointParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorized_hosts - computed: true, optional: false, required: false
  public get authorizedHosts() {
    return this.getListAttribute('authorized_hosts');
  }

  // chat_completions_endpoint - computed: true, optional: false, required: false
  private _chatCompletionsEndpoint = new DataCloudflareAiSearchInstancesResultPublicEndpointParamsChatCompletionsEndpointOutputReference(this, "chat_completions_endpoint");
  public get chatCompletionsEndpoint() {
    return this._chatCompletionsEndpoint;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // mcp - computed: true, optional: false, required: false
  private _mcp = new DataCloudflareAiSearchInstancesResultPublicEndpointParamsMcpOutputReference(this, "mcp");
  public get mcp() {
    return this._mcp;
  }

  // rate_limit - computed: true, optional: false, required: false
  private _rateLimit = new DataCloudflareAiSearchInstancesResultPublicEndpointParamsRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }

  // search_endpoint - computed: true, optional: false, required: false
  private _searchEndpoint = new DataCloudflareAiSearchInstancesResultPublicEndpointParamsSearchEndpointOutputReference(this, "search_endpoint");
  public get searchEndpoint() {
    return this._searchEndpoint;
  }
}
export interface DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostBy {
}

export function dataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByToTerraform(struct?: DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }
}

export class DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference {
    return new DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiSearchInstancesResultRetrievalOptions {
}

export function dataCloudflareAiSearchInstancesResultRetrievalOptionsToTerraform(struct?: DataCloudflareAiSearchInstancesResultRetrievalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultRetrievalOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultRetrievalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultRetrievalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultRetrievalOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boost_by - computed: true, optional: false, required: false
  private _boostBy = new DataCloudflareAiSearchInstancesResultRetrievalOptionsBoostByList(this, "boost_by", false);
  public get boostBy() {
    return this._boostBy;
  }

  // keyword_match_mode - computed: true, optional: false, required: false
  public get keywordMatchMode() {
    return this.getStringAttribute('keyword_match_mode');
  }
}
export interface DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptions {
}

export function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // depth - computed: true, optional: false, required: false
  public get depth() {
    return this.getNumberAttribute('depth');
  }

  // include_external_links - computed: true, optional: false, required: false
  public get includeExternalLinks() {
    return this.getBooleanAttribute('include_external_links');
  }

  // include_subdomains - computed: true, optional: false, required: false
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}
export interface DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelector {
}

export function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference {
    return new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions {
}

export function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_selector - computed: true, optional: false, required: false
  private _contentSelector = new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsContentSelectorList(this, "content_selector", false);
  public get contentSelector() {
    return this._contentSelector;
  }

  // include_headers - computed: true, optional: false, required: false
  private _includeHeaders = new cdktf.StringMap(this, "include_headers");
  public get includeHeaders() {
    return this._includeHeaders;
  }

  // include_images - computed: true, optional: false, required: false
  public get includeImages() {
    return this.getBooleanAttribute('include_images');
  }

  // specific_sitemaps - computed: true, optional: false, required: false
  public get specificSitemaps() {
    return this.getListAttribute('specific_sitemaps');
  }

  // use_browser_rendering - computed: true, optional: false, required: false
  public get useBrowserRendering() {
    return this.getBooleanAttribute('use_browser_rendering');
  }
}
export interface DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions {
}

export function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // r2_jurisdiction - computed: true, optional: false, required: false
  public get r2Jurisdiction() {
    return this.getStringAttribute('r2_jurisdiction');
  }

  // storage_id - computed: true, optional: false, required: false
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
}
export interface DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler {
}

export function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParamsWebCrawler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawl_options - computed: true, optional: false, required: false
  private _crawlOptions = new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerCrawlOptionsOutputReference(this, "crawl_options");
  public get crawlOptions() {
    return this._crawlOptions;
  }

  // parse_options - computed: true, optional: false, required: false
  private _parseOptions = new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerParseOptionsOutputReference(this, "parse_options");
  public get parseOptions() {
    return this._parseOptions;
  }

  // parse_type - computed: true, optional: false, required: false
  public get parseType() {
    return this.getStringAttribute('parse_type');
  }

  // store_options - computed: true, optional: false, required: false
  private _storeOptions = new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerStoreOptionsOutputReference(this, "store_options");
  public get storeOptions() {
    return this._storeOptions;
  }
}
export interface DataCloudflareAiSearchInstancesResultSourceParams {
}

export function dataCloudflareAiSearchInstancesResultSourceParamsToTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultSourceParamsToHclTerraform(struct?: DataCloudflareAiSearchInstancesResultSourceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultSourceParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResultSourceParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResultSourceParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_items - computed: true, optional: false, required: false
  public get excludeItems() {
    return this.getListAttribute('exclude_items');
  }

  // include_items - computed: true, optional: false, required: false
  public get includeItems() {
    return this.getListAttribute('include_items');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // r2_jurisdiction - computed: true, optional: false, required: false
  public get r2Jurisdiction() {
    return this.getStringAttribute('r2_jurisdiction');
  }

  // web_crawler - computed: true, optional: false, required: false
  private _webCrawler = new DataCloudflareAiSearchInstancesResultSourceParamsWebCrawlerOutputReference(this, "web_crawler");
  public get webCrawler() {
    return this._webCrawler;
  }
}
export interface DataCloudflareAiSearchInstancesResult {
}

export function dataCloudflareAiSearchInstancesResultToTerraform(struct?: DataCloudflareAiSearchInstancesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancesResultToHclTerraform(struct?: DataCloudflareAiSearchInstancesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancesResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareAiSearchInstancesResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancesResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ai_gateway_id - computed: true, optional: false, required: false
  public get aiGatewayId() {
    return this.getStringAttribute('ai_gateway_id');
  }

  // aisearch_model - computed: true, optional: false, required: false
  public get aisearchModel() {
    return this.getStringAttribute('aisearch_model');
  }

  // cache - computed: true, optional: false, required: false
  public get cache() {
    return this.getBooleanAttribute('cache');
  }

  // cache_threshold - computed: true, optional: false, required: false
  public get cacheThreshold() {
    return this.getStringAttribute('cache_threshold');
  }

  // cache_ttl - computed: true, optional: false, required: false
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }

  // chunk_overlap - computed: true, optional: false, required: false
  public get chunkOverlap() {
    return this.getNumberAttribute('chunk_overlap');
  }

  // chunk_size - computed: true, optional: false, required: false
  public get chunkSize() {
    return this.getNumberAttribute('chunk_size');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // custom_metadata - computed: true, optional: false, required: false
  private _customMetadata = new DataCloudflareAiSearchInstancesResultCustomMetadataList(this, "custom_metadata", false);
  public get customMetadata() {
    return this._customMetadata;
  }

  // embedding_model - computed: true, optional: false, required: false
  public get embeddingModel() {
    return this.getStringAttribute('embedding_model');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getNumberAttribute('engine_version');
  }

  // fusion_method - computed: true, optional: false, required: false
  public get fusionMethod() {
    return this.getStringAttribute('fusion_method');
  }

  // hybrid_search_enabled - computed: true, optional: false, required: false
  public get hybridSearchEnabled() {
    return this.getBooleanAttribute('hybrid_search_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_method - computed: true, optional: false, required: false
  private _indexMethod = new DataCloudflareAiSearchInstancesResultIndexMethodOutputReference(this, "index_method");
  public get indexMethod() {
    return this._indexMethod;
  }

  // indexing_options - computed: true, optional: false, required: false
  private _indexingOptions = new DataCloudflareAiSearchInstancesResultIndexingOptionsOutputReference(this, "indexing_options");
  public get indexingOptions() {
    return this._indexingOptions;
  }

  // last_activity - computed: true, optional: false, required: false
  public get lastActivity() {
    return this.getStringAttribute('last_activity');
  }

  // max_num_results - computed: true, optional: false, required: false
  public get maxNumResults() {
    return this.getNumberAttribute('max_num_results');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataCloudflareAiSearchInstancesResultMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // public_endpoint_id - computed: true, optional: false, required: false
  public get publicEndpointId() {
    return this.getStringAttribute('public_endpoint_id');
  }

  // public_endpoint_params - computed: true, optional: false, required: false
  private _publicEndpointParams = new DataCloudflareAiSearchInstancesResultPublicEndpointParamsOutputReference(this, "public_endpoint_params");
  public get publicEndpointParams() {
    return this._publicEndpointParams;
  }

  // reranking - computed: true, optional: false, required: false
  public get reranking() {
    return this.getBooleanAttribute('reranking');
  }

  // reranking_model - computed: true, optional: false, required: false
  public get rerankingModel() {
    return this.getStringAttribute('reranking_model');
  }

  // retrieval_options - computed: true, optional: false, required: false
  private _retrievalOptions = new DataCloudflareAiSearchInstancesResultRetrievalOptionsOutputReference(this, "retrieval_options");
  public get retrievalOptions() {
    return this._retrievalOptions;
  }

  // rewrite_model - computed: true, optional: false, required: false
  public get rewriteModel() {
    return this.getStringAttribute('rewrite_model');
  }

  // rewrite_query - computed: true, optional: false, required: false
  public get rewriteQuery() {
    return this.getBooleanAttribute('rewrite_query');
  }

  // score_threshold - computed: true, optional: false, required: false
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_params - computed: true, optional: false, required: false
  private _sourceParams = new DataCloudflareAiSearchInstancesResultSourceParamsOutputReference(this, "source_params");
  public get sourceParams() {
    return this._sourceParams;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sync_interval - computed: true, optional: false, required: false
  public get syncInterval() {
    return this.getNumberAttribute('sync_interval');
  }

  // token_id - computed: true, optional: false, required: false
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataCloudflareAiSearchInstancesResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiSearchInstancesResultOutputReference {
    return new DataCloudflareAiSearchInstancesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_search_instances cloudflare_ai_search_instances}
*/
export class DataCloudflareAiSearchInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ai_search_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareAiSearchInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareAiSearchInstances to import
  * @param importFromId The id of the existing DataCloudflareAiSearchInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_search_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareAiSearchInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_search_instances cloudflare_ai_search_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareAiSearchInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareAiSearchInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ai_search_instances',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
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
    this._maxItems = config.maxItems;
    this._namespace = config.namespace;
    this._orderBy = config.orderBy;
    this._orderByDirection = config.orderByDirection;
    this._search = config.search;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // order_by - computed: true, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // order_by_direction - computed: true, optional: true, required: false
  private _orderByDirection?: string; 
  public get orderByDirection() {
    return this.getStringAttribute('order_by_direction');
  }
  public set orderByDirection(value: string) {
    this._orderByDirection = value;
  }
  public resetOrderByDirection() {
    this._orderByDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByDirectionInput() {
    return this._orderByDirection;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareAiSearchInstancesResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      max_items: cdktf.numberToTerraform(this._maxItems),
      namespace: cdktf.stringToTerraform(this._namespace),
      order_by: cdktf.stringToTerraform(this._orderBy),
      order_by_direction: cdktf.stringToTerraform(this._orderByDirection),
      search: cdktf.stringToTerraform(this._search),
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
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by_direction: {
        value: cdktf.stringToHclTerraform(this._orderByDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
