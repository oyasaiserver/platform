import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDeviceManagedNetworksConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks#account_id DataCloudflareZeroTrustDeviceManagedNetworks#account_id}
    */
    readonly accountId?: string;
    /**
    * API UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks#network_id DataCloudflareZeroTrustDeviceManagedNetworks#network_id}
    */
    readonly networkId: string;
}
export interface DataCloudflareZeroTrustDeviceManagedNetworksConfigA {
}
export declare function dataCloudflareZeroTrustDeviceManagedNetworksConfigAToTerraform(struct?: DataCloudflareZeroTrustDeviceManagedNetworksConfigA): any;
export declare function dataCloudflareZeroTrustDeviceManagedNetworksConfigAToHclTerraform(struct?: DataCloudflareZeroTrustDeviceManagedNetworksConfigA): any;
export declare class DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDeviceManagedNetworksConfigA | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceManagedNetworksConfigA | undefined);
    get sha256(): any;
    get tlsSockaddr(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks}
*/
export declare class DataCloudflareZeroTrustDeviceManagedNetworks extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_managed_networks";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceManagedNetworks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceManagedNetworks to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceManagedNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceManagedNetworks to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceManagedNetworksConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDeviceManagedNetworksConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _config;
    get config(): DataCloudflareZeroTrustDeviceManagedNetworksConfigAOutputReference;
    get id(): any;
    get name(): any;
    private _networkId?;
    get networkId(): string;
    set networkId(value: string);
    get networkIdInput(): string;
    get type(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
