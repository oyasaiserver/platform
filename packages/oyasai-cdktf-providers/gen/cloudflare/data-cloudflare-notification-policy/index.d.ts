import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareNotificationPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The account id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy#account_id DataCloudflareNotificationPolicy#account_id}
    */
    readonly accountId?: string;
    /**
    * The unique identifier of a notification policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy#policy_id DataCloudflareNotificationPolicy#policy_id}
    */
    readonly policyId: string;
}
export interface DataCloudflareNotificationPolicyFilters {
}
export declare function dataCloudflareNotificationPolicyFiltersToTerraform(struct?: DataCloudflareNotificationPolicyFilters): any;
export declare function dataCloudflareNotificationPolicyFiltersToHclTerraform(struct?: DataCloudflareNotificationPolicyFilters): any;
export declare class DataCloudflareNotificationPolicyFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareNotificationPolicyFilters | undefined;
    set internalValue(value: DataCloudflareNotificationPolicyFilters | undefined);
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
export interface DataCloudflareNotificationPolicyMechanismsEmail {
}
export declare function dataCloudflareNotificationPolicyMechanismsEmailToTerraform(struct?: DataCloudflareNotificationPolicyMechanismsEmail): any;
export declare function dataCloudflareNotificationPolicyMechanismsEmailToHclTerraform(struct?: DataCloudflareNotificationPolicyMechanismsEmail): any;
export declare class DataCloudflareNotificationPolicyMechanismsEmailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareNotificationPolicyMechanismsEmail | undefined;
    set internalValue(value: DataCloudflareNotificationPolicyMechanismsEmail | undefined);
    get id(): any;
}
export declare class DataCloudflareNotificationPolicyMechanismsEmailList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareNotificationPolicyMechanismsEmailOutputReference;
}
export interface DataCloudflareNotificationPolicyMechanismsPagerduty {
}
export declare function dataCloudflareNotificationPolicyMechanismsPagerdutyToTerraform(struct?: DataCloudflareNotificationPolicyMechanismsPagerduty): any;
export declare function dataCloudflareNotificationPolicyMechanismsPagerdutyToHclTerraform(struct?: DataCloudflareNotificationPolicyMechanismsPagerduty): any;
export declare class DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareNotificationPolicyMechanismsPagerduty | undefined;
    set internalValue(value: DataCloudflareNotificationPolicyMechanismsPagerduty | undefined);
    get id(): any;
}
export declare class DataCloudflareNotificationPolicyMechanismsPagerdutyList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference;
}
export interface DataCloudflareNotificationPolicyMechanismsWebhooks {
}
export declare function dataCloudflareNotificationPolicyMechanismsWebhooksToTerraform(struct?: DataCloudflareNotificationPolicyMechanismsWebhooks): any;
export declare function dataCloudflareNotificationPolicyMechanismsWebhooksToHclTerraform(struct?: DataCloudflareNotificationPolicyMechanismsWebhooks): any;
export declare class DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareNotificationPolicyMechanismsWebhooks | undefined;
    set internalValue(value: DataCloudflareNotificationPolicyMechanismsWebhooks | undefined);
    get id(): any;
}
export declare class DataCloudflareNotificationPolicyMechanismsWebhooksList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference;
}
export interface DataCloudflareNotificationPolicyMechanisms {
}
export declare function dataCloudflareNotificationPolicyMechanismsToTerraform(struct?: DataCloudflareNotificationPolicyMechanisms): any;
export declare function dataCloudflareNotificationPolicyMechanismsToHclTerraform(struct?: DataCloudflareNotificationPolicyMechanisms): any;
export declare class DataCloudflareNotificationPolicyMechanismsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareNotificationPolicyMechanisms | undefined;
    set internalValue(value: DataCloudflareNotificationPolicyMechanisms | undefined);
    private _email;
    get email(): DataCloudflareNotificationPolicyMechanismsEmailList;
    private _pagerduty;
    get pagerduty(): DataCloudflareNotificationPolicyMechanismsPagerdutyList;
    private _webhooks;
    get webhooks(): DataCloudflareNotificationPolicyMechanismsWebhooksList;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy cloudflare_notification_policy}
*/
export declare class DataCloudflareNotificationPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_notification_policy";
    /**
    * Generates CDKTF code for importing a DataCloudflareNotificationPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareNotificationPolicy to import
    * @param importFromId The id of the existing DataCloudflareNotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareNotificationPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/notification_policy cloudflare_notification_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareNotificationPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareNotificationPolicyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get alertInterval(): any;
    get alertType(): any;
    get created(): any;
    get description(): any;
    get enabled(): any;
    private _filters;
    get filters(): DataCloudflareNotificationPolicyFiltersOutputReference;
    get id(): any;
    private _mechanisms;
    get mechanisms(): DataCloudflareNotificationPolicyMechanismsOutputReference;
    get modified(): any;
    get name(): any;
    private _policyId?;
    get policyId(): string;
    set policyId(value: string);
    get policyIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
