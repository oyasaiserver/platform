import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareDnsZoneTransfersOutgoingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_outgoing#zone_id DataCloudflareDnsZoneTransfersOutgoing#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing}
*/
export declare class DataCloudflareDnsZoneTransfersOutgoing extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_dns_zone_transfers_outgoing";
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersOutgoing resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersOutgoing to import
    * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersOutgoing that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_outgoing#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersOutgoing to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsZoneTransfersOutgoingConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareDnsZoneTransfersOutgoingConfig);
    get checkedTime(): any;
    get createdTime(): any;
    get id(): any;
    get lastTransferredTime(): any;
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
