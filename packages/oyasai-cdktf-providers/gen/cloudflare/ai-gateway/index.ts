// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#account_id AiGateway#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#authentication AiGateway#authentication}
  */
  readonly authentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}
  */
  readonly cacheInvalidateOnUpdate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}
  */
  readonly cacheTtl: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}
  */
  readonly collectLogs: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#dlp AiGateway#dlp}
  */
  readonly dlp?: AiGatewayDlp;
  /**
  * gateway id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#id AiGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#log_management AiGateway#log_management}
  */
  readonly logManagement?: number;
  /**
  * Available values: "STOP_INSERTING", "DELETE_OLDEST".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#log_management_strategy AiGateway#log_management_strategy}
  */
  readonly logManagementStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#logpush AiGateway#logpush}
  */
  readonly logpush?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}
  */
  readonly logpushPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#otel AiGateway#otel}
  */
  readonly otel?: AiGatewayOtel[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}
  */
  readonly rateLimitingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}
  */
  readonly rateLimitingLimit: number;
  /**
  * Available values: "fixed", "sliding".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#rate_limiting_technique AiGateway#rate_limiting_technique}
  */
  readonly rateLimitingTechnique?: string;
  /**
  * Backoff strategy for retry delays
  * Available values: "constant", "linear", "exponential".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#retry_backoff AiGateway#retry_backoff}
  */
  readonly retryBackoff?: string;
  /**
  * Delay between retry attempts in milliseconds (0-5000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#retry_delay AiGateway#retry_delay}
  */
  readonly retryDelay?: number;
  /**
  * Maximum number of retry attempts for failed requests (1-5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#retry_max_attempts AiGateway#retry_max_attempts}
  */
  readonly retryMaxAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#store_id AiGateway#store_id}
  */
  readonly storeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#stripe AiGateway#stripe}
  */
  readonly stripe?: AiGatewayStripe;
  /**
  * Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported.
  * Available values: "postpaid".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#workers_ai_billing_mode AiGateway#workers_ai_billing_mode}
  */
  readonly workersAiBillingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#zdr AiGateway#zdr}
  */
  readonly zdr?: boolean | cdktf.IResolvable;
}
export interface AiGatewayDlpPolicies {
  /**
  * Available values: "FLAG", "BLOCK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#action AiGateway#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#check AiGateway#check}
  */
  readonly check: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#enabled AiGateway#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#id AiGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#profiles AiGateway#profiles}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#action AiGateway#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#enabled AiGateway#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#policies AiGateway#policies}
  */
  readonly policies?: AiGatewayDlpPolicies[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#profiles AiGateway#profiles}
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
export interface AiGatewayOtel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#authorization AiGateway#authorization}
  */
  readonly authorization: string;
  /**
  * Available values: "json", "protobuf".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#content_type AiGateway#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#headers AiGateway#headers}
  */
  readonly headers: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#url AiGateway#url}
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

  // authorization - computed: true, optional: false, required: true
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
export interface AiGatewayStripeUsageEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#payload AiGateway#payload}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#authorization AiGateway#authorization}
  */
  readonly authorization: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#usage_events AiGateway#usage_events}
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway cloudflare_ai_gateway}
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
  * @param importFromId The id of the existing AiGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/ai_gateway cloudflare_ai_gateway} Resource
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
        providerVersion: '5.19.1'
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
    this._storeId = config.storeId;
    this._stripe.internalValue = config.stripe;
    this._workersAiBillingMode = config.workersAiBillingMode;
    this._zdr = config.zdr;
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
