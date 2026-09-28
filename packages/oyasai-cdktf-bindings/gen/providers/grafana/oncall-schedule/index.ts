// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OncallScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable overrides via web UI (it will ignore ical_url_overrides).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#enable_web_overrides OncallSchedule#enable_web_overrides}
  */
  readonly enableWebOverrides?: boolean | cdktf.IResolvable;
  /**
  * The URL of external iCal calendar which override primary events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#ical_url_overrides OncallSchedule#ical_url_overrides}
  */
  readonly icalUrlOverrides?: string;
  /**
  * The URL of the external calendar iCal file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#ical_url_primary OncallSchedule#ical_url_primary}
  */
  readonly icalUrlPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#id OncallSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The schedule's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#name OncallSchedule#name}
  */
  readonly name: string;
  /**
  * The list of ID's of on-call shifts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#shifts OncallSchedule#shifts}
  */
  readonly shifts?: string[];
  /**
  * The ID of the OnCall team (using the `grafana_oncall_team` datasource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#team_id OncallSchedule#team_id}
  */
  readonly teamId?: string;
  /**
  * The schedule's time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#time_zone OncallSchedule#time_zone}
  */
  readonly timeZone?: string;
  /**
  * The schedule's type. Valid values are `ical`, `calendar`, `web`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#type OncallSchedule#type}
  */
  readonly type: string;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#slack OncallSchedule#slack}
  */
  readonly slack?: OncallScheduleSlack;
}
export interface OncallScheduleSlack {
  /**
  * Slack channel id. Reminder about schedule shifts will be directed to this channel in Slack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#channel_id OncallSchedule#channel_id}
  */
  readonly channelId?: string;
  /**
  * Slack user group id. Members of user group will be updated when on-call users change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#user_group_id OncallSchedule#user_group_id}
  */
  readonly userGroupId?: string;
}

export function oncallScheduleSlackToTerraform(struct?: OncallScheduleSlackOutputReference | OncallScheduleSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    user_group_id: cdktf.stringToTerraform(struct!.userGroupId),
  }
}


export function oncallScheduleSlackToHclTerraform(struct?: OncallScheduleSlackOutputReference | OncallScheduleSlack): any {
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
    user_group_id: {
      value: cdktf.stringToHclTerraform(struct!.userGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OncallScheduleSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OncallScheduleSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._userGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupId = this._userGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OncallScheduleSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelId = undefined;
      this._userGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelId = value.channelId;
      this._userGroupId = value.userGroupId;
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

  // user_group_id - computed: false, optional: true, required: false
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  public resetUserGroupId() {
    this._userGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule grafana_oncall_schedule}
*/
export class OncallSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_oncall_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OncallSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OncallSchedule to import
  * @param importFromId The id of the existing OncallSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OncallSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_oncall_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_schedule grafana_oncall_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OncallScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: OncallScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_oncall_schedule',
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
    this._enableWebOverrides = config.enableWebOverrides;
    this._icalUrlOverrides = config.icalUrlOverrides;
    this._icalUrlPrimary = config.icalUrlPrimary;
    this._id = config.id;
    this._name = config.name;
    this._shifts = config.shifts;
    this._teamId = config.teamId;
    this._timeZone = config.timeZone;
    this._type = config.type;
    this._slack.internalValue = config.slack;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_web_overrides - computed: false, optional: true, required: false
  private _enableWebOverrides?: boolean | cdktf.IResolvable; 
  public get enableWebOverrides() {
    return this.getBooleanAttribute('enable_web_overrides');
  }
  public set enableWebOverrides(value: boolean | cdktf.IResolvable) {
    this._enableWebOverrides = value;
  }
  public resetEnableWebOverrides() {
    this._enableWebOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebOverridesInput() {
    return this._enableWebOverrides;
  }

  // ical_url_overrides - computed: false, optional: true, required: false
  private _icalUrlOverrides?: string; 
  public get icalUrlOverrides() {
    return this.getStringAttribute('ical_url_overrides');
  }
  public set icalUrlOverrides(value: string) {
    this._icalUrlOverrides = value;
  }
  public resetIcalUrlOverrides() {
    this._icalUrlOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icalUrlOverridesInput() {
    return this._icalUrlOverrides;
  }

  // ical_url_primary - computed: false, optional: true, required: false
  private _icalUrlPrimary?: string; 
  public get icalUrlPrimary() {
    return this.getStringAttribute('ical_url_primary');
  }
  public set icalUrlPrimary(value: string) {
    this._icalUrlPrimary = value;
  }
  public resetIcalUrlPrimary() {
    this._icalUrlPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icalUrlPrimaryInput() {
    return this._icalUrlPrimary;
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

  // shifts - computed: false, optional: true, required: false
  private _shifts?: string[]; 
  public get shifts() {
    return cdktf.Fn.tolist(this.getListAttribute('shifts'));
  }
  public set shifts(value: string[]) {
    this._shifts = value;
  }
  public resetShifts() {
    this._shifts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftsInput() {
    return this._shifts;
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

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
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

  // slack - computed: false, optional: true, required: false
  private _slack = new OncallScheduleSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: OncallScheduleSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_web_overrides: cdktf.booleanToTerraform(this._enableWebOverrides),
      ical_url_overrides: cdktf.stringToTerraform(this._icalUrlOverrides),
      ical_url_primary: cdktf.stringToTerraform(this._icalUrlPrimary),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      shifts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shifts),
      team_id: cdktf.stringToTerraform(this._teamId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      type: cdktf.stringToTerraform(this._type),
      slack: oncallScheduleSlackToTerraform(this._slack.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_web_overrides: {
        value: cdktf.booleanToHclTerraform(this._enableWebOverrides),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ical_url_overrides: {
        value: cdktf.stringToHclTerraform(this._icalUrlOverrides),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ical_url_primary: {
        value: cdktf.stringToHclTerraform(this._icalUrlPrimary),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shifts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._shifts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
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
      slack: {
        value: oncallScheduleSlackToHclTerraform(this._slack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OncallScheduleSlackList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
