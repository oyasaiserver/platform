// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties github_organization_custom_properties}
*/
export class DataGithubOrganizationCustomProperties extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_organization_custom_properties";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubOrganizationCustomProperties resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubOrganizationCustomProperties to import
    * @param importFromId The id of the existing DataGithubOrganizationCustomProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubOrganizationCustomProperties to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_custom_properties", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/organization_custom_properties github_organization_custom_properties} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubOrganizationCustomPropertiesConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_organization_custom_properties',
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
        this._allowedValues = config.allowedValues;
        this._defaultValue = config.defaultValue;
        this._description = config.description;
        this._id = config.id;
        this._propertyName = config.propertyName;
        this._required = config.required;
        this._valueType = config.valueType;
        this._valuesEditableBy = config.valuesEditableBy;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allowed_values - computed: true, optional: true, required: false
    _allowedValues;
    get allowedValues() {
        return this.getListAttribute('allowed_values');
    }
    set allowedValues(value) {
        this._allowedValues = value;
    }
    resetAllowedValues() {
        this._allowedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedValuesInput() {
        return this._allowedValues;
    }
    // default_value - computed: true, optional: true, required: false
    _defaultValue;
    get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    set defaultValue(value) {
        this._defaultValue = value;
    }
    resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultValueInput() {
        return this._defaultValue;
    }
    // description - computed: true, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
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
    // required - computed: false, optional: true, required: false
    _required;
    get required() {
        return this.getBooleanAttribute('required');
    }
    set required(value) {
        this._required = value;
    }
    resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requiredInput() {
        return this._required;
    }
    // value_type - computed: false, optional: true, required: false
    _valueType;
    get valueType() {
        return this.getStringAttribute('value_type');
    }
    set valueType(value) {
        this._valueType = value;
    }
    resetValueType() {
        this._valueType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valueTypeInput() {
        return this._valueType;
    }
    // values_editable_by - computed: true, optional: true, required: false
    _valuesEditableBy;
    get valuesEditableBy() {
        return this.getStringAttribute('values_editable_by');
    }
    set valuesEditableBy(value) {
        this._valuesEditableBy = value;
    }
    resetValuesEditableBy() {
        this._valuesEditableBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get valuesEditableByInput() {
        return this._valuesEditableBy;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allowed_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedValues),
            default_value: cdktf.stringToTerraform(this._defaultValue),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id),
            property_name: cdktf.stringToTerraform(this._propertyName),
            required: cdktf.booleanToTerraform(this._required),
            value_type: cdktf.stringToTerraform(this._valueType),
            values_editable_by: cdktf.stringToTerraform(this._valuesEditableBy),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            allowed_values: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedValues),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            default_value: {
                value: cdktf.stringToHclTerraform(this._defaultValue),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
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
            property_name: {
                value: cdktf.stringToHclTerraform(this._propertyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            required: {
                value: cdktf.booleanToHclTerraform(this._required),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            value_type: {
                value: cdktf.stringToHclTerraform(this._valueType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            values_editable_by: {
                value: cdktf.stringToHclTerraform(this._valuesEditableBy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
