import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DnsZoneTransfersTsigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_tsig#account_id DnsZoneTransfersTsig#account_id}
    */
    readonly accountId?: string;
    /**
    * TSIG algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_tsig#algo DnsZoneTransfersTsig#algo}
    */
    readonly algo: string;
    /**
    * TSIG key name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_tsig#name DnsZoneTransfersTsig#name}
    */
    readonly name: string;
    /**
    * TSIG secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_tsig#secret DnsZoneTransfersTsig#secret}
    */
    readonly secret: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_tsig cloudflare_dns_zone_transfers_tsig}
*/
export declare class DnsZoneTransfersTsig extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_dns_zone_transfers_tsig";
    /**
    * Generates CDKTF code for importing a DnsZoneTransfersTsig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsZoneTransfersTsig to import
    * @param importFromId The id of the existing DnsZoneTransfersTsig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_tsig#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsZoneTransfersTsig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_zone_transfers_tsig cloudflare_dns_zone_transfers_tsig} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsZoneTransfersTsigConfig
    */
    constructor(scope: Construct, id: string, config: DnsZoneTransfersTsigConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _algo?;
    get algo(): string;
    set algo(value: string);
    get algoInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _secret?;
    get secret(): string;
    set secret(value: string);
    get secretInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
