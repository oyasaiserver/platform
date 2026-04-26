import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DnsZoneTransfersOutgoingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Zone name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_outgoing#name DnsZoneTransfersOutgoing#name}
    */
    readonly name: string;
    /**
    * A list of peer tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_outgoing#peers DnsZoneTransfersOutgoing#peers}
    */
    readonly peers: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_outgoing#zone_id DnsZoneTransfersOutgoing#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing}
*/
export declare class DnsZoneTransfersOutgoing extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_dns_zone_transfers_outgoing";
    /**
    * Generates CDKTF code for importing a DnsZoneTransfersOutgoing resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsZoneTransfersOutgoing to import
    * @param importFromId The id of the existing DnsZoneTransfersOutgoing that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_outgoing#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsZoneTransfersOutgoing to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsZoneTransfersOutgoingConfig
    */
    constructor(scope: Construct, id: string, config: DnsZoneTransfersOutgoingConfig);
    get checkedTime(): any;
    get createdTime(): any;
    get id(): any;
    get lastTransferredTime(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _peers?;
    get peers(): string[];
    set peers(value: string[]);
    get peersInput(): string[];
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
