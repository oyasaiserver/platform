// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas cloudflare_schema_validation_schemas}
*/
export class SchemaValidationSchemas extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_schema_validation_schemas";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SchemaValidationSchemas resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SchemaValidationSchemas to import
    * @param importFromId The id of the existing SchemaValidationSchemas that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SchemaValidationSchemas to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_schema_validation_schemas", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_schemas cloudflare_schema_validation_schemas} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SchemaValidationSchemasConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_schema_validation_schemas',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._kind = config.kind;
        this._name = config.name;
        this._source = config.source;
        this._validationEnabled = config.validationEnabled;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // kind - computed: false, optional: false, required: true
    _kind;
    get kind() {
        return this.getStringAttribute('kind');
    }
    set kind(value) {
        this._kind = value;
    }
    // Temporarily expose input value. Use with caution.
    get kindInput() {
        return this._kind;
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
    // schema_id - computed: true, optional: false, required: false
    get schemaId() {
        return this.getStringAttribute('schema_id');
    }
    // source - computed: false, optional: false, required: true
    _source;
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    // validation_enabled - computed: false, optional: false, required: true
    _validationEnabled;
    get validationEnabled() {
        return this.getBooleanAttribute('validation_enabled');
    }
    set validationEnabled(value) {
        this._validationEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get validationEnabledInput() {
        return this._validationEnabled;
    }
    // zone_id - computed: false, optional: true, required: false
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
    }
    resetZoneId() {
        this._zoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get zoneIdInput() {
        return this._zoneId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            kind: cdktf.stringToTerraform(this._kind),
            name: cdktf.stringToTerraform(this._name),
            source: cdktf.stringToTerraform(this._source),
            validation_enabled: cdktf.booleanToTerraform(this._validationEnabled),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            kind: {
                value: cdktf.stringToHclTerraform(this._kind),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: cdktf.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validation_enabled: {
                value: cdktf.booleanToHclTerraform(this._validationEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
