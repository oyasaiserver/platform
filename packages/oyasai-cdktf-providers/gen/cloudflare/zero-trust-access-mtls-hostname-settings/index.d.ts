import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustAccessMtlsHostnameSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings#account_id ZeroTrustAccessMtlsHostnameSettings#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings#settings ZeroTrustAccessMtlsHostnameSettings#settings}
    */
    readonly settings: ZeroTrustAccessMtlsHostnameSettingsSettings[] | cdktf.IResolvable;
    /**
    * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings#zone_id ZeroTrustAccessMtlsHostnameSettings#zone_id}
    */
    readonly zoneId?: string;
}
export interface ZeroTrustAccessMtlsHostnameSettingsSettings {
    /**
    * Request client certificates for this hostname in China. Can only be set to true if this zone is china network enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings#china_network ZeroTrustAccessMtlsHostnameSettings#china_network}
    */
    readonly chinaNetwork: boolean | cdktf.IResolvable;
    /**
    * Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings#client_certificate_forwarding ZeroTrustAccessMtlsHostnameSettings#client_certificate_forwarding}
    */
    readonly clientCertificateForwarding: boolean | cdktf.IResolvable;
    /**
    * The hostname that these settings apply to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings#hostname ZeroTrustAccessMtlsHostnameSettings#hostname}
    */
    readonly hostname: string;
}
export declare function zeroTrustAccessMtlsHostnameSettingsSettingsToTerraform(struct?: ZeroTrustAccessMtlsHostnameSettingsSettings | cdktf.IResolvable): any;
export declare function zeroTrustAccessMtlsHostnameSettingsSettingsToHclTerraform(struct?: ZeroTrustAccessMtlsHostnameSettingsSettings | cdktf.IResolvable): any;
export declare class ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ZeroTrustAccessMtlsHostnameSettingsSettings | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustAccessMtlsHostnameSettingsSettings | cdktf.IResolvable | undefined);
    private _chinaNetwork?;
    get chinaNetwork(): boolean | cdktf.IResolvable;
    set chinaNetwork(value: boolean | cdktf.IResolvable);
    get chinaNetworkInput(): any;
    private _clientCertificateForwarding?;
    get clientCertificateForwarding(): boolean | cdktf.IResolvable;
    set clientCertificateForwarding(value: boolean | cdktf.IResolvable);
    get clientCertificateForwardingInput(): any;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    get hostnameInput(): string;
}
export declare class ZeroTrustAccessMtlsHostnameSettingsSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ZeroTrustAccessMtlsHostnameSettingsSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings cloudflare_zero_trust_access_mtls_hostname_settings}
*/
export declare class ZeroTrustAccessMtlsHostnameSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_access_mtls_hostname_settings";
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessMtlsHostnameSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessMtlsHostnameSettings to import
    * @param importFromId The id of the existing ZeroTrustAccessMtlsHostnameSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessMtlsHostnameSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_mtls_hostname_settings cloudflare_zero_trust_access_mtls_hostname_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessMtlsHostnameSettingsConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustAccessMtlsHostnameSettingsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get chinaNetwork(): any;
    get clientCertificateForwarding(): any;
    get hostname(): any;
    private _settings;
    get settings(): ZeroTrustAccessMtlsHostnameSettingsSettingsList;
    putSettings(value: ZeroTrustAccessMtlsHostnameSettingsSettings[] | cdktf.IResolvable): void;
    get settingsInput(): any;
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
