import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLeakedCredentialCheckRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rules#max_items DataCloudflareLeakedCredentialCheckRules#max_items}
    */
    readonly maxItems?: number;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rules#zone_id DataCloudflareLeakedCredentialCheckRules#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareLeakedCredentialCheckRulesResult {
}
export declare function dataCloudflareLeakedCredentialCheckRulesResultToTerraform(struct?: DataCloudflareLeakedCredentialCheckRulesResult): any;
export declare function dataCloudflareLeakedCredentialCheckRulesResultToHclTerraform(struct?: DataCloudflareLeakedCredentialCheckRulesResult): any;
export declare class DataCloudflareLeakedCredentialCheckRulesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareLeakedCredentialCheckRulesResult | undefined;
    set internalValue(value: DataCloudflareLeakedCredentialCheckRulesResult | undefined);
    get id(): any;
    get password(): any;
    get username(): any;
}
export declare class DataCloudflareLeakedCredentialCheckRulesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareLeakedCredentialCheckRulesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rules cloudflare_leaked_credential_check_rules}
*/
export declare class DataCloudflareLeakedCredentialCheckRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_leaked_credential_check_rules";
    /**
    * Generates CDKTF code for importing a DataCloudflareLeakedCredentialCheckRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLeakedCredentialCheckRules to import
    * @param importFromId The id of the existing DataCloudflareLeakedCredentialCheckRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLeakedCredentialCheckRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/leaked_credential_check_rules cloudflare_leaked_credential_check_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLeakedCredentialCheckRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareLeakedCredentialCheckRulesConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareLeakedCredentialCheckRulesResultList;
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
