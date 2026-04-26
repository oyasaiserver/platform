import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MagicWanStaticRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#account_id MagicWanStaticRoute#account_id}
    */
    readonly accountId: string;
    /**
    * An optional human provided description of the static route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#description MagicWanStaticRoute#description}
    */
    readonly description?: string;
    /**
    * The next-hop IP Address for the static route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#nexthop MagicWanStaticRoute#nexthop}
    */
    readonly nexthop: string;
    /**
    * IP Prefix in Classless Inter-Domain Routing format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#prefix MagicWanStaticRoute#prefix}
    */
    readonly prefix: string;
    /**
    * Priority of the static route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#priority MagicWanStaticRoute#priority}
    */
    readonly priority: number;
    /**
    * Used only for ECMP routes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#scope MagicWanStaticRoute#scope}
    */
    readonly scope?: MagicWanStaticRouteScope;
    /**
    * Optional weight of the ECMP scope - if provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#weight MagicWanStaticRoute#weight}
    */
    readonly weight?: number;
}
export interface MagicWanStaticRouteScope {
    /**
    * List of colo names for the ECMP scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#colo_names MagicWanStaticRoute#colo_names}
    */
    readonly coloNames?: string[];
    /**
    * List of colo regions for the ECMP scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#colo_regions MagicWanStaticRoute#colo_regions}
    */
    readonly coloRegions?: string[];
}
export declare function magicWanStaticRouteScopeToTerraform(struct?: MagicWanStaticRouteScope | cdktf.IResolvable): any;
export declare function magicWanStaticRouteScopeToHclTerraform(struct?: MagicWanStaticRouteScope | cdktf.IResolvable): any;
export declare class MagicWanStaticRouteScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicWanStaticRouteScope | cdktf.IResolvable | undefined;
    set internalValue(value: MagicWanStaticRouteScope | cdktf.IResolvable | undefined);
    private _coloNames?;
    get coloNames(): string[];
    set coloNames(value: string[]);
    resetColoNames(): void;
    get coloNamesInput(): string[];
    private _coloRegions?;
    get coloRegions(): string[];
    set coloRegions(value: string[]);
    resetColoRegions(): void;
    get coloRegionsInput(): string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route cloudflare_magic_wan_static_route}
*/
export declare class MagicWanStaticRoute extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_magic_wan_static_route";
    /**
    * Generates CDKTF code for importing a MagicWanStaticRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicWanStaticRoute to import
    * @param importFromId The id of the existing MagicWanStaticRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicWanStaticRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_wan_static_route cloudflare_magic_wan_static_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicWanStaticRouteConfig
    */
    constructor(scope: Construct, id: string, config: MagicWanStaticRouteConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get createdOn(): any;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    get modifiedOn(): any;
    private _nexthop?;
    get nexthop(): string;
    set nexthop(value: string);
    get nexthopInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number;
    private _scope;
    get scope(): MagicWanStaticRouteScopeOutputReference;
    putScope(value: MagicWanStaticRouteScope): void;
    resetScope(): void;
    get scopeInput(): any;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
