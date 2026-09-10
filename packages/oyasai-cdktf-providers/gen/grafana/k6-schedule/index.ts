// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K6ScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier of the load test to schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#load_test_id K6Schedule#load_test_id}
  */
  readonly loadTestId: string;
  /**
  * The start time for the schedule (RFC3339 format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#starts K6Schedule#starts}
  */
  readonly starts: string;
  /**
  * cron block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#cron K6Schedule#cron}
  */
  readonly cron?: K6ScheduleCron;
  /**
  * recurrence_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#recurrence_rule K6Schedule#recurrence_rule}
  */
  readonly recurrenceRule?: K6ScheduleRecurrenceRule;
}
export interface K6ScheduleCron {
  /**
  * A cron expression with exactly 5 entries, or an alias. The allowed aliases are: `@yearly`, `@annually`, `@monthly`, `@weekly`, `@daily`, `@hourly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#schedule K6Schedule#schedule}
  */
  readonly schedule?: string;
  /**
  * The timezone of the cron expression. For example, `UTC` or `Europe/London`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#timezone K6Schedule#timezone}
  */
  readonly timezone?: string;
}

export function k6ScheduleCronToTerraform(struct?: K6ScheduleCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.stringToTerraform(struct!.schedule),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function k6ScheduleCronToHclTerraform(struct?: K6ScheduleCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K6ScheduleCronOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): K6ScheduleCron | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K6ScheduleCron | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schedule = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schedule = value.schedule;
      this._timezone = value.timezone;
    }
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface K6ScheduleRecurrenceRule {
  /**
  * The weekdays when the 'WEEKLY' recurrence will be applied (e.g., ['MO', 'WE', 'FR']). Cannot be set for other frequencies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#byday K6Schedule#byday}
  */
  readonly byday?: string[];
  /**
  * How many times the recurrence will repeat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#count K6Schedule#count}
  */
  readonly count?: number;
  /**
  * The frequency of the schedule (HOURLY, DAILY, WEEKLY, MONTHLY, YEARLY).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#frequency K6Schedule#frequency}
  */
  readonly frequency?: string;
  /**
  * The interval between each frequency iteration (e.g., 2 = every 2 hours for HOURLY). Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#interval K6Schedule#interval}
  */
  readonly interval?: number;
  /**
  * The end time for the recurrence (RFC3339 format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#until K6Schedule#until}
  */
  readonly until?: string;
}

export function k6ScheduleRecurrenceRuleToTerraform(struct?: K6ScheduleRecurrenceRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byday: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.byday),
    count: cdktf.numberToTerraform(struct!.count),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    interval: cdktf.numberToTerraform(struct!.interval),
    until: cdktf.stringToTerraform(struct!.until),
  }
}


export function k6ScheduleRecurrenceRuleToHclTerraform(struct?: K6ScheduleRecurrenceRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byday: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.byday),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    until: {
      value: cdktf.stringToHclTerraform(struct!.until),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K6ScheduleRecurrenceRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): K6ScheduleRecurrenceRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byday !== undefined) {
      hasAnyValues = true;
      internalValueResult.byday = this._byday;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._until !== undefined) {
      hasAnyValues = true;
      internalValueResult.until = this._until;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K6ScheduleRecurrenceRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byday = undefined;
      this._count = undefined;
      this._frequency = undefined;
      this._interval = undefined;
      this._until = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byday = value.byday;
      this._count = value.count;
      this._frequency = value.frequency;
      this._interval = value.interval;
      this._until = value.until;
    }
  }

  // byday - computed: false, optional: true, required: false
  private _byday?: string[]; 
  public get byday() {
    return this.getListAttribute('byday');
  }
  public set byday(value: string[]) {
    this._byday = value;
  }
  public resetByday() {
    this._byday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bydayInput() {
    return this._byday;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

  // interval - computed: true, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule grafana_k6_schedule}
*/
export class K6Schedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_k6_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K6Schedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K6Schedule to import
  * @param importFromId The id of the existing K6Schedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K6Schedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_k6_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/k6_schedule grafana_k6_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K6ScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: K6ScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_k6_schedule',
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
    this._loadTestId = config.loadTestId;
    this._starts = config.starts;
    this._cron.internalValue = config.cron;
    this._recurrenceRule.internalValue = config.recurrenceRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // deactivated - computed: true, optional: false, required: false
  public get deactivated() {
    return this.getBooleanAttribute('deactivated');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_test_id - computed: false, optional: false, required: true
  private _loadTestId?: string; 
  public get loadTestId() {
    return this.getStringAttribute('load_test_id');
  }
  public set loadTestId(value: string) {
    this._loadTestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadTestIdInput() {
    return this._loadTestId;
  }

  // next_run - computed: true, optional: false, required: false
  public get nextRun() {
    return this.getStringAttribute('next_run');
  }

  // starts - computed: false, optional: false, required: true
  private _starts?: string; 
  public get starts() {
    return this.getStringAttribute('starts');
  }
  public set starts(value: string) {
    this._starts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startsInput() {
    return this._starts;
  }

  // cron - computed: false, optional: true, required: false
  private _cron = new K6ScheduleCronOutputReference(this, "cron");
  public get cron() {
    return this._cron;
  }
  public putCron(value: K6ScheduleCron) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }

  // recurrence_rule - computed: false, optional: true, required: false
  private _recurrenceRule = new K6ScheduleRecurrenceRuleOutputReference(this, "recurrence_rule");
  public get recurrenceRule() {
    return this._recurrenceRule;
  }
  public putRecurrenceRule(value: K6ScheduleRecurrenceRule) {
    this._recurrenceRule.internalValue = value;
  }
  public resetRecurrenceRule() {
    this._recurrenceRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceRuleInput() {
    return this._recurrenceRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      load_test_id: cdktf.stringToTerraform(this._loadTestId),
      starts: cdktf.stringToTerraform(this._starts),
      cron: k6ScheduleCronToTerraform(this._cron.internalValue),
      recurrence_rule: k6ScheduleRecurrenceRuleToTerraform(this._recurrenceRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      load_test_id: {
        value: cdktf.stringToHclTerraform(this._loadTestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starts: {
        value: cdktf.stringToHclTerraform(this._starts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron: {
        value: k6ScheduleCronToHclTerraform(this._cron.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "K6ScheduleCron",
      },
      recurrence_rule: {
        value: k6ScheduleRecurrenceRuleToHclTerraform(this._recurrenceRule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "K6ScheduleRecurrenceRule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
