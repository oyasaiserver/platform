// https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiSearchNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#account_id AiSearchNamespace#account_id}
  */
  readonly accountId: string;
  /**
  * Optional description for the namespace. Max 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#description AiSearchNamespace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#name AiSearchNamespace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#public_endpoint_params AiSearchNamespace#public_endpoint_params}
  */
  readonly publicEndpointParams?: AiSearchNamespacePublicEndpointParams;
}
export interface AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint {
  /**
  * Disable chat completions endpoint for this public endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function aiSearchNamespacePublicEndpointParamsChatCompletionsEndpointToTerraform(struct?: AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function aiSearchNamespacePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct?: AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable): any {
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

export class AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint | cdktf.IResolvable | undefined) {
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
export interface AiSearchNamespacePublicEndpointParamsMcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#description AiSearchNamespace#description}
  */
  readonly description?: string;
  /**
  * Disable MCP endpoint for this public endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function aiSearchNamespacePublicEndpointParamsMcpToTerraform(struct?: AiSearchNamespacePublicEndpointParamsMcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function aiSearchNamespacePublicEndpointParamsMcpToHclTerraform(struct?: AiSearchNamespacePublicEndpointParamsMcp | cdktf.IResolvable): any {
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

export class AiSearchNamespacePublicEndpointParamsMcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchNamespacePublicEndpointParamsMcp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiSearchNamespacePublicEndpointParamsMcp | cdktf.IResolvable | undefined) {
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
export interface AiSearchNamespacePublicEndpointParamsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#period_ms AiSearchNamespace#period_ms}
  */
  readonly periodMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#requests AiSearchNamespace#requests}
  */
  readonly requests?: number;
  /**
  * Available values: "fixed", "sliding".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#technique AiSearchNamespace#technique}
  */
  readonly technique?: string;
}

export function aiSearchNamespacePublicEndpointParamsRateLimitToTerraform(struct?: AiSearchNamespacePublicEndpointParamsRateLimit | cdktf.IResolvable): any {
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


export function aiSearchNamespacePublicEndpointParamsRateLimitToHclTerraform(struct?: AiSearchNamespacePublicEndpointParamsRateLimit | cdktf.IResolvable): any {
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

export class AiSearchNamespacePublicEndpointParamsRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchNamespacePublicEndpointParamsRateLimit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiSearchNamespacePublicEndpointParamsRateLimit | cdktf.IResolvable | undefined) {
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
export interface AiSearchNamespacePublicEndpointParamsSearchEndpoint {
  /**
  * Disable search endpoint for this public endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#disabled AiSearchNamespace#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function aiSearchNamespacePublicEndpointParamsSearchEndpointToTerraform(struct?: AiSearchNamespacePublicEndpointParamsSearchEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function aiSearchNamespacePublicEndpointParamsSearchEndpointToHclTerraform(struct?: AiSearchNamespacePublicEndpointParamsSearchEndpoint | cdktf.IResolvable): any {
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

export class AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchNamespacePublicEndpointParamsSearchEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiSearchNamespacePublicEndpointParamsSearchEndpoint | cdktf.IResolvable | undefined) {
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
export interface AiSearchNamespacePublicEndpointParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#authorized_hosts AiSearchNamespace#authorized_hosts}
  */
  readonly authorizedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#chat_completions_endpoint AiSearchNamespace#chat_completions_endpoint}
  */
  readonly chatCompletionsEndpoint?: AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint;
  /**
  * Custom domain hostnames that alias this public endpoint. GET and create responses return the current set; on update (PUT) this field is only echoed back when supplied in the request body, otherwise it is null (omit it to leave domains unchanged).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#custom_domains AiSearchNamespace#custom_domains}
  */
  readonly customDomains?: string[];
  /**
  * When false, the instance is reachable only via a registered custom domain and the default <public_endpoint_id>.search.ai.cloudflare.com host returns 404. Requires at least one custom domain. Defaults to true. public_endpoint_params is replaced wholesale on update, so resend default_domain_enabled on every update to keep the default host off — omitting it resets to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#default_domain_enabled AiSearchNamespace#default_domain_enabled}
  */
  readonly defaultDomainEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#enabled AiSearchNamespace#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Instance IDs exposed through the namespace public endpoint. Empty means nothing is searchable. Every ID must be an existing instance in this namespace, and the list cannot exceed the account's multi-instance search limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#instances_allowed AiSearchNamespace#instances_allowed}
  */
  readonly instancesAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#mcp AiSearchNamespace#mcp}
  */
  readonly mcp?: AiSearchNamespacePublicEndpointParamsMcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#rate_limit AiSearchNamespace#rate_limit}
  */
  readonly rateLimit?: AiSearchNamespacePublicEndpointParamsRateLimit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#search_endpoint AiSearchNamespace#search_endpoint}
  */
  readonly searchEndpoint?: AiSearchNamespacePublicEndpointParamsSearchEndpoint;
}

export function aiSearchNamespacePublicEndpointParamsToTerraform(struct?: AiSearchNamespacePublicEndpointParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedHosts),
    chat_completions_endpoint: aiSearchNamespacePublicEndpointParamsChatCompletionsEndpointToTerraform(struct!.chatCompletionsEndpoint),
    custom_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customDomains),
    default_domain_enabled: cdktf.booleanToTerraform(struct!.defaultDomainEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    instances_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instancesAllowed),
    mcp: aiSearchNamespacePublicEndpointParamsMcpToTerraform(struct!.mcp),
    rate_limit: aiSearchNamespacePublicEndpointParamsRateLimitToTerraform(struct!.rateLimit),
    search_endpoint: aiSearchNamespacePublicEndpointParamsSearchEndpointToTerraform(struct!.searchEndpoint),
  }
}


export function aiSearchNamespacePublicEndpointParamsToHclTerraform(struct?: AiSearchNamespacePublicEndpointParams | cdktf.IResolvable): any {
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
      value: aiSearchNamespacePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct!.chatCompletionsEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint",
    },
    custom_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_domain_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.defaultDomainEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instances_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instancesAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mcp: {
      value: aiSearchNamespacePublicEndpointParamsMcpToHclTerraform(struct!.mcp),
      isBlock: true,
      type: "struct",
      storageClassType: "AiSearchNamespacePublicEndpointParamsMcp",
    },
    rate_limit: {
      value: aiSearchNamespacePublicEndpointParamsRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "AiSearchNamespacePublicEndpointParamsRateLimit",
    },
    search_endpoint: {
      value: aiSearchNamespacePublicEndpointParamsSearchEndpointToHclTerraform(struct!.searchEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "AiSearchNamespacePublicEndpointParamsSearchEndpoint",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiSearchNamespacePublicEndpointParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiSearchNamespacePublicEndpointParams | cdktf.IResolvable | undefined {
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
    if (this._defaultDomainEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDomainEnabled = this._defaultDomainEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._instancesAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancesAllowed = this._instancesAllowed;
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

  public set internalValue(value: AiSearchNamespacePublicEndpointParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizedHosts = undefined;
      this._chatCompletionsEndpoint.internalValue = undefined;
      this._customDomains = undefined;
      this._defaultDomainEnabled = undefined;
      this._enabled = undefined;
      this._instancesAllowed = undefined;
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
      this._defaultDomainEnabled = value.defaultDomainEnabled;
      this._enabled = value.enabled;
      this._instancesAllowed = value.instancesAllowed;
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
  private _chatCompletionsEndpoint = new AiSearchNamespacePublicEndpointParamsChatCompletionsEndpointOutputReference(this, "chat_completions_endpoint");
  public get chatCompletionsEndpoint() {
    return this._chatCompletionsEndpoint;
  }
  public putChatCompletionsEndpoint(value: AiSearchNamespacePublicEndpointParamsChatCompletionsEndpoint) {
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

  // default_domain_enabled - computed: true, optional: true, required: false
  private _defaultDomainEnabled?: boolean | cdktf.IResolvable; 
  public get defaultDomainEnabled() {
    return this.getBooleanAttribute('default_domain_enabled');
  }
  public set defaultDomainEnabled(value: boolean | cdktf.IResolvable) {
    this._defaultDomainEnabled = value;
  }
  public resetDefaultDomainEnabled() {
    this._defaultDomainEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDomainEnabledInput() {
    return this._defaultDomainEnabled;
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

  // instances_allowed - computed: true, optional: true, required: false
  private _instancesAllowed?: string[]; 
  public get instancesAllowed() {
    return this.getListAttribute('instances_allowed');
  }
  public set instancesAllowed(value: string[]) {
    this._instancesAllowed = value;
  }
  public resetInstancesAllowed() {
    this._instancesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesAllowedInput() {
    return this._instancesAllowed;
  }

  // mcp - computed: true, optional: true, required: false
  private _mcp = new AiSearchNamespacePublicEndpointParamsMcpOutputReference(this, "mcp");
  public get mcp() {
    return this._mcp;
  }
  public putMcp(value: AiSearchNamespacePublicEndpointParamsMcp) {
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
  private _rateLimit = new AiSearchNamespacePublicEndpointParamsRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: AiSearchNamespacePublicEndpointParamsRateLimit) {
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
  private _searchEndpoint = new AiSearchNamespacePublicEndpointParamsSearchEndpointOutputReference(this, "search_endpoint");
  public get searchEndpoint() {
    return this._searchEndpoint;
  }
  public putSearchEndpoint(value: AiSearchNamespacePublicEndpointParamsSearchEndpoint) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace cloudflare_ai_search_namespace}
*/
export class AiSearchNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ai_search_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiSearchNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiSearchNamespace to import
  * @param importFromId The id of the existing AiSearchNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiSearchNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/resources/ai_search_namespace cloudflare_ai_search_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiSearchNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: AiSearchNamespaceConfig) {
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
    this._description = config.description;
    this._name = config.name;
    this._publicEndpointParams.internalValue = config.publicEndpointParams;
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

  // description - computed: false, optional: true, required: false
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

  // public_endpoint_params - computed: true, optional: true, required: false
  private _publicEndpointParams = new AiSearchNamespacePublicEndpointParamsOutputReference(this, "public_endpoint_params");
  public get publicEndpointParams() {
    return this._publicEndpointParams;
  }
  public putPublicEndpointParams(value: AiSearchNamespacePublicEndpointParams) {
    this._publicEndpointParams.internalValue = value;
  }
  public resetPublicEndpointParams() {
    this._publicEndpointParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicEndpointParamsInput() {
    return this._publicEndpointParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      public_endpoint_params: aiSearchNamespacePublicEndpointParamsToTerraform(this._publicEndpointParams.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      public_endpoint_params: {
        value: aiSearchNamespacePublicEndpointParamsToHclTerraform(this._publicEndpointParams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiSearchNamespacePublicEndpointParams",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
