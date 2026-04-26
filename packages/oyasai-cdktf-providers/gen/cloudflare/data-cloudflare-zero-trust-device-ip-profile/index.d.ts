import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustDeviceIpProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_ip_profile#account_id DataCloudflareZeroTrustDeviceIpProfile#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_ip_profile#filter DataCloudflareZeroTrustDeviceIpProfile#filter}
    */
    readonly filter?: DataCloudflareZeroTrustDeviceIpProfileFilter;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_ip_profile#profile_id DataCloudflareZeroTrustDeviceIpProfile#profile_id}
    */
    readonly profileId?: string;
}
export interface DataCloudflareZeroTrustDeviceIpProfileFilter {
    /**
    * The number of IP profiles to return per page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_ip_profile#per_page DataCloudflareZeroTrustDeviceIpProfile#per_page}
    */
    readonly perPage?: number;
}
export declare function dataCloudflareZeroTrustDeviceIpProfileFilterToTerraform(struct?: DataCloudflareZeroTrustDeviceIpProfileFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustDeviceIpProfileFilterToHclTerraform(struct?: DataCloudflareZeroTrustDeviceIpProfileFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustDeviceIpProfileFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustDeviceIpProfileFilter | cdktf.IResolvable | undefined);
    private _perPage?;
    get perPage(): number;
    set perPage(value: number);
    resetPerPage(): void;
    get perPageInput(): number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_ip_profile cloudflare_zero_trust_device_ip_profile}
*/
export declare class DataCloudflareZeroTrustDeviceIpProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_device_ip_profile";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceIpProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDeviceIpProfile to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDeviceIpProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_ip_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDeviceIpProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_ip_profile cloudflare_zero_trust_device_ip_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDeviceIpProfileConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustDeviceIpProfileConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdAt(): any;
    get description(): any;
    get enabled(): any;
    private _filter;
    get filter(): DataCloudflareZeroTrustDeviceIpProfileFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustDeviceIpProfileFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get match(): any;
    get name(): any;
    get precedence(): any;
    private _profileId?;
    get profileId(): string;
    set profileId(value: string);
    resetProfileId(): void;
    get profileIdInput(): string;
    get subnetId(): any;
    get updatedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
