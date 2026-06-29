// https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiGatewayDynamicRoutingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}
  */
  readonly elements: AiGatewayDynamicRoutingElements[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}
  */
  readonly name: string;
}
export interface AiGatewayDynamicRoutingDeployment {
}

export function aiGatewayDynamicRoutingDeploymentToTerraform(struct?: AiGatewayDynamicRoutingDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingDeploymentToHclTerraform(struct?: AiGatewayDynamicRoutingDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingDeployment | undefined) {
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
export interface AiGatewayDynamicRoutingElementsOutputsFallback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
  */
  readonly elementId: string;
}

export function aiGatewayDynamicRoutingElementsOutputsFallbackToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_id: cdktf.stringToTerraform(struct!.elementId),
  }
}


export function aiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element_id: {
      value: cdktf.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingElementsOutputsFallback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingElementsOutputsFallback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
    }
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }
}
export interface AiGatewayDynamicRoutingElementsOutputsFalse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
  */
  readonly elementId: string;
}

export function aiGatewayDynamicRoutingElementsOutputsFalseToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsFalse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_id: cdktf.stringToTerraform(struct!.elementId),
  }
}


export function aiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsFalse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element_id: {
      value: cdktf.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayDynamicRoutingElementsOutputsFalseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingElementsOutputsFalse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingElementsOutputsFalse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
    }
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }
}
export interface AiGatewayDynamicRoutingElementsOutputsNext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
  */
  readonly elementId: string;
}

export function aiGatewayDynamicRoutingElementsOutputsNextToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsNext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_id: cdktf.stringToTerraform(struct!.elementId),
  }
}


export function aiGatewayDynamicRoutingElementsOutputsNextToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsNext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element_id: {
      value: cdktf.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayDynamicRoutingElementsOutputsNextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingElementsOutputsNext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingElementsOutputsNext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
    }
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }
}
export interface AiGatewayDynamicRoutingElementsOutputsSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
  */
  readonly elementId: string;
}

export function aiGatewayDynamicRoutingElementsOutputsSuccessToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_id: cdktf.stringToTerraform(struct!.elementId),
  }
}


export function aiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsSuccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element_id: {
      value: cdktf.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingElementsOutputsSuccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingElementsOutputsSuccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
    }
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }
}
export interface AiGatewayDynamicRoutingElementsOutputsTrue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
  */
  readonly elementId: string;
}

export function aiGatewayDynamicRoutingElementsOutputsTrueToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsTrue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_id: cdktf.stringToTerraform(struct!.elementId),
  }
}


export function aiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsTrue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element_id: {
      value: cdktf.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayDynamicRoutingElementsOutputsTrueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingElementsOutputsTrue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingElementsOutputsTrue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
    }
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }
}
export interface AiGatewayDynamicRoutingElementsOutputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
  */
  readonly elementId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#fallback AiGatewayDynamicRouting#fallback}
  */
  readonly fallback?: AiGatewayDynamicRoutingElementsOutputsFallback;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#false AiGatewayDynamicRouting#false}
  */
  readonly false?: AiGatewayDynamicRoutingElementsOutputsFalse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#next AiGatewayDynamicRouting#next}
  */
  readonly next?: AiGatewayDynamicRoutingElementsOutputsNext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#success AiGatewayDynamicRouting#success}
  */
  readonly success?: AiGatewayDynamicRoutingElementsOutputsSuccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#true AiGatewayDynamicRouting#true}
  */
  readonly true?: AiGatewayDynamicRoutingElementsOutputsTrue;
}

export function aiGatewayDynamicRoutingElementsOutputsToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_id: cdktf.stringToTerraform(struct!.elementId),
    fallback: aiGatewayDynamicRoutingElementsOutputsFallbackToTerraform(struct!.fallback),
    false: aiGatewayDynamicRoutingElementsOutputsFalseToTerraform(struct!.false),
    next: aiGatewayDynamicRoutingElementsOutputsNextToTerraform(struct!.next),
    success: aiGatewayDynamicRoutingElementsOutputsSuccessToTerraform(struct!.success),
    true: aiGatewayDynamicRoutingElementsOutputsTrueToTerraform(struct!.true),
  }
}


export function aiGatewayDynamicRoutingElementsOutputsToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element_id: {
      value: cdktf.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fallback: {
      value: aiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform(struct!.fallback),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayDynamicRoutingElementsOutputsFallback",
    },
    false: {
      value: aiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform(struct!.false),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayDynamicRoutingElementsOutputsFalse",
    },
    next: {
      value: aiGatewayDynamicRoutingElementsOutputsNextToHclTerraform(struct!.next),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayDynamicRoutingElementsOutputsNext",
    },
    success: {
      value: aiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform(struct!.success),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayDynamicRoutingElementsOutputsSuccess",
    },
    true: {
      value: aiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform(struct!.true),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayDynamicRoutingElementsOutputsTrue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayDynamicRoutingElementsOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingElementsOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    if (this._fallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback?.internalValue;
    }
    if (this._false?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.false = this._false?.internalValue;
    }
    if (this._next?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next?.internalValue;
    }
    if (this._success?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success?.internalValue;
    }
    if (this._true?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.true = this._true?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingElementsOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
      this._fallback.internalValue = undefined;
      this._false.internalValue = undefined;
      this._next.internalValue = undefined;
      this._success.internalValue = undefined;
      this._true.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
      this._fallback.internalValue = value.fallback;
      this._false.internalValue = value.false;
      this._next.internalValue = value.next;
      this._success.internalValue = value.success;
      this._true.internalValue = value.true;
    }
  }

  // element_id - computed: false, optional: true, required: false
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  public resetElementId() {
    this._elementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback = new AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: AiGatewayDynamicRoutingElementsOutputsFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // false - computed: false, optional: true, required: false
  private _false = new AiGatewayDynamicRoutingElementsOutputsFalseOutputReference(this, "false");
  public get false() {
    return this._false;
  }
  public putFalse(value: AiGatewayDynamicRoutingElementsOutputsFalse) {
    this._false.internalValue = value;
  }
  public resetFalse() {
    this._false.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get falseInput() {
    return this._false.internalValue;
  }

  // next - computed: false, optional: true, required: false
  private _next = new AiGatewayDynamicRoutingElementsOutputsNextOutputReference(this, "next");
  public get next() {
    return this._next;
  }
  public putNext(value: AiGatewayDynamicRoutingElementsOutputsNext) {
    this._next.internalValue = value;
  }
  public resetNext() {
    this._next.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next.internalValue;
  }

  // success - computed: false, optional: true, required: false
  private _success = new AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(this, "success");
  public get success() {
    return this._success;
  }
  public putSuccess(value: AiGatewayDynamicRoutingElementsOutputsSuccess) {
    this._success.internalValue = value;
  }
  public resetSuccess() {
    this._success.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success.internalValue;
  }

  // true - computed: false, optional: true, required: false
  private _true = new AiGatewayDynamicRoutingElementsOutputsTrueOutputReference(this, "true");
  public get true() {
    return this._true;
  }
  public putTrue(value: AiGatewayDynamicRoutingElementsOutputsTrue) {
    this._true.internalValue = value;
  }
  public resetTrue() {
    this._true.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trueInput() {
    return this._true.internalValue;
  }
}
export interface AiGatewayDynamicRoutingElementsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#ai_gateway_dynamic_routing_provider AiGatewayDynamicRouting#ai_gateway_dynamic_routing_provider}
  */
  readonly aiGatewayDynamicRoutingProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#conditions AiGatewayDynamicRouting#conditions}
  */
  readonly conditions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#key AiGatewayDynamicRouting#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#limit AiGatewayDynamicRouting#limit}
  */
  readonly limit?: number;
  /**
  * Available values: "count", "cost".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#limit_type AiGatewayDynamicRouting#limit_type}
  */
  readonly limitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#model AiGatewayDynamicRouting#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#retries AiGatewayDynamicRouting#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#timeout AiGatewayDynamicRouting#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#window AiGatewayDynamicRouting#window}
  */
  readonly window?: number;
}

export function aiGatewayDynamicRoutingElementsPropertiesToTerraform(struct?: AiGatewayDynamicRoutingElementsProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_gateway_dynamic_routing_provider: cdktf.stringToTerraform(struct!.aiGatewayDynamicRoutingProvider),
    conditions: cdktf.stringToTerraform(struct!.conditions),
    key: cdktf.stringToTerraform(struct!.key),
    limit: cdktf.numberToTerraform(struct!.limit),
    limit_type: cdktf.stringToTerraform(struct!.limitType),
    model: cdktf.stringToTerraform(struct!.model),
    retries: cdktf.numberToTerraform(struct!.retries),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    window: cdktf.numberToTerraform(struct!.window),
  }
}


export function aiGatewayDynamicRoutingElementsPropertiesToHclTerraform(struct?: AiGatewayDynamicRoutingElementsProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_gateway_dynamic_routing_provider: {
      value: cdktf.stringToHclTerraform(struct!.aiGatewayDynamicRoutingProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.stringToHclTerraform(struct!.conditions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_type: {
      value: cdktf.stringToHclTerraform(struct!.limitType),
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
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window: {
      value: cdktf.numberToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiGatewayDynamicRoutingElementsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingElementsProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiGatewayDynamicRoutingProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiGatewayDynamicRoutingProvider = this._aiGatewayDynamicRoutingProvider;
    }
    if (this._conditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitType = this._limitType;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingElementsProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiGatewayDynamicRoutingProvider = undefined;
      this._conditions = undefined;
      this._key = undefined;
      this._limit = undefined;
      this._limitType = undefined;
      this._model = undefined;
      this._retries = undefined;
      this._timeout = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiGatewayDynamicRoutingProvider = value.aiGatewayDynamicRoutingProvider;
      this._conditions = value.conditions;
      this._key = value.key;
      this._limit = value.limit;
      this._limitType = value.limitType;
      this._model = value.model;
      this._retries = value.retries;
      this._timeout = value.timeout;
      this._window = value.window;
    }
  }

  // ai_gateway_dynamic_routing_provider - computed: false, optional: true, required: false
  private _aiGatewayDynamicRoutingProvider?: string; 
  public get aiGatewayDynamicRoutingProvider() {
    return this.getStringAttribute('ai_gateway_dynamic_routing_provider');
  }
  public set aiGatewayDynamicRoutingProvider(value: string) {
    this._aiGatewayDynamicRoutingProvider = value;
  }
  public resetAiGatewayDynamicRoutingProvider() {
    this._aiGatewayDynamicRoutingProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiGatewayDynamicRoutingProviderInput() {
    return this._aiGatewayDynamicRoutingProvider;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions?: string; 
  public get conditions() {
    return this.getStringAttribute('conditions');
  }
  public set conditions(value: string) {
    this._conditions = value;
  }
  public resetConditions() {
    this._conditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limit_type - computed: false, optional: true, required: false
  private _limitType?: string; 
  public get limitType() {
    return this.getStringAttribute('limit_type');
  }
  public set limitType(value: string) {
    this._limitType = value;
  }
  public resetLimitType() {
    this._limitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitTypeInput() {
    return this._limitType;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
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

  // window - computed: false, optional: true, required: false
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}
export interface AiGatewayDynamicRoutingElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#id AiGatewayDynamicRouting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#outputs AiGatewayDynamicRouting#outputs}
  */
  readonly outputs: AiGatewayDynamicRoutingElementsOutputs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#properties AiGatewayDynamicRouting#properties}
  */
  readonly properties?: AiGatewayDynamicRoutingElementsProperties;
  /**
  * Available values: "start", "conditional", "percentage", "rate", "model", "end".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#type AiGatewayDynamicRouting#type}
  */
  readonly type: string;
}

export function aiGatewayDynamicRoutingElementsToTerraform(struct?: AiGatewayDynamicRoutingElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    outputs: aiGatewayDynamicRoutingElementsOutputsToTerraform(struct!.outputs),
    properties: aiGatewayDynamicRoutingElementsPropertiesToTerraform(struct!.properties),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function aiGatewayDynamicRoutingElementsToHclTerraform(struct?: AiGatewayDynamicRoutingElements | cdktf.IResolvable): any {
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
    outputs: {
      value: aiGatewayDynamicRoutingElementsOutputsToHclTerraform(struct!.outputs),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayDynamicRoutingElementsOutputs",
    },
    properties: {
      value: aiGatewayDynamicRoutingElementsPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "AiGatewayDynamicRoutingElementsProperties",
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

export class AiGatewayDynamicRoutingElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiGatewayDynamicRoutingElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._outputs.internalValue = undefined;
      this._properties.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._outputs.internalValue = value.outputs;
      this._properties.internalValue = value.properties;
      this._type = value.type;
    }
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

  // outputs - computed: false, optional: false, required: true
  private _outputs = new AiGatewayDynamicRoutingElementsOutputsOutputReference(this, "outputs");
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: AiGatewayDynamicRoutingElementsOutputs) {
    this._outputs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new AiGatewayDynamicRoutingElementsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: AiGatewayDynamicRoutingElementsProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
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

export class AiGatewayDynamicRoutingElementsList extends cdktf.ComplexList {
  public internalValue? : AiGatewayDynamicRoutingElements[] | cdktf.IResolvable

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
  public get(index: number): AiGatewayDynamicRoutingElementsOutputReference {
    return new AiGatewayDynamicRoutingElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiGatewayDynamicRoutingRouteDeployment {
}

export function aiGatewayDynamicRoutingRouteDeploymentToTerraform(struct?: AiGatewayDynamicRoutingRouteDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingRouteDeploymentToHclTerraform(struct?: AiGatewayDynamicRoutingRouteDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingRouteDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingRouteDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingRouteDeployment | undefined) {
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
export interface AiGatewayDynamicRoutingRouteElementsOutputsFallback {
}

export function aiGatewayDynamicRoutingRouteElementsOutputsFallbackToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingRouteElementsOutputsFallbackToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputsFallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputsFallback | undefined) {
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
export interface AiGatewayDynamicRoutingRouteElementsOutputsFalse {
}

export function aiGatewayDynamicRoutingRouteElementsOutputsFalseToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsFalse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingRouteElementsOutputsFalseToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsFalse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputsFalse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputsFalse | undefined) {
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
export interface AiGatewayDynamicRoutingRouteElementsOutputsNext {
}

export function aiGatewayDynamicRoutingRouteElementsOutputsNextToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsNext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingRouteElementsOutputsNextToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsNext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputsNext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputsNext | undefined) {
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
export interface AiGatewayDynamicRoutingRouteElementsOutputsSuccess {
}

export function aiGatewayDynamicRoutingRouteElementsOutputsSuccessToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingRouteElementsOutputsSuccessToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputsSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputsSuccess | undefined) {
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
export interface AiGatewayDynamicRoutingRouteElementsOutputsTrue {
}

export function aiGatewayDynamicRoutingRouteElementsOutputsTrueToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsTrue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingRouteElementsOutputsTrueToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsTrue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputsTrue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputsTrue | undefined) {
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
export interface AiGatewayDynamicRoutingRouteElementsOutputs {
}

export function aiGatewayDynamicRoutingRouteElementsOutputsToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingRouteElementsOutputsToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingRouteElementsOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputs | undefined) {
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
  private _fallback = new AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }

  // false - computed: true, optional: false, required: false
  private _false = new AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference(this, "false");
  public get false() {
    return this._false;
  }

  // next - computed: true, optional: false, required: false
  private _next = new AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference(this, "next");
  public get next() {
    return this._next;
  }

  // success - computed: true, optional: false, required: false
  private _success = new AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference(this, "success");
  public get success() {
    return this._success;
  }

  // true - computed: true, optional: false, required: false
  private _true = new AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference(this, "true");
  public get true() {
    return this._true;
  }
}
export interface AiGatewayDynamicRoutingRouteElementsProperties {
}

export function aiGatewayDynamicRoutingRouteElementsPropertiesToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingRouteElementsPropertiesToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingRouteElementsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingRouteElementsProperties | undefined) {
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
export interface AiGatewayDynamicRoutingRouteElements {
}

export function aiGatewayDynamicRoutingRouteElementsToTerraform(struct?: AiGatewayDynamicRoutingRouteElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingRouteElementsToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingRouteElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiGatewayDynamicRoutingRouteElements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingRouteElements | undefined) {
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
  private _outputs = new AiGatewayDynamicRoutingRouteElementsOutputsOutputReference(this, "outputs");
  public get outputs() {
    return this._outputs;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class AiGatewayDynamicRoutingRouteElementsList extends cdktf.ComplexList {

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
  public get(index: number): AiGatewayDynamicRoutingRouteElementsOutputReference {
    return new AiGatewayDynamicRoutingRouteElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiGatewayDynamicRoutingRouteVersion {
}

export function aiGatewayDynamicRoutingRouteVersionToTerraform(struct?: AiGatewayDynamicRoutingRouteVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingRouteVersionToHclTerraform(struct?: AiGatewayDynamicRoutingRouteVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingRouteVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingRouteVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingRouteVersion | undefined) {
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
export interface AiGatewayDynamicRoutingRoute {
}

export function aiGatewayDynamicRoutingRouteToTerraform(struct?: AiGatewayDynamicRoutingRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingRouteToHclTerraform(struct?: AiGatewayDynamicRoutingRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_tag - computed: true, optional: false, required: false
  public get accountTag() {
    return this.getStringAttribute('account_tag');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deployment - computed: true, optional: false, required: false
  private _deployment = new AiGatewayDynamicRoutingRouteDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }

  // elements - computed: true, optional: false, required: false
  private _elements = new AiGatewayDynamicRoutingRouteElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _version = new AiGatewayDynamicRoutingRouteVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }
}
export interface AiGatewayDynamicRoutingVersion {
}

export function aiGatewayDynamicRoutingVersionToTerraform(struct?: AiGatewayDynamicRoutingVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function aiGatewayDynamicRoutingVersionToHclTerraform(struct?: AiGatewayDynamicRoutingVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AiGatewayDynamicRoutingVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiGatewayDynamicRoutingVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiGatewayDynamicRoutingVersion | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}
*/
export class AiGatewayDynamicRouting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_ai_gateway_dynamic_routing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiGatewayDynamicRouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiGatewayDynamicRouting to import
  * @param importFromId The id of the existing AiGatewayDynamicRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiGatewayDynamicRouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_gateway_dynamic_routing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiGatewayDynamicRoutingConfig
  */
  public constructor(scope: Construct, id: string, config: AiGatewayDynamicRoutingConfig) {
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
    this._elements.internalValue = config.elements;
    this._gatewayId = config.gatewayId;
    this._name = config.name;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deployment - computed: true, optional: false, required: false
  private _deployment = new AiGatewayDynamicRoutingDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }

  // elements - computed: false, optional: false, required: true
  private _elements = new AiGatewayDynamicRoutingElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: AiGatewayDynamicRoutingElements[] | cdktf.IResolvable) {
    this._elements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
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

  // route - computed: true, optional: false, required: false
  private _route = new AiGatewayDynamicRoutingRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getBooleanAttribute('success');
  }

  // version - computed: true, optional: false, required: false
  private _version = new AiGatewayDynamicRoutingVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      elements: cdktf.listMapper(aiGatewayDynamicRoutingElementsToTerraform, false)(this._elements.internalValue),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      name: cdktf.stringToTerraform(this._name),
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
      elements: {
        value: cdktf.listMapperHcl(aiGatewayDynamicRoutingElementsToHclTerraform, false)(this._elements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiGatewayDynamicRoutingElementsList",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
