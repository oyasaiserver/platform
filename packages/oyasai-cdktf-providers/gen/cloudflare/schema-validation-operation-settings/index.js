// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_operation_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_operation_settings cloudflare_schema_validation_operation_settings}
*/
export class SchemaValidationOperationSettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_schema_validation_operation_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a SchemaValidationOperationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SchemaValidationOperationSettings to import
    * @param importFromId The id of the existing SchemaValidationOperationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_operation_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SchemaValidationOperationSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_schema_validation_operation_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/schema_validation_operation_settings cloudflare_schema_validation_operation_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SchemaValidationOperationSettingsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_schema_validation_operation_settings',
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
        this._mitigationAction = config.mitigationAction;
        this._operationId = config.operationId;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // mitigation_action - computed: false, optional: false, required: true
    _mitigationAction;
    get mitigationAction() {
        return this.getStringAttribute('mitigation_action');
    }
    set mitigationAction(value) {
        this._mitigationAction = value;
    }
    // Temporarily expose input value. Use with caution.
    get mitigationActionInput() {
        return this._mitigationAction;
    }
    // operation_id - computed: false, optional: false, required: true
    _operationId;
    get operationId() {
        return this.getStringAttribute('operation_id');
    }
    set operationId(value) {
        this._operationId = value;
    }
    // Temporarily expose input value. Use with caution.
    get operationIdInput() {
        return this._operationId;
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
            mitigation_action: cdktf.stringToTerraform(this._mitigationAction),
            operation_id: cdktf.stringToTerraform(this._operationId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            mitigation_action: {
                value: cdktf.stringToHclTerraform(this._mitigationAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            operation_id: {
                value: cdktf.stringToHclTerraform(this._operationId),
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
