import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareDnsZoneTransfersIncomingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_incoming#zone_id DataCloudflareDnsZoneTransfersIncoming#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming}
*/
export declare class DataCloudflareDnsZoneTransfersIncoming extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_dns_zone_transfers_incoming";
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersIncoming to import
    * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersIncoming that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_incoming#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersIncoming to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsZoneTransfersIncomingConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareDnsZoneTransfersIncomingConfig);
    get autoRefreshSeconds(): any;
    get checkedTime(): any;
    get createdTime(): any;
    get id(): any;
    get modifiedTime(): any;
    get name(): any;
    get peers(): any;
    get soaSerial(): any;
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
