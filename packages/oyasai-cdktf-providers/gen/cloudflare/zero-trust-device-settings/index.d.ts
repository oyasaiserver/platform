import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDeviceSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#account_id ZeroTrustDeviceSettings#account_id}
    */
    readonly accountId?: string;
    /**
    * Sets the time limit, in seconds, that a user can use an override code to bypass WARP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#disable_for_time ZeroTrustDeviceSettings#disable_for_time}
    */
    readonly disableForTime?: number;
    /**
    * Controls whether the external emergency disconnect feature is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#external_emergency_signal_enabled ZeroTrustDeviceSettings#external_emergency_signal_enabled}
    */
    readonly externalEmergencySignalEnabled?: boolean | cdktf.IResolvable;
    /**
    * The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. If provided, the WARP client will use this value to verify the server's identity. The device will ignore any response if the server's certificate fingerprint does not exactly match this value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#external_emergency_signal_fingerprint ZeroTrustDeviceSettings#external_emergency_signal_fingerprint}
    */
    readonly externalEmergencySignalFingerprint?: string;
    /**
    * The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). Minimum 30 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#external_emergency_signal_interval ZeroTrustDeviceSettings#external_emergency_signal_interval}
    */
    readonly externalEmergencySignalInterval?: string;
    /**
    * The HTTPS URL from which to fetch the emergency disconnect signal. Must use HTTPS and have an IPv4 or IPv6 address as the host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#external_emergency_signal_url ZeroTrustDeviceSettings#external_emergency_signal_url}
    */
    readonly externalEmergencySignalUrl?: string;
    /**
    * Enable gateway proxy filtering on TCP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#gateway_proxy_enabled ZeroTrustDeviceSettings#gateway_proxy_enabled}
    */
    readonly gatewayProxyEnabled?: boolean | cdktf.IResolvable;
    /**
    * Enable gateway proxy filtering on UDP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#gateway_udp_proxy_enabled ZeroTrustDeviceSettings#gateway_udp_proxy_enabled}
    */
    readonly gatewayUdpProxyEnabled?: boolean | cdktf.IResolvable;
    /**
    * Enable installation of cloudflare managed root certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#root_certificate_installation_enabled ZeroTrustDeviceSettings#root_certificate_installation_enabled}
    */
    readonly rootCertificateInstallationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Enable using CGNAT virtual IPv4.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#use_zt_virtual_ip ZeroTrustDeviceSettings#use_zt_virtual_ip}
    */
    readonly useZtVirtualIp?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings}
*/
export declare class ZeroTrustDeviceSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_settings";
    /**
    * Generates CDKTF code for importing a ZeroTrustDeviceSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDeviceSettings to import
    * @param importFromId The id of the existing ZeroTrustDeviceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDeviceSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDeviceSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ZeroTrustDeviceSettingsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _disableForTime?;
    get disableForTime(): number;
    set disableForTime(value: number);
    resetDisableForTime(): void;
    get disableForTimeInput(): number;
    private _externalEmergencySignalEnabled?;
    get externalEmergencySignalEnabled(): boolean | cdktf.IResolvable;
    set externalEmergencySignalEnabled(value: boolean | cdktf.IResolvable);
    resetExternalEmergencySignalEnabled(): void;
    get externalEmergencySignalEnabledInput(): any;
    private _externalEmergencySignalFingerprint?;
    get externalEmergencySignalFingerprint(): string;
    set externalEmergencySignalFingerprint(value: string);
    resetExternalEmergencySignalFingerprint(): void;
    get externalEmergencySignalFingerprintInput(): string;
    private _externalEmergencySignalInterval?;
    get externalEmergencySignalInterval(): string;
    set externalEmergencySignalInterval(value: string);
    resetExternalEmergencySignalInterval(): void;
    get externalEmergencySignalIntervalInput(): string;
    private _externalEmergencySignalUrl?;
    get externalEmergencySignalUrl(): string;
    set externalEmergencySignalUrl(value: string);
    resetExternalEmergencySignalUrl(): void;
    get externalEmergencySignalUrlInput(): string;
    private _gatewayProxyEnabled?;
    get gatewayProxyEnabled(): boolean | cdktf.IResolvable;
    set gatewayProxyEnabled(value: boolean | cdktf.IResolvable);
    resetGatewayProxyEnabled(): void;
    get gatewayProxyEnabledInput(): any;
    private _gatewayUdpProxyEnabled?;
    get gatewayUdpProxyEnabled(): boolean | cdktf.IResolvable;
    set gatewayUdpProxyEnabled(value: boolean | cdktf.IResolvable);
    resetGatewayUdpProxyEnabled(): void;
    get gatewayUdpProxyEnabledInput(): any;
    private _rootCertificateInstallationEnabled?;
    get rootCertificateInstallationEnabled(): boolean | cdktf.IResolvable;
    set rootCertificateInstallationEnabled(value: boolean | cdktf.IResolvable);
    resetRootCertificateInstallationEnabled(): void;
    get rootCertificateInstallationEnabledInput(): any;
    private _useZtVirtualIp?;
    get useZtVirtualIp(): boolean | cdktf.IResolvable;
    set useZtVirtualIp(value: boolean | cdktf.IResolvable);
    resetUseZtVirtualIp(): void;
    get useZtVirtualIpInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
