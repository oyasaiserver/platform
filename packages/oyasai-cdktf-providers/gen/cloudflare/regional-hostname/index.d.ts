import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RegionalHostnameConfig extends cdktf.TerraformMetaArguments {
    /**
    * DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are supported for one level, e.g `*.example.com`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname#hostname RegionalHostname#hostname}
    */
    readonly hostname: string;
    /**
    * Identifying key for the region
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname#region_key RegionalHostname#region_key}
    */
    readonly regionKey: string;
    /**
    * Configure which routing method to use for the regional hostname
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname#routing RegionalHostname#routing}
    */
    readonly routing?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname#zone_id RegionalHostname#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname cloudflare_regional_hostname}
*/
export declare class RegionalHostname extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_regional_hostname";
    /**
    * Generates CDKTF code for importing a RegionalHostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RegionalHostname to import
    * @param importFromId The id of the existing RegionalHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RegionalHostname to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/regional_hostname cloudflare_regional_hostname} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RegionalHostnameConfig
    */
    constructor(scope: Construct, id: string, config: RegionalHostnameConfig);
    get createdOn(): any;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
    get id(): any;
    private _regionKey?;
    get regionKey(): string;
    set regionKey(value: string);
    get regionKeyInput(): string;
    private _routing?;
    get routing(): string;
    set routing(value: string);
    resetRouting(): void;
    get routingInput(): string;
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
