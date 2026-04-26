// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property github_repository_custom_property}
*/
export class RepositoryCustomProperty extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_custom_property";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryCustomProperty resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryCustomProperty to import
    * @param importFromId The id of the existing RepositoryCustomProperty that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryCustomProperty to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_custom_property", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_custom_property github_repository_custom_property} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryCustomPropertyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_custom_property',
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
        this._propertyName = config.propertyName;
        this._propertyType = config.propertyType;
        this._propertyValue = config.propertyValue;
        this._repository = config.repository;
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
    // property_name - computed: false, optional: false, required: true
    _propertyName;
    get propertyName() {
        return this.getStringAttribute('property_name');
    }
    set propertyName(value) {
        this._propertyName = value;
    }
    // Temporarily expose input value. Use with caution.
    get propertyNameInput() {
        return this._propertyName;
    }
    // property_type - computed: false, optional: false, required: true
    _propertyType;
    get propertyType() {
        return this.getStringAttribute('property_type');
    }
    set propertyType(value) {
        this._propertyType = value;
    }
    // Temporarily expose input value. Use with caution.
    get propertyTypeInput() {
        return this._propertyType;
    }
    // property_value - computed: false, optional: false, required: true
    _propertyValue;
    get propertyValue() {
        return cdktf.Fn.tolist(this.getListAttribute('property_value'));
    }
    set propertyValue(value) {
        this._propertyValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get propertyValueInput() {
        return this._propertyValue;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            property_name: cdktf.stringToTerraform(this._propertyName),
            property_type: cdktf.stringToTerraform(this._propertyType),
            property_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyValue),
            repository: cdktf.stringToTerraform(this._repository),
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
            property_name: {
                value: cdktf.stringToHclTerraform(this._propertyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            property_type: {
                value: cdktf.stringToHclTerraform(this._propertyType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            property_value: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyValue),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
