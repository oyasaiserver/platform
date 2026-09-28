// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OncallRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the escalation chain. Omit or set to null for a route with no escalation chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#escalation_chain_id OncallRoute#escalation_chain_id}
  */
  readonly escalationChainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#id OncallRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#integration_id OncallRoute#integration_id}
  */
  readonly integrationId: string;
  /**
  * The position of the route (starts from 0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#position OncallRoute#position}
  */
  readonly position: number;
  /**
  * Python Regex query. Route is chosen for an alert if there is a match inside the alert payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#routing_regex OncallRoute#routing_regex}
  */
  readonly routingRegex: string;
  /**
  * The type of route. Can be jinja2, regex Defaults to `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#routing_type OncallRoute#routing_type}
  */
  readonly routingType?: string;
  /**
  * msteams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#msteams OncallRoute#msteams}
  */
  readonly msteams?: OncallRouteMsteams;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#slack OncallRoute#slack}
  */
  readonly slack?: OncallRouteSlack;
  /**
  * telegram block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#telegram OncallRoute#telegram}
  */
  readonly telegram?: OncallRouteTelegram;
}
export interface OncallRouteMsteams {
  /**
  * Enable notification in MS teams. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#enabled OncallRoute#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * MS teams channel id. Alerts will be directed to this channel in Microsoft teams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#id OncallRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function oncallRouteMsteamsToTerraform(struct?: OncallRouteMsteamsOutputReference | OncallRouteMsteams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oncallRouteMsteamsToHclTerraform(struct?: OncallRouteMsteamsOutputReference | OncallRouteMsteams): any {
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

export class OncallRouteMsteamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallRouteMsteams | undefined {
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

  public set internalValue(value: OncallRouteMsteams | undefined) {
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
export interface OncallRouteSlack {
  /**
  * Slack channel id. Alerts will be directed to this channel in Slack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#channel_id OncallRoute#channel_id}
  */
  readonly channelId?: string;
  /**
  * Enable notification in Slack. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#enabled OncallRoute#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function oncallRouteSlackToTerraform(struct?: OncallRouteSlackOutputReference | OncallRouteSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function oncallRouteSlackToHclTerraform(struct?: OncallRouteSlackOutputReference | OncallRouteSlack): any {
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

export class OncallRouteSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallRouteSlack | undefined {
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

  public set internalValue(value: OncallRouteSlack | undefined) {
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
export interface OncallRouteTelegram {
  /**
  * Enable notification in Telegram. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#enabled OncallRoute#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Telegram channel id. Alerts will be directed to this channel in Telegram.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#id OncallRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function oncallRouteTelegramToTerraform(struct?: OncallRouteTelegramOutputReference | OncallRouteTelegram): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oncallRouteTelegramToHclTerraform(struct?: OncallRouteTelegramOutputReference | OncallRouteTelegram): any {
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

export class OncallRouteTelegramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallRouteTelegram | undefined {
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

  public set internalValue(value: OncallRouteTelegram | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route grafana_oncall_route}
*/
export class OncallRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_oncall_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OncallRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OncallRoute to import
  * @param importFromId The id of the existing OncallRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OncallRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_oncall_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_route grafana_oncall_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OncallRouteConfig
  */
  public constructor(scope: Construct, id: string, config: OncallRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_oncall_route',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._escalationChainId = config.escalationChainId;
    this._id = config.id;
    this._integrationId = config.integrationId;
    this._position = config.position;
    this._routingRegex = config.routingRegex;
    this._routingType = config.routingType;
    this._msteams.internalValue = config.msteams;
    this._slack.internalValue = config.slack;
    this._telegram.internalValue = config.telegram;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // routing_regex - computed: false, optional: false, required: true
  private _routingRegex?: string; 
  public get routingRegex() {
    return this.getStringAttribute('routing_regex');
  }
  public set routingRegex(value: string) {
    this._routingRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRegexInput() {
    return this._routingRegex;
  }

  // routing_type - computed: false, optional: true, required: false
  private _routingType?: string; 
  public get routingType() {
    return this.getStringAttribute('routing_type');
  }
  public set routingType(value: string) {
    this._routingType = value;
  }
  public resetRoutingType() {
    this._routingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTypeInput() {
    return this._routingType;
  }

  // msteams - computed: false, optional: true, required: false
  private _msteams = new OncallRouteMsteamsOutputReference(this, "msteams");
  public get msteams() {
    return this._msteams;
  }
  public putMsteams(value: OncallRouteMsteams) {
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
  private _slack = new OncallRouteSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: OncallRouteSlack) {
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
  private _telegram = new OncallRouteTelegramOutputReference(this, "telegram");
  public get telegram() {
    return this._telegram;
  }
  public putTelegram(value: OncallRouteTelegram) {
    this._telegram.internalValue = value;
  }
  public resetTelegram() {
    this._telegram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telegramInput() {
    return this._telegram.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      escalation_chain_id: cdktf.stringToTerraform(this._escalationChainId),
      id: cdktf.stringToTerraform(this._id),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      position: cdktf.numberToTerraform(this._position),
      routing_regex: cdktf.stringToTerraform(this._routingRegex),
      routing_type: cdktf.stringToTerraform(this._routingType),
      msteams: oncallRouteMsteamsToTerraform(this._msteams.internalValue),
      slack: oncallRouteSlackToTerraform(this._slack.internalValue),
      telegram: oncallRouteTelegramToTerraform(this._telegram.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      escalation_chain_id: {
        value: cdktf.stringToHclTerraform(this._escalationChainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_regex: {
        value: cdktf.stringToHclTerraform(this._routingRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_type: {
        value: cdktf.stringToHclTerraform(this._routingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msteams: {
        value: oncallRouteMsteamsToHclTerraform(this._msteams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OncallRouteMsteamsList",
      },
      slack: {
        value: oncallRouteSlackToHclTerraform(this._slack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OncallRouteSlackList",
      },
      telegram: {
        value: oncallRouteTelegramToHclTerraform(this._telegram.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OncallRouteTelegramList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
