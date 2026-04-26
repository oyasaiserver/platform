import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDeviceDefaultProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}
    */
    readonly accountId: string;
    /**
    * Whether to allow the user to switch WARP between modes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#allow_mode_switch ZeroTrustDeviceDefaultProfile#allow_mode_switch}
    */
    readonly allowModeSwitch?: boolean | cdktf.IResolvable;
    /**
    * Whether to receive update notifications when a new version of the client is available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#allow_updates ZeroTrustDeviceDefaultProfile#allow_updates}
    */
    readonly allowUpdates?: boolean | cdktf.IResolvable;
    /**
    * Whether to allow devices to leave the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#allowed_to_leave ZeroTrustDeviceDefaultProfile#allowed_to_leave}
    */
    readonly allowedToLeave?: boolean | cdktf.IResolvable;
    /**
    * The amount of time in seconds to reconnect after having been disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#auto_connect ZeroTrustDeviceDefaultProfile#auto_connect}
    */
    readonly autoConnect?: number;
    /**
    * Turn on the captive portal after the specified amount of time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#captive_portal ZeroTrustDeviceDefaultProfile#captive_portal}
    */
    readonly captivePortal?: number;
    /**
    * If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#disable_auto_fallback ZeroTrustDeviceDefaultProfile#disable_auto_fallback}
    */
    readonly disableAutoFallback?: boolean | cdktf.IResolvable;
    /**
    * List of routes excluded in the WARP client's tunnel. Both 'exclude' and 'include' cannot be set in the same request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#exclude ZeroTrustDeviceDefaultProfile#exclude}
    */
    readonly exclude?: ZeroTrustDeviceDefaultProfileExclude[] | cdktf.IResolvable;
    /**
    * Whether to add Microsoft IPs to Split Tunnel exclusions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#exclude_office_ips ZeroTrustDeviceDefaultProfile#exclude_office_ips}
    */
    readonly excludeOfficeIps?: boolean | cdktf.IResolvable;
    /**
    * List of routes included in the WARP client's tunnel. Both 'exclude' and 'include' cannot be set in the same request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#include ZeroTrustDeviceDefaultProfile#include}
    */
    readonly include?: ZeroTrustDeviceDefaultProfileInclude[] | cdktf.IResolvable;
    /**
    * The amount of time in minutes a user is allowed access to their LAN. A value of 0 will allow LAN access until the next WARP reconnection, such as a reboot or a laptop waking from sleep. Note that this field is omitted from the response if null or unset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#lan_allow_minutes ZeroTrustDeviceDefaultProfile#lan_allow_minutes}
    */
    readonly lanAllowMinutes?: number;
    /**
    * The size of the subnet for the local access network. Note that this field is omitted from the response if null or unset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#lan_allow_subnet_size ZeroTrustDeviceDefaultProfile#lan_allow_subnet_size}
    */
    readonly lanAllowSubnetSize?: number;
    /**
    * Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#register_interface_ip_with_dns ZeroTrustDeviceDefaultProfile#register_interface_ip_with_dns}
    */
    readonly registerInterfaceIpWithDns?: boolean | cdktf.IResolvable;
    /**
    * Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#sccm_vpn_boundary_support ZeroTrustDeviceDefaultProfile#sccm_vpn_boundary_support}
    */
    readonly sccmVpnBoundarySupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}
    */
    readonly serviceModeV2?: ZeroTrustDeviceDefaultProfileServiceModeV2;
    /**
    * The URL to launch when the Send Feedback button is clicked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#support_url ZeroTrustDeviceDefaultProfile#support_url}
    */
    readonly supportUrl?: string;
    /**
    * Whether to allow the user to turn off the WARP switch and disconnect the client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#switch_locked ZeroTrustDeviceDefaultProfile#switch_locked}
    */
    readonly switchLocked?: boolean | cdktf.IResolvable;
    /**
    * Determines which tunnel protocol to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#tunnel_protocol ZeroTrustDeviceDefaultProfile#tunnel_protocol}
    */
    readonly tunnelProtocol?: string;
}
export interface ZeroTrustDeviceDefaultProfileExclude {
    /**
    * The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#address ZeroTrustDeviceDefaultProfile#address}
    */
    readonly address?: string;
    /**
    * A description of the Split Tunnel item, displayed in the client UI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#description ZeroTrustDeviceDefaultProfile#description}
    */
    readonly description?: string;
    /**
    * The domain name to exclude from the tunnel. If `host` is present, `address` must not be present.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#host ZeroTrustDeviceDefaultProfile#host}
    */
    readonly host?: string;
}
export declare function zeroTrustDeviceDefaultProfileExcludeToTerraform(struct?: ZeroTrustDeviceDefaultProfileExclude | cdktf.IResolvable): any;
export declare function zeroTrustDeviceDefaultProfileExcludeToHclTerraform(struct?: ZeroTrustDeviceDefaultProfileExclude | cdktf.IResolvable): any;
export declare class ZeroTrustDeviceDefaultProfileExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDeviceDefaultProfileExclude | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDeviceDefaultProfileExclude | cdktf.IResolvable | undefined);
    private _address?;
    get address(): string;
    set address(value: string);
    resetAddress(): void;
    get addressInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
}
export declare class ZeroTrustDeviceDefaultProfileExcludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDeviceDefaultProfileExclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDeviceDefaultProfileExcludeOutputReference;
}
export interface ZeroTrustDeviceDefaultProfileFallbackDomains {
}
export declare function zeroTrustDeviceDefaultProfileFallbackDomainsToTerraform(struct?: ZeroTrustDeviceDefaultProfileFallbackDomains): any;
export declare function zeroTrustDeviceDefaultProfileFallbackDomainsToHclTerraform(struct?: ZeroTrustDeviceDefaultProfileFallbackDomains): any;
export declare class ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDeviceDefaultProfileFallbackDomains | undefined;
    set internalValue(value: ZeroTrustDeviceDefaultProfileFallbackDomains | undefined);
    get description(): any;
    get dnsServer(): any;
    get suffix(): any;
}
export declare class ZeroTrustDeviceDefaultProfileFallbackDomainsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference;
}
export interface ZeroTrustDeviceDefaultProfileInclude {
    /**
    * The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#address ZeroTrustDeviceDefaultProfile#address}
    */
    readonly address?: string;
    /**
    * A description of the Split Tunnel item, displayed in the client UI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#description ZeroTrustDeviceDefaultProfile#description}
    */
    readonly description?: string;
    /**
    * The domain name to include in the tunnel. If `host` is present, `address` must not be present.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#host ZeroTrustDeviceDefaultProfile#host}
    */
    readonly host?: string;
}
export declare function zeroTrustDeviceDefaultProfileIncludeToTerraform(struct?: ZeroTrustDeviceDefaultProfileInclude | cdktf.IResolvable): any;
export declare function zeroTrustDeviceDefaultProfileIncludeToHclTerraform(struct?: ZeroTrustDeviceDefaultProfileInclude | cdktf.IResolvable): any;
export declare class ZeroTrustDeviceDefaultProfileIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDeviceDefaultProfileInclude | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDeviceDefaultProfileInclude | cdktf.IResolvable | undefined);
    private _address?;
    get address(): string;
    set address(value: string);
    resetAddress(): void;
    get addressInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string;
}
export declare class ZeroTrustDeviceDefaultProfileIncludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDeviceDefaultProfileInclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDeviceDefaultProfileIncludeOutputReference;
}
export interface ZeroTrustDeviceDefaultProfileServiceModeV2 {
    /**
    * The mode to run the WARP client under.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#mode ZeroTrustDeviceDefaultProfile#mode}
    */
    readonly mode?: string;
    /**
    * The port number when used with proxy mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#port ZeroTrustDeviceDefaultProfile#port}
    */
    readonly port?: number;
}
export declare function zeroTrustDeviceDefaultProfileServiceModeV2ToTerraform(struct?: ZeroTrustDeviceDefaultProfileServiceModeV2 | cdktf.IResolvable): any;
export declare function zeroTrustDeviceDefaultProfileServiceModeV2ToHclTerraform(struct?: ZeroTrustDeviceDefaultProfileServiceModeV2 | cdktf.IResolvable): any;
export declare class ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDeviceDefaultProfileServiceModeV2 | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDeviceDefaultProfileServiceModeV2 | cdktf.IResolvable | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile}
*/
export declare class ZeroTrustDeviceDefaultProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_default_profile";
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceDefaultProfile to import
    * @param importFromId The id of the existing ZeroTrustDeviceDefaultProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceDefaultProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceDefaultProfileConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDeviceDefaultProfileConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    private _allowModeSwitch?;
    get allowModeSwitch(): boolean | cdktf.IResolvable;
    set allowModeSwitch(value: boolean | cdktf.IResolvable);
    resetAllowModeSwitch(): void;
    get allowModeSwitchInput(): any;
    private _allowUpdates?;
    get allowUpdates(): boolean | cdktf.IResolvable;
    set allowUpdates(value: boolean | cdktf.IResolvable);
    resetAllowUpdates(): void;
    get allowUpdatesInput(): any;
    private _allowedToLeave?;
    get allowedToLeave(): boolean | cdktf.IResolvable;
    set allowedToLeave(value: boolean | cdktf.IResolvable);
    resetAllowedToLeave(): void;
    get allowedToLeaveInput(): any;
    private _autoConnect?;
    get autoConnect(): number;
    set autoConnect(value: number);
    resetAutoConnect(): void;
    get autoConnectInput(): number;
    private _captivePortal?;
    get captivePortal(): number;
    set captivePortal(value: number);
    resetCaptivePortal(): void;
    get captivePortalInput(): number;
    get default(): any;
    private _disableAutoFallback?;
    get disableAutoFallback(): boolean | cdktf.IResolvable;
    set disableAutoFallback(value: boolean | cdktf.IResolvable);
    resetDisableAutoFallback(): void;
    get disableAutoFallbackInput(): any;
    get enabled(): any;
    private _exclude;
    get exclude(): ZeroTrustDeviceDefaultProfileExcludeList;
    putExclude(value: ZeroTrustDeviceDefaultProfileExclude[] | cdktf.IResolvable): void;
    resetExclude(): void;
    get excludeInput(): any;
    private _excludeOfficeIps?;
    get excludeOfficeIps(): boolean | cdktf.IResolvable;
    set excludeOfficeIps(value: boolean | cdktf.IResolvable);
    resetExcludeOfficeIps(): void;
    get excludeOfficeIpsInput(): any;
    private _fallbackDomains;
    get fallbackDomains(): ZeroTrustDeviceDefaultProfileFallbackDomainsList;
    get gatewayUniqueId(): any;
    get id(): any;
    private _include;
    get include(): ZeroTrustDeviceDefaultProfileIncludeList;
    putInclude(value: ZeroTrustDeviceDefaultProfileInclude[] | cdktf.IResolvable): void;
    resetInclude(): void;
    get includeInput(): any;
    private _lanAllowMinutes?;
    get lanAllowMinutes(): number;
    set lanAllowMinutes(value: number);
    resetLanAllowMinutes(): void;
    get lanAllowMinutesInput(): number;
    private _lanAllowSubnetSize?;
    get lanAllowSubnetSize(): number;
    set lanAllowSubnetSize(value: number);
    resetLanAllowSubnetSize(): void;
    get lanAllowSubnetSizeInput(): number;
    get policyId(): any;
    private _registerInterfaceIpWithDns?;
    get registerInterfaceIpWithDns(): boolean | cdktf.IResolvable;
    set registerInterfaceIpWithDns(value: boolean | cdktf.IResolvable);
    resetRegisterInterfaceIpWithDns(): void;
    get registerInterfaceIpWithDnsInput(): any;
    private _sccmVpnBoundarySupport?;
    get sccmVpnBoundarySupport(): boolean | cdktf.IResolvable;
    set sccmVpnBoundarySupport(value: boolean | cdktf.IResolvable);
    resetSccmVpnBoundarySupport(): void;
    get sccmVpnBoundarySupportInput(): any;
    private _serviceModeV2;
    get serviceModeV2(): ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference;
    putServiceModeV2(value: ZeroTrustDeviceDefaultProfileServiceModeV2): void;
    resetServiceModeV2(): void;
    get serviceModeV2Input(): any;
    private _supportUrl?;
    get supportUrl(): string;
    set supportUrl(value: string);
    resetSupportUrl(): void;
    get supportUrlInput(): string;
    private _switchLocked?;
    get switchLocked(): boolean | cdktf.IResolvable;
    set switchLocked(value: boolean | cdktf.IResolvable);
    resetSwitchLocked(): void;
    get switchLockedInput(): any;
    private _tunnelProtocol?;
    get tunnelProtocol(): string;
    set tunnelProtocol(value: string);
    resetTunnelProtocol(): void;
    get tunnelProtocolInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
