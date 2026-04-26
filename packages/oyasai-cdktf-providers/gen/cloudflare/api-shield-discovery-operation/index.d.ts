import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiShieldDiscoveryOperationConfig extends cdktf.TerraformMetaArguments {
    /**
    * UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_discovery_operation#operation_id ApiShieldDiscoveryOperation#operation_id}
    */
    readonly operationId: string;
    /**
    * Mark state of operation in API Discovery
    *   * `review` - Mark operation as for review
    *   * `ignored` - Mark operation as ignored
    * Available values: "review", "ignored".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_discovery_operation#state ApiShieldDiscoveryOperation#state}
    */
    readonly state?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_discovery_operation#zone_id ApiShieldDiscoveryOperation#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_discovery_operation cloudflare_api_shield_discovery_operation}
*/
export declare class ApiShieldDiscoveryOperation extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_api_shield_discovery_operation";
    /**
    * Generates CDKTF code for importing a ApiShieldDiscoveryOperation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShieldDiscoveryOperation to import
    * @param importFromId The id of the existing ApiShieldDiscoveryOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_discovery_operation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShieldDiscoveryOperation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_discovery_operation cloudflare_api_shield_discovery_operation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldDiscoveryOperationConfig
    */
    constructor(scope: Construct, id: string, config: ApiShieldDiscoveryOperationConfig);
    get id(): any;
    private _operationId?;
    get operationId(): string;
    set operationId(value: string);
    get operationIdInput(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
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
