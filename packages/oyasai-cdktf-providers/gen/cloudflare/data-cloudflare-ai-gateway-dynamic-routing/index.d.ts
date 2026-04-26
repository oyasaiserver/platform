import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAiGatewayDynamicRoutingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway_dynamic_routing#account_id DataCloudflareAiGatewayDynamicRouting#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway_dynamic_routing#gateway_id DataCloudflareAiGatewayDynamicRouting#gateway_id}
    */
    readonly gatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway_dynamic_routing#id DataCloudflareAiGatewayDynamicRouting#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export interface DataCloudflareAiGatewayDynamicRoutingDeployment {
}
export declare function dataCloudflareAiGatewayDynamicRoutingDeploymentToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingDeployment): any;
export declare function dataCloudflareAiGatewayDynamicRoutingDeploymentToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingDeployment): any;
export declare class DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayDynamicRoutingDeployment | undefined;
    set internalValue(value: DataCloudflareAiGatewayDynamicRoutingDeployment | undefined);
    get createdAt(): any;
    get deploymentId(): any;
    get versionId(): any;
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback {
}
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback): any;
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback): any;
export declare class DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback | undefined;
    set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallback | undefined);
    get elementId(): any;
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse {
}
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse): any;
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse): any;
export declare class DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse | undefined;
    set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalse | undefined);
    get elementId(): any;
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext {
}
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsNextToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext): any;
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsNextToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext): any;
export declare class DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext | undefined;
    set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputsNext | undefined);
    get elementId(): any;
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess {
}
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess): any;
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess): any;
export declare class DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess | undefined;
    set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccess | undefined);
    get elementId(): any;
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue {
}
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue): any;
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue): any;
export declare class DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue | undefined;
    set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrue | undefined);
    get elementId(): any;
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsOutputs {
}
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputs): any;
export declare function dataCloudflareAiGatewayDynamicRoutingElementsOutputsToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsOutputs): any;
export declare class DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsOutputs | undefined;
    set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsOutputs | undefined);
    get elementId(): any;
    private _fallback;
    get fallback(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsFallbackOutputReference;
    private _false;
    get false(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsFalseOutputReference;
    private _next;
    get next(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsNextOutputReference;
    private _success;
    get success(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsSuccessOutputReference;
    private _true;
    get true(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsTrueOutputReference;
}
export interface DataCloudflareAiGatewayDynamicRoutingElementsProperties {
}
export declare function dataCloudflareAiGatewayDynamicRoutingElementsPropertiesToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsProperties): any;
export declare function dataCloudflareAiGatewayDynamicRoutingElementsPropertiesToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElementsProperties): any;
export declare class DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayDynamicRoutingElementsProperties | undefined;
    set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElementsProperties | undefined);
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
export interface DataCloudflareAiGatewayDynamicRoutingElements {
}
export declare function dataCloudflareAiGatewayDynamicRoutingElementsToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElements): any;
export declare function dataCloudflareAiGatewayDynamicRoutingElementsToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingElements): any;
export declare class DataCloudflareAiGatewayDynamicRoutingElementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAiGatewayDynamicRoutingElements | undefined;
    set internalValue(value: DataCloudflareAiGatewayDynamicRoutingElements | undefined);
    get id(): any;
    private _outputs;
    get outputs(): DataCloudflareAiGatewayDynamicRoutingElementsOutputsOutputReference;
    private _properties;
    get properties(): DataCloudflareAiGatewayDynamicRoutingElementsPropertiesOutputReference;
    get type(): any;
}
export declare class DataCloudflareAiGatewayDynamicRoutingElementsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareAiGatewayDynamicRoutingElementsOutputReference;
}
export interface DataCloudflareAiGatewayDynamicRoutingVersion {
}
export declare function dataCloudflareAiGatewayDynamicRoutingVersionToTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingVersion): any;
export declare function dataCloudflareAiGatewayDynamicRoutingVersionToHclTerraform(struct?: DataCloudflareAiGatewayDynamicRoutingVersion): any;
export declare class DataCloudflareAiGatewayDynamicRoutingVersionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAiGatewayDynamicRoutingVersion | undefined;
    set internalValue(value: DataCloudflareAiGatewayDynamicRoutingVersion | undefined);
    get active(): any;
    get createdAt(): any;
    get data(): any;
    get versionId(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}
*/
export declare class DataCloudflareAiGatewayDynamicRouting extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_ai_gateway_dynamic_routing";
    /**
    * Generates CDKTF code for importing a DataCloudflareAiGatewayDynamicRouting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiGatewayDynamicRouting to import
    * @param importFromId The id of the existing DataCloudflareAiGatewayDynamicRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiGatewayDynamicRouting to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiGatewayDynamicRoutingConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareAiGatewayDynamicRoutingConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    private _deployment;
    get deployment(): DataCloudflareAiGatewayDynamicRoutingDeploymentOutputReference;
    private _elements;
    get elements(): DataCloudflareAiGatewayDynamicRoutingElementsList;
    private _gatewayId?;
    get gatewayId(): string;
    set gatewayId(value: string);
    get gatewayIdInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get modifiedAt(): any;
    get name(): any;
    private _version;
    get version(): DataCloudflareAiGatewayDynamicRoutingVersionOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
