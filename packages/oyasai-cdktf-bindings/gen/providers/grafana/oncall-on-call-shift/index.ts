// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OncallOnCallShiftConfig extends cdktf.TerraformMetaArguments {
  /**
  * This parameter takes a list of days in iCal format. Can be MO, TU, WE, TH, FR, SA, SU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#by_day OncallOnCallShift#by_day}
  */
  readonly byDay?: string[];
  /**
  * This parameter takes a list of months. Valid values are 1 to 12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#by_month OncallOnCallShift#by_month}
  */
  readonly byMonth?: number[];
  /**
  * This parameter takes a list of days of the month.  Valid values are 1 to 31 or -31 to -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#by_monthday OncallOnCallShift#by_monthday}
  */
  readonly byMonthday?: number[];
  /**
  * The duration of the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#duration OncallOnCallShift#duration}
  */
  readonly duration: number;
  /**
  * The frequency of the event. Can be hourly, daily, weekly, monthly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#frequency OncallOnCallShift#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#id OncallOnCallShift#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The positive integer representing at which intervals the recurrence rule repeats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#interval OncallOnCallShift#interval}
  */
  readonly interval?: number;
  /**
  * The priority level. The higher the value, the higher the priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#level OncallOnCallShift#level}
  */
  readonly level?: number;
  /**
  * The shift's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#name OncallOnCallShift#name}
  */
  readonly name: string;
  /**
  * The list of lists with on-call users (for rolling_users event type)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#rolling_users OncallOnCallShift#rolling_users}
  */
  readonly rollingUsers?: string[][] | cdktf.IResolvable;
  /**
  * The start time of the on-call shift. This parameter takes a date format as yyyy-MM-dd'T'HH:mm:ss (for example "2020-09-05T08:00:00")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#start OncallOnCallShift#start}
  */
  readonly start: string;
  /**
  * The index of the list of users in rolling_users, from which on-call rotation starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#start_rotation_from_user_index OncallOnCallShift#start_rotation_from_user_index}
  */
  readonly startRotationFromUserIndex?: number;
  /**
  * The ID of the OnCall team (using the `grafana_oncall_team` datasource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#team_id OncallOnCallShift#team_id}
  */
  readonly teamId?: string;
  /**
  * The shift's timezone.  Overrides schedule's timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#time_zone OncallOnCallShift#time_zone}
  */
  readonly timeZone?: string;
  /**
  * The shift's type. Can be rolling_users, recurrent_event, single_event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#type OncallOnCallShift#type}
  */
  readonly type: string;
  /**
  * The end time of recurrent on-call shifts (endless if null). This parameter takes a date format as yyyy-MM-dd'T'HH:mm:ss (for example "2020-09-05T08:00:00")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#until OncallOnCallShift#until}
  */
  readonly until?: string;
  /**
  * The list of on-call users (for single_event and recurrent_event event type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#users OncallOnCallShift#users}
  */
  readonly users?: string[];
  /**
  * Start day of the week in iCal format. Can be MO, TU, WE, TH, FR, SA, SU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#week_start OncallOnCallShift#week_start}
  */
  readonly weekStart?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift grafana_oncall_on_call_shift}
*/
export class OncallOnCallShift extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_oncall_on_call_shift";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OncallOnCallShift resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OncallOnCallShift to import
  * @param importFromId The id of the existing OncallOnCallShift that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OncallOnCallShift to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_oncall_on_call_shift", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/oncall_on_call_shift grafana_oncall_on_call_shift} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OncallOnCallShiftConfig
  */
  public constructor(scope: Construct, id: string, config: OncallOnCallShiftConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_oncall_on_call_shift',
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
    this._byDay = config.byDay;
    this._byMonth = config.byMonth;
    this._byMonthday = config.byMonthday;
    this._duration = config.duration;
    this._frequency = config.frequency;
    this._id = config.id;
    this._interval = config.interval;
    this._level = config.level;
    this._name = config.name;
    this._rollingUsers = config.rollingUsers;
    this._start = config.start;
    this._startRotationFromUserIndex = config.startRotationFromUserIndex;
    this._teamId = config.teamId;
    this._timeZone = config.timeZone;
    this._type = config.type;
    this._until = config.until;
    this._users = config.users;
    this._weekStart = config.weekStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // by_day - computed: false, optional: true, required: false
  private _byDay?: string[]; 
  public get byDay() {
    return cdktf.Fn.tolist(this.getListAttribute('by_day'));
  }
  public set byDay(value: string[]) {
    this._byDay = value;
  }
  public resetByDay() {
    this._byDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byDayInput() {
    return this._byDay;
  }

  // by_month - computed: false, optional: true, required: false
  private _byMonth?: number[]; 
  public get byMonth() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('by_month')));
  }
  public set byMonth(value: number[]) {
    this._byMonth = value;
  }
  public resetByMonth() {
    this._byMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byMonthInput() {
    return this._byMonth;
  }

  // by_monthday - computed: false, optional: true, required: false
  private _byMonthday?: number[]; 
  public get byMonthday() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('by_monthday')));
  }
  public set byMonthday(value: number[]) {
    this._byMonthday = value;
  }
  public resetByMonthday() {
    this._byMonthday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byMonthdayInput() {
    return this._byMonthday;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // rolling_users - computed: false, optional: true, required: false
  private _rollingUsers?: string[][] | cdktf.IResolvable; 
  public get rollingUsers() {
    return this.interpolationForAttribute('rolling_users');
  }
  public set rollingUsers(value: string[][] | cdktf.IResolvable) {
    this._rollingUsers = value;
  }
  public resetRollingUsers() {
    this._rollingUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUsersInput() {
    return this._rollingUsers;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // start_rotation_from_user_index - computed: false, optional: true, required: false
  private _startRotationFromUserIndex?: number; 
  public get startRotationFromUserIndex() {
    return this.getNumberAttribute('start_rotation_from_user_index');
  }
  public set startRotationFromUserIndex(value: number) {
    this._startRotationFromUserIndex = value;
  }
  public resetStartRotationFromUserIndex() {
    this._startRotationFromUserIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startRotationFromUserIndexInput() {
    return this._startRotationFromUserIndex;
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

  // time_zone - computed: false, optional: true, required: false
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

  // until - computed: false, optional: true, required: false
  private _until?: string; 
  public get until() {
    return this.getStringAttribute('until');
  }
  public set until(value: string) {
    this._until = value;
  }
  public resetUntil() {
    this._until = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilInput() {
    return this._until;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // week_start - computed: false, optional: true, required: false
  private _weekStart?: string; 
  public get weekStart() {
    return this.getStringAttribute('week_start');
  }
  public set weekStart(value: string) {
    this._weekStart = value;
  }
  public resetWeekStart() {
    this._weekStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekStartInput() {
    return this._weekStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      by_day: cdktf.listMapper(cdktf.stringToTerraform, false)(this._byDay),
      by_month: cdktf.listMapper(cdktf.numberToTerraform, false)(this._byMonth),
      by_monthday: cdktf.listMapper(cdktf.numberToTerraform, false)(this._byMonthday),
      duration: cdktf.numberToTerraform(this._duration),
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      level: cdktf.numberToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      rolling_users: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(this._rollingUsers),
      start: cdktf.stringToTerraform(this._start),
      start_rotation_from_user_index: cdktf.numberToTerraform(this._startRotationFromUserIndex),
      team_id: cdktf.stringToTerraform(this._teamId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      type: cdktf.stringToTerraform(this._type),
      until: cdktf.stringToTerraform(this._until),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      week_start: cdktf.stringToTerraform(this._weekStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      by_day: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._byDay),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      by_month: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._byMonth),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      by_monthday: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._byMonthday),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      level: {
        value: cdktf.numberToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rolling_users: {
        value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(this._rollingUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringListList",
      },
      start: {
        value: cdktf.stringToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_rotation_from_user_index: {
        value: cdktf.numberToHclTerraform(this._startRotationFromUserIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      until: {
        value: cdktf.stringToHclTerraform(this._until),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      week_start: {
        value: cdktf.stringToHclTerraform(this._weekStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
