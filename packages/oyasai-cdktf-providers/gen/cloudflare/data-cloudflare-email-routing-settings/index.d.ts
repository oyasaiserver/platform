import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailRoutingSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_settings#zone_id DataCloudflareEmailRoutingSettings#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_settings cloudflare_email_routing_settings}
*/
export declare class DataCloudflareEmailRoutingSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_routing_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingSettings to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_settings cloudflare_email_routing_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailRoutingSettingsConfig);
    get created(): any;
    get enabled(): any;
    get id(): any;
    get modified(): any;
    get name(): any;
    get skipWizard(): any;
    get status(): any;
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
