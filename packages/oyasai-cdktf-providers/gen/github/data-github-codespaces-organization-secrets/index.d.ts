import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubCodespacesOrganizationSecretsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_organization_secrets#id DataGithubCodespacesOrganizationSecrets#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataGithubCodespacesOrganizationSecretsSecrets {
}
export declare function dataGithubCodespacesOrganizationSecretsSecretsToTerraform(struct?: DataGithubCodespacesOrganizationSecretsSecrets): any;
export declare function dataGithubCodespacesOrganizationSecretsSecretsToHclTerraform(struct?: DataGithubCodespacesOrganizationSecretsSecrets): any;
export declare class DataGithubCodespacesOrganizationSecretsSecretsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubCodespacesOrganizationSecretsSecrets | undefined;
    set internalValue(value: DataGithubCodespacesOrganizationSecretsSecrets | undefined);
    get createdAt(): any;
    get name(): any;
    get updatedAt(): any;
    get visibility(): any;
}
export declare class DataGithubCodespacesOrganizationSecretsSecretsList extends cdktf.ComplexList {
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
    get(index: number): DataGithubCodespacesOrganizationSecretsSecretsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_organization_secrets github_codespaces_organization_secrets}
*/
export declare class DataGithubCodespacesOrganizationSecrets extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_codespaces_organization_secrets";
    /**
    * Generates CDKTF code for importing a DataGithubCodespacesOrganizationSecrets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubCodespacesOrganizationSecrets to import
    * @param importFromId The id of the existing DataGithubCodespacesOrganizationSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_organization_secrets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubCodespacesOrganizationSecrets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/codespaces_organization_secrets github_codespaces_organization_secrets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubCodespacesOrganizationSecretsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataGithubCodespacesOrganizationSecretsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _secrets;
    get secrets(): DataGithubCodespacesOrganizationSecretsSecretsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
