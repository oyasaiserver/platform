import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccountSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription#account_id AccountSubscription#account_id}
    */
    readonly accountId?: string;
    /**
    * How often the subscription is renewed automatically.
    * Available values: "weekly", "monthly", "quarterly", "yearly".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription#frequency AccountSubscription#frequency}
    */
    readonly frequency?: string;
    /**
    * The rate plan applied to the subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription#rate_plan AccountSubscription#rate_plan}
    */
    readonly ratePlan?: AccountSubscriptionRatePlan;
}
export interface AccountSubscriptionRatePlan {
    /**
    * The ID of the rate plan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription#id AccountSubscription#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The scope that this rate plan applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription#scope AccountSubscription#scope}
    */
    readonly scope?: string;
}
export declare function accountSubscriptionRatePlanToTerraform(struct?: AccountSubscriptionRatePlan | cdktf.IResolvable): any;
export declare function accountSubscriptionRatePlanToHclTerraform(struct?: AccountSubscriptionRatePlan | cdktf.IResolvable): any;
export declare class AccountSubscriptionRatePlanOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountSubscriptionRatePlan | cdktf.IResolvable | undefined;
    set internalValue(value: AccountSubscriptionRatePlan | cdktf.IResolvable | undefined);
    get currency(): any;
    get externallyManaged(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get isContract(): any;
    get publicName(): any;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string;
    get sets(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription cloudflare_account_subscription}
*/
export declare class AccountSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_account_subscription";
    /**
    * Generates CDKTF code for importing a AccountSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountSubscription to import
    * @param importFromId The id of the existing AccountSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountSubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_subscription cloudflare_account_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountSubscriptionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AccountSubscriptionConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get currency(): any;
    get currentPeriodEnd(): any;
    get currentPeriodStart(): any;
    private _frequency?;
    get frequency(): string;
    set frequency(value: string);
    resetFrequency(): void;
    get frequencyInput(): string;
    get id(): any;
    get price(): any;
    private _ratePlan;
    get ratePlan(): AccountSubscriptionRatePlanOutputReference;
    putRatePlan(value: AccountSubscriptionRatePlan): void;
    resetRatePlan(): void;
    get ratePlanInput(): any;
    get state(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
