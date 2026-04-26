// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_discovery_operation
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_discovery_operation cloudflare_api_shield_discovery_operation}
*/
export class ApiShieldDiscoveryOperation extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_api_shield_discovery_operation";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ApiShieldDiscoveryOperation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiShieldDiscoveryOperation to import
    * @param importFromId The id of the existing ApiShieldDiscoveryOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_discovery_operation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiShieldDiscoveryOperation to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_api_shield_discovery_operation", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/api_shield_discovery_operation cloudflare_api_shield_discovery_operation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiShieldDiscoveryOperationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_api_shield_discovery_operation',
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
        this._operationId = config.operationId;
        this._state = config.state;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // state - computed: false, optional: true, required: false
    _state;
    get state() {
        return this.getStringAttribute('state');
    }
    set state(value) {
        this._state = value;
    }
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stateInput() {
        return this._state;
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
            operation_id: cdktf.stringToTerraform(this._operationId),
            state: cdktf.stringToTerraform(this._state),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            operation_id: {
                value: cdktf.stringToHclTerraform(this._operationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            state: {
                value: cdktf.stringToHclTerraform(this._state),
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
