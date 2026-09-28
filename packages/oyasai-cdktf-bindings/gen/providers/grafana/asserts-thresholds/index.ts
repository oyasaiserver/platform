// https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssertsThresholdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#id AssertsThresholds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * health_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#health_thresholds AssertsThresholds#health_thresholds}
  */
  readonly healthThresholds?: AssertsThresholdsHealthThresholds[] | cdktf.IResolvable;
  /**
  * request_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#request_thresholds AssertsThresholds#request_thresholds}
  */
  readonly requestThresholds?: AssertsThresholdsRequestThresholds[] | cdktf.IResolvable;
  /**
  * resource_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#resource_thresholds AssertsThresholds#resource_thresholds}
  */
  readonly resourceThresholds?: AssertsThresholdsResourceThresholds[] | cdktf.IResolvable;
}
export interface AssertsThresholdsHealthThresholds {
  /**
  * Optional alert category label for the health threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#alert_category AssertsThresholds#alert_category}
  */
  readonly alertCategory?: string;
  /**
  * Assertion name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#assertion_name AssertsThresholds#assertion_name}
  */
  readonly assertionName: string;
  /**
  * Entity type for the health threshold (e.g., Service, Pod, Namespace, Volume).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#entity_type AssertsThresholds#entity_type}
  */
  readonly entityType: string;
  /**
  * Prometheus expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#expression AssertsThresholds#expression}
  */
  readonly expression: string;
}

export function assertsThresholdsHealthThresholdsToTerraform(struct?: AssertsThresholdsHealthThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_category: cdktf.stringToTerraform(struct!.alertCategory),
    assertion_name: cdktf.stringToTerraform(struct!.assertionName),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function assertsThresholdsHealthThresholdsToHclTerraform(struct?: AssertsThresholdsHealthThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_category: {
      value: cdktf.stringToHclTerraform(struct!.alertCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion_name: {
      value: cdktf.stringToHclTerraform(struct!.assertionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsThresholdsHealthThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssertsThresholdsHealthThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertCategory = this._alertCategory;
    }
    if (this._assertionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionName = this._assertionName;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsThresholdsHealthThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertCategory = undefined;
      this._assertionName = undefined;
      this._entityType = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertCategory = value.alertCategory;
      this._assertionName = value.assertionName;
      this._entityType = value.entityType;
      this._expression = value.expression;
    }
  }

  // alert_category - computed: false, optional: true, required: false
  private _alertCategory?: string; 
  public get alertCategory() {
    return this.getStringAttribute('alert_category');
  }
  public set alertCategory(value: string) {
    this._alertCategory = value;
  }
  public resetAlertCategory() {
    this._alertCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertCategoryInput() {
    return this._alertCategory;
  }

  // assertion_name - computed: false, optional: false, required: true
  private _assertionName?: string; 
  public get assertionName() {
    return this.getStringAttribute('assertion_name');
  }
  public set assertionName(value: string) {
    this._assertionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionNameInput() {
    return this._assertionName;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class AssertsThresholdsHealthThresholdsList extends cdktf.ComplexList {
  public internalValue? : AssertsThresholdsHealthThresholds[] | cdktf.IResolvable

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
  public get(index: number): AssertsThresholdsHealthThresholdsOutputReference {
    return new AssertsThresholdsHealthThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssertsThresholdsRequestThresholds {
  /**
  * Assertion name (e.g., RequestRateAnomaly, ErrorRatioBreach).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#assertion_name AssertsThresholds#assertion_name}
  */
  readonly assertionName: string;
  /**
  * Entity name the threshold applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#entity_name AssertsThresholds#entity_name}
  */
  readonly entityName: string;
  /**
  * Request context (e.g., path or context identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#request_context AssertsThresholds#request_context}
  */
  readonly requestContext: string;
  /**
  * Request type (e.g., inbound/outbound).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#request_type AssertsThresholds#request_type}
  */
  readonly requestType: string;
  /**
  * Threshold value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#value AssertsThresholds#value}
  */
  readonly value: number;
}

export function assertsThresholdsRequestThresholdsToTerraform(struct?: AssertsThresholdsRequestThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assertion_name: cdktf.stringToTerraform(struct!.assertionName),
    entity_name: cdktf.stringToTerraform(struct!.entityName),
    request_context: cdktf.stringToTerraform(struct!.requestContext),
    request_type: cdktf.stringToTerraform(struct!.requestType),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function assertsThresholdsRequestThresholdsToHclTerraform(struct?: AssertsThresholdsRequestThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assertion_name: {
      value: cdktf.stringToHclTerraform(struct!.assertionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_name: {
      value: cdktf.stringToHclTerraform(struct!.entityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_context: {
      value: cdktf.stringToHclTerraform(struct!.requestContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_type: {
      value: cdktf.stringToHclTerraform(struct!.requestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsThresholdsRequestThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssertsThresholdsRequestThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assertionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionName = this._assertionName;
    }
    if (this._entityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityName = this._entityName;
    }
    if (this._requestContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestContext = this._requestContext;
    }
    if (this._requestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestType = this._requestType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsThresholdsRequestThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assertionName = undefined;
      this._entityName = undefined;
      this._requestContext = undefined;
      this._requestType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assertionName = value.assertionName;
      this._entityName = value.entityName;
      this._requestContext = value.requestContext;
      this._requestType = value.requestType;
      this._value = value.value;
    }
  }

  // assertion_name - computed: false, optional: false, required: true
  private _assertionName?: string; 
  public get assertionName() {
    return this.getStringAttribute('assertion_name');
  }
  public set assertionName(value: string) {
    this._assertionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionNameInput() {
    return this._assertionName;
  }

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // request_context - computed: false, optional: false, required: true
  private _requestContext?: string; 
  public get requestContext() {
    return this.getStringAttribute('request_context');
  }
  public set requestContext(value: string) {
    this._requestContext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestContextInput() {
    return this._requestContext;
  }

  // request_type - computed: false, optional: false, required: true
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AssertsThresholdsRequestThresholdsList extends cdktf.ComplexList {
  public internalValue? : AssertsThresholdsRequestThresholds[] | cdktf.IResolvable

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
  public get(index: number): AssertsThresholdsRequestThresholdsOutputReference {
    return new AssertsThresholdsRequestThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssertsThresholdsResourceThresholds {
  /**
  * Assertion name (e.g., Saturation, ResourceRateBreach).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#assertion_name AssertsThresholds#assertion_name}
  */
  readonly assertionName: string;
  /**
  * Container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#container_name AssertsThresholds#container_name}
  */
  readonly containerName: string;
  /**
  * Resource type (e.g., container/pod/node).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#resource_type AssertsThresholds#resource_type}
  */
  readonly resourceType: string;
  /**
  * Severity (warning or critical).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#severity AssertsThresholds#severity}
  */
  readonly severity: string;
  /**
  * Data source for the threshold (e.g., metrics/logs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#source AssertsThresholds#source}
  */
  readonly source: string;
  /**
  * Threshold value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#value AssertsThresholds#value}
  */
  readonly value: number;
}

export function assertsThresholdsResourceThresholdsToTerraform(struct?: AssertsThresholdsResourceThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assertion_name: cdktf.stringToTerraform(struct!.assertionName),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    severity: cdktf.stringToTerraform(struct!.severity),
    source: cdktf.stringToTerraform(struct!.source),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function assertsThresholdsResourceThresholdsToHclTerraform(struct?: AssertsThresholdsResourceThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assertion_name: {
      value: cdktf.stringToHclTerraform(struct!.assertionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsThresholdsResourceThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssertsThresholdsResourceThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assertionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionName = this._assertionName;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsThresholdsResourceThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assertionName = undefined;
      this._containerName = undefined;
      this._resourceType = undefined;
      this._severity = undefined;
      this._source = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assertionName = value.assertionName;
      this._containerName = value.containerName;
      this._resourceType = value.resourceType;
      this._severity = value.severity;
      this._source = value.source;
      this._value = value.value;
    }
  }

  // assertion_name - computed: false, optional: false, required: true
  private _assertionName?: string; 
  public get assertionName() {
    return this.getStringAttribute('assertion_name');
  }
  public set assertionName(value: string) {
    this._assertionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionNameInput() {
    return this._assertionName;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AssertsThresholdsResourceThresholdsList extends cdktf.ComplexList {
  public internalValue? : AssertsThresholdsResourceThresholds[] | cdktf.IResolvable

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
  public get(index: number): AssertsThresholdsResourceThresholdsOutputReference {
    return new AssertsThresholdsResourceThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds grafana_asserts_thresholds}
*/
export class AssertsThresholds extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_asserts_thresholds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssertsThresholds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssertsThresholds to import
  * @param importFromId The id of the existing AssertsThresholds that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssertsThresholds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_asserts_thresholds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.46.0/docs/resources/asserts_thresholds grafana_asserts_thresholds} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssertsThresholdsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AssertsThresholdsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_asserts_thresholds',
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
    this._healthThresholds.internalValue = config.healthThresholds;
    this._requestThresholds.internalValue = config.requestThresholds;
    this._resourceThresholds.internalValue = config.resourceThresholds;
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

  // health_thresholds - computed: false, optional: true, required: false
  private _healthThresholds = new AssertsThresholdsHealthThresholdsList(this, "health_thresholds", false);
  public get healthThresholds() {
    return this._healthThresholds;
  }
  public putHealthThresholds(value: AssertsThresholdsHealthThresholds[] | cdktf.IResolvable) {
    this._healthThresholds.internalValue = value;
  }
  public resetHealthThresholds() {
    this._healthThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthThresholdsInput() {
    return this._healthThresholds.internalValue;
  }

  // request_thresholds - computed: false, optional: true, required: false
  private _requestThresholds = new AssertsThresholdsRequestThresholdsList(this, "request_thresholds", false);
  public get requestThresholds() {
    return this._requestThresholds;
  }
  public putRequestThresholds(value: AssertsThresholdsRequestThresholds[] | cdktf.IResolvable) {
    this._requestThresholds.internalValue = value;
  }
  public resetRequestThresholds() {
    this._requestThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestThresholdsInput() {
    return this._requestThresholds.internalValue;
  }

  // resource_thresholds - computed: false, optional: true, required: false
  private _resourceThresholds = new AssertsThresholdsResourceThresholdsList(this, "resource_thresholds", false);
  public get resourceThresholds() {
    return this._resourceThresholds;
  }
  public putResourceThresholds(value: AssertsThresholdsResourceThresholds[] | cdktf.IResolvable) {
    this._resourceThresholds.internalValue = value;
  }
  public resetResourceThresholds() {
    this._resourceThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceThresholdsInput() {
    return this._resourceThresholds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      health_thresholds: cdktf.listMapper(assertsThresholdsHealthThresholdsToTerraform, true)(this._healthThresholds.internalValue),
      request_thresholds: cdktf.listMapper(assertsThresholdsRequestThresholdsToTerraform, true)(this._requestThresholds.internalValue),
      resource_thresholds: cdktf.listMapper(assertsThresholdsResourceThresholdsToTerraform, true)(this._resourceThresholds.internalValue),
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
      health_thresholds: {
        value: cdktf.listMapperHcl(assertsThresholdsHealthThresholdsToHclTerraform, true)(this._healthThresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssertsThresholdsHealthThresholdsList",
      },
      request_thresholds: {
        value: cdktf.listMapperHcl(assertsThresholdsRequestThresholdsToHclTerraform, true)(this._requestThresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssertsThresholdsRequestThresholdsList",
      },
      resource_thresholds: {
        value: cdktf.listMapperHcl(assertsThresholdsResourceThresholdsToHclTerraform, true)(this._resourceThresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssertsThresholdsResourceThresholdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
