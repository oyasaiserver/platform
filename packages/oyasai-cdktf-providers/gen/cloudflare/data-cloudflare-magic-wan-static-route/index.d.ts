import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMagicWanStaticRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_static_route#account_id DataCloudflareMagicWanStaticRoute#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_static_route#route_id DataCloudflareMagicWanStaticRoute#route_id}
    */
    readonly routeId: string;
}
export interface DataCloudflareMagicWanStaticRouteRouteScope {
}
export declare function dataCloudflareMagicWanStaticRouteRouteScopeToTerraform(struct?: DataCloudflareMagicWanStaticRouteRouteScope): any;
export declare function dataCloudflareMagicWanStaticRouteRouteScopeToHclTerraform(struct?: DataCloudflareMagicWanStaticRouteRouteScope): any;
export declare class DataCloudflareMagicWanStaticRouteRouteScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanStaticRouteRouteScope | undefined;
    set internalValue(value: DataCloudflareMagicWanStaticRouteRouteScope | undefined);
    get coloNames(): any;
    get coloRegions(): any;
}
export interface DataCloudflareMagicWanStaticRouteRoute {
}
export declare function dataCloudflareMagicWanStaticRouteRouteToTerraform(struct?: DataCloudflareMagicWanStaticRouteRoute): any;
export declare function dataCloudflareMagicWanStaticRouteRouteToHclTerraform(struct?: DataCloudflareMagicWanStaticRouteRoute): any;
export declare class DataCloudflareMagicWanStaticRouteRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareMagicWanStaticRouteRoute | undefined;
    set internalValue(value: DataCloudflareMagicWanStaticRouteRoute | undefined);
    get createdOn(): any;
    get description(): any;
    get id(): any;
    get modifiedOn(): any;
    get nexthop(): any;
    get prefix(): any;
    get priority(): any;
    private _scope;
    get scope(): DataCloudflareMagicWanStaticRouteRouteScopeOutputReference;
    get weight(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_static_route cloudflare_magic_wan_static_route}
*/
export declare class DataCloudflareMagicWanStaticRoute extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_magic_wan_static_route";
    /**
    * Generates CDKTF code for importing a DataCloudflareMagicWanStaticRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMagicWanStaticRoute to import
    * @param importFromId The id of the existing DataCloudflareMagicWanStaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_static_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMagicWanStaticRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/magic_wan_static_route cloudflare_magic_wan_static_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMagicWanStaticRouteConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMagicWanStaticRouteConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    private _route;
    get route(): DataCloudflareMagicWanStaticRouteRouteOutputReference;
    private _routeId?;
    get routeId(): string;
    set routeId(value: string);
    get routeIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
