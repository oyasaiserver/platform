import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCloudConnectorRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloud_connector_rules#zone_id DataCloudflareCloudConnectorRules#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareCloudConnectorRulesRulesParameters {
}
export declare function dataCloudflareCloudConnectorRulesRulesParametersToTerraform(struct?: DataCloudflareCloudConnectorRulesRulesParameters): any;
export declare function dataCloudflareCloudConnectorRulesRulesParametersToHclTerraform(struct?: DataCloudflareCloudConnectorRulesRulesParameters): any;
export declare class DataCloudflareCloudConnectorRulesRulesParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCloudConnectorRulesRulesParameters | undefined;
    set internalValue(value: DataCloudflareCloudConnectorRulesRulesParameters | undefined);
    get host(): any;
}
export interface DataCloudflareCloudConnectorRulesRules {
}
export declare function dataCloudflareCloudConnectorRulesRulesToTerraform(struct?: DataCloudflareCloudConnectorRulesRules): any;
export declare function dataCloudflareCloudConnectorRulesRulesToHclTerraform(struct?: DataCloudflareCloudConnectorRulesRules): any;
export declare class DataCloudflareCloudConnectorRulesRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCloudConnectorRulesRules | undefined;
    set internalValue(value: DataCloudflareCloudConnectorRulesRules | undefined);
    get description(): any;
    get enabled(): any;
    get expression(): any;
    get id(): any;
    private _parameters;
    get parameters(): DataCloudflareCloudConnectorRulesRulesParametersOutputReference;
    get provider(): any;
}
export declare class DataCloudflareCloudConnectorRulesRulesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCloudConnectorRulesRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloud_connector_rules cloudflare_cloud_connector_rules}
*/
export declare class DataCloudflareCloudConnectorRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_cloud_connector_rules";
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudConnectorRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudConnectorRules to import
    * @param importFromId The id of the existing DataCloudflareCloudConnectorRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloud_connector_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudConnectorRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloud_connector_rules cloudflare_cloud_connector_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudConnectorRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCloudConnectorRulesConfig);
    get id(): any;
    private _rules;
    get rules(): DataCloudflareCloudConnectorRulesRulesList;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
