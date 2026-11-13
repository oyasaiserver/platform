// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#account_id Worker#account_id}
  */
  readonly accountId: string;
  /**
  * If true, delete the Worker even when other Workers still reference it. Service bindings in those Workers may be left broken. Durable Object namespaces implemented by the deleted Worker are deleted even if other Workers reference them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#force Worker#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Whether logpush is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#logpush Worker#logpush}
  */
  readonly logpush?: boolean | cdktf.IResolvable;
  /**
  * Name of the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#name Worker#name}
  */
  readonly name: string;
  /**
  * Observability settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#observability Worker#observability}
  */
  readonly observability?: WorkerObservability;
  /**
  * Template configuration used when creating new Previews for this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#previews_base_config Worker#previews_base_config}
  */
  readonly previewsBaseConfig?: WorkerPreviewsBaseConfig;
  /**
  * Subdomain settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#subdomain Worker#subdomain}
  */
  readonly subdomain?: WorkerSubdomain;
  /**
  * Tags associated with the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#tags Worker#tags}
  */
  readonly tags?: string[];
  /**
  * Other Workers that should consume logs from the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#tail_consumers Worker#tail_consumers}
  */
  readonly tailConsumers?: WorkerTailConsumers[] | cdktf.IResolvable;
}
export interface WorkerObservabilityIssues {
  /**
  * Whether real-time Issues are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function workerObservabilityIssuesToTerraform(struct?: WorkerObservabilityIssues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function workerObservabilityIssuesToHclTerraform(struct?: WorkerObservabilityIssues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerObservabilityIssuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerObservabilityIssues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerObservabilityIssues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface WorkerObservabilityLogs {
  /**
  * A list of destinations where logs will be exported to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#destinations Worker#destinations}
  */
  readonly destinations?: string[];
  /**
  * Whether logs are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}
  */
  readonly headSamplingRate?: number;
  /**
  * Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#invocation_logs Worker#invocation_logs}
  */
  readonly invocationLogs?: boolean | cdktf.IResolvable;
  /**
  * Whether log persistence is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#persist Worker#persist}
  */
  readonly persist?: boolean | cdktf.IResolvable;
}

export function workerObservabilityLogsToTerraform(struct?: WorkerObservabilityLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    head_sampling_rate: cdktf.numberToTerraform(struct!.headSamplingRate),
    invocation_logs: cdktf.booleanToTerraform(struct!.invocationLogs),
    persist: cdktf.booleanToTerraform(struct!.persist),
  }
}


export function workerObservabilityLogsToHclTerraform(struct?: WorkerObservabilityLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinations),
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
    head_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.headSamplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invocation_logs: {
      value: cdktf.booleanToHclTerraform(struct!.invocationLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persist: {
      value: cdktf.booleanToHclTerraform(struct!.persist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerObservabilityLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerObservabilityLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.headSamplingRate = this._headSamplingRate;
    }
    if (this._invocationLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationLogs = this._invocationLogs;
    }
    if (this._persist !== undefined) {
      hasAnyValues = true;
      internalValueResult.persist = this._persist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerObservabilityLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations = undefined;
      this._enabled = undefined;
      this._headSamplingRate = undefined;
      this._invocationLogs = undefined;
      this._persist = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations = value.destinations;
      this._enabled = value.enabled;
      this._headSamplingRate = value.headSamplingRate;
      this._invocationLogs = value.invocationLogs;
      this._persist = value.persist;
    }
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
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

  // head_sampling_rate - computed: true, optional: true, required: false
  private _headSamplingRate?: number; 
  public get headSamplingRate() {
    return this.getNumberAttribute('head_sampling_rate');
  }
  public set headSamplingRate(value: number) {
    this._headSamplingRate = value;
  }
  public resetHeadSamplingRate() {
    this._headSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headSamplingRateInput() {
    return this._headSamplingRate;
  }

  // invocation_logs - computed: true, optional: true, required: false
  private _invocationLogs?: boolean | cdktf.IResolvable; 
  public get invocationLogs() {
    return this.getBooleanAttribute('invocation_logs');
  }
  public set invocationLogs(value: boolean | cdktf.IResolvable) {
    this._invocationLogs = value;
  }
  public resetInvocationLogs() {
    this._invocationLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationLogsInput() {
    return this._invocationLogs;
  }

  // persist - computed: true, optional: true, required: false
  private _persist?: boolean | cdktf.IResolvable; 
  public get persist() {
    return this.getBooleanAttribute('persist');
  }
  public set persist(value: boolean | cdktf.IResolvable) {
    this._persist = value;
  }
  public resetPersist() {
    this._persist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistInput() {
    return this._persist;
  }
}
export interface WorkerObservabilityTraces {
  /**
  * A list of destinations where traces will be exported to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#destinations Worker#destinations}
  */
  readonly destinations?: string[];
  /**
  * Whether traces are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}
  */
  readonly headSamplingRate?: number;
  /**
  * Whether trace persistence is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#persist Worker#persist}
  */
  readonly persist?: boolean | cdktf.IResolvable;
  /**
  * Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" (default) honors inbound trace context only when accompanied by a valid trace auth token. "accept" unconditionally accepts inbound trace context. Requires the trace propagation feature to be enabled.
  * Available values: "authenticated", "accept".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#propagation_policy Worker#propagation_policy}
  */
  readonly propagationPolicy?: string;
}

export function workerObservabilityTracesToTerraform(struct?: WorkerObservabilityTraces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    head_sampling_rate: cdktf.numberToTerraform(struct!.headSamplingRate),
    persist: cdktf.booleanToTerraform(struct!.persist),
    propagation_policy: cdktf.stringToTerraform(struct!.propagationPolicy),
  }
}


export function workerObservabilityTracesToHclTerraform(struct?: WorkerObservabilityTraces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinations),
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
    head_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.headSamplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist: {
      value: cdktf.booleanToHclTerraform(struct!.persist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    propagation_policy: {
      value: cdktf.stringToHclTerraform(struct!.propagationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerObservabilityTracesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerObservabilityTraces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.headSamplingRate = this._headSamplingRate;
    }
    if (this._persist !== undefined) {
      hasAnyValues = true;
      internalValueResult.persist = this._persist;
    }
    if (this._propagationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagationPolicy = this._propagationPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerObservabilityTraces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations = undefined;
      this._enabled = undefined;
      this._headSamplingRate = undefined;
      this._persist = undefined;
      this._propagationPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations = value.destinations;
      this._enabled = value.enabled;
      this._headSamplingRate = value.headSamplingRate;
      this._persist = value.persist;
      this._propagationPolicy = value.propagationPolicy;
    }
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
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

  // head_sampling_rate - computed: true, optional: true, required: false
  private _headSamplingRate?: number; 
  public get headSamplingRate() {
    return this.getNumberAttribute('head_sampling_rate');
  }
  public set headSamplingRate(value: number) {
    this._headSamplingRate = value;
  }
  public resetHeadSamplingRate() {
    this._headSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headSamplingRateInput() {
    return this._headSamplingRate;
  }

  // persist - computed: true, optional: true, required: false
  private _persist?: boolean | cdktf.IResolvable; 
  public get persist() {
    return this.getBooleanAttribute('persist');
  }
  public set persist(value: boolean | cdktf.IResolvable) {
    this._persist = value;
  }
  public resetPersist() {
    this._persist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistInput() {
    return this._persist;
  }

  // propagation_policy - computed: true, optional: true, required: false
  private _propagationPolicy?: string; 
  public get propagationPolicy() {
    return this.getStringAttribute('propagation_policy');
  }
  public set propagationPolicy(value: string) {
    this._propagationPolicy = value;
  }
  public resetPropagationPolicy() {
    this._propagationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationPolicyInput() {
    return this._propagationPolicy;
  }
}
export interface WorkerObservability {
  /**
  * Whether observability is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}
  */
  readonly headSamplingRate?: number;
  /**
  * Real-time Issues settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#issues Worker#issues}
  */
  readonly issues?: WorkerObservabilityIssues;
  /**
  * Log settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#logs Worker#logs}
  */
  readonly logs?: WorkerObservabilityLogs;
  /**
  * Trace settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#traces Worker#traces}
  */
  readonly traces?: WorkerObservabilityTraces;
}

export function workerObservabilityToTerraform(struct?: WorkerObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    head_sampling_rate: cdktf.numberToTerraform(struct!.headSamplingRate),
    issues: workerObservabilityIssuesToTerraform(struct!.issues),
    logs: workerObservabilityLogsToTerraform(struct!.logs),
    traces: workerObservabilityTracesToTerraform(struct!.traces),
  }
}


export function workerObservabilityToHclTerraform(struct?: WorkerObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    head_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.headSamplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    issues: {
      value: workerObservabilityIssuesToHclTerraform(struct!.issues),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerObservabilityIssues",
    },
    logs: {
      value: workerObservabilityLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerObservabilityLogs",
    },
    traces: {
      value: workerObservabilityTracesToHclTerraform(struct!.traces),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerObservabilityTraces",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerObservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.headSamplingRate = this._headSamplingRate;
    }
    if (this._issues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issues = this._issues?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._traces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traces = this._traces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._headSamplingRate = undefined;
      this._issues.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._traces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._headSamplingRate = value.headSamplingRate;
      this._issues.internalValue = value.issues;
      this._logs.internalValue = value.logs;
      this._traces.internalValue = value.traces;
    }
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

  // head_sampling_rate - computed: true, optional: true, required: false
  private _headSamplingRate?: number; 
  public get headSamplingRate() {
    return this.getNumberAttribute('head_sampling_rate');
  }
  public set headSamplingRate(value: number) {
    this._headSamplingRate = value;
  }
  public resetHeadSamplingRate() {
    this._headSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headSamplingRateInput() {
    return this._headSamplingRate;
  }

  // issues - computed: true, optional: true, required: false
  private _issues = new WorkerObservabilityIssuesOutputReference(this, "issues");
  public get issues() {
    return this._issues;
  }
  public putIssues(value: WorkerObservabilityIssues) {
    this._issues.internalValue = value;
  }
  public resetIssues() {
    this._issues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesInput() {
    return this._issues.internalValue;
  }

  // logs - computed: true, optional: true, required: false
  private _logs = new WorkerObservabilityLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: WorkerObservabilityLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // traces - computed: true, optional: true, required: false
  private _traces = new WorkerObservabilityTracesOutputReference(this, "traces");
  public get traces() {
    return this._traces;
  }
  public putTraces(value: WorkerObservabilityTraces) {
    this._traces.internalValue = value;
  }
  public resetTraces() {
    this._traces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesInput() {
    return this._traces.internalValue;
  }
}
export interface WorkerPreviewsBaseConfigCacheOptions {
  /**
  * Whether cached responses are shared across Worker version
  * uploads. This is independent of `enabled`. It can stay true
  * while caching is off, so the preference survives turning
  * caching off and back on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#cross_version_cache Worker#cross_version_cache}
  */
  readonly crossVersionCache?: boolean | cdktf.IResolvable;
  /**
  * Whether caching is enabled for this Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function workerPreviewsBaseConfigCacheOptionsToTerraform(struct?: WorkerPreviewsBaseConfigCacheOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_version_cache: cdktf.booleanToTerraform(struct!.crossVersionCache),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function workerPreviewsBaseConfigCacheOptionsToHclTerraform(struct?: WorkerPreviewsBaseConfigCacheOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_version_cache: {
      value: cdktf.booleanToHclTerraform(struct!.crossVersionCache),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerPreviewsBaseConfigCacheOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerPreviewsBaseConfigCacheOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossVersionCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossVersionCache = this._crossVersionCache;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerPreviewsBaseConfigCacheOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossVersionCache = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossVersionCache = value.crossVersionCache;
      this._enabled = value.enabled;
    }
  }

  // cross_version_cache - computed: true, optional: true, required: false
  private _crossVersionCache?: boolean | cdktf.IResolvable; 
  public get crossVersionCache() {
    return this.getBooleanAttribute('cross_version_cache');
  }
  public set crossVersionCache(value: boolean | cdktf.IResolvable) {
    this._crossVersionCache = value;
  }
  public resetCrossVersionCache() {
    this._crossVersionCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossVersionCacheInput() {
    return this._crossVersionCache;
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
}
export interface WorkerPreviewsBaseConfigEnv {
  /**
  * The kind of resource that the binding provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#type Worker#type}
  */
  readonly type: string;
}

export function workerPreviewsBaseConfigEnvToTerraform(struct?: WorkerPreviewsBaseConfigEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function workerPreviewsBaseConfigEnvToHclTerraform(struct?: WorkerPreviewsBaseConfigEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerPreviewsBaseConfigEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): WorkerPreviewsBaseConfigEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerPreviewsBaseConfigEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WorkerPreviewsBaseConfigEnvMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: WorkerPreviewsBaseConfigEnv } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): WorkerPreviewsBaseConfigEnvOutputReference {
    return new WorkerPreviewsBaseConfigEnvOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface WorkerPreviewsBaseConfigLimits {
  /**
  * The amount of CPU time this Worker can use in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#cpu_ms Worker#cpu_ms}
  */
  readonly cpuMs?: number;
  /**
  * The number of subrequests this Worker can make per request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#subrequests Worker#subrequests}
  */
  readonly subrequests?: number;
}

export function workerPreviewsBaseConfigLimitsToTerraform(struct?: WorkerPreviewsBaseConfigLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_ms: cdktf.numberToTerraform(struct!.cpuMs),
    subrequests: cdktf.numberToTerraform(struct!.subrequests),
  }
}


export function workerPreviewsBaseConfigLimitsToHclTerraform(struct?: WorkerPreviewsBaseConfigLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_ms: {
      value: cdktf.numberToHclTerraform(struct!.cpuMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subrequests: {
      value: cdktf.numberToHclTerraform(struct!.subrequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerPreviewsBaseConfigLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerPreviewsBaseConfigLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuMs = this._cpuMs;
    }
    if (this._subrequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.subrequests = this._subrequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerPreviewsBaseConfigLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuMs = undefined;
      this._subrequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuMs = value.cpuMs;
      this._subrequests = value.subrequests;
    }
  }

  // cpu_ms - computed: true, optional: true, required: false
  private _cpuMs?: number; 
  public get cpuMs() {
    return this.getNumberAttribute('cpu_ms');
  }
  public set cpuMs(value: number) {
    this._cpuMs = value;
  }
  public resetCpuMs() {
    this._cpuMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuMsInput() {
    return this._cpuMs;
  }

  // subrequests - computed: true, optional: true, required: false
  private _subrequests?: number; 
  public get subrequests() {
    return this.getNumberAttribute('subrequests');
  }
  public set subrequests(value: number) {
    this._subrequests = value;
  }
  public resetSubrequests() {
    this._subrequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subrequestsInput() {
    return this._subrequests;
  }
}
export interface WorkerPreviewsBaseConfigObservabilityIssues {
  /**
  * Whether real-time Issues are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function workerPreviewsBaseConfigObservabilityIssuesToTerraform(struct?: WorkerPreviewsBaseConfigObservabilityIssues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function workerPreviewsBaseConfigObservabilityIssuesToHclTerraform(struct?: WorkerPreviewsBaseConfigObservabilityIssues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerPreviewsBaseConfigObservabilityIssuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerPreviewsBaseConfigObservabilityIssues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerPreviewsBaseConfigObservabilityIssues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface WorkerPreviewsBaseConfigObservabilityLogs {
  /**
  * A list of destinations where logs will be exported to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#destinations Worker#destinations}
  */
  readonly destinations?: string[];
  /**
  * Whether logs are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}
  */
  readonly headSamplingRate?: number;
  /**
  * Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#invocation_logs Worker#invocation_logs}
  */
  readonly invocationLogs?: boolean | cdktf.IResolvable;
  /**
  * Whether log persistence is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#persist Worker#persist}
  */
  readonly persist?: boolean | cdktf.IResolvable;
}

export function workerPreviewsBaseConfigObservabilityLogsToTerraform(struct?: WorkerPreviewsBaseConfigObservabilityLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    head_sampling_rate: cdktf.numberToTerraform(struct!.headSamplingRate),
    invocation_logs: cdktf.booleanToTerraform(struct!.invocationLogs),
    persist: cdktf.booleanToTerraform(struct!.persist),
  }
}


export function workerPreviewsBaseConfigObservabilityLogsToHclTerraform(struct?: WorkerPreviewsBaseConfigObservabilityLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinations),
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
    head_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.headSamplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invocation_logs: {
      value: cdktf.booleanToHclTerraform(struct!.invocationLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persist: {
      value: cdktf.booleanToHclTerraform(struct!.persist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerPreviewsBaseConfigObservabilityLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerPreviewsBaseConfigObservabilityLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.headSamplingRate = this._headSamplingRate;
    }
    if (this._invocationLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationLogs = this._invocationLogs;
    }
    if (this._persist !== undefined) {
      hasAnyValues = true;
      internalValueResult.persist = this._persist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerPreviewsBaseConfigObservabilityLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations = undefined;
      this._enabled = undefined;
      this._headSamplingRate = undefined;
      this._invocationLogs = undefined;
      this._persist = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations = value.destinations;
      this._enabled = value.enabled;
      this._headSamplingRate = value.headSamplingRate;
      this._invocationLogs = value.invocationLogs;
      this._persist = value.persist;
    }
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
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

  // head_sampling_rate - computed: true, optional: true, required: false
  private _headSamplingRate?: number; 
  public get headSamplingRate() {
    return this.getNumberAttribute('head_sampling_rate');
  }
  public set headSamplingRate(value: number) {
    this._headSamplingRate = value;
  }
  public resetHeadSamplingRate() {
    this._headSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headSamplingRateInput() {
    return this._headSamplingRate;
  }

  // invocation_logs - computed: true, optional: true, required: false
  private _invocationLogs?: boolean | cdktf.IResolvable; 
  public get invocationLogs() {
    return this.getBooleanAttribute('invocation_logs');
  }
  public set invocationLogs(value: boolean | cdktf.IResolvable) {
    this._invocationLogs = value;
  }
  public resetInvocationLogs() {
    this._invocationLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationLogsInput() {
    return this._invocationLogs;
  }

  // persist - computed: true, optional: true, required: false
  private _persist?: boolean | cdktf.IResolvable; 
  public get persist() {
    return this.getBooleanAttribute('persist');
  }
  public set persist(value: boolean | cdktf.IResolvable) {
    this._persist = value;
  }
  public resetPersist() {
    this._persist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistInput() {
    return this._persist;
  }
}
export interface WorkerPreviewsBaseConfigObservabilityTraces {
  /**
  * A list of destinations where traces will be exported to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#destinations Worker#destinations}
  */
  readonly destinations?: string[];
  /**
  * Whether traces are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}
  */
  readonly headSamplingRate?: number;
  /**
  * Whether trace persistence is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#persist Worker#persist}
  */
  readonly persist?: boolean | cdktf.IResolvable;
  /**
  * Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" honors inbound trace context only when accompanied by a valid trace auth token. "accept" unconditionally accepts inbound trace context. Requires the trace propagation feature to be enabled. Returns null when the trace propagation feature is not enabled for the account.
  * Available values: "authenticated", "accept".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#propagation_policy Worker#propagation_policy}
  */
  readonly propagationPolicy?: string;
}

export function workerPreviewsBaseConfigObservabilityTracesToTerraform(struct?: WorkerPreviewsBaseConfigObservabilityTraces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    head_sampling_rate: cdktf.numberToTerraform(struct!.headSamplingRate),
    persist: cdktf.booleanToTerraform(struct!.persist),
    propagation_policy: cdktf.stringToTerraform(struct!.propagationPolicy),
  }
}


export function workerPreviewsBaseConfigObservabilityTracesToHclTerraform(struct?: WorkerPreviewsBaseConfigObservabilityTraces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinations),
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
    head_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.headSamplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist: {
      value: cdktf.booleanToHclTerraform(struct!.persist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    propagation_policy: {
      value: cdktf.stringToHclTerraform(struct!.propagationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerPreviewsBaseConfigObservabilityTracesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerPreviewsBaseConfigObservabilityTraces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.headSamplingRate = this._headSamplingRate;
    }
    if (this._persist !== undefined) {
      hasAnyValues = true;
      internalValueResult.persist = this._persist;
    }
    if (this._propagationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagationPolicy = this._propagationPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerPreviewsBaseConfigObservabilityTraces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations = undefined;
      this._enabled = undefined;
      this._headSamplingRate = undefined;
      this._persist = undefined;
      this._propagationPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations = value.destinations;
      this._enabled = value.enabled;
      this._headSamplingRate = value.headSamplingRate;
      this._persist = value.persist;
      this._propagationPolicy = value.propagationPolicy;
    }
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
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

  // head_sampling_rate - computed: true, optional: true, required: false
  private _headSamplingRate?: number; 
  public get headSamplingRate() {
    return this.getNumberAttribute('head_sampling_rate');
  }
  public set headSamplingRate(value: number) {
    this._headSamplingRate = value;
  }
  public resetHeadSamplingRate() {
    this._headSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headSamplingRateInput() {
    return this._headSamplingRate;
  }

  // persist - computed: true, optional: true, required: false
  private _persist?: boolean | cdktf.IResolvable; 
  public get persist() {
    return this.getBooleanAttribute('persist');
  }
  public set persist(value: boolean | cdktf.IResolvable) {
    this._persist = value;
  }
  public resetPersist() {
    this._persist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistInput() {
    return this._persist;
  }

  // propagation_policy - computed: true, optional: true, required: false
  private _propagationPolicy?: string; 
  public get propagationPolicy() {
    return this.getStringAttribute('propagation_policy');
  }
  public set propagationPolicy(value: string) {
    this._propagationPolicy = value;
  }
  public resetPropagationPolicy() {
    this._propagationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationPolicyInput() {
    return this._propagationPolicy;
  }
}
export interface WorkerPreviewsBaseConfigObservability {
  /**
  * Whether observability is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}
  */
  readonly headSamplingRate?: number;
  /**
  * Real-time Issues settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#issues Worker#issues}
  */
  readonly issues?: WorkerPreviewsBaseConfigObservabilityIssues;
  /**
  * Log settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#logs Worker#logs}
  */
  readonly logs?: WorkerPreviewsBaseConfigObservabilityLogs;
  /**
  * Whether query strings are removed from request URLs in logs and traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#redact_query_string Worker#redact_query_string}
  */
  readonly redactQueryString?: boolean | cdktf.IResolvable;
  /**
  * Trace settings for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#traces Worker#traces}
  */
  readonly traces?: WorkerPreviewsBaseConfigObservabilityTraces;
}

export function workerPreviewsBaseConfigObservabilityToTerraform(struct?: WorkerPreviewsBaseConfigObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    head_sampling_rate: cdktf.numberToTerraform(struct!.headSamplingRate),
    issues: workerPreviewsBaseConfigObservabilityIssuesToTerraform(struct!.issues),
    logs: workerPreviewsBaseConfigObservabilityLogsToTerraform(struct!.logs),
    redact_query_string: cdktf.booleanToTerraform(struct!.redactQueryString),
    traces: workerPreviewsBaseConfigObservabilityTracesToTerraform(struct!.traces),
  }
}


export function workerPreviewsBaseConfigObservabilityToHclTerraform(struct?: WorkerPreviewsBaseConfigObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    head_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.headSamplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    issues: {
      value: workerPreviewsBaseConfigObservabilityIssuesToHclTerraform(struct!.issues),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerPreviewsBaseConfigObservabilityIssues",
    },
    logs: {
      value: workerPreviewsBaseConfigObservabilityLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerPreviewsBaseConfigObservabilityLogs",
    },
    redact_query_string: {
      value: cdktf.booleanToHclTerraform(struct!.redactQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traces: {
      value: workerPreviewsBaseConfigObservabilityTracesToHclTerraform(struct!.traces),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerPreviewsBaseConfigObservabilityTraces",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerPreviewsBaseConfigObservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerPreviewsBaseConfigObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.headSamplingRate = this._headSamplingRate;
    }
    if (this._issues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issues = this._issues?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._redactQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactQueryString = this._redactQueryString;
    }
    if (this._traces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traces = this._traces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerPreviewsBaseConfigObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._headSamplingRate = undefined;
      this._issues.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._redactQueryString = undefined;
      this._traces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._headSamplingRate = value.headSamplingRate;
      this._issues.internalValue = value.issues;
      this._logs.internalValue = value.logs;
      this._redactQueryString = value.redactQueryString;
      this._traces.internalValue = value.traces;
    }
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

  // head_sampling_rate - computed: true, optional: true, required: false
  private _headSamplingRate?: number; 
  public get headSamplingRate() {
    return this.getNumberAttribute('head_sampling_rate');
  }
  public set headSamplingRate(value: number) {
    this._headSamplingRate = value;
  }
  public resetHeadSamplingRate() {
    this._headSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headSamplingRateInput() {
    return this._headSamplingRate;
  }

  // issues - computed: true, optional: true, required: false
  private _issues = new WorkerPreviewsBaseConfigObservabilityIssuesOutputReference(this, "issues");
  public get issues() {
    return this._issues;
  }
  public putIssues(value: WorkerPreviewsBaseConfigObservabilityIssues) {
    this._issues.internalValue = value;
  }
  public resetIssues() {
    this._issues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesInput() {
    return this._issues.internalValue;
  }

  // logs - computed: true, optional: true, required: false
  private _logs = new WorkerPreviewsBaseConfigObservabilityLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: WorkerPreviewsBaseConfigObservabilityLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // redact_query_string - computed: true, optional: true, required: false
  private _redactQueryString?: boolean | cdktf.IResolvable; 
  public get redactQueryString() {
    return this.getBooleanAttribute('redact_query_string');
  }
  public set redactQueryString(value: boolean | cdktf.IResolvable) {
    this._redactQueryString = value;
  }
  public resetRedactQueryString() {
    this._redactQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactQueryStringInput() {
    return this._redactQueryString;
  }

  // traces - computed: true, optional: true, required: false
  private _traces = new WorkerPreviewsBaseConfigObservabilityTracesOutputReference(this, "traces");
  public get traces() {
    return this._traces;
  }
  public putTraces(value: WorkerPreviewsBaseConfigObservabilityTraces) {
    this._traces.internalValue = value;
  }
  public resetTraces() {
    this._traces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesInput() {
    return this._traces.internalValue;
  }
}
export interface WorkerPreviewsBaseConfigPlacementTarget {
  /**
  * TCP host:port for targeted placement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#host Worker#host}
  */
  readonly host?: string;
  /**
  * HTTP hostname for targeted placement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#hostname Worker#hostname}
  */
  readonly hostname?: string;
  /**
  * Cloud region in format 'provider:region'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#region Worker#region}
  */
  readonly region?: string;
}

export function workerPreviewsBaseConfigPlacementTargetToTerraform(struct?: WorkerPreviewsBaseConfigPlacementTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function workerPreviewsBaseConfigPlacementTargetToHclTerraform(struct?: WorkerPreviewsBaseConfigPlacementTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerPreviewsBaseConfigPlacementTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerPreviewsBaseConfigPlacementTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerPreviewsBaseConfigPlacementTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._hostname = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._hostname = value.hostname;
      this._region = value.region;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class WorkerPreviewsBaseConfigPlacementTargetList extends cdktf.ComplexList {
  public internalValue? : WorkerPreviewsBaseConfigPlacementTarget[] | cdktf.IResolvable

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
  public get(index: number): WorkerPreviewsBaseConfigPlacementTargetOutputReference {
    return new WorkerPreviewsBaseConfigPlacementTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerPreviewsBaseConfigPlacement {
  /**
  * TCP host and port for targeted placement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#host Worker#host}
  */
  readonly host?: string;
  /**
  * HTTP hostname for targeted placement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#hostname Worker#hostname}
  */
  readonly hostname?: string;
  /**
  * Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
  * 
  * Targeted placement mode.
  * Available values: "smart", "targeted".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#mode Worker#mode}
  */
  readonly mode?: string;
  /**
  * Cloud region for targeted placement in format 'provider:region'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#region Worker#region}
  */
  readonly region?: string;
  /**
  * Array of placement targets (currently limited to single target).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#target Worker#target}
  */
  readonly target?: WorkerPreviewsBaseConfigPlacementTarget[] | cdktf.IResolvable;
}

export function workerPreviewsBaseConfigPlacementToTerraform(struct?: WorkerPreviewsBaseConfigPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    mode: cdktf.stringToTerraform(struct!.mode),
    region: cdktf.stringToTerraform(struct!.region),
    target: cdktf.listMapper(workerPreviewsBaseConfigPlacementTargetToTerraform, false)(struct!.target),
  }
}


export function workerPreviewsBaseConfigPlacementToHclTerraform(struct?: WorkerPreviewsBaseConfigPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.listMapperHcl(workerPreviewsBaseConfigPlacementTargetToHclTerraform, false)(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "WorkerPreviewsBaseConfigPlacementTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerPreviewsBaseConfigPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerPreviewsBaseConfigPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerPreviewsBaseConfigPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._hostname = undefined;
      this._mode = undefined;
      this._region = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._hostname = value.hostname;
      this._mode = value.mode;
      this._region = value.region;
      this._target.internalValue = value.target;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // target - computed: true, optional: true, required: false
  private _target = new WorkerPreviewsBaseConfigPlacementTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: WorkerPreviewsBaseConfigPlacementTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface WorkerPreviewsBaseConfigTailConsumers {
  /**
  * Name of the consumer Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#name Worker#name}
  */
  readonly name: string;
}

export function workerPreviewsBaseConfigTailConsumersToTerraform(struct?: WorkerPreviewsBaseConfigTailConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workerPreviewsBaseConfigTailConsumersToHclTerraform(struct?: WorkerPreviewsBaseConfigTailConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerPreviewsBaseConfigTailConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerPreviewsBaseConfigTailConsumers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerPreviewsBaseConfigTailConsumers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
}

export class WorkerPreviewsBaseConfigTailConsumersList extends cdktf.ComplexList {
  public internalValue? : WorkerPreviewsBaseConfigTailConsumers[] | cdktf.IResolvable

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
  public get(index: number): WorkerPreviewsBaseConfigTailConsumersOutputReference {
    return new WorkerPreviewsBaseConfigTailConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerPreviewsBaseConfig {
  /**
  * Cache options used when creating new Previews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#cache_options Worker#cache_options}
  */
  readonly cacheOptions?: WorkerPreviewsBaseConfigCacheOptions;
  /**
  * Bindings used when creating new Previews, keyed by binding name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#env Worker#env}
  */
  readonly env?: { [key: string]: WorkerPreviewsBaseConfigEnv } | cdktf.IResolvable;
  /**
  * Resource limits enforced at runtime for newly created Previews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#limits Worker#limits}
  */
  readonly limits?: WorkerPreviewsBaseConfigLimits;
  /**
  * Whether logpush is enabled when creating new Previews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#logpush Worker#logpush}
  */
  readonly logpush?: boolean | cdktf.IResolvable;
  /**
  * Observability settings used when creating new Previews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#observability Worker#observability}
  */
  readonly observability?: WorkerPreviewsBaseConfigObservability;
  /**
  * Placement configuration used when creating new Previews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#placement Worker#placement}
  */
  readonly placement?: WorkerPreviewsBaseConfigPlacement;
  /**
  * Other Workers that should consume logs from newly created Previews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#tail_consumers Worker#tail_consumers}
  */
  readonly tailConsumers?: WorkerPreviewsBaseConfigTailConsumers[] | cdktf.IResolvable;
}

export function workerPreviewsBaseConfigToTerraform(struct?: WorkerPreviewsBaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_options: workerPreviewsBaseConfigCacheOptionsToTerraform(struct!.cacheOptions),
    env: cdktf.hashMapper(workerPreviewsBaseConfigEnvToTerraform)(struct!.env),
    limits: workerPreviewsBaseConfigLimitsToTerraform(struct!.limits),
    logpush: cdktf.booleanToTerraform(struct!.logpush),
    observability: workerPreviewsBaseConfigObservabilityToTerraform(struct!.observability),
    placement: workerPreviewsBaseConfigPlacementToTerraform(struct!.placement),
    tail_consumers: cdktf.listMapper(workerPreviewsBaseConfigTailConsumersToTerraform, false)(struct!.tailConsumers),
  }
}


export function workerPreviewsBaseConfigToHclTerraform(struct?: WorkerPreviewsBaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_options: {
      value: workerPreviewsBaseConfigCacheOptionsToHclTerraform(struct!.cacheOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerPreviewsBaseConfigCacheOptions",
    },
    env: {
      value: cdktf.hashMapperHcl(workerPreviewsBaseConfigEnvToHclTerraform)(struct!.env),
      isBlock: true,
      type: "map",
      storageClassType: "WorkerPreviewsBaseConfigEnvMap",
    },
    limits: {
      value: workerPreviewsBaseConfigLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerPreviewsBaseConfigLimits",
    },
    logpush: {
      value: cdktf.booleanToHclTerraform(struct!.logpush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    observability: {
      value: workerPreviewsBaseConfigObservabilityToHclTerraform(struct!.observability),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerPreviewsBaseConfigObservability",
    },
    placement: {
      value: workerPreviewsBaseConfigPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkerPreviewsBaseConfigPlacement",
    },
    tail_consumers: {
      value: cdktf.listMapperHcl(workerPreviewsBaseConfigTailConsumersToHclTerraform, false)(struct!.tailConsumers),
      isBlock: true,
      type: "set",
      storageClassType: "WorkerPreviewsBaseConfigTailConsumersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerPreviewsBaseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerPreviewsBaseConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOptions = this._cacheOptions?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._logpush !== undefined) {
      hasAnyValues = true;
      internalValueResult.logpush = this._logpush;
    }
    if (this._observability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.observability = this._observability?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._tailConsumers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tailConsumers = this._tailConsumers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerPreviewsBaseConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheOptions.internalValue = undefined;
      this._env.internalValue = undefined;
      this._limits.internalValue = undefined;
      this._logpush = undefined;
      this._observability.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._tailConsumers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheOptions.internalValue = value.cacheOptions;
      this._env.internalValue = value.env;
      this._limits.internalValue = value.limits;
      this._logpush = value.logpush;
      this._observability.internalValue = value.observability;
      this._placement.internalValue = value.placement;
      this._tailConsumers.internalValue = value.tailConsumers;
    }
  }

  // cache_options - computed: true, optional: true, required: false
  private _cacheOptions = new WorkerPreviewsBaseConfigCacheOptionsOutputReference(this, "cache_options");
  public get cacheOptions() {
    return this._cacheOptions;
  }
  public putCacheOptions(value: WorkerPreviewsBaseConfigCacheOptions) {
    this._cacheOptions.internalValue = value;
  }
  public resetCacheOptions() {
    this._cacheOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOptionsInput() {
    return this._cacheOptions.internalValue;
  }

  // env - computed: true, optional: true, required: false
  private _env = new WorkerPreviewsBaseConfigEnvMap(this, "env");
  public get env() {
    return this._env;
  }
  public putEnv(value: { [key: string]: WorkerPreviewsBaseConfigEnv } | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // limits - computed: true, optional: true, required: false
  private _limits = new WorkerPreviewsBaseConfigLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: WorkerPreviewsBaseConfigLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // logpush - computed: true, optional: true, required: false
  private _logpush?: boolean | cdktf.IResolvable; 
  public get logpush() {
    return this.getBooleanAttribute('logpush');
  }
  public set logpush(value: boolean | cdktf.IResolvable) {
    this._logpush = value;
  }
  public resetLogpush() {
    this._logpush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logpushInput() {
    return this._logpush;
  }

  // observability - computed: true, optional: true, required: false
  private _observability = new WorkerPreviewsBaseConfigObservabilityOutputReference(this, "observability");
  public get observability() {
    return this._observability;
  }
  public putObservability(value: WorkerPreviewsBaseConfigObservability) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
  }

  // placement - computed: true, optional: true, required: false
  private _placement = new WorkerPreviewsBaseConfigPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: WorkerPreviewsBaseConfigPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // tail_consumers - computed: true, optional: true, required: false
  private _tailConsumers = new WorkerPreviewsBaseConfigTailConsumersList(this, "tail_consumers", true);
  public get tailConsumers() {
    return this._tailConsumers;
  }
  public putTailConsumers(value: WorkerPreviewsBaseConfigTailConsumers[] | cdktf.IResolvable) {
    this._tailConsumers.internalValue = value;
  }
  public resetTailConsumers() {
    this._tailConsumers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailConsumersInput() {
    return this._tailConsumers.internalValue;
  }
}
export interface WorkerReferencesDispatchNamespaceOutbounds {
}

export function workerReferencesDispatchNamespaceOutboundsToTerraform(struct?: WorkerReferencesDispatchNamespaceOutbounds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workerReferencesDispatchNamespaceOutboundsToHclTerraform(struct?: WorkerReferencesDispatchNamespaceOutbounds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkerReferencesDispatchNamespaceOutboundsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerReferencesDispatchNamespaceOutbounds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerReferencesDispatchNamespaceOutbounds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // worker_id - computed: true, optional: false, required: false
  public get workerId() {
    return this.getStringAttribute('worker_id');
  }

  // worker_name - computed: true, optional: false, required: false
  public get workerName() {
    return this.getStringAttribute('worker_name');
  }
}

export class WorkerReferencesDispatchNamespaceOutboundsList extends cdktf.ComplexList {

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
  public get(index: number): WorkerReferencesDispatchNamespaceOutboundsOutputReference {
    return new WorkerReferencesDispatchNamespaceOutboundsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerReferencesDomains {
}

export function workerReferencesDomainsToTerraform(struct?: WorkerReferencesDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workerReferencesDomainsToHclTerraform(struct?: WorkerReferencesDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkerReferencesDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerReferencesDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerReferencesDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
}

export class WorkerReferencesDomainsList extends cdktf.ComplexList {

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
  public get(index: number): WorkerReferencesDomainsOutputReference {
    return new WorkerReferencesDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerReferencesDurableObjects {
}

export function workerReferencesDurableObjectsToTerraform(struct?: WorkerReferencesDurableObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workerReferencesDurableObjectsToHclTerraform(struct?: WorkerReferencesDurableObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkerReferencesDurableObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerReferencesDurableObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerReferencesDurableObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // worker_id - computed: true, optional: false, required: false
  public get workerId() {
    return this.getStringAttribute('worker_id');
  }

  // worker_name - computed: true, optional: false, required: false
  public get workerName() {
    return this.getStringAttribute('worker_name');
  }
}

export class WorkerReferencesDurableObjectsList extends cdktf.ComplexList {

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
  public get(index: number): WorkerReferencesDurableObjectsOutputReference {
    return new WorkerReferencesDurableObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerReferencesQueues {
}

export function workerReferencesQueuesToTerraform(struct?: WorkerReferencesQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workerReferencesQueuesToHclTerraform(struct?: WorkerReferencesQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkerReferencesQueuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerReferencesQueues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerReferencesQueues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // queue_consumer_id - computed: true, optional: false, required: false
  public get queueConsumerId() {
    return this.getStringAttribute('queue_consumer_id');
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }

  // queue_name - computed: true, optional: false, required: false
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
}

export class WorkerReferencesQueuesList extends cdktf.ComplexList {

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
  public get(index: number): WorkerReferencesQueuesOutputReference {
    return new WorkerReferencesQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerReferencesWorkers {
}

export function workerReferencesWorkersToTerraform(struct?: WorkerReferencesWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workerReferencesWorkersToHclTerraform(struct?: WorkerReferencesWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkerReferencesWorkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerReferencesWorkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerReferencesWorkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class WorkerReferencesWorkersList extends cdktf.ComplexList {

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
  public get(index: number): WorkerReferencesWorkersOutputReference {
    return new WorkerReferencesWorkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkerReferences {
}

export function workerReferencesToTerraform(struct?: WorkerReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workerReferencesToHclTerraform(struct?: WorkerReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkerReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dispatch_namespace_outbounds - computed: true, optional: false, required: false
  private _dispatchNamespaceOutbounds = new WorkerReferencesDispatchNamespaceOutboundsList(this, "dispatch_namespace_outbounds", false);
  public get dispatchNamespaceOutbounds() {
    return this._dispatchNamespaceOutbounds;
  }

  // domains - computed: true, optional: false, required: false
  private _domains = new WorkerReferencesDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }

  // durable_objects - computed: true, optional: false, required: false
  private _durableObjects = new WorkerReferencesDurableObjectsList(this, "durable_objects", false);
  public get durableObjects() {
    return this._durableObjects;
  }

  // queues - computed: true, optional: false, required: false
  private _queues = new WorkerReferencesQueuesList(this, "queues", false);
  public get queues() {
    return this._queues;
  }

  // workers - computed: true, optional: false, required: false
  private _workers = new WorkerReferencesWorkersList(this, "workers", false);
  public get workers() {
    return this._workers;
  }
}
export interface WorkerSubdomain {
  /**
  * Whether the *.workers.dev subdomain is enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#enabled Worker#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#previews_enabled Worker#previews_enabled}
  */
  readonly previewsEnabled?: boolean | cdktf.IResolvable;
}

export function workerSubdomainToTerraform(struct?: WorkerSubdomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    previews_enabled: cdktf.booleanToTerraform(struct!.previewsEnabled),
  }
}


export function workerSubdomainToHclTerraform(struct?: WorkerSubdomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    previews_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.previewsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerSubdomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkerSubdomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._previewsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewsEnabled = this._previewsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerSubdomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._previewsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._previewsEnabled = value.previewsEnabled;
    }
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

  // preview_url_suffix - computed: true, optional: false, required: false
  public get previewUrlSuffix() {
    return this.getStringAttribute('preview_url_suffix');
  }

  // previews_enabled - computed: true, optional: true, required: false
  private _previewsEnabled?: boolean | cdktf.IResolvable; 
  public get previewsEnabled() {
    return this.getBooleanAttribute('previews_enabled');
  }
  public set previewsEnabled(value: boolean | cdktf.IResolvable) {
    this._previewsEnabled = value;
  }
  public resetPreviewsEnabled() {
    this._previewsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewsEnabledInput() {
    return this._previewsEnabled;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface WorkerTailConsumers {
  /**
  * Name of the consumer Worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#name Worker#name}
  */
  readonly name: string;
}

export function workerTailConsumersToTerraform(struct?: WorkerTailConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workerTailConsumersToHclTerraform(struct?: WorkerTailConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkerTailConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkerTailConsumers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkerTailConsumers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
}

export class WorkerTailConsumersList extends cdktf.ComplexList {
  public internalValue? : WorkerTailConsumers[] | cdktf.IResolvable

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
  public get(index: number): WorkerTailConsumersOutputReference {
    return new WorkerTailConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker cloudflare_worker}
*/
export class Worker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_worker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Worker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Worker to import
  * @param importFromId The id of the existing Worker that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Worker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/worker cloudflare_worker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkerConfig
  */
  public constructor(scope: Construct, id: string, config: WorkerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_worker',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.29.0'
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
    this._force = config.force;
    this._logpush = config.logpush;
    this._name = config.name;
    this._observability.internalValue = config.observability;
    this._previewsBaseConfig.internalValue = config.previewsBaseConfig;
    this._subdomain.internalValue = config.subdomain;
    this._tags = config.tags;
    this._tailConsumers.internalValue = config.tailConsumers;
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

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployed_on - computed: true, optional: false, required: false
  public get deployedOn() {
    return this.getStringAttribute('deployed_on');
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logpush - computed: true, optional: true, required: false
  private _logpush?: boolean | cdktf.IResolvable; 
  public get logpush() {
    return this.getBooleanAttribute('logpush');
  }
  public set logpush(value: boolean | cdktf.IResolvable) {
    this._logpush = value;
  }
  public resetLogpush() {
    this._logpush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logpushInput() {
    return this._logpush;
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

  // observability - computed: true, optional: true, required: false
  private _observability = new WorkerObservabilityOutputReference(this, "observability");
  public get observability() {
    return this._observability;
  }
  public putObservability(value: WorkerObservability) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
  }

  // previews_base_config - computed: true, optional: true, required: false
  private _previewsBaseConfig = new WorkerPreviewsBaseConfigOutputReference(this, "previews_base_config");
  public get previewsBaseConfig() {
    return this._previewsBaseConfig;
  }
  public putPreviewsBaseConfig(value: WorkerPreviewsBaseConfig) {
    this._previewsBaseConfig.internalValue = value;
  }
  public resetPreviewsBaseConfig() {
    this._previewsBaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewsBaseConfigInput() {
    return this._previewsBaseConfig.internalValue;
  }

  // references - computed: true, optional: false, required: false
  private _references = new WorkerReferencesOutputReference(this, "references");
  public get references() {
    return this._references;
  }

  // subdomain - computed: true, optional: true, required: false
  private _subdomain = new WorkerSubdomainOutputReference(this, "subdomain");
  public get subdomain() {
    return this._subdomain;
  }
  public putSubdomain(value: WorkerSubdomain) {
    this._subdomain.internalValue = value;
  }
  public resetSubdomain() {
    this._subdomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tail_consumers - computed: true, optional: true, required: false
  private _tailConsumers = new WorkerTailConsumersList(this, "tail_consumers", true);
  public get tailConsumers() {
    return this._tailConsumers;
  }
  public putTailConsumers(value: WorkerTailConsumers[] | cdktf.IResolvable) {
    this._tailConsumers.internalValue = value;
  }
  public resetTailConsumers() {
    this._tailConsumers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailConsumersInput() {
    return this._tailConsumers.internalValue;
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      force: cdktf.booleanToTerraform(this._force),
      logpush: cdktf.booleanToTerraform(this._logpush),
      name: cdktf.stringToTerraform(this._name),
      observability: workerObservabilityToTerraform(this._observability.internalValue),
      previews_base_config: workerPreviewsBaseConfigToTerraform(this._previewsBaseConfig.internalValue),
      subdomain: workerSubdomainToTerraform(this._subdomain.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tail_consumers: cdktf.listMapper(workerTailConsumersToTerraform, false)(this._tailConsumers.internalValue),
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
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logpush: {
        value: cdktf.booleanToHclTerraform(this._logpush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      observability: {
        value: workerObservabilityToHclTerraform(this._observability.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkerObservability",
      },
      previews_base_config: {
        value: workerPreviewsBaseConfigToHclTerraform(this._previewsBaseConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkerPreviewsBaseConfig",
      },
      subdomain: {
        value: workerSubdomainToHclTerraform(this._subdomain.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkerSubdomain",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tail_consumers: {
        value: cdktf.listMapperHcl(workerTailConsumersToHclTerraform, false)(this._tailConsumers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkerTailConsumersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
