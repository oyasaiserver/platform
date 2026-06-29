// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#account_id AiGateway#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authentication AiGateway#authentication}
  */
  readonly authentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}
  */
  readonly cacheInvalidateOnUpdate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}
  */
  readonly cacheTtl: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}
  */
  readonly collectLogs: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#dlp AiGateway#dlp}
  */
  readonly dlp?: AiGatewayDlp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#guardrails AiGateway#guardrails}
  */
  readonly guardrails?: AiGatewayGuardrails;
  /**
  * gateway id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#log_management AiGateway#log_management}
  */
  readonly logManagement?: number;
  /**
  * Available values: "STOP_INSERTING", "DELETE_OLDEST".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#log_management_strategy AiGateway#log_management_strategy}
  */
  readonly logManagementStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#logpush AiGateway#logpush}
  */
  readonly logpush?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}
  */
  readonly logpushPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#otel AiGateway#otel}
  */
  readonly otel?: AiGatewayOtel[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}
  */
  readonly rateLimitingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}
  */
  readonly rateLimitingLimit: number;
  /**
  * Available values: "fixed", "sliding".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rate_limiting_technique AiGateway#rate_limiting_technique}
  */
  readonly rateLimitingTechnique?: string;
  /**
  * Backoff strategy for retry delays
  * Available values: "constant", "linear", "exponential".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#retry_backoff AiGateway#retry_backoff}
  */
  readonly retryBackoff?: string;
  /**
  * Delay between retry attempts in milliseconds (0-5000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#retry_delay AiGateway#retry_delay}
  */
  readonly retryDelay?: number;
  /**
  * Maximum number of retry attempts for failed requests (1-5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#retry_max_attempts AiGateway#retry_max_attempts}
  */
  readonly retryMaxAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}
  */
  readonly spendLimits?: AiGatewaySpendLimits;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#store_id AiGateway#store_id}
  */
  readonly storeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#stripe AiGateway#stripe}
  */
  readonly stripe?: AiGatewayStripe;
  /**
  * Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported.
  * Available values: "postpaid".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#workers_ai_billing_mode AiGateway#workers_ai_billing_mode}
  */
  readonly workersAiBillingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#zdr AiGateway#zdr}
  */
  readonly zdr?: boolean | cdktf.IResolvable;
}
export interface AiGatewayDlpPolicies {
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#action AiGateway#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#check AiGateway#check}
  */
  readonly check: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#profiles AiGateway#profiles}
  */
  readonly profiles: string[];
}

export function aiGatewayDlpPoliciesToTerraform(struct?: AiGatewayDlpPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.check),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
  }
}


export function aiGatewayDlpPoliciesToHclTerraform(struct?: AiGatewayDlpPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.check),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayDlpPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiGatewayDlpPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDlpPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._check = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._profiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._check = value.check;
      this._enabled = value.enabled;
      this._id = value.id;
      this._profiles = value.profiles;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // check - computed: false, optional: false, required: true
  private _check?: string[]; 
  public get check() {
    return this.getListAttribute('check');
  }
  public set check(value: string[]) {
    this._check = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // profiles - computed: false, optional: false, required: true
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }
}

export class AiGatewayDlpPoliciesList extends cdktf.ComplexList {
  public internalValue? : AiGatewayDlpPolicies[] | cdktf.IResolvable

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
  public get(index: number): AiGatewayDlpPoliciesOutputReference {
    return new AiGatewayDlpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiGatewayDlp {
  /**
  * Available values: "BLOCK", "FLAG".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#action AiGateway#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#policies AiGateway#policies}
  */
  readonly policies?: AiGatewayDlpPolicies[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#profiles AiGateway#profiles}
  */
  readonly profiles?: string[];
}

export function aiGatewayDlpToTerraform(struct?: AiGatewayDlp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    policies: cdktf.listMapper(aiGatewayDlpPoliciesToTerraform, false)(struct!.policies),
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
  }
}


export function aiGatewayDlpToHclTerraform(struct?: AiGatewayDlp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policies: {
      value: cdktf.listMapperHcl(aiGatewayDlpPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "AiGatewayDlpPoliciesList",
    },
    profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayDlpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDlp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDlp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._enabled = undefined;
      this._policies.internalValue = undefined;
      this._profiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._enabled = value.enabled;
      this._policies.internalValue = value.policies;
      this._profiles = value.profiles;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new AiGatewayDlpPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: AiGatewayDlpPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }
}
export interface AiGatewayGuardrailsPrompt {
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#p1 AiGateway#p1}
  */
  readonly p1?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s1 AiGateway#s1}
  */
  readonly s1?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s10 AiGateway#s10}
  */
  readonly s10?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s11 AiGateway#s11}
  */
  readonly s11?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s12 AiGateway#s12}
  */
  readonly s12?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s13 AiGateway#s13}
  */
  readonly s13?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s2 AiGateway#s2}
  */
  readonly s2?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s3 AiGateway#s3}
  */
  readonly s3?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s4 AiGateway#s4}
  */
  readonly s4?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s5 AiGateway#s5}
  */
  readonly s5?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s6 AiGateway#s6}
  */
  readonly s6?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s7 AiGateway#s7}
  */
  readonly s7?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s8 AiGateway#s8}
  */
  readonly s8?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s9 AiGateway#s9}
  */
  readonly s9?: string;
}

export function aiGatewayGuardrailsPromptToTerraform(struct?: AiGatewayGuardrailsPrompt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    p1: cdktf.stringToTerraform(struct!.p1),
    s1: cdktf.stringToTerraform(struct!.s1),
    s10: cdktf.stringToTerraform(struct!.s10),
    s11: cdktf.stringToTerraform(struct!.s11),
    s12: cdktf.stringToTerraform(struct!.s12),
    s13: cdktf.stringToTerraform(struct!.s13),
    s2: cdktf.stringToTerraform(struct!.s2),
    s3: cdktf.stringToTerraform(struct!.s3),
    s4: cdktf.stringToTerraform(struct!.s4),
    s5: cdktf.stringToTerraform(struct!.s5),
    s6: cdktf.stringToTerraform(struct!.s6),
    s7: cdktf.stringToTerraform(struct!.s7),
    s8: cdktf.stringToTerraform(struct!.s8),
    s9: cdktf.stringToTerraform(struct!.s9),
  }
}


export function aiGatewayGuardrailsPromptToHclTerraform(struct?: AiGatewayGuardrailsPrompt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    p1: {
      value: cdktf.stringToHclTerraform(struct!.p1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s1: {
      value: cdktf.stringToHclTerraform(struct!.s1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s10: {
      value: cdktf.stringToHclTerraform(struct!.s10),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s11: {
      value: cdktf.stringToHclTerraform(struct!.s11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s12: {
      value: cdktf.stringToHclTerraform(struct!.s12),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s13: {
      value: cdktf.stringToHclTerraform(struct!.s13),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s2: {
      value: cdktf.stringToHclTerraform(struct!.s2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktf.stringToHclTerraform(struct!.s3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s4: {
      value: cdktf.stringToHclTerraform(struct!.s4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s5: {
      value: cdktf.stringToHclTerraform(struct!.s5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s6: {
      value: cdktf.stringToHclTerraform(struct!.s6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s7: {
      value: cdktf.stringToHclTerraform(struct!.s7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s8: {
      value: cdktf.stringToHclTerraform(struct!.s8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s9: {
      value: cdktf.stringToHclTerraform(struct!.s9),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayGuardrailsPromptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayGuardrailsPrompt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._p1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.p1 = this._p1;
    }
    if (this._s1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s1 = this._s1;
    }
    if (this._s10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s10 = this._s10;
    }
    if (this._s11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s11 = this._s11;
    }
    if (this._s12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s12 = this._s12;
    }
    if (this._s13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s13 = this._s13;
    }
    if (this._s2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s2 = this._s2;
    }
    if (this._s3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3;
    }
    if (this._s4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s4 = this._s4;
    }
    if (this._s5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s5 = this._s5;
    }
    if (this._s6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s6 = this._s6;
    }
    if (this._s7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s7 = this._s7;
    }
    if (this._s8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s8 = this._s8;
    }
    if (this._s9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s9 = this._s9;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayGuardrailsPrompt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._p1 = undefined;
      this._s1 = undefined;
      this._s10 = undefined;
      this._s11 = undefined;
      this._s12 = undefined;
      this._s13 = undefined;
      this._s2 = undefined;
      this._s3 = undefined;
      this._s4 = undefined;
      this._s5 = undefined;
      this._s6 = undefined;
      this._s7 = undefined;
      this._s8 = undefined;
      this._s9 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._p1 = value.p1;
      this._s1 = value.s1;
      this._s10 = value.s10;
      this._s11 = value.s11;
      this._s12 = value.s12;
      this._s13 = value.s13;
      this._s2 = value.s2;
      this._s3 = value.s3;
      this._s4 = value.s4;
      this._s5 = value.s5;
      this._s6 = value.s6;
      this._s7 = value.s7;
      this._s8 = value.s8;
      this._s9 = value.s9;
    }
  }

  // p1 - computed: false, optional: true, required: false
  private _p1?: string; 
  public get p1() {
    return this.getStringAttribute('p1');
  }
  public set p1(value: string) {
    this._p1 = value;
  }
  public resetP1() {
    this._p1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p1Input() {
    return this._p1;
  }

  // s1 - computed: false, optional: true, required: false
  private _s1?: string; 
  public get s1() {
    return this.getStringAttribute('s1');
  }
  public set s1(value: string) {
    this._s1 = value;
  }
  public resetS1() {
    this._s1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s1Input() {
    return this._s1;
  }

  // s10 - computed: false, optional: true, required: false
  private _s10?: string; 
  public get s10() {
    return this.getStringAttribute('s10');
  }
  public set s10(value: string) {
    this._s10 = value;
  }
  public resetS10() {
    this._s10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s10Input() {
    return this._s10;
  }

  // s11 - computed: false, optional: true, required: false
  private _s11?: string; 
  public get s11() {
    return this.getStringAttribute('s11');
  }
  public set s11(value: string) {
    this._s11 = value;
  }
  public resetS11() {
    this._s11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s11Input() {
    return this._s11;
  }

  // s12 - computed: false, optional: true, required: false
  private _s12?: string; 
  public get s12() {
    return this.getStringAttribute('s12');
  }
  public set s12(value: string) {
    this._s12 = value;
  }
  public resetS12() {
    this._s12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s12Input() {
    return this._s12;
  }

  // s13 - computed: false, optional: true, required: false
  private _s13?: string; 
  public get s13() {
    return this.getStringAttribute('s13');
  }
  public set s13(value: string) {
    this._s13 = value;
  }
  public resetS13() {
    this._s13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s13Input() {
    return this._s13;
  }

  // s2 - computed: false, optional: true, required: false
  private _s2?: string; 
  public get s2() {
    return this.getStringAttribute('s2');
  }
  public set s2(value: string) {
    this._s2 = value;
  }
  public resetS2() {
    this._s2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s2Input() {
    return this._s2;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3?: string; 
  public get s3() {
    return this.getStringAttribute('s3');
  }
  public set s3(value: string) {
    this._s3 = value;
  }
  public resetS3() {
    this._s3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3;
  }

  // s4 - computed: false, optional: true, required: false
  private _s4?: string; 
  public get s4() {
    return this.getStringAttribute('s4');
  }
  public set s4(value: string) {
    this._s4 = value;
  }
  public resetS4() {
    this._s4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s4Input() {
    return this._s4;
  }

  // s5 - computed: false, optional: true, required: false
  private _s5?: string; 
  public get s5() {
    return this.getStringAttribute('s5');
  }
  public set s5(value: string) {
    this._s5 = value;
  }
  public resetS5() {
    this._s5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s5Input() {
    return this._s5;
  }

  // s6 - computed: false, optional: true, required: false
  private _s6?: string; 
  public get s6() {
    return this.getStringAttribute('s6');
  }
  public set s6(value: string) {
    this._s6 = value;
  }
  public resetS6() {
    this._s6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s6Input() {
    return this._s6;
  }

  // s7 - computed: false, optional: true, required: false
  private _s7?: string; 
  public get s7() {
    return this.getStringAttribute('s7');
  }
  public set s7(value: string) {
    this._s7 = value;
  }
  public resetS7() {
    this._s7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s7Input() {
    return this._s7;
  }

  // s8 - computed: false, optional: true, required: false
  private _s8?: string; 
  public get s8() {
    return this.getStringAttribute('s8');
  }
  public set s8(value: string) {
    this._s8 = value;
  }
  public resetS8() {
    this._s8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s8Input() {
    return this._s8;
  }

  // s9 - computed: false, optional: true, required: false
  private _s9?: string; 
  public get s9() {
    return this.getStringAttribute('s9');
  }
  public set s9(value: string) {
    this._s9 = value;
  }
  public resetS9() {
    this._s9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s9Input() {
    return this._s9;
  }
}
export interface AiGatewayGuardrailsResponse {
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#p1 AiGateway#p1}
  */
  readonly p1?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s1 AiGateway#s1}
  */
  readonly s1?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s10 AiGateway#s10}
  */
  readonly s10?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s11 AiGateway#s11}
  */
  readonly s11?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s12 AiGateway#s12}
  */
  readonly s12?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s13 AiGateway#s13}
  */
  readonly s13?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s2 AiGateway#s2}
  */
  readonly s2?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s3 AiGateway#s3}
  */
  readonly s3?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s4 AiGateway#s4}
  */
  readonly s4?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s5 AiGateway#s5}
  */
  readonly s5?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s6 AiGateway#s6}
  */
  readonly s6?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s7 AiGateway#s7}
  */
  readonly s7?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s8 AiGateway#s8}
  */
  readonly s8?: string;
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#s9 AiGateway#s9}
  */
  readonly s9?: string;
}

export function aiGatewayGuardrailsResponseToTerraform(struct?: AiGatewayGuardrailsResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    p1: cdktf.stringToTerraform(struct!.p1),
    s1: cdktf.stringToTerraform(struct!.s1),
    s10: cdktf.stringToTerraform(struct!.s10),
    s11: cdktf.stringToTerraform(struct!.s11),
    s12: cdktf.stringToTerraform(struct!.s12),
    s13: cdktf.stringToTerraform(struct!.s13),
    s2: cdktf.stringToTerraform(struct!.s2),
    s3: cdktf.stringToTerraform(struct!.s3),
    s4: cdktf.stringToTerraform(struct!.s4),
    s5: cdktf.stringToTerraform(struct!.s5),
    s6: cdktf.stringToTerraform(struct!.s6),
    s7: cdktf.stringToTerraform(struct!.s7),
    s8: cdktf.stringToTerraform(struct!.s8),
    s9: cdktf.stringToTerraform(struct!.s9),
  }
}


export function aiGatewayGuardrailsResponseToHclTerraform(struct?: AiGatewayGuardrailsResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    p1: {
      value: cdktf.stringToHclTerraform(struct!.p1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s1: {
      value: cdktf.stringToHclTerraform(struct!.s1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s10: {
      value: cdktf.stringToHclTerraform(struct!.s10),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s11: {
      value: cdktf.stringToHclTerraform(struct!.s11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s12: {
      value: cdktf.stringToHclTerraform(struct!.s12),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s13: {
      value: cdktf.stringToHclTerraform(struct!.s13),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s2: {
      value: cdktf.stringToHclTerraform(struct!.s2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktf.stringToHclTerraform(struct!.s3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s4: {
      value: cdktf.stringToHclTerraform(struct!.s4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s5: {
      value: cdktf.stringToHclTerraform(struct!.s5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s6: {
      value: cdktf.stringToHclTerraform(struct!.s6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s7: {
      value: cdktf.stringToHclTerraform(struct!.s7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s8: {
      value: cdktf.stringToHclTerraform(struct!.s8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s9: {
      value: cdktf.stringToHclTerraform(struct!.s9),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayGuardrailsResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayGuardrailsResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._p1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.p1 = this._p1;
    }
    if (this._s1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s1 = this._s1;
    }
    if (this._s10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s10 = this._s10;
    }
    if (this._s11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s11 = this._s11;
    }
    if (this._s12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s12 = this._s12;
    }
    if (this._s13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s13 = this._s13;
    }
    if (this._s2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s2 = this._s2;
    }
    if (this._s3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3;
    }
    if (this._s4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s4 = this._s4;
    }
    if (this._s5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s5 = this._s5;
    }
    if (this._s6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s6 = this._s6;
    }
    if (this._s7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s7 = this._s7;
    }
    if (this._s8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s8 = this._s8;
    }
    if (this._s9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s9 = this._s9;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayGuardrailsResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._p1 = undefined;
      this._s1 = undefined;
      this._s10 = undefined;
      this._s11 = undefined;
      this._s12 = undefined;
      this._s13 = undefined;
      this._s2 = undefined;
      this._s3 = undefined;
      this._s4 = undefined;
      this._s5 = undefined;
      this._s6 = undefined;
      this._s7 = undefined;
      this._s8 = undefined;
      this._s9 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._p1 = value.p1;
      this._s1 = value.s1;
      this._s10 = value.s10;
      this._s11 = value.s11;
      this._s12 = value.s12;
      this._s13 = value.s13;
      this._s2 = value.s2;
      this._s3 = value.s3;
      this._s4 = value.s4;
      this._s5 = value.s5;
      this._s6 = value.s6;
      this._s7 = value.s7;
      this._s8 = value.s8;
      this._s9 = value.s9;
    }
  }

  // p1 - computed: false, optional: true, required: false
  private _p1?: string; 
  public get p1() {
    return this.getStringAttribute('p1');
  }
  public set p1(value: string) {
    this._p1 = value;
  }
  public resetP1() {
    this._p1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p1Input() {
    return this._p1;
  }

  // s1 - computed: false, optional: true, required: false
  private _s1?: string; 
  public get s1() {
    return this.getStringAttribute('s1');
  }
  public set s1(value: string) {
    this._s1 = value;
  }
  public resetS1() {
    this._s1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s1Input() {
    return this._s1;
  }

  // s10 - computed: false, optional: true, required: false
  private _s10?: string; 
  public get s10() {
    return this.getStringAttribute('s10');
  }
  public set s10(value: string) {
    this._s10 = value;
  }
  public resetS10() {
    this._s10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s10Input() {
    return this._s10;
  }

  // s11 - computed: false, optional: true, required: false
  private _s11?: string; 
  public get s11() {
    return this.getStringAttribute('s11');
  }
  public set s11(value: string) {
    this._s11 = value;
  }
  public resetS11() {
    this._s11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s11Input() {
    return this._s11;
  }

  // s12 - computed: false, optional: true, required: false
  private _s12?: string; 
  public get s12() {
    return this.getStringAttribute('s12');
  }
  public set s12(value: string) {
    this._s12 = value;
  }
  public resetS12() {
    this._s12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s12Input() {
    return this._s12;
  }

  // s13 - computed: false, optional: true, required: false
  private _s13?: string; 
  public get s13() {
    return this.getStringAttribute('s13');
  }
  public set s13(value: string) {
    this._s13 = value;
  }
  public resetS13() {
    this._s13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s13Input() {
    return this._s13;
  }

  // s2 - computed: false, optional: true, required: false
  private _s2?: string; 
  public get s2() {
    return this.getStringAttribute('s2');
  }
  public set s2(value: string) {
    this._s2 = value;
  }
  public resetS2() {
    this._s2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s2Input() {
    return this._s2;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3?: string; 
  public get s3() {
    return this.getStringAttribute('s3');
  }
  public set s3(value: string) {
    this._s3 = value;
  }
  public resetS3() {
    this._s3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3;
  }

  // s4 - computed: false, optional: true, required: false
  private _s4?: string; 
  public get s4() {
    return this.getStringAttribute('s4');
  }
  public set s4(value: string) {
    this._s4 = value;
  }
  public resetS4() {
    this._s4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s4Input() {
    return this._s4;
  }

  // s5 - computed: false, optional: true, required: false
  private _s5?: string; 
  public get s5() {
    return this.getStringAttribute('s5');
  }
  public set s5(value: string) {
    this._s5 = value;
  }
  public resetS5() {
    this._s5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s5Input() {
    return this._s5;
  }

  // s6 - computed: false, optional: true, required: false
  private _s6?: string; 
  public get s6() {
    return this.getStringAttribute('s6');
  }
  public set s6(value: string) {
    this._s6 = value;
  }
  public resetS6() {
    this._s6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s6Input() {
    return this._s6;
  }

  // s7 - computed: false, optional: true, required: false
  private _s7?: string; 
  public get s7() {
    return this.getStringAttribute('s7');
  }
  public set s7(value: string) {
    this._s7 = value;
  }
  public resetS7() {
    this._s7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s7Input() {
    return this._s7;
  }

  // s8 - computed: false, optional: true, required: false
  private _s8?: string; 
  public get s8() {
    return this.getStringAttribute('s8');
  }
  public set s8(value: string) {
    this._s8 = value;
  }
  public resetS8() {
    this._s8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s8Input() {
    return this._s8;
  }

  // s9 - computed: false, optional: true, required: false
  private _s9?: string; 
  public get s9() {
    return this.getStringAttribute('s9');
  }
  public set s9(value: string) {
    this._s9 = value;
  }
  public resetS9() {
    this._s9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s9Input() {
    return this._s9;
  }
}
export interface AiGatewayGuardrails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#prompt AiGateway#prompt}
  */
  readonly prompt: AiGatewayGuardrailsPrompt;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#response AiGateway#response}
  */
  readonly response: AiGatewayGuardrailsResponse;
}

export function aiGatewayGuardrailsToTerraform(struct?: AiGatewayGuardrails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prompt: aiGatewayGuardrailsPromptToTerraform(struct!.prompt),
    response: aiGatewayGuardrailsResponseToTerraform(struct!.response),
  }
}


export function aiGatewayGuardrailsToHclTerraform(struct?: AiGatewayGuardrails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prompt: {
      value: aiGatewayGuardrailsPromptToHclTerraform(struct!.prompt),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayGuardrailsPrompt",
    },
    response: {
      value: aiGatewayGuardrailsResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayGuardrailsResponse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayGuardrailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayGuardrails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayGuardrails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prompt.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prompt.internalValue = value.prompt;
      this._response.internalValue = value.response;
    }
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt = new AiGatewayGuardrailsPromptOutputReference(this, "prompt");
  public get prompt() {
    return this._prompt;
  }
  public putPrompt(value: AiGatewayGuardrailsPrompt) {
    this._prompt.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt.internalValue;
  }

  // response - computed: false, optional: false, required: true
  private _response = new AiGatewayGuardrailsResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: AiGatewayGuardrailsResponse) {
    this._response.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}
export interface AiGatewayOtel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authorization AiGateway#authorization}
  */
  readonly authorization?: string;
  /**
  * Available values: "json", "protobuf".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#content_type AiGateway#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#headers AiGateway#headers}
  */
  readonly headers: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#url AiGateway#url}
  */
  readonly url: string;
}

export function aiGatewayOtelToTerraform(struct?: AiGatewayOtel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: cdktf.stringToTerraform(struct!.authorization),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function aiGatewayOtelToHclTerraform(struct?: AiGatewayOtel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: cdktf.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayOtelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiGatewayOtel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayOtel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization = undefined;
      this._contentType = undefined;
      this._headers = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization = value.authorization;
      this._contentType = value.contentType;
      this._headers = value.headers;
      this._url = value.url;
    }
  }

  // authorization - computed: true, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // headers - computed: true, optional: false, required: true
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // url - computed: true, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class AiGatewayOtelList extends cdktf.ComplexList {
  public internalValue? : AiGatewayOtel[] | cdktf.IResolvable

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
  public get(index: number): AiGatewayOtelOutputReference {
    return new AiGatewayOtelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiGatewaySpendLimitsRulesAiGatewayProvider {
  /**
  * Available values: "filter".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#mode AiGateway#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}
  */
  readonly values: string[];
}

export function aiGatewaySpendLimitsRulesAiGatewayProviderToTerraform(struct?: AiGatewaySpendLimitsRulesAiGatewayProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function aiGatewaySpendLimitsRulesAiGatewayProviderToHclTerraform(struct?: AiGatewaySpendLimitsRulesAiGatewayProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewaySpendLimitsRulesAiGatewayProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewaySpendLimitsRulesAiGatewayProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._values = value.values;
    }
  }

  // mode - computed: true, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // values - computed: true, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface AiGatewaySpendLimitsRulesMetadata {
  /**
  * Available values: "partition", "filter".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#mode AiGateway#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}
  */
  readonly values?: string[];
}

export function aiGatewaySpendLimitsRulesMetadataToTerraform(struct?: AiGatewaySpendLimitsRulesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function aiGatewaySpendLimitsRulesMetadataToHclTerraform(struct?: AiGatewaySpendLimitsRulesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewaySpendLimitsRulesMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiGatewaySpendLimitsRulesMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewaySpendLimitsRulesMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._values = value.values;
    }
  }

  // mode - computed: true, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AiGatewaySpendLimitsRulesMetadataMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: AiGatewaySpendLimitsRulesMetadata } | cdktf.IResolvable

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
  public get(key: string): AiGatewaySpendLimitsRulesMetadataOutputReference {
    return new AiGatewaySpendLimitsRulesMetadataOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface AiGatewaySpendLimitsRulesModel {
  /**
  * Available values: "filter".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#mode AiGateway#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#values AiGateway#values}
  */
  readonly values: string[];
}

export function aiGatewaySpendLimitsRulesModelToTerraform(struct?: AiGatewaySpendLimitsRulesModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function aiGatewaySpendLimitsRulesModelToHclTerraform(struct?: AiGatewaySpendLimitsRulesModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewaySpendLimitsRulesModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewaySpendLimitsRulesModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewaySpendLimitsRulesModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._values = value.values;
    }
  }

  // mode - computed: true, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // values - computed: true, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface AiGatewaySpendLimitsRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#ai_gateway_provider AiGateway#ai_gateway_provider}
  */
  readonly aiGatewayProvider?: AiGatewaySpendLimitsRulesAiGatewayProvider;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#id AiGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#limit AiGateway#limit}
  */
  readonly limit: number;
  /**
  * Available values: "cost".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#limit_type AiGateway#limit_type}
  */
  readonly limitType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#metadata AiGateway#metadata}
  */
  readonly metadata?: { [key: string]: AiGatewaySpendLimitsRulesMetadata } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#model AiGateway#model}
  */
  readonly model?: AiGatewaySpendLimitsRulesModel;
  /**
  * Available values: "fixed", "sliding".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#technique AiGateway#technique}
  */
  readonly technique?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#window AiGateway#window}
  */
  readonly window: number;
}

export function aiGatewaySpendLimitsRulesToTerraform(struct?: AiGatewaySpendLimitsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_gateway_provider: aiGatewaySpendLimitsRulesAiGatewayProviderToTerraform(struct!.aiGatewayProvider),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    limit: cdktf.numberToTerraform(struct!.limit),
    limit_type: cdktf.stringToTerraform(struct!.limitType),
    metadata: cdktf.hashMapper(aiGatewaySpendLimitsRulesMetadataToTerraform)(struct!.metadata),
    model: aiGatewaySpendLimitsRulesModelToTerraform(struct!.model),
    technique: cdktf.stringToTerraform(struct!.technique),
    window: cdktf.numberToTerraform(struct!.window),
  }
}


export function aiGatewaySpendLimitsRulesToHclTerraform(struct?: AiGatewaySpendLimitsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_gateway_provider: {
      value: aiGatewaySpendLimitsRulesAiGatewayProviderToHclTerraform(struct!.aiGatewayProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewaySpendLimitsRulesAiGatewayProvider",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_type: {
      value: cdktf.stringToHclTerraform(struct!.limitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(aiGatewaySpendLimitsRulesMetadataToHclTerraform)(struct!.metadata),
      isBlock: true,
      type: "map",
      storageClassType: "AiGatewaySpendLimitsRulesMetadataMap",
    },
    model: {
      value: aiGatewaySpendLimitsRulesModelToHclTerraform(struct!.model),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewaySpendLimitsRulesModel",
    },
    technique: {
      value: cdktf.stringToHclTerraform(struct!.technique),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window: {
      value: cdktf.numberToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewaySpendLimitsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiGatewaySpendLimitsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiGatewayProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiGatewayProvider = this._aiGatewayProvider?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitType = this._limitType;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._model?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model?.internalValue;
    }
    if (this._technique !== undefined) {
      hasAnyValues = true;
      internalValueResult.technique = this._technique;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewaySpendLimitsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiGatewayProvider.internalValue = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._limit = undefined;
      this._limitType = undefined;
      this._metadata.internalValue = undefined;
      this._model.internalValue = undefined;
      this._technique = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiGatewayProvider.internalValue = value.aiGatewayProvider;
      this._enabled = value.enabled;
      this._id = value.id;
      this._limit = value.limit;
      this._limitType = value.limitType;
      this._metadata.internalValue = value.metadata;
      this._model.internalValue = value.model;
      this._technique = value.technique;
      this._window = value.window;
    }
  }

  // ai_gateway_provider - computed: true, optional: true, required: false
  private _aiGatewayProvider = new AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference(this, "ai_gateway_provider");
  public get aiGatewayProvider() {
    return this._aiGatewayProvider;
  }
  public putAiGatewayProvider(value: AiGatewaySpendLimitsRulesAiGatewayProvider) {
    this._aiGatewayProvider.internalValue = value;
  }
  public resetAiGatewayProvider() {
    this._aiGatewayProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiGatewayProviderInput() {
    return this._aiGatewayProvider.internalValue;
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

  // limit - computed: true, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limit_type - computed: true, optional: false, required: true
  private _limitType?: string; 
  public get limitType() {
    return this.getStringAttribute('limit_type');
  }
  public set limitType(value: string) {
    this._limitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitTypeInput() {
    return this._limitType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata = new AiGatewaySpendLimitsRulesMetadataMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: { [key: string]: AiGatewaySpendLimitsRulesMetadata } | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // model - computed: true, optional: true, required: false
  private _model = new AiGatewaySpendLimitsRulesModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }
  public putModel(value: AiGatewaySpendLimitsRulesModel) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
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

  // window - computed: true, optional: false, required: true
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}

export class AiGatewaySpendLimitsRulesList extends cdktf.ComplexList {
  public internalValue? : AiGatewaySpendLimitsRules[] | cdktf.IResolvable

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
  public get(index: number): AiGatewaySpendLimitsRulesOutputReference {
    return new AiGatewaySpendLimitsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiGatewaySpendLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#enabled AiGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#rules AiGateway#rules}
  */
  readonly rules?: AiGatewaySpendLimitsRules[] | cdktf.IResolvable;
}

export function aiGatewaySpendLimitsToTerraform(struct?: AiGatewaySpendLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(aiGatewaySpendLimitsRulesToTerraform, false)(struct!.rules),
  }
}


export function aiGatewaySpendLimitsToHclTerraform(struct?: AiGatewaySpendLimits | cdktf.IResolvable): any {
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
    rules: {
      value: cdktf.listMapperHcl(aiGatewaySpendLimitsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "AiGatewaySpendLimitsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewaySpendLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewaySpendLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewaySpendLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._rules.internalValue = value.rules;
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

  // rules - computed: true, optional: true, required: false
  private _rules = new AiGatewaySpendLimitsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AiGatewaySpendLimitsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface AiGatewayStripeUsageEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#payload AiGateway#payload}
  */
  readonly payload: string;
}

export function aiGatewayStripeUsageEventsToTerraform(struct?: AiGatewayStripeUsageEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.stringToTerraform(struct!.payload),
  }
}


export function aiGatewayStripeUsageEventsToHclTerraform(struct?: AiGatewayStripeUsageEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayStripeUsageEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiGatewayStripeUsageEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayStripeUsageEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload = value.payload;
    }
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }
}

export class AiGatewayStripeUsageEventsList extends cdktf.ComplexList {
  public internalValue? : AiGatewayStripeUsageEvents[] | cdktf.IResolvable

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
  public get(index: number): AiGatewayStripeUsageEventsOutputReference {
    return new AiGatewayStripeUsageEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiGatewayStripe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#authorization AiGateway#authorization}
  */
  readonly authorization: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#usage_events AiGateway#usage_events}
  */
  readonly usageEvents: AiGatewayStripeUsageEvents[] | cdktf.IResolvable;
}

export function aiGatewayStripeToTerraform(struct?: AiGatewayStripe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: cdktf.stringToTerraform(struct!.authorization),
    usage_events: cdktf.listMapper(aiGatewayStripeUsageEventsToTerraform, false)(struct!.usageEvents),
  }
}


export function aiGatewayStripeToHclTerraform(struct?: AiGatewayStripe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: cdktf.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_events: {
      value: cdktf.listMapperHcl(aiGatewayStripeUsageEventsToHclTerraform, false)(struct!.usageEvents),
      isBlock: true,
      type: "list",
      storageClassType: "AiGatewayStripeUsageEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayStripeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayStripe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    if (this._usageEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageEvents = this._usageEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayStripe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization = undefined;
      this._usageEvents.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization = value.authorization;
      this._usageEvents.internalValue = value.usageEvents;
    }
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // usage_events - computed: false, optional: false, required: true
  private _usageEvents = new AiGatewayStripeUsageEventsList(this, "usage_events", false);
  public get usageEvents() {
    return this._usageEvents;
  }
  public putUsageEvents(value: AiGatewayStripeUsageEvents[] | cdktf.IResolvable) {
    this._usageEvents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageEventsInput() {
    return this._usageEvents.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway cloudflare_ai_gateway}
*/
export class AiGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ai_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiGateway to import
  * @param importFromId The id of the existing AiGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway cloudflare_ai_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: AiGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ai_gateway',
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
    this._authentication = config.authentication;
    this._cacheInvalidateOnUpdate = config.cacheInvalidateOnUpdate;
    this._cacheTtl = config.cacheTtl;
    this._collectLogs = config.collectLogs;
    this._dlp.internalValue = config.dlp;
    this._guardrails.internalValue = config.guardrails;
    this._id = config.id;
    this._logManagement = config.logManagement;
    this._logManagementStrategy = config.logManagementStrategy;
    this._logpush = config.logpush;
    this._logpushPublicKey = config.logpushPublicKey;
    this._otel.internalValue = config.otel;
    this._rateLimitingInterval = config.rateLimitingInterval;
    this._rateLimitingLimit = config.rateLimitingLimit;
    this._rateLimitingTechnique = config.rateLimitingTechnique;
    this._retryBackoff = config.retryBackoff;
    this._retryDelay = config.retryDelay;
    this._retryMaxAttempts = config.retryMaxAttempts;
    this._spendLimits.internalValue = config.spendLimits;
    this._storeId = config.storeId;
    this._stripe.internalValue = config.stripe;
    this._workersAiBillingMode = config.workersAiBillingMode;
    this._zdr = config.zdr;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication?: boolean | cdktf.IResolvable; 
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }
  public set authentication(value: boolean | cdktf.IResolvable) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // cache_invalidate_on_update - computed: false, optional: false, required: true
  private _cacheInvalidateOnUpdate?: boolean | cdktf.IResolvable; 
  public get cacheInvalidateOnUpdate() {
    return this.getBooleanAttribute('cache_invalidate_on_update');
  }
  public set cacheInvalidateOnUpdate(value: boolean | cdktf.IResolvable) {
    this._cacheInvalidateOnUpdate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInvalidateOnUpdateInput() {
    return this._cacheInvalidateOnUpdate;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // collect_logs - computed: false, optional: false, required: true
  private _collectLogs?: boolean | cdktf.IResolvable; 
  public get collectLogs() {
    return this.getBooleanAttribute('collect_logs');
  }
  public set collectLogs(value: boolean | cdktf.IResolvable) {
    this._collectLogs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectLogsInput() {
    return this._collectLogs;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dlp - computed: false, optional: true, required: false
  private _dlp = new AiGatewayDlpOutputReference(this, "dlp");
  public get dlp() {
    return this._dlp;
  }
  public putDlp(value: AiGatewayDlp) {
    this._dlp.internalValue = value;
  }
  public resetDlp() {
    this._dlp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpInput() {
    return this._dlp.internalValue;
  }

  // guardrails - computed: false, optional: true, required: false
  private _guardrails = new AiGatewayGuardrailsOutputReference(this, "guardrails");
  public get guardrails() {
    return this._guardrails;
  }
  public putGuardrails(value: AiGatewayGuardrails) {
    this._guardrails.internalValue = value;
  }
  public resetGuardrails() {
    this._guardrails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailsInput() {
    return this._guardrails.internalValue;
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // log_management - computed: false, optional: true, required: false
  private _logManagement?: number; 
  public get logManagement() {
    return this.getNumberAttribute('log_management');
  }
  public set logManagement(value: number) {
    this._logManagement = value;
  }
  public resetLogManagement() {
    this._logManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logManagementInput() {
    return this._logManagement;
  }

  // log_management_strategy - computed: false, optional: true, required: false
  private _logManagementStrategy?: string; 
  public get logManagementStrategy() {
    return this.getStringAttribute('log_management_strategy');
  }
  public set logManagementStrategy(value: string) {
    this._logManagementStrategy = value;
  }
  public resetLogManagementStrategy() {
    this._logManagementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logManagementStrategyInput() {
    return this._logManagementStrategy;
  }

  // logpush - computed: false, optional: true, required: false
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

  // logpush_public_key - computed: false, optional: true, required: false
  private _logpushPublicKey?: string; 
  public get logpushPublicKey() {
    return this.getStringAttribute('logpush_public_key');
  }
  public set logpushPublicKey(value: string) {
    this._logpushPublicKey = value;
  }
  public resetLogpushPublicKey() {
    this._logpushPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logpushPublicKeyInput() {
    return this._logpushPublicKey;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // otel - computed: true, optional: true, required: false
  private _otel = new AiGatewayOtelList(this, "otel", false);
  public get otel() {
    return this._otel;
  }
  public putOtel(value: AiGatewayOtel[] | cdktf.IResolvable) {
    this._otel.internalValue = value;
  }
  public resetOtel() {
    this._otel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otelInput() {
    return this._otel.internalValue;
  }

  // rate_limiting_interval - computed: false, optional: false, required: true
  private _rateLimitingInterval?: number; 
  public get rateLimitingInterval() {
    return this.getNumberAttribute('rate_limiting_interval');
  }
  public set rateLimitingInterval(value: number) {
    this._rateLimitingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitingIntervalInput() {
    return this._rateLimitingInterval;
  }

  // rate_limiting_limit - computed: false, optional: false, required: true
  private _rateLimitingLimit?: number; 
  public get rateLimitingLimit() {
    return this.getNumberAttribute('rate_limiting_limit');
  }
  public set rateLimitingLimit(value: number) {
    this._rateLimitingLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitingLimitInput() {
    return this._rateLimitingLimit;
  }

  // rate_limiting_technique - computed: false, optional: true, required: false
  private _rateLimitingTechnique?: string; 
  public get rateLimitingTechnique() {
    return this.getStringAttribute('rate_limiting_technique');
  }
  public set rateLimitingTechnique(value: string) {
    this._rateLimitingTechnique = value;
  }
  public resetRateLimitingTechnique() {
    this._rateLimitingTechnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitingTechniqueInput() {
    return this._rateLimitingTechnique;
  }

  // retry_backoff - computed: false, optional: true, required: false
  private _retryBackoff?: string; 
  public get retryBackoff() {
    return this.getStringAttribute('retry_backoff');
  }
  public set retryBackoff(value: string) {
    this._retryBackoff = value;
  }
  public resetRetryBackoff() {
    this._retryBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryBackoffInput() {
    return this._retryBackoff;
  }

  // retry_delay - computed: false, optional: true, required: false
  private _retryDelay?: number; 
  public get retryDelay() {
    return this.getNumberAttribute('retry_delay');
  }
  public set retryDelay(value: number) {
    this._retryDelay = value;
  }
  public resetRetryDelay() {
    this._retryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelayInput() {
    return this._retryDelay;
  }

  // retry_max_attempts - computed: false, optional: true, required: false
  private _retryMaxAttempts?: number; 
  public get retryMaxAttempts() {
    return this.getNumberAttribute('retry_max_attempts');
  }
  public set retryMaxAttempts(value: number) {
    this._retryMaxAttempts = value;
  }
  public resetRetryMaxAttempts() {
    this._retryMaxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxAttemptsInput() {
    return this._retryMaxAttempts;
  }

  // spend_limits - computed: true, optional: true, required: false
  private _spendLimits = new AiGatewaySpendLimitsOutputReference(this, "spend_limits");
  public get spendLimits() {
    return this._spendLimits;
  }
  public putSpendLimits(value: AiGatewaySpendLimits) {
    this._spendLimits.internalValue = value;
  }
  public resetSpendLimits() {
    this._spendLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spendLimitsInput() {
    return this._spendLimits.internalValue;
  }

  // store_id - computed: false, optional: true, required: false
  private _storeId?: string; 
  public get storeId() {
    return this.getStringAttribute('store_id');
  }
  public set storeId(value: string) {
    this._storeId = value;
  }
  public resetStoreId() {
    this._storeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeIdInput() {
    return this._storeId;
  }

  // stripe - computed: false, optional: true, required: false
  private _stripe = new AiGatewayStripeOutputReference(this, "stripe");
  public get stripe() {
    return this._stripe;
  }
  public putStripe(value: AiGatewayStripe) {
    this._stripe.internalValue = value;
  }
  public resetStripe() {
    this._stripe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripeInput() {
    return this._stripe.internalValue;
  }

  // workers_ai_billing_mode - computed: true, optional: true, required: false
  private _workersAiBillingMode?: string; 
  public get workersAiBillingMode() {
    return this.getStringAttribute('workers_ai_billing_mode');
  }
  public set workersAiBillingMode(value: string) {
    this._workersAiBillingMode = value;
  }
  public resetWorkersAiBillingMode() {
    this._workersAiBillingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersAiBillingModeInput() {
    return this._workersAiBillingMode;
  }

  // zdr - computed: false, optional: true, required: false
  private _zdr?: boolean | cdktf.IResolvable; 
  public get zdr() {
    return this.getBooleanAttribute('zdr');
  }
  public set zdr(value: boolean | cdktf.IResolvable) {
    this._zdr = value;
  }
  public resetZdr() {
    this._zdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zdrInput() {
    return this._zdr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      authentication: cdktf.booleanToTerraform(this._authentication),
      cache_invalidate_on_update: cdktf.booleanToTerraform(this._cacheInvalidateOnUpdate),
      cache_ttl: cdktf.numberToTerraform(this._cacheTtl),
      collect_logs: cdktf.booleanToTerraform(this._collectLogs),
      dlp: aiGatewayDlpToTerraform(this._dlp.internalValue),
      guardrails: aiGatewayGuardrailsToTerraform(this._guardrails.internalValue),
      id: cdktf.stringToTerraform(this._id),
      log_management: cdktf.numberToTerraform(this._logManagement),
      log_management_strategy: cdktf.stringToTerraform(this._logManagementStrategy),
      logpush: cdktf.booleanToTerraform(this._logpush),
      logpush_public_key: cdktf.stringToTerraform(this._logpushPublicKey),
      otel: cdktf.listMapper(aiGatewayOtelToTerraform, false)(this._otel.internalValue),
      rate_limiting_interval: cdktf.numberToTerraform(this._rateLimitingInterval),
      rate_limiting_limit: cdktf.numberToTerraform(this._rateLimitingLimit),
      rate_limiting_technique: cdktf.stringToTerraform(this._rateLimitingTechnique),
      retry_backoff: cdktf.stringToTerraform(this._retryBackoff),
      retry_delay: cdktf.numberToTerraform(this._retryDelay),
      retry_max_attempts: cdktf.numberToTerraform(this._retryMaxAttempts),
      spend_limits: aiGatewaySpendLimitsToTerraform(this._spendLimits.internalValue),
      store_id: cdktf.stringToTerraform(this._storeId),
      stripe: aiGatewayStripeToTerraform(this._stripe.internalValue),
      workers_ai_billing_mode: cdktf.stringToTerraform(this._workersAiBillingMode),
      zdr: cdktf.booleanToTerraform(this._zdr),
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
      authentication: {
        value: cdktf.booleanToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_invalidate_on_update: {
        value: cdktf.booleanToHclTerraform(this._cacheInvalidateOnUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_ttl: {
        value: cdktf.numberToHclTerraform(this._cacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collect_logs: {
        value: cdktf.booleanToHclTerraform(this._collectLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dlp: {
        value: aiGatewayDlpToHclTerraform(this._dlp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiGatewayDlp",
      },
      guardrails: {
        value: aiGatewayGuardrailsToHclTerraform(this._guardrails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiGatewayGuardrails",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_management: {
        value: cdktf.numberToHclTerraform(this._logManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_management_strategy: {
        value: cdktf.stringToHclTerraform(this._logManagementStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logpush: {
        value: cdktf.booleanToHclTerraform(this._logpush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logpush_public_key: {
        value: cdktf.stringToHclTerraform(this._logpushPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      otel: {
        value: cdktf.listMapperHcl(aiGatewayOtelToHclTerraform, false)(this._otel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiGatewayOtelList",
      },
      rate_limiting_interval: {
        value: cdktf.numberToHclTerraform(this._rateLimitingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limiting_limit: {
        value: cdktf.numberToHclTerraform(this._rateLimitingLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limiting_technique: {
        value: cdktf.stringToHclTerraform(this._rateLimitingTechnique),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_backoff: {
        value: cdktf.stringToHclTerraform(this._retryBackoff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_delay: {
        value: cdktf.numberToHclTerraform(this._retryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_max_attempts: {
        value: cdktf.numberToHclTerraform(this._retryMaxAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spend_limits: {
        value: aiGatewaySpendLimitsToHclTerraform(this._spendLimits.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiGatewaySpendLimits",
      },
      store_id: {
        value: cdktf.stringToHclTerraform(this._storeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stripe: {
        value: aiGatewayStripeToHclTerraform(this._stripe.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiGatewayStripe",
      },
      workers_ai_billing_mode: {
        value: cdktf.stringToHclTerraform(this._workersAiBillingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zdr: {
        value: cdktf.booleanToHclTerraform(this._zdr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
