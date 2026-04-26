// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image docker_registry_image}
*/
export class DataDockerRegistryImage extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_registry_image";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataDockerRegistryImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerRegistryImage to import
    * @param importFromId The id of the existing DataDockerRegistryImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerRegistryImage to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_registry_image", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image docker_registry_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerRegistryImageConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_registry_image',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
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
        this._insecureSkipVerify = config.insecureSkipVerify;
        this._name = config.name;
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
    // insecure_skip_verify - computed: false, optional: true, required: false
    _insecureSkipVerify;
    get insecureSkipVerify() {
        return this.getBooleanAttribute('insecure_skip_verify');
    }
    set insecureSkipVerify(value) {
        this._insecureSkipVerify = value;
    }
    resetInsecureSkipVerify() {
        this._insecureSkipVerify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get insecureSkipVerifyInput() {
        return this._insecureSkipVerify;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // sha256_digest - computed: true, optional: false, required: false
    get sha256Digest() {
        return this.getStringAttribute('sha256_digest');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
            name: cdktf.stringToTerraform(this._name),
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
            insecure_skip_verify: {
                value: cdktf.booleanToHclTerraform(this._insecureSkipVerify),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
