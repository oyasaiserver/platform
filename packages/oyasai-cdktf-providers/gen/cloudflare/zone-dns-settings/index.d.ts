import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZoneDnsSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#flatten_all_cnames ZoneDnsSettings#flatten_all_cnames}
    */
    readonly flattenAllCnames?: boolean | cdktf.IResolvable;
    /**
    * Whether to enable Foundation DNS Advanced Nameservers on the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#foundation_dns ZoneDnsSettings#foundation_dns}
    */
    readonly foundationDns?: boolean | cdktf.IResolvable;
    /**
    * Settings for this internal zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#internal_dns ZoneDnsSettings#internal_dns}
    */
    readonly internalDns?: ZoneDnsSettingsInternalDns;
    /**
    * Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#multi_provider ZoneDnsSettings#multi_provider}
    */
    readonly multiProvider?: boolean | cdktf.IResolvable;
    /**
    * Settings determining the nameservers through which the zone should be available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#nameservers ZoneDnsSettings#nameservers}
    */
    readonly nameservers?: ZoneDnsSettingsNameservers;
    /**
    * The time to live (TTL) of the zone's nameserver (NS) records.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#ns_ttl ZoneDnsSettings#ns_ttl}
    */
    readonly nsTtl?: number;
    /**
    * Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#secondary_overrides ZoneDnsSettings#secondary_overrides}
    */
    readonly secondaryOverrides?: boolean | cdktf.IResolvable;
    /**
    * Components of the zone's SOA record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#soa ZoneDnsSettings#soa}
    */
    readonly soa?: ZoneDnsSettingsSoa;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#zone_id ZoneDnsSettings#zone_id}
    */
    readonly zoneId?: string;
    /**
    * Whether the zone mode is a regular or CDN/DNS only zone.
    * Available values: "standard", "cdn_only", "dns_only".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#zone_mode ZoneDnsSettings#zone_mode}
    */
    readonly zoneMode?: string;
}
export interface ZoneDnsSettingsInternalDns {
    /**
    * The ID of the zone to fallback to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#reference_zone_id ZoneDnsSettings#reference_zone_id}
    */
    readonly referenceZoneId?: string;
}
export declare function zoneDnsSettingsInternalDnsToTerraform(struct?: ZoneDnsSettingsInternalDns | cdktf.IResolvable): any;
export declare function zoneDnsSettingsInternalDnsToHclTerraform(struct?: ZoneDnsSettingsInternalDns | cdktf.IResolvable): any;
export declare class ZoneDnsSettingsInternalDnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZoneDnsSettingsInternalDns | cdktf.IResolvable | undefined;
    set internalValue(value: ZoneDnsSettingsInternalDns | cdktf.IResolvable | undefined);
    private _referenceZoneId?;
    get referenceZoneId(): string;
    set referenceZoneId(value: string);
    resetReferenceZoneId(): void;
    get referenceZoneIdInput(): string;
}
export interface ZoneDnsSettingsNameservers {
    /**
    * Configured nameserver set to be used for this zone
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#ns_set ZoneDnsSettings#ns_set}
    */
    readonly nsSet?: number;
    /**
    * Nameserver type
    * Available values: "cloudflare.standard", "custom.account", "custom.tenant", "custom.zone".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#type ZoneDnsSettings#type}
    */
    readonly type?: string;
}
export declare function zoneDnsSettingsNameserversToTerraform(struct?: ZoneDnsSettingsNameservers | cdktf.IResolvable): any;
export declare function zoneDnsSettingsNameserversToHclTerraform(struct?: ZoneDnsSettingsNameservers | cdktf.IResolvable): any;
export declare class ZoneDnsSettingsNameserversOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZoneDnsSettingsNameservers | cdktf.IResolvable | undefined;
    set internalValue(value: ZoneDnsSettingsNameservers | cdktf.IResolvable | undefined);
    private _nsSet?;
    get nsSet(): number;
    set nsSet(value: number);
    resetNsSet(): void;
    get nsSetInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface ZoneDnsSettingsSoa {
    /**
    * Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#expire ZoneDnsSettings#expire}
    */
    readonly expire?: number;
    /**
    * The time to live (TTL) for negative caching of records within the zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#min_ttl ZoneDnsSettings#min_ttl}
    */
    readonly minTtl?: number;
    /**
    * The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#mname ZoneDnsSettings#mname}
    */
    readonly mname?: string;
    /**
    * Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#refresh ZoneDnsSettings#refresh}
    */
    readonly refresh?: number;
    /**
    * Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#retry ZoneDnsSettings#retry}
    */
    readonly retry?: number;
    /**
    * The email address of the zone administrator, with the first label representing the local part of the email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#rname ZoneDnsSettings#rname}
    */
    readonly rname?: string;
    /**
    * The time to live (TTL) of the SOA record itself.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#ttl ZoneDnsSettings#ttl}
    */
    readonly ttl?: number;
}
export declare function zoneDnsSettingsSoaToTerraform(struct?: ZoneDnsSettingsSoa | cdktf.IResolvable): any;
export declare function zoneDnsSettingsSoaToHclTerraform(struct?: ZoneDnsSettingsSoa | cdktf.IResolvable): any;
export declare class ZoneDnsSettingsSoaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZoneDnsSettingsSoa | cdktf.IResolvable | undefined;
    set internalValue(value: ZoneDnsSettingsSoa | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings cloudflare_zone_dns_settings}
*/
export declare class ZoneDnsSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zone_dns_settings";
    /**
    * Generates CDKTF code for importing a ZoneDnsSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZoneDnsSettings to import
    * @param importFromId The id of the existing ZoneDnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZoneDnsSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zone_dns_settings cloudflare_zone_dns_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZoneDnsSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ZoneDnsSettingsConfig);
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
    get internalDns(): ZoneDnsSettingsInternalDnsOutputReference;
    putInternalDns(value: ZoneDnsSettingsInternalDns): void;
    resetInternalDns(): void;
    get internalDnsInput(): any;
    private _multiProvider?;
    get multiProvider(): boolean | cdktf.IResolvable;
    set multiProvider(value: boolean | cdktf.IResolvable);
    resetMultiProvider(): void;
    get multiProviderInput(): any;
    private _nameservers;
    get nameservers(): ZoneDnsSettingsNameserversOutputReference;
    putNameservers(value: ZoneDnsSettingsNameservers): void;
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
    get soa(): ZoneDnsSettingsSoaOutputReference;
    putSoa(value: ZoneDnsSettingsSoa): void;
    resetSoa(): void;
    get soaInput(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    private _zoneMode?;
    get zoneMode(): string;
    set zoneMode(value: string);
    resetZoneMode(): void;
    get zoneModeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
