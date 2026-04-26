import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#account_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#filter DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#filter}
    */
    readonly filter?: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter;
    /**
    * UUID of the virtual network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#virtual_network_id}
    */
    readonly virtualNetworkId?: string;
}
export interface DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter {
    /**
    * UUID of the virtual network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * If `true`, only include the default virtual network. If `false`, exclude the default virtual network. If empty, all virtual networks will be included.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#is_default DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#is_default}
    */
    readonly isDefault?: boolean | cdktf.IResolvable;
    /**
    * If `true`, only include the default virtual network. If `false`, exclude the default virtual network. If empty, all virtual networks will be included.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#is_default_network DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#is_default_network}
    */
    readonly isDefaultNetwork?: boolean | cdktf.IResolvable;
    /**
    * If `true`, only include deleted virtual networks. If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#is_deleted DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#is_deleted}
    */
    readonly isDeleted?: boolean | cdktf.IResolvable;
    /**
    * A user-friendly name for the virtual network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#name DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#name}
    */
    readonly name?: string;
}
export declare function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _isDefault?;
    get isDefault(): boolean | cdktf.IResolvable;
    set isDefault(value: boolean | cdktf.IResolvable);
    resetIsDefault(): void;
    get isDefaultInput(): any;
    private _isDefaultNetwork?;
    get isDefaultNetwork(): boolean | cdktf.IResolvable;
    set isDefaultNetwork(value: boolean | cdktf.IResolvable);
    resetIsDefaultNetwork(): void;
    get isDefaultNetworkInput(): any;
    private _isDeleted?;
    get isDeleted(): boolean | cdktf.IResolvable;
    set isDeleted(value: boolean | cdktf.IResolvable);
    resetIsDeleted(): void;
    get isDeletedInput(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network}
*/
export declare class DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_virtual_network";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get comment(): any;
    get createdAt(): any;
    get deletedAt(): any;
    private _filter;
    get filter(): DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get isDefaultNetwork(): any;
    get name(): any;
    private _virtualNetworkId?;
    get virtualNetworkId(): string;
    set virtualNetworkId(value: string);
    resetVirtualNetworkId(): void;
    get virtualNetworkIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
