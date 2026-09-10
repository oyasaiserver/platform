// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssertsCustomModelRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#id AssertsCustomModelRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the custom model rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#name AssertsCustomModelRules#name}
  */
  readonly name: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#rules AssertsCustomModelRules#rules}
  */
  readonly rules: AssertsCustomModelRulesRules;
}
export interface AssertsCustomModelRulesRulesEntityDefinedBy {
  /**
  * Whether this rule is disabled. When true, only the 'query' field is used to match an existing rule to disable; other fields are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#disabled AssertsCustomModelRules#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Label value mappings for the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#label_values AssertsCustomModelRules#label_values}
  */
  readonly labelValues?: { [key: string]: string };
  /**
  * Literal value mappings for the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#literals AssertsCustomModelRules#literals}
  */
  readonly literals?: { [key: string]: string };
  /**
  * Metric value for the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#metric_value AssertsCustomModelRules#metric_value}
  */
  readonly metricValue?: string;
  /**
  * The Prometheus query that defines this entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#query AssertsCustomModelRules#query}
  */
  readonly query: string;
}

export function assertsCustomModelRulesRulesEntityDefinedByToTerraform(struct?: AssertsCustomModelRulesRulesEntityDefinedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    label_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelValues),
    literals: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.literals),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function assertsCustomModelRulesRulesEntityDefinedByToHclTerraform(struct?: AssertsCustomModelRulesRulesEntityDefinedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    literals: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.literals),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_value: {
      value: cdktf.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsCustomModelRulesRulesEntityDefinedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssertsCustomModelRulesRulesEntityDefinedBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._labelValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelValues = this._labelValues;
    }
    if (this._literals !== undefined) {
      hasAnyValues = true;
      internalValueResult.literals = this._literals;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsCustomModelRulesRulesEntityDefinedBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._labelValues = undefined;
      this._literals = undefined;
      this._metricValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._labelValues = value.labelValues;
      this._literals = value.literals;
      this._metricValue = value.metricValue;
      this._query = value.query;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // label_values - computed: false, optional: true, required: false
  private _labelValues?: { [key: string]: string }; 
  public get labelValues() {
    return this.getStringMapAttribute('label_values');
  }
  public set labelValues(value: { [key: string]: string }) {
    this._labelValues = value;
  }
  public resetLabelValues() {
    this._labelValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelValuesInput() {
    return this._labelValues;
  }

  // literals - computed: false, optional: true, required: false
  private _literals?: { [key: string]: string }; 
  public get literals() {
    return this.getStringMapAttribute('literals');
  }
  public set literals(value: { [key: string]: string }) {
    this._literals = value;
  }
  public resetLiterals() {
    this._literals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalsInput() {
    return this._literals;
  }

  // metric_value - computed: false, optional: true, required: false
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  public resetMetricValue() {
    this._metricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class AssertsCustomModelRulesRulesEntityDefinedByList extends cdktf.ComplexList {
  public internalValue? : AssertsCustomModelRulesRulesEntityDefinedBy[] | cdktf.IResolvable

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
  public get(index: number): AssertsCustomModelRulesRulesEntityDefinedByOutputReference {
    return new AssertsCustomModelRulesRulesEntityDefinedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssertsCustomModelRulesRulesEntity {
  /**
  * Whether this entity is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#disabled AssertsCustomModelRules#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * List of enrichment sources for the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#enriched_by AssertsCustomModelRules#enriched_by}
  */
  readonly enrichedBy?: string[];
  /**
  * Lookup mappings for the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#lookup AssertsCustomModelRules#lookup}
  */
  readonly lookup?: { [key: string]: string };
  /**
  * The name of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#name AssertsCustomModelRules#name}
  */
  readonly name: string;
  /**
  * Scope labels for the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#scope AssertsCustomModelRules#scope}
  */
  readonly scope?: { [key: string]: string };
  /**
  * The type of the entity (e.g., Service, Pod, Namespace).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#type AssertsCustomModelRules#type}
  */
  readonly type: string;
  /**
  * defined_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#defined_by AssertsCustomModelRules#defined_by}
  */
  readonly definedBy: AssertsCustomModelRulesRulesEntityDefinedBy[] | cdktf.IResolvable;
}

export function assertsCustomModelRulesRulesEntityToTerraform(struct?: AssertsCustomModelRulesRulesEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    enriched_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enrichedBy),
    lookup: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.lookup),
    name: cdktf.stringToTerraform(struct!.name),
    scope: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.scope),
    type: cdktf.stringToTerraform(struct!.type),
    defined_by: cdktf.listMapper(assertsCustomModelRulesRulesEntityDefinedByToTerraform, true)(struct!.definedBy),
  }
}


export function assertsCustomModelRulesRulesEntityToHclTerraform(struct?: AssertsCustomModelRulesRulesEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enriched_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enrichedBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    lookup: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.lookup),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.scope),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_by: {
      value: cdktf.listMapperHcl(assertsCustomModelRulesRulesEntityDefinedByToHclTerraform, true)(struct!.definedBy),
      isBlock: true,
      type: "list",
      storageClassType: "AssertsCustomModelRulesRulesEntityDefinedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsCustomModelRulesRulesEntityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssertsCustomModelRulesRulesEntity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._enrichedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichedBy = this._enrichedBy;
    }
    if (this._lookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookup = this._lookup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._definedBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedBy = this._definedBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsCustomModelRulesRulesEntity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._enrichedBy = undefined;
      this._lookup = undefined;
      this._name = undefined;
      this._scope = undefined;
      this._type = undefined;
      this._definedBy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._enrichedBy = value.enrichedBy;
      this._lookup = value.lookup;
      this._name = value.name;
      this._scope = value.scope;
      this._type = value.type;
      this._definedBy.internalValue = value.definedBy;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // enriched_by - computed: false, optional: true, required: false
  private _enrichedBy?: string[]; 
  public get enrichedBy() {
    return this.getListAttribute('enriched_by');
  }
  public set enrichedBy(value: string[]) {
    this._enrichedBy = value;
  }
  public resetEnrichedBy() {
    this._enrichedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichedByInput() {
    return this._enrichedBy;
  }

  // lookup - computed: false, optional: true, required: false
  private _lookup?: { [key: string]: string }; 
  public get lookup() {
    return this.getStringMapAttribute('lookup');
  }
  public set lookup(value: { [key: string]: string }) {
    this._lookup = value;
  }
  public resetLookup() {
    this._lookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupInput() {
    return this._lookup;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: { [key: string]: string }; 
  public get scope() {
    return this.getStringMapAttribute('scope');
  }
  public set scope(value: { [key: string]: string }) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

  // defined_by - computed: false, optional: false, required: true
  private _definedBy = new AssertsCustomModelRulesRulesEntityDefinedByList(this, "defined_by", false);
  public get definedBy() {
    return this._definedBy;
  }
  public putDefinedBy(value: AssertsCustomModelRulesRulesEntityDefinedBy[] | cdktf.IResolvable) {
    this._definedBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definedByInput() {
    return this._definedBy.internalValue;
  }
}

export class AssertsCustomModelRulesRulesEntityList extends cdktf.ComplexList {
  public internalValue? : AssertsCustomModelRulesRulesEntity[] | cdktf.IResolvable

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
  public get(index: number): AssertsCustomModelRulesRulesEntityOutputReference {
    return new AssertsCustomModelRulesRulesEntityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssertsCustomModelRulesRules {
  /**
  * entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#entity AssertsCustomModelRules#entity}
  */
  readonly entity: AssertsCustomModelRulesRulesEntity[] | cdktf.IResolvable;
}

export function assertsCustomModelRulesRulesToTerraform(struct?: AssertsCustomModelRulesRulesOutputReference | AssertsCustomModelRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity: cdktf.listMapper(assertsCustomModelRulesRulesEntityToTerraform, true)(struct!.entity),
  }
}


export function assertsCustomModelRulesRulesToHclTerraform(struct?: AssertsCustomModelRulesRulesOutputReference | AssertsCustomModelRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity: {
      value: cdktf.listMapperHcl(assertsCustomModelRulesRulesEntityToHclTerraform, true)(struct!.entity),
      isBlock: true,
      type: "list",
      storageClassType: "AssertsCustomModelRulesRulesEntityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsCustomModelRulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AssertsCustomModelRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsCustomModelRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entity.internalValue = value.entity;
    }
  }

  // entity - computed: false, optional: false, required: true
  private _entity = new AssertsCustomModelRulesRulesEntityList(this, "entity", false);
  public get entity() {
    return this._entity;
  }
  public putEntity(value: AssertsCustomModelRulesRulesEntity[] | cdktf.IResolvable) {
    this._entity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules grafana_asserts_custom_model_rules}
*/
export class AssertsCustomModelRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_asserts_custom_model_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssertsCustomModelRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssertsCustomModelRules to import
  * @param importFromId The id of the existing AssertsCustomModelRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssertsCustomModelRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_asserts_custom_model_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_custom_model_rules grafana_asserts_custom_model_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssertsCustomModelRulesConfig
  */
  public constructor(scope: Construct, id: string, config: AssertsCustomModelRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_asserts_custom_model_rules',
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
    this._id = config.id;
    this._name = config.name;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rules - computed: false, optional: false, required: true
  private _rules = new AssertsCustomModelRulesRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: AssertsCustomModelRulesRules) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rules: assertsCustomModelRulesRulesToTerraform(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      rules: {
        value: assertsCustomModelRulesRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssertsCustomModelRulesRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
