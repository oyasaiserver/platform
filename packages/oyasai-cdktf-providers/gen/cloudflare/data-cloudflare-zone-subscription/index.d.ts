import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZoneSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_subscription#zone_id DataCloudflareZoneSubscription#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareZoneSubscriptionRatePlan {
}
export declare function dataCloudflareZoneSubscriptionRatePlanToTerraform(struct?: DataCloudflareZoneSubscriptionRatePlan): any;
export declare function dataCloudflareZoneSubscriptionRatePlanToHclTerraform(struct?: DataCloudflareZoneSubscriptionRatePlan): any;
export declare class DataCloudflareZoneSubscriptionRatePlanOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZoneSubscriptionRatePlan | undefined;
    set internalValue(value: DataCloudflareZoneSubscriptionRatePlan | undefined);
    get currency(): any;
    get externallyManaged(): any;
    get id(): any;
    get isContract(): any;
    get publicName(): any;
    get scope(): any;
    get sets(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_subscription cloudflare_zone_subscription}
*/
export declare class DataCloudflareZoneSubscription extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zone_subscription";
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneSubscription to import
    * @param importFromId The id of the existing DataCloudflareZoneSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneSubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_subscription cloudflare_zone_subscription} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneSubscriptionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZoneSubscriptionConfig);
    get currency(): any;
    get currentPeriodEnd(): any;
    get currentPeriodStart(): any;
    get frequency(): any;
    get id(): any;
    get price(): any;
    private _ratePlan;
    get ratePlan(): DataCloudflareZoneSubscriptionRatePlanOutputReference;
    get state(): any;
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
