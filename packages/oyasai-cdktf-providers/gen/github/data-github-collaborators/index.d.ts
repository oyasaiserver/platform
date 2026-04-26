import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubCollaboratorsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators#affiliation DataGithubCollaborators#affiliation}
    */
    readonly affiliation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators#id DataGithubCollaborators#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators#owner DataGithubCollaborators#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators#permission DataGithubCollaborators#permission}
    */
    readonly permission?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators#repository DataGithubCollaborators#repository}
    */
    readonly repository: string;
}
export interface DataGithubCollaboratorsCollaborator {
}
export declare function dataGithubCollaboratorsCollaboratorToTerraform(struct?: DataGithubCollaboratorsCollaborator): any;
export declare function dataGithubCollaboratorsCollaboratorToHclTerraform(struct?: DataGithubCollaboratorsCollaborator): any;
export declare class DataGithubCollaboratorsCollaboratorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataGithubCollaboratorsCollaborator | undefined;
    set internalValue(value: DataGithubCollaboratorsCollaborator | undefined);
    get eventsUrl(): any;
    get followersUrl(): any;
    get followingUrl(): any;
    get gistsUrl(): any;
    get htmlUrl(): any;
    get id(): any;
    get login(): any;
    get organizationsUrl(): any;
    get permission(): any;
    get receivedEventsUrl(): any;
    get reposUrl(): any;
    get siteAdmin(): any;
    get starredUrl(): any;
    get subscriptionsUrl(): any;
    get type(): any;
    get url(): any;
}
export declare class DataGithubCollaboratorsCollaboratorList extends cdktf.ComplexList {
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
    get(index: number): DataGithubCollaboratorsCollaboratorOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators github_collaborators}
*/
export declare class DataGithubCollaborators extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_collaborators";
    /**
    * Generates CDKTF code for importing a DataGithubCollaborators resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubCollaborators to import
    * @param importFromId The id of the existing DataGithubCollaborators that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubCollaborators to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/collaborators github_collaborators} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubCollaboratorsConfig
    */
    constructor(scope: Construct, id: string, config: DataGithubCollaboratorsConfig);
    private _affiliation?;
    get affiliation(): string;
    set affiliation(value: string);
    resetAffiliation(): void;
    get affiliationInput(): string;
    private _collaborator;
    get collaborator(): DataGithubCollaboratorsCollaboratorList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
    private _permission?;
    get permission(): string;
    set permission(value: string);
    resetPermission(): void;
    get permissionInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
