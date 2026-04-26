import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDexRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_rule#account_id ZeroTrustDexRule#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_rule#description ZeroTrustDexRule#description}
    */
    readonly description?: string;
    /**
    * The wirefilter expression to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_rule#match ZeroTrustDexRule#match}
    */
    readonly match: string;
    /**
    * The name of the Rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_rule#name ZeroTrustDexRule#name}
    */
    readonly name: string;
}
export interface ZeroTrustDexRuleTargetedTestsData {
}
export declare function zeroTrustDexRuleTargetedTestsDataToTerraform(struct?: ZeroTrustDexRuleTargetedTestsData): any;
export declare function zeroTrustDexRuleTargetedTestsDataToHclTerraform(struct?: ZeroTrustDexRuleTargetedTestsData): any;
export declare class ZeroTrustDexRuleTargetedTestsDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDexRuleTargetedTestsData | undefined;
    set internalValue(value: ZeroTrustDexRuleTargetedTestsData | undefined);
    get host(): any;
    get kind(): any;
    get method(): any;
}
export interface ZeroTrustDexRuleTargetedTests {
}
export declare function zeroTrustDexRuleTargetedTestsToTerraform(struct?: ZeroTrustDexRuleTargetedTests): any;
export declare function zeroTrustDexRuleTargetedTestsToHclTerraform(struct?: ZeroTrustDexRuleTargetedTests): any;
export declare class ZeroTrustDexRuleTargetedTestsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDexRuleTargetedTests | undefined;
    set internalValue(value: ZeroTrustDexRuleTargetedTests | undefined);
    private _data;
    get data(): ZeroTrustDexRuleTargetedTestsDataOutputReference;
    get enabled(): any;
    get name(): any;
    get testId(): any;
}
export declare class ZeroTrustDexRuleTargetedTestsList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustDexRuleTargetedTestsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_rule cloudflare_zero_trust_dex_rule}
*/
export declare class ZeroTrustDexRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_dex_rule";
    /**
    * Generates CDKTF code for importing a ZeroTrustDexRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDexRule to import
    * @param importFromId The id of the existing ZeroTrustDexRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDexRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_rule cloudflare_zero_trust_dex_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDexRuleConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDexRuleConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _match?;
    get match(): string;
    set match(value: string);
    get matchInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _targetedTests;
    get targetedTests(): ZeroTrustDexRuleTargetedTestsList;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
