import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubOrganizationAppInstallationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations#id DataGithubOrganizationAppInstallations#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataGithubOrganizationAppInstallationsInstallations {
}
export declare function dataGithubOrganizationAppInstallationsInstallationsToTerraform(struct?: DataGithubOrganizationAppInstallationsInstallations): any;
export declare function dataGithubOrganizationAppInstallationsInstallationsToHclTerraform(struct?: DataGithubOrganizationAppInstallationsInstallations): any;
export declare class DataGithubOrganizationAppInstallationsInstallationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubOrganizationAppInstallationsInstallations | undefined;
    set internalValue(value: DataGithubOrganizationAppInstallationsInstallations | undefined);
    get appId(): any;
    get appSlug(): any;
    get clientId(): any;
    get createdAt(): any;
    get events(): any;
    get id(): any;
    private _permissions;
    get permissions(): any;
    get repositorySelection(): any;
    get singleFilePaths(): any;
    get suspended(): any;
    get targetId(): any;
    get targetType(): any;
    get updatedAt(): any;
}
export declare class DataGithubOrganizationAppInstallationsInstallationsList extends cdktf.ComplexList {
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
    get(index: number): DataGithubOrganizationAppInstallationsInstallationsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations github_organization_app_installations}
*/
export declare class DataGithubOrganizationAppInstallations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_organization_app_installations";
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationAppInstallations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationAppInstallations to import
    * @param importFromId The id of the existing DataGithubOrganizationAppInstallations that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationAppInstallations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_app_installations github_organization_app_installations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationAppInstallationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataGithubOrganizationAppInstallationsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _installations;
    get installations(): DataGithubOrganizationAppInstallationsInstallationsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
