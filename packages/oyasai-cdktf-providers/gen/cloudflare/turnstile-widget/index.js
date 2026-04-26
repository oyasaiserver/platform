// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget cloudflare_turnstile_widget}
*/
export class TurnstileWidget extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_turnstile_widget";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TurnstileWidget to import
    * @param importFromId The id of the existing TurnstileWidget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TurnstileWidget to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_turnstile_widget", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget cloudflare_turnstile_widget} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TurnstileWidgetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_turnstile_widget',
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
        this._accountId = config.accountId;
        this._botFightMode = config.botFightMode;
        this._clearanceLevel = config.clearanceLevel;
        this._domains = config.domains;
        this._ephemeralId = config.ephemeralId;
        this._mode = config.mode;
        this._name = config.name;
        this._offlabel = config.offlabel;
        this._region = config.region;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // bot_fight_mode - computed: true, optional: true, required: false
    _botFightMode;
    get botFightMode() {
        return this.getBooleanAttribute('bot_fight_mode');
    }
    set botFightMode(value) {
        this._botFightMode = value;
    }
    resetBotFightMode() {
        this._botFightMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get botFightModeInput() {
        return this._botFightMode;
    }
    // clearance_level - computed: true, optional: true, required: false
    _clearanceLevel;
    get clearanceLevel() {
        return this.getStringAttribute('clearance_level');
    }
    set clearanceLevel(value) {
        this._clearanceLevel = value;
    }
    resetClearanceLevel() {
        this._clearanceLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clearanceLevelInput() {
        return this._clearanceLevel;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // domains - computed: false, optional: false, required: true
    _domains;
    get domains() {
        return this.getListAttribute('domains');
    }
    set domains(value) {
        this._domains = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainsInput() {
        return this._domains;
    }
    // ephemeral_id - computed: true, optional: true, required: false
    _ephemeralId;
    get ephemeralId() {
        return this.getBooleanAttribute('ephemeral_id');
    }
    set ephemeralId(value) {
        this._ephemeralId = value;
    }
    resetEphemeralId() {
        this._ephemeralId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ephemeralIdInput() {
        return this._ephemeralId;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // mode - computed: false, optional: false, required: true
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
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
    // offlabel - computed: true, optional: true, required: false
    _offlabel;
    get offlabel() {
        return this.getBooleanAttribute('offlabel');
    }
    set offlabel(value) {
        this._offlabel = value;
    }
    resetOfflabel() {
        this._offlabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get offlabelInput() {
        return this._offlabel;
    }
    // region - computed: true, optional: true, required: false
    _region;
    get region() {
        return this.getStringAttribute('region');
    }
    set region(value) {
        this._region = value;
    }
    resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionInput() {
        return this._region;
    }
    // secret - computed: true, optional: false, required: false
    get secret() {
        return this.getStringAttribute('secret');
    }
    // sitekey - computed: true, optional: false, required: false
    get sitekey() {
        return this.getStringAttribute('sitekey');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bot_fight_mode: cdktf.booleanToTerraform(this._botFightMode),
            clearance_level: cdktf.stringToTerraform(this._clearanceLevel),
            domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
            ephemeral_id: cdktf.booleanToTerraform(this._ephemeralId),
            mode: cdktf.stringToTerraform(this._mode),
            name: cdktf.stringToTerraform(this._name),
            offlabel: cdktf.booleanToTerraform(this._offlabel),
            region: cdktf.stringToTerraform(this._region),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bot_fight_mode: {
                value: cdktf.booleanToHclTerraform(this._botFightMode),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            clearance_level: {
                value: cdktf.stringToHclTerraform(this._clearanceLevel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domains: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            ephemeral_id: {
                value: cdktf.booleanToHclTerraform(this._ephemeralId),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            mode: {
                value: cdktf.stringToHclTerraform(this._mode),
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
            offlabel: {
                value: cdktf.booleanToHclTerraform(this._offlabel),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            region: {
                value: cdktf.stringToHclTerraform(this._region),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
