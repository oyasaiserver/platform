// https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/data-sources/ai_search_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareAiSearchNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/data-sources/ai_search_namespace#account_id DataCloudflareAiSearchNamespace#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/data-sources/ai_search_namespace#name DataCloudflareAiSearchNamespace#name}
  */
  readonly name: string;
}
export interface DataCloudflareAiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint {
}

export function dataCloudflareAiSearchNamespacePublicEndpointParamsChatCompletionsEndpointToTerraform(struct?: DataCloudflareAiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchNamespacePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct?: DataCloudflareAiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint | undefined) {
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
export interface DataCloudflareAiSearchNamespacePublicEndpointParamsMcp {
}

export function dataCloudflareAiSearchNamespacePublicEndpointParamsMcpToTerraform(struct?: DataCloudflareAiSearchNamespacePublicEndpointParamsMcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchNamespacePublicEndpointParamsMcpToHclTerraform(struct?: DataCloudflareAiSearchNamespacePublicEndpointParamsMcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchNamespacePublicEndpointParamsMcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchNamespacePublicEndpointParamsMcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchNamespacePublicEndpointParamsMcp | undefined) {
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
export interface DataCloudflareAiSearchNamespacePublicEndpointParamsRateLimit {
}

export function dataCloudflareAiSearchNamespacePublicEndpointParamsRateLimitToTerraform(struct?: DataCloudflareAiSearchNamespacePublicEndpointParamsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchNamespacePublicEndpointParamsRateLimitToHclTerraform(struct?: DataCloudflareAiSearchNamespacePublicEndpointParamsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchNamespacePublicEndpointParamsRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchNamespacePublicEndpointParamsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchNamespacePublicEndpointParamsRateLimit | undefined) {
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
export interface DataCloudflareAiSearchNamespacePublicEndpointParamsSearchEndpoint {
}

export function dataCloudflareAiSearchNamespacePublicEndpointParamsSearchEndpointToTerraform(struct?: DataCloudflareAiSearchNamespacePublicEndpointParamsSearchEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchNamespacePublicEndpointParamsSearchEndpointToHclTerraform(struct?: DataCloudflareAiSearchNamespacePublicEndpointParamsSearchEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchNamespacePublicEndpointParamsSearchEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchNamespacePublicEndpointParamsSearchEndpoint | undefined) {
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
export interface DataCloudflareAiSearchNamespacePublicEndpointParams {
}

export function dataCloudflareAiSearchNamespacePublicEndpointParamsToTerraform(struct?: DataCloudflareAiSearchNamespacePublicEndpointParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiSearchNamespacePublicEndpointParamsToHclTerraform(struct?: DataCloudflareAiSearchNamespacePublicEndpointParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiSearchNamespacePublicEndpointParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiSearchNamespacePublicEndpointParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiSearchNamespacePublicEndpointParams | undefined) {
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
  private _chatCompletionsEndpoint = new DataCloudflareAiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference(this, "chat_completions_endpoint");
  public get chatCompletionsEndpoint() {
    return this._chatCompletionsEndpoint;
  }

  // custom_domains - computed: true, optional: false, required: false
  public get customDomains() {
    return this.getListAttribute('custom_domains');
  }

  // default_domain_enabled - computed: true, optional: false, required: false
  public get defaultDomainEnabled() {
    return this.getBooleanAttribute('default_domain_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // instances_allowed - computed: true, optional: false, required: false
  public get instancesAllowed() {
    return this.getListAttribute('instances_allowed');
  }

  // mcp - computed: true, optional: false, required: false
  private _mcp = new DataCloudflareAiSearchNamespacePublicEndpointParamsMcpOutputReference(this, "mcp");
  public get mcp() {
    return this._mcp;
  }

  // rate_limit - computed: true, optional: false, required: false
  private _rateLimit = new DataCloudflareAiSearchNamespacePublicEndpointParamsRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }

  // search_endpoint - computed: true, optional: false, required: false
  private _searchEndpoint = new DataCloudflareAiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference(this, "search_endpoint");
  public get searchEndpoint() {
    return this._searchEndpoint;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/data-sources/ai_search_namespace cloudflare_ai_search_namespace}
*/
export class DataCloudflareAiSearchNamespace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ai_search_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareAiSearchNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareAiSearchNamespace to import
  * @param importFromId The id of the existing DataCloudflareAiSearchNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/data-sources/ai_search_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareAiSearchNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/data-sources/ai_search_namespace cloudflare_ai_search_namespace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareAiSearchNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareAiSearchNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ai_search_namespace',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.24.0'
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
    this._name = config.name;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // public_endpoint_id - computed: true, optional: false, required: false
  public get publicEndpointId() {
    return this.getStringAttribute('public_endpoint_id');
  }

  // public_endpoint_params - computed: true, optional: false, required: false
  private _publicEndpointParams = new DataCloudflareAiSearchNamespacePublicEndpointParamsOutputReference(this, "public_endpoint_params");
  public get publicEndpointParams() {
    return this._publicEndpointParams;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
