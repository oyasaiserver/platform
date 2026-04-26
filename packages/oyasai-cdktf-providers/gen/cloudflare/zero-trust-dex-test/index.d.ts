import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDexTestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#account_id ZeroTrustDexTest#account_id}
    */
    readonly accountId?: string;
    /**
    * The configuration object which contains the details for the WARP client to conduct the test.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#data ZeroTrustDexTest#data}
    */
    readonly data: ZeroTrustDexTestData;
    /**
    * Additional details about the test.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#description ZeroTrustDexTest#description}
    */
    readonly description?: string;
    /**
    * Determines whether or not the test is active.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#enabled ZeroTrustDexTest#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * How often the test will run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#interval ZeroTrustDexTest#interval}
    */
    readonly interval: string;
    /**
    * The name of the DEX test. Must be unique.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#name ZeroTrustDexTest#name}
    */
    readonly name: string;
    /**
    * DEX rules targeted by this test
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#target_policies ZeroTrustDexTest#target_policies}
    */
    readonly targetPolicies?: ZeroTrustDexTestTargetPolicies[] | cdktf.IResolvable;
}
export interface ZeroTrustDexTestData {
    /**
    * The desired endpoint to test.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#host ZeroTrustDexTest#host}
    */
    readonly host?: string;
    /**
    * The type of test.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#kind ZeroTrustDexTest#kind}
    */
    readonly kind?: string;
    /**
    * The HTTP request method type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#method ZeroTrustDexTest#method}
    */
    readonly method?: string;
}
export declare function zeroTrustDexTestDataToTerraform(struct?: ZeroTrustDexTestData | cdktf.IResolvable): any;
export declare function zeroTrustDexTestDataToHclTerraform(struct?: ZeroTrustDexTestData | cdktf.IResolvable): any;
export declare class ZeroTrustDexTestDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDexTestData | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDexTestData | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
    private _kind?;
    get kind(): string;
    set kind(value: string);
    resetKind(): void;
    get kindInput(): string;
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string;
}
export interface ZeroTrustDexTestTargetPolicies {
    /**
    * The id of the DEX rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#id ZeroTrustDexTest#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function zeroTrustDexTestTargetPoliciesToTerraform(struct?: ZeroTrustDexTestTargetPolicies | cdktf.IResolvable): any;
export declare function zeroTrustDexTestTargetPoliciesToHclTerraform(struct?: ZeroTrustDexTestTargetPolicies | cdktf.IResolvable): any;
export declare class ZeroTrustDexTestTargetPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDexTestTargetPolicies | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDexTestTargetPolicies | cdktf.IResolvable | undefined);
    get default(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): any;
}
export declare class ZeroTrustDexTestTargetPoliciesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDexTestTargetPolicies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDexTestTargetPoliciesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test cloudflare_zero_trust_dex_test}
*/
export declare class ZeroTrustDexTest extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_dex_test";
    /**
    * Generates CDKTF code for importing a ZeroTrustDexTest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDexTest to import
    * @param importFromId The id of the existing ZeroTrustDexTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDexTest to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dex_test cloudflare_zero_trust_dex_test} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDexTestConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDexTestConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _data;
    get data(): ZeroTrustDexTestDataOutputReference;
    putData(value: ZeroTrustDexTestData): void;
    get dataInput(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): any;
    get id(): any;
    private _interval?;
    get interval(): string;
    set interval(value: string);
    get intervalInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _targetPolicies;
    get targetPolicies(): ZeroTrustDexTestTargetPoliciesList;
    putTargetPolicies(value: ZeroTrustDexTestTargetPolicies[] | cdktf.IResolvable): void;
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
