import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDeviceCustomProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#account_id ZeroTrustDeviceCustomProfile#account_id}
    */
    readonly accountId?: string;
    /**
    * Whether to allow the user to switch WARP between modes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#allow_mode_switch ZeroTrustDeviceCustomProfile#allow_mode_switch}
    */
    readonly allowModeSwitch?: boolean | cdktf.IResolvable;
    /**
    * Whether to receive update notifications when a new version of the client is available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#allow_updates ZeroTrustDeviceCustomProfile#allow_updates}
    */
    readonly allowUpdates?: boolean | cdktf.IResolvable;
    /**
    * Whether to allow devices to leave the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#allowed_to_leave ZeroTrustDeviceCustomProfile#allowed_to_leave}
    */
    readonly allowedToLeave?: boolean | cdktf.IResolvable;
    /**
    * The amount of time in seconds to reconnect after having been disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#auto_connect ZeroTrustDeviceCustomProfile#auto_connect}
    */
    readonly autoConnect?: number;
    /**
    * Turn on the captive portal after the specified amount of time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#captive_portal ZeroTrustDeviceCustomProfile#captive_portal}
    */
    readonly captivePortal?: number;
    /**
    * A description of the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#description ZeroTrustDeviceCustomProfile#description}
    */
    readonly description?: string;
    /**
    * If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#disable_auto_fallback ZeroTrustDeviceCustomProfile#disable_auto_fallback}
    */
    readonly disableAutoFallback?: boolean | cdktf.IResolvable;
    /**
    * Whether the policy will be applied to matching devices.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#enabled ZeroTrustDeviceCustomProfile#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * List of routes excluded in the WARP client's tunnel. Both 'exclude' and 'include' cannot be set in the same request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#exclude ZeroTrustDeviceCustomProfile#exclude}
    */
    readonly exclude?: ZeroTrustDeviceCustomProfileExclude[] | cdktf.IResolvable;
    /**
    * Whether to add Microsoft IPs to Split Tunnel exclusions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#exclude_office_ips ZeroTrustDeviceCustomProfile#exclude_office_ips}
    */
    readonly excludeOfficeIps?: boolean | cdktf.IResolvable;
    /**
    * List of routes included in the WARP client's tunnel. Both 'exclude' and 'include' cannot be set in the same request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#include ZeroTrustDeviceCustomProfile#include}
    */
    readonly include?: ZeroTrustDeviceCustomProfileInclude[] | cdktf.IResolvable;
    /**
    * The amount of time in minutes a user is allowed access to their LAN. A value of 0 will allow LAN access until the next WARP reconnection, such as a reboot or a laptop waking from sleep. Note that this field is omitted from the response if null or unset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#lan_allow_minutes ZeroTrustDeviceCustomProfile#lan_allow_minutes}
    */
    readonly lanAllowMinutes?: number;
    /**
    * The size of the subnet for the local access network. Note that this field is omitted from the response if null or unset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#lan_allow_subnet_size ZeroTrustDeviceCustomProfile#lan_allow_subnet_size}
    */
    readonly lanAllowSubnetSize?: number;
    /**
    * The wirefilter expression to match devices. Available values: "identity.email", "identity.groups.id", "identity.groups.name", "identity.groups.email", "identity.service_token_uuid", "identity.saml_attributes", "network", "os.name", "os.version".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#match ZeroTrustDeviceCustomProfile#match}
    */
    readonly match: string;
    /**
    * The name of the device settings profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#name ZeroTrustDeviceCustomProfile#name}
    */
    readonly name: string;
    /**
    * The precedence of the policy. Lower values indicate higher precedence. Policies will be evaluated in ascending order of this field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#precedence ZeroTrustDeviceCustomProfile#precedence}
    */
    readonly precedence?: number;
    /**
    * Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#register_interface_ip_with_dns ZeroTrustDeviceCustomProfile#register_interface_ip_with_dns}
    */
    readonly registerInterfaceIpWithDns?: boolean | cdktf.IResolvable;
    /**
    * Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#sccm_vpn_boundary_support ZeroTrustDeviceCustomProfile#sccm_vpn_boundary_support}
    */
    readonly sccmVpnBoundarySupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#service_mode_v2 ZeroTrustDeviceCustomProfile#service_mode_v2}
    */
    readonly serviceModeV2?: ZeroTrustDeviceCustomProfileServiceModeV2;
    /**
    * The URL to launch when the Send Feedback button is clicked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#support_url ZeroTrustDeviceCustomProfile#support_url}
    */
    readonly supportUrl?: string;
    /**
    * Whether to allow the user to turn off the WARP switch and disconnect the client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#switch_locked ZeroTrustDeviceCustomProfile#switch_locked}
    */
    readonly switchLocked?: boolean | cdktf.IResolvable;
    /**
    * Determines which tunnel protocol to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#tunnel_protocol ZeroTrustDeviceCustomProfile#tunnel_protocol}
    */
    readonly tunnelProtocol?: string;
}
export interface ZeroTrustDeviceCustomProfileExclude {
    /**
    * The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#address ZeroTrustDeviceCustomProfile#address}
    */
    readonly address?: string;
    /**
    * A description of the Split Tunnel item, displayed in the client UI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#description ZeroTrustDeviceCustomProfile#description}
    */
    readonly description?: string;
    /**
    * The domain name to exclude from the tunnel. If `host` is present, `address` must not be present.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#host ZeroTrustDeviceCustomProfile#host}
    */
    readonly host?: string;
}
export declare function zeroTrustDeviceCustomProfileExcludeToTerraform(struct?: ZeroTrustDeviceCustomProfileExclude | cdktf.IResolvable): any;
export declare function zeroTrustDeviceCustomProfileExcludeToHclTerraform(struct?: ZeroTrustDeviceCustomProfileExclude | cdktf.IResolvable): any;
export declare class ZeroTrustDeviceCustomProfileExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDeviceCustomProfileExclude | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDeviceCustomProfileExclude | cdktf.IResolvable | undefined);
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
export declare class ZeroTrustDeviceCustomProfileExcludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDeviceCustomProfileExclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDeviceCustomProfileExcludeOutputReference;
}
export interface ZeroTrustDeviceCustomProfileFallbackDomains {
}
export declare function zeroTrustDeviceCustomProfileFallbackDomainsToTerraform(struct?: ZeroTrustDeviceCustomProfileFallbackDomains): any;
export declare function zeroTrustDeviceCustomProfileFallbackDomainsToHclTerraform(struct?: ZeroTrustDeviceCustomProfileFallbackDomains): any;
export declare class ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDeviceCustomProfileFallbackDomains | undefined;
    set internalValue(value: ZeroTrustDeviceCustomProfileFallbackDomains | undefined);
    get description(): any;
    get dnsServer(): any;
    get suffix(): any;
}
export declare class ZeroTrustDeviceCustomProfileFallbackDomainsList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference;
}
export interface ZeroTrustDeviceCustomProfileInclude {
    /**
    * The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#address ZeroTrustDeviceCustomProfile#address}
    */
    readonly address?: string;
    /**
    * A description of the Split Tunnel item, displayed in the client UI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#description ZeroTrustDeviceCustomProfile#description}
    */
    readonly description?: string;
    /**
    * The domain name to include in the tunnel. If `host` is present, `address` must not be present.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#host ZeroTrustDeviceCustomProfile#host}
    */
    readonly host?: string;
}
export declare function zeroTrustDeviceCustomProfileIncludeToTerraform(struct?: ZeroTrustDeviceCustomProfileInclude | cdktf.IResolvable): any;
export declare function zeroTrustDeviceCustomProfileIncludeToHclTerraform(struct?: ZeroTrustDeviceCustomProfileInclude | cdktf.IResolvable): any;
export declare class ZeroTrustDeviceCustomProfileIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDeviceCustomProfileInclude | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDeviceCustomProfileInclude | cdktf.IResolvable | undefined);
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
export declare class ZeroTrustDeviceCustomProfileIncludeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustDeviceCustomProfileInclude[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustDeviceCustomProfileIncludeOutputReference;
}
export interface ZeroTrustDeviceCustomProfileServiceModeV2 {
    /**
    * The mode to run the WARP client under.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#mode ZeroTrustDeviceCustomProfile#mode}
    */
    readonly mode?: string;
    /**
    * The port number when used with proxy mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#port ZeroTrustDeviceCustomProfile#port}
    */
    readonly port?: number;
}
export declare function zeroTrustDeviceCustomProfileServiceModeV2ToTerraform(struct?: ZeroTrustDeviceCustomProfileServiceModeV2 | cdktf.IResolvable): any;
export declare function zeroTrustDeviceCustomProfileServiceModeV2ToHclTerraform(struct?: ZeroTrustDeviceCustomProfileServiceModeV2 | cdktf.IResolvable): any;
export declare class ZeroTrustDeviceCustomProfileServiceModeV2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDeviceCustomProfileServiceModeV2 | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDeviceCustomProfileServiceModeV2 | cdktf.IResolvable | undefined);
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
export interface ZeroTrustDeviceCustomProfileTargetTests {
}
export declare function zeroTrustDeviceCustomProfileTargetTestsToTerraform(struct?: ZeroTrustDeviceCustomProfileTargetTests): any;
export declare function zeroTrustDeviceCustomProfileTargetTestsToHclTerraform(struct?: ZeroTrustDeviceCustomProfileTargetTests): any;
export declare class ZeroTrustDeviceCustomProfileTargetTestsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustDeviceCustomProfileTargetTests | undefined;
    set internalValue(value: ZeroTrustDeviceCustomProfileTargetTests | undefined);
    get id(): any;
    get name(): any;
}
export declare class ZeroTrustDeviceCustomProfileTargetTestsList extends cdktf.ComplexList {
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
    get(index: number): ZeroTrustDeviceCustomProfileTargetTestsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile}
*/
export declare class ZeroTrustDeviceCustomProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_custom_profile";
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceCustomProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceCustomProfile to import
    * @param importFromId The id of the existing ZeroTrustDeviceCustomProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceCustomProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceCustomProfileConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDeviceCustomProfileConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
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
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _disableAutoFallback?;
    get disableAutoFallback(): boolean | cdktf.IResolvable;
    set disableAutoFallback(value: boolean | cdktf.IResolvable);
    resetDisableAutoFallback(): void;
    get disableAutoFallbackInput(): any;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    private _exclude;
    get exclude(): ZeroTrustDeviceCustomProfileExcludeList;
    putExclude(value: ZeroTrustDeviceCustomProfileExclude[] | cdktf.IResolvable): void;
    resetExclude(): void;
    get excludeInput(): any;
    private _excludeOfficeIps?;
    get excludeOfficeIps(): boolean | cdktf.IResolvable;
    set excludeOfficeIps(value: boolean | cdktf.IResolvable);
    resetExcludeOfficeIps(): void;
    get excludeOfficeIpsInput(): any;
    private _fallbackDomains;
    get fallbackDomains(): ZeroTrustDeviceCustomProfileFallbackDomainsList;
    get gatewayUniqueId(): any;
    get id(): any;
    private _include;
    get include(): ZeroTrustDeviceCustomProfileIncludeList;
    putInclude(value: ZeroTrustDeviceCustomProfileInclude[] | cdktf.IResolvable): void;
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
    private _match?;
    get match(): string;
    set match(value: string);
    get matchInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get policyId(): any;
    private _precedence?;
    get precedence(): number;
    set precedence(value: number);
    resetPrecedence(): void;
    get precedenceInput(): number;
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
    get serviceModeV2(): ZeroTrustDeviceCustomProfileServiceModeV2OutputReference;
    putServiceModeV2(value: ZeroTrustDeviceCustomProfileServiceModeV2): void;
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
    private _targetTests;
    get targetTests(): ZeroTrustDeviceCustomProfileTargetTestsList;
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
