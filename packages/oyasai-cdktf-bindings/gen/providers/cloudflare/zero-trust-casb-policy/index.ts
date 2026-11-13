// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustCasbPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#account_id ZeroTrustCasbPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * Actions to execute when this policy is triggered, grouped by action type.
  * A policy must contain at least one action across all groups and may include
  * at most one remediation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#actions ZeroTrustCasbPolicy#actions}
  */
  readonly actions: ZeroTrustCasbPolicyActions;
  /**
  * When true, the policy applies to all integrations for the account. When false, integration_ids must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#applies_to_all_integrations ZeroTrustCasbPolicy#applies_to_all_integrations}
  */
  readonly appliesToAllIntegrations: boolean | cdktf.IResolvable;
  /**
  * Optional description of what this policy does.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#description ZeroTrustCasbPolicy#description}
  */
  readonly description?: string;
  /**
  * Display name for the policy configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#display_name ZeroTrustCasbPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Boolean specifying if the policy is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#enabled ZeroTrustCasbPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The finding type this policy is associated with. All remediation actions must match this finding type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#finding_type_id ZeroTrustCasbPolicy#finding_type_id}
  */
  readonly findingTypeId: string;
  /**
  * The integrations this policy applies to. Required when applies_to_all_integrations is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#integration_ids ZeroTrustCasbPolicy#integration_ids}
  */
  readonly integrationIds?: string[];
}
export interface ZeroTrustCasbPolicyActionsRemediationTypes {
  /**
  * The ID of the remediation type to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#remediation_type_id ZeroTrustCasbPolicy#remediation_type_id}
  */
  readonly remediationTypeId: string;
}

export function zeroTrustCasbPolicyActionsRemediationTypesToTerraform(struct?: ZeroTrustCasbPolicyActionsRemediationTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remediation_type_id: cdktf.stringToTerraform(struct!.remediationTypeId),
  }
}


export function zeroTrustCasbPolicyActionsRemediationTypesToHclTerraform(struct?: ZeroTrustCasbPolicyActionsRemediationTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remediation_type_id: {
      value: cdktf.stringToHclTerraform(struct!.remediationTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbPolicyActionsRemediationTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustCasbPolicyActionsRemediationTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remediationTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationTypeId = this._remediationTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbPolicyActionsRemediationTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remediationTypeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remediationTypeId = value.remediationTypeId;
    }
  }

  // remediation_type_id - computed: false, optional: false, required: true
  private _remediationTypeId?: string; 
  public get remediationTypeId() {
    return this.getStringAttribute('remediation_type_id');
  }
  public set remediationTypeId(value: string) {
    this._remediationTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTypeIdInput() {
    return this._remediationTypeId;
  }
}

export class ZeroTrustCasbPolicyActionsRemediationTypesList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustCasbPolicyActionsRemediationTypes[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustCasbPolicyActionsRemediationTypesOutputReference {
    return new ZeroTrustCasbPolicyActionsRemediationTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustCasbPolicyActionsWebhookConfigs {
  /**
  * The ID of the webhook configuration to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#webhook_config_id ZeroTrustCasbPolicy#webhook_config_id}
  */
  readonly webhookConfigId: string;
}

export function zeroTrustCasbPolicyActionsWebhookConfigsToTerraform(struct?: ZeroTrustCasbPolicyActionsWebhookConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    webhook_config_id: cdktf.stringToTerraform(struct!.webhookConfigId),
  }
}


export function zeroTrustCasbPolicyActionsWebhookConfigsToHclTerraform(struct?: ZeroTrustCasbPolicyActionsWebhookConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    webhook_config_id: {
      value: cdktf.stringToHclTerraform(struct!.webhookConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustCasbPolicyActionsWebhookConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webhookConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookConfigId = this._webhookConfigId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbPolicyActionsWebhookConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._webhookConfigId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._webhookConfigId = value.webhookConfigId;
    }
  }

  // webhook_config_id - computed: false, optional: false, required: true
  private _webhookConfigId?: string; 
  public get webhookConfigId() {
    return this.getStringAttribute('webhook_config_id');
  }
  public set webhookConfigId(value: string) {
    this._webhookConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookConfigIdInput() {
    return this._webhookConfigId;
  }
}

export class ZeroTrustCasbPolicyActionsWebhookConfigsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustCasbPolicyActionsWebhookConfigs[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference {
    return new ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustCasbPolicyActions {
  /**
  * Remediation actions to execute (at most one).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#remediation_types ZeroTrustCasbPolicy#remediation_types}
  */
  readonly remediationTypes?: ZeroTrustCasbPolicyActionsRemediationTypes[] | cdktf.IResolvable;
  /**
  * Webhook actions to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#webhook_configs ZeroTrustCasbPolicy#webhook_configs}
  */
  readonly webhookConfigs?: ZeroTrustCasbPolicyActionsWebhookConfigs[] | cdktf.IResolvable;
}

export function zeroTrustCasbPolicyActionsToTerraform(struct?: ZeroTrustCasbPolicyActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remediation_types: cdktf.listMapper(zeroTrustCasbPolicyActionsRemediationTypesToTerraform, false)(struct!.remediationTypes),
    webhook_configs: cdktf.listMapper(zeroTrustCasbPolicyActionsWebhookConfigsToTerraform, false)(struct!.webhookConfigs),
  }
}


export function zeroTrustCasbPolicyActionsToHclTerraform(struct?: ZeroTrustCasbPolicyActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remediation_types: {
      value: cdktf.listMapperHcl(zeroTrustCasbPolicyActionsRemediationTypesToHclTerraform, false)(struct!.remediationTypes),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustCasbPolicyActionsRemediationTypesList",
    },
    webhook_configs: {
      value: cdktf.listMapperHcl(zeroTrustCasbPolicyActionsWebhookConfigsToHclTerraform, false)(struct!.webhookConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustCasbPolicyActionsWebhookConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustCasbPolicyActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustCasbPolicyActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remediationTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationTypes = this._remediationTypes?.internalValue;
    }
    if (this._webhookConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookConfigs = this._webhookConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustCasbPolicyActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remediationTypes.internalValue = undefined;
      this._webhookConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remediationTypes.internalValue = value.remediationTypes;
      this._webhookConfigs.internalValue = value.webhookConfigs;
    }
  }

  // remediation_types - computed: false, optional: true, required: false
  private _remediationTypes = new ZeroTrustCasbPolicyActionsRemediationTypesList(this, "remediation_types", false);
  public get remediationTypes() {
    return this._remediationTypes;
  }
  public putRemediationTypes(value: ZeroTrustCasbPolicyActionsRemediationTypes[] | cdktf.IResolvable) {
    this._remediationTypes.internalValue = value;
  }
  public resetRemediationTypes() {
    this._remediationTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTypesInput() {
    return this._remediationTypes.internalValue;
  }

  // webhook_configs - computed: false, optional: true, required: false
  private _webhookConfigs = new ZeroTrustCasbPolicyActionsWebhookConfigsList(this, "webhook_configs", false);
  public get webhookConfigs() {
    return this._webhookConfigs;
  }
  public putWebhookConfigs(value: ZeroTrustCasbPolicyActionsWebhookConfigs[] | cdktf.IResolvable) {
    this._webhookConfigs.internalValue = value;
  }
  public resetWebhookConfigs() {
    this._webhookConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookConfigsInput() {
    return this._webhookConfigs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy cloudflare_zero_trust_casb_policy}
*/
export class ZeroTrustCasbPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_casb_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustCasbPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustCasbPolicy to import
  * @param importFromId The id of the existing ZeroTrustCasbPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustCasbPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_casb_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_policy cloudflare_zero_trust_casb_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustCasbPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustCasbPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_casb_policy',
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
    this._actions.internalValue = config.actions;
    this._appliesToAllIntegrations = config.appliesToAllIntegrations;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._findingTypeId = config.findingTypeId;
    this._integrationIds = config.integrationIds;
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

  // actions - computed: false, optional: false, required: true
  private _actions = new ZeroTrustCasbPolicyActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: ZeroTrustCasbPolicyActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // applies_to_all_integrations - computed: false, optional: false, required: true
  private _appliesToAllIntegrations?: boolean | cdktf.IResolvable; 
  public get appliesToAllIntegrations() {
    return this.getBooleanAttribute('applies_to_all_integrations');
  }
  public set appliesToAllIntegrations(value: boolean | cdktf.IResolvable) {
    this._appliesToAllIntegrations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToAllIntegrationsInput() {
    return this._appliesToAllIntegrations;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // disabled_at - computed: true, optional: false, required: false
  public get disabledAt() {
    return this.getStringAttribute('disabled_at');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // finding_type_id - computed: false, optional: false, required: true
  private _findingTypeId?: string; 
  public get findingTypeId() {
    return this.getStringAttribute('finding_type_id');
  }
  public set findingTypeId(value: string) {
    this._findingTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findingTypeIdInput() {
    return this._findingTypeId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_ids - computed: true, optional: true, required: false
  private _integrationIds?: string[]; 
  public get integrationIds() {
    return this.getListAttribute('integration_ids');
  }
  public set integrationIds(value: string[]) {
    this._integrationIds = value;
  }
  public resetIntegrationIds() {
    this._integrationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdsInput() {
    return this._integrationIds;
  }

  // last_triggered_at - computed: true, optional: false, required: false
  public get lastTriggeredAt() {
    return this.getStringAttribute('last_triggered_at');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      actions: zeroTrustCasbPolicyActionsToTerraform(this._actions.internalValue),
      applies_to_all_integrations: cdktf.booleanToTerraform(this._appliesToAllIntegrations),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      finding_type_id: cdktf.stringToTerraform(this._findingTypeId),
      integration_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrationIds),
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
      actions: {
        value: zeroTrustCasbPolicyActionsToHclTerraform(this._actions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustCasbPolicyActions",
      },
      applies_to_all_integrations: {
        value: cdktf.booleanToHclTerraform(this._appliesToAllIntegrations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      finding_type_id: {
        value: cdktf.stringToHclTerraform(this._findingTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._integrationIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
