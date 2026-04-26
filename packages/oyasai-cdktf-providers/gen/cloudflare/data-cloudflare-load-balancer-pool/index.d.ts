import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareLoadBalancerPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pool#account_id DataCloudflareLoadBalancerPool#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pool#filter DataCloudflareLoadBalancerPool#filter}
    */
    readonly filter?: DataCloudflareLoadBalancerPoolFilter;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pool#pool_id DataCloudflareLoadBalancerPool#pool_id}
    */
    readonly poolId?: string;
}
export interface DataCloudflareLoadBalancerPoolFilter {
    /**
    * The ID of the Monitor to use for checking the health of origins within this pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pool#monitor DataCloudflareLoadBalancerPool#monitor}
    */
    readonly monitor?: string;
}
export declare function dataCloudflareLoadBalancerPoolFilterToTerraform(struct?: DataCloudflareLoadBalancerPoolFilter | cdktf.IResolvable): any;
export declare function dataCloudflareLoadBalancerPoolFilterToHclTerraform(struct?: DataCloudflareLoadBalancerPoolFilter | cdktf.IResolvable): any;
export declare class DataCloudflareLoadBalancerPoolFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolFilter | cdktf.IResolvable | undefined);
    private _monitor?;
    get monitor(): string;
    set monitor(value: string);
    resetMonitor(): void;
    get monitorInput(): string;
}
export interface DataCloudflareLoadBalancerPoolLoadShedding {
}
export declare function dataCloudflareLoadBalancerPoolLoadSheddingToTerraform(struct?: DataCloudflareLoadBalancerPoolLoadShedding): any;
export declare function dataCloudflareLoadBalancerPoolLoadSheddingToHclTerraform(struct?: DataCloudflareLoadBalancerPoolLoadShedding): any;
export declare class DataCloudflareLoadBalancerPoolLoadSheddingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolLoadShedding | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolLoadShedding | undefined);
    get defaultPercent(): any;
    get defaultPolicy(): any;
    get sessionPercent(): any;
    get sessionPolicy(): any;
}
export interface DataCloudflareLoadBalancerPoolNotificationFilterOrigin {
}
export declare function dataCloudflareLoadBalancerPoolNotificationFilterOriginToTerraform(struct?: DataCloudflareLoadBalancerPoolNotificationFilterOrigin): any;
export declare function dataCloudflareLoadBalancerPoolNotificationFilterOriginToHclTerraform(struct?: DataCloudflareLoadBalancerPoolNotificationFilterOrigin): any;
export declare class DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolNotificationFilterOrigin | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolNotificationFilterOrigin | undefined);
    get disable(): any;
    get healthy(): any;
}
export interface DataCloudflareLoadBalancerPoolNotificationFilterPool {
}
export declare function dataCloudflareLoadBalancerPoolNotificationFilterPoolToTerraform(struct?: DataCloudflareLoadBalancerPoolNotificationFilterPool): any;
export declare function dataCloudflareLoadBalancerPoolNotificationFilterPoolToHclTerraform(struct?: DataCloudflareLoadBalancerPoolNotificationFilterPool): any;
export declare class DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolNotificationFilterPool | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolNotificationFilterPool | undefined);
    get disable(): any;
    get healthy(): any;
}
export interface DataCloudflareLoadBalancerPoolNotificationFilter {
}
export declare function dataCloudflareLoadBalancerPoolNotificationFilterToTerraform(struct?: DataCloudflareLoadBalancerPoolNotificationFilter): any;
export declare function dataCloudflareLoadBalancerPoolNotificationFilterToHclTerraform(struct?: DataCloudflareLoadBalancerPoolNotificationFilter): any;
export declare class DataCloudflareLoadBalancerPoolNotificationFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolNotificationFilter | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolNotificationFilter | undefined);
    private _origin;
    get origin(): DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference;
    private _pool;
    get pool(): DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference;
}
export interface DataCloudflareLoadBalancerPoolOriginSteering {
}
export declare function dataCloudflareLoadBalancerPoolOriginSteeringToTerraform(struct?: DataCloudflareLoadBalancerPoolOriginSteering): any;
export declare function dataCloudflareLoadBalancerPoolOriginSteeringToHclTerraform(struct?: DataCloudflareLoadBalancerPoolOriginSteering): any;
export declare class DataCloudflareLoadBalancerPoolOriginSteeringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolOriginSteering | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolOriginSteering | undefined);
    get policy(): any;
}
export interface DataCloudflareLoadBalancerPoolOriginsHeader {
}
export declare function dataCloudflareLoadBalancerPoolOriginsHeaderToTerraform(struct?: DataCloudflareLoadBalancerPoolOriginsHeader): any;
export declare function dataCloudflareLoadBalancerPoolOriginsHeaderToHclTerraform(struct?: DataCloudflareLoadBalancerPoolOriginsHeader): any;
export declare class DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareLoadBalancerPoolOriginsHeader | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolOriginsHeader | undefined);
    get host(): any;
}
export interface DataCloudflareLoadBalancerPoolOrigins {
}
export declare function dataCloudflareLoadBalancerPoolOriginsToTerraform(struct?: DataCloudflareLoadBalancerPoolOrigins): any;
export declare function dataCloudflareLoadBalancerPoolOriginsToHclTerraform(struct?: DataCloudflareLoadBalancerPoolOrigins): any;
export declare class DataCloudflareLoadBalancerPoolOriginsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareLoadBalancerPoolOrigins | undefined;
    set internalValue(value: DataCloudflareLoadBalancerPoolOrigins | undefined);
    get address(): any;
    get disabledAt(): any;
    get enabled(): any;
    get flattenCname(): any;
    private _header;
    get header(): DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference;
    get name(): any;
    get port(): any;
    get virtualNetworkId(): any;
    get weight(): any;
}
export declare class DataCloudflareLoadBalancerPoolOriginsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareLoadBalancerPoolOriginsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pool cloudflare_load_balancer_pool}
*/
export declare class DataCloudflareLoadBalancerPool extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_load_balancer_pool";
    /**
    * Generates CDKTF code for importing a DataCloudflareLoadBalancerPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancerPool to import
    * @param importFromId The id of the existing DataCloudflareLoadBalancerPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancerPool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/load_balancer_pool cloudflare_load_balancer_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareLoadBalancerPoolConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareLoadBalancerPoolConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get checkRegions(): any;
    get createdOn(): any;
    get description(): any;
    get disabledAt(): any;
    get enabled(): any;
    private _filter;
    get filter(): DataCloudflareLoadBalancerPoolFilterOutputReference;
    putFilter(value: DataCloudflareLoadBalancerPoolFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get latitude(): any;
    private _loadShedding;
    get loadShedding(): DataCloudflareLoadBalancerPoolLoadSheddingOutputReference;
    get longitude(): any;
    get minimumOrigins(): any;
    get modifiedOn(): any;
    get monitor(): any;
    get monitorGroup(): any;
    get name(): any;
    get networks(): any;
    get notificationEmail(): any;
    private _notificationFilter;
    get notificationFilter(): DataCloudflareLoadBalancerPoolNotificationFilterOutputReference;
    private _originSteering;
    get originSteering(): DataCloudflareLoadBalancerPoolOriginSteeringOutputReference;
    private _origins;
    get origins(): DataCloudflareLoadBalancerPoolOriginsList;
    private _poolId?;
    get poolId(): string;
    set poolId(value: string);
    resetPoolId(): void;
    get poolIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
