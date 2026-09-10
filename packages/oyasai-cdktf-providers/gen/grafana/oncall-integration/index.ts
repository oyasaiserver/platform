// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OncallIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of string-to-string mappings for dynamic labels. Each map must include one key named "key" and one key named "value" (using the `grafana_oncall_label` datasource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#dynamic_labels OncallIntegration#dynamic_labels}
  */
  readonly dynamicLabels?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#id OncallIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of string-to-string mappings for static labels. Each map must include one key named "key" and one key named "value" (using the `grafana_oncall_label` datasource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#labels OncallIntegration#labels}
  */
  readonly labels?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The name of the service integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#name OncallIntegration#name}
  */
  readonly name: string;
  /**
  * The ID of the OnCall team (using the `grafana_oncall_team` datasource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#team_id OncallIntegration#team_id}
  */
  readonly teamId?: string;
  /**
  * The type of integration. Can be grafana, grafana_alerting, webhook, alertmanager, kapacitor, fabric, newrelic, datadog, pagerduty, pingdom, elastalert, amazon_sns, curler, sentry, formatted_webhook, stackdriver, uptimerobot, sentry, zabbix, prtg, inbound_email, direct_paging, jira, zendesk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#type OncallIntegration#type}
  */
  readonly type: string;
  /**
  * default_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#default_route OncallIntegration#default_route}
  */
  readonly defaultRoute: OncallIntegrationDefaultRoute;
  /**
  * templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#templates OncallIntegration#templates}
  */
  readonly templates?: OncallIntegrationTemplates;
}
export interface OncallIntegrationDefaultRouteMsteams {
  /**
  * Enable notification in MS teams. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#enabled OncallIntegration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * MS teams channel id. Alerts will be directed to this channel in Microsoft teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#id OncallIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function oncallIntegrationDefaultRouteMsteamsToTerraform(struct?: OncallIntegrationDefaultRouteMsteamsOutputReference | OncallIntegrationDefaultRouteMsteams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oncallIntegrationDefaultRouteMsteamsToHclTerraform(struct?: OncallIntegrationDefaultRouteMsteamsOutputReference | OncallIntegrationDefaultRouteMsteams): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationDefaultRouteMsteamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationDefaultRouteMsteams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationDefaultRouteMsteams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._id = value.id;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // id - computed: false, optional: true, required: false
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
}
export interface OncallIntegrationDefaultRouteSlack {
  /**
  * Slack channel id. Alerts will be directed to this channel in Slack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#channel_id OncallIntegration#channel_id}
  */
  readonly channelId?: string;
  /**
  * Enable notification in Slack. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#enabled OncallIntegration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function oncallIntegrationDefaultRouteSlackToTerraform(struct?: OncallIntegrationDefaultRouteSlackOutputReference | OncallIntegrationDefaultRouteSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function oncallIntegrationDefaultRouteSlackToHclTerraform(struct?: OncallIntegrationDefaultRouteSlackOutputReference | OncallIntegrationDefaultRouteSlack): any {
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

export class OncallIntegrationDefaultRouteSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationDefaultRouteSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationDefaultRouteSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelId = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelId = value.channelId;
      this._enabled = value.enabled;
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

  // enabled - computed: false, optional: true, required: false
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
export interface OncallIntegrationDefaultRouteTelegram {
  /**
  * Enable notification in Telegram. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#enabled OncallIntegration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Telegram channel id. Alerts will be directed to this channel in Telegram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#id OncallIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function oncallIntegrationDefaultRouteTelegramToTerraform(struct?: OncallIntegrationDefaultRouteTelegramOutputReference | OncallIntegrationDefaultRouteTelegram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oncallIntegrationDefaultRouteTelegramToHclTerraform(struct?: OncallIntegrationDefaultRouteTelegramOutputReference | OncallIntegrationDefaultRouteTelegram): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationDefaultRouteTelegramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationDefaultRouteTelegram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationDefaultRouteTelegram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._id = value.id;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // id - computed: false, optional: true, required: false
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
}
export interface OncallIntegrationDefaultRoute {
  /**
  * The ID of the escalation chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#escalation_chain_id OncallIntegration#escalation_chain_id}
  */
  readonly escalationChainId?: string;
  /**
  * msteams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#msteams OncallIntegration#msteams}
  */
  readonly msteams?: OncallIntegrationDefaultRouteMsteams;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#slack OncallIntegration#slack}
  */
  readonly slack?: OncallIntegrationDefaultRouteSlack;
  /**
  * telegram block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#telegram OncallIntegration#telegram}
  */
  readonly telegram?: OncallIntegrationDefaultRouteTelegram;
}

export function oncallIntegrationDefaultRouteToTerraform(struct?: OncallIntegrationDefaultRouteOutputReference | OncallIntegrationDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_chain_id: cdktf.stringToTerraform(struct!.escalationChainId),
    msteams: oncallIntegrationDefaultRouteMsteamsToTerraform(struct!.msteams),
    slack: oncallIntegrationDefaultRouteSlackToTerraform(struct!.slack),
    telegram: oncallIntegrationDefaultRouteTelegramToTerraform(struct!.telegram),
  }
}


export function oncallIntegrationDefaultRouteToHclTerraform(struct?: OncallIntegrationDefaultRouteOutputReference | OncallIntegrationDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalation_chain_id: {
      value: cdktf.stringToHclTerraform(struct!.escalationChainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msteams: {
      value: oncallIntegrationDefaultRouteMsteamsToHclTerraform(struct!.msteams),
      isBlock: true,
      type: "list",
      storageClassType: "OncallIntegrationDefaultRouteMsteamsList",
    },
    slack: {
      value: oncallIntegrationDefaultRouteSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "list",
      storageClassType: "OncallIntegrationDefaultRouteSlackList",
    },
    telegram: {
      value: oncallIntegrationDefaultRouteTelegramToHclTerraform(struct!.telegram),
      isBlock: true,
      type: "list",
      storageClassType: "OncallIntegrationDefaultRouteTelegramList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationDefaultRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationDefaultRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationChainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationChainId = this._escalationChainId;
    }
    if (this._msteams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msteams = this._msteams?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._telegram?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telegram = this._telegram?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationDefaultRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._escalationChainId = undefined;
      this._msteams.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._telegram.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._escalationChainId = value.escalationChainId;
      this._msteams.internalValue = value.msteams;
      this._slack.internalValue = value.slack;
      this._telegram.internalValue = value.telegram;
    }
  }

  // escalation_chain_id - computed: false, optional: true, required: false
  private _escalationChainId?: string; 
  public get escalationChainId() {
    return this.getStringAttribute('escalation_chain_id');
  }
  public set escalationChainId(value: string) {
    this._escalationChainId = value;
  }
  public resetEscalationChainId() {
    this._escalationChainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationChainIdInput() {
    return this._escalationChainId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // msteams - computed: false, optional: true, required: false
  private _msteams = new OncallIntegrationDefaultRouteMsteamsOutputReference(this, "msteams");
  public get msteams() {
    return this._msteams;
  }
  public putMsteams(value: OncallIntegrationDefaultRouteMsteams) {
    this._msteams.internalValue = value;
  }
  public resetMsteams() {
    this._msteams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msteamsInput() {
    return this._msteams.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new OncallIntegrationDefaultRouteSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: OncallIntegrationDefaultRouteSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // telegram - computed: false, optional: true, required: false
  private _telegram = new OncallIntegrationDefaultRouteTelegramOutputReference(this, "telegram");
  public get telegram() {
    return this._telegram;
  }
  public putTelegram(value: OncallIntegrationDefaultRouteTelegram) {
    this._telegram.internalValue = value;
  }
  public resetTelegram() {
    this._telegram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telegramInput() {
    return this._telegram.internalValue;
  }
}
export interface OncallIntegrationTemplatesEmail {
  /**
  * Template for Alert message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#message OncallIntegration#message}
  */
  readonly message?: string;
  /**
  * Template for Alert title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#title OncallIntegration#title}
  */
  readonly title?: string;
}

export function oncallIntegrationTemplatesEmailToTerraform(struct?: OncallIntegrationTemplatesEmailOutputReference | OncallIntegrationTemplatesEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function oncallIntegrationTemplatesEmailToHclTerraform(struct?: OncallIntegrationTemplatesEmailOutputReference | OncallIntegrationTemplatesEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationTemplatesEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationTemplatesEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationTemplatesEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._title = value.title;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface OncallIntegrationTemplatesMicrosoftTeams {
  /**
  * Template for Alert image url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#image_url OncallIntegration#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Template for Alert message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#message OncallIntegration#message}
  */
  readonly message?: string;
  /**
  * Template for Alert title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#title OncallIntegration#title}
  */
  readonly title?: string;
}

export function oncallIntegrationTemplatesMicrosoftTeamsToTerraform(struct?: OncallIntegrationTemplatesMicrosoftTeamsOutputReference | OncallIntegrationTemplatesMicrosoftTeams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    message: cdktf.stringToTerraform(struct!.message),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function oncallIntegrationTemplatesMicrosoftTeamsToHclTerraform(struct?: OncallIntegrationTemplatesMicrosoftTeamsOutputReference | OncallIntegrationTemplatesMicrosoftTeams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationTemplatesMicrosoftTeamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationTemplatesMicrosoftTeams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationTemplatesMicrosoftTeams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUrl = undefined;
      this._message = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUrl = value.imageUrl;
      this._message = value.message;
      this._title = value.title;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface OncallIntegrationTemplatesMobileApp {
  /**
  * Template for Alert message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#message OncallIntegration#message}
  */
  readonly message?: string;
  /**
  * Template for Alert title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#title OncallIntegration#title}
  */
  readonly title?: string;
}

export function oncallIntegrationTemplatesMobileAppToTerraform(struct?: OncallIntegrationTemplatesMobileAppOutputReference | OncallIntegrationTemplatesMobileApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function oncallIntegrationTemplatesMobileAppToHclTerraform(struct?: OncallIntegrationTemplatesMobileAppOutputReference | OncallIntegrationTemplatesMobileApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationTemplatesMobileAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationTemplatesMobileApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationTemplatesMobileApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._title = value.title;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface OncallIntegrationTemplatesPhoneCall {
  /**
  * Template for Alert title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#title OncallIntegration#title}
  */
  readonly title?: string;
}

export function oncallIntegrationTemplatesPhoneCallToTerraform(struct?: OncallIntegrationTemplatesPhoneCallOutputReference | OncallIntegrationTemplatesPhoneCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function oncallIntegrationTemplatesPhoneCallToHclTerraform(struct?: OncallIntegrationTemplatesPhoneCallOutputReference | OncallIntegrationTemplatesPhoneCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationTemplatesPhoneCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationTemplatesPhoneCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationTemplatesPhoneCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._title = value.title;
    }
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface OncallIntegrationTemplatesSlack {
  /**
  * Template for Alert image url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#image_url OncallIntegration#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Template for Alert message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#message OncallIntegration#message}
  */
  readonly message?: string;
  /**
  * Template for Alert title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#title OncallIntegration#title}
  */
  readonly title?: string;
}

export function oncallIntegrationTemplatesSlackToTerraform(struct?: OncallIntegrationTemplatesSlackOutputReference | OncallIntegrationTemplatesSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    message: cdktf.stringToTerraform(struct!.message),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function oncallIntegrationTemplatesSlackToHclTerraform(struct?: OncallIntegrationTemplatesSlackOutputReference | OncallIntegrationTemplatesSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationTemplatesSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationTemplatesSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationTemplatesSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUrl = undefined;
      this._message = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUrl = value.imageUrl;
      this._message = value.message;
      this._title = value.title;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface OncallIntegrationTemplatesSms {
  /**
  * Template for Alert title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#title OncallIntegration#title}
  */
  readonly title?: string;
}

export function oncallIntegrationTemplatesSmsToTerraform(struct?: OncallIntegrationTemplatesSmsOutputReference | OncallIntegrationTemplatesSms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function oncallIntegrationTemplatesSmsToHclTerraform(struct?: OncallIntegrationTemplatesSmsOutputReference | OncallIntegrationTemplatesSms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationTemplatesSmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationTemplatesSms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationTemplatesSms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._title = value.title;
    }
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface OncallIntegrationTemplatesTelegram {
  /**
  * Template for Alert image url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#image_url OncallIntegration#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Template for Alert message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#message OncallIntegration#message}
  */
  readonly message?: string;
  /**
  * Template for Alert title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#title OncallIntegration#title}
  */
  readonly title?: string;
}

export function oncallIntegrationTemplatesTelegramToTerraform(struct?: OncallIntegrationTemplatesTelegramOutputReference | OncallIntegrationTemplatesTelegram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    message: cdktf.stringToTerraform(struct!.message),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function oncallIntegrationTemplatesTelegramToHclTerraform(struct?: OncallIntegrationTemplatesTelegramOutputReference | OncallIntegrationTemplatesTelegram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationTemplatesTelegramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationTemplatesTelegram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationTemplatesTelegram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUrl = undefined;
      this._message = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUrl = value.imageUrl;
      this._message = value.message;
      this._title = value.title;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface OncallIntegrationTemplatesWeb {
  /**
  * Template for Alert image url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#image_url OncallIntegration#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Template for Alert message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#message OncallIntegration#message}
  */
  readonly message?: string;
  /**
  * Template for Alert title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#title OncallIntegration#title}
  */
  readonly title?: string;
}

export function oncallIntegrationTemplatesWebToTerraform(struct?: OncallIntegrationTemplatesWebOutputReference | OncallIntegrationTemplatesWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    message: cdktf.stringToTerraform(struct!.message),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function oncallIntegrationTemplatesWebToHclTerraform(struct?: OncallIntegrationTemplatesWebOutputReference | OncallIntegrationTemplatesWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationTemplatesWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationTemplatesWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationTemplatesWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUrl = undefined;
      this._message = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUrl = value.imageUrl;
      this._message = value.message;
      this._title = value.title;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface OncallIntegrationTemplates {
  /**
  * Template for sending a signal to acknowledge the Incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#acknowledge_signal OncallIntegration#acknowledge_signal}
  */
  readonly acknowledgeSignal?: string;
  /**
  * Template for the key by which alerts are grouped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#grouping_key OncallIntegration#grouping_key}
  */
  readonly groupingKey?: string;
  /**
  * Template for sending a signal to resolve the Incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#resolve_signal OncallIntegration#resolve_signal}
  */
  readonly resolveSignal?: string;
  /**
  * Template for a source link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#source_link OncallIntegration#source_link}
  */
  readonly sourceLink?: string;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#email OncallIntegration#email}
  */
  readonly email?: OncallIntegrationTemplatesEmail;
  /**
  * microsoft_teams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#microsoft_teams OncallIntegration#microsoft_teams}
  */
  readonly microsoftTeams?: OncallIntegrationTemplatesMicrosoftTeams;
  /**
  * mobile_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#mobile_app OncallIntegration#mobile_app}
  */
  readonly mobileApp?: OncallIntegrationTemplatesMobileApp;
  /**
  * phone_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#phone_call OncallIntegration#phone_call}
  */
  readonly phoneCall?: OncallIntegrationTemplatesPhoneCall;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#slack OncallIntegration#slack}
  */
  readonly slack?: OncallIntegrationTemplatesSlack;
  /**
  * sms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#sms OncallIntegration#sms}
  */
  readonly sms?: OncallIntegrationTemplatesSms;
  /**
  * telegram block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#telegram OncallIntegration#telegram}
  */
  readonly telegram?: OncallIntegrationTemplatesTelegram;
  /**
  * web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#web OncallIntegration#web}
  */
  readonly web?: OncallIntegrationTemplatesWeb;
}

export function oncallIntegrationTemplatesToTerraform(struct?: OncallIntegrationTemplatesOutputReference | OncallIntegrationTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acknowledge_signal: cdktf.stringToTerraform(struct!.acknowledgeSignal),
    grouping_key: cdktf.stringToTerraform(struct!.groupingKey),
    resolve_signal: cdktf.stringToTerraform(struct!.resolveSignal),
    source_link: cdktf.stringToTerraform(struct!.sourceLink),
    email: oncallIntegrationTemplatesEmailToTerraform(struct!.email),
    microsoft_teams: oncallIntegrationTemplatesMicrosoftTeamsToTerraform(struct!.microsoftTeams),
    mobile_app: oncallIntegrationTemplatesMobileAppToTerraform(struct!.mobileApp),
    phone_call: oncallIntegrationTemplatesPhoneCallToTerraform(struct!.phoneCall),
    slack: oncallIntegrationTemplatesSlackToTerraform(struct!.slack),
    sms: oncallIntegrationTemplatesSmsToTerraform(struct!.sms),
    telegram: oncallIntegrationTemplatesTelegramToTerraform(struct!.telegram),
    web: oncallIntegrationTemplatesWebToTerraform(struct!.web),
  }
}


export function oncallIntegrationTemplatesToHclTerraform(struct?: OncallIntegrationTemplatesOutputReference | OncallIntegrationTemplates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acknowledge_signal: {
      value: cdktf.stringToHclTerraform(struct!.acknowledgeSignal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grouping_key: {
      value: cdktf.stringToHclTerraform(struct!.groupingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_signal: {
      value: cdktf.stringToHclTerraform(struct!.resolveSignal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_link: {
      value: cdktf.stringToHclTerraform(struct!.sourceLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: oncallIntegrationTemplatesEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "list",
      storageClassType: "OncallIntegrationTemplatesEmailList",
    },
    microsoft_teams: {
      value: oncallIntegrationTemplatesMicrosoftTeamsToHclTerraform(struct!.microsoftTeams),
      isBlock: true,
      type: "list",
      storageClassType: "OncallIntegrationTemplatesMicrosoftTeamsList",
    },
    mobile_app: {
      value: oncallIntegrationTemplatesMobileAppToHclTerraform(struct!.mobileApp),
      isBlock: true,
      type: "list",
      storageClassType: "OncallIntegrationTemplatesMobileAppList",
    },
    phone_call: {
      value: oncallIntegrationTemplatesPhoneCallToHclTerraform(struct!.phoneCall),
      isBlock: true,
      type: "list",
      storageClassType: "OncallIntegrationTemplatesPhoneCallList",
    },
    slack: {
      value: oncallIntegrationTemplatesSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "list",
      storageClassType: "OncallIntegrationTemplatesSlackList",
    },
    sms: {
      value: oncallIntegrationTemplatesSmsToHclTerraform(struct!.sms),
      isBlock: true,
      type: "list",
      storageClassType: "OncallIntegrationTemplatesSmsList",
    },
    telegram: {
      value: oncallIntegrationTemplatesTelegramToHclTerraform(struct!.telegram),
      isBlock: true,
      type: "list",
      storageClassType: "OncallIntegrationTemplatesTelegramList",
    },
    web: {
      value: oncallIntegrationTemplatesWebToHclTerraform(struct!.web),
      isBlock: true,
      type: "list",
      storageClassType: "OncallIntegrationTemplatesWebList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallIntegrationTemplatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallIntegrationTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acknowledgeSignal !== undefined) {
      hasAnyValues = true;
      internalValueResult.acknowledgeSignal = this._acknowledgeSignal;
    }
    if (this._groupingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingKey = this._groupingKey;
    }
    if (this._resolveSignal !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveSignal = this._resolveSignal;
    }
    if (this._sourceLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLink = this._sourceLink;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._microsoftTeams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftTeams = this._microsoftTeams?.internalValue;
    }
    if (this._mobileApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileApp = this._mobileApp?.internalValue;
    }
    if (this._phoneCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneCall = this._phoneCall?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._sms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sms = this._sms?.internalValue;
    }
    if (this._telegram?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telegram = this._telegram?.internalValue;
    }
    if (this._web?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.web = this._web?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallIntegrationTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acknowledgeSignal = undefined;
      this._groupingKey = undefined;
      this._resolveSignal = undefined;
      this._sourceLink = undefined;
      this._email.internalValue = undefined;
      this._microsoftTeams.internalValue = undefined;
      this._mobileApp.internalValue = undefined;
      this._phoneCall.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._sms.internalValue = undefined;
      this._telegram.internalValue = undefined;
      this._web.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acknowledgeSignal = value.acknowledgeSignal;
      this._groupingKey = value.groupingKey;
      this._resolveSignal = value.resolveSignal;
      this._sourceLink = value.sourceLink;
      this._email.internalValue = value.email;
      this._microsoftTeams.internalValue = value.microsoftTeams;
      this._mobileApp.internalValue = value.mobileApp;
      this._phoneCall.internalValue = value.phoneCall;
      this._slack.internalValue = value.slack;
      this._sms.internalValue = value.sms;
      this._telegram.internalValue = value.telegram;
      this._web.internalValue = value.web;
    }
  }

  // acknowledge_signal - computed: false, optional: true, required: false
  private _acknowledgeSignal?: string; 
  public get acknowledgeSignal() {
    return this.getStringAttribute('acknowledge_signal');
  }
  public set acknowledgeSignal(value: string) {
    this._acknowledgeSignal = value;
  }
  public resetAcknowledgeSignal() {
    this._acknowledgeSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgeSignalInput() {
    return this._acknowledgeSignal;
  }

  // grouping_key - computed: false, optional: true, required: false
  private _groupingKey?: string; 
  public get groupingKey() {
    return this.getStringAttribute('grouping_key');
  }
  public set groupingKey(value: string) {
    this._groupingKey = value;
  }
  public resetGroupingKey() {
    this._groupingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingKeyInput() {
    return this._groupingKey;
  }

  // resolve_signal - computed: false, optional: true, required: false
  private _resolveSignal?: string; 
  public get resolveSignal() {
    return this.getStringAttribute('resolve_signal');
  }
  public set resolveSignal(value: string) {
    this._resolveSignal = value;
  }
  public resetResolveSignal() {
    this._resolveSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveSignalInput() {
    return this._resolveSignal;
  }

  // source_link - computed: false, optional: true, required: false
  private _sourceLink?: string; 
  public get sourceLink() {
    return this.getStringAttribute('source_link');
  }
  public set sourceLink(value: string) {
    this._sourceLink = value;
  }
  public resetSourceLink() {
    this._sourceLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLinkInput() {
    return this._sourceLink;
  }

  // email - computed: false, optional: true, required: false
  private _email = new OncallIntegrationTemplatesEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: OncallIntegrationTemplatesEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // microsoft_teams - computed: false, optional: true, required: false
  private _microsoftTeams = new OncallIntegrationTemplatesMicrosoftTeamsOutputReference(this, "microsoft_teams");
  public get microsoftTeams() {
    return this._microsoftTeams;
  }
  public putMicrosoftTeams(value: OncallIntegrationTemplatesMicrosoftTeams) {
    this._microsoftTeams.internalValue = value;
  }
  public resetMicrosoftTeams() {
    this._microsoftTeams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftTeamsInput() {
    return this._microsoftTeams.internalValue;
  }

  // mobile_app - computed: false, optional: true, required: false
  private _mobileApp = new OncallIntegrationTemplatesMobileAppOutputReference(this, "mobile_app");
  public get mobileApp() {
    return this._mobileApp;
  }
  public putMobileApp(value: OncallIntegrationTemplatesMobileApp) {
    this._mobileApp.internalValue = value;
  }
  public resetMobileApp() {
    this._mobileApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileAppInput() {
    return this._mobileApp.internalValue;
  }

  // phone_call - computed: false, optional: true, required: false
  private _phoneCall = new OncallIntegrationTemplatesPhoneCallOutputReference(this, "phone_call");
  public get phoneCall() {
    return this._phoneCall;
  }
  public putPhoneCall(value: OncallIntegrationTemplatesPhoneCall) {
    this._phoneCall.internalValue = value;
  }
  public resetPhoneCall() {
    this._phoneCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneCallInput() {
    return this._phoneCall.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new OncallIntegrationTemplatesSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: OncallIntegrationTemplatesSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // sms - computed: false, optional: true, required: false
  private _sms = new OncallIntegrationTemplatesSmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }
  public putSms(value: OncallIntegrationTemplatesSms) {
    this._sms.internalValue = value;
  }
  public resetSms() {
    this._sms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }

  // telegram - computed: false, optional: true, required: false
  private _telegram = new OncallIntegrationTemplatesTelegramOutputReference(this, "telegram");
  public get telegram() {
    return this._telegram;
  }
  public putTelegram(value: OncallIntegrationTemplatesTelegram) {
    this._telegram.internalValue = value;
  }
  public resetTelegram() {
    this._telegram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telegramInput() {
    return this._telegram.internalValue;
  }

  // web - computed: false, optional: true, required: false
  private _web = new OncallIntegrationTemplatesWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
  public putWeb(value: OncallIntegrationTemplatesWeb) {
    this._web.internalValue = value;
  }
  public resetWeb() {
    this._web.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration grafana_oncall_integration}
*/
export class OncallIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_oncall_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OncallIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OncallIntegration to import
  * @param importFromId The id of the existing OncallIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OncallIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_oncall_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/oncall_integration grafana_oncall_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OncallIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: OncallIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_oncall_integration',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.45.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicLabels = config.dynamicLabels;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._teamId = config.teamId;
    this._type = config.type;
    this._defaultRoute.internalValue = config.defaultRoute;
    this._templates.internalValue = config.templates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_labels - computed: false, optional: true, required: false
  private _dynamicLabels?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get dynamicLabels() {
    return this.interpolationForAttribute('dynamic_labels');
  }
  public set dynamicLabels(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._dynamicLabels = value;
  }
  public resetDynamicLabels() {
    this._dynamicLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicLabelsInput() {
    return this._dynamicLabels;
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

  // inbound_email - computed: true, optional: false, required: false
  public get inboundEmail() {
    return this.getStringAttribute('inbound_email');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get labels() {
    return this.interpolationForAttribute('labels');
  }
  public set labels(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
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

  // type - computed: false, optional: false, required: true
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

  // default_route - computed: false, optional: false, required: true
  private _defaultRoute = new OncallIntegrationDefaultRouteOutputReference(this, "default_route");
  public get defaultRoute() {
    return this._defaultRoute;
  }
  public putDefaultRoute(value: OncallIntegrationDefaultRoute) {
    this._defaultRoute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute.internalValue;
  }

  // templates - computed: false, optional: true, required: false
  private _templates = new OncallIntegrationTemplatesOutputReference(this, "templates");
  public get templates() {
    return this._templates;
  }
  public putTemplates(value: OncallIntegrationTemplates) {
    this._templates.internalValue = value;
  }
  public resetTemplates() {
    this._templates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_labels: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._dynamicLabels),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      team_id: cdktf.stringToTerraform(this._teamId),
      type: cdktf.stringToTerraform(this._type),
      default_route: oncallIntegrationDefaultRouteToTerraform(this._defaultRoute.internalValue),
      templates: oncallIntegrationTemplatesToTerraform(this._templates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_labels: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._dynamicLabels),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
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
      default_route: {
        value: oncallIntegrationDefaultRouteToHclTerraform(this._defaultRoute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OncallIntegrationDefaultRouteList",
      },
      templates: {
        value: oncallIntegrationTemplatesToHclTerraform(this._templates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OncallIntegrationTemplatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
