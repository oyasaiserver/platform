import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAccountSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_subscription#account_id DataCloudflareAccountSubscription#account_id}
    */
    readonly accountId?: string;
}
export interface DataCloudflareAccountSubscriptionRatePlan {
}
export declare function dataCloudflareAccountSubscriptionRatePlanToTerraform(struct?: DataCloudflareAccountSubscriptionRatePlan): any;
export declare function dataCloudflareAccountSubscriptionRatePlanToHclTerraform(struct?: DataCloudflareAccountSubscriptionRatePlan): any;
export declare class DataCloudflareAccountSubscriptionRatePlanOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareAccountSubscriptionRatePlan | undefined;
    set internalValue(value: DataCloudflareAccountSubscriptionRatePlan | undefined);
    get currency(): any;
    get externallyManaged(): any;
    get id(): any;
    get isContract(): any;
    get publicName(): any;
    get scope(): any;
    get sets(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_subscription cloudflare_account_subscription}
*/
export declare class DataCloudflareAccountSubscription extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_account_subscription";
    /**
    * Generates CDKTF code for importing a DataCloudflareAccountSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccountSubscription to import
    * @param importFromId The id of the existing DataCloudflareAccountSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccountSubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/account_subscription cloudflare_account_subscription} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccountSubscriptionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareAccountSubscriptionConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get currency(): any;
    get currentPeriodEnd(): any;
    get currentPeriodStart(): any;
    get frequency(): any;
    get id(): any;
    get price(): any;
    private _ratePlan;
    get ratePlan(): DataCloudflareAccountSubscriptionRatePlanOutputReference;
    get state(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
