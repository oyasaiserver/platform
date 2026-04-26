import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDeviceSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings#account_id DataCloudflareZeroTrustDeviceSettings#account_id}
    */
    readonly accountId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings cloudflare_zero_trust_device_settings}
*/
export declare class DataCloudflareZeroTrustDeviceSettings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_settings";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceSettings to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_settings cloudflare_zero_trust_device_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceSettingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDeviceSettingsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get disableForTime(): any;
    get externalEmergencySignalEnabled(): any;
    get externalEmergencySignalFingerprint(): any;
    get externalEmergencySignalInterval(): any;
    get externalEmergencySignalUrl(): any;
    get gatewayProxyEnabled(): any;
    get gatewayUdpProxyEnabled(): any;
    get rootCertificateInstallationEnabled(): any;
    get useZtVirtualIp(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
