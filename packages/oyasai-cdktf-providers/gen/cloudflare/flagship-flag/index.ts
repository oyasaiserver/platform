// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlagshipFlagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudflare account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#account_id FlagshipFlag#account_id}
  */
  readonly accountId: string;
  /**
  * App identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#app_id FlagshipFlag#app_id}
  */
  readonly appId: string;
  /**
  * Variation served when no rule matches or the flag is disabled. Must be a key in `variations`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#default_variation FlagshipFlag#default_variation}
  */
  readonly defaultVariation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#description FlagshipFlag#description}
  */
  readonly description?: string;
  /**
  * When false, the flag bypasses all rules and always serves `default_variation`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#enabled FlagshipFlag#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Flag key (slug).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#flag_key FlagshipFlag#flag_key}
  */
  readonly flagKey?: string;
  /**
  * Unique identifier for the flag within an app. Used in all evaluation and SDK calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#key FlagshipFlag#key}
  */
  readonly key: string;
  /**
  * Targeting rules evaluated in ascending `priority`; the first matching rule wins. An empty array means the flag always serves `default_variation`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#rules FlagshipFlag#rules}
  */
  readonly rules: FlagshipFlagRules[] | cdktf.IResolvable;
  /**
  * Value type of the flag's variations. Inferred from the variation values on write, so it may be omitted in requests.
  * Available values: "boolean", "string", "number", "json".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#type FlagshipFlag#type}
  */
  readonly type?: string;
  /**
  * Map of variation name to value. All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#variations FlagshipFlag#variations}
  */
  readonly variations: { [key: string]: string };
}
export interface FlagshipFlagRulesConditionsClauses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}
  */
  readonly clauses?: FlagshipFlagRulesConditionsClauses[] | cdktf.IResolvable;
  /**
  * Available values: "AND", "OR".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#logical_operator FlagshipFlag#logical_operator}
  */
  readonly logicalOperator?: string;
  /**
  * Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#operator FlagshipFlag#operator}
  */
  readonly operator?: string;
  /**
  * Value to compare against the context attribute. Must be an array for `in` and `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering operators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#value FlagshipFlag#value}
  */
  readonly value?: string;
}

export function flagshipFlagRulesConditionsClausesToTerraform(struct?: FlagshipFlagRulesConditionsClauses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    clauses: cdktf.listMapper(flagshipFlagRulesConditionsClausesToTerraform, false)(struct!.clauses),
    logical_operator: cdktf.stringToTerraform(struct!.logicalOperator),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function flagshipFlagRulesConditionsClausesToHclTerraform(struct?: FlagshipFlagRulesConditionsClauses | cdktf.IResolvable): any {
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
    clauses: {
      value: cdktf.listMapperHcl(flagshipFlagRulesConditionsClausesToHclTerraform, false)(struct!.clauses),
      isBlock: true,
      type: "list",
      storageClassType: "FlagshipFlagRulesConditionsClausesList",
    },
    logical_operator: {
      value: cdktf.stringToHclTerraform(struct!.logicalOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class FlagshipFlagRulesConditionsClausesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlagshipFlagRulesConditionsClauses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._clauses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clauses = this._clauses?.internalValue;
    }
    if (this._logicalOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalOperator = this._logicalOperator;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlagshipFlagRulesConditionsClauses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._clauses.internalValue = undefined;
      this._logicalOperator = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._clauses.internalValue = value.clauses;
      this._logicalOperator = value.logicalOperator;
      this._operator = value.operator;
      this._value = value.value;
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

  // clauses - computed: false, optional: true, required: false
  private _clauses = new FlagshipFlagRulesConditionsClausesList(this, "clauses", false);
  public get clauses() {
    return this._clauses;
  }
  public putClauses(value: FlagshipFlagRulesConditionsClauses[] | cdktf.IResolvable) {
    this._clauses.internalValue = value;
  }
  public resetClauses() {
    this._clauses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clausesInput() {
    return this._clauses.internalValue;
  }

  // logical_operator - computed: false, optional: true, required: false
  private _logicalOperator?: string; 
  public get logicalOperator() {
    return this.getStringAttribute('logical_operator');
  }
  public set logicalOperator(value: string) {
    this._logicalOperator = value;
  }
  public resetLogicalOperator() {
    this._logicalOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalOperatorInput() {
    return this._logicalOperator;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class FlagshipFlagRulesConditionsClausesList extends cdktf.ComplexList {
  public internalValue? : FlagshipFlagRulesConditionsClauses[] | cdktf.IResolvable

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
  public get(index: number): FlagshipFlagRulesConditionsClausesOutputReference {
    return new FlagshipFlagRulesConditionsClausesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlagshipFlagRulesConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}
  */
  readonly clauses?: FlagshipFlagRulesConditionsClauses[] | cdktf.IResolvable;
  /**
  * Available values: "AND", "OR".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#logical_operator FlagshipFlag#logical_operator}
  */
  readonly logicalOperator?: string;
  /**
  * Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#operator FlagshipFlag#operator}
  */
  readonly operator?: string;
  /**
  * Value to compare against the context attribute. Must be an array for `in` and `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering operators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#value FlagshipFlag#value}
  */
  readonly value?: string;
}

export function flagshipFlagRulesConditionsToTerraform(struct?: FlagshipFlagRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    clauses: cdktf.listMapper(flagshipFlagRulesConditionsClausesToTerraform, false)(struct!.clauses),
    logical_operator: cdktf.stringToTerraform(struct!.logicalOperator),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function flagshipFlagRulesConditionsToHclTerraform(struct?: FlagshipFlagRulesConditions | cdktf.IResolvable): any {
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
    clauses: {
      value: cdktf.listMapperHcl(flagshipFlagRulesConditionsClausesToHclTerraform, false)(struct!.clauses),
      isBlock: true,
      type: "list",
      storageClassType: "FlagshipFlagRulesConditionsClausesList",
    },
    logical_operator: {
      value: cdktf.stringToHclTerraform(struct!.logicalOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class FlagshipFlagRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlagshipFlagRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._clauses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clauses = this._clauses?.internalValue;
    }
    if (this._logicalOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalOperator = this._logicalOperator;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlagshipFlagRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._clauses.internalValue = undefined;
      this._logicalOperator = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._clauses.internalValue = value.clauses;
      this._logicalOperator = value.logicalOperator;
      this._operator = value.operator;
      this._value = value.value;
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

  // clauses - computed: false, optional: true, required: false
  private _clauses = new FlagshipFlagRulesConditionsClausesList(this, "clauses", false);
  public get clauses() {
    return this._clauses;
  }
  public putClauses(value: FlagshipFlagRulesConditionsClauses[] | cdktf.IResolvable) {
    this._clauses.internalValue = value;
  }
  public resetClauses() {
    this._clauses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clausesInput() {
    return this._clauses.internalValue;
  }

  // logical_operator - computed: false, optional: true, required: false
  private _logicalOperator?: string; 
  public get logicalOperator() {
    return this.getStringAttribute('logical_operator');
  }
  public set logicalOperator(value: string) {
    this._logicalOperator = value;
  }
  public resetLogicalOperator() {
    this._logicalOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalOperatorInput() {
    return this._logicalOperator;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class FlagshipFlagRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : FlagshipFlagRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): FlagshipFlagRulesConditionsOutputReference {
    return new FlagshipFlagRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlagshipFlagRulesRollout {
  /**
  * Context attribute used for sticky bucketing. Defaults to `targetingKey`. If absent at evaluation time, bucketing is random per request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}
  */
  readonly attribute?: string;
  /**
  * Percentage of matching traffic (0–100) served this variation. For multi-way splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#percentage FlagshipFlag#percentage}
  */
  readonly percentage: number;
}

export function flagshipFlagRulesRolloutToTerraform(struct?: FlagshipFlagRulesRollout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function flagshipFlagRulesRolloutToHclTerraform(struct?: FlagshipFlagRulesRollout | cdktf.IResolvable): any {
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
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlagshipFlagRulesRolloutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FlagshipFlagRulesRollout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlagshipFlagRulesRollout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._percentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._percentage = value.percentage;
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

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface FlagshipFlagRules {
  /**
  * Conditions the context must satisfy for this rule to match. An empty array matches all contexts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#conditions FlagshipFlag#conditions}
  */
  readonly conditions: FlagshipFlagRulesConditions[] | cdktf.IResolvable;
  /**
  * Evaluation order; lower numbers are evaluated first. Must be unique across the flag's rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#priority FlagshipFlag#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#rollout FlagshipFlag#rollout}
  */
  readonly rollout?: FlagshipFlagRulesRollout;
  /**
  * Variation served when this rule matches. Must be a key in `variations`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#serve_variation FlagshipFlag#serve_variation}
  */
  readonly serveVariation: string;
}

export function flagshipFlagRulesToTerraform(struct?: FlagshipFlagRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(flagshipFlagRulesConditionsToTerraform, false)(struct!.conditions),
    priority: cdktf.numberToTerraform(struct!.priority),
    rollout: flagshipFlagRulesRolloutToTerraform(struct!.rollout),
    serve_variation: cdktf.stringToTerraform(struct!.serveVariation),
  }
}


export function flagshipFlagRulesToHclTerraform(struct?: FlagshipFlagRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(flagshipFlagRulesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "FlagshipFlagRulesConditionsList",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollout: {
      value: flagshipFlagRulesRolloutToHclTerraform(struct!.rollout),
      isBlock: true,
      type: "struct",
      storageClassType: "FlagshipFlagRulesRollout",
    },
    serve_variation: {
      value: cdktf.stringToHclTerraform(struct!.serveVariation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlagshipFlagRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlagshipFlagRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._rollout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollout = this._rollout?.internalValue;
    }
    if (this._serveVariation !== undefined) {
      hasAnyValues = true;
      internalValueResult.serveVariation = this._serveVariation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlagshipFlagRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._priority = undefined;
      this._rollout.internalValue = undefined;
      this._serveVariation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._priority = value.priority;
      this._rollout.internalValue = value.rollout;
      this._serveVariation = value.serveVariation;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new FlagshipFlagRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: FlagshipFlagRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rollout - computed: false, optional: true, required: false
  private _rollout = new FlagshipFlagRulesRolloutOutputReference(this, "rollout");
  public get rollout() {
    return this._rollout;
  }
  public putRollout(value: FlagshipFlagRulesRollout) {
    this._rollout.internalValue = value;
  }
  public resetRollout() {
    this._rollout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInput() {
    return this._rollout.internalValue;
  }

  // serve_variation - computed: false, optional: false, required: true
  private _serveVariation?: string; 
  public get serveVariation() {
    return this.getStringAttribute('serve_variation');
  }
  public set serveVariation(value: string) {
    this._serveVariation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serveVariationInput() {
    return this._serveVariation;
  }
}

export class FlagshipFlagRulesList extends cdktf.ComplexList {
  public internalValue? : FlagshipFlagRules[] | cdktf.IResolvable

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
  public get(index: number): FlagshipFlagRulesOutputReference {
    return new FlagshipFlagRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag cloudflare_flagship_flag}
*/
export class FlagshipFlag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_flagship_flag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlagshipFlag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlagshipFlag to import
  * @param importFromId The id of the existing FlagshipFlag that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlagshipFlag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_flagship_flag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/flagship_flag cloudflare_flagship_flag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlagshipFlagConfig
  */
  public constructor(scope: Construct, id: string, config: FlagshipFlagConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_flagship_flag',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._appId = config.appId;
    this._defaultVariation = config.defaultVariation;
    this._description = config.description;
    this._enabled = config.enabled;
    this._flagKey = config.flagKey;
    this._key = config.key;
    this._rules.internalValue = config.rules;
    this._type = config.type;
    this._variations = config.variations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // default_variation - computed: false, optional: false, required: true
  private _defaultVariation?: string; 
  public get defaultVariation() {
    return this.getStringAttribute('default_variation');
  }
  public set defaultVariation(value: string) {
    this._defaultVariation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVariationInput() {
    return this._defaultVariation;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // flag_key - computed: false, optional: true, required: false
  private _flagKey?: string; 
  public get flagKey() {
    return this.getStringAttribute('flag_key');
  }
  public set flagKey(value: string) {
    this._flagKey = value;
  }
  public resetFlagKey() {
    this._flagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagKeyInput() {
    return this._flagKey;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new FlagshipFlagRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: FlagshipFlagRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // variations - computed: false, optional: false, required: true
  private _variations?: { [key: string]: string }; 
  public get variations() {
    return this.getStringMapAttribute('variations');
  }
  public set variations(value: { [key: string]: string }) {
    this._variations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationsInput() {
    return this._variations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      app_id: cdktf.stringToTerraform(this._appId),
      default_variation: cdktf.stringToTerraform(this._defaultVariation),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      flag_key: cdktf.stringToTerraform(this._flagKey),
      key: cdktf.stringToTerraform(this._key),
      rules: cdktf.listMapper(flagshipFlagRulesToTerraform, false)(this._rules.internalValue),
      type: cdktf.stringToTerraform(this._type),
      variations: cdktf.hashMapper(cdktf.stringToTerraform)(this._variations),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_variation: {
        value: cdktf.stringToHclTerraform(this._defaultVariation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flag_key: {
        value: cdktf.stringToHclTerraform(this._flagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(flagshipFlagRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlagshipFlagRulesList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._variations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
