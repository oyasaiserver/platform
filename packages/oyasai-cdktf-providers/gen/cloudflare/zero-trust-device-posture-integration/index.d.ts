import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ZeroTrustDevicePostureIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#account_id ZeroTrustDevicePostureIntegration#account_id}
    */
    readonly accountId?: string;
    /**
    * The configuration object containing third-party integration information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#config ZeroTrustDevicePostureIntegration#config}
    */
    readonly config: ZeroTrustDevicePostureIntegrationConfigA;
    /**
    * The interval between each posture check with the third-party API. Use `m` for minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#interval ZeroTrustDevicePostureIntegration#interval}
    */
    readonly interval: string;
    /**
    * The name of the device posture integration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#name ZeroTrustDevicePostureIntegration#name}
    */
    readonly name: string;
    /**
    * The type of device posture integration.
    * Available values: "workspace_one", "crowdstrike_s2s", "uptycs", "intune", "kolide", "tanium_s2s", "sentinelone_s2s", "custom_s2s".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#type ZeroTrustDevicePostureIntegration#type}
    */
    readonly type: string;
}
export interface ZeroTrustDevicePostureIntegrationConfigA {
    /**
    * If present, this id will be passed in the `CF-Access-Client-ID` header when hitting the `api_url`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#access_client_id ZeroTrustDevicePostureIntegration#access_client_id}
    */
    readonly accessClientId?: string;
    /**
    * If present, this secret will be passed in the `CF-Access-Client-Secret` header when hitting the `api_url`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#access_client_secret ZeroTrustDevicePostureIntegration#access_client_secret}
    */
    readonly accessClientSecret?: string;
    /**
    * The Workspace One API URL provided in the Workspace One Admin Dashboard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#api_url ZeroTrustDevicePostureIntegration#api_url}
    */
    readonly apiUrl?: string;
    /**
    * The Workspace One Authorization URL depending on your region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#auth_url ZeroTrustDevicePostureIntegration#auth_url}
    */
    readonly authUrl?: string;
    /**
    * The Workspace One client ID provided in the Workspace One Admin Dashboard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#client_id ZeroTrustDevicePostureIntegration#client_id}
    */
    readonly clientId?: string;
    /**
    * The Uptycs client secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#client_key ZeroTrustDevicePostureIntegration#client_key}
    */
    readonly clientKey?: string;
    /**
    * The Workspace One client secret provided in the Workspace One Admin Dashboard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#client_secret ZeroTrustDevicePostureIntegration#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * The Crowdstrike customer ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#customer_id ZeroTrustDevicePostureIntegration#customer_id}
    */
    readonly customerId?: string;
}
export declare function zeroTrustDevicePostureIntegrationConfigAToTerraform(struct?: ZeroTrustDevicePostureIntegrationConfigA | cdktf.IResolvable): any;
export declare function zeroTrustDevicePostureIntegrationConfigAToHclTerraform(struct?: ZeroTrustDevicePostureIntegrationConfigA | cdktf.IResolvable): any;
export declare class ZeroTrustDevicePostureIntegrationConfigAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ZeroTrustDevicePostureIntegrationConfigA | cdktf.IResolvable | undefined;
    set internalValue(value: ZeroTrustDevicePostureIntegrationConfigA | cdktf.IResolvable | undefined);
    private _accessClientId?;
    get accessClientId(): string;
    set accessClientId(value: string);
    resetAccessClientId(): void;
    get accessClientIdInput(): string;
    private _accessClientSecret?;
    get accessClientSecret(): string;
    set accessClientSecret(value: string);
    resetAccessClientSecret(): void;
    get accessClientSecretInput(): string;
    private _apiUrl?;
    get apiUrl(): string;
    set apiUrl(value: string);
    resetApiUrl(): void;
    get apiUrlInput(): string;
    private _authUrl?;
    get authUrl(): string;
    set authUrl(value: string);
    resetAuthUrl(): void;
    get authUrlInput(): string;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string;
    private _clientKey?;
    get clientKey(): string;
    set clientKey(value: string);
    resetClientKey(): void;
    get clientKeyInput(): string;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    resetClientSecret(): void;
    get clientSecretInput(): string;
    private _customerId?;
    get customerId(): string;
    set customerId(value: string);
    resetCustomerId(): void;
    get customerIdInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration}
*/
export declare class ZeroTrustDevicePostureIntegration extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_posture_integration";
    /**
    * Generates CDKTF code for importing a ZeroTrustDevicePostureIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDevicePostureIntegration to import
    * @param importFromId The id of the existing ZeroTrustDevicePostureIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDevicePostureIntegration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDevicePostureIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: ZeroTrustDevicePostureIntegrationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _config;
    get config(): ZeroTrustDevicePostureIntegrationConfigAOutputReference;
    putConfig(value: ZeroTrustDevicePostureIntegrationConfigA): void;
    get configInput(): any;
    get id(): any;
    private _interval?;
    get interval(): string;
    set interval(value: string);
    get intervalInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
