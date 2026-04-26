// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema_validation_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema_validation_settings cloudflare_api_shield_schema_validation_settings}
*/
export class ApiShieldSchemaValidationSettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_api_shield_schema_validation_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ApiShieldSchemaValidationSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShieldSchemaValidationSettings to import
    * @param importFromId The id of the existing ApiShieldSchemaValidationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema_validation_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShieldSchemaValidationSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_schema_validation_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_schema_validation_settings cloudflare_api_shield_schema_validation_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldSchemaValidationSettingsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_api_shield_schema_validation_settings',
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
        this._validationDefaultMitigationAction = config.validationDefaultMitigationAction;
        this._validationOverrideMitigationAction = config.validationOverrideMitigationAction;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // validation_default_mitigation_action - computed: false, optional: false, required: true
    _validationDefaultMitigationAction;
    get validationDefaultMitigationAction() {
        return this.getStringAttribute('validation_default_mitigation_action');
    }
    set validationDefaultMitigationAction(value) {
        this._validationDefaultMitigationAction = value;
    }
    // Temporarily expose input value. Use with caution.
    get validationDefaultMitigationActionInput() {
        return this._validationDefaultMitigationAction;
    }
    // validation_override_mitigation_action - computed: false, optional: true, required: false
    _validationOverrideMitigationAction;
    get validationOverrideMitigationAction() {
        return this.getStringAttribute('validation_override_mitigation_action');
    }
    set validationOverrideMitigationAction(value) {
        this._validationOverrideMitigationAction = value;
    }
    resetValidationOverrideMitigationAction() {
        this._validationOverrideMitigationAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get validationOverrideMitigationActionInput() {
        return this._validationOverrideMitigationAction;
    }
    // zone_id - computed: false, optional: false, required: true
    _zoneId;
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    set zoneId(value) {
        this._zoneId = value;
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
            validation_default_mitigation_action: cdktf.stringToTerraform(this._validationDefaultMitigationAction),
            validation_override_mitigation_action: cdktf.stringToTerraform(this._validationOverrideMitigationAction),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            validation_default_mitigation_action: {
                value: cdktf.stringToHclTerraform(this._validationDefaultMitigationAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validation_override_mitigation_action: {
                value: cdktf.stringToHclTerraform(this._validationOverrideMitigationAction),
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
