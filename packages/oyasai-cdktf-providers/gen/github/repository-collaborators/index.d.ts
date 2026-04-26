import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryCollaboratorsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#id RepositoryCollaborators#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Name of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#repository RepositoryCollaborators#repository}
    */
    readonly repository: string;
    /**
    * ignore_team block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#ignore_team RepositoryCollaborators#ignore_team}
    */
    readonly ignoreTeam?: RepositoryCollaboratorsIgnoreTeam[] | cdktf.IResolvable;
    /**
    * team block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#team RepositoryCollaborators#team}
    */
    readonly team?: RepositoryCollaboratorsTeam[] | cdktf.IResolvable;
    /**
    * user block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#user RepositoryCollaborators#user}
    */
    readonly user?: RepositoryCollaboratorsUser[] | cdktf.IResolvable;
}
export interface RepositoryCollaboratorsIgnoreTeam {
    /**
    * ID or slug of the team to ignore.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#team_id RepositoryCollaborators#team_id}
    */
    readonly teamId: string;
}
export declare function repositoryCollaboratorsIgnoreTeamToTerraform(struct?: RepositoryCollaboratorsIgnoreTeam | cdktf.IResolvable): any;
export declare function repositoryCollaboratorsIgnoreTeamToHclTerraform(struct?: RepositoryCollaboratorsIgnoreTeam | cdktf.IResolvable): any;
export declare class RepositoryCollaboratorsIgnoreTeamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RepositoryCollaboratorsIgnoreTeam | cdktf.IResolvable | undefined;
    set internalValue(value: RepositoryCollaboratorsIgnoreTeam | cdktf.IResolvable | undefined);
    private _teamId?;
    get teamId(): string;
    set teamId(value: string);
    get teamIdInput(): string;
}
export declare class RepositoryCollaboratorsIgnoreTeamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RepositoryCollaboratorsIgnoreTeam[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RepositoryCollaboratorsIgnoreTeamOutputReference;
}
export interface RepositoryCollaboratorsTeam {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}
    */
    readonly permission?: string;
    /**
    * Team ID or slug to add to the repository as a collaborator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#team_id RepositoryCollaborators#team_id}
    */
    readonly teamId: string;
}
export declare function repositoryCollaboratorsTeamToTerraform(struct?: RepositoryCollaboratorsTeam | cdktf.IResolvable): any;
export declare function repositoryCollaboratorsTeamToHclTerraform(struct?: RepositoryCollaboratorsTeam | cdktf.IResolvable): any;
export declare class RepositoryCollaboratorsTeamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RepositoryCollaboratorsTeam | cdktf.IResolvable | undefined;
    set internalValue(value: RepositoryCollaboratorsTeam | cdktf.IResolvable | undefined);
    private _permission?;
    get permission(): string;
    set permission(value: string);
    resetPermission(): void;
    get permissionInput(): string;
    private _teamId?;
    get teamId(): string;
    set teamId(value: string);
    get teamIdInput(): string;
}
export declare class RepositoryCollaboratorsTeamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RepositoryCollaboratorsTeam[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RepositoryCollaboratorsTeamOutputReference;
}
export interface RepositoryCollaboratorsUser {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}
    */
    readonly permission?: string;
    /**
    * (Required) The user to add to the repository as a collaborator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#username RepositoryCollaborators#username}
    */
    readonly username: string;
}
export declare function repositoryCollaboratorsUserToTerraform(struct?: RepositoryCollaboratorsUser | cdktf.IResolvable): any;
export declare function repositoryCollaboratorsUserToHclTerraform(struct?: RepositoryCollaboratorsUser | cdktf.IResolvable): any;
export declare class RepositoryCollaboratorsUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RepositoryCollaboratorsUser | cdktf.IResolvable | undefined;
    set internalValue(value: RepositoryCollaboratorsUser | cdktf.IResolvable | undefined);
    private _permission?;
    get permission(): string;
    set permission(value: string);
    resetPermission(): void;
    get permissionInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string;
}
export declare class RepositoryCollaboratorsUserList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RepositoryCollaboratorsUser[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RepositoryCollaboratorsUserOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators github_repository_collaborators}
*/
export declare class RepositoryCollaborators extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_collaborators";
    /**
    * Generates CDKTF code for importing a RepositoryCollaborators resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryCollaborators to import
    * @param importFromId The id of the existing RepositoryCollaborators that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryCollaborators to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators github_repository_collaborators} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryCollaboratorsConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryCollaboratorsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _invitationIds;
    get invitationIds(): any;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get repositoryId(): any;
    private _ignoreTeam;
    get ignoreTeam(): RepositoryCollaboratorsIgnoreTeamList;
    putIgnoreTeam(value: RepositoryCollaboratorsIgnoreTeam[] | cdktf.IResolvable): void;
    resetIgnoreTeam(): void;
    get ignoreTeamInput(): any;
    private _team;
    get team(): RepositoryCollaboratorsTeamList;
    putTeam(value: RepositoryCollaboratorsTeam[] | cdktf.IResolvable): void;
    resetTeam(): void;
    get teamInput(): any;
    private _user;
    get user(): RepositoryCollaboratorsUserList;
    putUser(value: RepositoryCollaboratorsUser[] | cdktf.IResolvable): void;
    resetUser(): void;
    get userInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
