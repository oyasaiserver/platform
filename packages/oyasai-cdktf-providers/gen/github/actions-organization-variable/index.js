// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable github_actions_organization_variable}
*/
export class ActionsOrganizationVariable extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_actions_organization_variable";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsOrganizationVariable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationVariable to import
    * @param importFromId The id of the existing ActionsOrganizationVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationVariable to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_variable", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_variable github_actions_organization_variable} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationVariableConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_actions_organization_variable',
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
        this._selectedRepositoryIds = config.selectedRepositoryIds;
        this._value = config.value;
        this._variableName = config.variableName;
        this._visibility = config.visibility;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
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
    // selected_repository_ids - computed: false, optional: true, required: false
    _selectedRepositoryIds;
    get selectedRepositoryIds() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_repository_ids')));
    }
    set selectedRepositoryIds(value) {
        this._selectedRepositoryIds = value;
    }
    resetSelectedRepositoryIds() {
        this._selectedRepositoryIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get selectedRepositoryIdsInput() {
        return this._selectedRepositoryIds;
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
    // variable_name - computed: false, optional: false, required: true
    _variableName;
    get variableName() {
        return this.getStringAttribute('variable_name');
    }
    set variableName(value) {
        this._variableName = value;
    }
    // Temporarily expose input value. Use with caution.
    get variableNameInput() {
        return this._variableName;
    }
    // visibility - computed: false, optional: false, required: true
    _visibility;
    get visibility() {
        return this.getStringAttribute('visibility');
    }
    set visibility(value) {
        this._visibility = value;
    }
    // Temporarily expose input value. Use with caution.
    get visibilityInput() {
        return this._visibility;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
            value: cdktf.stringToTerraform(this._value),
            variable_name: cdktf.stringToTerraform(this._variableName),
            visibility: cdktf.stringToTerraform(this._visibility),
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
            selected_repository_ids: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedRepositoryIds),
                isBlock: false,
                type: "set",
                storageClassType: "numberList",
            },
            value: {
                value: cdktf.stringToHclTerraform(this._value),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            variable_name: {
                value: cdktf.stringToHclTerraform(this._variableName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            visibility: {
                value: cdktf.stringToHclTerraform(this._visibility),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
