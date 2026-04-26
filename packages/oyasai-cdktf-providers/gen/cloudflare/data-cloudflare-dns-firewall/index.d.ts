import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareDnsFirewallConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewall#account_id DataCloudflareDnsFirewall#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewall#dns_firewall_id DataCloudflareDnsFirewall#dns_firewall_id}
    */
    readonly dnsFirewallId: string;
}
export interface DataCloudflareDnsFirewallAttackMitigation {
}
export declare function dataCloudflareDnsFirewallAttackMitigationToTerraform(struct?: DataCloudflareDnsFirewallAttackMitigation): any;
export declare function dataCloudflareDnsFirewallAttackMitigationToHclTerraform(struct?: DataCloudflareDnsFirewallAttackMitigation): any;
export declare class DataCloudflareDnsFirewallAttackMitigationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsFirewallAttackMitigation | undefined;
    set internalValue(value: DataCloudflareDnsFirewallAttackMitigation | undefined);
    get enabled(): any;
    get onlyWhenUpstreamUnhealthy(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewall cloudflare_dns_firewall}
*/
export declare class DataCloudflareDnsFirewall extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_dns_firewall";
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsFirewall resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsFirewall to import
    * @param importFromId The id of the existing DataCloudflareDnsFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewall#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsFirewall to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_firewall cloudflare_dns_firewall} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsFirewallConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareDnsFirewallConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _attackMitigation;
    get attackMitigation(): DataCloudflareDnsFirewallAttackMitigationOutputReference;
    get deprecateAnyRequests(): any;
    private _dnsFirewallId?;
    get dnsFirewallId(): string;
    set dnsFirewallId(value: string);
    get dnsFirewallIdInput(): string;
    get dnsFirewallIps(): any;
    get ecsFallback(): any;
    get id(): any;
    get maximumCacheTtl(): any;
    get minimumCacheTtl(): any;
    get modifiedOn(): any;
    get name(): any;
    get negativeCacheTtl(): any;
    get ratelimit(): any;
    get retries(): any;
    get upstreamIps(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
