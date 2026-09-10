// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default contact point to route all unmatched notifications to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#contact_point NotificationPolicy#contact_point}
  */
  readonly contactPoint: string;
  /**
  * Allow modifying the notification policy from other sources than Terraform or the Grafana API. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#disable_provenance NotificationPolicy#disable_provenance}
  */
  readonly disableProvenance?: boolean | cdktf.IResolvable;
  /**
  * A list of alert labels to group alerts into notifications by. Use the special label `...` to group alerts by all labels, effectively disabling grouping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}
  */
  readonly groupBy: string[];
  /**
  * Minimum time interval between two notifications for the same group. Default is 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#group_interval NotificationPolicy#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * Time to wait to buffer alerts of the same group before sending a notification. Default is 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#group_wait NotificationPolicy#group_wait}
  */
  readonly groupWait?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#id NotificationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#org_id NotificationPolicy#org_id}
  */
  readonly orgId?: string;
  /**
  * Minimum time interval for re-sending a notification if an alert is still firing. Default is 4 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#repeat_interval NotificationPolicy#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#policy NotificationPolicy#policy}
  */
  readonly policy?: NotificationPolicyPolicy[] | cdktf.IResolvable;
}
export interface NotificationPolicyPolicyMatcher {
  /**
  * The name of the label to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#label NotificationPolicy#label}
  */
  readonly label: string;
  /**
  * The operator to apply when matching values of the given label. Allowed operators are `=` for equality, `!=` for negated equality, `=~` for regex equality, and `!~` for negated regex equality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#match NotificationPolicy#match}
  */
  readonly match: string;
  /**
  * The label value to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#value NotificationPolicy#value}
  */
  readonly value: string;
}

export function notificationPolicyPolicyMatcherToTerraform(struct?: NotificationPolicyPolicyMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    match: cdktf.stringToTerraform(struct!.match),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationPolicyPolicyMatcherToHclTerraform(struct?: NotificationPolicyPolicyMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyPolicyMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyPolicyMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyPolicyMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._match = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._match = value.match;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NotificationPolicyPolicyMatcherList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyPolicyMatcher[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyPolicyMatcherOutputReference {
    return new NotificationPolicyPolicyMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyPolicy {
  /**
  * A list of time interval names to apply to alerts that match this policy to suppress them unless they are sent at the specified time. Supported in Grafana 12.1.0 and later
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#active_timings NotificationPolicy#active_timings}
  */
  readonly activeTimings?: string[];
  /**
  * The contact point to route notifications that match this rule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#contact_point NotificationPolicy#contact_point}
  */
  readonly contactPoint?: string;
  /**
  * Whether to continue matching subsequent rules if an alert matches the current rule. Otherwise, the rule will be 'consumed' by the first policy to match it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#continue NotificationPolicy#continue}
  */
  readonly continue?: boolean | cdktf.IResolvable;
  /**
  * A list of alert labels to group alerts into notifications by. Use the special label `...` to group alerts by all labels, effectively disabling grouping. Required for root policy only. If empty, the parent grouping is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Minimum time interval between two notifications for the same group. Default is 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#group_interval NotificationPolicy#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * Time to wait to buffer alerts of the same group before sending a notification. Default is 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#group_wait NotificationPolicy#group_wait}
  */
  readonly groupWait?: string;
  /**
  * A list of time intervals to apply to alerts that match this policy to mute them for the specified time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#mute_timings NotificationPolicy#mute_timings}
  */
  readonly muteTimings?: string[];
  /**
  * Minimum time interval for re-sending a notification if an alert is still firing. Default is 4 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#repeat_interval NotificationPolicy#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#matcher NotificationPolicy#matcher}
  */
  readonly matcher?: NotificationPolicyPolicyMatcher[] | cdktf.IResolvable;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#policy NotificationPolicy#policy}
  */
  readonly policy?: NotificationPolicyPolicy[] | cdktf.IResolvable;
}

export function notificationPolicyPolicyToTerraform(struct?: NotificationPolicyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_timings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.activeTimings),
    contact_point: cdktf.stringToTerraform(struct!.contactPoint),
    continue: cdktf.booleanToTerraform(struct!.continue),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    group_interval: cdktf.stringToTerraform(struct!.groupInterval),
    group_wait: cdktf.stringToTerraform(struct!.groupWait),
    mute_timings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.muteTimings),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    matcher: cdktf.listMapper(notificationPolicyPolicyMatcherToTerraform, true)(struct!.matcher),
    policy: cdktf.listMapper(notificationPolicyPolicyToTerraform, true)(struct!.policy),
  }
}


export function notificationPolicyPolicyToHclTerraform(struct?: NotificationPolicyPolicy | cdktf.IResolvable): any {
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
    continue: {
      value: cdktf.booleanToHclTerraform(struct!.continue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    matcher: {
      value: cdktf.listMapperHcl(notificationPolicyPolicyMatcherToHclTerraform, true)(struct!.matcher),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationPolicyPolicyMatcherList",
    },
    policy: {
      value: cdktf.listMapperHcl(notificationPolicyPolicyToHclTerraform, true)(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue;
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
    if (this._matcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeTimings = undefined;
      this._contactPoint = undefined;
      this._continue = undefined;
      this._groupBy = undefined;
      this._groupInterval = undefined;
      this._groupWait = undefined;
      this._muteTimings = undefined;
      this._repeatInterval = undefined;
      this._matcher.internalValue = undefined;
      this._policy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeTimings = value.activeTimings;
      this._contactPoint = value.contactPoint;
      this._continue = value.continue;
      this._groupBy = value.groupBy;
      this._groupInterval = value.groupInterval;
      this._groupWait = value.groupWait;
      this._muteTimings = value.muteTimings;
      this._repeatInterval = value.repeatInterval;
      this._matcher.internalValue = value.matcher;
      this._policy.internalValue = value.policy;
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

  // contact_point - computed: false, optional: true, required: false
  private _contactPoint?: string; 
  public get contactPoint() {
    return this.getStringAttribute('contact_point');
  }
  public set contactPoint(value: string) {
    this._contactPoint = value;
  }
  public resetContactPoint() {
    this._contactPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPointInput() {
    return this._contactPoint;
  }

  // continue - computed: false, optional: true, required: false
  private _continue?: boolean | cdktf.IResolvable; 
  public get continue() {
    return this.getBooleanAttribute('continue');
  }
  public set continue(value: boolean | cdktf.IResolvable) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
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

  // matcher - computed: false, optional: true, required: false
  private _matcher = new NotificationPolicyPolicyMatcherList(this, "matcher", true);
  public get matcher() {
    return this._matcher;
  }
  public putMatcher(value: NotificationPolicyPolicyMatcher[] | cdktf.IResolvable) {
    this._matcher.internalValue = value;
  }
  public resetMatcher() {
    this._matcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new NotificationPolicyPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: NotificationPolicyPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}

export class NotificationPolicyPolicyList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyPolicy[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyPolicyOutputReference {
    return new NotificationPolicyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy grafana_notification_policy}
*/
export class NotificationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_notification_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationPolicy to import
  * @param importFromId The id of the existing NotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_notification_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/notification_policy grafana_notification_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_notification_policy',
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
    this._contactPoint = config.contactPoint;
    this._disableProvenance = config.disableProvenance;
    this._groupBy = config.groupBy;
    this._groupInterval = config.groupInterval;
    this._groupWait = config.groupWait;
    this._id = config.id;
    this._orgId = config.orgId;
    this._repeatInterval = config.repeatInterval;
    this._policy.internalValue = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // group_by - computed: false, optional: false, required: true
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
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

  // policy - computed: false, optional: true, required: false
  private _policy = new NotificationPolicyPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: NotificationPolicyPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_point: cdktf.stringToTerraform(this._contactPoint),
      disable_provenance: cdktf.booleanToTerraform(this._disableProvenance),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      group_interval: cdktf.stringToTerraform(this._groupInterval),
      group_wait: cdktf.stringToTerraform(this._groupWait),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      repeat_interval: cdktf.stringToTerraform(this._repeatInterval),
      policy: cdktf.listMapper(notificationPolicyPolicyToTerraform, true)(this._policy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_point: {
        value: cdktf.stringToHclTerraform(this._contactPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_provenance: {
        value: cdktf.booleanToHclTerraform(this._disableProvenance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group_interval: {
        value: cdktf.stringToHclTerraform(this._groupInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_wait: {
        value: cdktf.stringToHclTerraform(this._groupWait),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_interval: {
        value: cdktf.stringToHclTerraform(this._repeatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.listMapperHcl(notificationPolicyPolicyToHclTerraform, true)(this._policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationPolicyPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
