import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDevicePostureIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_integration#account_id DataCloudflareZeroTrustDevicePostureIntegration#account_id}
    */
    readonly accountId?: string;
    /**
    * API UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_integration#integration_id DataCloudflareZeroTrustDevicePostureIntegration#integration_id}
    */
    readonly integrationId: string;
}
export interface DataCloudflareZeroTrustDevicePostureIntegrationConfigA {
}
export declare function dataCloudflareZeroTrustDevicePostureIntegrationConfigAToTerraform(struct?: DataCloudflareZeroTrustDevicePostureIntegrationConfigA): any;
export declare function dataCloudflareZeroTrustDevicePostureIntegrationConfigAToHclTerraform(struct?: DataCloudflareZeroTrustDevicePostureIntegrationConfigA): any;
export declare class DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDevicePostureIntegrationConfigA | undefined;
    set internalValue(value: DataCloudflareZeroTrustDevicePostureIntegrationConfigA | undefined);
    get apiUrl(): any;
    get authUrl(): any;
    get clientId(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration}
*/
export declare class DataCloudflareZeroTrustDevicePostureIntegration extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_posture_integration";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureIntegration to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDevicePostureIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureIntegration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDevicePostureIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDevicePostureIntegrationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _config;
    get config(): DataCloudflareZeroTrustDevicePostureIntegrationConfigAOutputReference;
    get id(): any;
    private _integrationId?;
    get integrationId(): string;
    set integrationId(value: string);
    get integrationIdInput(): string;
    get interval(): any;
    get name(): any;
    get type(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
