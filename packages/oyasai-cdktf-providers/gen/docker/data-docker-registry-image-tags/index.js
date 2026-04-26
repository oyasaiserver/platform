// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags docker_registry_image_tags}
*/
export class DataDockerRegistryImageTags extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "docker_registry_image_tags";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataDockerRegistryImageTags resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataDockerRegistryImageTags to import
    * @param importFromId The id of the existing DataDockerRegistryImageTags that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataDockerRegistryImageTags to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_registry_image_tags", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/data-sources/registry_image_tags docker_registry_image_tags} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataDockerRegistryImageTagsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'docker_registry_image_tags',
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
        this._insecureSkipVerify = config.insecureSkipVerify;
        this._name = config.name;
        this._strictSemver = config.strictSemver;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // strict_semver - computed: false, optional: true, required: false
    _strictSemver;
    get strictSemver() {
        return this.getBooleanAttribute('strict_semver');
    }
    set strictSemver(value) {
        this._strictSemver = value;
    }
    resetStrictSemver() {
        this._strictSemver = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get strictSemverInput() {
        return this._strictSemver;
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.getListAttribute('tags');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
            name: cdktf.stringToTerraform(this._name),
            strict_semver: cdktf.booleanToTerraform(this._strictSemver),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
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
            strict_semver: {
                value: cdktf.booleanToHclTerraform(this._strictSemver),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
