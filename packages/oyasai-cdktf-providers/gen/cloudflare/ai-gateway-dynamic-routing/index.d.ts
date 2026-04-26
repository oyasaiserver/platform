import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AiGatewayDynamicRoutingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}
    */
    readonly elements: AiGatewayDynamicRoutingElements[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}
    */
    readonly gatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}
    */
    readonly name: string;
}
export interface AiGatewayDynamicRoutingDeployment {
}
export declare function aiGatewayDynamicRoutingDeploymentToTerraform(struct?: AiGatewayDynamicRoutingDeployment): any;
export declare function aiGatewayDynamicRoutingDeploymentToHclTerraform(struct?: AiGatewayDynamicRoutingDeployment): any;
export declare class AiGatewayDynamicRoutingDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingDeployment | undefined;
    set internalValue(value: AiGatewayDynamicRoutingDeployment | undefined);
    get createdAt(): any;
    get deploymentId(): any;
    get versionId(): any;
}
export interface AiGatewayDynamicRoutingElementsOutputsFallback {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
    */
    readonly elementId: string;
}
export declare function aiGatewayDynamicRoutingElementsOutputsFallbackToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsFallback | cdktf.IResolvable): any;
export declare function aiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsFallback | cdktf.IResolvable): any;
export declare class AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingElementsOutputsFallback | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayDynamicRoutingElementsOutputsFallback | cdktf.IResolvable | undefined);
    private _elementId?;
    get elementId(): string;
    set elementId(value: string);
    get elementIdInput(): string;
}
export interface AiGatewayDynamicRoutingElementsOutputsFalse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
    */
    readonly elementId: string;
}
export declare function aiGatewayDynamicRoutingElementsOutputsFalseToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsFalse | cdktf.IResolvable): any;
export declare function aiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsFalse | cdktf.IResolvable): any;
export declare class AiGatewayDynamicRoutingElementsOutputsFalseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingElementsOutputsFalse | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayDynamicRoutingElementsOutputsFalse | cdktf.IResolvable | undefined);
    private _elementId?;
    get elementId(): string;
    set elementId(value: string);
    get elementIdInput(): string;
}
export interface AiGatewayDynamicRoutingElementsOutputsNext {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
    */
    readonly elementId: string;
}
export declare function aiGatewayDynamicRoutingElementsOutputsNextToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsNext | cdktf.IResolvable): any;
export declare function aiGatewayDynamicRoutingElementsOutputsNextToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsNext | cdktf.IResolvable): any;
export declare class AiGatewayDynamicRoutingElementsOutputsNextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingElementsOutputsNext | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayDynamicRoutingElementsOutputsNext | cdktf.IResolvable | undefined);
    private _elementId?;
    get elementId(): string;
    set elementId(value: string);
    get elementIdInput(): string;
}
export interface AiGatewayDynamicRoutingElementsOutputsSuccess {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
    */
    readonly elementId: string;
}
export declare function aiGatewayDynamicRoutingElementsOutputsSuccessToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsSuccess | cdktf.IResolvable): any;
export declare function aiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsSuccess | cdktf.IResolvable): any;
export declare class AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingElementsOutputsSuccess | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayDynamicRoutingElementsOutputsSuccess | cdktf.IResolvable | undefined);
    private _elementId?;
    get elementId(): string;
    set elementId(value: string);
    get elementIdInput(): string;
}
export interface AiGatewayDynamicRoutingElementsOutputsTrue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
    */
    readonly elementId: string;
}
export declare function aiGatewayDynamicRoutingElementsOutputsTrueToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsTrue | cdktf.IResolvable): any;
export declare function aiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputsTrue | cdktf.IResolvable): any;
export declare class AiGatewayDynamicRoutingElementsOutputsTrueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingElementsOutputsTrue | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayDynamicRoutingElementsOutputsTrue | cdktf.IResolvable | undefined);
    private _elementId?;
    get elementId(): string;
    set elementId(value: string);
    get elementIdInput(): string;
}
export interface AiGatewayDynamicRoutingElementsOutputs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}
    */
    readonly elementId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#fallback AiGatewayDynamicRouting#fallback}
    */
    readonly fallback?: AiGatewayDynamicRoutingElementsOutputsFallback;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#false AiGatewayDynamicRouting#false}
    */
    readonly false?: AiGatewayDynamicRoutingElementsOutputsFalse;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#next AiGatewayDynamicRouting#next}
    */
    readonly next?: AiGatewayDynamicRoutingElementsOutputsNext;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#success AiGatewayDynamicRouting#success}
    */
    readonly success?: AiGatewayDynamicRoutingElementsOutputsSuccess;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#true AiGatewayDynamicRouting#true}
    */
    readonly true?: AiGatewayDynamicRoutingElementsOutputsTrue;
}
export declare function aiGatewayDynamicRoutingElementsOutputsToTerraform(struct?: AiGatewayDynamicRoutingElementsOutputs | cdktf.IResolvable): any;
export declare function aiGatewayDynamicRoutingElementsOutputsToHclTerraform(struct?: AiGatewayDynamicRoutingElementsOutputs | cdktf.IResolvable): any;
export declare class AiGatewayDynamicRoutingElementsOutputsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingElementsOutputs | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayDynamicRoutingElementsOutputs | cdktf.IResolvable | undefined);
    private _elementId?;
    get elementId(): string;
    set elementId(value: string);
    resetElementId(): void;
    get elementIdInput(): string;
    private _fallback;
    get fallback(): AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference;
    putFallback(value: AiGatewayDynamicRoutingElementsOutputsFallback): void;
    resetFallback(): void;
    get fallbackInput(): any;
    private _false;
    get false(): AiGatewayDynamicRoutingElementsOutputsFalseOutputReference;
    putFalse(value: AiGatewayDynamicRoutingElementsOutputsFalse): void;
    resetFalse(): void;
    get falseInput(): any;
    private _next;
    get next(): AiGatewayDynamicRoutingElementsOutputsNextOutputReference;
    putNext(value: AiGatewayDynamicRoutingElementsOutputsNext): void;
    resetNext(): void;
    get nextInput(): any;
    private _success;
    get success(): AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference;
    putSuccess(value: AiGatewayDynamicRoutingElementsOutputsSuccess): void;
    resetSuccess(): void;
    get successInput(): any;
    private _true;
    get true(): AiGatewayDynamicRoutingElementsOutputsTrueOutputReference;
    putTrue(value: AiGatewayDynamicRoutingElementsOutputsTrue): void;
    resetTrue(): void;
    get trueInput(): any;
}
export interface AiGatewayDynamicRoutingElementsProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#ai_gateway_dynamic_routing_provider AiGatewayDynamicRouting#ai_gateway_dynamic_routing_provider}
    */
    readonly aiGatewayDynamicRoutingProvider?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#conditions AiGatewayDynamicRouting#conditions}
    */
    readonly conditions?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#key AiGatewayDynamicRouting#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#limit AiGatewayDynamicRouting#limit}
    */
    readonly limit?: number;
    /**
    * Available values: "count", "cost".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#limit_type AiGatewayDynamicRouting#limit_type}
    */
    readonly limitType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#model AiGatewayDynamicRouting#model}
    */
    readonly model?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#retries AiGatewayDynamicRouting#retries}
    */
    readonly retries?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#timeout AiGatewayDynamicRouting#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#window AiGatewayDynamicRouting#window}
    */
    readonly window?: number;
}
export declare function aiGatewayDynamicRoutingElementsPropertiesToTerraform(struct?: AiGatewayDynamicRoutingElementsProperties | cdktf.IResolvable): any;
export declare function aiGatewayDynamicRoutingElementsPropertiesToHclTerraform(struct?: AiGatewayDynamicRoutingElementsProperties | cdktf.IResolvable): any;
export declare class AiGatewayDynamicRoutingElementsPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingElementsProperties | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayDynamicRoutingElementsProperties | cdktf.IResolvable | undefined);
    private _aiGatewayDynamicRoutingProvider?;
    get aiGatewayDynamicRoutingProvider(): string;
    set aiGatewayDynamicRoutingProvider(value: string);
    resetAiGatewayDynamicRoutingProvider(): void;
    get aiGatewayDynamicRoutingProviderInput(): string;
    private _conditions?;
    get conditions(): string;
    set conditions(value: string);
    resetConditions(): void;
    get conditionsInput(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string;
    private _limit?;
    get limit(): number;
    set limit(value: number);
    resetLimit(): void;
    get limitInput(): number;
    private _limitType?;
    get limitType(): string;
    set limitType(value: string);
    resetLimitType(): void;
    get limitTypeInput(): string;
    private _model?;
    get model(): string;
    set model(value: string);
    resetModel(): void;
    get modelInput(): string;
    private _retries?;
    get retries(): number;
    set retries(value: number);
    resetRetries(): void;
    get retriesInput(): number;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number;
    private _window?;
    get window(): number;
    set window(value: number);
    resetWindow(): void;
    get windowInput(): number;
}
export interface AiGatewayDynamicRoutingElements {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#id AiGatewayDynamicRouting#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#outputs AiGatewayDynamicRouting#outputs}
    */
    readonly outputs: AiGatewayDynamicRoutingElementsOutputs;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#properties AiGatewayDynamicRouting#properties}
    */
    readonly properties?: AiGatewayDynamicRoutingElementsProperties;
    /**
    * Available values: "start", "conditional", "percentage", "rate", "model", "end".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#type AiGatewayDynamicRouting#type}
    */
    readonly type: string;
}
export declare function aiGatewayDynamicRoutingElementsToTerraform(struct?: AiGatewayDynamicRoutingElements | cdktf.IResolvable): any;
export declare function aiGatewayDynamicRoutingElementsToHclTerraform(struct?: AiGatewayDynamicRoutingElements | cdktf.IResolvable): any;
export declare class AiGatewayDynamicRoutingElementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AiGatewayDynamicRoutingElements | cdktf.IResolvable | undefined;
    set internalValue(value: AiGatewayDynamicRoutingElements | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _outputs;
    get outputs(): AiGatewayDynamicRoutingElementsOutputsOutputReference;
    putOutputs(value: AiGatewayDynamicRoutingElementsOutputs): void;
    get outputsInput(): any;
    private _properties;
    get properties(): AiGatewayDynamicRoutingElementsPropertiesOutputReference;
    putProperties(value: AiGatewayDynamicRoutingElementsProperties): void;
    resetProperties(): void;
    get propertiesInput(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export declare class AiGatewayDynamicRoutingElementsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AiGatewayDynamicRoutingElements[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AiGatewayDynamicRoutingElementsOutputReference;
}
export interface AiGatewayDynamicRoutingRouteDeployment {
}
export declare function aiGatewayDynamicRoutingRouteDeploymentToTerraform(struct?: AiGatewayDynamicRoutingRouteDeployment): any;
export declare function aiGatewayDynamicRoutingRouteDeploymentToHclTerraform(struct?: AiGatewayDynamicRoutingRouteDeployment): any;
export declare class AiGatewayDynamicRoutingRouteDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingRouteDeployment | undefined;
    set internalValue(value: AiGatewayDynamicRoutingRouteDeployment | undefined);
    get createdAt(): any;
    get deploymentId(): any;
    get versionId(): any;
}
export interface AiGatewayDynamicRoutingRouteElementsOutputsFallback {
}
export declare function aiGatewayDynamicRoutingRouteElementsOutputsFallbackToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsFallback): any;
export declare function aiGatewayDynamicRoutingRouteElementsOutputsFallbackToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsFallback): any;
export declare class AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputsFallback | undefined;
    set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputsFallback | undefined);
    get elementId(): any;
}
export interface AiGatewayDynamicRoutingRouteElementsOutputsFalse {
}
export declare function aiGatewayDynamicRoutingRouteElementsOutputsFalseToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsFalse): any;
export declare function aiGatewayDynamicRoutingRouteElementsOutputsFalseToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsFalse): any;
export declare class AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputsFalse | undefined;
    set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputsFalse | undefined);
    get elementId(): any;
}
export interface AiGatewayDynamicRoutingRouteElementsOutputsNext {
}
export declare function aiGatewayDynamicRoutingRouteElementsOutputsNextToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsNext): any;
export declare function aiGatewayDynamicRoutingRouteElementsOutputsNextToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsNext): any;
export declare class AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputsNext | undefined;
    set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputsNext | undefined);
    get elementId(): any;
}
export interface AiGatewayDynamicRoutingRouteElementsOutputsSuccess {
}
export declare function aiGatewayDynamicRoutingRouteElementsOutputsSuccessToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsSuccess): any;
export declare function aiGatewayDynamicRoutingRouteElementsOutputsSuccessToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsSuccess): any;
export declare class AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputsSuccess | undefined;
    set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputsSuccess | undefined);
    get elementId(): any;
}
export interface AiGatewayDynamicRoutingRouteElementsOutputsTrue {
}
export declare function aiGatewayDynamicRoutingRouteElementsOutputsTrueToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsTrue): any;
export declare function aiGatewayDynamicRoutingRouteElementsOutputsTrueToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputsTrue): any;
export declare class AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputsTrue | undefined;
    set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputsTrue | undefined);
    get elementId(): any;
}
export interface AiGatewayDynamicRoutingRouteElementsOutputs {
}
export declare function aiGatewayDynamicRoutingRouteElementsOutputsToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputs): any;
export declare function aiGatewayDynamicRoutingRouteElementsOutputsToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsOutputs): any;
export declare class AiGatewayDynamicRoutingRouteElementsOutputsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingRouteElementsOutputs | undefined;
    set internalValue(value: AiGatewayDynamicRoutingRouteElementsOutputs | undefined);
    get elementId(): any;
    private _fallback;
    get fallback(): AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference;
    private _false;
    get false(): AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference;
    private _next;
    get next(): AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference;
    private _success;
    get success(): AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference;
    private _true;
    get true(): AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference;
}
export interface AiGatewayDynamicRoutingRouteElementsProperties {
}
export declare function aiGatewayDynamicRoutingRouteElementsPropertiesToTerraform(struct?: AiGatewayDynamicRoutingRouteElementsProperties): any;
export declare function aiGatewayDynamicRoutingRouteElementsPropertiesToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElementsProperties): any;
export declare class AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingRouteElementsProperties | undefined;
    set internalValue(value: AiGatewayDynamicRoutingRouteElementsProperties | undefined);
    get aiGatewayDynamicRoutingProvider(): any;
    get conditions(): any;
    get key(): any;
    get limit(): any;
    get limitType(): any;
    get model(): any;
    get retries(): any;
    get timeout(): any;
    get window(): any;
}
export interface AiGatewayDynamicRoutingRouteElements {
}
export declare function aiGatewayDynamicRoutingRouteElementsToTerraform(struct?: AiGatewayDynamicRoutingRouteElements): any;
export declare function aiGatewayDynamicRoutingRouteElementsToHclTerraform(struct?: AiGatewayDynamicRoutingRouteElements): any;
export declare class AiGatewayDynamicRoutingRouteElementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AiGatewayDynamicRoutingRouteElements | undefined;
    set internalValue(value: AiGatewayDynamicRoutingRouteElements | undefined);
    get id(): any;
    private _outputs;
    get outputs(): AiGatewayDynamicRoutingRouteElementsOutputsOutputReference;
    private _properties;
    get properties(): AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference;
    get type(): any;
}
export declare class AiGatewayDynamicRoutingRouteElementsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AiGatewayDynamicRoutingRouteElementsOutputReference;
}
export interface AiGatewayDynamicRoutingRouteVersion {
}
export declare function aiGatewayDynamicRoutingRouteVersionToTerraform(struct?: AiGatewayDynamicRoutingRouteVersion): any;
export declare function aiGatewayDynamicRoutingRouteVersionToHclTerraform(struct?: AiGatewayDynamicRoutingRouteVersion): any;
export declare class AiGatewayDynamicRoutingRouteVersionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingRouteVersion | undefined;
    set internalValue(value: AiGatewayDynamicRoutingRouteVersion | undefined);
    get active(): any;
    get createdAt(): any;
    get data(): any;
    get versionId(): any;
}
export interface AiGatewayDynamicRoutingRoute {
}
export declare function aiGatewayDynamicRoutingRouteToTerraform(struct?: AiGatewayDynamicRoutingRoute): any;
export declare function aiGatewayDynamicRoutingRouteToHclTerraform(struct?: AiGatewayDynamicRoutingRoute): any;
export declare class AiGatewayDynamicRoutingRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingRoute | undefined;
    set internalValue(value: AiGatewayDynamicRoutingRoute | undefined);
    get accountTag(): any;
    get createdAt(): any;
    private _deployment;
    get deployment(): AiGatewayDynamicRoutingRouteDeploymentOutputReference;
    private _elements;
    get elements(): AiGatewayDynamicRoutingRouteElementsList;
    get gatewayId(): any;
    get id(): any;
    get modifiedAt(): any;
    get name(): any;
    private _version;
    get version(): AiGatewayDynamicRoutingRouteVersionOutputReference;
}
export interface AiGatewayDynamicRoutingVersion {
}
export declare function aiGatewayDynamicRoutingVersionToTerraform(struct?: AiGatewayDynamicRoutingVersion): any;
export declare function aiGatewayDynamicRoutingVersionToHclTerraform(struct?: AiGatewayDynamicRoutingVersion): any;
export declare class AiGatewayDynamicRoutingVersionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AiGatewayDynamicRoutingVersion | undefined;
    set internalValue(value: AiGatewayDynamicRoutingVersion | undefined);
    get active(): any;
    get createdAt(): any;
    get data(): any;
    get versionId(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}
*/
export declare class AiGatewayDynamicRouting extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_ai_gateway_dynamic_routing";
    /**
    * Generates CDKTF code for importing a AiGatewayDynamicRouting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AiGatewayDynamicRouting to import
    * @param importFromId The id of the existing AiGatewayDynamicRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AiGatewayDynamicRouting to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AiGatewayDynamicRoutingConfig
    */
    constructor(scope: Construct, id: string, config: AiGatewayDynamicRoutingConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    private _deployment;
    get deployment(): AiGatewayDynamicRoutingDeploymentOutputReference;
    private _elements;
    get elements(): AiGatewayDynamicRoutingElementsList;
    putElements(value: AiGatewayDynamicRoutingElements[] | cdktf.IResolvable): void;
    get elementsInput(): any;
    private _gatewayId?;
    get gatewayId(): string;
    set gatewayId(value: string);
    get gatewayIdInput(): string;
    get id(): any;
    get modifiedAt(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _route;
    get route(): AiGatewayDynamicRoutingRouteOutputReference;
    get success(): any;
    private _version;
    get version(): AiGatewayDynamicRoutingVersionOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
