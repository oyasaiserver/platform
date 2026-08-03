// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/ai_search_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareAiSearchInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/ai_search_instance#account_id DataCloudflareAiSearchInstance#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/ai_search_instance#filter DataCloudflareAiSearchInstance#filter}
  */
  readonly filter?: DataCloudflareAiSearchInstanceFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/ai_search_instance#id DataCloudflareAiSearchInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataCloudflareAiSearchInstanceCustomMetadata {
}

export function dataCloudflareAiSearchInstanceCustomMetadataToTerraform(struct?: DataCloudflareAiSearchInstanceCustomMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstanceCustomMetadataToHclTerraform(struct?: DataCloudflareAiSearchInstanceCustomMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstanceCustomMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareAiSearchInstanceCustomMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceCustomMetadata | undefined) {
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

export class DataCloudflareAiSearchInstanceCustomMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiSearchInstanceCustomMetadataOutputReference {
    return new DataCloudflareAiSearchInstanceCustomMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiSearchInstanceFilter {
  /**
  * Filter by namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/ai_search_instance#namespace DataCloudflareAiSearchInstance#namespace}
  */
  readonly namespace?: string;
  /**
  * Field to order results by.
  * Available values: "created_at".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/ai_search_instance#order_by DataCloudflareAiSearchInstance#order_by}
  */
  readonly orderBy?: string;
  /**
  * Order direction.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/ai_search_instance#order_by_direction DataCloudflareAiSearchInstance#order_by_direction}
  */
  readonly orderByDirection?: string;
  /**
  * Filter instances whose id contains this string (case-insensitive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/ai_search_instance#search DataCloudflareAiSearchInstance#search}
  */
  readonly search?: string;
}

export function dataCloudflareAiSearchInstanceFilterToTerraform(struct?: DataCloudflareAiSearchInstanceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
    order_by_direction: cdktf.stringToTerraform(struct!.orderByDirection),
    search: cdktf.stringToTerraform(struct!.search),
  }
}


export function dataCloudflareAiSearchInstanceFilterToHclTerraform(struct?: DataCloudflareAiSearchInstanceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_by: {
      value: cdktf.stringToHclTerraform(struct!.orderBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_by_direction: {
      value: cdktf.stringToHclTerraform(struct!.orderByDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareAiSearchInstanceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstanceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    if (this._orderByDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderByDirection = this._orderByDirection;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._orderBy = undefined;
      this._orderByDirection = undefined;
      this._search = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._orderBy = value.orderBy;
      this._orderByDirection = value.orderByDirection;
      this._search = value.search;
    }
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
}
export interface DataCloudflareAiSearchInstanceIndexMethod {
}

export function dataCloudflareAiSearchInstanceIndexMethodToTerraform(struct?: DataCloudflareAiSearchInstanceIndexMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstanceIndexMethodToHclTerraform(struct?: DataCloudflareAiSearchInstanceIndexMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstanceIndexMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstanceIndexMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceIndexMethod | undefined) {
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
export interface DataCloudflareAiSearchInstanceIndexingOptions {
}

export function dataCloudflareAiSearchInstanceIndexingOptionsToTerraform(struct?: DataCloudflareAiSearchInstanceIndexingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstanceIndexingOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstanceIndexingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstanceIndexingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstanceIndexingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceIndexingOptions | undefined) {
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
export interface DataCloudflareAiSearchInstanceMetadata {
}

export function dataCloudflareAiSearchInstanceMetadataToTerraform(struct?: DataCloudflareAiSearchInstanceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstanceMetadataToHclTerraform(struct?: DataCloudflareAiSearchInstanceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstanceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstanceMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceMetadata | undefined) {
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
export interface DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint {
}

export function dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpoint | undefined) {
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
export interface DataCloudflareAiSearchInstancePublicEndpointParamsMcp {
}

export function dataCloudflareAiSearchInstancePublicEndpointParamsMcpToTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsMcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancePublicEndpointParamsMcpToHclTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsMcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancePublicEndpointParamsMcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancePublicEndpointParamsMcp | undefined) {
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
export interface DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit {
}

export function dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToHclTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancePublicEndpointParamsRateLimit | undefined) {
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
export interface DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint {
}

export function dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpoint | undefined) {
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
export interface DataCloudflareAiSearchInstancePublicEndpointParams {
}

export function dataCloudflareAiSearchInstancePublicEndpointParamsToTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstancePublicEndpointParamsToHclTerraform(struct?: DataCloudflareAiSearchInstancePublicEndpointParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstancePublicEndpointParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstancePublicEndpointParams | undefined) {
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
  private _chatCompletionsEndpoint = new DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(this, "chat_completions_endpoint");
  public get chatCompletionsEndpoint() {
    return this._chatCompletionsEndpoint;
  }

  // custom_domains - computed: true, optional: false, required: false
  public get customDomains() {
    return this.getListAttribute('custom_domains');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // mcp - computed: true, optional: false, required: false
  private _mcp = new DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference(this, "mcp");
  public get mcp() {
    return this._mcp;
  }

  // rate_limit - computed: true, optional: false, required: false
  private _rateLimit = new DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }

  // search_endpoint - computed: true, optional: false, required: false
  private _searchEndpoint = new DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(this, "search_endpoint");
  public get searchEndpoint() {
    return this._searchEndpoint;
  }
}
export interface DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy {
}

export function dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToTerraform(struct?: DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToHclTerraform(struct?: DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceRetrievalOptionsBoostBy | undefined) {
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

export class DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference {
    return new DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiSearchInstanceRetrievalOptions {
}

export function dataCloudflareAiSearchInstanceRetrievalOptionsToTerraform(struct?: DataCloudflareAiSearchInstanceRetrievalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstanceRetrievalOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstanceRetrievalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstanceRetrievalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceRetrievalOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boost_by - computed: true, optional: false, required: false
  private _boostBy = new DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList(this, "boost_by", false);
  public get boostBy() {
    return this._boostBy;
  }

  // keyword_match_mode - computed: true, optional: false, required: false
  public get keywordMatchMode() {
    return this.getStringAttribute('keyword_match_mode');
  }
}
export interface DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector {
}

export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelector | undefined) {
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

export class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference {
    return new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions {
}

export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_selector - computed: true, optional: false, required: false
  private _contentSelector = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(this, "content_selector", false);
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
export interface DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions {
}

export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptions | undefined) {
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
export interface DataCloudflareAiSearchInstanceSourceParamsWebCrawler {
}

export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToHclTerraform(struct?: DataCloudflareAiSearchInstanceSourceParamsWebCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstanceSourceParamsWebCrawler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceSourceParamsWebCrawler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parse_options - computed: true, optional: false, required: false
  private _parseOptions = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(this, "parse_options");
  public get parseOptions() {
    return this._parseOptions;
  }

  // parse_type - computed: true, optional: false, required: false
  public get parseType() {
    return this.getStringAttribute('parse_type');
  }

  // store_options - computed: true, optional: false, required: false
  private _storeOptions = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(this, "store_options");
  public get storeOptions() {
    return this._storeOptions;
  }
}
export interface DataCloudflareAiSearchInstanceSourceParams {
}

export function dataCloudflareAiSearchInstanceSourceParamsToTerraform(struct?: DataCloudflareAiSearchInstanceSourceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchInstanceSourceParamsToHclTerraform(struct?: DataCloudflareAiSearchInstanceSourceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchInstanceSourceParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchInstanceSourceParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchInstanceSourceParams | undefined) {
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
  private _webCrawler = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference(this, "web_crawler");
  public get webCrawler() {
    return this._webCrawler;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/ai_search_instance cloudflare_ai_search_instance}
*/
export class DataCloudflareAiSearchInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ai_search_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareAiSearchInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareAiSearchInstance to import
  * @param importFromId The id of the existing DataCloudflareAiSearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/ai_search_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareAiSearchInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/data-sources/ai_search_instance cloudflare_ai_search_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareAiSearchInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareAiSearchInstanceConfig = {}) {
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
    this._filter.internalValue = config.filter;
    this._id = config.id;
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
  private _customMetadata = new DataCloudflareAiSearchInstanceCustomMetadataList(this, "custom_metadata", false);
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareAiSearchInstanceFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareAiSearchInstanceFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // fusion_method - computed: true, optional: false, required: false
  public get fusionMethod() {
    return this.getStringAttribute('fusion_method');
  }

  // hybrid_search_enabled - computed: true, optional: false, required: false
  public get hybridSearchEnabled() {
    return this.getBooleanAttribute('hybrid_search_enabled');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // index_method - computed: true, optional: false, required: false
  private _indexMethod = new DataCloudflareAiSearchInstanceIndexMethodOutputReference(this, "index_method");
  public get indexMethod() {
    return this._indexMethod;
  }

  // indexing_options - computed: true, optional: false, required: false
  private _indexingOptions = new DataCloudflareAiSearchInstanceIndexingOptionsOutputReference(this, "indexing_options");
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
  private _metadata = new DataCloudflareAiSearchInstanceMetadataOutputReference(this, "metadata");
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
  private _publicEndpointParams = new DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference(this, "public_endpoint_params");
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
  private _retrievalOptions = new DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference(this, "retrieval_options");
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
  private _sourceParams = new DataCloudflareAiSearchInstanceSourceParamsOutputReference(this, "source_params");
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareAiSearchInstanceFilterToTerraform(this._filter.internalValue),
      id: cdktf.stringToTerraform(this._id),
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
      filter: {
        value: dataCloudflareAiSearchInstanceFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareAiSearchInstanceFilter",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
