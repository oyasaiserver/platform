import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubOrganizationRoleUsersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role_users#id DataGithubOrganizationRoleUsers#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The ID of the organization role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role_users#role_id DataGithubOrganizationRoleUsers#role_id}
    */
    readonly roleId: number;
}
export interface DataGithubOrganizationRoleUsersUsers {
}
export declare function dataGithubOrganizationRoleUsersUsersToTerraform(struct?: DataGithubOrganizationRoleUsersUsers): any;
export declare function dataGithubOrganizationRoleUsersUsersToHclTerraform(struct?: DataGithubOrganizationRoleUsersUsers): any;
export declare class DataGithubOrganizationRoleUsersUsersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubOrganizationRoleUsersUsers | undefined;
    set internalValue(value: DataGithubOrganizationRoleUsersUsers | undefined);
    get login(): any;
    get userId(): any;
}
export declare class DataGithubOrganizationRoleUsersUsersList extends cdktf.ComplexList {
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
    get(index: number): DataGithubOrganizationRoleUsersUsersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role_users github_organization_role_users}
*/
export declare class DataGithubOrganizationRoleUsers extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_organization_role_users";
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationRoleUsers resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationRoleUsers to import
    * @param importFromId The id of the existing DataGithubOrganizationRoleUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role_users#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationRoleUsers to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_role_users github_organization_role_users} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationRoleUsersConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubOrganizationRoleUsersConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _roleId?;
    get roleId(): number;
    set roleId(value: number);
    get roleIdInput(): number;
    private _users;
    get users(): DataGithubOrganizationRoleUsersUsersList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
