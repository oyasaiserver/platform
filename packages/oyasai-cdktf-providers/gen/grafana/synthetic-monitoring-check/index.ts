// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticMonitoringCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can be set to `none`, `low`, `medium`, or `high` to correspond to the check [alert levels](https://grafana.com/docs/grafana-cloud/testing/synthetic-monitoring/configure-alerts/synthetic-monitoring-alerting/). Defaults to `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#alert_sensitivity SyntheticMonitoringCheck#alert_sensitivity}
  */
  readonly alertSensitivity?: string;
  /**
  * Metrics are reduced by default. Set this to `false` if you'd like to publish all metrics. We maintain a [full list of metrics](https://github.com/grafana/synthetic-monitoring-agent/tree/main/internal/scraper/testdata) collected for each. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#basic_metrics_only SyntheticMonitoringCheck#basic_metrics_only}
  */
  readonly basicMetricsOnly?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the check. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#enabled SyntheticMonitoringCheck#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The UID of the Grafana folder to associate the check with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#folder_uid SyntheticMonitoringCheck#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * How often the check runs in milliseconds (the value is not truly a "frequency" but a "period"). The minimum acceptable value is 1 second (1000 ms), and the maximum is 1 hour (3600000 ms). Defaults to `60000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#frequency SyntheticMonitoringCheck#frequency}
  */
  readonly frequency?: number;
  /**
  * Name used for job label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#job SyntheticMonitoringCheck#job}
  */
  readonly job: string;
  /**
  * Custom labels to be included with collected metrics and logs. The maximum number of labels that can be specified per check is 5. These are applied, along with the probe-specific labels, to the outgoing metrics. The names and values of the labels cannot be empty, and the maximum length is 32 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#labels SyntheticMonitoringCheck#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * List of probe location IDs where this target will be checked from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#probes SyntheticMonitoringCheck#probes}
  */
  readonly probes: number[];
  /**
  * Hostname to ping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#target SyntheticMonitoringCheck#target}
  */
  readonly target: string;
  /**
  * Specifies the maximum running time for the check in milliseconds. The minimum acceptable value is 1 second (1000 ms), and the maximum 180 seconds (180000 ms). Defaults to `3000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#timeout SyntheticMonitoringCheck#timeout}
  */
  readonly timeout?: number;
  /**
  * channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#channels SyntheticMonitoringCheck#channels}
  */
  readonly channels?: SyntheticMonitoringCheckChannels;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#settings SyntheticMonitoringCheck#settings}
  */
  readonly settings: SyntheticMonitoringCheckSettings;
}
export interface SyntheticMonitoringCheckChannelsK6 {
  /**
  * The ID of the k6 channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#id SyntheticMonitoringCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function syntheticMonitoringCheckChannelsK6ToTerraform(struct?: SyntheticMonitoringCheckChannelsK6OutputReference | SyntheticMonitoringCheckChannelsK6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function syntheticMonitoringCheckChannelsK6ToHclTerraform(struct?: SyntheticMonitoringCheckChannelsK6OutputReference | SyntheticMonitoringCheckChannelsK6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SyntheticMonitoringCheckChannelsK6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckChannelsK6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckChannelsK6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}
export interface SyntheticMonitoringCheckChannels {
  /**
  * k6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#k6 SyntheticMonitoringCheck#k6}
  */
  readonly k6?: SyntheticMonitoringCheckChannelsK6;
}

export function syntheticMonitoringCheckChannelsToTerraform(struct?: SyntheticMonitoringCheckChannelsOutputReference | SyntheticMonitoringCheckChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k6: syntheticMonitoringCheckChannelsK6ToTerraform(struct!.k6),
  }
}


export function syntheticMonitoringCheckChannelsToHclTerraform(struct?: SyntheticMonitoringCheckChannelsOutputReference | SyntheticMonitoringCheckChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k6: {
      value: syntheticMonitoringCheckChannelsK6ToHclTerraform(struct!.k6),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticMonitoringCheckChannelsK6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckChannelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckChannels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k6 = this._k6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckChannels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._k6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._k6.internalValue = value.k6;
    }
  }

  // k6 - computed: false, optional: true, required: false
  private _k6 = new SyntheticMonitoringCheckChannelsK6OutputReference(this, "k6");
  public get k6() {
    return this._k6;
  }
  public putK6(value: SyntheticMonitoringCheckChannelsK6) {
    this._k6.internalValue = value;
  }
  public resetK6() {
    this._k6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k6Input() {
    return this._k6.internalValue;
  }
}
export interface SyntheticMonitoringCheckSettingsBrowser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#script SyntheticMonitoringCheck#script}
  */
  readonly script: string;
}

export function syntheticMonitoringCheckSettingsBrowserToTerraform(struct?: SyntheticMonitoringCheckSettingsBrowserOutputReference | SyntheticMonitoringCheckSettingsBrowser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function syntheticMonitoringCheckSettingsBrowserToHclTerraform(struct?: SyntheticMonitoringCheckSettingsBrowserOutputReference | SyntheticMonitoringCheckSettingsBrowser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsBrowserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsBrowser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsBrowser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._script = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._script = value.script;
    }
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}
export interface SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs {
  /**
  * Fail if value matches regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_matches_regexp SyntheticMonitoringCheck#fail_if_matches_regexp}
  */
  readonly failIfMatchesRegexp?: string[];
  /**
  * Fail if value does not match regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_not_matches_regexp SyntheticMonitoringCheck#fail_if_not_matches_regexp}
  */
  readonly failIfNotMatchesRegexp?: string[];
}

export function syntheticMonitoringCheckSettingsDnsValidateAdditionalRrsToTerraform(struct?: SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_matches_regexp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failIfMatchesRegexp),
    fail_if_not_matches_regexp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failIfNotMatchesRegexp),
  }
}


export function syntheticMonitoringCheckSettingsDnsValidateAdditionalRrsToHclTerraform(struct?: SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_matches_regexp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failIfMatchesRegexp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fail_if_not_matches_regexp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failIfNotMatchesRegexp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfMatchesRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfMatchesRegexp = this._failIfMatchesRegexp;
    }
    if (this._failIfNotMatchesRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfNotMatchesRegexp = this._failIfNotMatchesRegexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failIfMatchesRegexp = undefined;
      this._failIfNotMatchesRegexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failIfMatchesRegexp = value.failIfMatchesRegexp;
      this._failIfNotMatchesRegexp = value.failIfNotMatchesRegexp;
    }
  }

  // fail_if_matches_regexp - computed: false, optional: true, required: false
  private _failIfMatchesRegexp?: string[]; 
  public get failIfMatchesRegexp() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_if_matches_regexp'));
  }
  public set failIfMatchesRegexp(value: string[]) {
    this._failIfMatchesRegexp = value;
  }
  public resetFailIfMatchesRegexp() {
    this._failIfMatchesRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfMatchesRegexpInput() {
    return this._failIfMatchesRegexp;
  }

  // fail_if_not_matches_regexp - computed: false, optional: true, required: false
  private _failIfNotMatchesRegexp?: string[]; 
  public get failIfNotMatchesRegexp() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_if_not_matches_regexp'));
  }
  public set failIfNotMatchesRegexp(value: string[]) {
    this._failIfNotMatchesRegexp = value;
  }
  public resetFailIfNotMatchesRegexp() {
    this._failIfNotMatchesRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfNotMatchesRegexpInput() {
    return this._failIfNotMatchesRegexp;
  }
}

export class SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList extends cdktf.ComplexList {
  public internalValue? : SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs[] | cdktf.IResolvable

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
  public get(index: number): SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference {
    return new SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs {
  /**
  * Fail if value matches regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_matches_regexp SyntheticMonitoringCheck#fail_if_matches_regexp}
  */
  readonly failIfMatchesRegexp?: string[];
  /**
  * Fail if value does not match regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_not_matches_regexp SyntheticMonitoringCheck#fail_if_not_matches_regexp}
  */
  readonly failIfNotMatchesRegexp?: string[];
}

export function syntheticMonitoringCheckSettingsDnsValidateAnswerRrsToTerraform(struct?: SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference | SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_matches_regexp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failIfMatchesRegexp),
    fail_if_not_matches_regexp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failIfNotMatchesRegexp),
  }
}


export function syntheticMonitoringCheckSettingsDnsValidateAnswerRrsToHclTerraform(struct?: SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference | SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_matches_regexp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failIfMatchesRegexp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fail_if_not_matches_regexp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failIfNotMatchesRegexp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfMatchesRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfMatchesRegexp = this._failIfMatchesRegexp;
    }
    if (this._failIfNotMatchesRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfNotMatchesRegexp = this._failIfNotMatchesRegexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failIfMatchesRegexp = undefined;
      this._failIfNotMatchesRegexp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failIfMatchesRegexp = value.failIfMatchesRegexp;
      this._failIfNotMatchesRegexp = value.failIfNotMatchesRegexp;
    }
  }

  // fail_if_matches_regexp - computed: false, optional: true, required: false
  private _failIfMatchesRegexp?: string[]; 
  public get failIfMatchesRegexp() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_if_matches_regexp'));
  }
  public set failIfMatchesRegexp(value: string[]) {
    this._failIfMatchesRegexp = value;
  }
  public resetFailIfMatchesRegexp() {
    this._failIfMatchesRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfMatchesRegexpInput() {
    return this._failIfMatchesRegexp;
  }

  // fail_if_not_matches_regexp - computed: false, optional: true, required: false
  private _failIfNotMatchesRegexp?: string[]; 
  public get failIfNotMatchesRegexp() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_if_not_matches_regexp'));
  }
  public set failIfNotMatchesRegexp(value: string[]) {
    this._failIfNotMatchesRegexp = value;
  }
  public resetFailIfNotMatchesRegexp() {
    this._failIfNotMatchesRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfNotMatchesRegexpInput() {
    return this._failIfNotMatchesRegexp;
  }
}
export interface SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs {
  /**
  * Fail if value matches regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_matches_regexp SyntheticMonitoringCheck#fail_if_matches_regexp}
  */
  readonly failIfMatchesRegexp?: string[];
  /**
  * Fail if value does not match regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_not_matches_regexp SyntheticMonitoringCheck#fail_if_not_matches_regexp}
  */
  readonly failIfNotMatchesRegexp?: string[];
}

export function syntheticMonitoringCheckSettingsDnsValidateAuthorityRrsToTerraform(struct?: SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference | SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_if_matches_regexp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failIfMatchesRegexp),
    fail_if_not_matches_regexp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failIfNotMatchesRegexp),
  }
}


export function syntheticMonitoringCheckSettingsDnsValidateAuthorityRrsToHclTerraform(struct?: SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference | SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_if_matches_regexp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failIfMatchesRegexp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fail_if_not_matches_regexp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failIfNotMatchesRegexp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failIfMatchesRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfMatchesRegexp = this._failIfMatchesRegexp;
    }
    if (this._failIfNotMatchesRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfNotMatchesRegexp = this._failIfNotMatchesRegexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failIfMatchesRegexp = undefined;
      this._failIfNotMatchesRegexp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failIfMatchesRegexp = value.failIfMatchesRegexp;
      this._failIfNotMatchesRegexp = value.failIfNotMatchesRegexp;
    }
  }

  // fail_if_matches_regexp - computed: false, optional: true, required: false
  private _failIfMatchesRegexp?: string[]; 
  public get failIfMatchesRegexp() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_if_matches_regexp'));
  }
  public set failIfMatchesRegexp(value: string[]) {
    this._failIfMatchesRegexp = value;
  }
  public resetFailIfMatchesRegexp() {
    this._failIfMatchesRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfMatchesRegexpInput() {
    return this._failIfMatchesRegexp;
  }

  // fail_if_not_matches_regexp - computed: false, optional: true, required: false
  private _failIfNotMatchesRegexp?: string[]; 
  public get failIfNotMatchesRegexp() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_if_not_matches_regexp'));
  }
  public set failIfNotMatchesRegexp(value: string[]) {
    this._failIfNotMatchesRegexp = value;
  }
  public resetFailIfNotMatchesRegexp() {
    this._failIfNotMatchesRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfNotMatchesRegexpInput() {
    return this._failIfNotMatchesRegexp;
  }
}
export interface SyntheticMonitoringCheckSettingsDns {
  /**
  * Options are `V4`, `V6`, `Any`. Specifies whether the corresponding check will be performed using IPv4 or IPv6. The `Any` value indicates that IPv6 should be used, falling back to IPv4 if that's not available. Defaults to `V4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#ip_version SyntheticMonitoringCheck#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Port to target. Defaults to `53`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#port SyntheticMonitoringCheck#port}
  */
  readonly port?: number;
  /**
  * `TCP` or `UDP`. Defaults to `UDP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#protocol SyntheticMonitoringCheck#protocol}
  */
  readonly protocol?: string;
  /**
  * One of `ANY`, `A`, `AAAA`, `CNAME`, `MX`, `NS`, `PTR`, `SOA`, `SRV`, `TXT`. Defaults to `A`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#record_type SyntheticMonitoringCheck#record_type}
  */
  readonly recordType?: string;
  /**
  * DNS server address to target. Defaults to `8.8.8.8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#server SyntheticMonitoringCheck#server}
  */
  readonly server?: string;
  /**
  * Source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#source_ip_address SyntheticMonitoringCheck#source_ip_address}
  */
  readonly sourceIpAddress?: string;
  /**
  * List of valid response codes. Options include `NOERROR`, `BADALG`, `BADMODE`, `BADKEY`, `BADCOOKIE`, `BADNAME`, `BADSIG`, `BADTIME`, `BADTRUNC`, `BADVERS`, `FORMERR`, `NOTIMP`, `NOTAUTH`, `NOTZONE`, `NXDOMAIN`, `NXRRSET`, `REFUSED`, `SERVFAIL`, `YXDOMAIN`, `YXRRSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#valid_r_codes SyntheticMonitoringCheck#valid_r_codes}
  */
  readonly validRCodes?: string[];
  /**
  * validate_additional_rrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#validate_additional_rrs SyntheticMonitoringCheck#validate_additional_rrs}
  */
  readonly validateAdditionalRrs?: SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs[] | cdktf.IResolvable;
  /**
  * validate_answer_rrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#validate_answer_rrs SyntheticMonitoringCheck#validate_answer_rrs}
  */
  readonly validateAnswerRrs?: SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs;
  /**
  * validate_authority_rrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#validate_authority_rrs SyntheticMonitoringCheck#validate_authority_rrs}
  */
  readonly validateAuthorityRrs?: SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs;
}

export function syntheticMonitoringCheckSettingsDnsToTerraform(struct?: SyntheticMonitoringCheckSettingsDnsOutputReference | SyntheticMonitoringCheckSettingsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    server: cdktf.stringToTerraform(struct!.server),
    source_ip_address: cdktf.stringToTerraform(struct!.sourceIpAddress),
    valid_r_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validRCodes),
    validate_additional_rrs: cdktf.listMapper(syntheticMonitoringCheckSettingsDnsValidateAdditionalRrsToTerraform, true)(struct!.validateAdditionalRrs),
    validate_answer_rrs: syntheticMonitoringCheckSettingsDnsValidateAnswerRrsToTerraform(struct!.validateAnswerRrs),
    validate_authority_rrs: syntheticMonitoringCheckSettingsDnsValidateAuthorityRrsToTerraform(struct!.validateAuthorityRrs),
  }
}


export function syntheticMonitoringCheckSettingsDnsToHclTerraform(struct?: SyntheticMonitoringCheckSettingsDnsOutputReference | SyntheticMonitoringCheckSettingsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_r_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validRCodes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    validate_additional_rrs: {
      value: cdktf.listMapperHcl(syntheticMonitoringCheckSettingsDnsValidateAdditionalRrsToHclTerraform, true)(struct!.validateAdditionalRrs),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList",
    },
    validate_answer_rrs: {
      value: syntheticMonitoringCheckSettingsDnsValidateAnswerRrsToHclTerraform(struct!.validateAnswerRrs),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsList",
    },
    validate_authority_rrs: {
      value: syntheticMonitoringCheckSettingsDnsValidateAuthorityRrsToHclTerraform(struct!.validateAuthorityRrs),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._sourceIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpAddress = this._sourceIpAddress;
    }
    if (this._validRCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.validRCodes = this._validRCodes;
    }
    if (this._validateAdditionalRrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateAdditionalRrs = this._validateAdditionalRrs?.internalValue;
    }
    if (this._validateAnswerRrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateAnswerRrs = this._validateAnswerRrs?.internalValue;
    }
    if (this._validateAuthorityRrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateAuthorityRrs = this._validateAuthorityRrs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipVersion = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._recordType = undefined;
      this._server = undefined;
      this._sourceIpAddress = undefined;
      this._validRCodes = undefined;
      this._validateAdditionalRrs.internalValue = undefined;
      this._validateAnswerRrs.internalValue = undefined;
      this._validateAuthorityRrs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipVersion = value.ipVersion;
      this._port = value.port;
      this._protocol = value.protocol;
      this._recordType = value.recordType;
      this._server = value.server;
      this._sourceIpAddress = value.sourceIpAddress;
      this._validRCodes = value.validRCodes;
      this._validateAdditionalRrs.internalValue = value.validateAdditionalRrs;
      this._validateAnswerRrs.internalValue = value.validateAnswerRrs;
      this._validateAuthorityRrs.internalValue = value.validateAuthorityRrs;
    }
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // source_ip_address - computed: false, optional: true, required: false
  private _sourceIpAddress?: string; 
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }
  public set sourceIpAddress(value: string) {
    this._sourceIpAddress = value;
  }
  public resetSourceIpAddress() {
    this._sourceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpAddressInput() {
    return this._sourceIpAddress;
  }

  // valid_r_codes - computed: false, optional: true, required: false
  private _validRCodes?: string[]; 
  public get validRCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_r_codes'));
  }
  public set validRCodes(value: string[]) {
    this._validRCodes = value;
  }
  public resetValidRCodes() {
    this._validRCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validRCodesInput() {
    return this._validRCodes;
  }

  // validate_additional_rrs - computed: false, optional: true, required: false
  private _validateAdditionalRrs = new SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrsList(this, "validate_additional_rrs", true);
  public get validateAdditionalRrs() {
    return this._validateAdditionalRrs;
  }
  public putValidateAdditionalRrs(value: SyntheticMonitoringCheckSettingsDnsValidateAdditionalRrs[] | cdktf.IResolvable) {
    this._validateAdditionalRrs.internalValue = value;
  }
  public resetValidateAdditionalRrs() {
    this._validateAdditionalRrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateAdditionalRrsInput() {
    return this._validateAdditionalRrs.internalValue;
  }

  // validate_answer_rrs - computed: false, optional: true, required: false
  private _validateAnswerRrs = new SyntheticMonitoringCheckSettingsDnsValidateAnswerRrsOutputReference(this, "validate_answer_rrs");
  public get validateAnswerRrs() {
    return this._validateAnswerRrs;
  }
  public putValidateAnswerRrs(value: SyntheticMonitoringCheckSettingsDnsValidateAnswerRrs) {
    this._validateAnswerRrs.internalValue = value;
  }
  public resetValidateAnswerRrs() {
    this._validateAnswerRrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateAnswerRrsInput() {
    return this._validateAnswerRrs.internalValue;
  }

  // validate_authority_rrs - computed: false, optional: true, required: false
  private _validateAuthorityRrs = new SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrsOutputReference(this, "validate_authority_rrs");
  public get validateAuthorityRrs() {
    return this._validateAuthorityRrs;
  }
  public putValidateAuthorityRrs(value: SyntheticMonitoringCheckSettingsDnsValidateAuthorityRrs) {
    this._validateAuthorityRrs.internalValue = value;
  }
  public resetValidateAuthorityRrs() {
    this._validateAuthorityRrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateAuthorityRrsInput() {
    return this._validateAuthorityRrs.internalValue;
  }
}
export interface SyntheticMonitoringCheckSettingsGrpcTlsConfig {
  /**
  * CA certificate in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#ca_cert SyntheticMonitoringCheck#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Client certificate in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#client_cert SyntheticMonitoringCheck#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Client key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#client_key SyntheticMonitoringCheck#client_key}
  */
  readonly clientKey?: string;
  /**
  * Disable target certificate validation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#insecure_skip_verify SyntheticMonitoringCheck#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#server_name SyntheticMonitoringCheck#server_name}
  */
  readonly serverName?: string;
}

export function syntheticMonitoringCheckSettingsGrpcTlsConfigToTerraform(struct?: SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference | SyntheticMonitoringCheckSettingsGrpcTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function syntheticMonitoringCheckSettingsGrpcTlsConfigToHclTerraform(struct?: SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference | SyntheticMonitoringCheckSettingsGrpcTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsGrpcTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsGrpcTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCert = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._insecureSkipVerify = undefined;
      this._serverName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCert = value.caCert;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._serverName = value.serverName;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface SyntheticMonitoringCheckSettingsGrpc {
  /**
  * Options are `V4`, `V6`, `Any`. Specifies whether the corresponding check will be performed using IPv4 or IPv6. The `Any` value indicates that IPv6 should be used, falling back to IPv4 if that's not available. Defaults to `V4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#ip_version SyntheticMonitoringCheck#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * gRPC service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#service SyntheticMonitoringCheck#service}
  */
  readonly service?: string;
  /**
  * Whether or not TLS is used when the connection is initiated. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#tls SyntheticMonitoringCheck#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#tls_config SyntheticMonitoringCheck#tls_config}
  */
  readonly tlsConfig?: SyntheticMonitoringCheckSettingsGrpcTlsConfig;
}

export function syntheticMonitoringCheckSettingsGrpcToTerraform(struct?: SyntheticMonitoringCheckSettingsGrpcOutputReference | SyntheticMonitoringCheckSettingsGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    service: cdktf.stringToTerraform(struct!.service),
    tls: cdktf.booleanToTerraform(struct!.tls),
    tls_config: syntheticMonitoringCheckSettingsGrpcTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function syntheticMonitoringCheckSettingsGrpcToHclTerraform(struct?: SyntheticMonitoringCheckSettingsGrpcOutputReference | SyntheticMonitoringCheckSettingsGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_config: {
      value: syntheticMonitoringCheckSettingsGrpcTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsGrpcTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipVersion = undefined;
      this._service = undefined;
      this._tls = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipVersion = value.ipVersion;
      this._service = value.service;
      this._tls = value.tls;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new SyntheticMonitoringCheckSettingsGrpcTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: SyntheticMonitoringCheckSettingsGrpcTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface SyntheticMonitoringCheckSettingsHttpBasicAuth {
  /**
  * Basic auth password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#password SyntheticMonitoringCheck#password}
  */
  readonly password: string;
  /**
  * Basic auth username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#username SyntheticMonitoringCheck#username}
  */
  readonly username: string;
}

export function syntheticMonitoringCheckSettingsHttpBasicAuthToTerraform(struct?: SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference | SyntheticMonitoringCheckSettingsHttpBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function syntheticMonitoringCheckSettingsHttpBasicAuthToHclTerraform(struct?: SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference | SyntheticMonitoringCheckSettingsHttpBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsHttpBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsHttpBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp {
  /**
  * Allow header to be missing from responses. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#allow_missing SyntheticMonitoringCheck#allow_missing}
  */
  readonly allowMissing?: boolean | cdktf.IResolvable;
  /**
  * Header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#header SyntheticMonitoringCheck#header}
  */
  readonly header: string;
  /**
  * Regex that header value should match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#regexp SyntheticMonitoringCheck#regexp}
  */
  readonly regexp: string;
}

export function syntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpToTerraform(struct?: SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_missing: cdktf.booleanToTerraform(struct!.allowMissing),
    header: cdktf.stringToTerraform(struct!.header),
    regexp: cdktf.stringToTerraform(struct!.regexp),
  }
}


export function syntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpToHclTerraform(struct?: SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_missing: {
      value: cdktf.booleanToHclTerraform(struct!.allowMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMissing = this._allowMissing;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowMissing = undefined;
      this._header = undefined;
      this._regexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowMissing = value.allowMissing;
      this._header = value.header;
      this._regexp = value.regexp;
    }
  }

  // allow_missing - computed: false, optional: true, required: false
  private _allowMissing?: boolean | cdktf.IResolvable; 
  public get allowMissing() {
    return this.getBooleanAttribute('allow_missing');
  }
  public set allowMissing(value: boolean | cdktf.IResolvable) {
    this._allowMissing = value;
  }
  public resetAllowMissing() {
    this._allowMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMissingInput() {
    return this._allowMissing;
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // regexp - computed: false, optional: false, required: true
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }
}

export class SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList extends cdktf.ComplexList {
  public internalValue? : SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp[] | cdktf.IResolvable

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
  public get(index: number): SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference {
    return new SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp {
  /**
  * Allow header to be missing from responses. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#allow_missing SyntheticMonitoringCheck#allow_missing}
  */
  readonly allowMissing?: boolean | cdktf.IResolvable;
  /**
  * Header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#header SyntheticMonitoringCheck#header}
  */
  readonly header: string;
  /**
  * Regex that header value should match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#regexp SyntheticMonitoringCheck#regexp}
  */
  readonly regexp: string;
}

export function syntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpToTerraform(struct?: SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_missing: cdktf.booleanToTerraform(struct!.allowMissing),
    header: cdktf.stringToTerraform(struct!.header),
    regexp: cdktf.stringToTerraform(struct!.regexp),
  }
}


export function syntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpToHclTerraform(struct?: SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_missing: {
      value: cdktf.booleanToHclTerraform(struct!.allowMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMissing = this._allowMissing;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowMissing = undefined;
      this._header = undefined;
      this._regexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowMissing = value.allowMissing;
      this._header = value.header;
      this._regexp = value.regexp;
    }
  }

  // allow_missing - computed: false, optional: true, required: false
  private _allowMissing?: boolean | cdktf.IResolvable; 
  public get allowMissing() {
    return this.getBooleanAttribute('allow_missing');
  }
  public set allowMissing(value: boolean | cdktf.IResolvable) {
    this._allowMissing = value;
  }
  public resetAllowMissing() {
    this._allowMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMissingInput() {
    return this._allowMissing;
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // regexp - computed: false, optional: false, required: true
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }
}

export class SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList extends cdktf.ComplexList {
  public internalValue? : SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp[] | cdktf.IResolvable

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
  public get(index: number): SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference {
    return new SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticMonitoringCheckSettingsHttpTlsConfig {
  /**
  * CA certificate in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#ca_cert SyntheticMonitoringCheck#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Client certificate in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#client_cert SyntheticMonitoringCheck#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Client key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#client_key SyntheticMonitoringCheck#client_key}
  */
  readonly clientKey?: string;
  /**
  * Disable target certificate validation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#insecure_skip_verify SyntheticMonitoringCheck#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#server_name SyntheticMonitoringCheck#server_name}
  */
  readonly serverName?: string;
}

export function syntheticMonitoringCheckSettingsHttpTlsConfigToTerraform(struct?: SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference | SyntheticMonitoringCheckSettingsHttpTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function syntheticMonitoringCheckSettingsHttpTlsConfigToHclTerraform(struct?: SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference | SyntheticMonitoringCheckSettingsHttpTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsHttpTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsHttpTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCert = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._insecureSkipVerify = undefined;
      this._serverName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCert = value.caCert;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._serverName = value.serverName;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface SyntheticMonitoringCheckSettingsHttp {
  /**
  * Token for use with bearer authorization header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#bearer_token SyntheticMonitoringCheck#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * The body of the HTTP request used in probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#body SyntheticMonitoringCheck#body}
  */
  readonly body?: string;
  /**
  * The name of the query parameter used to prevent the server from using a cached response. Each probe will assign a random value to this parameter each time a request is made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#cache_busting_query_param_name SyntheticMonitoringCheck#cache_busting_query_param_name}
  */
  readonly cacheBustingQueryParamName?: string;
  /**
  * Check fails if the response body is not compressed using this compression algorithm. One of `none`, `identity`, `br`, `gzip`, `deflate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#compression SyntheticMonitoringCheck#compression}
  */
  readonly compression?: string;
  /**
  * List of regexes. If any match the response body, the check will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_body_matches_regexp SyntheticMonitoringCheck#fail_if_body_matches_regexp}
  */
  readonly failIfBodyMatchesRegexp?: string[];
  /**
  * List of regexes. If any do not match the response body, the check will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_body_not_matches_regexp SyntheticMonitoringCheck#fail_if_body_not_matches_regexp}
  */
  readonly failIfBodyNotMatchesRegexp?: string[];
  /**
  * Fail if SSL is not present. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_not_ssl SyntheticMonitoringCheck#fail_if_not_ssl}
  */
  readonly failIfNotSsl?: boolean | cdktf.IResolvable;
  /**
  * Fail if SSL is present. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_ssl SyntheticMonitoringCheck#fail_if_ssl}
  */
  readonly failIfSsl?: boolean | cdktf.IResolvable;
  /**
  * The HTTP headers set for the probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#headers SyntheticMonitoringCheck#headers}
  */
  readonly headers?: string[];
  /**
  * Options are `V4`, `V6`, `Any`. Specifies whether the corresponding check will be performed using IPv4 or IPv6. The `Any` value indicates that IPv6 should be used, falling back to IPv4 if that's not available. Defaults to `V4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#ip_version SyntheticMonitoringCheck#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Request method. One of `GET`, `CONNECT`, `DELETE`, `HEAD`, `OPTIONS`, `POST`, `PUT`, `TRACE` Defaults to `GET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#method SyntheticMonitoringCheck#method}
  */
  readonly method?: string;
  /**
  * Do not follow redirects. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#no_follow_redirects SyntheticMonitoringCheck#no_follow_redirects}
  */
  readonly noFollowRedirects?: boolean | cdktf.IResolvable;
  /**
  * The HTTP headers sent to the proxy URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#proxy_connect_headers SyntheticMonitoringCheck#proxy_connect_headers}
  */
  readonly proxyConnectHeaders?: string[];
  /**
  * Proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#proxy_url SyntheticMonitoringCheck#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Enable secret manager so that `${secrets.<name>}` references in the bearer token, basic auth password, and TLS certificate/key fields are resolved from Grafana Secrets Manager at check time. In Terraform HCL, escape the leading `$` (`$${secrets.<name>}`) so the reference is passed through literally rather than interpolated by Terraform. All probes assigned to the check must support protocol secrets, otherwise the API rejects the check. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#secret_manager_enabled SyntheticMonitoringCheck#secret_manager_enabled}
  */
  readonly secretManagerEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of valid HTTP versions. Options include `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#valid_http_versions SyntheticMonitoringCheck#valid_http_versions}
  */
  readonly validHttpVersions?: string[];
  /**
  * Accepted status codes. If unset, defaults to 2xx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#valid_status_codes SyntheticMonitoringCheck#valid_status_codes}
  */
  readonly validStatusCodes?: number[];
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#basic_auth SyntheticMonitoringCheck#basic_auth}
  */
  readonly basicAuth?: SyntheticMonitoringCheckSettingsHttpBasicAuth;
  /**
  * fail_if_header_matches_regexp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_header_matches_regexp SyntheticMonitoringCheck#fail_if_header_matches_regexp}
  */
  readonly failIfHeaderMatchesRegexp?: SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp[] | cdktf.IResolvable;
  /**
  * fail_if_header_not_matches_regexp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#fail_if_header_not_matches_regexp SyntheticMonitoringCheck#fail_if_header_not_matches_regexp}
  */
  readonly failIfHeaderNotMatchesRegexp?: SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#tls_config SyntheticMonitoringCheck#tls_config}
  */
  readonly tlsConfig?: SyntheticMonitoringCheckSettingsHttpTlsConfig;
}

export function syntheticMonitoringCheckSettingsHttpToTerraform(struct?: SyntheticMonitoringCheckSettingsHttpOutputReference | SyntheticMonitoringCheckSettingsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    body: cdktf.stringToTerraform(struct!.body),
    cache_busting_query_param_name: cdktf.stringToTerraform(struct!.cacheBustingQueryParamName),
    compression: cdktf.stringToTerraform(struct!.compression),
    fail_if_body_matches_regexp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failIfBodyMatchesRegexp),
    fail_if_body_not_matches_regexp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failIfBodyNotMatchesRegexp),
    fail_if_not_ssl: cdktf.booleanToTerraform(struct!.failIfNotSsl),
    fail_if_ssl: cdktf.booleanToTerraform(struct!.failIfSsl),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    method: cdktf.stringToTerraform(struct!.method),
    no_follow_redirects: cdktf.booleanToTerraform(struct!.noFollowRedirects),
    proxy_connect_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyConnectHeaders),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    secret_manager_enabled: cdktf.booleanToTerraform(struct!.secretManagerEnabled),
    valid_http_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validHttpVersions),
    valid_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.validStatusCodes),
    basic_auth: syntheticMonitoringCheckSettingsHttpBasicAuthToTerraform(struct!.basicAuth),
    fail_if_header_matches_regexp: cdktf.listMapper(syntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpToTerraform, true)(struct!.failIfHeaderMatchesRegexp),
    fail_if_header_not_matches_regexp: cdktf.listMapper(syntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpToTerraform, true)(struct!.failIfHeaderNotMatchesRegexp),
    tls_config: syntheticMonitoringCheckSettingsHttpTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function syntheticMonitoringCheckSettingsHttpToHclTerraform(struct?: SyntheticMonitoringCheckSettingsHttpOutputReference | SyntheticMonitoringCheckSettingsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_busting_query_param_name: {
      value: cdktf.stringToHclTerraform(struct!.cacheBustingQueryParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_if_body_matches_regexp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failIfBodyMatchesRegexp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fail_if_body_not_matches_regexp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failIfBodyNotMatchesRegexp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fail_if_not_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.failIfNotSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_if_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.failIfSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.noFollowRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_connect_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyConnectHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_manager_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.secretManagerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_http_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validHttpVersions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    valid_status_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.validStatusCodes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    basic_auth: {
      value: syntheticMonitoringCheckSettingsHttpBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsHttpBasicAuthList",
    },
    fail_if_header_matches_regexp: {
      value: cdktf.listMapperHcl(syntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpToHclTerraform, true)(struct!.failIfHeaderMatchesRegexp),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList",
    },
    fail_if_header_not_matches_regexp: {
      value: cdktf.listMapperHcl(syntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpToHclTerraform, true)(struct!.failIfHeaderNotMatchesRegexp),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList",
    },
    tls_config: {
      value: syntheticMonitoringCheckSettingsHttpTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsHttpTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._cacheBustingQueryParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheBustingQueryParamName = this._cacheBustingQueryParamName;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._failIfBodyMatchesRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfBodyMatchesRegexp = this._failIfBodyMatchesRegexp;
    }
    if (this._failIfBodyNotMatchesRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfBodyNotMatchesRegexp = this._failIfBodyNotMatchesRegexp;
    }
    if (this._failIfNotSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfNotSsl = this._failIfNotSsl;
    }
    if (this._failIfSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfSsl = this._failIfSsl;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._noFollowRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFollowRedirects = this._noFollowRedirects;
    }
    if (this._proxyConnectHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConnectHeaders = this._proxyConnectHeaders;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._secretManagerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerEnabled = this._secretManagerEnabled;
    }
    if (this._validHttpVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.validHttpVersions = this._validHttpVersions;
    }
    if (this._validStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.validStatusCodes = this._validStatusCodes;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._failIfHeaderMatchesRegexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfHeaderMatchesRegexp = this._failIfHeaderMatchesRegexp?.internalValue;
    }
    if (this._failIfHeaderNotMatchesRegexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failIfHeaderNotMatchesRegexp = this._failIfHeaderNotMatchesRegexp?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bearerToken = undefined;
      this._body = undefined;
      this._cacheBustingQueryParamName = undefined;
      this._compression = undefined;
      this._failIfBodyMatchesRegexp = undefined;
      this._failIfBodyNotMatchesRegexp = undefined;
      this._failIfNotSsl = undefined;
      this._failIfSsl = undefined;
      this._headers = undefined;
      this._ipVersion = undefined;
      this._method = undefined;
      this._noFollowRedirects = undefined;
      this._proxyConnectHeaders = undefined;
      this._proxyUrl = undefined;
      this._secretManagerEnabled = undefined;
      this._validHttpVersions = undefined;
      this._validStatusCodes = undefined;
      this._basicAuth.internalValue = undefined;
      this._failIfHeaderMatchesRegexp.internalValue = undefined;
      this._failIfHeaderNotMatchesRegexp.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bearerToken = value.bearerToken;
      this._body = value.body;
      this._cacheBustingQueryParamName = value.cacheBustingQueryParamName;
      this._compression = value.compression;
      this._failIfBodyMatchesRegexp = value.failIfBodyMatchesRegexp;
      this._failIfBodyNotMatchesRegexp = value.failIfBodyNotMatchesRegexp;
      this._failIfNotSsl = value.failIfNotSsl;
      this._failIfSsl = value.failIfSsl;
      this._headers = value.headers;
      this._ipVersion = value.ipVersion;
      this._method = value.method;
      this._noFollowRedirects = value.noFollowRedirects;
      this._proxyConnectHeaders = value.proxyConnectHeaders;
      this._proxyUrl = value.proxyUrl;
      this._secretManagerEnabled = value.secretManagerEnabled;
      this._validHttpVersions = value.validHttpVersions;
      this._validStatusCodes = value.validStatusCodes;
      this._basicAuth.internalValue = value.basicAuth;
      this._failIfHeaderMatchesRegexp.internalValue = value.failIfHeaderMatchesRegexp;
      this._failIfHeaderNotMatchesRegexp.internalValue = value.failIfHeaderNotMatchesRegexp;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // cache_busting_query_param_name - computed: false, optional: true, required: false
  private _cacheBustingQueryParamName?: string; 
  public get cacheBustingQueryParamName() {
    return this.getStringAttribute('cache_busting_query_param_name');
  }
  public set cacheBustingQueryParamName(value: string) {
    this._cacheBustingQueryParamName = value;
  }
  public resetCacheBustingQueryParamName() {
    this._cacheBustingQueryParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBustingQueryParamNameInput() {
    return this._cacheBustingQueryParamName;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // fail_if_body_matches_regexp - computed: false, optional: true, required: false
  private _failIfBodyMatchesRegexp?: string[]; 
  public get failIfBodyMatchesRegexp() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_if_body_matches_regexp'));
  }
  public set failIfBodyMatchesRegexp(value: string[]) {
    this._failIfBodyMatchesRegexp = value;
  }
  public resetFailIfBodyMatchesRegexp() {
    this._failIfBodyMatchesRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfBodyMatchesRegexpInput() {
    return this._failIfBodyMatchesRegexp;
  }

  // fail_if_body_not_matches_regexp - computed: false, optional: true, required: false
  private _failIfBodyNotMatchesRegexp?: string[]; 
  public get failIfBodyNotMatchesRegexp() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_if_body_not_matches_regexp'));
  }
  public set failIfBodyNotMatchesRegexp(value: string[]) {
    this._failIfBodyNotMatchesRegexp = value;
  }
  public resetFailIfBodyNotMatchesRegexp() {
    this._failIfBodyNotMatchesRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfBodyNotMatchesRegexpInput() {
    return this._failIfBodyNotMatchesRegexp;
  }

  // fail_if_not_ssl - computed: false, optional: true, required: false
  private _failIfNotSsl?: boolean | cdktf.IResolvable; 
  public get failIfNotSsl() {
    return this.getBooleanAttribute('fail_if_not_ssl');
  }
  public set failIfNotSsl(value: boolean | cdktf.IResolvable) {
    this._failIfNotSsl = value;
  }
  public resetFailIfNotSsl() {
    this._failIfNotSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfNotSslInput() {
    return this._failIfNotSsl;
  }

  // fail_if_ssl - computed: false, optional: true, required: false
  private _failIfSsl?: boolean | cdktf.IResolvable; 
  public get failIfSsl() {
    return this.getBooleanAttribute('fail_if_ssl');
  }
  public set failIfSsl(value: boolean | cdktf.IResolvable) {
    this._failIfSsl = value;
  }
  public resetFailIfSsl() {
    this._failIfSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfSslInput() {
    return this._failIfSsl;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // no_follow_redirects - computed: false, optional: true, required: false
  private _noFollowRedirects?: boolean | cdktf.IResolvable; 
  public get noFollowRedirects() {
    return this.getBooleanAttribute('no_follow_redirects');
  }
  public set noFollowRedirects(value: boolean | cdktf.IResolvable) {
    this._noFollowRedirects = value;
  }
  public resetNoFollowRedirects() {
    this._noFollowRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFollowRedirectsInput() {
    return this._noFollowRedirects;
  }

  // proxy_connect_headers - computed: false, optional: true, required: false
  private _proxyConnectHeaders?: string[]; 
  public get proxyConnectHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('proxy_connect_headers'));
  }
  public set proxyConnectHeaders(value: string[]) {
    this._proxyConnectHeaders = value;
  }
  public resetProxyConnectHeaders() {
    this._proxyConnectHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConnectHeadersInput() {
    return this._proxyConnectHeaders;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // secret_manager_enabled - computed: false, optional: true, required: false
  private _secretManagerEnabled?: boolean | cdktf.IResolvable; 
  public get secretManagerEnabled() {
    return this.getBooleanAttribute('secret_manager_enabled');
  }
  public set secretManagerEnabled(value: boolean | cdktf.IResolvable) {
    this._secretManagerEnabled = value;
  }
  public resetSecretManagerEnabled() {
    this._secretManagerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerEnabledInput() {
    return this._secretManagerEnabled;
  }

  // valid_http_versions - computed: false, optional: true, required: false
  private _validHttpVersions?: string[]; 
  public get validHttpVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_http_versions'));
  }
  public set validHttpVersions(value: string[]) {
    this._validHttpVersions = value;
  }
  public resetValidHttpVersions() {
    this._validHttpVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validHttpVersionsInput() {
    return this._validHttpVersions;
  }

  // valid_status_codes - computed: false, optional: true, required: false
  private _validStatusCodes?: number[]; 
  public get validStatusCodes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('valid_status_codes')));
  }
  public set validStatusCodes(value: number[]) {
    this._validStatusCodes = value;
  }
  public resetValidStatusCodes() {
    this._validStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validStatusCodesInput() {
    return this._validStatusCodes;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new SyntheticMonitoringCheckSettingsHttpBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: SyntheticMonitoringCheckSettingsHttpBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // fail_if_header_matches_regexp - computed: false, optional: true, required: false
  private _failIfHeaderMatchesRegexp = new SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexpList(this, "fail_if_header_matches_regexp", true);
  public get failIfHeaderMatchesRegexp() {
    return this._failIfHeaderMatchesRegexp;
  }
  public putFailIfHeaderMatchesRegexp(value: SyntheticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp[] | cdktf.IResolvable) {
    this._failIfHeaderMatchesRegexp.internalValue = value;
  }
  public resetFailIfHeaderMatchesRegexp() {
    this._failIfHeaderMatchesRegexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfHeaderMatchesRegexpInput() {
    return this._failIfHeaderMatchesRegexp.internalValue;
  }

  // fail_if_header_not_matches_regexp - computed: false, optional: true, required: false
  private _failIfHeaderNotMatchesRegexp = new SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexpList(this, "fail_if_header_not_matches_regexp", true);
  public get failIfHeaderNotMatchesRegexp() {
    return this._failIfHeaderNotMatchesRegexp;
  }
  public putFailIfHeaderNotMatchesRegexp(value: SyntheticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp[] | cdktf.IResolvable) {
    this._failIfHeaderNotMatchesRegexp.internalValue = value;
  }
  public resetFailIfHeaderNotMatchesRegexp() {
    this._failIfHeaderNotMatchesRegexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfHeaderNotMatchesRegexpInput() {
    return this._failIfHeaderNotMatchesRegexp.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new SyntheticMonitoringCheckSettingsHttpTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: SyntheticMonitoringCheckSettingsHttpTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions {
  /**
  * The condition of the assertion: NOT_CONTAINS, EQUALS, STARTS_WITH, ENDS_WITH, TYPE_OF, CONTAINS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#condition SyntheticMonitoringCheck#condition}
  */
  readonly condition?: string;
  /**
  * The expression of the assertion. Should start with $.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#expression SyntheticMonitoringCheck#expression}
  */
  readonly expression?: string;
  /**
  * The subject of the assertion: RESPONSE_HEADERS, HTTP_STATUS_CODE, RESPONSE_BODY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#subject SyntheticMonitoringCheck#subject}
  */
  readonly subject?: string;
  /**
  * The type of assertion to make: TEXT, JSON_PATH_VALUE, JSON_PATH_ASSERTION, REGEX_ASSERTION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#type SyntheticMonitoringCheck#type}
  */
  readonly type: string;
  /**
  * The value of the assertion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#value SyntheticMonitoringCheck#value}
  */
  readonly value?: string;
}

export function syntheticMonitoringCheckSettingsMultihttpEntriesAssertionsToTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    expression: cdktf.stringToTerraform(struct!.expression),
    subject: cdktf.stringToTerraform(struct!.subject),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function syntheticMonitoringCheckSettingsMultihttpEntriesAssertionsToHclTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
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

export class SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._expression = undefined;
      this._subject = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._expression = value.expression;
      this._subject = value.subject;
      this._type = value.type;
      this._value = value.value;
    }
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

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList extends cdktf.ComplexList {
  public internalValue? : SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions[] | cdktf.IResolvable

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
  public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference {
    return new SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody {
  /**
  * The content encoding of the body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#content_encoding SyntheticMonitoringCheck#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * The content type of the body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#content_type SyntheticMonitoringCheck#content_type}
  */
  readonly contentType?: string;
  /**
  * The body payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#payload SyntheticMonitoringCheck#payload}
  */
  readonly payload?: string;
}

export function syntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyToTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_encoding: cdktf.stringToTerraform(struct!.contentEncoding),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    payload: cdktf.stringToTerraform(struct!.payload),
  }
}


export function syntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyToHclTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_encoding: {
      value: cdktf.stringToHclTerraform(struct!.contentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentEncoding = this._contentEncoding;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentEncoding = undefined;
      this._contentType = undefined;
      this._payload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentEncoding = value.contentEncoding;
      this._contentType = value.contentType;
      this._payload = value.payload;
    }
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }
}

export class SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList extends cdktf.ComplexList {
  public internalValue? : SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody[] | cdktf.IResolvable

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
  public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference {
    return new SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders {
  /**
  * Name of the header to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#name SyntheticMonitoringCheck#name}
  */
  readonly name: string;
  /**
  * Value of the header to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#value SyntheticMonitoringCheck#value}
  */
  readonly value: string;
}

export function syntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersToTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function syntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersToHclTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference {
    return new SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields {
  /**
  * Name of the query field to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#name SyntheticMonitoringCheck#name}
  */
  readonly name: string;
  /**
  * Value of the query field to send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#value SyntheticMonitoringCheck#value}
  */
  readonly value: string;
}

export function syntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsToTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function syntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsToHclTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList extends cdktf.ComplexList {
  public internalValue? : SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields[] | cdktf.IResolvable

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
  public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference {
    return new SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticMonitoringCheckSettingsMultihttpEntriesRequest {
  /**
  * The HTTP method to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#method SyntheticMonitoringCheck#method}
  */
  readonly method: string;
  /**
  * The URL for the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#url SyntheticMonitoringCheck#url}
  */
  readonly url: string;
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#body SyntheticMonitoringCheck#body}
  */
  readonly body?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#headers SyntheticMonitoringCheck#headers}
  */
  readonly headers?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders[] | cdktf.IResolvable;
  /**
  * query_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#query_fields SyntheticMonitoringCheck#query_fields}
  */
  readonly queryFields?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields[] | cdktf.IResolvable;
}

export function syntheticMonitoringCheckSettingsMultihttpEntriesRequestToTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference | SyntheticMonitoringCheckSettingsMultihttpEntriesRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    url: cdktf.stringToTerraform(struct!.url),
    body: cdktf.listMapper(syntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyToTerraform, true)(struct!.body),
    headers: cdktf.listMapper(syntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersToTerraform, true)(struct!.headers),
    query_fields: cdktf.listMapper(syntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsToTerraform, true)(struct!.queryFields),
  }
}


export function syntheticMonitoringCheckSettingsMultihttpEntriesRequestToHclTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference | SyntheticMonitoringCheckSettingsMultihttpEntriesRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktf.listMapperHcl(syntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyToHclTerraform, true)(struct!.body),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList",
    },
    headers: {
      value: cdktf.listMapperHcl(syntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList",
    },
    query_fields: {
      value: cdktf.listMapperHcl(syntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsToHclTerraform, true)(struct!.queryFields),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsMultihttpEntriesRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._queryFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFields = this._queryFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsMultihttpEntriesRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._url = undefined;
      this._body.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._queryFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._url = value.url;
      this._body.internalValue = value.body;
      this._headers.internalValue = value.headers;
      this._queryFields.internalValue = value.queryFields;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // body - computed: false, optional: true, required: false
  private _body = new SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBodyList(this, "body", true);
  public get body() {
    return this._body;
  }
  public putBody(value: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestBody[] | cdktf.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeadersList(this, "headers", true);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // query_fields - computed: false, optional: true, required: false
  private _queryFields = new SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFieldsList(this, "query_fields", true);
  public get queryFields() {
    return this._queryFields;
  }
  public putQueryFields(value: SyntheticMonitoringCheckSettingsMultihttpEntriesRequestQueryFields[] | cdktf.IResolvable) {
    this._queryFields.internalValue = value;
  }
  public resetQueryFields() {
    this._queryFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFieldsInput() {
    return this._queryFields.internalValue;
  }
}
export interface SyntheticMonitoringCheckSettingsMultihttpEntriesVariables {
  /**
  * The attribute to use when finding the variable value. Only used when type is CSS_SELECTOR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#attribute SyntheticMonitoringCheck#attribute}
  */
  readonly attribute?: string;
  /**
  * The expression to when finding the variable. Should start with $. Only use when type is JSON_PATH or REGEX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#expression SyntheticMonitoringCheck#expression}
  */
  readonly expression?: string;
  /**
  * The name of the variable to extract
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#name SyntheticMonitoringCheck#name}
  */
  readonly name?: string;
  /**
  * The method of finding the variable value to extract. JSON_PATH, REGEX, CSS_SELECTOR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#type SyntheticMonitoringCheck#type}
  */
  readonly type: string;
}

export function syntheticMonitoringCheckSettingsMultihttpEntriesVariablesToTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function syntheticMonitoringCheckSettingsMultihttpEntriesVariablesToHclTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntriesVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticMonitoringCheckSettingsMultihttpEntriesVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsMultihttpEntriesVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._expression = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._expression = value.expression;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
}

export class SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList extends cdktf.ComplexList {
  public internalValue? : SyntheticMonitoringCheckSettingsMultihttpEntriesVariables[] | cdktf.IResolvable

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
  public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference {
    return new SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticMonitoringCheckSettingsMultihttpEntries {
  /**
  * assertions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#assertions SyntheticMonitoringCheck#assertions}
  */
  readonly assertions?: SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions[] | cdktf.IResolvable;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#request SyntheticMonitoringCheck#request}
  */
  readonly request?: SyntheticMonitoringCheckSettingsMultihttpEntriesRequest;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#variables SyntheticMonitoringCheck#variables}
  */
  readonly variables?: SyntheticMonitoringCheckSettingsMultihttpEntriesVariables[] | cdktf.IResolvable;
}

export function syntheticMonitoringCheckSettingsMultihttpEntriesToTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assertions: cdktf.listMapper(syntheticMonitoringCheckSettingsMultihttpEntriesAssertionsToTerraform, true)(struct!.assertions),
    request: syntheticMonitoringCheckSettingsMultihttpEntriesRequestToTerraform(struct!.request),
    variables: cdktf.listMapper(syntheticMonitoringCheckSettingsMultihttpEntriesVariablesToTerraform, true)(struct!.variables),
  }
}


export function syntheticMonitoringCheckSettingsMultihttpEntriesToHclTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assertions: {
      value: cdktf.listMapperHcl(syntheticMonitoringCheckSettingsMultihttpEntriesAssertionsToHclTerraform, true)(struct!.assertions),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList",
    },
    request: {
      value: syntheticMonitoringCheckSettingsMultihttpEntriesRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsMultihttpEntriesRequestList",
    },
    variables: {
      value: cdktf.listMapperHcl(syntheticMonitoringCheckSettingsMultihttpEntriesVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticMonitoringCheckSettingsMultihttpEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assertions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertions = this._assertions?.internalValue;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsMultihttpEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assertions.internalValue = undefined;
      this._request.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assertions.internalValue = value.assertions;
      this._request.internalValue = value.request;
      this._variables.internalValue = value.variables;
    }
  }

  // assertions - computed: false, optional: true, required: false
  private _assertions = new SyntheticMonitoringCheckSettingsMultihttpEntriesAssertionsList(this, "assertions", false);
  public get assertions() {
    return this._assertions;
  }
  public putAssertions(value: SyntheticMonitoringCheckSettingsMultihttpEntriesAssertions[] | cdktf.IResolvable) {
    this._assertions.internalValue = value;
  }
  public resetAssertions() {
    this._assertions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionsInput() {
    return this._assertions.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new SyntheticMonitoringCheckSettingsMultihttpEntriesRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: SyntheticMonitoringCheckSettingsMultihttpEntriesRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new SyntheticMonitoringCheckSettingsMultihttpEntriesVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: SyntheticMonitoringCheckSettingsMultihttpEntriesVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class SyntheticMonitoringCheckSettingsMultihttpEntriesList extends cdktf.ComplexList {
  public internalValue? : SyntheticMonitoringCheckSettingsMultihttpEntries[] | cdktf.IResolvable

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
  public get(index: number): SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference {
    return new SyntheticMonitoringCheckSettingsMultihttpEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticMonitoringCheckSettingsMultihttp {
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#entries SyntheticMonitoringCheck#entries}
  */
  readonly entries?: SyntheticMonitoringCheckSettingsMultihttpEntries[] | cdktf.IResolvable;
}

export function syntheticMonitoringCheckSettingsMultihttpToTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpOutputReference | SyntheticMonitoringCheckSettingsMultihttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries: cdktf.listMapper(syntheticMonitoringCheckSettingsMultihttpEntriesToTerraform, true)(struct!.entries),
  }
}


export function syntheticMonitoringCheckSettingsMultihttpToHclTerraform(struct?: SyntheticMonitoringCheckSettingsMultihttpOutputReference | SyntheticMonitoringCheckSettingsMultihttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries: {
      value: cdktf.listMapperHcl(syntheticMonitoringCheckSettingsMultihttpEntriesToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticMonitoringCheckSettingsMultihttpEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsMultihttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsMultihttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsMultihttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entries.internalValue = value.entries;
    }
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new SyntheticMonitoringCheckSettingsMultihttpEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: SyntheticMonitoringCheckSettingsMultihttpEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}
export interface SyntheticMonitoringCheckSettingsPing {
  /**
  * Set the DF-bit in the IP-header. Only works with ipV4. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#dont_fragment SyntheticMonitoringCheck#dont_fragment}
  */
  readonly dontFragment?: boolean | cdktf.IResolvable;
  /**
  * Options are `V4`, `V6`, `Any`. Specifies whether the corresponding check will be performed using IPv4 or IPv6. The `Any` value indicates that IPv6 should be used, falling back to IPv4 if that's not available. Defaults to `V4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#ip_version SyntheticMonitoringCheck#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Payload size. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#payload_size SyntheticMonitoringCheck#payload_size}
  */
  readonly payloadSize?: number;
  /**
  * Source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#source_ip_address SyntheticMonitoringCheck#source_ip_address}
  */
  readonly sourceIpAddress?: string;
}

export function syntheticMonitoringCheckSettingsPingToTerraform(struct?: SyntheticMonitoringCheckSettingsPingOutputReference | SyntheticMonitoringCheckSettingsPing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dont_fragment: cdktf.booleanToTerraform(struct!.dontFragment),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    payload_size: cdktf.numberToTerraform(struct!.payloadSize),
    source_ip_address: cdktf.stringToTerraform(struct!.sourceIpAddress),
  }
}


export function syntheticMonitoringCheckSettingsPingToHclTerraform(struct?: SyntheticMonitoringCheckSettingsPingOutputReference | SyntheticMonitoringCheckSettingsPing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dont_fragment: {
      value: cdktf.booleanToHclTerraform(struct!.dontFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_size: {
      value: cdktf.numberToHclTerraform(struct!.payloadSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsPingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsPing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dontFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dontFragment = this._dontFragment;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._payloadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadSize = this._payloadSize;
    }
    if (this._sourceIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpAddress = this._sourceIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsPing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dontFragment = undefined;
      this._ipVersion = undefined;
      this._payloadSize = undefined;
      this._sourceIpAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dontFragment = value.dontFragment;
      this._ipVersion = value.ipVersion;
      this._payloadSize = value.payloadSize;
      this._sourceIpAddress = value.sourceIpAddress;
    }
  }

  // dont_fragment - computed: false, optional: true, required: false
  private _dontFragment?: boolean | cdktf.IResolvable; 
  public get dontFragment() {
    return this.getBooleanAttribute('dont_fragment');
  }
  public set dontFragment(value: boolean | cdktf.IResolvable) {
    this._dontFragment = value;
  }
  public resetDontFragment() {
    this._dontFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontFragmentInput() {
    return this._dontFragment;
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // payload_size - computed: false, optional: true, required: false
  private _payloadSize?: number; 
  public get payloadSize() {
    return this.getNumberAttribute('payload_size');
  }
  public set payloadSize(value: number) {
    this._payloadSize = value;
  }
  public resetPayloadSize() {
    this._payloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadSizeInput() {
    return this._payloadSize;
  }

  // source_ip_address - computed: false, optional: true, required: false
  private _sourceIpAddress?: string; 
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }
  public set sourceIpAddress(value: string) {
    this._sourceIpAddress = value;
  }
  public resetSourceIpAddress() {
    this._sourceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpAddressInput() {
    return this._sourceIpAddress;
  }
}
export interface SyntheticMonitoringCheckSettingsScripted {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#script SyntheticMonitoringCheck#script}
  */
  readonly script: string;
}

export function syntheticMonitoringCheckSettingsScriptedToTerraform(struct?: SyntheticMonitoringCheckSettingsScriptedOutputReference | SyntheticMonitoringCheckSettingsScripted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function syntheticMonitoringCheckSettingsScriptedToHclTerraform(struct?: SyntheticMonitoringCheckSettingsScriptedOutputReference | SyntheticMonitoringCheckSettingsScripted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsScriptedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsScripted | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsScripted | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._script = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._script = value.script;
    }
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}
export interface SyntheticMonitoringCheckSettingsTcpQueryResponse {
  /**
  * Response to expect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#expect SyntheticMonitoringCheck#expect}
  */
  readonly expect: string;
  /**
  * Data to send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#send SyntheticMonitoringCheck#send}
  */
  readonly send: string;
  /**
  * Upgrade TCP connection to TLS. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#start_tls SyntheticMonitoringCheck#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
}

export function syntheticMonitoringCheckSettingsTcpQueryResponseToTerraform(struct?: SyntheticMonitoringCheckSettingsTcpQueryResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expect: cdktf.stringToTerraform(struct!.expect),
    send: cdktf.stringToTerraform(struct!.send),
    start_tls: cdktf.booleanToTerraform(struct!.startTls),
  }
}


export function syntheticMonitoringCheckSettingsTcpQueryResponseToHclTerraform(struct?: SyntheticMonitoringCheckSettingsTcpQueryResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expect: {
      value: cdktf.stringToHclTerraform(struct!.expect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_tls: {
      value: cdktf.booleanToHclTerraform(struct!.startTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SyntheticMonitoringCheckSettingsTcpQueryResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expect !== undefined) {
      hasAnyValues = true;
      internalValueResult.expect = this._expect;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    if (this._startTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTls = this._startTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsTcpQueryResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expect = undefined;
      this._send = undefined;
      this._startTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expect = value.expect;
      this._send = value.send;
      this._startTls = value.startTls;
    }
  }

  // expect - computed: false, optional: false, required: true
  private _expect?: string; 
  public get expect() {
    return this.getStringAttribute('expect');
  }
  public set expect(value: string) {
    this._expect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect;
  }

  // send - computed: false, optional: false, required: true
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // start_tls - computed: false, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }
}

export class SyntheticMonitoringCheckSettingsTcpQueryResponseList extends cdktf.ComplexList {
  public internalValue? : SyntheticMonitoringCheckSettingsTcpQueryResponse[] | cdktf.IResolvable

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
  public get(index: number): SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference {
    return new SyntheticMonitoringCheckSettingsTcpQueryResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticMonitoringCheckSettingsTcpTlsConfig {
  /**
  * CA certificate in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#ca_cert SyntheticMonitoringCheck#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Client certificate in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#client_cert SyntheticMonitoringCheck#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Client key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#client_key SyntheticMonitoringCheck#client_key}
  */
  readonly clientKey?: string;
  /**
  * Disable target certificate validation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#insecure_skip_verify SyntheticMonitoringCheck#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#server_name SyntheticMonitoringCheck#server_name}
  */
  readonly serverName?: string;
}

export function syntheticMonitoringCheckSettingsTcpTlsConfigToTerraform(struct?: SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference | SyntheticMonitoringCheckSettingsTcpTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function syntheticMonitoringCheckSettingsTcpTlsConfigToHclTerraform(struct?: SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference | SyntheticMonitoringCheckSettingsTcpTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsTcpTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsTcpTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCert = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._insecureSkipVerify = undefined;
      this._serverName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCert = value.caCert;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._serverName = value.serverName;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface SyntheticMonitoringCheckSettingsTcp {
  /**
  * Options are `V4`, `V6`, `Any`. Specifies whether the corresponding check will be performed using IPv4 or IPv6. The `Any` value indicates that IPv6 should be used, falling back to IPv4 if that's not available. Defaults to `V4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#ip_version SyntheticMonitoringCheck#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#source_ip_address SyntheticMonitoringCheck#source_ip_address}
  */
  readonly sourceIpAddress?: string;
  /**
  * Whether or not TLS is used when the connection is initiated. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#tls SyntheticMonitoringCheck#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * query_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#query_response SyntheticMonitoringCheck#query_response}
  */
  readonly queryResponse?: SyntheticMonitoringCheckSettingsTcpQueryResponse[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#tls_config SyntheticMonitoringCheck#tls_config}
  */
  readonly tlsConfig?: SyntheticMonitoringCheckSettingsTcpTlsConfig;
}

export function syntheticMonitoringCheckSettingsTcpToTerraform(struct?: SyntheticMonitoringCheckSettingsTcpOutputReference | SyntheticMonitoringCheckSettingsTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    source_ip_address: cdktf.stringToTerraform(struct!.sourceIpAddress),
    tls: cdktf.booleanToTerraform(struct!.tls),
    query_response: cdktf.listMapper(syntheticMonitoringCheckSettingsTcpQueryResponseToTerraform, true)(struct!.queryResponse),
    tls_config: syntheticMonitoringCheckSettingsTcpTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function syntheticMonitoringCheckSettingsTcpToHclTerraform(struct?: SyntheticMonitoringCheckSettingsTcpOutputReference | SyntheticMonitoringCheckSettingsTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_response: {
      value: cdktf.listMapperHcl(syntheticMonitoringCheckSettingsTcpQueryResponseToHclTerraform, true)(struct!.queryResponse),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsTcpQueryResponseList",
    },
    tls_config: {
      value: syntheticMonitoringCheckSettingsTcpTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsTcpTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._sourceIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpAddress = this._sourceIpAddress;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._queryResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryResponse = this._queryResponse?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipVersion = undefined;
      this._sourceIpAddress = undefined;
      this._tls = undefined;
      this._queryResponse.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipVersion = value.ipVersion;
      this._sourceIpAddress = value.sourceIpAddress;
      this._tls = value.tls;
      this._queryResponse.internalValue = value.queryResponse;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // source_ip_address - computed: false, optional: true, required: false
  private _sourceIpAddress?: string; 
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }
  public set sourceIpAddress(value: string) {
    this._sourceIpAddress = value;
  }
  public resetSourceIpAddress() {
    this._sourceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpAddressInput() {
    return this._sourceIpAddress;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // query_response - computed: false, optional: true, required: false
  private _queryResponse = new SyntheticMonitoringCheckSettingsTcpQueryResponseList(this, "query_response", true);
  public get queryResponse() {
    return this._queryResponse;
  }
  public putQueryResponse(value: SyntheticMonitoringCheckSettingsTcpQueryResponse[] | cdktf.IResolvable) {
    this._queryResponse.internalValue = value;
  }
  public resetQueryResponse() {
    this._queryResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryResponseInput() {
    return this._queryResponse.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new SyntheticMonitoringCheckSettingsTcpTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: SyntheticMonitoringCheckSettingsTcpTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface SyntheticMonitoringCheckSettingsTraceroute {
  /**
  * Maximum TTL for the trace Defaults to `64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#max_hops SyntheticMonitoringCheck#max_hops}
  */
  readonly maxHops?: number;
  /**
  * Maximum number of hosts to travers that give no response Defaults to `15`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#max_unknown_hops SyntheticMonitoringCheck#max_unknown_hops}
  */
  readonly maxUnknownHops?: number;
  /**
  * Reverse lookup hostnames from IP addresses Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#ptr_lookup SyntheticMonitoringCheck#ptr_lookup}
  */
  readonly ptrLookup?: boolean | cdktf.IResolvable;
}

export function syntheticMonitoringCheckSettingsTracerouteToTerraform(struct?: SyntheticMonitoringCheckSettingsTracerouteOutputReference | SyntheticMonitoringCheckSettingsTraceroute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_hops: cdktf.numberToTerraform(struct!.maxHops),
    max_unknown_hops: cdktf.numberToTerraform(struct!.maxUnknownHops),
    ptr_lookup: cdktf.booleanToTerraform(struct!.ptrLookup),
  }
}


export function syntheticMonitoringCheckSettingsTracerouteToHclTerraform(struct?: SyntheticMonitoringCheckSettingsTracerouteOutputReference | SyntheticMonitoringCheckSettingsTraceroute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_hops: {
      value: cdktf.numberToHclTerraform(struct!.maxHops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unknown_hops: {
      value: cdktf.numberToHclTerraform(struct!.maxUnknownHops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ptr_lookup: {
      value: cdktf.booleanToHclTerraform(struct!.ptrLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsTracerouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettingsTraceroute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHops = this._maxHops;
    }
    if (this._maxUnknownHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnknownHops = this._maxUnknownHops;
    }
    if (this._ptrLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptrLookup = this._ptrLookup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettingsTraceroute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxHops = undefined;
      this._maxUnknownHops = undefined;
      this._ptrLookup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxHops = value.maxHops;
      this._maxUnknownHops = value.maxUnknownHops;
      this._ptrLookup = value.ptrLookup;
    }
  }

  // max_hops - computed: false, optional: true, required: false
  private _maxHops?: number; 
  public get maxHops() {
    return this.getNumberAttribute('max_hops');
  }
  public set maxHops(value: number) {
    this._maxHops = value;
  }
  public resetMaxHops() {
    this._maxHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopsInput() {
    return this._maxHops;
  }

  // max_unknown_hops - computed: false, optional: true, required: false
  private _maxUnknownHops?: number; 
  public get maxUnknownHops() {
    return this.getNumberAttribute('max_unknown_hops');
  }
  public set maxUnknownHops(value: number) {
    this._maxUnknownHops = value;
  }
  public resetMaxUnknownHops() {
    this._maxUnknownHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnknownHopsInput() {
    return this._maxUnknownHops;
  }

  // ptr_lookup - computed: false, optional: true, required: false
  private _ptrLookup?: boolean | cdktf.IResolvable; 
  public get ptrLookup() {
    return this.getBooleanAttribute('ptr_lookup');
  }
  public set ptrLookup(value: boolean | cdktf.IResolvable) {
    this._ptrLookup = value;
  }
  public resetPtrLookup() {
    this._ptrLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrLookupInput() {
    return this._ptrLookup;
  }
}
export interface SyntheticMonitoringCheckSettings {
  /**
  * browser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#browser SyntheticMonitoringCheck#browser}
  */
  readonly browser?: SyntheticMonitoringCheckSettingsBrowser;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#dns SyntheticMonitoringCheck#dns}
  */
  readonly dns?: SyntheticMonitoringCheckSettingsDns;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#grpc SyntheticMonitoringCheck#grpc}
  */
  readonly grpc?: SyntheticMonitoringCheckSettingsGrpc;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#http SyntheticMonitoringCheck#http}
  */
  readonly http?: SyntheticMonitoringCheckSettingsHttp;
  /**
  * multihttp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#multihttp SyntheticMonitoringCheck#multihttp}
  */
  readonly multihttp?: SyntheticMonitoringCheckSettingsMultihttp;
  /**
  * ping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#ping SyntheticMonitoringCheck#ping}
  */
  readonly ping?: SyntheticMonitoringCheckSettingsPing;
  /**
  * scripted block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#scripted SyntheticMonitoringCheck#scripted}
  */
  readonly scripted?: SyntheticMonitoringCheckSettingsScripted;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#tcp SyntheticMonitoringCheck#tcp}
  */
  readonly tcp?: SyntheticMonitoringCheckSettingsTcp;
  /**
  * traceroute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#traceroute SyntheticMonitoringCheck#traceroute}
  */
  readonly traceroute?: SyntheticMonitoringCheckSettingsTraceroute;
}

export function syntheticMonitoringCheckSettingsToTerraform(struct?: SyntheticMonitoringCheckSettingsOutputReference | SyntheticMonitoringCheckSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browser: syntheticMonitoringCheckSettingsBrowserToTerraform(struct!.browser),
    dns: syntheticMonitoringCheckSettingsDnsToTerraform(struct!.dns),
    grpc: syntheticMonitoringCheckSettingsGrpcToTerraform(struct!.grpc),
    http: syntheticMonitoringCheckSettingsHttpToTerraform(struct!.http),
    multihttp: syntheticMonitoringCheckSettingsMultihttpToTerraform(struct!.multihttp),
    ping: syntheticMonitoringCheckSettingsPingToTerraform(struct!.ping),
    scripted: syntheticMonitoringCheckSettingsScriptedToTerraform(struct!.scripted),
    tcp: syntheticMonitoringCheckSettingsTcpToTerraform(struct!.tcp),
    traceroute: syntheticMonitoringCheckSettingsTracerouteToTerraform(struct!.traceroute),
  }
}


export function syntheticMonitoringCheckSettingsToHclTerraform(struct?: SyntheticMonitoringCheckSettingsOutputReference | SyntheticMonitoringCheckSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browser: {
      value: syntheticMonitoringCheckSettingsBrowserToHclTerraform(struct!.browser),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsBrowserList",
    },
    dns: {
      value: syntheticMonitoringCheckSettingsDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsDnsList",
    },
    grpc: {
      value: syntheticMonitoringCheckSettingsGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsGrpcList",
    },
    http: {
      value: syntheticMonitoringCheckSettingsHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsHttpList",
    },
    multihttp: {
      value: syntheticMonitoringCheckSettingsMultihttpToHclTerraform(struct!.multihttp),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsMultihttpList",
    },
    ping: {
      value: syntheticMonitoringCheckSettingsPingToHclTerraform(struct!.ping),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsPingList",
    },
    scripted: {
      value: syntheticMonitoringCheckSettingsScriptedToHclTerraform(struct!.scripted),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsScriptedList",
    },
    tcp: {
      value: syntheticMonitoringCheckSettingsTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsTcpList",
    },
    traceroute: {
      value: syntheticMonitoringCheckSettingsTracerouteToHclTerraform(struct!.traceroute),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticMonitoringCheckSettingsTracerouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticMonitoringCheckSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticMonitoringCheckSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browser = this._browser?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._multihttp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multihttp = this._multihttp?.internalValue;
    }
    if (this._ping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ping = this._ping?.internalValue;
    }
    if (this._scripted?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scripted = this._scripted?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._traceroute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceroute = this._traceroute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticMonitoringCheckSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._browser.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
      this._multihttp.internalValue = undefined;
      this._ping.internalValue = undefined;
      this._scripted.internalValue = undefined;
      this._tcp.internalValue = undefined;
      this._traceroute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._browser.internalValue = value.browser;
      this._dns.internalValue = value.dns;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
      this._multihttp.internalValue = value.multihttp;
      this._ping.internalValue = value.ping;
      this._scripted.internalValue = value.scripted;
      this._tcp.internalValue = value.tcp;
      this._traceroute.internalValue = value.traceroute;
    }
  }

  // browser - computed: false, optional: true, required: false
  private _browser = new SyntheticMonitoringCheckSettingsBrowserOutputReference(this, "browser");
  public get browser() {
    return this._browser;
  }
  public putBrowser(value: SyntheticMonitoringCheckSettingsBrowser) {
    this._browser.internalValue = value;
  }
  public resetBrowser() {
    this._browser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserInput() {
    return this._browser.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new SyntheticMonitoringCheckSettingsDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: SyntheticMonitoringCheckSettingsDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new SyntheticMonitoringCheckSettingsGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: SyntheticMonitoringCheckSettingsGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new SyntheticMonitoringCheckSettingsHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: SyntheticMonitoringCheckSettingsHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // multihttp - computed: false, optional: true, required: false
  private _multihttp = new SyntheticMonitoringCheckSettingsMultihttpOutputReference(this, "multihttp");
  public get multihttp() {
    return this._multihttp;
  }
  public putMultihttp(value: SyntheticMonitoringCheckSettingsMultihttp) {
    this._multihttp.internalValue = value;
  }
  public resetMultihttp() {
    this._multihttp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihttpInput() {
    return this._multihttp.internalValue;
  }

  // ping - computed: false, optional: true, required: false
  private _ping = new SyntheticMonitoringCheckSettingsPingOutputReference(this, "ping");
  public get ping() {
    return this._ping;
  }
  public putPing(value: SyntheticMonitoringCheckSettingsPing) {
    this._ping.internalValue = value;
  }
  public resetPing() {
    this._ping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingInput() {
    return this._ping.internalValue;
  }

  // scripted - computed: false, optional: true, required: false
  private _scripted = new SyntheticMonitoringCheckSettingsScriptedOutputReference(this, "scripted");
  public get scripted() {
    return this._scripted;
  }
  public putScripted(value: SyntheticMonitoringCheckSettingsScripted) {
    this._scripted.internalValue = value;
  }
  public resetScripted() {
    this._scripted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptedInput() {
    return this._scripted.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new SyntheticMonitoringCheckSettingsTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: SyntheticMonitoringCheckSettingsTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // traceroute - computed: false, optional: true, required: false
  private _traceroute = new SyntheticMonitoringCheckSettingsTracerouteOutputReference(this, "traceroute");
  public get traceroute() {
    return this._traceroute;
  }
  public putTraceroute(value: SyntheticMonitoringCheckSettingsTraceroute) {
    this._traceroute.internalValue = value;
  }
  public resetTraceroute() {
    this._traceroute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracerouteInput() {
    return this._traceroute.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check grafana_synthetic_monitoring_check}
*/
export class SyntheticMonitoringCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_synthetic_monitoring_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticMonitoringCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticMonitoringCheck to import
  * @param importFromId The id of the existing SyntheticMonitoringCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticMonitoringCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_synthetic_monitoring_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/synthetic_monitoring_check grafana_synthetic_monitoring_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticMonitoringCheckConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticMonitoringCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_synthetic_monitoring_check',
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
    this._alertSensitivity = config.alertSensitivity;
    this._basicMetricsOnly = config.basicMetricsOnly;
    this._enabled = config.enabled;
    this._folderUid = config.folderUid;
    this._frequency = config.frequency;
    this._job = config.job;
    this._labels = config.labels;
    this._probes = config.probes;
    this._target = config.target;
    this._timeout = config.timeout;
    this._channels.internalValue = config.channels;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_sensitivity - computed: false, optional: true, required: false
  private _alertSensitivity?: string; 
  public get alertSensitivity() {
    return this.getStringAttribute('alert_sensitivity');
  }
  public set alertSensitivity(value: string) {
    this._alertSensitivity = value;
  }
  public resetAlertSensitivity() {
    this._alertSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSensitivityInput() {
    return this._alertSensitivity;
  }

  // basic_metrics_only - computed: false, optional: true, required: false
  private _basicMetricsOnly?: boolean | cdktf.IResolvable; 
  public get basicMetricsOnly() {
    return this.getBooleanAttribute('basic_metrics_only');
  }
  public set basicMetricsOnly(value: boolean | cdktf.IResolvable) {
    this._basicMetricsOnly = value;
  }
  public resetBasicMetricsOnly() {
    this._basicMetricsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicMetricsOnlyInput() {
    return this._basicMetricsOnly;
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

  // folder_uid - computed: false, optional: true, required: false
  private _folderUid?: string; 
  public get folderUid() {
    return this.getStringAttribute('folder_uid');
  }
  public set folderUid(value: string) {
    this._folderUid = value;
  }
  public resetFolderUid() {
    this._folderUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderUidInput() {
    return this._folderUid;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job - computed: false, optional: false, required: true
  private _job?: string; 
  public get job() {
    return this.getStringAttribute('job');
  }
  public set job(value: string) {
    this._job = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job;
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

  // probes - computed: false, optional: false, required: true
  private _probes?: number[]; 
  public get probes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('probes')));
  }
  public set probes(value: number[]) {
    this._probes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // channels - computed: false, optional: true, required: false
  private _channels = new SyntheticMonitoringCheckChannelsOutputReference(this, "channels");
  public get channels() {
    return this._channels;
  }
  public putChannels(value: SyntheticMonitoringCheckChannels) {
    this._channels.internalValue = value;
  }
  public resetChannels() {
    this._channels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels.internalValue;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new SyntheticMonitoringCheckSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: SyntheticMonitoringCheckSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_sensitivity: cdktf.stringToTerraform(this._alertSensitivity),
      basic_metrics_only: cdktf.booleanToTerraform(this._basicMetricsOnly),
      enabled: cdktf.booleanToTerraform(this._enabled),
      folder_uid: cdktf.stringToTerraform(this._folderUid),
      frequency: cdktf.numberToTerraform(this._frequency),
      job: cdktf.stringToTerraform(this._job),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      probes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._probes),
      target: cdktf.stringToTerraform(this._target),
      timeout: cdktf.numberToTerraform(this._timeout),
      channels: syntheticMonitoringCheckChannelsToTerraform(this._channels.internalValue),
      settings: syntheticMonitoringCheckSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_sensitivity: {
        value: cdktf.stringToHclTerraform(this._alertSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_metrics_only: {
        value: cdktf.booleanToHclTerraform(this._basicMetricsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      job: {
        value: cdktf.stringToHclTerraform(this._job),
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
      probes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._probes),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      channels: {
        value: syntheticMonitoringCheckChannelsToHclTerraform(this._channels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticMonitoringCheckChannelsList",
      },
      settings: {
        value: syntheticMonitoringCheckSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SyntheticMonitoringCheckSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
