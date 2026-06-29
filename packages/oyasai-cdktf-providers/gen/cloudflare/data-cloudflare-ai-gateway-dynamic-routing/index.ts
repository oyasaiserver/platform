// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareAiGatewayDynamicRoutingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing#account_id DataCloudflareAiGatewayDynamicRouting#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing#gateway_id DataCloudflareAiGatewayDynamicRouting#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing#id DataCloudflareAiGatewayDynamicRouting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCloudflareAiGatewayDynamicRoutingDeployment {
}

export function dataCloudflareAiGatewayDynamicRoutingDeploymentToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDynamicRoutingDeploymentToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayDynamicRoutingDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDynamicRoutingDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback {
}

export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse {
}

export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext {
}

export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsNextToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsNextToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess {
}

export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue {
}

export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputs {
}

export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDynamicRoutingElementsOutputsToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // element_id - computed: true, optional: false, required: false
  public get elementId() {
    return this.getStringAttribute('element_id');
  }

  // fallback - computed: true, optional: false, required: false
  private _fallback = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }

  // false - computed: true, optional: false, required: false
  private _false = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference(this, "false");
  public get false() {
    return this._false;
  }

  // next - computed: true, optional: false, required: false
  private _next = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference(this, "next");
  public get next() {
    return this._next;
  }

  // success - computed: true, optional: false, required: false
  private _success = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(this, "success");
  public get success() {
    return this._success;
  }

  // true - computed: true, optional: false, required: false
  private _true = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference(this, "true");
  public get true() {
    return this._true;
  }
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsProperties {
}

export function dataCloudflareAiGatewayDynamicRoutingElementsPropertiesToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDynamicRoutingElementsPropertiesToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ai_gateway_dynamic_routing_provider - computed: true, optional: false, required: false
  public get aiGatewayDynamicRoutingProvider() {
    return this.getStringAttribute('ai_gateway_dynamic_routing_provider');
  }

  // conditions - computed: true, optional: false, required: false
  public get conditions() {
    return this.getStringAttribute('conditions');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // limit_type - computed: true, optional: false, required: false
  public get limitType() {
    return this.getStringAttribute('limit_type');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // window - computed: true, optional: false, required: false
  public get window() {
    return this.getNumberAttribute('window');
  }
}
export interface DataCloudflareAiGatewayDynamicRoutingElements {
}

export function dataCloudflareAiGatewayDynamicRoutingElementsToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDynamicRoutingElementsToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDynamicRoutingElementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareAiGatewayDynamicRoutingElements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference(this, "outputs");
  public get outputs() {
    return this._outputs;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataCloudflareAiGatewayDynamicRoutingElementsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareAiGatewayDynamicRoutingElementsOutputReference {
    return new DataCloudflareAiGatewayDynamicRoutingElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareAiGatewayDynamicRoutingVersion {
}

export function dataCloudflareAiGatewayDynamicRoutingVersionToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAiGatewayDynamicRoutingVersionToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAiGatewayDynamicRoutingVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAiGatewayDynamicRoutingVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAiGatewayDynamicRoutingVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getStringAttribute('active');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // is_valid - computed: true, optional: false, required: false
  public get isValid() {
    return this.getBooleanAttribute('is_valid');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}
*/
export class DataCloudflareAiGatewayDynamicRouting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ai_gateway_dynamic_routing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareAiGatewayDynamicRouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareAiGatewayDynamicRouting to import
  * @param importFromId The id of the existing DataCloudflareAiGatewayDynamicRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareAiGatewayDynamicRouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateway_dynamic_routing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareAiGatewayDynamicRoutingConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareAiGatewayDynamicRoutingConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ai_gateway_dynamic_routing',
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
    this._gatewayId = config.gatewayId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deployment - computed: true, optional: false, required: false
  private _deployment = new DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }

  // elements - computed: true, optional: false, required: false
  private _elements = new DataCloudflareAiGatewayDynamicRoutingElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  private _version = new DataCloudflareAiGatewayDynamicRoutingVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
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
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
