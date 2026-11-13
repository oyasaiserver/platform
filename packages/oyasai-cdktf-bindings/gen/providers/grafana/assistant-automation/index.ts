// https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssistantAutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Context items attached to the prompt, as a JSON array string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#context_items AssistantAutomation#context_items}
  */
  readonly contextItems?: string;
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#description AssistantAutomation#description}
  */
  readonly description?: string;
  /**
  * Whether the automation runs on its schedule. Disabled automations can still be run manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#enabled AssistantAutomation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Run identity: user (default) or service_account. service_account requires scope = tenant and Grafana organization Admin permission, including updates to an existing service-account automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#execution_mode AssistantAutomation#execution_mode}
  */
  readonly executionMode?: string;
  /**
  * Operator labels. Omit or use an empty map to remove managed labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#labels AssistantAutomation#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Human-friendly automation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#name AssistantAutomation#name}
  */
  readonly name: string;
  /**
  * The prompt sent to Assistant on each run. Prefix with `/<skill-name>` to start from a skill.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#prompt AssistantAutomation#prompt}
  */
  readonly prompt: string;
  /**
  * Standard 5-field cron expression, or multiple expressions separated by semicolons. For example `0 9 * * 1-5; 0 10 * * 0`. Omit for a manual-only automation. Combined firings must be at least 15 minutes apart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#schedule_cron AssistantAutomation#schedule_cron}
  */
  readonly scheduleCron?: string;
  /**
  * Inclusive schedule deadline in RFC3339 format with second precision. Requires schedule_cron and backend support for bounded schedules. Omit to remove the deadline. New or changed deadlines must be in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#schedule_ends_at AssistantAutomation#schedule_ends_at}
  */
  readonly scheduleEndsAt?: string;
  /**
  * IANA timezone the schedule is interpreted in, for example `Europe/Paris`. Defaults to UTC when schedule_cron is set; absent for manual-only automations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#schedule_timezone AssistantAutomation#schedule_timezone}
  */
  readonly scheduleTimezone?: string;
  /**
  * Visibility. `user` keeps the automation private to its creator; `tenant` shares it with everybody in the org.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#scope AssistantAutomation#scope}
  */
  readonly scope?: string;
  /**
  * Event triggers keyed by stable, lowercase UUIDs. Each value requires type (backend trigger type) and config (a JSON object string, normally jsonencode). Keep UUIDs unchanged when editing. Omit or use an empty map to remove all triggers. GitHub and Watcher triggers require service_account execution; Slack triggers run as the mapped event author. Backend defaults and equivalent JSON formatting do not cause drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#triggers AssistantAutomation#triggers}
  */
  readonly triggers?: { [key: string]: AssistantAutomationTriggers } | cdktf.IResolvable;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#notifications AssistantAutomation#notifications}
  */
  readonly notifications?: AssistantAutomationNotifications;
}
export interface AssistantAutomationTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#config AssistantAutomation#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#type AssistantAutomation#type}
  */
  readonly type?: string;
}

export function assistantAutomationTriggersToTerraform(struct?: AssistantAutomationTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function assistantAutomationTriggersToHclTerraform(struct?: AssistantAutomationTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class AssistantAutomationTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssistantAutomationTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssistantAutomationTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._type = value.type;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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
}

export class AssistantAutomationTriggersMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: AssistantAutomationTriggers } | cdktf.IResolvable

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
  public get(key: string): AssistantAutomationTriggersOutputReference {
    return new AssistantAutomationTriggersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface AssistantAutomationNotificationsEmail {
  /**
  * Recipient email addresses, up to 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#addresses AssistantAutomation#addresses}
  */
  readonly addresses?: string[];
  /**
  * Whether email notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#enabled AssistantAutomation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Run outcomes that trigger a notification. Defaults to ["completed", "failed"]. Any of `completed`, `failed`, `needs_approval`. Notifications still require enabled = true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#notify_on AssistantAutomation#notify_on}
  */
  readonly notifyOn?: string[];
}

export function assistantAutomationNotificationsEmailToTerraform(struct?: AssistantAutomationNotificationsEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    notify_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifyOn),
  }
}


export function assistantAutomationNotificationsEmailToHclTerraform(struct?: AssistantAutomationNotificationsEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
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
    notify_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifyOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssistantAutomationNotificationsEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssistantAutomationNotificationsEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._notifyOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOn = this._notifyOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssistantAutomationNotificationsEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._enabled = undefined;
      this._notifyOn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._enabled = value.enabled;
      this._notifyOn = value.notifyOn;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
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

  // notify_on - computed: true, optional: true, required: false
  private _notifyOn?: string[]; 
  public get notifyOn() {
    return this.getListAttribute('notify_on');
  }
  public set notifyOn(value: string[]) {
    this._notifyOn = value;
  }
  public resetNotifyOn() {
    this._notifyOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnInput() {
    return this._notifyOn;
  }
}
export interface AssistantAutomationNotificationsSlackTarget {
  /**
  * Slack channel ID. Required for a `channel` target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#channel_id AssistantAutomation#channel_id}
  */
  readonly channelId?: string;
  /**
  * Slack workspace (team) ID. Omit to let Assistant resolve it; automatically resolved IDs are not managed unless configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#team_id AssistantAutomation#team_id}
  */
  readonly teamId?: string;
  /**
  * Target type. One of `channel` or `dm`. Required when a `target` block is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#type AssistantAutomation#type}
  */
  readonly type?: string;
  /**
  * Slack user ID for a `dm` target. Omit to use the creator’s verified Slack mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#user_id AssistantAutomation#user_id}
  */
  readonly userId?: string;
}

export function assistantAutomationNotificationsSlackTargetToTerraform(struct?: AssistantAutomationNotificationsSlackTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    type: cdktf.stringToTerraform(struct!.type),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function assistantAutomationNotificationsSlackTargetToHclTerraform(struct?: AssistantAutomationNotificationsSlackTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_id: {
      value: cdktf.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssistantAutomationNotificationsSlackTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssistantAutomationNotificationsSlackTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssistantAutomationNotificationsSlackTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelId = undefined;
      this._teamId = undefined;
      this._type = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelId = value.channelId;
      this._teamId = value.teamId;
      this._type = value.type;
      this._userId = value.userId;
    }
  }

  // channel_id - computed: false, optional: true, required: false
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  public resetChannelId() {
    this._channelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
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

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface AssistantAutomationNotificationsSlack {
  /**
  * Whether Slack notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#enabled AssistantAutomation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Run outcomes that trigger a notification. Defaults to ["completed", "failed"]. Any of `completed`, `failed`, `needs_approval`. Notifications still require enabled = true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#notify_on AssistantAutomation#notify_on}
  */
  readonly notifyOn?: string[];
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#target AssistantAutomation#target}
  */
  readonly target?: AssistantAutomationNotificationsSlackTarget;
}

export function assistantAutomationNotificationsSlackToTerraform(struct?: AssistantAutomationNotificationsSlack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    notify_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifyOn),
    target: assistantAutomationNotificationsSlackTargetToTerraform(struct!.target),
  }
}


export function assistantAutomationNotificationsSlackToHclTerraform(struct?: AssistantAutomationNotificationsSlack | cdktf.IResolvable): any {
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
    notify_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifyOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: assistantAutomationNotificationsSlackTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "AssistantAutomationNotificationsSlackTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssistantAutomationNotificationsSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssistantAutomationNotificationsSlack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._notifyOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOn = this._notifyOn;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssistantAutomationNotificationsSlack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._notifyOn = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._notifyOn = value.notifyOn;
      this._target.internalValue = value.target;
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

  // notify_on - computed: true, optional: true, required: false
  private _notifyOn?: string[]; 
  public get notifyOn() {
    return this.getListAttribute('notify_on');
  }
  public set notifyOn(value: string[]) {
    this._notifyOn = value;
  }
  public resetNotifyOn() {
    this._notifyOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnInput() {
    return this._notifyOn;
  }

  // target - computed: false, optional: true, required: false
  private _target = new AssistantAutomationNotificationsSlackTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: AssistantAutomationNotificationsSlackTarget) {
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
export interface AssistantAutomationNotifications {
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#email AssistantAutomation#email}
  */
  readonly email?: AssistantAutomationNotificationsEmail;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#slack AssistantAutomation#slack}
  */
  readonly slack?: AssistantAutomationNotificationsSlack;
}

export function assistantAutomationNotificationsToTerraform(struct?: AssistantAutomationNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: assistantAutomationNotificationsEmailToTerraform(struct!.email),
    slack: assistantAutomationNotificationsSlackToTerraform(struct!.slack),
  }
}


export function assistantAutomationNotificationsToHclTerraform(struct?: AssistantAutomationNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: assistantAutomationNotificationsEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "struct",
      storageClassType: "AssistantAutomationNotificationsEmail",
    },
    slack: {
      value: assistantAutomationNotificationsSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "struct",
      storageClassType: "AssistantAutomationNotificationsSlack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssistantAutomationNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssistantAutomationNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssistantAutomationNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email.internalValue = undefined;
      this._slack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email.internalValue = value.email;
      this._slack.internalValue = value.slack;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email = new AssistantAutomationNotificationsEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: AssistantAutomationNotificationsEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new AssistantAutomationNotificationsSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: AssistantAutomationNotificationsSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation grafana_assistant_automation}
*/
export class AssistantAutomation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_assistant_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssistantAutomation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssistantAutomation to import
  * @param importFromId The id of the existing AssistantAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssistantAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_assistant_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.54.0/docs/resources/assistant_automation grafana_assistant_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssistantAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: AssistantAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_assistant_automation',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.54.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contextItems = config.contextItems;
    this._description = config.description;
    this._enabled = config.enabled;
    this._executionMode = config.executionMode;
    this._labels = config.labels;
    this._name = config.name;
    this._prompt = config.prompt;
    this._scheduleCron = config.scheduleCron;
    this._scheduleEndsAt = config.scheduleEndsAt;
    this._scheduleTimezone = config.scheduleTimezone;
    this._scope = config.scope;
    this._triggers.internalValue = config.triggers;
    this._notifications.internalValue = config.notifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context_items - computed: false, optional: true, required: false
  private _contextItems?: string; 
  public get contextItems() {
    return this.getStringAttribute('context_items');
  }
  public set contextItems(value: string) {
    this._contextItems = value;
  }
  public resetContextItems() {
    this._contextItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextItemsInput() {
    return this._contextItems;
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

  // execution_mode - computed: true, optional: true, required: false
  private _executionMode?: string; 
  public get executionMode() {
    return this.getStringAttribute('execution_mode');
  }
  public set executionMode(value: string) {
    this._executionMode = value;
  }
  public resetExecutionMode() {
    this._executionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionModeInput() {
    return this._executionMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // next_run_at - computed: true, optional: false, required: false
  public get nextRunAt() {
    return this.getStringAttribute('next_run_at');
  }

  // prompt - computed: false, optional: false, required: true
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // schedule_cron - computed: false, optional: true, required: false
  private _scheduleCron?: string; 
  public get scheduleCron() {
    return this.getStringAttribute('schedule_cron');
  }
  public set scheduleCron(value: string) {
    this._scheduleCron = value;
  }
  public resetScheduleCron() {
    this._scheduleCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleCronInput() {
    return this._scheduleCron;
  }

  // schedule_ends_at - computed: false, optional: true, required: false
  private _scheduleEndsAt?: string; 
  public get scheduleEndsAt() {
    return this.getStringAttribute('schedule_ends_at');
  }
  public set scheduleEndsAt(value: string) {
    this._scheduleEndsAt = value;
  }
  public resetScheduleEndsAt() {
    this._scheduleEndsAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleEndsAtInput() {
    return this._scheduleEndsAt;
  }

  // schedule_timezone - computed: true, optional: true, required: false
  private _scheduleTimezone?: string; 
  public get scheduleTimezone() {
    return this.getStringAttribute('schedule_timezone');
  }
  public set scheduleTimezone(value: string) {
    this._scheduleTimezone = value;
  }
  public resetScheduleTimezone() {
    this._scheduleTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimezoneInput() {
    return this._scheduleTimezone;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers = new AssistantAutomationTriggersMap(this, "triggers");
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: { [key: string]: AssistantAutomationTriggers } | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  public resetTriggers() {
    this._triggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications = new AssistantAutomationNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: AssistantAutomationNotifications) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context_items: cdktf.stringToTerraform(this._contextItems),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      execution_mode: cdktf.stringToTerraform(this._executionMode),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      prompt: cdktf.stringToTerraform(this._prompt),
      schedule_cron: cdktf.stringToTerraform(this._scheduleCron),
      schedule_ends_at: cdktf.stringToTerraform(this._scheduleEndsAt),
      schedule_timezone: cdktf.stringToTerraform(this._scheduleTimezone),
      scope: cdktf.stringToTerraform(this._scope),
      triggers: cdktf.hashMapper(assistantAutomationTriggersToTerraform)(this._triggers.internalValue),
      notifications: assistantAutomationNotificationsToTerraform(this._notifications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context_items: {
        value: cdktf.stringToHclTerraform(this._contextItems),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execution_mode: {
        value: cdktf.stringToHclTerraform(this._executionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prompt: {
        value: cdktf.stringToHclTerraform(this._prompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_cron: {
        value: cdktf.stringToHclTerraform(this._scheduleCron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_ends_at: {
        value: cdktf.stringToHclTerraform(this._scheduleEndsAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_timezone: {
        value: cdktf.stringToHclTerraform(this._scheduleTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(assistantAutomationTriggersToHclTerraform)(this._triggers.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "AssistantAutomationTriggersMap",
      },
      notifications: {
        value: assistantAutomationNotificationsToHclTerraform(this._notifications.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AssistantAutomationNotifications",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
