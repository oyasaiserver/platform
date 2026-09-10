// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssertsStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * A Grafana Cloud Access Policy token with the following scopes: `stacks:read`, `metrics:read`, `metrics:write`. This token is used for GCom API access, Mimir authentication, and assertion detector webhook authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#cloud_access_policy_token AssertsStack#cloud_access_policy_token}
  */
  readonly cloudAccessPolicyToken: string;
  /**
  * A Grafana Service Account token for installing dashboards and Grafana Managed Alerts. Required permissions: `dashboards:create`, `dashboards:write`, `dashboards:read`, `folders:create`, `folders:write`, `folders:read`, `folders:delete`, `datasources:read`, `datasources:query`, `alert.provisioning:write`, `alert.notifications.provisioning:write`, `alert.notifications:write`, `alert.rules:read`, `alert.rules:create`, `alert.rules:delete`. Create using `grafana_cloud_stack_service_account_token` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#grafana_token AssertsStack#grafana_token}
  */
  readonly grafanaToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#id AssertsStack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#dataset AssertsStack#dataset}
  */
  readonly dataset?: AssertsStackDataset[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#timeouts AssertsStack#timeouts}
  */
  readonly timeouts?: AssertsStackTimeouts;
}
export interface AssertsStackDatasetFilterGroupFilter {
  /**
  * The label name to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#name AssertsStack#name}
  */
  readonly name: string;
  /**
  * The filter operator (e.g., `=`, `!=`, `=~`, `!~`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#operator AssertsStack#operator}
  */
  readonly operator: string;
  /**
  * The values to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#values AssertsStack#values}
  */
  readonly values: string[];
}

export function assertsStackDatasetFilterGroupFilterToTerraform(struct?: AssertsStackDatasetFilterGroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function assertsStackDatasetFilterGroupFilterToHclTerraform(struct?: AssertsStackDatasetFilterGroupFilter | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsStackDatasetFilterGroupFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssertsStackDatasetFilterGroupFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsStackDatasetFilterGroupFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._values = value.values;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AssertsStackDatasetFilterGroupFilterList extends cdktf.ComplexList {
  public internalValue? : AssertsStackDatasetFilterGroupFilter[] | cdktf.IResolvable

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
  public get(index: number): AssertsStackDatasetFilterGroupFilterOutputReference {
    return new AssertsStackDatasetFilterGroupFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssertsStackDatasetFilterGroup {
  /**
  * The metric label name used for environment (e.g., `env`, `environment`, `deployment_environment`). Defaults to standard labels if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#env_label AssertsStack#env_label}
  */
  readonly envLabel?: string;
  /**
  * Specific values of the environment label to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#env_label_values AssertsStack#env_label_values}
  */
  readonly envLabelValues?: string[];
  /**
  * A friendly name for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#env_name AssertsStack#env_name}
  */
  readonly envName?: string;
  /**
  * The metric label name used for site/cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#site_label AssertsStack#site_label}
  */
  readonly siteLabel?: string;
  /**
  * Specific values of the site label to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#site_label_values AssertsStack#site_label_values}
  */
  readonly siteLabelValues?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#filter AssertsStack#filter}
  */
  readonly filter?: AssertsStackDatasetFilterGroupFilter[] | cdktf.IResolvable;
}

export function assertsStackDatasetFilterGroupToTerraform(struct?: AssertsStackDatasetFilterGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env_label: cdktf.stringToTerraform(struct!.envLabel),
    env_label_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.envLabelValues),
    env_name: cdktf.stringToTerraform(struct!.envName),
    site_label: cdktf.stringToTerraform(struct!.siteLabel),
    site_label_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteLabelValues),
    filter: cdktf.listMapper(assertsStackDatasetFilterGroupFilterToTerraform, true)(struct!.filter),
  }
}


export function assertsStackDatasetFilterGroupToHclTerraform(struct?: AssertsStackDatasetFilterGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env_label: {
      value: cdktf.stringToHclTerraform(struct!.envLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_label_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.envLabelValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env_name: {
      value: cdktf.stringToHclTerraform(struct!.envName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_label: {
      value: cdktf.stringToHclTerraform(struct!.siteLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_label_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteLabelValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter: {
      value: cdktf.listMapperHcl(assertsStackDatasetFilterGroupFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "AssertsStackDatasetFilterGroupFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsStackDatasetFilterGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssertsStackDatasetFilterGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.envLabel = this._envLabel;
    }
    if (this._envLabelValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.envLabelValues = this._envLabelValues;
    }
    if (this._envName !== undefined) {
      hasAnyValues = true;
      internalValueResult.envName = this._envName;
    }
    if (this._siteLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLabel = this._siteLabel;
    }
    if (this._siteLabelValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLabelValues = this._siteLabelValues;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsStackDatasetFilterGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._envLabel = undefined;
      this._envLabelValues = undefined;
      this._envName = undefined;
      this._siteLabel = undefined;
      this._siteLabelValues = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._envLabel = value.envLabel;
      this._envLabelValues = value.envLabelValues;
      this._envName = value.envName;
      this._siteLabel = value.siteLabel;
      this._siteLabelValues = value.siteLabelValues;
      this._filter.internalValue = value.filter;
    }
  }

  // env_label - computed: false, optional: true, required: false
  private _envLabel?: string; 
  public get envLabel() {
    return this.getStringAttribute('env_label');
  }
  public set envLabel(value: string) {
    this._envLabel = value;
  }
  public resetEnvLabel() {
    this._envLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envLabelInput() {
    return this._envLabel;
  }

  // env_label_values - computed: false, optional: true, required: false
  private _envLabelValues?: string[]; 
  public get envLabelValues() {
    return this.getListAttribute('env_label_values');
  }
  public set envLabelValues(value: string[]) {
    this._envLabelValues = value;
  }
  public resetEnvLabelValues() {
    this._envLabelValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envLabelValuesInput() {
    return this._envLabelValues;
  }

  // env_name - computed: false, optional: true, required: false
  private _envName?: string; 
  public get envName() {
    return this.getStringAttribute('env_name');
  }
  public set envName(value: string) {
    this._envName = value;
  }
  public resetEnvName() {
    this._envName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envNameInput() {
    return this._envName;
  }

  // site_label - computed: false, optional: true, required: false
  private _siteLabel?: string; 
  public get siteLabel() {
    return this.getStringAttribute('site_label');
  }
  public set siteLabel(value: string) {
    this._siteLabel = value;
  }
  public resetSiteLabel() {
    this._siteLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLabelInput() {
    return this._siteLabel;
  }

  // site_label_values - computed: false, optional: true, required: false
  private _siteLabelValues?: string[]; 
  public get siteLabelValues() {
    return this.getListAttribute('site_label_values');
  }
  public set siteLabelValues(value: string[]) {
    this._siteLabelValues = value;
  }
  public resetSiteLabelValues() {
    this._siteLabelValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLabelValuesInput() {
    return this._siteLabelValues;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new AssertsStackDatasetFilterGroupFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: AssertsStackDatasetFilterGroupFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class AssertsStackDatasetFilterGroupList extends cdktf.ComplexList {
  public internalValue? : AssertsStackDatasetFilterGroup[] | cdktf.IResolvable

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
  public get(index: number): AssertsStackDatasetFilterGroupOutputReference {
    return new AssertsStackDatasetFilterGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssertsStackDataset {
  /**
  * List of vendors to disable for this dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#disabled_vendors AssertsStack#disabled_vendors}
  */
  readonly disabledVendors?: string[];
  /**
  * The dataset type. Available types: `kubernetes`, `otel` (App O11y), `prometheus`, `aws`. Note: `kubernetes` requires K8s Monitoring to be enabled, and `otel` requires Application Observability to be enabled on the stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#type AssertsStack#type}
  */
  readonly type: string;
  /**
  * filter_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#filter_group AssertsStack#filter_group}
  */
  readonly filterGroup?: AssertsStackDatasetFilterGroup[] | cdktf.IResolvable;
}

export function assertsStackDatasetToTerraform(struct?: AssertsStackDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_vendors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledVendors),
    type: cdktf.stringToTerraform(struct!.type),
    filter_group: cdktf.listMapper(assertsStackDatasetFilterGroupToTerraform, true)(struct!.filterGroup),
  }
}


export function assertsStackDatasetToHclTerraform(struct?: AssertsStackDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled_vendors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledVendors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_group: {
      value: cdktf.listMapperHcl(assertsStackDatasetFilterGroupToHclTerraform, true)(struct!.filterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "AssertsStackDatasetFilterGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsStackDatasetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssertsStackDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledVendors !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledVendors = this._disabledVendors;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._filterGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterGroup = this._filterGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsStackDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabledVendors = undefined;
      this._type = undefined;
      this._filterGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabledVendors = value.disabledVendors;
      this._type = value.type;
      this._filterGroup.internalValue = value.filterGroup;
    }
  }

  // disabled_vendors - computed: false, optional: true, required: false
  private _disabledVendors?: string[]; 
  public get disabledVendors() {
    return this.getListAttribute('disabled_vendors');
  }
  public set disabledVendors(value: string[]) {
    this._disabledVendors = value;
  }
  public resetDisabledVendors() {
    this._disabledVendors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledVendorsInput() {
    return this._disabledVendors;
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

  // filter_group - computed: false, optional: true, required: false
  private _filterGroup = new AssertsStackDatasetFilterGroupList(this, "filter_group", false);
  public get filterGroup() {
    return this._filterGroup;
  }
  public putFilterGroup(value: AssertsStackDatasetFilterGroup[] | cdktf.IResolvable) {
    this._filterGroup.internalValue = value;
  }
  public resetFilterGroup() {
    this._filterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterGroupInput() {
    return this._filterGroup.internalValue;
  }
}

export class AssertsStackDatasetList extends cdktf.ComplexList {
  public internalValue? : AssertsStackDataset[] | cdktf.IResolvable

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
  public get(index: number): AssertsStackDatasetOutputReference {
    return new AssertsStackDatasetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssertsStackTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#create AssertsStack#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#delete AssertsStack#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#read AssertsStack#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#update AssertsStack#update}
  */
  readonly update?: string;
}

export function assertsStackTimeoutsToTerraform(struct?: AssertsStackTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function assertsStackTimeoutsToHclTerraform(struct?: AssertsStackTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsStackTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssertsStackTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsStackTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack grafana_asserts_stack}
*/
export class AssertsStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_asserts_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssertsStack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssertsStack to import
  * @param importFromId The id of the existing AssertsStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssertsStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_asserts_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_stack grafana_asserts_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssertsStackConfig
  */
  public constructor(scope: Construct, id: string, config: AssertsStackConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_asserts_stack',
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
    this._cloudAccessPolicyToken = config.cloudAccessPolicyToken;
    this._grafanaToken = config.grafanaToken;
    this._id = config.id;
    this._dataset.internalValue = config.dataset;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_access_policy_token - computed: false, optional: false, required: true
  private _cloudAccessPolicyToken?: string; 
  public get cloudAccessPolicyToken() {
    return this.getStringAttribute('cloud_access_policy_token');
  }
  public set cloudAccessPolicyToken(value: string) {
    this._cloudAccessPolicyToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccessPolicyTokenInput() {
    return this._cloudAccessPolicyToken;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // grafana_token - computed: false, optional: true, required: false
  private _grafanaToken?: string; 
  public get grafanaToken() {
    return this.getStringAttribute('grafana_token');
  }
  public set grafanaToken(value: string) {
    this._grafanaToken = value;
  }
  public resetGrafanaToken() {
    this._grafanaToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaTokenInput() {
    return this._grafanaToken;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset = new AssertsStackDatasetList(this, "dataset", false);
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: AssertsStackDataset[] | cdktf.IResolvable) {
    this._dataset.internalValue = value;
  }
  public resetDataset() {
    this._dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AssertsStackTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AssertsStackTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_access_policy_token: cdktf.stringToTerraform(this._cloudAccessPolicyToken),
      grafana_token: cdktf.stringToTerraform(this._grafanaToken),
      id: cdktf.stringToTerraform(this._id),
      dataset: cdktf.listMapper(assertsStackDatasetToTerraform, true)(this._dataset.internalValue),
      timeouts: assertsStackTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_access_policy_token: {
        value: cdktf.stringToHclTerraform(this._cloudAccessPolicyToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grafana_token: {
        value: cdktf.stringToHclTerraform(this._grafanaToken),
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
      dataset: {
        value: cdktf.listMapperHcl(assertsStackDatasetToHclTerraform, true)(this._dataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssertsStackDatasetList",
      },
      timeouts: {
        value: assertsStackTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AssertsStackTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
