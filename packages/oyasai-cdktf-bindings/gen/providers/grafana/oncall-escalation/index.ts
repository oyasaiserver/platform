// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OncallEscalationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of an Action for trigger_webhook type step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#action_to_trigger OncallEscalation#action_to_trigger}
  */
  readonly actionToTrigger?: string;
  /**
  * The duration of delay for wait type step. (60-86400) seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#duration OncallEscalation#duration}
  */
  readonly duration?: number;
  /**
  * The ID of the escalation chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#escalation_chain_id OncallEscalation#escalation_chain_id}
  */
  readonly escalationChainId: string;
  /**
  * The ID of a User Group for notify_user_group type step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#group_to_notify OncallEscalation#group_to_notify}
  */
  readonly groupToNotify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#id OncallEscalation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Will activate "important" personal notification rules. Actual for steps: notify_persons, notify_person_next_each_time, notify_on_call_from_schedule, notify_next_on_call_from_schedule, notify_user_group and notify_team_members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#important OncallEscalation#important}
  */
  readonly important?: boolean | cdktf.IResolvable;
  /**
  * The beginning of the time interval for notify_if_time_from_to type step in UTC (for example 08:00:00Z).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#notify_if_time_from OncallEscalation#notify_if_time_from}
  */
  readonly notifyIfTimeFrom?: string;
  /**
  * The end of the time interval for notify_if_time_from_to type step in UTC (for example 18:00:00Z).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#notify_if_time_to OncallEscalation#notify_if_time_to}
  */
  readonly notifyIfTimeTo?: string;
  /**
  * ID of a Schedule for notify_on_call_from_schedule or notify_next_on_call_from_schedule type step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#notify_on_call_from_schedule OncallEscalation#notify_on_call_from_schedule}
  */
  readonly notifyOnCallFromSchedule?: string;
  /**
  * The ID of a Team for a notify_team_members type step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#notify_to_team_members OncallEscalation#notify_to_team_members}
  */
  readonly notifyToTeamMembers?: string;
  /**
  * Number of alerts that must occur within the time window to continue escalation for notify_if_num_alerts_in_window type step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#num_alerts_in_window OncallEscalation#num_alerts_in_window}
  */
  readonly numAlertsInWindow?: number;
  /**
  * Time window in minutes to count alerts for notify_if_num_alerts_in_window type step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#num_minutes_in_window OncallEscalation#num_minutes_in_window}
  */
  readonly numMinutesInWindow?: number;
  /**
  * The list of ID's of users for notify_persons type step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#persons_to_notify OncallEscalation#persons_to_notify}
  */
  readonly personsToNotify?: string[];
  /**
  * The list of ID's of users for notify_person_next_each_time type step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#persons_to_notify_next_each_time OncallEscalation#persons_to_notify_next_each_time}
  */
  readonly personsToNotifyNextEachTime?: string[];
  /**
  * The position of the escalation step (starts from 0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#position OncallEscalation#position}
  */
  readonly position: number;
  /**
  * The severity of the incident for declare_incident type step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#severity OncallEscalation#severity}
  */
  readonly severity?: string;
  /**
  * The type of escalation policy. Can be wait, notify_persons, notify_person_next_each_time, notify_on_call_from_schedule, notify_next_on_call_from_schedule, trigger_webhook, notify_user_group, resolve, notify_whole_channel, notify_if_time_from_to, notify_if_num_alerts_in_window, repeat_escalation, notify_team_members, declare_incident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#type OncallEscalation#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation grafana_oncall_escalation}
*/
export class OncallEscalation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_oncall_escalation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OncallEscalation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OncallEscalation to import
  * @param importFromId The id of the existing OncallEscalation that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OncallEscalation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_oncall_escalation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_escalation grafana_oncall_escalation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OncallEscalationConfig
  */
  public constructor(scope: Construct, id: string, config: OncallEscalationConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_oncall_escalation',
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
    this._actionToTrigger = config.actionToTrigger;
    this._duration = config.duration;
    this._escalationChainId = config.escalationChainId;
    this._groupToNotify = config.groupToNotify;
    this._id = config.id;
    this._important = config.important;
    this._notifyIfTimeFrom = config.notifyIfTimeFrom;
    this._notifyIfTimeTo = config.notifyIfTimeTo;
    this._notifyOnCallFromSchedule = config.notifyOnCallFromSchedule;
    this._notifyToTeamMembers = config.notifyToTeamMembers;
    this._numAlertsInWindow = config.numAlertsInWindow;
    this._numMinutesInWindow = config.numMinutesInWindow;
    this._personsToNotify = config.personsToNotify;
    this._personsToNotifyNextEachTime = config.personsToNotifyNextEachTime;
    this._position = config.position;
    this._severity = config.severity;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_to_trigger - computed: false, optional: true, required: false
  private _actionToTrigger?: string; 
  public get actionToTrigger() {
    return this.getStringAttribute('action_to_trigger');
  }
  public set actionToTrigger(value: string) {
    this._actionToTrigger = value;
  }
  public resetActionToTrigger() {
    this._actionToTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionToTriggerInput() {
    return this._actionToTrigger;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // escalation_chain_id - computed: false, optional: false, required: true
  private _escalationChainId?: string; 
  public get escalationChainId() {
    return this.getStringAttribute('escalation_chain_id');
  }
  public set escalationChainId(value: string) {
    this._escalationChainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationChainIdInput() {
    return this._escalationChainId;
  }

  // group_to_notify - computed: false, optional: true, required: false
  private _groupToNotify?: string; 
  public get groupToNotify() {
    return this.getStringAttribute('group_to_notify');
  }
  public set groupToNotify(value: string) {
    this._groupToNotify = value;
  }
  public resetGroupToNotify() {
    this._groupToNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupToNotifyInput() {
    return this._groupToNotify;
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

  // important - computed: false, optional: true, required: false
  private _important?: boolean | cdktf.IResolvable; 
  public get important() {
    return this.getBooleanAttribute('important');
  }
  public set important(value: boolean | cdktf.IResolvable) {
    this._important = value;
  }
  public resetImportant() {
    this._important = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importantInput() {
    return this._important;
  }

  // notify_if_time_from - computed: false, optional: true, required: false
  private _notifyIfTimeFrom?: string; 
  public get notifyIfTimeFrom() {
    return this.getStringAttribute('notify_if_time_from');
  }
  public set notifyIfTimeFrom(value: string) {
    this._notifyIfTimeFrom = value;
  }
  public resetNotifyIfTimeFrom() {
    this._notifyIfTimeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyIfTimeFromInput() {
    return this._notifyIfTimeFrom;
  }

  // notify_if_time_to - computed: false, optional: true, required: false
  private _notifyIfTimeTo?: string; 
  public get notifyIfTimeTo() {
    return this.getStringAttribute('notify_if_time_to');
  }
  public set notifyIfTimeTo(value: string) {
    this._notifyIfTimeTo = value;
  }
  public resetNotifyIfTimeTo() {
    this._notifyIfTimeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyIfTimeToInput() {
    return this._notifyIfTimeTo;
  }

  // notify_on_call_from_schedule - computed: false, optional: true, required: false
  private _notifyOnCallFromSchedule?: string; 
  public get notifyOnCallFromSchedule() {
    return this.getStringAttribute('notify_on_call_from_schedule');
  }
  public set notifyOnCallFromSchedule(value: string) {
    this._notifyOnCallFromSchedule = value;
  }
  public resetNotifyOnCallFromSchedule() {
    this._notifyOnCallFromSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnCallFromScheduleInput() {
    return this._notifyOnCallFromSchedule;
  }

  // notify_to_team_members - computed: false, optional: true, required: false
  private _notifyToTeamMembers?: string; 
  public get notifyToTeamMembers() {
    return this.getStringAttribute('notify_to_team_members');
  }
  public set notifyToTeamMembers(value: string) {
    this._notifyToTeamMembers = value;
  }
  public resetNotifyToTeamMembers() {
    this._notifyToTeamMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyToTeamMembersInput() {
    return this._notifyToTeamMembers;
  }

  // num_alerts_in_window - computed: false, optional: true, required: false
  private _numAlertsInWindow?: number; 
  public get numAlertsInWindow() {
    return this.getNumberAttribute('num_alerts_in_window');
  }
  public set numAlertsInWindow(value: number) {
    this._numAlertsInWindow = value;
  }
  public resetNumAlertsInWindow() {
    this._numAlertsInWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numAlertsInWindowInput() {
    return this._numAlertsInWindow;
  }

  // num_minutes_in_window - computed: false, optional: true, required: false
  private _numMinutesInWindow?: number; 
  public get numMinutesInWindow() {
    return this.getNumberAttribute('num_minutes_in_window');
  }
  public set numMinutesInWindow(value: number) {
    this._numMinutesInWindow = value;
  }
  public resetNumMinutesInWindow() {
    this._numMinutesInWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numMinutesInWindowInput() {
    return this._numMinutesInWindow;
  }

  // persons_to_notify - computed: false, optional: true, required: false
  private _personsToNotify?: string[]; 
  public get personsToNotify() {
    return cdktf.Fn.tolist(this.getListAttribute('persons_to_notify'));
  }
  public set personsToNotify(value: string[]) {
    this._personsToNotify = value;
  }
  public resetPersonsToNotify() {
    this._personsToNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personsToNotifyInput() {
    return this._personsToNotify;
  }

  // persons_to_notify_next_each_time - computed: false, optional: true, required: false
  private _personsToNotifyNextEachTime?: string[]; 
  public get personsToNotifyNextEachTime() {
    return cdktf.Fn.tolist(this.getListAttribute('persons_to_notify_next_each_time'));
  }
  public set personsToNotifyNextEachTime(value: string[]) {
    this._personsToNotifyNextEachTime = value;
  }
  public resetPersonsToNotifyNextEachTime() {
    this._personsToNotifyNextEachTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personsToNotifyNextEachTimeInput() {
    return this._personsToNotifyNextEachTime;
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

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_to_trigger: cdktf.stringToTerraform(this._actionToTrigger),
      duration: cdktf.numberToTerraform(this._duration),
      escalation_chain_id: cdktf.stringToTerraform(this._escalationChainId),
      group_to_notify: cdktf.stringToTerraform(this._groupToNotify),
      id: cdktf.stringToTerraform(this._id),
      important: cdktf.booleanToTerraform(this._important),
      notify_if_time_from: cdktf.stringToTerraform(this._notifyIfTimeFrom),
      notify_if_time_to: cdktf.stringToTerraform(this._notifyIfTimeTo),
      notify_on_call_from_schedule: cdktf.stringToTerraform(this._notifyOnCallFromSchedule),
      notify_to_team_members: cdktf.stringToTerraform(this._notifyToTeamMembers),
      num_alerts_in_window: cdktf.numberToTerraform(this._numAlertsInWindow),
      num_minutes_in_window: cdktf.numberToTerraform(this._numMinutesInWindow),
      persons_to_notify: cdktf.listMapper(cdktf.stringToTerraform, false)(this._personsToNotify),
      persons_to_notify_next_each_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._personsToNotifyNextEachTime),
      position: cdktf.numberToTerraform(this._position),
      severity: cdktf.stringToTerraform(this._severity),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_to_trigger: {
        value: cdktf.stringToHclTerraform(this._actionToTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      escalation_chain_id: {
        value: cdktf.stringToHclTerraform(this._escalationChainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_to_notify: {
        value: cdktf.stringToHclTerraform(this._groupToNotify),
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
      important: {
        value: cdktf.booleanToHclTerraform(this._important),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_if_time_from: {
        value: cdktf.stringToHclTerraform(this._notifyIfTimeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_if_time_to: {
        value: cdktf.stringToHclTerraform(this._notifyIfTimeTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_on_call_from_schedule: {
        value: cdktf.stringToHclTerraform(this._notifyOnCallFromSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_to_team_members: {
        value: cdktf.stringToHclTerraform(this._notifyToTeamMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_alerts_in_window: {
        value: cdktf.numberToHclTerraform(this._numAlertsInWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_minutes_in_window: {
        value: cdktf.numberToHclTerraform(this._numMinutesInWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persons_to_notify: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._personsToNotify),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      persons_to_notify_next_each_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._personsToNotifyNextEachTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
