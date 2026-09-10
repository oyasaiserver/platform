// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies what kind of attachment to generate for the report. Allowed values: `pdf`, `csv`, `image`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#formats Report#formats}
  */
  readonly formats?: string[];
  /**
  * Whether to include a link to the dashboard in the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#include_dashboard_link Report#include_dashboard_link}
  */
  readonly includeDashboardLink?: boolean | cdktf.IResolvable;
  /**
  * Whether to include a CSV file of table panel data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#include_table_csv Report#include_table_csv}
  */
  readonly includeTableCsv?: boolean | cdktf.IResolvable;
  /**
  * Layout of the report. Allowed values: `simple`, `grid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#layout Report#layout}
  */
  readonly layout?: string;
  /**
  * Message to be sent in the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#message Report#message}
  */
  readonly message?: string;
  /**
  * Name of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#name Report#name}
  */
  readonly name: string;
  /**
  * The Organization ID. If not set, the default organization is used for basic authentication, or the one that owns your service account for token authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#org_id Report#org_id}
  */
  readonly orgId?: string;
  /**
  * Orientation of the report. Allowed values: `landscape`, `portrait`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#orientation Report#orientation}
  */
  readonly orientation?: string;
  /**
  * List of recipients of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#recipients Report#recipients}
  */
  readonly recipients: string[];
  /**
  * Reply-to email address of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#reply_to Report#reply_to}
  */
  readonly replyTo?: string;
  /**
  * dashboards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#dashboards Report#dashboards}
  */
  readonly dashboards?: ReportDashboards[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#schedule Report#schedule}
  */
  readonly schedule?: ReportSchedule[] | cdktf.IResolvable;
}
export interface ReportDashboardsTimeRange {
  /**
  * Start of the time range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#from Report#from}
  */
  readonly from?: string;
  /**
  * End of the time range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#to Report#to}
  */
  readonly to?: string;
}

export function reportDashboardsTimeRangeToTerraform(struct?: ReportDashboardsTimeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function reportDashboardsTimeRangeToHclTerraform(struct?: ReportDashboardsTimeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportDashboardsTimeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportDashboardsTimeRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportDashboardsTimeRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class ReportDashboardsTimeRangeList extends cdktf.ComplexList {
  public internalValue? : ReportDashboardsTimeRange[] | cdktf.IResolvable

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
  public get(index: number): ReportDashboardsTimeRangeOutputReference {
    return new ReportDashboardsTimeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportDashboards {
  /**
  * Add report variables to the dashboard. Values should be separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#report_variables Report#report_variables}
  */
  readonly reportVariables?: { [key: string]: string };
  /**
  * Dashboard uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#uid Report#uid}
  */
  readonly uid: string;
  /**
  * time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#time_range Report#time_range}
  */
  readonly timeRange?: ReportDashboardsTimeRange[] | cdktf.IResolvable;
}

export function reportDashboardsToTerraform(struct?: ReportDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    report_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.reportVariables),
    uid: cdktf.stringToTerraform(struct!.uid),
    time_range: cdktf.listMapper(reportDashboardsTimeRangeToTerraform, true)(struct!.timeRange),
  }
}


export function reportDashboardsToHclTerraform(struct?: ReportDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    report_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.reportVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_range: {
      value: cdktf.listMapperHcl(reportDashboardsTimeRangeToHclTerraform, true)(struct!.timeRange),
      isBlock: true,
      type: "list",
      storageClassType: "ReportDashboardsTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportDashboardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportDashboards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reportVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportVariables = this._reportVariables;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._timeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRange = this._timeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportDashboards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reportVariables = undefined;
      this._uid = undefined;
      this._timeRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reportVariables = value.reportVariables;
      this._uid = value.uid;
      this._timeRange.internalValue = value.timeRange;
    }
  }

  // report_variables - computed: false, optional: true, required: false
  private _reportVariables?: { [key: string]: string }; 
  public get reportVariables() {
    return this.getStringMapAttribute('report_variables');
  }
  public set reportVariables(value: { [key: string]: string }) {
    this._reportVariables = value;
  }
  public resetReportVariables() {
    this._reportVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportVariablesInput() {
    return this._reportVariables;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange = new ReportDashboardsTimeRangeList(this, "time_range", false);
  public get timeRange() {
    return this._timeRange;
  }
  public putTimeRange(value: ReportDashboardsTimeRange[] | cdktf.IResolvable) {
    this._timeRange.internalValue = value;
  }
  public resetTimeRange() {
    this._timeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange.internalValue;
  }
}

export class ReportDashboardsList extends cdktf.ComplexList {
  public internalValue? : ReportDashboards[] | cdktf.IResolvable

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
  public get(index: number): ReportDashboardsOutputReference {
    return new ReportDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportSchedule {
  /**
  * Custom interval of the report.
  * **Note:** This field is only available when frequency is set to `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#custom_interval Report#custom_interval}
  */
  readonly customInterval?: string;
  /**
  * End time of the report. If empty, the report will be sent indefinitely (according to frequency). Note that times will be saved as UTC in Grafana. Use 2006-01-02T15:04:05 format if you want to set a custom timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#end_time Report#end_time}
  */
  readonly endTime?: string;
  /**
  * Frequency of the report. Allowed values: `never`, `once`, `hourly`, `daily`, `weekly`, `monthly`, `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#frequency Report#frequency}
  */
  readonly frequency: string;
  /**
  * Send the report on the last day of the month
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#last_day_of_month Report#last_day_of_month}
  */
  readonly lastDayOfMonth?: boolean | cdktf.IResolvable;
  /**
  * Start time of the report. If empty, the start date will be set to the creation time. Note that times will be saved as UTC in Grafana. Use 2006-01-02T15:04:05 format if you want to set a custom timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#start_time Report#start_time}
  */
  readonly startTime?: string;
  /**
  * Set the report time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#timezone Report#timezone}
  */
  readonly timezone?: string;
  /**
  * Whether to send the report only on work days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#workdays_only Report#workdays_only}
  */
  readonly workdaysOnly?: boolean | cdktf.IResolvable;
}

export function reportScheduleToTerraform(struct?: ReportSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_interval: cdktf.stringToTerraform(struct!.customInterval),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    last_day_of_month: cdktf.booleanToTerraform(struct!.lastDayOfMonth),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    workdays_only: cdktf.booleanToTerraform(struct!.workdaysOnly),
  }
}


export function reportScheduleToHclTerraform(struct?: ReportSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_interval: {
      value: cdktf.stringToHclTerraform(struct!.customInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_day_of_month: {
      value: cdktf.booleanToHclTerraform(struct!.lastDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
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
    workdays_only: {
      value: cdktf.booleanToHclTerraform(struct!.workdaysOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.customInterval = this._customInterval;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._lastDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDayOfMonth = this._lastDayOfMonth;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._workdaysOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdaysOnly = this._workdaysOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customInterval = undefined;
      this._endTime = undefined;
      this._frequency = undefined;
      this._lastDayOfMonth = undefined;
      this._startTime = undefined;
      this._timezone = undefined;
      this._workdaysOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customInterval = value.customInterval;
      this._endTime = value.endTime;
      this._frequency = value.frequency;
      this._lastDayOfMonth = value.lastDayOfMonth;
      this._startTime = value.startTime;
      this._timezone = value.timezone;
      this._workdaysOnly = value.workdaysOnly;
    }
  }

  // custom_interval - computed: false, optional: true, required: false
  private _customInterval?: string; 
  public get customInterval() {
    return this.getStringAttribute('custom_interval');
  }
  public set customInterval(value: string) {
    this._customInterval = value;
  }
  public resetCustomInterval() {
    this._customInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIntervalInput() {
    return this._customInterval;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // last_day_of_month - computed: true, optional: true, required: false
  private _lastDayOfMonth?: boolean | cdktf.IResolvable; 
  public get lastDayOfMonth() {
    return this.getBooleanAttribute('last_day_of_month');
  }
  public set lastDayOfMonth(value: boolean | cdktf.IResolvable) {
    this._lastDayOfMonth = value;
  }
  public resetLastDayOfMonth() {
    this._lastDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDayOfMonthInput() {
    return this._lastDayOfMonth;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // timezone - computed: true, optional: true, required: false
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

  // workdays_only - computed: true, optional: true, required: false
  private _workdaysOnly?: boolean | cdktf.IResolvable; 
  public get workdaysOnly() {
    return this.getBooleanAttribute('workdays_only');
  }
  public set workdaysOnly(value: boolean | cdktf.IResolvable) {
    this._workdaysOnly = value;
  }
  public resetWorkdaysOnly() {
    this._workdaysOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdaysOnlyInput() {
    return this._workdaysOnly;
  }
}

export class ReportScheduleList extends cdktf.ComplexList {
  public internalValue? : ReportSchedule[] | cdktf.IResolvable

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
  public get(index: number): ReportScheduleOutputReference {
    return new ReportScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report grafana_report}
*/
export class Report extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Report resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Report to import
  * @param importFromId The id of the existing Report that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Report to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/report grafana_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportConfig
  */
  public constructor(scope: Construct, id: string, config: ReportConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_report',
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
    this._formats = config.formats;
    this._includeDashboardLink = config.includeDashboardLink;
    this._includeTableCsv = config.includeTableCsv;
    this._layout = config.layout;
    this._message = config.message;
    this._name = config.name;
    this._orgId = config.orgId;
    this._orientation = config.orientation;
    this._recipients = config.recipients;
    this._replyTo = config.replyTo;
    this._dashboards.internalValue = config.dashboards;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // formats - computed: false, optional: true, required: false
  private _formats?: string[]; 
  public get formats() {
    return cdktf.Fn.tolist(this.getListAttribute('formats'));
  }
  public set formats(value: string[]) {
    this._formats = value;
  }
  public resetFormats() {
    this._formats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatsInput() {
    return this._formats;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_dashboard_link - computed: true, optional: true, required: false
  private _includeDashboardLink?: boolean | cdktf.IResolvable; 
  public get includeDashboardLink() {
    return this.getBooleanAttribute('include_dashboard_link');
  }
  public set includeDashboardLink(value: boolean | cdktf.IResolvable) {
    this._includeDashboardLink = value;
  }
  public resetIncludeDashboardLink() {
    this._includeDashboardLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDashboardLinkInput() {
    return this._includeDashboardLink;
  }

  // include_table_csv - computed: true, optional: true, required: false
  private _includeTableCsv?: boolean | cdktf.IResolvable; 
  public get includeTableCsv() {
    return this.getBooleanAttribute('include_table_csv');
  }
  public set includeTableCsv(value: boolean | cdktf.IResolvable) {
    this._includeTableCsv = value;
  }
  public resetIncludeTableCsv() {
    this._includeTableCsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTableCsvInput() {
    return this._includeTableCsv;
  }

  // layout - computed: true, optional: true, required: false
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  public resetLayout() {
    this._layout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
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

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // orientation - computed: true, optional: true, required: false
  private _orientation?: string; 
  public get orientation() {
    return this.getStringAttribute('orientation');
  }
  public set orientation(value: string) {
    this._orientation = value;
  }
  public resetOrientation() {
    this._orientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orientationInput() {
    return this._orientation;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // reply_to - computed: false, optional: true, required: false
  private _replyTo?: string; 
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }
  public set replyTo(value: string) {
    this._replyTo = value;
  }
  public resetReplyTo() {
    this._replyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToInput() {
    return this._replyTo;
  }

  // dashboards - computed: false, optional: true, required: false
  private _dashboards = new ReportDashboardsList(this, "dashboards", false);
  public get dashboards() {
    return this._dashboards;
  }
  public putDashboards(value: ReportDashboards[] | cdktf.IResolvable) {
    this._dashboards.internalValue = value;
  }
  public resetDashboards() {
    this._dashboards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardsInput() {
    return this._dashboards.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new ReportScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ReportSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      formats: cdktf.listMapper(cdktf.stringToTerraform, false)(this._formats),
      include_dashboard_link: cdktf.booleanToTerraform(this._includeDashboardLink),
      include_table_csv: cdktf.booleanToTerraform(this._includeTableCsv),
      layout: cdktf.stringToTerraform(this._layout),
      message: cdktf.stringToTerraform(this._message),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      orientation: cdktf.stringToTerraform(this._orientation),
      recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipients),
      reply_to: cdktf.stringToTerraform(this._replyTo),
      dashboards: cdktf.listMapper(reportDashboardsToTerraform, true)(this._dashboards.internalValue),
      schedule: cdktf.listMapper(reportScheduleToTerraform, true)(this._schedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      formats: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._formats),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_dashboard_link: {
        value: cdktf.booleanToHclTerraform(this._includeDashboardLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_table_csv: {
        value: cdktf.booleanToHclTerraform(this._includeTableCsv),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      layout: {
        value: cdktf.stringToHclTerraform(this._layout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orientation: {
        value: cdktf.stringToHclTerraform(this._orientation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipients),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      reply_to: {
        value: cdktf.stringToHclTerraform(this._replyTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboards: {
        value: cdktf.listMapperHcl(reportDashboardsToHclTerraform, true)(this._dashboards.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportDashboardsList",
      },
      schedule: {
        value: cdktf.listMapperHcl(reportScheduleToHclTerraform, true)(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
