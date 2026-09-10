// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow modifying the rule group from other sources than Terraform or the Grafana API. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#disable_provenance RuleGroup#disable_provenance}
  */
  readonly disableProvenance?: boolean | cdktf.IResolvable;
  /**
  * The UID of the folder that the group belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#folder_uid RuleGroup#folder_uid}
  */
  readonly folderUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#id RuleGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval, in seconds, at which all rules in the group are evaluated. If a group contains many rules, the rules are evaluated sequentially.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#interval_seconds RuleGroup#interval_seconds}
  */
  readonly intervalSeconds: number;
  /**
  * The name of the rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#name RuleGroup#name}
  */
  readonly name: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#org_id RuleGroup#org_id}
  */
  readonly orgId?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#rule RuleGroup#rule}
  */
  readonly rule: RuleGroupRule[] | cdktf.IResolvable;
}
export interface RuleGroupRuleDataRelativeTimeRange {
  /**
  * The number of seconds in the past, relative to when the rule is evaluated, at which the time range begins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#from RuleGroup#from}
  */
  readonly from: number;
  /**
  * The number of seconds in the past, relative to when the rule is evaluated, at which the time range ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#to RuleGroup#to}
  */
  readonly to: number;
}

export function ruleGroupRuleDataRelativeTimeRangeToTerraform(struct?: RuleGroupRuleDataRelativeTimeRangeOutputReference | RuleGroupRuleDataRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function ruleGroupRuleDataRelativeTimeRangeToHclTerraform(struct?: RuleGroupRuleDataRelativeTimeRangeOutputReference | RuleGroupRuleDataRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleGroupRuleDataRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleGroupRuleDataRelativeTimeRange | undefined {
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

  public set internalValue(value: RuleGroupRuleDataRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface RuleGroupRuleData {
  /**
  * The UID of the datasource being queried, or "-100" if this stage is an expression stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#datasource_uid RuleGroup#datasource_uid}
  */
  readonly datasourceUid: string;
  /**
  * Custom JSON data to send to the specified datasource when querying.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#model RuleGroup#model}
  */
  readonly model: string;
  /**
  * An optional identifier for the type of query being executed. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#query_type RuleGroup#query_type}
  */
  readonly queryType?: string;
  /**
  * A unique string to identify this query stage within a rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#ref_id RuleGroup#ref_id}
  */
  readonly refId: string;
  /**
  * relative_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#relative_time_range RuleGroup#relative_time_range}
  */
  readonly relativeTimeRange: RuleGroupRuleDataRelativeTimeRange;
}

export function ruleGroupRuleDataToTerraform(struct?: RuleGroupRuleData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_uid: cdktf.stringToTerraform(struct!.datasourceUid),
    model: cdktf.stringToTerraform(struct!.model),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    ref_id: cdktf.stringToTerraform(struct!.refId),
    relative_time_range: ruleGroupRuleDataRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}


export function ruleGroupRuleDataToHclTerraform(struct?: RuleGroupRuleData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource_uid: {
      value: cdktf.stringToHclTerraform(struct!.datasourceUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_time_range: {
      value: ruleGroupRuleDataRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupRuleDataRelativeTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleGroupRuleDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleGroupRuleData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceUid = this._datasourceUid;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupRuleData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceUid = undefined;
      this._model = undefined;
      this._queryType = undefined;
      this._refId = undefined;
      this._relativeTimeRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceUid = value.datasourceUid;
      this._model = value.model;
      this._queryType = value.queryType;
      this._refId = value.refId;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
    }
  }

  // datasource_uid - computed: false, optional: false, required: true
  private _datasourceUid?: string; 
  public get datasourceUid() {
    return this.getStringAttribute('datasource_uid');
  }
  public set datasourceUid(value: string) {
    this._datasourceUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceUidInput() {
    return this._datasourceUid;
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // query_type - computed: false, optional: true, required: false
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // ref_id - computed: false, optional: false, required: true
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // relative_time_range - computed: false, optional: false, required: true
  private _relativeTimeRange = new RuleGroupRuleDataRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: RuleGroupRuleDataRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }
}

export class RuleGroupRuleDataList extends cdktf.ComplexList {
  public internalValue? : RuleGroupRuleData[] | cdktf.IResolvable

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
  public get(index: number): RuleGroupRuleDataOutputReference {
    return new RuleGroupRuleDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleGroupRuleNotificationSettings {
  /**
  * A list of time interval names to apply to alerts that match this policy to suppress them unless they are sent at the specified time. Supported in Grafana 12.1.0 and later
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#active_timings RuleGroup#active_timings}
  */
  readonly activeTimings?: string[];
  /**
  * The contact point to route notifications that match this rule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#contact_point RuleGroup#contact_point}
  */
  readonly contactPoint: string;
  /**
  * A list of alert labels to group alerts into notifications by. Use the special label `...` to group alerts by all labels, effectively disabling grouping. If empty, no grouping is used. If specified, requires labels 'alertname' and 'grafana_folder' to be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#group_by RuleGroup#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Minimum time interval between two notifications for the same group. Default is 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#group_interval RuleGroup#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * Time to wait to buffer alerts of the same group before sending a notification. Default is 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#group_wait RuleGroup#group_wait}
  */
  readonly groupWait?: string;
  /**
  * A list of mute timing names to apply to alerts that match this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#mute_timings RuleGroup#mute_timings}
  */
  readonly muteTimings?: string[];
  /**
  * Minimum time interval for re-sending a notification if an alert is still firing. Default is 4 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#repeat_interval RuleGroup#repeat_interval}
  */
  readonly repeatInterval?: string;
}

export function ruleGroupRuleNotificationSettingsToTerraform(struct?: RuleGroupRuleNotificationSettingsOutputReference | RuleGroupRuleNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_timings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.activeTimings),
    contact_point: cdktf.stringToTerraform(struct!.contactPoint),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    group_interval: cdktf.stringToTerraform(struct!.groupInterval),
    group_wait: cdktf.stringToTerraform(struct!.groupWait),
    mute_timings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.muteTimings),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
  }
}


export function ruleGroupRuleNotificationSettingsToHclTerraform(struct?: RuleGroupRuleNotificationSettingsOutputReference | RuleGroupRuleNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_timings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.activeTimings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    contact_point: {
      value: cdktf.stringToHclTerraform(struct!.contactPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_interval: {
      value: cdktf.stringToHclTerraform(struct!.groupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_wait: {
      value: cdktf.stringToHclTerraform(struct!.groupWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mute_timings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.muteTimings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleGroupRuleNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleGroupRuleNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTimings !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTimings = this._activeTimings;
    }
    if (this._contactPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactPoint = this._contactPoint;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._groupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInterval = this._groupInterval;
    }
    if (this._groupWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWait = this._groupWait;
    }
    if (this._muteTimings !== undefined) {
      hasAnyValues = true;
      internalValueResult.muteTimings = this._muteTimings;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupRuleNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeTimings = undefined;
      this._contactPoint = undefined;
      this._groupBy = undefined;
      this._groupInterval = undefined;
      this._groupWait = undefined;
      this._muteTimings = undefined;
      this._repeatInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeTimings = value.activeTimings;
      this._contactPoint = value.contactPoint;
      this._groupBy = value.groupBy;
      this._groupInterval = value.groupInterval;
      this._groupWait = value.groupWait;
      this._muteTimings = value.muteTimings;
      this._repeatInterval = value.repeatInterval;
    }
  }

  // active_timings - computed: false, optional: true, required: false
  private _activeTimings?: string[]; 
  public get activeTimings() {
    return this.getListAttribute('active_timings');
  }
  public set activeTimings(value: string[]) {
    this._activeTimings = value;
  }
  public resetActiveTimings() {
    this._activeTimings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimingsInput() {
    return this._activeTimings;
  }

  // contact_point - computed: false, optional: false, required: true
  private _contactPoint?: string; 
  public get contactPoint() {
    return this.getStringAttribute('contact_point');
  }
  public set contactPoint(value: string) {
    this._contactPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPointInput() {
    return this._contactPoint;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // group_interval - computed: false, optional: true, required: false
  private _groupInterval?: string; 
  public get groupInterval() {
    return this.getStringAttribute('group_interval');
  }
  public set groupInterval(value: string) {
    this._groupInterval = value;
  }
  public resetGroupInterval() {
    this._groupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIntervalInput() {
    return this._groupInterval;
  }

  // group_wait - computed: false, optional: true, required: false
  private _groupWait?: string; 
  public get groupWait() {
    return this.getStringAttribute('group_wait');
  }
  public set groupWait(value: string) {
    this._groupWait = value;
  }
  public resetGroupWait() {
    this._groupWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWaitInput() {
    return this._groupWait;
  }

  // mute_timings - computed: false, optional: true, required: false
  private _muteTimings?: string[]; 
  public get muteTimings() {
    return this.getListAttribute('mute_timings');
  }
  public set muteTimings(value: string[]) {
    this._muteTimings = value;
  }
  public resetMuteTimings() {
    this._muteTimings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteTimingsInput() {
    return this._muteTimings;
  }

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }
}
export interface RuleGroupRuleRecord {
  /**
  * The ref id of the query node in the data field to use as the source of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#from RuleGroup#from}
  */
  readonly from: string;
  /**
  * The name of the metric to write to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#metric RuleGroup#metric}
  */
  readonly metric: string;
  /**
  * The UID of the datasource to write the metric to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#target_datasource_uid RuleGroup#target_datasource_uid}
  */
  readonly targetDatasourceUid?: string;
}

export function ruleGroupRuleRecordToTerraform(struct?: RuleGroupRuleRecordOutputReference | RuleGroupRuleRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    metric: cdktf.stringToTerraform(struct!.metric),
    target_datasource_uid: cdktf.stringToTerraform(struct!.targetDatasourceUid),
  }
}


export function ruleGroupRuleRecordToHclTerraform(struct?: RuleGroupRuleRecordOutputReference | RuleGroupRuleRecord): any {
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
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_datasource_uid: {
      value: cdktf.stringToHclTerraform(struct!.targetDatasourceUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleGroupRuleRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RuleGroupRuleRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._targetDatasourceUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDatasourceUid = this._targetDatasourceUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupRuleRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._metric = undefined;
      this._targetDatasourceUid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._metric = value.metric;
      this._targetDatasourceUid = value.targetDatasourceUid;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // target_datasource_uid - computed: false, optional: true, required: false
  private _targetDatasourceUid?: string; 
  public get targetDatasourceUid() {
    return this.getStringAttribute('target_datasource_uid');
  }
  public set targetDatasourceUid(value: string) {
    this._targetDatasourceUid = value;
  }
  public resetTargetDatasourceUid() {
    this._targetDatasourceUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatasourceUidInput() {
    return this._targetDatasourceUid;
  }
}
export interface RuleGroupRule {
  /**
  * Key-value pairs of metadata to attach to the alert rule. They add additional information, such as a `summary` or `runbook_url`, to help identify and investigate alerts. The `__dashboardUid__` and `__panelId__` annotations, which link alerts to a panel, must be set together. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#annotations RuleGroup#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The `ref_id` of the query node in the `data` field to use as the alert condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#condition RuleGroup#condition}
  */
  readonly condition?: string;
  /**
  * Describes what state to enter when the rule's query is invalid and the rule cannot be executed. Options are OK, Error, KeepLast, and Alerting.  Defaults to Alerting if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#exec_err_state RuleGroup#exec_err_state}
  */
  readonly execErrState?: string;
  /**
  * The amount of time for which the rule must be breached for the rule to be considered to be Firing. Before this time has elapsed, the rule is only considered to be Pending. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#for RuleGroup#for}
  */
  readonly for?: string;
  /**
  * Sets whether the alert should be paused or not. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#is_paused RuleGroup#is_paused}
  */
  readonly isPaused?: boolean | cdktf.IResolvable;
  /**
  * The amount of time for which the rule will considered to be Recovering after initially Firing. Before this time has elapsed, the rule will continue to fire once it's been triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#keep_firing_for RuleGroup#keep_firing_for}
  */
  readonly keepFiringFor?: string;
  /**
  * Key-value pairs to attach to the alert rule that can be used in matching, grouping, and routing. Defaults to `map[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#labels RuleGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of missing series evaluations that must occur before the rule is considered to be resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#missing_series_evals_to_resolve RuleGroup#missing_series_evals_to_resolve}
  */
  readonly missingSeriesEvalsToResolve?: number;
  /**
  * The name of the alert rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#name RuleGroup#name}
  */
  readonly name: string;
  /**
  * Describes what state to enter when the rule's query returns No Data. Options are OK, NoData, KeepLast, and Alerting. Defaults to NoData if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#no_data_state RuleGroup#no_data_state}
  */
  readonly noDataState?: string;
  /**
  * The unique identifier of the alert rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#uid RuleGroup#uid}
  */
  readonly uid?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#data RuleGroup#data}
  */
  readonly data: RuleGroupRuleData[] | cdktf.IResolvable;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#notification_settings RuleGroup#notification_settings}
  */
  readonly notificationSettings?: RuleGroupRuleNotificationSettings;
  /**
  * record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#record RuleGroup#record}
  */
  readonly record?: RuleGroupRuleRecord;
}

export function ruleGroupRuleToTerraform(struct?: RuleGroupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    condition: cdktf.stringToTerraform(struct!.condition),
    exec_err_state: cdktf.stringToTerraform(struct!.execErrState),
    for: cdktf.stringToTerraform(struct!.for),
    is_paused: cdktf.booleanToTerraform(struct!.isPaused),
    keep_firing_for: cdktf.stringToTerraform(struct!.keepFiringFor),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    missing_series_evals_to_resolve: cdktf.numberToTerraform(struct!.missingSeriesEvalsToResolve),
    name: cdktf.stringToTerraform(struct!.name),
    no_data_state: cdktf.stringToTerraform(struct!.noDataState),
    uid: cdktf.stringToTerraform(struct!.uid),
    data: cdktf.listMapper(ruleGroupRuleDataToTerraform, true)(struct!.data),
    notification_settings: ruleGroupRuleNotificationSettingsToTerraform(struct!.notificationSettings),
    record: ruleGroupRuleRecordToTerraform(struct!.record),
  }
}


export function ruleGroupRuleToHclTerraform(struct?: RuleGroupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exec_err_state: {
      value: cdktf.stringToHclTerraform(struct!.execErrState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for: {
      value: cdktf.stringToHclTerraform(struct!.for),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_paused: {
      value: cdktf.booleanToHclTerraform(struct!.isPaused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_firing_for: {
      value: cdktf.stringToHclTerraform(struct!.keepFiringFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    missing_series_evals_to_resolve: {
      value: cdktf.numberToHclTerraform(struct!.missingSeriesEvalsToResolve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_data_state: {
      value: cdktf.stringToHclTerraform(struct!.noDataState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.listMapperHcl(ruleGroupRuleDataToHclTerraform, true)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupRuleDataList",
    },
    notification_settings: {
      value: ruleGroupRuleNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupRuleNotificationSettingsList",
    },
    record: {
      value: ruleGroupRuleRecordToHclTerraform(struct!.record),
      isBlock: true,
      type: "list",
      storageClassType: "RuleGroupRuleRecordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleGroupRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleGroupRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._execErrState !== undefined) {
      hasAnyValues = true;
      internalValueResult.execErrState = this._execErrState;
    }
    if (this._for !== undefined) {
      hasAnyValues = true;
      internalValueResult.for = this._for;
    }
    if (this._isPaused !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPaused = this._isPaused;
    }
    if (this._keepFiringFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepFiringFor = this._keepFiringFor;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._missingSeriesEvalsToResolve !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingSeriesEvalsToResolve = this._missingSeriesEvalsToResolve;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noDataState !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDataState = this._noDataState;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._notificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
    }
    if (this._record?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.record = this._record?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleGroupRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._condition = undefined;
      this._execErrState = undefined;
      this._for = undefined;
      this._isPaused = undefined;
      this._keepFiringFor = undefined;
      this._labels = undefined;
      this._missingSeriesEvalsToResolve = undefined;
      this._name = undefined;
      this._noDataState = undefined;
      this._uid = undefined;
      this._data.internalValue = undefined;
      this._notificationSettings.internalValue = undefined;
      this._record.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._condition = value.condition;
      this._execErrState = value.execErrState;
      this._for = value.for;
      this._isPaused = value.isPaused;
      this._keepFiringFor = value.keepFiringFor;
      this._labels = value.labels;
      this._missingSeriesEvalsToResolve = value.missingSeriesEvalsToResolve;
      this._name = value.name;
      this._noDataState = value.noDataState;
      this._uid = value.uid;
      this._data.internalValue = value.data;
      this._notificationSettings.internalValue = value.notificationSettings;
      this._record.internalValue = value.record;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // exec_err_state - computed: false, optional: true, required: false
  private _execErrState?: string; 
  public get execErrState() {
    return this.getStringAttribute('exec_err_state');
  }
  public set execErrState(value: string) {
    this._execErrState = value;
  }
  public resetExecErrState() {
    this._execErrState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execErrStateInput() {
    return this._execErrState;
  }

  // for - computed: false, optional: true, required: false
  private _for?: string; 
  public get for() {
    return this.getStringAttribute('for');
  }
  public set for(value: string) {
    this._for = value;
  }
  public resetFor() {
    this._for = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forInput() {
    return this._for;
  }

  // is_paused - computed: false, optional: true, required: false
  private _isPaused?: boolean | cdktf.IResolvable; 
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
  }
  public set isPaused(value: boolean | cdktf.IResolvable) {
    this._isPaused = value;
  }
  public resetIsPaused() {
    this._isPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPausedInput() {
    return this._isPaused;
  }

  // keep_firing_for - computed: false, optional: true, required: false
  private _keepFiringFor?: string; 
  public get keepFiringFor() {
    return this.getStringAttribute('keep_firing_for');
  }
  public set keepFiringFor(value: string) {
    this._keepFiringFor = value;
  }
  public resetKeepFiringFor() {
    this._keepFiringFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepFiringForInput() {
    return this._keepFiringFor;
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

  // missing_series_evals_to_resolve - computed: false, optional: true, required: false
  private _missingSeriesEvalsToResolve?: number; 
  public get missingSeriesEvalsToResolve() {
    return this.getNumberAttribute('missing_series_evals_to_resolve');
  }
  public set missingSeriesEvalsToResolve(value: number) {
    this._missingSeriesEvalsToResolve = value;
  }
  public resetMissingSeriesEvalsToResolve() {
    this._missingSeriesEvalsToResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingSeriesEvalsToResolveInput() {
    return this._missingSeriesEvalsToResolve;
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

  // no_data_state - computed: false, optional: true, required: false
  private _noDataState?: string; 
  public get noDataState() {
    return this.getStringAttribute('no_data_state');
  }
  public set noDataState(value: string) {
    this._noDataState = value;
  }
  public resetNoDataState() {
    this._noDataState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataStateInput() {
    return this._noDataState;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // data - computed: false, optional: false, required: true
  private _data = new RuleGroupRuleDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: RuleGroupRuleData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // notification_settings - computed: false, optional: true, required: false
  private _notificationSettings = new RuleGroupRuleNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: RuleGroupRuleNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // record - computed: false, optional: true, required: false
  private _record = new RuleGroupRuleRecordOutputReference(this, "record");
  public get record() {
    return this._record;
  }
  public putRecord(value: RuleGroupRuleRecord) {
    this._record.internalValue = value;
  }
  public resetRecord() {
    this._record.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record.internalValue;
  }
}

export class RuleGroupRuleList extends cdktf.ComplexList {
  public internalValue? : RuleGroupRule[] | cdktf.IResolvable

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
  public get(index: number): RuleGroupRuleOutputReference {
    return new RuleGroupRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group grafana_rule_group}
*/
export class RuleGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_rule_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RuleGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RuleGroup to import
  * @param importFromId The id of the existing RuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RuleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_rule_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/rule_group grafana_rule_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_rule_group',
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
    this._disableProvenance = config.disableProvenance;
    this._folderUid = config.folderUid;
    this._id = config.id;
    this._intervalSeconds = config.intervalSeconds;
    this._name = config.name;
    this._orgId = config.orgId;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_provenance - computed: false, optional: true, required: false
  private _disableProvenance?: boolean | cdktf.IResolvable; 
  public get disableProvenance() {
    return this.getBooleanAttribute('disable_provenance');
  }
  public set disableProvenance(value: boolean | cdktf.IResolvable) {
    this._disableProvenance = value;
  }
  public resetDisableProvenance() {
    this._disableProvenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProvenanceInput() {
    return this._disableProvenance;
  }

  // folder_uid - computed: false, optional: false, required: true
  private _folderUid?: string; 
  public get folderUid() {
    return this.getStringAttribute('folder_uid');
  }
  public set folderUid(value: string) {
    this._folderUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderUidInput() {
    return this._folderUid;
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

  // interval_seconds - computed: false, optional: false, required: true
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
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

  // org_id - computed: false, optional: true, required: false
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

  // rule - computed: false, optional: false, required: true
  private _rule = new RuleGroupRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: RuleGroupRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_provenance: cdktf.booleanToTerraform(this._disableProvenance),
      folder_uid: cdktf.stringToTerraform(this._folderUid),
      id: cdktf.stringToTerraform(this._id),
      interval_seconds: cdktf.numberToTerraform(this._intervalSeconds),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      rule: cdktf.listMapper(ruleGroupRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_provenance: {
        value: cdktf.booleanToHclTerraform(this._disableProvenance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder_uid: {
        value: cdktf.stringToHclTerraform(this._folderUid),
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
      interval_seconds: {
        value: cdktf.numberToHclTerraform(this._intervalSeconds),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(ruleGroupRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleGroupRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
