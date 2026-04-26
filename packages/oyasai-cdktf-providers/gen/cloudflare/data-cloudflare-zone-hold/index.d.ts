import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZoneHoldConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_hold#zone_id DataCloudflareZoneHold#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_hold cloudflare_zone_hold}
*/
export declare class DataCloudflareZoneHold extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zone_hold";
    /**
    * Generates CDKTF code for importing a DataCloudflareZoneHold resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZoneHold to import
    * @param importFromId The id of the existing DataCloudflareZoneHold that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_hold#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZoneHold to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zone_hold cloudflare_zone_hold} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZoneHoldConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZoneHoldConfig);
    get hold(): any;
    get holdAfter(): any;
    get id(): any;
    get includeSubdomains(): any;
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
