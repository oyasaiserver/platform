// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function repositoryCollaboratorsIgnoreTeamToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        team_id: cdktf.stringToTerraform(struct.teamId),
    };
}
export function repositoryCollaboratorsIgnoreTeamToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        team_id: {
            value: cdktf.stringToHclTerraform(struct.teamId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryCollaboratorsIgnoreTeamOutputReference extends cdktf.ComplexObject {
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
        if (this._teamId !== undefined) {
            hasAnyValues = true;
            internalValueResult.teamId = this._teamId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._teamId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._teamId = value.teamId;
        }
    }
    // team_id - computed: false, optional: false, required: true
    _teamId;
    get teamId() {
        return this.getStringAttribute('team_id');
    }
    set teamId(value) {
        this._teamId = value;
    }
    // Temporarily expose input value. Use with caution.
    get teamIdInput() {
        return this._teamId;
    }
}
export class RepositoryCollaboratorsIgnoreTeamList extends cdktf.ComplexList {
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
        return new RepositoryCollaboratorsIgnoreTeamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function repositoryCollaboratorsTeamToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        permission: cdktf.stringToTerraform(struct.permission),
        team_id: cdktf.stringToTerraform(struct.teamId),
    };
}
export function repositoryCollaboratorsTeamToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        permission: {
            value: cdktf.stringToHclTerraform(struct.permission),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        team_id: {
            value: cdktf.stringToHclTerraform(struct.teamId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryCollaboratorsTeamOutputReference extends cdktf.ComplexObject {
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
        if (this._permission !== undefined) {
            hasAnyValues = true;
            internalValueResult.permission = this._permission;
        }
        if (this._teamId !== undefined) {
            hasAnyValues = true;
            internalValueResult.teamId = this._teamId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._permission = undefined;
            this._teamId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._permission = value.permission;
            this._teamId = value.teamId;
        }
    }
    // permission - computed: false, optional: true, required: false
    _permission;
    get permission() {
        return this.getStringAttribute('permission');
    }
    set permission(value) {
        this._permission = value;
    }
    resetPermission() {
        this._permission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionInput() {
        return this._permission;
    }
    // team_id - computed: false, optional: false, required: true
    _teamId;
    get teamId() {
        return this.getStringAttribute('team_id');
    }
    set teamId(value) {
        this._teamId = value;
    }
    // Temporarily expose input value. Use with caution.
    get teamIdInput() {
        return this._teamId;
    }
}
export class RepositoryCollaboratorsTeamList extends cdktf.ComplexList {
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
        return new RepositoryCollaboratorsTeamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function repositoryCollaboratorsUserToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        permission: cdktf.stringToTerraform(struct.permission),
        username: cdktf.stringToTerraform(struct.username),
    };
}
export function repositoryCollaboratorsUserToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        permission: {
            value: cdktf.stringToHclTerraform(struct.permission),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktf.stringToHclTerraform(struct.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class RepositoryCollaboratorsUserOutputReference extends cdktf.ComplexObject {
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
        if (this._permission !== undefined) {
            hasAnyValues = true;
            internalValueResult.permission = this._permission;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._permission = undefined;
            this._username = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._permission = value.permission;
            this._username = value.username;
        }
    }
    // permission - computed: false, optional: true, required: false
    _permission;
    get permission() {
        return this.getStringAttribute('permission');
    }
    set permission(value) {
        this._permission = value;
    }
    resetPermission() {
        this._permission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get permissionInput() {
        return this._permission;
    }
    // username - computed: false, optional: false, required: true
    _username;
    get username() {
        return this.getStringAttribute('username');
    }
    set username(value) {
        this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    get usernameInput() {
        return this._username;
    }
}
export class RepositoryCollaboratorsUserList extends cdktf.ComplexList {
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
        return new RepositoryCollaboratorsUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators github_repository_collaborators}
*/
export class RepositoryCollaborators extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_collaborators";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryCollaborators resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryCollaborators to import
    * @param importFromId The id of the existing RepositoryCollaborators that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryCollaborators to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_collaborators", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_collaborators github_repository_collaborators} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryCollaboratorsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_collaborators',
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
        this._repository = config.repository;
        this._ignoreTeam.internalValue = config.ignoreTeam;
        this._team.internalValue = config.team;
        this._user.internalValue = config.user;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // invitation_ids - computed: true, optional: false, required: false
    _invitationIds = new cdktf.StringMap(this, "invitation_ids");
    get invitationIds() {
        return this._invitationIds;
    }
    // repository - computed: false, optional: false, required: true
    _repository;
    get repository() {
        return this.getStringAttribute('repository');
    }
    set repository(value) {
        this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryInput() {
        return this._repository;
    }
    // repository_id - computed: true, optional: false, required: false
    get repositoryId() {
        return this.getNumberAttribute('repository_id');
    }
    // ignore_team - computed: false, optional: true, required: false
    _ignoreTeam = new RepositoryCollaboratorsIgnoreTeamList(this, "ignore_team", true);
    get ignoreTeam() {
        return this._ignoreTeam;
    }
    putIgnoreTeam(value) {
        this._ignoreTeam.internalValue = value;
    }
    resetIgnoreTeam() {
        this._ignoreTeam.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ignoreTeamInput() {
        return this._ignoreTeam.internalValue;
    }
    // team - computed: false, optional: true, required: false
    _team = new RepositoryCollaboratorsTeamList(this, "team", true);
    get team() {
        return this._team;
    }
    putTeam(value) {
        this._team.internalValue = value;
    }
    resetTeam() {
        this._team.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get teamInput() {
        return this._team.internalValue;
    }
    // user - computed: false, optional: true, required: false
    _user = new RepositoryCollaboratorsUserList(this, "user", true);
    get user() {
        return this._user;
    }
    putUser(value) {
        this._user.internalValue = value;
    }
    resetUser() {
        this._user.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userInput() {
        return this._user.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
            ignore_team: cdktf.listMapper(repositoryCollaboratorsIgnoreTeamToTerraform, true)(this._ignoreTeam.internalValue),
            team: cdktf.listMapper(repositoryCollaboratorsTeamToTerraform, true)(this._team.internalValue),
            user: cdktf.listMapper(repositoryCollaboratorsUserToTerraform, true)(this._user.internalValue),
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
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ignore_team: {
                value: cdktf.listMapperHcl(repositoryCollaboratorsIgnoreTeamToHclTerraform, true)(this._ignoreTeam.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "RepositoryCollaboratorsIgnoreTeamList",
            },
            team: {
                value: cdktf.listMapperHcl(repositoryCollaboratorsTeamToHclTerraform, true)(this._team.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "RepositoryCollaboratorsTeamList",
            },
            user: {
                value: cdktf.listMapperHcl(repositoryCollaboratorsUserToHclTerraform, true)(this._user.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "RepositoryCollaboratorsUserList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
