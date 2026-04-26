import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDexRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rule#account_id DataCloudflareZeroTrustDexRule#account_id}
    */
    readonly accountId?: string;
    /**
    * API Resource UUID tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rule#rule_id DataCloudflareZeroTrustDexRule#rule_id}
    */
    readonly ruleId: string;
}
export interface DataCloudflareZeroTrustDexRuleTargetedTestsData {
}
export declare function dataCloudflareZeroTrustDexRuleTargetedTestsDataToTerraform(struct?: DataCloudflareZeroTrustDexRuleTargetedTestsData): any;
export declare function dataCloudflareZeroTrustDexRuleTargetedTestsDataToHclTerraform(struct?: DataCloudflareZeroTrustDexRuleTargetedTestsData): any;
export declare class DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDexRuleTargetedTestsData | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexRuleTargetedTestsData | undefined);
    get host(): any;
    get kind(): any;
    get method(): any;
}
export interface DataCloudflareZeroTrustDexRuleTargetedTests {
}
export declare function dataCloudflareZeroTrustDexRuleTargetedTestsToTerraform(struct?: DataCloudflareZeroTrustDexRuleTargetedTests): any;
export declare function dataCloudflareZeroTrustDexRuleTargetedTestsToHclTerraform(struct?: DataCloudflareZeroTrustDexRuleTargetedTests): any;
export declare class DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDexRuleTargetedTests | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexRuleTargetedTests | undefined);
    private _data;
    get data(): DataCloudflareZeroTrustDexRuleTargetedTestsDataOutputReference;
    get enabled(): any;
    get name(): any;
    get testId(): any;
}
export declare class DataCloudflareZeroTrustDexRuleTargetedTestsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareZeroTrustDexRuleTargetedTestsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rule cloudflare_zero_trust_dex_rule}
*/
export declare class DataCloudflareZeroTrustDexRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dex_rule";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDexRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDexRule to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDexRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDexRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_rule cloudflare_zero_trust_dex_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDexRuleConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDexRuleConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get description(): any;
    get id(): any;
    get match(): any;
    get name(): any;
    private _ruleId?;
    get ruleId(): string;
    set ruleId(value: string);
    get ruleIdInput(): string;
    private _targetedTests;
    get targetedTests(): DataCloudflareZeroTrustDexRuleTargetedTestsList;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
