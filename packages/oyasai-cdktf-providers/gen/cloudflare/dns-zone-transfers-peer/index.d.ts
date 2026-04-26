import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DnsZoneTransfersPeerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}
    */
    readonly accountId?: string;
    /**
    * IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary zones this IP defines the IP of the primary nameserver Cloudflare will send AXFR/IXFR requests to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_peer#ip DnsZoneTransfersPeer#ip}
    */
    readonly ip?: string;
    /**
    * Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_peer#ixfr_enable DnsZoneTransfersPeer#ixfr_enable}
    */
    readonly ixfrEnable?: boolean | cdktf.IResolvable;
    /**
    * The name of the peer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_peer#name DnsZoneTransfersPeer#name}
    */
    readonly name: string;
    /**
    * DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_peer#port DnsZoneTransfersPeer#port}
    */
    readonly port?: number;
    /**
    * TSIG authentication will be used for zone transfer if configured.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_peer#tsig_id DnsZoneTransfersPeer#tsig_id}
    */
    readonly tsigId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer}
*/
export declare class DnsZoneTransfersPeer extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_dns_zone_transfers_peer";
    /**
    * Generates CDKTF code for importing a DnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsZoneTransfersPeer to import
    * @param importFromId The id of the existing DnsZoneTransfersPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_peer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsZoneTransfersPeer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsZoneTransfersPeerConfig
    */
    constructor(scope: Construct, id: string, config: DnsZoneTransfersPeerConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): any;
    private _ip?;
    get ip(): string;
    set ip(value: string);
    resetIp(): void;
    get ipInput(): string;
    private _ixfrEnable?;
    get ixfrEnable(): boolean | cdktf.IResolvable;
    set ixfrEnable(value: boolean | cdktf.IResolvable);
    resetIxfrEnable(): void;
    get ixfrEnableInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _tsigId?;
    get tsigId(): string;
    set tsigId(value: string);
    resetTsigId(): void;
    get tsigIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
