import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareArgoSmartRoutingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the zone associated with the API call.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/argo_smart_routing#zone_id DataCloudflareArgoSmartRouting#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/argo_smart_routing cloudflare_argo_smart_routing}
*/
export declare class DataCloudflareArgoSmartRouting extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_argo_smart_routing";
    /**
    * Generates CDKTF code for importing a DataCloudflareArgoSmartRouting resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareArgoSmartRouting to import
    * @param importFromId The id of the existing DataCloudflareArgoSmartRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/argo_smart_routing#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareArgoSmartRouting to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/argo_smart_routing cloudflare_argo_smart_routing} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareArgoSmartRoutingConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareArgoSmartRoutingConfig);
    get editable(): any;
    get id(): any;
    get modifiedOn(): any;
    get value(): any;
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
