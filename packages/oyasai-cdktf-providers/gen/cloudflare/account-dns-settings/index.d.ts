import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccountDnsSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#account_id AccountDnsSettings#account_id}
    */
    readonly accountId?: string;
    /**
    * When enabled, forces all proxied DNS records in the account to behave as DNS-only at the edge, regardless of each record's individual proxy setting. Note that this account-level override does not modify the records themselves; it only affects how they are served at the edge. See more on [Enforce DNS-only](https://developers.cloudflare.com/dns/proxy-status/enforce-dns-only).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#enforce_dns_only AccountDnsSettings#enforce_dns_only}
    */
    readonly enforceDnsOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}
    */
    readonly zoneDefaults?: AccountDnsSettingsZoneDefaults;
}
export interface AccountDnsSettingsZoneDefaultsInternalDns {
    /**
    * The ID of the zone to fallback to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#reference_zone_id AccountDnsSettings#reference_zone_id}
    */
    readonly referenceZoneId?: string;
}
export declare function accountDnsSettingsZoneDefaultsInternalDnsToTerraform(struct?: AccountDnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable): any;
export declare function accountDnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct?: AccountDnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable): any;
export declare class AccountDnsSettingsZoneDefaultsInternalDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountDnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable | undefined;
    set internalValue(value: AccountDnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable | undefined);
    private _referenceZoneId?;
    get referenceZoneId(): string;
    set referenceZoneId(value: string);
    resetReferenceZoneId(): void;
    get referenceZoneIdInput(): string;
}
export interface AccountDnsSettingsZoneDefaultsNameservers {
    /**
    * Nameserver type
    * Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#type AccountDnsSettings#type}
    */
    readonly type?: string;
}
export declare function accountDnsSettingsZoneDefaultsNameserversToTerraform(struct?: AccountDnsSettingsZoneDefaultsNameservers | cdktf.IResolvable): any;
export declare function accountDnsSettingsZoneDefaultsNameserversToHclTerraform(struct?: AccountDnsSettingsZoneDefaultsNameservers | cdktf.IResolvable): any;
export declare class AccountDnsSettingsZoneDefaultsNameserversOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountDnsSettingsZoneDefaultsNameservers | cdktf.IResolvable | undefined;
    set internalValue(value: AccountDnsSettingsZoneDefaultsNameservers | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface AccountDnsSettingsZoneDefaultsSoa {
    /**
    * Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#expire AccountDnsSettings#expire}
    */
    readonly expire?: number;
    /**
    * The time to live (TTL) for negative caching of records within the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#min_ttl AccountDnsSettings#min_ttl}
    */
    readonly minTtl?: number;
    /**
    * The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#mname AccountDnsSettings#mname}
    */
    readonly mname?: string;
    /**
    * Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#refresh AccountDnsSettings#refresh}
    */
    readonly refresh?: number;
    /**
    * Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#retry AccountDnsSettings#retry}
    */
    readonly retry?: number;
    /**
    * The email address of the zone administrator, with the first label representing the local part of the email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#rname AccountDnsSettings#rname}
    */
    readonly rname?: string;
    /**
    * The time to live (TTL) of the SOA record itself.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#ttl AccountDnsSettings#ttl}
    */
    readonly ttl?: number;
}
export declare function accountDnsSettingsZoneDefaultsSoaToTerraform(struct?: AccountDnsSettingsZoneDefaultsSoa | cdktf.IResolvable): any;
export declare function accountDnsSettingsZoneDefaultsSoaToHclTerraform(struct?: AccountDnsSettingsZoneDefaultsSoa | cdktf.IResolvable): any;
export declare class AccountDnsSettingsZoneDefaultsSoaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountDnsSettingsZoneDefaultsSoa | cdktf.IResolvable | undefined;
    set internalValue(value: AccountDnsSettingsZoneDefaultsSoa | cdktf.IResolvable | undefined);
    private _expire?;
    get expire(): number;
    set expire(value: number);
    resetExpire(): void;
    get expireInput(): number;
    private _minTtl?;
    get minTtl(): number;
    set minTtl(value: number);
    resetMinTtl(): void;
    get minTtlInput(): number;
    private _mname?;
    get mname(): string;
    set mname(value: string);
    resetMname(): void;
    get mnameInput(): string;
    private _refresh?;
    get refresh(): number;
    set refresh(value: number);
    resetRefresh(): void;
    get refreshInput(): number;
    private _retry?;
    get retry(): number;
    set retry(value: number);
    resetRetry(): void;
    get retryInput(): number;
    private _rname?;
    get rname(): string;
    set rname(value: string);
    resetRname(): void;
    get rnameInput(): string;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    resetTtl(): void;
    get ttlInput(): number;
}
export interface AccountDnsSettingsZoneDefaults {
    /**
    * Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#flatten_all_cnames AccountDnsSettings#flatten_all_cnames}
    */
    readonly flattenAllCnames?: boolean | cdktf.IResolvable;
    /**
    * Whether to enable Foundation DNS Advanced Nameservers on the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#foundation_dns AccountDnsSettings#foundation_dns}
    */
    readonly foundationDns?: boolean | cdktf.IResolvable;
    /**
    * Settings for this internal zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#internal_dns AccountDnsSettings#internal_dns}
    */
    readonly internalDns?: AccountDnsSettingsZoneDefaultsInternalDns;
    /**
    * Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#multi_provider AccountDnsSettings#multi_provider}
    */
    readonly multiProvider?: boolean | cdktf.IResolvable;
    /**
    * Settings determining the nameservers through which the zone should be available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#nameservers AccountDnsSettings#nameservers}
    */
    readonly nameservers?: AccountDnsSettingsZoneDefaultsNameservers;
    /**
    * The time to live (TTL) of the zone's nameserver (NS) records.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#ns_ttl AccountDnsSettings#ns_ttl}
    */
    readonly nsTtl?: number;
    /**
    * Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#secondary_overrides AccountDnsSettings#secondary_overrides}
    */
    readonly secondaryOverrides?: boolean | cdktf.IResolvable;
    /**
    * Components of the zone's SOA record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#soa AccountDnsSettings#soa}
    */
    readonly soa?: AccountDnsSettingsZoneDefaultsSoa;
    /**
    * Whether the zone mode is a regular or CDN/DNS only zone.
    * Available values: "standard", "cdn_only", "dns_only".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#zone_mode AccountDnsSettings#zone_mode}
    */
    readonly zoneMode?: string;
}
export declare function accountDnsSettingsZoneDefaultsToTerraform(struct?: AccountDnsSettingsZoneDefaults | cdktf.IResolvable): any;
export declare function accountDnsSettingsZoneDefaultsToHclTerraform(struct?: AccountDnsSettingsZoneDefaults | cdktf.IResolvable): any;
export declare class AccountDnsSettingsZoneDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccountDnsSettingsZoneDefaults | cdktf.IResolvable | undefined;
    set internalValue(value: AccountDnsSettingsZoneDefaults | cdktf.IResolvable | undefined);
    private _flattenAllCnames?;
    get flattenAllCnames(): boolean | cdktf.IResolvable;
    set flattenAllCnames(value: boolean | cdktf.IResolvable);
    resetFlattenAllCnames(): void;
    get flattenAllCnamesInput(): any;
    private _foundationDns?;
    get foundationDns(): boolean | cdktf.IResolvable;
    set foundationDns(value: boolean | cdktf.IResolvable);
    resetFoundationDns(): void;
    get foundationDnsInput(): any;
    private _internalDns;
    get internalDns(): AccountDnsSettingsZoneDefaultsInternalDnsOutputReference;
    putInternalDns(value: AccountDnsSettingsZoneDefaultsInternalDns): void;
    resetInternalDns(): void;
    get internalDnsInput(): any;
    private _multiProvider?;
    get multiProvider(): boolean | cdktf.IResolvable;
    set multiProvider(value: boolean | cdktf.IResolvable);
    resetMultiProvider(): void;
    get multiProviderInput(): any;
    private _nameservers;
    get nameservers(): AccountDnsSettingsZoneDefaultsNameserversOutputReference;
    putNameservers(value: AccountDnsSettingsZoneDefaultsNameservers): void;
    resetNameservers(): void;
    get nameserversInput(): any;
    private _nsTtl?;
    get nsTtl(): number;
    set nsTtl(value: number);
    resetNsTtl(): void;
    get nsTtlInput(): number;
    private _secondaryOverrides?;
    get secondaryOverrides(): boolean | cdktf.IResolvable;
    set secondaryOverrides(value: boolean | cdktf.IResolvable);
    resetSecondaryOverrides(): void;
    get secondaryOverridesInput(): any;
    private _soa;
    get soa(): AccountDnsSettingsZoneDefaultsSoaOutputReference;
    putSoa(value: AccountDnsSettingsZoneDefaultsSoa): void;
    resetSoa(): void;
    get soaInput(): any;
    private _zoneMode?;
    get zoneMode(): string;
    set zoneMode(value: string);
    resetZoneMode(): void;
    get zoneModeInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings cloudflare_account_dns_settings}
*/
export declare class AccountDnsSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_account_dns_settings";
    /**
    * Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccountDnsSettings to import
    * @param importFromId The id of the existing AccountDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccountDnsSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/account_dns_settings cloudflare_account_dns_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccountDnsSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AccountDnsSettingsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _enforceDnsOnly?;
    get enforceDnsOnly(): boolean | cdktf.IResolvable;
    set enforceDnsOnly(value: boolean | cdktf.IResolvable);
    resetEnforceDnsOnly(): void;
    get enforceDnsOnlyInput(): any;
    private _zoneDefaults;
    get zoneDefaults(): AccountDnsSettingsZoneDefaultsOutputReference;
    putZoneDefaults(value: AccountDnsSettingsZoneDefaults): void;
    resetZoneDefaults(): void;
    get zoneDefaultsInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
