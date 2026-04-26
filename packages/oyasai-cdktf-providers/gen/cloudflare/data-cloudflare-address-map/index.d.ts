import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareAddressMapConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier of a Cloudflare account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_map#account_id DataCloudflareAddressMap#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier of an Address Map.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_map#address_map_id DataCloudflareAddressMap#address_map_id}
    */
    readonly addressMapId: string;
}
export interface DataCloudflareAddressMapIps {
}
export declare function dataCloudflareAddressMapIpsToTerraform(struct?: DataCloudflareAddressMapIps): any;
export declare function dataCloudflareAddressMapIpsToHclTerraform(struct?: DataCloudflareAddressMapIps): any;
export declare class DataCloudflareAddressMapIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAddressMapIps | undefined;
    set internalValue(value: DataCloudflareAddressMapIps | undefined);
    get createdAt(): any;
    get ip(): any;
}
export declare class DataCloudflareAddressMapIpsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareAddressMapIpsOutputReference;
}
export interface DataCloudflareAddressMapMemberships {
}
export declare function dataCloudflareAddressMapMembershipsToTerraform(struct?: DataCloudflareAddressMapMemberships): any;
export declare function dataCloudflareAddressMapMembershipsToHclTerraform(struct?: DataCloudflareAddressMapMemberships): any;
export declare class DataCloudflareAddressMapMembershipsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareAddressMapMemberships | undefined;
    set internalValue(value: DataCloudflareAddressMapMemberships | undefined);
    get canDelete(): any;
    get createdAt(): any;
    get identifier(): any;
    get kind(): any;
}
export declare class DataCloudflareAddressMapMembershipsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareAddressMapMembershipsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_map cloudflare_address_map}
*/
export declare class DataCloudflareAddressMap extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_address_map";
    /**
    * Generates CDKTF code for importing a DataCloudflareAddressMap resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAddressMap to import
    * @param importFromId The id of the existing DataCloudflareAddressMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_map#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAddressMap to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/address_map cloudflare_address_map} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAddressMapConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareAddressMapConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _addressMapId?;
    get addressMapId(): string;
    set addressMapId(value: string);
    get addressMapIdInput(): string;
    get canDelete(): any;
    get canModifyIps(): any;
    get createdAt(): any;
    get defaultSni(): any;
    get description(): any;
    get enabled(): any;
    get id(): any;
    private _ips;
    get ips(): DataCloudflareAddressMapIpsList;
    private _memberships;
    get memberships(): DataCloudflareAddressMapMembershipsList;
    get modifiedAt(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
