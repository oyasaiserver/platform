import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailRoutingCatchAllConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_catch_all#zone_id DataCloudflareEmailRoutingCatchAll#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareEmailRoutingCatchAllActions {
}
export declare function dataCloudflareEmailRoutingCatchAllActionsToTerraform(struct?: DataCloudflareEmailRoutingCatchAllActions): any;
export declare function dataCloudflareEmailRoutingCatchAllActionsToHclTerraform(struct?: DataCloudflareEmailRoutingCatchAllActions): any;
export declare class DataCloudflareEmailRoutingCatchAllActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingCatchAllActions | undefined;
    set internalValue(value: DataCloudflareEmailRoutingCatchAllActions | undefined);
    get type(): any;
    get value(): any;
}
export declare class DataCloudflareEmailRoutingCatchAllActionsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingCatchAllActionsOutputReference;
}
export interface DataCloudflareEmailRoutingCatchAllMatchers {
}
export declare function dataCloudflareEmailRoutingCatchAllMatchersToTerraform(struct?: DataCloudflareEmailRoutingCatchAllMatchers): any;
export declare function dataCloudflareEmailRoutingCatchAllMatchersToHclTerraform(struct?: DataCloudflareEmailRoutingCatchAllMatchers): any;
export declare class DataCloudflareEmailRoutingCatchAllMatchersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingCatchAllMatchers | undefined;
    set internalValue(value: DataCloudflareEmailRoutingCatchAllMatchers | undefined);
    get type(): any;
}
export declare class DataCloudflareEmailRoutingCatchAllMatchersList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingCatchAllMatchersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_catch_all cloudflare_email_routing_catch_all}
*/
export declare class DataCloudflareEmailRoutingCatchAll extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_routing_catch_all";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingCatchAll resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingCatchAll to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingCatchAll that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_catch_all#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingCatchAll to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_catch_all cloudflare_email_routing_catch_all} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingCatchAllConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailRoutingCatchAllConfig);
    private _actions;
    get actions(): DataCloudflareEmailRoutingCatchAllActionsList;
    get enabled(): any;
    get id(): any;
    private _matchers;
    get matchers(): DataCloudflareEmailRoutingCatchAllMatchersList;
    get name(): any;
    get tag(): any;
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
