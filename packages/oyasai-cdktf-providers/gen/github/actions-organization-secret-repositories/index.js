// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repositories
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repositories github_actions_organization_secret_repositories}
*/
export class ActionsOrganizationSecretRepositories extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_actions_organization_secret_repositories";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ActionsOrganizationSecretRepositories resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ActionsOrganizationSecretRepositories to import
    * @param importFromId The id of the existing ActionsOrganizationSecretRepositories that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repositories#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ActionsOrganizationSecretRepositories to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_actions_organization_secret_repositories", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/actions_organization_secret_repositories github_actions_organization_secret_repositories} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ActionsOrganizationSecretRepositoriesConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_actions_organization_secret_repositories',
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
        this._secretName = config.secretName;
        this._selectedRepositoryIds = config.selectedRepositoryIds;
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
    // secret_name - computed: false, optional: false, required: true
    _secretName;
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    set secretName(value) {
        this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretNameInput() {
        return this._secretName;
    }
    // selected_repository_ids - computed: false, optional: false, required: true
    _selectedRepositoryIds;
    get selectedRepositoryIds() {
        return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('selected_repository_ids')));
    }
    set selectedRepositoryIds(value) {
        this._selectedRepositoryIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get selectedRepositoryIdsInput() {
        return this._selectedRepositoryIds;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            secret_name: cdktf.stringToTerraform(this._secretName),
            selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedRepositoryIds),
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
            secret_name: {
                value: cdktf.stringToHclTerraform(this._secretName),
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
