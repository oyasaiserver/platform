import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDeviceSubnetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_subnet#account_id DataCloudflareZeroTrustDeviceSubnet#account_id}
    */
    readonly accountId?: string;
    /**
    * The UUID of the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_subnet#subnet_id DataCloudflareZeroTrustDeviceSubnet#subnet_id}
    */
    readonly subnetId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_subnet cloudflare_zero_trust_device_subnet}
*/
export declare class DataCloudflareZeroTrustDeviceSubnet extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_subnet";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceSubnet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceSubnet to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_subnet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceSubnet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_subnet cloudflare_zero_trust_device_subnet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceSubnetConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDeviceSubnetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get comment(): any;
    get createdAt(): any;
    get deletedAt(): any;
    get id(): any;
    get isDefaultNetwork(): any;
    get name(): any;
    get network(): any;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
    get subnetType(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
