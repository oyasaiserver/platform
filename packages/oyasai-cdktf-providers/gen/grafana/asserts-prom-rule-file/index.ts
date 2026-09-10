// https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssertsPromRuleFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the rules file is active. Inactive rules are not evaluated. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#active AssertsPromRuleFile#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#id AssertsPromRuleFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Prometheus rules file. This will be stored with a .custom extension. Must follow naming validation rules (alphanumeric, hyphens, underscores).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#name AssertsPromRuleFile#name}
  */
  readonly name: string;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#group AssertsPromRuleFile#group}
  */
  readonly group: AssertsPromRuleFileGroup[] | cdktf.IResolvable;
}
export interface AssertsPromRuleFileGroupRule {
  /**
  * Whether this specific rule is active. This field is read-only and controlled by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#active AssertsPromRuleFile#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The name of the alert for alerting rules. Either 'record' or 'alert' must be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#alert AssertsPromRuleFile#alert}
  */
  readonly alert?: string;
  /**
  * Annotations to add to alerts (e.g., summary, description).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#annotations AssertsPromRuleFile#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * List of group names where this rule should be disabled. Useful for conditional rule enablement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#disable_in_groups AssertsPromRuleFile#disable_in_groups}
  */
  readonly disableInGroups?: string[];
  /**
  * How long the condition must be true before firing the alert (e.g., '5m'). Only applicable for alerting rules. Maps to 'for' in Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#duration AssertsPromRuleFile#duration}
  */
  readonly duration?: string;
  /**
  * The PromQL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#expr AssertsPromRuleFile#expr}
  */
  readonly expr: string;
  /**
  * Labels to attach to the resulting time series or alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#labels AssertsPromRuleFile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the time series to output for recording rules. Either 'record' or 'alert' must be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#record AssertsPromRuleFile#record}
  */
  readonly record?: string;
}

export function assertsPromRuleFileGroupRuleToTerraform(struct?: AssertsPromRuleFileGroupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    alert: cdktf.stringToTerraform(struct!.alert),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    disable_in_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disableInGroups),
    duration: cdktf.stringToTerraform(struct!.duration),
    expr: cdktf.stringToTerraform(struct!.expr),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    record: cdktf.stringToTerraform(struct!.record),
  }
}


export function assertsPromRuleFileGroupRuleToHclTerraform(struct?: AssertsPromRuleFileGroupRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alert: {
      value: cdktf.stringToHclTerraform(struct!.alert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disable_in_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disableInGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
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
    record: {
      value: cdktf.stringToHclTerraform(struct!.record),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsPromRuleFileGroupRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssertsPromRuleFileGroupRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._disableInGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInGroups = this._disableInGroups;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._record !== undefined) {
      hasAnyValues = true;
      internalValueResult.record = this._record;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsPromRuleFileGroupRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._alert = undefined;
      this._annotations = undefined;
      this._disableInGroups = undefined;
      this._duration = undefined;
      this._expr = undefined;
      this._labels = undefined;
      this._record = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._alert = value.alert;
      this._annotations = value.annotations;
      this._disableInGroups = value.disableInGroups;
      this._duration = value.duration;
      this._expr = value.expr;
      this._labels = value.labels;
      this._record = value.record;
    }
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // alert - computed: false, optional: true, required: false
  private _alert?: string; 
  public get alert() {
    return this.getStringAttribute('alert');
  }
  public set alert(value: string) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
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

  // disable_in_groups - computed: false, optional: true, required: false
  private _disableInGroups?: string[]; 
  public get disableInGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_in_groups'));
  }
  public set disableInGroups(value: string[]) {
    this._disableInGroups = value;
  }
  public resetDisableInGroups() {
    this._disableInGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInGroupsInput() {
    return this._disableInGroups;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // expr - computed: false, optional: false, required: true
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
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

  // record - computed: false, optional: true, required: false
  private _record?: string; 
  public get record() {
    return this.getStringAttribute('record');
  }
  public set record(value: string) {
    this._record = value;
  }
  public resetRecord() {
    this._record = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record;
  }
}

export class AssertsPromRuleFileGroupRuleList extends cdktf.ComplexList {
  public internalValue? : AssertsPromRuleFileGroupRule[] | cdktf.IResolvable

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
  public get(index: number): AssertsPromRuleFileGroupRuleOutputReference {
    return new AssertsPromRuleFileGroupRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssertsPromRuleFileGroup {
  /**
  * Evaluation interval for this group (e.g., '30s', '1m'). If not specified, uses the global evaluation interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#interval AssertsPromRuleFile#interval}
  */
  readonly interval?: string;
  /**
  * The name of the rule group (e.g., 'latency_monitoring').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#name AssertsPromRuleFile#name}
  */
  readonly name: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#rule AssertsPromRuleFile#rule}
  */
  readonly rule: AssertsPromRuleFileGroupRule[] | cdktf.IResolvable;
}

export function assertsPromRuleFileGroupToTerraform(struct?: AssertsPromRuleFileGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    name: cdktf.stringToTerraform(struct!.name),
    rule: cdktf.listMapper(assertsPromRuleFileGroupRuleToTerraform, true)(struct!.rule),
  }
}


export function assertsPromRuleFileGroupToHclTerraform(struct?: AssertsPromRuleFileGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
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
    rule: {
      value: cdktf.listMapperHcl(assertsPromRuleFileGroupRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "AssertsPromRuleFileGroupRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsPromRuleFileGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssertsPromRuleFileGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsPromRuleFileGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._name = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._name = value.name;
      this._rule.internalValue = value.rule;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // rule - computed: false, optional: false, required: true
  private _rule = new AssertsPromRuleFileGroupRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: AssertsPromRuleFileGroupRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class AssertsPromRuleFileGroupList extends cdktf.ComplexList {
  public internalValue? : AssertsPromRuleFileGroup[] | cdktf.IResolvable

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
  public get(index: number): AssertsPromRuleFileGroupOutputReference {
    return new AssertsPromRuleFileGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file grafana_asserts_prom_rule_file}
*/
export class AssertsPromRuleFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_asserts_prom_rule_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssertsPromRuleFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssertsPromRuleFile to import
  * @param importFromId The id of the existing AssertsPromRuleFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssertsPromRuleFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_asserts_prom_rule_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.45.2/docs/resources/asserts_prom_rule_file grafana_asserts_prom_rule_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssertsPromRuleFileConfig
  */
  public constructor(scope: Construct, id: string, config: AssertsPromRuleFileConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_asserts_prom_rule_file',
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
    this._active = config.active;
    this._id = config.id;
    this._name = config.name;
    this._group.internalValue = config.group;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // group - computed: false, optional: false, required: true
  private _group = new AssertsPromRuleFileGroupList(this, "group", false);
  public get group() {
    return this._group;
  }
  public putGroup(value: AssertsPromRuleFileGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      group: cdktf.listMapper(assertsPromRuleFileGroupToTerraform, true)(this._group.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      group: {
        value: cdktf.listMapperHcl(assertsPromRuleFileGroupToHclTerraform, true)(this._group.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssertsPromRuleFileGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
