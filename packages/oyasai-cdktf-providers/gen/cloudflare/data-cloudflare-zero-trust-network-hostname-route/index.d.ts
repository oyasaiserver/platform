import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareZeroTrustNetworkHostnameRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Cloudflare account ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#account_id DataCloudflareZeroTrustNetworkHostnameRoute#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#filter DataCloudflareZeroTrustNetworkHostnameRoute#filter}
    */
    readonly filter?: DataCloudflareZeroTrustNetworkHostnameRouteFilter;
    /**
    * The hostname route ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#hostname_route_id DataCloudflareZeroTrustNetworkHostnameRoute#hostname_route_id}
    */
    readonly hostnameRouteId?: string;
}
export interface DataCloudflareZeroTrustNetworkHostnameRouteFilter {
    /**
    * If set, only list hostname routes with the given comment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#comment DataCloudflareZeroTrustNetworkHostnameRoute#comment}
    */
    readonly comment?: string;
    /**
    * If provided, include only resources that were created (and not deleted) before this time. URL encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#existed_at DataCloudflareZeroTrustNetworkHostnameRoute#existed_at}
    */
    readonly existedAt?: string;
    /**
    * If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#hostname DataCloudflareZeroTrustNetworkHostnameRoute#hostname}
    */
    readonly hostname?: string;
    /**
    * The hostname route ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#id DataCloudflareZeroTrustNetworkHostnameRoute#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#is_deleted DataCloudflareZeroTrustNetworkHostnameRoute#is_deleted}
    */
    readonly isDeleted?: boolean | cdktf.IResolvable;
    /**
    * If set, only list hostname routes that point to a specific tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#tunnel_id DataCloudflareZeroTrustNetworkHostnameRoute#tunnel_id}
    */
    readonly tunnelId?: string;
}
export declare function dataCloudflareZeroTrustNetworkHostnameRouteFilterToTerraform(struct?: DataCloudflareZeroTrustNetworkHostnameRouteFilter | cdktf.IResolvable): any;
export declare function dataCloudflareZeroTrustNetworkHostnameRouteFilterToHclTerraform(struct?: DataCloudflareZeroTrustNetworkHostnameRouteFilter | cdktf.IResolvable): any;
export declare class DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareZeroTrustNetworkHostnameRouteFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareZeroTrustNetworkHostnameRouteFilter | cdktf.IResolvable | undefined);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    private _existedAt?;
    get existedAt(): string;
    set existedAt(value: string);
    resetExistedAt(): void;
    get existedAtInput(): string;
    private _hostname?;
    get hostname(): string;
    set hostname(value: string);
    resetHostname(): void;
    get hostnameInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _isDeleted?;
    get isDeleted(): boolean | cdktf.IResolvable;
    set isDeleted(value: boolean | cdktf.IResolvable);
    resetIsDeleted(): void;
    get isDeletedInput(): any;
    private _tunnelId?;
    get tunnelId(): string;
    set tunnelId(value: string);
    resetTunnelId(): void;
    get tunnelIdInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route}
*/
export declare class DataCloudflareZeroTrustNetworkHostnameRoute extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_zero_trust_network_hostname_route";
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustNetworkHostnameRoute to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustNetworkHostnameRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustNetworkHostnameRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustNetworkHostnameRouteConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareZeroTrustNetworkHostnameRouteConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get comment(): any;
    get createdAt(): any;
    get deletedAt(): any;
    private _filter;
    get filter(): DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference;
    putFilter(value: DataCloudflareZeroTrustNetworkHostnameRouteFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get hostname(): any;
    private _hostnameRouteId?;
    get hostnameRouteId(): string;
    set hostnameRouteId(value: string);
    resetHostnameRouteId(): void;
    get hostnameRouteIdInput(): string;
    get id(): any;
    get tunnelId(): any;
    get tunnelName(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
