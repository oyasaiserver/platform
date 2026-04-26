import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ArgoSmartRoutingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the enablement value of Argo Smart Routing.
    * Available values: "on", "off".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/argo_smart_routing#value ArgoSmartRouting#value}
    */
    readonly value: string;
    /**
    * Specifies the zone associated with the API call.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/argo_smart_routing#zone_id ArgoSmartRouting#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/argo_smart_routing cloudflare_argo_smart_routing}
*/
export declare class ArgoSmartRouting extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_argo_smart_routing";
    /**
    * Generates CDKTF code for importing a ArgoSmartRouting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ArgoSmartRouting to import
    * @param importFromId The id of the existing ArgoSmartRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/argo_smart_routing#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ArgoSmartRouting to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/argo_smart_routing cloudflare_argo_smart_routing} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ArgoSmartRoutingConfig
    */
    constructor(scope: Construct, id: string, config: ArgoSmartRoutingConfig);
    get editable(): any;
    get id(): any;
    get modifiedOn(): any;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
