import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDexTestsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests#account_id DataCloudflareZeroTrustDexTests#account_id}
    */
    readonly accountId?: string;
    /**
    * Filter by test type
    * Available values: "http", "traceroute".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests#kind DataCloudflareZeroTrustDexTests#kind}
    */
    readonly kind?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests#max_items DataCloudflareZeroTrustDexTests#max_items}
    */
    readonly maxItems?: number;
    /**
    * Filter by test name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests#test_name DataCloudflareZeroTrustDexTests#test_name}
    */
    readonly testName?: string;
}
export interface DataCloudflareZeroTrustDexTestsResultData {
}
export declare function dataCloudflareZeroTrustDexTestsResultDataToTerraform(struct?: DataCloudflareZeroTrustDexTestsResultData): any;
export declare function dataCloudflareZeroTrustDexTestsResultDataToHclTerraform(struct?: DataCloudflareZeroTrustDexTestsResultData): any;
export declare class DataCloudflareZeroTrustDexTestsResultDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDexTestsResultData | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexTestsResultData | undefined);
    get host(): any;
    get kind(): any;
    get method(): any;
}
export interface DataCloudflareZeroTrustDexTestsResultTargetPolicies {
}
export declare function dataCloudflareZeroTrustDexTestsResultTargetPoliciesToTerraform(struct?: DataCloudflareZeroTrustDexTestsResultTargetPolicies | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustDexTestsResultTargetPoliciesToHclTerraform(struct?: DataCloudflareZeroTrustDexTestsResultTargetPolicies | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDexTestsResultTargetPolicies | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexTestsResultTargetPolicies | cdktf.IResolvable | undefined);
    get default(): any;
    get id(): any;
    get name(): any;
}
export declare class DataCloudflareZeroTrustDexTestsResultTargetPoliciesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataCloudflareZeroTrustDexTestsResultTargetPolicies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareZeroTrustDexTestsResultTargetPoliciesOutputReference;
}
export interface DataCloudflareZeroTrustDexTestsResult {
    /**
    * DEX rules targeted by this test
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests#target_policies DataCloudflareZeroTrustDexTests#target_policies}
    */
    readonly targetPolicies?: DataCloudflareZeroTrustDexTestsResultTargetPolicies[] | cdktf.IResolvable;
}
export declare function dataCloudflareZeroTrustDexTestsResultToTerraform(struct?: DataCloudflareZeroTrustDexTestsResult): any;
export declare function dataCloudflareZeroTrustDexTestsResultToHclTerraform(struct?: DataCloudflareZeroTrustDexTestsResult): any;
export declare class DataCloudflareZeroTrustDexTestsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareZeroTrustDexTestsResult | undefined;
    set internalValue(value: DataCloudflareZeroTrustDexTestsResult | undefined);
    private _data;
    get data(): DataCloudflareZeroTrustDexTestsResultDataOutputReference;
    get description(): any;
    get enabled(): any;
    get id(): any;
    get interval(): any;
    get name(): any;
    private _targetPolicies;
    get targetPolicies(): DataCloudflareZeroTrustDexTestsResultTargetPoliciesList;
    putTargetPolicies(value: DataCloudflareZeroTrustDexTestsResultTargetPolicies[] | cdktf.IResolvable): void;
    resetTargetPolicies(): void;
    get targetPoliciesInput(): any;
    get targeted(): any;
    get testId(): any;
}
export declare class DataCloudflareZeroTrustDexTestsResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataCloudflareZeroTrustDexTestsResult[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareZeroTrustDexTestsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests cloudflare_zero_trust_dex_tests}
*/
export declare class DataCloudflareZeroTrustDexTests extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_dex_tests";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDexTests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDexTests to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDexTests that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDexTests to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_dex_tests cloudflare_zero_trust_dex_tests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDexTestsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDexTestsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _kind?;
    get kind(): string;
    set kind(value: string);
    resetKind(): void;
    get kindInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareZeroTrustDexTestsResultList;
    private _testName?;
    get testName(): string;
    set testName(value: string);
    resetTestName(): void;
    get testNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
