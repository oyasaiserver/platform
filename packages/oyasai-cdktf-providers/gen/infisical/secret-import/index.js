// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import infisical_secret_import}
*/
export class SecretImport extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_secret_import";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SecretImport resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretImport to import
    * @param importFromId The id of the existing SecretImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretImport to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secret_import", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/secret_import infisical_secret_import} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretImportConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_secret_import',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._environmentSlug = config.environmentSlug;
        this._folderPath = config.folderPath;
        this._importEnvironmentSlug = config.importEnvironmentSlug;
        this._importFolderPath = config.importFolderPath;
        this._isReplication = config.isReplication;
        this._projectId = config.projectId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // environment_slug - computed: false, optional: false, required: true
    _environmentSlug;
    get environmentSlug() {
        return this.getStringAttribute('environment_slug');
    }
    set environmentSlug(value) {
        this._environmentSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get environmentSlugInput() {
        return this._environmentSlug;
    }
    // folder_path - computed: false, optional: false, required: true
    _folderPath;
    get folderPath() {
        return this.getStringAttribute('folder_path');
    }
    set folderPath(value) {
        this._folderPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get folderPathInput() {
        return this._folderPath;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // import_environment_slug - computed: false, optional: false, required: true
    _importEnvironmentSlug;
    get importEnvironmentSlug() {
        return this.getStringAttribute('import_environment_slug');
    }
    set importEnvironmentSlug(value) {
        this._importEnvironmentSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get importEnvironmentSlugInput() {
        return this._importEnvironmentSlug;
    }
    // import_folder_path - computed: false, optional: false, required: true
    _importFolderPath;
    get importFolderPath() {
        return this.getStringAttribute('import_folder_path');
    }
    set importFolderPath(value) {
        this._importFolderPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get importFolderPathInput() {
        return this._importFolderPath;
    }
    // is_replication - computed: false, optional: false, required: true
    _isReplication;
    get isReplication() {
        return this.getBooleanAttribute('is_replication');
    }
    set isReplication(value) {
        this._isReplication = value;
    }
    // Temporarily expose input value. Use with caution.
    get isReplicationInput() {
        return this._isReplication;
    }
    // project_id - computed: false, optional: false, required: true
    _projectId;
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            folder_path: cdktf.stringToTerraform(this._folderPath),
            import_environment_slug: cdktf.stringToTerraform(this._importEnvironmentSlug),
            import_folder_path: cdktf.stringToTerraform(this._importFolderPath),
            is_replication: cdktf.booleanToTerraform(this._isReplication),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            environment_slug: {
                value: cdktf.stringToHclTerraform(this._environmentSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            folder_path: {
                value: cdktf.stringToHclTerraform(this._folderPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            import_environment_slug: {
                value: cdktf.stringToHclTerraform(this._importEnvironmentSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            import_folder_path: {
                value: cdktf.stringToHclTerraform(this._importFolderPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_replication: {
                value: cdktf.booleanToHclTerraform(this._isReplication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
