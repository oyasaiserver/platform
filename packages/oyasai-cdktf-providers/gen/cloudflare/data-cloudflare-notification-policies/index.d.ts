import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareNotificationPoliciesConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies#account_id DataCloudflareNotificationPolicies#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies#max_items DataCloudflareNotificationPolicies#max_items}
    */
    readonly maxItems?: number;
}
export interface DataCloudflareNotificationPoliciesResultFilters {
}
export declare function dataCloudflareNotificationPoliciesResultFiltersToTerraform(struct?: DataCloudflareNotificationPoliciesResultFilters): any;
export declare function dataCloudflareNotificationPoliciesResultFiltersToHclTerraform(struct?: DataCloudflareNotificationPoliciesResultFilters): any;
export declare class DataCloudflareNotificationPoliciesResultFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareNotificationPoliciesResultFilters | undefined;
    set internalValue(value: DataCloudflareNotificationPoliciesResultFilters | undefined);
    get actions(): any;
    get affectedAsns(): any;
    get affectedComponents(): any;
    get affectedLocations(): any;
    get airportCode(): any;
    get alertTriggerPreferences(): any;
    get alertTriggerPreferencesValue(): any;
    get enabled(): any;
    get environment(): any;
    get event(): any;
    get eventSource(): any;
    get eventType(): any;
    get groupBy(): any;
    get healthCheckId(): any;
    get incidentImpact(): any;
    get inputId(): any;
    get insightClass(): any;
    get limit(): any;
    get logoTag(): any;
    get megabitsPerSecond(): any;
    get newHealth(): any;
    get newStatus(): any;
    get packetsPerSecond(): any;
    get poolId(): any;
    get popNames(): any;
    get product(): any;
    get projectId(): any;
    get protocol(): any;
    get queryTag(): any;
    get requestsPerSecond(): any;
    get selectors(): any;
    get services(): any;
    get slo(): any;
    get status(): any;
    get targetHostname(): any;
    get targetIp(): any;
    get targetZoneName(): any;
    get trafficExclusions(): any;
    get tunnelId(): any;
    get tunnelName(): any;
    get type(): any;
    get where(): any;
    get zones(): any;
}
export interface DataCloudflareNotificationPoliciesResultMechanismsEmail {
}
export declare function dataCloudflareNotificationPoliciesResultMechanismsEmailToTerraform(struct?: DataCloudflareNotificationPoliciesResultMechanismsEmail): any;
export declare function dataCloudflareNotificationPoliciesResultMechanismsEmailToHclTerraform(struct?: DataCloudflareNotificationPoliciesResultMechanismsEmail): any;
export declare class DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareNotificationPoliciesResultMechanismsEmail | undefined;
    set internalValue(value: DataCloudflareNotificationPoliciesResultMechanismsEmail | undefined);
    get id(): any;
}
export declare class DataCloudflareNotificationPoliciesResultMechanismsEmailList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference;
}
export interface DataCloudflareNotificationPoliciesResultMechanismsPagerduty {
}
export declare function dataCloudflareNotificationPoliciesResultMechanismsPagerdutyToTerraform(struct?: DataCloudflareNotificationPoliciesResultMechanismsPagerduty): any;
export declare function dataCloudflareNotificationPoliciesResultMechanismsPagerdutyToHclTerraform(struct?: DataCloudflareNotificationPoliciesResultMechanismsPagerduty): any;
export declare class DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareNotificationPoliciesResultMechanismsPagerduty | undefined;
    set internalValue(value: DataCloudflareNotificationPoliciesResultMechanismsPagerduty | undefined);
    get id(): any;
}
export declare class DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference;
}
export interface DataCloudflareNotificationPoliciesResultMechanismsWebhooks {
}
export declare function dataCloudflareNotificationPoliciesResultMechanismsWebhooksToTerraform(struct?: DataCloudflareNotificationPoliciesResultMechanismsWebhooks): any;
export declare function dataCloudflareNotificationPoliciesResultMechanismsWebhooksToHclTerraform(struct?: DataCloudflareNotificationPoliciesResultMechanismsWebhooks): any;
export declare class DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareNotificationPoliciesResultMechanismsWebhooks | undefined;
    set internalValue(value: DataCloudflareNotificationPoliciesResultMechanismsWebhooks | undefined);
    get id(): any;
}
export declare class DataCloudflareNotificationPoliciesResultMechanismsWebhooksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference;
}
export interface DataCloudflareNotificationPoliciesResultMechanisms {
}
export declare function dataCloudflareNotificationPoliciesResultMechanismsToTerraform(struct?: DataCloudflareNotificationPoliciesResultMechanisms): any;
export declare function dataCloudflareNotificationPoliciesResultMechanismsToHclTerraform(struct?: DataCloudflareNotificationPoliciesResultMechanisms): any;
export declare class DataCloudflareNotificationPoliciesResultMechanismsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareNotificationPoliciesResultMechanisms | undefined;
    set internalValue(value: DataCloudflareNotificationPoliciesResultMechanisms | undefined);
    private _email;
    get email(): DataCloudflareNotificationPoliciesResultMechanismsEmailList;
    private _pagerduty;
    get pagerduty(): DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList;
    private _webhooks;
    get webhooks(): DataCloudflareNotificationPoliciesResultMechanismsWebhooksList;
}
export interface DataCloudflareNotificationPoliciesResult {
}
export declare function dataCloudflareNotificationPoliciesResultToTerraform(struct?: DataCloudflareNotificationPoliciesResult): any;
export declare function dataCloudflareNotificationPoliciesResultToHclTerraform(struct?: DataCloudflareNotificationPoliciesResult): any;
export declare class DataCloudflareNotificationPoliciesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareNotificationPoliciesResult | undefined;
    set internalValue(value: DataCloudflareNotificationPoliciesResult | undefined);
    get alertInterval(): any;
    get alertType(): any;
    get created(): any;
    get description(): any;
    get enabled(): any;
    private _filters;
    get filters(): DataCloudflareNotificationPoliciesResultFiltersOutputReference;
    get id(): any;
    private _mechanisms;
    get mechanisms(): DataCloudflareNotificationPoliciesResultMechanismsOutputReference;
    get modified(): any;
    get name(): any;
}
export declare class DataCloudflareNotificationPoliciesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareNotificationPoliciesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies cloudflare_notification_policies}
*/
export declare class DataCloudflareNotificationPolicies extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_notification_policies";
    /**
    * Generates CDKTF code for importing a DataCloudflareNotificationPolicies resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareNotificationPolicies to import
    * @param importFromId The id of the existing DataCloudflareNotificationPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareNotificationPolicies to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policies cloudflare_notification_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareNotificationPoliciesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareNotificationPoliciesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareNotificationPoliciesResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
