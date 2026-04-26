import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TeamSyncGroupMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Slug of the team.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping#team_slug TeamSyncGroupMapping#team_slug}
    */
    readonly teamSlug: string;
    /**
    * group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping#group TeamSyncGroupMapping#group}
    */
    readonly group?: TeamSyncGroupMappingGroup[] | cdktf.IResolvable;
}
export interface TeamSyncGroupMappingGroup {
    /**
    * The description of the IdP group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping#group_description TeamSyncGroupMapping#group_description}
    */
    readonly groupDescription: string;
    /**
    * The ID of the IdP group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping#group_id TeamSyncGroupMapping#group_id}
    */
    readonly groupId: string;
    /**
    * The name of the IdP group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping#group_name TeamSyncGroupMapping#group_name}
    */
    readonly groupName: string;
}
export declare function teamSyncGroupMappingGroupToTerraform(struct?: TeamSyncGroupMappingGroup | cdktf.IResolvable): any;
export declare function teamSyncGroupMappingGroupToHclTerraform(struct?: TeamSyncGroupMappingGroup | cdktf.IResolvable): any;
export declare class TeamSyncGroupMappingGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TeamSyncGroupMappingGroup | cdktf.IResolvable | undefined;
    set internalValue(value: TeamSyncGroupMappingGroup | cdktf.IResolvable | undefined);
    private _groupDescription?;
    get groupDescription(): string;
    set groupDescription(value: string);
    get groupDescriptionInput(): string;
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    get groupIdInput(): string;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string;
}
export declare class TeamSyncGroupMappingGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TeamSyncGroupMappingGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TeamSyncGroupMappingGroupOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping github_team_sync_group_mapping}
*/
export declare class TeamSyncGroupMapping extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_team_sync_group_mapping";
    /**
    * Generates CDKTF code for importing a TeamSyncGroupMapping resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamSyncGroupMapping to import
    * @param importFromId The id of the existing TeamSyncGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamSyncGroupMapping to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping github_team_sync_group_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamSyncGroupMappingConfig
    */
    constructor(scope: Construct, id: string, config: TeamSyncGroupMappingConfig);
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _teamSlug?;
    get teamSlug(): string;
    set teamSlug(value: string);
    get teamSlugInput(): string;
    private _group;
    get group(): TeamSyncGroupMappingGroupList;
    putGroup(value: TeamSyncGroupMappingGroup[] | cdktf.IResolvable): void;
    resetGroup(): void;
    get groupInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
