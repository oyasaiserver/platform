import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DnsZoneTransfersIncomingConfig extends cdktf.TerraformMetaArguments {
    /**
    * How often should a secondary zone auto refresh regardless of DNS NOTIFY.
    * Not applicable for primary zones.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming#auto_refresh_seconds DnsZoneTransfersIncoming#auto_refresh_seconds}
    */
    readonly autoRefreshSeconds?: number;
    /**
    * Zone name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming#name DnsZoneTransfersIncoming#name}
    */
    readonly name: string;
    /**
    * A list of peer tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming#peers DnsZoneTransfersIncoming#peers}
    */
    readonly peers: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming#zone_id DnsZoneTransfersIncoming#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming}
*/
export declare class DnsZoneTransfersIncoming extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_dns_zone_transfers_incoming";
    /**
    * Generates CDKTF code for importing a DnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsZoneTransfersIncoming to import
    * @param importFromId The id of the existing DnsZoneTransfersIncoming that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsZoneTransfersIncoming to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsZoneTransfersIncomingConfig
    */
    constructor(scope: Construct, id: string, config: DnsZoneTransfersIncomingConfig);
    private _autoRefreshSeconds?;
    get autoRefreshSeconds(): number;
    set autoRefreshSeconds(value: number);
    resetAutoRefreshSeconds(): void;
    get autoRefreshSecondsInput(): number;
    get checkedTime(): any;
    get createdTime(): any;
    get id(): any;
    get modifiedTime(): any;
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
