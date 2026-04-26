import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudConnectorRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules#rules CloudConnectorRules#rules}
    */
    readonly rules?: CloudConnectorRulesRules[] | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules#zone_id CloudConnectorRules#zone_id}
    */
    readonly zoneId: string;
}
export interface CloudConnectorRulesRulesParameters {
    /**
    * Host to perform Cloud Connection to
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules#host CloudConnectorRules#host}
    */
    readonly host?: string;
}
export declare function cloudConnectorRulesRulesParametersToTerraform(struct?: CloudConnectorRulesRulesParameters | cdktf.IResolvable): any;
export declare function cloudConnectorRulesRulesParametersToHclTerraform(struct?: CloudConnectorRulesRulesParameters | cdktf.IResolvable): any;
export declare class CloudConnectorRulesRulesParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudConnectorRulesRulesParameters | cdktf.IResolvable | undefined;
    set internalValue(value: CloudConnectorRulesRulesParameters | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
}
export interface CloudConnectorRulesRules {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules#description CloudConnectorRules#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules#enabled CloudConnectorRules#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules#expression CloudConnectorRules#expression}
    */
    readonly expression?: string;
    /**
    * Parameters of Cloud Connector Rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules#parameters CloudConnectorRules#parameters}
    */
    readonly parameters?: CloudConnectorRulesRulesParameters;
    /**
    * Cloud Provider type
    * Available values: "aws_s3", "cloudflare_r2", "gcp_storage", "azure_storage".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules#provider CloudConnectorRules#provider}
    */
    readonly provider?: string;
}
export declare function cloudConnectorRulesRulesToTerraform(struct?: CloudConnectorRulesRules | cdktf.IResolvable): any;
export declare function cloudConnectorRulesRulesToHclTerraform(struct?: CloudConnectorRulesRules | cdktf.IResolvable): any;
export declare class CloudConnectorRulesRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudConnectorRulesRules | cdktf.IResolvable | undefined;
    set internalValue(value: CloudConnectorRulesRules | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string;
    get id(): any;
    private _parameters;
    get parameters(): CloudConnectorRulesRulesParametersOutputReference;
    putParameters(value: CloudConnectorRulesRulesParameters): void;
    resetParameters(): void;
    get parametersInput(): any;
    private _provider?;
    get provider(): string;
    set provider(value: string);
    resetProvider(): void;
    get providerInput(): string;
}
export declare class CloudConnectorRulesRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudConnectorRulesRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudConnectorRulesRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules cloudflare_cloud_connector_rules}
*/
export declare class CloudConnectorRules extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_cloud_connector_rules";
    /**
    * Generates CDKTF code for importing a CloudConnectorRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudConnectorRules to import
    * @param importFromId The id of the existing CloudConnectorRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudConnectorRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloud_connector_rules cloudflare_cloud_connector_rules} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudConnectorRulesConfig
    */
    constructor(scope: Construct, id: string, config: CloudConnectorRulesConfig);
    get id(): any;
    private _rules;
    get rules(): CloudConnectorRulesRulesList;
    putRules(value: CloudConnectorRulesRules[] | cdktf.IResolvable): void;
    resetRules(): void;
    get rulesInput(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
