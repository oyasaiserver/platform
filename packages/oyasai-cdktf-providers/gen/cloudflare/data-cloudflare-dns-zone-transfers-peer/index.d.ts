import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareDnsZoneTransfersPeerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peer#account_id DataCloudflareDnsZoneTransfersPeer#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peer#peer_id DataCloudflareDnsZoneTransfersPeer#peer_id}
    */
    readonly peerId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer}
*/
export declare class DataCloudflareDnsZoneTransfersPeer extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_dns_zone_transfers_peer";
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsZoneTransfersPeer to import
    * @param importFromId The id of the existing DataCloudflareDnsZoneTransfersPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsZoneTransfersPeer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsZoneTransfersPeerConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareDnsZoneTransfersPeerConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    get ip(): any;
    get ixfrEnable(): any;
    get name(): any;
    private _peerId?;
    get peerId(): string;
    set peerId(value: string);
    get peerIdInput(): string;
    get port(): any;
    get tsigId(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
