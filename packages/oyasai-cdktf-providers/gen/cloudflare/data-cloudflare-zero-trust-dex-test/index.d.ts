import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDexTestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test#account_id DataCloudflareZeroTrustDexTest#account_id}
    */
    readonly accountId?: string;
    /**
    * The unique identifier for the test.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test#dex_test_id DataCloudflareZeroTrustDexTest#dex_test_id}
    */
    readonly dexTestId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test#filter DataCloudflareZeroTrustDexTest#filter}
    */
    readonly filter?: DataCloudflareZeroTrustDexTestFilter;
    /**
    * DEX rules targeted by this test
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test#target_policies DataCloudflareZeroTrustDexTest#target_policies}
    */
    readonly targetPolicies?: DataCloudflareZeroTrustDexTestTargetPolicies[] | cdktf.IResolvable;
}
export interface DataCloudflareZeroTrustDexTestData {
}
export declare function dataCloudflareZeroTrustDexTestDataToTerraform(struct?: DataCloudflareZeroTrustDexTestData): any;
export declare function dataCloudflareZeroTrustDexTestDataToHclTerraform(struct?: DataCloudflareZeroTrustDexTestData): any;
export declare class DataCloudflareZeroTrustDexTestDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDexTestData | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexTestData | undefined);
    get host(): any;
    get kind(): any;
    get method(): any;
}
export interface DataCloudflareZeroTrustDexTestFilter {
    /**
    * Filter by test type
    * Available values: "http", "traceroute".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test#kind DataCloudflareZeroTrustDexTest#kind}
    */
    readonly kind?: string;
    /**
    * Filter by test name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test#test_name DataCloudflareZeroTrustDexTest#test_name}
    */
    readonly testName?: string;
}
export declare function dataCloudflareZeroTrustDexTestFilterToTerraform(struct?: DataCloudflareZeroTrustDexTestFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustDexTestFilterToHclTerraform(struct?: DataCloudflareZeroTrustDexTestFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustDexTestFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDexTestFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexTestFilter | cdktf.IResolvable | undefined);
    private _kind?;
    get kind(): string;
    set kind(value: string);
    resetKind(): void;
    get kindInput(): string;
    private _testName?;
    get testName(): string;
    set testName(value: string);
    resetTestName(): void;
    get testNameInput(): string;
}
export interface DataCloudflareZeroTrustDexTestTargetPolicies {
}
export declare function dataCloudflareZeroTrustDexTestTargetPoliciesToTerraform(struct?: DataCloudflareZeroTrustDexTestTargetPolicies | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustDexTestTargetPoliciesToHclTerraform(struct?: DataCloudflareZeroTrustDexTestTargetPolicies | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDexTestTargetPolicies | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexTestTargetPolicies | cdktf.IResolvable | undefined);
    get default(): any;
    get id(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustDexTestTargetPoliciesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataCloudflareZeroTrustDexTestTargetPolicies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test cloudflare_zero_trust_dex_test}
*/
export declare class DataCloudflareZeroTrustDexTest extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dex_test";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDexTest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDexTest to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDexTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDexTest to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_test cloudflare_zero_trust_dex_test} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDexTestConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDexTestConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _data;
    get data(): DataCloudflareZeroTrustDexTestDataOutputReference;
    get description(): any;
    private _dexTestId?;
    get dexTestId(): string;
    set dexTestId(value: string);
    resetDexTestId(): void;
    get dexTestIdInput(): string;
    get enabled(): any;
    private _filter;
    get filter(): DataCloudflareZeroTrustDexTestFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustDexTestFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get interval(): any;
    get name(): any;
    private _targetPolicies;
    get targetPolicies(): DataCloudflareZeroTrustDexTestTargetPoliciesList;
    putTargetPolicies(value: DataCloudflareZeroTrustDexTestTargetPolicies[] | cdktf.IResolvable): void;
    resetTargetPolicies(): void;
    get targetPoliciesInput(): any;
    get targeted(): any;
    get testId(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
