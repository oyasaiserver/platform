import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareRegionalHostnameConfig extends cdktf.TerraformMetaArguments {
    /**
    * DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are supported for one level, e.g `*.example.com`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_hostname#hostname DataCloudflareRegionalHostname#hostname}
    */
    readonly hostname: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_hostname#zone_id DataCloudflareRegionalHostname#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_hostname cloudflare_regional_hostname}
*/
export declare class DataCloudflareRegionalHostname extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_regional_hostname";
    /**
    * Generates CDKTF code for importing a DataCloudflareRegionalHostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRegionalHostname to import
    * @param importFromId The id of the existing DataCloudflareRegionalHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRegionalHostname to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/regional_hostname cloudflare_regional_hostname} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRegionalHostnameConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareRegionalHostnameConfig);
    get createdOn(): any;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
    get id(): any;
    get regionKey(): any;
    get routing(): any;
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
