import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLoadBalancerPoolsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pools#account_id DataCloudflareLoadBalancerPools#account_id}
    */
    readonly accountId?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pools#max_items DataCloudflareLoadBalancerPools#max_items}
    */
    readonly maxItems?: number;
    /**
    * The ID of the Monitor to use for checking the health of origins within this pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pools#monitor DataCloudflareLoadBalancerPools#monitor}
    */
    readonly monitor?: string;
}
export interface DataCloudflareLoadBalancerPoolsResultLoadShedding {
}
export declare function dataCloudflareLoadBalancerPoolsResultLoadSheddingToTerraform(struct?: DataCloudflareLoadBalancerPoolsResultLoadShedding): any;
export declare function dataCloudflareLoadBalancerPoolsResultLoadSheddingToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsResultLoadShedding): any;
export declare class DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolsResultLoadShedding | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolsResultLoadShedding | undefined);
    get defaultPercent(): any;
    get defaultPolicy(): any;
    get sessionPercent(): any;
    get sessionPolicy(): any;
}
export interface DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin {
}
export declare function dataCloudflareLoadBalancerPoolsResultNotificationFilterOriginToTerraform(struct?: DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin): any;
export declare function dataCloudflareLoadBalancerPoolsResultNotificationFilterOriginToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin): any;
export declare class DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin | undefined);
    get disable(): any;
    get healthy(): any;
}
export interface DataCloudflareLoadBalancerPoolsResultNotificationFilterPool {
}
export declare function dataCloudflareLoadBalancerPoolsResultNotificationFilterPoolToTerraform(struct?: DataCloudflareLoadBalancerPoolsResultNotificationFilterPool): any;
export declare function dataCloudflareLoadBalancerPoolsResultNotificationFilterPoolToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsResultNotificationFilterPool): any;
export declare class DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolsResultNotificationFilterPool | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolsResultNotificationFilterPool | undefined);
    get disable(): any;
    get healthy(): any;
}
export interface DataCloudflareLoadBalancerPoolsResultNotificationFilter {
}
export declare function dataCloudflareLoadBalancerPoolsResultNotificationFilterToTerraform(struct?: DataCloudflareLoadBalancerPoolsResultNotificationFilter): any;
export declare function dataCloudflareLoadBalancerPoolsResultNotificationFilterToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsResultNotificationFilter): any;
export declare class DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolsResultNotificationFilter | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolsResultNotificationFilter | undefined);
    private _origin;
    get origin(): DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference;
    private _pool;
    get pool(): DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference;
}
export interface DataCloudflareLoadBalancerPoolsResultOriginSteering {
}
export declare function dataCloudflareLoadBalancerPoolsResultOriginSteeringToTerraform(struct?: DataCloudflareLoadBalancerPoolsResultOriginSteering): any;
export declare function dataCloudflareLoadBalancerPoolsResultOriginSteeringToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsResultOriginSteering): any;
export declare class DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolsResultOriginSteering | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolsResultOriginSteering | undefined);
    get policy(): any;
}
export interface DataCloudflareLoadBalancerPoolsResultOriginsHeader {
}
export declare function dataCloudflareLoadBalancerPoolsResultOriginsHeaderToTerraform(struct?: DataCloudflareLoadBalancerPoolsResultOriginsHeader): any;
export declare function dataCloudflareLoadBalancerPoolsResultOriginsHeaderToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsResultOriginsHeader): any;
export declare class DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolsResultOriginsHeader | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolsResultOriginsHeader | undefined);
    get host(): any;
}
export interface DataCloudflareLoadBalancerPoolsResultOrigins {
}
export declare function dataCloudflareLoadBalancerPoolsResultOriginsToTerraform(struct?: DataCloudflareLoadBalancerPoolsResultOrigins): any;
export declare function dataCloudflareLoadBalancerPoolsResultOriginsToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsResultOrigins): any;
export declare class DataCloudflareLoadBalancerPoolsResultOriginsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareLoadBalancerPoolsResultOrigins | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolsResultOrigins | undefined);
    get address(): any;
    get disabledAt(): any;
    get enabled(): any;
    get flattenCname(): any;
    private _header;
    get header(): DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference;
    get name(): any;
    get port(): any;
    get virtualNetworkId(): any;
    get weight(): any;
}
export declare class DataCloudflareLoadBalancerPoolsResultOriginsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareLoadBalancerPoolsResultOriginsOutputReference;
}
export interface DataCloudflareLoadBalancerPoolsResult {
}
export declare function dataCloudflareLoadBalancerPoolsResultToTerraform(struct?: DataCloudflareLoadBalancerPoolsResult): any;
export declare function dataCloudflareLoadBalancerPoolsResultToHclTerraform(struct?: DataCloudflareLoadBalancerPoolsResult): any;
export declare class DataCloudflareLoadBalancerPoolsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareLoadBalancerPoolsResult | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolsResult | undefined);
    get checkRegions(): any;
    get createdOn(): any;
    get description(): any;
    get disabledAt(): any;
    get enabled(): any;
    get id(): any;
    get latitude(): any;
    private _loadShedding;
    get loadShedding(): DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference;
    get longitude(): any;
    get minimumOrigins(): any;
    get modifiedOn(): any;
    get monitor(): any;
    get monitorGroup(): any;
    get name(): any;
    get networks(): any;
    get notificationEmail(): any;
    private _notificationFilter;
    get notificationFilter(): DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference;
    private _originSteering;
    get originSteering(): DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference;
    private _origins;
    get origins(): DataCloudflareLoadBalancerPoolsResultOriginsList;
}
export declare class DataCloudflareLoadBalancerPoolsResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareLoadBalancerPoolsResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pools cloudflare_load_balancer_pools}
*/
export declare class DataCloudflareLoadBalancerPools extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_load_balancer_pools";
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancerPools resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancerPools to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancerPools that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pools#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancerPools to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pools cloudflare_load_balancer_pools} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancerPoolsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareLoadBalancerPoolsConfig);
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
    private _monitor?;
    get monitor(): string;
    set monitor(value: string);
    resetMonitor(): void;
    get monitorInput(): string;
    private _result;
    get result(): DataCloudflareLoadBalancerPoolsResultList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
