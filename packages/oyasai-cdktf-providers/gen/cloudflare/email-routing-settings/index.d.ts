import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmailRoutingSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_settings#zone_id EmailRoutingSettings#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_settings cloudflare_email_routing_settings}
*/
export declare class EmailRoutingSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_email_routing_settings";
    /**
    * Generates CDKTF code for importing a EmailRoutingSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailRoutingSettings to import
    * @param importFromId The id of the existing EmailRoutingSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailRoutingSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_settings cloudflare_email_routing_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailRoutingSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EmailRoutingSettingsConfig);
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
