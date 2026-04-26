import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflarePageShieldConnectionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections#connection_id DataCloudflarePageShieldConnections#connection_id}
    */
    readonly connectionId: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections#zone_id DataCloudflarePageShieldConnections#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections cloudflare_page_shield_connections}
*/
export declare class DataCloudflarePageShieldConnections extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_page_shield_connections";
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldConnections resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldConnections to import
    * @param importFromId The id of the existing DataCloudflarePageShieldConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldConnections to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_connections cloudflare_page_shield_connections} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldConnectionsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflarePageShieldConnectionsConfig);
    get addedAt(): any;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    get connectionIdInput(): string;
    get domainReportedMalicious(): any;
    get firstPageUrl(): any;
    get firstSeenAt(): any;
    get host(): any;
    get id(): any;
    get lastSeenAt(): any;
    get maliciousDomainCategories(): any;
    get maliciousUrlCategories(): any;
    get pageUrls(): any;
    get url(): any;
    get urlContainsCdnCgiPath(): any;
    get urlReportedMalicious(): any;
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
