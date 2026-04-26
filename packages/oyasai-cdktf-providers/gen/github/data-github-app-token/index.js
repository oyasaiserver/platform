// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token github_app_token}
*/
export class DataGithubAppToken extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_app_token";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubAppToken resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubAppToken to import
    * @param importFromId The id of the existing DataGithubAppToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubAppToken to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_app_token", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/app_token github_app_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubAppTokenConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_app_token',
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
        this._appId = config.appId;
        this._id = config.id;
        this._installationId = config.installationId;
        this._pemFile = config.pemFile;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // app_id - computed: false, optional: false, required: true
    _appId;
    get appId() {
        return this.getStringAttribute('app_id');
    }
    set appId(value) {
        this._appId = value;
    }
    // Temporarily expose input value. Use with caution.
    get appIdInput() {
        return this._appId;
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
    // pem_file - computed: false, optional: false, required: true
    _pemFile;
    get pemFile() {
        return this.getStringAttribute('pem_file');
    }
    set pemFile(value) {
        this._pemFile = value;
    }
    // Temporarily expose input value. Use with caution.
    get pemFileInput() {
        return this._pemFile;
    }
    // token - computed: true, optional: false, required: false
    get token() {
        return this.getStringAttribute('token');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            app_id: cdktf.stringToTerraform(this._appId),
            id: cdktf.stringToTerraform(this._id),
            installation_id: cdktf.stringToTerraform(this._installationId),
            pem_file: cdktf.stringToTerraform(this._pemFile),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            app_id: {
                value: cdktf.stringToHclTerraform(this._appId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
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
            pem_file: {
                value: cdktf.stringToHclTerraform(this._pemFile),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
