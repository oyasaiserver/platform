import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MagicTransitSiteWanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#account_id MagicTransitSiteWan#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}
    */
    readonly physport: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}
    */
    readonly priority?: number;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#site_id MagicTransitSiteWan#site_id}
    */
    readonly siteId: string;
    /**
    * (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#static_addressing MagicTransitSiteWan#static_addressing}
    */
    readonly staticAddressing?: MagicTransitSiteWanStaticAddressing;
    /**
    * VLAN ID. Use zero for untagged.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#vlan_tag MagicTransitSiteWan#vlan_tag}
    */
    readonly vlanTag?: number;
}
export interface MagicTransitSiteWanStaticAddressing {
    /**
    * A valid CIDR notation representing an IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#address MagicTransitSiteWan#address}
    */
    readonly address: string;
    /**
    * A valid IPv4 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#gateway_address MagicTransitSiteWan#gateway_address}
    */
    readonly gatewayAddress: string;
    /**
    * A valid CIDR notation representing an IP range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#secondary_address MagicTransitSiteWan#secondary_address}
    */
    readonly secondaryAddress?: string;
}
export declare function magicTransitSiteWanStaticAddressingToTerraform(struct?: MagicTransitSiteWanStaticAddressing | cdktf.IResolvable): any;
export declare function magicTransitSiteWanStaticAddressingToHclTerraform(struct?: MagicTransitSiteWanStaticAddressing | cdktf.IResolvable): any;
export declare class MagicTransitSiteWanStaticAddressingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MagicTransitSiteWanStaticAddressing | cdktf.IResolvable | undefined;
    set internalValue(value: MagicTransitSiteWanStaticAddressing | cdktf.IResolvable | undefined);
    private _address?;
    get address(): string;
    set address(value: string);
    get addressInput(): string;
    private _gatewayAddress?;
    get gatewayAddress(): string;
    set gatewayAddress(value: string);
    get gatewayAddressInput(): string;
    private _secondaryAddress?;
    get secondaryAddress(): string;
    set secondaryAddress(value: string);
    resetSecondaryAddress(): void;
    get secondaryAddressInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan}
*/
export declare class MagicTransitSiteWan extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_magic_transit_site_wan";
    /**
    * Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MagicTransitSiteWan to import
    * @param importFromId The id of the existing MagicTransitSiteWan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MagicTransitSiteWan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MagicTransitSiteWanConfig
    */
    constructor(scope: Construct, id: string, config: MagicTransitSiteWanConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get healthCheckRate(): any;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _physport?;
    get physport(): number;
    set physport(value: number);
    get physportInput(): number;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    get siteIdInput(): string;
    private _staticAddressing;
    get staticAddressing(): MagicTransitSiteWanStaticAddressingOutputReference;
    putStaticAddressing(value: MagicTransitSiteWanStaticAddressing): void;
    resetStaticAddressing(): void;
    get staticAddressingInput(): any;
    private _vlanTag?;
    get vlanTag(): number;
    set vlanTag(value: number);
    resetVlanTag(): void;
    get vlanTagInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
