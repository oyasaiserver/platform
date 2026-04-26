import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZoneSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * How often the subscription is renewed automatically.
    * Available values: "weekly", "monthly", "quarterly", "yearly".
    * Note: Some plans may not support frequency configuration and will return "not-applicable".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription#frequency ZoneSubscription#frequency}
    */
    readonly frequency?: string;
    /**
    * The rate plan applied to the subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription#rate_plan ZoneSubscription#rate_plan}
    */
    readonly ratePlan?: ZoneSubscriptionRatePlan;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription#zone_id ZoneSubscription#zone_id}
    */
    readonly zoneId: string;
}
export interface ZoneSubscriptionRatePlan {
    /**
    * The ID of the rate plan.
    * Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise", "partners_ent".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription#id ZoneSubscription#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The scope that this rate plan applies to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription#scope ZoneSubscription#scope}
    */
    readonly scope?: string;
}
export declare function zoneSubscriptionRatePlanToTerraform(struct?: ZoneSubscriptionRatePlan | cdktf.IResolvable): any;
export declare function zoneSubscriptionRatePlanToHclTerraform(struct?: ZoneSubscriptionRatePlan | cdktf.IResolvable): any;
export declare class ZoneSubscriptionRatePlanOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZoneSubscriptionRatePlan | cdktf.IResolvable | undefined;
    set internalValue(value: ZoneSubscriptionRatePlan | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription cloudflare_zone_subscription}
*/
export declare class ZoneSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zone_subscription";
    /**
    * Generates CDKTF code for importing a ZoneSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneSubscription to import
    * @param importFromId The id of the existing ZoneSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneSubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_subscription cloudflare_zone_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneSubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: ZoneSubscriptionConfig);
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
    get ratePlan(): ZoneSubscriptionRatePlanOutputReference;
    putRatePlan(value: ZoneSubscriptionRatePlan): void;
    resetRatePlan(): void;
    get ratePlanInput(): any;
    get state(): any;
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
