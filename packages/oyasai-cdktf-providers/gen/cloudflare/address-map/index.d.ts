import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AddressMapConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier of a Cloudflare account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map#account_id AddressMap#account_id}
    */
    readonly accountId?: string;
    /**
    * If you have legacy TLS clients which do not send the TLS server name indicator, then you can specify one default SNI on the map. If Cloudflare receives a TLS handshake from a client without an SNI, it will respond with the default SNI on those IPs. The default SNI can be any valid zone or subdomain owned by the account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map#default_sni AddressMap#default_sni}
    */
    readonly defaultSni?: string;
    /**
    * An optional description field which may be used to describe the types of IPs or zones on the map.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map#description AddressMap#description}
    */
    readonly description?: string;
    /**
    * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond with IP addresses on an Address Map until the map is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map#enabled AddressMap#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map#ips AddressMap#ips}
    */
    readonly ips?: string[];
    /**
    * Zones and Accounts which will be assigned IPs on this Address Map. A zone membership will take priority over an account membership.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map#memberships AddressMap#memberships}
    */
    readonly memberships?: AddressMapMemberships[] | cdktf.IResolvable;
}
export interface AddressMapMemberships {
    /**
    * The identifier for the membership (eg. a zone or account tag).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map#identifier AddressMap#identifier}
    */
    readonly identifier?: string;
    /**
    * The type of the membership.
    * Available values: "zone", "account".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map#kind AddressMap#kind}
    */
    readonly kind?: string;
}
export declare function addressMapMembershipsToTerraform(struct?: AddressMapMemberships | cdktf.IResolvable): any;
export declare function addressMapMembershipsToHclTerraform(struct?: AddressMapMemberships | cdktf.IResolvable): any;
export declare class AddressMapMembershipsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AddressMapMemberships | cdktf.IResolvable | undefined;
    set internalValue(value: AddressMapMemberships | cdktf.IResolvable | undefined);
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string;
    private _kind?;
    get kind(): string;
    set kind(value: string);
    resetKind(): void;
    get kindInput(): string;
}
export declare class AddressMapMembershipsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AddressMapMemberships[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AddressMapMembershipsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map cloudflare_address_map}
*/
export declare class AddressMap extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_address_map";
    /**
    * Generates CDKTF code for importing a AddressMap resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AddressMap to import
    * @param importFromId The id of the existing AddressMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AddressMap to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map cloudflare_address_map} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AddressMapConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AddressMapConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get canDelete(): any;
    get canModifyIps(): any;
    get createdAt(): any;
    private _defaultSni?;
    get defaultSni(): string;
    set defaultSni(value: string);
    resetDefaultSni(): void;
    get defaultSniInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    get id(): any;
    private _ips?;
    get ips(): string[];
    set ips(value: string[]);
    resetIps(): void;
    get ipsInput(): string[];
    private _memberships;
    get memberships(): AddressMapMembershipsList;
    putMemberships(value: AddressMapMemberships[] | cdktf.IResolvable): void;
    resetMemberships(): void;
    get membershipsInput(): any;
    get modifiedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
