// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function teamSyncGroupMappingGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        group_description: cdktf.stringToTerraform(struct.groupDescription),
        group_id: cdktf.stringToTerraform(struct.groupId),
        group_name: cdktf.stringToTerraform(struct.groupName),
    };
}
export function teamSyncGroupMappingGroupToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        group_description: {
            value: cdktf.stringToHclTerraform(struct.groupDescription),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group_id: {
            value: cdktf.stringToHclTerraform(struct.groupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        group_name: {
            value: cdktf.stringToHclTerraform(struct.groupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class TeamSyncGroupMappingGroupOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._groupDescription !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupDescription = this._groupDescription;
        }
        if (this._groupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupId = this._groupId;
        }
        if (this._groupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupDescription = undefined;
            this._groupId = undefined;
            this._groupName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupDescription = value.groupDescription;
            this._groupId = value.groupId;
            this._groupName = value.groupName;
        }
    }
    // group_description - computed: false, optional: false, required: true
    _groupDescription;
    get groupDescription() {
        return this.getStringAttribute('group_description');
    }
    set groupDescription(value) {
        this._groupDescription = value;
    }
    // Temporarily expose input value. Use with caution.
    get groupDescriptionInput() {
        return this._groupDescription;
    }
    // group_id - computed: false, optional: false, required: true
    _groupId;
    get groupId() {
        return this.getStringAttribute('group_id');
    }
    set groupId(value) {
        this._groupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get groupIdInput() {
        return this._groupId;
    }
    // group_name - computed: false, optional: false, required: true
    _groupName;
    get groupName() {
        return this.getStringAttribute('group_name');
    }
    set groupName(value) {
        this._groupName = value;
    }
    // Temporarily expose input value. Use with caution.
    get groupNameInput() {
        return this._groupName;
    }
}
export class TeamSyncGroupMappingGroupList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new TeamSyncGroupMappingGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping github_team_sync_group_mapping}
*/
export class TeamSyncGroupMapping extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_team_sync_group_mapping";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TeamSyncGroupMapping resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamSyncGroupMapping to import
    * @param importFromId The id of the existing TeamSyncGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamSyncGroupMapping to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team_sync_group_mapping", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_sync_group_mapping github_team_sync_group_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamSyncGroupMappingConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_team_sync_group_mapping',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._id = config.id;
        this._teamSlug = config.teamSlug;
        this._group.internalValue = config.group;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // team_slug - computed: false, optional: false, required: true
    _teamSlug;
    get teamSlug() {
        return this.getStringAttribute('team_slug');
    }
    set teamSlug(value) {
        this._teamSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get teamSlugInput() {
        return this._teamSlug;
    }
    // group - computed: false, optional: true, required: false
    _group = new TeamSyncGroupMappingGroupList(this, "group", true);
    get group() {
        return this._group;
    }
    putGroup(value) {
        this._group.internalValue = value;
    }
    resetGroup() {
        this._group.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get groupInput() {
        return this._group.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            team_slug: cdktf.stringToTerraform(this._teamSlug),
            group: cdktf.listMapper(teamSyncGroupMappingGroupToTerraform, true)(this._group.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            team_slug: {
                value: cdktf.stringToHclTerraform(this._teamSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group: {
                value: cdktf.listMapperHcl(teamSyncGroupMappingGroupToHclTerraform, true)(this._group.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "TeamSyncGroupMappingGroupList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
