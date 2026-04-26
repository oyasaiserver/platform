// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy cloudflare_page_shield_policy}
*/
export class PageShieldPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_page_shield_policy";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a PageShieldPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PageShieldPolicy to import
    * @param importFromId The id of the existing PageShieldPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PageShieldPolicy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_policy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/page_shield_policy cloudflare_page_shield_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PageShieldPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_page_shield_policy',
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
        this._action = config.action;
        this._description = config.description;
        this._enabled = config.enabled;
        this._expression = config.expression;
        this._value = config.value;
        this._zoneId = config.zoneId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // action - computed: false, optional: false, required: true
    _action;
    get action() {
        return this.getStringAttribute('action');
    }
    set action(value) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    get actionInput() {
        return this._action;
    }
    // description - computed: false, optional: false, required: true
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // enabled - computed: false, optional: false, required: true
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // expression - computed: false, optional: false, required: true
    _expression;
    get expression() {
        return this.getStringAttribute('expression');
    }
    set expression(value) {
        this._expression = value;
    }
    // Temporarily expose input value. Use with caution.
    get expressionInput() {
        return this._expression;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
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
            action: cdktf.stringToTerraform(this._action),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            expression: cdktf.stringToTerraform(this._expression),
            value: cdktf.stringToTerraform(this._value),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            action: {
                value: cdktf.stringToHclTerraform(this._action),
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
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            expression: {
                value: cdktf.stringToHclTerraform(this._expression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value: {
                value: cdktf.stringToHclTerraform(this._value),
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
