// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repositories
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repositories github_app_installation_repositories}
*/
export class AppInstallationRepositories extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_app_installation_repositories";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AppInstallationRepositories resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppInstallationRepositories to import
    * @param importFromId The id of the existing AppInstallationRepositories that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repositories#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppInstallationRepositories to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_app_installation_repositories", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/app_installation_repositories github_app_installation_repositories} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppInstallationRepositoriesConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_app_installation_repositories',
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
        this._installationId = config.installationId;
        this._selectedRepositories = config.selectedRepositories;
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
    // installation_id - computed: false, optional: false, required: true
    _installationId;
    get installationId() {
        return this.getStringAttribute('installation_id');
    }
    set installationId(value) {
        this._installationId = value;
    }
    // Temporarily expose input value. Use with caution.
    get installationIdInput() {
        return this._installationId;
    }
    // selected_repositories - computed: false, optional: false, required: true
    _selectedRepositories;
    get selectedRepositories() {
        return cdktf.Fn.tolist(this.getListAttribute('selected_repositories'));
    }
    set selectedRepositories(value) {
        this._selectedRepositories = value;
    }
    // Temporarily expose input value. Use with caution.
    get selectedRepositoriesInput() {
        return this._selectedRepositories;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            installation_id: cdktf.stringToTerraform(this._installationId),
            selected_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedRepositories),
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
            installation_id: {
                value: cdktf.stringToHclTerraform(this._installationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            selected_repositories: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedRepositories),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
