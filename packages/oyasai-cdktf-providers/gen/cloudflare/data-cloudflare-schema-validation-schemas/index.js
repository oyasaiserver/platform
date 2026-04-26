// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareSchemaValidationSchemasFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        validation_enabled: cdktf.booleanToTerraform(struct.validationEnabled),
    };
}
export function dataCloudflareSchemaValidationSchemasFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        validation_enabled: {
            value: cdktf.booleanToHclTerraform(struct.validationEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareSchemaValidationSchemasFilterOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._validationEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationEnabled = this._validationEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._validationEnabled = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._validationEnabled = value.validationEnabled;
        }
    }
    // validation_enabled - computed: false, optional: true, required: false
    _validationEnabled;
    get validationEnabled() {
        return this.getBooleanAttribute('validation_enabled');
    }
    set validationEnabled(value) {
        this._validationEnabled = value;
    }
    resetValidationEnabled() {
        this._validationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get validationEnabledInput() {
        return this._validationEnabled;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas cloudflare_schema_validation_schemas}
*/
export class DataCloudflareSchemaValidationSchemas extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_schema_validation_schemas";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareSchemaValidationSchemas resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSchemaValidationSchemas to import
    * @param importFromId The id of the existing DataCloudflareSchemaValidationSchemas that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSchemaValidationSchemas to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_schema_validation_schemas", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/schema_validation_schemas cloudflare_schema_validation_schemas} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSchemaValidationSchemasConfig = {}
    */
    constructor(scope, id, config = {}) {
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
        this._filter.internalValue = config.filter;
        this._omitSource = config.omitSource;
        this._schemaId = config.schemaId;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareSchemaValidationSchemasFilterOutputReference(this, "filter");
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // kind - computed: true, optional: false, required: false
    get kind() {
        return this.getStringAttribute('kind');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // omit_source - computed: true, optional: true, required: false
    _omitSource;
    get omitSource() {
        return this.getBooleanAttribute('omit_source');
    }
    set omitSource(value) {
        this._omitSource = value;
    }
    resetOmitSource() {
        this._omitSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get omitSourceInput() {
        return this._omitSource;
    }
    // schema_id - computed: true, optional: true, required: false
    _schemaId;
    get schemaId() {
        return this.getStringAttribute('schema_id');
    }
    set schemaId(value) {
        this._schemaId = value;
    }
    resetSchemaId() {
        this._schemaId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schemaIdInput() {
        return this._schemaId;
    }
    // source - computed: true, optional: false, required: false
    get source() {
        return this.getStringAttribute('source');
    }
    // validation_enabled - computed: true, optional: false, required: false
    get validationEnabled() {
        return this.getBooleanAttribute('validation_enabled');
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
            filter: dataCloudflareSchemaValidationSchemasFilterToTerraform(this._filter.internalValue),
            omit_source: cdktf.booleanToTerraform(this._omitSource),
            schema_id: cdktf.stringToTerraform(this._schemaId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            filter: {
                value: dataCloudflareSchemaValidationSchemasFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareSchemaValidationSchemasFilter",
            },
            omit_source: {
                value: cdktf.booleanToHclTerraform(this._omitSource),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            schema_id: {
                value: cdktf.stringToHclTerraform(this._schemaId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
