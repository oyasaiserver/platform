// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api github_rest_api}
*/
export class DataGithubRestApi extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_rest_api";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRestApi resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRestApi to import
    * @param importFromId The id of the existing DataGithubRestApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRestApi to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_rest_api", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/rest_api github_rest_api} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRestApiConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_rest_api',
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
        this._endpoint = config.endpoint;
        this._id = config.id;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // body - computed: true, optional: false, required: false
    get body() {
        return this.getStringAttribute('body');
    }
    // code - computed: true, optional: false, required: false
    get code() {
        return this.getNumberAttribute('code');
    }
    // endpoint - computed: false, optional: false, required: true
    _endpoint;
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    set endpoint(value) {
        this._endpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get endpointInput() {
        return this._endpoint;
    }
    // headers - computed: true, optional: false, required: false
    get headers() {
        return this.getStringAttribute('headers');
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
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            endpoint: cdktf.stringToTerraform(this._endpoint),
            id: cdktf.stringToTerraform(this._id),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            endpoint: {
                value: cdktf.stringToHclTerraform(this._endpoint),
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
