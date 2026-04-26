import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareUserConfig extends cdktf.TerraformMetaArguments {
}
export interface DataCloudflareUserOrganizations {
}
export declare function dataCloudflareUserOrganizationsToTerraform(struct?: DataCloudflareUserOrganizations): any;
export declare function dataCloudflareUserOrganizationsToHclTerraform(struct?: DataCloudflareUserOrganizations): any;
export declare class DataCloudflareUserOrganizationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareUserOrganizations | undefined;
    set internalValue(value: DataCloudflareUserOrganizations | undefined);
    get id(): any;
    get name(): any;
    get permissions(): any;
    get roles(): any;
    get status(): any;
}
export declare class DataCloudflareUserOrganizationsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareUserOrganizationsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user cloudflare_user}
*/
export declare class DataCloudflareUser extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_user";
    /**
    * Generates CDKTF code for importing a DataCloudflareUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareUser to import
    * @param importFromId The id of the existing DataCloudflareUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/user cloudflare_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareUserConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareUserConfig);
    get betas(): any;
    get country(): any;
    get firstName(): any;
    get hasBusinessZones(): any;
    get hasEnterpriseZones(): any;
    get hasProZones(): any;
    get id(): any;
    get lastName(): any;
    private _organizations;
    get organizations(): DataCloudflareUserOrganizationsList;
    get suspended(): any;
    get telephone(): any;
    get twoFactorAuthenticationEnabled(): any;
    get twoFactorAuthenticationLocked(): any;
    get zipcode(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
